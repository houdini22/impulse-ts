import { Matrix } from "../Math/Matrix";
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
  public Wax: Matrix | null = null;
  public Waa: Matrix | null = null;
  public Wya: Matrix | null = null;
  public b: Matrix | null = null;
  public by: Matrix | null = null;
  public dWax: Matrix | null = null;
  public dWaa: Matrix | null = null;
  public dWya: Matrix | null = null;
  public db: Matrix | null = null;
  public dby: Matrix | null = null;
  public Y: Matrix[] = [];
  public A: Matrix[] = [];
  public X: Matrix[] = [];
  public aNext: Matrix | null = null;
  public aPrev: Matrix | null = null;
  public daNext: Matrix | null = null;

  configure(): void {
    this.Wax = new Matrix(this.getWidth(), this.getHeight());
    this.Wax = this.Wax.setRandom(2);

    this.Waa = new Matrix(this.getWidth(), this.getWidth());
    this.Waa = this.Waa.setRandom(2);

    this.Wya = new Matrix(this.getDepth(), this.getWidth());
    this.Wya = this.Wya.setRandom(2);

    this.b = new Matrix(this.getWidth(), 1);
    this.b = this.b.setRandom(2);

    this.by = new Matrix(this.getDepth(), 1);
    this.by = this.by.setRandom(2);

    this.dWax = new Matrix(this.getWidth(), this.getHeight());
    this.dWax = this.dWax.setZeros();

    this.dWaa = new Matrix(this.getWidth(), this.getWidth());
    this.dWaa = this.dWaa.setZeros();

    this.dWya = new Matrix(this.getDepth(), this.getWidth());
    this.dWya = this.dWya.setZeros();

    this.db = new Matrix(this.getWidth(), 1);
    this.db = this.db.setZeros();

    this.dby = new Matrix(this.getDepth(), 1);
    this.dby = this.dby.setZeros();

    this.daNext = new Matrix(this.getWidth(), this.getWidth());
    this.daNext = this.daNext.setZeros();
  }

  forward(x: Matrix, aPrev: Matrix): Matrix[] {
    const aNext = this.Wax.dot(x)
      .add(this.Waa.dot(aPrev).replicate(1, this.getWidth()))
      .add(this.b.replicate(1, x.cols))
      .tanh();
    const y = this.Wya.dot(aNext).add(this.by.replicate(1, x.cols)).softmax();
    this.A.push(aNext);
    this.X.push(x);
    this.Y.push(y);
    this.aPrev = aPrev;
    return [aNext, y];
  }

  backward(dy: Matrix, x: Matrix, a: Matrix, aPrev: Matrix): GradientResult {
    const dTanh = a.pow(2).minusOne().multiply(dy);

    const dWax = dTanh.dot(x.transpose());
    const dWaa = dTanh.dot(aPrev.transpose());
    const db = this.db; //.add(dtanh.colwiseSum().divide(dtanh.cols)).setMin(-5).setMax(5);
    const dby = this.dby; //.replicate(1, this.getWidth()).add(dy).setMin(-5).setMax(5);
    const dWya = this.dWya; //.add(dy.dot(a.transpose())).setMin(-5).setMax(5);
    const daNext = this.Waa.transpose().dot(dTanh);

    return {
      dWax,
      dWya,
      dWaa,
      db,
      dby,
      daNext,
    };
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
