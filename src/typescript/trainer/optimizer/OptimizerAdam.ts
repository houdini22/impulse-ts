import { AbstractOptimizer } from "./AbstractOptimizer";
import { Layers } from "../../types";
import { getComputation } from "../../computation/utils";
import { Matrix } from "../../math/Matrix";

export class OptimizerAdam extends AbstractOptimizer {
  optimize(layer: Layers): void {
    this.adam(layer, this.learningRate, this.t);
  }

  adam(layer: Layers, learningRate: number, t: number): void {
    const beta1 = 0.9;
    const beta2 = 0.999;

    layer.vW = getComputation().execute(
      "add",
      getComputation().execute("multiplyNumber", layer.vW, beta1) as Matrix,
      getComputation().execute("multiplyNumber", layer.gW, 1 - beta1) as Matrix
    ) as Matrix;
    const wCorrected = getComputation().execute("divideNumber", layer.vW, 1 - Math.pow(beta1, t)) as Matrix;

    layer.cW = getComputation().execute(
      "add",
      getComputation().execute("multiplyNumber", layer.cW, beta1) as Matrix,
      getComputation().execute("multiplyNumber", layer.gW, 1 - beta1) as Matrix
    ) as Matrix;
    const sCorrected = getComputation().execute(
      "sqrt",
      getComputation().execute("multiplyNumber", layer.cW, 1 - Math.pow(beta2, t)) as Matrix
    ) as Matrix;

    layer.W = getComputation().execute(
      "subtract",
      layer.W,
      getComputation().execute(
        "multiplyNumber",
        getComputation().execute("elementWiseMultiply", wCorrected, sCorrected) as Matrix,
        learningRate
      ) as Matrix
    ) as Matrix;

    layer.vb = getComputation().execute(
      "add",
      getComputation().execute("multiplyNumber", layer.vb, beta1) as Matrix,
      getComputation().execute("multiplyNumber", layer.gb, 1 - beta1) as Matrix
    ) as Matrix;
    const wCorrected2 = getComputation().execute("divideNumber", layer.vb, 1 - Math.pow(beta1, t)) as Matrix;
    layer.cb = getComputation().execute(
      "add",
      getComputation().execute("multiplyNumber", layer.cb, beta2) as Matrix,
      getComputation().execute(
        "multiplyNumber",
        getComputation().execute("elementWiseMultiply", layer.gb, layer.gb) as Matrix,
        1 - beta2
      ) as Matrix
    ) as Matrix;
    const sCorrected2 = getComputation().execute(
      "sqrt",
      getComputation().execute("divideNumber", layer.cb, 1 - Math.pow(beta2, t)) as Matrix
    ) as Matrix;

    layer.b = getComputation().execute(
      "subtract",
      layer.b,
      getComputation().execute(
        "multiplyNumber",
        getComputation().execute("elementWiseDivide", wCorrected2, sCorrected2) as Matrix,
        learningRate
      ) as Matrix
    ) as Matrix;
  }
}
