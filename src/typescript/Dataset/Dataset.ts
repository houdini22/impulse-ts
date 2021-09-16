import { Matrix } from "../Math/Matrix";

export class Dataset {
  public exampleSize = 0;
  public numberOfExamples = 0;
  public data: Matrix | null = null;

  constructor(exampleSize: number, numberOfExamples: number, arr: string[][] | number[][]) {
    this.exampleSize = exampleSize;
    this.numberOfExamples = numberOfExamples;
    const data = [];

    for (let col = 0; col < numberOfExamples; col += 1) {
      data[col] = [];
      for (let row = 0; row < exampleSize; row += 1) {
        if (typeof arr[row][col] === "string") {
          // @ts-ignore
          data[col][row] = Number(arr[row][col].length ? arr[row][col] : 0);
        } else if (typeof arr[row][col] === "number") {
          data[col][row] = arr[row][col];
        }
      }
    }

    this.data = new Matrix(this.exampleSize, this.numberOfExamples, data);
  }

  exampleAt(index: number): Matrix | null {
    return this.data.col(index);
  }

  getNumberOfExamples(): number {
    return this.numberOfExamples;
  }

  getExampleSize(): number {
    return this.exampleSize;
  }

  getBatch(offset: number, batchSize: number): Dataset {
    if (this.data) {
      const data = this.data.block(0, offset, this.data.rows, batchSize);
      return new Dataset(data.rows, data.cols, data.data);
    }
    return new Dataset(0, 0, [[]]);
  }
}
