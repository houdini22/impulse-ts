import { Dimension, LayerType } from "../types";
import { ConvLayer } from "./Conv";

class FullyConnectedLayer extends ConvLayer {
  configure(): void {
    // do nothing
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
}

export { FullyConnectedLayer };
