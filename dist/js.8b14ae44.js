parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"mAbx":[function(require,module,exports) {

},{"./../images/tamil-calligraphy-bg.png":[["tamil-calligraphy-bg.48d4e709.png","Axjw"],"Axjw"],"./../images/micro-interaction-bg.png":[["micro-interaction-bg.1273c5f2.png","6xHB"],"6xHB"]}],"QvaY":[function(require,module,exports) {
"use strict";require("../scss/styles.scss"),document.addEventListener("DOMContentLoaded",function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);t.length>0&&t.forEach(function(t){t.addEventListener("click",function(){var e=t.dataset.target,s=document.getElementById(e);t.classList.toggle("is-active"),s.classList.toggle("is-active")})});var e=Array.prototype.slice.call(document.querySelectorAll(".workshop .sidebar"),0);e.length>0&&e.forEach(function(t){t.addEventListener("click",function(){var e=t.parentElement.dataset.target,s=document.getElementById(e);t.parentElement.classList.contains("is-initial")&&t.parentElement.classList.toggle("is-initial"),s.classList.contains("is-initial")&&s.classList.toggle("is-initial"),t.parentElement.classList.toggle("is-active"),s.classList.toggle("is-active")})})});
},{"../scss/styles.scss":"mAbx"}]},{},["QvaY"], null)
//# sourceMappingURL=/js.8b14ae44.map