import * as fs from "fs";
import { AbstractDatasetBuilderSource } from "./AbstractDocumentBuilderSource";
import { Matrix } from "../../Math/Matrix";
import * as csvtojson from "csvtojson";
import { Dataset } from "../../Dataset";

enum CSVState {
  UnquotedField,
  QuotedField,
  QuotedQuote,
}

export class DatasetBuilderSourceCSV extends AbstractDatasetBuilderSource {
  protected data: number[][] | string[][] | null = null;
  protected matrixData: number[][] | string[][] = null;

  constructor(data: number[][] | string[][]) {
    super();
    this.data = data;
  }

  static fromLocalFile(path: string): Promise<DatasetBuilderSourceCSV> {
    /*return new Promise((resolve, reject) => {
      fs.readFile(path, (err, buffer) => {
        console.log("first");
        if (err) {
          console.log(err);
          reject();
        } else {
          const instance = new DatasetBuilderSourceCSV(buffer.toString("utf-8"));
          resolve(instance);
        }
      });
    });*/
    return new Promise((resolve) => {
      csvtojson({
        noheader: true,
        output: "csv",
      })
        .fromFile(path)
        .then((arr) => {
          resolve(new DatasetBuilderSourceCSV(arr));
        });
    });
  }

  parse(): Matrix {
    /*this.matrixData = [];

    const lines = this.contentStr.trim().split(/\n+/);
    lines.forEach((line, i) => this.parseLine(line.trim(), i));

    return new Matrix(this.matrixData.length, this.matrixData[0].length, this.matrixData);*/

    const numberOfExamples = this.data.length;
    const exampleSize = this.data[0].length;

    return new Matrix(numberOfExamples, exampleSize, this.data).transpose();
  }
  /*
  protected parseLine(line: string, exampleIndexCol: number): void {
    let state = CSVState.UnquotedField;
    const fields = [];
    let i = 0;

    for (let j = 0; j < line.length; j += 1) {
      const c = line.at(j);
      switch (state) {
        case CSVState.UnquotedField:
          switch (c) {
            case ",": // end of field
              fields.push("");
              i++;
              break;
            case '"':
              state = CSVState.QuotedField;
              break;
            default:
              fields[i] += c;
              break;
          }
          break;
        case CSVState.QuotedField:
          switch (c) {
            case '"':
              state = CSVState.QuotedQuote;
              break;
            default:
              fields[i] += c;
              break;
          }
          break;
        case CSVState.QuotedQuote:
          switch (c) {
            case ",": // , after closing quote
              fields.push("");
              i++;
              state = CSVState.UnquotedField;
              break;
            case '"': // "" -> "
              fields[i] += '"';
              state = CSVState.QuotedField;
              break;
            default:
              // end of quote
              state = CSVState.UnquotedField;
              break;
          }
          break;
      }

      fields.forEach((value, row) => {
        if (value.length === 0) {
          value = NaN;
        }
        value = parseFloat(value);
        if (!this.matrixData[row]) {
          this.matrixData[row] = [];
        }
        this.matrixData[row][exampleIndexCol] = value;
      });
    }
  }*/
}
