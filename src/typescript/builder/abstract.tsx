import { Dimension, Layers } from "../types";
import Network from "../network";
import { BackpropagationFactory } from "../layer/backpropagation/factory";
import { AbstractLayer } from "../layer";

abstract class AbstractBuilder {
  protected dimensions: Dimension = null;
  protected lastLayer: Layers = null;
  protected network: Network = null;

  constructor(dimension: Dimension) {
    this.dimensions = dimension;
    this.network = new Network(dimension);
  }

  createLayer(
    type: Layers,
    callback: (layer: Layers) => void = null
  ): AbstractBuilder {
    const layer = new type();

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

    return this;
  }

  getNetwork(): Network {
    return this.network;
  }

  abstract firstLayerTransition(layer: Layers): void;
}

export { AbstractBuilder };
