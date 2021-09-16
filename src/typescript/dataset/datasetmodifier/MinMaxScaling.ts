import { AbstractDatasetModifier } from "./AbstractDatasetModifier";
import { gpu } from "../../computation/ComputationGPU";

export class MinMaxScalingDatabaseModifier extends AbstractDatasetModifier {
  applyToExample(example: number): void {
    let min = Infinity;
    let max = -Infinity;

    for (let exampleIndex = 0; exampleIndex < this.dataset.getNumberOfExamples(); exampleIndex += 1) {
      const example = this.dataset.exampleAt(exampleIndex);
      for (let row = 0; row < example.rows; row += 1) {
        if (example && example.data) {
          min = Math.min(example.data[row][0]);
          max = Math.max(example.data[row][0]);
        }
      }
    }

    const kernel = gpu
      .createKernel(function (a) {
        // @ts-ignore
        return (a[this.thread.x][this.thread.y] - this.constants.min) / (this.constants.max - this.constants.min);
      })
      .setOutput([this.dataset.data.rows, this.dataset.data.cols])
      .setConstants({
        min,
        max,
      });
    this.dataset.data.data = kernel(this.dataset.data.data) as number[][];
  }
}
