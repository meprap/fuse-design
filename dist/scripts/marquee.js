/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dev/scripts/modules/marquee.js":
/*!****************************************!*\
  !*** ./dev/scripts/modules/marquee.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// import Marquee3k from 'marquee3000';\n\nclass Marquee {\n    constructor() {\n        this.breforeMarkqueeData = document.querySelector('.marquee-content');\n        this.htmlData = this.breforeMarkqueeData.innerHTML;\n        this.events();\n        this.mobileWidth = 0;\n    }\n\n    htmlMarquee() {\n        setTimeout(() => {\n            if (window.innerWidth > this.mobileWidth && !this.breforeMarkqueeData.classList.contains('marqueeplay')) {\n                const root = document.documentElement;\n                const marqueeElementsDisplayed =\n                    getComputedStyle(root).getPropertyValue('--marquee-elements-displayed');\n                const marqueeContent = document.querySelector('ul.marquee-content');\n                marqueeContent.classList.add('marqueeplay');\n\n                root.style.setProperty('--marquee-elements', marqueeContent.children.length);\n\n                for (let i = 0; i < marqueeElementsDisplayed; i++) {\n                    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));\n                }\n            }\n        }, 250);\n    }\n    \n    resize() {\n        window.addEventListener('resize', () => {\n            if (window.innerWidth > this.mobileWidth) {\n                this.htmlMarquee();\n            } else {\n                this.breforeMarkqueeData.classList.remove('marqueeplay');\n                document.querySelector('.marquee-content').innerHTML = this.htmlData;\n            }\n        });\n    }\n\n    events() {\n        this.htmlMarquee();\n        this.resize();\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Marquee);\nnew Marquee();\n\n\n//# sourceURL=webpack://webpack-starter-template/./dev/scripts/modules/marquee.js?");

/***/ })

/******/ 	});
/************************************************************************/
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./dev/scripts/modules/marquee.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;