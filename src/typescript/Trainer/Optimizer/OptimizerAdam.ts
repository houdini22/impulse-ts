import { AbstractOptimizer } from "./AbstractOptimizer";
import { Layers } from "../../types";

export class OptimizerAdam extends AbstractOptimizer {
  protected beta1 = 0.9;
  protected beta2 = 0.999;

  setBeta1(beta1: number): OptimizerAdam {
    this.beta1 = beta1;
    return this;
  }

  setBeta2(beta2: number): OptimizerAdam {
    this.beta2 = beta2;
    return this;
  }

  optimize(layer: Layers): void {
    this.adam(layer, this.learningRate, this.t);
  }

  adam(layer: Layers, learningRate: number, t: number): void {
    layer.vW = layer.vW.multiply(this.beta1).add(layer.gW.multiply(1 - this.beta1));
    layer.vb = layer.vb.multiply(this.beta1).add(layer.gb.multiply(1 - this.beta1));

    layer.sW = layer.sW.multiply(this.beta2).add(layer.sW.pow(2).multiply(1 - this.beta2));
    layer.sb = layer.sb.multiply(this.beta2).add(layer.sb.pow(2).multiply(1 - this.beta2));

    const vWCorrected = layer.vW.divide(1 - Math.pow(this.beta1, 2));
    const vbCorrected = layer.vb.divide(1 - Math.pow(this.beta1, 2));

    const sWCorrected = layer.sW.add(1e-8).sqrt();
    const sbCorrected = layer.sb.add(1e-8).sqrt();

    layer.W = layer.W.subtract(vWCorrected.divide(sWCorrected).multiply(learningRate));
    layer.b = layer.b.subtract(vbCorrected.divide(sbCorrected).multiply(learningRate));
  }
}
