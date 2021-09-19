import { AbstractOptimizer } from "./AbstractOptimizer";
import { Layers } from "../../types";

export class OptimizerMomentum extends AbstractOptimizer {
  protected beta = 0.9;

  optimize(layer: Layers): void {
    this.momentum(layer, this.learningRate);
  }

  setBeta(beta: number): OptimizerMomentum {
    this.beta = beta;
    return this;
  }

  momentum(layer: Layers, learningRate: number): void {
    layer.vW = layer.gW.multiply(this.beta).add(layer.gW.multiply(1 - this.beta));
    layer.vb = layer.gb.multiply(this.beta).add(layer.gb.multiply(1 - this.beta));

    layer.W = layer.W.subtract(layer.vW.multiply(learningRate));
    layer.b = layer.b.subtract(layer.vb.multiply(learningRate));
  }
}
