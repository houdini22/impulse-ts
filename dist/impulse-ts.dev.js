/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/typescript/builder/abstract.tsx":
/*!*********************************************!*\
  !*** ./src/typescript/builder/abstract.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractBuilder": () => (/* binding */ AbstractBuilder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../network */ "./src/typescript/network.tsx");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var AbstractBuilder = /*#__PURE__*/function () {
  function AbstractBuilder(dimension) {
    _classCallCheck(this, AbstractBuilder);

    _defineProperty(this, "dimensions", null);

    _defineProperty(this, "lastLayer", null);

    _defineProperty(this, "network", null);

    this.dimensions = dimension;
    this.network = new _network__WEBPACK_IMPORTED_MODULE_0__.default(dimension);
  }

  _createClass(AbstractBuilder, [{
    key: "createLayer",
    value: function createLayer(type, callback) {
      var layer = new type();

      if (typeof callback === "function") {
        callback(layer);
      }

      if (this.lastLayer === null) {
        this.firstLayerTransition(layer);
      } else {
        layer.transition(this.lastLayer);
      }

      layer.configure();
      this.network.addLayer(layer);
      this.lastLayer = layer;
    }
  }, {
    key: "getNetwork",
    value: function getNetwork() {
      return this.network;
    }
  }]);

  return AbstractBuilder;
}();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AbstractBuilder);

/***/ }),

/***/ "./src/typescript/builder/builder1d.tsx":
/*!**********************************************!*\
  !*** ./src/typescript/builder/builder1d.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Builder1D": () => (/* binding */ Builder1D),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/typescript/builder/abstract.tsx");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main */ "./src/typescript/main.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Builder1D = /*#__PURE__*/function (_AbstractBuilder) {
  _inherits(Builder1D, _AbstractBuilder);

  var _super = _createSuper(Builder1D);

  function Builder1D() {
    _classCallCheck(this, Builder1D);

    return _super.apply(this, arguments);
  }

  _createClass(Builder1D, [{
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
          var builder = new Builder1D(json["dimensions"]);
          json["layers"].forEach(function (layerData) {
            var layerClass = null;

            if (layerData["type"] === "logistic") {
              layerClass = _main__WEBPACK_IMPORTED_MODULE_2__.LogisticLayer;
            } else if (layerData["type"] === "softmax") {
              layerClass = _main__WEBPACK_IMPORTED_MODULE_2__.SoftmaxLayer;
            } else if (layerData["type"] === "relu") {
              layerClass = _main__WEBPACK_IMPORTED_MODULE_2__.ReluLayer;
            } else if (layerData["type"] === "softplus") {
              layerClass = _main__WEBPACK_IMPORTED_MODULE_2__.SoftplusLayer;
            } else if (layerData["type"] === "tanh") {
              layerClass = _main__WEBPACK_IMPORTED_MODULE_2__.TanhLayer;
            }

            builder.createLayer(layerClass, function (layer) {
              layer.setSize(layerData["dimensions"]);
            });
          });
          var network = builder.getNetwork();
          network.getLayers().forEach(function (layer, i) {
            layer.W = json["layers"]["W"];
            layer.b = json["layers"]["b"];
          });
          resolve(network);
        });
      });
    }
  }]);

  return Builder1D;
}(_abstract__WEBPACK_IMPORTED_MODULE_0__.AbstractBuilder);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Builder1D);

/***/ }),

/***/ "./src/typescript/dataset/Dataset.tsx":
/*!********************************************!*\
  !*** ./src/typescript/dataset/Dataset.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dataset": () => (/* binding */ Dataset)
/* harmony export */ });
/* harmony import */ var _math_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/matrix */ "./src/typescript/math/matrix.tsx");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Dataset = /*#__PURE__*/function () {
  function Dataset(exampleSize, numberOfExamples, arr) {
    _classCallCheck(this, Dataset);

    _defineProperty(this, "exampleSize", 0);

    _defineProperty(this, "numberOfExamples", 0);

    _defineProperty(this, "data", null);

    this.exampleSize = exampleSize;
    this.numberOfExamples = numberOfExamples;
    var data = [];

    for (var example = 0; example < numberOfExamples; example += 1) {
      data[example] = [];

      for (var dataIndex = 0; dataIndex < exampleSize; dataIndex += 1) {
        data[example][dataIndex] = Number(arr[example][dataIndex] || 0);
      }
    }

    this.data = new _math_matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.exampleSize, this.numberOfExamples, data);
  }

  _createClass(Dataset, [{
    key: "exampleAt",
    value: function exampleAt(index) {
      var data = [];

      for (var dataIndex = 0; dataIndex < this.exampleSize; dataIndex += 1) {
        data[dataIndex] = [];
        data[dataIndex][0] = this.data.data[index][dataIndex];
      }

      return new _math_matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.exampleSize, 1, data);
    }
  }]);

  return Dataset;
}();

