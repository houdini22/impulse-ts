import { Dimension, Layers, LayersRNN } from "../types";
import { Matrix, Matrix3D } from "../Math/Matrix";
import * as fs from "fs";
import { DatasetVocabulary } from "../Dataset/DatasetVocabulary";

export class NetworkRNN {
  private readonly dimensions: Dimension | null = null;
  private size = 0;
  private layers: LayersRNN[] = [];

  constructor(dimensions: Dimension) {
    this.dimensions = dimensions;
  }

  addLayer(layer: LayersRNN): NetworkRNN {
    this.size++;
    this.layers.push(layer);

    return this;
  }

  getLayers(): Layers[] {
    return this.layers;
  }

  loss(vocabularySize: number, sequenceLength: number): number {
    return -Math.log(1 / vocabularySize) * sequenceLength;
  }

  sample(dataset: DatasetVocabulary) {
    const Waa = this.layers[0].Waa;
    const Wax = this.layers[0].Wax;
    const Wya = this.layers[0].Wya;
    const by = this.layers[0].by;
    const b = this.layers[0].b;
    const vocabularySize = this.layers[0].by.rows;
    const indices = [];
    const charIndices = dataset.getCharIndices();
    const newLineCharacter = charIndices["\n"];
    const chars = dataset.getChars();

    let x = new Matrix(Wax.cols, 1).setZeros();
    let aPrev = new Matrix(Wax.rows, 1).setZeros();

    let idx = -1;
    let counter = 0;

    while (idx != newLineCharacter && counter != 50) {
      const a = Wax.dot(x).add(Waa.dot(aPrev)); //.add(b).tanh();
      const z = Wya.dot(a).add(by);
      const y = z.softmax();

      const flat = y.flatten();

      idx = Math.floor(Math.random() * vocabularySize);

      indices.push(idx);

      x = new Matrix(vocabularySize, 1);
      x.data[idx][0] = 1;

      aPrev = a;

      counter = +1;
    }

    return indices
      .map((i) => {
        return chars[i];
      })
      .join("");
  }

  forward(X: Matrix, Y: Matrix, a0: Matrix, vocabularySize: number = 20): [number] {
    const x = [null];
    const a = [a0];
    const yHat = [null];
    let loss = 0;
    for (let t = 1; t <= X.rows; t += 1) {
      x[t] = new Matrix(Y.rows, 1, Y.col(t - 1).data);
      const [_a, _yHat] = this.layers[0].forward(a[t - 1], x[t]);
      a[t] = _a;
      yHat[t] = _yHat;
      loss -= Math.log(Math.max(_yHat.data[t - 1][0], 1e-8));
    }
    this.layers[0].A = a;
    this.layers[0].X = x;
    this.layers[0].Y = yHat;
    return [loss];
  }

  backward(X: Matrix, Y: Matrix): void {
    const a = this.layers[0].A;
    const x = this.layers[0].X;

    this.layers[0].dWax = new Matrix(this.layers[0].Wax.rows, this.layers[0].Wax.cols).setZeros();
    this.layers[0].dWaa = new Matrix(this.layers[0].Waa.rows, this.layers[0].Waa.cols).setZeros();
    this.layers[0].dWya = new Matrix(this.layers[0].Wya.rows, this.layers[0].Wya.cols).setZeros();
    this.layers[0].db = new Matrix(this.layers[0].b.rows, this.layers[0].b.cols).setZeros();
    this.layers[0].dby = new Matrix(this.layers[0].by.rows, this.layers[0].by.cols).setZeros();

    for (let t = X.rows - 1; t >= 1; t -= 1) {
      const dy = new Matrix(this.layers[0].Y[t].rows, this.layers[0].Y[t].cols, this.layers[0].Y[t].data);
      this.layers[0].backward(dy, x[t], a[t], a[t - 1]);
    }
  }

  optimize(X: Matrix, Y: Matrix, aPrev: Matrix, learningRate: number): [number, Matrix] {
    const [loss] = this.forward(X, Y, aPrev);
    this.backward(X, Y);

    this.layers[0].Wax = this.layers[0].Wax.add(this.layers[0].dWax.multiply(-learningRate));
    this.layers[0].Waa = this.layers[0].Waa.add(this.layers[0].dWaa.multiply(-learningRate));
    this.layers[0].Wya = this.layers[0].Wya.add(this.layers[0].dWya.multiply(-learningRate));
    this.layers[0].b = this.layers[0].b.add(this.layers[0].db.multiply(-learningRate));
    this.layers[0].by = this.layers[0].by.add(this.layers[0].dby.multiply(-learningRate));

    return [loss, this.layers[0].A[X.rows - 1]];
  }

  /*save(path: string): Promise<string> {
    const resultJSON = {
      dimensions: this.dimensions,
      layers: [],
    };

    this.layers.forEach((layer: Layers) => {
      resultJSON.layers.push({
        type: layer.getType(),
        size: layer.getSize(),
        weights: {
          W: layer.W.data,
          b: layer.b.data,
        },
      });
    });

    const result = JSON.stringify(resultJSON);

    return new Promise((resolve, reject) => {
      fs.writeFile(path, result, (err) => {
        if (err) {
          console.error(err);
          reject();
        }
        resolve(result);
      });
    });
  }*/
}
