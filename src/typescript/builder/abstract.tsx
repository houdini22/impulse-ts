import { Dimension, Layers } from "../types";
import Network from "../network";

abstract class AbstractBuilder {
  protected dimensions: Dimension = null;
  protected previousLayer: Layers = null;
  protected network: Network = null;

  constructor(dimension: Dimension) {
    this.dimensions = dimension;
    this.network = new Network(dimension);
  }

  createLayer(type: Layers, callback: Function) {
    const layer = new type();

    if (typeof callback === "function") {
      callback(layer);
    }

    if (this.previousLayer === null) {
      this.firstLayerTransition(layer);
    } else {
      layer.transition(this.previousLayer);
    }

    layer.configure();

    this.network.addLayer(layer);
    this.previousLayer = layer;
  }

  getNetwork(): Network {
    return this.network;
  }

  abstract firstLayerTransition(layer: Layers);
}

export { AbstractBuilder };
export default AbstractBuilder;
