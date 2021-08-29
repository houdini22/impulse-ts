import { add, Matrix, multiply } from '../math/matrix'
import { Dimension, Layers } from '../types'

abstract class AbstractLayer {
  public W: Matrix
  public b: Matrix
  public A: Matrix
  public Z: Matrix
  public gW: Matrix
  public gb: Matrix

  protected width: number = 0
  protected height: number = 0
  protected depth: number = 0
  protected previousLayer: Layers = null

  constructor () {
    this.W = new Matrix()
    this.b = new Matrix()
    this.A = new Matrix()
    this.Z = new Matrix()
    this.gW = new Matrix()
    this.gb = new Matrix()
  }

  forward (input: Matrix): Matrix {
    this.Z = add(multiply(this.W, input), this.b)
    this.A = this.activation(this.Z)
    return this.A
  }

  setWidth (value: number) {
    this.width = value
  }

  getWidth (): number {
    return this.width
  }

  setHeight (value: number) {
    this.height = value
  }

  getHeight (): number {
    return this.height
  }

  setDepth (value: number) {
    this.depth = value
  }

  getDepth (): number {
    return this.depth
  }

  abstract getOutputWidth ()

  abstract getOutputHeight ()

  abstract getOutputDepth ()

  abstract configure ()

  abstract is1D (): boolean

  abstract is3D (): boolean

  abstract transition (previousLayer: Layers)

  abstract setSize (dimension: Dimension)

  abstract getSize ()

  abstract activation (value: Matrix): Matrix

  abstract derivative (value: Matrix): Matrix

  abstract getType ()

  abstract loss (output: Matrix, predictions: Matrix): number

  abstract error (m: number): number
}

export { AbstractLayer }
