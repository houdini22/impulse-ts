import { AbstractComputation } from "./AbstractComputation";
import { Matrix } from "../Math/Matrix";

export const elementWiseDivide = (m1: Matrix, m2: Matrix): Matrix => {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal.");
  }

  const data = [];

  for (let row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m1.cols; col += 1) {
      data[row][col] = m1.data[row][col] / m2.data[row][col];
    }
  }

  return new Matrix(m1.rows, m2.cols, data);
};

export const divideNumber = (m1: Matrix, num: number): Matrix => {
  const data = [];

  for (let row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m1.cols; col += 1) {
      data[row][col] = m1.data[row][col] / num;
    }
  }

  return new Matrix(m1.rows, m1.cols, data);
};

export const softmaxActivation = (m: Matrix): Matrix => {
  const data = [];
  for (let row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m.cols; col += 1) {
      data[row][col] = Math.exp(m.data[row][col]);
    }
  }
  const calculated = new Matrix(m.rows, m.cols, data);
  const divider = new Matrix(1, m.cols, calculated.colwiseSum().data).replicate(m.rows, 1);

  return new Matrix(m.rows, m.cols, elementWiseDivide(calculated, divider).data);
};

export const softmaxLoss = (output: Matrix, predictions: Matrix): number => {
  const data = [];
  const epsilon = 1e-8;

  for (let row = 0; row < predictions.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < predictions.cols; col += 1) {
      data[row][col] = output.data[row][col] * Math.log(predictions.data[row][col] + epsilon);
    }
  }

  return new Matrix(output.rows, output.cols, data).sum();
};

export const logisticActivation = (m: Matrix): Matrix => {
  const data = [];

  for (let row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m.cols; col += 1) {
      data[row][col] = 1.0 / (1.0 + Math.exp(-m.data[row][col]));
    }
  }
  return new Matrix(m.rows, m.cols, data);
};

export const logisticLoss = (output: Matrix, predictions: Matrix): number => {
  const log = [];
  const epsilon = 1e-8;

  for (let row = 0; row < output.rows; row += 1) {
    log[row] = [];
    for (let col = 0; col < output.cols; col += 1) {
      if (output.data) {
        log[row][col] = Math.log(output.data[row][col] + epsilon);
      }
    }
  }
  const logMatrix = new Matrix(output.rows, output.cols, log);

  const sub = [];
  for (let row = 0; row < output.rows; row += 1) {
    sub[row] = [];
    for (let col = 0; col < output.cols; col += 1) {
      if (output.data) {
        sub[row][col] = 1.0 - output.data[row][col];
      }
    }
  }
  const subMatrix = new Matrix(output.rows, output.cols, sub);

  const data = [];
  for (let row = 0; row < predictions.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < predictions.cols; col += 1) {
      if (predictions.data) {
        data[row][col] = Math.log(1.0 - predictions.data[row][col] + epsilon);
      }
    }
  }
  const logSubMatrix = new Matrix(predictions.rows, predictions.cols, data);

  return subtract(
    elementWiseMultiply(multiplyNumber(output, -1), logMatrix),
    elementWiseMultiply(subMatrix, logSubMatrix)
  ).sum();
};

export const logisticBackward = (linearCache: Matrix, activationCache: Matrix): Matrix => {
  const s = [];
  const s2 = [];
  for (let row = 0; row < linearCache.rows; row += 1) {
    s[row] = [];
    s2[row] = [];
    for (let col = 0; col < linearCache.cols; col += 1) {
      if (linearCache.data) {
        s[row][col] = 1 / (1 + Math.exp(-linearCache.data[row][col]));
        s2[row][col] = 1 - s[row][col];
      }
    }
  }
  const S = new Matrix(linearCache.rows, linearCache.cols, s);
  const S2 = new Matrix(linearCache.rows, linearCache.cols, s2);

  return elementWiseMultiply(activationCache, elementWiseMultiply(S, S2)) as Matrix;
};

