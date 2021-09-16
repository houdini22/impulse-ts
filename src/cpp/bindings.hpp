#ifndef BINDINGS_HPP
#define BINDINGS_HPP

#include <v8.h>
#include <node/node.h>
#include <node/node_buffer.h>
#include <cuda.h>
#include <cuda_runtime.h>

using namespace v8;
using namespace node;

void init(Local < Object > );

#endif
