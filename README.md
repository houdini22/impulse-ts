# impulse-ts

## This project is under heavy development and there is no stable version yet.

## Documentation
Full API documentation available at [https://houdini22.github.io/impulse-ts/](https://houdini22.github.io/impulse-ts/).

### Supported learning optimizers:
```
OptimizerGradientDescent
OptimizerMomentum
OptimizerAdam
OptimizerRMSProp
```

### Supported dataset modifiers:
```
MinMaxScalingDatasetModifier
MissingDataScalingDatasetModifier
ShuffleDatasetModifier
```

### Supported network builders:
```
NetworkBuilder1D
```

### Supported network builder sources
```
DatasetBuilderSourceCSV::fromFile
```

### Supported layers:
```
LogisticLayer
PurelinLayer
ReluLayer
```

### Supported trainers:
```
Trainer
MiniBatchTrainer
```

### Supported Networks
```
Network1D
```

### Supported Computations
```
ComputationCPU
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
        OptimizerAdagrad
    },
    Trainer: {
        MiniBatchTrainer,
        Trainer
    },
    DatasetModifier: {
        MinMaxScalingDatasetModifier,
        MissingDataScalingDatasetModifier,
        ShuffleDatasetModifier,
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
    NetworkBuilder: { NetworkBuilder1D },
    Layer: { LogisticLayer, ReluLayer },
    DatasetBuilder: { DatasetBuilder },
    Optimizer: { OptimizerGradientDescent, OptimizerAdam, OptimizerMomentum, OptimizerRMSProp },
    Trainer: { MiniBatchTrainer, Trainer },
    Computation: { ComputationCPU, setComputation },
    DatasetModifier: { MinMaxScalingDatabaseModifier, MissingDataScalingDatabaseModifier },
    DatasetBuilderSource: { DatasetBuilderSourceCSV },
} = require("impulse-ts");
const path = require("path");

setComputation(new ComputationCPU());

const builder = new NetworkBuilder1D([400]);
builder
    .createLayer(ReluLayer, (layer) => {
        layer.setSize(100);
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

        const trainer = new Trainer(network, new OptimizerAdam());

        const result = network.forward(inputDataset.exampleAt(0));
        console.log("forward", result);

        console.log(trainer.cost(inputDataset.data, outputDataset.data));

        trainer.setIterations(1000);
        trainer.setLearningRate(0.01);
        trainer.setRegularization(0.7);
        trainer.train(inputDataset, outputDataset);

        await network.save(path.resolve(__dirname, "./data/mnist.json"));
        console.log(trainer.cost(inputDataset.data, outputDataset.data));
        console.log(network.forward(inputDataset.exampleAt(0)), outputDataset.exampleAt(0));
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
