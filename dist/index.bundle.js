"use strict";
(self["webpackChunktodo_list_webpack"] = self["webpackChunktodo_list_webpack"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-size: 16px;\n  font-weight: 300;\n  box-sizing: border-box;\n  font-family: Roboto, sans-serif;\n\n  --light-gray: #f6f6f6;\n  --medium-gray: #c1c1c3;\n  --dark: #d0cdcd;\n  --black: #000;\n  --white: #fff;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  background-color: var(--light-gray);\n}\n\nh1 {\n  font-weight: 600;\n}\n\n.link {\n  cursor: pointer;\n}\n\n.todos {\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);\n  margin: 0 auto;\n  top: 0;\n  max-width: 500px;\n  width: 100%;\n  transition: margin 300ms ease-in-out;\n  position: relative;\n  min-width: 0;\n}\n\n.todos .todo-button {\n  display: flex;\n  align-items: center;\n  padding: 20px 5%;\n}\n\n.todos .todo-head {\n  height: 50px;\n  display: flex;\n  padding: 0 15px;\n  align-items: center;\n  background-color: var(--light-gray);\n  border-bottom: 1px solid rgb(0 0 0 / 8%);\n}\n\n.todos .todo-head .icon {\n  margin-left: auto;\n}\n\n.todos .todo-button span {\n  width: 100%;\n  text-align: center;\n}\n\n.todos .todo-wrapper {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.todos .add-task {\n  width: 100%;\n  height: 50px;\n  padding-right: 15px;\n  background-color: var(--white);\n}\n\n.todos .add-task,\n.todos .add-task label,\n.todos .add-task label input {\n  width: 100%;\n  outline: none;\n  border: none;\n  display: flex;\n}\n\n.todos .add-task label {\n  padding: 6px 0;\n  background-color: var(--white);\n  border-bottom: 1px solid rgb(0 0 0 / 8%);\n}\n\n.todos .add-task label button {\n  border: none;\n  background-color: var(--white);\n}\n\n.todos .add-task label input {\n  padding-left: 15px;\n  font-style: italic;\n}\n\n.todos .todo-wrapper .todo-item {\n  width: 100%;\n  display: flex;\n  border-bottom: 1px solid rgb(0 0 0 / 8%);\n}\n\n.todo-item .item-wrapper {\n  display: flex;\n  width: 100%;\n  background: var(--white);\n}\n\n.todo-item .todo {\n  display: flex;\n  width: 100%;\n}\n\n.todo-item .todo .todo-check {\n  padding: 0 15px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  font-size: 22px;\n  user-select: none;\n}\n\n.todo-item .todo .todo-check input {\n  display: none;\n}\n\n.todo-item .todo .todo-check .checkmark {\n  width: 22px;\n  height: 22px;\n  display: block;\n  position: relative;\n  border: 1.5px solid var(--medium-gray);\n}\n\n.todo-item .todo .todo-title {\n  line-height: 25px;\n  padding-right: 10px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  word-break: break-all;\n  outline: none;\n  min-height: 50px;\n  resize: none;\n}\n\n.todo-item.completed .todo .todo-title {\n  line-height: 25px;\n  color: var(--dark);\n  text-decoration: line-through;\n}\n\n.todo-item.completed .todo .todo-check .checkmark {\n  border-color: var(--dark);\n}\n\n.todo-item .more .move,\n.todo-item .more .delete {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n\n.todo-item .more .move {\n  display: none;\n}\n\n.todo-item .more {\n  right: 0;\n  display: flex;\n  margin-left: auto;\n  margin-right: 15px;\n  position: relative;\n  align-items: center;\n}\n\n.checkmark::after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.todo-check .checkmark::after {\n  left: 7px;\n  top: 3px;\n  width: 4px;\n  height: 9px;\n  position: absolute;\n  border: solid var(--black);\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n\n.todo-check input[checked] ~ .checkmark::after {\n  display: block;\n}\n", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,+BAA+B;;EAE/B,qBAAqB;EACrB,sBAAsB;EACtB,eAAe;EACf,aAAa;EACb,aAAa;AACf;;AAEA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,mCAAmC;AACrC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;EAClB,sCAAsC;EACtC,cAAc;EACd,MAAM;EACN,gBAAgB;EAChB,WAAW;EACX,oCAAoC;EACpC,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,mCAAmC;EACnC,wCAAwC;AAC1C;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;;;EAGE,WAAW;EACX,aAAa;EACb,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,cAAc;EACd,8BAA8B;EAC9B,wCAAwC;AAC1C;;AAEA;EACE,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,WAAW;EACX,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,sCAAsC;AACxC;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,aAAa;EACb,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,QAAQ;EACR,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,SAAS;EACT,QAAQ;EACR,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,0BAA0B;EAC1B,yBAAyB;EACzB,wBAAwB;AAC1B;;AAEA;EACE,cAAc;AAChB","sourcesContent":["* {\n  font-size: 16px;\n  font-weight: 300;\n  box-sizing: border-box;\n  font-family: Roboto, sans-serif;\n\n  --light-gray: #f6f6f6;\n  --medium-gray: #c1c1c3;\n  --dark: #d0cdcd;\n  --black: #000;\n  --white: #fff;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  background-color: var(--light-gray);\n}\n\nh1 {\n  font-weight: 600;\n}\n\n.link {\n  cursor: pointer;\n}\n\n.todos {\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);\n  margin: 0 auto;\n  top: 0;\n  max-width: 500px;\n  width: 100%;\n  transition: margin 300ms ease-in-out;\n  position: relative;\n  min-width: 0;\n}\n\n.todos .todo-button {\n  display: flex;\n  align-items: center;\n  padding: 20px 5%;\n}\n\n.todos .todo-head {\n  height: 50px;\n  display: flex;\n  padding: 0 15px;\n  align-items: center;\n  background-color: var(--light-gray);\n  border-bottom: 1px solid rgb(0 0 0 / 8%);\n}\n\n.todos .todo-head .icon {\n  margin-left: auto;\n}\n\n.todos .todo-button span {\n  width: 100%;\n  text-align: center;\n}\n\n.todos .todo-wrapper {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.todos .add-task {\n  width: 100%;\n  height: 50px;\n  padding-right: 15px;\n  background-color: var(--white);\n}\n\n.todos .add-task,\n.todos .add-task label,\n.todos .add-task label input {\n  width: 100%;\n  outline: none;\n  border: none;\n  display: flex;\n}\n\n.todos .add-task label {\n  padding: 6px 0;\n  background-color: var(--white);\n  border-bottom: 1px solid rgb(0 0 0 / 8%);\n}\n\n.todos .add-task label button {\n  border: none;\n  background-color: var(--white);\n}\n\n.todos .add-task label input {\n  padding-left: 15px;\n  font-style: italic;\n}\n\n.todos .todo-wrapper .todo-item {\n  width: 100%;\n  display: flex;\n  border-bottom: 1px solid rgb(0 0 0 / 8%);\n}\n\n.todo-item .item-wrapper {\n  display: flex;\n  width: 100%;\n  background: var(--white);\n}\n\n.todo-item .todo {\n  display: flex;\n  width: 100%;\n}\n\n.todo-item .todo .todo-check {\n  padding: 0 15px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  font-size: 22px;\n  user-select: none;\n}\n\n.todo-item .todo .todo-check input {\n  display: none;\n}\n\n.todo-item .todo .todo-check .checkmark {\n  width: 22px;\n  height: 22px;\n  display: block;\n  position: relative;\n  border: 1.5px solid var(--medium-gray);\n}\n\n.todo-item .todo .todo-title {\n  line-height: 25px;\n  padding-right: 10px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  word-break: break-all;\n  outline: none;\n  min-height: 50px;\n  resize: none;\n}\n\n.todo-item.completed .todo .todo-title {\n  line-height: 25px;\n  color: var(--dark);\n  text-decoration: line-through;\n}\n\n.todo-item.completed .todo .todo-check .checkmark {\n  border-color: var(--dark);\n}\n\n.todo-item .more .move,\n.todo-item .more .delete {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n\n.todo-item .more .move {\n  display: none;\n}\n\n.todo-item .more {\n  right: 0;\n  display: flex;\n  margin-left: auto;\n  margin-right: 15px;\n  position: relative;\n  align-items: center;\n}\n\n.checkmark::after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.todo-check .checkmark::after {\n  left: 7px;\n  top: 3px;\n  width: 4px;\n  height: 9px;\n  position: absolute;\n  border: solid var(--black);\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n\n.todo-check input[checked] ~ .checkmark::after {\n  display: block;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_paint_ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/paint-ui.js */ "./src/modules/paint-ui.js");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/styles.css */ "./src/css/styles.css");



(0,_modules_paint_ui_js__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "./src/modules/components.js":
/*!***********************************!*\
  !*** ./src/modules/components.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateTodos": () => (/* binding */ generateTodos),
/* harmony export */   "returnHead": () => (/* binding */ returnHead),
/* harmony export */   "returnTodo": () => (/* binding */ returnTodo),
/* harmony export */   "returnTodoForm": () => (/* binding */ returnTodoForm)
/* harmony export */ });
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ "./src/modules/todos.js");


