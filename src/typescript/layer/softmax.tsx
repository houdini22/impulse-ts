import { Matrix } from "../math/matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./abstract1d";
import { getCurrentComputation } from "../computation/utils";

class SoftmaxLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return getCurrentComputation().execute("softmaxActivation", m);
  }

  derivative(m: Matrix): Matrix {
    throw new Error("Unsupported usage.");
  }

  getType(): LayerType {
    return LayerType.softmax;
  }

  loss(output: Matrix, predictions: Matrix): number {
    return getCurrentComputation().execute("softmaxLoss", output, predictions);
  }

  error(m: number): number {
    return -1.0 / m;
  }
}

export { SoftmaxLayer };
