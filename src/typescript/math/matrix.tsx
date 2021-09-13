import {
  MatrixMultiply,
  MatrixElementWiseAdd,
  MatrixElementWiseSubtract,
  MatrixElementWiseMultiply,
  MatrixElementWiseDivide,
} from "impulseTsToolkit";

export class Matrix {
  public rows = 0;
  public cols = 0;
  public data = null;

  constructor(rows = 0, cols = 0) {
    this.resize(rows, cols);
  }

  resize(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.data = new Array(rows * cols);
  }

  forEach(callback: Function) {
    for (let i = 0; i < this.rows * this.cols; i++) {
      const newValue = callback(this.data[i]);
      this.data[i] = newValue !== undefined ? newValue : this.data[i];
    }
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

export const add = (m1: Matrix, m2: Matrix): Matrix => {
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

export const subtract = (m1: Matrix, m2: Matrix) => {
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

export const fillRandom = (m1: Matrix, i: number): void => {
  m1.forEach(() => Math.random() * Math.sqrt(2.0 / i));
};

export const forEach = (
  m1: Matrix,
  callback: (x: number) => number
): Matrix => {
  return m1.forEach(callback);
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
  let sum = 0.0;

  m.forEach((x) => {
    sum += x;
  });

  return sum;
};

export const cols = (m: Matrix): number => {
  return m.cols;
};

export const colwise = (
  m: Matrix,
  callback: (colVector: Matrix) => number
): Matrix => {
  const result = new Matrix(1, m.cols);
  for (let col = 0; col < m.cols; col++) {
    const rowMatrix = new Matrix(m.rows, 1);
    for (let row = 0; row < m.rows; row++) {
      rowMatrix.data[row] = m.data[row * m.cols + col];
    }
    result.data[col] = callback(rowMatrix);
  }
  return result;
};

export const elementWiseDivide = (m1: Matrix, m2: Matrix) => {
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

export const replicateRows = (m: Matrix, numRows: number) => {
  const result = new Matrix(numRows, m.cols);
  for (let row = 0; row < result.rows; row++) {
    for (let col = 0; col < result.cols; col++) {
      const index = row * result.cols + col;
      result.data[index] = m.data[col];
    }
  }
  return result;
};
