/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/typescript/Computation/AbstractComputation.ts":
/*!***********************************************************!*\
  !*** ./src/typescript/Computation/AbstractComputation.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractComputation": () => (/* binding */ AbstractComputation)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AbstractComputation = /*#__PURE__*/function () {
  function AbstractComputation() {
    _classCallCheck(this, AbstractComputation);
    _defineProperty(this, "kernels", {});
  }
  _createClass(AbstractComputation, [{
    key: "addKernel",
    value: function addKernel(name, func) {
      this.kernels[name] = func;
      return this;
    }
  }, {
    key: "execute",
    value: function execute(name) {
      if (!this.kernels[name]) {
        throw new Error("Kernel '".concat(name, "' not exists."));
      }
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return this.kernels[name].apply(null, args);
    }
  }]);
  return AbstractComputation;
}();

/***/ }),

/***/ "./src/typescript/Computation/ComputationCPU.ts":
/*!******************************************************!*\
  !*** ./src/typescript/Computation/ComputationCPU.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComputationCPU": () => (/* binding */ ComputationCPU),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "addNumber": () => (/* binding */ addNumber),
/* harmony export */   "divideNumber": () => (/* binding */ divideNumber),
/* harmony export */   "dot": () => (/* binding */ dot),
/* harmony export */   "elementWiseDivide": () => (/* binding */ elementWiseDivide),
/* harmony export */   "elementWiseMultiply": () => (/* binding */ elementWiseMultiply),
/* harmony export */   "fillRandom": () => (/* binding */ fillRandom),
/* harmony export */   "fillZeros": () => (/* binding */ fillZeros),
/* harmony export */   "log": () => (/* binding */ log),
/* harmony export */   "logMinusOne": () => (/* binding */ logMinusOne),
/* harmony export */   "logisticActivation": () => (/* binding */ logisticActivation),
/* harmony export */   "logisticBackpropagation": () => (/* binding */ logisticBackpropagation),
/* harmony export */   "logisticLoss": () => (/* binding */ logisticLoss),
/* harmony export */   "multiplyNumber": () => (/* binding */ multiplyNumber),
/* harmony export */   "penalty": () => (/* binding */ penalty),
/* harmony export */   "pow": () => (/* binding */ pow),
/* harmony export */   "purelinLoss": () => (/* binding */ purelinLoss),
/* harmony export */   "reluActivation": () => (/* binding */ reluActivation),
/* harmony export */   "reluBackpropagation": () => (/* binding */ reluBackpropagation),
/* harmony export */   "setOnes": () => (/* binding */ setOnes),
/* harmony export */   "softplusActivation": () => (/* binding */ softplusActivation),
/* harmony export */   "sqrt": () => (/* binding */ sqrt),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "subtractFromNumber": () => (/* binding */ subtractFromNumber),
/* harmony export */   "tanhActivation": () => (/* binding */ tanhActivation),
/* harmony export */   "transpose": () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _AbstractComputation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractComputation */ "./src/typescript/Computation/AbstractComputation.ts");
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var elementWiseDivide = function elementWiseDivide(m1, m2) {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal.");
  }
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      data[row][col] = m1.data[row][col] / m2.data[row][col];
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m2.cols, data);
};
var divideNumber = function divideNumber(m1, num) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      data[row][col] = m1.data[row][col] / num;
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var logisticActivation = function logisticActivation(m) {
  var data = [];
  for (var row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m.cols; col += 1) {
      data[row][col] = 1.0 / (1.0 + Math.exp(-m.data[row][col]));
    }
  }
  return _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix.from(data);
};
var logisticLoss = function logisticLoss(output, predictions) {
  var log = [];
  var epsilon = 1e-8;
  for (var row = 0; row < predictions.rows; row += 1) {
    log[row] = [];
    for (var col = 0; col < predictions.cols; col += 1) {
      if (predictions.data) {
        log[row][col] = Math.log(predictions.data[row][col] + epsilon);
      }
    }
  }
  var firstMatrix = elementWiseMultiply(new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(predictions.rows, predictions.cols, log), output);
  var sub = [];
  for (var _row = 0; _row < output.rows; _row += 1) {
    sub[_row] = [];
    for (var _col = 0; _col < output.cols; _col += 1) {
      if (output.data) {
        sub[_row][_col] = 1.0 - output.data[_row][_col];
      }
    }
  }
  var toMultiply2 = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(output.rows, output.cols, sub);
  var data = [];
  for (var _row2 = 0; _row2 < predictions.rows; _row2 += 1) {
    data[_row2] = [];
    for (var _col2 = 0; _col2 < predictions.cols; _col2 += 1) {
      if (predictions.data) {
        data[_row2][_col2] = Math.log(1.0 - predictions.data[_row2][_col2] + epsilon);
      }
    }
  }
  var toMultiply1 = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(predictions.rows, predictions.cols, data);
  return add(elementWiseMultiply(multiplyNumber(firstMatrix, -1), output), elementWiseMultiply(multiplyNumber(toMultiply1, -1), subtractFromNumber(toMultiply2, 1))).sum();
};
var logisticBackpropagation = function logisticBackpropagation(sigma, oldY) {
  return logisticActivation(oldY).multiply(logisticActivation(oldY).minusOne());
};
var tanhActivation = function tanhActivation(m) {
  var data = [];
  for (var row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m.cols; col += 1) {
      data[row][col] = (1 - Math.exp(-2 * m.data[row][col])) / (1 + Math.exp(-2 * m.data[row][col]));
    }
  }
  return _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix.from(data);
};
var reluActivation = function reluActivation(m) {
  var data = [];
  for (var row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m.cols; col += 1) {
      if (m.data) {
        data[row][col] = Math.max(0.0, m.data[row][col]);
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m.rows, m.cols, data);
};
var reluBackpropagation = function reluBackpropagation(sigma, oldY) {
  var data = [];
  for (var row = 0; row < sigma.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < sigma.cols; col += 1) {
      if (sigma.data) {
        data[row][col] = oldY.data[row][col] > 0 ? 1 : 0;
      }
    }
  }
  return elementWiseMultiply(new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(sigma.rows, sigma.cols, data), sigma);
};
var softplusActivation = function softplusActivation(m) {
  var data = [];
  for (var row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m.cols; col += 1) {
      if (m.data) {
        data[row][col] = Math.log(1 + Math.exp(m.data[row][col]));
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m.rows, m.cols, data);
};
var penalty = function penalty(m) {
  var data = [];
  for (var row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m.cols; col += 1) {
      if (m.data) {
        data[row][col] = Math.pow(m.data[row][col], 2);
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m.rows, m.cols, data).sum();
};
var sqrt = function sqrt(m) {
  var data = [];
  for (var row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m.cols; col += 1) {
      if (m.data) {
        data[row][col] = Math.sqrt(m.data[row][col] + 1e-8);
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m.rows, m.cols, data);
};
var purelinLoss = function purelinLoss(output, predictions) {
  var data = [];
  for (var row = 0; row < output.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < output.cols; col += 1) {
      if (output.data) {
        data[row][col] = output.data[row][col] - Math.pow(predictions[row][col], 2);
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(output.rows, output.cols, data).sum();
};
var dot = function dot(m1, m2) {
  if (m1.cols !== m2.rows) {
    throw new Error("DIMENSIONS error. m1.cols ".concat(m1.rows, " ").concat(m1.cols, " !== m2.rows ").concat(m2.rows, " ").concat(m2.cols, "."));
  }
  var data = [];
  for (var row = 0; row < m1.rows; ++row) {
    data[row] = new Array(m2.cols);
    for (var col = 0; col < m2.cols; ++col) {
      data[row][col] = 0;
      for (var i = 0; i < m1.cols; ++i) {
        if (m1.data && m2.data) {
          data[row][col] += m1.data[row][i] * m2.data[i][col];
        }
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m2.cols, data);
};
var add = function add(m1, m2) {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal. m1.cols ".concat(m1.cols, " !== m2.cols ").concat(m2.cols));
  }
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      if (m1.data && m2.data) {
        data[row][col] = m1.data[row][col] + m2.data[row][col];
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var subtract = function subtract(m1, m2) {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal: m1.rows ".concat(m1.rows, " !== m2.rows ").concat(m2.rows));
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal: m1.cols ".concat(m1.cols, " !== m2.cols ").concat(m2.cols));
  }
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      if (m1.data && m2.data) {
        data[row][col] = m1.data[row][col] - m2.data[row][col];
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var fillRandom = function fillRandom(m1, parameter) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      data[row][col] = (Math.random() * 4 - 2) * Math.sqrt(2 / parameter); // todo: gaussian distribution
    }
  }

  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var fillZeros = function fillZeros(m1) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      data[row][col] = 0;
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var setOnes = function setOnes(m1) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      data[row][col] = 1;
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var elementWiseMultiply = function elementWiseMultiply(m1, m2) {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal: m1.rows ".concat(m1.rows, " !== m2.rows ").concat(m2.rows));
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal: m1.cols ".concat(m1.cols, " !== m2.cols ").concat(m2.cols));
  }
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      if (m1.data && m2.data) {
        data[row][col] = m1.data[row][col] * m2.data[row][col];
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var multiplyNumber = function multiplyNumber(m1, num) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      if (m1.data) {
        data[row][col] = m1.data[row][col] * num;
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var subtractFromNumber = function subtractFromNumber(m1, num) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      if (m1.data) {
        data[row][col] = num - m1.data[row][col];
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var pow = function pow(m1, _pow) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      if (m1.data) {
        data[row][col] = Math.pow(m1.data[row][col], _pow);
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var log = function log(m1, pow) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      if (m1.data) {
        data[row][col] = Math.log(m1.data[row][col] + 1e-8);
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var logMinusOne = function logMinusOne(m1, pow) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      if (m1.data) {
        data[row][col] = Math.log(1 - m1.data[row][col]);
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var addNumber = function addNumber(m1, num) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      data[row][col] = m1.data[row][col] + num;
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var transpose = function transpose(m) {
  var data = [];
  for (var col = 0; col < m.cols; col += 1) {
    data[col] = [];
    for (var row = 0; row < m.rows; row += 1) {
      if (m.data) {
        data[col][row] = m.data[row][col];
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m.cols, m.rows, data);
};
var ComputationCPU = /*#__PURE__*/function (_AbstractComputation) {
  _inherits(ComputationCPU, _AbstractComputation);
  var _super = _createSuper(ComputationCPU);
  function ComputationCPU() {
    var _this;
    _classCallCheck(this, ComputationCPU);
    _this = _super.call(this);
    _this.addKernel("multiply", dot);
    _this.addKernel("add", add);
    _this.addKernel("subtract", subtract);
    _this.addKernel("subtractFromNumber", subtractFromNumber);
    _this.addKernel("fillRandom", fillRandom);
    _this.addKernel("fillZeros", fillZeros);
    _this.addKernel("elementWiseMultiply", elementWiseMultiply);
    _this.addKernel("multiplyNumber", multiplyNumber);
    _this.addKernel("elementWiseDivide", elementWiseDivide);
    _this.addKernel("divideNumber", divideNumber);
    _this.addKernel("logisticActivation", logisticActivation);
    _this.addKernel("logisticLoss", logisticLoss);
    _this.addKernel("logisticBackpropagation", logisticBackpropagation);
    _this.addKernel("tanhActivation", tanhActivation);
    _this.addKernel("reluActivation", reluActivation);
    _this.addKernel("reluBackpropagation", reluBackpropagation);
    _this.addKernel("softplusActivation", softplusActivation);
    _this.addKernel("penalty", penalty);
    _this.addKernel("sqrt", sqrt);
    _this.addKernel("transpose", transpose);
    _this.addKernel("pow", pow);
    _this.addKernel("log", log);
    _this.addKernel("logMinusOne", logMinusOne);
    _this.addKernel("addNumber", addNumber);
    return _this;
  }
  return _createClass(ComputationCPU);
}(_AbstractComputation__WEBPACK_IMPORTED_MODULE_0__.AbstractComputation);

/***/ }),

/***/ "./src/typescript/Computation/ComputationGPU.ts":
/*!******************************************************!*\
  !*** ./src/typescript/Computation/ComputationGPU.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComputationGPU": () => (/* binding */ ComputationGPU),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "divideNumber": () => (/* binding */ divideNumber),
/* harmony export */   "dot": () => (/* binding */ dot),
/* harmony export */   "elementWiseDivide": () => (/* binding */ elementWiseDivide),
/* harmony export */   "elementWiseMultiply": () => (/* binding */ elementWiseMultiply),
/* harmony export */   "fillRandom": () => (/* binding */ fillRandom),
/* harmony export */   "fillZeros": () => (/* binding */ fillZeros),
/* harmony export */   "logisticActivation": () => (/* binding */ logisticActivation),
/* harmony export */   "logisticLoss": () => (/* binding */ logisticLoss),
/* harmony export */   "multiplyNumber": () => (/* binding */ multiplyNumber),
/* harmony export */   "penalty": () => (/* binding */ penalty),
/* harmony export */   "purelinLoss": () => (/* binding */ purelinLoss),
/* harmony export */   "reluActivation": () => (/* binding */ reluActivation),
/* harmony export */   "setOnes": () => (/* binding */ setOnes),
/* harmony export */   "softmaxActivation": () => (/* binding */ softmaxActivation),
/* harmony export */   "softmaxLoss": () => (/* binding */ softmaxLoss),
/* harmony export */   "softplusActivation": () => (/* binding */ softplusActivation),
/* harmony export */   "sqrt": () => (/* binding */ sqrt),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "tanhActivation": () => (/* binding */ tanhActivation),
/* harmony export */   "transpose": () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _AbstractComputation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractComputation */ "./src/typescript/Computation/AbstractComputation.ts");
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



/*import { GPU } from "gpu.js";*/

//export const gpu = new GPU({ mode: "gpu" });

var elementWiseDivide = function elementWiseDivide(m1, m2) {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal.");
  }
  var kernel = gpu.createKernel(function (a, b) {
    // @ts-ignore
    return a[this.thread.x][this.thread.y] / b[this.thread.x][this.thread.y];
  }).setOutput([m1.rows, m2.cols]);
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, kernel(m1.data, m2.data));
};
var divideNumber = function divideNumber(m1, num) {
  var kernel = gpu.createKernel(function (a) {
    // @ts-ignore
    return a[this.thread.x][this.thread.y] / this.constants.number;
  }).setOutput([m1.rows, m1.cols]).setConstants({
    number: num
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, kernel(m1.data));
};
var softmaxActivation = function softmaxActivation(m) {
  var kernel = gpu.createKernel(function (a) {
    // @ts-ignore
    return Math.exp(a[this.thread.x][this.thread.y]);
  }).setOutput([m.rows, m.cols]);
  var data = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m.rows, m.cols, kernel(m.data));
  var divider = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(1, m.cols, data.colwiseSum().data).replicate(m.rows, 1);
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m.rows, m.cols, elementWiseDivide(data, divider).data);
};
var softmaxLoss = function softmaxLoss(output, predictions) {
  var kernel = gpu.createKernel(function (a) {
    // @ts-ignore
    return Math.log(a[this.thread.x][this.thread.y]);
  }).setOutput([predictions.rows, predictions.cols]);
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(output.rows, output.cols, elementWiseMultiply(output, new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(output.rows, output.cols, kernel(predictions.data))).data).sum();
};
var logisticActivation = function logisticActivation(m) {
  var kernel = gpu.createKernel(function (a) {
    // @ts-ignore
    return 1.0 / (1.0 + Math.exp(-a[this.thread.x][this.thread.y]));
  }).setOutput([m.rows, m.cols]);
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m.rows, m.cols, kernel(m.data));
};
var logisticLoss = function logisticLoss(output, predictions) {
  var kernel = gpu.createKernel(function (a) {
    // @ts-ignore
    return Math.log(a[this.thread.x][this.thread.y]);
  }).setOutput([output.rows, output.cols]);
  var kernel2 = gpu.createKernel(function (a) {
    // @ts-ignore
    return 1.0 - a[this.thread.x][this.thread.y];
  }).setOutput([output.rows, output.cols]);
  var kernel3 = gpu.createKernel(function (a) {
    // @ts-ignore
    return Math.log(1.0 - a[this.thread.x][this.thread.y]);
  }).setOutput([predictions.rows, predictions.cols]);
  return add(elementWiseMultiply(output, new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(output.rows, output.cols, kernel(output.data))), elementWiseMultiply(new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(output.rows, output.cols, kernel2(output.data)), new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(predictions.rows, predictions.cols, kernel3(predictions.data)))).sum();
};
var tanhActivation = function tanhActivation(m) {
  var kernel = gpu.createKernel(function (a) {
    // @ts-ignore
    return 2.0 / (1.0 + Math.exp(-2.0 * a[this.thread.x][this.thread.y])) - 1.0;
  }).setOutput([m.rows, m.cols]);
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m.rows, m.cols, kernel(m.data));
};
var reluActivation = function reluActivation(m) {
  var kernel = gpu.createKernel(function (a) {
    // @ts-ignore
    return Math.max(0.0, a[this.thread.x][this.thread.y]);
  }).setOutput([m.rows, m.cols]);
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m.rows, m.cols, kernel(m.data));
};
var softplusActivation = function softplusActivation(m) {
  var kernel = gpu.createKernel(function (a) {
    // @ts-ignore
    return Math.log(1 + Math.exp(a[this.thread.x][this.thread.y]));
  }).setOutput([m.rows, m.cols]);
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m.rows, m.cols, kernel(m.data));
};
var penalty = function penalty(m) {
  var kernel = gpu.createKernel(function (a) {
    // @ts-ignore
    return Math.pow(a[this.thread.x][this.thread.y], 2);
  }).setOutput([m.rows, m.cols]);
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m.rows, m.cols, kernel(m.data)).sum();
};
var sqrt = function sqrt(m) {
  var kernel = gpu.createKernel(function (a) {
    // @ts-ignore
    return Math.sqrt(a[this.thread.x][this.thread.y] + 1e-8);
  }).setOutput([m.rows, m.cols]);
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m.rows, m.cols, kernel(m.data));
};
var purelinLoss = function purelinLoss(output, predictions) {
  var kernel = gpu.createKernel(function (a, b) {
    // @ts-ignore
    return b[this.thread.x][this.thread.y] - Math.pow(a[this.thread.x][this.thread.y], 2);
  }).setOutput([output.rows, output.cols]);
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(output.rows, output.cols, kernel(output.data)).sum();
};
var dot = function dot(m1, m2) {
  if (m1.cols !== m2.rows) {
    throw new Error("DIMENSIONS error. m1.cols ".concat(m1.cols, " !== m2.rows ").concat(m2.rows, "."));
  }
  var kernel = gpu.createKernel(function (a, b) {
    var sum = 0;
    for (var i = 0; i < this.constants.cols; i++) {
      // @ts-ignore
      sum += a[this.thread.x][i] * b[i][this.thread.y];
    }
    return sum;
  }).setOutput([m1.rows, m2.cols]).setConstants({
    cols: m1.rows
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m2.cols, kernel(m1.data, m2.data));
};
var add = function add(m1, m2) {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal.");
  }
  var kernel = gpu.createKernel(function (a, b) {
    // @ts-ignore
    return a[this.thread.x][this.thread.y] + b[this.thread.x][this.thread.y];
  }).setOutput([m1.rows, m2.cols]);
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m2.cols, kernel(m1.data, m2.data));
};
var subtract = function subtract(m1, m2) {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal.");
  }
  var kernel = gpu.createKernel(function (a, b) {
    // @ts-ignore
    return a[this.thread.x][this.thread.y] - b[this.thread.x][this.thread.y];
  }).setOutput([m1.rows, m2.cols]);
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m2.cols, kernel(m1.data, m2.data));
};
var fillRandom = function fillRandom(m1, parameter) {
  var kernel = gpu.createKernel(function () {
    return Math.random() - 0.5;
  }).setOutput([m1.rows, m1.cols]).setConstants({
    parameter: parameter
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, kernel());
};
var fillZeros = function fillZeros(m1) {
  var kernel = gpu.createKernel(function () {
    return 0.0;
  }).setOutput([m1.rows, m1.cols]);
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, kernel());
};
var setOnes = function setOnes(m1) {
  var kernel = gpu.createKernel(function () {
    return 1.0;
  }).setOutput([m1.rows, m1.cols]);
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, kernel());
};
var elementWiseMultiply = function elementWiseMultiply(m1, m2) {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal.");
  }
  var kernel = gpu.createKernel(function (a, b) {
    // @ts-ignore
    return a[this.thread.x][this.thread.y] * b[this.thread.x][this.thread.y];
  }).setOutput([m1.rows, m2.cols]);
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m2.cols, kernel(m1.data, m2.data));
};
var multiplyNumber = function multiplyNumber(m1, num) {
  var kernel = gpu.createKernel(function (a) {
    // @ts-ignore
    return a[this.thread.x][this.thread.y] * this.constants.number;
  }).setOutput([m1.rows, m1.cols]).setConstants({
    number: num
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, kernel(m1.data));
};
var transpose = function transpose(m) {
  var kernel = gpu.createKernel(function (a) {
    // @ts-ignore
    return a[this.thread.y][this.thread.x];
  }).setOutput([m.cols, m.rows]);
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m.cols, m.rows, kernel(m.data));
};
var ComputationGPU = /*#__PURE__*/function (_AbstractComputation) {
  _inherits(ComputationGPU, _AbstractComputation);
  var _super = _createSuper(ComputationGPU);
  function ComputationGPU() {
    var _this;
    _classCallCheck(this, ComputationGPU);
    _this = _super.call(this);
    _this.addKernel("multiply", dot);
    _this.addKernel("add", add);
    _this.addKernel("subtract", subtract);
    _this.addKernel("fillRandom", fillRandom);
    _this.addKernel("fillZeros", fillZeros);
    _this.addKernel("elementWiseMultiply", elementWiseMultiply);
    _this.addKernel("multiplyNumber", multiplyNumber);
    _this.addKernel("elementWiseDivide", elementWiseDivide);
    _this.addKernel("divideNumber", divideNumber);
    _this.addKernel("softmaxActivation", softmaxActivation);
    _this.addKernel("softmaxLoss", softmaxLoss);
    _this.addKernel("logisticActivation", logisticActivation);
    _this.addKernel("logisticLoss", logisticLoss);
    _this.addKernel("tanhActivation", tanhActivation);
    _this.addKernel("reluActivation", reluActivation);
    _this.addKernel("softplusActivation", softplusActivation);
    _this.addKernel("penalty", penalty);
    _this.addKernel("sqrt", sqrt);
    _this.addKernel("purelinLoss", purelinLoss);
    _this.addKernel("transpose", transpose);
    return _this;
  }
  return _createClass(ComputationGPU);
}(_AbstractComputation__WEBPACK_IMPORTED_MODULE_0__.AbstractComputation);

