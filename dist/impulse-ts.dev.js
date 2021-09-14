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
/* harmony import */ var _layer_backpropagation_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layer/backpropagation/factory */ "./src/typescript/layer/backpropagation/factory.tsx");
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
      // @ts-ignore
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
      layer.setBackPropagation(_layer_backpropagation_factory__WEBPACK_IMPORTED_MODULE_1__.BackpropagationFactory.create(this.lastLayer, layer));
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
/* harmony export */   "Builder1D": () => (/* binding */ Builder1D)
/* harmony export */ });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/typescript/builder/abstract.tsx");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layer___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layer/ */ "./src/typescript/layer/index.tsx");
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
              layerClass = _layer___WEBPACK_IMPORTED_MODULE_2__.LogisticLayer;
            } else if (layerData["type"] === "softmax") {
              layerClass = _layer___WEBPACK_IMPORTED_MODULE_2__.SoftmaxLayer;
            } else if (layerData["type"] === "relu") {
              layerClass = _layer___WEBPACK_IMPORTED_MODULE_2__.ReluLayer;
            } else if (layerData["type"] === "softplus") {
              layerClass = _layer___WEBPACK_IMPORTED_MODULE_2__.SoftplusLayer;
            } else if (layerData["type"] === "tanh") {
              layerClass = _layer___WEBPACK_IMPORTED_MODULE_2__.TanhLayer;
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



/***/ }),

/***/ "./src/typescript/builder/builder3d.tsx":
/*!**********************************************!*\
  !*** ./src/typescript/builder/builder3d.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Builder3D": () => (/* binding */ Builder3D)
/* harmony export */ });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/typescript/builder/abstract.tsx");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layer___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layer/ */ "./src/typescript/layer/index.tsx");
/* harmony import */ var _layer_conv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layer/conv */ "./src/typescript/layer/conv.tsx");
/* harmony import */ var _layer_maxpool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layer/maxpool */ "./src/typescript/layer/maxpool.tsx");
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







var Builder3D = /*#__PURE__*/function (_AbstractBuilder) {
  _inherits(Builder3D, _AbstractBuilder);

  var _super = _createSuper(Builder3D);

  function Builder3D() {
    _classCallCheck(this, Builder3D);

    return _super.apply(this, arguments);
  }

  _createClass(Builder3D, [{
    key: "firstLayerTransition",
    value: function firstLayerTransition(layer) {
      layer.setSize(this.dimensions);
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
          var builder = new Builder3D(json["dimensions"]);
          json["layers"].forEach(function (layerData) {
            var layerClass = null;

            if (layerData["type"] === "logistic") {
              layerClass = _layer___WEBPACK_IMPORTED_MODULE_2__.LogisticLayer;
              builder.createLayer(layerClass, function (layer) {
                layer.setSize(layerData["dimensions"]);
              });
            } else if (layerData["type"] === "softmax") {
              layerClass = _layer___WEBPACK_IMPORTED_MODULE_2__.SoftmaxLayer;
              builder.createLayer(layerClass, function (layer) {
                layer.setSize(layerData["dimensions"]);
              });
            } else if (layerData["type"] === "relu") {
              layerClass = _layer___WEBPACK_IMPORTED_MODULE_2__.ReluLayer;
              builder.createLayer(layerClass, function (layer) {
                layer.setSize(layerData["dimensions"]);
              });
            } else if (layerData["type"] === "softplus") {
              layerClass = _layer___WEBPACK_IMPORTED_MODULE_2__.SoftplusLayer;
              builder.createLayer(layerClass, function (layer) {
                layer.setSize(layerData["dimensions"]);
              });
            } else if (layerData["type"] === "tanh") {
              layerClass = _layer___WEBPACK_IMPORTED_MODULE_2__.TanhLayer;
              builder.createLayer(layerClass, function (layer) {
                layer.setSize(layerData["dimensions"]);
              });
            } else if (layerData["type"] === "conv") {
              layerClass = _layer_conv__WEBPACK_IMPORTED_MODULE_3__.ConvLayer;
              builder.createLayer(layerClass, function (layer) {
                layer.setSize(layerData["dimensions"]);
                layer.setFilterSize(layerData["filterSize"]);
                layer.setStride(layerData["stride"]);
                layer.setNumFilters(layerData["numFilters"]);
                layer.setPadding(layerData["padding"]);
              });
            } else if (layerData["type"] === "maxpool") {
              layerClass = _layer_maxpool__WEBPACK_IMPORTED_MODULE_4__.MaxPoolLayer;
              builder.createLayer(layerClass, function (layer) {
                layer.setSize(layerData["dimensions"]);
                layer.setFilterSize(layerData["filterSize"]);
                layer.setStride(layerData["stride"]);
              });
            } else if (layerData["type"] === "fullyconnected") {
              layerClass = _layer_maxpool__WEBPACK_IMPORTED_MODULE_4__.MaxPoolLayer;
              builder.createLayer(layerClass, function (layer) {});
            }
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

  return Builder3D;
}(_abstract__WEBPACK_IMPORTED_MODULE_0__.AbstractBuilder);



/***/ }),

/***/ "./src/typescript/dataset/dataset.tsx":
/*!********************************************!*\
  !*** ./src/typescript/dataset/dataset.tsx ***!
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
      return new _math_matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.exampleSize, 1, this.data.data.col(index));
    }
  }, {
    key: "getNumberOfExamples",
    value: function getNumberOfExamples() {
      return this.numberOfExamples;
    }
  }, {
    key: "getBatch",
    value: function getBatch(offset, batchSize) {
      return this.data.block(0, offset, this.data.rows, batchSize);
    }
  }]);

  return Dataset;
}();

/***/ }),

/***/ "./src/typescript/dataset/datasetbuilder.tsx":
/*!***************************************************!*\
  !*** ./src/typescript/dataset/datasetbuilder.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetBuilder": () => (/* binding */ DatasetBuilder)
/* harmony export */ });
/* harmony import */ var csvtojson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csvtojson */ "csvtojson");
/* harmony import */ var csvtojson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csvtojson__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dataset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataset */ "./src/typescript/dataset/dataset.tsx");
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
          var dataset = new _dataset__WEBPACK_IMPORTED_MODULE_1__.Dataset(exampleSize, numberOfExamples, arr);
          resolve(dataset);
        });
      });
    }
  }]);

  return DatasetBuilder;
}();

