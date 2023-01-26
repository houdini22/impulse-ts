import { Dimension, Layers } from "../types";
import { Network, NetworkRNN, Networks } from "../Network";
import { BackpropagationFactory } from "../Layer/Backpropagation/BackpropagationFactory";
import { NetworkLSTM } from "../Network/NetworkLSTM";

abstract class AbstractNetworkBuilder {
  protected dimensions: Dimension | null = null;
  protected lastLayer: Layers | null = null;
  protected network: Networks | null = null;

  constructor(dimension: Dimension, type = "DNN") {
    this.dimensions = dimension;
    if (type === "DNN") {
      this.network = new Network(dimension);
    } else if (type === "RNN") {
      this.network = new NetworkRNN(dimension);
    } else if (type === "LSTM") {
      this.network = new NetworkLSTM(dimension);
    }
  }

  createLayer(layerClass: Layers, callback: (layer: Layers) => void | null = null): AbstractNetworkBuilder {
    // @ts-ignore
    const layer: Layers = new layerClass();

    if (typeof callback === "function") {
      callback(layer);
    }

    if (this.lastLayer === null) {
      this.firstLayerTransition(layer);
    } else {
      // @ts-ignore
      layer.transition(this.lastLayer);
    }

    layer.configure();
    layer.setBackPropagation(BackpropagationFactory.create(this.lastLayer, layer));

    this.network.addLayer(layer);
    this.lastLayer = layer;

    return this;
  }

  getNetwork(): Networks | null {
    return this.network;
  }

  abstract firstLayerTransition(layer: Layers): void;
}

export { AbstractNetworkBuilder };
