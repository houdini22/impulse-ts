import { Layers, LayerType } from "../../types";
import { Backpropagation1Dto1D } from "./backpropagation1dto1d";
import { Backpropagation3Dto1D } from "./backpropagationto3dto1d";
import { BackpropagationToMaxPool } from "./backpropagationtomaxpool";
import { BackpropagationToConv } from "./backpropagationtoconv";

export class BackpropagationFactory {
  static create(previousLayer: Layers, layer: Layers) {
    if (previousLayer == null) {
      if (layer.is1D()) {
        return new Backpropagation1Dto1D(layer, previousLayer);
      } else if (layer.getType() == LayerType.conv) {
        return new Backpropagation3Dto1D(layer, previousLayer);
      }
    } else {
      if (previousLayer.getType() == LayerType.maxpool) {
        return new BackpropagationToMaxPool(layer, previousLayer);
      } else if (previousLayer.getType() == LayerType.conv) {
        return new BackpropagationToConv(layer, previousLayer);
      } else if (
        previousLayer.is1D() ||
        previousLayer.getType() == LayerType.fullyconnected
      ) {
        return new Backpropagation1Dto1D(layer, previousLayer);
      }
    }
    return null;
  }
}
