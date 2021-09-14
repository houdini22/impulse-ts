const {
  Matrix,
  matrixMultiply,
  matrixSum,
  matrixFillRandom,
  matrixElementWiseMultiply,
  matrixElementWiseDivide,
  matrixElementWiseAdd,
  matrixElementWiseSubtract,
} = require("../dist/impulse-ts.dev");

const m1 = new Matrix(2, 2, [[0.1], [0.1]]);
const m2 = new Matrix(2, 2, [[0.2], [0.2]]);
const m3 = new Matrix(2, 2);

console.log(m1, m2);
console.log(matrixMultiply(m1, m2));
console.log(matrixSum(m1));
console.log(matrixFillRandom(m3, 20));
console.log(matrixElementWiseMultiply(m1, m2));
console.log(matrixElementWiseDivide(m1, m2));
console.log(matrixElementWiseAdd(m1, m2));
console.log(matrixElementWiseSubtract(m1, m2));
