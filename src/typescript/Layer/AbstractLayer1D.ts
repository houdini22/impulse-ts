import { AbstractLayer } from "./AbstractLayer";
import { Layers } from "../types";
import { getComputation } from "../Computation/utils";
import { Matrix } from "../Math/Matrix";

abstract class AbstractLayer1D extends AbstractLayer {
  protected depth = 1;

  configure(): void {
    this.W.resize(this.height, this.width);
    this.W = getComputation().execute("fillRandom", this.W, this.width) as Matrix;

    this.b.resize(this.height, 1);
    this.b = getComputation().execute("fillRandom", this.b, this.width) as Matrix;

    this.gW.resize(this.height, this.width);
    this.gW = getComputation().execute("fillZeros", this.gW) as Matrix;

    this.gb.resize(this.height, 1);
    this.gb = getComputation().execute("fillZeros", this.gb) as Matrix;

    this.cW.resize(this.height, this.width);
    this.cW = getComputation().execute("fillZeros", this.cW) as Matrix;

    this.cb.resize(this.height, 1);
    this.cb = getComputation().execute("fillZeros", this.cb) as Matrix;

    this.vW.resize(this.height, this.width);
    this.vW = getComputation().execute("fillZeros", this.vW) as Matrix;

    this.vb.resize(this.height, 1);
    this.vb = getComputation().execute("fillZeros", this.cb) as Matrix;
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
      this.setWidth(previousLayer.getOutputWidth() * previousLayer.getOutputHeight() * previousLayer.getOutputDepth());
    }

    super.transition(previousLayer);

    return this;
  }

  setSize(value: number): AbstractLayer1D {
    this.setHeight(value as number);

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