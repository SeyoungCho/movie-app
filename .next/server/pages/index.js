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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Seo */ \"./components/Seo.js\");\n\n\n\nconst API_KEY = \"dbe5237965f144dae7ac54cf7996306a\";\nfunction Home() {\n    const { 0: movies , 1: setMovies  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            const { results  } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();\n            setMovies(results);\n        })();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"Home\"\n            }, void 0, false, {\n                fileName: \"/Users/seyoungcho/Documents/Workspace/nextJS/movie-app/pages/index.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            !movies && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/seyoungcho/Documents/Workspace/nextJS/movie-app/pages/index.js\",\n                lineNumber: 20,\n                columnNumber: 19\n            }, this),\n            movies === null || movies === void 0 ? void 0 : movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: movie.original_title\n                    }, void 0, false, {\n                        fileName: \"/Users/seyoungcho/Documents/Workspace/nextJS/movie-app/pages/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this)\n                }, movie.id, false, {\n                    fileName: \"/Users/seyoungcho/Documents/Workspace/nextJS/movie-app/pages/index.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            )\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/seyoungcho/Documents/Workspace/nextJS/movie-app/pages/index.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBQ1I7QUFFbkMsS0FBSyxDQUFDRyxPQUFPLEdBQUcsQ0FBa0M7QUFFbkMsUUFBUSxDQUFDQyxJQUFJLEdBQUUsQ0FBQztJQUM3QixLQUFLLE1BQUVDLE1BQU0sTUFBRUMsU0FBUyxNQUFJTCwrQ0FBUTtJQUNwQ0QsZ0RBQVMsS0FBSyxDQUFDO21CQUNELENBQUM7WUFDWCxLQUFLLENBQUMsQ0FBQ08sQ0FBQUEsT0FBTyxHQUFDLEdBQUcsS0FBSyxFQUNyQixLQUFLLENBQUNDLEtBQUssRUFDVixtREFBbUQsRUFBRUwsT0FBTyxLQUM1RE0sSUFBSTtZQUNQSCxTQUFTLENBQUNDLE9BQU87UUFDbkIsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTCxNQUFNLDZFQUNIRyxDQUFHOzt3RkFDRFIsdURBQUc7Z0JBQUNTLEtBQUssRUFBQyxDQUFNOzs7Ozs7YUFDZk4sTUFBTSxnRkFBS08sQ0FBRTswQkFBQyxDQUFVOzs7Ozs7WUFDekJQLE1BQU0sYUFBTkEsTUFBTSxLQUFOQSxJQUFJLENBQUpBLENBQVcsR0FBWEEsSUFBSSxDQUFKQSxDQUFXLEdBQVhBLE1BQU0sQ0FBRVEsR0FBRyxFQUFFQyxLQUFLLCtFQUNoQkosQ0FBRzswR0FDREUsQ0FBRTtrQ0FBRUUsS0FBSyxDQUFDQyxjQUFjOzs7Ozs7bUJBRGpCRCxLQUFLLENBQUNFLEVBQUU7Ozs7Ozs7Ozs7OztBQU0xQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92aWUtYXBwLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VvIGZyb20gXCIuLi9jb21wb25lbnRzL1Nlb1wiO1xuXG5jb25zdCBBUElfS0VZID0gXCJkYmU1MjM3OTY1ZjE0NGRhZTdhYzU0Y2Y3OTk2MzA2YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCl7XG4gIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZSgpO1xuICB1c2VFZmZlY3QoKCk9PntcbiAgICAoYXN5bmMgKCkgPT57XG4gICAgICBjb25zdCB7cmVzdWx0c30gPSBhd2FpdCAoXG4gICAgICAgIGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9wb3B1bGFyP2FwaV9rZXk9JHtBUElfS0VZfWBcbiAgICAgICkpLmpzb24oKTtcbiAgICAgIHNldE1vdmllcyhyZXN1bHRzKTtcbiAgICB9KSgpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxTZW8gdGl0bGU9XCJIb21lXCIgLz5cbiAgICAgIHshbW92aWVzICYmIDxoND5Mb2FkaW5nLi4uPC9oND59XG4gICAgICB7bW92aWVzPy5tYXAoKG1vdmllKT0+IChcbiAgICAgICAgPGRpdiBrZXk9e21vdmllLmlkfT5cbiAgICAgICAgICA8aDQ+e21vdmllLm9yaWdpbmFsX3RpdGxlfTwvaDQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2VvIiwiQVBJX0tFWSIsIkhvbWUiLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJyZXN1bHRzIiwiZmV0Y2giLCJqc29uIiwiZGl2IiwidGl0bGUiLCJoNCIsIm1hcCIsIm1vdmllIiwib3JpZ2luYWxfdGl0bGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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