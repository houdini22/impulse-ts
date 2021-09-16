import { AbstractComputation } from "./AbstractComputation";
import { ComputationGPU } from "./ComputationGPU";
import { ComputationCPU } from "./ComputationCPU";

let currentComputation: AbstractComputation = new ComputationCPU();

export const setComputation = (type: AbstractComputation): void => {
  currentComputation = type;
};

export const getComputation = (): AbstractComputation => {
  return currentComputation;
};