export const tanhActivation = (m: Matrix): Matrix => {
  const data = [];
  for (let row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m.cols; col += 1) {
      if (m.data) {
        data[row][col] = 2.0 / (1.0 + Math.exp(-2.0 * m.data[row][col])) - 1.0;
      }
    }
  }
  return new Matrix(m.rows, m.cols, data);
};

export const reluActivation = (m: Matrix): Matrix => {
  const data = [];
  for (let row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m.cols; col += 1) {
      if (m.data) {
        data[row][col] = Math.max(0.0, m.data[row][col]);
      }
    }
  }
  return new Matrix(m.rows, m.cols, data);
};

export const reluBackpropagation = (linearCache: Matrix, activationCache: Matrix): Matrix => {
  const data = [];
  for (let row = 0; row < linearCache.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < linearCache.cols; col += 1) {
      if (linearCache.data) {
        data[row][col] = Math.max(linearCache.data[row][col], 0);
      }
    }
  }
  return new Matrix(linearCache.rows, linearCache.cols, data);
};

export const softplusActivation = (m: Matrix): Matrix => {
  const data = [];
  for (let row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m.cols; col += 1) {
      if (m.data) {
        data[row][col] = Math.log(1 + Math.exp(m.data[row][col]));
      }
    }
  }
  return new Matrix(m.rows, m.cols, data);
};

export const penalty = (m: Matrix): number => {
  const data = [];
  for (let row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m.cols; col += 1) {
      if (m.data) {
        data[row][col] = Math.pow(m.data[row][col], 2);
      }
    }
  }
  return new Matrix(m.rows, m.cols, data).sum();
};

export const sqrt = (m: Matrix): Matrix => {
  const data = [];
  for (let row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m.cols; col += 1) {
      if (m.data) {
        data[row][col] = Math.sqrt(m.data[row][col] + 1e-8);
      }
    }
  }
  return new Matrix(m.rows, m.cols, data);
};

export const purelinLoss = (output: Matrix, predictions: Matrix): number => {
  const data = [];
  for (let row = 0; row < output.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < output.cols; col += 1) {
      if (output.data) {
        data[row][col] = output.data[row][col] - Math.pow(predictions[row][col], 2);
      }
    }
  }
  return new Matrix(output.rows, output.cols, data).sum();
};

export const multiply = (m1: Matrix, m2: Matrix): Matrix => {
  if (m1.cols !== m2.rows) {
    throw new Error(`DIMENSIONS error. m1.cols ${m1.cols} !== m2.rows ${m2.rows}.`);
  }
  const data = [];
  for (let row = 0; row < m1.rows; ++row) {
    data[row] = new Array(m2.cols);
    for (let col = 0; col < m2.cols; ++col) {
      data[row][col] = 0;
      for (let i = 0; i < m1.cols; ++i) {
        if (m1.data && m2.data) {
          data[row][col] += m1.data[row][i] * m2.data[i][col];
        }
      }
    }
  }
  return new Matrix(m1.rows, m2.cols, data);
};

export const add = (m1: Matrix, m2: Matrix): Matrix => {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }
  if (m1.cols !== m2.cols) {
    throw new Error(`COLS number not equal. m1.cols ${m1.cols} !== m2.cols ${m2.cols}`);
  }

  const data = [];
  for (let row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m1.cols; col += 1) {
      if (m1.data && m2.data) {
        data[row][col] = m1.data[row][col] + m2.data[row][col];
      }
    }
  }
  return new Matrix(m1.rows, m1.cols, data);
};

export const subtract = (m1: Matrix, m2: Matrix): Matrix => {
  if (m1.rows !== m2.rows) {
    throw new Error(`ROWS number not equal: m1.rows ${m1.rows} !== m2.rows ${m2.rows}`);
  }
  if (m1.cols !== m2.cols) {
    throw new Error(`COLS number not equal: m1.cols ${m1.cols} !== m2.cols ${m2.cols}`);
  }

  const data = [];
  for (let row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m1.cols; col += 1) {
      if (m1.data && m2.data) {
        data[row][col] = m1.data[row][col] - m2.data[row][col];
      }
    }
  }
  return new Matrix(m1.rows, m1.cols, data);
};

