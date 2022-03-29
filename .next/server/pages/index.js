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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Seo */ \"./components/Seo.js\");\n\n\n\nconst API_KEY = \"dbe5237965f144dae7ac54cf7996306a\";\nfunction Home() {\n    const { 0: movies , 1: setMovies  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            const data = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();\n        })();\n        console.log(data);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"Home\"\n            }, void 0, false, {\n                fileName: \"/Users/seyoungcho/Documents/Workspace/nextJS/movie-app/pages/index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"active\",\n                children: \"Hello\"\n            }, void 0, false, {\n                fileName: \"/Users/seyoungcho/Documents/Workspace/nextJS/movie-app/pages/index.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/seyoungcho/Documents/Workspace/nextJS/movie-app/pages/index.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBQ1I7QUFFbkMsS0FBSyxDQUFDRyxPQUFPLEdBQUcsQ0FBa0M7QUFFbkMsUUFBUSxDQUFDQyxJQUFJLEdBQUUsQ0FBQztJQUM3QixLQUFLLE1BQUVDLE1BQU0sTUFBRUMsU0FBUyxNQUFJTCwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUN2Q0QsZ0RBQVMsS0FBSyxDQUFDO21CQUNELENBQUM7WUFDWCxLQUFLLENBQUNPLElBQUksR0FBRyxLQUFLLEVBQUUsS0FBSyxDQUFDQyxLQUFLLEVBQzVCLG1EQUFtRCxFQUFFTCxPQUFPLEtBQzVETSxJQUFJO1FBQ1QsQ0FBQztRQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osSUFBSTtJQUNsQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ0wsTUFBTSw2RUFDSEssQ0FBRzs7d0ZBQ0RWLHVEQUFHO2dCQUFDVyxLQUFLLEVBQUMsQ0FBTTs7Ozs7O3dGQUNoQkMsQ0FBRTtnQkFBQ0MsU0FBUyxFQUFDLENBQVE7MEJBQUMsQ0FBSzs7Ozs7Ozs7Ozs7O0FBR2xDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZS1hcHAvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZW8gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VvXCI7XG5cbmNvbnN0IEFQSV9LRVkgPSBcImRiZTUyMzc5NjVmMTQ0ZGFlN2FjNTRjZjc5OTYzMDZhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKXtcbiAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgKGFzeW5jICgpID0+e1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IChhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvcG9wdWxhcj9hcGlfa2V5PSR7QVBJX0tFWX1gXG4gICAgICApKS5qc29uKCk7XG4gICAgfSkoKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxTZW8gdGl0bGU9XCJIb21lXCIgLz5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJhY3RpdmVcIj5IZWxsbzwvaDE+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2VvIiwiQVBJX0tFWSIsIkhvbWUiLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJkYXRhIiwiZmV0Y2giLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRpdiIsInRpdGxlIiwiaDEiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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