import { AbstractBackPropagation } from "./AbstractBackpropagation";
import { Matrix } from "../../math/Matrix";
import { Layers3D } from "../../types";
import { getComputation } from "../../computation/utils";

export class BackpropagationToMaxPool extends AbstractBackPropagation {
  protected previousLayer: Layers3D | null = null;

  propagate(
    input: Matrix,
    numberOfExamples: number,
    regularization: number,
    sigma: Matrix
  ): Matrix {
    const prevLayer = this.previousLayer;
    if (prevLayer) {
      const result = getComputation().execute(
        "setZeros",
        new Matrix(prevLayer.Z.rows, prevLayer.Z.cols)
      ) as Matrix;

      const filterSize = prevLayer.getFilterSize();
      const stride = prevLayer.getStride();
      const inputWidth = prevLayer.getWidth();
      const inputHeight = prevLayer.getHeight();
      const inputDepth = prevLayer.getDepth();
      const outputWidth = prevLayer.getOutputWidth();
      const outputHeight = prevLayer.getOutputHeight();
      const outputDepth = prevLayer.getOutputDepth();

      for (let m = 0; m < numberOfExamples; m++) {
        for (let c = 0; c < outputDepth; c++) {
          for (let h = 0; h < outputHeight; h++) {
            for (let w = 0; w < outputWidth; w++) {
              const vertStart = stride * h;
              const vertEnd = vertStart + filterSize;
              const horizStart = stride * w;
              const horizEnd = horizStart + filterSize;

              let _max = -Infinity;
              const inputOffset = inputHeight * inputWidth * c;
              const outputOffset = outputHeight * outputWidth * c;
              let maxX = 0;
              let maxY = 0;

              for (
                let y = 0, vStart = vertStart;
                y < filterSize;
                y++, vStart++
              ) {
                for (
                  let x = 0, hStart = horizStart;
                  x < filterSize;
                  x++, hStart++
                ) {
                  if (
                    prevLayer.Z.data &&
                    _max <
                      prevLayer.Z.data[
                        inputOffset + vStart * inputWidth + hStart
                      ][m]
                  ) {
                    _max =
                      prevLayer.Z.data[
                        inputOffset + vStart * inputWidth + hStart
                      ][m];
                    maxX = hStart;
                    maxY = vStart;
                  }
                }
              }

              if (result.data && sigma.data) {
                result.data[inputOffset + maxY * inputWidth + maxX][m] =
                  sigma.data[outputOffset + h * outputWidth + w][m];
              }
            }
          }
        }
      }

      return result;
    }

    return new Matrix();
  }
}
