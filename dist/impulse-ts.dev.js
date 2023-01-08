/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/typescript/Layer/AbstractLayer.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Layer/AbstractLayer.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractLayer1D": () => (/* binding */ AbstractLayer1D)
/* harmony export */ });
/* harmony import */ var _AbstractLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractLayer */ "./src/typescript/Layer/AbstractLayer.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! impulse-math-ts */ "./node_modules/impulse-math-ts/dist/impulse-math-ts.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__);
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
    _this.W = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.b = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.A = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.Z = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.gW = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.gb = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.vW = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.vb = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.sW = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.sb = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.dW = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.db = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
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
      this.gW = this.gW.setZeros();
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractLayer3D": () => (/* binding */ AbstractLayer3D)
/* harmony export */ });
/* harmony import */ var _AbstractLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractLayer */ "./src/typescript/Layer/AbstractLayer.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! impulse-math-ts */ "./node_modules/impulse-math-ts/dist/impulse-math-ts.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__);
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
    _this.W = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.b = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.A = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.Z = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.gW = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.gb = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.vW = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.vb = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.sW = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.sb = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.dW = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.db = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Backpropagation1Dto1D": () => (/* binding */ Backpropagation1Dto1D)
/* harmony export */ });
/* harmony import */ var _AbstractBackpropagation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractBackpropagation */ "./src/typescript/Layer/Backpropagation/AbstractBackpropagation.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! impulse-math-ts */ "./node_modules/impulse-math-ts/dist/impulse-math-ts.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__);
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
      return new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackpropagationToConv": () => (/* binding */ BackpropagationToConv)
/* harmony export */ });
/* harmony import */ var _AbstractBackpropagation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractBackpropagation */ "./src/typescript/Layer/Backpropagation/AbstractBackpropagation.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! impulse-math-ts */ "./node_modules/impulse-math-ts/dist/impulse-math-ts.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__);
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
        var tmpResult = (0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.getComputation)().execute("fillZeros", new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix((inputWidth + 2 * padding) * (inputHeight + 2 * padding) * inputDepth, numberOfExamples));
        var result = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix(inputWidth * inputHeight * inputDepth, numberOfExamples);
        previousLayer.gW = (0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.getComputation)().execute("fillZeros", previousLayer.gW);
        previousLayer.gb = (0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.getComputation)().execute("fillZeros", previousLayer.gb);
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackpropagationToMaxPool": () => (/* binding */ BackpropagationToMaxPool)
/* harmony export */ });
/* harmony import */ var _AbstractBackpropagation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractBackpropagation */ "./src/typescript/Layer/Backpropagation/AbstractBackpropagation.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! impulse-math-ts */ "./node_modules/impulse-math-ts/dist/impulse-math-ts.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__);
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
        var result = (0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.getComputation)().execute("fillZeros", new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix(prevLayer.Z.rows, prevLayer.Z.cols));
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
      return new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConvLayer": () => (/* binding */ ConvLayer)
/* harmony export */ });
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! impulse-math-ts */ "./node_modules/impulse-math-ts/dist/impulse-math-ts.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/typescript/types.ts");
/* harmony import */ var _AbstractLayer3D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AbstractLayer3D */ "./src/typescript/Layer/AbstractLayer3D.ts");
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
      var result = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getOutputWidth() * this.getOutputHeight() * this.getOutputDepth(), input.cols).setZeros();
      for (var i = 0; i < input.cols; i += 1) {
        var conv = (0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.im2col)(input.col(i), this.depth, this.height, this.width, this.filterSize, this.filterSize, this.padding, this.padding, this.stride, this.stride);
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
      return _types__WEBPACK_IMPORTED_MODULE_1__.LayerType.conv;
    }
  }, {
    key: "derivative",
    value: function derivative(delta) {
      return (0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("reluBackpropagation", delta, this.A);
    }
  }]);
  return ConvLayer;
}(_AbstractLayer3D__WEBPACK_IMPORTED_MODULE_2__.AbstractLayer3D);

/***/ }),

/***/ "./src/typescript/Layer/FullyConnected.ts":
/*!************************************************!*\
  !*** ./src/typescript/Layer/FullyConnected.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LSTMLayer": () => (/* binding */ LSTMLayer)
/* harmony export */ });
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! impulse-math-ts */ "./node_modules/impulse-math-ts/dist/impulse-math-ts.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__);
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
      var concat = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(nx + na, m);
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaxPoolLayer": () => (/* binding */ MaxPoolLayer)
/* harmony export */ });
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! impulse-math-ts */ "./node_modules/impulse-math-ts/dist/impulse-math-ts.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/typescript/types.ts");
/* harmony import */ var _AbstractLayer3D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AbstractLayer3D */ "./src/typescript/Layer/AbstractLayer3D.ts");
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
      var result = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getOutputWidth() * this.getOutputHeight() * this.getOutputDepth(), input.cols);
      for (var i = 0; i < input.cols; i += 1) {
        var pool = (0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.maxpool)(input.col(i), this.depth, this.height, this.width, this.filterSize, this.filterSize, this.stride, this.stride);
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
      return _types__WEBPACK_IMPORTED_MODULE_1__.LayerType.maxpool;
    }
  }, {
    key: "derivative",
    value: function derivative(delta) {
      return delta;
    }
  }]);
  return MaxPoolLayer;
}(_AbstractLayer3D__WEBPACK_IMPORTED_MODULE_2__.AbstractLayer3D);


