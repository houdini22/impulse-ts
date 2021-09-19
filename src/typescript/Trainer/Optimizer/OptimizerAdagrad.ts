import { AbstractOptimizer } from "./AbstractOptimizer";
import { Layers } from "../../types";

export class OptimizerAdagrad extends AbstractOptimizer {
  optimize(layer: Layers): void {
    this.adadelta(layer, this.learningRate, this.t);
  }

  adadelta(layer: Layers, learningRate: number, batchSize: number): void {
    layer.dW = layer.dW.add(layer.gW.pow(2));
    layer.W = layer.W.subtract(layer.gW.multiply(learningRate).divide(layer.dW).sqrt());

    layer.db = layer.db.add(layer.gb.pow(2));
    layer.b = layer.b.subtract(layer.db.multiply(learningRate).divide(layer.db).sqrt());
  }
}
