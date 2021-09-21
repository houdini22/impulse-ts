const {
  Network: { NetworkRNN },
  Layer: { RecurrentLayer },
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
  const layer = new RecurrentLayer()
    .setWidth(100)
    .setHeight(dataset.getVocabularySize())
    .setDepth(dataset.getVocabularySize());
  layer.configure();
  /*const [aNext, y] = layer.forward(
    new Matrix(3, 10).setRandom(),
    new Matrix(5, 10).setRandom(),
    new Matrix(5, 10).setRandom()
  );
  layer.backward(
    new Matrix(5, 10).setRandom(),
    layer.X[layer.X.length - 1],
    layer.A[layer.A.length - 1],
    layer.A[layer.A.length - 1]
  );*/
  network.addLayer(layer);

  const [X, Y] = dataset.buildData(100);
  const [x, y] = dataset.vectorization(X, Y);
  const [loss] = network.forward(x, y, new Matrix(100, 100).setZeros());
  console.log(`Loss: ${loss}`);
  const trainer = new RNNTrainer(network).setIterations(35000);
  trainer.train(dataset);
});
