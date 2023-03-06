/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/Checkbox.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CheckBoxes = function CheckBoxes(event) {
  var tasks = JSON.parse(localStorage.getItem('tasks'));
  if (event.target.type === 'checkbox') {
    var index = parseInt(event.target.dataset.index, 10);
    var task = tasks.find(function (task) {
      return task.index === index;
    });
    task.completed = event.target.checked;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckBoxes);
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*************************!*\
  !*** ./src/LoadTask.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var LoadTask = function LoadTask(tasks) {
  var toDoList = document.getElementById('todolist');
  tasks.sort(function (a, b) {
    return a.index - b.index;
  });
  toDoList.innerHTML = '';
  tasks.forEach(function (task) {
    var template = " <li class= \"border-bottom border-opacity-10 p-3 d-flex justify-content-between\">\n                            <div class=\"inputs\">\n                              <input type=\"checkbox\" data-index=\"".concat(task.index, "\" ").concat(task.completed ? 'checked' : '', " class=\"me-2 mt-2\" />\n                              <input type=\"text\" class=\"task-description\" data-index=\"").concat(task.index, "\" value =\"").concat(task.description, "\" />\n                            </div>\n                            <div class=\"buttons\">\n                              <div class=\"ellipsis\">\n                                <button class=\"btn btn-ellipsis\" data-index=\"").concat(task.index, "\">\n                                  <i class=\"fa-solid fa-ellipsis-vertical\"></i>\n                                </button>\n                              </div>\n                              <div class=\"hidden\">\n                                <button class=\"btn btn-trash\" data-index=\"").concat(task.index, "\">\n                                  <i class=\"fa-solid fa-trash-can\"></i>\n                                </button>\n                              </div>\n                            </div>\n                          </li>");
    toDoList.innerHTML += template;
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadTask);
})();

/******/ })()
;
//# sourceMappingURL=script.7a6b72659b03d19b2dc3.js.map