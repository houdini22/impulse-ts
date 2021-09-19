import { getComputation } from "../Computation";

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

  flatten(): number[] {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      for (let col = 0; col < this.cols; col += 1) {
        data.push(this.data[row][col]);
      }
    }
    return data;
  }

  replicate(rows: number, cols: number): Matrix {
    if (rows === 1 && this.cols === 1 && cols > 1) {
      const newData = [];
      for (let row = 0; row < this.rows; row += 1) {
        newData[row] = [];
        for (let col = 0; col < cols; col += 1) {
          newData[row][col] = this.data[row][0];
        }
      }
      return Matrix.from(newData);
    } else if (cols === 1 && this.rows === 1 && rows > 1) {
      const newData = [];
      for (let row = 0; row < rows; row += 1) {
        newData[row] = [];
        for (let col = 0; col < this.cols; col += 1) {
          newData[row][col] = this.data[0][col];
        }
      }
      return Matrix.from(newData);
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

  rowMaxCoeffIndex(row: number): number {
    let maxIndex = -1;
    let max = -Infinity;

    for (let col = 0; col < this.cols; col += 1) {
      if (this.data[row][col] > max) {
        max = this.data[row][col];
        maxIndex = col;
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

  row(row: number): Matrix {
    const data = this.data[row].map((num) => [num]);
    return new Matrix(data.length, data[0].length, data).transpose();
  }

  setCol(col: number, tmp: Matrix): Matrix {
    for (let row = 0; row < this.rows; row += 1) {
      if (this.data && tmp.data) {
        this.data[row][col] = tmp.data[row][0];
      }
    }
    return this;
  }

  sigmoid() {
    return this.multiply(-1).exp().add(1).fraction(1);
  }

  rollToColMatrix(): Matrix {
    const data = [];
    let _row = 0;
    for (let row = 0; row < this.rows; row += 1) {
      for (let col = 0; col < this.cols; col += 1) {
        data[_row] = [];
        data[_row++][0] = this.data[row][col];
      }
    }
    return Matrix.from(data);
  }

  abs(): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = Math.abs(this.data[row][col]);
      }
    }
    return Matrix.from(data);
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

  setMax(max: number): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = Math.min(this.data[row][col], max);
      }
    }
    return Matrix.from(data);
  }

  setMin(min: number): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = Math.max(this.data[row][col], min);
      }
    }
    return Matrix.from(data);
  }

  setZeros(): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = 0;
      }
    }
    return Matrix.from(data);
  }

  setOnes(): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = 1;
      }
    }
    return Matrix.from(data);
  }

  setRandom(parameter: number = 1): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = (Math.random() * 4 - 2) * Math.sqrt(2 / parameter); // todo: gaussian distribution;
      }
    }
    return Matrix.from(data);
  }

  fraction(num: number = 1): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = num / this.data[row][col];
      }
    }
    return Matrix.from(data);
  }

  sqrt(): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = Math.sqrt(this.data[row][col] + 1e-8);
      }
    }
    return Matrix.from(data);
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

  subtract(m: Matrix | number): Matrix {
    if (m instanceof Matrix) {
      const data = [];
      for (let row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (let col = 0; col < this.cols; col += 1) {
          data[row][col] = this.data[row][col] - m.data[row][col];
        }
      }
      return Matrix.from(data);
    } else {
      const data = [];
      for (let row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (let col = 0; col < this.cols; col += 1) {
          data[row][col] = this.data[row][col] - m;
        }
      }
      return Matrix.from(data);
    }
  }

  forEach(cb: (num: number) => void): Matrix {
    for (let row = 0; row < this.rows; row += 1) {
      for (let col = 0; col < this.cols; col += 1) {
        cb(this.data[row][col]);
      }
    }
    return this;
  }

  shape(): number[] {
    return [this.rows, this.cols];
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
      if (num.rows !== this.rows || num.cols !== this.cols) {
        throw new Error(`Dimensions error (${this.rows}, ${this.cols}) !== (${num.rows}, ${num.cols})`);
      }
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

  add(m: Matrix | number): Matrix {
    if (typeof m === "number") {
      const data = [];
      for (let row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (let col = 0; col < this.cols; col += 1) {
          data[row][col] = this.data[row][col] + m;
        }
      }
      return Matrix.from(data);
    } else if (m instanceof Matrix) {
      if (m.rows !== this.rows || m.cols !== this.cols) {
        throw new Error(`Dimention error: rows (x: ${this.rows}, y: ${this.cols}) !== (x: ${m.rows}, y: ${m.cols})`);
      }
      const data = [];
      for (let row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (let col = 0; col < this.cols; col += 1) {
          data[row][col] = this.data[row][col] + m.data[row][col];
        }
      }
      return Matrix.from(data);
    }
    return this;
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

  tanh(): Matrix {
    return this.exp()
      .subtract(this.multiply(-1).exp())
      .divide(this.exp().add(this.multiply(-1).exp()));
  }

  softmax(): Matrix {
    const max = this.max();
    return this.subtract(max).exp().divide(this.rowwiseSum().replicate(this.cols, 1).transpose());
  }

  exp(): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = Math.exp(this.data[row][col] + 1e-8);
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
    return new Matrix(arr.length, arr[0]?.length || 0, arr);
  }
}

export class Matrix3D {
  public rows = 0;
  public cols = 0;
  public depth = 0;
  public data: number[][][] | null = null;

  constructor(rows = 0, cols = 0, depth: number = 0, data: number[][][] | null = null) {
    this.resize(rows, cols, depth);
    if (data) {
      this.data = data;
    }
  }

  resize(rows: number, cols: number, depth: number): Matrix3D {
    this.rows = rows;
    this.cols = cols;
    this.depth = depth;
    this.data = [];
    for (let row = 0; row < this.rows; row += 1) {
      this.data[row] = new Array(cols);
      for (let col = 0; col < this.cols; col += 1) {
        this.data[row][col] = new Array(depth);
      }
    }

    return this;
  }

  setZeros() {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = new Array(this.cols);
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = new Array(this.depth);
        for (let depth = 0; depth < this.cols; depth += 1) {
          data[row][col][depth] = 0;
        }
      }
    }
    return new Matrix3D(this.rows, this.cols, this.depth, data);
  }
}
