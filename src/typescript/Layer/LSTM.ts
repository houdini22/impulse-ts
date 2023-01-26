import { Matrix } from "impulse-math-ts";
import { Dimension, LayerType } from "../types";
import { AbstractLayer } from "./AbstractLayer";

export class LSTMLayer extends AbstractLayer {
  public Wf: Matrix | null = null;
  public bf: Matrix | null = null;
  public Wi: Matrix | null = null;
  public bi: Matrix | null = null;
  public Wc: Matrix | null = null;
  public bc: Matrix | null = null;
  public Wo: Matrix | null = null;
  public bo: Matrix | null = null;
  public Wy: Matrix | null = null;
  public by: Matrix | null = null;
  public dxt: Matrix | null = null;
  public dWf: Matrix | null = null;
  public dWi: Matrix | null = null;
  public dWc: Matrix | null = null;
  public dWo: Matrix | null = null;
  public dbf: Matrix | null = null;
  public dbi: Matrix | null = null;
  public dbc: Matrix | null = null;
  public dbo: Matrix | null = null;

  configure(): void {}

  forward(input: Matrix, aPrev: Matrix, cPrev): Matrix[] {
    const nx = input.rows;
    const m = input.cols;
    const ny = this.Wy.rows;
    const na = this.Wy.cols;

    const concat = new Matrix(nx + na, m);

    const ft = this.Wf.dot(concat).add(this.bf).sigmoid();
    const it = this.Wi.dot(concat).add(this.bi).sigmoid();
    const cct = this.Wc.dot(concat).add(this.bc).tanh();
    const cNext = ft.multiply(cPrev).add(it.multiply(cct));
    const ot = this.Wo.dot(concat).add(this.bo).sigmoid();
    const aNext = ot.multiply(cNext.tanh());

    const ytPred = this.Wy.dot(aNext).add(this.by).softmax();
    return [aNext, cPrev];
  }

  backward(daNext: Matrix, dcNext: Matrix): void {}

  activation(m: Matrix): Matrix {
    return m;
  }

  getType(): LayerType {
    return LayerType.rnnlayer;
  }

  derivative(delta: Matrix): Matrix {
    return delta;
  }

  is1D(): boolean {
    return true;
  }

  is3D(): boolean {
    return false;
  }

  setSize(value: Dimension): LSTMLayer {
    this.setWidth(value[0]);
    this.setHeight(value[1]);
    this.setDepth(value[2]);

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
    return this.depth;
  }

  penalty(): number {
    return 0;
  }
}