/***/ }),

/***/ "./src/typescript/dataset/datasetmodifier/abstract.tsx":
/*!*************************************************************!*\
  !*** ./src/typescript/dataset/datasetmodifier/abstract.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractDatasetModifier": () => (/* binding */ AbstractDatasetModifier)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AbstractDatasetModifier = /*#__PURE__*/function () {
  function AbstractDatasetModifier(dataset) {
    _classCallCheck(this, AbstractDatasetModifier);

    _defineProperty(this, "dataset", null);

    this.dataset = dataset;
  }

  _createClass(AbstractDatasetModifier, [{
    key: "apply",
    value: function apply() {
      for (var _example = 0; _example < this.dataset.getNumberOfExamples(); _example += 1) {
        this.applyToExample(_example);
      }
    }
  }]);

  return AbstractDatasetModifier;
}();

/***/ }),

/***/ "./src/typescript/dataset/datasetmodifier/callback.tsx":
/*!*************************************************************!*\
  !*** ./src/typescript/dataset/datasetmodifier/callback.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallbackDatabaseModifier": () => (/* binding */ CallbackDatabaseModifier)
/* harmony export */ });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/typescript/dataset/datasetmodifier/abstract.tsx");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var CallbackDatabaseModifier = /*#__PURE__*/function (_AbstractDatasetModif) {
  _inherits(CallbackDatabaseModifier, _AbstractDatasetModif);

  var _super = _createSuper(CallbackDatabaseModifier);

  function CallbackDatabaseModifier() {
    var _this;

    _classCallCheck(this, CallbackDatabaseModifier);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callback", function (number) {
      return number;
    });

    return _this;
  }

  _createClass(CallbackDatabaseModifier, [{
    key: "applyToExample",
    value: function applyToExample(example) {}
  }, {
    key: "setCallback",
    value: function setCallback(callback) {
      this.callback = callback;
      return this;
    }
  }]);

  return CallbackDatabaseModifier;
}(_abstract__WEBPACK_IMPORTED_MODULE_0__.AbstractDatasetModifier);

/***/ }),

/***/ "./src/typescript/dataset/datasetmodifier/minmaxscaling.tsx":
/*!******************************************************************!*\
  !*** ./src/typescript/dataset/datasetmodifier/minmaxscaling.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MinMaxScalingDatabaseModifier": () => (/* binding */ MinMaxScalingDatabaseModifier)
/* harmony export */ });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/typescript/dataset/datasetmodifier/abstract.tsx");
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



var MinMaxScalingDatabaseModifier = /*#__PURE__*/function (_AbstractDatasetModif) {
  _inherits(MinMaxScalingDatabaseModifier, _AbstractDatasetModif);

  var _super = _createSuper(MinMaxScalingDatabaseModifier);

  function MinMaxScalingDatabaseModifier() {
    _classCallCheck(this, MinMaxScalingDatabaseModifier);

    return _super.apply(this, arguments);
  }

  _createClass(MinMaxScalingDatabaseModifier, [{
    key: "applyToExample",
    value: function applyToExample(example) {
      var min = Infinity;
      var max = -Infinity;

      for (var exampleIndex = 0; exampleIndex < this.dataset.getNumberOfExamples(); exampleIndex += 1) {
        var _example = this.dataset.exampleAt(exampleIndex);

        for (var row = 0; row < _example.rows; row += 1) {
          min = Math.min(_example.data[row][0]);
          max = Math.max(_example.data[row][0]);
        }
      }

      var kernel = _math_matrix__WEBPACK_IMPORTED_MODULE_1__.gpu.createKernel(function (a) {
        // @ts-ignore
        return (a[this.thread.x][this.thread.y] - this.constants.min) / (this.constants.max - this.constants.min);
      }).setOutput([this.dataset.data.data.rows, this.dataset.data.data.cols]).setConstants({
        min: min,
        max: max
      });
      this.dataset.data = kernel(this.dataset.data.data);
    }
  }]);

  return MinMaxScalingDatabaseModifier;
}(_abstract__WEBPACK_IMPORTED_MODULE_0__.AbstractDatasetModifier);

/***/ }),

/***/ "./src/typescript/dataset/datasetmodifier/missingdata.tsx":
/*!****************************************************************!*\
  !*** ./src/typescript/dataset/datasetmodifier/missingdata.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MissingDataScalingDatabaseModifier": () => (/* binding */ MissingDataScalingDatabaseModifier)
/* harmony export */ });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/typescript/dataset/datasetmodifier/abstract.tsx");
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


var MissingDataScalingDatabaseModifier = /*#__PURE__*/function (_AbstractDatasetModif) {
  _inherits(MissingDataScalingDatabaseModifier, _AbstractDatasetModif);

  var _super = _createSuper(MissingDataScalingDatabaseModifier);

  function MissingDataScalingDatabaseModifier() {
    _classCallCheck(this, MissingDataScalingDatabaseModifier);

    return _super.apply(this, arguments);
  }

  _createClass(MissingDataScalingDatabaseModifier, [{
    key: "applyToExample",
    value: function applyToExample(example) {}
  }]);

  return MissingDataScalingDatabaseModifier;
}(_abstract__WEBPACK_IMPORTED_MODULE_0__.AbstractDatasetModifier);

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
    this.vW = new _math_matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix();
    this.cW = new _math_matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix();
    this.vb = new _math_matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix();
    this.cb = new _math_matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix();
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
      return this;
    }
  }, {
    key: "penalty",
    value: function penalty() {
      return (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.penalty)(this.W);
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
      this.cW.resize(this.height, this.width);
      this.cW = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.setZeros)(this.cW);
      this.cb.resize(this.height, 1);
      this.cb = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.setZeros)(this.cb);
      this.vW.resize(this.height, this.width);
      this.vW = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.setZeros)(this.vW);
      this.vb.resize(this.height, 1);
      this.vb = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.setZeros)(this.cb);
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

