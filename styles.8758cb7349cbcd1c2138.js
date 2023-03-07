(()=>{"use strict";var n,r,e,t,o,a,i,A,s,c,d,u,l,p,f={424:(n,r,e)=>{e.d(r,{Z:()=>A});var t=e(537),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"body {\r\n  font-family: serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.todolist-container {\r\n  width: 700px;\r\n  margin: 4rem auto;\r\n}\r\n\r\n.add-list:focus {\r\n  outline: none;\r\n  box-shadow: none;\r\n  border-color: #ced4da;\r\n}\r\n\r\n.btn:focus,\r\n.btn:active {\r\n  outline: none !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\n.arrow {\r\n  width: 10px;\r\n  height: 10px;\r\n}\r\n\r\ninput::placeholder {\r\n  font-size: 16px;\r\n  color: #999;\r\n  font-style: italic;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  transform: scale(1.5);\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.task-description {\r\n  outline: none;\r\n  box-shadow: none;\r\n  border: none;\r\n}\r\n\r\n.task-description:focus,\r\n.task-description:active {\r\n  outline: none;\r\n  box-shadow: none;\r\n  border: none;\r\n}\r\n\r\n.inputs {\r\n  flex: 5;\r\n  width: 90%;\r\n}\r\n\r\n.inputs .task-description {\r\n  width: 95%;\r\n}\r\n\r\n.buttons {\r\n  flex: 0.5;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n#clear {\r\n  outline: none;\r\n  box-shadow: none;\r\n  border: none;\r\n  background-color: #fff;\r\n}\r\n\r\n#clear:active {\r\n  outline: none;\r\n  box-shadow: none;\r\n  border: none;\r\n}\r\n\r\ninput[type='checkbox']:checked + input {\r\n  text-decoration: line-through;\r\n}\r\n","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;;EAEE,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;EACf,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,YAAY;AACd;;AAEA;;EAEE,aAAa;EACb,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,OAAO;EACP,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,6BAA6B;AAC/B",sourcesContent:["body {\r\n  font-family: serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.todolist-container {\r\n  width: 700px;\r\n  margin: 4rem auto;\r\n}\r\n\r\n.add-list:focus {\r\n  outline: none;\r\n  box-shadow: none;\r\n  border-color: #ced4da;\r\n}\r\n\r\n.btn:focus,\r\n.btn:active {\r\n  outline: none !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\n.arrow {\r\n  width: 10px;\r\n  height: 10px;\r\n}\r\n\r\ninput::placeholder {\r\n  font-size: 16px;\r\n  color: #999;\r\n  font-style: italic;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  transform: scale(1.5);\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.task-description {\r\n  outline: none;\r\n  box-shadow: none;\r\n  border: none;\r\n}\r\n\r\n.task-description:focus,\r\n.task-description:active {\r\n  outline: none;\r\n  box-shadow: none;\r\n  border: none;\r\n}\r\n\r\n.inputs {\r\n  flex: 5;\r\n  width: 90%;\r\n}\r\n\r\n.inputs .task-description {\r\n  width: 95%;\r\n}\r\n\r\n.buttons {\r\n  flex: 0.5;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n#clear {\r\n  outline: none;\r\n  box-shadow: none;\r\n  border: none;\r\n  background-color: #fff;\r\n}\r\n\r\n#clear:active {\r\n  outline: none;\r\n  box-shadow: none;\r\n  border: none;\r\n}\r\n\r\ninput[type='checkbox']:checked + input {\r\n  text-decoration: line-through;\r\n}\r\n"],sourceRoot:""}]);const A=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},537:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[r].concat([a]).join("\n")}return[r].join("\n")}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],A=0;A<n.length;A++){var s=n[A],c=t.base?s[0]+t.base:s[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var l=e(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)r[l].references++,r[l].updater(p);else{var f=o(p,t);t.byIndex=A,r.splice(A,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=e(a[i]);r[A].references--}for(var s=t(n,o),c=0;c<a.length;c++){var d=e(a[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},h={};function E(n){var r=h[n];if(void 0!==r)return r.exports;var e=h[n]={id:n,exports:{}};return f[n](e,e.exports,E),e.exports}E.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return E.d(r,{a:r}),r},E.d=(n,r)=>{for(var e in r)E.o(r,e)&&!E.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},E.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),E.nc=void 0,n=E(379),r=E.n(n),e=E(795),t=E.n(e),o=E(569),a=E.n(o),i=E(565),A=E.n(i),s=E(216),c=E.n(s),d=E(589),u=E.n(d),l=E(424),(p={}).styleTagTransform=u(),p.setAttributes=A(),p.insert=a().bind(null,"head"),p.domAPI=t(),p.insertStyleElement=c(),r()(l.Z,p),l.Z&&l.Z.locals&&l.Z.locals})();
//# sourceMappingURL=styles.8758cb7349cbcd1c2138.js.map