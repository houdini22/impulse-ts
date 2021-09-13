(()=>{var t={846:(t,e,r)=>{t=r.nmd(t);try{process.dlopen(t,__dirname+r(622).sep+r.p+"94433ce4ed96aed2b359e8825ae71e40.node")}catch(t){throw new Error("node-loader:\n"+t)}},622:t=>{"use strict";t.exports=require("path")}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,loaded:!1,exports:{}};return t[n](i,i.exports,r),i.loaded=!0,i.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),r.p="";var n={};(()=>{"use strict";r.r(n),r.d(n,{Builder1D:()=>x,LogisticLayer:()=>tt,Matrix:()=>u,SoftmaxLayer:()=>V,matrixElementWiseAdd:()=>a,matrixElementWiseDivide:()=>p,matrixElementWiseMultiply:()=>y,matrixElementWiseSubtract:()=>s,matrixFillRandom:()=>l,matrixMultiply:()=>c,matrixSum:()=>h});var t=r(846);function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u=function(){function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Array(r*n);e(this,t),i(this,"rows",0),i(this,"cols",0),i(this,"data",null),this.resize(r,n),this.generateData(o)}var r,n;return r=t,(n=[{key:"resize",value:function(t,e){return this.rows=t,this.cols=e,this}},{key:"generateData",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Array;return this.data=Float64Array.from(t),this}},{key:"toBuffer",value:function(){var t=new ArrayBuffer(this.rows*this.cols*64),e=new DataView(t,0,this.rows*this.cols*64);return this.data.forEach((function(t,r){e.setFloat64(r,t)})),t}}])&&o(r.prototype,n),t}(),c=function(e,r){if(e.cols!==r.rows)throw new Error("DIMENSIONS error.");return new u(e.rows,r.cols,Array.from((0,t.MatrixMultiply)(e.toBuffer(),e.rows,e.cols,r.toBuffer(),r.rows,r.cols)))},a=function(e,r){if(e.rows!==r.rows)throw new Error("ROWS number not equal.");if(e.cols!==r.cols)throw new Error("COLS number not equal.");return new u(e.rows,r.cols,Array.from((0,t.MatrixElementWiseAdd)(e.toBuffer(),e.rows,e.cols,r.toBuffer(),r.rows,r.cols)))},s=function(e,r){if(e.rows!==r.rows)throw new Error("ROWS number not equal.");if(e.cols!==r.cols)throw new Error("COLS number not equal.");var n=new Uint8Array((0,t.MatrixElementWiseSubtract)(e.toBuffer(),e.rows,e.cols,r.toBuffer(),r.rows,r.cols),0,e.rows*e.cols);return new u(e.rows,r.cols,Array.from(n))},f=function(t,e,r){t.resize(e,r)},l=function(e,r){return new u(e.rows,e.cols,Array.from((0,t.MatrixFillRandom)(e.rows,e.cols,r)))},y=function(e,r){if(e.rows!==r.rows)throw new Error("ROWS number not equal.");if(e.cols!==r.cols)throw new Error("COLS number not equal.");var n=new Uint8Array((0,t.MatrixElementWiseMultiply)(e.toBuffer(),e.rows,e.cols,r.toBuffer(),r.rows,r.cols),0,e.rows*e.cols);return new u(e.rows,r.cols,Array.from(n))},h=function(e){return(0,t.MatrixSum)(e.toBuffer(),e.rows,e.cols)},p=function(e,r){if(e.rows!==r.rows)throw new Error("ROWS number not equal.");if(e.cols!==r.cols)throw new Error("COLS number not equal.");var n=new Uint8Array((0,t.MatrixElementWiseDivide)(e.toBuffer(),e.rows,e.cols,r.toBuffer(),r.rows,r.cols),0,e.rows*e.cols);return new u(e.rows,r.cols,Array.from(n))};const w=require("fs");function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function v(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const d=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,"dimensions",null),v(this,"size",0),v(this,"layers",[]),this.dimensions=e}var e,r;return e=t,(r=[{key:"addLayer",value:function(t){this.size++,this.layers.push(t)}},{key:"forward",value:function(t){var e=t;return this.layers.forEach((function(t){e=t.forward(e)})),e}},{key:"backward",value:function(t,e,r,n){t.cols,s(r,e),this.layers.reverse().forEach((function(t){}))}},{key:"save",value:function(t){var e={dimensions:this.dimensions,layers:[]};this.layers.forEach((function(t){e.layers.push({type:t.getType(),dimensions:[t.getOutputHeight(),t.getOutputWidth(),t.getOutputDepth()],weights:{W:t.W.data,b:t.b.data}})}));var r=JSON.stringify(e);return new Promise((function(e,n){w.writeFile(t,r,(function(t){t&&(console.error(t),n()),e(r)}))}))}}])&&b(e.prototype,r),t}();function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function S(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function k(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function E(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(n);if(o){var r=P(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return E(this,t)});function u(){return S(this,u),i.apply(this,arguments)}return e=u,(r=[{key:"firstLayerTransition",value:function(t){t.setWidth(this.dimensions[0])}}])&&k(e.prototype,r),u}(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,"dimensions",null),g(this,"previousLayer",null),g(this,"network",null),this.dimensions=e,this.network=new d(e)}var e,r;return e=t,(r=[{key:"createLayer",value:function(t,e){var r=new t;"function"==typeof e&&e(r),null===this.previousLayer?this.firstLayerTransition(r):r.transition(this.previousLayer),r.configure(),this.network.addLayer(r),this.previousLayer=r}},{key:"getNetwork",value:function(){return this.network}}])&&m(e.prototype,r),t}());function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function R(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var W,T=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),R(this,"width",0),R(this,"height",0),R(this,"depth",0),R(this,"previousLayer",null),this.W=new u,this.b=new u,this.A=new u,this.Z=new u,this.gW=new u,this.gb=new u}var e,r;return e=t,(r=[{key:"forward",value:function(t){return this.Z=a(c(this.W,t),this.b),this.A=this.activation(this.Z),this.A}},{key:"setWidth",value:function(t){this.width=t}},{key:"getWidth",value:function(){return this.width}},{key:"setHeight",value:function(t){this.height=t}},{key:"getHeight",value:function(){return this.height}},{key:"setDepth",value:function(t){this.depth=t}},{key:"getDepth",value:function(){return this.depth}}])&&_(e.prototype,r),t}();function A(t){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function L(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function D(t,e){return(D=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function M(t,e){if(e&&("object"===A(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return C(t)}function C(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function q(t){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function z(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}!function(t){t.logistic="logistic",t.softmax="softmax"}(W||(W={}));var H=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&D(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(n);if(o){var r=q(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return M(this,t)});function u(){var t;B(this,u);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return z(C(t=i.call.apply(i,[this].concat(r))),"depth",1),t}return e=u,(r=[{key:"configure",value:function(){f(this.W,this.height,this.width),l(this.W,this.width),f(this.b,this.height,1),l(this.b,this.width),f(this.gW,this.height,this.width),f(this.gb,this.height,1)}},{key:"is1D",value:function(){return!0}},{key:"is3D",value:function(){return!1}},{key:"transition",value:function(t){t.is1D()?this.setWidth(t.getSize()):t.is3D()&&this.setWidth(t.getOutputWidth()*t.getOutputHeight()*t.getOutputDepth())}},{key:"setSize",value:function(t){this.setHeight(t[0])}},{key:"getSize",value:function(){return this.height}},{key:"getOutputWidth",value:function(){return this.width}},{key:"getOutputHeight",value:function(){return this.height}},{key:"getOutputDepth",value:function(){return 1}}])&&L(e.prototype,r),u}(T);function F(t){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function N(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function U(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Z(t,e){return(Z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function I(t,e){if(e&&("object"===F(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function J(t){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var V=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Z(t,e)}(a,e);var r,n,o,i,c=(o=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=J(o);if(i){var r=J(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return I(this,t)});function a(){return N(this,a),c.apply(this,arguments)}return r=a,(n=[{key:"activation",value:function(e){return function(e){var r=new u(e.rows,e.cols);return r.data=(0,t.SoftmaxActivation)(e.data,e.rows,e.cols),r}(e)}},{key:"derivative",value:function(){throw new Error("Unsupported usage.")}},{key:"getType",value:function(){return W.softmax}},{key:"loss",value:function(e,r){return o=r,(i=new u((n=e).rows,n.cols)).data=(0,t.SoftmaxLoss)(n.data,n.rows,n.cols,o.data,o.rows,o.cols),(0,t.MatrixSum)(i,i.rows,i.cols);var n,o,i}},{key:"error",value:function(t){return-1/t}}])&&U(r.prototype,n),a}(H);function G(t){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function K(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Q(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function X(t,e){return(X=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Y(t,e){if(e&&("object"===G(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function $(t){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var tt=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&X(t,e)}(a,e);var r,n,o,i,c=(o=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=$(o);if(i){var r=$(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return Y(this,t)});function a(){return K(this,a),c.apply(this,arguments)}return r=a,(n=[{key:"activation",value:function(e){return function(e){var r=new u(e.rows,e.cols);return r.data=(0,t.LogisticActivation)(e.data,e.rows,e.cols),r}(e)}},{key:"derivative",value:function(){return e=this.A,(r=new u(e.rows,e.cols)).data=(0,t.LogisticDerivative)(e,e.rows,e.cols),r;var e,r}},{key:"getType",value:function(){return W.logistic}},{key:"loss",value:function(e,r){return o=r,(i=new u((n=e).rows,n.cols)).data=(0,t.LogisticLoss)(n.data,n.rows,n.cols,o.data,o.rows,o.cols),(0,t.MatrixSum)(i,i.rows,i.cols);var n,o,i}},{key:"error",value:function(t){return-1/t}}])&&Q(r.prototype,n),a}(H)})(),module.exports=n})();
//# sourceMappingURL=impulse-ts.js.map