import { NetworkRNN } from "../Network";
import { DatasetVocabulary } from "impulse-dataset-ts/src/typescript/Dataset/DatasetVocabulary";
import { Matrix } from "impulse-math-ts";
import { OptimizerRNN } from "./Optimizer/OptimizerRNN";

export class RNNTrainer {
  protected network: NetworkRNN | null = null;
  protected iterations = 1000;
  protected learningRate = 0.01;
  protected optimizer: OptimizerRNN = null;

  constructor(network: NetworkRNN) {
    this.network = network;
    this.optimizer = new OptimizerRNN(network).setLearningRate(this.learningRate);
  }

  train(dataset: DatasetVocabulary): [number] {
    const [X, Y] = dataset.buildData(this.network.getDimensions()[0]);
    const [x, y] = dataset.vectorization(X, Y);

    //const hs = {};
    //const ys = {};
    this.optimizer
      .setT(-1)
      .setHS(new Matrix(this.network.getDimensions()[0], this.network.getDimensions()[0]).setZeros());

    /*let mWxh = new Matrix(this.network.getDimensions()[0], this.network.getDimensions()[1]).setZeros();
    let mWhh = new Matrix(this.network.getDimensions()[0], this.network.getDimensions()[0]).setZeros();
    let mWhy = new Matrix(this.network.getDimensions()[1], this.network.getDimensions()[0]).setZeros();
    let mbh = new Matrix(this.network.layers[0].dwB.rows, this.network.layers[0].dwB.cols).setZeros();
    let mby = new Matrix(this.network.layers[0].dwBY.rows, this.network.layers[0].dwBY.cols).setZeros();*/

    for (let iteration = 0; iteration < this.iterations; iteration += 1) {
      let _loss = 0;
      for (let i = 0; i < X.length; i += 1) {
        const { aNext, y: _y, loss } = this.network.forward(x[i], y[i], this.optimizer.hs[i - 1]);
        this.optimizer.setT(i).setHS(aNext).setYS(_y);
        //hs[i] = aNext;
        //ys[i] = _y;

        if ((i + 1) % 1000 === 0) {
          console.log(`FORWARD Example ${i + 1} | Iteration ${iteration + 1}`);
        }

        _loss += loss;
      }

      console.log(`Loss ${_loss} | Iteration: ${iteration}`);

      for (let i = X.length - 1; i >= 0; i -= 1) {
        const dy = Matrix.from(this.optimizer.ys[i].data);
        for (let row = 0; row < dy.rows; row += 1) {
          dy.data[row][x[i].transpose().rowMaxCoeffIndex(row)] -= 1;
        }

        this.network.backward(x[i], dy, this.optimizer.hs[i - 1], this.optimizer.hs[i]);

        if ((i + 1) % 1000 === 0) {
          console.log(`BACKWARD Example ${i + 1} | Iteration ${iteration + 1}`);
        }
      }

      this.optimizer.optimize(this.network.layers[0]);

      console.log(this.network.sample(dataset).trim());
    }
    return [0];
  }

  setIterations(num: number): RNNTrainer {
    this.iterations = num;
    return this;
  }

  setLearningRate(num: number): RNNTrainer {
    this.learningRate = num;
    this.optimizer.setLearningRate(num);
    return this;
  }
}