/***/ "./src/typescript/layer/abstract3d.tsx":
/*!*********************************************!*\
  !*** ./src/typescript/layer/abstract3d.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractLayer3D": () => (/* binding */ AbstractLayer3D)
/* harmony export */ });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/typescript/layer/abstract.tsx");
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



var AbstractLayer3D = /*#__PURE__*/function (_AbstractLayer) {
  _inherits(AbstractLayer3D, _AbstractLayer);

  var _super = _createSuper(AbstractLayer3D);

  function AbstractLayer3D() {
    _classCallCheck(this, AbstractLayer3D);

    return _super.apply(this, arguments);
  }

  _createClass(AbstractLayer3D, [{
    key: "configure",
    value: function configure() {// do nothing
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
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return [this.getOutputWidth(), this.getOutputHeight(), this.getOutputDepth()];
    }
  }]);

  return AbstractLayer3D;
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
      this.layer.gW = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseAdd)((0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseDivideNumber)(delta, numberOfExamples), (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseMultiplyNumber)(this.layer.W, regularization / numberOfExamples));
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

/***/ "./src/typescript/layer/backpropagation/backpropagationto3dto1d.tsx":
/*!**************************************************************************!*\
  !*** ./src/typescript/layer/backpropagation/backpropagationto3dto1d.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Backpropagation3Dto1D": () => (/* binding */ Backpropagation3Dto1D)
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



var Backpropagation3Dto1D = /*#__PURE__*/function (_AbstractBackPropagat) {
  _inherits(Backpropagation3Dto1D, _AbstractBackPropagat);

  var _super = _createSuper(Backpropagation3Dto1D);

  function Backpropagation3Dto1D() {
    _classCallCheck(this, Backpropagation3Dto1D);

    return _super.apply(this, arguments);
  }

  _createClass(Backpropagation3Dto1D, [{
    key: "propagate",
    value: function propagate(input, numberOfExamples, regularization, sigma) {
      return new _math_matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    }
  }]);

  return Backpropagation3Dto1D;
}(_abstract__WEBPACK_IMPORTED_MODULE_0__.AbstractBackPropagation);

/***/ }),

/***/ "./src/typescript/layer/backpropagation/backpropagationtoconv.tsx":
/*!************************************************************************!*\
  !*** ./src/typescript/layer/backpropagation/backpropagationtoconv.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackpropagationToConv": () => (/* binding */ BackpropagationToConv)
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



var BackpropagationToConv = /*#__PURE__*/function (_AbstractBackPropagat) {
  _inherits(BackpropagationToConv, _AbstractBackPropagat);

  var _super = _createSuper(BackpropagationToConv);

  function BackpropagationToConv() {
    _classCallCheck(this, BackpropagationToConv);

    return _super.apply(this, arguments);
  }

  _createClass(BackpropagationToConv, [{
    key: "propagate",
    value: function propagate(input, numberOfExamples, regularization, sigma) {
      return new _math_matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    }
  }]);

  return BackpropagationToConv;
}(_abstract__WEBPACK_IMPORTED_MODULE_0__.AbstractBackPropagation);

/***/ }),

/***/ "./src/typescript/layer/backpropagation/backpropagationtomaxpool.tsx":
/*!***************************************************************************!*\
  !*** ./src/typescript/layer/backpropagation/backpropagationtomaxpool.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackpropagationToMaxPool": () => (/* binding */ BackpropagationToMaxPool)
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



var BackpropagationToMaxPool = /*#__PURE__*/function (_AbstractBackPropagat) {
  _inherits(BackpropagationToMaxPool, _AbstractBackPropagat);

  var _super = _createSuper(BackpropagationToMaxPool);

  function BackpropagationToMaxPool() {
    _classCallCheck(this, BackpropagationToMaxPool);

    return _super.apply(this, arguments);
  }

  _createClass(BackpropagationToMaxPool, [{
    key: "propagate",
    value: function propagate(input, numberOfExamples, regularization, sigma) {
      return new _math_matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    }
  }]);

  return BackpropagationToMaxPool;
}(_abstract__WEBPACK_IMPORTED_MODULE_0__.AbstractBackPropagation);

/***/ }),

/***/ "./src/typescript/layer/backpropagation/factory.tsx":
/*!**********************************************************!*\
  !*** ./src/typescript/layer/backpropagation/factory.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackpropagationFactory": () => (/* binding */ BackpropagationFactory)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./src/typescript/types.tsx");
