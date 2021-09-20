import { Matrix } from "../Math/Matrix";
import { im2col } from "../Math/math";
import { Layers, LayerType } from "../types";
import { AbstractLayer3D } from "./AbstractLayer3D";

export class ConvLayer extends AbstractLayer3D {
  protected numFilters = 32;
  protected filterSize = 4;
  protected padding = 1;
  protected stride = 1;

  configure(): void {
    this.W.resize(this.numFilters, this.filterSize * this.filterSize * this.depth);
    this.W = this.W.setRandom(this.getOutputWidth() * this.getOutputHeight() * this.getOutputDepth());

    this.b.resize(this.numFilters, 1);
    this.b = this.b.setRandom(this.getOutputWidth() * this.getOutputHeight() * this.getOutputDepth());

    this.gW.resize(this.numFilters, this.filterSize * this.filterSize * this.depth);
    this.gW = this.gW.setZeros();

    this.gb.resize(this.numFilters, 1);
    this.gb = this.gb.setZeros();

    this.sW.resize(this.numFilters, this.filterSize * this.filterSize * this.depth);
    this.sW = this.sW.setZeros();

    this.sb.resize(this.numFilters, 1);
    this.sb = this.sb.setZeros();

    this.vW.resize(this.numFilters, this.filterSize * this.filterSize * this.depth);
    this.vW = this.vW.setZeros();

    this.vb.resize(this.numFilters, 1);
    this.vb = this.vb.setZeros();
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
    const result = new Matrix(
      this.getOutputWidth() * this.getOutputHeight() * this.getOutputDepth(),
      input.cols
    ).setZeros();

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

      const tmp = this.W.dot(conv.transpose()).add(this.b.replicate(1, conv.rows));
      result.setCol(i, tmp.rollToColMatrix());
    }

    this.Z = result;
    this.A = this.activation(this.Z);

    return this.A;
  }

  activation(m: Matrix): Matrix {
    return m.setMin(0);
  }

  getType(): LayerType {
    return LayerType.conv;
  }

  derivative(delta: Matrix): Matrix {
    return delta;
  }
}
