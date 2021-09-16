import { AbstractComputation } from "./abstract";
import { ComputationGPU } from "./computationgpu";

let currentComputation: AbstractComputation = new ComputationGPU();

export const setCurrentComputation = (type: AbstractComputation) => {
  currentComputation = type;
};

export const getCurrentComputation = (): AbstractComputation => {
  return currentComputation;
};