/* harmony import */ var _backpropagation1dto1d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backpropagation1dto1d */ "./src/typescript/layer/backpropagation/backpropagation1dto1d.tsx");
/* harmony import */ var _backpropagationto3dto1d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backpropagationto3dto1d */ "./src/typescript/layer/backpropagation/backpropagationto3dto1d.tsx");
/* harmony import */ var _backpropagationtomaxpool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backpropagationtomaxpool */ "./src/typescript/layer/backpropagation/backpropagationtomaxpool.tsx");
/* harmony import */ var _backpropagationtoconv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./backpropagationtoconv */ "./src/typescript/layer/backpropagation/backpropagationtoconv.tsx");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var BackpropagationFactory = /*#__PURE__*/function () {
  function BackpropagationFactory() {
    _classCallCheck(this, BackpropagationFactory);
  }

  _createClass(BackpropagationFactory, null, [{
    key: "create",
    value: function create(previousLayer, layer) {
      if (previousLayer == null) {
        if (layer.is1D()) {
          return new _backpropagation1dto1d__WEBPACK_IMPORTED_MODULE_1__.Backpropagation1Dto1D(layer, previousLayer);
        } else if (layer.getType() == _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.conv) {
          return new _backpropagationto3dto1d__WEBPACK_IMPORTED_MODULE_2__.Backpropagation3Dto1D(layer, previousLayer);
        }
      } else {
        if (previousLayer.getType() == _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.maxpool) {
          return new _backpropagationtomaxpool__WEBPACK_IMPORTED_MODULE_3__.BackpropagationToMaxPool(layer, previousLayer);
        } else if (previousLayer.getType() == _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.conv) {
          return new _backpropagationtoconv__WEBPACK_IMPORTED_MODULE_4__.BackpropagationToConv(layer, previousLayer);
        } else if (previousLayer.is1D() || previousLayer.getType() == _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.fullyconnected) {
          return new _backpropagation1dto1d__WEBPACK_IMPORTED_MODULE_1__.Backpropagation1Dto1D(layer, previousLayer);
        }
      }

      return null;
    }
  }]);

  return BackpropagationFactory;
}();

/***/ }),

/***/ "./src/typescript/layer/conv.tsx":
/*!***************************************!*\
  !*** ./src/typescript/layer/conv.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConvLayer": () => (/* binding */ ConvLayer)
/* harmony export */ });
/* harmony import */ var _math_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/matrix */ "./src/typescript/math/matrix.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/typescript/types.tsx");
/* harmony import */ var _abstract3d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract3d */ "./src/typescript/layer/abstract3d.tsx");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





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
      this.W = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.fillRandom)(this.W, this.width * this.height * this.depth);
      this.b.resize(this.numFilters, 1);
      this.b = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.fillRandom)(this.b, 0.01);
      this.gW.resize(this.numFilters, this.filterSize * this.filterSize * this.depth);
      this.gW = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.setZeros)(this.gW);
      this.gb.resize(this.numFilters, 1);
      this.gb = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.setZeros)(this.gb);
      this.cW.resize(this.numFilters, this.filterSize * this.filterSize * this.depth);
      this.cW = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.setZeros)(this.gb);
      this.cb.resize(this.numFilters, 1);
      this.cb = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.setZeros)(this.cb);
      this.vW.resize(this.numFilters, this.filterSize * this.filterSize * this.depth);
      this.vW = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.setZeros)(this.vW);
      this.vb.resize(this.numFilters, 1);
      this.vb = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.setZeros)(this.vb);
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
      var result = new _math_matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getOutputWidth() * this.getOutputHeight() * this.getOutputDepth(), input.cols);

      for (var i = 0; i < input.cols; i += 1) {
        var conv = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.im2col)(input.col(i), this.depth, this.height, this.width, this.filterSize, this.filterSize, this.padding, this.padding, this.stride, this.stride);
        var tmp = this.Z = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.elementWiseAdd)((0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.multiply)(this.W, conv), this.b.replicate(1, input.cols)).rollToColMatrix();
        result.setCol(i, tmp);
      }

      this.Z = result;
      this.activation(this.Z);
      return this.A;
    }
  }, {
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
      return _types__WEBPACK_IMPORTED_MODULE_1__.LayerType.conv;
    }
  }, {
    key: "loss",
    value: function loss(output, predictions) {
      throw new Error("Unsupported.");
    }
  }, {
    key: "error",
    value: function error(m) {
      throw new Error("Unsupported.");
    }
  }]);

  return ConvLayer;
}(_abstract3d__WEBPACK_IMPORTED_MODULE_2__.AbstractLayer3D);



/***/ }),

/***/ "./src/typescript/layer/fullyconnected.tsx":
/*!*************************************************!*\
  !*** ./src/typescript/layer/fullyconnected.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullyConnectedLayer": () => (/* binding */ FullyConnectedLayer)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/typescript/types.tsx");
/* harmony import */ var _conv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conv */ "./src/typescript/layer/conv.tsx");
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




