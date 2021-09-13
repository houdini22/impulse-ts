#define EIGEN_USE_BLAS
#define EIGEN_USE_THREADS

#include <eigen3/Eigen/Core>
#include <eigen3/Eigen/Dense>
#include <cmath>

double *matrixMultiply(double *m1, int m1Rows, int m1Cols, double *m2, int m2Rows, int m2Cols) {
    Eigen::Map <Eigen::Matrix<double, Eigen::Dynamic, Eigen::Dynamic>> _m1(m1, m1Rows, m1Cols);
    Eigen::Map <Eigen::Matrix<double, Eigen::Dynamic, Eigen::Dynamic>> _m2(m2, m2Rows, m2Cols);
    Eigen::MatrixXd result = _m1 * _m2;

    return result.data();
}

double *matrixElementWiseAdd(double *m1, int m1Rows, int m1Cols, double *m2, int m2Rows, int m2Cols) {
    Eigen::Map <Eigen::Matrix<double, Eigen::Dynamic, Eigen::Dynamic>> _m1(m1, m1Rows, m1Cols);
    Eigen::Map <Eigen::Matrix<double, Eigen::Dynamic, Eigen::Dynamic>> _m2(m2, m2Rows, m2Cols);
    Eigen::MatrixXd result = _m1.array() + _m2.array();

    return result.data();
}

double *matrixElementWiseSubtract(double *m1, int m1Rows, int m1Cols, double *m2, int m2Rows, int m2Cols) {
    Eigen::Map <Eigen::Matrix<double, Eigen::Dynamic, Eigen::Dynamic>> _m1(m1, m1Rows, m1Cols);
    Eigen::Map <Eigen::Matrix<double, Eigen::Dynamic, Eigen::Dynamic>> _m2(m2, m2Rows, m2Cols);
    Eigen::MatrixXd result = _m1.array() - _m2.array();

    return result.data();
}

double *matrixElementWiseMultiply(double *m1, int m1Rows, int m1Cols, double *m2, int m2Rows, int m2Cols) {
    Eigen::Map <Eigen::Matrix<double, Eigen::Dynamic, Eigen::Dynamic>> _m1(m1, m1Rows, m1Cols);
    Eigen::Map <Eigen::Matrix<double, Eigen::Dynamic, Eigen::Dynamic>> _m2(m2, m2Rows, m2Cols);
    Eigen::MatrixXd result = _m1.array() * _m2.array();

    return result.data();
}

double *matrixElementWiseDivide(double *m1, int m1Rows, int m1Cols, double *m2, int m2Rows, int m2Cols) {
    Eigen::Map <Eigen::Matrix<double, Eigen::Dynamic, Eigen::Dynamic>> _m1(m1, m1Rows, m1Cols);
    Eigen::Map <Eigen::Matrix<double, Eigen::Dynamic, Eigen::Dynamic>> _m2(m2, m2Rows, m2Cols);
    Eigen::MatrixXd result = _m1.array() / _m2.array();

    return result.data();
}

double matrixSum(double *m1, int m1Rows, int m1Cols) {
    Eigen::Map <Eigen::Matrix<double, Eigen::Dynamic, Eigen::Dynamic>> _m1(m1, m1Rows, m1Cols);
    Eigen::MatrixXd result = _m1;
    return result.sum();
}

double *matrixFillRandom(int m1Rows, int m1Cols, double parameter) {
    Eigen::MatrixXd result;
    result.resize(m1Rows, m1Cols);

    result.setRandom();
    result = result.unaryExpr([parameter](const double x) {
        return x * sqrt(2.0 / parameter);
    });

    return result.data();
}

double *softmaxActivation(double *m1, int m1Rows, int m1Cols) {
    Eigen::Map <Eigen::Matrix<double, Eigen::Dynamic, Eigen::Dynamic>> _m1(m1, m1Rows, m1Cols);
    Eigen::MatrixXd t = _m1;
    t.unaryExpr([](const double x) {
        return exp(x);
    });
    Eigen::MatrixXd divider = t.colwise().sum().replicate(t.rows(), 1);
    Eigen::MatrixXd result = t.array() / divider.array();

    return result.data();
}

double softmaxLoss(double *output, int outputRows, int outputCols, double *predictions, int predictionsRows,
                   int predictionsCols) {
    Eigen::Map <Eigen::Matrix<double, Eigen::Dynamic, Eigen::Dynamic>> _outputMap(output, outputRows, outputCols);
    Eigen::MatrixXd _output = _outputMap;

    Eigen::Map <Eigen::Matrix<double, Eigen::Dynamic, Eigen::Dynamic>> _predictionsMap(predictions, predictionsRows,
                                                                                       predictionsCols);
    Eigen::MatrixXd _predictions = _predictionsMap;

    Eigen::MatrixXd result = _output.array() - _predictions.unaryExpr([](const double x) {
        return log(x);
    }).array();

    return result.sum();
}

double *logisticActivation(double *m, int rows, int cols) {
    Eigen::Map <Eigen::Matrix<double, Eigen::Dynamic, Eigen::Dynamic>> _outputMap(m, rows, cols);
    Eigen::MatrixXd _output = _outputMap;

    _output = _output.unaryExpr([](const double x) {
        return 1.0 / (1.0 + exp(-x));
    });

    return _output.data();
}

double *logisticDerivative(double *m, int rows, int cols) {
    Eigen::Map <Eigen::Matrix<double, Eigen::Dynamic, Eigen::Dynamic>> _outputMap(m, rows, cols);
    Eigen::MatrixXd _output = _outputMap;

    _output = _output.array() * _output.unaryExpr([](const double x) {
        return 1.0 - x;
    }).array();

    return _output.data();
}

double logisticLoss(double *output, int outputRows, int outputCols, double *predictions, int predictionsRows,
                    int predictionsCols) {
    Eigen::Map <Eigen::Matrix<double, Eigen::Dynamic, Eigen::Dynamic>> _outputMap(output, outputRows, outputCols);
    Eigen::MatrixXd _output = _outputMap;

    Eigen::Map <Eigen::Matrix<double, Eigen::Dynamic, Eigen::Dynamic>> _predictionsMap(predictions, predictionsRows,
                                                                                       predictionsCols);
    Eigen::MatrixXd _predictions = _predictionsMap;

    Eigen::MatrixXd result =
            (_output.array() * _predictions.unaryExpr([](const double x) { return log(x); }).array())
            +
            (_output.unaryExpr([](const double x) { return 1.0 - x; }).array()
             *
             _predictions.unaryExpr([](const double x) { return log(1.0 - x); }).array()
            );

    return result.sum();
}
