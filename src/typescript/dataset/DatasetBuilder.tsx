import * as csvtojson from 'csvtojson'
import { Dataset } from './Dataset'

export class DatasetBuilder {
    static fromCSV(csvPath: string): Promise<Dataset> {
        return new Promise((resolve) => {
            csvtojson({
                noheader: true,
                output: "csv"
            })
                .fromFile(csvPath)
                .then((arr)=>{
                    const numberOfExamples = arr.length;
                    const exampleSize = arr[0].length;

                    const dataset = new Dataset(exampleSize, numberOfExamples, arr);
                    resolve(dataset);
                })
        });
    }
}
