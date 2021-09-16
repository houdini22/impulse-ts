import { Matrix } from "../math/matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./abstract1d";
import { getComputation } from "../computation/utils";

class SoftplusLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return getComputation().execute("softplusActivation", m);
  }

  derivative(m: Matrix): Matrix {
    return getComputation().execute("softplusDerivative", m);
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