/***/ }),

/***/ "./src/typescript/dataset/DatasetBuilder.tsx":
/*!***************************************************!*\
  !*** ./src/typescript/dataset/DatasetBuilder.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetBuilder": () => (/* binding */ DatasetBuilder)
/* harmony export */ });
/* harmony import */ var csvtojson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csvtojson */ "csvtojson");
/* harmony import */ var csvtojson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csvtojson__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Dataset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dataset */ "./src/typescript/dataset/Dataset.tsx");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var DatasetBuilder = /*#__PURE__*/function () {
  function DatasetBuilder() {
    _classCallCheck(this, DatasetBuilder);
  }

  _createClass(DatasetBuilder, null, [{
    key: "fromCSV",
    value: function fromCSV(csvPath) {
      return new Promise(function (resolve) {
        csvtojson__WEBPACK_IMPORTED_MODULE_0__({
          noheader: true,
          output: "csv"
        }).fromFile(csvPath).then(function (arr) {
          var numberOfExamples = arr.length;
          var exampleSize = arr[0].length;
          var dataset = new _Dataset__WEBPACK_IMPORTED_MODULE_1__.Dataset(exampleSize, numberOfExamples, arr);
          resolve(dataset);
        });
      });
    }
  }]);

  return DatasetBuilder;
}();

/***/ }),

/***/ "./src/typescript/layer/abstract.tsx":
/*!*******************************************!*\
  !*** ./src/typescript/layer/abstract.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractLayer": () => (/* binding */ AbstractLayer)
/* harmony export */ });
/* harmony import */ var _math_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/matrix */ "./src/typescript/math/matrix.tsx");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var AbstractLayer = /*#__PURE__*/function () {
  function AbstractLayer() {
    _classCallCheck(this, AbstractLayer);

    _defineProperty(this, "width", 0);

    _defineProperty(this, "height", 0);

    _defineProperty(this, "depth", 0);

    _defineProperty(this, "previousLayer", null);

    _defineProperty(this, "backPropagation", null);

    this.W = new _math_matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix();
    this.b = new _math_matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix();
    this.A = new _math_matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix();
    this.Z = new _math_matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix();
    this.gW = new _math_matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix();
    this.gb = new _math_matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix();
  }

  _createClass(AbstractLayer, [{
    key: "getBackPropagation",
    value: function getBackPropagation() {
      return this.backPropagation;
    }
  }, {
    key: "forward",
    value: function forward(input) {
      this.Z = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.elementWiseAdd)((0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.multiply)(this.W, input), this.b.replicate(1, input.cols));
      this.A = this.activation(this.Z);
      return this.A;
    }
  }, {
    key: "setWidth",
    value: function setWidth(value) {
      this.width = value;
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
    }
  }]);

  return AbstractLayer;
}();



/***/ }),

/***/ "./src/typescript/layer/abstract1d.tsx":
/*!*********************************************!*\
  !*** ./src/typescript/layer/abstract1d.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractLayer1D": () => (/* binding */ AbstractLayer1D)
/* harmony export */ });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/typescript/layer/abstract.tsx");
/* harmony import */ var _math_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/matrix */ "./src/typescript/math/matrix.tsx");
/* harmony import */ var _backpropagation_backpropagation1dto1d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backpropagation/backpropagation1dto1d */ "./src/typescript/layer/backpropagation/backpropagation1dto1d.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var AbstractLayer1D = /*#__PURE__*/function (_AbstractLayer) {
  _inherits(AbstractLayer1D, _AbstractLayer);

  var _super = _createSuper(AbstractLayer1D);

  function AbstractLayer1D() {
    var _this;

    _classCallCheck(this, AbstractLayer1D);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "depth", 1);

    return _this;
  }

  _createClass(AbstractLayer1D, [{
    key: "configure",
    value: function configure() {
      this.W.resize(this.height, this.width);
      this.W = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.fillRandom)(this.W, this.width);
      this.b.resize(this.height, 1);
      this.b = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.fillRandom)(this.b, this.width);
      this.gW.resize(this.height, this.width);
      this.gW = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.setZeros)(this.gW);
      this.gb.resize(this.height, 1);
      this.gb = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.setZeros)(this.gb);
      this.backPropagation = new _backpropagation_backpropagation1dto1d__WEBPACK_IMPORTED_MODULE_2__.Backpropagation1Dto1D(this, this.previousLayer);
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
    }
  }, {
    key: "setSize",
    value: function setSize(value) {
      this.setHeight(value[0]);
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
  }]);

  return AbstractLayer1D;
}(_abstract__WEBPACK_IMPORTED_MODULE_0__.AbstractLayer);



