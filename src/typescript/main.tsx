import { Builder1D, Builder3D } from "./builder";
import {
  SoftmaxLayer,
  LogisticLayer,
  ReluLayer,
  SoftplusLayer,
  TanhLayer,
  ConvLayer,
  FullyConnectedLayer,
  MaxPoolLayer,
} from "./layer";
import { Matrix } from "./math/Matrix";
import { DatasetBuilder } from "./dataset";
import { OptimizerAdam, OptimizerGradientDescent } from "./trainer/optimizer";
import { MiniBatchTrainer } from "./trainer";
import {
  CallbackDatabaseModifier,
  MinMaxScalingDatabaseModifier,
  MissingDataScalingDatabaseModifier,
} from "./dataset/datasetmodifier";
import { ComputationCPU, ComputationGPU, setComputation } from "./computation";

const Builders = { Builder1D, Builder3D };
const Math = {
  Matrix,
};
const Layers = {
  SoftmaxLayer,
  LogisticLayer,
  ReluLayer,
  SoftplusLayer,
  TanhLayer,
  ConvLayer,
  MaxPoolLayer,
  FullyConnectedLayer,
};
const Dataset = {
  DatasetBuilder: DatasetBuilder,
};
const Optimizers = {
  OptimizerAdam,
  OptimizerGradientDescent,
};
const Trainers = {
  MiniBatchTrainer,
};
const DatasetModifiers = {
  CallbackDatabaseModifier,
  MinMaxScalingDatabaseModifier,
  MissingDataScalingDatabaseModifier,
};
const Computations = {
  ComputationCPU,
  ComputationGPU,
  setComputation,
};

export {
  Builders,
  Math,
  Layers,
  Dataset,
  Optimizers,
  Trainers,
  DatasetModifiers,
  Computations,
};
