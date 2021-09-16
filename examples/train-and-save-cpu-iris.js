const {
  Builders: { Builder1D, Builder3D },
  Dataset: { DatasetBuilder },
  Layers: {
    LogisticLayer,
    ConvLayer,
    FullyConnectedLayer,
    MaxPoolLayer,
    PurelinLayer,
    ReluLayer,
    SoftmaxLayer,
    TanhLayer,
  },
  Optimizers: { OptimizerGradientDescent, OptimizerAdam },
  Trainers: { MiniBatchTrainer },
  Computations: { ComputationCPU, ComputationGPU, setComputation },
} = require("../dist/impulse-ts.dev");
const path = require("path");

setComputation(new ComputationCPU());

const builder = new Builder1D([4]);
builder
  .createLayer(LogisticLayer, (layer) => {
    layer.setSize([20]);
  })
  .createLayer(LogisticLayer, (layer) => {
    layer.setSize([15]);
  })
  .createLayer(LogisticLayer, (layer) => {
    layer.setSize([10]);
  })
  .createLayer(LogisticLayer, (layer) => {
    layer.setSize([3]);
  });

const network = builder.getNetwork();

DatasetBuilder.fromCSV(path.resolve(__dirname, "./data/iris_x.csv")).then(
  (inputDataset) => {
    console.log("Loaded iris_x.csv");
    DatasetBuilder.fromCSV(path.resolve(__dirname, "./data/iris_y.csv")).then(
      async (outputDataset) => {
        console.log("Loaded iris_y.csv");
        const trainer = new MiniBatchTrainer(network, new OptimizerAdam());
        trainer.setIterations(1);
        trainer.setBatchSize(10);
        trainer.train(inputDataset, outputDataset);
        await network.save(path.resolve(__dirname, "./data/iris.json"));
      }
    );
  }
);
