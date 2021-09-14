import { AbstractBuilder } from "./abstract";
import { Layers } from "../types";
import Network from "../network";
import * as fs from "fs";
import {
  LogisticLayer,
  ReluLayer,
  SoftmaxLayer,
  SoftplusLayer,
  TanhLayer,
} from "../layer/";

class Builder1D extends AbstractBuilder {
  firstLayerTransition(layer: Layers) {
    layer.setWidth(this.dimensions[0]);
  }

  static fromJSON(jsonPath: string): Promise<Network> {
    return new Promise((resolve, reject) => {
      fs.readFile(jsonPath, (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        const json = JSON.parse(data.toString());

        const builder = new Builder1D(json["dimensions"]);

        json["layers"].forEach((layerData) => {
          let layerClass = null;

          if (layerData["type"] === "logistic") {
            layerClass = LogisticLayer;
          } else if (layerData["type"] === "softmax") {
            layerClass = SoftmaxLayer;
          } else if (layerData["type"] === "relu") {
            layerClass = ReluLayer;
          } else if (layerData["type"] === "softplus") {
            layerClass = SoftplusLayer;
          } else if (layerData["type"] === "tanh") {
            layerClass = TanhLayer;
          }

          builder.createLayer(layerClass, (layer) => {
            layer.setSize(layerData["dimensions"]);
          });
        });

        const network = builder.getNetwork();

        network.getLayers().forEach((layer, i) => {
          layer.W = json["layers"]["W"];
          layer.b = json["layers"]["b"];
        });

        resolve(network);
      });
    });
  }
}

export { Builder1D };
