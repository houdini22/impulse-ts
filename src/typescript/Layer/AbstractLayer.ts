import { Matrix } from "../Math/Matrix";
import { Dimension, Layers } from "../types";
import { AbstractBackPropagation } from "./Backpropagation/AbstractBackpropagation";
import { getComputation } from "../Computation";

abstract class AbstractLayer {
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

  protected width = 0;
  protected height = 0;
  protected depth = 0;
  protected previousLayer: Layers | null = null;
  protected backPropagation: AbstractBackPropagation | null = null;

  constructor() {
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

  setBackPropagation(backPropagation: AbstractBackPropagation): AbstractLayer {
    this.backPropagation = backPropagation;
    return this;
  }

  setPreviousLayer(layer: Layers): void {
    this.previousLayer = layer;
  }

  getBackPropagation(): AbstractBackPropagation | null {
    return this.backPropagation;
  }

  forward(input: Matrix): Matrix {
    this.Z = getComputation().execute(
      "add",
      getComputation().execute("multiply", this.W, input) as Matrix,
      this.b.replicate(1, input.cols)
    ) as Matrix;
    this.A = this.activation(this.Z);
    return this.A;
  }

  setWidth(value: number): AbstractLayer {
    this.width = value;

    return this;
  }

  getWidth(): number {
    return this.width;
  }

  setHeight(value: number): AbstractLayer {
    this.height = value;

    return this;
  }

  getHeight(): number {
    return this.height;
  }

  setDepth(value: number): AbstractLayer {
    this.depth = value;

    return this;
  }

  getDepth(): number {
    return this.depth;
  }

  abstract getOutputWidth(): number;

  abstract getOutputHeight(): number;

  abstract getOutputDepth(): number;

  abstract configure(): void;

  abstract is1D(): boolean;

  abstract is3D(): boolean;

  transition(previousLayer: Layers): AbstractLayer {
    this.previousLayer = previousLayer;
    return this;
  }

  abstract setSize(dimension: Dimension | number): AbstractLayer;

  abstract getSize(): Dimension | number;

  abstract activation(value: Matrix): Matrix;

  abstract derivative(value: Matrix): Matrix;

  abstract getType(): string;

  abstract loss(output: Matrix, predictions: Matrix): number;

  abstract error(m: number): number;

  penalty(): number {
    return getComputation().execute("penalty", this.W) as number;
  }
}

export { AbstractLayer };
