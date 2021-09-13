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

export class Matrix {
  public rows = 0;
  public cols = 0;
  public data = null;

  constructor(rows = 0, cols = 0) {
    this.resize(rows, cols);
  }

  resize(rows, cols): Matrix {
    this.rows = rows;
    this.cols = cols;
    this.data = new Array(rows * cols);

    return this;
  }
}

export const multiply = (m1: Matrix, m2: Matrix): Matrix => {
  if (m1.cols !== m2.rows) {
    throw new Error("DIMENSIONS error.");
  }

  const result = new Matrix(m1.rows, m2.cols);
  result.data = MatrixMultiply(
    m1.data,
    m1.rows,
    m1.cols,
    m2.data,
    m2.rows,
    m2.cols
  );

  return result;
};

export const elementWiseAdd = (m1: Matrix, m2: Matrix): Matrix => {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal.");
  }

  const result = new Matrix(m1.rows, m2.cols);
  result.data = MatrixElementWiseAdd(
    m1.data,
    m1.rows,
    m1.cols,
    m2.data,
    m2.rows,
    m2.cols
  );

  return result;
};

export const elementWiseSubtract = (m1: Matrix, m2: Matrix): Matrix => {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal.");
  }

  const result = new Matrix(m1.rows, m2.cols);
  result.data = MatrixElementWiseSubtract(
    m1.data,
    m1.rows,
    m1.cols,
    m2.data,
    m2.rows,
    m2.cols
  );

  return result;
};

export const resize = (m1: Matrix, rows: number, cols: number): void => {
  m1.resize(rows, cols);
};

export const fillRandom = (m1: Matrix, i: number): Matrix => {
  const result = new Matrix(m1.rows, m1.cols);
  result.data = MatrixFillRandom(m1.data, m1.rows, m1.cols, i);
  return result;
};

export const elementWiseMultiply = (m1: Matrix, m2: Matrix): Matrix => {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal.");
  }

  const result = new Matrix(m1.rows, m1.cols);
  result.data = MatrixElementWiseMultiply(
    m1.data,
    m1.rows,
    m1.cols,
    m2.data,
    m2.rows,
    m2.cols
  );

  return result;
};

export const sum = (m: Matrix): number => {
  return MatrixSum(m.data, m.rows, m.cols);
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

  const result = new Matrix(m1.rows, m1.cols);
  result.data = MatrixElementWiseDivide(
    m1.data,
    m1.rows,
    m1.cols,
    m2.data,
    m2.rows,
    m2.cols
  );

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
