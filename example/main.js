const { Builder1D, Matrix, SoftmaxLayer, matrixMultiply, matrixSum } = require('../dist/impulse-ts.dev')

/*const timeStart = new Date().getTime();

const builder = new Builder1D([400]);

builder.createLayer(SoftmaxLayer, (layer) => {
  layer.setSize([1000]);
});

builder.createLayer(SoftmaxLayer, (layer) => {
  layer.setSize([500]);
});

builder.createLayer(SoftmaxLayer, (layer) => {
  layer.setSize([200]);
});

builder.createLayer(SoftmaxLayer, (layer) => {
  layer.setSize([10]);
});

const network = builder.getNetwork();
const input = new Matrix(400, 1).forEach(() => 1);
const result = network.forward(input);
console.log(result);

const timeEnd = new Date().getTime();
console.log(`${timeEnd - timeStart} ms`);*/

const m1 = new Matrix(2, 2);
const m2 = new Matrix(2, 2);
m1.data = [0.1, 0.1, 0.1, 0.1];
m2.data = [0.2, 0.2, 0.2, 0.2];

console.log(matrixMultiply(m1, m2));
console.log(matrixSum(m1));
