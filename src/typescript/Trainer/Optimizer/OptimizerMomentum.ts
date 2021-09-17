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
    layer.vW = getComputation().execute(
      "add",
      getComputation().execute("multiplyNumber", layer.vW, this.beta) as Matrix,
      getComputation().execute("multiplyNumber", layer.gW, 1 - this.beta) as Matrix
    ) as Matrix;
    layer.vb = getComputation().execute(
      "add",
      getComputation().execute("multiplyNumber", layer.vb, this.beta) as Matrix,
      getComputation().execute("multiplyNumber", layer.gb, 1 - this.beta) as Matrix
    ) as Matrix;

    layer.W = getComputation().execute(
      "subtract",
      layer.W,
      getComputation().execute("multiplyNumber", layer.vW, learningRate) as Matrix
    ) as Matrix;
    layer.b = getComputation().execute(
      "subtract",
      layer.b,
      getComputation().execute("multiplyNumber", layer.vb, learningRate) as Matrix
    ) as Matrix;
  }
}
