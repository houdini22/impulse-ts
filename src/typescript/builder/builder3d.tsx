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
import { ConvLayer } from "../layer/conv";
import { MaxPoolLayer } from "../layer/maxpool";

class Builder3D extends AbstractBuilder {
  firstLayerTransition(layer: Layers): void {
    layer.setSize(this.dimensions);
  }

  static fromJSON(jsonPath: string): Promise<Network> {
    return new Promise((resolve, reject) => {
      fs.readFile(jsonPath, (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        const json = JSON.parse(data.toString());

        const builder = new Builder3D(json["dimensions"]);

        json["layers"].forEach((layerData) => {
          let layerClass = null;

          if (layerData["type"] === "logistic") {
            layerClass = LogisticLayer;
            builder.createLayer(layerClass, (layer) => {
              layer.setSize(layerData["dimensions"]);
            });
          } else if (layerData["type"] === "softmax") {
            layerClass = SoftmaxLayer;
            builder.createLayer(layerClass, (layer) => {
              layer.setSize(layerData["dimensions"]);
            });
          } else if (layerData["type"] === "relu") {
            layerClass = ReluLayer;
            builder.createLayer(layerClass, (layer) => {
              layer.setSize(layerData["dimensions"]);
            });
          } else if (layerData["type"] === "softplus") {
            layerClass = SoftplusLayer;
            builder.createLayer(layerClass, (layer) => {
              layer.setSize(layerData["dimensions"]);
            });
          } else if (layerData["type"] === "tanh") {
            layerClass = TanhLayer;
            builder.createLayer(layerClass, (layer) => {
              layer.setSize(layerData["dimensions"]);
            });
          } else if (layerData["type"] === "conv") {
            layerClass = ConvLayer;
            builder.createLayer(layerClass, (layer) => {
              layer.setSize(layerData["dimensions"]);
              layer.setFilterSize(layerData["filterSize"]);
              layer.setStride(layerData["stride"]);
              layer.setNumFilters(layerData["numFilters"]);
              layer.setPadding(layerData["padding"]);
            });
          } else if (layerData["type"] === "maxpool") {
            layerClass = MaxPoolLayer;
            builder.createLayer(layerClass, (layer) => {
              layer.setSize(layerData["dimensions"]);
              layer.setFilterSize(layerData["filterSize"]);
              layer.setStride(layerData["stride"]);
            });
          } else if (layerData["type"] === "fullyconnected") {
            layerClass = MaxPoolLayer;
            builder.createLayer(layerClass);
          }
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

export { Builder3D };
