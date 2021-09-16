import { AbstractBackPropagation } from "./abstract";
import { Matrix } from "../../math/matrix";
import { Layers3D } from "../../types";
import { getCurrentComputation } from "../../computation/utils";

export class BackpropagationToConv extends AbstractBackPropagation {
  protected previousLayer: Layers3D = null;

  propagate(
    input: Matrix,
    numberOfExamples: number,
    regularization: number,
    sigma: Matrix
  ): Matrix {
    const previousLayer = this.previousLayer;

    const padding = previousLayer.getPadding();
    const stride = previousLayer.getStride();
    const filterSize = previousLayer.getFilterSize();
    const outputWidth = previousLayer.getOutputWidth();
    const outputHeight = previousLayer.getOutputHeight();
    const outputDepth = previousLayer.getOutputDepth();
    const inputWidth = previousLayer.getWidth();
    const inputHeight = previousLayer.getHeight();
    const inputDepth = previousLayer.getDepth();

    const tmpResult = getCurrentComputation().execute(
      "setZeros",
      new Matrix(
        (inputWidth + 2 * padding) * (inputHeight + 2 * padding) * inputDepth,
        numberOfExamples
      )
    );

    const result = new Matrix(
      inputWidth * inputHeight * inputDepth,
      numberOfExamples
    );

    const aPrev = previousLayer.derivative(previousLayer.A);

    previousLayer.gW = getCurrentComputation().execute(
      "setZeros",
      previousLayer.gW
    );
    previousLayer.gb = getCurrentComputation().execute(
      "setZeros",
      previousLayer.gb
    );

    for (let m = 0; m < numberOfExamples; m++) {
      for (let c = 0; c < outputDepth; c++) {
        for (let h = 0; h < outputHeight; h++) {
          for (let w = 0; w < outputWidth; w++) {
            const vertStart = stride * h;
            const vertEnd = vertStart + filterSize;
            const horizStart = stride * w;
            const horizEnd = horizStart + filterSize;

            // filter loop
            for (let d = 0; d < inputDepth; d++) {
              for (
                let y = 0, vertical = vertStart, verticalPad = -padding;
                y < filterSize;
                y++, vertical++, verticalPad++
              ) {
                for (
                  let x = 0, horizontal = horizStart, horizontalPad = -padding;
                  x < filterSize;
                  x++, horizontal++, horizontalPad++
                ) {
                  tmpResult[
                    d *
                      (inputWidth + 2 * padding) *
                      (inputHeight + 2 * padding) +
                      vertical * (inputWidth + 2 * padding) +
                      horizontal
                  ][m] +=
                    previousLayer.W.data[c][
                      d * filterSize * filterSize + y * filterSize + x
                    ] *
                    sigma[c * outputWidth * outputHeight + h * outputWidth + w][
                      m
                    ];

                  let z = 0;
                  if (padding == 0) {
                    z =
                      previousLayer.Z.data[
                        d * inputWidth * inputHeight +
                          vertical * inputWidth +
                          horizontal
                      ][m];
                  } else {
                    if (
                      verticalPad >= 0 &&
                      horizontalPad >= 0 &&
                      verticalPad < inputHeight &&
                      horizontalPad < inputWidth
                    ) {
                      z =
                        previousLayer.Z.data[
                          d * inputWidth * inputHeight +
                            verticalPad * inputWidth +
                            horizontalPad
                        ][m];
                    }
                  }

                  previousLayer.gW.data[c][
                    d * filterSize * filterSize + y * filterSize + x
                  ] +=
                    (z *
                      sigma[
                        c * (outputWidth * outputHeight) + h * outputWidth + w
                      ][m]) /
                    numberOfExamples;
                }
              }
            }

            previousLayer.gb.data[c][0] +=
              sigma[c * (outputWidth * outputHeight) + h * outputWidth + w][m] /
              numberOfExamples;
          }
        }
      }

      if (padding > 0) {
        // unpad
        for (let c = 0; c < inputDepth; c++) {
          for (let h = -padding, y = 0; h < inputHeight + padding; h++, y++) {
            for (let w = -padding, x = 0; w < inputWidth + padding; w++, x++) {
              if (w >= 0 && h >= 0 && w < inputWidth && h < inputHeight) {
                result[c * inputWidth * inputHeight + h * inputWidth + w][m] =
                  tmpResult[
                    c *
                      (inputWidth + 2 * padding) *
                      (inputHeight + 2 * padding) +
                      y * (inputWidth + 2 * padding) +
                      x
                  ][m];
              }
            }
          }
        }
      }
    }

    if (padding > 0) {
      return result;
    }

    return tmpResult;
  }
}
