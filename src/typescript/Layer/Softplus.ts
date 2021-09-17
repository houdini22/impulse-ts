import { Matrix } from "../Math/Matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";
import { getComputation } from "../Computation";

class SoftplusLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return getComputation().execute("softplusActivation", m) as Matrix;
  }

  getType(): LayerType {
    return LayerType.softplus;
  }
}

export { SoftplusLayer };
