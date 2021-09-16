import { getCurrentComputation } from "../computation/utils";

export class Matrix {
  public rows = 0;
  public cols = 0;
  public data = null;

  constructor(rows = 0, cols = 0, data: number[][] = null) {
    this.resize(rows, cols);
    if (data) {
      this.generateData(data);
    }
  }

  resize(rows: number, cols: number): Matrix {
    this.rows = rows;
    this.cols = cols;
    this.data = [];
    for (let row = 0; row < this.rows; row += 1) {
      this.data[row] = new Array(this.cols);
    }

    return this;
  }

  generateData(arr: number[][]): Matrix {
    this.data = [];
    for (let row = 0; row < this.rows; row += 1) {
      this.data[row] = new Array(this.cols);
    }
    for (let col = 0; col < this.cols; col += 1) {
      for (let row = 0; row < this.rows; row += 1) {
        if (typeof arr[col] === "number") {
          this.data[row][col] = arr[col];
        } else if (arr[col] instanceof Float32Array) {
          this.data[row][col] = arr[col][row];
        } else {
          this.data[row][col] = 0;
        }
      }
    }
    return this;
  }

  toBuffer(): ArrayBuffer {
    const result = new ArrayBuffer(this.rows * this.cols * 64);
    const view = new DataView(result, 0, this.rows * this.cols * 64);
    this.data.forEach((num, i) => {
      view.setFloat64(i, num);
    });
    return result;
  }

  sum(): number {
    let sum = 0.0;
    for (let row = 0; row < this.rows; row += 1) {
      for (let col = 0; col < this.cols; col += 1) {
        sum += this.data[row][col];
      }
    }
    return sum;
  }

  colwiseSum(): Matrix {
    const data = [];
    for (let col = 0; col < this.cols; col += 1) {
      let sum = 0.0;
      for (let row = 0; row < this.rows; row += 1) {
        sum += this.data[row][col];
      }
      data[col] = [sum];
    }
    return new Matrix(1, this.cols, data);
  }

  rowwiseSum(): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      let sum = 0.0;
      for (let col = 0; col < this.rows; col += 1) {
        sum += this.data[row][col];
      }
      data[row] = [sum];
    }
    return new Matrix(this.rows, 1, data);
  }

  replicate(rows: number, cols: number): Matrix {
    const oldData = this.data;
    const newData = [];
    let result = null;
    if (rows === 1 && this.cols === 1 && cols > 1) {
      result = new Matrix(this.rows, cols);
      for (let row = 0; row < this.rows; row += 1) {
        newData[row] = [];
        for (let col = 0; col < cols; col += 1) {
          newData[row][col] = oldData[row][0];
        }
      }
    } else if (cols === 1 && this.rows === 1 && rows > 1) {
      result = new Matrix(rows, this.cols);
      for (let row = 0; row < rows; row += 1) {
        newData[row] = [];
        for (let col = 0; col < this.cols; col += 1) {
          newData[row][col] = oldData[0][col];
        }
      }
    }
    if (result) {
      result.generateData(newData);
      return result;
    }
    return this;
  }

  transpose(): Matrix {
    return getCurrentComputation().execute("transpose", this);
  }

  conjugate(): Matrix {
    return this;
  }

  colMaxCoeffIndex(col: number): number {
    let maxIndex = -1;
    let max = -Infinity;

    for (let row = 0; row < this.rows; row += 1) {
      if (this.data[row][col] > max) {
        max = this.data[row][col];
        maxIndex = row;
      }
    }

    return maxIndex;
  }

  block(
    startRow: number,
    startCol: number,
    blockRows: number,
    blockCols: number
  ): Matrix {
    const data = [];

    for (
      let row = startRow, newRow = 0;
      row < this.rows && row < startRow + blockRows;
      row += 1, newRow += 1
    ) {
      data[row] = new Array(blockCols);
      for (
        let col = startCol, newCol = 0;
        col < this.cols && col < startCol + blockCols;
        col += 1, newCol += 1
      ) {
        data[newRow][newCol] = this.data[row][col];
      }
    }

    return new Matrix(blockRows, blockCols, data);
  }

  col(col: number): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [this.data[row][col]];
    }
    return new Matrix(this.rows, 1, data);
  }

  setCol(col: number, tmp: Matrix): Matrix {
    for (let row = 0; row < this.rows; row += 1) {
      this.data[row][col] = tmp.data[row][0];
    }
    return this;
  }

  rollToColMatrix(): Matrix {
    const data = [];

    let _row = 0;
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[_row++][0] = this.data[row][col];
      }
    }

    return new Matrix(this.rows * this.cols, 1, data);
  }
}

export const cols = (m: Matrix): number => {
  return m.cols;
};
