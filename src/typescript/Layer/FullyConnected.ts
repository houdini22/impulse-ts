import { Dimension, LayerType } from "../types";
import { ConvLayer } from "./Conv";
import { Matrix } from "../Math/Matrix";
import { im2col } from "../Math/math";

class FullyConnectedLayer extends ConvLayer {
  configure(): void {
    this.W.resize(this.numFilters, this.filterSize * this.filterSize * this.depth);
    this.W = this.W.setRandom(this.getOutputWidth() * this.getOutputHeight() * this.getOutputDepth());

    this.b.resize(this.numFilters, 1);
    this.b = this.b.setRandom(this.getOutputWidth() * this.getOutputHeight() * this.getOutputDepth());
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
    return m;
  }

  transition(previousLayer: FullyConnectedLayer): FullyConnectedLayer {
    if (previousLayer.is3D()) {
      if (previousLayer.getType() == LayerType.maxpool) {
        this.filterSize = previousLayer.getOutputWidth();
        this.padding = 0;
        this.stride = 1;
        this.width = previousLayer.getOutputWidth();
        this.height = previousLayer.getOutputHeight();
        this.depth = previousLayer.getOutputDepth();
        this.numFilters =
          previousLayer.getOutputWidth() * previousLayer.getOutputHeight() * previousLayer.getOutputDepth();
      } else {
        throw new Error("Invalid usage. Cannot fully connect with previous non maxpool Layer.");
      }
    } else {
      throw new Error("Invalid usage. Cannot fully connect with previous 1D Layer.");
    }

    return this;
  }

  setSize(dimension: Dimension): FullyConnectedLayer {
    return this;
  }

  setFilterSize(filterSize: number): FullyConnectedLayer {
    return this;
  }

  setStride(stride: number): FullyConnectedLayer {
    return this;
  }

  setPadding(padding: number): FullyConnectedLayer {
    return this;
  }

  setWidth(value: number): FullyConnectedLayer {
    return this;
  }

  setHeight(value: number): FullyConnectedLayer {
    return this;
  }

  setDepth(value: number): FullyConnectedLayer {
    return this;
  }

  setNumFilters(value: number): FullyConnectedLayer {
    return this;
  }

  derivative(delta: Matrix): Matrix {
    return delta;
  }
}

export { FullyConnectedLayer };
