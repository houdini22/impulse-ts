import { AbstractTrainer } from "./AbstractTrainer";
import { Dataset } from "../Dataset";

export class MiniBatchTrainer extends AbstractTrainer {
  batchSize = 100;

  setBatchSize(batchSize: number): MiniBatchTrainer {
    this.batchSize = batchSize;
    return this;
  }

  train(inputDataset: Dataset, outputDataset: Dataset): MiniBatchTrainer {
    const numberOfExamples = inputDataset.getNumberOfExamples();
    const startTime = new Date().getTime();

    let t = 0;

    if (this.optimizer && this.network) {
      this.optimizer.setBatchSize(this.batchSize);

      for (let i = 0; i < this.iterations; i += 1) {
        const startIterationTime = new Date().getTime();

        for (let batch = 0, offset = 0; batch < numberOfExamples; batch += this.batchSize, offset += this.batchSize) {
          const startIterationTime2 = new Date().getTime();
          const input = inputDataset.getBatch(offset, this.batchSize);
          const output = outputDataset.getBatch(offset, this.batchSize);
          const forward = this.network.forward(input.data);

          this.network.backward(input.data, output.data, forward, this.regularization);

          this.network.getLayers().forEach((layer) => {
            if (this.optimizer) {
              this.optimizer.setT(++t);
              this.optimizer.optimize(layer);
            }
          });

          if (this.verbose) {
            const cost = this.cost(input, output);
            const endIterationTime = new Date().getTime();
            console.log(
              `Batch: ${offset} / ${numberOfExamples} | Cost: ${cost.cost} | Batch time: ${
                endIterationTime - startIterationTime2
              } ms | Time from start: ${(endIterationTime - startIterationTime) / 1000} s.`
            );
          }
        }

        if (this.verbose) {
          if ((i + 1) % this.verboseStep === 0) {
            const endTime = new Date().getTime();
            const currentResult = this.cost(inputDataset, outputDataset);

            console.log(
              `Iteration: ${i + 1} | Cost: ${currentResult.cost} | Accuracy: ${currentResult.accuracy}% | Time: ${
                (endTime - startTime) / 100
              } s.`
            );
          }
        }

        if (typeof this.stepCallback === "function") {
          this.stepCallback.call(null, {
            iteration: i,
          });
        }
      }
    }

    return this;
  }
}