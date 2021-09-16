const {
  NetworkBuilder: { NetworkBuilder1D },
  DatasetBuilder: { DatasetBuilder },
} = require("../dist/impulse-ts.dev");
const path = require("path");
const timeStart = new Date().getTime();

NetworkBuilder1D.fromJSON(path.resolve(__dirname, "./data/mnist.json")).then(
  (network) => {
    const timeEnd = new Date().getTime();
    console.log(`${timeEnd - timeStart} ms.`);

    DatasetBuilder.fromCSV(path.resolve(__dirname, "./data/mnist_x.csv")).then(
      (inputDataset) => {
        console.log("Loaded mnist_x.csv");
        DatasetBuilder.fromCSV(
          path.resolve(__dirname, "./data/mnist_y.csv")
        ).then(async (outputDataset) => {
          console.log("Loaded mnist_y.csv");
          let timeStart = new Date().getTime();
          const result = network.forward(inputDataset.exampleAt(0));
          console.log("forward", result);
          let timeEnd2 = new Date().getTime();
          console.log(`${timeEnd2 - timeStart} ms`);
        });
      }
    );
  }
);
