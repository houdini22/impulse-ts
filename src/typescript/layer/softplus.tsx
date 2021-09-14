import { Matrix, softplusActivation, softplusDerivative } from "../math/matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./abstract1d";

class SoftplusLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return softplusActivation(m);
  }

  derivative(m: Matrix): Matrix {
    return softplusDerivative(m);
  }

  getType(): LayerType {
    return LayerType.softplus;
  }

  loss(output: Matrix, predictions: Matrix): number {
    return 0.0; // todo
  }

  error(m: number): number {
    return 0.0; // todo
  }
}

export { SoftplusLayer };