/***/ }),

/***/ "./src/typescript/layer/backpropagation/abstract.tsx":
/*!***********************************************************!*\
  !*** ./src/typescript/layer/backpropagation/abstract.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractBackPropagation": () => (/* binding */ AbstractBackPropagation)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AbstractBackPropagation = function AbstractBackPropagation(layer, previousLayer) {
  _classCallCheck(this, AbstractBackPropagation);

  _defineProperty(this, "layer", null);

  _defineProperty(this, "previousLayer", null);

  this.layer = layer;
  this.previousLayer = previousLayer;
};

/***/ }),

/***/ "./src/typescript/layer/backpropagation/backpropagation1dto1d.tsx":
/*!************************************************************************!*\
  !*** ./src/typescript/layer/backpropagation/backpropagation1dto1d.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Backpropagation1Dto1D": () => (/* binding */ Backpropagation1Dto1D)
/* harmony export */ });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/typescript/layer/backpropagation/abstract.tsx");
/* harmony import */ var _math_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../math/matrix */ "./src/typescript/math/matrix.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Backpropagation1Dto1D = /*#__PURE__*/function (_AbstractBackPropagat) {
  _inherits(Backpropagation1Dto1D, _AbstractBackPropagat);

  var _super = _createSuper(Backpropagation1Dto1D);

  function Backpropagation1Dto1D() {
    _classCallCheck(this, Backpropagation1Dto1D);

    return _super.apply(this, arguments);
  }

  _createClass(Backpropagation1Dto1D, [{
    key: "propagate",
    value: function propagate(input, numberOfExamples, regularization, sigma) {
      var previousActivations = this.previousLayer !== null ? this.previousLayer.A : input;
      var delta = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.multiply)(sigma, previousActivations.transpose().conjugate());
      this.layer.gW = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseAdd)((0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseDivideNumber)(delta.rowwiseSum(), numberOfExamples), (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseMultiplyNumber)(this.layer.W, regularization / numberOfExamples));
      this.layer.gb = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseDivideNumber)(sigma.rowwiseSum(), numberOfExamples);

      if (this.previousLayer !== null) {
        return (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseMultiply)((0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.multiply)(this.layer.W.transpose(), sigma), this.previousLayer.derivative(this.previousLayer.A));
      }

      return new _math_matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    }
  }]);

  return Backpropagation1Dto1D;
}(_abstract__WEBPACK_IMPORTED_MODULE_0__.AbstractBackPropagation);

/***/ }),

/***/ "./src/typescript/layer/index.tsx":
/*!****************************************!*\
  !*** ./src/typescript/layer/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractLayer": () => (/* reexport safe */ _abstract__WEBPACK_IMPORTED_MODULE_0__.AbstractLayer),
/* harmony export */   "SoftmaxLayer": () => (/* reexport safe */ _softmax__WEBPACK_IMPORTED_MODULE_1__.SoftmaxLayer),
/* harmony export */   "LogisticLayer": () => (/* reexport safe */ _logistic__WEBPACK_IMPORTED_MODULE_2__.LogisticLayer),
/* harmony export */   "TanhLayer": () => (/* reexport safe */ _tanh__WEBPACK_IMPORTED_MODULE_3__.TanhLayer),
/* harmony export */   "ReluLayer": () => (/* reexport safe */ _relu__WEBPACK_IMPORTED_MODULE_4__.ReluLayer),
/* harmony export */   "SoftplusLayer": () => (/* reexport safe */ _softplus__WEBPACK_IMPORTED_MODULE_5__.SoftplusLayer)
/* harmony export */ });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/typescript/layer/abstract.tsx");
/* harmony import */ var _softmax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./softmax */ "./src/typescript/layer/softmax.tsx");
/* harmony import */ var _logistic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logistic */ "./src/typescript/layer/logistic.tsx");
/* harmony import */ var _tanh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tanh */ "./src/typescript/layer/tanh.tsx");
/* harmony import */ var _relu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relu */ "./src/typescript/layer/relu.tsx");
/* harmony import */ var _softplus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./softplus */ "./src/typescript/layer/softplus.tsx");








/***/ }),

/***/ "./src/typescript/layer/logistic.tsx":
/*!*******************************************!*\
  !*** ./src/typescript/layer/logistic.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogisticLayer": () => (/* binding */ LogisticLayer)
