"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/_components/MessageList.tsx":
/*!*********************************************!*\
  !*** ./src/app/_components/MessageList.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.2_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.2_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MessageList = (param)=>{\n    let { messages, isMobileMode } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full\",\n        children: messages === null || messages === void 0 ? void 0 : messages.map((m, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 flex items-start whitespace-pre-wrap \".concat(m.role === \"assistant\" ? \"justify-end\" : \"\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat(isMobileMode ? \"\" : \"max-w-[20vw]\", \" relative flex items-start\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded-lg p-2 text-sm \".concat(m.role === \"user\" ? \"bg-primary text-white\" : m.role === \"assistant\" ? \"ml-[44px] bg-gray-200 text-gray-700\" : \"max-w-[100%] bg-purple-100 text-gray-700\"),\n                        style: {\n                            wordWrap: \"break-word\"\n                        },\n                        children: m.content\n                    }, void 0, false, {\n                        fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/_components/MessageList.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/_components/MessageList.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, undefined)\n            }, index, false, {\n                fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/_components/MessageList.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/_components/MessageList.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MessageList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageList);\nvar _c;\n$RefreshReg$(_c, \"MessageList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvTWVzc2FnZUxpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQzBCO0FBUTFCLE1BQU1DLGNBQTBDO1FBQUMsRUFDL0NDLFFBQVEsRUFDUkMsWUFBWSxFQUNiO0lBQ0MscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1pILHFCQUFBQSwrQkFBQUEsU0FBVUksR0FBRyxDQUFDLENBQUNDLEdBQUdDLHNCQUNqQiw4REFBQ0o7Z0JBRUNDLFdBQVcsNkNBRVYsT0FEQ0UsRUFBRUUsSUFBSSxLQUFLLGNBQWMsZ0JBQWdCOzBCQUczQyw0RUFBQ0w7b0JBQ0NDLFdBQVcsR0FFVixPQURDRixlQUFlLEtBQUssZ0JBQ3JCOzhCQUtELDRFQUFDQzt3QkFDQ0MsV0FBVywwQkFNVixPQUxDRSxFQUFFRSxJQUFJLEtBQUssU0FDUCwwQkFDQUYsRUFBRUUsSUFBSSxLQUFLLGNBQ1Qsd0NBQ0E7d0JBRVJDLE9BQU87NEJBQUVDLFVBQVU7d0JBQWE7a0NBRS9CSixFQUFFSyxPQUFPOzs7Ozs7Ozs7OztlQXZCVEo7Ozs7Ozs7Ozs7QUE4QmY7S0F0Q01QO0FBd0NOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvTWVzc2FnZUxpc3QudHN4P2RiMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcImFpXCI7XG5cbmludGVyZmFjZSBNZXNzYWdlTGlzdFByb3BzIHtcbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXTtcbiAgaXNNb2JpbGVNb2RlOiBib29sZWFuO1xufVxuXG5jb25zdCBNZXNzYWdlTGlzdDogUmVhY3QuRkM8TWVzc2FnZUxpc3RQcm9wcz4gPSAoe1xuICBtZXNzYWdlcyxcbiAgaXNNb2JpbGVNb2RlLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsXCI+XG4gICAgICB7bWVzc2FnZXM/Lm1hcCgobSwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgbWItNCBmbGV4IGl0ZW1zLXN0YXJ0IHdoaXRlc3BhY2UtcHJlLXdyYXAgJHtcbiAgICAgICAgICAgIG0ucm9sZSA9PT0gXCJhc3Npc3RhbnRcIiA/IFwianVzdGlmeS1lbmRcIiA6IFwiXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgIGlzTW9iaWxlTW9kZSA/IFwiXCIgOiBcIm1heC13LVsyMHZ3XVwiXG4gICAgICAgICAgICB9IHJlbGF0aXZlIGZsZXggaXRlbXMtc3RhcnRgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsvKiB7bS5yb2xlID09PSBcImFzc2lzdGFudFwiICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgdG9wLTFcIj5JQ09OPC9kaXY+XG4gICAgICAgICAgICApfSAqL31cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC1sZyBwLTIgdGV4dC1zbSAke1xuICAgICAgICAgICAgICAgIG0ucm9sZSA9PT0gXCJ1c2VyXCJcbiAgICAgICAgICAgICAgICAgID8gXCJiZy1wcmltYXJ5IHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgOiBtLnJvbGUgPT09IFwiYXNzaXN0YW50XCJcbiAgICAgICAgICAgICAgICAgICAgPyBcIm1sLVs0NHB4XSBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIm1heC13LVsxMDAlXSBiZy1wdXJwbGUtMTAwIHRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgd29yZFdyYXA6IFwiYnJlYWstd29yZFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHttLmNvbnRlbnR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWVzc2FnZUxpc3QiLCJtZXNzYWdlcyIsImlzTW9iaWxlTW9kZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIm0iLCJpbmRleCIsInJvbGUiLCJzdHlsZSIsIndvcmRXcmFwIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/MessageList.tsx\n"));

/***/ })

});