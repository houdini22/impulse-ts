import { NetworkRNN } from "../Network";
import { DatasetVocabulary } from "../Dataset/DatasetVocabulary";
import { Matrix } from "../Math/Matrix";

export class RNNTrainer {
  protected network: NetworkRNN | null = null;
  protected iterations: number = 1000;
  protected learningRate: number = 0.01;

  constructor(network: NetworkRNN) {
    this.network = network;
  }

  train(dataset: DatasetVocabulary): [number] {
    let loss = this.network.loss(dataset.getVocabularySize(), 7);
    const examples: string[] = dataset.getExamples();
    const indices = dataset.getCharIndices();

    const [X, Y] = dataset.buildData(40);
    const [x, y] = dataset.vectorization(X, Y);
    let aPrev = new Matrix(dataset.getCharsLength(), 1).setZeros();

    console.log(y.shape(), x.length, x[0].shape());

    for (let j = 0; j < this.iterations; j += 1) {
      console.log(`Iteration ${j + 1}`);
      const [_loss] = this.network.forward(x, y, aPrev);
      loss = _loss;
      this.network.backward(x, y);
      const [currentLoss, _aPrev] = this.network.optimize(x, y, aPrev, this.learningRate);
      console.log(_loss, currentLoss);
      aPrev = _aPrev;
      loss = loss * 0.999 + currentLoss * 0.001;
      if (j % 10 === 0) {
        console.log("Loss: ", loss, ", sample: ", this.network.sample(dataset));
      }
    }
    return [loss];
  }

  setIterations(num: number): RNNTrainer {
    this.iterations = num;
    return this;
  }

  setLearningRate(num: number): RNNTrainer {
    this.learningRate = num;
    return this;
  }
}
