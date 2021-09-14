import { AbstractOptimizer } from "./abstract";
import { Layers } from "../../types";
import {
  elementWiseAdd,
  elementWiseDivide,
  elementWiseDivideNumber,
  elementWiseMultiply,
  elementWiseMultiplyNumber,
  elementWiseSubtract,
  sqrt,
} from "../../math/matrix";

export class OptimizerAdam extends AbstractOptimizer {
  optimize(layer: Layers) {
    this.adam(layer, this.learningRate, this.t);
  }

  adam(layer: Layers, learningRate: number, t: number) {
    const beta1 = 0.9;
    const beta2 = 0.999;
    const epsilon = 1e-8;

    layer.vW = elementWiseAdd(
      elementWiseMultiplyNumber(layer.vW, beta1),
      elementWiseMultiplyNumber(layer.gW, 1 - beta1)
    );
    const wCorrected = elementWiseDivideNumber(
      layer.vW,
      1 - Math.pow(beta1, t)
    );

    layer.cW = elementWiseAdd(
      elementWiseMultiplyNumber(layer.cW, beta1),
      elementWiseMultiplyNumber(layer.gW, 1 - beta1)
    );
    const sCorrected = sqrt(
      elementWiseMultiplyNumber(layer.cW, 1 - Math.pow(beta2, t))
    );

    layer.W = elementWiseSubtract(
      layer.W,
      elementWiseMultiplyNumber(
        elementWiseMultiply(wCorrected, sCorrected),
        learningRate
      )
    );

    layer.vb = elementWiseAdd(
      elementWiseMultiplyNumber(layer.vb, beta1),
      elementWiseMultiplyNumber(layer.gb, 1 - beta1)
    );
    const wCorrected2 = elementWiseDivideNumber(
      layer.vb,
      1 - Math.pow(beta1, t)
    );
    layer.cb = elementWiseAdd(
      elementWiseMultiplyNumber(layer.cb, beta2),
      elementWiseMultiplyNumber(
        elementWiseMultiply(layer.gb, layer.gb),
        1 - beta2
      )
    );
    const sCorrected2 = sqrt(
      elementWiseDivideNumber(layer.cb, 1 - Math.pow(beta2, t))
    );

    layer.b = elementWiseSubtract(
      layer.b,
      elementWiseMultiplyNumber(
        elementWiseDivide(wCorrected2, sCorrected2),
        learningRate
      )
    );
  }
}
