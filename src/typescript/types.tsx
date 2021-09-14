import {
  SoftmaxLayer,
  LogisticLayer,
  TanhLayer,
  ReluLayer,
  SoftplusLayer,
  AbstractLayer,
} from "./layer";
import { ConvLayer } from "./layer/conv";
import { MaxPoolLayer } from "./layer/maxpool";
import { FullyConnectedLayer } from "./layer/fullyconnected";

export type Dimension = [number] | [number, number, number];

export enum LayerType {
  logistic = "logistic",
  softmax = "softmax",
  tanh = "tanh",
  relu = "relu",
  softplus = "softplus",
  conv = "conv",
  maxpool = "maxpool",
  fullyconnected = "fullyconnected",
}

export type Layers =
  | LogisticLayer
  | SoftmaxLayer
  | TanhLayer
  | ReluLayer
  | SoftplusLayer
  | AbstractLayer
  | ConvLayer
  | MaxPoolLayer
  | FullyConnectedLayer;
export type Layers1D =
  | LogisticLayer
  | SoftmaxLayer
  | TanhLayer
  | ReluLayer
  | SoftplusLayer
  | AbstractLayer;
export type Layers3D = ConvLayer | MaxPoolLayer | FullyConnectedLayer;
