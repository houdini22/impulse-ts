import { Matrix } from "impulse-math-ts";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";

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