/* harmony export */ });
/* harmony import */ var _math_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/matrix */ "./src/typescript/math/matrix.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/typescript/types.tsx");
/* harmony import */ var _abstract1d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract1d */ "./src/typescript/layer/abstract1d.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





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
      return (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.logisticActivation)(m);
    }
  }, {
    key: "derivative",
    value: function derivative(m) {
      return (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.logisticDerivative)(m);
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_1__.LayerType.logistic;
    }
  }, {
    key: "loss",
    value: function loss(output, predictions) {
      return (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.logisticLoss)(output, predictions);
    }
  }, {
    key: "error",
    value: function error(m) {
      return -1.0 / m;
    }
  }]);

  return LogisticLayer;
}(_abstract1d__WEBPACK_IMPORTED_MODULE_2__.AbstractLayer1D);



/***/ }),

/***/ "./src/typescript/layer/relu.tsx":
/*!***************************************!*\
  !*** ./src/typescript/layer/relu.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReluLayer": () => (/* binding */ ReluLayer)
/* harmony export */ });
/* harmony import */ var _math_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/matrix */ "./src/typescript/math/matrix.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/typescript/types.tsx");
/* harmony import */ var _abstract1d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract1d */ "./src/typescript/layer/abstract1d.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





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
      return (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.reluActivation)(m);
    }
  }, {
    key: "derivative",
    value: function derivative(m) {
      return (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.reluDerivative)(m);
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_1__.LayerType.relu;
    }
  }, {
    key: "loss",
    value: function loss(output, predictions) {
      return 0.0; // todo
    }
  }, {
    key: "error",
    value: function error(m) {
      return 0.0; // todo
    }
  }]);

  return ReluLayer;
}(_abstract1d__WEBPACK_IMPORTED_MODULE_2__.AbstractLayer1D);



/***/ }),

/***/ "./src/typescript/layer/softmax.tsx":
/*!******************************************!*\
  !*** ./src/typescript/layer/softmax.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoftmaxLayer": () => (/* binding */ SoftmaxLayer)
/* harmony export */ });
/* harmony import */ var _math_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/matrix */ "./src/typescript/math/matrix.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/typescript/types.tsx");
/* harmony import */ var _abstract1d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract1d */ "./src/typescript/layer/abstract1d.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





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
      return (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.softmaxActivation)(m);
    }
  }, {
    key: "derivative",
    value: function derivative(m) {
      throw new Error("Unsupported usage.");
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_1__.LayerType.softmax;
    }
  }, {
    key: "loss",
    value: function loss(output, predictions) {
      return (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.softmaxLoss)(output, predictions);
    }
  }, {
    key: "error",
    value: function error(m) {
      return -1.0 / m;
    }
  }]);

  return SoftmaxLayer;
}(_abstract1d__WEBPACK_IMPORTED_MODULE_2__.AbstractLayer1D);



/***/ }),

/***/ "./src/typescript/layer/softplus.tsx":
/*!*******************************************!*\
  !*** ./src/typescript/layer/softplus.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoftplusLayer": () => (/* binding */ SoftplusLayer)
/* harmony export */ });
/* harmony import */ var _math_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/matrix */ "./src/typescript/math/matrix.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/typescript/types.tsx");
/* harmony import */ var _abstract1d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract1d */ "./src/typescript/layer/abstract1d.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





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
      return (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.softplusActivation)(m);
    }
  }, {
    key: "derivative",
    value: function derivative(m) {
      return (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.softplusDerivative)(m);
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_1__.LayerType.softplus;
    }
  }, {
    key: "loss",
    value: function loss(output, predictions) {
      return 0.0; // todo
    }
  }, {
    key: "error",
    value: function error(m) {
      return 0.0; // todo
    }
  }]);

  return SoftplusLayer;
}(_abstract1d__WEBPACK_IMPORTED_MODULE_2__.AbstractLayer1D);



/***/ }),

/***/ "./src/typescript/layer/tanh.tsx":
/*!***************************************!*\
  !*** ./src/typescript/layer/tanh.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TanhLayer": () => (/* binding */ TanhLayer)
/* harmony export */ });
/* harmony import */ var _math_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/matrix */ "./src/typescript/math/matrix.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/typescript/types.tsx");
/* harmony import */ var _abstract1d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract1d */ "./src/typescript/layer/abstract1d.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





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
      return (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.tanhActivation)(m);
    }
  }, {
    key: "derivative",
    value: function derivative(m) {
      return (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.tanhDerivative)(m);
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_1__.LayerType.tanh;
    }
  }, {
    key: "loss",
    value: function loss(output, predictions) {
      return 0.0; // todo
    }
  }, {
    key: "error",
    value: function error(m) {
      return 0.0; // todo
    }
  }]);

  return TanhLayer;
}(_abstract1d__WEBPACK_IMPORTED_MODULE_2__.AbstractLayer1D);



