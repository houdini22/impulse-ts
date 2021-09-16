import { AbstractDatasetModifier } from "./AbstractDatasetModifier";
import { Dataset } from "../Dataset";

export class MinMaxScalingDatabaseModifier extends AbstractDatasetModifier {
  apply(): Dataset {
    let min = Infinity;
    let max = -Infinity;

    for (let col = 0; col < this.dataset.getNumberOfExamples(); col += 1) {
      const example = this.dataset.exampleAt(col);
      for (let row = 0; row < example.rows; row += 1) {
        if (min > example.data[row][col]) {
          min = example.data[row][col];
        }
        if (max < example.data[row][col]) {
          max = example.data[row][col];
        }
        console.log(example.data[row][col]);
      }
    }

    console.log(min, max);

    for (let col = 0; col < this.dataset.getNumberOfExamples(); col += 1) {
      const example = this.dataset.exampleAt(col);
      for (let row = 0; row < example.rows; row += 1) {
        if (example && example.data) {
          this.dataset.data.data[row][col] = (example.data[row][col] - min) / (max - min);
        }
      }
    }

    return this.dataset;
  }
}
