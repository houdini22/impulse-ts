import { Matrix } from "../Math/Matrix";
import { Dimension, Layers, LayerType } from "../types";
import { AbstractLayer } from "./AbstractLayer";

export class RNNLayer extends AbstractLayer {
  public Wax: Matrix | null = null;
  public Waa: Matrix | null = null;
  public Wya: Matrix | null = null;
  public b: Matrix | null = null;
  public by: Matrix | null = null;

  configure(): void {
    this.Wax = new Matrix(this.getWidth(), this.getHeight());
    this.Wax = this.Wax.setRandom(this.getWidth());

    this.Waa = new Matrix(this.getWidth(), this.getWidth());
    this.Waa = this.Waa.setRandom(this.getWidth());

    this.Wya = new Matrix(this.getDepth(), this.getWidth());
    this.Wya = this.Wax.setRandom(this.getWidth());

    this.b = new Matrix(this.getWidth(), 1);
    this.b = this.b.setZeros();

    this.by = new Matrix(this.getDepth(), 1);
    this.by = this.by.setZeros();
  }

  forward(input: Matrix, aPrev: Matrix): Matrix[] {
    const aNext = this.Wax.dot(input).add(this.Waa.dot(aPrev)).add(this.b);
    const predicted = this.Wya.dot(aNext).add(this.by).softmax();
    return [aNext, predicted];
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
}
