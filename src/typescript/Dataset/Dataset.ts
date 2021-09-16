import { Matrix } from "../Math/Matrix";

export class Dataset {
  public exampleSize = 0;
  public numberOfExamples = 0;
  public data: Matrix | null = null;

  constructor(exampleSize: number, numberOfExamples: number, arr: string[][]) {
    this.exampleSize = exampleSize;
    this.numberOfExamples = numberOfExamples;
    const data = [];

    for (let example = 0; example < numberOfExamples; example += 1) {
      data[example] = [];
      for (let dataIndex = 0; dataIndex < exampleSize; dataIndex += 1) {
        data[example][dataIndex] = arr[example][dataIndex].length ? Number(arr[example][dataIndex]) : NaN;
      }
    }

    this.data = new Matrix(this.exampleSize, this.numberOfExamples, data);
  }

  exampleAt(index: number): Matrix | null {
    if (this.data) {
      return this.data.col(index);
    }

    return null;
  }

  getNumberOfExamples(): number {
    return this.numberOfExamples;
  }

  getBatch(offset: number, batchSize: number): Matrix | null {
    if (this.data) {
      return this.data.block(0, offset, this.data.rows, batchSize);
    }
    return null;
  }
}
