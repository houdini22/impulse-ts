import { getComputation } from "../Computation/utils";

export class Matrix {
  public rows = 0;
  public cols = 0;
  public data: number[][] | null = null;

  constructor(rows = 0, cols = 0, data: number[][] | string[][] | null = null) {
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

  generateData(arr: number[][] | string[][] | null): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = new Array(this.cols);
    }
    for (let col = 0; col < this.cols; col += 1) {
      for (let row = 0; row < this.rows; row += 1) {
        if (typeof arr[row] === "number") {
          data[row][col] = arr[row];
        } else if (arr[row] instanceof Float32Array) {
          data[row][col] = arr[row][col];
        } else if (arr[row] && typeof arr[row][col] === "number") {
          data[row][col] = arr[row][col];
        } else if (typeof arr[row][col] === "string") {
          // @ts-ignore
          data[row][col] = arr[row][col].length ? Number(arr[row][col]) : NaN;
        } else {
          data[row][col] = NaN;
        }
      }
    }
    this.data = data;
    return this;
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
    const t = this.transpose();
    for (let row = 0; row < t.rows; row += 1) {
      data[row] = [0];
      for (let col = 0; col < t.cols; col += 1) {
        data[row][0] += t.data[row][col];
      }
    }
    return new Matrix(this.cols, 1, data);
  }

  rowwiseSum(): Matrix {
    const data = [[]];
    for (let row = 0; row < this.rows; row += 1) {
      let sum = 0.0;
      for (let col = 0; col < this.cols; col += 1) {
        sum += this.data[row][col];
      }
      data[0].push(sum);
    }
    return new Matrix(1, this.rows, data);
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
    return getComputation().execute("transpose", this) as Matrix;
  }

  colMaxCoeffIndex(col: number): number {
    let maxIndex = -1;
    let max = -Infinity;

    for (let row = 0; row < this.rows; row += 1) {
      if (this.data && this.data[row][col] > max) {
        max = this.data[row][col];
        maxIndex = row;
      }
    }

    return maxIndex;
  }

  block(startRow: number, startCol: number, blockRows: number, blockCols: number): Matrix {
    const data = [];

    for (let row = startRow, newRow = 0; row < this.rows && row < startRow + blockRows; row += 1, newRow += 1) {
      data[newRow] = new Array(blockCols);
      for (let col = startCol, newCol = 0; col < this.cols && col < startCol + blockCols; col += 1, newCol += 1) {
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
      if (this.data && tmp.data) {
        this.data[row][col] = tmp.data[row][0];
      }
    }
    return this;
  }

  rollToColMatrix(): Matrix {
    const data = [];

    let _row = 0;
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        if (this.data) {
          data[_row++][0] = this.data[row][col];
        }
      }
    }

    return new Matrix(this.rows * this.cols, 1, data);
  }

  mean() {
    let sum = 0;
    const numberOfElements = this.rows * this.cols;

    for (let row = 0; row < this.rows; row += 1) {
      for (let col = 0; col < this.cols; col += 1) {
        sum += this.data[row][col];
      }
    }

    return sum / numberOfElements;
  }

  max(): number {
    let max = -Infinity;

    for (let row = 0; row < this.rows; row += 1) {
      for (let col = 0; col < this.cols; col += 1) {
        max = Math.max(this.data[row][col], max);
      }
    }

    return max;
  }

  dot(m: Matrix): Matrix {
    return getComputation().execute("multiply", this, m) as Matrix;
  }

  multiply(num: number | Matrix): Matrix {
    if (typeof num === "number") {
      const data = [];
      for (let row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (let col = 0; col < this.cols; col += 1) {
          // @ts-ignore
          data[row][col] = this.data[row][col] * num;
        }
      }
      return Matrix.from(data);
    } else {
      const data = [];
      for (let row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (let col = 0; col < this.cols; col += 1) {
          // @ts-ignore
          data[row][col] = this.data[row][col] * num.data[row][col];
        }
      }
      return Matrix.from(data);
    }
  }

  subtract(m: Matrix): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = this.data[row][col] - m.data[row][col];
      }
    }
    return Matrix.from(data);
  }

  divide(num: number | Matrix): Matrix {
    if (typeof num === "number") {
      const data = [];
      for (let row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (let col = 0; col < this.cols; col += 1) {
          data[row][col] = this.data[row][col] / num;
        }
      }
      return Matrix.from(data);
    } else {
      const data = [];
      for (let row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (let col = 0; col < this.cols; col += 1) {
          data[row][col] = this.data[row][col] / num.data[row][col];
        }
      }
      return Matrix.from(data);
    }
  }

  minusOne(): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = 1 - this.data[row][col];
      }
    }
    return Matrix.from(data);
  }

  subtractFromNumber(num: number): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = num - this.data[row][col];
      }
    }
    return Matrix.from(data);
  }

  add(m: Matrix): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = this.data[row][col] + m.data[row][col];
      }
    }
    return Matrix.from(data);
  }

  log(): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = Math.log(this.data[row][col] + 1e-8);
      }
    }
    return Matrix.from(data);
  }

  exp(): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = Math.log(this.data[row][col] + 1e-8);
      }
    }
    return Matrix.from(data);
  }

  pow(num): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = Math.pow(this.data[row][col], num);
      }
    }
    return Matrix.from(data);
  }

  static from(arr: number[][]): Matrix {
    return new Matrix(arr.length, arr[0].length, arr);
  }
}