/***/ }),

/***/ "./src/typescript/Layer/Purelin.ts":
/*!*****************************************!*\
  !*** ./src/typescript/Layer/Purelin.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecurrentLayer": () => (/* binding */ RecurrentLayer)
/* harmony export */ });
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! impulse-math-ts */ "./node_modules/impulse-math-ts/dist/impulse-math-ts.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__);
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
      this.Wax = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getWidth(), this.getHeight());
      this.Wax = this.Wax.setRandom(this.getWidth());
      this.Waa = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getWidth(), this.getWidth());
      this.Waa = this.Waa.setRandom(this.getWidth());
      this.Wya = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getDepth(), this.getWidth());
      this.Wya = this.Wya.setRandom(this.getDepth());
      this.b = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getWidth(), 1);
      this.b = this.b.setRandom(this.getWidth());
      this.by = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getDepth(), 1);
      this.by = this.by.setRandom(this.getDepth());
      this.dWax = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getWidth(), this.getHeight());
      this.dWax = this.dWax.setZeros();
      this.dWaa = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getWidth(), this.getWidth());
      this.dWaa = this.dWaa.setZeros();
      this.dWya = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getDepth(), this.getWidth());
      this.dWya = this.dWya.setZeros();
      this.db = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getWidth(), 1);
      this.db = this.db.setZeros();
      this.dby = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getDepth(), 1);
      this.dby = this.dby.setZeros();
      this.daNext = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getWidth(), this.getWidth());
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReluLayer": () => (/* binding */ ReluLayer)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/typescript/types.ts");
/* harmony import */ var _AbstractLayer1D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractLayer1D */ "./src/typescript/Layer/AbstractLayer1D.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! impulse-math-ts */ "./node_modules/impulse-math-ts/dist/impulse-math-ts.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_2__);
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
      return m.setMin(0.0);
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.relu;
    }
  }, {
    key: "derivative",
    value: function derivative(delta) {
      return (0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_2__.getComputation)().execute("reluBackpropagation", delta, this.A);
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./src/typescript/Network/Network.ts":
/*!*******************************************!*\
  !*** ./src/typescript/Network/Network.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    value: function backward(X, Y, regularization) {
      var m = X.cols;
      var predictions = this.forward(X);
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

/***/ "./src/typescript/Network/NetworkRNN.ts":
/*!**********************************************!*\
  !*** ./src/typescript/Network/NetworkRNN.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkRNN": () => (/* binding */ NetworkRNN)
/* harmony export */ });
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! impulse-math-ts */ "./node_modules/impulse-math-ts/dist/impulse-math-ts.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__);
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
      var x = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.dimensions[1], 1).setZeros();
      var aPrev = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.dimensions[0], 1).setRandom(this.dimensions[1]);
      var idx = -1;
      var counter = 0;
      while (idx != newLineCharacter && counter != 50) {
        var a = Wax.dot(x).add(Waa.dot(aPrev)).add(b).setMin(1e-3).tanh();
        var z = Wya.dot(a).add(by);
        var y = z.softmax();
        idx = charIndices[chars[y.colMaxCoeffIndex(0)]];
        x = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.dimensions[1], 1).setZeros();
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
        x[t] = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.dimensions[1], this.dimensions[0]).setZeros();
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
      var _dWax = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.layers[0].Wax.rows, this.layers[0].Wax.cols).setZeros();
      var _dWaa = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.layers[0].Waa.rows, this.layers[0].Waa.cols).setZeros();
      var _dWya = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.layers[0].Wya.rows, this.layers[0].Wya.cols).setZeros();
      var _db = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.layers[0].db.rows, this.layers[0].db.cols).setZeros();
      var _dby = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.layers[0].dby.rows, this.layers[0].dby.cols).setZeros();
      var _daNext = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.layers[0].daNext.rows, this.layers[0].daNext.rows).setZeros();
      for (var t = X.rows - 1; t >= 1; t -= 1) {
        // loop over examples
        var dy = impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix.from(a[t].data);
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractNetworkBuilder": () => (/* binding */ AbstractNetworkBuilder)
/* harmony export */ });
/* harmony import */ var _Network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Network */ "./src/typescript/Network/index.ts");
/* harmony import */ var _Layer_Backpropagation_BackpropagationFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layer/Backpropagation/BackpropagationFactory */ "./src/typescript/Layer/Backpropagation/BackpropagationFactory.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var AbstractNetworkBuilder = /*#__PURE__*/function () {
  function AbstractNetworkBuilder(dimension) {
    _classCallCheck(this, AbstractNetworkBuilder);
    _defineProperty(this, "dimensions", null);
    _defineProperty(this, "lastLayer", null);
    _defineProperty(this, "network", null);
    this.dimensions = dimension;
    this.network = new _Network__WEBPACK_IMPORTED_MODULE_0__.Network(dimension);
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkBuilder1D": () => (/* binding */ NetworkBuilder1D)
/* harmony export */ });
/* harmony import */ var _AbstractNetworkBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractNetworkBuilder */ "./src/typescript/NetworkBuilder/AbstractNetworkBuilder.ts");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layer___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layer/ */ "./src/typescript/Layer/index.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! impulse-math-ts */ "./node_modules/impulse-math-ts/dist/impulse-math-ts.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_3__);
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
            layer.W = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_3__.Matrix(json["layers"][i]["weights"]["W"].length, json["layers"][i]["weights"]["W"][0].length, json["layers"][i]["weights"]["W"]);
            layer.b = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_3__.Matrix(json["layers"][i]["weights"]["b"].length, json["layers"][i]["weights"]["b"][0].length, json["layers"][i]["weights"]["b"]);
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiniBatchTrainer": () => (/* binding */ MiniBatchTrainer)
/* harmony export */ });
/* harmony import */ var _AbstractTrainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractTrainer */ "./src/typescript/Trainer/AbstractTrainer.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! impulse-math-ts */ "./node_modules/impulse-math-ts/dist/impulse-math-ts.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__);
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
          this.network.backward(input.data, output.data, this.regularization);
          this.optimizer.setT(++t);
          this.network.getLayers().forEach(function (layer) {
            _this2.optimizer.optimize(layer);
          });
          if (this.verbose) {
            var cost = this.cost(input, output);
            var endIterationTime = new Date().getTime();
            console.log("Batch: ".concat(offset, " / ").concat(numberOfExamples, " | Batch time: ").concat(endIterationTime - startIterationTime2, "ms | Time from start: ").concat((0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.round)((endIterationTime - startIterationTime) / 1000, 1), "s. | Cost: ").concat((0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.round)(cost.cost, 2), " | Acc: ").concat(cost.accuracy));
          }
        }
        if (this.verbose) {
          if ((i + 1) % this.verboseStep === 0) {
            var endTime = new Date().getTime();
            var currentResult = this.cost(inputDataset, outputDataset);
            console.log("Iteration: ".concat(i + 1, " | Cost: ").concat((0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.round)(currentResult.cost, 5), " | Accuracy: ").concat(currentResult.accuracy, "% | Time: ").concat((endTime - startTime) / 1000, " s."));
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RNNTrainer": () => (/* binding */ RNNTrainer)
/* harmony export */ });
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! impulse-math-ts */ "./node_modules/impulse-math-ts/dist/impulse-math-ts.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__);
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
      var aPrev = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.network.getDimensions()[0], this.network.getDimensions()[0]).setZeros();
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Trainer": () => (/* binding */ Trainer)
/* harmony export */ });
/* harmony import */ var _AbstractTrainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractTrainer */ "./src/typescript/Trainer/AbstractTrainer.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! impulse-math-ts */ "./node_modules/impulse-math-ts/dist/impulse-math-ts.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__);
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
        this.network.backward(inputDataset.data, outputDataset.data, this.regularization);
        this.optimizer.setT(++t);
        this.network.getLayers().forEach(function (layer) {
          _this.optimizer.optimize(layer);
        });
        if (this.verbose) {
          if ((i + 1) % this.verboseStep === 0) {
            var currentResult = this.cost(inputDataset, outputDataset);
            var endTime = new Date().getTime();
            console.log("Iteration: ".concat(i + 1, " | Cost: ").concat((0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.round)(currentResult.cost, 5), " | Accuracy: ").concat((0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.round)(currentResult.accuracy, 2), "% | Time: ").concat((endTime - startTime) / 1000, " s."));
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

"use strict";
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

"use strict";
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

/***/ "./node_modules/impulse-math-ts/dist/impulse-math-ts.js":
/*!**************************************************************!*\
  !*** ./node_modules/impulse-math-ts/dist/impulse-math-ts.js ***!
  \**************************************************************/
/***/ ((module) => {

(()=>{"use strict";var r={d:(t,o)=>{for(var e in o)r.o(o,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})},o:(r,t)=>Object.prototype.hasOwnProperty.call(r,t),r:r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})}},t={};function o(r){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},o(r)}function e(r,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,n(e.key),e)}}function n(r){var t=function(r,t){if("object"!==o(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var n=e.call(r,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(r);return"symbol"===o(t)?t:String(t)}r.r(t),r.d(t,{ComputationCPU:()=>W,ComputationGPU:()=>f,Matrix:()=>H,getComputation:()=>Z,im2col:()=>J,maxpool:()=>Q,round:()=>V,setComputation:()=>I});var a=function(){function r(){var t,o,e;!function(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),t=this,e={},(o=n(o="kernels"))in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e}var t,o;return t=r,o=[{key:"addKernel",value:function(r,t){return this.kernels[r]=t,this}},{key:"execute",value:function(r){if(!this.kernels[r])throw new Error("Kernel '".concat(r,"' not exists."));for(var t=arguments.length,o=new Array(t>1?t-1:0),e=1;e<t;e++)o[e-1]=arguments[e];return this.kernels[r].apply(null,o)}}],o&&e(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),r}();function s(r){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},s(r)}function i(r,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,t){return r.__proto__=t,r},i(r,t)}function c(r,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(r)}function u(r){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},u(r)}var f=function(r){!function(r,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),t&&i(r,t)}(a,r);var t,o,e,n=(o=a,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(r){return!1}}(),function(){var r,t=u(o);if(e){var n=u(this).constructor;r=Reflect.construct(t,arguments,n)}else r=t.apply(this,arguments);return c(this,r)});function a(){return function(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),n.call(this)}return t=a,Object.defineProperty(t,"prototype",{writable:!1}),t}(a);function l(r){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},l(r)}function h(r,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,t){return r.__proto__=t,r},h(r,t)}function v(r,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(r)}function w(r){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},w(r)}var d=function(r,t){if(r.rows!==t.rows)throw new Error("ROWS number not equal.");if(r.cols!==t.cols)throw new Error("COLS number not equal.");for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var n=0;n<r.cols;n+=1)o[e][n]=r.data[e][n]/t.data[e][n]}return new H(r.rows,t.cols,o)},y=function(r,t){for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var n=0;n<r.cols;n+=1)o[e][n]=r.data[e][n]/t}return new H(r.rows,r.cols,o)},p=function(r){for(var t=[],o=0;o<r.rows;o+=1){t[o]=[];for(var e=0;e<r.cols;e+=1)t[o][e]=1/(1+Math.exp(-r.data[o][e]))}return H.from(t)},m=function(r,t){for(var o=[],e=0;e<t.rows;e+=1){o[e]=[];for(var n=0;n<t.cols;n+=1)t.data&&(o[e][n]=Math.log(t.data[e][n]+1e-8))}for(var a=_(new H(t.rows,t.cols,o),r),s=[],i=0;i<r.rows;i+=1){s[i]=[];for(var c=0;c<r.cols;c+=1)r.data&&(s[i][c]=1-r.data[i][c])}for(var u=new H(r.rows,r.cols,s),f=[],l=0;l<t.rows;l+=1){f[l]=[];for(var h=0;h<t.cols;h+=1)t.data&&(f[l][h]=Math.log(1-t.data[l][h]+1e-8))}var v=new H(t.rows,t.cols,f);return P(_(C(a,-1),r),_(C(v,-1),q(u,1))).sum()},b=function(r,t){return p(t).multiply(p(t).minusOne())},k=function(r){for(var t=[],o=0;o<r.rows;o+=1){t[o]=[];for(var e=0;e<r.cols;e+=1)t[o][e]=(1-Math.exp(-2*r.data[o][e]))/(1+Math.exp(-2*r.data[o][e]))}return H.from(t)},g=function(r){for(var t=[],o=0;o<r.rows;o+=1){t[o]=[];for(var e=0;e<r.cols;e+=1)r.data&&(t[o][e]=Math.max(0,r.data[o][e]))}return new H(r.rows,r.cols,t)},O=function(r,t){for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var n=0;n<r.cols;n+=1)r.data&&(o[e][n]=t.data[e][n]>0?1:0)}return _(new H(r.rows,r.cols,o),r)},S=function(r){for(var t=[],o=0;o<r.rows;o+=1){t[o]=[];for(var e=0;e<r.cols;e+=1)r.data&&(t[o][e]=Math.log(1+Math.exp(r.data[o][e])))}return new H(r.rows,r.cols,t)},M=function(r){for(var t=[],o=0;o<r.rows;o+=1){t[o]=[];for(var e=0;e<r.cols;e+=1)r.data&&(t[o][e]=Math.pow(r.data[o][e],2))}return new H(r.rows,r.cols,t).sum()},x=function(r){for(var t=[],o=0;o<r.rows;o+=1){t[o]=[];for(var e=0;e<r.cols;e+=1)r.data&&(t[o][e]=Math.sqrt(r.data[o][e]+1e-8))}return new H(r.rows,r.cols,t)},j=function(r,t){if(r.cols!==t.rows)throw new Error("DIMENSIONS error. m1.cols ".concat(r.rows," ").concat(r.cols," !== m2.rows ").concat(t.rows," ").concat(t.cols,"."));for(var o=[],e=0;e<r.rows;++e){o[e]=new Array(t.cols);for(var n=0;n<t.cols;++n){o[e][n]=0;for(var a=0;a<r.cols;++a)r.data&&t.data&&(o[e][n]+=r.data[e][a]*t.data[a][n])}}return new H(r.rows,t.cols,o)},P=function(r,t){if(r.rows!==t.rows)throw new Error("ROWS number not equal.");if(r.cols!==t.cols)throw new Error("COLS number not equal. m1.cols ".concat(r.cols," !== m2.cols ").concat(t.cols));for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var n=0;n<r.cols;n+=1)r.data&&t.data&&(o[e][n]=r.data[e][n]+t.data[e][n])}return new H(r.rows,r.cols,o)},E=function(r,t){if(r.rows!==t.rows)throw new Error("ROWS number not equal: m1.rows ".concat(r.rows," !== m2.rows ").concat(t.rows));if(r.cols!==t.cols)throw new Error("COLS number not equal: m1.cols ".concat(r.cols," !== m2.cols ").concat(t.cols));for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var n=0;n<r.cols;n+=1)r.data&&t.data&&(o[e][n]=r.data[e][n]-t.data[e][n])}return new H(r.rows,r.cols,o)},K=function(r,t){for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var n=0;n<r.cols;n+=1)o[e][n]=(4*Math.random()-2)*Math.sqrt(2/t)}return new H(r.rows,r.cols,o)},R=function(r){for(var t=[],o=0;o<r.rows;o+=1){t[o]=[];for(var e=0;e<r.cols;e+=1)t[o][e]=0}return new H(r.rows,r.cols,t)},_=function(r,t){if(r.rows!==t.rows)throw new Error("ROWS number not equal: m1.rows ".concat(r.rows," !== m2.rows ").concat(t.rows));if(r.cols!==t.cols)throw new Error("COLS number not equal: m1.cols ".concat(r.cols," !== m2.cols ").concat(t.cols));for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var n=0;n<r.cols;n+=1)r.data&&t.data&&(o[e][n]=r.data[e][n]*t.data[e][n])}return new H(r.rows,r.cols,o)},C=function(r,t){for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var n=0;n<r.cols;n+=1)r.data&&(o[e][n]=r.data[e][n]*t)}return new H(r.rows,r.cols,o)},q=function(r,t){for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var n=0;n<r.cols;n+=1)r.data&&(o[e][n]=t-r.data[e][n])}return new H(r.rows,r.cols,o)},T=function(r,t){for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var n=0;n<r.cols;n+=1)r.data&&(o[e][n]=Math.pow(r.data[e][n],t))}return new H(r.rows,r.cols,o)},A=function(r,t){for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var n=0;n<r.cols;n+=1)r.data&&(o[e][n]=Math.log(r.data[e][n]+1e-8))}return new H(r.rows,r.cols,o)},D=function(r,t){for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var n=0;n<r.cols;n+=1)r.data&&(o[e][n]=Math.log(1-r.data[e][n]))}return new H(r.rows,r.cols,o)},N=function(r,t){for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var n=0;n<r.cols;n+=1)o[e][n]=r.data[e][n]+t}return new H(r.rows,r.cols,o)},B=function(r){for(var t=[],o=0;o<r.cols;o+=1){t[o]=[];for(var e=0;e<r.rows;e+=1)r.data&&(t[o][e]=r.data[e][o])}return new H(r.cols,r.rows,t)},W=function(r){!function(r,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),t&&h(r,t)}(a,r);var t,o,e,n=(o=a,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(r){return!1}}(),function(){var r,t=w(o);if(e){var n=w(this).constructor;r=Reflect.construct(t,arguments,n)}else r=t.apply(this,arguments);return v(this,r)});function a(){var r;return function(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=n.call(this)).addKernel("multiply",j),r.addKernel("add",P),r.addKernel("subtract",E),r.addKernel("subtractFromNumber",q),r.addKernel("fillRandom",K),r.addKernel("fillZeros",R),r.addKernel("elementWiseMultiply",_),r.addKernel("multiplyNumber",C),r.addKernel("elementWiseDivide",d),r.addKernel("divideNumber",y),r.addKernel("logisticActivation",p),r.addKernel("logisticLoss",m),r.addKernel("logisticBackpropagation",b),r.addKernel("tanhActivation",k),r.addKernel("reluActivation",g),r.addKernel("reluBackpropagation",O),r.addKernel("softplusActivation",S),r.addKernel("penalty",M),r.addKernel("sqrt",x),r.addKernel("transpose",B),r.addKernel("pow",T),r.addKernel("log",A),r.addKernel("logMinusOne",D),r.addKernel("addNumber",N),r}return t=a,Object.defineProperty(t,"prototype",{writable:!1}),t}(a),L=new W,I=function(r){L=r},Z=function(){return L};function z(r){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},z(r)}function F(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function U(r,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,$(e.key),e)}}function G(r,t,o){return(t=$(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function $(r){var t=function(r,t){if("object"!==z(r)||null===r)return r;var o=r[Symbol.toPrimitive];if(void 0!==o){var e=o.call(r,"string");if("object"!==z(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(r);return"symbol"===z(t)?t:String(t)}var H=function(){function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;F(this,r),G(this,"rows",0),G(this,"cols",0),G(this,"data",null),this.resize(t,o),e&&this.generateData(e)}var t,o,e;return t=r,o=[{key:"resize",value:function(r,t){this.rows=r,this.cols=t,this.data=new Array(this.rows);for(var o=0;o<this.rows;o+=1)this.data[o]=new Array(this.cols);return this}},{key:"generateData",value:function(r){for(var t=[],o=0;o<this.rows;o+=1)t[o]=new Array(this.cols);for(var e=0;e<this.cols;e+=1)for(var n=0;n<this.rows;n+=1)"number"==typeof r[n]?t[n][e]=r[n]:"string"==typeof r[n][e]&&/^[0-9.]+$/.test(String(r[n][e]))?t[n][e]=Number(r[n][e]):t[n][e]=r[n][e];return this.data=t,this}},{key:"sum",value:function(){for(var r=0,t=0;t<this.rows;t+=1)for(var o=0;o<this.cols;o+=1)r+=this.data[t][o];return r}},{key:"colwiseSum",value:function(){for(var t=[],o=this.transpose(),e=0;e<o.rows;e+=1){t[e]=[0];for(var n=0;n<o.cols;n+=1)t[e][0]+=o.data[e][n]}return new r(this.cols,1,t)}},{key:"rowwiseSum",value:function(){for(var t=[[]],o=0;o<this.rows;o+=1){for(var e=0,n=0;n<this.cols;n+=1)e+=this.data[o][n];t[0].push(e)}return new r(1,this.rows,t)}},{key:"flatten",value:function(){for(var r=[],t=0;t<this.rows;t+=1)for(var o=0;o<this.cols;o+=1)r.push(this.data[t][o]);return r}},{key:"replicate",value:function(t,o){if(1===t&&1===this.cols&&o>1){for(var e=[],n=0;n<this.rows;n+=1){e[n]=[];for(var a=0;a<o;a+=1)e[n][a]=this.data[n][0]}return r.from(e)}if(1===o&&1===this.rows&&t>1){for(var s=[],i=0;i<t;i+=1){s[i]=[];for(var c=0;c<this.cols;c+=1)s[i][c]=this.data[0][c]}return r.from(s)}return this}},{key:"transpose",value:function(){return Z().execute("transpose",this)}},{key:"colMaxCoeffIndex",value:function(r){for(var t=-1,o=-1/0,e=0;e<this.rows;e+=1)this.data&&this.data[e][r]>o&&(o=this.data[e][r],t=e);return t}},{key:"rowMaxCoeffIndex",value:function(r){for(var t=-1,o=-1/0,e=0;e<this.cols;e+=1)this.data[r][e]>o&&(o=this.data[r][e],t=e);return t}},{key:"block",value:function(t,o,e,n){for(var a=[],s=t,i=0;s<this.rows&&s<t+e;s+=1,i+=1){a[i]=new Array(n);for(var c=o,u=0;c<this.cols&&c<o+n;c+=1,u+=1)a[i][u]=this.data[s][c]}return new r(e,n,a)}},{key:"col",value:function(t){for(var o=[],e=0;e<this.rows;e+=1)o[e]=[this.data[e][t]];return new r(this.rows,1,o)}},{key:"row",value:function(t){for(var o=[],e=0;e<this.cols;e+=1)o[e]=[this.data[t][e]];return new r(this.cols,1,o)}},{key:"setCol",value:function(r,t){for(var o=0;o<this.rows;o+=1)this.data&&t.data&&(this.data[o][r]=t.data[o][0]);return this}},{key:"sigmoid",value:function(){return this.multiply(-1).exp().add(1).fraction(1)}},{key:"rollToColMatrix",value:function(){for(var t=[],o=0,e=0;e<this.rows;e+=1)for(var n=0;n<this.cols;n+=1)t[o]=[],t[o++][0]=this.data[e][n];return r.from(t)}},{key:"abs",value:function(){for(var t=[],o=0;o<this.rows;o+=1){t[o]=[];for(var e=0;e<this.cols;e+=1)t[o][e]=Math.abs(this.data[o][e])}return r.from(t)}},{key:"mean",value:function(){for(var r=0,t=this.rows*this.cols,o=0;o<this.rows;o+=1)for(var e=0;e<this.cols;e+=1)r+=this.data[o][e];return r/t}},{key:"max",value:function(){for(var r=-1/0,t=0;t<this.rows;t+=1)for(var o=0;o<this.cols;o+=1)r=Math.max(this.data[t][o],r);return r}},{key:"setMax",value:function(t){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var n=0;n<this.cols;n+=1)o[e][n]=Math.min(this.data[e][n],t)}return r.from(o)}},{key:"setMin",value:function(t){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var n=0;n<this.cols;n+=1)o[e][n]=Math.max(this.data[e][n],t)}return r.from(o)}},{key:"setZeros",value:function(){for(var t=[],o=0;o<this.rows;o+=1){t[o]=[];for(var e=0;e<this.cols;e+=1)t[o][e]=0}return r.from(t)}},{key:"setOnes",value:function(){for(var t=[],o=0;o<this.rows;o+=1){t[o]=[];for(var e=0;e<this.cols;e+=1)t[o][e]=1}return r.from(t)}},{key:"setRandom",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var n=0;n<this.cols;n+=1)o[e][n]=(4*Math.random()-2)*Math.sqrt(2/t)}return r.from(o)}},{key:"fraction",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var n=0;n<this.cols;n+=1)o[e][n]=t/this.data[e][n]}return r.from(o)}},{key:"sqrt",value:function(){for(var t=[],o=0;o<this.rows;o+=1){t[o]=[];for(var e=0;e<this.cols;e+=1)t[o][e]=Math.sqrt(this.data[o][e]+1e-8)}return r.from(t)}},{key:"dot",value:function(r){return Z().execute("multiply",this,r)}},{key:"multiply",value:function(t){if("number"==typeof t){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var n=0;n<this.cols;n+=1)o[e][n]=this.data[e][n]*t}return r.from(o)}if(t.rows!==this.rows||this.cols!==t.cols)throw new Error("Dimension error: ".concat(this.shape()," !== ").concat(t.shape()));for(var a=[],s=0;s<this.rows;s+=1){a[s]=[];for(var i=0;i<this.cols;i+=1)a[s][i]=this.data[s][i]*t.data[s][i]}return r.from(a)}},{key:"subtract",value:function(t){if("number"==typeof t){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var n=0;n<this.cols;n+=1)o[e][n]=this.data[e][n]-t}return r.from(o)}if(this.rows!==t.rows||this.cols!==t.cols)throw new Error("Dimensions error: ".concat(this.rows,", ").concat(this.cols," !== ").concat(t.rows,", ").concat(t.cols));for(var a=[],s=0;s<this.rows;s+=1){a[s]=[];for(var i=0;i<this.cols;i+=1)a[s][i]=this.data[s][i]-t.data[s][i]}return r.from(a)}},{key:"forEach",value:function(t){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var n=0;n<this.cols;n+=1)o[e][n]=t(this.data[e][n])}return r.from(o)}},{key:"shape",value:function(){return[this.rows,this.cols]}},{key:"divide",value:function(t){if("number"==typeof t){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var n=0;n<this.cols;n+=1)o[e][n]=this.data[e][n]/t}return r.from(o)}if(t.rows!==this.rows||t.cols!==this.cols)throw new Error("Dimensions error (".concat(this.rows,", ").concat(this.cols,") !== (").concat(t.rows,", ").concat(t.cols,")"));for(var a=[],s=0;s<this.rows;s+=1){a[s]=[];for(var i=0;i<this.cols;i+=1)a[s][i]=this.data[s][i]/t.data[s][i]}return r.from(a)}},{key:"minusOne",value:function(){for(var t=[],o=0;o<this.rows;o+=1){t[o]=[];for(var e=0;e<this.cols;e+=1)t[o][e]=1-this.data[o][e]}return r.from(t)}},{key:"subtractFromNumber",value:function(t){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var n=0;n<this.cols;n+=1)o[e][n]=t-this.data[e][n]}return r.from(o)}},{key:"add",value:function(t){if("number"==typeof t){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var n=0;n<this.cols;n+=1)o[e][n]=this.data[e][n]+t}return r.from(o)}if(t instanceof r){if(t.rows!==this.rows||t.cols!==this.cols)throw new Error("Dimention error: rows (x: ".concat(this.rows,", y: ").concat(this.cols,") !== (x: ").concat(t.rows,", y: ").concat(t.cols,")"));for(var a=[],s=0;s<this.rows;s+=1){a[s]=[];for(var i=0;i<this.cols;i+=1)a[s][i]=this.data[s][i]+t.data[s][i]}return r.from(a)}return this}},{key:"log",value:function(){for(var t=[],o=0;o<this.rows;o+=1){t[o]=[];for(var e=0;e<this.cols;e+=1)t[o][e]=Math.log(this.data[o][e]+1e-8)}return r.from(t)}},{key:"tanh",value:function(){return this.exp().subtract(this.multiply(-1).exp()).divide(this.exp().add(this.multiply(-1).exp()))}},{key:"softmax",value:function(){var r=this.max()-1e-8;return this.subtract(r).exp().divide(this.rowwiseSum().replicate(this.cols,1).transpose())}},{key:"exp",value:function(){for(var t=[],o=0;o<this.rows;o+=1){t[o]=[];for(var e=0;e<this.cols;e+=1)t[o][e]=Math.exp(this.data[o][e]+1e-8)}return r.from(t)}},{key:"pow",value:function(t){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var n=0;n<this.cols;n+=1)o[e][n]=Math.pow(this.data[e][n],t)}return r.from(o)}},{key:"value",value:function(r,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return void 0===o?this.data[r][t]:(this.data[r][t]=o,this)}},{key:"copy",value:function(){return r.from(this.data)}}],e=[{key:"from",value:function(t){var o;return new r(t.length,(null===(o=t[0])||void 0===o?void 0:o.length)||0,t)}}],o&&U(t.prototype,o),e&&U(t,e),Object.defineProperty(t,"prototype",{writable:!1}),r}(),J=function(r,t,o,e,n,a,s,i,c,u){for(var f=0,l=new H(((e-a+2*i)/u+1)*((o-n+2*s)/c+1),a*n*t).setZeros(),h=-s;h+n<=o+s;h+=c)for(var v=-i;v+a<=e+i;v+=u){for(var w=0,d=0;d<t;d++)for(var y=o*e*d,p=0;p<n;p++)for(var m=0;m<a;m++)h+p>=0&&v+m>=0&&v+m<e&&h+p<o&&(l.data[f][w]=r.data[(p+h)*e+v+m+y][0]),w++;f++}return l},Q=function(r,t,o,e,n,a,s,i){for(var c=(e-a)/i+1,u=(o-n)/s+1,f=0,l=new H(c*u*t,1).setZeros(),h=0;h+n<=o;h+=s)for(var v=0;v+a<=e;v+=i){for(var w=0;w<t;w++){for(var d=-1/0,y=o*e*w,p=c*u*w,m=0;m<n;m++)for(var b=0;b<a;b++)d=Math.max(d,r.data[y+(m+h)*e+v+b][0]);l.data[p+f][0]=d}f++}return l},V=function(r,t){return Math.round((r+223e-18)*Math.pow(10,t))/Math.pow(10,t)};module.exports=t})();
//# sourceMappingURL=impulse-math-ts.js.map

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./src/typescript/main.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layer": () => (/* binding */ Layer),
/* harmony export */   "Math": () => (/* binding */ Math),
/* harmony export */   "Network": () => (/* binding */ Network),
/* harmony export */   "NetworkBuilder": () => (/* binding */ NetworkBuilder),
/* harmony export */   "Optimizer": () => (/* binding */ Optimizer),
/* harmony export */   "Trainer": () => (/* binding */ Trainer)
/* harmony export */ });
/* harmony import */ var _NetworkBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NetworkBuilder */ "./src/typescript/NetworkBuilder/index.ts");
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layer */ "./src/typescript/Layer/index.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! impulse-math-ts */ "./node_modules/impulse-math-ts/dist/impulse-math-ts.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Trainer_Optimizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Trainer/Optimizer */ "./src/typescript/Trainer/Optimizer/index.ts");
/* harmony import */ var _Trainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Trainer */ "./src/typescript/Trainer/index.ts");
/* harmony import */ var _Network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Network */ "./src/typescript/Network/index.ts");






