(()=>{var t={846:(t,e,r)=>{t=r.nmd(t);try{process.dlopen(t,__dirname+r(622).sep+r.p+"4a5deb4aab95126b646d75e8ae2b6583.node")}catch(t){throw new Error("node-loader:\n"+t)}},622:t=>{"use strict";t.exports=require("path")}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,loaded:!1,exports:{}};return t[n](i,i.exports,r),i.loaded=!0,i.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),r.p="";var n={};(()=>{"use strict";r.r(n),r.d(n,{Builder1D:()=>x,LogisticLayer:()=>$,Matrix:()=>u,SoftmaxLayer:()=>G,matrixElementWiseAdd:()=>c,matrixElementWiseDivide:()=>p,matrixElementWiseMultiply:()=>y,matrixElementWiseSubtract:()=>s,matrixFillRandom:()=>l,matrixMultiply:()=>a,matrixSum:()=>h});var t=r(846);function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u=function(){function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e(this,t),i(this,"rows",0),i(this,"cols",0),i(this,"data",null),this.resize(r,n)}var r,n;return r=t,(n=[{key:"resize",value:function(t,e){return this.rows=t,this.cols=e,this.data=new Array(t*e),this}}])&&o(r.prototype,n),t}(),a=function(e,r){if(e.cols!==r.rows)throw new Error("DIMENSIONS error.");var n=new u(e.rows,r.cols);return n.data=(0,t.MatrixMultiply)(e.data,e.rows,e.cols,r.data,r.rows,r.cols),n},c=function(e,r){if(e.rows!==r.rows)throw new Error("ROWS number not equal.");if(e.cols!==r.cols)throw new Error("COLS number not equal.");var n=new u(e.rows,r.cols);return n.data=(0,t.MatrixElementWiseAdd)(e.data,e.rows,e.cols,r.data,r.rows,r.cols),n},s=function(e,r){if(e.rows!==r.rows)throw new Error("ROWS number not equal.");if(e.cols!==r.cols)throw new Error("COLS number not equal.");var n=new u(e.rows,r.cols);return n.data=(0,t.MatrixElementWiseSubtract)(e.data,e.rows,e.cols,r.data,r.rows,r.cols),n},f=function(t,e,r){t.resize(e,r)},l=function(e,r){var n=new u(e.rows,e.cols);return n.data=(0,t.MatrixFillRandom)(e.data,e.rows,e.cols,r),n},y=function(e,r){if(e.rows!==r.rows)throw new Error("ROWS number not equal.");if(e.cols!==r.cols)throw new Error("COLS number not equal.");var n=new u(e.rows,e.cols);return n.data=(0,t.MatrixElementWiseMultiply)(e.data,e.rows,e.cols,r.data,r.rows,r.cols),n},h=function(e){return(0,t.MatrixSum)(e.data,e.rows,e.cols)},p=function(e,r){if(e.rows!==r.rows)throw new Error("ROWS number not equal.");if(e.cols!==r.cols)throw new Error("COLS number not equal.");var n=new u(e.rows,e.cols);return n.data=(0,t.MatrixElementWiseDivide)(e.data,e.rows,e.cols,r.data,r.rows,r.cols),n};function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function w(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const d=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,"dimensions",null),w(this,"size",0),w(this,"layers",[]),this.dimensions=e}var e,r;return e=t,(r=[{key:"addLayer",value:function(t){this.size++,this.layers.push(t)}},{key:"forward",value:function(t){var e=t;return this.layers.forEach((function(t){e=t.forward(e)})),e}},{key:"backward",value:function(t,e,r,n){t.cols,s(r,e),this.layers.reverse().forEach((function(t){}))}}])&&b(e.prototype,r),t}();function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function S(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function j(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(n);if(o){var r=E(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return j(this,t)});function u(){return O(this,u),i.apply(this,arguments)}return e=u,(r=[{key:"firstLayerTransition",value:function(t){t.setWidth(this.dimensions[0])}}])&&S(e.prototype,r),u}(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,"dimensions",null),m(this,"previousLayer",null),m(this,"network",null),this.dimensions=e,this.network=new d(e)}var e,r;return e=t,(r=[{key:"createLayer",value:function(t,e){var r=new t;"function"==typeof e&&e(r),null===this.previousLayer?this.firstLayerTransition(r):r.transition(this.previousLayer),r.configure(),this.network.addLayer(r),this.previousLayer=r}},{key:"getNetwork",value:function(){return this.network}}])&&v(e.prototype,r),t}());function P(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var R,W=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),_(this,"width",0),_(this,"height",0),_(this,"depth",0),_(this,"previousLayer",null),this.W=new u,this.b=new u,this.A=new u,this.Z=new u,this.gW=new u,this.gb=new u}var e,r;return e=t,(r=[{key:"forward",value:function(t){return this.Z=c(a(this.W,t),this.b),this.A=this.activation(this.Z),this.A}},{key:"setWidth",value:function(t){this.width=t}},{key:"getWidth",value:function(){return this.width}},{key:"setHeight",value:function(t){this.height=t}},{key:"getHeight",value:function(){return this.height}},{key:"setDepth",value:function(t){this.depth=t}},{key:"getDepth",value:function(){return this.depth}}])&&P(e.prototype,r),t}();function L(t){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function T(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function D(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function M(t,e){return(M=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function C(t,e){if(e&&("object"===L(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return A(t)}function A(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function q(t){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function B(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}!function(t){t[t.logistic=0]="logistic",t[t.softmax=1]="softmax"}(R||(R={}));var z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&M(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(n);if(o){var r=q(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return C(this,t)});function u(){var t;T(this,u);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return B(A(t=i.call.apply(i,[this].concat(r))),"depth",1),t}return e=u,(r=[{key:"configure",value:function(){f(this.W,this.height,this.width),l(this.W,this.width),f(this.b,this.height,1),l(this.b,this.width),f(this.gW,this.height,this.width),f(this.gb,this.height,1)}},{key:"is1D",value:function(){return!0}},{key:"is3D",value:function(){return!1}},{key:"transition",value:function(t){t.is1D()?this.setWidth(t.getSize()):t.is3D()&&this.setWidth(t.getOutputWidth()*t.getOutputHeight()*t.getOutputDepth())}},{key:"setSize",value:function(t){this.setHeight(t[0])}},{key:"getSize",value:function(){return this.height}},{key:"getOutputWidth",value:function(){return this.width}},{key:"getOutputHeight",value:function(){return this.height}},{key:"getOutputDepth",value:function(){return 1}}])&&D(e.prototype,r),u}(W);function H(t){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function N(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Z(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function F(t,e){return(F=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function I(t,e){if(e&&("object"===H(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function U(t){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var G=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&F(t,e)}(c,e);var r,n,o,i,a=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=U(o);if(i){var r=U(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return I(this,t)});function c(){return N(this,c),a.apply(this,arguments)}return r=c,(n=[{key:"activation",value:function(e){return function(e){var r=new u(e.rows,e.cols);return r.data=(0,t.SoftmaxActivation)(e.data,e.rows,e.cols),r}(e)}},{key:"derivative",value:function(){throw new Error("Unsupported usage.")}},{key:"getType",value:function(){return R.softmax}},{key:"loss",value:function(e,r){return o=r,(i=new u((n=e).rows,n.cols)).data=(0,t.SoftmaxLoss)(n.data,n.rows,n.cols,o.data,o.rows,o.cols),(0,t.MatrixSum)(i,i.rows,i.cols);var n,o,i}},{key:"error",value:function(t){return-1/t}}])&&Z(r.prototype,n),c}(z);function J(t){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function K(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Q(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function V(t,e){return(V=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function X(t,e){if(e&&("object"===J(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function Y(t){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var $=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&V(t,e)}(c,e);var r,n,o,i,a=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Y(o);if(i){var r=Y(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return X(this,t)});function c(){return K(this,c),a.apply(this,arguments)}return r=c,(n=[{key:"activation",value:function(e){return function(e){var r=new u(e.rows,e.cols);return r.data=(0,t.LogisticActivation)(e.data,e.rows,e.cols),r}(e)}},{key:"derivative",value:function(){return e=this.A,(r=new u(e.rows,e.cols)).data=(0,t.LogisticDerivative)(e,e.rows,e.cols),r;var e,r}},{key:"getType",value:function(){return R.logistic}},{key:"loss",value:function(e,r){return o=r,(i=new u((n=e).rows,n.cols)).data=(0,t.LogisticLoss)(n.data,n.rows,n.cols,o.data,o.rows,o.cols),(0,t.MatrixSum)(i,i.rows,i.cols);var n,o,i}},{key:"error",value:function(t){return-1/t}}])&&Q(r.prototype,n),c}(z)})(),module.exports=n})();
//# sourceMappingURL=impulse-ts.js.map