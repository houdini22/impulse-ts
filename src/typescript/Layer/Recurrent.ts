import { Matrix } from "impulse-math-ts";
import { Dimension, LayerType } from "../types";
import { AbstractLayer } from "./AbstractLayer";

export interface GradientResult {
  dWax: Matrix;
  dWya: Matrix;
  dWaa: Matrix;
  db: Matrix;
  dby: Matrix;
  daNext: Matrix;
}

export class RecurrentLayer extends AbstractLayer {
  public wX: Matrix | null = null;
  public wA: Matrix | null = null;
  public wY: Matrix | null = null;
  public wB: Matrix | null = null;
  public wBY: Matrix | null = null;
  public dwX: Matrix | null = null;
  public dwA: Matrix | null = null;
  public dwY: Matrix | null = null;
  public dwB: Matrix | null = null;
  public dwBY: Matrix | null = null;
  public Y: Matrix[] = [];
  public A: Matrix[] = [];
  public X: Matrix[] = [];
  public aNext: Matrix | null = null;
  public aPrev: Matrix | null = null;
  public daNext: Matrix | null = null;

  configure(): void {
    this.wX = new Matrix(this.getWidth(), this.getHeight());
    this.wX = this.wX.setRandom(this.getWidth());

    this.wA = new Matrix(this.getWidth(), this.getWidth());
    this.wA = this.wA.setRandom(this.getWidth());

    this.wY = new Matrix(this.getDepth(), this.getWidth());
    this.wY = this.wY.setRandom(this.getDepth());

    this.wB = new Matrix(this.getWidth(), 1);
    this.wB = this.wB.setRandom(this.getWidth());

    this.wBY = new Matrix(this.getDepth(), 1);
    this.wBY = this.wBY.setRandom(this.getDepth());

    this.dwX = new Matrix(this.getWidth(), this.getHeight());
    this.dwX = this.dwX.setZeros();

    this.dwA = new Matrix(this.getWidth(), this.getWidth());
    this.dwA = this.dwA.setZeros();

    this.dwY = new Matrix(this.getDepth(), this.getWidth());
    this.dwY = this.dwY.setZeros();

    this.dwB = new Matrix(this.getWidth(), 1);
    this.dwB = this.dwB.setZeros();

    this.dwBY = new Matrix(this.getDepth(), 1);
    this.dwBY = this.dwBY.setZeros();

    this.daNext = new Matrix(this.getWidth(), this.getWidth());
    this.daNext = this.daNext.setZeros();
  }

  forward(x: Matrix, Y: Matrix, aPrev: Matrix): Object {
    const aNext = this.wX.dot(x).add(this.wA.dot(aPrev)).add(this.wB.replicate(1, x.cols)).tanh();
    const y = this.wY.dot(aNext).add(this.wBY.replicate(1, x.cols));
    let p = Matrix.from(y.data).setMin(1e-8);
    let loss = 0;

    for (let row = 0; row < y.rows; row += 1) {
      for (let col = 0; col < y.cols; col += 1) {
        p.data[row][col] = Math.exp(p.data[row][col]);
      }
    }

    p = p.divide(y.sum());

    for (let row = 0; row < p.rows; row += 1) {
      loss += -Math.log(Math.max(p.data[row][Y.colMaxCoeffIndex(row)], 1e-9));
    }

    return { aNext, y, p, loss };
  }

  backward(X: Matrix, Y: Matrix, A: Matrix, aNext: Matrix): GradientResult {
    this.dwY = this.dwY.add(Y.dot(aNext.transpose()));
    this.dwBY = this.dwBY.add(Y.rowwiseSum().transpose());
    const dhraw = aNext
      .pow(2)
      .minusOne()
      .multiply(this.wY.transpose().dot(Y).add(this.daNext))
      .setMin(-10e18)
      .setMax(10e18);
    this.dwB = this.dwB.add(dhraw.colwiseSum());
    this.dwX = this.dwX.add(dhraw.dot(X));
    this.dwA = this.dwA.add(dhraw.dot(A.transpose()));
    this.daNext = this.wA.transpose().dot(dhraw);
  }

  activation(m: Matrix): Matrix {
    return m;
  }

  getType(): LayerType {
    return LayerType.rnnlayer;
  }

  derivative(delta: Matrix): Matrix {
    return delta;
  }

  is1D(): boolean {
    return true;
  }

  is3D(): boolean {
    return false;
  }

  setSize(value: Dimension): RecurrentLayer {
    this.setWidth(value[0]);
    this.setHeight(value[1]);
    this.setDepth(value[2]);

    return this;
  }

  getSize(): number {
    return this.height;
  }

  getOutputWidth(): number {
    return this.width;
  }

  getOutputHeight(): number {
    return this.height;
  }

  getOutputDepth(): number {
    return this.depth;
  }

  penalty(): number {
    return 0;
  }

  getWidth(): number {
    return this.width;
  }
}
