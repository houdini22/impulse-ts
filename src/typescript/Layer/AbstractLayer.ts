import { Matrix } from "impulse-math-ts";
import { Dimension, Layers } from "../types";
import { AbstractBackPropagation } from "./Backpropagation/AbstractBackpropagation";

abstract class AbstractLayer {
  protected width = 0;
  protected height = 0;
  protected depth = 0;
  protected previousLayer: Layers | null = null;
  protected backPropagation: AbstractBackPropagation | null = null;

  constructor() {}

  setBackPropagation(backPropagation: AbstractBackPropagation): Layers {
    this.backPropagation = backPropagation;
    return this;
  }

  getBackPropagation(): AbstractBackPropagation | null {
    return this.backPropagation;
  }

  setWidth(value: number): Layers {
    this.width = value;
    return this;
  }

  getWidth(): number {
    return this.width;
  }

  setHeight(value: number): Layers {
    this.height = value;
    return this;
  }

  getHeight(): number {
    return this.height;
  }

  setDepth(value: number): Layers {
    this.depth = value;
    return this;
  }

  getDepth(): number {
    return this.depth;
  }

  abstract getOutputWidth(): number;

  abstract getOutputHeight(): number;

  abstract getOutputDepth(): number;

  abstract configure(): void;

  abstract is1D(): boolean;

  abstract is3D(): boolean;

  transition(previousLayer: Layers): Layers {
    this.previousLayer = previousLayer;
    return this;
  }

  abstract getSize(): Dimension | number;

  abstract activation(value: Matrix): Matrix;

  abstract getType(): string;

  abstract derivative(delta: Matrix): Matrix;

  abstract penalty(): number;
}

export { AbstractLayer };
