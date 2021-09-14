import { AbstractLayer } from "./abstract";
import { fillRandom, setZeros } from "../math/matrix";
import { Dimension, Layers } from "../types";
import { Backpropagation1Dto1D } from "./backpropagation/backpropagation1dto1d";

abstract class AbstractLayer1D extends AbstractLayer {
  protected depth: number = 1;

  configure() {
    this.W.resize(this.height, this.width);
    this.W = fillRandom(this.W, this.width);

    this.b.resize(this.height, 1);
    this.b = fillRandom(this.b, this.width);

    this.gW.resize(this.height, this.width);
    this.gW = setZeros(this.gW);

    this.gb.resize(this.height, 1);
    this.gb = setZeros(this.gb);

    this.cW.resize(this.height, this.width);
    this.cW = setZeros(this.cW);

    this.cB.resize(this.height, 1);
    this.cB = setZeros(this.cB);

    this.vW.resize(this.height, this.width);
    this.vW = setZeros(this.vW);

    this.vB.resize(this.height, 1);
    this.vB = setZeros(this.cB);

    this.backPropagation = new Backpropagation1Dto1D(this, this.previousLayer);
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

    super.transition(previousLayer);
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
