import { Matrix } from "../Math/Matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";
import { getComputation } from "../Computation";

class ReluLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return getComputation().execute("reluActivation", m) as Matrix;
  }

  getType(): LayerType {
    return LayerType.relu;
  }

  loss(output: Matrix, predictions: Matrix): number {
    return 0.0; // todo
  }

  error(m: number): number {
    return 0.0; // todo
  }

  backpropagation(delta: Matrix) {
    this.dZ = getComputation().execute("reluBackpropagation", delta, this.A) as Matrix;
    return this.dZ;
  }
}

export { ReluLayer };
