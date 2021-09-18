import { AbstractLayer } from "./AbstractLayer";
import { Layers } from "../types";
import { getComputation } from "../Computation";
import { Matrix } from "../Math/Matrix";

abstract class AbstractLayer1D extends AbstractLayer {
  protected depth = 1;

  configure(): void {
    this.W.resize(this.getHeight(), this.getWidth());
    this.W = this.W.setRandom(this.previousLayer ? (this.previousLayer.getHeight() as number) : this.getHeight());

    this.b.resize(this.getHeight(), 1);
    this.b = this.b.setRandom(this.previousLayer ? (this.previousLayer.getHeight() as number) : this.getHeight());

    this.gW.resize(this.getHeight(), this.getWidth());
    this.gW = this.W.setZeros();

    this.gb.resize(this.getHeight(), 1);
    this.gb = this.gb.setZeros();

    this.sW.resize(this.getHeight(), this.getWidth());
    this.sW = this.sW.setZeros();

    this.sb.resize(this.getHeight(), 1);
    this.sb = this.sb.setZeros();

    this.vW.resize(this.getHeight(), this.getWidth());
    this.vW = this.vW.setZeros();

    this.vb.resize(this.getHeight(), 1);
    this.vb = this.vb.setZeros();

    this.dW.resize(this.getHeight(), this.getWidth());
    this.dW = this.dW.setZeros();

    this.db.resize(this.getHeight(), 1);
    this.db = this.db.setZeros();
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
