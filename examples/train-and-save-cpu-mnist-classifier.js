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

const builder = new NetworkBuilder1D([400]);
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
    inputDataset = new MissingDataScalingDatasetModifier().apply(inputDataset);
    const shuffle = new ShuffleDatasetModifier(inputDataset);
    inputDataset = shuffle.apply(inputDataset);
    outputDataset = shuffle.apply(outputDataset);

    const trainer = new Trainer(network, new OptimizerAdam());
    const trainer2 = new MiniBatchTrainer(network, new OptimizerGradientDescent());

    const result = network.forward(inputDataset.exampleAt(0));
    console.log("forward", result);
    let startTime = new Date().getTime();
    console.log(trainer.cost(inputDataset, outputDataset));
    let endTime = new Date().getTime();
    console.log(endTime - startTime);
    startTime = new Date().getTime();
    console.log(trainer2.cost(inputDataset, outputDataset));
    endTime = new Date().getTime();
    console.log(endTime - startTime);

    trainer2.setBatchSize(100);
    trainer2.setIterations(100);
    trainer2.setLearningRate(0.1);
    trainer2.setRegularization(0.7);
    trainer2.setStepCallback(() => {
      console.log(network.forward(inputDataset.exampleAt(0)), outputDataset.exampleAt(0));
    });
    trainer2.train(inputDataset, outputDataset);

    await network.save(path.resolve(__dirname, "./data/mnist.json"));
    console.log(trainer2.cost(inputDataset, outputDataset));
    console.log(network.forward(inputDataset.exampleAt(0)), outputDataset.exampleAt(0));
  });
});
