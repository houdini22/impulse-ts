import { AbstractDatasetVocabularyBuilderSource } from "./DatasetVocabularyBuilderSource/AbstractDatasetVocabularyBuilderSource";
import { DatasetVocabulary } from "../Dataset/DatasetVocabulary";

export class DatasetVocabularyBuilder {
  static fromSource(sourcePromise: Promise<AbstractDatasetVocabularyBuilderSource>): Promise<DatasetVocabulary> {
    return new Promise((resolve) => {
      sourcePromise.then((source) => {
        const str = source.parse();
        resolve(new DatasetVocabulary(str));
      });
    });
  }
}
