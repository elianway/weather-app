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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/display */ \"./src/modules/display.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', _modules_display__WEBPACK_IMPORTED_MODULE_0__.default.initializeWebsite);\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchWeather)\n/* harmony export */ });\nasync function fetchWeather(userInput) {\n  try {\n    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${userInput}&APPID=1549ce32d008428de08b36ca2c4bf6ad`, { mode: 'cors' });\n    if (!response.ok) throw new Error(`City ${userInput} not found`);\n    const weatherData = await response.json();\n    const city = weatherData.name;\n    const weather = weatherData.weather[0].main;\n    const temperature = Math.round((weatherData.main.temp - 273.15) * (9 / 5) + 32);\n    return { city, weather, temperature };\n  } catch (error) {\n    alert(error);\n    return null;\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/modules/app.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Display)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/modules/app.js\");\n/* eslint-disable prefer-destructuring */\n/* eslint-disable class-methods-use-this */\n\n\nclass Display {\n  static getUserInput() {\n    const inputField = document.getElementById('input-field');\n    return inputField.value;\n  }\n\n  static resetInputField() {\n    const inputField = document.getElementById('input-field');\n    inputField.value = '';\n  }\n\n  static fetchButtonListener() {\n    const inputField = document.getElementById('input-field');\n    const submitButton = document.getElementById('submit-button');\n    submitButton.addEventListener('click', async () => {\n      if (inputField.value === '') return;\n      Display.updateDisplay(await (0,_app__WEBPACK_IMPORTED_MODULE_0__.default)(inputField.value));\n      Display.resetInputField();\n    });\n  }\n\n  static updateDisplay(data) {\n    const targetCity = document.getElementById('city');\n    const targetWeather = document.getElementById('weather');\n    const targetTemp = document.getElementById('temp');\n    targetCity.textContent = `${data.city}`;\n    targetWeather.textContent = `${data.weather}`;\n    targetTemp.textContent = `${data.temperature}°`;\n  }\n\n  static initializeWebsite() {\n    const submitForm = document.getElementById('user-input');\n    submitForm.addEventListener('submit', (e) => {\n      e.preventDefault();\n    });\n    Display.fetchButtonListener();\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/modules/display.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;