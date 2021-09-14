import {GPU} from "gpu.js";

export const gpu = new GPU({mode: "gpu"});

export class Matrix {
    public rows = 0;
    public cols = 0;
    public data = null;

    constructor(rows = 0, cols = 0, data = null) {
        this.resize(rows, cols);
        if (data) {
            this.generateData(data);
        }
    }

    resize(rows, cols): Matrix {
        this.rows = rows;
        this.cols = cols;
        this.data = new Array(rows);
        for (let row = 0; row < this.rows; row += 1) {
            this.data[row] = new Array(cols);
        }

        return this;
    }

    generateData(arr: number[][]): Matrix {
        this.data = new Array(arr.length);
        for (let row = 0; row < arr.length; row += 1) {
            this.data[row] = Array.from(arr[row]);
        }
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
        const data = new Array(this.rows);
        for (let row = 0; row < this.rows; row += 1) {
            let sum = 0.0;
            for (let col = 0; col < this.cols; col += 1) {
                sum += this.data[row][col];
            }
            data[row] = [sum];
        }
        return new Matrix(this.rows, 1, data)
    }

    replicate(rows: number, cols: number): Matrix {
        const oldData = this.data;
        if (rows === 1 && this.cols === 1 && cols > 1) {
            this.resize(this.rows, cols);
            for (let row = 0; row < this.rows; row += 1) {
                for (let col = 0; col < cols; col += 1) {
                    this.data[row][col] = oldData[row][0];
                }
            }
        } else if (cols === 1 && this.rows === 1 && rows > 1) {
            this.resize(rows, this.cols);
            for (let row = 0; row < rows; row += 1) {
                for (let col = 0; col < this.cols; col += 1) {
                    this.data[row][col] = oldData[0][col];
                }
            }
        }
        return this;
    }

    transpose(): Matrix {
        const oldData = this.data;
        const kernel = gpu.createKernel(function (a) {
            return a[this.thread.y][this.thread.x];
        }).setOutput([this.cols, this.rows]);
        const data = kernel(oldData) as number[][];

        this.resize(this.cols, this.rows);
        this.generateData(data);

        return this;
    }
}

export const multiply = (m1: Matrix, m2: Matrix): Matrix => {
    if (m1.cols !== m2.rows) {
        throw new Error("DIMENSIONS error.");
    }

    const kernel = gpu.createKernel(function (a, b) {
        let sum = 0;
        for (let i = 0; i < this.constants.cols; i++) {
            sum += a[this.thread.x][i] * b[i][this.thread.y];
        }
        return sum;
    }).setOutput([m1.rows, m2.cols]).setConstants({
        cols: m1.rows,
    });

    return new Matrix(m1.rows, m2.cols, kernel(m1.data, m2.data));
};

export const elementWiseAdd = (m1: Matrix, m2: Matrix): Matrix => {
    if (m1.rows !== m2.rows) {
        throw new Error("ROWS number not equal.");
    }
    if (m1.cols !== m2.cols) {
        throw new Error("COLS number not equal.");
    }

    const gpu = new GPU();
    const kernel = gpu.createKernel(function (a, b) {
        return a[this.thread.x][this.thread.y] + b[this.thread.x][this.thread.y];
    }).setOutput([m1.rows, m2.cols])
    const result = new Matrix(m1.rows, m2.cols, kernel(m1.data, m2.data));

    return result;
};

export const elementWiseSubtract = (m1: Matrix, m2: Matrix): Matrix => {
    if (m1.rows !== m2.rows) {
        throw new Error("ROWS number not equal.");
    }
    if (m1.cols !== m2.cols) {
        throw new Error("COLS number not equal.");
    }

    const gpu = new GPU();
    const kernel = gpu.createKernel(function (a, b) {
        return a[this.thread.x][this.thread.y] - b[this.thread.x][this.thread.y];
    }).setOutput([m1.rows, m2.cols])
    const result = new Matrix(m1.rows, m2.cols, kernel(m1.data, m2.data));

    return result;
};

