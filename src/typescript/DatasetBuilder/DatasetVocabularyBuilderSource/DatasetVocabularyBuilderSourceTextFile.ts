import * as fs from "fs";
import { AbstractDatasetVocabularyBuilderSource } from "./AbstractDatasetVocabularyBuilderSource";

export class DatasetVocabularyBuilderSourceTextFile extends AbstractDatasetVocabularyBuilderSource {
  protected data: string = "";

  constructor(data: string) {
    super();
    this.data = data;
  }

  static fromLocalFile(path: string): Promise<DatasetVocabularyBuilderSourceTextFile> {
    return new Promise((resolve, reject) => {
      fs.readFile(path, (err, buffer) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(new DatasetVocabularyBuilderSourceTextFile(buffer.toString("utf-8")));
      });
    });
  }

  parse(): string {
    return this.data;
  }
}
