import { Dimension, Layers } from "../types";
import Network from "../Network";
import { BackpropagationFactory } from "../layer/backpropagation/BackpropagationFactory";

abstract class AbstractNetworkBuilder {
  protected dimensions: Dimension | null = null;
  protected lastLayer: Layers | null = null;
  protected network: Network | null = null;

  constructor(dimension: Dimension) {
    this.dimensions = dimension;
    this.network = new Network(dimension);
  }

  createLayer(
    layerClass: Layers,
    callback: (layer: Layers) => void | null = null
  ): AbstractNetworkBuilder {
    if (this.network) {
      const layer: Layers = new layerClass();

      if (typeof callback === "function") {
        callback(layer);
      }

      if (this.lastLayer === null) {
        this.firstLayerTransition(layer);
      } else {
        layer.transition(this.lastLayer);
      }

      layer.configure();
      layer.setBackPropagation(
        BackpropagationFactory.create(this.lastLayer, layer)
      );

      this.network.addLayer(layer);
      this.lastLayer = layer;
    }

    return this;
  }

  getNetwork(): Network | null {
    return this.network;
  }

  abstract firstLayerTransition(layer: Layers): void;
}

export { AbstractNetworkBuilder };