/***/ }),

/***/ "./src/typescript/Computation/index.ts":
/*!*********************************************!*\
  !*** ./src/typescript/Computation/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractComputation": () => (/* reexport safe */ _AbstractComputation__WEBPACK_IMPORTED_MODULE_0__.AbstractComputation),
/* harmony export */   "ComputationCPU": () => (/* reexport safe */ _ComputationCPU__WEBPACK_IMPORTED_MODULE_2__.ComputationCPU),
/* harmony export */   "ComputationGPU": () => (/* reexport safe */ _ComputationGPU__WEBPACK_IMPORTED_MODULE_1__.ComputationGPU),
/* harmony export */   "getComputation": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.getComputation),
/* harmony export */   "setComputation": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.setComputation)
/* harmony export */ });
/* harmony import */ var _AbstractComputation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractComputation */ "./src/typescript/Computation/AbstractComputation.ts");
/* harmony import */ var _ComputationGPU__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComputationGPU */ "./src/typescript/Computation/ComputationGPU.ts");
/* harmony import */ var _ComputationCPU__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComputationCPU */ "./src/typescript/Computation/ComputationCPU.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/typescript/Computation/utils.ts");






/***/ }),

/***/ "./src/typescript/Computation/utils.ts":
/*!*********************************************!*\
  !*** ./src/typescript/Computation/utils.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getComputation": () => (/* binding */ getComputation),
/* harmony export */   "setComputation": () => (/* binding */ setComputation)
/* harmony export */ });
/* harmony import */ var _ComputationCPU__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComputationCPU */ "./src/typescript/Computation/ComputationCPU.ts");

var currentComputation = new _ComputationCPU__WEBPACK_IMPORTED_MODULE_0__.ComputationCPU();
var setComputation = function setComputation(type) {
  currentComputation = type;
};
var getComputation = function getComputation() {
  return currentComputation;
};

/***/ }),

/***/ "./src/typescript/Dataset/Dataset.ts":
/*!*******************************************!*\
  !*** ./src/typescript/Dataset/Dataset.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dataset": () => (/* binding */ Dataset)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Dataset = /*#__PURE__*/function () {
  function Dataset() {
    var exampleSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var numberOfExamples = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var arr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    _classCallCheck(this, Dataset);
    _defineProperty(this, "exampleSize", 0);
    _defineProperty(this, "numberOfExamples", 0);
    _defineProperty(this, "data", null);
    this.exampleSize = exampleSize;
    this.numberOfExamples = numberOfExamples;
    if (arr) {
      var data = [];
      for (var row = 0; row < exampleSize; row += 1) {
        data[row] = new Array(numberOfExamples);
        for (var col = 0; col < numberOfExamples; col += 1) {
          if (typeof arr[row][col] === "string") {
            // @ts-ignore
            data[row][col] = arr[row][col].length ? Number(arr[row][col]) : NaN;
          } else if (typeof arr[row][col] === "number") {
            data[row][col] = arr[row][col];
          }
        }
      }
      this.data = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.exampleSize, this.numberOfExamples, data);
    }
  }
  _createClass(Dataset, [{
    key: "exampleAt",
    value: function exampleAt(index) {
      return this.data.col(index);
    }
  }, {
    key: "getNumberOfExamples",
    value: function getNumberOfExamples() {
      return this.numberOfExamples;
    }
  }, {
    key: "getExampleSize",
    value: function getExampleSize() {
      return this.exampleSize;
    }
  }, {
    key: "getBatch",
    value: function getBatch(offset, batchSize) {
      var data = this.data.block(0, offset, this.data.rows, batchSize);
      return Dataset.fromMatrix(data);
    }
  }], [{
    key: "fromMatrix",
    value: function fromMatrix(m) {
      var instance = new Dataset();
      instance.exampleSize = m.rows;
      instance.numberOfExamples = m.cols;
      instance.data = m;
      return instance;
    }
  }]);
  return Dataset;
}();

/***/ }),

/***/ "./src/typescript/Dataset/DatasetModifier/AbstractDatasetModifier.ts":
/*!***************************************************************************!*\
  !*** ./src/typescript/Dataset/DatasetModifier/AbstractDatasetModifier.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractDatasetModifier": () => (/* binding */ AbstractDatasetModifier)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AbstractDatasetModifier = /*#__PURE__*/_createClass(function AbstractDatasetModifier(dataset) {
  _classCallCheck(this, AbstractDatasetModifier);
  _defineProperty(this, "dataset", null);
  this.dataset = dataset;
});

/***/ }),

/***/ "./src/typescript/Dataset/DatasetModifier/Callback.ts":
/*!************************************************************!*\
  !*** ./src/typescript/Dataset/DatasetModifier/Callback.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallbackDatasetModifier": () => (/* binding */ CallbackDatasetModifier)
/* harmony export */ });
/* harmony import */ var _AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDatasetModifier */ "./src/typescript/Dataset/DatasetModifier/AbstractDatasetModifier.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var CallbackDatasetModifier = /*#__PURE__*/function (_AbstractDatasetModif) {
  _inherits(CallbackDatasetModifier, _AbstractDatasetModif);
  var _super = _createSuper(CallbackDatasetModifier);
  function CallbackDatasetModifier() {
    var _this;
    _classCallCheck(this, CallbackDatasetModifier);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "callback", function (example) {
      return example;
    });
    return _this;
  }
  _createClass(CallbackDatasetModifier, [{
    key: "apply",
    value: function apply() {
      for (var exampleIndex = 0; exampleIndex < this.dataset.getNumberOfExamples(); exampleIndex += 1) {
        var _example = this.callback(this.dataset.exampleAt(exampleIndex));
        for (var row = 0; row < this.dataset.data.rows; row += 1) {
          if (_example) {
            this.dataset.data.data[row][exampleIndex] = _example.data[row][0];
          }
        }
      }
      return this.dataset;
    }
  }, {
    key: "setCallback",
    value: function setCallback(callback) {
      this.callback = callback;
      return this;
    }
  }]);
  return CallbackDatasetModifier;
}(_AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__.AbstractDatasetModifier);

/***/ }),

/***/ "./src/typescript/Dataset/DatasetModifier/MinMaxScaling.ts":
/*!*****************************************************************!*\
  !*** ./src/typescript/Dataset/DatasetModifier/MinMaxScaling.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MinMaxScalingDatasetModifier": () => (/* binding */ MinMaxScalingDatasetModifier)
/* harmony export */ });
/* harmony import */ var _AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDatasetModifier */ "./src/typescript/Dataset/DatasetModifier/AbstractDatasetModifier.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MinMaxScalingDatasetModifier = /*#__PURE__*/function (_AbstractDatasetModif) {
  _inherits(MinMaxScalingDatasetModifier, _AbstractDatasetModif);
  var _super = _createSuper(MinMaxScalingDatasetModifier);
  function MinMaxScalingDatasetModifier() {
    _classCallCheck(this, MinMaxScalingDatasetModifier);
    return _super.apply(this, arguments);
  }
  _createClass(MinMaxScalingDatasetModifier, [{
    key: "apply",
    value: function apply(dataset) {
      var min = Infinity;
      var max = -Infinity;
      for (var col = 0; col < dataset.getNumberOfExamples(); col += 1) {
        var example = dataset.exampleAt(col);
        for (var row = 0; row < example.rows; row += 1) {
          if (min > example.data[row][0]) {
            min = example.data[row][0];
          }
          if (max < example.data[row][0]) {
            max = example.data[row][0];
          }
        }
      }
      for (var _col = 0; _col < dataset.getNumberOfExamples(); _col += 1) {
        var _example = dataset.exampleAt(_col);
        for (var _row = 0; _row < _example.rows; _row += 1) {
          dataset.data.data[_row][_col] = (_example.data[_row][0] - min) / (max - min);
        }
      }
      return dataset;
    }
  }]);
  return MinMaxScalingDatasetModifier;
}(_AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__.AbstractDatasetModifier);

/***/ }),

/***/ "./src/typescript/Dataset/DatasetModifier/MissingData.ts":
/*!***************************************************************!*\
  !*** ./src/typescript/Dataset/DatasetModifier/MissingData.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MissingDataScalingDatasetModifier": () => (/* binding */ MissingDataScalingDatasetModifier)
/* harmony export */ });
/* harmony import */ var _AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDatasetModifier */ "./src/typescript/Dataset/DatasetModifier/AbstractDatasetModifier.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var MissingDataScalingDatasetModifier = /*#__PURE__*/function (_AbstractDatasetModif) {
  _inherits(MissingDataScalingDatasetModifier, _AbstractDatasetModif);
  var _super = _createSuper(MissingDataScalingDatasetModifier);
  function MissingDataScalingDatasetModifier() {
    var _this;
    _classCallCheck(this, MissingDataScalingDatasetModifier);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "modificationType", "mean");
    return _this;
  }
  _createClass(MissingDataScalingDatasetModifier, [{
    key: "apply",
    value: function apply(dataset) {
      var rowsToFill = [];
      var correctExamplesCount = 0;
      var sum = 0;
      var valueToFill = 0;
      for (var exampleIndex = 0; exampleIndex < dataset.getNumberOfExamples(); exampleIndex += 1) {
        var example = dataset.exampleAt(exampleIndex);
        for (var row = 0; row < dataset.getExampleSize(); row += 1) {
          if (isNaN(example.data[row][0]) || typeof example.data[row][0] === "undefined") {
            rowsToFill.push({
              row: row,
              col: example
            });
          } else {
            sum += example.data[row][0];
            correctExamplesCount++;
          }
        }
      }
      if (this.modificationType === "mean") {
        valueToFill = sum / correctExamplesCount;
      }
      rowsToFill.forEach(function (_ref) {
        var row = _ref.row,
          col = _ref.col;
        dataset.data.data[row][col] = valueToFill;
      });
      return dataset;
    }
  }, {
    key: "setModificationType",
    value: function setModificationType(type) {
      this.modificationType = type;
      return this;
    }
  }]);
  return MissingDataScalingDatasetModifier;
}(_AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__.AbstractDatasetModifier);

/***/ }),

/***/ "./src/typescript/Dataset/DatasetModifier/Shuffle.ts":
/*!***********************************************************!*\
  !*** ./src/typescript/Dataset/DatasetModifier/Shuffle.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShuffleDatasetModifier": () => (/* binding */ ShuffleDatasetModifier)
/* harmony export */ });
/* harmony import */ var _AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDatasetModifier */ "./src/typescript/Dataset/DatasetModifier/AbstractDatasetModifier.ts");
/* harmony import */ var _Dataset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Dataset */ "./src/typescript/Dataset/Dataset.ts");
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var ShuffleDatasetModifier = /*#__PURE__*/function (_AbstractDatasetModif) {
  _inherits(ShuffleDatasetModifier, _AbstractDatasetModif);
  var _super = _createSuper(ShuffleDatasetModifier);
  function ShuffleDatasetModifier(dataset) {
    var _this;
    _classCallCheck(this, ShuffleDatasetModifier);
    _this = _super.call(this, dataset);
    _defineProperty(_assertThisInitialized(_this), "sortList", []);
    return _this;
  }
  _createClass(ShuffleDatasetModifier, [{
    key: "apply",
    value: function apply(dataset) {
      var _this2 = this;
      var index = 0;
      var data = _Math_Matrix__WEBPACK_IMPORTED_MODULE_2__.Matrix.from(dataset.data.transpose().data.sort(function (exampleA, exampleB) {
        if (typeof _this2.sortList[index] === "undefined") {
          // first run
          _this2.sortList[index] = Math.random() - 0.5;
        }
        index += 1;
        return _this2.sortList[index - 1];
      })).transpose().data;
      return new _Dataset__WEBPACK_IMPORTED_MODULE_1__.Dataset(dataset.getExampleSize(), dataset.getNumberOfExamples(), data);
    }
  }]);
  return ShuffleDatasetModifier;
}(_AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__.AbstractDatasetModifier);

/***/ }),

/***/ "./src/typescript/Dataset/DatasetModifier/index.ts":
/*!*********************************************************!*\
  !*** ./src/typescript/Dataset/DatasetModifier/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallbackDatasetModifier": () => (/* reexport safe */ _Callback__WEBPACK_IMPORTED_MODULE_0__.CallbackDatasetModifier),
/* harmony export */   "MinMaxScalingDatasetModifier": () => (/* reexport safe */ _MinMaxScaling__WEBPACK_IMPORTED_MODULE_1__.MinMaxScalingDatasetModifier),
/* harmony export */   "MissingDataScalingDatasetModifier": () => (/* reexport safe */ _MissingData__WEBPACK_IMPORTED_MODULE_2__.MissingDataScalingDatasetModifier),
/* harmony export */   "ShuffleDatasetModifier": () => (/* reexport safe */ _Shuffle__WEBPACK_IMPORTED_MODULE_3__.ShuffleDatasetModifier)
/* harmony export */ });
/* harmony import */ var _Callback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Callback */ "./src/typescript/Dataset/DatasetModifier/Callback.ts");
/* harmony import */ var _MinMaxScaling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MinMaxScaling */ "./src/typescript/Dataset/DatasetModifier/MinMaxScaling.ts");
/* harmony import */ var _MissingData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MissingData */ "./src/typescript/Dataset/DatasetModifier/MissingData.ts");
/* harmony import */ var _Shuffle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shuffle */ "./src/typescript/Dataset/DatasetModifier/Shuffle.ts");






/***/ }),

/***/ "./src/typescript/Dataset/DatasetVocabulary.ts":
/*!*****************************************************!*\
  !*** ./src/typescript/Dataset/DatasetVocabulary.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetVocabulary": () => (/* binding */ DatasetVocabulary)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var DatasetVocabulary = /*#__PURE__*/function () {
  function DatasetVocabulary(str) {
    _classCallCheck(this, DatasetVocabulary);
    _defineProperty(this, "vocabularySize", 0);
    _defineProperty(this, "dataSize", 0);
    _defineProperty(this, "data", "");
    this.data = str.toLowerCase();
    var chars = _toConsumableArray(new Set(this.data.split("").sort()));
    this.chars = chars;
    this.dataSize = this.data.length;
    this.vocabularySize = chars.length;
  }
  _createClass(DatasetVocabulary, [{
    key: "getExamples",
    value: function getExamples() {
      return this.data.replace(/\n+/, "\n").split("\n").map(function (example) {
        return example + "\n";
      });
    }
  }, {
    key: "getVocabularySize",
    value: function getVocabularySize() {
      return this.vocabularySize;
    }
  }, {
    key: "getCharsLength",
    value: function getCharsLength() {
      return this.chars.length;
    }
  }, {
    key: "getCharIndices",
    value: function getCharIndices() {
      var result = {};
      this.chars.forEach(function (_char, i) {
        result[_char] = i;
      });
      return result;
    }
  }, {
    key: "buildData",
    value: function buildData() {
      var tx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 40;
      var stride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
      var X = [];
      var Y = [];
      for (var i = 0; i < this.data.length - tx; i += stride) {
        X.push(this.data.substr(i, tx));
        Y.push(this.data[i + tx]);
      }
      return [X, Y];
    }
  }, {
    key: "vectorization",
    value: function vectorization(X, Y) {
      var _this = this;
      var nx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 40;
      var m = X.length;
      var x = new Array(m);
      var chars = this.getCharIndices();
      var y = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m, this.chars.length).setZeros();
      var xIndex = 0;
      var rowIndex = 0;
      X.forEach(function (sentence, _m) {
        x[_m] = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(sentence.length, _this.chars.length).setZeros();
        sentence.split("").forEach(function (_char2, t) {
          x[_m].data[t][chars[_char2]] = 1;
          rowIndex++;
        });
        xIndex++;
        rowIndex = 0;
        y.data[_m][chars[Y[_m]]] = 1;
      });
      return [x, y];
    }
  }, {
    key: "getChars",
    value: function getChars() {
      return this.chars;
    }
  }, {
    key: "getExampleX",
    value: function getExampleX(exampleIndex) {
      var _this2 = this;
      var example = this.getExamples()[exampleIndex];
      var data = [];
      example.split("").forEach(function (ch, row) {
        data[row] = [_this2.getCharIndices()[ch]];
      });
      return _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix.from(data);
    }
  }, {
    key: "getExampleY",
    value: function getExampleY(exampleIndex) {
      var _this3 = this;
      var example = this.getExamples()[exampleIndex];
      var data = [];
      example.split("").forEach(function (ch, row) {
        data[row] = [_this3.getCharIndices()[ch]];
      });
      return _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix.from(data);
    }
  }]);
  return DatasetVocabulary;
}();

/***/ }),

/***/ "./src/typescript/Dataset/index.ts":
/*!*****************************************!*\
  !*** ./src/typescript/Dataset/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dataset": () => (/* reexport safe */ _Dataset__WEBPACK_IMPORTED_MODULE_0__.Dataset)
/* harmony export */ });
/* harmony import */ var _Dataset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dataset */ "./src/typescript/Dataset/Dataset.ts");



/***/ }),

/***/ "./src/typescript/DatasetBuilder/DatasetBuilder.ts":
/*!*********************************************************!*\
  !*** ./src/typescript/DatasetBuilder/DatasetBuilder.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetBuilder": () => (/* binding */ DatasetBuilder)
/* harmony export */ });
/* harmony import */ var _Dataset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Dataset */ "./src/typescript/Dataset/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var DatasetBuilder = /*#__PURE__*/function () {
  function DatasetBuilder() {
    _classCallCheck(this, DatasetBuilder);
  }
  _createClass(DatasetBuilder, null, [{
    key: "fromSource",
    value: function fromSource(sourcePromise) {
      return new Promise(function (resolve) {
        sourcePromise.then(function (source) {
          var matrix = source.parse();
          var numberOfExamples = matrix.cols;
          var exampleSize = matrix.rows;
          var dataset = new _Dataset__WEBPACK_IMPORTED_MODULE_0__.Dataset(exampleSize, numberOfExamples, matrix.data);
          resolve(dataset);
        });
      });
    }
  }]);
  return DatasetBuilder;
}();

/***/ }),

/***/ "./src/typescript/DatasetBuilder/DatasetBuilderSource/AbstractDatasetBuilderSource.ts":
/*!********************************************************************************************!*\
  !*** ./src/typescript/DatasetBuilder/DatasetBuilderSource/AbstractDatasetBuilderSource.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractDatasetBuilderSource": () => (/* binding */ AbstractDatasetBuilderSource)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var AbstractDatasetBuilderSource = /*#__PURE__*/_createClass(function AbstractDatasetBuilderSource() {
  _classCallCheck(this, AbstractDatasetBuilderSource);
});

/***/ }),

/***/ "./src/typescript/DatasetBuilder/DatasetBuilderSource/DatasetBuilderSourceCSV.ts":
/*!***************************************************************************************!*\
  !*** ./src/typescript/DatasetBuilder/DatasetBuilderSource/DatasetBuilderSourceCSV.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetBuilderSourceCSV": () => (/* binding */ DatasetBuilderSourceCSV)
/* harmony export */ });
/* harmony import */ var _AbstractDatasetBuilderSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDatasetBuilderSource */ "./src/typescript/DatasetBuilder/DatasetBuilderSource/AbstractDatasetBuilderSource.ts");
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
/* harmony import */ var csvtojson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! csvtojson */ "csvtojson");
/* harmony import */ var csvtojson__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(csvtojson__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var CSVState;
(function (CSVState) {
  CSVState[CSVState["UnquotedField"] = 0] = "UnquotedField";
  CSVState[CSVState["QuotedField"] = 1] = "QuotedField";
  CSVState[CSVState["QuotedQuote"] = 2] = "QuotedQuote";
})(CSVState || (CSVState = {}));
var DatasetBuilderSourceCSV = /*#__PURE__*/function (_AbstractDatasetBuild) {
  _inherits(DatasetBuilderSourceCSV, _AbstractDatasetBuild);
  var _super = _createSuper(DatasetBuilderSourceCSV);
  function DatasetBuilderSourceCSV(data) {
    var _this;
    _classCallCheck(this, DatasetBuilderSourceCSV);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "data", null);
    _defineProperty(_assertThisInitialized(_this), "matrixData", null);
    _this.data = data;
    return _this;
  }
  _createClass(DatasetBuilderSourceCSV, [{
    key: "parse",
    value: function parse() {
      /*this.matrixData = [];
       const lines = this.contentStr.trim().split(/\n+/);
      lines.forEach((line, i) => this.parseLine(line.trim(), i));
       return new Matrix(this.matrixData.length, this.matrixData[0].length, this.matrixData);*/

      var numberOfExamples = this.data.length;
      var exampleSize = this.data[0].length;
      return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(numberOfExamples, exampleSize, this.data).transpose();
    }
    /*
    protected parseLine(line: string, exampleIndexCol: number): void {
      let state = CSVState.UnquotedField;
      const fields = [];
      let i = 0;
       for (let j = 0; j < line.length; j += 1) {
        const c = line.at(j);
        switch (state) {
          case CSVState.UnquotedField:
            switch (c) {
              case ",": // end of field
                fields.push("");
                i++;
                break;
              case '"':
                state = CSVState.QuotedField;
                break;
              default:
                fields[i] += c;
                break;
            }
            break;
          case CSVState.QuotedField:
            switch (c) {
              case '"':
                state = CSVState.QuotedQuote;
                break;
              default:
                fields[i] += c;
                break;
            }
            break;
          case CSVState.QuotedQuote:
            switch (c) {
              case ",": // , after closing quote
                fields.push("");
                i++;
                state = CSVState.UnquotedField;
                break;
              case '"': // "" -> "
                fields[i] += '"';
                state = CSVState.QuotedField;
                break;
              default:
                // end of quote
                state = CSVState.UnquotedField;
                break;
            }
            break;
        }
         fields.forEach((value, row) => {
          if (value.length === 0) {
            value = NaN;
          }
          value = parseFloat(value);
          if (!this.matrixData[row]) {
            this.matrixData[row] = [];
          }
          this.matrixData[row][exampleIndexCol] = value;
        });
      }
    }*/
  }], [{
    key: "fromLocalFile",
    value: function fromLocalFile(path) {
      /*return new Promise((resolve, reject) => {
        fs.readFile(path, (err, buffer) => {
          console.log("first");
          if (err) {
            console.log(err);
            reject();
          } else {
            const instance = new DatasetBuilderSourceCSV(buffer.toString("utf-8"));
            resolve(instance);
          }
        });
      });*/
      return new Promise(function (resolve) {
        csvtojson__WEBPACK_IMPORTED_MODULE_2__({
          noheader: true,
          output: "csv"
        }).fromFile(path).then(function (arr) {
          resolve(new DatasetBuilderSourceCSV(arr));
        });
      });
    }
  }]);
  return DatasetBuilderSourceCSV;
}(_AbstractDatasetBuilderSource__WEBPACK_IMPORTED_MODULE_0__.AbstractDatasetBuilderSource);

