parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"QvaY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CreatedElements=exports.answers=void 0,require("../sass/main.scss");var e=["Maybe.","Certainly not.","I hope so.","There is a good chance.","Quite likely.","I think so.","I hope not.","I hope so.","Never!","Fuhgeddaboudit.","Ahaha! Really?!?","Pfft.","Sorry, bucko.","Hell, yes.","Hell to the no.","The future is bleak.","The future is uncertain.","Who cares?","Possibly.","Never, ever, ever.","Yes!"];exports.answers=e;var t={ballCover:document.createElement("div"),ballBody:document.createElement("div"),butn:document.createElement("button"),paragraph:document.createElement("p"),ballScreen:document.createElement("div")};exports.CreatedElements=t;
},{"../sass/main.scss":"clu1"}],"uM8Y":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ANSWER=void 0,require("../sass/main.scss");var e=require("./index");require("./modal");var r=function(){var r=e.answers[Math.floor(Math.random()*e.answers.length)];e.CreatedElements.paragraph.textContent=r,e.CreatedElements.paragraph.classList.toggle("screen1"),e.CreatedElements.ballCover.classList.toggle("shake1")};exports.ANSWER=r,e.CreatedElements.butn.addEventListener("click",r);
},{"../sass/main.scss":"clu1","./index":"QvaY","./modal":"RSqK"}],"RSqK":[function(require,module,exports) {
"use strict";require("../sass/main.scss");var e=require("./answer"),o={modalBlock:document.querySelector(".modal"),closeModal:document.querySelector(".close_ask"),sendModal:document.querySelector(".ask_btn")},s=function(){o.modalBlock.classList.toggle("is-none"),(0,e.ANSWER)()},c=function(){o.modalBlock.classList.toggle("is-none")};o.closeModal.addEventListener("click",function(){c()}),o.sendModal.addEventListener("click",function(){s()});
},{"../sass/main.scss":"clu1","./answer":"uM8Y"}]},{},["RSqK"], null)
//# sourceMappingURL=/js7_magicBall/modal.f093b5b0.js.map