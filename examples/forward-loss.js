const {
  NetworkBuilder: { NetworkBuilder1D },
  DatasetBuilder: { DatasetBuilder },
  Layer: { LogisticLayer },
} = require("../dist/impulse-ts.dev");
const path = require("path");

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

DatasetBuilder.fromCSV(path.resolve(__dirname, "./data/mnist_x.csv")).then((inputDataset) => {
  console.log("Loaded mnist_x.csv");
  DatasetBuilder.fromCSV(path.resolve(__dirname, "./data/mnist_y.csv")).then((outputDataset) => {
    console.log("Loaded mnist_y.csv");
    let timeStart = new Date().getTime();
    const result = network.forward(inputDataset.exampleAt(0));
    console.log("forward propagation", result);
    let timeEnd = new Date().getTime();
    console.log(`${timeEnd - timeStart} ms`);

    timeStart = new Date().getTime();
    console.log("Calculating loss...");
    console.log("loss", network.loss(network.forward(inputDataset.data), outputDataset.data));
    timeEnd = new Date().getTime();
    console.log(`${timeEnd - timeStart} ms`);
  });
});