/***/ }),

/***/ "./src/typescript/DatasetBuilder/DatasetBuilderSource/index.ts":
/*!*********************************************************************!*\
  !*** ./src/typescript/DatasetBuilder/DatasetBuilderSource/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetBuilderSourceCSV": () => (/* reexport safe */ _DatasetBuilderSourceCSV__WEBPACK_IMPORTED_MODULE_0__.DatasetBuilderSourceCSV)
/* harmony export */ });
/* harmony import */ var _DatasetBuilderSourceCSV__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatasetBuilderSourceCSV */ "./src/typescript/DatasetBuilder/DatasetBuilderSource/DatasetBuilderSourceCSV.ts");



/***/ }),

/***/ "./src/typescript/DatasetBuilder/DatasetVocabularyBuilder.ts":
/*!*******************************************************************!*\
  !*** ./src/typescript/DatasetBuilder/DatasetVocabularyBuilder.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetVocabularyBuilder": () => (/* binding */ DatasetVocabularyBuilder)
/* harmony export */ });
/* harmony import */ var _Dataset_DatasetVocabulary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Dataset/DatasetVocabulary */ "./src/typescript/Dataset/DatasetVocabulary.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var DatasetVocabularyBuilder = /*#__PURE__*/function () {
  function DatasetVocabularyBuilder() {
    _classCallCheck(this, DatasetVocabularyBuilder);
  }
  _createClass(DatasetVocabularyBuilder, null, [{
    key: "fromSource",
    value: function fromSource(sourcePromise) {
      return new Promise(function (resolve) {
        sourcePromise.then(function (source) {
          var str = source.parse();
          resolve(new _Dataset_DatasetVocabulary__WEBPACK_IMPORTED_MODULE_0__.DatasetVocabulary(str));
        });
      });
    }
  }]);
  return DatasetVocabularyBuilder;
}();

/***/ }),

/***/ "./src/typescript/DatasetBuilder/DatasetVocabularyBuilderSource/AbstractDatasetVocabularyBuilderSource.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/typescript/DatasetBuilder/DatasetVocabularyBuilderSource/AbstractDatasetVocabularyBuilderSource.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractDatasetVocabularyBuilderSource": () => (/* binding */ AbstractDatasetVocabularyBuilderSource)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var AbstractDatasetVocabularyBuilderSource = /*#__PURE__*/_createClass(function AbstractDatasetVocabularyBuilderSource() {
  _classCallCheck(this, AbstractDatasetVocabularyBuilderSource);
});

/***/ }),

/***/ "./src/typescript/DatasetBuilder/DatasetVocabularyBuilderSource/DatasetVocabularyBuilderSourceTextFile.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/typescript/DatasetBuilder/DatasetVocabularyBuilderSource/DatasetVocabularyBuilderSourceTextFile.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetVocabularyBuilderSourceTextFile": () => (/* binding */ DatasetVocabularyBuilderSourceTextFile)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AbstractDatasetVocabularyBuilderSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractDatasetVocabularyBuilderSource */ "./src/typescript/DatasetBuilder/DatasetVocabularyBuilderSource/AbstractDatasetVocabularyBuilderSource.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var DatasetVocabularyBuilderSourceTextFile = /*#__PURE__*/function (_AbstractDatasetVocab) {
  _inherits(DatasetVocabularyBuilderSourceTextFile, _AbstractDatasetVocab);
  var _super = _createSuper(DatasetVocabularyBuilderSourceTextFile);
  function DatasetVocabularyBuilderSourceTextFile(data) {
    var _this;
    _classCallCheck(this, DatasetVocabularyBuilderSourceTextFile);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "data", "");
    _this.data = data;
    return _this;
  }
  _createClass(DatasetVocabularyBuilderSourceTextFile, [{
    key: "parse",
    value: function parse() {
      return this.data;
    }
  }], [{
    key: "fromLocalFile",
    value: function fromLocalFile(path) {
      return new Promise(function (resolve, reject) {
        fs__WEBPACK_IMPORTED_MODULE_0__.readFile(path, function (err, buffer) {
          if (err) {
            reject(err);
            return;
          }
          resolve(new DatasetVocabularyBuilderSourceTextFile(buffer.toString("utf-8")));
        });
      });
    }
  }]);
  return DatasetVocabularyBuilderSourceTextFile;
}(_AbstractDatasetVocabularyBuilderSource__WEBPACK_IMPORTED_MODULE_1__.AbstractDatasetVocabularyBuilderSource);

/***/ }),

/***/ "./src/typescript/DatasetBuilder/DatasetVocabularyBuilderSource/index.ts":
/*!*******************************************************************************!*\
  !*** ./src/typescript/DatasetBuilder/DatasetVocabularyBuilderSource/index.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetVocabularyBuilderSourceTextFile": () => (/* reexport safe */ _DatasetVocabularyBuilderSourceTextFile__WEBPACK_IMPORTED_MODULE_0__.DatasetVocabularyBuilderSourceTextFile)
/* harmony export */ });
/* harmony import */ var _DatasetVocabularyBuilderSourceTextFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatasetVocabularyBuilderSourceTextFile */ "./src/typescript/DatasetBuilder/DatasetVocabularyBuilderSource/DatasetVocabularyBuilderSourceTextFile.ts");



/***/ }),

/***/ "./src/typescript/DatasetBuilder/index.ts":
/*!************************************************!*\
  !*** ./src/typescript/DatasetBuilder/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetBuilder": () => (/* reexport safe */ _DatasetBuilder__WEBPACK_IMPORTED_MODULE_0__.DatasetBuilder),
/* harmony export */   "DatasetVocabularyBuilder": () => (/* reexport safe */ _DatasetVocabularyBuilder__WEBPACK_IMPORTED_MODULE_1__.DatasetVocabularyBuilder)
/* harmony export */ });
/* harmony import */ var _DatasetBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatasetBuilder */ "./src/typescript/DatasetBuilder/DatasetBuilder.ts");
/* harmony import */ var _DatasetVocabularyBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DatasetVocabularyBuilder */ "./src/typescript/DatasetBuilder/DatasetVocabularyBuilder.ts");




/***/ }),

/***/ "./src/typescript/Layer/AbstractLayer.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Layer/AbstractLayer.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractLayer": () => (/* binding */ AbstractLayer)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AbstractLayer = /*#__PURE__*/function () {
  function AbstractLayer() {
    _classCallCheck(this, AbstractLayer);
    _defineProperty(this, "width", 0);
    _defineProperty(this, "height", 0);
    _defineProperty(this, "depth", 0);
    _defineProperty(this, "previousLayer", null);
    _defineProperty(this, "backPropagation", null);
  }
  _createClass(AbstractLayer, [{
    key: "setBackPropagation",
    value: function setBackPropagation(backPropagation) {
      this.backPropagation = backPropagation;
      return this;
    }
  }, {
    key: "getBackPropagation",
    value: function getBackPropagation() {
      return this.backPropagation;
    }
  }, {
    key: "setWidth",
    value: function setWidth(value) {
      this.width = value;
      return this;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.width;
    }
  }, {
    key: "setHeight",
    value: function setHeight(value) {
      this.height = value;
      return this;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.height;
    }
  }, {
    key: "setDepth",
    value: function setDepth(value) {
      this.depth = value;
      return this;
    }
  }, {
    key: "getDepth",
    value: function getDepth() {
      return this.depth;
    }
  }, {
    key: "transition",
    value: function transition(previousLayer) {
      this.previousLayer = previousLayer;
      return this;
    }
  }]);
  return AbstractLayer;
}();


/***/ }),

/***/ "./src/typescript/Layer/AbstractLayer1D.ts":
/*!*************************************************!*\
  !*** ./src/typescript/Layer/AbstractLayer1D.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractLayer1D": () => (/* binding */ AbstractLayer1D)
/* harmony export */ });
/* harmony import */ var _AbstractLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractLayer */ "./src/typescript/Layer/AbstractLayer.ts");
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var AbstractLayer1D = /*#__PURE__*/function (_AbstractLayer) {
  _inherits(AbstractLayer1D, _AbstractLayer);
  var _super = _createSuper(AbstractLayer1D);
  function AbstractLayer1D() {
    var _this;
    _classCallCheck(this, AbstractLayer1D);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "depth", 1);
    _this.W = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.b = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.A = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.Z = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.gW = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.gb = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.vW = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.vb = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.sW = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.sb = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.dW = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.db = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    return _this;
  }
  _createClass(AbstractLayer1D, [{
    key: "configure",
    value: function configure() {
      this.W.resize(this.getHeight(), this.getWidth());
      this.W = this.W.setRandom(this.previousLayer ? this.previousLayer.getHeight() : this.getHeight());
      this.b.resize(this.getHeight(), 1);
      this.b = this.b.setRandom(this.previousLayer ? this.previousLayer.getHeight() : this.getHeight());
      this.gW.resize(this.getHeight(), this.getWidth());
      this.gW = this.W.setZeros();
      this.gb.resize(this.getHeight(), 1);
      this.gb = this.gb.setZeros();
      this.sW.resize(this.getHeight(), this.getWidth());
      this.sW = this.sW.setZeros();
      this.sb.resize(this.getHeight(), 1);
      this.sb = this.sb.setZeros();
      this.vW.resize(this.getHeight(), this.getWidth());
      this.vW = this.vW.setZeros();
      this.vb.resize(this.getHeight(), 1);
      this.vb = this.vb.setZeros();
      this.dW.resize(this.getHeight(), this.getWidth());
      this.dW = this.dW.setZeros();
      this.db.resize(this.getHeight(), 1);
      this.db = this.db.setZeros();
    }
  }, {
    key: "forward",
    value: function forward(input) {
      this.Z = this.W.dot(input).add(this.b.replicate(1, input.cols));
      this.A = this.activation(this.Z);
      return this.A;
    }
  }, {
    key: "is1D",
    value: function is1D() {
      return true;
    }
  }, {
    key: "is3D",
    value: function is3D() {
      return false;
    }
  }, {
    key: "transition",
    value: function transition(previousLayer) {
      if (previousLayer.is1D()) {
        this.setWidth(previousLayer.getSize());
      } else if (previousLayer.is3D()) {
        this.setWidth(previousLayer.getOutputWidth() * previousLayer.getOutputHeight() * previousLayer.getOutputDepth());
      }
      _get(_getPrototypeOf(AbstractLayer1D.prototype), "transition", this).call(this, previousLayer);
      return this;
    }
  }, {
    key: "setSize",
    value: function setSize(value) {
      this.setHeight(value);
      return this;
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return this.height;
    }
  }, {
    key: "getOutputWidth",
    value: function getOutputWidth() {
      return this.width;
    }
  }, {
    key: "getOutputHeight",
    value: function getOutputHeight() {
      return this.height;
    }
  }, {
    key: "getOutputDepth",
    value: function getOutputDepth() {
      return 1;
    }
  }, {
    key: "penalty",
    value: function penalty() {
      return this.W.pow(2).sum();
    }
  }]);
  return AbstractLayer1D;
}(_AbstractLayer__WEBPACK_IMPORTED_MODULE_0__.AbstractLayer);


/***/ }),

/***/ "./src/typescript/Layer/AbstractLayer3D.ts":
/*!*************************************************!*\
  !*** ./src/typescript/Layer/AbstractLayer3D.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractLayer3D": () => (/* binding */ AbstractLayer3D)
/* harmony export */ });
/* harmony import */ var _AbstractLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractLayer */ "./src/typescript/Layer/AbstractLayer.ts");
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var AbstractLayer3D = /*#__PURE__*/function (_AbstractLayer) {
  _inherits(AbstractLayer3D, _AbstractLayer);
  var _super = _createSuper(AbstractLayer3D);
  function AbstractLayer3D() {
    var _this;
    _classCallCheck(this, AbstractLayer3D);
    _this = _super.call(this);
    _this.W = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.b = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.A = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.Z = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.gW = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.gb = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.vW = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.vb = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.sW = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.sb = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.dW = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.db = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    return _this;
  }
  _createClass(AbstractLayer3D, [{
    key: "configure",
    value: function configure() {
      // do nothing
    }
  }, {
    key: "is1D",
    value: function is1D() {
      return false;
    }
  }, {
    key: "is3D",
    value: function is3D() {
      return true;
    }
  }, {
    key: "transition",
    value: function transition(previousLayer) {
      if (previousLayer.is3D()) {
        this.setSize([previousLayer.getOutputWidth(), previousLayer.getOutputHeight(), previousLayer.getOutputDepth()]);
      }
      _get(_getPrototypeOf(AbstractLayer3D.prototype), "transition", this).call(this, previousLayer);
      return this;
    }
  }, {
    key: "setSize",
    value: function setSize(dimension) {
      this.setWidth(dimension[0]);
      this.setHeight(dimension[1]);
      this.setDepth(dimension[2]);
      return this;
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return [this.getWidth(), this.getHeight(), this.getDepth()];
    }
  }, {
    key: "penalty",
    value: function penalty() {
      return this.W.pow(2).sum();
    }
  }]);
  return AbstractLayer3D;
}(_AbstractLayer__WEBPACK_IMPORTED_MODULE_0__.AbstractLayer);


/***/ }),

/***/ "./src/typescript/Layer/Backpropagation/AbstractBackpropagation.ts":
/*!*************************************************************************!*\
  !*** ./src/typescript/Layer/Backpropagation/AbstractBackpropagation.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractBackPropagation": () => (/* binding */ AbstractBackPropagation)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AbstractBackPropagation = /*#__PURE__*/_createClass(function AbstractBackPropagation(layer, previousLayer) {
  _classCallCheck(this, AbstractBackPropagation);
  _defineProperty(this, "layer", null);
  _defineProperty(this, "previousLayer", null);
  this.layer = layer;
  this.previousLayer = previousLayer;
});

/***/ }),

/***/ "./src/typescript/Layer/Backpropagation/Backpropagation1Dto1D.ts":
/*!***********************************************************************!*\
  !*** ./src/typescript/Layer/Backpropagation/Backpropagation1Dto1D.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Backpropagation1Dto1D": () => (/* binding */ Backpropagation1Dto1D)
/* harmony export */ });
/* harmony import */ var _AbstractBackpropagation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractBackpropagation */ "./src/typescript/Layer/Backpropagation/AbstractBackpropagation.ts");
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Backpropagation1Dto1D = /*#__PURE__*/function (_AbstractBackPropagat) {
  _inherits(Backpropagation1Dto1D, _AbstractBackPropagat);
  var _super = _createSuper(Backpropagation1Dto1D);
  function Backpropagation1Dto1D() {
    _classCallCheck(this, Backpropagation1Dto1D);
    return _super.apply(this, arguments);
  }
  _createClass(Backpropagation1Dto1D, [{
    key: "propagate",
    value: function propagate(input, numberOfExamples, regularization, layer, sigma) {
      var previousActivations = this.previousLayer !== null ? this.previousLayer.A : input;
      var delta = sigma.dot(previousActivations.transpose());
      this.layer.gW = delta.divide(numberOfExamples).add(layer.W.multiply(regularization / numberOfExamples));
      this.layer.gb = sigma.rowwiseSum().transpose().divide(numberOfExamples);
      if (this.previousLayer !== null) {
        // @ts-ignore
        var result = this.layer.W.transpose().dot(sigma);
        if (result.rows !== previousActivations.rows || result.cols !== previousActivations.cols) {
          throw new Error("Dimension error 1. (".concat(result.rows, ", ").concat(result.cols, ") | (").concat(previousActivations.rows, ", ").concat(previousActivations.cols, ")"));
        }
        if (this.layer.gW.rows !== this.layer.W.rows || this.layer.gW.cols !== this.layer.W.cols) {
          throw new Error("Dimension error 2. (".concat(this.layer.gW.rows, ", ").concat(this.layer.gW.cols, ") | (").concat(this.layer.W.rows, ", ").concat(this.layer.W.cols, ")"));
        }
        if (this.layer.gb.rows !== this.layer.b.rows || this.layer.gb.cols !== this.layer.b.cols) {
          throw new Error("Dimension error 3. (".concat(this.layer.gb.rows, ", ").concat(this.layer.gb.cols, ") | (").concat(this.layer.b.rows, ", ").concat(this.layer.b.cols, ")"));
        }
        return result;
      }
      return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    }
  }]);
  return Backpropagation1Dto1D;
}(_AbstractBackpropagation__WEBPACK_IMPORTED_MODULE_0__.AbstractBackPropagation);

/***/ }),

/***/ "./src/typescript/Layer/Backpropagation/Backpropagation3Dto1D.ts":
/*!***********************************************************************!*\
  !*** ./src/typescript/Layer/Backpropagation/Backpropagation3Dto1D.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Backpropagation3Dto1D": () => (/* binding */ Backpropagation3Dto1D)
/* harmony export */ });
/* harmony import */ var _AbstractBackpropagation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractBackpropagation */ "./src/typescript/Layer/Backpropagation/AbstractBackpropagation.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Backpropagation3Dto1D = /*#__PURE__*/function (_AbstractBackPropagat) {
  _inherits(Backpropagation3Dto1D, _AbstractBackPropagat);
  var _super = _createSuper(Backpropagation3Dto1D);
  function Backpropagation3Dto1D() {
    _classCallCheck(this, Backpropagation3Dto1D);
    return _super.apply(this, arguments);
  }
  _createClass(Backpropagation3Dto1D, [{
    key: "propagate",
    value: function propagate(input, numberOfExamples, regularization, layer, sigma) {
      return sigma;
    }
  }]);
  return Backpropagation3Dto1D;
}(_AbstractBackpropagation__WEBPACK_IMPORTED_MODULE_0__.AbstractBackPropagation);

/***/ }),

/***/ "./src/typescript/Layer/Backpropagation/BackpropagationFactory.ts":
/*!************************************************************************!*\
  !*** ./src/typescript/Layer/Backpropagation/BackpropagationFactory.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackpropagationFactory": () => (/* binding */ BackpropagationFactory)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./src/typescript/types.ts");
/* harmony import */ var _Backpropagation1Dto1D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Backpropagation1Dto1D */ "./src/typescript/Layer/Backpropagation/Backpropagation1Dto1D.ts");
/* harmony import */ var _Backpropagation3Dto1D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Backpropagation3Dto1D */ "./src/typescript/Layer/Backpropagation/Backpropagation3Dto1D.ts");
/* harmony import */ var _BackpropagationToMaxPool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BackpropagationToMaxPool */ "./src/typescript/Layer/Backpropagation/BackpropagationToMaxPool.ts");
/* harmony import */ var _BackpropagationToConv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BackpropagationToConv */ "./src/typescript/Layer/Backpropagation/BackpropagationToConv.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var BackpropagationFactory = /*#__PURE__*/function () {
  function BackpropagationFactory() {
    _classCallCheck(this, BackpropagationFactory);
  }
  _createClass(BackpropagationFactory, null, [{
    key: "create",
    value: function create(previousLayer, layer) {
      if (previousLayer == null) {
        if (layer.is1D()) {
          return new _Backpropagation1Dto1D__WEBPACK_IMPORTED_MODULE_1__.Backpropagation1Dto1D(layer, previousLayer);
        } else if (layer.getType() == _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.conv) {
          return new _Backpropagation3Dto1D__WEBPACK_IMPORTED_MODULE_2__.Backpropagation3Dto1D(layer, previousLayer);
        }
      } else {
        if (previousLayer.getType() == _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.maxpool) {
          return new _BackpropagationToMaxPool__WEBPACK_IMPORTED_MODULE_3__.BackpropagationToMaxPool(layer, previousLayer);
        } else if (previousLayer.getType() == _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.conv) {
          return new _BackpropagationToConv__WEBPACK_IMPORTED_MODULE_4__.BackpropagationToConv(layer, previousLayer);
        } else if (previousLayer.is1D() || previousLayer.getType() == _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.fullyconnected) {
          return new _Backpropagation1Dto1D__WEBPACK_IMPORTED_MODULE_1__.Backpropagation1Dto1D(layer, previousLayer);
        }
      }
      return null;
    }
  }]);
  return BackpropagationFactory;
}();

/***/ }),

/***/ "./src/typescript/Layer/Backpropagation/BackpropagationToConv.ts":
/*!***********************************************************************!*\
  !*** ./src/typescript/Layer/Backpropagation/BackpropagationToConv.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackpropagationToConv": () => (/* binding */ BackpropagationToConv)
