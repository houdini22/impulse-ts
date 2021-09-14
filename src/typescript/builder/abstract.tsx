import { Dimension, Layers } from "../types";
import Network from "../network";

abstract class AbstractBuilder {
  protected dimensions: Dimension = null;
  protected lastLayer: Layers = null;
  protected network: Network = null;

  constructor(dimension: Dimension) {
    this.dimensions = dimension;
    this.network = new Network(dimension);
  }

  createLayer(type: Layers, callback: Function) {
    // @ts-ignore
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

    this.network.addLayer(layer);
    this.lastLayer = layer;
  }

  getNetwork(): Network {
    return this.network;
  }

  abstract firstLayerTransition(layer: Layers);
}

export { AbstractBuilder };
export default AbstractBuilder;
