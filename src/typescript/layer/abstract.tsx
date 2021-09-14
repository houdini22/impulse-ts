import { elementWiseAdd, Matrix, multiply, penalty } from "../math/matrix";
import { Dimension, Layers } from "../types";
import { AbstractBackPropagation } from "./backpropagation/abstract";

abstract class AbstractLayer {
  public W: Matrix;
  public b: Matrix;
  public A: Matrix;
  public Z: Matrix;
  public gW: Matrix;
  public gb: Matrix;
  public vW: Matrix;
  public cW: Matrix;
  public vb: Matrix;
  public cb: Matrix;

  protected width: number = 0;
  protected height: number = 0;
  protected depth: number = 0;
  protected previousLayer: Layers = null;
  protected backPropagation: AbstractBackPropagation = null;

  constructor() {
    this.W = new Matrix();
    this.b = new Matrix();
    this.A = new Matrix();
    this.Z = new Matrix();
    this.gW = new Matrix();
    this.gb = new Matrix();
    this.vW = new Matrix();
    this.cW = new Matrix();
    this.vb = new Matrix();
    this.cb = new Matrix();
  }

  setBackPropagation(backPropagation: AbstractBackPropagation): AbstractLayer {
    this.backPropagation = backPropagation;
    return this;
  }

  getBackPropagation(): AbstractBackPropagation {
    return this.backPropagation;
  }

  forward(input: Matrix): Matrix {
    this.Z = elementWiseAdd(
      multiply(this.W, input),
      this.b.replicate(1, input.cols)
    );
    this.A = this.activation(this.Z);
    return this.A;
  }

  setWidth(value: number) {
    this.width = value;
  }

  getWidth(): number {
    return this.width;
  }

  setHeight(value: number) {
    this.height = value;
  }

  getHeight(): number {
    return this.height;
  }

  setDepth(value: number) {
    this.depth = value;
  }

  getDepth(): number {
    return this.depth;
  }

  abstract getOutputWidth();

  abstract getOutputHeight();

  abstract getOutputDepth();

  abstract configure();

  abstract is1D(): boolean;

  abstract is3D(): boolean;

  transition(previousLayer: Layers): AbstractLayer {
    this.previousLayer = previousLayer;
    return this;
  }

  abstract setSize(dimension: Dimension);

  abstract getSize();

  abstract activation(value: Matrix): Matrix;

  abstract derivative(value: Matrix): Matrix;

  abstract getType();

  abstract loss(output: Matrix, predictions: Matrix): number;

  abstract error(m: number): number;

  penalty(): number {
    return penalty(this.W);
  }
}

export { AbstractLayer };