var FullyConnectedLayer = /*#__PURE__*/function (_ConvLayer) {
  _inherits(FullyConnectedLayer, _ConvLayer);

  var _super = _createSuper(FullyConnectedLayer);

  function FullyConnectedLayer() {
    _classCallCheck(this, FullyConnectedLayer);

    return _super.apply(this, arguments);
  }

  _createClass(FullyConnectedLayer, [{
    key: "configure",
    value: function configure() {// do nothing
    }
  }, {
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
          throw new Error("Invalid usage. Cannot fully connect with previous non maxpool layer.");
        }
      } else {
        throw new Error("Invalid usage. Cannot fully connect with previous 1D layer.");
      }

      return this;
    }
  }, {
    key: "setSize",
    value: function setSize(dimension) {
      throw new Error("Unsupported");
    }
  }, {
    key: "setFilterSize",
    value: function setFilterSize(filterSize) {
      throw new Error("Unsupported");
    }
  }, {
    key: "setStride",
    value: function setStride(stride) {
      throw new Error("Unsupported");
    }
  }, {
    key: "setPadding",
    value: function setPadding(padding) {
      throw new Error("Unsupported");
    }
  }, {
    key: "setWidth",
    value: function setWidth(value) {
      throw new Error("Unsupported");
    }
  }, {
    key: "setHeight",
    value: function setHeight(value) {
      throw new Error("Unsupported");
    }
  }, {
    key: "setDepth",
    value: function setDepth(value) {
      throw new Error("Unsupported");
    }
  }, {
    key: "setNumFilters",
    value: function setNumFilters(value) {
      throw new Error("Unsupported");
    }
  }]);

  return FullyConnectedLayer;
}(_conv__WEBPACK_IMPORTED_MODULE_1__.ConvLayer);



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
/* harmony export */   "SoftplusLayer": () => (/* reexport safe */ _softplus__WEBPACK_IMPORTED_MODULE_5__.SoftplusLayer),
/* harmony export */   "ConvLayer": () => (/* reexport safe */ _conv__WEBPACK_IMPORTED_MODULE_6__.ConvLayer),
/* harmony export */   "FullyConnectedLayer": () => (/* reexport safe */ _fullyconnected__WEBPACK_IMPORTED_MODULE_7__.FullyConnectedLayer),
/* harmony export */   "MaxPoolLayer": () => (/* reexport safe */ _maxpool__WEBPACK_IMPORTED_MODULE_8__.MaxPoolLayer)
/* harmony export */ });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/typescript/layer/abstract.tsx");
/* harmony import */ var _softmax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./softmax */ "./src/typescript/layer/softmax.tsx");
/* harmony import */ var _logistic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logistic */ "./src/typescript/layer/logistic.tsx");
/* harmony import */ var _tanh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tanh */ "./src/typescript/layer/tanh.tsx");
/* harmony import */ var _relu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relu */ "./src/typescript/layer/relu.tsx");
/* harmony import */ var _softplus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./softplus */ "./src/typescript/layer/softplus.tsx");
/* harmony import */ var _conv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conv */ "./src/typescript/layer/conv.tsx");
/* harmony import */ var _fullyconnected__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fullyconnected */ "./src/typescript/layer/fullyconnected.tsx");
/* harmony import */ var _maxpool__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./maxpool */ "./src/typescript/layer/maxpool.tsx");











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

/***/ "./src/typescript/layer/maxpool.tsx":
/*!******************************************!*\
  !*** ./src/typescript/layer/maxpool.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaxPoolLayer": () => (/* binding */ MaxPoolLayer)
/* harmony export */ });
/* harmony import */ var _math_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/matrix */ "./src/typescript/math/matrix.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/typescript/types.tsx");
/* harmony import */ var _abstract3d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract3d */ "./src/typescript/layer/abstract3d.tsx");
/* harmony import */ var _backpropagation_backpropagationtomaxpool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backpropagation/backpropagationtomaxpool */ "./src/typescript/layer/backpropagation/backpropagationtomaxpool.tsx");
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






