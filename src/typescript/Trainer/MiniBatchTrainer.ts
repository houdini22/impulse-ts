import { AbstractTrainer, CostResult } from "./AbstractTrainer";
import { Dataset } from "../Dataset";
import { round } from "../Math/math";
import { Matrix } from "../Math/Matrix";

export class MiniBatchTrainer extends AbstractTrainer {
  batchSize = 100;

  setBatchSize(batchSize: number): MiniBatchTrainer {
    this.batchSize = batchSize;
    return this;
  }

  cost(inputDataset: Dataset, outputDataset: Dataset): CostResult {
    const batchSize = this.batchSize;
    const numberOfExamples = inputDataset.getNumberOfExamples();
    const numBatches = Math.ceil(numberOfExamples / batchSize);

    let cost = 0.0;
    let accuracy = 0.0;

    // calculate penalty
    let penalty = 0.0;

    this.network.getLayers().forEach((layer) => {
      penalty = layer.penalty();
    });

    const startTime = new Date().getTime();
    const startIterationTime = new Date().getTime();

    for (let batch = 0, offset = 0; batch < numberOfExamples; batch += this.batchSize, offset += this.batchSize) {
      const startIterationTime2 = new Date().getTime();
      const input = inputDataset.getBatch(offset, this.batchSize);
      const correctOutput = outputDataset.getBatch(offset, this.batchSize);
      const predictions = this.network.forward(input.data);

      const error = correctOutput.data.multiply(predictions.log()).sum();
      cost += (-1 / numberOfExamples) * error + this.regularization / (penalty * (2 * inputDataset.data.cols));

      for (let col = 0; col < predictions.cols; col += 1) {
        const index1 = predictions.colMaxCoeffIndex(col);
        const index2 = correctOutput.data.colMaxCoeffIndex(col);

        if (index1 === index2) {
          accuracy++;
        }
      }
    }

    return {
      cost,
      accuracy: (accuracy / numberOfExamples) * 100,
    };
  }

  train(inputDataset: Dataset, outputDataset: Dataset): MiniBatchTrainer {
    const numberOfExamples = inputDataset.getNumberOfExamples();

    let t = 0;

    this.optimizer.setBatchSize(this.batchSize);
    this.optimizer.setLearningRate(this.learningRate);

    for (let i = 0; i < this.iterations; i += 1) {
      const startTime = new Date().getTime();
      const startIterationTime = new Date().getTime();

      for (let batch = 0, offset = 0; batch < numberOfExamples; batch += this.batchSize, offset += this.batchSize) {
        const startIterationTime2 = new Date().getTime();
        const input = inputDataset.getBatch(offset, this.batchSize);
        const output = outputDataset.getBatch(offset, this.batchSize);
        const predictions = this.network.forward(input.data);

        this.network.backward(input.data, output.data, predictions, this.regularization);

        this.optimizer.setT(++t);

        this.network.getLayers().forEach((layer) => {
          this.optimizer.optimize(layer);
        });

        if (this.verbose) {
          const cost = this.cost(input, output);
          const endIterationTime = new Date().getTime();
          console.log(
            `Batch: ${offset} / ${numberOfExamples} | Batch time: ${
              endIterationTime - startIterationTime2
            }ms | Time from start: ${round((endIterationTime - startIterationTime) / 1000, 1)}s. | Cost: ${round(
              cost.cost,
              2
            )} | Acc: ${cost.accuracy}`
          );
        }
      }

      if (this.verbose) {
        if ((i + 1) % this.verboseStep === 0) {
          const endTime = new Date().getTime();
          const currentResult = this.cost(inputDataset, outputDataset);

          console.log(
            `Iteration: ${i + 1} | Cost: ${round(currentResult.cost, 5)} | Accuracy: ${
              currentResult.accuracy
            }% | Time: ${(endTime - startTime) / 1000} s.`
          );
        }
      }

      this.stepCallback({
        iteration: i,
      });
    }

    return this;
  }
}
