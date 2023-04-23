import { NetworkRNN } from "../Network";
import { DatasetVocabulary } from "impulse-dataset-ts/src/typescript/Dataset/DatasetVocabulary";
import { Matrix } from "impulse-math-ts";

export class RNNTrainer {
  protected network: NetworkRNN | null = null;
  protected iterations: number = 1000;
  protected learningRate: number = 0.01;

  constructor(network: NetworkRNN) {
    this.network = network;
  }

  train(dataset: DatasetVocabulary): [number] {
    let smoothLoss = -Math.log(1 / dataset.getVocabularySize()) * 100;

    const [X, Y] = dataset.buildData(this.network.getDimensions()[0]);
    const [x, y] = dataset.vectorization(X, Y);

    const aPrev = new Matrix(this.network.getDimensions()[0], this.network.getDimensions()[0]).setZeros();

    const hs = {};
    const ys = {};
    hs[-1] = new Matrix(this.network.getDimensions()[0], this.network.getDimensions()[0]).setZeros();

    let mWxh = new Matrix(this.network.getDimensions()[0], this.network.getDimensions()[1]).setZeros();
    let mWhh = new Matrix(this.network.getDimensions()[0], this.network.getDimensions()[0]).setZeros();
    let mWhy = new Matrix(this.network.getDimensions()[1], this.network.getDimensions()[0]).setZeros();
    let mbh = new Matrix(this.network.layers[0].dwB.rows, this.network.layers[0].dwB.cols).setZeros();
    let mby = new Matrix(this.network.layers[0].dwBY.rows, this.network.layers[0].dwBY.cols).setZeros();

    for (let iteration = 0; iteration < this.iterations; iteration += 1) {
      let _loss = 0;
      for (let i = 0; i < X.length; i += 1) {
        const { aNext, y: _y, loss } = this.network.forward(x[i], y[i], aPrev);
        hs[i] = aNext;
        ys[i] = _y;

        if ((i + 1) % 1000 === 0) {
          console.log(`FORWARD Example ${i + 1} | Iteration ${iteration + 1}`);
        }

        _loss += loss;
      }

      //smoothLoss = smoothLoss * 0.999 + _loss * 0.001;
      console.log(`Loss ${_loss}`);

      for (let i = X.length - 1; i >= 0; i -= 1) {
        const dy = Matrix.from(ys[i].data);
        for (let row = 0; row < dy.rows; row += 1) {
          dy.data[row][x[i].transpose().rowMaxCoeffIndex(row)] -= 1;
        }

        this.network.backward(x[i], dy, hs[i - 1], hs[i]);

        if ((i + 1) % 1000 === 0) {
          console.log(`BACKWARD Example ${i + 1} | Iteration ${iteration + 1}`);
        }
      }

      this.network.layers[0].dwX = this.network.layers[0].dwX.setMin(-5).setMax(5);
      this.network.layers[0].dwY = this.network.layers[0].dwY.setMin(-5).setMax(5);
      this.network.layers[0].dwA = this.network.layers[0].dwA.setMin(-5).setMax(5);
      this.network.layers[0].dwB = this.network.layers[0].dwB.setMin(-5).setMax(5);
      this.network.layers[0].dwBY = this.network.layers[0].dwBY.setMin(-5).setMax(5);


      mWxh = mWxh.add(this.network.layers[0].dwX.pow(2));
      this.network.layers[0].wX = this.network.layers[0].wX.add(
        this.network.layers[0].dwX.divide(mWxh.add(1e-8).sqrt()).multiply(-this.learningRate)
      );

      mWhh = mWhh.add(this.network.layers[0].dwA.pow(2));
      this.network.layers[0].wA = this.network.layers[0].wA.add(
        this.network.layers[0].dwA.divide(mWhh.add(1e-8).sqrt()).multiply(-this.learningRate)
      );

      mWhy = mWhy.add(this.network.layers[0].dwY.pow(2));
      this.network.layers[0].wY = this.network.layers[0].wY.add(
        this.network.layers[0].dwY.divide(mWhy.add(1e-8).sqrt()).multiply(-this.learningRate)
      );

      mbh = mbh.add(this.network.layers[0].dwB.pow(2));
      this.network.layers[0].wB = this.network.layers[0].wB.add(
        this.network.layers[0].dwB.divide(mbh.add(1e-8).sqrt()).multiply(-this.learningRate)
      );

      mby = mby.add(this.network.layers[0].dwBY.pow(2));
      this.network.layers[0].wBY = this.network.layers[0].wBY.add(
        this.network.layers[0].dwBY.divide(mby.add(1e-8).sqrt()).multiply(-this.learningRate)
      );

      console.log(this.network.sample(dataset).trim())
    }
    return [smoothLoss];
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