export const fillRandom = (m1: Matrix, parameter: number): Matrix => {
    const kernel = gpu.createKernel(function () {
        return Math.random() * Math.sqrt(2.0 / this.constants.parameter);
    }).setOutput([m1.rows, m1.cols]).setConstants({
        parameter
    })
    const result = new Matrix(m1.rows, m1.cols, kernel());

    return result;
};

export const setZeros = (m1: Matrix): Matrix => {
    const kernel = gpu.createKernel(function () {
        return 0.0;
    }).setOutput([m1.rows, m1.cols])
    const result = new Matrix(m1.rows, m1.cols, kernel());

    return result;
};

export const elementWiseMultiply = (m1: Matrix, m2: Matrix): Matrix => {
    if (m1.rows !== m2.rows) {
        throw new Error("ROWS number not equal.");
    }
    if (m1.cols !== m2.cols) {
        throw new Error("COLS number not equal.");
    }

    const kernel = gpu.createKernel(function (a, b) {
        return a[this.thread.x][this.thread.y] * b[this.thread.x][this.thread.y];
    }).setOutput([m1.rows, m2.cols])
    const result = new Matrix(m1.rows, m2.cols, kernel(m1.data, m2.data));

    return result;
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

    const kernel = gpu.createKernel(function (a, b) {
        return a[this.thread.x][this.thread.y] / b[this.thread.x][this.thread.y];
    }).setOutput([m1.rows, m2.cols])
    const result = new Matrix(m1.rows, m2.cols, kernel(m1.data, m2.data));

    return result;
};

export const softmaxActivation = (m: Matrix): Matrix => {
    const kernel = gpu.createKernel(function (a) {
        return Math.exp(a[this.thread.x][this.thread.y]);
    }).setOutput([m.rows, m.cols]);
    const data = new Matrix(m.rows, m.cols, kernel(m.data));
    const divider = new Matrix(m.rows, 1, data.colwiseSum().data).transpose().replicate(m.rows, 1);
    const result = new Matrix(m.rows, m.cols, elementWiseDivide(data, divider).data);
    return result;
};

export const softmaxLoss = (output: Matrix, predictions: Matrix): number => {
    const kernel = gpu.createKernel(function (a) {
        return Math.log(a[this.thread.x][this.thread.y]);
    }).setOutput([predictions.rows, predictions.cols]);
    const data = kernel(predictions.data);
    const result = new Matrix(output.rows, output.cols, elementWiseMultiply(output, data).data);
    return result.sum();
};

export const logisticActivation = (m: Matrix): Matrix => {
    const kernel = gpu.createKernel(function (a) {
        return 1.0 / (1.0 + Math.exp(-a[this.thread.x][this.thread.y]));
    }).setOutput([m.rows, m.cols]);
    const result = new Matrix(m.rows, m.cols, kernel(m.data));
    return result;
};

export const logisticDerivative = (m: Matrix): Matrix => {
    const kernel = gpu.createKernel(function (a) {
        return a[this.thread.x][this.thread.y] * (1.0 - a[this.thread.x][this.thread.y]);
    }).setOutput([m.rows, m.cols]);
    const result = new Matrix(m.rows, m.cols, kernel(m.data));
    return result;
};

export const logisticLoss = (output: Matrix, predictions: Matrix): number => {
    const kernel = gpu.createKernel(function (a) {
        return Math.log(a[this.thread.x][this.thread.y]);
    }).setOutput([output.rows, output.cols]);
    const predictionsLog = new Matrix(output.rows, output.cols, kernel(output.data) as number[]);

    const kernel2 = gpu.createKernel(function (a) {
        return 1.0 - a[this.thread.x][this.thread.y];
    }).setOutput([output.rows, output.cols]);
    const outputOne = new Matrix(output.rows, output.cols, kernel2(output.data) as number[]);

    const kernel4 = gpu.createKernel(function (a) {
        return Math.log(1.0 - a[this.thread.x][this.thread.y]);
    }).setOutput([predictions.rows, predictions.cols]);
    const predictionsMinusLog = new Matrix(predictions.rows, predictions.cols, kernel4(predictions.data) as number[]);

    const toAdd = elementWiseMultiply(output, predictionsLog);
    const toAdd2 = elementWiseMultiply(outputOne, predictionsMinusLog);
    return elementWiseAdd(toAdd, toAdd2).sum()
};
