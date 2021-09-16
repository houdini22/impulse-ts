import { Matrix } from "../Math/Matrix";

interface KernelsInterface {
  [id: string]: (m: Matrix, m2: Matrix | number | void) => Matrix | number;
}

export class AbstractComputation {
  protected kernels: KernelsInterface = {};

  addKernel(name: string, func: (m: Matrix, m2: Matrix | number) => Matrix | number): AbstractComputation {
    this.kernels[name] = func;
    return this;
  }

  execute(name: string, ...args: [Matrix, Matrix] | [Matrix, number] | [Matrix]): Matrix | number {
    if (!this.kernels[name]) {
      throw new Error(`Kernel '${name}' not exists.`);
    }
    return this.kernels[name].apply(null, args);
  }
}