/* harmony export */ });
/* harmony import */ var _AbstractBackpropagation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractBackpropagation */ "./src/typescript/Layer/Backpropagation/AbstractBackpropagation.ts");
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
/* harmony import */ var _Computation_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Computation/utils */ "./src/typescript/Computation/utils.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var BackpropagationToConv = /*#__PURE__*/function (_AbstractBackPropagat) {
  _inherits(BackpropagationToConv, _AbstractBackPropagat);
  var _super = _createSuper(BackpropagationToConv);
  function BackpropagationToConv() {
    var _this;
    _classCallCheck(this, BackpropagationToConv);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "previousLayer", null);
    return _this;
  }
  _createClass(BackpropagationToConv, [{
    key: "propagate",
    value: function propagate(input, numberOfExamples, regularization, layer, sigma) {
      var previousLayer = this.previousLayer;
      if (previousLayer) {
        var padding = previousLayer.getPadding();
        var stride = previousLayer.getStride();
        var filterSize = previousLayer.getFilterSize();
        var outputWidth = previousLayer.getOutputWidth();
        var outputHeight = previousLayer.getOutputHeight();
        var outputDepth = previousLayer.getOutputDepth();
        var inputWidth = previousLayer.getWidth();
        var inputHeight = previousLayer.getHeight();
        var inputDepth = previousLayer.getDepth();
        var tmpResult = (0,_Computation_utils__WEBPACK_IMPORTED_MODULE_2__.getComputation)().execute("fillZeros", new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix((inputWidth + 2 * padding) * (inputHeight + 2 * padding) * inputDepth, numberOfExamples));
        var result = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(inputWidth * inputHeight * inputDepth, numberOfExamples);
        previousLayer.gW = (0,_Computation_utils__WEBPACK_IMPORTED_MODULE_2__.getComputation)().execute("fillZeros", previousLayer.gW);
        previousLayer.gb = (0,_Computation_utils__WEBPACK_IMPORTED_MODULE_2__.getComputation)().execute("fillZeros", previousLayer.gb);
        for (var m = 0; m < numberOfExamples; m++) {
          for (var c = 0; c < outputDepth; c++) {
            for (var h = 0; h < outputHeight; h++) {
              for (var w = 0; w < outputWidth; w++) {
                var vertStart = stride * h;
                var vertEnd = vertStart + filterSize;
                var horizStart = stride * w;
                var horizEnd = horizStart + filterSize;

                // filter loop
                for (var d = 0; d < inputDepth; d++) {
                  for (var y = 0, vertical = vertStart, verticalPad = -padding; y < filterSize; y++, vertical++, verticalPad++) {
                    for (var x = 0, horizontal = horizStart, horizontalPad = -padding; x < filterSize; x++, horizontal++, horizontalPad++) {
                      if (previousLayer.W.data && tmpResult.data && sigma.data) {
                        tmpResult.data[d * (inputWidth + 2 * padding) * (inputHeight + 2 * padding) + vertical * (inputWidth + 2 * padding) + horizontal][m] += previousLayer.W.data[c][d * filterSize * filterSize + y * filterSize + x] * sigma.data[c * outputWidth * outputHeight + h * outputWidth + w][m];
                      }
                      var z = 0;
                      if (padding == 0) {
                        if (previousLayer.Z.data) {
                          z = previousLayer.Z.data[d * inputWidth * inputHeight + vertical * inputWidth + horizontal][m];
                        }
                      } else {
                        if (verticalPad >= 0 && horizontalPad >= 0 && verticalPad < inputHeight && horizontalPad < inputWidth) {
                          if (previousLayer.Z.data) {
                            z = previousLayer.Z.data[d * inputWidth * inputHeight + verticalPad * inputWidth + horizontalPad][m];
                          }
                        }
                      }
                      if (previousLayer.gW.data && sigma.data) {
                        previousLayer.gW.data[c][d * filterSize * filterSize + y * filterSize + x] += z * sigma.data[c * (outputWidth * outputHeight) + h * outputWidth + w][m] / numberOfExamples;
                      }
                    }
                  }
                }
                if (previousLayer.gb.data && sigma.data) {
                  previousLayer.gb.data[c][0] += sigma.data[c * (outputWidth * outputHeight) + h * outputWidth + w][m] / numberOfExamples;
                }
              }
            }
          }
          if (padding > 0) {
            // unpad
            for (var _c = 0; _c < inputDepth; _c++) {
              for (var _h = -padding, _y = 0; _h < inputHeight + padding; _h++, _y++) {
                for (var _w = -padding, _x = 0; _w < inputWidth + padding; _w++, _x++) {
                  if (_w >= 0 && _h >= 0 && _w < inputWidth && _h < inputHeight && result.data && tmpResult.data) {
                    result.data[_c * inputWidth * inputHeight + _h * inputWidth + _w][m] = tmpResult.data[_c * (inputWidth + 2 * padding) * (inputHeight + 2 * padding) + _y * (inputWidth + 2 * padding) + _x][m];
                  }
                }
              }
            }
          }
        }
        if (padding > 0) {
          return result;
        }
        return tmpResult;
      }
    }
  }]);
  return BackpropagationToConv;
}(_AbstractBackpropagation__WEBPACK_IMPORTED_MODULE_0__.AbstractBackPropagation);

/***/ }),

/***/ "./src/typescript/Layer/Backpropagation/BackpropagationToMaxPool.ts":
/*!**************************************************************************!*\
  !*** ./src/typescript/Layer/Backpropagation/BackpropagationToMaxPool.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackpropagationToMaxPool": () => (/* binding */ BackpropagationToMaxPool)
/* harmony export */ });
/* harmony import */ var _AbstractBackpropagation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractBackpropagation */ "./src/typescript/Layer/Backpropagation/AbstractBackpropagation.ts");
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
/* harmony import */ var _Computation_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Computation/utils */ "./src/typescript/Computation/utils.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var BackpropagationToMaxPool = /*#__PURE__*/function (_AbstractBackPropagat) {
  _inherits(BackpropagationToMaxPool, _AbstractBackPropagat);
  var _super = _createSuper(BackpropagationToMaxPool);
  function BackpropagationToMaxPool() {
    var _this;
    _classCallCheck(this, BackpropagationToMaxPool);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "previousLayer", null);
    return _this;
  }
  _createClass(BackpropagationToMaxPool, [{
    key: "propagate",
    value: function propagate(input, numberOfExamples, regularization, layer, sigma) {
      var prevLayer = this.previousLayer;
      if (prevLayer) {
        var result = (0,_Computation_utils__WEBPACK_IMPORTED_MODULE_2__.getComputation)().execute("fillZeros", new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(prevLayer.Z.rows, prevLayer.Z.cols));
        var filterSize = prevLayer.getFilterSize();
        var stride = prevLayer.getStride();
        var inputWidth = prevLayer.getWidth();
        var inputHeight = prevLayer.getHeight();
        var inputDepth = prevLayer.getDepth();
        var outputWidth = prevLayer.getOutputWidth();
        var outputHeight = prevLayer.getOutputHeight();
        var outputDepth = prevLayer.getOutputDepth();
        for (var m = 0; m < numberOfExamples; m++) {
          for (var c = 0; c < outputDepth; c++) {
            for (var h = 0; h < outputHeight; h++) {
              for (var w = 0; w < outputWidth; w++) {
                var vertStart = stride * h;
                var vertEnd = vertStart + filterSize;
                var horizStart = stride * w;
                var horizEnd = horizStart + filterSize;
                var _max = -Infinity;
                var inputOffset = inputHeight * inputWidth * c;
                var outputOffset = outputHeight * outputWidth * c;
                var maxX = 0;
                var maxY = 0;
                for (var y = 0, vStart = vertStart; y < filterSize; y++, vStart++) {
                  for (var x = 0, hStart = horizStart; x < filterSize; x++, hStart++) {
                    if (prevLayer.Z.data && _max < prevLayer.Z.data[inputOffset + vStart * inputWidth + hStart][m]) {
                      _max = prevLayer.Z.data[inputOffset + vStart * inputWidth + hStart][m];
                      maxX = hStart;
                      maxY = vStart;
                    }
                  }
                }
                if (result.data && sigma.data) {
                  result.data[inputOffset + maxY * inputWidth + maxX][m] = sigma.data[outputOffset + h * outputWidth + w][m];
                }
              }
            }
          }
        }
        return result;
      }
      return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    }
  }]);
  return BackpropagationToMaxPool;
}(_AbstractBackpropagation__WEBPACK_IMPORTED_MODULE_0__.AbstractBackPropagation);

/***/ }),

/***/ "./src/typescript/Layer/Conv.ts":
/*!**************************************!*\
  !*** ./src/typescript/Layer/Conv.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConvLayer": () => (/* binding */ ConvLayer)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
/* harmony import */ var _Math_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Math/math */ "./src/typescript/Math/math.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./src/typescript/types.ts");
/* harmony import */ var _AbstractLayer3D__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AbstractLayer3D */ "./src/typescript/Layer/AbstractLayer3D.ts");
/* harmony import */ var _Computation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Computation */ "./src/typescript/Computation/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var ConvLayer = /*#__PURE__*/function (_AbstractLayer3D) {
  _inherits(ConvLayer, _AbstractLayer3D);
  var _super = _createSuper(ConvLayer);
  function ConvLayer() {
    var _this;
    _classCallCheck(this, ConvLayer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "numFilters", 32);
    _defineProperty(_assertThisInitialized(_this), "filterSize", 4);
    _defineProperty(_assertThisInitialized(_this), "padding", 1);
    _defineProperty(_assertThisInitialized(_this), "stride", 1);
    return _this;
  }
  _createClass(ConvLayer, [{
    key: "configure",
    value: function configure() {
      this.W.resize(this.numFilters, this.filterSize * this.filterSize * this.depth);
      this.W = this.W.setRandom(this.getOutputWidth() * this.getOutputHeight() * this.getOutputDepth());
      this.b.resize(this.numFilters, 1);
      this.b = this.b.setRandom(this.getOutputWidth() * this.getOutputHeight() * this.getOutputDepth());
      this.gW.resize(this.numFilters, this.filterSize * this.filterSize * this.depth);
      this.gW = this.gW.setZeros();
      this.gb.resize(this.numFilters, 1);
      this.gb = this.gb.setZeros();
      this.sW.resize(this.numFilters, this.filterSize * this.filterSize * this.depth);
      this.sW = this.sW.setZeros();
      this.sb.resize(this.numFilters, 1);
      this.sb = this.sb.setZeros();
      this.vW.resize(this.numFilters, this.filterSize * this.filterSize * this.depth);
      this.vW = this.vW.setZeros();
      this.vb.resize(this.numFilters, 1);
      this.vb = this.vb.setZeros();
    }
  }, {
    key: "getOutputHeight",
    value: function getOutputHeight() {
      return (this.width - this.filterSize + 2 * this.padding) / this.stride + 1;
    }
  }, {
    key: "getOutputWidth",
    value: function getOutputWidth() {
      return (this.height - this.filterSize + 2 * this.padding) / this.stride + 1;
    }
  }, {
    key: "getOutputDepth",
    value: function getOutputDepth() {
      return this.numFilters;
    }
  }, {
    key: "setFilterSize",
    value: function setFilterSize(size) {
      this.filterSize = size;
      return this;
    }
  }, {
    key: "getFilterSize",
    value: function getFilterSize() {
      return this.filterSize;
    }
  }, {
    key: "setNumFilters",
    value: function setNumFilters(numFilters) {
      this.numFilters = numFilters;
      return this;
    }
  }, {
    key: "getNumFilters",
    value: function getNumFilters() {
      return this.numFilters;
    }
  }, {
    key: "setPadding",
    value: function setPadding(padding) {
      this.padding = padding;
      return this;
    }
  }, {
    key: "getPadding",
    value: function getPadding() {
      return this.padding;
    }
  }, {
    key: "setStride",
    value: function setStride(stride) {
      this.stride = stride;
      return this;
    }
  }, {
    key: "getStride",
    value: function getStride() {
      return this.stride;
    }
  }, {
    key: "forward",
    value: function forward(input) {
      var result = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getOutputWidth() * this.getOutputHeight() * this.getOutputDepth(), input.cols).setZeros();
      for (var i = 0; i < input.cols; i += 1) {
        var conv = (0,_Math_math__WEBPACK_IMPORTED_MODULE_1__.im2col)(input.col(i), this.depth, this.height, this.width, this.filterSize, this.filterSize, this.padding, this.padding, this.stride, this.stride);
        var tmp = this.W.dot(conv.transpose()).add(this.b.replicate(1, conv.rows));
        result.setCol(i, tmp.rollToColMatrix());
      }
      this.Z = result;
      this.A = this.activation(this.Z);
      return this.A;
    }
  }, {
    key: "activation",
    value: function activation(m) {
      return m.setMin(0);
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_2__.LayerType.conv;
    }
  }, {
    key: "derivative",
    value: function derivative(delta) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_4__.getComputation)().execute("reluBackpropagation", delta, this.A);
    }
  }]);
  return ConvLayer;
}(_AbstractLayer3D__WEBPACK_IMPORTED_MODULE_3__.AbstractLayer3D);

/***/ }),

/***/ "./src/typescript/Layer/FullyConnected.ts":
/*!************************************************!*\
  !*** ./src/typescript/Layer/FullyConnected.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullyConnectedLayer": () => (/* binding */ FullyConnectedLayer)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/typescript/types.ts");
/* harmony import */ var _Conv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Conv */ "./src/typescript/Layer/Conv.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var FullyConnectedLayer = /*#__PURE__*/function (_ConvLayer) {
  _inherits(FullyConnectedLayer, _ConvLayer);
  var _super = _createSuper(FullyConnectedLayer);
  function FullyConnectedLayer() {
    _classCallCheck(this, FullyConnectedLayer);
    return _super.apply(this, arguments);
  }
  _createClass(FullyConnectedLayer, [{
    key: "transition",
    value: function transition(previousLayer) {
      if (previousLayer.is3D()) {
        if (previousLayer.getType() == _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.maxpool) {
          this.filterSize = previousLayer.getOutputWidth();
          this.padding = 0;
          this.stride = 1;
          this.width = previousLayer.getOutputWidth();
          this.height = previousLayer.getOutputHeight();
          this.depth = previousLayer.getOutputDepth();
          this.numFilters = previousLayer.getOutputWidth() * previousLayer.getOutputHeight() * previousLayer.getOutputDepth();
        } else {
          throw new Error("Invalid usage. Cannot fully connect with previous non maxpool Layer.");
        }
      } else {
        throw new Error("Invalid usage. Cannot fully connect with previous 1D Layer.");
      }
      return this;
    }
  }, {
    key: "setSize",
    value: function setSize(dimension) {
      return this;
    }
  }, {
    key: "setFilterSize",
    value: function setFilterSize(filterSize) {
      return this;
    }
  }, {
    key: "setStride",
    value: function setStride(stride) {
      return this;
    }
  }, {
    key: "setPadding",
    value: function setPadding(padding) {
      return this;
    }
  }, {
    key: "setWidth",
    value: function setWidth(value) {
      return this;
    }
  }, {
    key: "setHeight",
    value: function setHeight(value) {
      return this;
    }
  }, {
    key: "setDepth",
    value: function setDepth(value) {
      return this;
    }
  }, {
    key: "setNumFilters",
    value: function setNumFilters(value) {
      return this;
    }
  }]);
  return FullyConnectedLayer;
}(_Conv__WEBPACK_IMPORTED_MODULE_1__.ConvLayer);


/***/ }),

/***/ "./src/typescript/Layer/LSTM.ts":
/*!**************************************!*\
  !*** ./src/typescript/Layer/LSTM.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LSTMLayer": () => (/* binding */ LSTMLayer)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/typescript/types.ts");
/* harmony import */ var _AbstractLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AbstractLayer */ "./src/typescript/Layer/AbstractLayer.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var LSTMLayer = /*#__PURE__*/function (_AbstractLayer) {
  _inherits(LSTMLayer, _AbstractLayer);
  var _super = _createSuper(LSTMLayer);
  function LSTMLayer() {
    var _this;
    _classCallCheck(this, LSTMLayer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "Wf", null);
    _defineProperty(_assertThisInitialized(_this), "bf", null);
    _defineProperty(_assertThisInitialized(_this), "Wi", null);
    _defineProperty(_assertThisInitialized(_this), "bi", null);
    _defineProperty(_assertThisInitialized(_this), "Wc", null);
    _defineProperty(_assertThisInitialized(_this), "bc", null);
    _defineProperty(_assertThisInitialized(_this), "Wo", null);
    _defineProperty(_assertThisInitialized(_this), "bo", null);
    _defineProperty(_assertThisInitialized(_this), "Wy", null);
    _defineProperty(_assertThisInitialized(_this), "by", null);
    _defineProperty(_assertThisInitialized(_this), "dxt", null);
    _defineProperty(_assertThisInitialized(_this), "dWf", null);
    _defineProperty(_assertThisInitialized(_this), "dWi", null);
    _defineProperty(_assertThisInitialized(_this), "dWc", null);
    _defineProperty(_assertThisInitialized(_this), "dWo", null);
    _defineProperty(_assertThisInitialized(_this), "dbf", null);
    _defineProperty(_assertThisInitialized(_this), "dbi", null);
    _defineProperty(_assertThisInitialized(_this), "dbc", null);
    _defineProperty(_assertThisInitialized(_this), "dbo", null);
    return _this;
  }
  _createClass(LSTMLayer, [{
    key: "configure",
    value: function configure() {}
  }, {
    key: "forward",
    value: function forward(input, aPrev, cPrev) {
      var nx = input.rows;
      var m = input.cols;
      var ny = this.Wy.rows;
      var na = this.Wy.cols;
      var concat = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(nx + na, m);
      var ft = this.Wf.dot(concat).add(this.bf).sigmoid();
      var it = this.Wi.dot(concat).add(this.bi).sigmoid();
      var cct = this.Wc.dot(concat).add(this.bc).tanh();
      var cNext = ft.multiply(cPrev).add(it.multiply(cct));
      var ot = this.Wo.dot(concat).add(this.bo).sigmoid();
      var aNext = ot.multiply(cNext.tanh());
      var ytPred = this.Wy.dot(aNext).add(this.by).softmax();
      return [aNext, cPrev];
    }
  }, {
    key: "backward",
    value: function backward(daNext, dcNext) {}
  }, {
    key: "activation",
    value: function activation(m) {
      return m;
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_1__.LayerType.rnnlayer;
    }
  }, {
    key: "derivative",
    value: function derivative(delta) {
      return delta;
    }
  }, {
    key: "is1D",
    value: function is1D() {
      return true;
    }
  }, {
    key: "is3D",
    value: function is3D() {
      return false;
    }
  }, {
    key: "setSize",
    value: function setSize(value) {
      this.setWidth(value[0]);
      this.setHeight(value[1]);
      this.setDepth(value[2]);
      return this;
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return this.height;
    }
  }, {
    key: "getOutputWidth",
    value: function getOutputWidth() {
      return this.width;
    }
  }, {
    key: "getOutputHeight",
    value: function getOutputHeight() {
      return this.height;
    }
  }, {
    key: "getOutputDepth",
    value: function getOutputDepth() {
      return this.depth;
    }
  }, {
    key: "penalty",
    value: function penalty() {
      return 0;
    }
  }]);
  return LSTMLayer;
}(_AbstractLayer__WEBPACK_IMPORTED_MODULE_2__.AbstractLayer);

/***/ }),

/***/ "./src/typescript/Layer/Logistic.ts":
/*!******************************************!*\
  !*** ./src/typescript/Layer/Logistic.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogisticLayer": () => (/* binding */ LogisticLayer)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/typescript/types.ts");
/* harmony import */ var _AbstractLayer1D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractLayer1D */ "./src/typescript/Layer/AbstractLayer1D.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var LogisticLayer = /*#__PURE__*/function (_AbstractLayer1D) {
  _inherits(LogisticLayer, _AbstractLayer1D);
  var _super = _createSuper(LogisticLayer);
  function LogisticLayer() {
    _classCallCheck(this, LogisticLayer);
    return _super.apply(this, arguments);
  }
  _createClass(LogisticLayer, [{
    key: "activation",
    value: function activation(m) {
      return m.multiply(-1).exp().add(1).fraction(1);
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.logistic;
    }
  }, {
    key: "derivative",
    value: function derivative(delta) {
      return delta.multiply(this.activation(delta).multiply(this.activation(delta.minusOne())));
    }
  }]);
  return LogisticLayer;
}(_AbstractLayer1D__WEBPACK_IMPORTED_MODULE_1__.AbstractLayer1D);


/***/ }),

/***/ "./src/typescript/Layer/MaxPool.ts":
/*!*****************************************!*\
  !*** ./src/typescript/Layer/MaxPool.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaxPoolLayer": () => (/* binding */ MaxPoolLayer)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
/* harmony import */ var _Math_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Math/math */ "./src/typescript/Math/math.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./src/typescript/types.ts");
/* harmony import */ var _AbstractLayer3D__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AbstractLayer3D */ "./src/typescript/Layer/AbstractLayer3D.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var MaxPoolLayer = /*#__PURE__*/function (_AbstractLayer3D) {
  _inherits(MaxPoolLayer, _AbstractLayer3D);
  var _super = _createSuper(MaxPoolLayer);
  function MaxPoolLayer() {
    var _this;
    _classCallCheck(this, MaxPoolLayer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "filterSize", 0);
    _defineProperty(_assertThisInitialized(_this), "stride", 0);
    return _this;
  }
  _createClass(MaxPoolLayer, [{
    key: "configure",
    value: function configure() {
      // do nothing
    }
  }, {
    key: "getOutputHeight",
    value: function getOutputHeight() {
      return (this.height - this.filterSize) / this.stride + 1;
    }
  }, {
    key: "getOutputWidth",
    value: function getOutputWidth() {
      return (this.width - this.filterSize) / this.stride + 1;
    }
  }, {
    key: "getOutputDepth",
    value: function getOutputDepth() {
      return this.depth;
    }
  }, {
    key: "setFilterSize",
    value: function setFilterSize(size) {
      this.filterSize = size;
      return this;
    }
  }, {
    key: "getFilterSize",
    value: function getFilterSize() {
      return this.filterSize;
    }
  }, {
    key: "setStride",
    value: function setStride(stride) {
      this.stride = stride;
      return this;
    }
  }, {
    key: "getStride",
    value: function getStride() {
      return this.stride;
    }
  }, {
    key: "getPadding",
    value: function getPadding() {
      return 0;
    }
  }, {
    key: "forward",
    value: function forward(input) {
      var result = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getOutputWidth() * this.getOutputHeight() * this.getOutputDepth(), input.cols);
      for (var i = 0; i < input.cols; i += 1) {
        var pool = (0,_Math_math__WEBPACK_IMPORTED_MODULE_1__.maxpool)(input.col(i), this.depth, this.height, this.width, this.filterSize, this.filterSize, this.stride, this.stride);
        result.setCol(i, pool.rollToColMatrix());
      }
      this.Z = result;
      this.A = this.activation(this.Z);
      return this.A;
    }
  }, {
    key: "activation",
    value: function activation(m) {
      return m;
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_2__.LayerType.maxpool;
    }
  }, {
    key: "derivative",
    value: function derivative(delta) {
      return delta;
    }
  }]);
  return MaxPoolLayer;
}(_AbstractLayer3D__WEBPACK_IMPORTED_MODULE_3__.AbstractLayer3D);


