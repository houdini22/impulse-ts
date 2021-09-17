import { AbstractTrainer } from "./AbstractTrainer";
import { Dataset } from "../Dataset";
import { round } from "../Math/math";

export class MiniBatchTrainer extends AbstractTrainer {
  batchSize = 100;

  setBatchSize(batchSize: number): MiniBatchTrainer {
    this.batchSize = batchSize;
    return this;
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
        const forward = this.network.forward(input.data);

        this.network.backward(input.data, output.data, forward, this.regularization);

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
            }% | Time: ${(endTime - startTime) / 100} s.`
          );
        }
      }

      if (typeof this.stepCallback === "function") {
        this.stepCallback.call(null, {
          iteration: i,
        });
      }
    }

    return this;
  }
}
