import { AbstractBackPropagation } from "./AbstractBackpropagation";
import { Matrix } from "../../Math/Matrix";
import { getComputation } from "../../Computation";

export class Backpropagation1Dto1D extends AbstractBackPropagation {
  propagate(input: Matrix, numberOfExamples: number, regularization: number, sigma: Matrix): Matrix {
    const previousActivations = this.previousLayer !== null ? this.previousLayer.A : input;
    const dZ = this.layer.backpropagation(sigma);
    this.layer.gW = getComputation().execute("multiply", dZ, previousActivations.transpose()) as Matrix;
    this.layer.gW = getComputation().execute("multiplyNumber", this.layer.gW, 1 / numberOfExamples) as Matrix;
    this.layer.gb = getComputation().execute(
      "multiplyNumber",
      dZ.rowwiseSum().transpose(),
      1 / numberOfExamples
    ) as Matrix;

    if (this.previousLayer !== null) {
      // @ts-ignore
      return getComputation().execute("multiply", this.layer.W.transpose(), dZ) as Matrix;
    }
    return new Matrix();
  }
}