/***/ }),

/***/ "./src/typescript/main.tsx":
/*!*********************************!*\
  !*** ./src/typescript/main.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Builder1D": () => (/* reexport safe */ _builder_builder1d__WEBPACK_IMPORTED_MODULE_0__.Builder1D),
/* harmony export */   "Matrix": () => (/* reexport safe */ _math_matrix__WEBPACK_IMPORTED_MODULE_2__.Matrix),
/* harmony export */   "SoftmaxLayer": () => (/* reexport safe */ _layer__WEBPACK_IMPORTED_MODULE_1__.SoftmaxLayer),
/* harmony export */   "LogisticLayer": () => (/* reexport safe */ _layer__WEBPACK_IMPORTED_MODULE_1__.LogisticLayer),
/* harmony export */   "matrixMultiply": () => (/* reexport safe */ _math_matrix__WEBPACK_IMPORTED_MODULE_2__.multiply),
/* harmony export */   "matrixSum": () => (/* reexport safe */ _math_matrix__WEBPACK_IMPORTED_MODULE_2__.sum),
/* harmony export */   "matrixFillRandom": () => (/* reexport safe */ _math_matrix__WEBPACK_IMPORTED_MODULE_2__.fillRandom),
/* harmony export */   "matrixElementWiseMultiply": () => (/* reexport safe */ _math_matrix__WEBPACK_IMPORTED_MODULE_2__.elementWiseMultiply),
/* harmony export */   "matrixElementWiseDivide": () => (/* reexport safe */ _math_matrix__WEBPACK_IMPORTED_MODULE_2__.elementWiseDivide),
/* harmony export */   "matrixElementWiseAdd": () => (/* reexport safe */ _math_matrix__WEBPACK_IMPORTED_MODULE_2__.elementWiseAdd),
/* harmony export */   "matrixElementWiseSubtract": () => (/* reexport safe */ _math_matrix__WEBPACK_IMPORTED_MODULE_2__.elementWiseSubtract),
/* harmony export */   "DatasetBuilder": () => (/* reexport safe */ _dataset_DatasetBuilder__WEBPACK_IMPORTED_MODULE_3__.DatasetBuilder),
/* harmony export */   "ReluLayer": () => (/* reexport safe */ _layer__WEBPACK_IMPORTED_MODULE_1__.ReluLayer),
/* harmony export */   "SoftplusLayer": () => (/* reexport safe */ _layer__WEBPACK_IMPORTED_MODULE_1__.SoftplusLayer),
/* harmony export */   "TanhLayer": () => (/* reexport safe */ _layer__WEBPACK_IMPORTED_MODULE_1__.TanhLayer)
/* harmony export */ });
/* harmony import */ var _builder_builder1d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder/builder1d */ "./src/typescript/builder/builder1d.tsx");
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layer */ "./src/typescript/layer/index.tsx");
/* harmony import */ var _math_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math/matrix */ "./src/typescript/math/matrix.tsx");
/* harmony import */ var _dataset_DatasetBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataset/DatasetBuilder */ "./src/typescript/dataset/DatasetBuilder.tsx");







/***/ }),

/***/ "./src/typescript/math/matrix.tsx":
/*!****************************************!*\
  !*** ./src/typescript/math/matrix.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gpu": () => (/* binding */ gpu),
