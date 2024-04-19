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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.2_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.2_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MessageList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/MessageList */ \"(app-pages-browser)/./src/app/_components/MessageList.tsx\");\n/* harmony import */ var _components_ChatTextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components/ChatTextInput */ \"(app-pages-browser)/./src/app/_components/ChatTextInput.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const userMessages = [\n        {\n            id: \"2id\",\n            role: \"user\",\n            content: \"I need to update the schedule for Nurse #2.\"\n        },\n        {\n            id: \"4id\",\n            role: \"user\",\n            content: \"John C. will be available from 10am to 5pm on Monday.\"\n        }\n    ];\n    const assistantMessages = [\n        {\n            id: \"1id\",\n            role: \"assistant\",\n            content: \"Hello, how can I assist you with the scheduling today?\"\n        },\n        {\n            id: \"3id\",\n            role: \"assistant\",\n            content: \"Sure, what is the update?\"\n        }\n    ];\n    const [messages, setMessages] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([\n        {\n            id: \"1id\",\n            role: \"assistant\",\n            content: \"Hello, how can I assist you with the scheduling today?\"\n        }\n    ]);\n    const [input, setInput] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const handleInputSubmit = ()=>{\n        if (input.trim() !== \"\") {\n            // Find the next user message that hasn't been added to messages yet\n            const nextUserMessage = userMessages.find((userMsg)=>!messages.some((msg)=>msg.id === userMsg.id));\n            // Find the next assistant message that hasn't been added to messages yet\n            const nextAssistantMessage = assistantMessages.find((assistantMsg)=>!messages.some((msg)=>msg.id === assistantMsg.id));\n            if (nextUserMessage) {\n                // Add the next user message to the messages\n                setMessages((prevMessages)=>[\n                        ...prevMessages,\n                        nextUserMessage\n                    ]);\n                // Set loading to true\n                setIsLoading(true);\n                // Wait for 2 seconds before adding the assistant message\n                setTimeout(()=>{\n                    if (nextAssistantMessage) {\n                        setMessages((prevMessages)=>[\n                                ...prevMessages,\n                                nextAssistantMessage\n                            ]);\n                    }\n                    setIsLoading(false);\n                }, 2000);\n            }\n            // Clear the input field\n            setInput(\"\");\n        }\n    };\n    const handleInputChange = (event)=>{\n        setInput(event.target.value);\n    };\n    // Mock data for the calendar\n    const calendarData = {\n        Physician: {\n            Monday: {\n                name: \"Marcus A.\",\n                time: \"8am-2pm\"\n            },\n            Tuesday: \"\",\n            Wednesday: \"\"\n        },\n        \"Nurse #1\": {\n            Monday: \"\",\n            Tuesday: {\n                name: \"Linda B.\",\n                time: \"9am-3pm\"\n            },\n            Wednesday: \"\"\n        },\n        \"Nurse #2\": {\n            Monday: {\n                name: \"John C.\",\n                time: \"10am-4pm\"\n            },\n            Tuesday: \"\",\n            Wednesday: \"\"\n        },\n        \"Nurse #3\": {\n            Monday: \"\",\n            Tuesday: \"\",\n            Wednesday: {\n                name: \"Emily D.\",\n                time: \"11am-5pm\"\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex h-full bg-gray-200\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex h-full w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow-aut flex w-1/4 flex-col bg-white p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-grow overflow-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MessageList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                messages: messages,\n                                isMobileMode: false\n                            }, void 0, false, {\n                                fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/page.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/page.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ChatTextInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            input: input,\n                            handleInputChange: handleInputChange,\n                            handleInputSubmit: handleInputSubmit,\n                            isLoading: isLoading,\n                            isMobileMode: false\n                        }, void 0, false, {\n                            fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/page.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/page.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-full w-3/4 bg-white p-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: \"h-full w-full table-fixed border-collapse border border-gray-300\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"w-1/4 rounded-tl-lg bg-gray-100 p-4 text-center font-bold\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/page.tsx\",\n                                            lineNumber: 126,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"w-1/4 border border-gray-300 bg-white p-4 text-center\",\n                                            children: \"Monday\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/page.tsx\",\n                                            lineNumber: 127,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"w-1/4 border border-gray-300 bg-gray-100 p-4 text-center\",\n                                            children: \"Tuesday\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/page.tsx\",\n                                            lineNumber: 130,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"w-1/4 rounded-tr-lg border border-gray-300 bg-white p-4 text-center\",\n                                            children: \"Wednesday\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/page.tsx\",\n                                            lineNumber: 133,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/page.tsx\",\n                                    lineNumber: 125,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/page.tsx\",\n                                lineNumber: 124,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: Object.entries(calendarData).map((param)=>{\n                                    let [role, days] = param;\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"border border-gray-300 bg-gray-100 p-4 text-center font-bold\",\n                                                children: role\n                                            }, void 0, false, {\n                                                fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/page.tsx\",\n                                                lineNumber: 141,\n                                                columnNumber: 19\n                                            }, this),\n                                            Object.entries(days).map((param, index)=>{\n                                                let [day, shift] = param;\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    className: \"border border-gray-300 p-4 text-center \".concat(index % 2 === 0 ? \"bg-white\" : \"bg-gray-100\"),\n                                                    children: typeof shift === \"object\" && shift.name && shift.time ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"h-16 rounded-md border-2 border-blue-500 bg-white p-2 shadow-sm\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                children: shift.name\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/page.tsx\",\n                                                                lineNumber: 151,\n                                                                columnNumber: 27\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                children: shift.time\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/page.tsx\",\n                                                                lineNumber: 152,\n                                                                columnNumber: 27\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/page.tsx\",\n                                                        lineNumber: 150,\n                                                        columnNumber: 25\n                                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"h-16 rounded-md  border-gray-300 p-2 shadow-sm\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/page.tsx\",\n                                                        lineNumber: 155,\n                                                        columnNumber: 25\n                                                    }, this)\n                                                }, day, false, {\n                                                    fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/page.tsx\",\n                                                    lineNumber: 145,\n                                                    columnNumber: 21\n                                                }, this);\n                                            })\n                                        ]\n                                    }, role, true, {\n                                        fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/page.tsx\",\n                                        lineNumber: 140,\n                                        columnNumber: 17\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/page.tsx\",\n                                lineNumber: 138,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/page.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/page.tsx\",\n                    lineNumber: 122,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/page.tsx\",\n            lineNumber: 106,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/baovan/Documents/Harvi/ai-scheduler/src/app/page.tsx\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"X6/aKdh8KAXfctDBwENVf8OV3Ow=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDRFQUFDRzt3QkFBTUgsV0FBVTs7MENBQ2YsOERBQUNJOzBDQUNDLDRFQUFDQzs7c0RBQ0MsOERBQUNDOzRDQUFHTixXQUFVOzs7Ozs7c0RBQ2QsOERBQUNNOzRDQUFHTixXQUFVO3NEQUF3RDs7Ozs7O3NEQUd0RSw4REFBQ007NENBQUdOLFdBQVU7c0RBQTJEOzs7Ozs7c0RBR3pFLDhEQUFDTTs0Q0FBR04sV0FBVTtzREFBc0U7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUt4Riw4REFBQ087MENBQ0VDLE9BQU9DLE9BQU8sQ0FBQ2pCLGNBQWNrQixHQUFHLENBQUM7d0NBQUMsQ0FBQzNDLE1BQU00QyxLQUFLO3lEQUM3Qyw4REFBQ047OzBEQUNDLDhEQUFDTztnREFBR1osV0FBVTswREFDWGpDOzs7Ozs7NENBRUZ5QyxPQUFPQyxPQUFPLENBQUNFLE1BQU1ELEdBQUcsQ0FBQyxRQUFlRztvREFBZCxDQUFDQyxLQUFLQyxNQUFNO3FFQUNyQyw4REFBQ0g7b0RBRUNaLFdBQVcsMENBQXVGLE9BQTdDYSxRQUFRLE1BQU0sSUFBSSxhQUFhOzhEQUVuRixPQUFPRSxVQUFVLFlBQVlBLE1BQU1wQixJQUFJLElBQUlvQixNQUFNbkIsSUFBSSxpQkFDcEQsOERBQUNLO3dEQUFJRCxXQUFVOzswRUFDYiw4REFBQ0M7MEVBQUtjLE1BQU1wQixJQUFJOzs7Ozs7MEVBQ2hCLDhEQUFDTTswRUFBS2MsTUFBTW5CLElBQUk7Ozs7Ozs7Ozs7OzZFQUdsQiw4REFBQ0s7d0RBQUlELFdBQVU7Ozs7OzttREFUWmM7Ozs7Ozs7dUNBTkYvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJ6QjtHQWhLd0JIO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNZXNzYWdlTGlzdCBmcm9tIFwiLi9fY29tcG9uZW50cy9NZXNzYWdlTGlzdFwiO1xuaW1wb3J0IENoYXRUZXh0SW5wdXQgZnJvbSBcIi4vX2NvbXBvbmVudHMvQ2hhdFRleHRJbnB1dFwiO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCJhaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB1c2VyTWVzc2FnZXM6IE1lc3NhZ2VbXSA9IFtcbiAgICB7XG4gICAgICBpZDogXCIyaWRcIixcbiAgICAgIHJvbGU6IFwidXNlclwiLFxuICAgICAgY29udGVudDogXCJJIG5lZWQgdG8gdXBkYXRlIHRoZSBzY2hlZHVsZSBmb3IgTnVyc2UgIzIuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCI0aWRcIixcbiAgICAgIHJvbGU6IFwidXNlclwiLFxuICAgICAgY29udGVudDogXCJKb2huIEMuIHdpbGwgYmUgYXZhaWxhYmxlIGZyb20gMTBhbSB0byA1cG0gb24gTW9uZGF5LlwiLFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IGFzc2lzdGFudE1lc3NhZ2VzOiBNZXNzYWdlW10gPSBbXG4gICAge1xuICAgICAgaWQ6IFwiMWlkXCIsXG4gICAgICByb2xlOiBcImFzc2lzdGFudFwiLFxuICAgICAgY29udGVudDogXCJIZWxsbywgaG93IGNhbiBJIGFzc2lzdCB5b3Ugd2l0aCB0aGUgc2NoZWR1bGluZyB0b2RheT9cIixcbiAgICB9LFxuICAgIHsgaWQ6IFwiM2lkXCIsIHJvbGU6IFwiYXNzaXN0YW50XCIsIGNvbnRlbnQ6IFwiU3VyZSwgd2hhdCBpcyB0aGUgdXBkYXRlP1wiIH0sXG4gIF07XG5cbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSBSZWFjdC51c2VTdGF0ZTxNZXNzYWdlW10+KFtcbiAgICB7XG4gICAgICBpZDogXCIxaWRcIixcbiAgICAgIHJvbGU6IFwiYXNzaXN0YW50XCIsXG4gICAgICBjb250ZW50OiBcIkhlbGxvLCBob3cgY2FuIEkgYXNzaXN0IHlvdSB3aXRoIHRoZSBzY2hlZHVsaW5nIHRvZGF5P1wiLFxuICAgIH0sXG4gIF0pO1xuXG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRTdWJtaXQgPSAoKSA9PiB7XG4gICAgaWYgKGlucHV0LnRyaW0oKSAhPT0gXCJcIikge1xuICAgICAgLy8gRmluZCB0aGUgbmV4dCB1c2VyIG1lc3NhZ2UgdGhhdCBoYXNuJ3QgYmVlbiBhZGRlZCB0byBtZXNzYWdlcyB5ZXRcbiAgICAgIGNvbnN0IG5leHRVc2VyTWVzc2FnZSA9IHVzZXJNZXNzYWdlcy5maW5kKFxuICAgICAgICAodXNlck1zZykgPT4gIW1lc3NhZ2VzLnNvbWUoKG1zZykgPT4gbXNnLmlkID09PSB1c2VyTXNnLmlkKSxcbiAgICAgICk7XG5cbiAgICAgIC8vIEZpbmQgdGhlIG5leHQgYXNzaXN0YW50IG1lc3NhZ2UgdGhhdCBoYXNuJ3QgYmVlbiBhZGRlZCB0byBtZXNzYWdlcyB5ZXRcbiAgICAgIGNvbnN0IG5leHRBc3Npc3RhbnRNZXNzYWdlID0gYXNzaXN0YW50TWVzc2FnZXMuZmluZChcbiAgICAgICAgKGFzc2lzdGFudE1zZykgPT4gIW1lc3NhZ2VzLnNvbWUoKG1zZykgPT4gbXNnLmlkID09PSBhc3Npc3RhbnRNc2cuaWQpLFxuICAgICAgKTtcblxuICAgICAgaWYgKG5leHRVc2VyTWVzc2FnZSkge1xuICAgICAgICAvLyBBZGQgdGhlIG5leHQgdXNlciBtZXNzYWdlIHRvIHRoZSBtZXNzYWdlc1xuICAgICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbLi4ucHJldk1lc3NhZ2VzLCBuZXh0VXNlck1lc3NhZ2VdKTtcblxuICAgICAgICAvLyBTZXQgbG9hZGluZyB0byB0cnVlXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAgICAgICAvLyBXYWl0IGZvciAyIHNlY29uZHMgYmVmb3JlIGFkZGluZyB0aGUgYXNzaXN0YW50IG1lc3NhZ2VcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKG5leHRBc3Npc3RhbnRNZXNzYWdlKSB7XG4gICAgICAgICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbXG4gICAgICAgICAgICAgIC4uLnByZXZNZXNzYWdlcyxcbiAgICAgICAgICAgICAgbmV4dEFzc2lzdGFudE1lc3NhZ2UsXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgICB9XG5cbiAgICAgIC8vIENsZWFyIHRoZSBpbnB1dCBmaWVsZFxuICAgICAgc2V0SW5wdXQoXCJcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xuICAgIHNldElucHV0KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgLy8gTW9jayBkYXRhIGZvciB0aGUgY2FsZW5kYXJcbiAgY29uc3QgY2FsZW5kYXJEYXRhID0ge1xuICAgIFBoeXNpY2lhbjoge1xuICAgICAgTW9uZGF5OiB7IG5hbWU6IFwiTWFyY3VzIEEuXCIsIHRpbWU6IFwiOGFtLTJwbVwiIH0sXG4gICAgICBUdWVzZGF5OiBcIlwiLFxuICAgICAgV2VkbmVzZGF5OiBcIlwiLFxuICAgIH0sXG4gICAgXCJOdXJzZSAjMVwiOiB7XG4gICAgICBNb25kYXk6IFwiXCIsXG4gICAgICBUdWVzZGF5OiB7IG5hbWU6IFwiTGluZGEgQi5cIiwgdGltZTogXCI5YW0tM3BtXCIgfSxcbiAgICAgIFdlZG5lc2RheTogXCJcIixcbiAgICB9LFxuICAgIFwiTnVyc2UgIzJcIjoge1xuICAgICAgTW9uZGF5OiB7IG5hbWU6IFwiSm9obiBDLlwiLCB0aW1lOiBcIjEwYW0tNHBtXCIgfSxcbiAgICAgIFR1ZXNkYXk6IFwiXCIsXG4gICAgICBXZWRuZXNkYXk6IFwiXCIsXG4gICAgfSxcbiAgICBcIk51cnNlICMzXCI6IHtcbiAgICAgIE1vbmRheTogXCJcIixcbiAgICAgIFR1ZXNkYXk6IFwiXCIsXG4gICAgICBXZWRuZXNkYXk6IHsgbmFtZTogXCJFbWlseSBELlwiLCB0aW1lOiBcIjExYW0tNXBtXCIgfSxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGwgYmctZ3JheS0yMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGwgdy1mdWxsXCI+XG4gICAgICAgIHsvKiBDaGF0IGludGVyZmFjZSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1hdXQgZmxleCB3LTEvNCBmbGV4LWNvbCBiZy13aGl0ZSBwLTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBvdmVyZmxvdy1hdXRvXCI+XG4gICAgICAgICAgICA8TWVzc2FnZUxpc3QgbWVzc2FnZXM9e21lc3NhZ2VzfSBpc01vYmlsZU1vZGU9e2ZhbHNlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxDaGF0VGV4dElucHV0XG4gICAgICAgICAgICBpbnB1dD17aW5wdXR9XG4gICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICBoYW5kbGVJbnB1dFN1Ym1pdD17aGFuZGxlSW5wdXRTdWJtaXR9XG4gICAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cbiAgICAgICAgICAgIGlzTW9iaWxlTW9kZT17ZmFsc2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIENhbGVuZGFyIHRhYmxlIHZpZXcgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctMy80IGJnLXdoaXRlIHAtNFwiPlxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHRhYmxlLWZpeGVkIGJvcmRlci1jb2xsYXBzZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidy0xLzQgcm91bmRlZC10bC1sZyBiZy1ncmF5LTEwMCBwLTQgdGV4dC1jZW50ZXIgZm9udC1ib2xkXCI+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidy0xLzQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBiZy13aGl0ZSBwLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIE1vbmRheVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInctMS80IGJvcmRlciBib3JkZXItZ3JheS0zMDAgYmctZ3JheS0xMDAgcC00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICBUdWVzZGF5XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidy0xLzQgcm91bmRlZC10ci1sZyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLXdoaXRlIHAtNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgV2VkbmVzZGF5XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhjYWxlbmRhckRhdGEpLm1hcCgoW3JvbGUsIGRheXNdKSA9PiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17cm9sZX0+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBiZy1ncmF5LTEwMCBwLTQgdGV4dC1jZW50ZXIgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgIHtyb2xlfVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhkYXlzKS5tYXAoKFtkYXksIHNoaWZ0XSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtkYXl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTQgdGV4dC1jZW50ZXIgJHtpbmRleCAlIDIgPT09IDAgPyBcImJnLXdoaXRlXCIgOiBcImJnLWdyYXktMTAwXCJ9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2Ygc2hpZnQgPT09IFwib2JqZWN0XCIgJiYgc2hpZnQubmFtZSAmJiBzaGlmdC50aW1lID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTE2IHJvdW5kZWQtbWQgYm9yZGVyLTIgYm9yZGVyLWJsdWUtNTAwIGJnLXdoaXRlIHAtMiBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57c2hpZnQubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57c2hpZnQudGltZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTYgcm91bmRlZC1tZCAgYm9yZGVyLWdyYXktMzAwIHAtMiBzaGFkb3ctc21cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWVzc2FnZUxpc3QiLCJDaGF0VGV4dElucHV0IiwiSG9tZSIsInVzZXJNZXNzYWdlcyIsImlkIiwicm9sZSIsImNvbnRlbnQiLCJhc3Npc3RhbnRNZXNzYWdlcyIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJ1c2VTdGF0ZSIsImlucHV0Iiwic2V0SW5wdXQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJoYW5kbGVJbnB1dFN1Ym1pdCIsInRyaW0iLCJuZXh0VXNlck1lc3NhZ2UiLCJmaW5kIiwidXNlck1zZyIsInNvbWUiLCJtc2ciLCJuZXh0QXNzaXN0YW50TWVzc2FnZSIsImFzc2lzdGFudE1zZyIsInByZXZNZXNzYWdlcyIsInNldFRpbWVvdXQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJjYWxlbmRhckRhdGEiLCJQaHlzaWNpYW4iLCJNb25kYXkiLCJuYW1lIiwidGltZSIsIlR1ZXNkYXkiLCJXZWRuZXNkYXkiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaXNNb2JpbGVNb2RlIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJkYXlzIiwidGQiLCJpbmRleCIsImRheSIsInNoaWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});