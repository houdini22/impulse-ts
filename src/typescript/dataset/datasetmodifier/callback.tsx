import { AbstractDatasetModifier } from "./abstract";

export class CallbackDatabaseModifier extends AbstractDatasetModifier {
  protected callback: Function = (example) => example;

  applyToExample(example: number): void {
    for (
      let exampleIndex = 0;
      exampleIndex < this.dataset.getNumberOfExamples();
      exampleIndex += 1
    ) {
      const example = this.callback(this.dataset.exampleAt(exampleIndex));
      for (let row = 0; row < this.dataset.data.data.rows; row += 1) {
        this.dataset.data.data[row][exampleIndex] = example.data.data[row][0];
      }
    }
  }

  setCallback(callback: Function): CallbackDatabaseModifier {
    this.callback = callback;
    return this;
  }
}
