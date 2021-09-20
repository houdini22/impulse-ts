import { AbstractDatasetModifier } from "./AbstractDatasetModifier";
import { Dataset } from "../Dataset";
import { Matrix } from "../../Math/Matrix";

export class ShuffleDatasetModifier extends AbstractDatasetModifier {
  public sortList: number[] = [];

  constructor(dataset: Dataset) {
    super(dataset);
  }

  apply(dataset: Dataset): Dataset {
    let index = 0;
    const data = Matrix.from(
      dataset.data.transpose().data.sort((exampleA: number[], exampleB: number[]) => {
        if (typeof this.sortList[index] === "undefined") {
          // first run
          this.sortList[index] = Math.random() - 0.5;
        }
        index += 1;
        return this.sortList[index - 1];
      })
    ).transpose().data;
    return new Dataset(dataset.getExampleSize(), dataset.getNumberOfExamples(), data);
  }
}
