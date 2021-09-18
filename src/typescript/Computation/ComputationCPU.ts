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

export const logisticActivation = (m: Matrix): Matrix => {
  const data = [];
  for (let row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m.cols; col += 1) {
      data[row][col] = 1.0 / (1.0 + Math.exp(-m.data[row][col]));
    }
  }
  return Matrix.from(data);
};

export const logisticLoss = (output: Matrix, predictions: Matrix): number => {
  const log = [];
  const epsilon = 1e-8;

  for (let row = 0; row < predictions.rows; row += 1) {
    log[row] = [];
    for (let col = 0; col < predictions.cols; col += 1) {
      if (predictions.data) {
        log[row][col] = Math.log(predictions.data[row][col] + epsilon);
      }
    }
  }
  const firstMatrix = elementWiseMultiply(new Matrix(predictions.rows, predictions.cols, log), output);

  const sub = [];
  for (let row = 0; row < output.rows; row += 1) {
    sub[row] = [];
    for (let col = 0; col < output.cols; col += 1) {
      if (output.data) {
        sub[row][col] = 1.0 - output.data[row][col];
      }
    }
  }
  const toMultiply2 = new Matrix(output.rows, output.cols, sub);

  const data = [];
  for (let row = 0; row < predictions.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < predictions.cols; col += 1) {
      if (predictions.data) {
        data[row][col] = Math.log(1.0 - predictions.data[row][col] + epsilon);
      }
    }
  }
  const toMultiply1 = new Matrix(predictions.rows, predictions.cols, data);

  return add(
    elementWiseMultiply(multiplyNumber(firstMatrix, -1), output),
    elementWiseMultiply(multiplyNumber(toMultiply1, -1), subtractFromNumber(toMultiply2, 1))
  ).sum();
};

export const logisticBackpropagation = (sigma: Matrix, oldY: Matrix): Matrix => {
  return logisticActivation(oldY).multiply(logisticActivation(oldY).minusOne());
};

export const tanhActivation = (m: Matrix): Matrix => {
  const data = [];
  for (let row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m.cols; col += 1) {
      data[row][col] = (1 - Math.exp(-2 * m.data[row][col])) / (1 + Math.exp(-2 * m.data[row][col]));
    }
  }
  return Matrix.from(data);
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

export const reluBackpropagation = (sigma: Matrix, oldY: Matrix): Matrix => {
  const data = [];
  for (let row = 0; row < sigma.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < sigma.cols; col += 1) {
      if (sigma.data) {
        data[row][col] = oldY.data[row][col] > 0 ? 1 : 0;
      }
    }
  }
  return elementWiseMultiply(new Matrix(sigma.rows, sigma.cols, data), sigma);
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

export const dot = (m1: Matrix, m2: Matrix): Matrix => {
  if (m1.cols !== m2.rows) {
    throw new Error(`DIMENSIONS error. m1.cols ${m1.rows} ${m1.cols} !== m2.rows ${m2.rows} ${m2.cols}.`);
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

export const log = (m1: Matrix, pow: number): Matrix => {
  const data = [];
  for (let row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m1.cols; col += 1) {
      if (m1.data) {
        data[row][col] = Math.log(m1.data[row][col] + 1e-8);
      }
    }
  }
  return new Matrix(m1.rows, m1.cols, data);
};

export const logMinusOne = (m1: Matrix, pow: number): Matrix => {
  const data = [];
  for (let row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m1.cols; col += 1) {
      if (m1.data) {
        data[row][col] = Math.log(1 - m1.data[row][col]);
      }
    }
  }
  return new Matrix(m1.rows, m1.cols, data);
};

export const addNumber = (m1: Matrix, num: number): Matrix => {
  const data = [];
  for (let row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m1.cols; col += 1) {
      data[row][col] = m1.data[row][col] + num;
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

    this.addKernel("multiply", dot);
    this.addKernel("add", add);
    this.addKernel("subtract", subtract);
    this.addKernel("subtractFromNumber", subtractFromNumber);
    this.addKernel("fillRandom", fillRandom);
    this.addKernel("fillZeros", fillZeros);
    this.addKernel("elementWiseMultiply", elementWiseMultiply);
    this.addKernel("multiplyNumber", multiplyNumber);
    this.addKernel("elementWiseDivide", elementWiseDivide);
    this.addKernel("divideNumber", divideNumber);
    this.addKernel("logisticActivation", logisticActivation);
    this.addKernel("logisticLoss", logisticLoss);
    this.addKernel("logisticBackpropagation", logisticBackpropagation);
    this.addKernel("tanhActivation", tanhActivation);
    this.addKernel("reluActivation", reluActivation);
    this.addKernel("reluBackpropagation", reluBackpropagation);
    this.addKernel("softplusActivation", softplusActivation);
    this.addKernel("penalty", penalty);
    this.addKernel("sqrt", sqrt);
    this.addKernel("transpose", transpose);
    this.addKernel("pow", pow);
    this.addKernel("log", log);
    this.addKernel("logMinusOne", logMinusOne);
    this.addKernel("addNumber", addNumber);
  }
}