var MaxPoolLayer = /*#__PURE__*/function (_AbstractLayer3D) {
  _inherits(MaxPoolLayer, _AbstractLayer3D);

  var _super = _createSuper(MaxPoolLayer);

  function MaxPoolLayer() {
    _classCallCheck(this, MaxPoolLayer);

    return _super.apply(this, arguments);
  }

  _createClass(MaxPoolLayer, [{
    key: "configure",
    value: function configure() {
      this.backPropagation = new _backpropagation_backpropagationtomaxpool__WEBPACK_IMPORTED_MODULE_3__.BackpropagationToMaxPool(this, this.previousLayer);
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
    key: "forward",
    value: function forward(input) {
      var result = new _math_matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getOutputWidth() * this.getOutputHeight() * this.getOutputDepth(), input.cols);

      for (var i = 0; i < input.cols; i += 1) {
        var pool = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_0__.maxpool)(input.col(i), this.depth, this.height, this.width, this.filterSize, this.filterSize, this.stride, this.stride).rollToColMatrix();
        result.setCol(i, pool);
      }

      this.Z = result;
      this.activation(this.Z);
      return this.A;
    }
  }, {
    key: "activation",
    value: function activation(m) {
      throw new Error("No activation for MAXPOOL layer.");
    }
  }, {
    key: "derivative",
    value: function derivative(m) {
      throw new Error("No derivative for MAXPOOL layer.");
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_1__.LayerType.maxpool;
    }
  }, {
    key: "loss",
    value: function loss(output, predictions) {
      throw new Error("Unsupported.");
    }
  }, {
    key: "error",
    value: function error(m) {
      throw new Error("Unsupported.");
    }
  }]);

  return MaxPoolLayer;
}(_abstract3d__WEBPACK_IMPORTED_MODULE_2__.AbstractLayer3D);



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
/* harmony export */   "softplusDerivative": () => (/* binding */ softplusDerivative),
/* harmony export */   "penalty": () => (/* binding */ penalty),
/* harmony export */   "sqrt": () => (/* binding */ sqrt),
/* harmony export */   "im2col": () => (/* binding */ im2col),
/* harmony export */   "maxpool": () => (/* binding */ maxpool)
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
        this.data[row] = new Array(this.cols);
      }

      return this;
    }
  }, {
    key: "generateData",
    value: function generateData(arr) {
      this.data = [];

      for (var row = 0; row < this.rows; row += 1) {
        this.data[row] = new Array(this.cols);
      }

      for (var col = 0; col < this.cols; col += 1) {
        for (var _row2 = 0; _row2 < this.rows; _row2 += 1) {
          if (typeof arr[col] === "number") {
            this.data[_row2][col] = arr[col];
          } else if (arr[col] instanceof Float32Array) {
            this.data[_row2][col] = arr[col][_row2];
          } else {
            this.data[_row2][col] = 0;
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

        for (var _row3 = 0; _row3 < rows; _row3 += 1) {
          newData[_row3] = [];

          for (var _col2 = 0; _col2 < this.cols; _col2 += 1) {
            newData[_row3][_col2] = oldData[0][_col2];
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
      var kernel = gpu.createKernel(function (a) {
        return a[this.thread.y][this.thread.x];
      }).setOutput([this.cols, this.rows]);
      return new Matrix(this.cols, this.rows, kernel(this.data));
    }
  }, {
    key: "conjugate",
    value: function conjugate() {
      return this;
    }
  }, {
    key: "colMaxCoeffIndex",
    value: function colMaxCoeffIndex(col) {
      var maxIndex = -1;
      var max = -Infinity;

      for (var row = 0; row < this.rows; row += 1) {
        if (this.data[row][col] > max) {
          max = this.data[row][col];
          maxIndex = row;
        }
      }

      return maxIndex;
    }
  }, {
    key: "block",
    value: function block(startRow, startCol, blockRows, blockCols) {
      var data = [];

      for (var row = startRow, newRow = 0; row < this.rows && row < startRow + blockRows; row += 1, newRow += 1) {
        data[row] = new Array(blockCols);

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
    key: "setCol",
    value: function setCol(col, tmp) {
      for (var row = 0; row < this.rows; row += 1) {
        this.data[row][col] = tmp.data[row][0];
      }

      return this;
    }
  }, {
    key: "rollToColMatrix",
    value: function rollToColMatrix() {
      var data = [];
      var _row = 0;

      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];

        for (var col = 0; col < this.cols; col += 1) {
          data[_row++][0] = this.data[row][col];
        }
      }

      return new Matrix(this.rows * this.cols, 1, data);
    }
  }]);

  return Matrix;
}();
var multiply = function multiply(m1, m2) {
  if (m1.cols !== m2.rows) {
    throw new Error("DIMENSIONS error. m1.cols ".concat(m1.cols, " !== m2.rows ").concat(m2.rows, "."));
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
    // @ts-ignore
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
    // @ts-ignore
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
    // @ts-ignore
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
var penalty = function penalty(m) {
  var kernel = gpu.createKernel(function (a) {
    return Math.pow(a[this.thread.x][this.thread.y], 2);
  }).setOutput([m.rows, m.cols]);
  return new Matrix(m.rows, m.cols, kernel(m.data)).sum();
};
var sqrt = function sqrt(m) {
  var kernel = gpu.createKernel(function (a) {
    return Math.sqrt(a[this.thread.x][this.thread.y] + 1e-8);
  }).setOutput([m.rows, m.cols]);
  return new Matrix(m.rows, m.cols, kernel(m.data));
};
var im2col = function im2col(input, channels, height, width, kernel_h, kernel_w, pad_h, pad_w, stride_h, stride_w) {
  var rows = kernel_w * kernel_h * channels;
  var cols = ((width - kernel_w + 2 * pad_w) / stride_w + 1) * ((height - kernel_h + 2 * pad_h) / stride_h + 1);
  var currentResultCol = 0;
  var result = setZeros(new Matrix(rows, cols));

  for (var boundingY = -pad_h; boundingY + kernel_h <= height + pad_h; boundingY += stride_h) {
    for (var boundingX = -pad_w; boundingX + kernel_w <= width + pad_w; boundingX += stride_w) {
      var currentResultRow = 0;

      for (var channel = 0; channel < channels; channel++) {
        var inputOffset = height * width * channel;

        for (var y = 0; y < kernel_h; y++) {
          for (var x = 0; x < kernel_w; x++) {
            if (boundingY + y >= 0 && boundingX + x >= 0 && boundingX + x < width && boundingY + y < height) {
              result.data[currentResultRow][currentResultCol] = input.data[(y + boundingY) * width + boundingX + x + inputOffset][0];
            }

            currentResultRow++;
          }
        }
      }

      currentResultCol++;
    }
  }

  return result;
};
var maxpool = function maxpool(input, channels, height, width, kernel_h, kernel_w, stride_h, stride_w) {
  var resultWidth = (width - kernel_w) / stride_w + 1;
  var resultHeight = (height - kernel_h) / stride_h + 1;
  var resultDepth = channels;
  var currentResultCol = 0;
  var result = setZeros(new Matrix(resultWidth * resultHeight * resultDepth, 1));

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

  return new Matrix();
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
    key: "error",
    value: function error(m) {
      return this.layers[this.layers.length - 1].error(m);
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

/***/ "./src/typescript/trainer/abstract.tsx":
/*!*********************************************!*\
  !*** ./src/typescript/trainer/abstract.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractTrainer": () => (/* binding */ AbstractTrainer)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AbstractTrainer = /*#__PURE__*/function () {
  function AbstractTrainer(network, optimizer) {
    _classCallCheck(this, AbstractTrainer);

    _defineProperty(this, "network", null);

    _defineProperty(this, "optimizer", null);

    _defineProperty(this, "regularization", 0);

    _defineProperty(this, "iterations", 1000);

    _defineProperty(this, "learningRate", 0.1);

    _defineProperty(this, "verbose", true);

    _defineProperty(this, "verboseStep", 1);

    _defineProperty(this, "stepCallback", function () {
      return null;
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
      var batchSize = 100;
      var numberOfExamples = inputDataset.getNumberOfExamples();
      var numBatches = Math.ceil(numberOfExamples / batchSize);
      var cost = 0;
      var accuracy = 0;
      var penalty = 0;
      this.network.getLayers().forEach(function (layer) {
        penalty += layer.penalty();
      });

      for (var batch = 0, offset = 0; batch < numberOfExamples; batch += batchSize, offset += 1) {
        var predictedOutput = this.network.forward(inputDataset.getBatch(offset, batchSize));
        var correctOutput = outputDataset.getBatch(offset, batchSize);
        var miniBatchSize = correctOutput.cols;
        var loss = this.network.loss(correctOutput, predictedOutput);
        var error = this.network.error(miniBatchSize);
        cost += (error * loss + this.regularization * penalty / (2.0 * miniBatchSize)) / (numBatches * (miniBatchSize / batchSize));

        for (var col = 0; col < predictedOutput.cols; col += 1) {
          var index1 = predictedOutput.colMaxCoeffIndex(col);
          var index2 = predictedOutput.colMaxCoeffIndex(col);

          if (index1 === index2) {
            accuracy++;
          }
        }
      }

      var result = {
        cost: cost,
        accuracy: (accuracy - 1) / numberOfExamples * 100
      };
      return result;
    }
  }]);

  return AbstractTrainer;
}();

/***/ }),

/***/ "./src/typescript/trainer/minibatch.tsx":
/*!**********************************************!*\
  !*** ./src/typescript/trainer/minibatch.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiniBatchTrainer": () => (/* binding */ MiniBatchTrainer)
/* harmony export */ });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/typescript/trainer/abstract.tsx");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


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
    key: "train",
    value: function train(inputDataset, outputDataset) {
      var _this2 = this;

      var numberOfExamples = inputDataset.getNumberOfExamples();
      var startTime = new Date().getTime();
      var t = 0;

      for (var i = 0; i < this.iterations; i += 1) {
        var startIterationTime = new Date().getTime();

        for (var batch = 0, offset = 0; batch < numberOfExamples; batch += this.batchSize, offset += this.batchSize) {
          var input = inputDataset.getBatch(offset, this.batchSize);
          var output = outputDataset.getBatch(offset, this.batchSize);
          var forward = this.network.forward(input);
          this.network.backward(input, output, forward, this.regularization);
          this.network.getLayers().forEach(function (layer) {
            _this2.optimizer.setT(++t);

            _this2.optimizer.optimize(layer);
          });

          if (this.verbose) {
            var endIterationTime = new Date().getTime();
            console.log("Batch: ".concat(offset + 1, " / ").concat(Math.ceil(numberOfExamples / this.batchSize), " | Time: ").concat(endIterationTime - startIterationTime, " ms."));
          }
        }

        if (this.verbose) {
          if ((i + 1) % this.verboseStep === 0) {
            var endTime = new Date().getTime();
            var currentResult = this.cost(inputDataset, outputDataset);
            console.log("Iteration: ".concat(i + 1, " | Cost: ").concat(currentResult.cost, " | Accuracy: ").concat(currentResult.accuracy, "% | Time: ").concat(endTime - startTime, " ms."));
          }
        }

        if (typeof this.stepCallback === "function") {
          this.stepCallback({
            iteration: i
          });
        }
      }
    }
  }]);

  return MiniBatchTrainer;
}(_abstract__WEBPACK_IMPORTED_MODULE_0__.AbstractTrainer);

