"use strict";var d=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var q=d(function(F,y){
var E=require("path").resolve,R=require('@stdlib/fs-read-wasm/dist').sync,W=R(E(__dirname,"..","src","main.wasm"));y.exports=W
});var p=d(function(G,m){
var A=require('@stdlib/assert-is-wasm-memory/dist'),f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=require('@stdlib/utils-inherit/dist'),h=require('@stdlib/wasm-module-wrapper/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),T=q();function n(e){if(!(this instanceof n))return new n(e);if(!A(e))throw new TypeError(S('2GzH0',e));return h.call(this,T,e,{env:{memory:e}}),this}O(n,h);f(n.prototype,"main",function(r,t,i,a){return this._instance.exports.stdlib_strided_dapx(r,t,i,a),i});f(n.prototype,"ndarray",function(r,t,i,a,o){return this._instance.exports.stdlib_strided_dapx_ndarray(r,t,i,a,o),i});m.exports=n
});var x=d(function(H,_){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=require('@stdlib/utils-inherit/dist'),V=require('@stdlib/strided-base-stride2offset/dist'),g=require('@stdlib/strided-base-read-dataview/dist').ndarray,j=require('@stdlib/wasm-memory/dist'),z=require('@stdlib/wasm-base-arrays2ptrs/dist'),D=require('@stdlib/wasm-base-strided2object/dist'),v=p();function u(){return this instanceof u?(v.call(this,new j({initial:0})),this):new u}B(u,v);w(u.prototype,"main",function(r,t,i,a){return this.ndarray(r,t,i,a,V(r,a))});w(u.prototype,"ndarray",function(r,t,i,a,o){var c,s;return c=z(this,[D(r,i,a,o)]),s=c[0],v.prototype.ndarray.call(this,r,t,s.ptr,s.stride,s.offset),s.copy&&g(r,this.view,s.stride*s.BYTES_PER_ELEMENT,s.ptr,i,a,o,!0),i});_.exports=u
});var b=d(function(I,M){
var L=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=x(),Y=p(),l=new P;l.initializeSync();L(l,"Module",Y.bind(null));M.exports=l
});var k=b();module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
