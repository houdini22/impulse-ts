#define EIGEN_USE_BLAS
#define EIGEN_USE_THREADS

#include <eigen3/Eigen/Core>
#include <eigen3/Eigen/Dense>

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