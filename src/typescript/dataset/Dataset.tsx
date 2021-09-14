import {Matrix} from "../math/matrix";

export class Dataset {
    public exampleSize: number = 0;
    public numberOfExamples: number = 0;
    public data: Matrix = null;

    constructor(exampleSize: number, numberOfExamples: number, arr: number[][]) {
        this.exampleSize = exampleSize;
        this.numberOfExamples = numberOfExamples
        const data = [];

        for (let example = 0; example < numberOfExamples; example += 1) {
            data[example] = [];
            for (let dataIndex = 0; dataIndex < exampleSize; dataIndex += 1) {
                data[example][dataIndex] = arr[example][dataIndex] || 0;
            }
        }

        this.data = new Matrix(this.exampleSize, this.numberOfExamples, data);
    }

    exampleAt(index: number): Matrix {
        const data = [];
        for (let dataIndex = 0; dataIndex < this.exampleSize; dataIndex += 1) {
            data[dataIndex] = [];
            data[dataIndex][0] = this.data.data[index][dataIndex];
        }

        return new Matrix(this.exampleSize, 1, data);
    }
}