/* harmony export */   "Matrix": () => (/* binding */ Matrix),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "elementWiseAdd": () => (/* binding */ elementWiseAdd),
/* harmony export */   "elementWiseSubtract": () => (/* binding */ elementWiseSubtract),
/* harmony export */   "fillRandom": () => (/* binding */ fillRandom),
/* harmony export */   "setZeros": () => (/* binding */ setZeros),
/* harmony export */   "elementWiseMultiply": () => (/* binding */ elementWiseMultiply),
/* harmony export */   "elementWiseMultiplyNumber": () => (/* binding */ elementWiseMultiplyNumber),
/* harmony export */   "sum": () => (/* binding */ sum),
/* harmony export */   "cols": () => (/* binding */ cols),
/* harmony export */   "elementWiseDivide": () => (/* binding */ elementWiseDivide),
/* harmony export */   "elementWiseDivideNumber": () => (/* binding */ elementWiseDivideNumber),
/* harmony export */   "softmaxActivation": () => (/* binding */ softmaxActivation),
/* harmony export */   "softmaxLoss": () => (/* binding */ softmaxLoss),
/* harmony export */   "logisticActivation": () => (/* binding */ logisticActivation),
/* harmony export */   "logisticDerivative": () => (/* binding */ logisticDerivative),
/* harmony export */   "logisticLoss": () => (/* binding */ logisticLoss),
/* harmony export */   "tanhActivation": () => (/* binding */ tanhActivation),
/* harmony export */   "tanhDerivative": () => (/* binding */ tanhDerivative),
/* harmony export */   "reluActivation": () => (/* binding */ reluActivation),
/* harmony export */   "reluDerivative": () => (/* binding */ reluDerivative),
/* harmony export */   "softplusActivation": () => (/* binding */ softplusActivation),
/* harmony export */   "softplusDerivative": () => (/* binding */ softplusDerivative)
/* harmony export */ });
/* harmony import */ var gpu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gpu.js */ "gpu.js");
/* harmony import */ var gpu_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gpu_js__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var gpu = new gpu_js__WEBPACK_IMPORTED_MODULE_0__.GPU({
  mode: "gpu"
});
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
        this.data[row] = new Array(this.cols).map(function () {
          return 0;
        });
      }

      return this;
    }
  }, {
    key: "generateData",
    value: function generateData(arr) {
      this.data = [];

      for (var row = 0; row < this.rows; row += 1) {
        this.data[row] = new Array(this.cols).map(function () {
          return 0;
        });
      }

      for (var col = 0; col < this.cols; col += 1) {
        for (var _row = 0; _row < this.rows; _row += 1) {
          if (typeof arr[col] === "number") {
            this.data[_row][col] = arr[col];
          } else if (arr[col] instanceof Float32Array) {
            this.data[_row][col] = arr[col][_row];
          } else {
            this.data[_row][col] = 0;
          }
        }
      }

      return this;
    }
  }, {
    key: "toBuffer",
    value: function toBuffer() {
      var result = new ArrayBuffer(this.rows * this.cols * 64);
      var view = new DataView(result, 0, this.rows * this.cols * 64);
      this.data.forEach(function (num, i) {
        view.setFloat64(i, num);
      });
      return result;
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

      for (var col = 0; col < this.cols; col += 1) {
        var _sum = 0.0;

        for (var row = 0; row < this.rows; row += 1) {
          _sum += this.data[row][col];
        }

        data[col] = [_sum];
      }

      return new Matrix(1, this.cols, data);
    }
  }, {
    key: "rowwiseSum",
    value: function rowwiseSum() {
      var data = [];

      for (var row = 0; row < this.rows; row += 1) {
        var _sum2 = 0.0;

        for (var col = 0; col < this.rows; col += 1) {
          _sum2 += this.data[row][col];
        }

        data[row] = [_sum2];
      }

      return new Matrix(this.rows, 1, data);
    }
  }, {
    key: "replicate",
    value: function replicate(rows, cols) {
      var oldData = this.data;
      var newData = [];
      var result = null;

      if (rows === 1 && this.cols === 1 && cols > 1) {
        result = new Matrix(this.rows, cols);

        for (var row = 0; row < this.rows; row += 1) {
          newData[row] = [];

          for (var col = 0; col < cols; col += 1) {
            newData[row][col] = oldData[row][0];
          }
        }
      } else if (cols === 1 && this.rows === 1 && rows > 1) {
        result = new Matrix(rows, this.cols);

        for (var _row2 = 0; _row2 < rows; _row2 += 1) {
          newData[_row2] = [];

          for (var _col = 0; _col < this.cols; _col += 1) {
            newData[_row2][_col] = oldData[0][_col];
          }
        }
      }

      if (result) {
        result.generateData(newData);
        return result;
      }

      return this;
    }
  }, {
    key: "transpose",
    value: function transpose() {
      var oldData = this.data;
      var kernel = gpu.createKernel(function (a) {
        return a[this.thread.y][this.thread.x];
      }).setOutput([this.cols, this.rows]);
      this.resize(this.cols, this.rows);
      this.generateData(kernel(oldData));
      return this;
    }
  }, {
    key: "conjugate",
    value: function conjugate() {
      return this;
    }
  }]);

  return Matrix;
}();
var multiply = function multiply(m1, m2) {
  if (m1.cols !== m2.rows) {
    throw new Error("DIMENSIONS error.");
  }

  var kernel = gpu.createKernel(function (a, b) {
    var sum = 0;

    for (var i = 0; i < this.constants.cols; i++) {
      sum += a[this.thread.x][i] * b[i][this.thread.y];
    }

    return sum;
  }).setOutput([m1.rows, m2.cols]).setConstants({
    cols: m1.rows
  });
  return new Matrix(m1.rows, m2.cols, kernel(m1.data, m2.data));
};
var elementWiseAdd = function elementWiseAdd(m1, m2) {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }

  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal.");
  }

  var kernel = gpu.createKernel(function (a, b) {
    return a[this.thread.x][this.thread.y] + b[this.thread.x][this.thread.y];
  }).setOutput([m1.rows, m2.cols]);
  return new Matrix(m1.rows, m2.cols, kernel(m1.data, m2.data));
};
var elementWiseSubtract = function elementWiseSubtract(m1, m2) {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }

  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal.");
  }

  var kernel = gpu.createKernel(function (a, b) {
    return a[this.thread.x][this.thread.y] - b[this.thread.x][this.thread.y];
  }).setOutput([m1.rows, m2.cols]);
  return new Matrix(m1.rows, m2.cols, kernel(m1.data, m2.data));
};
var fillRandom = function fillRandom(m1, parameter) {
  var kernel = gpu.createKernel(function () {
    return (Math.random() - 0.5) * Math.sqrt(2.0 / this.constants.parameter);
  }).setOutput([m1.rows, m1.cols]).setConstants({
    parameter: parameter
  });
  return new Matrix(m1.rows, m1.cols, kernel());
};
var setZeros = function setZeros(m1) {
  var kernel = gpu.createKernel(function () {
    return 0.0;
  }).setOutput([m1.rows, m1.cols]);
  return new Matrix(m1.rows, m1.cols, kernel());
};
var elementWiseMultiply = function elementWiseMultiply(m1, m2) {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }

  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal.");
  }

  var kernel = gpu.createKernel(function (a, b) {
    return a[this.thread.x][this.thread.y] * b[this.thread.x][this.thread.y];
  }).setOutput([m1.rows, m2.cols]);
  return new Matrix(m1.rows, m2.cols, kernel(m1.data, m2.data));
};
var elementWiseMultiplyNumber = function elementWiseMultiplyNumber(m1, num) {
  var kernel = gpu.createKernel(function (a) {
    return a[this.thread.x][this.thread.y] * this.constants.number;
  }).setOutput([m1.rows, m1.cols]).setConstants({
    number: num
  });
  return new Matrix(m1.rows, m1.cols, kernel(m1.data));
};
var sum = function sum(m) {
  return m.sum();
};
var cols = function cols(m) {
  return m.cols;
};
var elementWiseDivide = function elementWiseDivide(m1, m2) {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }

  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal.");
  }

  var kernel = gpu.createKernel(function (a, b) {
    return a[this.thread.x][this.thread.y] / b[this.thread.x][this.thread.y];
  }).setOutput([m1.rows, m2.cols]);
  return new Matrix(m1.rows, m2.cols, kernel(m1.data, m2.data));
};
var elementWiseDivideNumber = function elementWiseDivideNumber(m1, num) {
  var kernel = gpu.createKernel(function (a) {
    return a[this.thread.x][this.thread.y] / this.constants.number;
  }).setOutput([m1.rows, m1.cols]).setConstants({
    number: num
  });
  return new Matrix(m1.rows, m1.cols, kernel(m1.data));
};
var softmaxActivation = function softmaxActivation(m) {
  var kernel = gpu.createKernel(function (a) {
    return Math.exp(a[this.thread.x][this.thread.y]);
  }).setOutput([m.rows, m.cols]);
  var data = new Matrix(m.rows, m.cols, kernel(m.data));
  var divider = new Matrix(1, m.cols, data.colwiseSum().data).replicate(m.rows, 1);
  var result = new Matrix(m.rows, m.cols, elementWiseDivide(data, divider).data);
  return result;
};
var softmaxLoss = function softmaxLoss(output, predictions) {
  var kernel = gpu.createKernel(function (a) {
    return Math.log(a[this.thread.x][this.thread.y]);
  }).setOutput([predictions.rows, predictions.cols]);
  return new Matrix(output.rows, output.cols, elementWiseMultiply(output, new Matrix(output.rows, output.cols, kernel(predictions.data))).data).sum();
};
var logisticActivation = function logisticActivation(m) {
  var kernel = gpu.createKernel(function (a) {
    return 1.0 / (1.0 + Math.exp(-a[this.thread.x][this.thread.y]));
  }).setOutput([m.rows, m.cols]);
  return new Matrix(m.rows, m.cols, kernel(m.data));
};
var logisticDerivative = function logisticDerivative(m) {
  var kernel = gpu.createKernel(function (a) {
    return a[this.thread.x][this.thread.y] * (1.0 - a[this.thread.x][this.thread.y]);
  }).setOutput([m.rows, m.cols]);
  return new Matrix(m.rows, m.cols, kernel(m.data));
};
var logisticLoss = function logisticLoss(output, predictions) {
  var kernel = gpu.createKernel(function (a) {
    return Math.log(a[this.thread.x][this.thread.y]);
  }).setOutput([output.rows, output.cols]);
  var kernel2 = gpu.createKernel(function (a) {
    return 1.0 - a[this.thread.x][this.thread.y];
  }).setOutput([output.rows, output.cols]);
  var kernel3 = gpu.createKernel(function (a) {
    return Math.log(1.0 - a[this.thread.x][this.thread.y]);
  }).setOutput([predictions.rows, predictions.cols]);
  return elementWiseAdd(elementWiseMultiply(output, new Matrix(output.rows, output.cols, kernel(output.data))), elementWiseMultiply(new Matrix(output.rows, output.cols, kernel2(output.data)), new Matrix(predictions.rows, predictions.cols, kernel3(predictions.data)))).sum();
};
var tanhActivation = function tanhActivation(m) {
  var kernel = gpu.createKernel(function (a) {
    return 2.0 / (1.0 + Math.exp(-2.0 * a[this.thread.x][this.thread.y])) - 1.0;
  }).setOutput([m.rows, m.cols]);
  return new Matrix(m.rows, m.cols, kernel(m.data));
};
var tanhDerivative = function tanhDerivative(m) {
  var kernel = gpu.createKernel(function (a) {
    return 1.0 - Math.pow(2.0 / (1.0 + Math.exp(-2.0 * a[this.thread.x][this.thread.y])) - 1.0, 2.0);
  }).setOutput([m.rows, m.cols]);
  return new Matrix(m.rows, m.cols, kernel(m.data));
};
var reluActivation = function reluActivation(m) {
  var kernel = gpu.createKernel(function (a) {
    return Math.max(0.0, a[this.thread.x][this.thread.y]);
  }).setOutput([m.rows, m.cols]);
  return new Matrix(m.rows, m.cols, kernel(m.data));
};
var reluDerivative = function reluDerivative(m) {
  var kernel = gpu.createKernel(function (a) {
    if (a[this.thread.x][this.thread.y] > 0) {
      return 1;
    }

    return 0;
  }).setOutput([m.rows, m.cols]);
  return new Matrix(m.rows, m.cols, kernel(m.data));
};
var softplusActivation = function softplusActivation(m) {
  var kernel = gpu.createKernel(function (a) {
    return Math.log(1 + Math.exp(a[this.thread.x][this.thread.y]));
  }).setOutput([m.rows, m.cols]);
  return new Matrix(m.rows, m.cols, kernel(m.data));
};
var softplusDerivative = function softplusDerivative(m) {
  var kernel = gpu.createKernel(function (a) {
    return 1 / (1 + Math.exp(-a[this.thread.x][this.thread.y]));
  }).setOutput([m.rows, m.cols]);
  return new Matrix(m.rows, m.cols, kernel(m.data));
};

