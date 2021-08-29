import {
  add, colwise, elementWiseDivide, elementWiseMultiply, forEach, Matrix, replicateRows, subtract,
  sum
} from '../math/matrix'
import {LayerType} from '../types'
import {AbstractLayer1D} from './abstract1d'

class SoftmaxLayer extends AbstractLayer1D {
  activation(m: Matrix): Matrix {
    const t = m.forEach((x) => Math.exp(x))
    const divider = replicateRows(colwise(t, (colVector) => {
      return sum(colVector)
    }), t.rows)
    return elementWiseDivide(t, divider)
  }

  derivative(): Matrix {
    throw new Error('Unsupported usage.')
  }

  getType(): LayerType {
    return LayerType.softmax
  }

  loss(output: Matrix, predictions: Matrix): number {
    const loss = subtract(output, forEach(predictions, (x) => Math.log(x)))
    return sum(loss)
  }

  error(m: number): number {
    return (-1.0 / m)
  }
}

export {SoftmaxLayer}
