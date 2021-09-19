import { Matrix } from "../Math/Matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";
import { getComputation } from "../Computation";

class PurelinLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return m;
  }

  getType(): LayerType {
    return LayerType.purelin;
  }

  derivative(delta: Matrix): Matrix {
    return delta.setOnes();
  }
}

export { PurelinLayer };
