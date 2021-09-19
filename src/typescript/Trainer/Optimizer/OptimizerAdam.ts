import { AbstractOptimizer } from "./AbstractOptimizer";
import { Layers } from "../../types";
import { getComputation } from "../../Computation";
import { Matrix } from "../../Math/Matrix";

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

    layer.sW = layer.sW.multiply(this.beta2).add(layer.gW.pow(2).multiply(1 - this.beta2));
    layer.sb = layer.sb.multiply(this.beta2).add(layer.gb.pow(2).multiply(1 - this.beta2));

    const vWCorrected = layer.vW.divide(1 - Math.pow(this.beta1, 2));
    const vbCorrected = layer.vb.divide(1 - Math.pow(this.beta1, 2));

    const sWcorrected = layer.sW.divide(1 - Math.pow(this.beta2, 2));
    const sbCorrected = layer.sb.divide(1 - Math.pow(this.beta2, 2));

    layer.W = layer.W.subtract(vWCorrected.multiply(learningRate).divide(sWcorrected.sqrt().add(1e-8)));
    layer.b = layer.b.subtract(vbCorrected.multiply(learningRate).divide(sbCorrected.sqrt().add(1e-8)));
  }
}
