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

    const [X, Y] = dataset.buildData(100);
    const [x, y] = dataset.vectorization(X, Y);

    let aPrev = new Matrix(this.network.getDimensions()[0], this.network.getDimensions()[0]).setZeros();

    for (let iteration = 0; iteration < this.iterations; iteration += 1) {
      const index = iteration % x.length;
      const [_loss] = this.network.forward(x[index], y, aPrev);
      loss = _loss;
      const [currentLoss, _aPrev] = this.network.optimize(x[index], y, aPrev, this.learningRate);
      aPrev = _aPrev;
      loss = loss * 0.999 + currentLoss * 0.001;
      console.log(`Iteration ${iteration + 1} | Loss: ${loss} | Sample: ${this.network.sample(dataset).trim()}`);
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
