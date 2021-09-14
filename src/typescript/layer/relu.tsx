import { Matrix, reluActivation, reluDerivative } from "../math/matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./abstract1d";

class ReluLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return reluActivation(m);
  }

  derivative(m: Matrix): Matrix {
    return reluDerivative(m);
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
