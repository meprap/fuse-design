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

/***/ "./dev/scripts/modules/video-play.js":
/*!*******************************************!*\
  !*** ./dev/scripts/modules/video-play.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass PlayVideo {\n    constructor() {\n        this.videoPlay();\n        this.videoModulePlay();\n        this.submitPopupForm();\n        this.hideForm();\n        this.clickvdo();\n    }\n    clickvdo(){\n        const el = document.querySelectorAll('.card-video');\n        if (el) {\n            for (var i = 0; i < el.length; i++) {\n                el[i].addEventListener('click', this.playvdo);\n            }\n        }\n    }\n    playvdo(){\n        this.querySelector(':scope > .btn-control').style.display = \"none\";\n        this.querySelector(':scope > .card-figure').style.display = \"none\";\n        this.querySelector(':scope > .iframe-video').src += \"?autoplay=1\";\n    }\n    videoPlay() {\n        const el = document.querySelectorAll('.card-video__video-play');\n        if (el) {\n            for (var i = 0; i < el.length; i++) {\n                el[i].addEventListener('click', this.hideContent);\n            }\n        }\n        const el2 = document.querySelectorAll('.card-video-btn');\n        if (el2) {\n            for (var i = 0; i < el2.length; i++) {\n                el2[i].addEventListener('click', this.playModalVideo);\n            }\n        }\n    }\n\n    videoModulePlay() {\n        const el1 = document.querySelectorAll('.video-module__video-poster-play');\n        if (el1) {\n            for (var i = 0; i < el1.length; i++) {\n                el1[i].addEventListener('click', this.hideContent);\n            }\n        }\n    }\n\n    hideContent() {\n        this.parentElement.style.display = 'none';\n        this.parentElement.nextSibling.src += \"?autoplay=1\";\n    }\n    playModalVideo() {\n        const source = this.parentElement.querySelector('.card-video__video-iframe').src;\n        document.querySelector('.modal-video__iframe').src = source;\n    }\n\n    validateEmail = (email) => {\n        const re = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n        return re.test(String(email).toLowerCase());\n    }\n\n    submitPopupForm = () => {\n        const videoFormBtn = document.querySelector('.video-form-btn');\n        if (videoFormBtn) {\n            videoFormBtn.addEventListener('click', (event) => {\n                event.preventDefault();\n                const email = document.querySelector('.modal-video-form [name=\"email\"]').value;\n                const videoFormModal = document.querySelector('#videoFormModal');\n                if (this.validateEmail(email)) {\n                    this.setFormValLocalStorage(email);\n                    this.hideForm();\n                }\n            });\n        }\n    }\n\n    hideForm = () => {\n        if (this.getFormValLocalStorage()) {\n            const popUpFormBtn = document.querySelectorAll('[data-bs-target=\"#videoFormModal\"]');\n            [...popUpFormBtn].forEach(btn => {\n                btn.remove();\n            });\n        }\n    }\n\n    setFormValLocalStorage(value) {\n        localStorage.setItem(\"email\", value);\n    }\n\n    getFormValLocalStorage() {\n        return localStorage.getItem(\"email\");\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayVideo);\nnew PlayVideo();\n\n\n//# sourceURL=webpack://webpack-starter-template/./dev/scripts/modules/video-play.js?");

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
/******/ 	__webpack_modules__["./dev/scripts/modules/video-play.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;