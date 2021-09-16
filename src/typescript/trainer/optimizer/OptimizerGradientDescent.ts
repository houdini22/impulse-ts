import { AbstractOptimizer } from "./AbstractOptimizer";
import { Layers } from "../../types";
import { getComputation } from "../../computation/utils";
import {Matrix} from "../../math/Matrix";

export class OptimizerGradientDescent extends AbstractOptimizer {
  optimize(layer: Layers): void {
    this.gradientDescent(layer, this.learningRate);
  }

  gradientDescent(layer: Layers, learningRate: number): void {
    layer.W = getComputation().execute(
      "elementWiseSubtract",
      layer.W,
      getComputation().execute(
        "elementWiseMultiplyNumber",
        layer.gW,
        learningRate
      ) as Matrix
    ) as Matrix;
    layer.b = getComputation().execute(
      "elementWiseSubtract",
      layer.b,
      getComputation().execute(
        "elementWiseMultiplyNumber",
        layer.gb,
        learningRate
      ) as Matrix
    ) as Matrix;
  }
}
