import { AbstractLayer } from "./AbstractLayer";
import { Dimension, Layers } from "../types";

abstract class AbstractLayer3D extends AbstractLayer {
  configure(): void {
    // do nothing
  }

  is1D(): boolean {
    return false;
  }

  is3D(): boolean {
    return true;
  }

  transition(previousLayer: Layers): Layers {
    if (previousLayer.is3D()) {
      this.setSize([previousLayer.getOutputWidth(), previousLayer.getOutputHeight(), previousLayer.getOutputDepth()]);
    }

    super.transition(previousLayer);

    return this;
  }

  setSize(dimension: Dimension | number): Layers {
    this.setWidth(dimension[0]);
    this.setHeight(dimension[1]);
    this.setDepth(dimension[2]);

    return this;
  }

  getSize(): Dimension {
    return [this.getWidth(), this.getHeight(), this.getDepth()];
  }

  abstract getPadding(): number;

  abstract getStride(): number;

  abstract getFilterSize(): number;
}

export { AbstractLayer3D };
