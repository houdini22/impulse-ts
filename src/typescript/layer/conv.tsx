import {
  Matrix,
  fillRandom,
  setZeros,
  reluActivation,
  reluDerivative,
  elementWiseAdd,
  multiply,
} from "../math/matrix";
import { im2col } from "../math/math";
import { LayerType } from "../types";
import { AbstractLayer3D } from "./abstract3d";

class ConvLayer extends AbstractLayer3D {
  protected numFilters: number = 32;
  protected filterSize: number = 4;
  protected padding: number = 1;
  protected stride: number = 1;

  configure() {
    this.W.resize(
      this.numFilters,
      this.filterSize * this.filterSize * this.depth
    );
    this.W = fillRandom(this.W, this.width * this.height * this.depth);

    this.b.resize(this.numFilters, 1);
    this.b = fillRandom(this.b, 0.01);

    this.gW.resize(
      this.numFilters,
      this.filterSize * this.filterSize * this.depth
    );
    this.gW = setZeros(this.gW);

    this.gb.resize(this.numFilters, 1);
    this.gb = setZeros(this.gb);

    this.cW.resize(
      this.numFilters,
      this.filterSize * this.filterSize * this.depth
    );
    this.cW = setZeros(this.gb);

    this.cb.resize(this.numFilters, 1);
    this.cb = setZeros(this.cb);

    this.vW.resize(
      this.numFilters,
      this.filterSize * this.filterSize * this.depth
    );
    this.vW = setZeros(this.vW);

    this.vb.resize(this.numFilters, 1);
    this.vb = setZeros(this.vb);
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
    );

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
      const tmp = (this.Z = elementWiseAdd(
        multiply(this.W, conv),
        this.b.replicate(1, input.cols)
      ).rollToColMatrix());

      result.setCol(i, tmp);
    }

    this.Z = result;
    this.activation(this.Z);

    return this.A;
  }

  activation(m: Matrix): Matrix {
    return reluActivation(m);
  }

  derivative(m: Matrix): Matrix {
    return reluDerivative(m);
  }

  getType(): LayerType {
    return LayerType.conv;
  }

  loss(output: Matrix, predictions: Matrix): number {
    throw new Error("Unsupported.");
  }

  error(m: number): number {
    throw new Error("Unsupported.");
  }
}

export { ConvLayer };
