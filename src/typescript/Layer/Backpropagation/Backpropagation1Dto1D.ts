import { AbstractBackPropagation } from "./AbstractBackpropagation";
import { Matrix } from "../../Math/Matrix";
import { getComputation } from "../../Computation";

export class Backpropagation1Dto1D extends AbstractBackPropagation {
  propagate(input: Matrix, numberOfExamples: number, regularization: number, sigma: Matrix): Matrix {
    const previousActivations = this.previousLayer !== null ? this.previousLayer.A : input;
    this.layer.gW = getComputation().execute("multiply", sigma, previousActivations.transpose()) as Matrix;
    this.layer.gW = getComputation().execute("multiplyNumber", this.layer.gW, 1 / numberOfExamples) as Matrix;
    this.layer.gb = getComputation().execute(
      "multiplyNumber",
      sigma.rowwiseSum().transpose(),
      1 / numberOfExamples
    ) as Matrix;

    if (this.previousLayer !== null) {
      // @ts-ignore
      const result = getComputation().execute("multiply", this.layer.W.transpose(), sigma) as Matrix;
      if (result.rows !== previousActivations.rows || result.cols !== previousActivations.cols) {
        console.log(this.layer.W.rows, this.layer.W.cols, sigma.rows, sigma.cols, this.layer.gW.rows, this.layer.gW.cols);
        throw new Error(
          `Dimension error 1. (${result.rows}, ${result.cols}) | (${previousActivations.rows}, ${previousActivations.cols})`
        );
      }
      if (this.layer.gW.rows !== this.layer.W.rows || this.layer.gW.cols !== this.layer.W.cols) {
        throw new Error(
          `Dimension error 2. (${this.layer.gW.rows}, ${this.layer.gW.cols}) | (${this.layer.W.rows}, ${this.layer.W.cols})`
        );
      }
      if (this.layer.gb.rows !== this.layer.b.rows || this.layer.gb.cols !== this.layer.b.cols) {
        throw new Error(
          `Dimension error 3. (${this.layer.gb.rows}, ${this.layer.gb.cols}) | (${this.layer.b.rows}, ${this.layer.b.cols})`
        );
      }
      return result;
    }
    return new Matrix();
  }
}
