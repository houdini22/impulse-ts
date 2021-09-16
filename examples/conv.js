const {
  NetworkBuilder: { NetworkBuilder3D },
  Layer: {
    LogisticLayer,
    ConvLayer,
    FullyConnectedLayer,
    MaxPoolLayer,
    TanhLayer,
  },
  DatasetBuilder: { DatasetBuilder },
} = require("../dist/impulse-ts.dev");
const path = require("path");

const builder = new NetworkBuilder3D([20, 20, 1]);
builder
  .createLayer(ConvLayer, (layer) => {
    layer.setFilterSize(4).setPadding(1).setStride(1).setNumFilters(32);
  })
  .createLayer(MaxPoolLayer, (layer) => {
    layer.setFilterSize(2).setStride(2);
  })
  .createLayer(ConvLayer, (layer) => {
    layer.setFilterSize(3).setPadding(1).setStride(1).setNumFilters(64);
  })
  .createLayer(MaxPoolLayer, (layer) => {
    layer.setFilterSize(2).setStride(2);
  })
  .createLayer(FullyConnectedLayer, (layer) => {})
  .createLayer(TanhLayer, (layer) => {
    layer.setSize([1024]);
  })
  .createLayer(TanhLayer, (layer) => {
    layer.setSize([256]);
  })
  .createLayer(LogisticLayer, (layer) => {
    layer.setSize([10]);
  });

const network = builder.getNetwork();

DatasetBuilder.fromCSV(path.resolve(__dirname, "./data/mnist_x.csv")).then(
  (inputDataset) => {
    console.log("Loaded mnist_x.csv");
    DatasetBuilder.fromCSV(path.resolve(__dirname, "./data/mnist_y.csv")).then(
      (outputDataset) => {
        console.log("Loaded mnist_y.csv");
        console.log(inputDataset, outputDataset, inputDataset.exampleAt(0));
        let timeStart = new Date().getTime();
        const result = network.forward(inputDataset.exampleAt(0));
        console.log("forward", result);
        let timeEnd = new Date().getTime();
        console.log(`${timeEnd - timeStart} ms`);

        timeStart = new Date().getTime();
        console.log(
          "loss",
          network.loss(network.forward(inputDataset.data), outputDataset.data)
        );
        timeEnd = new Date().getTime();
        console.log(`${timeEnd - timeStart} ms`);
      }
    );
  }
);
