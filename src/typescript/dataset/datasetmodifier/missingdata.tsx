import { AbstractDatasetModifier } from "./abstract";

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
      for (let row = 0; row < example.data.rows; row += 1) {
        if (isNaN(example[row][0])) {
          rowsToFill.push({
            row,
            col: example,
          });
        } else {
          sum += example[row][0];
          correctExamplesCount++;
        }
      }
    }

    if (this.modificationType === "mean") {
      valueToFill = sum / correctExamplesCount;
    }

    rowsToFill.forEach(({ row, col }) => {
      this.dataset.data.data[row][col] = valueToFill;
    });
  }

  setModificationType(type: string): MissingDataScalingDatabaseModifier {
    this.modificationType = type;
    return this;
  }
}
