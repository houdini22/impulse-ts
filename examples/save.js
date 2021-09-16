const {
  NetworkBuilder: { NetworkBuilder1D },
  Layer: { LogisticLayer },
} = require("../dist/impulse-ts.dev");
const path = require("path");
const timeStart = new Date().getTime();

const builder = new NetworkBuilder1D([400]);
builder
  .createLayer(LogisticLayer, (layer) => {
    layer.setSize(1000);
  })
  .createLayer(LogisticLayer, (layer) => {
    layer.setSize(500);
  })
  .createLayer(LogisticLayer, (layer) => {
    layer.setSize(200);
  })
  .createLayer(LogisticLayer, (layer) => {
    layer.setSize(10);
  });

const network = builder.getNetwork();
network.save(path.resolve(__dirname, "./data/save.json")).then((content) => {});

const timeEnd = new Date().getTime();
console.log(`${timeEnd - timeStart} ms.`);
