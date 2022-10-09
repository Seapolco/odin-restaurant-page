/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import homepage from './home-page';\n\n\n// homepage();\n\nconsole.log('Hungry?');\n\n\nconst elementFactory = function(type, attributes, ...children) {\n\n    const el = document.createElement(type);\n\n    if(attributes) {\n        for(key in attributes) {\n            el.setAttribute(key, attributes[key]);\n    \n        }\n    }\n\n\n\n    if(children) {\n        children.forEach(child => {\n            if (typeof child === 'string') {\n              el.appendChild(document.createTextNode(child))\n            } else {\n              el.appendChild(child)\n            }\n          })\n    }\n\n\n\n    return el \n}\n\nlet rootContainer = elementFactory('div', {class:'root-container'});\n\nlet navBar = elementFactory(\n    'div', {class:'nav-bar'},\n        elementFactory(\n            'img',\n            {src: \"../src//images/pngfind.com-grilled-chicken-breast-png-4604394.png\",\n            class:\"nav-logo\"\n            }\n            ),\n        elementFactory('ul', {class:'nav-links'},\n            elementFactory('li',{}, 'Home'),\n            elementFactory('li',{}, 'Menu'),\n            elementFactory('li',{}, 'Contact')\n    )\n);\n\nlet mainContent = elementFactory(\n    'div', \n    {class:'main-content'},\n        elementFactory('div', {class:'hungry'}, 'Hungry?')\n);\n\n\n\n\ndocument.body.appendChild(rootContainer);\nrootContainer.appendChild(navBar);\nrootContainer.appendChild(mainContent);\n\n\n\n// let hello = document.createElement('div');\n// let text = document.createTextNode('hello');\n\n\n\n// hello.appendChild(text);\n\n// hello.setAttribute('class','blue');\n\n// document.body.appendChild(hello);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;