import { Builder1D } from "./builder/builder1d";
import { Builder3D } from "./builder/builder3d";
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
import { Matrix } from "./math/matrix";
import { DatasetBuilder } from "./dataset/datasetbuilder";
import { OptimizerAdam } from "./trainer/optimizer/adam";
import { OptimizerGradientDescent } from "./trainer/optimizer/gradientdescent";
import { MiniBatchTrainer } from "./trainer/minibatch";
import { CallbackDatabaseModifier } from "./dataset/datasetmodifier/callback";
import { MinMaxScalingDatabaseModifier } from "./dataset/datasetmodifier/minmaxscaling";
import { MissingDataScalingDatabaseModifier } from "./dataset/datasetmodifier/missingdata";

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

export {
  Builders,
  Math,
  Layers,
  Dataset,
  Optimizers,
  Trainers,
  DatasetModifiers,
};
