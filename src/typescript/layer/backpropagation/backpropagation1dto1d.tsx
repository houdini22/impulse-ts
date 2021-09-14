import { AbstractBackPropagation } from "./abstract";
import {
  elementWiseAdd,
  elementWiseMultiply,
  elementWiseMultiplyNumber,
  Matrix,
  multiply,
} from "../../math/matrix";
import { elementWiseDivideNumber } from "../../math/matrix";

export class Backpropagation1Dto1D extends AbstractBackPropagation {
  propagate(
    input: Matrix,
    numberOfExamples: number,
    regularization: number,
    sigma: Matrix
  ): Matrix {
    const previousActivations =
      this.previousLayer !== null ? this.previousLayer.A : input;
    const delta = multiply(sigma, previousActivations.transpose().conjugate());
    this.layer.gW = elementWiseAdd(
      elementWiseDivideNumber(delta.rowwiseSum(), numberOfExamples),
      elementWiseMultiplyNumber(this.layer.W, regularization / numberOfExamples)
    );
    this.layer.gb = elementWiseDivideNumber(
      sigma.rowwiseSum(),
      numberOfExamples
    );
    if (this.previousLayer !== null) {
      return elementWiseMultiply(
        multiply(this.layer.W.transpose(), sigma),
        this.previousLayer.derivative(this.previousLayer.A)
      );
    }
    return new Matrix();
  }
}
