import { Matrix } from "impulse-math-ts";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";

class SoftmaxLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return m.softmax();
  }

  getType(): LayerType {
    return LayerType.softmax;
  }

  derivative(delta: Matrix): Matrix {
    return delta.multiply(-1).add(1).fraction(1);
  }
}

export { SoftmaxLayer };
