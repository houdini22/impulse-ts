import { Dataset } from "../Dataset";
import { AbstractDatasetBuilderSource } from "./DatasetBuilderSource/AbstractDocumentBuilderSource";

export class DatasetBuilder {
  static fromSource(sourcePromise: Promise<AbstractDatasetBuilderSource>): Promise<Dataset> {
    return new Promise((resolve) => {
      sourcePromise.then((source) => {
        const matrix = source.parse();
        const numberOfExamples = matrix.cols;
        const exampleSize = matrix.rows;

        const dataset = new Dataset(exampleSize, numberOfExamples, matrix.data);
        resolve(dataset);
      });
    });
  }
}
