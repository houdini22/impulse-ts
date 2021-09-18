import { Matrix } from "../Math/Matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";
import { getComputation } from "../Computation";
import { tanhActivation } from "../Computation/ComputationCPU";

class TanhLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return m
      .multiply(-2)
      .exp()
      .add(1)
      .forEach((num) => 2 / num)
      .subtract(1);
  }

  getType(): LayerType {
    return LayerType.tanh;
  }

  backpropagation(sigma: Matrix): Matrix {
    return this.activation(this.A).pow(2).minusOne();
  }
}

export { TanhLayer };