/***/ }),

/***/ "./src/typescript/Layer/Purelin.ts":
/*!*****************************************!*\
  !*** ./src/typescript/Layer/Purelin.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurelinLayer": () => (/* binding */ PurelinLayer)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/typescript/types.ts");
/* harmony import */ var _AbstractLayer1D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractLayer1D */ "./src/typescript/Layer/AbstractLayer1D.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var PurelinLayer = /*#__PURE__*/function (_AbstractLayer1D) {
  _inherits(PurelinLayer, _AbstractLayer1D);
  var _super = _createSuper(PurelinLayer);
  function PurelinLayer() {
    _classCallCheck(this, PurelinLayer);
    return _super.apply(this, arguments);
  }
  _createClass(PurelinLayer, [{
    key: "activation",
    value: function activation(m) {
      return m;
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.purelin;
    }
  }, {
    key: "derivative",
    value: function derivative(delta) {
      return delta.setOnes();
    }
  }]);
  return PurelinLayer;
}(_AbstractLayer1D__WEBPACK_IMPORTED_MODULE_1__.AbstractLayer1D);


/***/ }),

/***/ "./src/typescript/Layer/Recurrent.ts":
/*!*******************************************!*\
  !*** ./src/typescript/Layer/Recurrent.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecurrentLayer": () => (/* binding */ RecurrentLayer)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/typescript/types.ts");
/* harmony import */ var _AbstractLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AbstractLayer */ "./src/typescript/Layer/AbstractLayer.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var RecurrentLayer = /*#__PURE__*/function (_AbstractLayer) {
  _inherits(RecurrentLayer, _AbstractLayer);
  var _super = _createSuper(RecurrentLayer);
  function RecurrentLayer() {
    var _this;
    _classCallCheck(this, RecurrentLayer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "Wax", null);
    _defineProperty(_assertThisInitialized(_this), "Waa", null);
    _defineProperty(_assertThisInitialized(_this), "Wya", null);
    _defineProperty(_assertThisInitialized(_this), "b", null);
    _defineProperty(_assertThisInitialized(_this), "by", null);
    _defineProperty(_assertThisInitialized(_this), "dWax", null);
    _defineProperty(_assertThisInitialized(_this), "dWaa", null);
    _defineProperty(_assertThisInitialized(_this), "dWya", null);
    _defineProperty(_assertThisInitialized(_this), "db", null);
    _defineProperty(_assertThisInitialized(_this), "dby", null);
    _defineProperty(_assertThisInitialized(_this), "Y", []);
    _defineProperty(_assertThisInitialized(_this), "A", []);
    _defineProperty(_assertThisInitialized(_this), "X", []);
    _defineProperty(_assertThisInitialized(_this), "aNext", null);
    _defineProperty(_assertThisInitialized(_this), "aPrev", null);
    _defineProperty(_assertThisInitialized(_this), "daNext", null);
    return _this;
  }
  _createClass(RecurrentLayer, [{
    key: "configure",
    value: function configure() {
      this.Wax = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getWidth(), this.getHeight());
      this.Wax = this.Wax.setRandom(this.getWidth());
      this.Waa = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getWidth(), this.getWidth());
      this.Waa = this.Waa.setRandom(this.getWidth());
      this.Wya = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getDepth(), this.getWidth());
      this.Wya = this.Wya.setRandom(this.getDepth());
      this.b = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getWidth(), 1);
      this.b = this.b.setRandom(this.getWidth());
      this.by = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getDepth(), 1);
      this.by = this.by.setRandom(this.getDepth());
      this.dWax = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getWidth(), this.getHeight());
      this.dWax = this.dWax.setZeros();
      this.dWaa = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getWidth(), this.getWidth());
      this.dWaa = this.dWaa.setZeros();
      this.dWya = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getDepth(), this.getWidth());
      this.dWya = this.dWya.setZeros();
      this.db = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getWidth(), 1);
      this.db = this.db.setZeros();
      this.dby = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getDepth(), 1);
      this.dby = this.dby.setZeros();
      this.daNext = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getWidth(), this.getWidth());
      this.daNext = this.daNext.setZeros();
    }
  }, {
    key: "forward",
    value: function forward(x, aPrev) {
      var aNext = this.Wax.dot(x).add(this.Waa.dot(aPrev).replicate(1, this.getWidth())).add(this.b.replicate(1, x.cols)).tanh();
      var y = this.Wya.dot(aNext).add(this.by.replicate(1, x.cols)).softmax();
      this.A.push(aNext);
      this.X.push(x);
      this.Y.push(y);
      this.aPrev = aPrev;
      return [aNext, y];
    }
  }, {
    key: "backward",
    value: function backward(dy, x, a, aPrev) {
      var dTanh = a.pow(2).minusOne().multiply(dy);
      var dWax = dTanh.dot(x.transpose());
      var dWaa = dTanh.dot(aPrev.transpose());
      var db = this.db; //.add(dtanh.colwiseSum().divide(dtanh.cols)).setMin(-5).setMax(5);
      var dby = this.dby; //.replicate(1, this.getWidth()).add(dy).setMin(-5).setMax(5);
      var dWya = this.dWya; //.add(dy.dot(a.transpose())).setMin(-5).setMax(5);
      var daNext = this.Waa.transpose().dot(dTanh);
      return {
        dWax: dWax,
        dWya: dWya,
        dWaa: dWaa,
        db: db,
        dby: dby,
        daNext: daNext
      };
    }
  }, {
    key: "activation",
    value: function activation(m) {
      return m;
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_1__.LayerType.rnnlayer;
    }
  }, {
    key: "derivative",
    value: function derivative(delta) {
      return delta;
    }
  }, {
    key: "is1D",
    value: function is1D() {
      return true;
    }
  }, {
    key: "is3D",
    value: function is3D() {
      return false;
    }
  }, {
    key: "setSize",
    value: function setSize(value) {
      this.setWidth(value[0]);
      this.setHeight(value[1]);
      this.setDepth(value[2]);
      return this;
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return this.height;
    }
  }, {
    key: "getOutputWidth",
    value: function getOutputWidth() {
      return this.width;
    }
  }, {
    key: "getOutputHeight",
    value: function getOutputHeight() {
      return this.height;
    }
  }, {
    key: "getOutputDepth",
    value: function getOutputDepth() {
      return this.depth;
    }
  }, {
    key: "penalty",
    value: function penalty() {
      return 0;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.width;
    }
  }]);
  return RecurrentLayer;
}(_AbstractLayer__WEBPACK_IMPORTED_MODULE_2__.AbstractLayer);

/***/ }),

/***/ "./src/typescript/Layer/Relu.ts":
/*!**************************************!*\
  !*** ./src/typescript/Layer/Relu.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReluLayer": () => (/* binding */ ReluLayer)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/typescript/types.ts");
/* harmony import */ var _AbstractLayer1D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractLayer1D */ "./src/typescript/Layer/AbstractLayer1D.ts");
/* harmony import */ var _Computation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Computation */ "./src/typescript/Computation/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ReluLayer = /*#__PURE__*/function (_AbstractLayer1D) {
  _inherits(ReluLayer, _AbstractLayer1D);
  var _super = _createSuper(ReluLayer);
  function ReluLayer() {
    _classCallCheck(this, ReluLayer);
    return _super.apply(this, arguments);
  }
  _createClass(ReluLayer, [{
    key: "activation",
    value: function activation(m) {
      return m.setMax(0.0);
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.relu;
    }
  }, {
    key: "derivative",
    value: function derivative(delta) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_2__.getComputation)().execute("reluBackpropagation", delta, this.A);
    }
  }]);
  return ReluLayer;
}(_AbstractLayer1D__WEBPACK_IMPORTED_MODULE_1__.AbstractLayer1D);


/***/ }),

/***/ "./src/typescript/Layer/Softmax.ts":
/*!*****************************************!*\
  !*** ./src/typescript/Layer/Softmax.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoftmaxLayer": () => (/* binding */ SoftmaxLayer)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/typescript/types.ts");
/* harmony import */ var _AbstractLayer1D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractLayer1D */ "./src/typescript/Layer/AbstractLayer1D.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var SoftmaxLayer = /*#__PURE__*/function (_AbstractLayer1D) {
  _inherits(SoftmaxLayer, _AbstractLayer1D);
  var _super = _createSuper(SoftmaxLayer);
  function SoftmaxLayer() {
    _classCallCheck(this, SoftmaxLayer);
    return _super.apply(this, arguments);
  }
  _createClass(SoftmaxLayer, [{
    key: "activation",
    value: function activation(m) {
      return m.softmax();
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.softmax;
    }
  }, {
    key: "derivative",
    value: function derivative(delta) {
      return delta.multiply(-1).add(1).fraction(1);
    }
  }]);
  return SoftmaxLayer;
}(_AbstractLayer1D__WEBPACK_IMPORTED_MODULE_1__.AbstractLayer1D);


/***/ }),

/***/ "./src/typescript/Layer/Softplus.ts":
/*!******************************************!*\
  !*** ./src/typescript/Layer/Softplus.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoftplusLayer": () => (/* binding */ SoftplusLayer)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/typescript/types.ts");
/* harmony import */ var _AbstractLayer1D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractLayer1D */ "./src/typescript/Layer/AbstractLayer1D.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var SoftplusLayer = /*#__PURE__*/function (_AbstractLayer1D) {
  _inherits(SoftplusLayer, _AbstractLayer1D);
  var _super = _createSuper(SoftplusLayer);
  function SoftplusLayer() {
    _classCallCheck(this, SoftplusLayer);
    return _super.apply(this, arguments);
  }
  _createClass(SoftplusLayer, [{
    key: "activation",
    value: function activation(m) {
      return m.exp().add(1).log();
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.softplus;
    }
  }, {
    key: "derivative",
    value: function derivative(delta) {
      return delta.multiply(-1).exp().add(1).fraction(1);
    }
  }]);
  return SoftplusLayer;
}(_AbstractLayer1D__WEBPACK_IMPORTED_MODULE_1__.AbstractLayer1D);


/***/ }),

/***/ "./src/typescript/Layer/Tanh.ts":
/*!**************************************!*\
  !*** ./src/typescript/Layer/Tanh.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TanhLayer": () => (/* binding */ TanhLayer)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/typescript/types.ts");
/* harmony import */ var _AbstractLayer1D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractLayer1D */ "./src/typescript/Layer/AbstractLayer1D.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var TanhLayer = /*#__PURE__*/function (_AbstractLayer1D) {
  _inherits(TanhLayer, _AbstractLayer1D);
  var _super = _createSuper(TanhLayer);
  function TanhLayer() {
    _classCallCheck(this, TanhLayer);
    return _super.apply(this, arguments);
  }
  _createClass(TanhLayer, [{
    key: "activation",
    value: function activation(m) {
      return m.tanh();
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.tanh;
    }
  }, {
    key: "derivative",
    value: function derivative(sigma) {
      return this.activation(sigma).pow(2).minusOne();
    }
  }]);
  return TanhLayer;
}(_AbstractLayer1D__WEBPACK_IMPORTED_MODULE_1__.AbstractLayer1D);


/***/ }),

/***/ "./src/typescript/Layer/index.ts":
/*!***************************************!*\
  !*** ./src/typescript/Layer/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractLayer": () => (/* reexport safe */ _AbstractLayer__WEBPACK_IMPORTED_MODULE_0__.AbstractLayer),
/* harmony export */   "ConvLayer": () => (/* reexport safe */ _Conv__WEBPACK_IMPORTED_MODULE_6__.ConvLayer),
/* harmony export */   "FullyConnectedLayer": () => (/* reexport safe */ _FullyConnected__WEBPACK_IMPORTED_MODULE_7__.FullyConnectedLayer),
/* harmony export */   "LSTMLayer": () => (/* reexport safe */ _LSTM__WEBPACK_IMPORTED_MODULE_11__.LSTMLayer),
/* harmony export */   "LogisticLayer": () => (/* reexport safe */ _Logistic__WEBPACK_IMPORTED_MODULE_2__.LogisticLayer),
/* harmony export */   "MaxPoolLayer": () => (/* reexport safe */ _MaxPool__WEBPACK_IMPORTED_MODULE_8__.MaxPoolLayer),
/* harmony export */   "PurelinLayer": () => (/* reexport safe */ _Purelin__WEBPACK_IMPORTED_MODULE_10__.PurelinLayer),
/* harmony export */   "RecurrentLayer": () => (/* reexport safe */ _Recurrent__WEBPACK_IMPORTED_MODULE_9__.RecurrentLayer),
/* harmony export */   "ReluLayer": () => (/* reexport safe */ _Relu__WEBPACK_IMPORTED_MODULE_4__.ReluLayer),
/* harmony export */   "SoftmaxLayer": () => (/* reexport safe */ _Softmax__WEBPACK_IMPORTED_MODULE_1__.SoftmaxLayer),
/* harmony export */   "SoftplusLayer": () => (/* reexport safe */ _Softplus__WEBPACK_IMPORTED_MODULE_5__.SoftplusLayer),
/* harmony export */   "TanhLayer": () => (/* reexport safe */ _Tanh__WEBPACK_IMPORTED_MODULE_3__.TanhLayer)
/* harmony export */ });
/* harmony import */ var _AbstractLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractLayer */ "./src/typescript/Layer/AbstractLayer.ts");
/* harmony import */ var _Softmax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Softmax */ "./src/typescript/Layer/Softmax.ts");
/* harmony import */ var _Logistic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logistic */ "./src/typescript/Layer/Logistic.ts");
/* harmony import */ var _Tanh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tanh */ "./src/typescript/Layer/Tanh.ts");
/* harmony import */ var _Relu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Relu */ "./src/typescript/Layer/Relu.ts");
/* harmony import */ var _Softplus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Softplus */ "./src/typescript/Layer/Softplus.ts");
/* harmony import */ var _Conv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Conv */ "./src/typescript/Layer/Conv.ts");
/* harmony import */ var _FullyConnected__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FullyConnected */ "./src/typescript/Layer/FullyConnected.ts");
/* harmony import */ var _MaxPool__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MaxPool */ "./src/typescript/Layer/MaxPool.ts");
/* harmony import */ var _Recurrent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Recurrent */ "./src/typescript/Layer/Recurrent.ts");
/* harmony import */ var _Purelin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Purelin */ "./src/typescript/Layer/Purelin.ts");
/* harmony import */ var _LSTM__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LSTM */ "./src/typescript/Layer/LSTM.ts");














/***/ }),

/***/ "./src/typescript/Math/Matrix.ts":
/*!***************************************!*\
  !*** ./src/typescript/Math/Matrix.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Matrix": () => (/* binding */ Matrix)
/* harmony export */ });
/* harmony import */ var _Computation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Computation */ "./src/typescript/Computation/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Matrix = /*#__PURE__*/function () {
  function Matrix() {
    var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var cols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    _classCallCheck(this, Matrix);
    _defineProperty(this, "rows", 0);
    _defineProperty(this, "cols", 0);
    _defineProperty(this, "data", null);
    this.resize(rows, cols);
    if (data) {
      this.generateData(data);
    }
  }
  _createClass(Matrix, [{
    key: "resize",
    value: function resize(rows, cols) {
      this.rows = rows;
      this.cols = cols;
      this.data = [];
      for (var row = 0; row < this.rows; row += 1) {
        this.data[row] = new Array(this.cols);
      }
      return this;
    }
  }, {
    key: "generateData",
    value: function generateData(arr) {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = new Array(this.cols);
      }
      for (var col = 0; col < this.cols; col += 1) {
        for (var _row3 = 0; _row3 < this.rows; _row3 += 1) {
          if (typeof arr[_row3] === "number") {
            data[_row3][col] = arr[_row3];
          } else if (arr[_row3] instanceof Float32Array) {
            data[_row3][col] = arr[_row3][col];
          } else if (arr[_row3] && typeof arr[_row3][col] === "number") {
            data[_row3][col] = arr[_row3][col];
          } else if (typeof arr[_row3][col] === "string") {
            // @ts-ignore
            data[_row3][col] = arr[_row3][col].length ? Number(arr[_row3][col]) : NaN;
          } else {
            data[_row3][col] = NaN;
          }
        }
      }
      this.data = data;
      return this;
    }
  }, {
    key: "sum",
    value: function sum() {
      var sum = 0.0;
      for (var row = 0; row < this.rows; row += 1) {
        for (var col = 0; col < this.cols; col += 1) {
          sum += this.data[row][col];
        }
      }
      return sum;
    }
  }, {
    key: "colwiseSum",
    value: function colwiseSum() {
      var data = [];
      var t = this.transpose();
      for (var row = 0; row < t.rows; row += 1) {
        data[row] = [0];
        for (var col = 0; col < t.cols; col += 1) {
          data[row][0] += t.data[row][col];
        }
      }
      return new Matrix(this.cols, 1, data);
    }
  }, {
    key: "rowwiseSum",
    value: function rowwiseSum() {
      var data = [[]];
      for (var row = 0; row < this.rows; row += 1) {
        var sum = 0.0;
        for (var col = 0; col < this.cols; col += 1) {
          sum += this.data[row][col];
        }
        data[0].push(sum);
      }
      return new Matrix(1, this.rows, data);
    }
  }, {
    key: "flatten",
    value: function flatten() {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        for (var col = 0; col < this.cols; col += 1) {
          data.push(this.data[row][col]);
        }
      }
      return data;
    }
  }, {
    key: "replicate",
    value: function replicate(rows, cols) {
      if (rows === 1 && this.cols === 1 && cols > 1) {
        var newData = [];
        for (var row = 0; row < this.rows; row += 1) {
          newData[row] = [];
          for (var col = 0; col < cols; col += 1) {
            newData[row][col] = this.data[row][0];
          }
        }
        return Matrix.from(newData);
      } else if (cols === 1 && this.rows === 1 && rows > 1) {
        var _newData = [];
        for (var _row4 = 0; _row4 < rows; _row4 += 1) {
          _newData[_row4] = [];
          for (var _col2 = 0; _col2 < this.cols; _col2 += 1) {
            _newData[_row4][_col2] = this.data[0][_col2];
          }
        }
        return Matrix.from(_newData);
      }
      return this;
    }
  }, {
    key: "transpose",
    value: function transpose() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("transpose", this);
    }
  }, {
    key: "colMaxCoeffIndex",
    value: function colMaxCoeffIndex(col) {
      var maxIndex = -1;
      var max = -Infinity;
      for (var row = 0; row < this.rows; row += 1) {
        if (this.data && this.data[row][col] > max) {
          max = this.data[row][col];
          maxIndex = row;
        }
      }
      return maxIndex;
    }
  }, {
    key: "rowMaxCoeffIndex",
    value: function rowMaxCoeffIndex(row) {
      var maxIndex = -1;
      var max = -Infinity;
      for (var col = 0; col < this.cols; col += 1) {
        if (this.data[row][col] > max) {
          max = this.data[row][col];
          maxIndex = col;
        }
      }
      return maxIndex;
    }
  }, {
    key: "block",
    value: function block(startRow, startCol, blockRows, blockCols) {
      var data = [];
      for (var row = startRow, newRow = 0; row < this.rows && row < startRow + blockRows; row += 1, newRow += 1) {
        data[newRow] = new Array(blockCols);
        for (var col = startCol, newCol = 0; col < this.cols && col < startCol + blockCols; col += 1, newCol += 1) {
          data[newRow][newCol] = this.data[row][col];
        }
      }
      return new Matrix(blockRows, blockCols, data);
    }
  }, {
    key: "col",
    value: function col(_col) {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [this.data[row][_col]];
      }
      return new Matrix(this.rows, 1, data);
    }
  }, {
    key: "row",
    value: function row(_row2) {
      var data = [];
      for (var col = 0; col < this.cols; col += 1) {
        data[col] = [this.data[_row2][col]];
      }
      return new Matrix(this.cols, 1, data);
    }
  }, {
    key: "setCol",
    value: function setCol(col, tmp) {
      for (var row = 0; row < this.rows; row += 1) {
        if (this.data && tmp.data) {
          this.data[row][col] = tmp.data[row][0];
        }
      }
      return this;
    }
  }, {
    key: "sigmoid",
    value: function sigmoid() {
      return this.multiply(-1).exp().add(1).fraction(1);
    }
  }, {
    key: "rollToColMatrix",
    value: function rollToColMatrix() {
      var data = [];
      var _row = 0;
      for (var row = 0; row < this.rows; row += 1) {
        for (var col = 0; col < this.cols; col += 1) {
          data[_row] = [];
          data[_row++][0] = this.data[row][col];
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "abs",
    value: function abs() {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = Math.abs(this.data[row][col]);
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "mean",
    value: function mean() {
      var sum = 0;
      var numberOfElements = this.rows * this.cols;
      for (var row = 0; row < this.rows; row += 1) {
        for (var col = 0; col < this.cols; col += 1) {
          sum += this.data[row][col];
        }
      }
      return sum / numberOfElements;
    }
  }, {
    key: "max",
    value: function max() {
      var max = -Infinity;
      for (var row = 0; row < this.rows; row += 1) {
        for (var col = 0; col < this.cols; col += 1) {
          max = Math.max(this.data[row][col], max);
        }
      }
      return max;
    }
  }, {
    key: "setMax",
    value: function setMax(max) {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = Math.min(this.data[row][col], max);
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "setMin",
    value: function setMin(min) {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = Math.max(this.data[row][col], min);
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "setZeros",
    value: function setZeros() {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = 0;
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "setOnes",
    value: function setOnes() {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = 1;
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "setRandom",
    value: function setRandom() {
      var parameter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = (Math.random() * 4 - 2) * Math.sqrt(2 / parameter); // todo: gaussian distribution;
        }
      }

      return Matrix.from(data);
    }
  }, {
    key: "fraction",
    value: function fraction() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = num / this.data[row][col];
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "sqrt",
    value: function sqrt() {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = Math.sqrt(this.data[row][col] + 1e-8);
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "dot",
    value: function dot(m) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("multiply", this, m);
    }
  }, {
    key: "multiply",
    value: function multiply(num) {
      if (typeof num === "number") {
        var data = [];
        for (var row = 0; row < this.rows; row += 1) {
          data[row] = [];
          for (var col = 0; col < this.cols; col += 1) {
            // @ts-ignore
            data[row][col] = this.data[row][col] * num;
          }
        }
        return Matrix.from(data);
      } else {
        if (num.rows !== this.rows || this.cols !== num.cols) {
          throw new Error("Dimension error: ".concat(this.shape(), " !== ").concat(num.shape()));
        }
        var _data = [];
        for (var _row5 = 0; _row5 < this.rows; _row5 += 1) {
          _data[_row5] = [];
          for (var _col3 = 0; _col3 < this.cols; _col3 += 1) {
            // @ts-ignore
            _data[_row5][_col3] = this.data[_row5][_col3] * num.data[_row5][_col3];
          }
        }
        return Matrix.from(_data);
      }
    }
  }, {
    key: "subtract",
    value: function subtract(m) {
      if (m instanceof Matrix) {
        if (this.rows !== m.rows || this.cols !== m.cols) {
          throw new Error("Dimensions error: ".concat(this.rows, ", ").concat(this.cols, " !== ").concat(m.rows, ", ").concat(m.cols));
        }
        var data = [];
        for (var row = 0; row < this.rows; row += 1) {
          data[row] = [];
          for (var col = 0; col < this.cols; col += 1) {
            data[row][col] = this.data[row][col] - m.data[row][col];
          }
        }
        return Matrix.from(data);
      } else {
        var _data2 = [];
        for (var _row6 = 0; _row6 < this.rows; _row6 += 1) {
          _data2[_row6] = [];
          for (var _col4 = 0; _col4 < this.cols; _col4 += 1) {
            _data2[_row6][_col4] = this.data[_row6][_col4] - m;
          }
        }
        return Matrix.from(_data2);
      }
    }
  }, {
    key: "forEach",
    value: function forEach(cb) {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = cb(this.data[row][col]);
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "shape",
    value: function shape() {
      return [this.rows, this.cols];
    }
  }, {
    key: "divide",
    value: function divide(num) {
      if (typeof num === "number") {
        var data = [];
        for (var row = 0; row < this.rows; row += 1) {
          data[row] = [];
          for (var col = 0; col < this.cols; col += 1) {
            data[row][col] = this.data[row][col] / num;
          }
        }
        return Matrix.from(data);
      } else {
        if (num.rows !== this.rows || num.cols !== this.cols) {
          throw new Error("Dimensions error (".concat(this.rows, ", ").concat(this.cols, ") !== (").concat(num.rows, ", ").concat(num.cols, ")"));
        }
        var _data3 = [];
        for (var _row7 = 0; _row7 < this.rows; _row7 += 1) {
          _data3[_row7] = [];
          for (var _col5 = 0; _col5 < this.cols; _col5 += 1) {
            _data3[_row7][_col5] = this.data[_row7][_col5] / num.data[_row7][_col5];
          }
        }
        return Matrix.from(_data3);
      }
    }
  }, {
    key: "minusOne",
    value: function minusOne() {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = 1 - this.data[row][col];
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "subtractFromNumber",
    value: function subtractFromNumber(num) {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = num - this.data[row][col];
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "add",
    value: function add(m) {
      if (typeof m === "number") {
        var data = [];
        for (var row = 0; row < this.rows; row += 1) {
          data[row] = [];
          for (var col = 0; col < this.cols; col += 1) {
            data[row][col] = this.data[row][col] + m;
          }
        }
        return Matrix.from(data);
      } else if (m instanceof Matrix) {
        if (m.rows !== this.rows || m.cols !== this.cols) {
          throw new Error("Dimention error: rows (x: ".concat(this.rows, ", y: ").concat(this.cols, ") !== (x: ").concat(m.rows, ", y: ").concat(m.cols, ")"));
        }
        var _data4 = [];
        for (var _row8 = 0; _row8 < this.rows; _row8 += 1) {
          _data4[_row8] = [];
          for (var _col6 = 0; _col6 < this.cols; _col6 += 1) {
            _data4[_row8][_col6] = this.data[_row8][_col6] + m.data[_row8][_col6];
          }
        }
        return Matrix.from(_data4);
      }
      return this;
    }
  }, {
    key: "log",
    value: function log() {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = Math.log(this.data[row][col] + 1e-8);
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "tanh",
    value: function tanh() {
      return this.exp().subtract(this.multiply(-1).exp()).divide(this.exp().add(this.multiply(-1).exp()));
    }
  }, {
    key: "softmax",
    value: function softmax() {
      var max = this.max() - 1e-8;
      return this.subtract(max).exp().divide(this.rowwiseSum().replicate(this.cols, 1).transpose());
    }
  }, {
    key: "exp",
    value: function exp() {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = Math.exp(this.data[row][col] + 1e-8);
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "pow",
    value: function pow(num) {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = Math.pow(this.data[row][col], num);
        }
      }
      return Matrix.from(data);
    }
  }], [{
    key: "from",
    value: function from(arr) {
      var _arr$;
      return new Matrix(arr.length, ((_arr$ = arr[0]) === null || _arr$ === void 0 ? void 0 : _arr$.length) || 0, arr);
    }
  }]);
  return Matrix;
}();

/***/ }),

/***/ "./src/typescript/Math/math.ts":
/*!*************************************!*\
  !*** ./src/typescript/Math/math.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "im2col": () => (/* binding */ im2col),
/* harmony export */   "maxpool": () => (/* binding */ maxpool),
/* harmony export */   "round": () => (/* binding */ round)
/* harmony export */ });
/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Matrix */ "./src/typescript/Math/Matrix.ts");

