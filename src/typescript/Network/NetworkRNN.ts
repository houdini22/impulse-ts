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

  getLayers(): LayersRNN[] {
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
    const indices = [];
    const charIndices = dataset.getCharIndices();
    const newLineCharacter = charIndices["\n"];
    const chars = dataset.getChars();

    let x = new Matrix(this.dimensions[1], 1).setZeros();
    let aPrev = new Matrix(this.dimensions[0], 1).setZeros();

    let idx = -1;
    let counter = 0;

    while (idx != newLineCharacter && counter != 50) {
      const a = Wax.dot(x).add(Waa.dot(aPrev)).add(b).setMin(1e-3).tanh();
      const z = Wya.dot(a).add(by);
      const y = z.softmax();

      idx = charIndices[chars[y.colMaxCoeffIndex(0)]];
      x = new Matrix(this.dimensions[1], 1).setZeros();
      let maxIndex = y.colMaxCoeffIndex(0);
      if (maxIndex === -1) {
        maxIndex = Math.floor(Math.random() * this.dimensions[1]);
        idx = charIndices[chars[maxIndex]];
      }
      x.data[maxIndex][0] = 1;

      indices.push(idx);
      aPrev = a;

      counter += 1;
    }

    if (counter === 50) {
      indices.push(newLineCharacter);
    }

    return indices
      .map((i) => {
        return chars[i];
      })
      .join("");
  }

  forward(X: Matrix, a0: Matrix, Y: Matrix): [number] {
    const x = [null];
    const a = [a0];
    const yHat = [null];
    let loss = 0;
    for (let t = 1; t <= X.rows; t += 1) {
      x[t] = new Matrix(this.dimensions[0], 1).setZeros();
      x[t].data[X.data[t - 1][0]][0] = 1;
      const [_a, _yHat] = this.layers[0].forward(a[t - 1], x[t], Y);
      a[t] = _a;
      yHat[t] = _yHat.setMin(1e-5);
      loss -= Math.log(yHat[t].data[Y.data[t][0]][0]);
    }
    this.layers[0].A = a;
    this.layers[0].X = x;
    this.layers[0].Y = yHat;
    return [loss];
  }

  backward(da: Matrix): void {
    const a = this.layers[0].A;
    const x = this.layers[0].X;
    const yHat = this.layers[0].Y;

    this.layers[0].dWax = new Matrix(this.layers[0].Wax.rows, this.layers[0].Wax.cols).setZeros();
    this.layers[0].dWaa = new Matrix(this.layers[0].Waa.rows, this.layers[0].Waa.cols).setZeros();
    this.layers[0].dWya = new Matrix(this.layers[0].Wya.rows, this.layers[0].Wya.cols).setZeros();
    this.layers[0].db = new Matrix(this.layers[0].b.rows, this.layers[0].b.cols).setZeros();
    this.layers[0].dby = new Matrix(this.layers[0].by.rows, this.layers[0].by.cols).setZeros();

    for (let t = da.rows - 1; t >= 1; t -= 1) {
      const dy = Matrix.from(yHat[t].data);
      dy.data[da.data[t - 1][0]][0] -= 1;
      this.layers[0].backward(dy, x[t], a[t], a[t - 1]);
    }
  }

  optimize(X: Matrix, Y: Matrix, aPrev: Matrix, learningRate: number): [number, Matrix] {
    const [loss] = this.forward(X, aPrev, Y);
    this.backward(X);

    this.layers[0].Wax = this.layers[0].Wax.add(
      this.layers[0].dWax.replicate(1, this.getDimensions()[2]).multiply(-learningRate)
    );
    this.layers[0].Waa = this.layers[0].Waa.add(this.layers[0].dWaa.multiply(-learningRate));
    this.layers[0].Wya = this.layers[0].Wya.add(this.layers[0].dWya.multiply(-learningRate));
    this.layers[0].b = this.layers[0].b.add(this.layers[0].db.multiply(-learningRate));
    this.layers[0].by = this.layers[0].by.add(
      this.layers[0].dby.multiply(-learningRate).rowwiseSum().divide(this.layers[0].dby.cols).transpose()
    );

    return [loss, this.layers[0].A[X.rows - 1]];
  }

  getDimensions(): Dimension {
    return this.dimensions;
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
