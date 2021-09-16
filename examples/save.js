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
const timeStart = new Date().getTime();

const builder = new Builder1D([400]);
builder.createLayer(LogisticLayer, (layer) => {
  layer.setSize([1000]);
}).createLayer(LogisticLayer, (layer) => {
  layer.setSize([500]);
}).createLayer(LogisticLayer, (layer) => {
  layer.setSize([200]);
}).createLayer(SoftmaxLayer, (layer) => {
  layer.setSize([10]);
});

const network = builder.getNetwork();
network.save(path.resolve(__dirname, "./data/save.json")).then((content) => {});

const timeEnd = new Date().getTime();
console.log(`${timeEnd - timeStart} ms.`);
