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
  const network = new NetworkRNN([100, dataset.getVocabularySize(), dataset.getVocabularySize()]);
  const layer = new RNNLayer()
    .setWidth(100)
    .setHeight(dataset.getVocabularySize())
    .setDepth(dataset.getVocabularySize());
  layer.configure();
  network.addLayer(layer);
  const trainer = new RNNTrainer(network).setIterations(35000);
  //console.log(`Generated sample: ${network.sample(dataset)}`);
  trainer.train(dataset);
});
