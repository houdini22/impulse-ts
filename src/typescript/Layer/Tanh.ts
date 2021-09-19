import { Matrix } from "../Math/Matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";

class TanhLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return m
      .exp()
      .subtract(m.multiply(-1).exp())
      .divide(m.exp().add(m.multiply(-1).exp()));
  }

  getType(): LayerType {
    return LayerType.tanh;
  }

  backpropagation(sigma: Matrix): Matrix {
    return this.activation(sigma).pow(2).minusOne();
  }
}

export { TanhLayer };
