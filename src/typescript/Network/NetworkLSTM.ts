import { Dimension, Layers, LayersLSTM, LayersRNN } from "../types";
import { Matrix, Matrix3D } from "../Math/Matrix";
import { DatasetVocabulary } from "../Dataset/DatasetVocabulary";

export class NetworkLSTM {
  private readonly dimensions: Dimension | null = null;
  private size = 0;
  private layers: LayersLSTM[] = [];

  constructor(dimensions: Dimension) {
    this.dimensions = dimensions;
  }

  addLayer(layer: LayersLSTM): NetworkLSTM {
    this.size++;
    this.layers.push(layer);

    return this;
  }

  getLayers(): Layers[] {
    return this.layers;
  }

  loss(vocabularySize: number, sequenceLength: number): number {
    return -Math.log(1 / vocabularySize) * sequenceLength;
  }

  sample(charIndices: Object) {}

  forward(X: Matrix[], a0: Matrix): Matrix[] {
    const nX = X.length;
    const m = X[0].rows;
    const tX = X[0].cols;
    const nY = this.layers[0].Wy.rows;
    const nA = this.layers[0].Wy.cols;

    const a = new Array(nA).map(() => {
      return new Matrix(m, tX).setZeros();
    });
    const c = new Array(nA).map(() => {
      return new Matrix(m, tX).setZeros();
    });
    const y = new Array(nY).map(() => {
      return new Matrix(m, tX).setZeros();
    });

    let aNext = a0;
    let cNext = new Matrix(nA, m).setZeros();

    for (let t = 0; t < tX; t += 1) {
      const dataInput = [];
      X.forEach((m: Matrix, i) => {
        dataInput[i] = [];
        for (let row = 0; row < m.rows; row += 1) {
          dataInput[i].push(m.data[row][t]);
        }
      });
      const input = Matrix.from(dataInput);
      const [_aNext, _cNext, _yt] = this.layers[0].forward(input, aNext, cNext);
    }
  }

  backward(da: Matrix[]): void {
    const na = da.length;
    const m = da[0].rows;
    const tx = da[0].cols;
    const nx = this.layers[0].x1.rows;

    for (let t = tx - 1; t >= 0; t -= 1) {
      //this.layers[0].backward(_da, dcPrevT);
    }
  }

  /*save(path: string): Promise<string> {
    const resultJSON = {
      dimensions: this.dimensions,
      layers: [],
    };

    this.layers.forEach((layer: Layers) => {
      resultJSON.layers.push({
        type: layer.getType(),
        size: layer.getSize(),
        weights: {
          W: layer.W.data,
          b: layer.b.data,
        },
      });
    });

    const result = JSON.stringify(resultJSON);

    return new Promise((resolve, reject) => {
      fs.writeFile(path, result, (err) => {
        if (err) {
          console.error(err);
          reject();
        }
        resolve(result);
      });
    });
  }*/
}