const returnTodo = (task) => {
  const completed = task.completed ? ' completed' : '';
  return `<article class="todo-item${completed}">
            <div class="item-wrapper">
                <div class="todo">
                    <label class="todo-check">
                        <input type="checkbox" data-id="${task.index}"
                        ${task.completed || task.selected ? 'checked' : ''}>
                        <span class="checkmark"></span>
                    </label>
                    <div class="todo-title" data-id=${
  task.index
} contentEditable>${task.description}</div>
                </div>
                <div class="more">
                    <div class="move link">
                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5Z"
                                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z"
                                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19Z"
                                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div class="delete link" onclick="removeTodo(this)" data-id="${
  task.index
}">
                        <svg fill="#000000" height="25px" width="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60.167 60.167" xml:space="preserve">
                            <path d="M54.5,11.667H39.88V3.91c0-2.156-1.754-3.91-3.91-3.91H24.196c-2.156,0-3.91,1.754-3.91,3.91v7.756H5.667
                            c-0.552,0-1,0.448-1,1s0.448,1,1,1h2.042v40.5c0,3.309,2.691,6,6,6h32.75c3.309,0,6-2.691,6-6v-40.5H54.5c0.552,0,1-0.448,1-1
                            S55.052,11.667,54.5,11.667z M22.286,3.91c0-1.053,0.857-1.91,1.91-1.91H35.97c1.053,0,1.91,0.857,1.91,1.91v7.756H22.286V3.91z
                                M50.458,54.167c0,2.206-1.794,4-4,4h-32.75c-2.206,0-4-1.794-4-4v-40.5h40.75V54.167z M38.255,46.153V22.847c0-0.552,0.448-1,1-1
                            s1,0.448,1,1v23.306c0,0.552-0.448,1-1,1S38.255,46.706,38.255,46.153z M29.083,46.153V22.847c0-0.552,0.448-1,1-1s1,0.448,1,1
                            v23.306c0,0.552-0.448,1-1,1S29.083,46.706,29.083,46.153z M19.911,46.153V22.847c0-0.552,0.448-1,1-1s1,0.448,1,1v23.306
                            c0,0.552-0.448,1-1,1S19.911,46.706,19.911,46.153z" />
                        </svg>
                    </div>
                </div>
            </div>
        </article>`;
};

const generateTodos = () => {
  let innerHTML = '';
  _todos_js__WEBPACK_IMPORTED_MODULE_0__["default"].listData().forEach((todo) => {
    innerHTML += `${returnTodo(todo)}`;
  });
  return innerHTML;
};

