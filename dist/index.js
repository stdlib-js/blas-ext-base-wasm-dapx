"use strict";var d=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var y=d(function(F,l){
var R=require("path").resolve,W=require('@stdlib/fs-read-wasm/dist').sync,A=W(R(__dirname,"..","src","main.wasm"));l.exports=A
});var p=d(function(G,h){
var O=require('@stdlib/assert-is-wasm-memory/dist'),q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=require('@stdlib/utils-inherit/dist'),f=require('@stdlib/wasm-module-wrapper/dist'),T=require('@stdlib/error-tools-fmtprodmsg/dist'),B=y();function n(e){if(!(this instanceof n))return new n(e);if(!O(e))throw new TypeError(T('2GzH0',e));return f.call(this,B,e,{env:{memory:e}}),this}S(n,f);q(n.prototype,"main",function(r,s,i,t){return this._instance.exports.stdlib_strided_dapx(r,s,i,t),i});q(n.prototype,"ndarray",function(r,s,i,t,o){return this._instance.exports.stdlib_strided_dapx_ndarray(r,s,i,t,o),i});h.exports=n
});var _=d(function(H,w){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=require('@stdlib/utils-inherit/dist'),g=require('@stdlib/strided-base-stride2offset/dist'),j=require('@stdlib/strided-base-read-dataview/dist').ndarray,z=require('@stdlib/wasm-memory/dist'),D=require('@stdlib/wasm-base-arrays2ptrs/dist'),L=require('@stdlib/wasm-base-strided2object/dist'),v=p();function u(){return this instanceof u?(v.call(this,new z({initial:0})),this):new u}V(u,v);m(u.prototype,"main",function(r,s,i,t){return this.ndarray(r,s,i,t,g(r,t))});m(u.prototype,"ndarray",function(r,s,i,t,o){var c,a;return c=D(this,[L(r,i,t,o)]),a=c[0],v.prototype.ndarray.call(this,r,s,a.ptr,a.stride,a.offset),a.copy&&j(r,this.view,a.stride*a.BYTES_PER_ELEMENT,a.ptr,i,t,o,!0),i});w.exports=u
});var b=d(function(I,M){
var P=_(),x=new P;x.initializeSync();M.exports=x
});var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=b(),k=p();Y(E,"Module",k);module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
