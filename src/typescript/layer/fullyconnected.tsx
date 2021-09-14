import { LayerType } from "../types";
import { ConvLayer } from "./conv";
import { Backpropagation3Dto1D } from "./backpropagation/backpropagationto3dto1d";

class FullyConnectedLayer extends ConvLayer {
  configure() {
    this.backPropagation = new Backpropagation3Dto1D(this, this.previousLayer);
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
          previousLayer.getOutputWidth() *
          previousLayer.getOutputHeight() *
          previousLayer.getOutputDepth();
      } else {
        throw new Error(
          "Invalid usage. Cannot fully connect with previous non maxpool layer."
        );
      }
    } else {
      throw new Error(
        "Invalid usage. Cannot fully connect with previous 1D layer."
      );
    }

    return this;
  }

  setSize(): FullyConnectedLayer {
    throw new Error("Unsupported");
  }

  setFilterSize(): FullyConnectedLayer {
    throw new Error("Unsupported");
  }

  setStride(stride: number): FullyConnectedLayer {
    throw new Error("Unsupported");
  }

  setPadding(padding: number): FullyConnectedLayer {
    throw new Error("Unsupported");
  }

  setWidth(value: number): FullyConnectedLayer {
    throw new Error("Unsupported");
  }

  setHeight(value: number): FullyConnectedLayer {
    throw new Error("Unsupported");
  }

  setDepth(value: number): FullyConnectedLayer {
    throw new Error("Unsupported");
  }

  setNumFilters(value: number): FullyConnectedLayer {
    throw new Error("Unsupported");
  }
}

export { FullyConnectedLayer };
