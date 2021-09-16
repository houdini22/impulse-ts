const {
  Math: { Matrix },
  Computation: { getComputation },
} = require("../dist/impulse-ts.dev");

const m1 = new Matrix(2, 2, [
  [1, 3],
  [2, 4],
]);
const m2 = new Matrix(2, 2, [
  [3, 1],
  [2, 4],
]);

console.log("multiply", getComputation().execute("multiply", m1, m2));
