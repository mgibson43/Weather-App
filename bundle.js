(()=>{"use strict";var e={426:(e,n,o)=>{o.d(n,{Z:()=>d});var t=o(81),i=o.n(t),r=o(645),a=o.n(r)()(i());a.push([e.id,"* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  height: 100vh;\n  background-image: linear-gradient(to bottom right, #172554, 60%, #166534);\n}\n\n.container{\n  padding: 4rem;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n\n.weather {\n  display: flex;\n  gap: 1rem;\n}\n\n.nav {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 92px;\n}\n\n.celToFar,\n.searchBtn,\n.search {\n  border: none;\n  background-color: #eee;\n  padding: 0.7rem 3rem;\n  border-radius: 10px;\n  box-shadow: 2px 2px 12px rgba(0.2, 0.2, 0.2, 0.4);\n  font-size: 24px;\n  font-weight: 500;\n  color: #222\n}\n\n.searchBox {\n  display: flex;\n  gap: 1rem;\n}\n\n.search {\n  width: 26rem;\n  padding: 0.7rem 1rem;\n  outline: none;\n}\n\n.celToFar:hover,\n.searchBtn:hover {\n  cursor: pointer;\n  transform: translate(2%, 2%);\n}\n\n.icon {\n  width: 128px;\n}",""]);const d=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var o="",t=void 0!==n[5];return n[4]&&(o+="@supports (".concat(n[4],") {")),n[2]&&(o+="@media ".concat(n[2]," {")),t&&(o+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),o+=e(n),t&&(o+="}"),n[2]&&(o+="}"),n[4]&&(o+="}"),o})).join("")},n.i=function(e,o,t,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(t)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var s=0;s<e.length;s++){var h=[].concat(e[s]);t&&a[h[0]]||(void 0!==r&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=r),o&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=o):h[2]=o),i&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=i):h[4]="".concat(i)),n.push(h))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function o(e){for(var o=-1,t=0;t<n.length;t++)if(n[t].identifier===e){o=t;break}return o}function t(e,t){for(var r={},a=[],d=0;d<e.length;d++){var c=e[d],s=t.base?c[0]+t.base:c[0],h=r[s]||0,y="".concat(s," ").concat(h);r[s]=h+1;var l=o(y),w={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)n[l].references++,n[l].updater(w);else{var u=i(w,t);t.byIndex=d,n.splice(d,0,{identifier:y,updater:u,references:1})}a.push(y)}return a}function i(e,n){var o=n.domAPI(n);return o.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;o.update(e=n)}else o.remove()}}e.exports=function(e,i){var r=t(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var d=o(r[a]);n[d].references--}for(var c=t(e,i),s=0;s<r.length;s++){var h=o(r[s]);0===n[h].references&&(n[h].updater(),n.splice(h,1))}r=c}}},569:e=>{var n={};e.exports=function(e,o){var t=function(e){if(void 0===n[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}n[e]=o}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(o)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,o)=>{e.exports=function(e){var n=o.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(o){!function(e,n,o){var t="";o.supports&&(t+="@supports (".concat(o.supports,") {")),o.media&&(t+="@media ".concat(o.media," {"));var i=void 0!==o.layer;i&&(t+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),t+=o.css,i&&(t+="}"),o.media&&(t+="}"),o.supports&&(t+="}");var r=o.sourceMap;r&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function o(t){var i=n[t];if(void 0!==i)return i.exports;var r=n[t]={id:t,exports:{}};return e[t](r,r.exports,o),r.exports}o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),o.nc=void 0,(()=>{var e=o(379),n=o.n(e),t=o(795),i=o.n(t),r=o(569),a=o.n(r),d=o(565),c=o.n(d),s=o(216),h=o.n(s),y=o(589),l=o.n(y),w=o(426),u={};u.styleTagTransform=l(),u.setAttributes=c(),u.insert=a().bind(null,"head"),u.domAPI=i(),u.insertStyleElement=h(),n()(w.Z,u),w.Z&&w.Z.locals&&w.Z.locals;const g=JSON.parse('[{"code":1000,"day":"Sunny","night":"Clear","icon":"wi-day-sunny"},{"code":1003,"day":"Partly cloudy","night":"Partly cloudy","icon":"wi-day-cloudy"},{"code":1006,"day":"Cloudy","night":"Cloudy","icon":"wi-cloud"},{"code":1009,"day":"Overcast","night":"Overcast","icon":"wi-day-sunny-overcast"},{"code":1030,"day":"Mist","night":"Mist","icon":"wi-day-haze"},{"code":1063,"day":"Patchy rain possible","night":"Patchy rain possible","icon":"wi-day-showers"},{"code":1066,"day":"Patchy snow possible","night":"Patchy snow possible","icon":"wi-day-snow-wind"},{"code":1069,"day":"Patchy sleet possible","night":"Patchy sleet possible","icon":"wi-day-sleet"},{"code":1072,"day":"Patchy freezing drizzle possible","night":"Patchy freezing drizzle possible","icon":"wi-day-rain-mix"},{"code":1087,"day":"Thundery outbreaks possible","night":"Thundery outbreaks possible","icon":"wi-day-storm-showers"},{"code":1114,"day":"Blowing snow","night":"Blowing snow","icon":"wi-day-snow-wind"},{"code":1117,"day":"Blizzard","night":"Blizzard","icon":"wi-snow"},{"code":1135,"day":"Fog","night":"Fog","icon":"wi-fog"},{"code":1147,"day":"Freezing fog","night":"Freezing fog","icon":"wi-hail"},{"code":1150,"day":"Patchy light drizzle","night":"Patchy light drizzle","icon":"wi-day-showers"},{"code":1153,"day":"Light drizzle","night":"Light drizzle","icon":"wi-day-showers"},{"code":1168,"day":"Freezing drizzle","night":"Freezing drizzle","icon":"wi-day-sleet"},{"code":1171,"day":"Heavy freezing drizzle","night":"Heavy freezing drizzle","icon":"wi-day-sleet"},{"code":1180,"day":"Patchy light rain","night":"Patchy light rain","icon":"wi-day-showers"},{"code":1183,"day":"Light rain","night":"Light rain","icon":"wi-day-rain"},{"code":1186,"day":"Moderate rain at times","night":"Moderate rain at times","icon":"wi-day-rain"},{"code":1189,"day":"Moderate rain","night":"Moderate rain","icon":"wi-day-rain"},{"code":1192,"day":"Heavy rain at times","night":"Heavy rain at times","icon":"wi-day-rain"},{"code":1195,"day":"Heavy rain","night":"Heavy rain","icon":"wi-day-rain"},{"code":1198,"day":"Light freezing rain","night":"Light freezing rain","icon":"wi-day-sleet"},{"code":1201,"day":"Moderate or heavy freezing rain","night":"Moderate or heavy freezing rain","icon":"wi-day-sleet"},{"code":1204,"day":"Light sleet","night":"Light sleet","icon":"wi-day-sleet"},{"code":1207,"day":"Moderate or heavy sleet","night":"Moderate or heavy sleet","icon":"wi-hail"},{"code":1210,"day":"Patchy light snow","night":"Patchy light snow","icon":"wi-day-snow-wind"},{"code":1213,"day":"Light snow","night":"Light snow","icon":"wi-day-snow-wind"},{"code":1216,"day":"Patchy moderate snow","night":"Patchy moderate snow","icon":"wi-day-snow-wind"},{"code":1219,"day":"Moderate snow","night":"Moderate snow","icon":"wi-day-snow-wind"},{"code":1222,"day":"Patchy heavy snow","night":"Patchy heavy snow","icon":"wi-day-snow-wind"},{"code":1225,"day":"Heavy snow","night":"Heavy snow","icon":"wi-day-snow-wind"},{"code":1237,"day":"Ice pellets","night":"Ice pellets","icon":"wi-day-sleet"},{"code":1240,"day":"Light rain shower","night":"Light rain shower","icon":"wi-day-showers"},{"code":1243,"day":"Moderate or heavy rain shower","night":"Moderate or heavy rain shower","icon":"wi-day-rain-wind"},{"code":1246,"day":"Torrential rain shower","night":"Torrential rain shower","icon":"wi-rain"},{"code":1249,"day":"Light sleet showers","night":"Light sleet showers","icon":"wi-day-sleet"},{"code":1252,"day":"Moderate or heavy sleet showers","night":"Moderate or heavy sleet showers","icon":"wi-day-sleet"},{"code":1255,"day":"Light snow showers","night":"Light snow showers","icon":"wi-day-snow-wind"},{"code":1258,"day":"Moderate or heavy snow showers","night":"Moderate or heavy snow showers","icon":"wi-day-snow-wind"},{"code":1261,"day":"Light showers of ice pellets","night":"Light showers of ice pellets","icon":"wi-day-sleet"},{"code":1264,"day":"Moderate or heavy showers of ice pellets","night":"Moderate or heavy showers of ice pellets","icon":"wi-day-sleet"},{"code":1273,"day":"Patchy light rain with thunder","night":"Patchy light rain with thunder","icon":"wi-day-storm-showers"},{"code":1276,"day":"Moderate or heavy rain with thunder","night":"Moderate or heavy rain with thunder","icon":"wi-day-thunderstorm"},{"code":1279,"day":"Patchy light snow with thunder","night":"Patchy light snow with thunder","icon":"wi-day-snow-thunderstorm"},{"code":1282,"day":"Moderate or heavy snow with thunder","night":"Moderate or heavy snow with thunder","icon":"wi-day-snow-thunderstorm"}]');console.log(g),async function(){try{const e=await fetch("https://api.weatherapi.com/v1/current.json?key=48bf9f94d8334512a48223601232205&q=New York&aqi=no",{mode:"cors"}),n=await e.json();console.log(n);const o={tempF:n.current.temp_f,tempC:n.current.temp_c,feelsLikeF:n.current.feelslike_f,feelsLikeC:n.current.feelslike_c,condition:n.current.condition.code,hum:n.current.humidity,loc:n.location.name,country:n.location.country,windMph:n.current.wind_mph,windKph:n.current.wind_kph};!function(e){const n=g.find((n=>n.code==e.condition)).icon;document.querySelector(".icon").setAttribute("src",`./icons/${n}.svg`)}(o),console.log(o)}catch{console.log("No such location")}}()})()})();