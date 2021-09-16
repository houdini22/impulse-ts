import { AbstractBackPropagation } from "./AbstractBackpropagation";
import { Matrix } from "../../Math/Matrix";
import { getComputation } from "../../Computation";

export class Backpropagation1Dto1D extends AbstractBackPropagation {
  propagate(input: Matrix, numberOfExamples: number, regularization: number, delta: Matrix): Matrix {
    const previousActivations = this.previousLayer !== null ? this.previousLayer.A : input;
    const previousW = this.previousLayer !== null ? this.previousLayer.W : new Matrix();
    this.layer.gW = getComputation().execute("multiply", previousActivations, delta.transpose()) as Matrix;
    this.layer.gW = getComputation().execute(
      "multiplyNumber",
      this.layer.gW.transpose(),
      1 / numberOfExamples
    ) as Matrix;
    this.layer.gb = getComputation().execute(
      "multiplyNumber",
      delta.rowwiseSum().transpose(),
      1 / numberOfExamples
    ) as Matrix;

    if (this.previousLayer !== null) {
      return getComputation().execute(
        "elementWiseMultiply",
        getComputation().execute("multiply", this.layer.W.transpose(), delta) as Matrix,
        this.previousLayer.derivative(this.previousLayer.A)
      ) as Matrix;
    }
    return new Matrix();
  }
}
