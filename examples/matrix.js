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

console.log(m1, m2, m2.col(0));
console.log("multiply", getComputation().execute("multiply", m1, m2));
console.log("add", getComputation().execute("add", m1, m2));
console.log("colwiseSum", m1.data, m1.colwiseSum());
console.log("rowwiseSum", m1.data, m1.rowwiseSum());
