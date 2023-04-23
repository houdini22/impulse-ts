import { Dimension, LayersRNN, Layers } from "../types";
import { Matrix } from "impulse-math-ts";
import { DatasetVocabulary } from "impulse-dataset-ts/src/typescript/Dataset/DatasetVocabulary";
import * as fs from "fs";

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

  sample(dataset: DatasetVocabulary, length = 50) {
    const Waa = this.layers[0].wA;
    const Wax = this.layers[0].wX;
    const Wya = this.layers[0].wY;
    const by = this.layers[0].wBY;
    const b = this.layers[0].wB;
    const indices = [];
    const charIndices = dataset.getCharIndices();
    const newLineCharacter = charIndices["\n"];
    const chars = dataset.getChars();

    let x = new Matrix(this.dimensions[1], 1).setZeros();
    let aPrev = new Matrix(this.dimensions[0], 1).setRandom(this.dimensions[1]);

    let idx = -1;
    let counter = 0;

    while (idx != newLineCharacter && counter != length) {
      const a = Wax.dot(x).add(Waa.dot(aPrev)).add(b).tanh();
      const z = Wya.dot(a).add(by);
      const y = z.softmax();

      idx = charIndices[chars[y.colMaxCoeffIndex(0)]];
      x = new Matrix(this.dimensions[1], 1).setZeros();
      const maxIndex = y.colMaxCoeffIndex(0);

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

  forward(X: Matrix, Y: Matrix, aPrev: Matrix): Object {
    const { aNext, y, p, loss } = this.layers[0].forward(X.transpose(), Y, aPrev);
    return { aNext, y, p, loss };
  }

  backward(X: Matrix, Y: Matrix, A: Matrix, aNext: Matrix): void {
    this.layers[0].backward(X, Y, A, aNext);
  }

  getDimensions(): Dimension {
    return this.dimensions;
  }

  save(path: string): Promise<string> {
    const resultJSON = {
      dimensions: this.dimensions,
      layers: [],
    };

    this.layers.forEach((layer: Layers) => {
      resultJSON.layers.push({
        type: layer.getType(),
        size: layer.getSize(),
        weights: {
          wX: layer.wX.data,
          wA: layer.wA.data,
          wY: layer.wY.data,
          wB: layer.wB.data,
          wBY: layer.wBY.data,
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
  }
}
