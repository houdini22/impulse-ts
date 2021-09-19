import { AbstractLayer } from "./AbstractLayer";
import { Dimension, Layers } from "../types";
import { Matrix } from "../Math/Matrix";
import { getComputation } from "../Computation";

abstract class AbstractLayer1D extends AbstractLayer {
  protected depth = 1;
  public W: Matrix;
  public b: Matrix;
  public A: Matrix;
  public Z: Matrix;
  public gW: Matrix;
  public gb: Matrix;
  public vW: Matrix;
  public sW: Matrix;
  public vb: Matrix;
  public sb: Matrix;
  public dW: Matrix;
  public db: Matrix;
  public dZ: Matrix;

  constructor() {
    super();
    this.W = new Matrix();
    this.b = new Matrix();
    this.A = new Matrix();
    this.Z = new Matrix();
    this.gW = new Matrix();
    this.gb = new Matrix();
    this.vW = new Matrix();
    this.vb = new Matrix();
    this.sW = new Matrix();
    this.sb = new Matrix();
    this.dW = new Matrix();
    this.db = new Matrix();
  }

  configure(): void {
    this.W.resize(this.getHeight(), this.getWidth());
    this.W = this.W.setRandom(this.previousLayer ? (this.previousLayer.getHeight() as number) : this.getHeight());

    this.b.resize(this.getHeight(), 1);
    this.b = this.b.setRandom(this.previousLayer ? (this.previousLayer.getHeight() as number) : this.getHeight());

    this.gW.resize(this.getHeight(), this.getWidth());
    this.gW = this.W.setZeros();

    this.gb.resize(this.getHeight(), 1);
    this.gb = this.gb.setZeros();

    this.sW.resize(this.getHeight(), this.getWidth());
    this.sW = this.sW.setZeros();

    this.sb.resize(this.getHeight(), 1);
    this.sb = this.sb.setZeros();

    this.vW.resize(this.getHeight(), this.getWidth());
    this.vW = this.vW.setZeros();

    this.vb.resize(this.getHeight(), 1);
    this.vb = this.vb.setZeros();

    this.dW.resize(this.getHeight(), this.getWidth());
    this.dW = this.dW.setZeros();

    this.db.resize(this.getHeight(), 1);
    this.db = this.db.setZeros();
  }

  forward(input: Matrix): Matrix {
    this.Z = this.W.dot(input).add(this.b.replicate(1, input.cols));
    this.A = this.activation(this.Z);
    return this.A;
  }

  is1D(): boolean {
    return true;
  }

  is3D(): boolean {
    return false;
  }

  transition(previousLayer: Layers): AbstractLayer1D {
    if (previousLayer.is1D()) {
      this.setWidth(previousLayer.getSize() as number);
    } else if (previousLayer.is3D()) {
      this.setWidth(previousLayer.getOutputWidth() * previousLayer.getOutputHeight() * previousLayer.getOutputDepth());
    }

    super.transition(previousLayer);

    return this;
  }

  setSize(value: number): AbstractLayer1D {
    this.setHeight(value as number);

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
    return 1;
  }

  penalty(): number {
    return this.W.pow(2).sum();
  }
}

export { AbstractLayer1D };
