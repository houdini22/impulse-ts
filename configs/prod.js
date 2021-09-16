const path = require("path");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: ["./src/typescript/main.tsx"],
  output: {
    path: path.resolve("./dist"),
    filename: "impulse-ts.js",
    libraryTarget: "commonjs2",
  },
  resolve: {
    extensions: [".index.tsx"],
    alias: {
      "impulseTsToolkit": path.resolve(__dirname, '../build/Debug/impulseTsToolkit.node')
    }
  },
  externals: {
    'gpu.js': 'gpu.js',
    'csvtojson': 'csvtojson'
  },
  module: {
    rules: [
      {
        test: [/\.tsx?$/],
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.node$/,
        loader: "node-loader",
      }
    ],
  },
  target: "node"
};
