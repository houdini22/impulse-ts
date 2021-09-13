import { AbstractLayer } from "./abstract";
import { fillRandom, resize } from "../math/matrix";
import { Dimension, Layers } from "../types";

abstract class AbstractLayer1D extends AbstractLayer {
  protected depth: number = 1;

  configure() {
    resize(this.W, this.height, this.width);
    this.W = fillRandom(this.W, this.width);

    resize(this.b, this.height, 1);
    this.b = fillRandom(this.b, this.width);

    resize(this.gW, this.height, this.width);
    resize(this.gb, this.height, 1);
  }

  is1D(): boolean {
    return true;
  }

  is3D(): boolean {
    return false;
  }

  transition(previousLayer: Layers) {
    if (previousLayer.is1D()) {
      this.setWidth(previousLayer.getSize());
    } else if (previousLayer.is3D()) {
      this.setWidth(
        previousLayer.getOutputWidth() *
          previousLayer.getOutputHeight() *
          previousLayer.getOutputDepth()
      );
    }
  }

  setSize(value: Dimension) {
    this.setHeight(value[0]);
  }

  getSize(): number {
    return this.height;
  }

  getOutputWidth() {
    return this.width;
  }

  getOutputHeight() {
    return this.height;
  }

  getOutputDepth() {
    return 1;
  }
}

export { AbstractLayer1D };
