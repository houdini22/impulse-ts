import { Dimension, Layers } from "./types";
import { Matrix } from "./math/Matrix";
import * as fs from "fs";
import { getComputation } from "./computation/utils";

class Network {
  private readonly dimensions: Dimension | null = null;
  private size = 0;
  private layers: Layers[] = [];

  constructor(dimensions: Dimension) {
    this.dimensions = dimensions;
  }

  addLayer(layer: Layers): Network {
    this.size++;
    this.layers.push(layer);

    return this;
  }

  getLayers(): Layers[] {
    return this.layers;
  }

  forward(input: Matrix): Matrix {
    let output = input;

    this.layers.forEach((layer: Layers) => {
      output = layer.forward(output);
    });

    return output;
  }

  backward(
    X: Matrix,
    Y: Matrix,
    predictions: Matrix,
    regularization: number
  ): void {
    const m = X.cols;

    let delta = getComputation().execute(
      "elementWiseSubtract",
      predictions,
      Y
    ) as Matrix;

    for (let layer = this.layers.length - 1; layer >= 0; layer -= 1) {
      delta = this.layers[layer]
        .getBackPropagation()
        .propagate(X, m, regularization, delta);
    }
  }

  loss(output: Matrix, predictions: Matrix): number {
    return this.layers[this.layers.length - 1].loss(output, predictions);
  }

  error(m: number): number {
    return this.layers[this.layers.length - 1].error(m);
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
