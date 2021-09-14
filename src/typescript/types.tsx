import {
  SoftmaxLayer,
  LogisticLayer,
  TanhLayer,
  ReluLayer,
  SoftplusLayer,
  AbstractLayer,
} from "./layer";

export type Dimension = [number] | [number, number, number];

export enum LayerType {
  logistic = "logistic",
  softmax = "softmax",
  tanh = "tanh",
  relu = "relu",
  softplus = "softplus",
}

export type Layers =
  | LogisticLayer
  | SoftmaxLayer
  | TanhLayer
  | ReluLayer
  | SoftplusLayer
  | AbstractLayer;
export type Layers1D = LogisticLayer | SoftmaxLayer | TanhLayer;
export type Layers3D = null;
