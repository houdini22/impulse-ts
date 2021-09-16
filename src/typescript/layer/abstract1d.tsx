import { AbstractLayer } from "./abstract";
import { Dimension, Layers } from "../types";
import { getCurrentComputation } from "../computation/utils";

abstract class AbstractLayer1D extends AbstractLayer {
  protected depth = 1;

  configure(): void {
    this.W.resize(this.height, this.width);
    this.W = getCurrentComputation().execute("fillRandom", this.W, this.width);

    this.b.resize(this.height, 1);
    this.b = getCurrentComputation().execute("fillRandom", this.b, this.width);

    this.gW.resize(this.height, this.width);
    this.gW = getCurrentComputation().execute("setZeros", this.gW);

    this.gb.resize(this.height, 1);
    this.gb = getCurrentComputation().execute("setZeros", this.gb);

    this.cW.resize(this.height, this.width);
    this.cW = getCurrentComputation().execute("setZeros", this.cW);

    this.cb.resize(this.height, 1);
    this.cb = getCurrentComputation().execute("setZeros", this.cb);

    this.vW.resize(this.height, this.width);
    this.vW = getCurrentComputation().execute("setZeros", this.vW);

    this.vb.resize(this.height, 1);
    this.vb = getCurrentComputation().execute("setZeros", this.cb);
  }

  is1D(): boolean {
    return true;
  }

  is3D(): boolean {
    return false;
  }

  transition(previousLayer: Layers): AbstractLayer1D {
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

    return this;
  }

  setSize(value: Dimension): AbstractLayer1D {
    this.setHeight(value[0]);

    return this;
  }

  getSize(): number {
    return this.height;
  }

  getOutputWidth(): number {
    return this.width;
  }

  getOutputHeight(): number {
    return this.height;
  }

  getOutputDepth(): number {
    return 1;
  }
}

export { AbstractLayer1D };
