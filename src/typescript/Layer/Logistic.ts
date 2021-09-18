import { Matrix } from "../Math/Matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";
import { getComputation } from "../Computation";
import { logisticActivation } from "../Computation/ComputationCPU";

class LogisticLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return m.multiply(-1).exp().add(1).fraction(1);
  }

  getType(): LayerType {
    return LayerType.logistic;
  }

  backpropagation(delta: Matrix): Matrix {
    return this.activation(delta).multiply(this.activation(delta).minusOne());
  }
}

export { LogisticLayer };
