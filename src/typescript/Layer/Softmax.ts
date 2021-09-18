import { Matrix } from "../Math/Matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";

class SoftmaxLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    const max = m.max();
    return m.forEach((num) => num - max).exp();
  }

  getType(): LayerType {
    return LayerType.softmax;
  }

  backpropagation(delta: Matrix): Matrix {
    return this.A.exp().divide(this.A.sum());
  }
}

export { SoftmaxLayer };
