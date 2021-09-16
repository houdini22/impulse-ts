import { AbstractBackPropagation } from "./AbstractBackpropagation";
import { Matrix } from "../../math/Matrix";

export class Backpropagation3Dto1D extends AbstractBackPropagation {
  propagate(
    input: Matrix,
    numberOfExamples: number,
    regularization: number,
    sigma: Matrix
  ): Matrix {
    return sigma;
  }
}
