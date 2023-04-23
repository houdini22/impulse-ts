import { AbstractOptimizer } from "./AbstractOptimizer";
import { Layers } from "../../types";
import { Matrix } from "impulse-math-ts";
import { NetworkRNN } from "../../Network";
export class OptimizerRNN extends AbstractOptimizer {
  public hs = {};

  public ys = {};

  protected mWxh: Matrix = null;

  protected mWhh: Matrix = null;

  protected mWhy: Matrix = null;

  protected mbh: Matrix = null;

  protected mby: Matrix = null;

  constructor(network: NetworkRNN) {
    super();

    this.mWxh = new Matrix(network.getDimensions()[0], network.getDimensions()[1]).setZeros();
    this.mWhh = new Matrix(network.getDimensions()[0], network.getDimensions()[0]).setZeros();
    this.mWhy = new Matrix(network.getDimensions()[1], network.getDimensions()[0]).setZeros();
    this.mbh = new Matrix(network.getDimensions()[0], 1).setZeros();
    this.mby = new Matrix(network.getDimensions()[1], 1).setZeros();
  }
  optimize(layer: Layers): void {
    layer.dwX = layer.dwX.setMin(-5).setMax(5);
    layer.dwY = layer.dwY.setMin(-5).setMax(5);
    layer.dwA = layer.dwA.setMin(-5).setMax(5);
    layer.dwB = layer.dwB.setMin(-5).setMax(5);
    layer.dwBY = layer.dwBY.setMin(-5).setMax(5);

    this.mWxh = this.mWxh.add(layer.dwX.pow(2));
    layer.wX = layer.wX.add(layer.dwX.divide(this.mWxh.add(1e-8).sqrt()).multiply(-this.learningRate));

    this.mWhh = this.mWhh.add(layer.dwA.pow(2));
    layer.wA = layer.wA.add(layer.dwA.divide(this.mWhh.add(1e-8).sqrt()).multiply(-this.learningRate));

    this.mWhy = this.mWhy.add(layer.dwY.pow(2));
    layer.wY = layer.wY.add(layer.dwY.divide(this.mWhy.add(1e-8).sqrt()).multiply(-this.learningRate));

    this.mbh = this.mbh.add(layer.dwB.pow(2));
    layer.wB = layer.wB.add(layer.dwB.divide(this.mbh.add(1e-8).sqrt()).multiply(-this.learningRate));

    this.mby = this.mby.add(layer.dwBY.pow(2));
    layer.wBY = layer.wBY.add(layer.dwBY.divide(this.mby.add(1e-8).sqrt()).multiply(-this.learningRate));
  }

  setHS(hs: Matrix) {
    this.hs[this.t] = hs;
    return this;
  }

  setYS(ys: Matrix) {
    this.ys[this.t] = ys;
    return this;
  }
}
