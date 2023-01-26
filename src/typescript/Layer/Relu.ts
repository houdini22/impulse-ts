import { Matrix } from "impulse-math-ts";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";
import { getComputation } from "impulse-math-ts";

class ReluLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return m.setMin(0.0);
  }

  getType(): LayerType {
    return LayerType.relu;
  }

  derivative(delta: Matrix) {
    return getComputation().execute("reluBackpropagation", delta, this.A) as Matrix;
  }
}

export { ReluLayer };
