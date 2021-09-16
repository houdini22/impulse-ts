import { Matrix } from "../Math/Matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";
import { getComputation } from "../Computation";

class SoftplusLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return getComputation().execute("softplusActivation", m) as Matrix;
  }

  derivative(m: Matrix): Matrix {
    return getComputation().execute("softplusDerivative", m) as Matrix;
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
