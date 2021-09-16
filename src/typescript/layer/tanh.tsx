import { Matrix } from "../math/matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./abstract1d";
import { getComputation } from "../computation/utils";

class TanhLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return getComputation().execute("tanhActivation", m);
  }

  derivative(m: Matrix): Matrix {
    return getComputation().execute("tanhDerivative", m);
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
