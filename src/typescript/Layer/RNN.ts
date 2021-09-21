import { Matrix } from "../Math/Matrix";
import { Dimension, Layers, LayerType } from "../types";
import { AbstractLayer } from "./AbstractLayer";

export class RNNLayer extends AbstractLayer {
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
  public daNext: Matrix | null = null;
  public dxt: Matrix | null = null;

  configure(): void {
    this.Wax = new Matrix(this.getWidth(), this.getHeight());
    this.Wax = this.Wax.setRandom(1);

    this.Waa = new Matrix(this.getWidth(), this.getWidth());
    this.Waa = this.Waa.setRandom(1);

    this.Wya = new Matrix(this.getDepth(), this.getWidth());
    this.Wya = this.Wya.setRandom(1);

    this.b = new Matrix(this.getWidth(), 1);
    this.b = this.b.setRandom(1);

    this.by = new Matrix(this.getDepth(), 1);
    this.by = this.by.setRandom(1);

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
  }

  forward(aPrev: Matrix, x: Matrix, Y: Matrix): Matrix[] {
    const aNext = this.Waa.dot(aPrev)
      .replicate(1, this.getWidth())
      .add(this.Wax.dot(x.transpose().replicate(this.getHeight(), 1)))
      .add(this.b.replicate(1, this.getWidth()))
      .tanh();
    const y = this.Wya.dot(aNext).add(this.by.replicate(1, this.getWidth())).softmax();
    this.A.push(aNext);
    this.X.push(x);
    this.Y.push(y);
    return [aNext, y];
  }

  backward(dy: Matrix, x: Matrix, a: Matrix, aPrev: Matrix): void {
    const da = this.Wya.transpose().dot(dy).add(this.daNext);
    const dtanh = a.multiply(a).minusOne().multiply(da);
    const dWax = dtanh.dot(x);
    const dWaa = dtanh.dot(a.transpose());
    const db = this.db.add(dtanh.colwiseSum().divide(dtanh.cols));
    const dby = this.dby.replicate(1, this.getWidth()).add(dy);
    const dWya = this.dWya.add(dy.dot(a.transpose()));
    const daNext = this.Waa.transpose().dot(dtanh);

    this.dWax = dWax.setMin(-5).setMax(5);
    this.dWaa = dWaa.setMin(-5).setMax(5);
    this.dWya = dWya.setMin(-5).setMax(5);
    this.db = db.setMin(-5).setMax(5);
    this.dby = dby.setMin(-5).setMax(5);
    this.daNext = daNext.setMin(-5).setMax(5);
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

  setSize(value: Dimension): RNNLayer {
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
