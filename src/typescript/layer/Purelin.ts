import { Matrix } from "../math/Matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";
import { getComputation } from "../computation/utils";

class PurelinLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return this.Z;
  }

  derivative(m: Matrix): Matrix {
    return getComputation().execute("setOnes", this.Z) as Matrix;
  }

  getType(): LayerType {
    return LayerType.purelin;
  }

  loss(output: Matrix, predictions: Matrix): number {
    return getComputation().execute(
      "purelinLoss",
      output,
      predictions
    ) as number;
  }

  error(m: number): number {
    return 1 / (2 * m);
  }
}

export { PurelinLayer };
