import { AbstractLayer } from "./AbstractLayer";
import { Dimension, Layers } from "../types";
import { Matrix } from "impulse-math-ts";

abstract class AbstractLayer3D extends AbstractLayer {
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
    // do nothing
  }

  is1D(): boolean {
    return false;
  }

  is3D(): boolean {
    return true;
  }

  transition(previousLayer: Layers): Layers {
    if (previousLayer.is3D()) {
      this.setSize([previousLayer.getOutputWidth(), previousLayer.getOutputHeight(), previousLayer.getOutputDepth()]);
    }

    super.transition(previousLayer);

    return this;
  }

  setSize(dimension: Dimension | number): Layers {
    this.setWidth(dimension[0]);
    this.setHeight(dimension[1]);
    this.setDepth(dimension[2]);

    return this;
  }

  getSize(): Dimension {
    return [this.getWidth(), this.getHeight(), this.getDepth()];
  }

  abstract getPadding(): number;

  abstract getStride(): number;

  abstract getFilterSize(): number;

  abstract forward(input: Matrix): Matrix;

  abstract derivative(delta: Matrix): Matrix;

  penalty(): number {
    return this.W.pow(2).sum();
  }
}

export { AbstractLayer3D };
