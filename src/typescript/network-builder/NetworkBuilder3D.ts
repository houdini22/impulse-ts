import { AbstractNetworkBuilder } from "./AbstractNetworkBuilder";
import { Layers } from "../types";
import Network from "../Network";
import * as fs from "fs";
import { LogisticLayer, ReluLayer, SoftmaxLayer, SoftplusLayer, TanhLayer } from "../layer/";
import { ConvLayer } from "../layer/";
import { MaxPoolLayer } from "../layer/";
import { JSONLayerData } from "./types";

class NetworkBuilder3D extends AbstractNetworkBuilder {
  firstLayerTransition(layer: Layers): void {
    if (this.dimensions) {
      layer.setSize(this.dimensions);
    }
  }

  static fromJSON(jsonPath: string): Promise<Network> {
    return new Promise((resolve, reject) => {
      fs.readFile(jsonPath, (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        const json = JSON.parse(data.toString());

        const builder = new NetworkBuilder3D(json["size"]);

        json["layers"].forEach((layerData: JSONLayerData) => {
          if (layerData["type"] === "logistic") {
            builder.createLayer(LogisticLayer, (layer) => {
              layer.setSize(layerData["size"]);
            });
          } else if (layerData["type"] === "softmax") {
            builder.createLayer(SoftmaxLayer, (layer) => {
              layer.setSize(layerData["size"]);
            });
          } else if (layerData["type"] === "relu") {
            builder.createLayer(ReluLayer, (layer) => {
              layer.setSize(layerData["size"]);
            });
          } else if (layerData["type"] === "softplus") {
            builder.createLayer(SoftplusLayer, (layer) => {
              layer.setSize(layerData["size"]);
            });
          } else if (layerData["type"] === "tanh") {
            builder.createLayer(TanhLayer, (layer) => {
              layer.setSize(layerData["size"]);
            });
          } else if (layerData["type"] === "conv") {
            builder.createLayer(ConvLayer, (layer: ConvLayer) => {
              layer.setSize(layerData["size"]);
              layer.setFilterSize(layerData["filterSize"]);
              layer.setStride(layerData["stride"]);
              layer.setNumFilters(layerData["numFilters"]);
              layer.setPadding(layerData["padding"]);
            });
          } else if (layerData["type"] === "maxpool") {
            builder.createLayer(MaxPoolLayer, (layer: MaxPoolLayer) => {
              layer.setSize(layerData["size"]);
              layer.setFilterSize(layerData["filterSize"]);
              layer.setStride(layerData["stride"]);
            });
          } else if (layerData["type"] === "fullyconnected") {
            builder.createLayer(MaxPoolLayer);
          }
        });

        const network = builder.getNetwork();

        if (network) {
          network.getLayers().forEach((layer, i) => {
            layer.W = json["layers"]["W"];
            layer.b = json["layers"]["b"];
          });

          resolve(network);
        }
      });
    });
  }
}

export { NetworkBuilder3D };