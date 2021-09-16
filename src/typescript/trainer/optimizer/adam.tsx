import { AbstractOptimizer } from "./abstract";
import { Layers } from "../../types";
import { getCurrentComputation } from "../../computation/utils";

export class OptimizerAdam extends AbstractOptimizer {
  optimize(layer: Layers) {
    this.adam(layer, this.learningRate, this.t);
  }

  adam(layer: Layers, learningRate: number, t: number) {
    const beta1 = 0.9;
    const beta2 = 0.999;
    const epsilon = 1e-8;

    layer.vW = getCurrentComputation().execute(
      "elementWiseAdd",
      getCurrentComputation().execute(
        "elementWiseMultiplyNumber",
        layer.vW,
        beta1
      ),
      getCurrentComputation().execute(
        "elementWiseMultiplyNumber",
        layer.gW,
        1 - beta1
      )
    );
    const wCorrected = getCurrentComputation().execute(
      "elementWiseDivideNumber",
      layer.vW,
      1 - Math.pow(beta1, t)
    );

    layer.cW = getCurrentComputation().execute(
      "elementWiseAdd",
      getCurrentComputation().execute(
        "elementWiseMultiplyNumber",
        layer.cW,
        beta1
      ),
      getCurrentComputation().execute(
        "elementWiseMultiplyNumber",
        layer.gW,
        1 - beta1
      )
    );
    const sCorrected = getCurrentComputation().execute(
      "sqrt",
      getCurrentComputation().execute(
        "elementWiseMultiplyNumber",
        layer.cW,
        1 - Math.pow(beta2, t)
      )
    );

    layer.W = getCurrentComputation().execute(
      "elementWiseSubtract",
      layer.W,
      getCurrentComputation().execute(
        "elementWiseMultiplyNumber",
        getCurrentComputation().execute(
          "elementWiseMultiply",
          wCorrected,
          sCorrected
        ),
        learningRate
      )
    );

    layer.vb = getCurrentComputation().execute(
      "elementWiseAdd",
      getCurrentComputation().execute(
        "elementWiseMultiplyNumber",
        layer.vb,
        beta1
      ),
      getCurrentComputation().execute(
        "elementWiseMultiplyNumber",
        layer.gb,
        1 - beta1
      )
    );
    const wCorrected2 = getCurrentComputation().execute(
      "elementWiseDivideNumber",
      layer.vb,
      1 - Math.pow(beta1, t)
    );
    layer.cb = getCurrentComputation().execute(
      "elementWiseAdd",
      getCurrentComputation().execute(
        "elementWiseMultiplyNumber",
        layer.cb,
        beta2
      ),
      getCurrentComputation().execute(
        "elementWiseMultiplyNumber",
        getCurrentComputation().execute(
          "elementWiseMultiply",
          layer.gb,
          layer.gb
        ),
        1 - beta2
      )
    );
    const sCorrected2 = getCurrentComputation().execute(
      "sqrt",
      getCurrentComputation().execute(
        "elementWiseDivideNumber",
        layer.cb,
        1 - Math.pow(beta2, t)
      )
    );

    layer.b = getCurrentComputation().execute(
      "elementWiseSubtract",
      layer.b,
      getCurrentComputation().execute(
        "elementWiseMultiplyNumber",
        getCurrentComputation().execute(
          "elementWiseDivide",
          wCorrected2,
          sCorrected2
        ),
        learningRate
      )
    );
  }
}
