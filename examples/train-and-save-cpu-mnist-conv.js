const {
  NetworkBuilder: { NetworkBuilder3D },
  Layer: { ConvLayer, FullyConnectedLayer, MaxPoolLayer, LogisticLayer, ReluLayer },
  DatasetBuilder: { DatasetBuilder },
  DatasetBuilderSource: { DatasetBuilderSourceCSV },
  Trainer: { MiniBatchTrainer },
  Optimizer: { OptimizerGradientDescent },
  DatasetModifier: { MinMaxScalingDatasetModifier, MissingDataScalingDatasetModifier, ShuffleDatasetModifier },
} = require("../dist/impulse-ts.dev");
const path = require("path");

const builder = new NetworkBuilder3D([20, 20, 1]);
builder
  .createLayer(ConvLayer, (layer) => {
    layer.setFilterSize(5).setPadding(2).setStride(1).setNumFilters(32);
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
  .createLayer(ReluLayer, (layer) => {
    layer.setSize(1024);
  })
  .createLayer(ReluLayer, (layer) => {
    layer.setSize(256);
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

    inputDataset = new MinMaxScalingDatasetModifier().apply(inputDataset);
    inputDataset = new MissingDataScalingDatasetModifier().apply(inputDataset);
    const shuffle = new ShuffleDatasetModifier(inputDataset);
    inputDataset = shuffle.apply(inputDataset);
    outputDataset = shuffle.apply(outputDataset);

    const trainer = new MiniBatchTrainer(network, new OptimizerGradientDescent());

    const result = network.forward(inputDataset.exampleAt(0));
    console.log("forward", result);

    console.log(trainer.cost(inputDataset, outputDataset));

    trainer.setIterations(100);
    trainer.setLearningRate(0.02);
    trainer.setRegularization(0.7);
    trainer.setStepCallback(() => {
      console.log(
        network.forward(inputDataset.exampleAt(0)).colMaxCoeffIndex(0),
        outputDataset.exampleAt(0).colMaxCoeffIndex(0)
      );
    });
    trainer.train(inputDataset, outputDataset);

    await network.save(path.resolve(__dirname, "./data/mnist.json"));
    console.log(trainer.cost(inputDataset, outputDataset));
    console.log(network.forward(inputDataset.exampleAt(0)), outputDataset.exampleAt(0));
  });
});
