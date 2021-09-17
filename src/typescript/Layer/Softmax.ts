import { Matrix } from "../Math/Matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";
import { getComputation } from "../Computation";

class SoftmaxLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return this.A.exp().divide(this.A.sum());
  }

  getType(): LayerType {
    return LayerType.softmax;
  }
  backpropagation(delta: Matrix): Matrix {
    return this.A.exp().divide(this.A.sum());
  }
}

export { SoftmaxLayer };
