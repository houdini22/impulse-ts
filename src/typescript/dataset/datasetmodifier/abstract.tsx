import { Dataset } from "../dataset";

export abstract class AbstractDatasetModifier {
  protected dataset: Dataset = null;

  constructor(dataset: Dataset) {
    this.dataset = dataset;
  }

  apply(): Dataset {
    for (
      let example = 0;
      example < this.dataset.getNumberOfExamples();
      example += 1
    ) {
      this.applyToExample(example);
    }

    return this.dataset;
  }

  abstract applyToExample(example: number): void;
}
