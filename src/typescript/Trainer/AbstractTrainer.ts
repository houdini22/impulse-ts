import Network from "../Network";
import { AbstractOptimizer } from "./optimizer/AbstractOptimizer";
import { Dataset } from "../Dataset";

export interface CostResult {
  cost: number;
  accuracy: number;
}

export interface StepCallbackParameters {
  iteration: number;
}

export abstract class AbstractTrainer {
  network: Network | null = null;
  optimizer: AbstractOptimizer | null = null;
  regularization = 0;
  iterations = 1000;
  learningRate = 0.01;
  verbose = true;
  verboseStep = 1;
  stepCallback = (data: StepCallbackParameters): void => undefined;

  constructor(network: Network, optimizer: AbstractOptimizer) {
    this.network = network;
    this.optimizer = optimizer;
  }

  abstract train(inputDataset: Dataset, outputDataset: Dataset): AbstractTrainer;

  setRegularization(regularization: number): AbstractTrainer {
    this.regularization = regularization;
    return this;
  }

  setIterations(iterations: number): AbstractTrainer {
    this.iterations = iterations;
    return this;
  }

  setLearningRate(learningRate: number): AbstractTrainer {
    this.learningRate = learningRate;
    return this;
  }

  setVerbose(verbose: boolean): AbstractTrainer {
    this.verbose = verbose;
    return this;
  }

  setVerboseStep(verboseStep: number): AbstractTrainer {
    this.verboseStep = verboseStep;
    return this;
  }

  setStepCallback(stepCallback: (data: StepCallbackParameters) => void): AbstractTrainer {
    this.stepCallback = stepCallback;
    return this;
  }

  cost(inputDataset: Dataset, outputDataset: Dataset): CostResult {
    const batchSize = 100;
    const numberOfExamples = inputDataset.getNumberOfExamples();
    const numBatches = Math.ceil(numberOfExamples / batchSize);

    let cost = 0;
    let accuracy = 0;
    let penalty = 0;

    if (this.network) {
      this.network.getLayers().forEach((layer) => {
        penalty += layer.penalty();
      });

      for (let batch = 0, offset = 0; batch < numberOfExamples; batch += batchSize, offset += 100) {
        const inputBatch = inputDataset.getBatch(offset, batchSize).data;
        const outputBatch = outputDataset.getBatch(offset, batchSize).data;

        if (inputBatch && outputBatch) {
          const predictedOutput = this.network.forward(inputBatch);
          const correctOutput = outputBatch;

          const miniBatchSize = correctOutput.cols;

          const loss = this.network.loss(correctOutput, predictedOutput);
          const error = this.network.error(miniBatchSize);

          cost +=
            (error * loss + (this.regularization * penalty) / (2.0 * miniBatchSize)) /
            // TODO: fix it
            (numBatches * (miniBatchSize / batchSize));

          for (let col = 0; col < predictedOutput.cols; col += 1) {
            const index1 = predictedOutput.colMaxCoeffIndex(col);
            const index2 = correctOutput.colMaxCoeffIndex(col);

            if (index1 === index2) {
              accuracy++;
            }
          }
        }
      }
    }

    return {
      cost,
      accuracy: ((accuracy - 1) / numberOfExamples) * 100,
    };
  }
}
