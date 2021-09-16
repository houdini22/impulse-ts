const {
  Builders: { Builder1D },
  Dataset: { DatasetBuilder },
  Layers: { LogisticLayer, SoftmaxLayer },
  Optimizers: { OptimizerGradientDescent, OptimizerAdam },
  Trainers: { MiniBatchTrainer },
  Computations: { ComputationGPU, setComputation },
} = require("../dist/impulse-ts.dev");
const path = require("path");

setComputation(new ComputationGPU());

const builder = new Builder1D([400]);
builder.createLayer(LogisticLayer, (layer) => {
  layer.setSize([1000]);
}).createLayer(LogisticLayer, (layer) => {
  layer.setSize([500]);
}).createLayer(LogisticLayer, (layer) => {
  layer.setSize([200]);
}).createLayer(LogisticLayer, (layer) => {
  layer.setSize([10]);
});

const network = builder.getNetwork();

DatasetBuilder.fromCSV(path.resolve(__dirname, "./data/mnist_x.csv")).then(
  (inputDataset) => {
    console.log("Loaded mnist_x.csv");
    DatasetBuilder.fromCSV(path.resolve(__dirname, "./data/mnist_y.csv")).then(
      (outputDataset) => {
        console.log("Loaded mnist_y.csv");
        const trainer = new MiniBatchTrainer(network, new OptimizerAdam());
        trainer.train(inputDataset, outputDataset);
      }
    );
  }
);
