const {
  NetworkBuilder: { NetworkBuilder1D },
  Layer: { LogisticLayer, ReluLayer },
  DatasetBuilder: { DatasetBuilder },
  Optimizer: { OptimizerGradientDescent, OptimizerMomentum },
  Trainer: { Trainer },
  Computation: { ComputationCPU, setComputation },
  DatasetBuilderSource: { DatasetBuilderSourceCSV },
  DatasetModifier: { MissingDataScalingDatabaseModifier, MinMaxScalingDatabaseModifier },
} = require("../dist/impulse-ts.dev");
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
        console.log("Loaded iris_y.csv");
        console.log("forward", network.forward(inputDataset.exampleAt(0)));
        inputDataset = new MissingDataScalingDatabaseModifier(inputDataset).apply();
        inputDataset = new MinMaxScalingDatabaseModifier(inputDataset).apply();
        console.log("forward", network.forward(inputDataset.exampleAt(0)));
        const trainer = new Trainer(network, new OptimizerGradientDescent());
        trainer.setIterations(2000);
        trainer.setLearningRate(0.05);
        trainer.setRegularization(0.1);
        console.log("cost", trainer.cost(inputDataset.data, outputDataset.data));
        trainer.train(inputDataset, outputDataset);
        await network.save(path.resolve(__dirname, "./data/iris.json"));
        console.log("forward", network.forward(inputDataset.exampleAt(0)), outputDataset.exampleAt(0));
      }
    );
  }
);
