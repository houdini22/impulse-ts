const {
  NetworkBuilder: { NetworkBuilder1D },
  Layer: { LogisticLayer, ReluLayer, SoftmaxLayer },
  DatasetBuilder: { DatasetBuilder },
  Optimizer: { OptimizerAdam, OptimizerGradientDescent, OptimizerAdadelta, OptimizerMomentum },
  Trainer: { MiniBatchTrainer },
  Computation: { ComputationCPU, setComputation },
  DatasetModifier: { MinMaxScalingDatabaseModifier, MissingDataScalingDatabaseModifier },
} = require("../dist/impulse-ts.dev");
const path = require("path");

setComputation(new ComputationCPU());

const builder = new NetworkBuilder1D([400]);
builder
  .createLayer(LogisticLayer, (layer) => {
    layer.setSize(1000);
  })
  .createLayer(LogisticLayer, (layer) => {
    layer.setSize(500);
  })
  .createLayer(LogisticLayer, (layer) => {
    layer.setSize(200);
  })
  .createLayer(LogisticLayer, (layer) => {
    layer.setSize(10);
  });

const network = builder.getNetwork();

DatasetBuilder.fromCSV(path.resolve(__dirname, "./data/mnist_20x20_x.csv")).then(async (inputDataset) => {
  console.log("Loaded mnist_20x20_x.csv");

  DatasetBuilder.fromCSV(path.resolve(__dirname, "./data/mnist_20x20_y.csv")).then(async (outputDataset) => {
    console.log("Loaded mnist_20x20_y.csv");

    inputDataset = new MissingDataScalingDatabaseModifier(inputDataset).apply();
    inputDataset = new MinMaxScalingDatabaseModifier(inputDataset).apply();

    const trainer = new MiniBatchTrainer(network, new OptimizerGradientDescent());

    const result = network.forward(inputDataset.exampleAt(0));
    console.log("forward", result);

    console.log(trainer.cost(inputDataset, outputDataset));

    trainer.setIterations(10);
    trainer.setLearningRate(0.075);
    trainer.setBatchSize(100);
    trainer.setRegularization(0.2);
    trainer.train(inputDataset, outputDataset);

    await network.save(path.resolve(__dirname, "./data/mnist2.json"));
  });
});
