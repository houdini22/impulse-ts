import { isFunction } from 'lodash'
import { Dimension, LayerType, Layers } from '../types'
import { factory as layerFactory } from '../layer/utils'
import Network from '../network'

abstract class AbstractBuilder {
  protected dimensions: Dimension = null
  protected previousLayer: Layers = null
  protected network: Network = null

  constructor (dimension: Dimension) {
    this.dimensions = dimension
    this.network = new Network(dimension)
  }

  createLayer (type: LayerType, callback: Function) {
    const layer = layerFactory(type)

    if (isFunction(callback)) {
      callback(layer)
    }

    if (this.previousLayer === null) {
      this.firstLayerTransition(layer)
    } else {
      layer.transition(this.previousLayer)
    }

    layer.configure()

    this.network.addLayer(layer)
    this.previousLayer = layer
  }

  getNetwork (): Network {
    return this.network
  }

  abstract firstLayerTransition (layer: Layers)
}

export { AbstractBuilder }
export default AbstractBuilder
