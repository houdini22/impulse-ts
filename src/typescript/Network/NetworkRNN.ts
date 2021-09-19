import { Dimension, Layers, LayersRNN } from "../types";
import { Matrix } from "../Math/Matrix";
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

  sample(charIndices: Object) {
    const Waa = this.layers[0].Waa;
    const Wax = this.layers[0].Wax;
    const Wya = this.layers[0].Wya;
    const by = this.layers[0].by;
    const b = this.layers[0].b;
    const vocabularySize = this.layers[0].getWidth();
    const na = this.layers[0].getWidth();
    const indices = [];
    const newLineCharacter = charIndices["\n"];

    let x = new Matrix(vocabularySize, 1).setZeros();
    let aPrev = new Matrix(na, 1).setZeros();

    let idx = -1;
    let counter = 0;

    while (idx != newLineCharacter && counter != 50) {
      const a = Wax.dot(x).add(Waa.dot(aPrev)).add(b).tanh();
      const z = Wya.dot(a).add(by);
      const y = z.softmax();

      const flat = y.flatten();

      idx = parseInt(String(Math.random() * vocabularySize));

      indices.push(idx);

      x = new Matrix(vocabularySize, 1);
      x.data[idx][0] = 1;

      aPrev = a;

      counter = +1;
    }
  }

  forward(input: DatasetVocabulary, a0: Matrix): Matrix {
    //const examples = input.getExamples();
    //for (let t = 0; t < examples.length; t += 1) {
    //const [_aNext, _predicted] = this.layers[0].forward(output, a);
    //}
    //return output;
  }

  backward(X: Matrix, Y: Matrix, predictions: Matrix, regularization: number): void {
    const m = X.cols;
    //let sigma = Y.divide(predictions).multiply(-1).subtract(Y.minusOne().divide(predictions.minusOne()));
    let sigma = predictions.subtract(Y);

    for (let layer = this.layers.length - 1; layer >= 0; layer -= 1) {
      sigma = this.layers[layer]
        .getBackPropagation()
        .propagate(X, m, regularization, this.layers[layer].derivative(sigma));
    }
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
