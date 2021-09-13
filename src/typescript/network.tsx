import { Dimension, Layers } from "./types";
import { cols, Matrix, elementWiseSubtract } from "./math/matrix";
import * as fs from "fs";

class Network {
  private dimensions: Dimension = null;
  private size: number = 0;
  private layers: Layers[] = [];

  constructor(dimensions: Dimension) {
    this.dimensions = dimensions;
  }

  addLayer(layer: Layers) {
    this.size++;
    this.layers.push(layer);
  }

  forward(input: Matrix): Matrix {
    let output = input;

    this.layers.forEach((layer: Layers) => {
      output = layer.forward(output);
    });

    return output;
  }

  backward(X: Matrix, Y: Matrix, predictions: Matrix, regularization: number) {
    const m = cols(X);

    let delta = elementWiseSubtract(predictions, Y);

    this.layers.reverse().forEach((layer) => {
      // delta = layer.backpropagation.propagate(X, m, regularization, delta)
    });
  }

  save(path: string): Promise<string> {
    const resultJSON = {
      dimensions: this.dimensions,
      layers: [],
    };

    this.layers.forEach((layer: Layers) => {
      resultJSON.layers.push({
        type: layer.getType(),
        dimensions: [
          layer.getOutputHeight(),
          layer.getOutputWidth(),
          layer.getOutputDepth(),
        ],
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
  }
}

export { Network };
export default Network;
