import { AbstractOptimizer } from "./abstract";
import { Layers } from "../../types";
import {
  elementWiseMultiplyNumber,
  elementWiseSubtract,
} from "../../math/matrix";

export class OptimizerGradientDescent extends AbstractOptimizer {
  optimize(layer: Layers) {
    this.gradientDescent(layer, this.learningRate);
  }

  gradientDescent(layer: Layers, learningRate: number) {
    layer.W = elementWiseSubtract(
      layer.W,
      elementWiseMultiplyNumber(layer.gW, learningRate)
    );
    layer.b = elementWiseSubtract(
      layer.b,
      elementWiseMultiplyNumber(layer.gb, learningRate)
    );
  }
}
