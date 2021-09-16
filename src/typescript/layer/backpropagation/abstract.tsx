import { Layers } from "../../types";
import { Matrix } from "../../math/Matrix";

export abstract class AbstractBackPropagation {
  protected layer: Layers = null;
  protected previousLayer: Layers = null;

  constructor(layer: Layers, previousLayer: Layers) {
    this.layer = layer;
    this.previousLayer = previousLayer;
  }

  abstract propagate(
    input: Matrix,
    numberOfExamples: number,
    regularization: number,
    sigma: Matrix
  ): Matrix;
}
