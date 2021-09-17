import { Matrix } from "../Math/Matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";
import { getComputation } from "../Computation";

class LogisticLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return getComputation().execute("logisticActivation", m) as Matrix;
  }

  getType(): LayerType {
    return LayerType.logistic;
  }

  backpropagation(sigma: Matrix): Matrix {
    return getComputation().execute("logisticBackpropagation", sigma, this.A) as Matrix;
  }
}

export { LogisticLayer };
