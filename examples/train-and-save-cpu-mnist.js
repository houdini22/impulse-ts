const {
  NetworkBuilder: { NetworkBuilder1D },
  Layer: { LogisticLayer },
  DatasetBuilder: { DatasetBuilder },
  Optimizer: { OptimizerAdam },
  Trainer: { MiniBatchTrainer },
  Computation: { ComputationCPU, setComputation },
} = require("../dist/impulse-ts.dev");
const path = require("path");

setComputation(new ComputationCPU());

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
  DatasetBuilder.fromCSV(path.resolve(__dirname, "./data/mnist_y.csv")).then(async (outputDataset) => {
    console.log("Loaded mnist_y.csv");
    const trainer = new MiniBatchTrainer(network, new OptimizerAdam());
    trainer.setIterations(3);
    trainer.train(inputDataset, outputDataset);
    await network.save(path.resolve(__dirname, "./data/mnist.json"));
  });
});
