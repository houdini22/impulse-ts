import {
  logisticActivation,
  logisticDerivative,
  Matrix,
  logisticLoss,
} from "../math/matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./abstract1d";

class LogisticLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return logisticActivation(m);
  }

  derivative(m: Matrix): Matrix {
    return logisticDerivative(m);
  }

  getType(): LayerType {
    return LayerType.logistic;
  }

  loss(output: Matrix, predictions: Matrix): number {
    return logisticLoss(output, predictions);
  }

  error(m: number): number {
    return -1.0 / m;
  }
}

export { LogisticLayer };
