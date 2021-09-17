# impulse-ts

## This project is under heavy development and learning doesn't works for now.

## Documentation
Full API documentation available at [https://houdini22.github.io/impulse-ts/](https://houdini22.github.io/impulse-ts/).

### Supported learning optimizers:
```
OptimizerGradientDescent
```

### Supported dataset modifiers:
```
MissingDataScalingDatabaseModifier
MinMaxScalingDatabaseModifier
```

### Supported network builders:
```
NetworkBuilder1D
NetworkBuilder1D
```

### Supported layers:
```
LogisticLayer
PurelinLayer
ReluLayer
```

### Supported trainers:
```
MiniBatchTrainer
```

### Supported Networks
```
Network1D
```

There are no errors using above.

## Examples

### Exports

```javascript
const {
    NetworkBuilder: {
        NetworkBuilder1D,
        NetworkBuilder3D
    },
    Math: {
        Matrix
    },
    Layer: {
        LogisticLayer,
        ConvLayer,
        FullyConnectedLayer,
        MaxPoolLayer,
        PurelinLayer,
        ReluLayer,
        SoftmaxLayer,
        TanhLayer,
    },
    Dataset: {
        Dataset
    },
    DatasetBuilder: {
        DatasetBuilder
    },
    DatasetBuilderSource: {
        DatasetBuilderSourceCSV
    },
    Optimizer: {
        OptimizerGradientDescent,
        OptimizerAdam,
        OptimizerAdadelta
    },
    Trainer: {
        MiniBatchTrainer
    },
    DatasetModifier: {
        CallbackDatabaseModifier,
        MinMaxScalingDatabaseModifier,
        MissingDataScalingDatabaseModifier,
    },
    Computation: {
        ComputationCPU,
        ComputationGPU,
        setComputation,
        getComputation,
    },
} = require("impulse-ts");
```

### Create network, train network and save.

```javascript
const {
    NetworkBuilder: {
        NetworkBuilder1D
    },
    Layer: {
        LogisticLayer
    },
    DatasetBuilder: {
        DatasetBuilder
    },
    Optimizer: {
        OptimizerGradientDescent
    },
    Trainer: {
        MiniBatchTrainer
    },
    Computation: {
        ComputationCPU,
        setComputation
    },
    DatasetModifier: {
        MinMaxScalingDatabaseModifier
    },
} = require("impulse-ts");
const path = require("path");

setComputation(new ComputationCPU());

const builder = new NetworkBuilder1D([400]);
builder
    .createLayer(LogisticLayer, (layer) => {
        layer.setSize(1000);
    })
    .createLayer(LogisticLayer, (layer) => {
        layer.setSize(500);
    })
    .createLayer(LogisticLayer, (layer) => {
        layer.setSize(200);
    })
    .createLayer(LogisticLayer, (layer) => {
        layer.setSize(10);
    });

const network = builder.getNetwork();

DatasetBuilder.fromSource(
    DatasetBuilderSourceCSV.fromLocalFile(path.resolve(__dirname, "./data/mnist_20x20_x.csv"))
).then(async (inputDataset) => {
    console.log("Loaded mnist_20x20_x.csv");
    DatasetBuilder.fromSource(
        DatasetBuilderSourceCSV.fromLocalFile(path.resolve(__dirname, "./data/mnist_20x20_y.csv"))
    ).then(async (outputDataset) => {
        console.log("Loaded mnist_20x20_y.csv");

        inputDataset = new MissingDataScalingDatabaseModifier(inputDataset).apply();
        inputDataset = new MinMaxScalingDatabaseModifier(inputDataset).apply();

        const trainer = new MiniBatchTrainer(network, new OptimizerGradientDescent());

        const result = network.forward(inputDataset.exampleAt(0));
        console.log("forward", result);

        console.log(trainer.cost(inputDataset, outputDataset));

        trainer.setIterations(10);
        trainer.setLearningRate(0.0007);
        trainer.setBatchSize(100);
        trainer.train(inputDataset, outputDataset);

        await network.save(path.resolve(__dirname, "./data/mnist2.json"));
    });
});

```

### Restore network and predict

```javascript
const {
    Builder: {
        NetworkBuilder1D
    },
    Dataset: {
        DatasetBuilder
    },
} = require("impulse-ts");
const path = require("path");
const timeStart = new Date().getTime();

NetworkBuilder1D.fromJSON(path.resolve(__dirname, "./data/mnist.json")).then(
    (network) => {
        DatasetBuilder.fromCSV(path.resolve(__dirname, "./data/mnist_20x20_x.csv")).then(
            (inputDataset) => {
                DatasetBuilder.fromCSV(
                    path.resolve(__dirname, "./data/mnist_20x20_y.csv")
                ).then(async (outputDataset) => {
                    const result = network.forward(inputDataset.exampleAt(0));
                    console.log("forward", result);
                });
            }
        );
    }
);
``` 
