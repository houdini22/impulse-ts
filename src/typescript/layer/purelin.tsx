import { Matrix } from "../math/matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./abstract1d";
import { getCurrentComputation } from "../computation/utils";

class PurelinLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return this.Z;
  }

  derivative(m: Matrix): Matrix {
    return getCurrentComputation().execute("setOnes", this.Z);
  }

  getType(): LayerType {
    return LayerType.purelin;
  }

  loss(output: Matrix, predictions: Matrix): number {
    return getCurrentComputation().execute("purelinLoss", output, predictions);
  }

  error(m: number): number {
    return 1 / (2 * m);
  }
}

export { PurelinLayer };
