import { Matrix } from "../Math/Matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";
import { getComputation } from "../Computation";

class TanhLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return m.exp().divide(m.colwiseSum().replicate(m.rows, 1));
  }

  getType(): LayerType {
    return LayerType.tanh;
  }

  backpropagation(sigma: Matrix): Matrix {
    return getComputation().execute("tanhBackpropagation", sigma, this.A) as Matrix;
  }
}

export { TanhLayer };
