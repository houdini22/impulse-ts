const {
  NetworkBuilder: { NetworkBuilder1D },
  Layer: { LogisticLayer },
  DatasetBuilder: { DatasetBuilder },
  Optimizer: { OptimizerGradientDescent },
  Trainer: { MiniBatchTrainer },
  Computation: { ComputationCPU, setComputation },
  DatasetBuilderSource: { DatasetBuilderSourceCSV },
} = require("../dist/impulse-ts.dev");
const path = require("path");

// its not working
DatasetBuilder.fromSource(DatasetBuilderSourceCSV.fromLocalFile(path.resolve(__dirname, "./data/iris_x.csv"))).then(
  (inputDataset) => {
    console.log(inputDataset);
  }
);
