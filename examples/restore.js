const {
  Builders: { Builder1D },
} = require("../dist/impulse-ts.dev");
const path = require("path");
const timeStart = new Date().getTime();

Builder1D.fromJSON(path.resolve(__dirname, "./save.json")).then((network) => {
  const timeEnd = new Date().getTime();
  console.log(`${timeEnd - timeStart} ms.`);
});
