import { Matrix, tanhActivation, tanhDerivative } from "../math/matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./abstract1d";

class TanhLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return tanhActivation(m);
  }

  derivative(m: Matrix): Matrix {
    return tanhDerivative(m);
  }

  getType(): LayerType {
    return LayerType.tanh;
  }

  loss(output: Matrix, predictions: Matrix): number {
    return 0.0; // todo
  }

  error(m: number): number {
    return 0.0; // todo
  }
}

export { TanhLayer };
