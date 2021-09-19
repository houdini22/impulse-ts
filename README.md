# impulse-ts

## This project is under heavy development and learning doesn't works for now.

## Documentation
Full API documentation available at [https://houdini22.github.io/impulse-ts/](https://houdini22.github.io/impulse-ts/).

### Supported learning optimizers:
```
OptimizerGradientDescent
OptimizerMomentum
```

### Supported dataset modifiers:
```
MissingDataScalingDatabaseModifier
MinMaxScalingDatabaseModifier
```

### Supported network builders:
```
NetworkBuilder1D
```

### Supported network builder sources
```
DatasetBuilderSourceCSV
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
    NetworkBuilder: { NetworkBuilder1D },
    Layer: { LogisticLayer, ReluLayer, PurelinLayer },
    DatasetBuilder: { DatasetBuilder },
    Optimizer: { OptimizerGradientDescent, OptimizerMomentum },
    Trainer: { Trainer },
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

        const trainer = new Trainer(network, new OptimizerGradientDescent());

        const result = network.forward(inputDataset.exampleAt(0));
        console.log("forward", result);

        console.log(trainer.cost(inputDataset.data, outputDataset.data));

        trainer.setIterations(2000);
        trainer.setLearningRate(0.1);
        trainer.setRegularization(0.7);
        trainer.setStepCallback(() => {
            console.log(network.forward(inputDataset.exampleAt(0)));
        });
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
