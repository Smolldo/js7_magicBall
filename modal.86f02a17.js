parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"QvaY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.answer=void 0,require("../sass/main.scss");const e=["Maybe.","Certainly not.","I hope so.","There is a good chance.","Quite likely.","I think so.","I hope not.","I hope so.","Never!","Fuhgeddaboudit.","Ahaha! Really?!?","Pfft.","Sorry, bucko.","Hell, yes.","Hell to the no.","The future is bleak.","The future is uncertain.","Who cares?","Possibly.","Never, ever, ever.","Yes!"],a={ballCover:document.createElement("div"),ballBody:document.createElement("div"),butn:document.createElement("button"),paragraph:document.createElement("p"),ballScreen:document.createElement("div")};document.body.appendChild(a.ballCover),a.butn.classList.add("ball_btn"),a.ballCover.appendChild(a.ballBody),a.ballCover.appendChild(a.butn),a.ballCover.classList.add("ball_div"),a.ballCover.classList.add("shake"),a.ballBody.classList.add("ball"),a.ballBody.appendChild(a.ballScreen),a.ballScreen.appendChild(a.paragraph),a.ballScreen.classList.add("ball_screen"),a.paragraph.classList.add("p_text"),a.paragraph.classList.add("screen"),a.paragraph.textContent="SHAKE BALL";const l=()=>{let l=e[Math.floor(Math.random()*e.length)];a.paragraph.textContent=l,a.paragraph.classList.toggle("screen1"),a.ballCover.classList.toggle("shake1")};exports.answer=l,a.butn.addEventListener("click",l);
},{"../sass/main.scss":"clu1"}],"RSqK":[function(require,module,exports) {
"use strict";var e=require("./index.js");const o={modalBlock:document.querySelector(".modal"),closeModal:document.querySelector(".close_ask"),sendModal:document.querySelector(".ask_btn")},l=()=>{o.modalBlock.classList.toggle("is-none"),(0,e.answer)()},s=()=>{o.modalBlock.classList.toggle("is-none")};o.closeModal.addEventListener("click",()=>{o.modalBlock.classList.toggle("is-none")}),o.sendModal.addEventListener("click",()=>{o.modalBlock.classList.toggle("is-none"),(0,e.answer)()});
},{"./index.js":"QvaY"}]},{},["RSqK"], null)
//# sourceMappingURL=/js7_magicBall/modal.86f02a17.js.map