### Create network, train network and save.

```javascript
const {
    Builders: { Builder1D, Builder3D },
    Dataset: { DatasetBuilder },
    Layers: {
        LogisticLayer,
        ConvLayer,
        FullyConnectedLayer,
        MaxPoolLayer,
        PurelinLayer,
        ReluLayer,
        SoftmaxLayer,
        TanhLayer,
    },
    Optimizers: { OptimizerGradientDescent, OptimizerAdam },
    Trainers: { MiniBatchTrainer },
    Computations: { ComputationCPU, ComputationGPU, setComputation },
} = require("../dist/impulse-ts.dev");
const path = require("path");

setComputation(new ComputationCPU());

const builder = new Builder1D([400]);
builder
    .createLayer(LogisticLayer, (layer) => {
        layer.setSize([1000]);
    })
    .createLayer(LogisticLayer, (layer) => {
        layer.setSize([500]);
    })
    .createLayer(LogisticLayer, (layer) => {
        layer.setSize([200]);
    })
    .createLayer(LogisticLayer, (layer) => {
        layer.setSize([10]);
    });

const network = builder.getNetwork();

DatasetBuilder.fromCSV(path.resolve(__dirname, "./data/mnist_x.csv")).then(
    (inputDataset) => {
        DatasetBuilder.fromCSV(path.resolve(__dirname, "./data/mnist_y.csv")).then(
            async (outputDataset) => {
                const trainer = new MiniBatchTrainer(network, new OptimizerAdam());
                trainer.setIterations(1);
                trainer.train(inputDataset, outputDataset);
                await network.save(path.resolve(__dirname, "./data/mnist.json"));
            }
        );
    }
);
```

### Restore network and predict
```javascript
const {
  Builders: { Builder1D },
  Dataset: { DatasetBuilder },
} = require("../dist/impulse-ts.dev");
const path = require("path");
const timeStart = new Date().getTime();

Builder1D.fromJSON(path.resolve(__dirname, "./data/mnist.json")).then(
  (network) => {
    DatasetBuilder.fromCSV(path.resolve(__dirname, "./data/mnist_x.csv")).then(
      (inputDataset) => {
        DatasetBuilder.fromCSV(
          path.resolve(__dirname, "./data/mnist_y.csv")
        ).then(async (outputDataset) => {
          const result = network.forward(inputDataset.exampleAt(0));
          console.log("forward", result);
        });
      }
    );
  }
);
```
