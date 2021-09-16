import { AbstractComputation } from "./AbstractComputation";
import { Matrix } from "../math/Matrix";

import { GPU } from "gpu.js";

export const gpu = new GPU({ mode: "gpu" });

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

  return new Matrix(m1.rows, m1.cols, kernel(m1.data, m2.data) as number[][]);
};

export const elementWiseDivideNumber = (m1: Matrix, num: number): Matrix => {
  const kernel = gpu
    .createKernel(function (a) {
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
  return new Matrix(m.rows, m.cols, elementWiseDivide(data, divider).data);
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
      new Matrix(
        output.rows,
        output.cols,
        kernel(predictions.data) as number[][]
      )
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

export const purelinLoss = (output: Matrix, predictions: Matrix): number => {
  const kernel = gpu
    .createKernel(function (a, b) {
      return (
        b[this.thread.x][this.thread.y] -
        Math.pow(a[this.thread.x][this.thread.y], 2)
      );
    })
    .setOutput([output.rows, output.cols]);
  return new Matrix(
    output.rows,
    output.cols,
    kernel(output.data) as number[][]
  ).sum();
};

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
      return Math.random() - 0.5;
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

export const setOnes = (m1: Matrix): Matrix => {
  const kernel = gpu
    .createKernel(function () {
      return 1.0;
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
      return a[this.thread.x][this.thread.y] * this.constants.number;
    })
    .setOutput([m1.rows, m1.cols])
    .setConstants({
      number: num,
    });

  return new Matrix(m1.rows, m1.cols, kernel(m1.data) as number[][]);
};

export const transpose = (m: Matrix): Matrix => {
  const kernel = gpu
    .createKernel(function (a) {
      return a[this.thread.y][this.thread.x];
    })
    .setOutput([m.cols, m.rows]);

  return new Matrix(m.cols, m.rows, kernel(m.data) as number[][]);
};

export class ComputationGPU extends AbstractComputation {
  constructor() {
    super();

    this.addKernel("multiply", multiply);
    this.addKernel("elementWiseAdd", elementWiseAdd);
    this.addKernel("elementWiseSubtract", elementWiseSubtract);
    this.addKernel("fillRandom", fillRandom);
    this.addKernel("setZeros", setZeros);
    this.addKernel("elementWiseMultiply", elementWiseMultiply);
    this.addKernel("elementWiseMultiplyNumber", elementWiseMultiplyNumber);
    this.addKernel("elementWiseDivide", elementWiseDivide);
    this.addKernel("elementWiseDivideNumber", elementWiseDivideNumber);
    this.addKernel("softmaxActivation", softmaxActivation);
    this.addKernel("softmaxLoss", softmaxLoss);
    this.addKernel("logisticActivation", logisticActivation);
    this.addKernel("logisticDerivative", logisticDerivative);
    this.addKernel("logisticLoss", logisticLoss);
    this.addKernel("tanhActivation", tanhActivation);
    this.addKernel("tanhDerivative", tanhDerivative);
    this.addKernel("reluActivation", reluActivation);
    this.addKernel("reluDerivative", reluDerivative);
    this.addKernel("softplusActivation", softplusActivation);
    this.addKernel("softplusDerivative", softplusDerivative);
    this.addKernel("penalty", penalty);
    this.addKernel("sqrt", sqrt);
    this.addKernel("purelinLoss", purelinLoss);
    this.addKernel("transpose", transpose);
  }
}
