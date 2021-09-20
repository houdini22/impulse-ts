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
  RNNLayer,
} from "./Layer";
import { Matrix } from "./Math/Matrix";
import { Dataset as DatasetDataset } from "./Dataset";
import { DatasetBuilder as DatasetBuilderBuilder, DatasetVocabularyBuilder } from "./DatasetBuilder";
import {
  OptimizerAdam,
  OptimizerGradientDescent,
  OptimizerAdagrad,
  OptimizerMomentum,
  OptimizerRMSProp,
} from "./Trainer/Optimizer";
import { MiniBatchTrainer, Trainer as TrainerTrainer, RNNTrainer } from "./Trainer";
import {
  CallbackDatasetModifier,
  MinMaxScalingDatasetModifier,
  MissingDataScalingDatasetModifier,
  ShuffleDatasetModifier,
} from "./Dataset/DatasetModifier";
import { ComputationCPU, ComputationGPU, setComputation, getComputation } from "./Computation";
import { DatasetBuilderSourceCSV } from "./DatasetBuilder/DatasetBuilderSource";
import { NetworkRNN } from "./Network";
import { DatasetVocabularyBuilderSourceTextFile } from "./DatasetBuilder/DatasetVocabularyBuilderSource";

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
  RNNLayer,
};
const DatasetBuilder = {
  DatasetBuilder: DatasetBuilderBuilder,
  DatasetVocabularyBuilder,
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
const DatasetModifier = {
  CallbackDatasetModifier,
  MinMaxScalingDatasetModifier,
  MissingDataScalingDatasetModifier,
  ShuffleDatasetModifier,
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
  DatasetVocabularyBuilderSourceTextFile,
};
const Network = {
  NetworkRNN,
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
  Network,
};
