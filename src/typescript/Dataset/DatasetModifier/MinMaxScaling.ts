import { AbstractDatasetModifier } from "./AbstractDatasetModifier";
import { Dataset } from "../Dataset";

export class MinMaxScalingDatabaseModifier extends AbstractDatasetModifier {
  apply(): Dataset {
    let min = Infinity;
    let max = -Infinity;

    for (let col = 0; col < this.dataset.getNumberOfExamples(); col += 1) {
      const example = this.dataset.exampleAt(col);
      for (let row = 0; row < example.rows; row += 1) {
        if (min > example.data[row][0]) {
          min = example.data[row][0];
        }
        if (max < example.data[row][0]) {
          max = example.data[row][0];
        }
      }
    }

    for (let col = 0; col < this.dataset.getNumberOfExamples(); col += 1) {
      const example = this.dataset.exampleAt(col);
      for (let row = 0; row < example.rows; row += 1) {
        this.dataset.data.data[row][col] = (example.data[row][0] - min) / (max - min);
      }
    }

    return this.dataset;
  }
}
