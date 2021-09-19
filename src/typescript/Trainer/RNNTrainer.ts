import { NetworkRNN } from "../Network";
import { DatasetVocabulary } from "../Dataset/DatasetVocabulary";
import { Matrix } from "../Math/Matrix";

export class RNNTrainer {
  protected network: NetworkRNN | null = null;
  protected iterations: number = 1000;
  protected learningRate: number = 0.001;

  constructor(network: NetworkRNN) {
    this.network = network;
  }

  train(dataset: DatasetVocabulary): [number] {
    let loss = this.network.loss(dataset.getVocabularySize(), 7);
    const examples: string[] = dataset.getExamples();
    const indices = dataset.getCharIndices();

    let aPrev = new Matrix(100, 1).setRandom(1).abs().setMax(dataset.getVocabularySize()).setMin(0);

    for (let j = 0; j < this.iterations; j += 1) {
      console.log(`Iteration ${j + 1}`);
      const index = j % examples.length;
      const x = dataset.getExampleX(index);
      const y = dataset.getExampleY(index);
      const [_loss] = this.network.forward(x, y, aPrev);
      loss = _loss;
      this.network.backward(x, y);
      const [currentLoss, _aPrev] = this.network.optimize(x, y, aPrev, this.learningRate);
      aPrev = _aPrev;
      loss = loss * 0.999 + currentLoss * 0.001;
      console.log(`Iteration ${j + 1} | Loss: ${loss} | Sample: ${this.network.sample(dataset).trim()}`);
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
