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
    const na = this.layers[0].Waa.cols;
    const indices = [];
    const charIndices = dataset.getCharIndices();
    const newLineCharacter = charIndices["\n"];
    const chars = dataset.getChars();

    let x = new Matrix(vocabularySize, 1).setZeros();
    let aPrev = new Matrix(na, 1).setZeros();

    let idx = -1;
    let counter = 0;

    while (idx != newLineCharacter && counter != 50) {
      const a = Wax.transpose().dot(x).add(Waa.dot(aPrev).replicate(1, aPrev.cols)).add(b).tanh();
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

  forward(X: Matrix[], Y: Matrix, a0: Matrix, vocabularySize: number = 20): [number] {
    const x = [null];
    const a = [a0];
    const yHat = [null];
    let loss = 0;
    for (let t = 1; t <= X.length; t += 1) {
      x[t] = new Matrix(vocabularySize, 1).setZeros();
      x[t].data[t][0] = 1;
      const [_a, _yHat] = this.layers[0].forward(a[t - 1], x[t]);
      a[t] = _a;
      yHat[t] = _yHat;
      loss += Math.log(yHat[t].data[t][0]);
    }
    return [loss];
    /*const m = X[0].rows;
    const tX = X[0].cols;
    const nY = this.layers[0].Wya.rows;
    const nA = this.layers[0].Wya.cols;

    const a = [];
    for (let i = 0; i < nA; i += 1) {
      a[i] = new Matrix(m, tX).setZeros();
    }
    const yPred = [];
    for (let i = 0; i < nY; i += 1) {
      yPred[i] = new Matrix(m, tX).setZeros();
    }

    let aNext = a0;

    for (let t = 0; t < tX; t += 1) {
      const dataInput = [];
      X.forEach((m: Matrix, i) => {
        dataInput[i] = [];
        for (let row = 0; row < m.rows; row += 1) {
          dataInput[i].push(m.data[row][t]);
        }
      });
      const input = Matrix.from(dataInput);
      const [_aNext, _yPred] = this.layers[0].forward(input, aNext);

      let yPredRowIndex = 0;
      let yPredIndex = 0;
      _yPred.forEach((num: number) => {
        if (!yPred[yPredIndex]) {
          yPred[yPredIndex] = new Matrix(_yPred.rows, _yPred.cols);
        }
        yPred[yPredIndex].data[yPredRowIndex][t] = num;

        yPredRowIndex++;
        if (yPredRowIndex > yPred[0].rows - 1) {
          yPredRowIndex = 0;
          yPredIndex++;
        }
      });

      let aNextRowIndex = 0;
      let aNextIndex = 0;
      _aNext.forEach((num: number) => {
        if (!a[aNextIndex]) {
          a[aNextIndex] = new Matrix(_aNext.rows, _aNext.cols);
        }
        a[aNextIndex].data[aNextRowIndex][t] = num;

        aNextRowIndex++;
        if (aNextRowIndex > _aNext.rows - 1) {
          aNextRowIndex = 0;
          aNextIndex++;
        }
      });
    }

    return [a, yPred];*/
  }

  backward(X: Matrix[], Y: Matrix): void {
    const a = this.layers[0].A;
    const x = this.layers[0].X;

    this.layers[0].dWax = new Matrix(this.layers[0].Wax.rows, this.layers[0].Wax.cols).setZeros();
    this.layers[0].dWaa = new Matrix(this.layers[0].Waa.rows, this.layers[0].Waa.cols).setZeros();
    this.layers[0].dWya = new Matrix(this.layers[0].Wya.rows, this.layers[0].Wya.cols).setZeros();
    this.layers[0].db = new Matrix(this.layers[0].b.rows, this.layers[0].b.cols).setZeros();
    this.layers[0].dby = new Matrix(this.layers[0].by.rows, this.layers[0].by.cols).setZeros();

    for (let t = X.length - 1; t >= 0; t -= 1) {
      const dy = new Matrix(this.layers[0].Y[t].rows, this.layers[0].Y[t].cols, this.layers[0].Y[t].data);
      this.layers[0].backward(dy, x[t], a[t], a[t - 1]);
    }
    /*const na = da.length;
    const [m, tx] = da[0].shape();
    const nx = this.layers[0].x1.rows;

    const dx: Matrix[] = [];
    for (let i = 0; i < nx; i += 1) {
      dx.push(new Matrix(m, tx).setZeros());
    }
    let dba = new Matrix(na, 1).setZeros();
    let da0 = new Matrix(na, m).setZeros();
    let daPrevT = new Matrix(na, m).setZeros();

    for (let t = tx - 1; t >= 0; t -= 1) {
      const sum = new Matrix();
      this.layers[0].backward(sum);
      //todo: dx
      dWax = dWax.add(this.layers[0].dWax);
      dWaa = dWaa.add(this.layers[0].dWaa);
      dba = dba.add(this.layers[0].dba);
      daPrevT = this.layers[0].daPrev;
    }

    da0 = daPrevT;

    this.layers[0].dx = dx;
    this.layers[0].da0 = da0;
    this.layers[0].dWax = dWax;
    this.layers[0].dWaa = dWaa;
    this.layers[0].dba = dba;*/
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
