const {
  Builder1D,
  SoftmaxLayer,
  LogisticLayer,
} = require("../dist/impulse-ts");
const path = require("path");
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
network.save(path.resolve(__dirname, "save.json")).then((content) => {
  console.log(content);
});

const timeEnd = new Date().getTime();
console.log(`${timeEnd - timeStart} ms.`);