var NetworkBuilder = {
  NetworkBuilder1D: _NetworkBuilder__WEBPACK_IMPORTED_MODULE_0__.NetworkBuilder1D,
  NetworkBuilder3D: _NetworkBuilder__WEBPACK_IMPORTED_MODULE_0__.NetworkBuilder3D
};
var Math = {
  Matrix: impulse_math_ts__WEBPACK_IMPORTED_MODULE_2__.Matrix
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
  RecurrentLayer: _Layer__WEBPACK_IMPORTED_MODULE_1__.RecurrentLayer
};
var Optimizer = {
  OptimizerAdam: _Trainer_Optimizer__WEBPACK_IMPORTED_MODULE_3__.OptimizerAdam,
  OptimizerGradientDescent: _Trainer_Optimizer__WEBPACK_IMPORTED_MODULE_3__.OptimizerGradientDescent,
  OptimizerAdagrad: _Trainer_Optimizer__WEBPACK_IMPORTED_MODULE_3__.OptimizerAdagrad,
  OptimizerMomentum: _Trainer_Optimizer__WEBPACK_IMPORTED_MODULE_3__.OptimizerMomentum,
  OptimizerRMSProp: _Trainer_Optimizer__WEBPACK_IMPORTED_MODULE_3__.OptimizerRMSProp
};
var Trainer = {
  MiniBatchTrainer: _Trainer__WEBPACK_IMPORTED_MODULE_4__.MiniBatchTrainer,
  Trainer: _Trainer__WEBPACK_IMPORTED_MODULE_4__.Trainer,
  RNNTrainer: _Trainer__WEBPACK_IMPORTED_MODULE_4__.RNNTrainer
};
var Network = {
  NetworkRNN: _Network__WEBPACK_IMPORTED_MODULE_5__.NetworkRNN
};

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=impulse-ts.dev.js.map