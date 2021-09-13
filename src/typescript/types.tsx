import { SoftmaxLayer, LogisticLayer } from "./layer";

export type Dimension = [number] | [number, number, number];

export enum LayerType {
  logistic = "logistic",
  softmax = "softmax",
}

export type Layers = LogisticLayer | SoftmaxLayer;
export type Layers1D = LogisticLayer | SoftmaxLayer;
export type Layers2D = null;
