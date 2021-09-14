import { GPU } from "gpu.js";

export const gpu = new GPU({ mode: "gpu" });

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

  resize(rows, cols): Matrix {
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
    const kernel = gpu
      .createKernel(function (a) {
        return a[this.thread.y][this.thread.x];
      })
      .setOutput([this.cols, this.rows]);

    return new Matrix(this.cols, this.rows, kernel(this.data) as number[][]);
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
}

export const multiply = (m1: Matrix, m2: Matrix): Matrix => {
  if (m1.cols !== m2.rows) {
    throw new Error(
      `DIMENSIONS error. m1.cols ${m1.cols} !== m2.rows ${m2.rows}.`
    );
  }

  const kernel = gpu
    .createKernel(function (a, b) {
      let sum = 0;
      for (let i = 0; i < this.constants.cols; i++) {
        sum += a[this.thread.x][i] * b[i][this.thread.y];
      }
      return sum;
    })
    .setOutput([m1.rows, m2.cols])
    .setConstants({
      cols: m1.rows,
    });

  return new Matrix(m1.rows, m2.cols, kernel(m1.data, m2.data) as number[][]);
};

export const elementWiseAdd = (m1: Matrix, m2: Matrix): Matrix => {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal.");
  }

  const kernel = gpu
    .createKernel(function (a, b) {
      return a[this.thread.x][this.thread.y] + b[this.thread.x][this.thread.y];
    })
    .setOutput([m1.rows, m2.cols]);

  return new Matrix(m1.rows, m2.cols, kernel(m1.data, m2.data) as number[][]);
};

export const elementWiseSubtract = (m1: Matrix, m2: Matrix): Matrix => {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal.");
  }

  const kernel = gpu
    .createKernel(function (a, b) {
      return a[this.thread.x][this.thread.y] - b[this.thread.x][this.thread.y];
    })
    .setOutput([m1.rows, m2.cols]);

  return new Matrix(m1.rows, m2.cols, kernel(m1.data, m2.data) as number[][]);
};

export const fillRandom = (m1: Matrix, parameter: number): Matrix => {
  const kernel = gpu
    .createKernel(function () {
      // @ts-ignore
      return (Math.random() - 0.5) * Math.sqrt(2.0 / this.constants.parameter);
    })
    .setOutput([m1.rows, m1.cols])
    .setConstants({
      parameter,
    });

  return new Matrix(m1.rows, m1.cols, kernel() as number[][]);
};

export const setZeros = (m1: Matrix): Matrix => {
  const kernel = gpu
    .createKernel(function () {
      return 0.0;
    })
    .setOutput([m1.rows, m1.cols]);
  return new Matrix(m1.rows, m1.cols, kernel() as number[][]);
};

export const elementWiseMultiply = (m1: Matrix, m2: Matrix): Matrix => {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal.");
  }

  const kernel = gpu
    .createKernel(function (a, b) {
      return a[this.thread.x][this.thread.y] * b[this.thread.x][this.thread.y];
    })
    .setOutput([m1.rows, m2.cols]);

  return new Matrix(m1.rows, m2.cols, kernel(m1.data, m2.data) as number[][]);
};

export const elementWiseMultiplyNumber = (m1: Matrix, num: number): Matrix => {
  const kernel = gpu
    .createKernel(function (a) {
      // @ts-ignore
      return a[this.thread.x][this.thread.y] * this.constants.number;
    })
    .setOutput([m1.rows, m1.cols])
    .setConstants({
      number: num,
    });

  return new Matrix(m1.rows, m1.cols, kernel(m1.data) as number[][]);
};

export const sum = (m: Matrix): number => {
  return m.sum();
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

  const kernel = gpu
    .createKernel(function (a, b) {
      return a[this.thread.x][this.thread.y] / b[this.thread.x][this.thread.y];
    })
    .setOutput([m1.rows, m2.cols]);

  return new Matrix(m1.rows, m2.cols, kernel(m1.data, m2.data) as number[][]);
};

export const elementWiseDivideNumber = (m1: Matrix, num: number): Matrix => {
  const kernel = gpu
    .createKernel(function (a) {
      // @ts-ignore
      return a[this.thread.x][this.thread.y] / this.constants.number;
    })
    .setOutput([m1.rows, m1.cols])
    .setConstants({
      number: num,
    });

  return new Matrix(m1.rows, m1.cols, kernel(m1.data) as number[][]);
};

export const softmaxActivation = (m: Matrix): Matrix => {
  const kernel = gpu
    .createKernel(function (a) {
      return Math.exp(a[this.thread.x][this.thread.y]);
    })
    .setOutput([m.rows, m.cols]);
  const data = new Matrix(m.rows, m.cols, kernel(m.data) as number[][]);
  const divider = new Matrix(1, m.cols, data.colwiseSum().data).replicate(
    m.rows,
    1
  );
  const result = new Matrix(
    m.rows,
    m.cols,
    elementWiseDivide(data, divider).data
  );
  return result;
};