const returnHead = () => `<div class="todo-head">
                <h1>Today's To Do</h1>
                <span class="icon">
                    <svg width="25px" height="25px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#000000"
                            d="M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z" />
                    </svg>
                </span>
            </div>`;

const returnTodoForm = () => `<form class="add-task">
                <label>
                    <input type="text" placeholder="Add to your list..." />
                    <button type="submit" disabled class="link">
                        <svg fill="#000000" width="25px" height="25px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                            class="icon">
                            <path
                                d="M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 0 0 0 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z" />
                        </svg>
                    </button>
                </label>
            </form>`;


/***/ }),

/***/ "./src/modules/interactive.js":
/*!************************************!*\
  !*** ./src/modules/interactive.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onFocusInTodo": () => (/* binding */ onFocusInTodo),
/* harmony export */   "selectTodo": () => (/* binding */ selectTodo)
/* harmony export */ });
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.js */ "./src/modules/components.js");
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos.js */ "./src/modules/todos.js");



/**
 *
 * @param {Event} item event from the targeted todo
 * @returns
 */
const updateTodo = (item) => {
  const id = parseInt(item.target.getAttribute('data-id'), 10);
  _todos_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateData(id, { description: item.target.textContent.trim() });

  // Move cursor to the end of the field and remove
  // all html such as paragraphs added by editableContent
  // on press enter
  if (item.code !== 'Enter') return;
  item.target.innerText = item.target.textContent;
  const todoText = window.getSelection();
  todoText.selectAllChildren(item.target);
  todoText.collapseToEnd();
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection
};

/**
 * Add eventlisters on the targeted todo
 */
const onFocusInTodo = () => {
  const todos = document.querySelectorAll('.todo-title');
  todos.forEach((item) => {
    item.addEventListener('blur', updateTodo);
    item.addEventListener('input', updateTodo);
    item.addEventListener('keyup', updateTodo);
    item.addEventListener('paste', updateTodo);
  });
};

/**
 * Add event listeners when the user completes a todo
 */
const selectTodo = () => {
  const todos = document.querySelectorAll('.todo-check input');
  todos.forEach((item) => {
    item.addEventListener('change', () => {
      const id = parseInt(item.getAttribute('data-id'), 10);
      const checked = item.hasAttribute('checked');

      // User can see toggle before todos update in storage
      item.toggleAttribute('checked');
      _todos_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateData(id, { completed: !checked, selected: !checked });
      document.querySelector('.todo-wrapper').innerHTML = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.generateTodos)();
      onFocusInTodo();
      selectTodo();
    });
  });
};


/***/ }),

/***/ "./src/modules/paint-ui.js":
/*!*********************************!*\
  !*** ./src/modules/paint-ui.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "displayTodos": () => (/* binding */ displayTodos)
/* harmony export */ });
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ "./src/modules/todos.js");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.js */ "./src/modules/components.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ "./src/modules/interactive.js");



/**
 * Display new todos list and adjust the event listeners
 */
function displayTodos() {
  document.querySelector('.todo-wrapper').innerHTML = (0,_components_js__WEBPACK_IMPORTED_MODULE_1__.generateTodos)();
  (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.onFocusInTodo)();
  (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.selectTodo)();
}

/**
 * Create and insert default header and todo form
 * @returns document Element
 */
const appendHTML = () => {
  const element = document.createElement('div');
  element.innerHTML = `${(0,_components_js__WEBPACK_IMPORTED_MODULE_1__.returnHead)()}${(0,_components_js__WEBPACK_IMPORTED_MODULE_1__.returnTodoForm)()}`;
  return element;
};

/**
 * Return the form input element
 */
const getTodoInput = () => document.querySelector('form input');

/**
 * Add a new todo and update list
 */
const addTodo = (description) => {
  const newTodo = {
    description,
    selected: false,
    completed: false,
    index: _todos_js__WEBPACK_IMPORTED_MODULE_0__["default"].listData().length + 1,
  };
  _todos_js__WEBPACK_IMPORTED_MODULE_0__["default"].addData(newTodo);
  displayTodos();
};

/**
 * Remove a todo list and display the new list
 */
const removeTodo = (event) => {
  const article = event.parentElement.parentElement.parentElement;
  article.remove();
  _todos_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeData(event.getAttribute('data-id'));
  displayTodos();
};

/**
 * Remove all the completed todos when onlicking the button
 */
const clearCompletedTodos = () => {
  const clear = document.querySelector('.todo-button');
  clear.addEventListener('click', () => {
    _todos_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeData('', true);
    displayTodos();
  });
};

/**
 * disable the submit buttom if there is no submit text
 */
const inputChange = () => {
  const input = getTodoInput();
  const submit = document.querySelector('form button');
  let hasText = '';
  ['click', 'focus', 'change'].forEach((event) => {
    input.addEventListener(event, () => {
      hasText = input.value.trim();
      submit.setAttribute('disabled', true);
      if (!hasText) return;
      submit.removeAttribute('disabled');
    });
  });
};

/**
 * Create a new todo and clear input field value
 */
const createTodo = (event) => {
  event.preventDefault();
  const input = getTodoInput();
  const description = input.value.trim();
  if (!description) return;
  addTodo(description);
  getTodoInput().value = '';
};

/**
 * Display initial todos list and add form event listeners
 */
const initialize = () => {
  document.querySelector('.todos').prepend(appendHTML());
  document.querySelector('form').addEventListener('submit', createTodo);
  inputChange();
  displayTodos();
  clearCompletedTodos();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialize);

window.removeTodo = removeTodo;


/***/ }),

/***/ "./src/modules/todos.js":
/*!******************************!*\
  !*** ./src/modules/todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todos)
/* harmony export */ });
class Todos {
  static todo = 'todos-todo-list-webpack-veronica365-2023';

