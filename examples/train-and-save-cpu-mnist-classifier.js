const {
  NetworkBuilder: { NetworkBuilder1D },
  Layer: { LogisticLayer, ReluLayer, SoftmaxLayer, TanhLayer },
  DatasetBuilder: { DatasetBuilder },
  Optimizer: { OptimizerAdam, OptimizerGradientDescent, OptimizerAdagrad, OptimizerMomentum },
  Trainer: { MiniBatchTrainer, Trainer },
  Computation: { ComputationCPU, setComputation },
  DatasetModifier: { MinMaxScalingDatabaseModifier, MissingDataScalingDatabaseModifier },
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

    inputDataset = new MissingDataScalingDatabaseModifier(inputDataset).apply();
    inputDataset = new MinMaxScalingDatabaseModifier(inputDataset).apply();

    const trainer = new Trainer(network, new OptimizerGradientDescent());

    const result = network.forward(inputDataset.exampleAt(0));
    console.log("forward", result);

    console.log(trainer.cost(inputDataset.data, outputDataset.data));

    trainer.setIterations(500);
    trainer.setLearningRate(0.1);
    //trainer.setBatchSize(100);
    trainer.setRegularization(0.7);
    trainer.setStepCallback(() => {
      console.log(network.forward(inputDataset.exampleAt(0)));
    });
    trainer.train(inputDataset, outputDataset);

    await network.save(path.resolve(__dirname, "./data/mnist.json"));
    console.log(trainer.cost(inputDataset.data, outputDataset.data));
    console.log(network.forward(inputDataset.exampleAt(0)), outputDataset.exampleAt(0));
  });
});