export const softmaxLoss = (output: Matrix, predictions: Matrix): number => {
  const kernel = gpu
    .createKernel(function (a) {
      return Math.log(a[this.thread.x][this.thread.y]);
    })
    .setOutput([predictions.rows, predictions.cols]);
  return new Matrix(
    output.rows,
    output.cols,
    elementWiseMultiply(
      output,
      new Matrix(output.rows, output.cols, kernel(predictions.data) as number[][])
    ).data
  ).sum();
};

export const logisticActivation = (m: Matrix): Matrix => {
  const kernel = gpu
    .createKernel(function (a) {
      return 1.0 / (1.0 + Math.exp(-a[this.thread.x][this.thread.y]));
    })
    .setOutput([m.rows, m.cols]);
  return new Matrix(m.rows, m.cols, kernel(m.data) as number[][]);
};

export const logisticDerivative = (m: Matrix): Matrix => {
  const kernel = gpu
    .createKernel(function (a) {
      return (
        a[this.thread.x][this.thread.y] *
        (1.0 - a[this.thread.x][this.thread.y])
      );
    })
    .setOutput([m.rows, m.cols]);
  return new Matrix(m.rows, m.cols, kernel(m.data) as number[][]);
};

export const logisticLoss = (output: Matrix, predictions: Matrix): number => {
  const kernel = gpu
    .createKernel(function (a) {
      return Math.log(a[this.thread.x][this.thread.y]);
    })
    .setOutput([output.rows, output.cols]);
  const kernel2 = gpu
    .createKernel(function (a) {
      return 1.0 - a[this.thread.x][this.thread.y];
    })
    .setOutput([output.rows, output.cols]);
  const kernel3 = gpu
    .createKernel(function (a) {
      return Math.log(1.0 - a[this.thread.x][this.thread.y]);
    })
    .setOutput([predictions.rows, predictions.cols]);

  return elementWiseAdd(
    elementWiseMultiply(
      output,
      new Matrix(output.rows, output.cols, kernel(output.data) as number[][])
    ),
    elementWiseMultiply(
      new Matrix(output.rows, output.cols, kernel2(output.data) as number[][]),
      new Matrix(
        predictions.rows,
        predictions.cols,
        kernel3(predictions.data) as number[][]
      )
    )
  ).sum();
};

export const tanhActivation = (m: Matrix): Matrix => {
  const kernel = gpu
    .createKernel(function (a) {
      return (
        2.0 / (1.0 + Math.exp(-2.0 * a[this.thread.x][this.thread.y])) - 1.0
      );
    })
    .setOutput([m.rows, m.cols]);
  return new Matrix(m.rows, m.cols, kernel(m.data) as number[][]);
};

export const tanhDerivative = (m: Matrix): Matrix => {
  const kernel = gpu
    .createKernel(function (a) {
      return (
        1.0 -
        Math.pow(
          2.0 / (1.0 + Math.exp(-2.0 * a[this.thread.x][this.thread.y])) - 1.0,
          2.0
        )
      );
    })
    .setOutput([m.rows, m.cols]);
  return new Matrix(m.rows, m.cols, kernel(m.data) as number[][]);
};

export const reluActivation = (m: Matrix): Matrix => {
  const kernel = gpu
    .createKernel(function (a) {
      return Math.max(0.0, a[this.thread.x][this.thread.y]);
    })
    .setOutput([m.rows, m.cols]);
  return new Matrix(m.rows, m.cols, kernel(m.data) as number[][]);
};

export const reluDerivative = (m: Matrix): Matrix => {
  const kernel = gpu
    .createKernel(function (a) {
      if (a[this.thread.x][this.thread.y] > 0) {
        return 1;
      }
      return 0;
    })
    .setOutput([m.rows, m.cols]);
  return new Matrix(m.rows, m.cols, kernel(m.data) as number[][]);
};

export const softplusActivation = (m: Matrix): Matrix => {
  const kernel = gpu
    .createKernel(function (a) {
      return Math.log(1 + Math.exp(a[this.thread.x][this.thread.y]));
    })
    .setOutput([m.rows, m.cols]);
  return new Matrix(m.rows, m.cols, kernel(m.data) as number[][]);
};

export const softplusDerivative = (m: Matrix): Matrix => {
  const kernel = gpu
    .createKernel(function (a) {
      return 1 / (1 + Math.exp(-a[this.thread.x][this.thread.y]));
    })
    .setOutput([m.rows, m.cols]);
  return new Matrix(m.rows, m.cols, kernel(m.data) as number[][]);
};

export const penalty = (m: Matrix): number => {
  const kernel = gpu
    .createKernel(function (a) {
      return Math.pow(a[this.thread.x][this.thread.y], 2);
    })
    .setOutput([m.rows, m.cols]);
  return new Matrix(m.rows, m.cols, kernel(m.data) as number[][]).sum();
};

export const sqrt = (m: Matrix): Matrix => {
  const kernel = gpu
    .createKernel(function (a) {
      return Math.sqrt(a[this.thread.x][this.thread.y] + 1e-8);
    })
    .setOutput([m.rows, m.cols]);
  return new Matrix(m.rows, m.cols, kernel(m.data) as number[][]);
};
