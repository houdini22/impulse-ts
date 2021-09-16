import { AbstractBackPropagation } from "./abstract";
import { Matrix } from "../../math/matrix";
import { getComputation } from "../../computation/utils";

export class Backpropagation1Dto1D extends AbstractBackPropagation {
  propagate(
    input: Matrix,
    numberOfExamples: number,
    regularization: number,
    sigma: Matrix
  ): Matrix {
    const previousActivations =
      this.previousLayer !== null ? this.previousLayer.A : input;
    const delta = getComputation().execute(
      "multiply",
      sigma,
      previousActivations.transpose().conjugate()
    );
    this.layer.gW = getComputation().execute(
      "elementWiseAdd",
      getComputation().execute(
        "elementWiseDivideNumber",
        delta,
        numberOfExamples
      ),
      getComputation().execute(
        "elementWiseMultiplyNumber",
        this.layer.W,
        regularization / numberOfExamples
      )
    );
    this.layer.gb = getComputation().execute(
      "elementWiseDivideNumber",
      sigma.rowwiseSum(),
      numberOfExamples
    );
    if (this.previousLayer !== null) {
      return getComputation().execute(
        "elementWiseMultiply",
        getComputation().execute("multiply", this.layer.W.transpose(), sigma),
        this.previousLayer.derivative(this.previousLayer.A)
      );
    }
    return new Matrix();
  }
}
