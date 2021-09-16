import { Matrix } from "../math/Matrix";

interface KernelsInterface {
  [id: string]: (m: Matrix, m2: Matrix | number) => Matrix | number;
}

export class AbstractComputation {
  protected kernels: KernelsInterface = {};

  addKernel(name: string, func: (m: Matrix, m2: Matrix | number) => Matrix | number): AbstractComputation {
    this.kernels[name] = func;
    return this;
  }

  execute(name: string, ...args: [Matrix, Matrix] | [Matrix, number] | [Matrix]): Matrix | number {
    return this.kernels[name].apply(null, args);
  }
}
