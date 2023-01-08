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
} from "./Layer";
import { Matrix } from "./Math/Matrix";
import {
  OptimizerAdam,
  OptimizerGradientDescent,
  OptimizerAdagrad,
  OptimizerMomentum,
  OptimizerRMSProp,
} from "./Trainer/Optimizer";
import { MiniBatchTrainer, Trainer as TrainerTrainer, RNNTrainer } from "./Trainer";
import { ComputationCPU, ComputationGPU, setComputation, getComputation } from "./Computation";
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
const Computation = {
  ComputationCPU,
  ComputationGPU,
  setComputation,
  getComputation,
};
const Network = {
  NetworkRNN,
};

export { NetworkBuilder, Math, Layer, Optimizer, Trainer, Computation, Network };
