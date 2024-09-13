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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ \"(app-pages-browser)/./node_modules/react-markdown/lib/index.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var scoutos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! scoutos */ \"(app-pages-browser)/./node_modules/scoutos/index.js\");\n/* harmony import */ var scoutos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(scoutos__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const scout = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const streamedResponse = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    const [chatHistory, setChat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"STREAMED RESPONSE CHANGED ++ \");\n    }, [\n        streamedResponse.current\n    ]);\n    // const chatHistoryOutOfDate = chatHistory.find((chat, index) => chat !== streamedResponse.current[index])\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = \"secret_qb0nXpme6gZ5MLwOeoEvAa7Xuqf0o4s7pT-RiSu2xSw\";\n        const client = new scoutos__WEBPACK_IMPORTED_MODULE_3__.ScoutClient({\n            apiKey: token\n        });\n        scout.current = client;\n    }, []);\n    // console.log('chatHistoryOutOfDate!', chatHistoryOutOfDate)\n    // useEffect(() => {\n    //   console.log('hello?@ ++', chatHistoryOutOfDate)\n    // }, [chatHistoryOutOfDate])\n    const parseStreamEvent = (chunk, chatResponseIndex)=>{\n        var _chunk_data, _chunk_data1;\n        console.log(\"chunk!\", chunk);\n        const LLM_BLOCK_ID = \"llm_gjdajp\";\n        const blockEvent = chunk.name;\n        const blockId = chunk === null || chunk === void 0 ? void 0 : (_chunk_data = chunk.data) === null || _chunk_data === void 0 ? void 0 : _chunk_data.block_id;\n        const updateType = chunk === null || chunk === void 0 ? void 0 : (_chunk_data1 = chunk.data) === null || _chunk_data1 === void 0 ? void 0 : _chunk_data1.update_type;\n        if (blockEvent === \"app_run_started\") {\n            console.log(\"App Started\");\n        } else if (blockId === LLM_BLOCK_ID && blockEvent === \"block_state_updated\" && updateType === \"partial\") {\n            var _chunk_data_update_data, _chunk_data2;\n            const output = chunk === null || chunk === void 0 ? void 0 : (_chunk_data2 = chunk.data) === null || _chunk_data2 === void 0 ? void 0 : (_chunk_data_update_data = _chunk_data2.update_data) === null || _chunk_data_update_data === void 0 ? void 0 : _chunk_data_update_data.output;\n            streamedResponse.current[chatResponseIndex] += output;\n            setChat(streamedResponse.current);\n            console.log(\"setChat done\");\n        } else if (blockEvent === \"app_run_completed\") {\n            console.log(\"completed\", streamedResponse.current);\n            setChat(streamedResponse.current);\n        }\n    };\n    const handleButtonClick = async (e)=>{\n        var _e_target_;\n        e.preventDefault();\n        const userPrompt = (_e_target_ = e.target[0]) === null || _e_target_ === void 0 ? void 0 : _e_target_.value;\n        streamedResponse.current = streamedResponse.current.concat([\n            userPrompt,\n            \"\"\n        ]);\n        setChat(streamedResponse.current);\n        if (scout === null || scout === void 0 ? void 0 : scout.current) {\n            const workflowId = \"app_cm0x0jews000108s6n4axqb8h\";\n            const chatResponseIndex = streamedResponse.current.length - 1;\n            const stream = await scout.current.workflows.executeStream(workflowId, {\n                input: {\n                    prompt: userPrompt\n                }\n            });\n            for await (const chunk of stream){\n                parseStreamEvent(chunk, chatResponseIndex);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().page),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),\n                    children: \"Chatbot\"\n                }, void 0, false, {\n                    fileName: \"/Users/cameronmonaghan/Desktop/scoutos-sdk-ts/src/app/page.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/cameronmonaghan/Desktop/scoutos-sdk-ts/src/app/page.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().belly),\n                children: chatHistory.map((chat)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_4__.Markdown, {\n                        skipHtml: false,\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().convoChunk),\n                        children: chat\n                    }, void 0, false, {\n                        fileName: \"/Users/cameronmonaghan/Desktop/scoutos-sdk-ts/src/app/page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/cameronmonaghan/Desktop/scoutos-sdk-ts/src/app/page.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleButtonClick,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            rows: 6,\n                            title: \"prompt\",\n                            name: \"prompt\",\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().prompt)\n                        }, void 0, false, {\n                            fileName: \"/Users/cameronmonaghan/Desktop/scoutos-sdk-ts/src/app/page.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/cameronmonaghan/Desktop/scoutos-sdk-ts/src/app/page.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"submit\",\n                            name: \"Chat\",\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().button)\n                        }, void 0, false, {\n                            fileName: \"/Users/cameronmonaghan/Desktop/scoutos-sdk-ts/src/app/page.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/cameronmonaghan/Desktop/scoutos-sdk-ts/src/app/page.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/cameronmonaghan/Desktop/scoutos-sdk-ts/src/app/page.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cameronmonaghan/Desktop/scoutos-sdk-ts/src/app/page.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"7Djrj8HIo/ko9RhffM+U7zC90yI=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ3dDO2dCQUFJQyxXQUFXekMsK0RBQVk7MEJBQ3pCSyxZQUFZeUMsR0FBRyxDQUFDLENBQUNDLHFCQUNoQiw4REFBQ2hELG9EQUFhQTt3QkFBQ2lELFVBQVU7d0JBQU9QLFdBQVd6QyxvRUFBaUI7a0NBQ3pEK0M7Ozs7Ozs7Ozs7OzBCQUlQLDhEQUFDUDtnQkFBSUMsV0FBV3pDLGdFQUFhOzBCQUMzQiw0RUFBQ21EO29CQUFLQyxVQUFVMUI7O3NDQUNkLDhEQUFDMkI7NEJBQVNDLE1BQU07NEJBQUdDLE9BQU07NEJBQVNyQyxNQUFLOzRCQUFTdUIsV0FBV3pDLGdFQUFhOzs7Ozs7c0NBQ3hFLDhEQUFDd0Q7Ozs7O3NDQUNELDhEQUFDbEI7NEJBQU1tQixNQUFLOzRCQUFTdkMsTUFBSzs0QkFBT3VCLFdBQVd6QyxnRUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkU7R0FsRndCRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgU3ludGhldGljRXZlbnQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IFNjb3V0Q2xpZW50IH0gZnJvbSBcInNjb3V0b3NcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IHNjb3V0ID0gdXNlUmVmPFNjb3V0Q2xpZW50IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IHN0cmVhbWVkUmVzcG9uc2UgPSB1c2VSZWY8c3RyaW5nW10+KFtdKTtcbiAgY29uc3QgW2NoYXRIaXN0b3J5LCBzZXRDaGF0XSA9IHVzZVN0YXRlKFtdIGFzIHN0cmluZ1tdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTVFJFQU1FRCBSRVNQT05TRSBDSEFOR0VEICsrIFwiKVxuICB9LCBbc3RyZWFtZWRSZXNwb25zZS5jdXJyZW50XSlcblxuICAvLyBjb25zdCBjaGF0SGlzdG9yeU91dE9mRGF0ZSA9IGNoYXRIaXN0b3J5LmZpbmQoKGNoYXQsIGluZGV4KSA9PiBjaGF0ICE9PSBzdHJlYW1lZFJlc3BvbnNlLmN1cnJlbnRbaW5kZXhdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSAnc2VjcmV0X3FiMG5YcG1lNmdaNU1Md09lb0V2QWE3WHVxZjBvNHM3cFQtUmlTdTJ4U3cnXG4gICAgY29uc3QgY2xpZW50ID0gbmV3IFNjb3V0Q2xpZW50KHsgYXBpS2V5OiB0b2tlbiB9KTtcbiAgICBzY291dC5jdXJyZW50ID0gY2xpZW50O1xuICB9LCBbXSlcbiAgLy8gY29uc29sZS5sb2coJ2NoYXRIaXN0b3J5T3V0T2ZEYXRlIScsIGNoYXRIaXN0b3J5T3V0T2ZEYXRlKVxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKCdoZWxsbz9AICsrJywgY2hhdEhpc3RvcnlPdXRPZkRhdGUpXG4gIC8vIH0sIFtjaGF0SGlzdG9yeU91dE9mRGF0ZV0pXG5cbiAgY29uc3QgcGFyc2VTdHJlYW1FdmVudCA9IChjaHVuazogYW55LCBjaGF0UmVzcG9uc2VJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2NodW5rIScsIGNodW5rKVxuICAgIGNvbnN0IExMTV9CTE9DS19JRCA9ICdsbG1fZ2pkYWpwJ1xuICAgIGNvbnN0IGJsb2NrRXZlbnQgPSBjaHVuay5uYW1lXG4gICAgY29uc3QgYmxvY2tJZCA9IGNodW5rPy5kYXRhPy5ibG9ja19pZFxuICAgIGNvbnN0IHVwZGF0ZVR5cGUgPSBjaHVuaz8uZGF0YT8udXBkYXRlX3R5cGVcbiAgICBpZiAoYmxvY2tFdmVudCA9PT0gJ2FwcF9ydW5fc3RhcnRlZCcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQXBwIFN0YXJ0ZWRcIilcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgYmxvY2tJZCA9PT0gTExNX0JMT0NLX0lEICYmIFxuICAgICAgYmxvY2tFdmVudCA9PT0gJ2Jsb2NrX3N0YXRlX3VwZGF0ZWQnICYmIFxuICAgICAgdXBkYXRlVHlwZSA9PT0gJ3BhcnRpYWwnXG4gICAgKSB7XG4gICAgICBjb25zdCBvdXRwdXQgPSBjaHVuaz8uZGF0YT8udXBkYXRlX2RhdGE/Lm91dHB1dFxuICAgICAgc3RyZWFtZWRSZXNwb25zZS5jdXJyZW50W2NoYXRSZXNwb25zZUluZGV4XSArPSBvdXRwdXRcbiAgICAgIHNldENoYXQoc3RyZWFtZWRSZXNwb25zZS5jdXJyZW50KVxuICAgICAgY29uc29sZS5sb2coXCJzZXRDaGF0IGRvbmVcIilcbiAgICB9IGVsc2UgaWYgKGJsb2NrRXZlbnQgPT09ICdhcHBfcnVuX2NvbXBsZXRlZCcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdjb21wbGV0ZWQnLCBzdHJlYW1lZFJlc3BvbnNlLmN1cnJlbnQpXG4gICAgICBzZXRDaGF0KHN0cmVhbWVkUmVzcG9uc2UuY3VycmVudClcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9IGFzeW5jIChlOiBTeW50aGV0aWNFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHVzZXJQcm9tcHQgPSBlLnRhcmdldFswXT8udmFsdWVcbiAgICBzdHJlYW1lZFJlc3BvbnNlLmN1cnJlbnQgPSBzdHJlYW1lZFJlc3BvbnNlLmN1cnJlbnQuY29uY2F0KFt1c2VyUHJvbXB0LCAnJ10pXG4gICAgc2V0Q2hhdChzdHJlYW1lZFJlc3BvbnNlLmN1cnJlbnQpXG4gICAgaWYgKHNjb3V0Py5jdXJyZW50KSB7XG4gICAgICBjb25zdCB3b3JrZmxvd0lkID0gJ2FwcF9jbTB4MGpld3MwMDAxMDhzNm40YXhxYjhoJ1xuICAgICAgY29uc3QgY2hhdFJlc3BvbnNlSW5kZXggPSBzdHJlYW1lZFJlc3BvbnNlLmN1cnJlbnQubGVuZ3RoIC0gMVxuICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgc2NvdXQuY3VycmVudC53b3JrZmxvd3MuZXhlY3V0ZVN0cmVhbSh3b3JrZmxvd0lkLCB7XG4gICAgICAgIGlucHV0OiB7IHByb21wdDogdXNlclByb21wdCB9LFxuICAgICAgfSk7XG4gICAgICBmb3IgYXdhaXQgKGNvbnN0IGNodW5rIG9mIHN0cmVhbSkge1xuICAgICAgICBwYXJzZVN0cmVhbUV2ZW50KGNodW5rLCBjaGF0UmVzcG9uc2VJbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2V9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+Q2hhdGJvdDwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmVsbHl9PlxuICAgICAgICB7Y2hhdEhpc3RvcnkubWFwKChjaGF0OiBzdHJpbmcpID0+XG4gICAgICAgICAgPFJlYWN0TWFya2Rvd24gc2tpcEh0bWw9e2ZhbHNlfSBjbGFzc05hbWU9e3N0eWxlcy5jb252b0NodW5rfT5cbiAgICAgICAgICAgIHtjaGF0fVxuICAgICAgICAgIDwvUmVhY3RNYXJrZG93bj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlQnV0dG9uQ2xpY2t9PlxuICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPXs2fSB0aXRsZT1cInByb21wdFwiIG5hbWU9XCJwcm9tcHRcIiBjbGFzc05hbWU9e3N0eWxlcy5wcm9tcHR9IC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwiQ2hhdFwiIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJSZWFjdE1hcmtkb3duIiwic3R5bGVzIiwiU2NvdXRDbGllbnQiLCJIb21lIiwic2NvdXQiLCJzdHJlYW1lZFJlc3BvbnNlIiwiY2hhdEhpc3RvcnkiLCJzZXRDaGF0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJ0b2tlbiIsImNsaWVudCIsImFwaUtleSIsInBhcnNlU3RyZWFtRXZlbnQiLCJjaHVuayIsImNoYXRSZXNwb25zZUluZGV4IiwiTExNX0JMT0NLX0lEIiwiYmxvY2tFdmVudCIsIm5hbWUiLCJibG9ja0lkIiwiZGF0YSIsImJsb2NrX2lkIiwidXBkYXRlVHlwZSIsInVwZGF0ZV90eXBlIiwib3V0cHV0IiwidXBkYXRlX2RhdGEiLCJoYW5kbGVCdXR0b25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJQcm9tcHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbmNhdCIsIndvcmtmbG93SWQiLCJsZW5ndGgiLCJzdHJlYW0iLCJ3b3JrZmxvd3MiLCJleGVjdXRlU3RyZWFtIiwiaW5wdXQiLCJwcm9tcHQiLCJkaXYiLCJjbGFzc05hbWUiLCJwYWdlIiwiaDMiLCJoZWFkZXIiLCJiZWxseSIsIm1hcCIsImNoYXQiLCJza2lwSHRtbCIsImNvbnZvQ2h1bmsiLCJmb290ZXIiLCJmb3JtIiwib25TdWJtaXQiLCJ0ZXh0YXJlYSIsInJvd3MiLCJ0aXRsZSIsImJyIiwidHlwZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});