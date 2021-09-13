const { Builder1D, Matrix, SoftmaxLayer, LogisticLayer } = require("../dist/impulse-ts.dev");

const timeStart = new Date().getTime();

const builder = new Builder1D([400]);
builder.createLayer(LogisticLayer, (layer) => {
  layer.setSize([1000]);
});
builder.createLayer(LogisticLayer, (layer) => {
  layer.setSize([500]);
});
builder.createLayer(LogisticLayer, (layer) => {
  layer.setSize([200]);
});
builder.createLayer(SoftmaxLayer, (layer) => {
  layer.setSize([10]);
});

const network = builder.getNetwork();
const input = new Matrix(400, 1, new Float64Array("1"
    .repeat(400)
    .split("")
    .map((n) => Number(n))));
const result = network.forward(input);
console.log(result);

const timeEnd = new Date().getTime();
console.log(`${timeEnd - timeStart} ms`);
