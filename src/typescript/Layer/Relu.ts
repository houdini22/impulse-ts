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

  backpropagation(delta: Matrix) {
    return getComputation().execute("reluBackpropagation", delta, this.A) as Matrix;
  }
}

export { ReluLayer };
