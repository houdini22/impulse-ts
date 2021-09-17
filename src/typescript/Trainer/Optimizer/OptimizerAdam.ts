import { AbstractOptimizer } from "./AbstractOptimizer";
import { Layers } from "../../types";
import { getComputation } from "../../Computation";
import { Matrix } from "../../Math/Matrix";

export class OptimizerAdam extends AbstractOptimizer {
  protected beta1 = 0.9;
  protected beta2 = 0.999;

  setBeta1(beta1: number): OptimizerAdam {
    this.beta1 = beta1;
    return this;
  }

  setBeta2(beta2: number): OptimizerAdam {
    this.beta2 = beta2;
    return this;
  }

  optimize(layer: Layers): void {
    this.adam(layer, this.learningRate, this.t);
  }

  adam(layer: Layers, learningRate: number, t: number): void {
    layer.vW = getComputation().execute(
      "add",
      getComputation().execute("multiplyNumber", layer.vW, this.beta1) as Matrix,
      getComputation().execute("multiplyNumber", layer.gW, 1 - this.beta1) as Matrix
    ) as Matrix;

    const vCorrected = getComputation().execute("divideNumber", layer.vW, 1 - Math.pow(this.beta1, t)) as Matrix;

    layer.sW = getComputation().execute(
      "add",
      getComputation().execute("multiplyNumber", layer.sW, this.beta2) as Matrix,
      getComputation().execute("multiplyNumber", layer.gW, 1 - this.beta2) as Matrix
    ) as Matrix;

    const sCorrected = getComputation().execute(
      "sqrt",
      getComputation().execute(
        "multiplyNumber",
        getComputation().execute("elementWiseMultiply", layer.gW, layer.gW) as Matrix,
        1 - Math.pow(this.beta2, t)
      ) as Matrix
    ) as Matrix;

    layer.W = getComputation().execute(
      "subtract",
      layer.W,
      getComputation().execute(
        "multiplyNumber",
        getComputation().execute(
          "elementWiseDivide",
          vCorrected,
          getComputation().execute("sqrt", sCorrected) as Matrix
        ) as Matrix,
        learningRate
      ) as Matrix
    ) as Matrix;

    layer.vb = getComputation().execute(
      "add",
      getComputation().execute("multiplyNumber", layer.vb, this.beta1) as Matrix,
      getComputation().execute("multiplyNumber", layer.gb, 1 - this.beta1) as Matrix
    ) as Matrix;

    const vCorrected2 = getComputation().execute("divideNumber", layer.vb, 1 - Math.pow(this.beta1, t)) as Matrix;

    layer.sb = getComputation().execute(
      "add",
      getComputation().execute("multiplyNumber", layer.sb, this.beta2) as Matrix,
      getComputation().execute(
        "multiplyNumber",
        getComputation().execute("elementWiseMultiply", layer.gb, layer.gb) as Matrix,
        1 - this.beta2
      ) as Matrix
    ) as Matrix;

    const sCorrected2 = getComputation().execute("divideNumber", layer.sb, 1 - Math.pow(this.beta2, t)) as Matrix;

    layer.b = getComputation().execute(
      "subtract",
      layer.b,
      getComputation().execute(
        "multiplyNumber",
        getComputation().execute(
          "elementWiseDivide",
          vCorrected2,
          getComputation().execute("sqrt", sCorrected2) as Matrix
        ) as Matrix,
        learningRate
      ) as Matrix
    ) as Matrix;
  }
}
