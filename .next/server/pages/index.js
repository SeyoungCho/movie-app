"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Seo.js":
/*!***************************!*\
  !*** ./components/Seo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Seo)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Seo({ title  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n            children: [\n                title,\n                \" | Next Movies\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/seyoungcho/Documents/Workspace/nextJS/movie-app/components/Seo.js\",\n            lineNumber: 5,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/seyoungcho/Documents/Workspace/nextJS/movie-app/components/Seo.js\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nlby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEI7QUFDYixRQUFRLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxDQUFBQSxLQUFLLEdBQUMsRUFBQyxDQUFDO0lBQ25DLE1BQU0sNkVBQ0hGLGtEQUFJOzhGQUNGRSxDQUFLOztnQkFBRUEsS0FBSztnQkFBQyxDQUFjOzs7Ozs7Ozs7Ozs7QUFHbEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmllLWFwcC8uL2NvbXBvbmVudHMvU2VvLmpzPzQyOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VvKHt0aXRsZX0pe1xuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0aXRsZX0gfCBOZXh0IE1vdmllczwvdGl0bGU+XG4gICAgPC9IZWFkPlxuICApXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJTZW8iLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Seo.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/cjs/react.production.min */ \"react/cjs/react.production.min\");\n/* harmony import */ var react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Seo */ \"./components/Seo.js\");\n\n\n\nconst API_KEY = \"dbe5237965f144dae7ac54cf7996306a\";\nfunction Home() {\n    const [movies, setMovies] = (0,react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            const data = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();\n        })();\n        console.log(data);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"Home\"\n            }, void 0, false, {\n                fileName: \"/Users/seyoungcho/Documents/Workspace/nextJS/movie-app/pages/index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"active\",\n                children: \"Hello\"\n            }, void 0, false, {\n                fileName: \"/Users/seyoungcho/Documents/Workspace/nextJS/movie-app/pages/index.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/seyoungcho/Documents/Workspace/nextJS/movie-app/pages/index.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW9FO0FBQ2pDO0FBRW5DLEtBQUssQ0FBQ0csT0FBTyxHQUFHLENBQWtDO0FBRW5DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFFLENBQUM7SUFDN0IsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLFNBQVMsSUFBSUwsd0VBQVEsQ0FBQyxDQUFDLENBQUM7SUFDdkNELHlFQUFTLEtBQUssQ0FBQzttQkFDRCxDQUFDO1lBQ1gsS0FBSyxDQUFDTyxJQUFJLEdBQUcsS0FBSyxFQUFFLEtBQUssQ0FBQ0MsS0FBSyxFQUM1QixtREFBbUQsRUFBRUwsT0FBTyxLQUM1RE0sSUFBSTtRQUNULENBQUM7UUFDREMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUk7SUFDbEIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNMLE1BQU0sNkVBQ0hLLENBQUc7O3dGQUNEVix1REFBRztnQkFBQ1csS0FBSyxFQUFDLENBQU07Ozs7Ozt3RkFDaEJDLENBQUU7Z0JBQUNDLFNBQVMsRUFBQyxDQUFROzBCQUFDLENBQUs7Ozs7Ozs7Ozs7OztBQUdsQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92aWUtYXBwLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0L2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pblwiO1xuaW1wb3J0IFNlbyBmcm9tIFwiLi4vY29tcG9uZW50cy9TZW9cIjtcblxuY29uc3QgQVBJX0tFWSA9IFwiZGJlNTIzNzk2NWYxNDRkYWU3YWM1NGNmNzk5NjMwNmFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpe1xuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCk9PntcbiAgICAoYXN5bmMgKCkgPT57XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgKGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9wb3B1bGFyP2FwaV9rZXk9JHtBUElfS0VZfWBcbiAgICAgICkpLmpzb24oKTtcbiAgICB9KSgpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFNlbyB0aXRsZT1cIkhvbWVcIiAvPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImFjdGl2ZVwiPkhlbGxvPC9oMT5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTZW8iLCJBUElfS0VZIiwiSG9tZSIsIm1vdmllcyIsInNldE1vdmllcyIsImRhdGEiLCJmZXRjaCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwidGl0bGUiLCJoMSIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react/cjs/react.production.min":
/*!*************************************************!*\
  !*** external "react/cjs/react.production.min" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("react/cjs/react.production.min");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();