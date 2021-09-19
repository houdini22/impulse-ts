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
} from "./Layer";
import { Matrix } from "./Math/Matrix";
import { Dataset as DatasetDataset } from "./Dataset";
import { DatasetBuilder as DatasetBuilderBuilder } from "./DatasetBuilder";
import { OptimizerAdam, OptimizerGradientDescent, OptimizerAdagrad, OptimizerMomentum } from "./Trainer/Optimizer";
import { MiniBatchTrainer, Trainer as TrainerTrainer } from "./Trainer";
import {
  CallbackDatabaseModifier,
  MinMaxScalingDatabaseModifier,
  MissingDataScalingDatabaseModifier,
} from "./Dataset/DatasetModifier";
import { ComputationCPU, ComputationGPU, setComputation, getComputation } from "./Computation";
import { DatasetBuilderSourceCSV } from "./DatasetBuilder/DatasetBuilderSource";

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
  OptimizerAdagrad,
  OptimizerMomentum,
};
const Trainer = {
  MiniBatchTrainer,
  Trainer: TrainerTrainer,
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
  getComputation,
};
const Dataset = {
  Dataset: DatasetDataset,
};
const DatasetBuilderSource = {
  DatasetBuilderSourceCSV,
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
  DatasetBuilderSource,
};
