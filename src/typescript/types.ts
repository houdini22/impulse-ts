import { SoftmaxLayer, LogisticLayer, TanhLayer, ReluLayer, SoftplusLayer, AbstractLayer } from "./Layer";
import { ConvLayer } from "./Layer/";
import { MaxPoolLayer } from "./Layer/";
import { FullyConnectedLayer } from "./Layer/";
import { PurelinLayer } from "./Layer";
import { AbstractLayer3D } from "./Layer/AbstractLayer3D";
import { AbstractLayer1D } from "./Layer/AbstractLayer1D";
import { RNNLayer } from "./Layer";

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
  rnnlayer = "rnnlayer",
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
  | PurelinLayer
  | AbstractLayer
  | AbstractLayer1D
  | AbstractLayer3D;
export type Layers1D =
  | LogisticLayer
  | SoftmaxLayer
  | TanhLayer
  | ReluLayer
  | SoftplusLayer
  | PurelinLayer
  | AbstractLayer
  | AbstractLayer1D;
export type Layers3D = ConvLayer | MaxPoolLayer | FullyConnectedLayer | AbstractLayer3D;
export type LayersRNN = RNNLayer;
