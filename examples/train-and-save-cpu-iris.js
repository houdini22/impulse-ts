const {
  NetworkBuilder: { NetworkBuilder1D },
  Layer: { LogisticLayer, ReluLayer },
  Optimizer: { OptimizerGradientDescent, OptimizerMomentum },
  Trainer: { Trainer },
  Computation: { ComputationCPU, setComputation },
} = require("../dist/impulse-ts.dev");
const {
  DatasetBuilder: { DatasetBuilder },
  DatasetBuilderSource: { DatasetBuilderSourceCSV },
  DatasetModifier: { MinMaxScalingDatasetModifier, MissingDataScalingDatasetModifier, ShuffleDatasetModifier },
} = require("impulse-dataset-ts");
const path = require("path");

setComputation(new ComputationCPU());

const builder = new NetworkBuilder1D([4]);
builder
  .createLayer(ReluLayer, (layer) => {
    layer.setSize(10);
  })
  .createLayer(ReluLayer, (layer) => {
    layer.setSize(10);
  })
  .createLayer(LogisticLayer, (layer) => {
    layer.setSize(3);
  });

const network = builder.getNetwork();

DatasetBuilder.fromSource(DatasetBuilderSourceCSV.fromLocalFile(path.resolve(__dirname, "./data/iris_x.csv"))).then(
  async (inputDataset) => {
    console.log("Loaded iris_x.csv");
    DatasetBuilder.fromSource(DatasetBuilderSourceCSV.fromLocalFile(path.resolve(__dirname, "./data/iris_y.csv"))).then(
      async (outputDataset) => {
        console.log("forward", network.forward(inputDataset.exampleAt(0)));
        inputDataset = new MinMaxScalingDatasetModifier().apply(inputDataset);
        const trainer = new Trainer(network, new OptimizerGradientDescent());
        trainer.setIterations(750);
        trainer.setLearningRate(0.15);
        trainer.setRegularization(0.1);
        console.log("cost", trainer.cost(inputDataset, outputDataset));
        trainer.train(inputDataset, outputDataset);
        await network.save(path.resolve(__dirname, "./data/iris.json"));
        console.log("forward", network.forward(inputDataset.exampleAt(0)), outputDataset.exampleAt(0));
      }
    );
  }
);
