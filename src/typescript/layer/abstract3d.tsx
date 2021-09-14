import { AbstractLayer } from "./abstract";
import { Dimension } from "../types";

abstract class AbstractLayer3D extends AbstractLayer {
  configure() {
    // do nothing
  }

  is1D(): boolean {
    return false;
  }

  is3D(): boolean {
    return true;
  }

  transition(previousLayer: AbstractLayer): AbstractLayer3D {
    if (previousLayer.is3D()) {
      this.setSize([
        previousLayer.getOutputWidth(),
        previousLayer.getOutputHeight(),
        previousLayer.getOutputDepth(),
      ]);
    }

    super.transition(previousLayer);

    return this;
  }

  setSize(dimension: Dimension) {
    this.setWidth(dimension[0]);
    this.setHeight(dimension[1]);
    this.setDepth(dimension[2]);
  }

  getSize(): Dimension {
    return [
      this.getOutputWidth(),
      this.getOutputHeight(),
      this.getOutputDepth(),
    ];
  }
}

export { AbstractLayer3D };
