const {
  Network: { NetworkRNN },
  Layer: { RNNLayer },
  Trainer: { RNNTrainer },
  Math: { Matrix },
  DatasetBuilder: { DatasetVocabularyBuilder },
  DatasetBuilderSource: { DatasetVocabularyBuilderSourceTextFile },
} = require("../dist/impulse-ts.dev");
const path = require("path");

DatasetVocabularyBuilder.fromSource(
  DatasetVocabularyBuilderSourceTextFile.fromLocalFile(path.resolve(__dirname, "./data/dinos.txt"))
).then(async (dataset) => {
  console.log("Vocabulary size: ", dataset.getVocabularySize());
  console.log("Chars size: ", dataset.getCharsLength());
  const network = new NetworkRNN([27, dataset.getExamples().length, 20]);
  const layer = new RNNLayer().setWidth(27).setHeight(dataset.getExamples().length).setDepth(40);
  layer.configure();
  network.addLayer(layer);

  const trainer = new RNNTrainer(network).setIterations(35000);
  //
  console.log("Generating 1 sample...:\n");
  console.log(network.sample(dataset).trim());
  console.log(trainer.train(dataset));

  /*const aPrev = new Matrix(100, 1)
    .setRandom(1 / ((dataset.getVocabularySize() * dataset.getVocabularySize()) / 2))
    .abs()
    .setMax(dataset.getVocabularySize())
    .setMin(0);
  const _X = [12, 3, 5, 11, 22, 3];
  const _Y = [4, 14, 11, 22, 25, 26];
  const cols = 27;
  const __X = [new Matrix(_X.length, cols).setZeros()];
  const __Y = new Matrix(_Y.length, cols).setZeros();
  _X.forEach((x, i) => {
    __X[0].data[i][x] = 1;
  });
  _Y.forEach((y, i) => {
    __Y.data[i][y] = 1;
  });
  //console.log(__X, __Y, aPrev);
  const [loss, aLast] = network.optimize(__X, __Y, aPrev, 0.01);
  console.log(loss);*/
});
