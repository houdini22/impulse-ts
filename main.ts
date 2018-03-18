import {Builder1D} from './src/builder/builder1d'
import {LayerType} from './src/types'
import {
  add, colwise, elementWiseMultiply, fillRandom, forEach, Matrix, multiply, resize, subtract,
  sum
} from "./src/math/matrix";

const builder = new Builder1D([400])

builder.createLayer(LayerType.logistic, (layer) => {
  layer.setSize([100])
})

builder.createLayer(LayerType.logistic, (layer) => {
  layer.setSize([20])
})

builder.createLayer(LayerType.softmax, (layer) => {
  layer.setSize([10])
})

const network = builder.getNetwork()

const input = new Matrix(400, 1).forEach(() => 1)

const result = network.forward(input)

console.log(result)

/*const m1 = new Matrix(3, 3)
m1.data = [
  1, 2, 3,
  4, 5, 6,
  7, 8, 9
]

const result = colwise(m1, (colVector) => {
  return sum(colVector)
})*/

console.log(result)
