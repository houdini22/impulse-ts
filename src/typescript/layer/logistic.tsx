import { Matrix } from "../math/matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./abstract1d";
import { getCurrentComputation } from "../computation/utils";

class LogisticLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return getCurrentComputation().execute("logisticActivation", m);
  }

  derivative(m: Matrix): Matrix {
    return getCurrentComputation().execute("logisticDerivative", m);
  }

  getType(): LayerType {
    return LayerType.logistic;
  }

  loss(output: Matrix, predictions: Matrix): number {
    return getCurrentComputation().execute("logisticLoss", output, predictions);
  }

  error(m: number): number {
    return -1.0 / m;
  }
}

export { LogisticLayer };
