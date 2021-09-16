import { AbstractOptimizer } from "./abstract";
import { Layers } from "../../types";
import { getCurrentComputation } from "../../computation/utils";

export class OptimizerGradientDescent extends AbstractOptimizer {
  optimize(layer: Layers): void {
    this.gradientDescent(layer, this.learningRate);
  }

  gradientDescent(layer: Layers, learningRate: number): void {
    layer.W = getCurrentComputation().execute(
      "elementWiseSubtract",
      layer.W,
      getCurrentComputation().execute(
        "elementWiseMultiplyNumber",
        layer.gW,
        learningRate
      )
    );
    layer.b = getCurrentComputation().execute(
      "elementWiseSubtract",
      layer.b,
      getCurrentComputation().execute(
        "elementWiseMultiplyNumber",
        layer.gb,
        learningRate
      )
    );
  }
}
