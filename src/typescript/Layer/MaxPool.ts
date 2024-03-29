import { Matrix } from "impulse-math-ts";
import { maxpool } from "impulse-math-ts";
import { LayerType } from "../types";
import { AbstractLayer3D } from "./AbstractLayer3D";

class MaxPoolLayer extends AbstractLayer3D {
  filterSize = 0;
  stride = 0;

  configure(): void {
    // do nothing
  }

  getOutputHeight(): number {
    return (this.height - this.filterSize) / this.stride + 1;
  }

  getOutputWidth(): number {
    return (this.width - this.filterSize) / this.stride + 1;
  }

  getOutputDepth(): number {
    return this.depth;
  }

  setFilterSize(size: number): MaxPoolLayer {
    this.filterSize = size;
    return this;
  }

  getFilterSize(): number {
    return this.filterSize;
  }

  setStride(stride: number): MaxPoolLayer {
    this.stride = stride;
    return this;
  }

  getStride(): number {
    return this.stride;
  }

  getPadding(): number {
    return 0;
  }

  forward(input: Matrix): Matrix {
    const result = new Matrix(this.getOutputWidth() * this.getOutputHeight() * this.getOutputDepth(), input.cols);

    for (let i = 0; i < input.cols; i += 1) {
      const pool = maxpool(
        input.col(i),
        this.depth,
        this.height,
        this.width,
        this.filterSize,
        this.filterSize,
        this.stride,
        this.stride
      );

      result.setCol(i, pool.rollToColMatrix());
    }

    this.Z = result;
    this.A = this.activation(this.Z);

    return this.A;
  }

  activation(m: Matrix): Matrix {
    return m;
  }

  getType(): LayerType {
    return LayerType.maxpool;
  }

  derivative(delta: Matrix): Matrix {
    return delta;
  }
}

export { MaxPoolLayer };
