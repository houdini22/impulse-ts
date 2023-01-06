const {
  NetworkBuilder: { NetworkBuilder1D },
  Layer: { LogisticLayer, ReluLayer },
  DatasetBuilder: { DatasetBuilder },
  Optimizer: { OptimizerGradientDescent, OptimizerAdam, OptimizerMomentum, OptimizerRMSProp },
  Trainer: { MiniBatchTrainer, Trainer },
  Computation: { ComputationCPU, setComputation },
  DatasetModifier: { MinMaxScalingDatasetModifier, MissingDataScalingDatasetModifier, ShuffleDatasetModifier },
  DatasetBuilderSource: { DatasetBuilderSourceCSV },
} = require("../dist/impulse-ts.dev");
const path = require("path");

setComputation(new ComputationCPU());

const builder = new NetworkBuilder1D([20*20]);
builder
  .createLayer(ReluLayer, (layer) => {
    layer.setSize(100);
  })
  .createLayer(LogisticLayer, (layer) => {
    layer.setSize(10);
  });

const network = builder.getNetwork();

DatasetBuilder.fromSource(
  DatasetBuilderSourceCSV.fromLocalFile(path.resolve(__dirname, "./data/mnist_20x20_x.csv"))
).then(async (inputDataset) => {
  console.log("Loaded mnist_20x20_x.csv");
  DatasetBuilder.fromSource(
    DatasetBuilderSourceCSV.fromLocalFile(path.resolve(__dirname, "./data/mnist_20x20_y.csv"))
  ).then(async (outputDataset) => {
    console.log("Loaded mnist_20x20_y.csv");

    inputDataset = new MinMaxScalingDatasetModifier().apply(inputDataset);
    //inputDataset = new MissingDataScalingDatasetModifier().apply(inputDataset);
    const shuffle = new ShuffleDatasetModifier(inputDataset);
    inputDataset = shuffle.apply(inputDataset);
    outputDataset = shuffle.apply(outputDataset);

    const trainer = new Trainer(network, new OptimizerAdam());

    const result = network.forward(inputDataset.exampleAt(0));
    console.log("forward", result, outputDataset.exampleAt(0));
    let startTime = new Date().getTime();
    console.log(trainer.cost(inputDataset, outputDataset));
    let endTime = new Date().getTime();
    console.log(endTime - startTime);

    //trainer.setBatchSize(200);
    trainer.setIterations(250);
    trainer.setLearningRate(0.0005);
    trainer.setRegularization(0.1);
    /*trainer.setStepCallback(() => {
      console.log(
        network.forward(inputDataset.exampleAt(0)).colMaxCoeffIndex(0),
        outputDataset.exampleAt(0).colMaxCoeffIndex(0)
      );
    });*/
    trainer.train(inputDataset, outputDataset);

    await network.save(path.resolve(__dirname, "./data/iris.json"));
    console.log(trainer.cost(inputDataset, outputDataset));
    console.log(network.forward(inputDataset.exampleAt(0)), outputDataset.exampleAt(0));
  });
});
