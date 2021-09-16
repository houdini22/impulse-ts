import { AbstractOptimizer } from "./AbstractOptimizer";
import { Layers } from "../../types";
import { getComputation } from "../../computation/utils";
import { Matrix } from "../../math/Matrix";

export class OptimizerGradientDescent extends AbstractOptimizer {
  optimize(layer: Layers): void {
    this.gradientDescent(layer, this.learningRate);
  }

  gradientDescent(layer: Layers, learningRate: number): void {
    layer.W = getComputation().execute(
      "subtract",
      layer.W,
      getComputation().execute("multiplyNumber", layer.gW, learningRate) as Matrix
    ) as Matrix;
    layer.b = getComputation().execute(
      "subtract",
      layer.b,
      getComputation().execute("multiplyNumber", layer.gb, learningRate) as Matrix
    ) as Matrix;
  }
}
