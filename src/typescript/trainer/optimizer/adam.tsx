import { AbstractOptimizer } from "./abstract";
import { Layers } from "../../types";
import { getComputation } from "../../computation/utils";

export class OptimizerAdam extends AbstractOptimizer {
  optimize(layer: Layers): void {
    this.adam(layer, this.learningRate, this.t);
  }

  adam(layer: Layers, learningRate: number, t: number): void {
    const beta1 = 0.9;
    const beta2 = 0.999;

    layer.vW = getComputation().execute(
      "elementWiseAdd",
      getComputation().execute("elementWiseMultiplyNumber", layer.vW, beta1),
      getComputation().execute("elementWiseMultiplyNumber", layer.gW, 1 - beta1)
    );
    const wCorrected = getComputation().execute(
      "elementWiseDivideNumber",
      layer.vW,
      1 - Math.pow(beta1, t)
    );

    layer.cW = getComputation().execute(
      "elementWiseAdd",
      getComputation().execute("elementWiseMultiplyNumber", layer.cW, beta1),
      getComputation().execute("elementWiseMultiplyNumber", layer.gW, 1 - beta1)
    );
    const sCorrected = getComputation().execute(
      "sqrt",
      getComputation().execute(
        "elementWiseMultiplyNumber",
        layer.cW,
        1 - Math.pow(beta2, t)
      )
    );

    layer.W = getComputation().execute(
      "elementWiseSubtract",
      layer.W,
      getComputation().execute(
        "elementWiseMultiplyNumber",
        getComputation().execute("elementWiseMultiply", wCorrected, sCorrected),
        learningRate
      )
    );

    layer.vb = getComputation().execute(
      "elementWiseAdd",
      getComputation().execute("elementWiseMultiplyNumber", layer.vb, beta1),
      getComputation().execute("elementWiseMultiplyNumber", layer.gb, 1 - beta1)
    );
    const wCorrected2 = getComputation().execute(
      "elementWiseDivideNumber",
      layer.vb,
      1 - Math.pow(beta1, t)
    );
    layer.cb = getComputation().execute(
      "elementWiseAdd",
      getComputation().execute("elementWiseMultiplyNumber", layer.cb, beta2),
      getComputation().execute(
        "elementWiseMultiplyNumber",
        getComputation().execute("elementWiseMultiply", layer.gb, layer.gb),
        1 - beta2
      )
    );
    const sCorrected2 = getComputation().execute(
      "sqrt",
      getComputation().execute(
        "elementWiseDivideNumber",
        layer.cb,
        1 - Math.pow(beta2, t)
      )
    );

    layer.b = getComputation().execute(
      "elementWiseSubtract",
      layer.b,
      getComputation().execute(
        "elementWiseMultiplyNumber",
        getComputation().execute("elementWiseDivide", wCorrected2, sCorrected2),
        learningRate
      )
    );
  }
}
