const {
  NetworkBuilder: { NetworkBuilder1D },
  Layer: { LogisticLayer, SoftmaxLayer, ReluLayer },
  DatasetBuilder: { DatasetBuilder },
  Optimizer: { OptimizerGradientDescent, OptimizerAdam, OptimizerMomentum },
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
        const trainer = new MiniBatchTrainer(network, new OptimizerGradientDescent());
        trainer.setIterations(5000);
        trainer.setBatchSize(10);
        trainer.setLearningRate(0.0007);
        trainer.setRegularization(0.7);
        console.log("cost", trainer.cost(inputDataset, outputDataset));
        trainer.train(inputDataset, outputDataset);
        await network.save(path.resolve(__dirname, "./data/iris.json"));
        console.log("forward", network.forward(inputDataset.exampleAt(0)), outputDataset.exampleAt(0));
      }
    );
  }
);
