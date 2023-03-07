(()=>{"use strict";var n={424:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(537),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"body {\r\n  font-family: serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.todolist-container {\r\n  width: 700px;\r\n  margin: 4rem auto;\r\n}\r\n\r\n.add-list:focus {\r\n  outline: none;\r\n  box-shadow: none;\r\n  border-color: #ced4da;\r\n}\r\n\r\n.btn:focus,\r\n.btn:active {\r\n  outline: none !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\n.arrow {\r\n  width: 10px;\r\n  height: 10px;\r\n}\r\n\r\ninput::placeholder {\r\n  font-size: 16px;\r\n  color: #999;\r\n  font-style: italic;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  transform: scale(1.5);\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.task-description {\r\n  outline: none;\r\n  box-shadow: none;\r\n  border: none;\r\n}\r\n\r\n.task-description:focus,\r\n.task-description:active {\r\n  outline: none;\r\n  box-shadow: none;\r\n  border: none;\r\n}\r\n\r\n.inputs {\r\n  flex: 5;\r\n  width: 90%;\r\n}\r\n\r\n.inputs .task-description {\r\n  width: 95%;\r\n}\r\n\r\n.buttons {\r\n  flex: 0.5;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n#clear {\r\n  outline: none;\r\n  box-shadow: none;\r\n  border: none;\r\n  background-color: #fff;\r\n}\r\n\r\n#clear:active {\r\n  outline: none;\r\n  box-shadow: none;\r\n  border: none;\r\n}\r\n\r\ninput[type='checkbox']:checked + input {\r\n  text-decoration: line-through;\r\n}\r\n","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;;EAEE,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;EACf,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,YAAY;AACd;;AAEA;;EAEE,aAAa;EACb,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,OAAO;EACP,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,6BAA6B;AAC/B",sourcesContent:["body {\r\n  font-family: serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.todolist-container {\r\n  width: 700px;\r\n  margin: 4rem auto;\r\n}\r\n\r\n.add-list:focus {\r\n  outline: none;\r\n  box-shadow: none;\r\n  border-color: #ced4da;\r\n}\r\n\r\n.btn:focus,\r\n.btn:active {\r\n  outline: none !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\n.arrow {\r\n  width: 10px;\r\n  height: 10px;\r\n}\r\n\r\ninput::placeholder {\r\n  font-size: 16px;\r\n  color: #999;\r\n  font-style: italic;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  transform: scale(1.5);\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.task-description {\r\n  outline: none;\r\n  box-shadow: none;\r\n  border: none;\r\n}\r\n\r\n.task-description:focus,\r\n.task-description:active {\r\n  outline: none;\r\n  box-shadow: none;\r\n  border: none;\r\n}\r\n\r\n.inputs {\r\n  flex: 5;\r\n  width: 90%;\r\n}\r\n\r\n.inputs .task-description {\r\n  width: 95%;\r\n}\r\n\r\n.buttons {\r\n  flex: 0.5;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n#clear {\r\n  outline: none;\r\n  box-shadow: none;\r\n  border: none;\r\n  background-color: #fff;\r\n}\r\n\r\n#clear:active {\r\n  outline: none;\r\n  box-shadow: none;\r\n  border: none;\r\n}\r\n\r\ninput[type='checkbox']:checked + input {\r\n  text-decoration: line-through;\r\n}\r\n"],sourceRoot:""}]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},548:(n,e,t)=>{var r=t(379),o=t.n(r),a=t(795),i=t.n(a),s=t(569),c=t.n(s),d=t(565),l=t.n(d),A=t(216),u=t.n(A),p=t(589),f=t.n(p),h=t(424),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),o()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,A="".concat(d," ").concat(l);a[d]=l+1;var u=t(A),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var f=o(p,r);r.byIndex=s,e.splice(s,0,{identifier:A,updater:f,references:1})}i.push(A)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},205:(n,e,t)=>{t.d(e,{Z:()=>r});const r=function(n){var e=JSON.parse(localStorage.getItem("tasks"));if("checkbox"===n.target.type){var t=parseInt(n.target.dataset.index,10);e.find((function(n){return n.index===t})).completed=n.target.checked,localStorage.setItem("tasks",JSON.stringify(e))}}},408:(n,e,t)=>{t.d(e,{Z:()=>r});const r=function(n){var e=document.getElementById("todolist");n.sort((function(n,e){return n.index-e.index})),e.innerHTML="",n.forEach((function(n){var t=' <li class= "border-bottom border-opacity-10 p-3 d-flex justify-content-between">\n                            <div class="inputs">\n                              <input type="checkbox" data-index="'.concat(n.index,'" ').concat(n.completed?"checked":"",' class="me-2 mt-2" />\n                              <input type="text" class="task-description" data-index="').concat(n.index,'" value ="').concat(n.description,'" />\n                            </div>\n                            <div class="buttons">\n                              <div class="ellipsis">\n                                <button class="btn btn-ellipsis" data-index="').concat(n.index,'">\n                                  <i class="fa-solid fa-ellipsis-vertical"></i>\n                                </button>\n                              </div>\n                              <div class="hidden">\n                                <button class="btn btn-trash" data-index="').concat(n.index,'">\n                                  <i class="fa-solid fa-trash-can"></i>\n                                </button>\n                              </div>\n                            </div>\n                          </li>');e.innerHTML+=t}))}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{t(548);var n=t(205),e=t(408);var r=document.getElementById("todolist");document.getElementById("add").addEventListener("keyup",(function(n){n.preventDefault(),"Enter"===n.key&&function(){var n=document.getElementById("add").value,t=JSON.parse(localStorage.getItem("tasks")||JSON.stringify([])),r={description:n,completed:!1,index:t.length+1};t.push(r),document.getElementById("add").value="",(0,e.Z)(t),localStorage.setItem("tasks",JSON.stringify(t))}()}));var o=JSON.parse(localStorage.getItem("tasks"));o&&(0,e.Z)(o),r.addEventListener("click",(function(n){if(n.target.closest(".btn-ellipsis")){var t=n.target.closest(".btn-ellipsis"),r=t.closest(".ellipsis").nextElementSibling;t.classList.add("hidden"),r.classList.remove("hidden")}else if(n.target.closest(".btn-trash")){var o=n.target.closest(".btn-trash"),a=JSON.parse(localStorage.getItem("tasks")).filter((function(n){return n.index!==parseInt(o.dataset.index,10)}));a.forEach((function(n,e){n.index=e+1})),localStorage.setItem("tasks",JSON.stringify(a)),(0,e.Z)(a)}})),r.addEventListener("change",n.Z),r.addEventListener("keyup",(function(n){if(n.target.classList.contains("task-description")){var e=parseInt(n.target.closest("input").dataset.index,10);o.find((function(n){return n.index===e})).description=n.target.value,localStorage.setItem("tasks",JSON.stringify(o))}})),document.getElementById("clear").addEventListener("click",(function(n){n.preventDefault();var t=JSON.parse(localStorage.getItem("tasks")).filter((function(n){return!n.completed}));t.forEach((function(n,e){n.index=e+1})),localStorage.setItem("tasks",JSON.stringify(t)),(0,e.Z)(t)}))})()})();
//# sourceMappingURL=main.dae4883454d6b6fcf4af.js.map