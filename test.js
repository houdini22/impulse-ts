const { Builder1D, LayerType } = require("./dist/bundle")

const builder = new Builder1D([400])

builder.createLayer(LayerType.logistic, (layer) => {
  layer.setSize(100)
})

builder.createLayer(LayerType.logistic, (layer) => {
  layer.setSize(20)
})

builder.createLayer(LayerType.logistic, (layer) => {
  layer.setSize(10)
})

const network = builder.getNetwork()
