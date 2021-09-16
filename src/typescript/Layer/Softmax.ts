import { Matrix } from "../Math/Matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";
import { getComputation } from "../Computation/utils";

class SoftmaxLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return getComputation().execute("softmaxActivation", m) as Matrix;
  }

  derivative(m: Matrix): Matrix {
    throw new Error("Unsupported usage.");
  }

  getType(): LayerType {
    return LayerType.softmax;
  }

  loss(output: Matrix, predictions: Matrix): number {
    return getComputation().execute("softmaxLoss", output, predictions) as number;
  }

  error(m: number): number {
    return -1.0 / m;
  }
}

export { SoftmaxLayer };
