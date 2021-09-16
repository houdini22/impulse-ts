import {
  SoftmaxLayer,
  LogisticLayer,
  TanhLayer,
  ReluLayer,
  SoftplusLayer,
  AbstractLayer,
} from "./layer";
import { ConvLayer } from "./layer/";
import { MaxPoolLayer } from "./layer/";
import { FullyConnectedLayer } from "./layer/";
import { PurelinLayer } from "./layer/Purelin";

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
  purelin = "purelin",
}

export type Layers =
  | LogisticLayer
  | SoftmaxLayer
  | TanhLayer
  | ReluLayer
  | SoftplusLayer
  | ConvLayer
  | MaxPoolLayer
  | FullyConnectedLayer
  | PurelinLayer;
export type Layers1D =
  | LogisticLayer
  | SoftmaxLayer
  | TanhLayer
  | ReluLayer
  | SoftplusLayer
  | PurelinLayer
  | AbstractLayer;
export type Layers3D = ConvLayer | MaxPoolLayer | FullyConnectedLayer;