var im2col = function im2col(input, channels, height, width, kernel_h, kernel_w, pad_h, pad_w, stride_h, stride_w) {
  var cols = kernel_w * kernel_h * channels;
  var rows = ((width - kernel_w + 2 * pad_w) / stride_w + 1) * ((height - kernel_h + 2 * pad_h) / stride_h + 1);
  var currentResultRow = 0;
  var result = new _Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(rows, cols).setZeros();
  for (var boundingY = -pad_h; boundingY + kernel_h <= height + pad_h; boundingY += stride_h) {
    for (var boundingX = -pad_w; boundingX + kernel_w <= width + pad_w; boundingX += stride_w) {
      var currentResultCol = 0;
      for (var channel = 0; channel < channels; channel++) {
        var inputOffset = height * width * channel;
        for (var y = 0; y < kernel_h; y++) {
          for (var x = 0; x < kernel_w; x++) {
            if (boundingY + y >= 0 && boundingX + x >= 0 && boundingX + x < width && boundingY + y < height) {
              result.data[currentResultRow][currentResultCol] = input.data[(y + boundingY) * width + boundingX + x + inputOffset][0];
            }
            currentResultCol++;
          }
        }
      }
      currentResultRow++;
    }
  }
  return result;
};
var maxpool = function maxpool(input, channels, height, width, kernel_h, kernel_w, stride_h, stride_w) {
  var resultWidth = (width - kernel_w) / stride_w + 1;
  var resultHeight = (height - kernel_h) / stride_h + 1;
  var resultDepth = channels;
  var currentResultCol = 0;
  var result = new _Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(resultWidth * resultHeight * resultDepth, 1).setZeros();
  for (var boundingY = 0; boundingY + kernel_h <= height; boundingY += stride_h) {
    for (var boundingX = 0; boundingX + kernel_w <= width; boundingX += stride_w) {
      for (var channel = 0; channel < channels; channel++) {
        var _max = -Infinity;
        var inputOffset = height * width * channel;
        var outputOffset = resultWidth * resultHeight * channel;
        for (var y = 0; y < kernel_h; y++) {
          for (var x = 0; x < kernel_w; x++) {
            _max = Math.max(_max, input.data[inputOffset + (y + boundingY) * width + boundingX + x][0]);
          }
        }
        result.data[outputOffset + currentResultCol][0] = _max;
      }
      currentResultCol++;
    }
  }
  return result;
};
var round = function round(num, decimalPlaces) {
  return Math.round((num + Number.EPSILON) * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces);
};

/***/ }),

/***/ "./src/typescript/Network/Network.ts":
/*!*******************************************!*\
  !*** ./src/typescript/Network/Network.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Network": () => (/* binding */ Network),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Network = /*#__PURE__*/function () {
  function Network(dimensions) {
    _classCallCheck(this, Network);
    _defineProperty(this, "dimensions", null);
    _defineProperty(this, "size", 0);
    _defineProperty(this, "layers", []);
    this.dimensions = dimensions;
  }
  _createClass(Network, [{
    key: "addLayer",
    value: function addLayer(layer) {
      this.size++;
      this.layers.push(layer);
      return this;
    }
  }, {
    key: "getLayers",
    value: function getLayers() {
      return this.layers;
    }
  }, {
    key: "forward",
    value: function forward(input) {
      var output = input;
      this.layers.forEach(function (layer) {
        output = layer.forward(output);
      });
      return output;
    }
  }, {
    key: "backward",
    value: function backward(X, Y, predictions, regularization) {
      var m = X.cols;
      //let sigma = Y.divide(predictions).multiply(-1).subtract(Y.minusOne().divide(predictions.minusOne()));
      var sigma = predictions.subtract(Y);
      for (var layer = this.layers.length - 1; layer >= 0; layer -= 1) {
        sigma = this.layers[layer].getBackPropagation().propagate(X, m, regularization, this.layers[layer], this.layers[layer].derivative(sigma));
      }
    }
  }, {
    key: "save",
    value: function save(path) {
      var resultJSON = {
        dimensions: this.dimensions,
        layers: []
      };
      this.layers.forEach(function (layer) {
        resultJSON.layers.push({
          type: layer.getType(),
          size: layer.getSize(),
          weights: {
            W: layer.W.data,
            b: layer.b.data
          }
        });
      });
      var result = JSON.stringify(resultJSON);
      return new Promise(function (resolve, reject) {
        fs__WEBPACK_IMPORTED_MODULE_0__.writeFile(path, result, function (err) {
          if (err) {
            console.error(err);
            reject();
          }
          resolve(result);
        });
      });
    }
  }]);
  return Network;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Network);

/***/ }),

/***/ "./src/typescript/Network/NetworkLSTM.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Network/NetworkLSTM.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkLSTM": () => (/* binding */ NetworkLSTM)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var NetworkLSTM = /*#__PURE__*/function () {
  function NetworkLSTM(dimensions) {
    _classCallCheck(this, NetworkLSTM);
    _defineProperty(this, "dimensions", null);
    _defineProperty(this, "size", 0);
    _defineProperty(this, "layers", []);
    this.dimensions = dimensions;
  }
  _createClass(NetworkLSTM, [{
    key: "addLayer",
    value: function addLayer(layer) {
      this.size++;
      this.layers.push(layer);
      return this;
    }
  }, {
    key: "getLayers",
    value: function getLayers() {
      return this.layers;
    }
  }, {
    key: "loss",
    value: function loss(vocabularySize, sequenceLength) {
      return -Math.log(1 / vocabularySize) * sequenceLength;
    }
  }, {
    key: "sample",
    value: function sample(charIndices) {}
  }, {
    key: "forward",
    value: function forward(X, a0) {
      var _this = this;
      var nX = X.length;
      var m = X[0].rows;
      var tX = X[0].cols;
      var nY = this.layers[0].Wy.rows;
      var nA = this.layers[0].Wy.cols;
      var a = new Array(nA).map(function () {
        return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m, tX).setZeros();
      });
      var c = new Array(nA).map(function () {
        return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m, tX).setZeros();
      });
      var y = new Array(nY).map(function () {
        return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m, tX).setZeros();
      });
      var aNext = a0;
      var cNext = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(nA, m).setZeros();
      var _loop = function _loop(t) {
        var dataInput = [];
        X.forEach(function (m, i) {
          dataInput[i] = [];
          for (var row = 0; row < m.rows; row += 1) {
            dataInput[i].push(m.data[row][t]);
          }
        });
        var input = _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix.from(dataInput);
        var _this$layers$0$forwar = _this.layers[0].forward(input, aNext, cNext),
          _this$layers$0$forwar2 = _slicedToArray(_this$layers$0$forwar, 3),
          _aNext = _this$layers$0$forwar2[0],
          _cNext = _this$layers$0$forwar2[1],
          _yt = _this$layers$0$forwar2[2];
      };
      for (var t = 0; t < tX; t += 1) {
        _loop(t);
      }
    }
  }, {
    key: "backward",
    value: function backward(da) {
      var na = da.length;
      var m = da[0].rows;
      var tx = da[0].cols;
      var nx = this.layers[0].x1.rows;
      for (var t = tx - 1; t >= 0; t -= 1) {
        //this.layers[0].backward(_da, dcPrevT);
      }
    }

    /*save(path: string): Promise<string> {
      const resultJSON = {
        dimensions: this.dimensions,
        layers: [],
      };
       this.layers.forEach((layer: Layers) => {
        resultJSON.layers.push({
          type: layer.getType(),
          size: layer.getSize(),
          weights: {
            W: layer.W.data,
            b: layer.b.data,
          },
        });
      });
       const result = JSON.stringify(resultJSON);
       return new Promise((resolve, reject) => {
        fs.writeFile(path, result, (err) => {
          if (err) {
            console.error(err);
            reject();
          }
          resolve(result);
        });
      });
    }*/
  }]);
  return NetworkLSTM;
}();

/***/ }),

/***/ "./src/typescript/Network/NetworkRNN.ts":
/*!**********************************************!*\
  !*** ./src/typescript/Network/NetworkRNN.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkRNN": () => (/* binding */ NetworkRNN)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var NetworkRNN = /*#__PURE__*/function () {
  function NetworkRNN(dimensions) {
    _classCallCheck(this, NetworkRNN);
    _defineProperty(this, "dimensions", null);
    _defineProperty(this, "size", 0);
    _defineProperty(this, "layers", []);
    this.dimensions = dimensions;
  }
  _createClass(NetworkRNN, [{
    key: "addLayer",
    value: function addLayer(layer) {
      this.size++;
      this.layers.push(layer);
      return this;
    }
  }, {
    key: "getLayers",
    value: function getLayers() {
      return this.layers;
    }
  }, {
    key: "loss",
    value: function loss(vocabularySize, sequenceLength) {
      return -Math.log(1 / vocabularySize) * sequenceLength;
    }
  }, {
    key: "sample",
    value: function sample(dataset) {
      var Waa = this.layers[0].Waa;
      var Wax = this.layers[0].Wax;
      var Wya = this.layers[0].Wya;
      var by = this.layers[0].by;
      var b = this.layers[0].b;
      var indices = [];
      var charIndices = dataset.getCharIndices();
      var newLineCharacter = charIndices["\n"];
      var chars = dataset.getChars();
      var x = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.dimensions[1], 1).setZeros();
      var aPrev = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.dimensions[0], 1).setRandom(this.dimensions[1]);
      var idx = -1;
      var counter = 0;
      while (idx != newLineCharacter && counter != 50) {
        var a = Wax.dot(x).add(Waa.dot(aPrev)).add(b).setMin(1e-3).tanh();
        var z = Wya.dot(a).add(by);
        var y = z.softmax();
        idx = charIndices[chars[y.colMaxCoeffIndex(0)]];
        x = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.dimensions[1], 1).setZeros();
        var maxIndex = y.colMaxCoeffIndex(0);
        if (maxIndex === -1) {
          maxIndex = Math.floor(Math.random() * this.dimensions[1]);
          idx = charIndices[chars[maxIndex]];
        }
        x.data[maxIndex][0] = 1;
        indices.push(idx);
        aPrev = a;
        counter += 1;
      }
      if (counter === 50) {
        indices.push(newLineCharacter);
      }
      return indices.map(function (i) {
        return chars[i];
      }).join("");
    }
  }, {
    key: "forward",
    value: function forward(X, Y, a0) {
      var x = [null];
      var a = [a0];
      var yHat = [null];
      var loss = 0;
      for (var t = 1; t <= X.rows; t += 1) {
        x[t] = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.dimensions[1], this.dimensions[0]).setZeros();
        x[t].data[X.data[t - 1][0]][0] = 1;
        var _this$layers$0$forwar = this.layers[0].forward(x[t], a[t - 1]),
          _this$layers$0$forwar2 = _slicedToArray(_this$layers$0$forwar, 2),
          _a = _this$layers$0$forwar2[0],
          _yHat = _this$layers$0$forwar2[1];
        a[t] = _a;
        yHat[t] = _yHat; //.setMin(1e-5);
        loss += 0; // todo
      }

      this.layers[0].A = a;
      this.layers[0].X = x;
      this.layers[0].Y = yHat;
      return [loss];
    }
  }, {
    key: "backward",
    value: function backward(X) {
      var a = this.layers[0].A;
      var x = this.layers[0].X;
      var yHat = this.layers[0].Y;
      var _dWax = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.layers[0].Wax.rows, this.layers[0].Wax.cols).setZeros();
      var _dWaa = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.layers[0].Waa.rows, this.layers[0].Waa.cols).setZeros();
      var _dWya = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.layers[0].Wya.rows, this.layers[0].Wya.cols).setZeros();
      var _db = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.layers[0].db.rows, this.layers[0].db.cols).setZeros();
      var _dby = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.layers[0].dby.rows, this.layers[0].dby.cols).setZeros();
      var _daNext = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.layers[0].daNext.rows, this.layers[0].daNext.rows).setZeros();
      for (var t = X.rows - 1; t >= 1; t -= 1) {
        // loop over examples
        var dy = _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix.from(a[t].data);
        dy.data[X.data[t - 1][0]][0] -= 1;
        var _this$layers$0$backwa = this.layers[0].backward(dy, x[t], a[t], a[t - 1]),
          dWax = _this$layers$0$backwa.dWax,
          dWya = _this$layers$0$backwa.dWya,
          dWaa = _this$layers$0$backwa.dWaa,
          db = _this$layers$0$backwa.db,
          dby = _this$layers$0$backwa.dby,
          daNext = _this$layers$0$backwa.daNext;
        _dWax = _dWax.add(dWax.replicate(1, _dWax.cols));
        _dWaa = _dWaa.add(dWaa.replicate(1, _dWaa.cols));
        _dWya = _dWya.add(dWya);
        _db = _db.add(db);
        _dby = _dby.add(dby);
        _daNext = _daNext.add(daNext);
      }

      // gradient clipping
      this.layers[0].dWax = _dWax.setMin(-5).setMax(5);
      this.layers[0].dWaa = _dWaa.setMin(-5).setMax(5);
      this.layers[0].dWya = _dWya.setMin(-5).setMax(5);
      this.layers[0].db = _dby.setMin(-5).setMax(5);
      this.layers[0].dby = _dby.setMin(-5).setMax(5);
      this.layers[0].daNext = _daNext.setMin(-5).setMax(5);
    }
  }, {
    key: "optimize",
    value: function optimize(X, Y, aPrev, learningRate) {
      var _this$forward = this.forward(X, Y, aPrev),
        _this$forward2 = _slicedToArray(_this$forward, 1),
        loss = _this$forward2[0];
      this.backward(X);
      this.layers[0].Wax = this.layers[0].Wax.add(this.layers[0].dWax.replicate(1, this.getDimensions()[2]).multiply(-learningRate));
      this.layers[0].Waa = this.layers[0].Waa.add(this.layers[0].dWaa.multiply(-learningRate));
      this.layers[0].Wya = this.layers[0].Wya.add(this.layers[0].dWya.multiply(-learningRate));
      //this.layers[0].b = this.layers[0].b.add(this.layers[0].db.multiply(-learningRate));
      //this.layers[0].by = this.layers[0].by.add(
      //  this.layers[0].dby.multiply(-learningRate).rowwiseSum().divide(this.layers[0].dby.cols).transpose()
      //);

      return [loss, this.layers[0].A[X.rows - 1]];
    }
  }, {
    key: "getDimensions",
    value: function getDimensions() {
      return this.dimensions;
    }

    /*save(path: string): Promise<string> {
      const resultJSON = {
        dimensions: this.dimensions,
        layers: [],
      };
       this.layers.forEach((layer: Layers) => {
        resultJSON.layers.push({
          type: layer.getType(),
          size: layer.getSize(),
          weights: {
            W: layer.W.data,
            b: layer.b.data,
          },
        });
      });
       const result = JSON.stringify(resultJSON);
       return new Promise((resolve, reject) => {
        fs.writeFile(path, result, (err) => {
          if (err) {
            console.error(err);
            reject();
          }
          resolve(result);
        });
      });
    }*/
  }]);
  return NetworkRNN;
}();

/***/ }),

/***/ "./src/typescript/Network/index.ts":
/*!*****************************************!*\
  !*** ./src/typescript/Network/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Network": () => (/* reexport safe */ _Network__WEBPACK_IMPORTED_MODULE_0__.Network),
/* harmony export */   "NetworkRNN": () => (/* reexport safe */ _NetworkRNN__WEBPACK_IMPORTED_MODULE_1__.NetworkRNN)
/* harmony export */ });
/* harmony import */ var _Network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Network */ "./src/typescript/Network/Network.ts");
/* harmony import */ var _NetworkRNN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NetworkRNN */ "./src/typescript/Network/NetworkRNN.ts");




/***/ }),

/***/ "./src/typescript/NetworkBuilder/AbstractNetworkBuilder.ts":
/*!*****************************************************************!*\
  !*** ./src/typescript/NetworkBuilder/AbstractNetworkBuilder.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractNetworkBuilder": () => (/* binding */ AbstractNetworkBuilder)
