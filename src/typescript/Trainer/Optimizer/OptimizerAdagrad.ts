import { AbstractOptimizer } from "./AbstractOptimizer";
import { Layers } from "../../types";

export class OptimizerAdagrad extends AbstractOptimizer {
  optimize(layer: Layers): void {
    this.adagrad(layer, this.learningRate);
  }

  adagrad(layer: Layers, learningRate: number): void {
    layer.dW = layer.dW.add(layer.gW.pow(2));
    layer.W = layer.W.subtract(layer.gW.multiply(learningRate).divide(layer.dW.sqrt().add(1e-8)).multiply(layer.gW));

    layer.db = layer.db.add(layer.gb.pow(2));
    layer.b = layer.b.subtract(layer.db.multiply(learningRate).divide(layer.db.sqrt().add(1e-8)).multiply(layer.gb));
  }
}
