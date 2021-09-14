import {
  Matrix,
  purelinLoss,
  reluActivation,
  reluDerivative,
  setOnes,
} from "../math/matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./abstract1d";

class PurelinLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return this.Z;
  }

  derivative(m: Matrix): Matrix {
    return setOnes(this.Z);
  }

  getType(): LayerType {
    return LayerType.purelin;
  }

  loss(output: Matrix, predictions: Matrix): number {
    return purelinLoss(output, predictions);
  }

  error(m: number): number {
    return 1 / (2 * m);
  }
}

export { PurelinLayer };