/* harmony export */ });
/* harmony import */ var _Network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Network */ "./src/typescript/Network/index.ts");
/* harmony import */ var _Layer_Backpropagation_BackpropagationFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layer/Backpropagation/BackpropagationFactory */ "./src/typescript/Layer/Backpropagation/BackpropagationFactory.ts");
/* harmony import */ var _Network_NetworkLSTM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Network/NetworkLSTM */ "./src/typescript/Network/NetworkLSTM.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var AbstractNetworkBuilder = /*#__PURE__*/function () {
  function AbstractNetworkBuilder(dimension) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "DNN";
    _classCallCheck(this, AbstractNetworkBuilder);
    _defineProperty(this, "dimensions", null);
    _defineProperty(this, "lastLayer", null);
    _defineProperty(this, "network", null);
    this.dimensions = dimension;
    if (type === "DNN") {
      this.network = new _Network__WEBPACK_IMPORTED_MODULE_0__.Network(this.dimensions);
    } else if (type === "RNN") {
      this.network = new _Network__WEBPACK_IMPORTED_MODULE_0__.NetworkRNN(this.dimensions);
    } else if (type === "LSTM") {
      this.network = new _Network_NetworkLSTM__WEBPACK_IMPORTED_MODULE_2__.NetworkLSTM(this.dimensions);
    }
  }
  _createClass(AbstractNetworkBuilder, [{
    key: "createLayer",
    value: function createLayer(layerClass) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      // @ts-ignore
      var layer = new layerClass();
      if (typeof callback === "function") {
        callback(layer);
      }
      if (this.lastLayer === null) {
        this.firstLayerTransition(layer);
      } else {
        // @ts-ignore
        layer.transition(this.lastLayer);
      }
      layer.configure();
      layer.setBackPropagation(_Layer_Backpropagation_BackpropagationFactory__WEBPACK_IMPORTED_MODULE_1__.BackpropagationFactory.create(this.lastLayer, layer));
      this.network.addLayer(layer);
      this.lastLayer = layer;
      return this;
    }
  }, {
    key: "getNetwork",
    value: function getNetwork() {
      return this.network;
    }
  }]);
  return AbstractNetworkBuilder;
}();


/***/ }),

/***/ "./src/typescript/NetworkBuilder/NetworkBuilder1D.ts":
/*!***********************************************************!*\
  !*** ./src/typescript/NetworkBuilder/NetworkBuilder1D.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkBuilder1D": () => (/* binding */ NetworkBuilder1D)
/* harmony export */ });
/* harmony import */ var _AbstractNetworkBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractNetworkBuilder */ "./src/typescript/NetworkBuilder/AbstractNetworkBuilder.ts");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layer___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layer/ */ "./src/typescript/Layer/index.ts");
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var NetworkBuilder1D = /*#__PURE__*/function (_AbstractNetworkBuild) {
  _inherits(NetworkBuilder1D, _AbstractNetworkBuild);
  var _super = _createSuper(NetworkBuilder1D);
  function NetworkBuilder1D() {
    _classCallCheck(this, NetworkBuilder1D);
    return _super.apply(this, arguments);
  }
  _createClass(NetworkBuilder1D, [{
    key: "firstLayerTransition",
    value: function firstLayerTransition(layer) {
      layer.setWidth(this.dimensions[0]);
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(jsonPath) {
      return new Promise(function (resolve, reject) {
        fs__WEBPACK_IMPORTED_MODULE_1__.readFile(jsonPath, function (err, data) {
          if (err) {
            reject(err);
            return;
          }
          var json = JSON.parse(data.toString());
          var builder = new NetworkBuilder1D(json["dimensions"]);
          json["layers"].forEach(function (layerData) {
            var layerClass = null;
            if (layerData["type"] === "logistic") {
              layerClass = _Layer___WEBPACK_IMPORTED_MODULE_2__.LogisticLayer;
            } else if (layerData["type"] === "softmax") {
              layerClass = _Layer___WEBPACK_IMPORTED_MODULE_2__.SoftmaxLayer;
            } else if (layerData["type"] === "relu") {
              layerClass = _Layer___WEBPACK_IMPORTED_MODULE_2__.ReluLayer;
            } else if (layerData["type"] === "softplus") {
              layerClass = _Layer___WEBPACK_IMPORTED_MODULE_2__.SoftplusLayer;
            } else if (layerData["type"] === "tanh") {
              layerClass = _Layer___WEBPACK_IMPORTED_MODULE_2__.TanhLayer;
            }
            builder.createLayer(layerClass, function (layer) {
              // @ts-ignore
              layer.setSize(layerData["size"]);
            });
          });
          var network = builder.getNetwork();
          network.getLayers().forEach(function (layer, i) {
            layer.W = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_3__.Matrix(json["layers"][i]["weights"]["W"].length, json["layers"][i]["weights"]["W"][0].length, json["layers"][i]["weights"]["W"]);
            layer.b = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_3__.Matrix(json["layers"][i]["weights"]["b"].length, json["layers"][i]["weights"]["b"][0].length, json["layers"][i]["weights"]["b"]);
          });
          resolve(network);
        });
      });
    }
  }]);
  return NetworkBuilder1D;
}(_AbstractNetworkBuilder__WEBPACK_IMPORTED_MODULE_0__.AbstractNetworkBuilder);


/***/ }),

/***/ "./src/typescript/NetworkBuilder/NetworkBuilder3D.ts":
/*!***********************************************************!*\
  !*** ./src/typescript/NetworkBuilder/NetworkBuilder3D.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkBuilder3D": () => (/* binding */ NetworkBuilder3D)
/* harmony export */ });
/* harmony import */ var _AbstractNetworkBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractNetworkBuilder */ "./src/typescript/NetworkBuilder/AbstractNetworkBuilder.ts");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layer___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layer/ */ "./src/typescript/Layer/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var NetworkBuilder3D = /*#__PURE__*/function (_AbstractNetworkBuild) {
  _inherits(NetworkBuilder3D, _AbstractNetworkBuild);
  var _super = _createSuper(NetworkBuilder3D);
  function NetworkBuilder3D() {
    _classCallCheck(this, NetworkBuilder3D);
    return _super.apply(this, arguments);
  }
  _createClass(NetworkBuilder3D, [{
    key: "firstLayerTransition",
    value: function firstLayerTransition(layer) {
      if (this.dimensions) {
        // @ts-ignore
        layer.setSize(this.dimensions);
      }
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(jsonPath) {
      return new Promise(function (resolve, reject) {
        fs__WEBPACK_IMPORTED_MODULE_1__.readFile(jsonPath, function (err, data) {
          if (err) {
            reject(err);
            return;
          }
          var json = JSON.parse(data.toString());
          var builder = new NetworkBuilder3D(json["size"]);
          json["layers"].forEach(function (layerData) {
            if (layerData["type"] === "logistic") {
              // @ts-ignore
              builder.createLayer(_Layer___WEBPACK_IMPORTED_MODULE_2__.LogisticLayer, function (layer) {
                // @ts-ignore
                layer.setSize(layerData["size"]);
              });
            } else if (layerData["type"] === "softmax") {
              // @ts-ignore
              builder.createLayer(_Layer___WEBPACK_IMPORTED_MODULE_2__.SoftmaxLayer, function (layer) {
                // @ts-ignore
                layer.setSize(layerData["size"]);
              });
            } else if (layerData["type"] === "relu") {
              // @ts-ignore
              builder.createLayer(_Layer___WEBPACK_IMPORTED_MODULE_2__.ReluLayer, function (layer) {
                // @ts-ignore
                layer.setSize(layerData["size"]);
              });
            } else if (layerData["type"] === "softplus") {
              // @ts-ignore
              builder.createLayer(_Layer___WEBPACK_IMPORTED_MODULE_2__.SoftplusLayer, function (layer) {
                // @ts-ignore
                layer.setSize(layerData["size"]);
              });
            } else if (layerData["type"] === "tanh") {
              // @ts-ignore
              builder.createLayer(_Layer___WEBPACK_IMPORTED_MODULE_2__.TanhLayer, function (layer) {
                // @ts-ignore
                layer.setSize(layerData["size"]);
              });
            } else if (layerData["type"] === "conv") {
              // @ts-ignore
              builder.createLayer(_Layer___WEBPACK_IMPORTED_MODULE_2__.ConvLayer, function (layer) {
                layer.setSize(layerData["size"]);
                layer.setFilterSize(layerData["filterSize"]);
                layer.setStride(layerData["stride"]);
                layer.setNumFilters(layerData["numFilters"]);
                layer.setPadding(layerData["padding"]);
              });
            } else if (layerData["type"] === "maxpool") {
              // @ts-ignore
              builder.createLayer(_Layer___WEBPACK_IMPORTED_MODULE_2__.MaxPoolLayer, function (layer) {
                layer.setSize(layerData["size"]);
                layer.setFilterSize(layerData["filterSize"]);
                layer.setStride(layerData["stride"]);
              });
            } else if (layerData["type"] === "fullyconnected") {
              // @ts-ignore
              builder.createLayer(_Layer___WEBPACK_IMPORTED_MODULE_2__.MaxPoolLayer);
            }
          });
          var network = builder.getNetwork();
          if (network) {
            network.getLayers().forEach(function (layer, i) {
              layer.W = json["layers"]["W"];
              layer.b = json["layers"]["b"];
            });
            resolve(network);
          }
        });
      });
    }
  }]);
  return NetworkBuilder3D;
}(_AbstractNetworkBuilder__WEBPACK_IMPORTED_MODULE_0__.AbstractNetworkBuilder);


/***/ }),

/***/ "./src/typescript/NetworkBuilder/index.ts":
/*!************************************************!*\
  !*** ./src/typescript/NetworkBuilder/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractNetworkBuilder": () => (/* reexport safe */ _AbstractNetworkBuilder__WEBPACK_IMPORTED_MODULE_0__.AbstractNetworkBuilder),
/* harmony export */   "NetworkBuilder1D": () => (/* reexport safe */ _NetworkBuilder1D__WEBPACK_IMPORTED_MODULE_1__.NetworkBuilder1D),
/* harmony export */   "NetworkBuilder3D": () => (/* reexport safe */ _NetworkBuilder3D__WEBPACK_IMPORTED_MODULE_2__.NetworkBuilder3D)
/* harmony export */ });
/* harmony import */ var _AbstractNetworkBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractNetworkBuilder */ "./src/typescript/NetworkBuilder/AbstractNetworkBuilder.ts");
/* harmony import */ var _NetworkBuilder1D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NetworkBuilder1D */ "./src/typescript/NetworkBuilder/NetworkBuilder1D.ts");
/* harmony import */ var _NetworkBuilder3D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NetworkBuilder3D */ "./src/typescript/NetworkBuilder/NetworkBuilder3D.ts");





/***/ }),

/***/ "./src/typescript/Trainer/AbstractTrainer.ts":
/*!***************************************************!*\
  !*** ./src/typescript/Trainer/AbstractTrainer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractTrainer": () => (/* binding */ AbstractTrainer)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AbstractTrainer = /*#__PURE__*/function () {
  function AbstractTrainer(network, optimizer) {
    _classCallCheck(this, AbstractTrainer);
    _defineProperty(this, "network", null);
    _defineProperty(this, "optimizer", null);
    _defineProperty(this, "regularization", 1e-4);
    _defineProperty(this, "iterations", 1000);
    _defineProperty(this, "learningRate", 0.001);
    _defineProperty(this, "verbose", true);
    _defineProperty(this, "verboseStep", 1);
    _defineProperty(this, "stepCallback", function (data) {
      return undefined;
    });
    this.network = network;
    this.optimizer = optimizer;
  }
  _createClass(AbstractTrainer, [{
    key: "setRegularization",
    value: function setRegularization(regularization) {
      this.regularization = regularization;
      return this;
    }
  }, {
    key: "setIterations",
    value: function setIterations(iterations) {
      this.iterations = iterations;
      return this;
    }
  }, {
    key: "setLearningRate",
    value: function setLearningRate(learningRate) {
      this.learningRate = learningRate;
      return this;
    }
  }, {
    key: "setVerbose",
    value: function setVerbose(verbose) {
      this.verbose = verbose;
      return this;
    }
  }, {
    key: "setVerboseStep",
    value: function setVerboseStep(verboseStep) {
      this.verboseStep = verboseStep;
      return this;
    }
  }, {
    key: "setStepCallback",
    value: function setStepCallback(stepCallback) {
      this.stepCallback = stepCallback;
      return this;
    }
  }, {
    key: "cost",
    value: function cost(inputDataset, outputDataset) {
      var numberOfExamples = inputDataset.getNumberOfExamples();
      var accuracy = 0;
      var penalty = 0;
      this.network.getLayers().forEach(function (layer) {
        penalty += layer.penalty();
      });
      var predictions = this.network.forward(inputDataset.data);
      var correctOutput = outputDataset.data;

      /*const error = Y.multiply(predictions.log())
        .add(Y.minusOne().multiply(predictions.minusOne().log()))
        .multiply(-1)
        .sum();*/
      var error = correctOutput.multiply(predictions.log()).sum();
      var cost = -1 / numberOfExamples * error + this.regularization / (penalty * (2 * inputDataset.data.cols));
      for (var col = 0; col < predictions.cols; col += 1) {
        var index1 = predictions.colMaxCoeffIndex(col);
        var index2 = correctOutput.colMaxCoeffIndex(col);
        if (index1 === index2) {
          accuracy++;
        }
      }
      return {
        cost: cost,
        accuracy: accuracy / numberOfExamples * 100
      };
    }
  }]);
  return AbstractTrainer;
}();

/***/ }),

/***/ "./src/typescript/Trainer/MiniBatchTrainer.ts":
/*!****************************************************!*\
  !*** ./src/typescript/Trainer/MiniBatchTrainer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiniBatchTrainer": () => (/* binding */ MiniBatchTrainer)
/* harmony export */ });
/* harmony import */ var _AbstractTrainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractTrainer */ "./src/typescript/Trainer/AbstractTrainer.ts");
/* harmony import */ var _Math_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Math/math */ "./src/typescript/Math/math.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var MiniBatchTrainer = /*#__PURE__*/function (_AbstractTrainer) {
  _inherits(MiniBatchTrainer, _AbstractTrainer);
  var _super = _createSuper(MiniBatchTrainer);
  function MiniBatchTrainer() {
    var _this;
    _classCallCheck(this, MiniBatchTrainer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "batchSize", 100);
    return _this;
  }
  _createClass(MiniBatchTrainer, [{
    key: "setBatchSize",
    value: function setBatchSize(batchSize) {
      this.batchSize = batchSize;
      return this;
    }
  }, {
    key: "cost",
    value: function cost(inputDataset, outputDataset) {
      var batchSize = this.batchSize;
      var numberOfExamples = inputDataset.getNumberOfExamples();
      var numBatches = Math.ceil(numberOfExamples / batchSize);
      var cost = 0.0;
      var accuracy = 0.0;

      // calculate penalty
      var penalty = 0.0;
      this.network.getLayers().forEach(function (layer) {
        penalty = layer.penalty();
      });
      var startTime = new Date().getTime();
      var startIterationTime = new Date().getTime();
      for (var batch = 0, offset = 0; batch < numberOfExamples; batch += this.batchSize, offset += this.batchSize) {
        var startIterationTime2 = new Date().getTime();
        var input = inputDataset.getBatch(offset, this.batchSize);
        var correctOutput = outputDataset.getBatch(offset, this.batchSize);
        var predictions = this.network.forward(input.data);
        var error = correctOutput.data.multiply(predictions.log()).sum();
        cost += -1 / numberOfExamples * error + this.regularization / (penalty * (2 * inputDataset.data.cols));
        for (var col = 0; col < predictions.cols; col += 1) {
          var index1 = predictions.colMaxCoeffIndex(col);
          var index2 = correctOutput.data.colMaxCoeffIndex(col);
          if (index1 === index2) {
            accuracy++;
          }
        }
      }
      return {
        cost: cost,
        accuracy: accuracy / numberOfExamples * 100
      };
    }
  }, {
    key: "train",
    value: function train(inputDataset, outputDataset) {
      var _this2 = this;
      var numberOfExamples = inputDataset.getNumberOfExamples();
      var t = 0;
      this.optimizer.setBatchSize(this.batchSize);
      this.optimizer.setLearningRate(this.learningRate);
      for (var i = 0; i < this.iterations; i += 1) {
        var startTime = new Date().getTime();
        var startIterationTime = new Date().getTime();
        for (var batch = 0, offset = 0; batch < numberOfExamples; batch += this.batchSize, offset += this.batchSize) {
          var startIterationTime2 = new Date().getTime();
          var input = inputDataset.getBatch(offset, this.batchSize);
          var output = outputDataset.getBatch(offset, this.batchSize);
          var predictions = this.network.forward(input.data);
          this.network.backward(input.data, output.data, predictions, this.regularization);
          this.optimizer.setT(++t);
          this.network.getLayers().forEach(function (layer) {
            _this2.optimizer.optimize(layer);
          });
          if (this.verbose) {
            var cost = this.cost(input, output);
            var endIterationTime = new Date().getTime();
            console.log("Batch: ".concat(offset, " / ").concat(numberOfExamples, " | Batch time: ").concat(endIterationTime - startIterationTime2, "ms | Time from start: ").concat((0,_Math_math__WEBPACK_IMPORTED_MODULE_1__.round)((endIterationTime - startIterationTime) / 1000, 1), "s. | Cost: ").concat((0,_Math_math__WEBPACK_IMPORTED_MODULE_1__.round)(cost.cost, 2), " | Acc: ").concat(cost.accuracy));
          }
        }
        if (this.verbose) {
          if ((i + 1) % this.verboseStep === 0) {
            var endTime = new Date().getTime();
            var currentResult = this.cost(inputDataset, outputDataset);
            console.log("Iteration: ".concat(i + 1, " | Cost: ").concat((0,_Math_math__WEBPACK_IMPORTED_MODULE_1__.round)(currentResult.cost, 5), " | Accuracy: ").concat(currentResult.accuracy, "% | Time: ").concat((endTime - startTime) / 1000, " s."));
          }
        }
        this.stepCallback({
          iteration: i
        });
      }
      return this;
    }
  }]);
  return MiniBatchTrainer;
}(_AbstractTrainer__WEBPACK_IMPORTED_MODULE_0__.AbstractTrainer);

/***/ }),

/***/ "./src/typescript/Trainer/Optimizer/AbstractOptimizer.ts":
/*!***************************************************************!*\
  !*** ./src/typescript/Trainer/Optimizer/AbstractOptimizer.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractOptimizer": () => (/* binding */ AbstractOptimizer)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AbstractOptimizer = /*#__PURE__*/function () {
  function AbstractOptimizer() {
    _classCallCheck(this, AbstractOptimizer);
    _defineProperty(this, "batchSize", 0);
    _defineProperty(this, "t", 0);
    _defineProperty(this, "learningRate", 0);
  }
  _createClass(AbstractOptimizer, [{
    key: "setBatchSize",
    value: function setBatchSize(batchSize) {
      this.batchSize = batchSize;
      return this;
    }
  }, {
    key: "setT",
    value: function setT(t) {
      this.t = t;
      return this;
    }
  }, {
    key: "setLearningRate",
    value: function setLearningRate(learningRate) {
      this.learningRate = learningRate;
      return this;
    }
  }]);
  return AbstractOptimizer;
}();

/***/ }),

/***/ "./src/typescript/Trainer/Optimizer/OptimizerAdagrad.ts":
/*!**************************************************************!*\
  !*** ./src/typescript/Trainer/Optimizer/OptimizerAdagrad.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptimizerAdagrad": () => (/* binding */ OptimizerAdagrad)
/* harmony export */ });
/* harmony import */ var _AbstractOptimizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractOptimizer */ "./src/typescript/Trainer/Optimizer/AbstractOptimizer.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var OptimizerAdagrad = /*#__PURE__*/function (_AbstractOptimizer) {
  _inherits(OptimizerAdagrad, _AbstractOptimizer);
  var _super = _createSuper(OptimizerAdagrad);
  function OptimizerAdagrad() {
    _classCallCheck(this, OptimizerAdagrad);
    return _super.apply(this, arguments);
  }
  _createClass(OptimizerAdagrad, [{
    key: "optimize",
    value: function optimize(layer) {
      this.adagrad(layer, this.learningRate);
    }
  }, {
    key: "adagrad",
    value: function adagrad(layer, learningRate) {
      layer.dW = layer.dW.add(layer.gW.pow(2));
      layer.W = layer.W.subtract(layer.gW.multiply(learningRate).divide(layer.dW.sqrt().add(1e-8)).multiply(layer.gW));
      layer.db = layer.db.add(layer.gb.pow(2));
      layer.b = layer.b.subtract(layer.db.multiply(learningRate).divide(layer.db.sqrt().add(1e-8)).multiply(layer.gb));
    }
  }]);
  return OptimizerAdagrad;
}(_AbstractOptimizer__WEBPACK_IMPORTED_MODULE_0__.AbstractOptimizer);

/***/ }),

/***/ "./src/typescript/Trainer/Optimizer/OptimizerAdam.ts":
/*!***********************************************************!*\
  !*** ./src/typescript/Trainer/Optimizer/OptimizerAdam.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptimizerAdam": () => (/* binding */ OptimizerAdam)
