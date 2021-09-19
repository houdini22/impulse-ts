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
  public daNext: Matrix | null = null;
  public aPrev: Matrix | null = null;
  public dxt: Matrix | null = null;
  public daPrev: Matrix | null = null;
  public dba: Matrix | null = null;

  configure(): void {
    this.Wax = new Matrix(this.getHeight(), this.getWidth());
    this.Wax = this.Wax.setRandom(this.getWidth());

    this.Waa = new Matrix(this.getWidth(), this.getWidth());
    this.Waa = this.Waa.setRandom(this.getWidth());

    this.Wya = new Matrix(this.getDepth(), this.getWidth());
    this.Wya = this.Wya.setRandom(this.getWidth());

    this.b = new Matrix(this.getWidth(), 1);
    this.b = this.b.setZeros();

    this.by = new Matrix(this.getDepth(), 1);
    this.by = this.by.setZeros();

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

  forward(aPrev: Matrix, x: Matrix): Matrix[] {
    const aNext = this.Waa.dot(aPrev).add(this.Wax.dot(x)).add(this.b).tanh();
    const y = this.Wya.dot(aNext).add(this.by).softmax();
    this.A.push(aNext);
    this.X.push(x);
    this.Y.push(y);
    return [aNext, y];
  }

  backward(dy: Matrix, x: Matrix, a: Matrix, aPrev: Matrix): void {
    this.dWya = this.dWya.add(dy.dot(a.transpose())).setMax(5).setMin(-5);
    this.dby = this.dby.add(dy).setMax(5).setMin(-5);
    const da = this.Wya.transpose().dot(dy).add(this.daNext);
    const daraw = a.multiply(a).minusOne();
    this.db = this.db.add(daraw).setMax(5).setMin(-5);
    this.dWax = this.dWax.add(daraw.dot(x.transpose())).setMax(5).setMin(-5);
    this.dWaa = this.dWaa.add(daraw.dot(aPrev.transpose())).setMax(5).setMin(-5);
    this.daNext = this.Waa.transpose().dot(daraw).setMax(5).setMin(-5);
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
