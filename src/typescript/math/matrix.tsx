import {
  MatrixMultiply,
  MatrixElementWiseAdd,
  MatrixElementWiseSubtract,
  MatrixElementWiseMultiply,
  MatrixElementWiseDivide,
  MatrixSum,
  MatrixFillRandom,
  SoftmaxActivation,
  SoftmaxLoss,
  LogisticActivation,
  LogisticDerivative,
  LogisticLoss,
} from "impulseTsToolkit";
import { Buffer } from "buffer";

export class Matrix {
  public rows = 0;
  public cols = 0;
  public data = null;

  constructor(rows = 0, cols = 0, data = new Array(rows * cols)) {
    this.resize(rows, cols);
    this.generateData(data);
  }

  resize(rows, cols): Matrix {
    this.rows = rows;
    this.cols = cols;

    return this;
  }

  generateData(arr: Array<number> = new Array()): Matrix {
    this.data = Float64Array.from(arr);
    return this;
  }

  toBuffer(): ArrayBuffer {
    const result = new ArrayBuffer(this.rows * this.cols * 64);
    const view = new DataView(result, 0, this.rows * this.cols * 64);
    this.data.forEach((num, i) => {
      view.setFloat64(i, num);
    })
    return result;
  }
}

export const multiply = (m1: Matrix, m2: Matrix): Matrix => {
  if (m1.cols !== m2.rows) {
    throw new Error("DIMENSIONS error.");
  }

  return new Matrix(m1.rows, m2.cols, Array.from(MatrixMultiply(
      m1.toBuffer(),
      m1.rows,
      m1.cols,
      m2.toBuffer(),
      m2.rows,
      m2.cols
  )));
};

export const elementWiseAdd = (m1: Matrix, m2: Matrix): Matrix => {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal.");
  }

  const result = new Matrix(m1.rows, m2.cols, Array.from(MatrixElementWiseAdd(
      m1.toBuffer(),
      m1.rows,
      m1.cols,
      m2.toBuffer(),
      m2.rows,
      m2.cols
  )));

  return result;
};

export const elementWiseSubtract = (m1: Matrix, m2: Matrix): Matrix => {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal.");
  }

  const data = new Uint8Array(MatrixElementWiseSubtract(
      m1.toBuffer(),
      m1.rows,
      m1.cols,
      m2.toBuffer(),
      m2.rows,
      m2.cols
  ), 0, m1.rows * m1.cols);
  const result = new Matrix(m1.rows, m2.cols, Array.from(data));

  return result;
};

export const resize = (m1: Matrix, rows: number, cols: number): void => {
  m1.resize(rows, cols);
};

export const fillRandom = (m1: Matrix, parameter: number): Matrix => {
  return new Matrix(m1.rows, m1.cols, Array.from(MatrixFillRandom(
      m1.rows,
      m1.cols,
      parameter
  )));
};

export const elementWiseMultiply = (m1: Matrix, m2: Matrix): Matrix => {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal.");
  }

  const data = new Uint8Array(MatrixElementWiseMultiply(
      m1.toBuffer(),
      m1.rows,
      m1.cols,
      m2.toBuffer(),
      m2.rows,
      m2.cols
  ), 0, m1.rows * m1.cols);
  const result = new Matrix(m1.rows, m2.cols, Array.from(data));

  return result;
};

export const sum = (m: Matrix): number => {
  return MatrixSum(m.toBuffer(), m.rows, m.cols);
};

export const cols = (m: Matrix): number => {
  return m.cols;
};

export const elementWiseDivide = (m1: Matrix, m2: Matrix): Matrix => {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal.");
  }
  const data = new Uint8Array(MatrixElementWiseDivide(
      m1.toBuffer(),
      m1.rows,
      m1.cols,
      m2.toBuffer(),
      m2.rows,
      m2.cols
  ), 0, m1.rows * m1.cols);
  const result = new Matrix(m1.rows, m2.cols, Array.from(data));

  return result;
};

export const softmaxActivation = (m: Matrix): Matrix => {
  const result = new Matrix(m.rows, m.cols);
  result.data = SoftmaxActivation(m.data, m.rows, m.cols);
  return result;
};

export const softmaxLoss = (m1: Matrix, m2: Matrix): number => {
  const result = new Matrix(m1.rows, m1.cols);
  result.data = SoftmaxLoss(
    m1.data,
    m1.rows,
    m1.cols,
    m2.data,
    m2.rows,
    m2.cols
  );
  return MatrixSum(result, result.rows, result.cols);
};

export const logisticActivation = (m: Matrix): Matrix => {
  const result = new Matrix(m.rows, m.cols);
  result.data = LogisticActivation(m.data, m.rows, m.cols);
  return result;
};

export const logisticDerivative = (m: Matrix): Matrix => {
  const result = new Matrix(m.rows, m.cols);
  result.data = LogisticDerivative(m, m.rows, m.cols);
  return result;
};

export const logisticLoss = (m1: Matrix, m2: Matrix): number => {
  const result = new Matrix(m1.rows, m1.cols);
  result.data = LogisticLoss(
    m1.data,
    m1.rows,
    m1.cols,
    m2.data,
    m2.rows,
    m2.cols
  );
  return MatrixSum(result, result.rows, result.cols);
};
