const {
  DatasetBuilder: { DatasetBuilder },
  Computation: { ComputationCPU, setComputation },
  DatasetBuilderSource: { DatasetBuilderSourceCSV },
  DatasetModifier: { MinMaxScalingDatabaseModifier, MissingDataScalingDatabaseModifier },
} = require("../dist/impulse-ts.dev");
const path = require("path");

setComputation(new ComputationCPU());

DatasetBuilder.fromCSV(path.resolve(__dirname, "./data/mnist_20x20_x.csv")).then((inputDataset) => {
  for (let row = 0; row < inputDataset.getExampleSize(); row += 1) {
    for (let col = 0; col < inputDataset.getNumberOfExamples(); col += 1) {
      if (Number.isNaN(inputDataset.data.data[row][col]) || typeof inputDataset.data.data[row][col] === "undefined") {
        console.log(`bad row ${row} ${col}`);
      }
    }
  }
  inputDataset = new MissingDataScalingDatabaseModifier(inputDataset).apply();
  console.log(inputDataset.data.data[0]);
  for (let row = 0; row < inputDataset.getExampleSize(); row += 1) {
    for (let col = 0; col < inputDataset.getNumberOfExamples(); col += 1) {
      if (Number.isNaN(inputDataset.data.data[row][col]) || typeof inputDataset.data.data[row][col] === "undefined") {
        console.log(`bad row ${row} ${col}`);
      }
    }
  }
  //inputDataset = new MinMaxScalingDatabaseModifier(inputDataset).apply();
});
