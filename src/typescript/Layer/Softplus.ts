import { Matrix } from "impulse-math-ts";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";

class SoftplusLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return m.exp().add(1).log();
  }

  getType(): LayerType {
    return LayerType.softplus;
  }

  derivative(delta: Matrix): Matrix {
    return delta.multiply(-1).exp().add(1).fraction(1);
  }
}

export { SoftplusLayer };
