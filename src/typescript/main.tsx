import { NetworkBuilder1D, NetworkBuilder3D } from "./network-builder";
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
import {
  DatasetBuilder as DatasetBuilderBuilder,
  Dataset as DatasetDataset,
} from "./dataset";
import { OptimizerAdam, OptimizerGradientDescent } from "./trainer/optimizer";
import { MiniBatchTrainer } from "./trainer";
import {
  CallbackDatabaseModifier,
  MinMaxScalingDatabaseModifier,
  MissingDataScalingDatabaseModifier,
} from "./dataset/datasetmodifier";
import { ComputationCPU, ComputationGPU, setComputation } from "./computation";

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
};
const DatasetBuilder = {
  DatasetBuilder: DatasetBuilderBuilder,
};
const Optimizer = {
  OptimizerAdam,
  OptimizerGradientDescent,
};
const Trainer = {
  MiniBatchTrainer,
};
const DatasetModifier = {
  CallbackDatabaseModifier,
  MinMaxScalingDatabaseModifier,
  MissingDataScalingDatabaseModifier,
};
const Computation = {
  ComputationCPU,
  ComputationGPU,
  setComputation,
};
const Dataset = {
  Dataset: DatasetDataset,
};

export {
  NetworkBuilder,
  Math,
  Layer,
  Dataset,
  DatasetBuilder,
  Optimizer,
  Trainer,
  DatasetModifier,
  Computation,
};
