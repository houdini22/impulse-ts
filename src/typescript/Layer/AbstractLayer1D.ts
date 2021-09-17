import { AbstractLayer } from "./AbstractLayer";
import { Layers } from "../types";
import { getComputation } from "../Computation";
import { Matrix } from "../Math/Matrix";

abstract class AbstractLayer1D extends AbstractLayer {
  protected depth = 1;

  configure(): void {
    const prevLayer = this.previousLayer as Layers;

    this.W.resize(this.height, this.width);
    this.W = getComputation().execute("fillRandom", this.W, prevLayer ? prevLayer.getHeight() : this.height) as Matrix;

    this.b.resize(this.height, 1);
    this.b = getComputation().execute("fillRandom", this.b, prevLayer ? prevLayer.getHeight() : this.height) as Matrix;

    this.gW.resize(this.height, this.width);
    this.gW = getComputation().execute("fillZeros", this.gW) as Matrix;

    this.gb.resize(this.height, 1);
    this.gb = getComputation().execute("fillZeros", this.gb) as Matrix;

    this.sW.resize(this.height, this.width);
    this.sW = getComputation().execute("fillZeros", this.sW) as Matrix;

    this.sb.resize(this.height, 1);
    this.sb = getComputation().execute("fillZeros", this.sb) as Matrix;

    this.vW.resize(this.height, this.width);
    this.vW = getComputation().execute("fillZeros", this.vW) as Matrix;

    this.vb.resize(this.height, 1);
    this.vb = getComputation().execute("fillZeros", this.sb) as Matrix;

    this.dW.resize(this.height, this.width);
    this.dW = getComputation().execute("fillZeros", this.sW) as Matrix;

    this.db.resize(this.height, 1);
    this.db = getComputation().execute("fillZeros", this.sb) as Matrix;
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
