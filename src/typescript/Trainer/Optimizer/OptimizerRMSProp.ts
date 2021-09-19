import { AbstractOptimizer } from "./AbstractOptimizer";
import { Layers } from "../../types";

export class OptimizerRMSProp extends AbstractOptimizer {
  protected alpha = 1e-3;
  protected beta = 0.9;

  setBeta(beta: number): OptimizerRMSProp {
    this.beta = beta;
    return this;
  }

  setAlpha(alpha: number): OptimizerRMSProp {
    this.alpha = alpha;
    return this;
  }

  optimize(layer: Layers): void {
    this.rmsprop(layer, this.learningRate, this.alpha, this.beta);
  }

  rmsprop(layer: Layers, learningRate: number, alpha: number, beta: number): void {
    layer.sW = layer.sW.multiply(beta).add(layer.gW.pow(2).multiply(1 - beta));
    layer.sb = layer.sb.multiply(beta).add(layer.gb.pow(2).multiply(1 - beta));

    layer.W = layer.W.subtract(layer.gW.multiply(alpha).divide(layer.sW.sqrt().add(1e-8)));
    layer.b = layer.b.subtract(layer.gb.multiply(alpha).divide(layer.sb.sqrt().add(1e-8)));
  }
}
