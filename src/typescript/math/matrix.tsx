import {GPU, input} from "gpu.js";

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
        this.data = Float64Array.from(new Array(rows));
        for (let row = 0; row < this.rows; row += 1) {
            this.data[row] = Float64Array.from(new Array(cols));
        }

        return this;
    }

    generateData(arr: number[][]): Matrix {
        this.data = Float64Array.from(new Array(arr.length));
        for (let row = 0; row < arr.length; row += 1) {
            this.data[row] = Float64Array.from(new Array(arr[0].length));
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
            data[row] = sum;
        }
        return new Matrix(this.rows, 1, data)
    }

    replicate(rows: number, cols: number): Matrix {
        for (let col = 0; col < this.cols * cols; col += 1) {

        }
        return this;
    }
}

export const multiply = (m1: Matrix, m2: Matrix): Matrix => {
    if (m1.cols !== m2.rows) {
        throw new Error("DIMENSIONS error.");
    }

    const gpu = new GPU();
    const kernel = gpu.createKernel(function (a, b) {
        let sum = 0;
        for (let i = 0; i < this.constants.cols; i++) {
            sum += a[this.thread.x][i] * b[i][this.thread.y];
        }
        return sum;
    }).setOutput([m1.rows, m2.cols]).setConstants({
        cols: m1.rows,
    });

    const data = kernel(m1.data, m2.data);
    return new Matrix(m1.rows, m2.cols, Array.from(data));
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
    const data = kernel(m1.data, m2.data);
    const result = new Matrix(m1.rows, m2.cols, Array.from(data));

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
    const data = kernel(m1.data, m2.data);
    const result = new Matrix(m1.rows, m2.cols, Array.from(data));

    return result;
};

export const fillRandom = (m1: Matrix, parameter: number): Matrix => {
    const kernel = gpu.createKernel(function () {
        return Math.random() * Math.sqrt(2.0 / this.constants.parameter);
    }).setOutput([m1.rows, m1.cols]).setConstants({
        parameter
    })
    const data = kernel();
    const result = new Matrix(m1.rows, m1.cols, Array.from(data));

    return result;
};

export const setZeros = (m1: Matrix): Matrix => {
    const kernel = gpu.createKernel(function () {
        return 0.0;
    }).setOutput([m1.rows, m1.cols])
    const data = kernel();
    const result = new Matrix(m1.rows, m1.cols, Array.from(data));

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
    const data = kernel(m1.data, m2.data);
    const result = new Matrix(m1.rows, m2.cols, Array.from(data));

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
    const data = kernel(m1.data, m2.data);
    const result = new Matrix(m1.rows, m2.cols, Array.from(data));

    return result;
};

export const softmaxActivation = (m: Matrix): Matrix => {
    const kernel = gpu.createKernel(function (a) {
        return Math.exp(a[this.thread.x][this.thread.y]);
    }).setOutput([m.rows, m.cols]);
    const data = new Matrix(m.rows, m.cols, Array.from(kernel(m.data)));
    const divider = new Matrix(m.rows, 1, data.colwiseSum().data).replicate(m.rows, 1);
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
    const data = kernel(m.data);
    const result = new Matrix(m.rows, m.cols, Array.from(data));
    return result;
};

export const logisticDerivative = (m: Matrix): Matrix => {
    const kernel = gpu.createKernel(function (a) {
        return a[this.thread.x][this.thread.y] * (1.0 - a[this.thread.x][this.thread.y]);
    }).setOutput([m.rows, m.cols]);
    const data = kernel(m.data);
    const result = new Matrix(m.rows, m.cols, Array.from(data));
    return result;
};

export const logisticLoss = (output: Matrix, predictions: Matrix): number => {
    const kernel = gpu.createKernel(function (a) {
        return Math.log(a[this.thread.x][this.thread.y]);
    }).setOutput([output.rows, output.cols]);
    const predictionsLog = new Matrix(output.rows, output.cols, kernel(input(output.data, [output.rows, output.cols])) as number[]);

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
