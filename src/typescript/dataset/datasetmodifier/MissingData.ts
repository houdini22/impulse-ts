import { AbstractDatasetModifier } from "./AbstractDatasetModifier";

export class MissingDataScalingDatabaseModifier extends AbstractDatasetModifier {
  protected modificationType = "mean";

  applyToExample(example: number): void {
    const rowsToFill = [];
    let correctExamplesCount = 0;
    let sum = 0;
    let valueToFill = 0;

    for (
      let exampleIndex = 0;
      exampleIndex < this.dataset.getNumberOfExamples();
      exampleIndex += 1
    ) {
      const example = this.dataset.exampleAt(exampleIndex);
      if (example && example.data) {
        for (let row = 0; row < example.data.rows; row += 1) {
          if (isNaN(example.data[row][0])) {
            rowsToFill.push({
              row,
              col: example,
            });
          } else {
            sum += example.data[row][0];
            correctExamplesCount++;
          }
        }
      }
    }

    if (this.modificationType === "mean") {
      valueToFill = sum / correctExamplesCount;
    }

    rowsToFill.forEach(({ row, col }) => {
      if (this.dataset && this.dataset.data && this.dataset.data.data) {
        this.dataset.data.data[row][col] = valueToFill;
      }
    });
  }

  setModificationType(type: string): MissingDataScalingDatabaseModifier {
    this.modificationType = type;
    return this;
  }
}
