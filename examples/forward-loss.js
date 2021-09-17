const {
  NetworkBuilder: { NetworkBuilder1D },
  DatasetBuilder: { DatasetBuilder },
  DatasetBuilderSource: { DatasetBuilderSourceCSV },
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

DatasetBuilder.fromSource(
  DatasetBuilderSourceCSV.fromLocalFile(path.resolve(__dirname, "./data/mnist_20x20_x.csv"))
).then(async (inputDataset) => {
  console.log("Loaded mnist_20x20_x.csv");
  DatasetBuilder.fromSource(
    DatasetBuilderSourceCSV.fromLocalFile(path.resolve(__dirname, "./data/mnist_20x20_y.csv"))
  ).then(async (outputDataset) => {
    console.log("Loaded mnist_20x20_y.csv");
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
