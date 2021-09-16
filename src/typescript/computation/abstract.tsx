import { Matrix } from "../math/matrix";

export class AbstractComputation {
  protected kernels = {};

  addKernel(name: string, func: Function): AbstractComputation {
    this.kernels[name] = func;
    return this;
  }

  execute(
    name: string,
    ...args: [Matrix, Matrix] | [Matrix, number] | [Matrix]
  ): Matrix {
    return this.kernels[name].apply(null, args);
  }
}
