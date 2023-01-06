const {
  NetworkBuilder: { NetworkBuilder1D },
  DatasetBuilder: { DatasetBuilder },
  Trainer: { MiniBatchTrainer },
  Optimizer: { OptimizerGradientDescent },
  DatasetBuilderSource: { DatasetBuilderSourceCSV },
} = require("../dist/impulse-ts.dev");
const path = require("path");
const timeStart = new Date().getTime();

NetworkBuilder1D.fromJSON(path.resolve(__dirname, "./data/mnist.json")).then((network) => {
  const timeEnd = new Date().getTime();
  console.log(`${timeEnd - timeStart} ms.`);

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
      console.log("forward", result);
      let timeEnd2 = new Date().getTime();
      console.log(`${timeEnd2 - timeStart} ms`);
      //const trainer = new MiniBatchTrainer(network, new OptimizerGradientDescent());

      //trainer.setIterations(10);
      //trainer.setLearningRate(0.001);
      //trainer.setBatchSize(100);
      //trainer.setRegularization(0.2);
      //trainer.train(inputDataset, outputDataset);

      //await network.save(path.resolve(__dirname, "./data/mnist2.json"));
    });
  });
});
