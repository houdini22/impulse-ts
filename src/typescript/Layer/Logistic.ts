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

  loss(output: Matrix, predictions: Matrix): number {
    return getComputation().execute("logisticLoss", output, predictions) as number;
  }

  error(m: number): number {
    return 1.0 / m;
  }

  backpropagation(delta: Matrix): Matrix {
    this.dZ = getComputation().execute("logisticBackpropagation", delta, this.A) as Matrix;
    return this.dZ;
  }
}

export { LogisticLayer };