/***/ }),

/***/ "./src/typescript/trainer/optimizer/abstract.tsx":
/*!*******************************************************!*\
  !*** ./src/typescript/trainer/optimizer/abstract.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractOptimizer": () => (/* binding */ AbstractOptimizer)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/***/ "./src/typescript/trainer/optimizer/adam.tsx":
/*!***************************************************!*\
  !*** ./src/typescript/trainer/optimizer/adam.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptimizerAdam": () => (/* binding */ OptimizerAdam)
/* harmony export */ });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/typescript/trainer/optimizer/abstract.tsx");
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



var OptimizerAdam = /*#__PURE__*/function (_AbstractOptimizer) {
  _inherits(OptimizerAdam, _AbstractOptimizer);

  var _super = _createSuper(OptimizerAdam);

  function OptimizerAdam() {
    _classCallCheck(this, OptimizerAdam);

    return _super.apply(this, arguments);
  }

  _createClass(OptimizerAdam, [{
    key: "optimize",
    value: function optimize(layer) {
      this.adam(layer, this.learningRate, this.t);
    }
  }, {
    key: "adam",
    value: function adam(layer, learningRate, t) {
      var beta1 = 0.9;
      var beta2 = 0.999;
      var epsilon = 1e-8;
      layer.vW = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseAdd)((0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseMultiplyNumber)(layer.vW, beta1), (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseMultiplyNumber)(layer.gW, 1 - beta1));
      var wCorrected = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseDivideNumber)(layer.vW, 1 - Math.pow(beta1, t));
      layer.cW = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseAdd)((0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseMultiplyNumber)(layer.cW, beta1), (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseMultiplyNumber)(layer.gW, 1 - beta1));
      var sCorrected = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.sqrt)((0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseMultiplyNumber)(layer.cW, 1 - Math.pow(beta2, t)));
      layer.W = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseSubtract)(layer.W, (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseMultiplyNumber)((0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseMultiply)(wCorrected, sCorrected), learningRate));
      layer.vb = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseAdd)((0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseMultiplyNumber)(layer.vb, beta1), (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseMultiplyNumber)(layer.gb, 1 - beta1));
      var wCorrected2 = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseDivideNumber)(layer.vb, 1 - Math.pow(beta1, t));
      layer.cb = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseAdd)((0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseMultiplyNumber)(layer.cb, beta2), (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseMultiplyNumber)((0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseMultiply)(layer.gb, layer.gb), 1 - beta2));
      var sCorrected2 = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.sqrt)((0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseDivideNumber)(layer.cb, 1 - Math.pow(beta2, t)));
      layer.b = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseSubtract)(layer.b, (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseMultiplyNumber)((0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseDivide)(wCorrected2, sCorrected2), learningRate));
    }
  }]);

  return OptimizerAdam;
}(_abstract__WEBPACK_IMPORTED_MODULE_0__.AbstractOptimizer);

/***/ }),

/***/ "./src/typescript/trainer/optimizer/gradientdescent.tsx":
/*!**************************************************************!*\
  !*** ./src/typescript/trainer/optimizer/gradientdescent.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptimizerGradientDescent": () => (/* binding */ OptimizerGradientDescent)
