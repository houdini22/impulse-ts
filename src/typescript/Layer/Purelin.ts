import { Matrix } from "../Math/Matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";
import { getComputation } from "../Computation";

class PurelinLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return (this.Z = this.A);
  }

  getType(): LayerType {
    return LayerType.purelin;
  }
}

export { PurelinLayer };
