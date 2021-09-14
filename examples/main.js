const {Builder1D, Matrix, SoftmaxLayer, LogisticLayer, DatasetBuilder} = require("../dist/impulse-ts");
const path = require('path');

const builder = new Builder1D([4]);
builder.createLayer(LogisticLayer, (layer) => {
    layer.setSize([20]);
});
builder.createLayer(LogisticLayer, (layer) => {
    layer.setSize([10]);
});
builder.createLayer(SoftmaxLayer, (layer) => {
    layer.setSize([5]);
});

const network = builder.getNetwork();

DatasetBuilder.fromCSV(path.resolve(__dirname, './data/iris_x.csv')).then((inputDataset) => {
    console.log('Loaded iris_x.csv');
    DatasetBuilder.fromCSV(path.resolve(__dirname, './data/iris_y.csv')).then((outputDataset) => {
        console.log('Loaded iris_y.csv');
        let timeStart = new Date().getTime();
        const result = network.forward(inputDataset.exampleAt(0));
        console.log('forward', result);
        let timeEnd = new Date().getTime();
        console.log(`${timeEnd - timeStart} ms`);

        timeStart = new Date().getTime();
        console.log('loss', network.loss(network.forward(inputDataset.data), outputDataset.data));
        timeEnd = new Date().getTime();
        console.log(`${timeEnd - timeStart} ms`);
    });

})