/* harmony export */ });
/* harmony import */ var _AbstractOptimizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractOptimizer */ "./src/typescript/Trainer/Optimizer/AbstractOptimizer.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var OptimizerAdam = /*#__PURE__*/function (_AbstractOptimizer) {
  _inherits(OptimizerAdam, _AbstractOptimizer);
  var _super = _createSuper(OptimizerAdam);
  function OptimizerAdam() {
    var _this;
    _classCallCheck(this, OptimizerAdam);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "beta1", 0.9);
    _defineProperty(_assertThisInitialized(_this), "beta2", 0.999);
    return _this;
  }
  _createClass(OptimizerAdam, [{
    key: "setBeta1",
    value: function setBeta1(beta1) {
      this.beta1 = beta1;
      return this;
    }
  }, {
    key: "setBeta2",
    value: function setBeta2(beta2) {
      this.beta2 = beta2;
      return this;
    }
  }, {
    key: "optimize",
    value: function optimize(layer) {
      this.adam(layer, this.learningRate, this.t);
    }
  }, {
    key: "adam",
    value: function adam(layer, learningRate, t) {
      layer.vW = layer.vW.multiply(this.beta1).add(layer.gW.multiply(1 - this.beta1));
      layer.vb = layer.vb.multiply(this.beta1).add(layer.gb.multiply(1 - this.beta1));
      layer.sW = layer.sW.multiply(this.beta2).add(layer.sW.pow(2).multiply(1 - this.beta2));
      layer.sb = layer.sb.multiply(this.beta2).add(layer.sb.pow(2).multiply(1 - this.beta2));
      var vWCorrected = layer.vW.divide(1 - Math.pow(this.beta1, 2));
      var vbCorrected = layer.vb.divide(1 - Math.pow(this.beta1, 2));
      var sWCorrected = layer.sW.add(1e-8).sqrt();
      var sbCorrected = layer.sb.add(1e-8).sqrt();
      layer.W = layer.W.subtract(vWCorrected.divide(sWCorrected).multiply(learningRate));
      layer.b = layer.b.subtract(vbCorrected.divide(sbCorrected).multiply(learningRate));
    }
  }]);
  return OptimizerAdam;
}(_AbstractOptimizer__WEBPACK_IMPORTED_MODULE_0__.AbstractOptimizer);

/***/ }),

/***/ "./src/typescript/Trainer/Optimizer/OptimizerGradientDescent.ts":
/*!**********************************************************************!*\
  !*** ./src/typescript/Trainer/Optimizer/OptimizerGradientDescent.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptimizerGradientDescent": () => (/* binding */ OptimizerGradientDescent)
/* harmony export */ });
/* harmony import */ var _AbstractOptimizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractOptimizer */ "./src/typescript/Trainer/Optimizer/AbstractOptimizer.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var OptimizerGradientDescent = /*#__PURE__*/function (_AbstractOptimizer) {
  _inherits(OptimizerGradientDescent, _AbstractOptimizer);
  var _super = _createSuper(OptimizerGradientDescent);
  function OptimizerGradientDescent() {
    _classCallCheck(this, OptimizerGradientDescent);
    return _super.apply(this, arguments);
  }
  _createClass(OptimizerGradientDescent, [{
    key: "optimize",
    value: function optimize(layer) {
      this.gradientDescent(layer, this.learningRate);
    }
  }, {
    key: "gradientDescent",
    value: function gradientDescent(layer, learningRate) {
      layer.W = layer.W.subtract(layer.gW.multiply(learningRate));
      layer.b = layer.b.subtract(layer.b.multiply(learningRate));
    }
  }]);
  return OptimizerGradientDescent;
}(_AbstractOptimizer__WEBPACK_IMPORTED_MODULE_0__.AbstractOptimizer);

/***/ }),

/***/ "./src/typescript/Trainer/Optimizer/OptimizerMomentum.ts":
/*!***************************************************************!*\
  !*** ./src/typescript/Trainer/Optimizer/OptimizerMomentum.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptimizerMomentum": () => (/* binding */ OptimizerMomentum)
/* harmony export */ });
/* harmony import */ var _AbstractOptimizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractOptimizer */ "./src/typescript/Trainer/Optimizer/AbstractOptimizer.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var OptimizerMomentum = /*#__PURE__*/function (_AbstractOptimizer) {
  _inherits(OptimizerMomentum, _AbstractOptimizer);
  var _super = _createSuper(OptimizerMomentum);
  function OptimizerMomentum() {
    var _this;
    _classCallCheck(this, OptimizerMomentum);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "beta", 0.9);
    return _this;
  }
  _createClass(OptimizerMomentum, [{
    key: "optimize",
    value: function optimize(layer) {
      this.momentum(layer, this.learningRate);
    }
  }, {
    key: "setBeta",
    value: function setBeta(beta) {
      this.beta = beta;
      return this;
    }
  }, {
    key: "momentum",
    value: function momentum(layer, learningRate) {
      layer.vW = layer.gW.multiply(this.beta).add(layer.gW.multiply(1 - this.beta));
      layer.vb = layer.gb.multiply(this.beta).add(layer.gb.multiply(1 - this.beta));
      layer.W = layer.W.subtract(layer.vW.multiply(learningRate));
      layer.b = layer.b.subtract(layer.vb.multiply(learningRate));
    }
  }]);
  return OptimizerMomentum;
}(_AbstractOptimizer__WEBPACK_IMPORTED_MODULE_0__.AbstractOptimizer);

/***/ }),

/***/ "./src/typescript/Trainer/Optimizer/OptimizerRMSProp.ts":
/*!**************************************************************!*\
  !*** ./src/typescript/Trainer/Optimizer/OptimizerRMSProp.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptimizerRMSProp": () => (/* binding */ OptimizerRMSProp)
/* harmony export */ });
/* harmony import */ var _AbstractOptimizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractOptimizer */ "./src/typescript/Trainer/Optimizer/AbstractOptimizer.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var OptimizerRMSProp = /*#__PURE__*/function (_AbstractOptimizer) {
  _inherits(OptimizerRMSProp, _AbstractOptimizer);
  var _super = _createSuper(OptimizerRMSProp);
  function OptimizerRMSProp() {
    var _this;
    _classCallCheck(this, OptimizerRMSProp);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "alpha", 1e-3);
    _defineProperty(_assertThisInitialized(_this), "beta", 0.9);
    return _this;
  }
  _createClass(OptimizerRMSProp, [{
    key: "setBeta",
    value: function setBeta(beta) {
      this.beta = beta;
      return this;
    }
  }, {
    key: "setAlpha",
    value: function setAlpha(alpha) {
      this.alpha = alpha;
      return this;
    }
  }, {
    key: "optimize",
    value: function optimize(layer) {
      this.rmsprop(layer, this.learningRate, this.alpha, this.beta);
    }
  }, {
    key: "rmsprop",
    value: function rmsprop(layer, learningRate, alpha, beta) {
      layer.sW = layer.sW.multiply(beta).add(layer.gW.pow(2).multiply(1 - beta));
      layer.sb = layer.sb.multiply(beta).add(layer.gb.pow(2).multiply(1 - beta));
      layer.W = layer.W.subtract(layer.gW.multiply(alpha).divide(layer.sW.sqrt().add(1e-8)));
      layer.b = layer.b.subtract(layer.gb.multiply(alpha).divide(layer.sb.sqrt().add(1e-8)));
    }
  }]);
  return OptimizerRMSProp;
}(_AbstractOptimizer__WEBPACK_IMPORTED_MODULE_0__.AbstractOptimizer);

/***/ }),

/***/ "./src/typescript/Trainer/Optimizer/index.ts":
/*!***************************************************!*\
  !*** ./src/typescript/Trainer/Optimizer/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptimizerAdagrad": () => (/* reexport safe */ _OptimizerAdagrad__WEBPACK_IMPORTED_MODULE_2__.OptimizerAdagrad),
/* harmony export */   "OptimizerAdam": () => (/* reexport safe */ _OptimizerAdam__WEBPACK_IMPORTED_MODULE_0__.OptimizerAdam),
/* harmony export */   "OptimizerGradientDescent": () => (/* reexport safe */ _OptimizerGradientDescent__WEBPACK_IMPORTED_MODULE_1__.OptimizerGradientDescent),
/* harmony export */   "OptimizerMomentum": () => (/* reexport safe */ _OptimizerMomentum__WEBPACK_IMPORTED_MODULE_3__.OptimizerMomentum),
/* harmony export */   "OptimizerRMSProp": () => (/* reexport safe */ _OptimizerRMSProp__WEBPACK_IMPORTED_MODULE_4__.OptimizerRMSProp)
/* harmony export */ });
/* harmony import */ var _OptimizerAdam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptimizerAdam */ "./src/typescript/Trainer/Optimizer/OptimizerAdam.ts");
/* harmony import */ var _OptimizerGradientDescent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OptimizerGradientDescent */ "./src/typescript/Trainer/Optimizer/OptimizerGradientDescent.ts");
/* harmony import */ var _OptimizerAdagrad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OptimizerAdagrad */ "./src/typescript/Trainer/Optimizer/OptimizerAdagrad.ts");
/* harmony import */ var _OptimizerMomentum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OptimizerMomentum */ "./src/typescript/Trainer/Optimizer/OptimizerMomentum.ts");
/* harmony import */ var _OptimizerRMSProp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OptimizerRMSProp */ "./src/typescript/Trainer/Optimizer/OptimizerRMSProp.ts");







/***/ }),

/***/ "./src/typescript/Trainer/RNNTrainer.ts":
/*!**********************************************!*\
  !*** ./src/typescript/Trainer/RNNTrainer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RNNTrainer": () => (/* binding */ RNNTrainer)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var RNNTrainer = /*#__PURE__*/function () {
  function RNNTrainer(network) {
    _classCallCheck(this, RNNTrainer);
    _defineProperty(this, "network", null);
    _defineProperty(this, "iterations", 1000);
    _defineProperty(this, "learningRate", 0.01);
    this.network = network;
  }
  _createClass(RNNTrainer, [{
    key: "train",
    value: function train(dataset) {
      var loss = this.network.loss(dataset.getVocabularySize(), 7);
      var _dataset$buildData = dataset.buildData(100),
        _dataset$buildData2 = _slicedToArray(_dataset$buildData, 2),
        X = _dataset$buildData2[0],
        Y = _dataset$buildData2[1];
      var _dataset$vectorizatio = dataset.vectorization(X, Y),
        _dataset$vectorizatio2 = _slicedToArray(_dataset$vectorizatio, 2),
        x = _dataset$vectorizatio2[0],
        y = _dataset$vectorizatio2[1];
      var aPrev = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.network.getDimensions()[0], this.network.getDimensions()[0]).setZeros();
      for (var iteration = 0; iteration < this.iterations; iteration += 1) {
        var index = iteration % x.length;
        var _this$network$forward = this.network.forward(x[index], y, aPrev),
          _this$network$forward2 = _slicedToArray(_this$network$forward, 1),
          _loss = _this$network$forward2[0];
        loss = _loss;
        var _this$network$optimiz = this.network.optimize(x[index], y, aPrev, this.learningRate),
          _this$network$optimiz2 = _slicedToArray(_this$network$optimiz, 2),
          currentLoss = _this$network$optimiz2[0],
          _aPrev = _this$network$optimiz2[1];
        aPrev = _aPrev;
        loss = loss * 0.999 + currentLoss * 0.001;
        console.log("Iteration ".concat(iteration + 1, " | Loss: ").concat(loss, " | Sample: ").concat(this.network.sample(dataset).trim()));
      }
      return [loss];
    }
  }, {
    key: "setIterations",
    value: function setIterations(num) {
      this.iterations = num;
      return this;
    }
  }, {
    key: "setLearningRate",
    value: function setLearningRate(num) {
      this.learningRate = num;
      return this;
    }
  }]);
  return RNNTrainer;
}();

/***/ }),

/***/ "./src/typescript/Trainer/Trainer.ts":
/*!*******************************************!*\
  !*** ./src/typescript/Trainer/Trainer.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Trainer": () => (/* binding */ Trainer)
/* harmony export */ });
/* harmony import */ var _AbstractTrainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractTrainer */ "./src/typescript/Trainer/AbstractTrainer.ts");
/* harmony import */ var _Math_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Math/math */ "./src/typescript/Math/math.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Trainer = /*#__PURE__*/function (_AbstractTrainer) {
  _inherits(Trainer, _AbstractTrainer);
  var _super = _createSuper(Trainer);
  function Trainer() {
    _classCallCheck(this, Trainer);
    return _super.apply(this, arguments);
  }
  _createClass(Trainer, [{
    key: "train",
    value: function train(inputDataset, outputDataset) {
      var _this = this;
      var numberOfExamples = inputDataset.getNumberOfExamples();
      var t = 0;
      this.optimizer.setBatchSize(numberOfExamples);
      this.optimizer.setLearningRate(this.learningRate);
      for (var i = 0; i < this.iterations; i += 1) {
        var startTime = new Date().getTime();
        var predictions = this.network.forward(inputDataset.data);
        this.network.backward(inputDataset.data, outputDataset.data, predictions, this.regularization);
        this.optimizer.setT(++t);
        this.network.getLayers().forEach(function (layer) {
          _this.optimizer.optimize(layer);
        });
        if (this.verbose) {
          if ((i + 1) % this.verboseStep === 0) {
            var currentResult = this.cost(inputDataset, outputDataset);
            var endTime = new Date().getTime();
            console.log("Iteration: ".concat(i + 1, " | Cost: ").concat((0,_Math_math__WEBPACK_IMPORTED_MODULE_1__.round)(currentResult.cost, 5), " | Accuracy: ").concat((0,_Math_math__WEBPACK_IMPORTED_MODULE_1__.round)(currentResult.accuracy, 2), "% | Time: ").concat((endTime - startTime) / 1000, " s."));
          }
        }
        this.stepCallback({
          iteration: i
        });
      }
      return this;
    }
  }]);
  return Trainer;
}(_AbstractTrainer__WEBPACK_IMPORTED_MODULE_0__.AbstractTrainer);

/***/ }),

/***/ "./src/typescript/Trainer/index.ts":
/*!*****************************************!*\
  !*** ./src/typescript/Trainer/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiniBatchTrainer": () => (/* reexport safe */ _MiniBatchTrainer__WEBPACK_IMPORTED_MODULE_0__.MiniBatchTrainer),
/* harmony export */   "RNNTrainer": () => (/* reexport safe */ _RNNTrainer__WEBPACK_IMPORTED_MODULE_2__.RNNTrainer),
/* harmony export */   "Trainer": () => (/* reexport safe */ _Trainer__WEBPACK_IMPORTED_MODULE_1__.Trainer)
/* harmony export */ });
/* harmony import */ var _MiniBatchTrainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MiniBatchTrainer */ "./src/typescript/Trainer/MiniBatchTrainer.ts");
/* harmony import */ var _Trainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Trainer */ "./src/typescript/Trainer/Trainer.ts");
/* harmony import */ var _RNNTrainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RNNTrainer */ "./src/typescript/Trainer/RNNTrainer.ts");





/***/ }),

/***/ "./src/typescript/types.ts":
/*!*********************************!*\
  !*** ./src/typescript/types.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayerType": () => (/* binding */ LayerType)
/* harmony export */ });
var LayerType;
(function (LayerType) {
  LayerType["logistic"] = "logistic";
  LayerType["softmax"] = "softmax";
  LayerType["tanh"] = "tanh";
  LayerType["relu"] = "relu";
  LayerType["softplus"] = "softplus";
  LayerType["conv"] = "conv";
  LayerType["maxpool"] = "maxpool";
  LayerType["fullyconnected"] = "fullyconnected";
  LayerType["purelin"] = "purelin";
  LayerType["rnnlayer"] = "rnnlayer";
})(LayerType || (LayerType = {}));

/***/ }),

/***/ "csvtojson":
/*!****************************!*\
  !*** external "csvtojson" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("csvtojson");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/typescript/main.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Computation": () => (/* binding */ Computation),
/* harmony export */   "Dataset": () => (/* binding */ Dataset),
/* harmony export */   "DatasetBuilder": () => (/* binding */ DatasetBuilder),
/* harmony export */   "DatasetBuilderSource": () => (/* binding */ DatasetBuilderSource),
/* harmony export */   "DatasetModifier": () => (/* binding */ DatasetModifier),
/* harmony export */   "Layer": () => (/* binding */ Layer),
/* harmony export */   "Math": () => (/* binding */ Math),
/* harmony export */   "Network": () => (/* binding */ Network),
/* harmony export */   "NetworkBuilder": () => (/* binding */ NetworkBuilder),
/* harmony export */   "Optimizer": () => (/* binding */ Optimizer),
/* harmony export */   "Trainer": () => (/* binding */ Trainer)
/* harmony export */ });
/* harmony import */ var _NetworkBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NetworkBuilder */ "./src/typescript/NetworkBuilder/index.ts");
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layer */ "./src/typescript/Layer/index.ts");
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Math/Matrix */ "./src/typescript/Math/Matrix.ts");
/* harmony import */ var _Dataset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dataset */ "./src/typescript/Dataset/index.ts");
/* harmony import */ var _DatasetBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DatasetBuilder */ "./src/typescript/DatasetBuilder/index.ts");
/* harmony import */ var _Trainer_Optimizer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Trainer/Optimizer */ "./src/typescript/Trainer/Optimizer/index.ts");
/* harmony import */ var _Trainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Trainer */ "./src/typescript/Trainer/index.ts");
/* harmony import */ var _Dataset_DatasetModifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Dataset/DatasetModifier */ "./src/typescript/Dataset/DatasetModifier/index.ts");
/* harmony import */ var _Computation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Computation */ "./src/typescript/Computation/index.ts");
/* harmony import */ var _DatasetBuilder_DatasetBuilderSource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DatasetBuilder/DatasetBuilderSource */ "./src/typescript/DatasetBuilder/DatasetBuilderSource/index.ts");
/* harmony import */ var _Network__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Network */ "./src/typescript/Network/index.ts");
/* harmony import */ var _DatasetBuilder_DatasetVocabularyBuilderSource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DatasetBuilder/DatasetVocabularyBuilderSource */ "./src/typescript/DatasetBuilder/DatasetVocabularyBuilderSource/index.ts");












var NetworkBuilder = {
  NetworkBuilder1D: _NetworkBuilder__WEBPACK_IMPORTED_MODULE_0__.NetworkBuilder1D,
  NetworkBuilder3D: _NetworkBuilder__WEBPACK_IMPORTED_MODULE_0__.NetworkBuilder3D
};
var Math = {
  Matrix: _Math_Matrix__WEBPACK_IMPORTED_MODULE_2__.Matrix
};
var Layer = {
  SoftmaxLayer: _Layer__WEBPACK_IMPORTED_MODULE_1__.SoftmaxLayer,
  LogisticLayer: _Layer__WEBPACK_IMPORTED_MODULE_1__.LogisticLayer,
  ReluLayer: _Layer__WEBPACK_IMPORTED_MODULE_1__.ReluLayer,
  SoftplusLayer: _Layer__WEBPACK_IMPORTED_MODULE_1__.SoftplusLayer,
  TanhLayer: _Layer__WEBPACK_IMPORTED_MODULE_1__.TanhLayer,
  ConvLayer: _Layer__WEBPACK_IMPORTED_MODULE_1__.ConvLayer,
  MaxPoolLayer: _Layer__WEBPACK_IMPORTED_MODULE_1__.MaxPoolLayer,
  FullyConnectedLayer: _Layer__WEBPACK_IMPORTED_MODULE_1__.FullyConnectedLayer,
  RecurrentLayer: _Layer__WEBPACK_IMPORTED_MODULE_1__.RecurrentLayer,
  LSTMLayer: _Layer__WEBPACK_IMPORTED_MODULE_1__.LSTMLayer
};
var DatasetBuilder = {
  DatasetBuilder: _DatasetBuilder__WEBPACK_IMPORTED_MODULE_4__.DatasetBuilder,
  DatasetVocabularyBuilder: _DatasetBuilder__WEBPACK_IMPORTED_MODULE_4__.DatasetVocabularyBuilder
};
var Optimizer = {
  OptimizerAdam: _Trainer_Optimizer__WEBPACK_IMPORTED_MODULE_5__.OptimizerAdam,
  OptimizerGradientDescent: _Trainer_Optimizer__WEBPACK_IMPORTED_MODULE_5__.OptimizerGradientDescent,
  OptimizerAdagrad: _Trainer_Optimizer__WEBPACK_IMPORTED_MODULE_5__.OptimizerAdagrad,
  OptimizerMomentum: _Trainer_Optimizer__WEBPACK_IMPORTED_MODULE_5__.OptimizerMomentum,
  OptimizerRMSProp: _Trainer_Optimizer__WEBPACK_IMPORTED_MODULE_5__.OptimizerRMSProp
};
var Trainer = {
  MiniBatchTrainer: _Trainer__WEBPACK_IMPORTED_MODULE_6__.MiniBatchTrainer,
  Trainer: _Trainer__WEBPACK_IMPORTED_MODULE_6__.Trainer,
  RNNTrainer: _Trainer__WEBPACK_IMPORTED_MODULE_6__.RNNTrainer
};
var DatasetModifier = {
  CallbackDatasetModifier: _Dataset_DatasetModifier__WEBPACK_IMPORTED_MODULE_7__.CallbackDatasetModifier,
  MinMaxScalingDatasetModifier: _Dataset_DatasetModifier__WEBPACK_IMPORTED_MODULE_7__.MinMaxScalingDatasetModifier,
  MissingDataScalingDatasetModifier: _Dataset_DatasetModifier__WEBPACK_IMPORTED_MODULE_7__.MissingDataScalingDatasetModifier,
  ShuffleDatasetModifier: _Dataset_DatasetModifier__WEBPACK_IMPORTED_MODULE_7__.ShuffleDatasetModifier
};
var Computation = {
  ComputationCPU: _Computation__WEBPACK_IMPORTED_MODULE_8__.ComputationCPU,
  ComputationGPU: _Computation__WEBPACK_IMPORTED_MODULE_8__.ComputationGPU,
  setComputation: _Computation__WEBPACK_IMPORTED_MODULE_8__.setComputation,
  getComputation: _Computation__WEBPACK_IMPORTED_MODULE_8__.getComputation
};
var Dataset = {
  Dataset: _Dataset__WEBPACK_IMPORTED_MODULE_3__.Dataset
};
var DatasetBuilderSource = {
  DatasetBuilderSourceCSV: _DatasetBuilder_DatasetBuilderSource__WEBPACK_IMPORTED_MODULE_9__.DatasetBuilderSourceCSV,
  DatasetVocabularyBuilderSourceTextFile: _DatasetBuilder_DatasetVocabularyBuilderSource__WEBPACK_IMPORTED_MODULE_11__.DatasetVocabularyBuilderSourceTextFile
};
var Network = {
  NetworkRNN: _Network__WEBPACK_IMPORTED_MODULE_10__.NetworkRNN
};

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=impulse-ts.dev.js.map