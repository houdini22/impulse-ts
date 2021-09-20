import { AbstractDatasetModifier } from "./AbstractDatasetModifier";
import { Dataset } from "../Dataset";

export class MissingDataScalingDatasetModifier extends AbstractDatasetModifier {
  protected modificationType = "mean";

  apply(dataset: Dataset): Dataset {
    const rowsToFill = [];
    let correctExamplesCount = 0;
    let sum = 0;
    let valueToFill = 0;

    for (let exampleIndex = 0; exampleIndex < dataset.getNumberOfExamples(); exampleIndex += 1) {
      const example = dataset.exampleAt(exampleIndex);
      for (let row = 0; row < dataset.getExampleSize(); row += 1) {
        if (isNaN(example.data[row][0]) || typeof example.data[row][0] === "undefined") {
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

    if (this.modificationType === "mean") {
      valueToFill = sum / correctExamplesCount;
    }

    rowsToFill.forEach(({ row, col }) => {
      dataset.data.data[row][col] = valueToFill;
    });

    return dataset;
  }

  setModificationType(type: string): MissingDataScalingDatasetModifier {
    this.modificationType = type;
    return this;
  }
}
