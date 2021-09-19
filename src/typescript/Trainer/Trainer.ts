import { AbstractTrainer } from "./AbstractTrainer";
import { Dataset } from "../Dataset";
import { round } from "../Math/math";

export class Trainer extends AbstractTrainer {
  train(inputDataset: Dataset, outputDataset: Dataset): AbstractTrainer {
    const numberOfExamples = inputDataset.getNumberOfExamples();

    let t = 0;

    this.optimizer.setBatchSize(numberOfExamples);
    this.optimizer.setLearningRate(this.learningRate);

    for (let i = 0; i < this.iterations; i += 1) {
      const startTime = new Date().getTime();
      const predictions = this.network.forward(inputDataset.data);

      this.network.backward(inputDataset.data, outputDataset.data, predictions, this.regularization);

      this.optimizer.setT(++t);

      this.network.getLayers().forEach((layer) => {
        this.optimizer.optimize(layer);
      });

      if (this.verbose) {
        if ((i + 1) % this.verboseStep === 0) {
          const currentResult = this.cost(inputDataset.data, outputDataset.data);
          const endTime = new Date().getTime();

          console.log(
            `Iteration: ${i + 1} | Cost: ${round(currentResult.cost, 5)} | Accuracy: ${round(
              currentResult.accuracy,
              2
            )}% | Time: ${(endTime - startTime) / 1000} s.`
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