/***/ }),

/***/ "./src/typescript/network.tsx":
/*!************************************!*\
  !*** ./src/typescript/network.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Network": () => (/* binding */ Network),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _math_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math/matrix */ "./src/typescript/math/matrix.tsx");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




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
      var m = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.cols)(X);
      var delta = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.elementWiseSubtract)(predictions, Y);
      this.layers.reverse().forEach(function (layer) {
        delta = layer.getBackPropagation().propagate(X, m, regularization, delta);
      });
    }
  }, {
    key: "loss",
    value: function loss(output, predictions) {
      return this.layers[this.layers.length - 1].loss(output, predictions);
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
          dimensions: [layer.getOutputHeight(), layer.getOutputWidth(), layer.getOutputDepth()],
          weights: {
            W: layer.W.data,
            b: layer.b.data
          }
        });
      });
      var result = JSON.stringify(resultJSON);
      return new Promise(function (resolve, reject) {
        fs__WEBPACK_IMPORTED_MODULE_1__.writeFile(path, result, function (err) {
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

/***/ "./src/typescript/types.tsx":
/*!**********************************!*\
  !*** ./src/typescript/types.tsx ***!
  \**********************************/
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

/***/ }),

/***/ "gpu.js":
/*!*************************!*\
  !*** external "gpu.js" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("gpu.js");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/typescript/main.tsx");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=impulse-ts.dev.js.map