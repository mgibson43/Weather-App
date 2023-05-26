(()=>{"use strict";var e,t,n,o,r,a,c,i,s,d,l,u,p,m,f={426:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([e.id,"* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n.container{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n\n  margin-top: max(12rem);\n}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},v={};function h(e){var t=v[e];if(void 0!==t)return t.exports;var n=v[e]={id:e,exports:{}};return f[e](n,n.exports,h),n.exports}h.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return h.d(t,{a:t}),t},h.d=(e,t)=>{for(var n in t)h.o(t,n)&&!h.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},h.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),h.nc=void 0,e=h(379),t=h.n(e),n=h(795),o=h.n(n),r=h(569),a=h.n(r),c=h(565),i=h.n(c),s=h(216),d=h.n(s),l=h(589),u=h.n(l),p=h(426),(m={}).styleTagTransform=u(),m.setAttributes=i(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,function(){const e=document.createElement("div"),t=document.createElement("main");t.classList.add("main"),e.classList.add("container");const n=document.createElement("h2");n.classList.add("location"),t.appendChild(n);for(let e=1;e<7;e++){const n=document.createElement("div");n.classList.add(`tempBox${e}`),t.appendChild(n)}const o=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div");o.classList.add("info"),r.classList.add("info"),c.classList.add("info"),a.classList.add("info"),i.classList.add("info"),s.classList.add("info");const d=document.createElement("div");d.classList.add("searchBox");const l=document.createElement("input");l.classList.add("search"),l.setAttribute("placeholder","New York"),l.setAttribute("type","text");const u=document.createElement("button");async function p(){let e;e=""==l.value?"New York":l.value,l.value="";try{const n=await fetch(`https://api.weatherapi.com/v1/current.json?key=48bf9f94d8334512a48223601232205&q=${e}&aqi=no`,{mode:"cors"}),d=await n.json(),l={tempF:d.current.temp_f,tempC:d.current.temp_c,feelsLikeF:d.current.feelslike_f,feelsLikeC:d.current.feelslike_c,condition:d.current.condition.text,hum:d.current.humidity,loc:d.location.name,reg:d.location.region};t=l,s.textContent=`Humidity: ${t.hum}`,i.textContent=`Condition: ${t.condition}`,o.textContent=`C: ${t.tempC}`,r.textContent=`F: ${t.tempF}`,c.textContent=`Feels Like (C): ${t.feelsLikeC}`,a.textContent=`Feels Like (F): ${t.feelsLikeF}`,document.querySelector(".tempBox1").appendChild(s),document.querySelector(".tempBox2").appendChild(i),document.querySelector(".tempBox3").appendChild(o),document.querySelector(".tempBox4").appendChild(r),document.querySelector(".tempBox5").appendChild(c),document.querySelector(".tempBox6").appendChild(a),console.log(l)}catch{console.log("No such location")}var t}u.classList.add("btn"),u.textContent="Search",u.addEventListener("click",p),d.appendChild(l),d.appendChild(u),e.appendChild(t),e.appendChild(d),document.querySelector("body").appendChild(e),p()}()})();