import { Builder1D } from "./builder/builder1d";
import {
  SoftmaxLayer,
  LogisticLayer,
  ReluLayer,
  SoftplusLayer,
  TanhLayer,
} from "./layer";
import { Matrix } from "./math/matrix";
import {
  multiply as matrixMultiply,
  sum as matrixSum,
  fillRandom as matrixFillRandom,
  elementWiseMultiply as matrixElementWiseMultiply,
  elementWiseDivide as matrixElementWiseDivide,
  elementWiseAdd as matrixElementWiseAdd,
  elementWiseSubtract as matrixElementWiseSubtract,
} from "./math/matrix";
import { DatasetBuilder } from "./dataset/DatasetBuilder";
import { OptimizerAdam } from "./trainer/optimizer/adam";
import { OptimizerGradientDescent } from "./trainer/optimizer/gradientdescent";
import { MiniBatchTrainer } from "./trainer/minibatch";

const Builders = { Builder1D };
const Math = {
  Matrix,
  matrixMultiply,
  matrixSum,
  matrixFillRandom,
  matrixElementWiseMultiply,
  matrixElementWiseDivide,
  matrixElementWiseAdd,
  matrixElementWiseSubtract,
};
const Layers = {
  SoftmaxLayer,
  LogisticLayer,
  ReluLayer,
  SoftplusLayer,
  TanhLayer,
};
const Dataset = {
  DatasetBuilder,
};
const Optimizers = {
  OptimizerAdam,
  OptimizerGradientDescent
};
const Trainers = {
  MiniBatchTrainer,
};

export { Builders, Math, Layers, Dataset, Optimizers, Trainers };
