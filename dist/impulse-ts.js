(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}t.r(e),t.d(e,{Builder1D:()=>P,DatasetBuilder:()=>ut,LogisticLayer:()=>tt,Matrix:()=>u,SoftmaxLayer:()=>V,matrixElementWiseAdd:()=>s,matrixElementWiseDivide:()=>p,matrixElementWiseMultiply:()=>h,matrixElementWiseSubtract:()=>c,matrixFillRandom:()=>f,matrixMultiply:()=>a,matrixSum:()=>y});var i=new(require("gpu.js").GPU)({mode:"gpu"}),u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;r(this,t),o(this,"rows",0),o(this,"cols",0),o(this,"data",null),this.resize(e,n),i&&this.generateData(i)}var e,u;return e=t,(u=[{key:"resize",value:function(t,e){this.rows=t,this.cols=e,this.data=new Array;for(var r=0;r<this.rows;r+=1)this.data[r]=[];return this}},{key:"generateData",value:function(t){this.data=new Array;for(var e=0;e<t.length;e+=1)this.data[e]=t[e];return this}},{key:"toBuffer",value:function(){var t=new ArrayBuffer(this.rows*this.cols*64),e=new DataView(t,0,this.rows*this.cols*64);return this.data.forEach((function(t,r){e.setFloat64(r,t)})),t}},{key:"sum",value:function(){for(var t=0,e=0;e<this.rows;e+=1)for(var r=0;r<this.cols;r+=1)t+=this.data[e][r];return t}},{key:"colwiseSum",value:function(){for(var e=[],r=0;r<this.rows;r+=1){for(var n=0,o=0;o<this.cols;o+=1)n+=this.data[r][o];e[r]=[n]}return new t(this.rows,1,e)}},{key:"replicate",value:function(t,e){var r=this.data;if(1===t&&1===this.cols&&e>1){this.resize(this.rows,e);for(var n=0;n<this.rows;n+=1)for(var o=0;o<e;o+=1)this.data[n][o]=r[n][0]}else if(1===e&&1===this.rows&&t>1){this.resize(t,this.cols);for(var i=0;i<t;i+=1)for(var u=0;u<this.cols;u+=1)this.data[i][u]=r[0][u]}return this}},{key:"transpose",value:function(){var t=this.data,e=i.createKernel((function(t){return t[this.thread.y][this.thread.x]})).setOutput([this.cols,this.rows]);return this.resize(this.cols,this.rows),this.generateData(e(t)),this}}])&&n(e.prototype,u),t}(),a=function(t,e){if(t.cols!==e.rows)throw new Error("DIMENSIONS error.");var r=i.createKernel((function(t,e){for(var r=0,n=0;n<this.constants.cols;n++)r+=t[this.thread.x][n]*e[n][this.thread.y];return r})).setOutput([t.rows,e.cols]).setConstants({cols:t.rows});return new u(t.rows,e.cols,r(t.data,e.data))},s=function(t,e){if(t.rows!==e.rows)throw new Error("ROWS number not equal.");if(t.cols!==e.cols)throw new Error("COLS number not equal.");var r=i.createKernel((function(t,e){return t[this.thread.x][this.thread.y]+e[this.thread.x][this.thread.y]})).setOutput([t.rows,e.cols]);return new u(t.rows,e.cols,r(t.data,e.data))},c=function(t,e){if(t.rows!==e.rows)throw new Error("ROWS number not equal.");if(t.cols!==e.cols)throw new Error("COLS number not equal.");var r=i.createKernel((function(t,e){return t[this.thread.x][this.thread.y]-e[this.thread.x][this.thread.y]})).setOutput([t.rows,e.cols]);return new u(t.rows,e.cols,r(t.data,e.data))},f=function(t,e){var r=i.createKernel((function(){return Math.random()*Math.sqrt(2/this.constants.parameter)})).setOutput([t.rows,t.cols]).setConstants({parameter:e});return new u(t.rows,t.cols,r())},l=function(t){var e=i.createKernel((function(){return 0})).setOutput([t.rows,t.cols]);return new u(t.rows,t.cols,e())},h=function(t,e){if(t.rows!==e.rows)throw new Error("ROWS number not equal.");if(t.cols!==e.cols)throw new Error("COLS number not equal.");var r=i.createKernel((function(t,e){return t[this.thread.x][this.thread.y]*e[this.thread.x][this.thread.y]})).setOutput([t.rows,e.cols]);return new u(t.rows,e.cols,r(t.data,e.data))},y=function(t){return t.sum()},p=function(t,e){if(t.rows!==e.rows)throw new Error("ROWS number not equal.");if(t.cols!==e.cols)throw new Error("COLS number not equal.");var r=i.createKernel((function(t,e){return t[this.thread.x][this.thread.y]/e[this.thread.x][this.thread.y]})).setOutput([t.rows,e.cols]);return new u(t.rows,e.cols,r(t.data,e.data))};const w=require("fs");function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function v(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const b=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,"dimensions",null),v(this,"size",0),v(this,"layers",[]),this.dimensions=e}var e,r;return e=t,(r=[{key:"addLayer",value:function(t){this.size++,this.layers.push(t)}},{key:"forward",value:function(t){var e=t;return this.layers.forEach((function(t){e=t.forward(e)})),e}},{key:"backward",value:function(t,e,r,n){t.cols,c(r,e),this.layers.reverse().forEach((function(t){}))}},{key:"loss",value:function(t,e){return this.layers[this.layers.length-1].loss(t,e)}},{key:"save",value:function(t){var e={dimensions:this.dimensions,layers:[]};this.layers.forEach((function(t){e.layers.push({type:t.getType(),dimensions:[t.getOutputHeight(),t.getOutputWidth(),t.getOutputDepth()],weights:{W:t.W.data,b:t.b.data}})}));var r=JSON.stringify(e);return new Promise((function(e,n){w.writeFile(t,r,(function(t){t&&(console.error(t),n()),e(r)}))}))}}])&&d(e.prototype,r),t}();function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function S(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function x(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(n);if(o){var r=E(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return x(this,t)});function u(){return k(this,u),i.apply(this,arguments)}return e=u,(r=[{key:"firstLayerTransition",value:function(t){t.setWidth(this.dimensions[0])}}])&&S(e.prototype,r),u}(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,"dimensions",null),g(this,"previousLayer",null),g(this,"network",null),this.dimensions=e,this.network=new b(e)}var e,r;return e=t,(r=[{key:"createLayer",value:function(t,e){var r=new t;"function"==typeof e&&e(r),null===this.previousLayer?this.firstLayerTransition(r):r.transition(this.previousLayer),r.configure(),this.network.addLayer(r),this.previousLayer=r}},{key:"getNetwork",value:function(){return this.network}}])&&m(e.prototype,r),t}());function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function R(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var W,T=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),R(this,"width",0),R(this,"height",0),R(this,"depth",0),R(this,"previousLayer",null),this.W=new u,this.b=new u,this.A=new u,this.Z=new u,this.gW=new u,this.gb=new u}var e,r;return e=t,(r=[{key:"forward",value:function(t){return this.Z=s(a(this.W,t),this.b.replicate(1,t.cols)),this.A=this.activation(this.Z),this.A}},{key:"setWidth",value:function(t){this.width=t}},{key:"getWidth",value:function(){return this.width}},{key:"setHeight",value:function(t){this.height=t}},{key:"getHeight",value:function(){return this.height}},{key:"setDepth",value:function(t){this.depth=t}},{key:"getDepth",value:function(){return this.depth}}])&&_(e.prototype,r),t}();function D(t){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function z(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function C(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function L(t,e){return(L=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function K(t,e){if(e&&("object"===D(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return M(t)}function M(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function q(t){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function B(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}!function(t){t.logistic="logistic",t.softmax="softmax"}(W||(W={}));var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&L(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(n);if(o){var r=q(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return K(this,t)});function u(){var t;z(this,u);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return B(M(t=i.call.apply(i,[this].concat(r))),"depth",1),t}return e=u,(r=[{key:"configure",value:function(){this.W.resize(this.height,this.width),this.W=f(this.W,this.width),this.b.resize(this.height,1),this.b=f(this.b,this.width),this.gW.resize(this.height,this.width),this.gW=l(this.gW),this.gb.resize(this.height,1),this.gb=l(this.gb)}},{key:"is1D",value:function(){return!0}},{key:"is3D",value:function(){return!1}},{key:"transition",value:function(t){t.is1D()?this.setWidth(t.getSize()):t.is3D()&&this.setWidth(t.getOutputWidth()*t.getOutputHeight()*t.getOutputDepth())}},{key:"setSize",value:function(t){this.setHeight(t[0])}},{key:"getSize",value:function(){return this.height}},{key:"getOutputWidth",value:function(){return this.width}},{key:"getOutputHeight",value:function(){return this.height}},{key:"getOutputDepth",value:function(){return 1}}])&&C(e.prototype,r),u}(T);function H(t){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function F(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function N(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Z(t,e){return(Z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function I(t,e){if(e&&("object"===H(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function U(t){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var V=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Z(t,e)}(s,t);var e,r,n,o,a=(n=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=U(n);if(o){var r=U(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return I(this,t)});function s(){return F(this,s),a.apply(this,arguments)}return e=s,(r=[{key:"activation",value:function(t){return function(t){var e=i.createKernel((function(t){return Math.exp(t[this.thread.x][this.thread.y])})).setOutput([t.rows,t.cols]),r=new u(t.rows,t.cols,e(t.data)),n=new u(t.rows,1,r.colwiseSum().data).transpose().replicate(t.rows,1);return new u(t.rows,t.cols,p(r,n).data)}(t)}},{key:"derivative",value:function(){throw new Error("Unsupported usage.")}},{key:"getType",value:function(){return W.softmax}},{key:"loss",value:function(t,e){return function(t,e){var r=i.createKernel((function(t){return Math.log(t[this.thread.x][this.thread.y])})).setOutput([e.rows,e.cols])(e.data);return new u(t.rows,t.cols,h(t,r).data).sum()}(t,e)}},{key:"error",value:function(t){return-1/t}}])&&N(e.prototype,r),s}(A);function G(t){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function J(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Q(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function X(t,e){return(X=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Y(t,e){if(e&&("object"===G(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function $(t){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var tt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&X(t,e)}(c,t);var e,r,n,o,a=(n=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=$(n);if(o){var r=$(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return Y(this,t)});function c(){return J(this,c),a.apply(this,arguments)}return e=c,(r=[{key:"activation",value:function(t){return function(t){var e=i.createKernel((function(t){return 1/(1+Math.exp(-t[this.thread.x][this.thread.y]))})).setOutput([t.rows,t.cols]);return new u(t.rows,t.cols,e(t.data))}(t)}},{key:"derivative",value:function(){return t=this.A,e=i.createKernel((function(t){return t[this.thread.x][this.thread.y]*(1-t[this.thread.x][this.thread.y])})).setOutput([t.rows,t.cols]),new u(t.rows,t.cols,e(t.data));var t,e}},{key:"getType",value:function(){return W.logistic}},{key:"loss",value:function(t,e){return function(t,e){var r=i.createKernel((function(t){return Math.log(t[this.thread.x][this.thread.y])})).setOutput([t.rows,t.cols]),n=i.createKernel((function(t){return 1-t[this.thread.x][this.thread.y]})).setOutput([t.rows,t.cols]),o=i.createKernel((function(t){return Math.log(1-t[this.thread.x][this.thread.y])})).setOutput([e.rows,e.cols]);return s(h(t,new u(t.rows,t.cols,r(t.data))),h(new u(t.rows,t.cols,n(t.data)),new u(e.rows,e.cols,o(e.data)))).sum()}(t,e)}},{key:"error",value:function(t){return-1/t}}])&&Q(e.prototype,r),c}(A);const et=require("csvtojson");function rt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function nt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var ot=function(){function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),nt(this,"exampleSize",0),nt(this,"numberOfExamples",0),nt(this,"data",null),this.exampleSize=e,this.numberOfExamples=r;for(var o=[],i=0;i<r;i+=1){o[i]=[];for(var a=0;a<e;a+=1)o[i][a]=n[i][a]||0}this.data=new u(this.exampleSize,this.numberOfExamples,o)}var e,r;return e=t,(r=[{key:"exampleAt",value:function(t){for(var e=[],r=0;r<this.exampleSize;r+=1)e[r]=[],e[r][0]=this.data.data[t][r];return new u(this.exampleSize,1,e)}}])&&rt(e.prototype,r),t}();function it(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var ut=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r;return e=t,r=[{key:"fromCSV",value:function(t){return new Promise((function(e){et({noheader:!0,output:"csv"}).fromFile(t).then((function(t){var r=t.length,n=t[0].length,o=new ot(n,r,t);e(o)}))}))}}],null&&it(e.prototype,null),r&&it(e,r),t}();module.exports=e})();
//# sourceMappingURL=impulse-ts.js.map