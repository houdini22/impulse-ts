const {
  NetworkBuilder: { NetworkBuilder1D },
  Layer: { LogisticLayer },
  DatasetBuilder: { DatasetBuilder },
  Optimizer: { OptimizerGradientDescent },
  Trainer: { MiniBatchTrainer },
  Computation: { ComputationCPU, setComputation },
  DatasetBuilderSource: { DatasetBuilderSourceCSV },
  DatasetModifier: { MissingDataScalingDatabaseModifier, MinMaxScalingDatabaseModifier },
} = require("../dist/impulse-ts.dev");
const path = require("path");

setComputation(new ComputationCPU());

const builder = new NetworkBuilder1D([4]);
builder
  .createLayer(LogisticLayer, (layer) => {
    layer.setSize(20);
  })
  .createLayer(LogisticLayer, (layer) => {
    layer.setSize(15);
  })
  .createLayer(LogisticLayer, (layer) => {
    layer.setSize(10);
  })
  .createLayer(LogisticLayer, (layer) => {
    layer.setSize(3);
  });

const network = builder.getNetwork();

DatasetBuilder.fromCSV(path.resolve(__dirname, "./data/iris_x.csv")).then((inputDataset) => {
  console.log("Loaded iris_x.csv");
  DatasetBuilder.fromCSV(path.resolve(__dirname, "./data/iris_y.csv")).then(async (outputDataset) => {
    console.log("Loaded iris_y.csv");
    console.log("forward", network.forward(inputDataset.exampleAt(0)));
    inputDataset = new MissingDataScalingDatabaseModifier(inputDataset).apply();
    inputDataset = new MinMaxScalingDatabaseModifier(inputDataset).apply();
    console.log("forward", network.forward(inputDataset.exampleAt(0)));
    const trainer = new MiniBatchTrainer(network, new OptimizerGradientDescent());
    trainer.setIterations(2);
    trainer.setBatchSize(10);
    trainer.setLearningRate(0.00001);
    console.log("cost", trainer.cost(inputDataset, outputDataset));
    trainer.train(inputDataset, outputDataset);
    await network.save(path.resolve(__dirname, "./data/iris.json"));
    console.log("forward", network.forward(inputDataset.exampleAt(0)), outputDataset.exampleAt(0));
  });
});
