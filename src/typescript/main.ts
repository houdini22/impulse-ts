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
import { OptimizerAdam, OptimizerGradientDescent, OptimizerAdadelta } from "./Trainer/optimizer";
import { MiniBatchTrainer } from "./Trainer";
import {
  CallbackDatabaseModifier,
  MinMaxScalingDatabaseModifier,
  MissingDataScalingDatabaseModifier,
} from "./Dataset/DatasetModifier";
import { ComputationCPU, ComputationGPU, setComputation } from "./Computation";
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
  OptimizerAdadelta,
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
