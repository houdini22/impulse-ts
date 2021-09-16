import { AbstractBackPropagation } from "./abstract";
import { Matrix } from "../../math/matrix";
import { getCurrentComputation } from "../../computation/utils";

export class Backpropagation1Dto1D extends AbstractBackPropagation {
  propagate(
    input: Matrix,
    numberOfExamples: number,
    regularization: number,
    sigma: Matrix
  ): Matrix {
    const previousActivations =
      this.previousLayer !== null ? this.previousLayer.A : input;
    const delta = getCurrentComputation().execute(
      "multiply",
      sigma,
      previousActivations.transpose().conjugate()
    );
    this.layer.gW = getCurrentComputation().execute(
      "elementWiseAdd",
      getCurrentComputation().execute(
        "elementWiseDivideNumber",
        delta,
        numberOfExamples
      ),
      getCurrentComputation().execute(
        "elementWiseMultiplyNumber",
        this.layer.W,
        regularization / numberOfExamples
      )
    );
    this.layer.gb = getCurrentComputation().execute(
      "elementWiseDivideNumber",
      sigma.rowwiseSum(),
      numberOfExamples
    );
    if (this.previousLayer !== null) {
      return getCurrentComputation().execute(
        "elementWiseMultiply",
        getCurrentComputation().execute(
          "multiply",
          this.layer.W.transpose(),
          sigma
        ),
        this.previousLayer.derivative(this.previousLayer.A)
      );
    }
    return new Matrix();
  }
}
