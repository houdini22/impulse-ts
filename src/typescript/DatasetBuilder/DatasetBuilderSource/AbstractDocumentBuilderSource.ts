import { Matrix } from "../../Math/Matrix";

export abstract class AbstractDatasetBuilderSource {
  abstract parse(): Matrix;
}
