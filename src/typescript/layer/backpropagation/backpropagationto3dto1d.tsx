import { AbstractBackPropagation } from "./abstract";
import { Matrix } from "../../math/matrix";

export class Backpropagation3Dto1D extends AbstractBackPropagation {
  propagate(
    input: Matrix,
    numberOfExamples: number,
    regularization: number,
    sigma: Matrix
  ): Matrix {
    return new Matrix();
  }
}
