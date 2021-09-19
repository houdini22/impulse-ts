const {
  Network: { NetworkRNN },
  Layer: { RNNLayer },
  DatasetBuilder: { DatasetVocabularyBuilder },
  DatasetBuilderSource: { DatasetVocabularyBuilderSourceTextFile },
} = require("../dist/impulse-ts.dev");
const path = require("path");

DatasetVocabularyBuilder.fromSource(
  DatasetVocabularyBuilderSourceTextFile.fromLocalFile(path.resolve(__dirname, "./data/dinos.txt"))
).then(async (dataset) => {
  const nX = dataset.getVocabularySize();
  const nY = dataset.getVocabularySize();
  const nA = 100;

  const network = new NetworkRNN([nA, nX, nY]);
  const layer = new RNNLayer().setWidth(nA).setHeight(nX).setDepth(nY);
  layer.configure();
  network.addLayer(layer);

  const [X, Y] = dataset.buildData(40, 3);
  const [x, y] = dataset.vectorization(X, Y, dataset.getCharsLength());

  //network.sample(dataset.getCharIndices());
});
