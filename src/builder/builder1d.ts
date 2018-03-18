import { AbstractBuilder } from './abstract'
import { Layers } from '../types'

class Builder1D extends AbstractBuilder {
  firstLayerTransition (layer: Layers) {
    layer.setWidth(this.dimensions[0])
  }
}

export { Builder1D }
export default Builder1D
