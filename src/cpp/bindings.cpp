#include "bindings.hpp"
#include "matrix.cpp"

using namespace v8;
using namespace node;

void GetDriverVersion(const FunctionCallbackInfo <Value> &args) {
    int driverVersion = 0;
    cuDriverGetVersion(&driverVersion);

    Isolate *isolate = args.GetIsolate();
    args.GetReturnValue().Set(Number::New(isolate, driverVersion));
}

void GetDeviceCount(const FunctionCallbackInfo <Value> &args) {
    int count = 0;
    cuDeviceGetCount(&count);

    Isolate *isolate = args.GetIsolate();
    args.GetReturnValue().Set(Number::New(isolate, count));
}

void MatrixMultiply(const FunctionCallbackInfo <Value> &args) {
    Local <Array> m1 = Local<Array>::Cast(args[0]);
    int m1Rows = Local<Number>::Cast(args[1])->Value();
    int m1Cols = Local<Number>::Cast(args[2])->Value();

    Local <Array> m2 = Local<Array>::Cast(args[3]);
    int m2Rows = Local<Number>::Cast(args[4])->Value();
    int m2Cols = Local<Number>::Cast(args[5])->Value();

    double *m1Data;
    double *m2Data;
    m1->NumberValue(args.GetIsolate()->GetCurrentContext()).To(m1Data);
    m2->NumberValue(args.GetIsolate()->GetCurrentContext()).To(m2Data);

    double *result = matrixMultiply(m1Data, m1Rows, m1Cols, m2Data, m2Rows, m2Cols);
    Local <Array> resultData = Array::New(args.GetIsolate(), m1Rows * m2Cols);
    for (int i = 0; i < m1Rows * m2Cols; i += 1) {
        Local <Number> value = Number::New(args.GetIsolate(), result[i]);
        resultData->Set(args.GetIsolate()->GetCurrentContext(), (uint32_t) i, value);
    }

    args.GetReturnValue().Set(resultData);
}

void MatrixElementWiseAdd(const FunctionCallbackInfo <Value> &args) {
    Local <Array> m1 = Local<Array>::Cast(args[0]);
    int m1Rows = Local<Number>::Cast(args[1])->Value();
    int m1Cols = Local<Number>::Cast(args[2])->Value();

    Local <Array> m2 = Local<Array>::Cast(args[3]);
    int m2Rows = Local<Number>::Cast(args[4])->Value();
    int m2Cols = Local<Number>::Cast(args[5])->Value();

    double *m1Data;
    double *m2Data;
    m1->NumberValue(args.GetIsolate()->GetCurrentContext()).To(m1Data);
    m2->NumberValue(args.GetIsolate()->GetCurrentContext()).To(m2Data);

    double *result = matrixElementWiseAdd(m1Data, m1Rows, m1Cols, m2Data, m2Rows, m2Cols);
    Local <Array> resultData = Array::New(args.GetIsolate(), m1Rows * m2Cols);
    for (int i = 0; i < m1Rows * m2Cols; i += 1) {
        Local <Number> value = Number::New(args.GetIsolate(), result[i]);
        resultData->Set(args.GetIsolate()->GetCurrentContext(), (uint32_t) i, value);
    }

    args.GetReturnValue().Set(resultData);
}

void MatrixElementWiseSubtract(const FunctionCallbackInfo <Value> &args) {
    Local <Array> m1 = Local<Array>::Cast(args[0]);
    int m1Rows = Local<Number>::Cast(args[1])->Value();
    int m1Cols = Local<Number>::Cast(args[2])->Value();

    Local <Array> m2 = Local<Array>::Cast(args[3]);
    int m2Rows = Local<Number>::Cast(args[4])->Value();
    int m2Cols = Local<Number>::Cast(args[5])->Value();

    double *m1Data;
    double *m2Data;
    m1->NumberValue(args.GetIsolate()->GetCurrentContext()).To(m1Data);
    m2->NumberValue(args.GetIsolate()->GetCurrentContext()).To(m2Data);

    double *result = matrixElementWiseSubtract(m1Data, m1Rows, m1Cols, m2Data, m2Rows, m2Cols);
    Local <Array> resultData = Array::New(args.GetIsolate(), m1Rows * m2Cols);
    for (int i = 0; i < m1Rows * m2Cols; i += 1) {
        Local <Number> value = Number::New(args.GetIsolate(), result[i]);
        resultData->Set(args.GetIsolate()->GetCurrentContext(), (uint32_t) i, value);
    }

    args.GetReturnValue().Set(resultData);
}