export const fillRandom = (m1: Matrix, parameter: number): Matrix => {
  const data = [];
  for (let row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m1.cols; col += 1) {
      data[row][col] = (Math.random() * 4 - 2) * Math.sqrt(2 / parameter); // todo: gaussian distribution
    }
  }
  return new Matrix(m1.rows, m1.cols, data);
};

export const fillZeros = (m1: Matrix): Matrix => {
  const data = [];
  for (let row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m1.cols; col += 1) {
      data[row][col] = 0;
    }
  }
  return new Matrix(m1.rows, m1.cols, data);
};

export const setOnes = (m1: Matrix): Matrix => {
  const data = [];
  for (let row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m1.cols; col += 1) {
      data[row][col] = 1;
    }
  }
  return new Matrix(m1.rows, m1.cols, data);
};

export const elementWiseMultiply = (m1: Matrix, m2: Matrix): Matrix => {
  if (m1.rows !== m2.rows) {
    throw new Error(`ROWS number not equal: m1.rows ${m1.rows} !== m2.rows ${m2.rows}`);
  }
  if (m1.cols !== m2.cols) {
    throw new Error(`COLS number not equal: m1.cols ${m1.cols} !== m2.cols ${m2.cols}`);
  }

  const data = [];
  for (let row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m1.cols; col += 1) {
      if (m1.data && m2.data) {
        data[row][col] = m1.data[row][col] * m2.data[row][col];
      }
    }
  }
  return new Matrix(m1.rows, m1.cols, data);
};

export const multiplyNumber = (m1: Matrix, num: number): Matrix => {
  const data = [];
  for (let row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m1.cols; col += 1) {
      if (m1.data) {
        data[row][col] = m1.data[row][col] * num;
      }
    }
  }
  return new Matrix(m1.rows, m1.cols, data);
};

export const subtractFromNumber = (m1: Matrix, num: number): Matrix => {
  const data = [];
  for (let row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m1.cols; col += 1) {
      if (m1.data) {
        data[row][col] = num - m1.data[row][col];
      }
    }
  }
  return new Matrix(m1.rows, m1.cols, data);
};

export const pow = (m1: Matrix, pow: number): Matrix => {
  const data = [];
  for (let row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m1.cols; col += 1) {
      if (m1.data) {
        data[row][col] = Math.pow(m1.data[row][col], pow);
      }
    }
  }
  return new Matrix(m1.rows, m1.cols, data);
};

export const transpose = (m: Matrix): Matrix => {
  const data = [];
  for (let col = 0; col < m.cols; col += 1) {
    data[col] = [];
    for (let row = 0; row < m.rows; row += 1) {
      if (m.data) {
        data[col][row] = m.data[row][col];
      }
    }
  }
  return new Matrix(m.cols, m.rows, data);
};

export class ComputationCPU extends AbstractComputation {
  constructor() {
    super();

    this.addKernel("multiply", multiply);
    this.addKernel("add", add);
    this.addKernel("subtract", subtract);
    this.addKernel("subtractFromNumber", subtractFromNumber);
    this.addKernel("fillRandom", fillRandom);
    this.addKernel("fillZeros", fillZeros);
    this.addKernel("elementWiseMultiply", elementWiseMultiply);
    this.addKernel("multiplyNumber", multiplyNumber);
    this.addKernel("elementWiseDivide", elementWiseDivide);
    this.addKernel("divideNumber", divideNumber);
    this.addKernel("softmaxActivation", softmaxActivation);
    this.addKernel("softmaxLoss", softmaxLoss);
    this.addKernel("logisticActivation", logisticActivation);
    this.addKernel("logisticLoss", logisticLoss);
    this.addKernel("logisticBackward", logisticBackward);
    this.addKernel("tanhActivation", tanhActivation);
    this.addKernel("reluActivation", reluActivation);
    this.addKernel("reluBackpropagation", reluBackpropagation);
    this.addKernel("softplusActivation", softplusActivation);
    this.addKernel("penalty", penalty);
    this.addKernel("sqrt", sqrt);
    this.addKernel("purelinLoss", purelinLoss);
    this.addKernel("transpose", transpose);
    this.addKernel("pow", pow);
  }
}
