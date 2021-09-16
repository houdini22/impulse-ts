import { Matrix } from "../Math/Matrix";
import { maxpool } from "../Math/math";
import { LayerType } from "../types";
import { AbstractLayer3D } from "./AbstractLayer3D";

class MaxPoolLayer extends AbstractLayer3D {
  filterSize = 0;
  stride = 0;

  configure(): void {}

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
      ).rollToColMatrix();

      result.setCol(i, pool);
    }

    this.Z = result;
    this.activation(this.Z);

    return this.A;
  }

  activation(m: Matrix): Matrix {
    throw new Error("No activation for MAXPOOL Layer.");
  }

  derivative(m: Matrix): Matrix {
    throw new Error("No derivative for MAXPOOL Layer.");
  }

  getType(): LayerType {
    return LayerType.maxpool;
  }

  loss(output: Matrix, predictions: Matrix): number {
    throw new Error("Unsupported.");
  }

  error(m: number): number {
    throw new Error("Unsupported.");
  }
}

export { MaxPoolLayer };
