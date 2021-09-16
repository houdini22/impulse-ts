import { AbstractOptimizer } from "./AbstractOptimizer";
import { Layers } from "../../types";
import { getComputation } from "../../Computation/utils";
import { Matrix } from "../../Math/Matrix";

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
    layer.dW = getComputation().execute(
      "add",
      layer.dW,
      getComputation().execute("multiplyNumber", layer.dW, 1 - this.beta) as Matrix
    ) as Matrix;
    layer.db = getComputation().execute(
      "add",
      layer.db,
      getComputation().execute("multiplyNumber", layer.db, 1 - this.beta) as Matrix
    ) as Matrix;

    layer.W = getComputation().execute(
      "subtract",
      layer.W,
      getComputation().execute("multiplyNumber", layer.dW, learningRate) as Matrix
    ) as Matrix;
    layer.b = getComputation().execute(
      "subtract",
      layer.b,
      getComputation().execute("multiplyNumber", layer.db, learningRate) as Matrix
    ) as Matrix;
  }
}
