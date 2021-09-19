import { AbstractBackPropagation } from "./AbstractBackpropagation";
import { Matrix } from "../../Math/Matrix";
import { getComputation } from "../../Computation";

export class Backpropagation1Dto1D extends AbstractBackPropagation {
  propagate(input: Matrix, numberOfExamples: number, regularization: number, sigma: Matrix): Matrix {
    const previousActivations = this.previousLayer !== null ? this.previousLayer.A : input;
    this.layer.gW = sigma.dot(previousActivations.transpose()).divide(numberOfExamples);
    this.layer.gW = this.layer.gW.add(this.layer.W.multiply(regularization).divide(numberOfExamples));
    this.layer.gb = sigma.rowwiseSum().transpose().divide(numberOfExamples);

    if (this.previousLayer !== null) {
      // @ts-ignore
      const result = this.layer.W.transpose().dot(sigma);
      if (result.rows !== previousActivations.rows || result.cols !== previousActivations.cols) {
        console.log(
          this.layer.W.rows,
          this.layer.W.cols,
          sigma.rows,
          sigma.cols,
          this.layer.gW.rows,
          this.layer.gW.cols
        );
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
