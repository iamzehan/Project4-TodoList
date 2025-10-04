/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 193:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/folder.png";

/***/ }),

/***/ 291:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

eval("{\n;// ./src/components/Inbox/template.html\n// Imports\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(193), __webpack_require__.b);\n// Module\nvar code = `<h1 class=\"page-title\"> Inbox </h1> <div class=\"inbox\"> <img src=\"${___HTML_LOADER_IMPORT_0___}\" alt=\"inbox-img\"> <h4>Capture now, plan later</h4> <p>Inbox is your go-to spot for quick task entry. Clear your mind now, organize when you’re ready.</p> <button class=\"common\"> <span class=\"icon\">add</span> <text>Add Task</text> </button> </div>`;\n// Exports\n/* harmony default export */ const template = (code);\n;// ./src/components/Inbox/Data.json\nconst Data_namespaceObject = {};\n;// ./src/components/Inbox/index.js\n\r\n\r\n\r\n\r\nconst inbox =  document.createElement(\"div\");\r\ninbox.classList.add(\"page\");\r\ninbox.innerHTML = template;\r\n\r\n/* harmony default export */ const Inbox = (inbox);\n;// ./src/index.js\n\r\n\r\n\r\nfunction setActiveState(lastTarget, button){\r\n   if (\r\n      button.lastElementChild.textContent !=\r\n      lastTarget.lastElementChild.textContent\r\n    ) {\r\n      button.classList.add(\"active\");\r\n      lastTarget.classList.remove(\"active\");\r\n    }\r\n    return button;\r\n}\r\n\r\nfunction loadPage(target, pageContent){\r\n  pageContent.innerHTML = \"\";\r\n  let pageName = target.lastElementChild.textContent;\r\n  if(pageName\r\n    == 'Inbox' && target.classList.contains(\"active\")\r\n  ){\r\n    pageContent.appendChild(Inbox);\r\n  }\r\n  if (pageName.includes(\"notifications\")){\r\n    if (target.classList.contains(\"active\")){\r\n      target.lastElementChild.textContent = \"notifications\";\r\n    }\r\n    pageContent.innerHTML = \"<h1>Notifications</h1>\"\r\n  }\r\n}\r\n\r\nconst navButtons = document.querySelectorAll(\"button\");\r\nlet lastTarget = document.querySelector(\"button.active\");\r\nconst pageContent = document.querySelector(\".content\");\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", ()=> {\r\n  setActiveState(lastTarget, lastTarget);\r\n  loadPage(lastTarget, pageContent);\r\n})\r\n\r\nnavButtons.forEach((button) => {\r\n  button.addEventListener(\"click\", () => {\r\n    lastTarget = setActiveState(lastTarget, button);\r\n    loadPage(lastTarget, pageContent);\r\n  });\r\n});\r\n\r\nconst dockButton = document.querySelector(\"span.dock\");\r\nconst navBar = document.querySelector(\"nav\");\r\ndockButton.addEventListener(\"click\", () => {\r\n  navBar.classList.toggle(\"hide\");\r\n  \r\n  if(navBar.classList.contains(\"hide\")){\r\n    dockButton.textContent = \"dock_to_right\";\r\n  }\r\n  else {\r\n    dockButton.textContent = \"dock_to_left\";\r\n  }\r\n  pageContent.classList.toggle(\"expand\");\r\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjkxLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSx5Q0FBeUMsa0VBQXNDO0FBQy9FO0FBQ0EsZ0ZBQWdGLDJCQUEyQjtBQUMzRztBQUNBLCtDQUFlLElBQUksRTs7OztBQ0xFO0FBQ2tCO0FBQ1I7QUFDL0I7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQSw0Q0FBZSxLQUFLLEU7O0FDUkM7QUFDMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLEtBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL0luYm94L3RlbXBsYXRlLmh0bWw/ZGUxMiIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2NvbXBvbmVudHMvSW5ib3gvaW5kZXguanM/ZmYwMiIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbGRlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIGNvZGUgPSBgPGgxIGNsYXNzPVwicGFnZS10aXRsZVwiPiBJbmJveCA8L2gxPiA8ZGl2IGNsYXNzPVwiaW5ib3hcIj4gPGltZyBzcmM9XCIke19fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19ffVwiIGFsdD1cImluYm94LWltZ1wiPiA8aDQ+Q2FwdHVyZSBub3csIHBsYW4gbGF0ZXI8L2g0PiA8cD5JbmJveCBpcyB5b3VyIGdvLXRvIHNwb3QgZm9yIHF1aWNrIHRhc2sgZW50cnkuIENsZWFyIHlvdXIgbWluZCBub3csIG9yZ2FuaXplIHdoZW4geW914oCZcmUgcmVhZHkuPC9wPiA8YnV0dG9uIGNsYXNzPVwiY29tbW9uXCI+IDxzcGFuIGNsYXNzPVwiaWNvblwiPmFkZDwvc3Bhbj4gPHRleHQ+QWRkIFRhc2s8L3RleHQ+IDwvYnV0dG9uPiA8L2Rpdj5gO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUuaHRtbCc7XHJcbmltcG9ydCBEYXRhIGZyb20gXCIuL0RhdGEuanNvblwiO1xyXG5cclxuY29uc3QgaW5ib3ggPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuaW5ib3guY2xhc3NMaXN0LmFkZChcInBhZ2VcIik7XHJcbmluYm94LmlubmVySFRNTCA9IHRlbXBsYXRlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5ib3g7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IEluYm94IGZyb20gJy4vY29tcG9uZW50cy9JbmJveC9pbmRleC5qcyc7XHJcblxyXG5mdW5jdGlvbiBzZXRBY3RpdmVTdGF0ZShsYXN0VGFyZ2V0LCBidXR0b24pe1xyXG4gICBpZiAoXHJcbiAgICAgIGJ1dHRvbi5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ICE9XHJcbiAgICAgIGxhc3RUYXJnZXQubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudFxyXG4gICAgKSB7XHJcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICBsYXN0VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUGFnZSh0YXJnZXQsIHBhZ2VDb250ZW50KXtcclxuICBwYWdlQ29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGxldCBwYWdlTmFtZSA9IHRhcmdldC5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50O1xyXG4gIGlmKHBhZ2VOYW1lXHJcbiAgICA9PSAnSW5ib3gnICYmIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIilcclxuICApe1xyXG4gICAgcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoSW5ib3gpO1xyXG4gIH1cclxuICBpZiAocGFnZU5hbWUuaW5jbHVkZXMoXCJub3RpZmljYXRpb25zXCIpKXtcclxuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKXtcclxuICAgICAgdGFyZ2V0Lmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSBcIm5vdGlmaWNhdGlvbnNcIjtcclxuICAgIH1cclxuICAgIHBhZ2VDb250ZW50LmlubmVySFRNTCA9IFwiPGgxPk5vdGlmaWNhdGlvbnM8L2gxPlwiXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBuYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcclxubGV0IGxhc3RUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmFjdGl2ZVwiKTtcclxuY29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+IHtcclxuICBzZXRBY3RpdmVTdGF0ZShsYXN0VGFyZ2V0LCBsYXN0VGFyZ2V0KTtcclxuICBsb2FkUGFnZShsYXN0VGFyZ2V0LCBwYWdlQ29udGVudCk7XHJcbn0pXHJcblxyXG5uYXZCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbGFzdFRhcmdldCA9IHNldEFjdGl2ZVN0YXRlKGxhc3RUYXJnZXQsIGJ1dHRvbik7XHJcbiAgICBsb2FkUGFnZShsYXN0VGFyZ2V0LCBwYWdlQ29udGVudCk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuY29uc3QgZG9ja0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLmRvY2tcIik7XHJcbmNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XHJcbmRvY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBuYXZCYXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XHJcbiAgXHJcbiAgaWYobmF2QmFyLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpe1xyXG4gICAgZG9ja0J1dHRvbi50ZXh0Q29udGVudCA9IFwiZG9ja190b19yaWdodFwiO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGRvY2tCdXR0b24udGV4dENvbnRlbnQgPSBcImRvY2tfdG9fbGVmdFwiO1xyXG4gIH1cclxuICBwYWdlQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kXCIpO1xyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///291\n\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__(291);
/******/ 	
/******/ })()
;