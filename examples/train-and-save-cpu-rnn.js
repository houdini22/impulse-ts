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
  const network = new NetworkRNN([dataset.getVocabularySize(), 40, 40]);
  const [X, Y] = dataset.buildData(40, 3);
  const [x, y] = dataset.vectorization(X, Y);
  const layer = new RNNLayer().setWidth(dataset.getVocabularySize()).setHeight(40).setDepth(40);
  layer.configure();
  network.addLayer(layer);

  const trainer = new RNNTrainer(network).setIterations(35000);
  //
  console.log("Generating 5 samples...:\n");
  console.log(network.sample(dataset).trim());
  console.log(network.sample(dataset).trim());
  console.log(network.sample(dataset).trim());
  console.log(network.sample(dataset).trim());
  console.log(network.sample(dataset).trim());
  console.log(trainer.train(dataset));
  //network.sample(dataset.getCharIndices());
});
