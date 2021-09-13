import { Matrix, softmaxActivation, softmaxLoss } from "../math/matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./abstract1d";

class SoftmaxLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return softmaxActivation(m);
  }

  derivative(): Matrix {
    throw new Error("Unsupported usage.");
  }

  getType(): LayerType {
    return LayerType.softmax;
  }

  loss(output: Matrix, predictions: Matrix): number {
    return softmaxLoss(output, predictions);
  }

  error(m: number): number {
    return -1.0 / m;
  }
}

export { SoftmaxLayer };
