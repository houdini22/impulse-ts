import { Matrix } from "../Math/Matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";

class SoftmaxLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    const max = m.max();
    return m
      .forEach((num) => num - max)
      .exp()
      .divide(m.rowwiseSum().replicate(1, m.cols).transpose());
  }

  getType(): LayerType {
    return LayerType.softmax;
  }

  backpropagation(delta: Matrix): Matrix {
    return delta.multiply(-1).add(1).fraction(1);
  }
}

export { SoftmaxLayer };