/* harmony export */ });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/typescript/trainer/optimizer/abstract.tsx");
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
      layer.W = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseSubtract)(layer.W, (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseMultiplyNumber)(layer.gW, learningRate));
      layer.b = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseSubtract)(layer.b, (0,_math_matrix__WEBPACK_IMPORTED_MODULE_1__.elementWiseMultiplyNumber)(layer.gb, learningRate));
    }
  }]);

  return OptimizerGradientDescent;
}(_abstract__WEBPACK_IMPORTED_MODULE_0__.AbstractOptimizer);

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
  LayerType["conv"] = "conv";
  LayerType["maxpool"] = "maxpool";
  LayerType["fullyconnected"] = "fullyconnected";
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/typescript/main.tsx ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Builders": () => (/* binding */ Builders),
/* harmony export */   "Math": () => (/* binding */ Math),
/* harmony export */   "Layers": () => (/* binding */ Layers),
/* harmony export */   "Dataset": () => (/* binding */ Dataset),
/* harmony export */   "Optimizers": () => (/* binding */ Optimizers),
/* harmony export */   "Trainers": () => (/* binding */ Trainers),
/* harmony export */   "DatasetModifiers": () => (/* binding */ DatasetModifiers)
/* harmony export */ });
/* harmony import */ var _builder_builder1d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder/builder1d */ "./src/typescript/builder/builder1d.tsx");
/* harmony import */ var _builder_builder3d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder/builder3d */ "./src/typescript/builder/builder3d.tsx");
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layer */ "./src/typescript/layer/index.tsx");
/* harmony import */ var _math_matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math/matrix */ "./src/typescript/math/matrix.tsx");
/* harmony import */ var _dataset_datasetbuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataset/datasetbuilder */ "./src/typescript/dataset/datasetbuilder.tsx");
/* harmony import */ var _trainer_optimizer_adam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trainer/optimizer/adam */ "./src/typescript/trainer/optimizer/adam.tsx");
/* harmony import */ var _trainer_optimizer_gradientdescent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trainer/optimizer/gradientdescent */ "./src/typescript/trainer/optimizer/gradientdescent.tsx");
/* harmony import */ var _trainer_minibatch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trainer/minibatch */ "./src/typescript/trainer/minibatch.tsx");
/* harmony import */ var _dataset_datasetmodifier_callback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dataset/datasetmodifier/callback */ "./src/typescript/dataset/datasetmodifier/callback.tsx");
/* harmony import */ var _dataset_datasetmodifier_minmaxscaling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dataset/datasetmodifier/minmaxscaling */ "./src/typescript/dataset/datasetmodifier/minmaxscaling.tsx");
/* harmony import */ var _dataset_datasetmodifier_missingdata__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dataset/datasetmodifier/missingdata */ "./src/typescript/dataset/datasetmodifier/missingdata.tsx");












var Builders = {
  Builder1D: _builder_builder1d__WEBPACK_IMPORTED_MODULE_0__.Builder1D,
  Builder3D: _builder_builder3d__WEBPACK_IMPORTED_MODULE_1__.Builder3D
};
var Math = {
  Matrix: _math_matrix__WEBPACK_IMPORTED_MODULE_3__.Matrix,
  matrixMultiply: _math_matrix__WEBPACK_IMPORTED_MODULE_3__.multiply,
  matrixSum: _math_matrix__WEBPACK_IMPORTED_MODULE_3__.sum,
  matrixFillRandom: _math_matrix__WEBPACK_IMPORTED_MODULE_3__.fillRandom,
  matrixElementWiseMultiply: _math_matrix__WEBPACK_IMPORTED_MODULE_3__.elementWiseMultiply,
  matrixElementWiseDivide: _math_matrix__WEBPACK_IMPORTED_MODULE_3__.elementWiseDivide,
  matrixElementWiseAdd: _math_matrix__WEBPACK_IMPORTED_MODULE_3__.elementWiseAdd,
  matrixElementWiseSubtract: _math_matrix__WEBPACK_IMPORTED_MODULE_3__.elementWiseSubtract
};
var Layers = {
  SoftmaxLayer: _layer__WEBPACK_IMPORTED_MODULE_2__.SoftmaxLayer,
  LogisticLayer: _layer__WEBPACK_IMPORTED_MODULE_2__.LogisticLayer,
  ReluLayer: _layer__WEBPACK_IMPORTED_MODULE_2__.ReluLayer,
  SoftplusLayer: _layer__WEBPACK_IMPORTED_MODULE_2__.SoftplusLayer,
  TanhLayer: _layer__WEBPACK_IMPORTED_MODULE_2__.TanhLayer,
  ConvLayer: _layer__WEBPACK_IMPORTED_MODULE_2__.ConvLayer,
  MaxPoolLayer: _layer__WEBPACK_IMPORTED_MODULE_2__.MaxPoolLayer,
  FullyConnectedLayer: _layer__WEBPACK_IMPORTED_MODULE_2__.FullyConnectedLayer
};
var Dataset = {
  DatasetBuilder: _dataset_datasetbuilder__WEBPACK_IMPORTED_MODULE_4__.DatasetBuilder
};
var Optimizers = {
  OptimizerAdam: _trainer_optimizer_adam__WEBPACK_IMPORTED_MODULE_5__.OptimizerAdam,
  OptimizerGradientDescent: _trainer_optimizer_gradientdescent__WEBPACK_IMPORTED_MODULE_6__.OptimizerGradientDescent
};
var Trainers = {
  MiniBatchTrainer: _trainer_minibatch__WEBPACK_IMPORTED_MODULE_7__.MiniBatchTrainer
};
var DatasetModifiers = {
  CallbackDatabaseModifier: _dataset_datasetmodifier_callback__WEBPACK_IMPORTED_MODULE_8__.CallbackDatabaseModifier,
  MinMaxScalingDatabaseModifier: _dataset_datasetmodifier_minmaxscaling__WEBPACK_IMPORTED_MODULE_9__.MinMaxScalingDatabaseModifier,
  MissingDataScalingDatabaseModifier: _dataset_datasetmodifier_missingdata__WEBPACK_IMPORTED_MODULE_10__.MissingDataScalingDatabaseModifier
};

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=impulse-ts.dev.js.map