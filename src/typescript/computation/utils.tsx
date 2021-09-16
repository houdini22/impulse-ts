import { AbstractComputation } from "./abstract";
import { ComputationGPU } from "./computationgpu";

let currentComputation: AbstractComputation = new ComputationGPU();

export const setComputation = (type: AbstractComputation): void => {
  currentComputation = type;
};

export const getComputation = (): AbstractComputation => {
  return currentComputation;
};
