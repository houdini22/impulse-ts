const {
  Builders: { Builder1D },
  Dataset: { DatasetBuilder },
} = require("../dist/impulse-ts.dev");
const path = require("path");
const timeStart = new Date().getTime();

Builder1D.fromJSON(path.resolve(__dirname, "./data/save.json")).then(
  (network) => {
    const timeEnd = new Date().getTime();
    console.log(`Restored in ${timeEnd - timeStart} ms.`);
  }
);
