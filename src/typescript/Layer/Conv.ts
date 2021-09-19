import { Matrix } from "../Math/Matrix";
import { im2col } from "../Math/math";
import { LayerType } from "../types";
import { AbstractLayer3D } from "./AbstractLayer3D";
import { getComputation } from "../Computation";

export class ConvLayer extends AbstractLayer3D {
  protected numFilters = 32;
  protected filterSize = 4;
  protected padding = 1;
  protected stride = 1;

  configure(): void {
    this.W.resize(this.numFilters, this.filterSize * this.filterSize * this.depth);
    this.W = getComputation().execute("fillRandom", this.W, this.width * this.height * this.depth) as Matrix;

    this.b.resize(this.numFilters, 1);
    this.b = getComputation().execute("fillRandom", this.b, 0.01) as Matrix;

    this.gW.resize(this.numFilters, this.filterSize * this.filterSize * this.depth);
    this.gW = getComputation().execute("fillZeros", this.gW) as Matrix;

    this.gb.resize(this.numFilters, 1);
    this.gb = getComputation().execute("fillZeros", this.gb) as Matrix;

    this.sW.resize(this.numFilters, this.filterSize * this.filterSize * this.depth);
    this.sW = getComputation().execute("fillZeros", this.gb) as Matrix;

    this.sb.resize(this.numFilters, 1);
    this.sb = getComputation().execute("fillZeros", this.sb) as Matrix;

    this.vW.resize(this.numFilters, this.filterSize * this.filterSize * this.depth);
    this.vW = getComputation().execute("fillZeros", this.vW) as Matrix;

    this.vb.resize(this.numFilters, 1);
    this.vb = getComputation().execute("fillZeros", this.vb) as Matrix;
  }

  getOutputHeight(): number {
    return (this.width - this.filterSize + 2 * this.padding) / this.stride + 1;
  }

  getOutputWidth(): number {
    return (this.height - this.filterSize + 2 * this.padding) / this.stride + 1;
  }

  getOutputDepth(): number {
    return this.numFilters;
  }

  setFilterSize(size: number): ConvLayer {
    this.filterSize = size;
    return this;
  }

  getFilterSize(): number {
    return this.filterSize;
  }

  setNumFilters(numFilters: number): ConvLayer {
    this.numFilters = numFilters;
    return this;
  }

  getNumFilters(): number {
    return this.numFilters;
  }

  setPadding(padding: number): ConvLayer {
    this.padding = padding;
    return this;
  }

  getPadding(): number {
    return this.padding;
  }

  setStride(stride: number): ConvLayer {
    this.stride = stride;
    return this;
  }

  getStride(): number {
    return this.stride;
  }

  forward(input: Matrix): Matrix {
    const result = new Matrix(this.getOutputWidth() * this.getOutputHeight() * this.getOutputDepth(), input.cols);

    for (let i = 0; i < input.cols; i += 1) {
      const conv = im2col(
        input.col(i),
        this.depth,
        this.height,
        this.width,
        this.filterSize,
        this.filterSize,
        this.padding,
        this.padding,
        this.stride,
        this.stride
      );
      const tmp = getComputation().execute(
        "add",
        getComputation().execute("multiply", this.W, conv) as Matrix,
        this.b.replicate(1, input.cols)
      ) as Matrix;

      result.setCol(i, tmp.rollToColMatrix());
    }

    this.Z = result;
    this.activation(this.Z);

    return this.A;
  }

  activation(m: Matrix): Matrix {
    return getComputation().execute("reluActivation", m) as Matrix;
  }

  getType(): LayerType {
    return LayerType.conv;
  }

  backpropagation(delta: Matrix): Matrix {
    return delta;
  }
}
