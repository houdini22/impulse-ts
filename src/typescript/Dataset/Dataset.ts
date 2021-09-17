import { Matrix } from "../Math/Matrix";

export class Dataset {
  public exampleSize = 0;
  public numberOfExamples = 0;
  public data: Matrix | null = null;

  constructor(exampleSize: number = null, numberOfExamples: number = null, arr: string[][] | number[][] = null) {
    this.exampleSize = exampleSize;
    this.numberOfExamples = numberOfExamples;

    if (arr) {
      const data = [];
      for (let row = 0; row < exampleSize; row += 1) {
        data[row] = new Array(numberOfExamples);
        for (let col = 0; col < numberOfExamples; col += 1) {
          if (typeof arr[row][col] === "string") {
            // @ts-ignore
            data[row][col] = arr[row][col].length ? Number(arr[row][col]) : NaN;
          } else if (typeof arr[row][col] === "number") {
            data[row][col] = arr[row][col];
          }
        }
      }
      this.data = new Matrix(this.exampleSize, this.numberOfExamples, data);
    }
  }

  static fromMatrix(m: Matrix): Dataset {
    const instance = new Dataset();
    instance.exampleSize = m.rows;
    instance.numberOfExamples = m.cols;
    instance.data = m;

    return instance;
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
    return Dataset.fromMatrix(data);
  }
}
