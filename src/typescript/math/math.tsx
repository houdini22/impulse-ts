import { Matrix, setZeros } from "./matrix";

export const im2col = (
  input: Matrix,
  channels: number,
  height: number,
  width: number,
  kernel_h: number,
  kernel_w: number,
  pad_h: number,
  pad_w: number,
  stride_h: number,
  stride_w: number
): Matrix => {
  const rows = kernel_w * kernel_h * channels;
  const cols =
    ((width - kernel_w + 2 * pad_w) / stride_w + 1) *
    ((height - kernel_h + 2 * pad_h) / stride_h + 1);
  let currentResultCol = 0;

  const result = setZeros(new Matrix(rows, cols));

  for (
    let boundingY = -pad_h;
    boundingY + kernel_h <= height + pad_h;
    boundingY += stride_h
  ) {
    for (
      let boundingX = -pad_w;
      boundingX + kernel_w <= width + pad_w;
      boundingX += stride_w
    ) {
      let currentResultRow = 0;
      for (let channel = 0; channel < channels; channel++) {
        const inputOffset = height * width * channel;
        for (let y = 0; y < kernel_h; y++) {
          for (let x = 0; x < kernel_w; x++) {
            if (
              boundingY + y >= 0 &&
              boundingX + x >= 0 &&
              boundingX + x < width &&
              boundingY + y < height
            ) {
              result.data[currentResultRow][currentResultCol] =
                input.data[
                  (y + boundingY) * width + boundingX + x + inputOffset
                ][0];
            }
            currentResultRow++;
          }
        }
      }
      currentResultCol++;
    }
  }
  return result;
};

export const maxpool = (
  input: Matrix,
  channels: number,
  height: number,
  width: number,
  kernel_h: number,
  kernel_w: number,
  stride_h: number,
  stride_w: number
): Matrix => {
  const resultWidth = (width - kernel_w) / stride_w + 1;
  const resultHeight = (height - kernel_h) / stride_h + 1;
  const resultDepth = channels;

  let currentResultCol = 0;
  const result = setZeros(
    new Matrix(resultWidth * resultHeight * resultDepth, 1)
  );

  for (
    let boundingY = 0;
    boundingY + kernel_h <= height;
    boundingY += stride_h
  ) {
    for (
      let boundingX = 0;
      boundingX + kernel_w <= width;
      boundingX += stride_w
    ) {
      for (let channel = 0; channel < channels; channel++) {
        let _max = -Infinity;
        const inputOffset = height * width * channel;
        const outputOffset = resultWidth * resultHeight * channel;
        for (let y = 0; y < kernel_h; y++) {
          for (let x = 0; x < kernel_w; x++) {
            _max = Math.max(
              _max,
              input.data[
                inputOffset + (y + boundingY) * width + boundingX + x
              ][0]
            );
          }
        }
        result.data[outputOffset + currentResultCol][0] = _max;
      }
      currentResultCol++;
    }
  }
  return new Matrix();
};
