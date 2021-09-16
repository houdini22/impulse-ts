import { Matrix } from "../math/matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./abstract1d";
import { getComputation } from "../computation/utils";

class SoftmaxLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return getComputation().execute("softmaxActivation", m);
  }

  derivative(m: Matrix): Matrix {
    throw new Error("Unsupported usage.");
  }

  getType(): LayerType {
    return LayerType.softmax;
  }

  loss(output: Matrix, predictions: Matrix): number {
    return getComputation().execute("softmaxLoss", output, predictions);
  }

  error(m: number): number {
    return -1.0 / m;
  }
}

export { SoftmaxLayer };
