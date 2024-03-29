import { Layers } from "../../types";

export abstract class AbstractOptimizer {
  protected batchSize = 0;
  protected t = 0;
  protected learningRate = 0;

  setBatchSize(batchSize: number): AbstractOptimizer {
    this.batchSize = batchSize;
    return this;
  }

  setT(t: number): AbstractOptimizer {
    this.t = t;
    return this;
  }

  setLearningRate(learningRate: number): AbstractOptimizer {
    this.learningRate = learningRate;
    return this;
  }

  abstract optimize(layer: Layers): void;
}
