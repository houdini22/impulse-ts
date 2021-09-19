import { Matrix3D, Matrix } from "../Math/Matrix";

export class DatasetVocabulary {
  public vocabularySize = 0;
  public dataSize = 0;
  public data: string = "";
  public chars: string[];

  constructor(str: string) {
    this.data = str.toLowerCase();
    const chars = [...new Set(this.data.split("").sort())];

    this.chars = chars;
    this.dataSize = this.data.length;
    this.vocabularySize = chars.length;
  }

  getExamples(): string[] {
    return this.data
      .replace(/\n+/, "\n")
      .split("\n")
      .map((example: string) => {
        return example + "\n";
      });
  }

  getVocabularySize(): number {
    return this.vocabularySize;
  }

  getCharsLength(): number {
    return this.chars.length;
  }

  getCharIndices(): Object {
    const result = {};
    this.chars.forEach((char, i) => {
      result[char] = i;
    });
    return result;
  }

  buildData(tx: number = 40, stride: number = 3) {
    const X = [];
    const Y = [];

    for (let i = 0; i < this.data.length - tx; i += stride) {
      X.push(this.data.substr(i, tx));
      Y.push(this.data[i + tx]);
    }

    return [X, Y];
  }

  vectorization(X: string[], Y: string[], nx: number = 40): [Matrix[], Matrix] {
    const m = X.length;
    const x = new Array(m);
    const chars = this.getCharIndices();
    const y = new Matrix(m, this.chars.length).setZeros();
    let xIndex = 0;
    let rowIndex = 0;

    X.forEach((sentence: string, _m) => {
      x[_m] = new Matrix(sentence.length, this.chars.length).setZeros();
      sentence.split("").forEach((char, t) => {
        x[_m].data[t][chars[char]] = 1;
        rowIndex++;
      });
      xIndex++;
      rowIndex = 0;

      y.data[_m][chars[Y[_m]]] = 1;
    });

    return [x, y];
  }

  getChars(): string[] {
    return this.chars;
  }
}
