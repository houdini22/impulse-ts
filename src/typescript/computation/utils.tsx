import { AbstractComputation } from "./abstract";
import { ComputationGPU } from "./computationgpu";
import { ComputationCPU } from "./computationcpu";

let currentComputation: AbstractComputation = new ComputationCPU();

export const setComputation = (type: AbstractComputation): void => {
  currentComputation = type;
};

export const getComputation = (): AbstractComputation => {
  return currentComputation;
};
