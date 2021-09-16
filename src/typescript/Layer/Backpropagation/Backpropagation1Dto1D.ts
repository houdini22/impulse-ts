import { AbstractBackPropagation } from "./AbstractBackpropagation";
import { Matrix } from "../../Math/Matrix";
import { getComputation } from "../../Computation";

export class Backpropagation1Dto1D extends AbstractBackPropagation {
  propagate(input: Matrix, numberOfExamples: number, regularization: number, sigma: Matrix): Matrix {
    const previousActivations = this.previousLayer !== null ? this.previousLayer.A : input;
    const delta = getComputation().execute("multiply", sigma, previousActivations.transpose()) as Matrix;

    this.layer.gW = getComputation().execute(
      "add",
      getComputation().execute("divideNumber", delta, numberOfExamples) as Matrix,
      getComputation().execute("multiplyNumber", this.layer.W, regularization / numberOfExamples) as Matrix
    ) as Matrix;

    this.layer.gb = getComputation().execute(
      "divideNumber",
      sigma.rowwiseSum().transpose(),
      numberOfExamples
    ) as Matrix;

    if (this.previousLayer !== null) {
      return getComputation().execute(
        "elementWiseMultiply",
        getComputation().execute("multiply", this.layer.W.transpose(), sigma) as Matrix,
        this.previousLayer.derivative(this.previousLayer.A)
      ) as Matrix;
    }
    return new Matrix();
  }
}
