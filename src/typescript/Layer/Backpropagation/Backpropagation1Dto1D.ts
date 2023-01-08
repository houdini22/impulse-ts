import { AbstractBackPropagation } from "./AbstractBackpropagation";
import { Matrix } from "impulse-math-ts";
import { Layers } from "../../types";

export class Backpropagation1Dto1D extends AbstractBackPropagation {
  propagate(input: Matrix, numberOfExamples: number, regularization: number, layer: Layers, sigma: Matrix): Matrix {
    const previousActivations = this.previousLayer !== null ? this.previousLayer.A : input;

    const delta = sigma.dot(previousActivations.transpose());
    this.layer.gW = delta.divide(numberOfExamples).add(layer.W.multiply(regularization / numberOfExamples));
    this.layer.gb = sigma.rowwiseSum().transpose().divide(numberOfExamples);

    if (this.previousLayer !== null) {
      // @ts-ignore
      const result = this.layer.W.transpose().dot(sigma);
      if (result.rows !== previousActivations.rows || result.cols !== previousActivations.cols) {
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
