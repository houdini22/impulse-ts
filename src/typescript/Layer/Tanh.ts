import { Matrix } from "../Math/Matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";

class TanhLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return m.tanh();
  }

  getType(): LayerType {
    return LayerType.tanh;
  }

  derivative(sigma: Matrix): Matrix {
    return this.activation(sigma).pow(2).minusOne();
  }
}

export { TanhLayer };
