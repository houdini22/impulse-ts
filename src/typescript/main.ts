import { NetworkBuilder1D, NetworkBuilder3D } from "./NetworkBuilder";
import {
  SoftmaxLayer,
  LogisticLayer,
  ReluLayer,
  SoftplusLayer,
  TanhLayer,
  ConvLayer,
  FullyConnectedLayer,
  MaxPoolLayer,
  RecurrentLayer,
  LSTMLayer,
} from "./Layer";
import { Matrix } from "impulse-math-ts";
import {
  OptimizerAdam,
  OptimizerGradientDescent,
  OptimizerAdagrad,
  OptimizerMomentum,
  OptimizerRMSProp,
} from "./Trainer/Optimizer";
import { MiniBatchTrainer, Trainer as TrainerTrainer, RNNTrainer } from "./Trainer";
import { NetworkRNN } from "./Network";

const NetworkBuilder = { NetworkBuilder1D, NetworkBuilder3D };
const Math = {
  Matrix,
};
const Layer = {
  SoftmaxLayer,
  LogisticLayer,
  ReluLayer,
  SoftplusLayer,
  TanhLayer,
  ConvLayer,
  MaxPoolLayer,
  FullyConnectedLayer,
  RecurrentLayer,
  LSTMLayer,
};
const Optimizer = {
  OptimizerAdam,
  OptimizerGradientDescent,
  OptimizerAdagrad,
  OptimizerMomentum,
  OptimizerRMSProp,
};
const Trainer = {
  MiniBatchTrainer,
  Trainer: TrainerTrainer,
  RNNTrainer,
};
const Network = {
  NetworkRNN,
};

export { NetworkBuilder, Math, Layer, Optimizer, Trainer, Network };
