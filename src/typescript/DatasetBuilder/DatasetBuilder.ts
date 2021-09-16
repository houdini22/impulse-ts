import * as csvtojson from "csvtojson";
import { Dataset } from "../Dataset";
import { AbstractDatasetBuilderSource } from "./DatasetBuilderSource/AbstractDocumentBuilderSource";
import { Matrix } from "../Math/Matrix";

export class DatasetBuilder {
  static fromCSV(csvPath: string): Promise<Dataset> {
    return new Promise((resolve) => {
      csvtojson({
        noheader: true,
        output: "csv",
      })
        .fromFile(csvPath)
        .then((arr) => {
          const numberOfExamples = arr.length;
          const exampleSize = arr[0].length;

          const dataset = new Dataset(exampleSize, numberOfExamples, arr);
          resolve(dataset);
        });
    });
  }

  static fromSource(sourcePromise: Promise<AbstractDatasetBuilderSource>): Promise<Dataset> {
    return new Promise((resolve) => {
      sourcePromise.then((source) => {
        const matrix = source.parse();
        console.log(matrix);
        const numberOfExamples = matrix.cols;
        const exampleSize = matrix.rows;

        const dataset = new Dataset(exampleSize, numberOfExamples, matrix.data);
        resolve(dataset);
      });
    });
  }
}
