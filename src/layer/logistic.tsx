import { add, elementWiseMultiply, forEach, Matrix, sum } from "../math/matrix";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./abstract1d";

class LogisticLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    return forEach(m, (x) => {
      return 1.0 / (1.0 + Math.exp(-x));
    });
  }

  derivative(): Matrix {
    return elementWiseMultiply(
      this.A,
      forEach(this.A, (x) => {
        return 1.0 - x;
      })
    );
  }

  getType(): LayerType {
    return LayerType.logistic;
  }

  loss(output: Matrix, predictions: Matrix): number {
    const loss: Matrix = add(
      elementWiseMultiply(
        output,
        forEach(predictions, (x) => {
          return Math.log(x);
        })
      ),
      elementWiseMultiply(
        forEach(output, (x) => {
          return 1.0 - x;
        }),
        forEach(predictions, (x) => {
          return Math.log(1.0 - x);
        })
      )
    );

    return sum(loss);
  }

  error(m: number): number {
    return -1.0 / m;
  }
}

export { LogisticLayer };