void MatrixElementWiseMultiply(const FunctionCallbackInfo <Value> &args) {
    Local <Array> m1 = Local<Array>::Cast(args[0]);
    int m1Rows = Local<Number>::Cast(args[1])->Value();
    int m1Cols = Local<Number>::Cast(args[2])->Value();

    Local <Array> m2 = Local<Array>::Cast(args[3]);
    int m2Rows = Local<Number>::Cast(args[4])->Value();
    int m2Cols = Local<Number>::Cast(args[5])->Value();

    double *m1Data;
    double *m2Data;
    m1->NumberValue(args.GetIsolate()->GetCurrentContext()).To(m1Data);
    m2->NumberValue(args.GetIsolate()->GetCurrentContext()).To(m2Data);

    double *result = matrixElementWiseMultiply(m1Data, m1Rows, m1Cols, m2Data, m2Rows, m2Cols);
    Local <Array> resultData = Array::New(args.GetIsolate(), m1Rows * m2Cols);
    for (int i = 0; i < m1Rows * m2Cols; i += 1) {
        Local <Number> value = Number::New(args.GetIsolate(), result[i]);
        resultData->Set(args.GetIsolate()->GetCurrentContext(), (uint32_t) i, value);
    }

    args.GetReturnValue().Set(resultData);
}

void MatrixElementWiseDivide(const FunctionCallbackInfo <Value> &args) {
    Local <Array> m1 = Local<Array>::Cast(args[0]);
    int m1Rows = Local<Number>::Cast(args[1])->Value();
    int m1Cols = Local<Number>::Cast(args[2])->Value();

    Local <Array> m2 = Local<Array>::Cast(args[3]);
    int m2Rows = Local<Number>::Cast(args[4])->Value();
    int m2Cols = Local<Number>::Cast(args[5])->Value();

    double *m1Data;
    double *m2Data;
    m1->NumberValue(args.GetIsolate()->GetCurrentContext()).To(m1Data);
    m2->NumberValue(args.GetIsolate()->GetCurrentContext()).To(m2Data);

    double *result = matrixElementWiseDivide(m1Data, m1Rows, m1Cols, m2Data, m2Rows, m2Cols);
    Local <Array> resultData = Array::New(args.GetIsolate(), m1Rows * m2Cols);
    for (int i = 0; i < m1Rows * m2Cols; i += 1) {
        Local <Number> value = Number::New(args.GetIsolate(), result[i]);
        resultData->Set(args.GetIsolate()->GetCurrentContext(), (uint32_t) i, value);
    }

    args.GetReturnValue().Set(resultData);
}

extern "C" NODE_MODULE_EXPORT void
NODE_MODULE_INITIALIZER(Local <Object> exports,
                        Local <Value> module,
                        Local <Context> context) {
    Isolate *isolate = context->GetIsolate();
    exports->Set(context, String::NewFromUtf8(isolate, "MatrixMultiply").ToLocalChecked(),
                 FunctionTemplate::New(isolate, MatrixMultiply)->GetFunction(context).ToLocalChecked()).FromJust();
    exports->Set(context, String::NewFromUtf8(isolate, "MatrixElementWiseAdd").ToLocalChecked(),
                 FunctionTemplate::New(isolate, MatrixElementWiseAdd)->GetFunction(
                         context).ToLocalChecked()).FromJust();
    exports->Set(context, String::NewFromUtf8(isolate, "MatrixElementWiseSubtract").ToLocalChecked(),
                 FunctionTemplate::New(isolate, MatrixElementWiseSubtract)->GetFunction(
                         context).ToLocalChecked()).FromJust();
    exports->Set(context, String::NewFromUtf8(isolate, "MatrixElementWiseMultiply").ToLocalChecked(),
                 FunctionTemplate::New(isolate, MatrixElementWiseMultiply)->GetFunction(
                         context).ToLocalChecked()).FromJust();
    exports->Set(context, String::NewFromUtf8(isolate, "MatrixElementWiseDivide").ToLocalChecked(),
                 FunctionTemplate::New(isolate, MatrixElementWiseDivide)->GetFunction(
                         context).ToLocalChecked()).FromJust();
}