  static setTodo(todos) {
    const newTodos = JSON.stringify(todos);
    localStorage.setItem(this.todo, newTodos);
  }

  static addData(todo) {
    const todos = this.listData();
    todos.push(todo);
    this.setTodo(todos);
  }

  static listData() {
    const todos = JSON.parse(localStorage.getItem(this.todo));
    return todos || [];
  }

  static removeData(id = '', allCompleted = false) {
    let todos = this.listData();
    if (allCompleted) {
      todos = todos.filter((todo) => !todo.completed);
      todos = todos.map((item, counter) => ({ ...item, index: counter + 1 }));
      return this.setTodo(todos);
    }

    todos = todos.filter((todo) => String(todo.index) !== id);
    todos = todos.map((item, counter) => ({ ...item, index: counter + 1 }));
    return this.setTodo(todos);
  }

  static updateData(counter, newDetails) {
    let todos = this.listData();
    todos = todos.map((item) => {
      if (item.index === counter) {
        item = { ...item, ...newDetails };
      }
      return item;
    });
    this.setTodo(todos);
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsNkJBQTZCO0FBQzNFO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMsNkJBQTZCO0FBQ3pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL3NyYy9jc3Mvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL3NyYy9jc3Mvc3R5bGVzLmNzcz85OWEzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vc3JjL21vZHVsZXMvaW50ZXJhY3RpdmUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9zcmMvbW9kdWxlcy9wYWludC11aS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL3NyYy9tb2R1bGVzL3RvZG9zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxuXFxuICAtLWxpZ2h0LWdyYXk6ICNmNmY2ZjY7XFxuICAtLW1lZGl1bS1ncmF5OiAjYzFjMWMzO1xcbiAgLS1kYXJrOiAjZDBjZGNkO1xcbiAgLS1ibGFjazogIzAwMDtcXG4gIC0td2hpdGU6ICNmZmY7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5saW5rIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG9zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2IoMCAwIDAgLyAxNSUpO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0b3A6IDA7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiBtYXJnaW4gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4td2lkdGg6IDA7XFxufVxcblxcbi50b2RvcyAudG9kby1idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4IDUlO1xcbn1cXG5cXG4udG9kb3MgLnRvZG8taGVhZCB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigwIDAgMCAvIDglKTtcXG59XFxuXFxuLnRvZG9zIC50b2RvLWhlYWQgLmljb24ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi50b2RvcyAudG9kby1idXR0b24gc3BhbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRvZG9zIC50b2RvLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvZG9zIC5hZGQtdGFzayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi50b2RvcyAuYWRkLXRhc2ssXFxuLnRvZG9zIC5hZGQtdGFzayBsYWJlbCxcXG4udG9kb3MgLmFkZC10YXNrIGxhYmVsIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50b2RvcyAuYWRkLXRhc2sgbGFiZWwge1xcbiAgcGFkZGluZzogNnB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDAgMCAwIC8gOCUpO1xcbn1cXG5cXG4udG9kb3MgLmFkZC10YXNrIGxhYmVsIGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi50b2RvcyAuYWRkLXRhc2sgbGFiZWwgaW5wdXQge1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4udG9kb3MgLnRvZG8td3JhcHBlciAudG9kby1pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMCAwIDAgLyA4JSk7XFxufVxcblxcbi50b2RvLWl0ZW0gLml0ZW0td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi50b2RvLWl0ZW0gLnRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udG9kby1pdGVtIC50b2RvIC50b2RvLWNoZWNrIHtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50b2RvLWl0ZW0gLnRvZG8gLnRvZG8tY2hlY2sgaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8taXRlbSAudG9kbyAudG9kby1jaGVjayAuY2hlY2ttYXJrIHtcXG4gIHdpZHRoOiAyMnB4O1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLW1lZGl1bS1ncmF5KTtcXG59XFxuXFxuLnRvZG8taXRlbSAudG9kbyAudG9kby10aXRsZSB7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi50b2RvLWl0ZW0uY29tcGxldGVkIC50b2RvIC50b2RvLXRpdGxlIHtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvLWl0ZW0uY29tcGxldGVkIC50b2RvIC50b2RvLWNoZWNrIC5jaGVja21hcmsge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG59XFxuXFxuLnRvZG8taXRlbSAubW9yZSAubW92ZSxcXG4udG9kby1pdGVtIC5tb3JlIC5kZWxldGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnRvZG8taXRlbSAubW9yZSAubW92ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1pdGVtIC5tb3JlIHtcXG4gIHJpZ2h0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrbWFyazo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1jaGVjayAuY2hlY2ttYXJrOjphZnRlciB7XFxuICBsZWZ0OiA3cHg7XFxuICB0b3A6IDNweDtcXG4gIHdpZHRoOiA0cHg7XFxuICBoZWlnaHQ6IDlweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogc29saWQgdmFyKC0tYmxhY2spO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLnRvZG8tY2hlY2sgaW5wdXRbY2hlY2tlZF0gfiAuY2hlY2ttYXJrOjphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsK0JBQStCOztFQUUvQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsY0FBYztFQUNkLE1BQU07RUFDTixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTs7O0VBR0UsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLDhCQUE4QjtFQUM5Qix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxuXFxuICAtLWxpZ2h0LWdyYXk6ICNmNmY2ZjY7XFxuICAtLW1lZGl1bS1ncmF5OiAjYzFjMWMzO1xcbiAgLS1kYXJrOiAjZDBjZGNkO1xcbiAgLS1ibGFjazogIzAwMDtcXG4gIC0td2hpdGU6ICNmZmY7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5saW5rIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG9zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2IoMCAwIDAgLyAxNSUpO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0b3A6IDA7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiBtYXJnaW4gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4td2lkdGg6IDA7XFxufVxcblxcbi50b2RvcyAudG9kby1idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4IDUlO1xcbn1cXG5cXG4udG9kb3MgLnRvZG8taGVhZCB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigwIDAgMCAvIDglKTtcXG59XFxuXFxuLnRvZG9zIC50b2RvLWhlYWQgLmljb24ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi50b2RvcyAudG9kby1idXR0b24gc3BhbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRvZG9zIC50b2RvLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvZG9zIC5hZGQtdGFzayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi50b2RvcyAuYWRkLXRhc2ssXFxuLnRvZG9zIC5hZGQtdGFzayBsYWJlbCxcXG4udG9kb3MgLmFkZC10YXNrIGxhYmVsIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50b2RvcyAuYWRkLXRhc2sgbGFiZWwge1xcbiAgcGFkZGluZzogNnB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDAgMCAwIC8gOCUpO1xcbn1cXG5cXG4udG9kb3MgLmFkZC10YXNrIGxhYmVsIGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi50b2RvcyAuYWRkLXRhc2sgbGFiZWwgaW5wdXQge1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4udG9kb3MgLnRvZG8td3JhcHBlciAudG9kby1pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMCAwIDAgLyA4JSk7XFxufVxcblxcbi50b2RvLWl0ZW0gLml0ZW0td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi50b2RvLWl0ZW0gLnRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udG9kby1pdGVtIC50b2RvIC50b2RvLWNoZWNrIHtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50b2RvLWl0ZW0gLnRvZG8gLnRvZG8tY2hlY2sgaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8taXRlbSAudG9kbyAudG9kby1jaGVjayAuY2hlY2ttYXJrIHtcXG4gIHdpZHRoOiAyMnB4O1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLW1lZGl1bS1ncmF5KTtcXG59XFxuXFxuLnRvZG8taXRlbSAudG9kbyAudG9kby10aXRsZSB7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi50b2RvLWl0ZW0uY29tcGxldGVkIC50b2RvIC50b2RvLXRpdGxlIHtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvLWl0ZW0uY29tcGxldGVkIC50b2RvIC50b2RvLWNoZWNrIC5jaGVja21hcmsge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG59XFxuXFxuLnRvZG8taXRlbSAubW9yZSAubW92ZSxcXG4udG9kby1pdGVtIC5tb3JlIC5kZWxldGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnRvZG8taXRlbSAubW9yZSAubW92ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1pdGVtIC5tb3JlIHtcXG4gIHJpZ2h0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrbWFyazo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1jaGVjayAuY2hlY2ttYXJrOjphZnRlciB7XFxuICBsZWZ0OiA3cHg7XFxuICB0b3A6IDNweDtcXG4gIHdpZHRoOiA0cHg7XFxuICBoZWlnaHQ6IDlweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogc29saWQgdmFyKC0tYmxhY2spO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLnRvZG8tY2hlY2sgaW5wdXRbY2hlY2tlZF0gfiAuY2hlY2ttYXJrOjphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgaW5pdGlhbGl6ZSBmcm9tICcuL21vZHVsZXMvcGFpbnQtdWkuanMnO1xuaW1wb3J0ICcuL2Nzcy9zdHlsZXMuY3NzJztcblxuaW5pdGlhbGl6ZSgpO1xuIiwiaW1wb3J0IFRvZG9zIGZyb20gJy4vdG9kb3MuanMnO1xuXG5leHBvcnQgY29uc3QgcmV0dXJuVG9kbyA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IGNvbXBsZXRlZCA9IHRhc2suY29tcGxldGVkID8gJyBjb21wbGV0ZWQnIDogJyc7XG4gIHJldHVybiBgPGFydGljbGUgY2xhc3M9XCJ0b2RvLWl0ZW0ke2NvbXBsZXRlZH1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kb1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0b2RvLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgZGF0YS1pZD1cIiR7dGFzay5pbmRleH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0YXNrLmNvbXBsZXRlZCB8fCB0YXNrLnNlbGVjdGVkID8gJ2NoZWNrZWQnIDogJyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLXRpdGxlXCIgZGF0YS1pZD0ke1xuICB0YXNrLmluZGV4XG59IGNvbnRlbnRFZGl0YWJsZT4ke3Rhc2suZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmUgbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjI1cHhcIiBoZWlnaHQ9XCIyNXB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTMgNUMxMyA0LjQ0NzcyIDEyLjU1MjMgNCAxMiA0QzExLjQ0NzcgNCAxMSA0LjQ0NzcyIDExIDVDMTEgNS41NTIyOCAxMS40NDc3IDYgMTIgNkMxMi41NTIzIDYgMTMgNS41NTIyOCAxMyA1WlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiMwMDAwMDBcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEzIDEyQzEzIDExLjQ0NzcgMTIuNTUyMyAxMSAxMiAxMUMxMS40NDc3IDExIDExIDExLjQ0NzcgMTEgMTJDMTEgMTIuNTUyMyAxMS40NDc3IDEzIDEyIDEzQzEyLjU1MjMgMTMgMTMgMTIuNTUyMyAxMyAxMlpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMyAxOUMxMyAxOC40NDc3IDEyLjU1MjMgMTggMTIgMThDMTEuNDQ3NyAxOCAxMSAxOC40NDc3IDExIDE5QzExIDE5LjU1MjMgMTEuNDQ3NyAyMCAxMiAyMEMxMi41NTIzIDIwIDEzIDE5LjU1MjMgMTMgMTlaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiIzAwMDAwMFwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlIGxpbmtcIiBvbmNsaWNrPVwicmVtb3ZlVG9kbyh0aGlzKVwiIGRhdGEtaWQ9XCIke1xuICB0YXNrLmluZGV4XG59XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGZpbGw9XCIjMDAwMDAwXCIgaGVpZ2h0PVwiMjVweFwiIHdpZHRoPVwiMjVweFwiIHZlcnNpb249XCIxLjFcIiBpZD1cIkNhcGFfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZpZXdCb3g9XCIwIDAgNjAuMTY3IDYwLjE2N1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01NC41LDExLjY2N0gzOS44OFYzLjkxYzAtMi4xNTYtMS43NTQtMy45MS0zLjkxLTMuOTFIMjQuMTk2Yy0yLjE1NiwwLTMuOTEsMS43NTQtMy45MSwzLjkxdjcuNzU2SDUuNjY3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy0wLjU1MiwwLTEsMC40NDgtMSwxczAuNDQ4LDEsMSwxaDIuMDQydjQwLjVjMCwzLjMwOSwyLjY5MSw2LDYsNmgzMi43NWMzLjMwOSwwLDYtMi42OTEsNi02di00MC41SDU0LjVjMC41NTIsMCwxLTAuNDQ4LDEtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFM1NS4wNTIsMTEuNjY3LDU0LjUsMTEuNjY3eiBNMjIuMjg2LDMuOTFjMC0xLjA1MywwLjg1Ny0xLjkxLDEuOTEtMS45MUgzNS45N2MxLjA1MywwLDEuOTEsMC44NTcsMS45MSwxLjkxdjcuNzU2SDIyLjI4NlYzLjkxelxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNNTAuNDU4LDU0LjE2N2MwLDIuMjA2LTEuNzk0LDQtNCw0aC0zMi43NWMtMi4yMDYsMC00LTEuNzk0LTQtNHYtNDAuNWg0MC43NVY1NC4xNjd6IE0zOC4yNTUsNDYuMTUzVjIyLjg0N2MwLTAuNTUyLDAuNDQ4LTEsMS0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgczEsMC40NDgsMSwxdjIzLjMwNmMwLDAuNTUyLTAuNDQ4LDEtMSwxUzM4LjI1NSw0Ni43MDYsMzguMjU1LDQ2LjE1M3ogTTI5LjA4Myw0Ni4xNTNWMjIuODQ3YzAtMC41NTIsMC40NDgtMSwxLTFzMSwwLjQ0OCwxLDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2MjMuMzA2YzAsMC41NTItMC40NDgsMS0xLDFTMjkuMDgzLDQ2LjcwNiwyOS4wODMsNDYuMTUzeiBNMTkuOTExLDQ2LjE1M1YyMi44NDdjMC0wLjU1MiwwLjQ0OC0xLDEtMXMxLDAuNDQ4LDEsMXYyMy4zMDZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjMCwwLjU1Mi0wLjQ0OCwxLTEsMVMxOS45MTEsNDYuNzA2LDE5LjkxMSw0Ni4xNTN6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+YDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVRvZG9zID0gKCkgPT4ge1xuICBsZXQgaW5uZXJIVE1MID0gJyc7XG4gIFRvZG9zLmxpc3REYXRhKCkuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGlubmVySFRNTCArPSBgJHtyZXR1cm5Ub2RvKHRvZG8pfWA7XG4gIH0pO1xuICByZXR1cm4gaW5uZXJIVE1MO1xufTtcblxuZXhwb3J0IGNvbnN0IHJldHVybkhlYWQgPSAoKSA9PiBgPGRpdiBjbGFzcz1cInRvZG8taGVhZFwiPlxuICAgICAgICAgICAgICAgIDxoMT5Ub2RheSdzIFRvIERvPC9oMT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjI1cHhcIiBoZWlnaHQ9XCIyNXB4XCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAwMDAwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk03NzEuNzc2IDc5NC44OEEzODQgMzg0IDAgMCAxIDEyOCA1MTJoNjRhMzIwIDMyMCAwIDAgMCA1NTUuNzEyIDIxNi40NDhINjU0LjcyYTMyIDMyIDAgMSAxIDAtNjRoMTQ5LjA1NmEzMiAzMiAwIDAgMSAzMiAzMnYxNDguOTI4YTMyIDMyIDAgMSAxLTY0IDB2LTUwLjU2ek0yNzYuMjg4IDI5NS42MTZoOTIuOTkyYTMyIDMyIDAgMCAxIDAgNjRIMjIwLjE2YTMyIDMyIDAgMCAxLTMyLTMyVjE3OC41NmEzMiAzMiAwIDAgMSA2NCAwdjUwLjU2QTM4NCAzODQgMCAwIDEgODk2LjEyOCA1MTJoLTY0YTMyMCAzMjAgMCAwIDAtNTU1Ljc3Ni0yMTYuMzg0elwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG5cbmV4cG9ydCBjb25zdCByZXR1cm5Ub2RvRm9ybSA9ICgpID0+IGA8Zm9ybSBjbGFzcz1cImFkZC10YXNrXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZCB0byB5b3VyIGxpc3QuLi5cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZCBjbGFzcz1cImxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgZmlsbD1cIiMwMDAwMDBcIiB3aWR0aD1cIjI1cHhcIiBoZWlnaHQ9XCIyNXB4XCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTg2NCAxNzBoLTYwYy00LjQgMC04IDMuNi04IDh2NTE4SDMxMHYtNzNjMC02LjctNy44LTEwLjUtMTMtNi4zbC0xNDEuOSAxMTJhOCA4IDAgMCAwIDAgMTIuNmwxNDEuOSAxMTJjNS4zIDQuMiAxMyAuNCAxMy02LjN2LTc1aDQ5OGMzNS4zIDAgNjQtMjguNyA2NC02NFYxNzhjMC00LjQtMy42LTgtOC04elwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZm9ybT5gO1xuIiwiaW1wb3J0IHsgZ2VuZXJhdGVUb2RvcyB9IGZyb20gJy4vY29tcG9uZW50cy5qcyc7XG5pbXBvcnQgVG9kb3MgZnJvbSAnLi90b2Rvcy5qcyc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7RXZlbnR9IGl0ZW0gZXZlbnQgZnJvbSB0aGUgdGFyZ2V0ZWQgdG9kb1xuICogQHJldHVybnNcbiAqL1xuY29uc3QgdXBkYXRlVG9kbyA9IChpdGVtKSA9PiB7XG4gIGNvbnN0IGlkID0gcGFyc2VJbnQoaXRlbS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyksIDEwKTtcbiAgVG9kb3MudXBkYXRlRGF0YShpZCwgeyBkZXNjcmlwdGlvbjogaXRlbS50YXJnZXQudGV4dENvbnRlbnQudHJpbSgpIH0pO1xuXG4gIC8vIE1vdmUgY3Vyc29yIHRvIHRoZSBlbmQgb2YgdGhlIGZpZWxkIGFuZCByZW1vdmVcbiAgLy8gYWxsIGh0bWwgc3VjaCBhcyBwYXJhZ3JhcGhzIGFkZGVkIGJ5IGVkaXRhYmxlQ29udGVudFxuICAvLyBvbiBwcmVzcyBlbnRlclxuICBpZiAoaXRlbS5jb2RlICE9PSAnRW50ZXInKSByZXR1cm47XG4gIGl0ZW0udGFyZ2V0LmlubmVyVGV4dCA9IGl0ZW0udGFyZ2V0LnRleHRDb250ZW50O1xuICBjb25zdCB0b2RvVGV4dCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgdG9kb1RleHQuc2VsZWN0QWxsQ2hpbGRyZW4oaXRlbS50YXJnZXQpO1xuICB0b2RvVGV4dC5jb2xsYXBzZVRvRW5kKCk7XG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvZ2V0U2VsZWN0aW9uXG59O1xuXG4vKipcbiAqIEFkZCBldmVudGxpc3RlcnMgb24gdGhlIHRhcmdldGVkIHRvZG9cbiAqL1xuZXhwb3J0IGNvbnN0IG9uRm9jdXNJblRvZG8gPSAoKSA9PiB7XG4gIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8tdGl0bGUnKTtcbiAgdG9kb3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHVwZGF0ZVRvZG8pO1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVUb2RvKTtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBkYXRlVG9kbyk7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIHVwZGF0ZVRvZG8pO1xuICB9KTtcbn07XG5cbi8qKlxuICogQWRkIGV2ZW50IGxpc3RlbmVycyB3aGVuIHRoZSB1c2VyIGNvbXBsZXRlcyBhIHRvZG9cbiAqL1xuZXhwb3J0IGNvbnN0IHNlbGVjdFRvZG8gPSAoKSA9PiB7XG4gIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8tY2hlY2sgaW5wdXQnKTtcbiAgdG9kb3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBwYXJzZUludChpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpLCAxMCk7XG4gICAgICBjb25zdCBjaGVja2VkID0gaXRlbS5oYXNBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcblxuICAgICAgLy8gVXNlciBjYW4gc2VlIHRvZ2dsZSBiZWZvcmUgdG9kb3MgdXBkYXRlIGluIHN0b3JhZ2VcbiAgICAgIGl0ZW0udG9nZ2xlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgICBUb2Rvcy51cGRhdGVEYXRhKGlkLCB7IGNvbXBsZXRlZDogIWNoZWNrZWQsIHNlbGVjdGVkOiAhY2hlY2tlZCB9KTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLXdyYXBwZXInKS5pbm5lckhUTUwgPSBnZW5lcmF0ZVRvZG9zKCk7XG4gICAgICBvbkZvY3VzSW5Ub2RvKCk7XG4gICAgICBzZWxlY3RUb2RvKCk7XG4gICAgfSk7XG4gIH0pO1xufTtcbiIsImltcG9ydCBUb2RvcyBmcm9tICcuL3RvZG9zLmpzJztcbmltcG9ydCB7IHJldHVybkhlYWQsIHJldHVyblRvZG9Gb3JtLCBnZW5lcmF0ZVRvZG9zIH0gZnJvbSAnLi9jb21wb25lbnRzLmpzJztcbmltcG9ydCB7IG9uRm9jdXNJblRvZG8sIHNlbGVjdFRvZG8gfSBmcm9tICcuL2ludGVyYWN0aXZlLmpzJztcbi8qKlxuICogRGlzcGxheSBuZXcgdG9kb3MgbGlzdCBhbmQgYWRqdXN0IHRoZSBldmVudCBsaXN0ZW5lcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUb2RvcygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8td3JhcHBlcicpLmlubmVySFRNTCA9IGdlbmVyYXRlVG9kb3MoKTtcbiAgb25Gb2N1c0luVG9kbygpO1xuICBzZWxlY3RUb2RvKCk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuZCBpbnNlcnQgZGVmYXVsdCBoZWFkZXIgYW5kIHRvZG8gZm9ybVxuICogQHJldHVybnMgZG9jdW1lbnQgRWxlbWVudFxuICovXG5jb25zdCBhcHBlbmRIVE1MID0gKCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gYCR7cmV0dXJuSGVhZCgpfSR7cmV0dXJuVG9kb0Zvcm0oKX1gO1xuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBmb3JtIGlucHV0IGVsZW1lbnRcbiAqL1xuY29uc3QgZ2V0VG9kb0lucHV0ID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSBpbnB1dCcpO1xuXG4vKipcbiAqIEFkZCBhIG5ldyB0b2RvIGFuZCB1cGRhdGUgbGlzdFxuICovXG5jb25zdCBhZGRUb2RvID0gKGRlc2NyaXB0aW9uKSA9PiB7XG4gIGNvbnN0IG5ld1RvZG8gPSB7XG4gICAgZGVzY3JpcHRpb24sXG4gICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgaW5kZXg6IFRvZG9zLmxpc3REYXRhKCkubGVuZ3RoICsgMSxcbiAgfTtcbiAgVG9kb3MuYWRkRGF0YShuZXdUb2RvKTtcbiAgZGlzcGxheVRvZG9zKCk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhIHRvZG8gbGlzdCBhbmQgZGlzcGxheSB0aGUgbmV3IGxpc3RcbiAqL1xuY29uc3QgcmVtb3ZlVG9kbyA9IChldmVudCkgPT4ge1xuICBjb25zdCBhcnRpY2xlID0gZXZlbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gIGFydGljbGUucmVtb3ZlKCk7XG4gIFRvZG9zLnJlbW92ZURhdGEoZXZlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuICBkaXNwbGF5VG9kb3MoKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB0aGUgY29tcGxldGVkIHRvZG9zIHdoZW4gb25saWNraW5nIHRoZSBidXR0b25cbiAqL1xuY29uc3QgY2xlYXJDb21wbGV0ZWRUb2RvcyA9ICgpID0+IHtcbiAgY29uc3QgY2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1idXR0b24nKTtcbiAgY2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgVG9kb3MucmVtb3ZlRGF0YSgnJywgdHJ1ZSk7XG4gICAgZGlzcGxheVRvZG9zKCk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBkaXNhYmxlIHRoZSBzdWJtaXQgYnV0dG9tIGlmIHRoZXJlIGlzIG5vIHN1Ym1pdCB0ZXh0XG4gKi9cbmNvbnN0IGlucHV0Q2hhbmdlID0gKCkgPT4ge1xuICBjb25zdCBpbnB1dCA9IGdldFRvZG9JbnB1dCgpO1xuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtIGJ1dHRvbicpO1xuICBsZXQgaGFzVGV4dCA9ICcnO1xuICBbJ2NsaWNrJywgJ2ZvY3VzJywgJ2NoYW5nZSddLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKCkgPT4ge1xuICAgICAgaGFzVGV4dCA9IGlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICBpZiAoIWhhc1RleHQpIHJldHVybjtcbiAgICAgIHN1Ym1pdC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgdG9kbyBhbmQgY2xlYXIgaW5wdXQgZmllbGQgdmFsdWVcbiAqL1xuY29uc3QgY3JlYXRlVG9kbyA9IChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBpbnB1dCA9IGdldFRvZG9JbnB1dCgpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGlucHV0LnZhbHVlLnRyaW0oKTtcbiAgaWYgKCFkZXNjcmlwdGlvbikgcmV0dXJuO1xuICBhZGRUb2RvKGRlc2NyaXB0aW9uKTtcbiAgZ2V0VG9kb0lucHV0KCkudmFsdWUgPSAnJztcbn07XG5cbi8qKlxuICogRGlzcGxheSBpbml0aWFsIHRvZG9zIGxpc3QgYW5kIGFkZCBmb3JtIGV2ZW50IGxpc3RlbmVyc1xuICovXG5jb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKS5wcmVwZW5kKGFwcGVuZEhUTUwoKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBjcmVhdGVUb2RvKTtcbiAgaW5wdXRDaGFuZ2UoKTtcbiAgZGlzcGxheVRvZG9zKCk7XG4gIGNsZWFyQ29tcGxldGVkVG9kb3MoKTtcbn07XG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplO1xuXG53aW5kb3cucmVtb3ZlVG9kbyA9IHJlbW92ZVRvZG87XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvcyB7XG4gIHN0YXRpYyB0b2RvID0gJ3RvZG9zLXRvZG8tbGlzdC13ZWJwYWNrLXZlcm9uaWNhMzY1LTIwMjMnO1xuXG4gIHN0YXRpYyBzZXRUb2RvKHRvZG9zKSB7XG4gICAgY29uc3QgbmV3VG9kb3MgPSBKU09OLnN0cmluZ2lmeSh0b2Rvcyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy50b2RvLCBuZXdUb2Rvcyk7XG4gIH1cblxuICBzdGF0aWMgYWRkRGF0YSh0b2RvKSB7XG4gICAgY29uc3QgdG9kb3MgPSB0aGlzLmxpc3REYXRhKCk7XG4gICAgdG9kb3MucHVzaCh0b2RvKTtcbiAgICB0aGlzLnNldFRvZG8odG9kb3MpO1xuICB9XG5cbiAgc3RhdGljIGxpc3REYXRhKCkge1xuICAgIGNvbnN0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnRvZG8pKTtcbiAgICByZXR1cm4gdG9kb3MgfHwgW107XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlRGF0YShpZCA9ICcnLCBhbGxDb21wbGV0ZWQgPSBmYWxzZSkge1xuICAgIGxldCB0b2RvcyA9IHRoaXMubGlzdERhdGEoKTtcbiAgICBpZiAoYWxsQ29tcGxldGVkKSB7XG4gICAgICB0b2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4gIXRvZG8uY29tcGxldGVkKTtcbiAgICAgIHRvZG9zID0gdG9kb3MubWFwKChpdGVtLCBjb3VudGVyKSA9PiAoeyAuLi5pdGVtLCBpbmRleDogY291bnRlciArIDEgfSkpO1xuICAgICAgcmV0dXJuIHRoaXMuc2V0VG9kbyh0b2Rvcyk7XG4gICAgfVxuXG4gICAgdG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IFN0cmluZyh0b2RvLmluZGV4KSAhPT0gaWQpO1xuICAgIHRvZG9zID0gdG9kb3MubWFwKChpdGVtLCBjb3VudGVyKSA9PiAoeyAuLi5pdGVtLCBpbmRleDogY291bnRlciArIDEgfSkpO1xuICAgIHJldHVybiB0aGlzLnNldFRvZG8odG9kb3MpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZURhdGEoY291bnRlciwgbmV3RGV0YWlscykge1xuICAgIGxldCB0b2RvcyA9IHRoaXMubGlzdERhdGEoKTtcbiAgICB0b2RvcyA9IHRvZG9zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uaW5kZXggPT09IGNvdW50ZXIpIHtcbiAgICAgICAgaXRlbSA9IHsgLi4uaXRlbSwgLi4ubmV3RGV0YWlscyB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSk7XG4gICAgdGhpcy5zZXRUb2RvKHRvZG9zKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9