(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(81),i=t.n(o),r=t(645),a=t.n(r)()(i());a.push([e.id,"* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  height: 100vh;\n  background-image: linear-gradient(to bottom right, #172554, 60%, #166534);\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.container{\n  padding: 4rem;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n\n.weather {\n  display: flex;\n  gap: 1rem;\n}\n\n.nav {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 128px;\n}\n\n.cel-to-far,\n.search-btn,\n.search {\n  border: none;\n  background-color: #eee;\n  padding: 0.7rem 3rem;\n  border-radius: 10px;\n  box-shadow: 2px 2px 12px rgba(0.2, 0.2, 0.2, 0.4);\n  font-size: 24px;\n  font-weight: 500;\n  color: #222\n}\n\n.search-box {\n  display: flex;\n  gap: 1rem;\n}\n\n.search {\n  width: 26rem;\n  padding: 0.7rem 1rem;\n  outline: none;\n}\n\n.cel-to-far:hover,\n.search-btn:hover {\n  cursor: pointer;\n  transform: translate(2%, 2%);\n}\n\n.location {\n  font-size: 72px;\n  color: #eee;\n}\n\n.border {\n  border: 2px solid #eee;\n  border-radius: 10px;\n  filter: brightness(75%);\n}\n\n.icon {\n  width: 256px;\n}\n\n.temp {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  color: #eee;\n  font-size: 128px;\n}",""]);const d=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var s=0;s<e.length;s++){var h=[].concat(e[s]);o&&a[h[0]]||(void 0!==r&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=r),t&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=t):h[2]=t),i&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=i):h[4]="".concat(i)),n.push(h))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},a=[],d=0;d<e.length;d++){var c=e[d],s=o.base?c[0]+o.base:c[0],h=r[s]||0,l="".concat(s," ").concat(h);r[s]=h+1;var y=t(l),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==y)n[y].references++,n[y].updater(u);else{var w=i(u,o);o.byIndex=d,n.splice(d,0,{identifier:l,updater:w,references:1})}a.push(l)}return a}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var r=o(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var d=t(r[a]);n[d].references--}for(var c=o(e,i),s=0;s<r.length;s++){var h=t(r[s]);0===n[h].references&&(n[h].updater(),n.splice(h,1))}r=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),i=t.n(o),r=t(569),a=t.n(r),d=t(565),c=t.n(d),s=t(216),h=t.n(s),l=t(589),y=t.n(l),u=t(426),w={};w.styleTagTransform=y(),w.setAttributes=c(),w.insert=a().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=h(),n()(u.Z,w),u.Z&&u.Z.locals&&u.Z.locals;const g=JSON.parse('[{"code":1000,"day":"Sunny","night":"Clear","icon":"wi-day-sunny"},{"code":1003,"day":"Partly cloudy","night":"Partly cloudy","icon":"wi-day-cloudy"},{"code":1006,"day":"Cloudy","night":"Cloudy","icon":"wi-cloud"},{"code":1009,"day":"Overcast","night":"Overcast","icon":"wi-day-sunny-overcast"},{"code":1030,"day":"Mist","night":"Mist","icon":"wi-day-haze"},{"code":1063,"day":"Patchy rain possible","night":"Patchy rain possible","icon":"wi-day-showers"},{"code":1066,"day":"Patchy snow possible","night":"Patchy snow possible","icon":"wi-day-snow-wind"},{"code":1069,"day":"Patchy sleet possible","night":"Patchy sleet possible","icon":"wi-day-sleet"},{"code":1072,"day":"Patchy freezing drizzle possible","night":"Patchy freezing drizzle possible","icon":"wi-day-rain-mix"},{"code":1087,"day":"Thundery outbreaks possible","night":"Thundery outbreaks possible","icon":"wi-day-storm-showers"},{"code":1114,"day":"Blowing snow","night":"Blowing snow","icon":"wi-day-snow-wind"},{"code":1117,"day":"Blizzard","night":"Blizzard","icon":"wi-snow"},{"code":1135,"day":"Fog","night":"Fog","icon":"wi-fog"},{"code":1147,"day":"Freezing fog","night":"Freezing fog","icon":"wi-hail"},{"code":1150,"day":"Patchy light drizzle","night":"Patchy light drizzle","icon":"wi-day-showers"},{"code":1153,"day":"Light drizzle","night":"Light drizzle","icon":"wi-day-showers"},{"code":1168,"day":"Freezing drizzle","night":"Freezing drizzle","icon":"wi-day-sleet"},{"code":1171,"day":"Heavy freezing drizzle","night":"Heavy freezing drizzle","icon":"wi-day-sleet"},{"code":1180,"day":"Patchy light rain","night":"Patchy light rain","icon":"wi-day-showers"},{"code":1183,"day":"Light rain","night":"Light rain","icon":"wi-day-rain"},{"code":1186,"day":"Moderate rain at times","night":"Moderate rain at times","icon":"wi-day-rain"},{"code":1189,"day":"Moderate rain","night":"Moderate rain","icon":"wi-day-rain"},{"code":1192,"day":"Heavy rain at times","night":"Heavy rain at times","icon":"wi-day-rain"},{"code":1195,"day":"Heavy rain","night":"Heavy rain","icon":"wi-day-rain"},{"code":1198,"day":"Light freezing rain","night":"Light freezing rain","icon":"wi-day-sleet"},{"code":1201,"day":"Moderate or heavy freezing rain","night":"Moderate or heavy freezing rain","icon":"wi-day-sleet"},{"code":1204,"day":"Light sleet","night":"Light sleet","icon":"wi-day-sleet"},{"code":1207,"day":"Moderate or heavy sleet","night":"Moderate or heavy sleet","icon":"wi-hail"},{"code":1210,"day":"Patchy light snow","night":"Patchy light snow","icon":"wi-day-snow-wind"},{"code":1213,"day":"Light snow","night":"Light snow","icon":"wi-day-snow-wind"},{"code":1216,"day":"Patchy moderate snow","night":"Patchy moderate snow","icon":"wi-day-snow-wind"},{"code":1219,"day":"Moderate snow","night":"Moderate snow","icon":"wi-day-snow-wind"},{"code":1222,"day":"Patchy heavy snow","night":"Patchy heavy snow","icon":"wi-day-snow-wind"},{"code":1225,"day":"Heavy snow","night":"Heavy snow","icon":"wi-day-snow-wind"},{"code":1237,"day":"Ice pellets","night":"Ice pellets","icon":"wi-day-sleet"},{"code":1240,"day":"Light rain shower","night":"Light rain shower","icon":"wi-day-showers"},{"code":1243,"day":"Moderate or heavy rain shower","night":"Moderate or heavy rain shower","icon":"wi-day-rain-wind"},{"code":1246,"day":"Torrential rain shower","night":"Torrential rain shower","icon":"wi-rain"},{"code":1249,"day":"Light sleet showers","night":"Light sleet showers","icon":"wi-day-sleet"},{"code":1252,"day":"Moderate or heavy sleet showers","night":"Moderate or heavy sleet showers","icon":"wi-day-sleet"},{"code":1255,"day":"Light snow showers","night":"Light snow showers","icon":"wi-day-snow-wind"},{"code":1258,"day":"Moderate or heavy snow showers","night":"Moderate or heavy snow showers","icon":"wi-day-snow-wind"},{"code":1261,"day":"Light showers of ice pellets","night":"Light showers of ice pellets","icon":"wi-day-sleet"},{"code":1264,"day":"Moderate or heavy showers of ice pellets","night":"Moderate or heavy showers of ice pellets","icon":"wi-day-sleet"},{"code":1273,"day":"Patchy light rain with thunder","night":"Patchy light rain with thunder","icon":"wi-day-storm-showers"},{"code":1276,"day":"Moderate or heavy rain with thunder","night":"Moderate or heavy rain with thunder","icon":"wi-day-thunderstorm"},{"code":1279,"day":"Patchy light snow with thunder","night":"Patchy light snow with thunder","icon":"wi-day-snow-thunderstorm"},{"code":1282,"day":"Moderate or heavy snow with thunder","night":"Moderate or heavy snow with thunder","icon":"wi-day-snow-thunderstorm"}]');!function(){let e="f";const n=document.querySelector(".icon"),t=document.querySelector(".temp"),o=document.querySelector(".location"),i=document.querySelector(".search"),r=document.querySelector(".search-btn"),a=document.querySelector(".cel-to-far");async function d(){let r="New York";r=""==i.value?"New York":i.value,i.value="";try{const i=await fetch(`https://api.weatherapi.com/v1/current.json?key=48bf9f94d8334512a48223601232205&q=${r}&aqi=no`,{mode:"cors"}),a=await i.json();console.log(a),function(i){const r=g.find((e=>e.code==i.condition)).icon;n.setAttribute("src",`./icons/${r}.svg`),o.textContent=`${i.loc}, ${i.country}`,"f"===e&&(t.textContent=`${i.tempF}°F`),"c"===e&&(t.textContent=`${i.tempC}°C`)}({tempF:a.current.temp_f,tempC:a.current.temp_c,feelsLikeF:a.current.feelslike_f,feelsLikeC:a.current.feelslike_c,condition:a.current.condition.code,hum:a.current.humidity,loc:a.location.name,country:a.location.country,windMph:a.current.wind_mph,windKph:a.current.wind_kph})}catch{alert("Location not found")}}r.addEventListener("click",d),i.addEventListener("keypress",(function(e){"Enter"===e.key&&(e.preventDefault(),d())})),a.addEventListener("click",(function(){e="f"===e?"c":"f",d()})),d()}()})()})();