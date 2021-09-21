const {
  Math: { Matrix },
  Computation: { getComputation },
} = require("../dist/impulse-ts.dev");

const m1 = new Matrix(2, 2, [
  [2, 3],
  [1, 4],
]);
const m2 = new Matrix(2, 2, [
  [1, 2],
  [3, 4],
]);
const m3 = new Matrix(2, 2, [
  [0, 1],
  [0, 5],
]);
const m4 = new Matrix(1, 1, [[-0]]);

console.log(m1, m2, m2.col(0));
console.log("multiply", getComputation().execute("multiply", m1, m2));
console.log("add", getComputation().execute("add", m1, m2));
console.log("colwiseSum", m3.data, m3.colwiseSum());
console.log("rowwiseSum", m3.data, m3.rowwiseSum());
console.log("tanh", m4.data, m4.tanh());
