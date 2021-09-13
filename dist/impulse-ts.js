(()=>{var t={646:(t,e,r)=>{t=r.nmd(t);try{process.dlopen(t,__dirname+r(622).sep+r.p+"36547055965504e1d6167934381171c7.node")}catch(t){throw new Error("node-loader:\n"+t)}},622:t=>{"use strict";t.exports=require("path")}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,loaded:!1,exports:{}};return t[n](i,i.exports,r),i.loaded=!0,i.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),r.p="";var n={};(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.r(n),r.d(n,{Builder1D:()=>E,LogisticLayer:()=>Y,Matrix:()=>u,SoftmaxLayer:()=>F});var i=r(646).MatrixMultiplication,u=function(){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t(this,r),o(this,"rows",0),o(this,"cols",0),o(this,"data",null),this.resize(e,n)}var n,i;return n=r,(i=[{key:"resize",value:function(t,e){this.rows=t,this.cols=e,this.data=new Array(t*e)}},{key:"forEach",value:function(t){for(var e=0;e<this.rows*this.cols;e++){var r=t(this.data[e]);this.data[e]=void 0!==r?r:this.data[e]}return this}}])&&e(n.prototype,i),r}(),c=function(t,e){if(t.rows!==e.rows)throw new Error("ROWS number not equal.");if(t.cols!==e.cols)throw new Error("COLS number not equal.");for(var r=new u(t.rows,e.cols),n=0;n<t.rows;n++)for(var o=0;o<t.cols;o++){var i=n*t.cols+o;r.data[i]=t.data[i]+e.data[i]}return r},a=function(t,e){if(t.rows!==e.rows)throw new Error("ROWS number not equal.");if(t.cols!==e.cols)throw new Error("COLS number not equal.");for(var r=new u(t.rows,e.cols),n=0;n<t.rows;n++)for(var o=0;o<t.cols;o++){var i=n*t.cols+o;r.data[i]=t.data[i]-e.data[i]}return r},f=function(t,e,r){t.resize(e,r)},s=function(t,e){t.forEach((function(){return Math.random()*Math.sqrt(2/e)}))},l=function(t,e){return t.forEach(e)},h=function(t,e){if(t.rows!==e.rows)throw new Error("ROWS number not equal.");if(t.cols!==e.cols)throw new Error("COLS number not equal.");for(var r=new u(t.rows,t.cols),n=0;n<t.rows;n++)for(var o=0;o<t.cols;o++){var i=n*t.cols+o;r.data[i]=t.data[i]*e.data[i]}return r},y=function(t){var e=0;return t.forEach((function(t){e+=t})),e};function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const v=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,"dimensions",null),b(this,"size",0),b(this,"layers",[]),this.dimensions=e}var e,r;return e=t,(r=[{key:"addLayer",value:function(t){this.size++,this.layers.push(t)}},{key:"forward",value:function(t){var e=t;return this.layers.forEach((function(t){e=t.forward(e)})),e}},{key:"backward",value:function(t,e,r,n){t.cols,a(r,e),this.layers.reverse().forEach((function(t){}))}}])&&p(e.prototype,r),t}();function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function O(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function j(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(n);if(o){var r=S(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return j(this,t)});function u(){return g(this,u),i.apply(this,arguments)}return e=u,(r=[{key:"firstLayerTransition",value:function(t){t.setWidth(this.dimensions[0])}}])&&O(e.prototype,r),u}(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,"dimensions",null),d(this,"previousLayer",null),d(this,"network",null),this.dimensions=e,this.network=new v(e)}var e,r;return e=t,(r=[{key:"createLayer",value:function(t,e){var r=new t;"function"==typeof e&&e(r),null===this.previousLayer?this.firstLayerTransition(r):r.transition(this.previousLayer),r.configure(),this.network.addLayer(r),this.previousLayer=r}},{key:"getNetwork",value:function(){return this.network}}])&&w(e.prototype,r),t}());function P(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var R,x=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),_(this,"width",0),_(this,"height",0),_(this,"depth",0),_(this,"previousLayer",null),this.W=new u,this.b=new u,this.A=new u,this.Z=new u,this.gW=new u,this.gb=new u}var e,r;return e=t,(r=[{key:"forward",value:function(t){return this.Z=c(function(t,e){if(t.cols!==e.rows)throw new Error("DIMENSIONS error.");var r=new u(t.rows,e.cols);return r.data=i(t.data,t.rows,t.cols,e.data,e.rows,e.cols),r}(this.W,t),this.b),this.A=this.activation(this.Z),this.A}},{key:"setWidth",value:function(t){this.width=t}},{key:"getWidth",value:function(){return this.width}},{key:"setHeight",value:function(t){this.height=t}},{key:"getHeight",value:function(){return this.height}},{key:"setDepth",value:function(t){this.depth=t}},{key:"getDepth",value:function(){return this.depth}}])&&P(e.prototype,r),t}();function T(t){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function L(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function W(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function D(t,e){return(D=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function M(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return C(t)}function C(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function q(t){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function B(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}!function(t){t[t.logistic=0]="logistic",t[t.softmax=1]="softmax"}(R||(R={}));var z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&D(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(n);if(o){var r=q(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return M(this,t)});function u(){var t;L(this,u);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return B(C(t=i.call.apply(i,[this].concat(r))),"depth",1),t}return e=u,(r=[{key:"configure",value:function(){f(this.W,this.height,this.width),s(this.W,this.width),f(this.b,this.height,1),s(this.b,this.width),f(this.gW,this.height,this.width),f(this.gb,this.height,1)}},{key:"is1D",value:function(){return!0}},{key:"is3D",value:function(){return!1}},{key:"transition",value:function(t){t.is1D()?this.setWidth(t.getSize()):t.is3D()&&this.setWidth(t.getOutputWidth()*t.getOutputHeight()*t.getOutputDepth())}},{key:"setSize",value:function(t){this.setHeight(t[0])}},{key:"getSize",value:function(){return this.height}},{key:"getOutputWidth",value:function(){return this.width}},{key:"getOutputHeight",value:function(){return this.height}},{key:"getOutputDepth",value:function(){return 1}}])&&W(e.prototype,r),u}(x);function A(t){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function H(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function N(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Z(t,e){return(Z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function I(t,e){if(e&&("object"===A(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function U(t){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var F=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Z(t,e)}(c,t);var e,r,n,o,i=(n=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=U(n);if(o){var r=U(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return I(this,t)});function c(){return H(this,c),i.apply(this,arguments)}return e=c,(r=[{key:"activation",value:function(t){var e=t.forEach((function(t){return Math.exp(t)}));return function(t,e){if(t.rows!==e.rows)throw new Error("ROWS number not equal.");if(t.cols!==e.cols)throw new Error("COLS number not equal.");for(var r=new u(t.rows,t.cols),n=0;n<t.rows;n++)for(var o=0;o<t.cols;o++){var i=n*t.cols+o;r.data[i]=t.data[i]/e.data[i]}return r}(e,function(t,e){for(var r=new u(e,t.cols),n=0;n<r.rows;n++)for(var o=0;o<r.cols;o++){var i=n*r.cols+o;r.data[i]=t.data[o]}return r}(function(t,e){for(var r=new u(1,t.cols),n=0;n<t.cols;n++){for(var o=new u(t.rows,1),i=0;i<t.rows;i++)o.data[i]=t.data[i*t.cols+n];r.data[n]=y(o)}return r}(e),e.rows))}},{key:"derivative",value:function(){throw new Error("Unsupported usage.")}},{key:"getType",value:function(){return R.softmax}},{key:"loss",value:function(t,e){var r=a(t,l(e,(function(t){return Math.log(t)})));return y(r)}},{key:"error",value:function(t){return-1/t}}])&&N(e.prototype,r),c}(z);function G(t){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function J(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function K(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Q(t,e){return(Q=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function V(t,e){if(e&&("object"===G(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function X(t){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Q(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=X(n);if(o){var r=X(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return V(this,t)});function u(){return J(this,u),i.apply(this,arguments)}return e=u,(r=[{key:"activation",value:function(t){return l(t,(function(t){return 1/(1+Math.exp(-t))}))}},{key:"derivative",value:function(){return h(this.A,l(this.A,(function(t){return 1-t})))}},{key:"getType",value:function(){return R.logistic}},{key:"loss",value:function(t,e){var r=c(h(t,l(e,(function(t){return Math.log(t)}))),h(l(t,(function(t){return 1-t})),l(e,(function(t){return Math.log(1-t)}))));return y(r)}},{key:"error",value:function(t){return-1/t}}])&&K(e.prototype,r),u}(z)})(),module.exports=n})();
//# sourceMappingURL=impulse-ts.js.map