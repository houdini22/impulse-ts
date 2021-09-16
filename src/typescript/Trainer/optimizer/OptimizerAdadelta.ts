import { AbstractOptimizer } from "./AbstractOptimizer";
import { Layers } from "../../types";
import { getComputation } from "../../Computation/utils";
import { Matrix } from "../../Math/Matrix";

export class OptimizerAdadelta extends AbstractOptimizer {
  optimize(layer: Layers): void {
    this.adadelta(layer, this.learningRate, this.t);
  }

  adadelta(layer: Layers, learningRate: number, batchSize: number): void {
    const gamma = 0.9;

    layer.cW = getComputation().execute(
      "add",
      getComputation().execute("multiplyNumber", layer.cW, gamma) as Matrix,
      getComputation().execute("multiplyNumber", layer.gW, 1.0 - gamma) as Matrix
    ) as Matrix;

    const deltaParameters = getComputation().execute(
      "elementWiseMultiply",
      getComputation().execute(
        "multiplyNumber",
        getComputation().execute(
          "elementWiseDivide",
          getComputation().execute("sqrt", layer.vW) as Matrix,
          getComputation().execute("sqrt", layer.cW) as Matrix
        ) as Matrix,
        -1
      ) as Matrix,
      layer.gW
    ) as Matrix;

    layer.vW = getComputation().execute(
      "add",
      getComputation().execute("multiplyNumber", layer.cW, gamma) as Matrix,
      getComputation().execute(
        "multiplyNumber",
        getComputation().execute("pow", deltaParameters, 2) as Matrix,
        1 - gamma
      ) as Matrix
    ) as Matrix;

    layer.W = getComputation().execute("add", layer.W, deltaParameters) as Matrix;

    layer.cb = getComputation().execute(
      "add",
      getComputation().execute("multiplyNumber", layer.gb, gamma) as Matrix,
      getComputation().execute(
        "multiplyNumber",
        getComputation().execute("elementWiseMultiply", layer.gb, layer.gb) as Matrix,
        1 - gamma
      ) as Matrix
    ) as Matrix;

    const deltaParameters2 = getComputation().execute(
      "elementWiseMultiply",
      getComputation().execute(
        "multiplyNumber",
        getComputation().execute(
          "elementWiseDivide",
          getComputation().execute("sqrt", layer.vb) as Matrix,
          layer.cb
        ) as Matrix,
        -1
      ) as Matrix,
      layer.gb
    ) as Matrix;

    layer.vb = getComputation().execute(
      "add",
      getComputation().execute("multiplyNumber", layer.cb, gamma) as Matrix,
      getComputation().execute(
        "multiplyNumber",
        getComputation().execute("pow", layer.cb, 2) as Matrix,
        1 - gamma
      ) as Matrix
    ) as Matrix;

    layer.b = getComputation().execute("elementWiseMultiply", layer.b, deltaParameters2) as Matrix;
  }
}
