import { AbstractTrainer } from "./abstract";
import { Dataset } from "../dataset/dataset";

export class MiniBatchTrainer extends AbstractTrainer {
  batchSize = 100;

  setBatchSize(batchSize: number): MiniBatchTrainer {
    this.batchSize = batchSize;
    return this;
  }

  train(inputDataset: Dataset, outputDataset: Dataset): void {
    const numberOfExamples = inputDataset.getNumberOfExamples();
    const startTime = new Date().getTime();

    let t = 0;

    this.optimizer.setBatchSize(this.batchSize);

    for (let i = 0; i < this.iterations; i += 1) {
      const startIterationTime = new Date().getTime();

      for (
        let batch = 0, offset = 0;
        batch < numberOfExamples;
        batch += this.batchSize, offset += this.batchSize
      ) {
        const startIterationTime2 = new Date().getTime();
        const input = inputDataset.getBatch(offset, this.batchSize);
        const output = outputDataset.getBatch(offset, this.batchSize);
        const forward = this.network.forward(input);

        this.network.backward(input, output, forward, this.regularization);

        this.network.getLayers().forEach((layer) => {
          this.optimizer.setT(++t);
          this.optimizer.optimize(layer);
        });

        if (this.verbose) {
          const endIterationTime = new Date().getTime();
          console.log(
            `Batch: ${offset} / ${numberOfExamples} | Time: ${
              endIterationTime - startIterationTime2
            } ms | ${endIterationTime - startIterationTime} ms.`
          );
        }
      }

      if (this.verbose) {
        if ((i + 1) % this.verboseStep === 0) {
          const endTime = new Date().getTime();
          const currentResult = this.cost(inputDataset, outputDataset);

          console.log(
            `Iteration: ${i + 1} | Cost: ${currentResult.cost} | Accuracy: ${
              currentResult.accuracy
            }% | Time: ${endTime - startTime} ms.`
          );
        }
      }

      if (typeof this.stepCallback === "function") {
        this.stepCallback({
          iteration: i,
        });
      }
    }
  }
}
