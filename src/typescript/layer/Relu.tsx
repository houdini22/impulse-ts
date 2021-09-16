import { Matrix } from "../math/Matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";
import { getComputation } from "../computation/utils";

class ReluLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return getComputation().execute("reluActivation", m);
  }

  derivative(m: Matrix): Matrix {
    return getComputation().execute("reluDerivative", m);
  }

  getType(): LayerType {
    return LayerType.relu;
  }

  loss(output: Matrix, predictions: Matrix): number {
    return 0.0; // todo
  }

  error(m: number): number {
    return 0.0; // todo
  }
}

export { ReluLayer };
