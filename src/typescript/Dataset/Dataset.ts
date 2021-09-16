import { Matrix } from "../Math/Matrix";

export class Dataset {
  public exampleSize = 0;
  public numberOfExamples = 0;
  public data: Matrix | null = null;

  constructor(exampleSize: number, numberOfExamples: number, arr: string[][] | number[][]) {
    this.exampleSize = exampleSize;
    this.numberOfExamples = numberOfExamples;
    const data = [];

    for (let row = 0; row < numberOfExamples; row += 1) {
      for (let col = 0; col < exampleSize; col += 1) {
        if (!data[col]) {
          data[col] = new Array(exampleSize);
        }

        if (!arr[row]) {
          console.log(row, col, arr.length, arr[0].length);
          console.trace();
          process.exit();
        }

        if (typeof arr[row][col] === "string") {
          // @ts-ignore
          data[col][row] = arr[row][col].length ? Number(arr[row][col]) : NaN;
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
    const data = this.data.block(0, offset, this.data.rows, batchSize);
    return new Dataset(data.rows, data.cols, data.transpose().data);
  }
}
