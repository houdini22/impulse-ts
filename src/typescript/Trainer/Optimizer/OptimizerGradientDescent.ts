import { AbstractOptimizer } from "./AbstractOptimizer";
import { Layers } from "../../types";

export class OptimizerGradientDescent extends AbstractOptimizer {
  optimize(layer: Layers): void {
    this.gradientDescent(layer, this.learningRate);
  }

  gradientDescent(layer: Layers, learningRate: number): void {
    layer.W = layer.W.subtract(layer.gW.multiply(learningRate));
    layer.b = layer.b.subtract(layer.b.multiply(learningRate));
  }
}
