import { Network } from "../Network";
import { AbstractOptimizer } from "./Optimizer/AbstractOptimizer";
import { Dataset } from "../Dataset";
import { Matrix } from "../Math/Matrix";
import { getComputation } from "../Computation";

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
  regularization = 1e-4;
  iterations = 1000;
  learningRate = 0.001;
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

  cost(X: Matrix, Y: Matrix): CostResult {
    const numberOfExamples = X.cols;

    let accuracy = 0;
    let penalty = 0;

    this.network.getLayers().forEach((layer) => {
      penalty += layer.penalty();
    });

    const predictions = this.network.forward(X);
    const correctOutput = Y;

    /*const error = Y.multiply(predictions.log())
      .add(Y.minusOne().multiply(predictions.minusOne().log()))
      .multiply(-1)
      .sum();*/
    const error = Y.multiply(predictions.log()).sum();
    const cost = (-1 / numberOfExamples) * error + this.regularization / (penalty * (2 * X.cols));

    for (let col = 0; col < predictions.cols; col += 1) {
      const index1 = predictions.colMaxCoeffIndex(col);
      const index2 = correctOutput.colMaxCoeffIndex(col);

      if (index1 === index2) {
        accuracy++;
      }
    }

    return {
      cost,
      accuracy: (accuracy / numberOfExamples) * 100,
    };
  }
}
