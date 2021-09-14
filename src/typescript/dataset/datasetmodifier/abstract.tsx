import { Dataset } from "../dataset";

export abstract class AbstractDatasetModifier {
  protected dataset: Dataset = null;

  constructor(dataset: Dataset) {
    this.dataset = dataset;
  }

  apply() {
    for (
      let example = 0;
      example < this.dataset.getNumberOfExamples();
      example += 1
    ) {
      this.applyToExample(example);
    }
  }

  abstract applyToExample(example: number): void;
}
