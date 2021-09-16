import { Matrix } from "../math/Matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";
import { getComputation } from "../computation/utils";

class LogisticLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return getComputation().execute("logisticActivation", m);
  }

  derivative(m: Matrix): Matrix {
    return getComputation().execute("logisticDerivative", m);
  }

  getType(): LayerType {
    return LayerType.logistic;
  }

  loss(output: Matrix, predictions: Matrix): number {
    return getComputation().execute("logisticLoss", output, predictions);
  }

  error(m: number): number {
    return -1.0 / m;
  }
}

export { LogisticLayer };
