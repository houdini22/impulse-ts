import Network from "../network";
import { AbstractOptimizer } from "./optimizer/abstract";
import { Dataset } from "../dataset/Dataset";

export abstract class AbstractTrainer {
  network: Network = null;
  optimizer: AbstractOptimizer = null;
  regularization: number = 0;
  iterations: number = 1000;
  learningRate: number = 0.1;
  verbose: boolean = true;
  verboseStep: number = 1;
  stepCallback: Function = () => null;

  constructor(network: Network, optimizer: AbstractOptimizer) {
    this.network = network;
    this.optimizer = optimizer;
  }

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

  setStepCallback(stepCallback: Function): AbstractTrainer {
    this.stepCallback = stepCallback;
    return this;
  }

  cost(inputDataset: Dataset, outputDataset: Dataset) {
    const batchSize = 100;
    const numberOfExamples = inputDataset.getNumberOfExamples();
    const numBatches = Math.ceil(numberOfExamples / batchSize);

    let cost = 0;
    let accuracy = 0;
    let penalty = 0;

    this.network.getLayers().forEach((layer) => {
      penalty += layer.penalty();
    });

    for (
      let batch = 0, offset = 0;
      batch < numberOfExamples;
      batch += batchSize, offset += 1
    ) {
      const predictedOutput = this.network.forward(
        inputDataset.getBatch(offset, batchSize)
      );
      const correctOutput = outputDataset.getBatch(offset, batchSize);

      const miniBatchSize = correctOutput.cols;

      let loss = this.network.loss(correctOutput, predictedOutput);
      let error = this.network.error(miniBatchSize);

      cost +=
        (error * loss +
          (this.regularization * penalty) / (2.0 * miniBatchSize)) /
        // TODO: fix it
        (numBatches * (miniBatchSize / batchSize));

      for (let col = 0; col < predictedOutput.cols; col += 1) {
        const index1 = predictedOutput.colMaxCoeffIndex(col);
        const index2 = predictedOutput.colMaxCoeffIndex(col);

        if (index1 === index2) {
          accuracy++;
        }
      }
    }

    const result = {
      cost,
      accuracy: ((accuracy - 1) / numberOfExamples) * 100,
    };

    return result;
  }
}
