import { Dimension, Layers } from "./types";
import { cols, Matrix, elementWiseSubtract } from "./math/matrix";

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
}

export { Network };
export default Network;
