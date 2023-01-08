import { AbstractBackPropagation } from "./AbstractBackpropagation";
import { Matrix } from "../../Math/Matrix";
import { Layers } from "../../types";

export class Backpropagation3Dto1D extends AbstractBackPropagation {
  propagate(input: Matrix, numberOfExamples: number, regularization: number, layer: Layers, sigma: Matrix): Matrix {
    return sigma;
  }
}
