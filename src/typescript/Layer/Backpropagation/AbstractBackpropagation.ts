import { Layers } from "../../types";
import { Matrix } from "../../Math/Matrix";

export abstract class AbstractBackPropagation {
  protected layer: Layers | null = null;
  protected previousLayer: Layers | null = null;

  constructor(layer: Layers | null, previousLayer: Layers) {
    this.layer = layer;
    this.previousLayer = previousLayer;
  }

  abstract propagate(input: Matrix, numberOfExamples: number, regularization: number, layer: Layers, sigma: Matrix): Matrix;
}
