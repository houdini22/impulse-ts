import { LayerType } from "../types";
import { LogisticLayer } from "./logistic";
import { SoftmaxLayer } from "./softmax";

const factory = (layerType: LayerType): LogisticLayer => {
  switch (layerType) {
    case LayerType.logistic:
      return new LogisticLayer();

    case LayerType.softmax:
      return new SoftmaxLayer();

    default:
      throw new Error("No such layerType.");
  }
};

export { factory };
