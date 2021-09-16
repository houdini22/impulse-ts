import { AbstractLayer } from "./AbstractLayer";
import { Dimension, Layers } from "../types";
import { getComputation } from "../computation/utils";
import { Matrix } from "../math/Matrix";

abstract class AbstractLayer1D extends AbstractLayer {
  protected depth = 1;

  configure(): void {
    this.W.resize(this.height, this.width);
    this.W = getComputation().execute(
      "fillRandom",
      this.W,
      this.width
    ) as Matrix;

    this.b.resize(this.height, 1);
    this.b = getComputation().execute(
      "fillRandom",
      this.b,
      this.width
    ) as Matrix;

    this.gW.resize(this.height, this.width);
    this.gW = getComputation().execute("setZeros", this.gW) as Matrix;

    this.gb.resize(this.height, 1);
    this.gb = getComputation().execute("setZeros", this.gb) as Matrix;

    this.cW.resize(this.height, this.width);
    this.cW = getComputation().execute("setZeros", this.cW) as Matrix;

    this.cb.resize(this.height, 1);
    this.cb = getComputation().execute("setZeros", this.cb) as Matrix;

    this.vW.resize(this.height, this.width);
    this.vW = getComputation().execute("setZeros", this.vW) as Matrix;

    this.vb.resize(this.height, 1);
    this.vb = getComputation().execute("setZeros", this.cb) as Matrix;
  }

  is1D(): boolean {
    return true;
  }

  is3D(): boolean {
    return false;
  }

  transition(previousLayer: Layers): AbstractLayer1D {
    if (previousLayer.is1D()) {
      this.setWidth(previousLayer.getSize() as number);
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
