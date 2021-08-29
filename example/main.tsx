import { Builder1D } from "../src/builder/builder1d";
import { LayerType } from "../src/types";
import { Matrix } from "../src/math/matrix";

const timeStart = new Date().getTime();

const builder = new Builder1D([400]);

builder.createLayer(LayerType.logistic, (layer) => {
  layer.setSize([10000]);
});

builder.createLayer(LayerType.logistic, (layer) => {
  layer.setSize([10000]);
});

builder.createLayer(LayerType.logistic, (layer) => {
  layer.setSize([5000]);
});

builder.createLayer(LayerType.logistic, (layer) => {
  layer.setSize([1000]);
});

builder.createLayer(LayerType.softmax, (layer) => {
  layer.setSize([10]);
});

const network = builder.getNetwork();

const input = new Matrix(400, 1).forEach(() => 1);

const result = network.forward(input);

console.log(result);

const timeEnd = new Date().getTime();

console.log(`${timeEnd - timeStart} ms`);
