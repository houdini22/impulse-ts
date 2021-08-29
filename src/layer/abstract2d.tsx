import { AbstractLayer } from "./abstract";
import { Dimension } from "../types";

abstract class AbstractLayer2D extends AbstractLayer {
  configure() {
    // empty
  }

  is1D(): boolean {
    return false;
  }

  is3D(): boolean {
    return true;
  }

  transition(previousLayer: AbstractLayer) {
    if (previousLayer.is3D()) {
      this.setSize([
        previousLayer.getOutputWidth(),
        previousLayer.getOutputHeight(),
        previousLayer.getOutputDepth(),
      ]);
    }
  }

  setSize(dimension: Dimension) {
    this.setWidth(dimension[0]);
    this.setHeight(dimension[1]);
    this.setDepth(dimension[2]);
  }
}

export { AbstractLayer2D };
