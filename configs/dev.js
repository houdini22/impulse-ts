const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: ["./src/typescript/main.ts"],
  output: {
    path: path.resolve("./dist"),
    filename: "impulse-ts.dev.js",
    libraryTarget: "commonjs2",
  },
  resolve: {
    extensions: [".ts"],
    alias: {
      impulseTsToolkit: path.resolve(__dirname, '../build/Debug/impulseTsToolkit.node')
    }
  },
  externals: {
    'gpu.js': 'gpu.js',
    'csvtojson': 'csvtojson'
  },
  module: {
    rules: [
      {
        test: [/\.ts$/],
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
