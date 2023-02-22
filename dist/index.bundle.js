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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-size: 16px;\n  font-weight: 300;\n  box-sizing: border-box;\n  font-family: Roboto, sans-serif;\n\n  --light-gray: #f6f6f6;\n  --medium-gray: #c1c1c3;\n  --dark: #d0cdcd;\n  --black: #000;\n  --white: #fff;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  background-color: var(--light-gray);\n}\n\nh1 {\n  font-weight: 600;\n}\n\n.link {\n  cursor: pointer;\n}\n\n.todos {\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);\n  margin: 0 auto;\n  top: 0;\n  max-width: 500px;\n  width: 100%;\n  transition: margin 300ms ease-in-out;\n  position: relative;\n  min-width: 0;\n}\n\n.todos .todo-button {\n  display: flex;\n  align-items: center;\n  padding: 20px 5%;\n}\n\n.todos .todo-head {\n  height: 50px;\n  display: flex;\n  padding: 0 15px;\n  align-items: center;\n  background-color: var(--light-gray);\n  border-bottom: 1px solid rgb(0 0 0 / 8%);\n}\n\n.todos .todo-head .icon {\n  margin-left: auto;\n}\n\n.todos .todo-button span {\n  width: 100%;\n  text-align: center;\n}\n\n.todos .todo-wrapper {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.todos .add-task {\n  width: 100%;\n  height: 50px;\n  padding-right: 15px;\n  background-color: var(--white);\n}\n\n.todos .add-task,\n.todos .add-task label,\n.todos .add-task label input {\n  width: 100%;\n  outline: none;\n  border: none;\n  display: flex;\n}\n\n.todos .add-task label {\n  padding: 6px 0;\n  background-color: var(--white);\n  border-bottom: 1px solid rgb(0 0 0 / 8%);\n}\n\n.todos .add-task label button {\n  border: none;\n  background-color: var(--white);\n}\n\n.todos .add-task label input {\n  padding-left: 15px;\n  font-style: italic;\n}\n\n.todos .todo-wrapper .todo-item {\n  width: 100%;\n  display: flex;\n  border-bottom: 1px solid rgb(0 0 0 / 8%);\n}\n\n.todo-item .item-wrapper {\n  display: flex;\n  width: 100%;\n  background: var(--white);\n}\n\n.todo-item .todo {\n  display: flex;\n}\n\n.todo-item .todo .todo-check {\n  padding: 0 15px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  font-size: 22px;\n  user-select: none;\n}\n\n.todo-item .todo .todo-check input {\n  display: none;\n}\n\n.todo-item .todo .todo-check .checkmark {\n  width: 22px;\n  height: 22px;\n  display: block;\n  position: relative;\n  border: 1.5px solid var(--medium-gray);\n}\n\n.todo-item .todo .todo-title {\n  line-height: 25px;\n  padding: 12px 0;\n}\n\n.todo-item.completed .todo .todo-title {\n  padding: 12px 0;\n  line-height: 25px;\n  color: var(--dark);\n  text-decoration: line-through;\n}\n\n.todo-item.completed .todo .todo-check .checkmark {\n  border-color: var(--dark);\n}\n\n.todo-item .more .move,\n.todo-item .more .delete {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n\n.todo-item .more .move {\n  display: none;\n}\n\n.todo-item .more {\n  right: 0;\n  display: flex;\n  margin-left: auto;\n  margin-right: 15px;\n  position: relative;\n  align-items: center;\n}\n\n.checkmark::after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.todo-check .checkmark::after {\n  left: 7px;\n  top: 3px;\n  width: 4px;\n  height: 9px;\n  position: absolute;\n  border: solid var(--black);\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n\n.todo-check input:checked ~ .checkmark::after {\n  display: block;\n}\n", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,+BAA+B;;EAE/B,qBAAqB;EACrB,sBAAsB;EACtB,eAAe;EACf,aAAa;EACb,aAAa;AACf;;AAEA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,mCAAmC;AACrC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;EAClB,sCAAsC;EACtC,cAAc;EACd,MAAM;EACN,gBAAgB;EAChB,WAAW;EACX,oCAAoC;EACpC,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,mCAAmC;EACnC,wCAAwC;AAC1C;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;;;EAGE,WAAW;EACX,aAAa;EACb,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,cAAc;EACd,8BAA8B;EAC9B,wCAAwC;AAC1C;;AAEA;EACE,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,WAAW;EACX,wBAAwB;AAC1B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,sCAAsC;AACxC;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,QAAQ;EACR,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,SAAS;EACT,QAAQ;EACR,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,0BAA0B;EAC1B,yBAAyB;EACzB,wBAAwB;AAC1B;;AAEA;EACE,cAAc;AAChB","sourcesContent":["* {\n  font-size: 16px;\n  font-weight: 300;\n  box-sizing: border-box;\n  font-family: Roboto, sans-serif;\n\n  --light-gray: #f6f6f6;\n  --medium-gray: #c1c1c3;\n  --dark: #d0cdcd;\n  --black: #000;\n  --white: #fff;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  background-color: var(--light-gray);\n}\n\nh1 {\n  font-weight: 600;\n}\n\n.link {\n  cursor: pointer;\n}\n\n.todos {\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);\n  margin: 0 auto;\n  top: 0;\n  max-width: 500px;\n  width: 100%;\n  transition: margin 300ms ease-in-out;\n  position: relative;\n  min-width: 0;\n}\n\n.todos .todo-button {\n  display: flex;\n  align-items: center;\n  padding: 20px 5%;\n}\n\n.todos .todo-head {\n  height: 50px;\n  display: flex;\n  padding: 0 15px;\n  align-items: center;\n  background-color: var(--light-gray);\n  border-bottom: 1px solid rgb(0 0 0 / 8%);\n}\n\n.todos .todo-head .icon {\n  margin-left: auto;\n}\n\n.todos .todo-button span {\n  width: 100%;\n  text-align: center;\n}\n\n.todos .todo-wrapper {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.todos .add-task {\n  width: 100%;\n  height: 50px;\n  padding-right: 15px;\n  background-color: var(--white);\n}\n\n.todos .add-task,\n.todos .add-task label,\n.todos .add-task label input {\n  width: 100%;\n  outline: none;\n  border: none;\n  display: flex;\n}\n\n.todos .add-task label {\n  padding: 6px 0;\n  background-color: var(--white);\n  border-bottom: 1px solid rgb(0 0 0 / 8%);\n}\n\n.todos .add-task label button {\n  border: none;\n  background-color: var(--white);\n}\n\n.todos .add-task label input {\n  padding-left: 15px;\n  font-style: italic;\n}\n\n.todos .todo-wrapper .todo-item {\n  width: 100%;\n  display: flex;\n  border-bottom: 1px solid rgb(0 0 0 / 8%);\n}\n\n.todo-item .item-wrapper {\n  display: flex;\n  width: 100%;\n  background: var(--white);\n}\n\n.todo-item .todo {\n  display: flex;\n}\n\n.todo-item .todo .todo-check {\n  padding: 0 15px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  font-size: 22px;\n  user-select: none;\n}\n\n.todo-item .todo .todo-check input {\n  display: none;\n}\n\n.todo-item .todo .todo-check .checkmark {\n  width: 22px;\n  height: 22px;\n  display: block;\n  position: relative;\n  border: 1.5px solid var(--medium-gray);\n}\n\n.todo-item .todo .todo-title {\n  line-height: 25px;\n  padding: 12px 0;\n}\n\n.todo-item.completed .todo .todo-title {\n  padding: 12px 0;\n  line-height: 25px;\n  color: var(--dark);\n  text-decoration: line-through;\n}\n\n.todo-item.completed .todo .todo-check .checkmark {\n  border-color: var(--dark);\n}\n\n.todo-item .more .move,\n.todo-item .more .delete {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n\n.todo-item .more .move {\n  display: none;\n}\n\n.todo-item .more {\n  right: 0;\n  display: flex;\n  margin-left: auto;\n  margin-right: 15px;\n  position: relative;\n  align-items: center;\n}\n\n.checkmark::after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.todo-check .checkmark::after {\n  left: 7px;\n  top: 3px;\n  width: 4px;\n  height: 9px;\n  position: absolute;\n  border: solid var(--black);\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n\n.todo-check input:checked ~ .checkmark::after {\n  display: block;\n}\n"],"sourceRoot":""}]);
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



(0,_modules_paint_ui_js__WEBPACK_IMPORTED_MODULE_0__.initialize)();


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
                        <input type="checkbox" checked="checked">
                        <span class="checkmark"></span>
                    </label>
                    <span class="todo-title">
                        ${task.description}
                    </span>
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
                    <div class="delete link" onclick="removeTodo(this)" id="${task.index}">
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
  _todos_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((todo) => {
    innerHTML += `${returnTodo(todo)}`;
  });
  return innerHTML;
};

const returnHead=()=>{
    return `<div class="todo-head">
                <h1>Today's To Do</h1>
                <span class="icon">
                    <svg width="25px" height="25px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#000000"
                            d="M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z" />
                    </svg>
                </span>
            </div>`;
}

const returnTodoForm=()=>{
    return `<form class="add-task">
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
}


/***/ }),

/***/ "./src/modules/paint-ui.js":
/*!*********************************!*\
  !*** ./src/modules/paint-ui.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "appendHTML": () => (/* binding */ appendHTML),
/* harmony export */   "createNewTodo": () => (/* binding */ createNewTodo),
/* harmony export */   "initialize": () => (/* binding */ initialize),
/* harmony export */   "removeTodo": () => (/* binding */ removeTodo),
/* harmony export */   "submitTodo": () => (/* binding */ submitTodo)
/* harmony export */ });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/modules/todos.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/modules/components.js");



const appendHTML = () => {
  const element = document.createElement("div");
  element.innerHTML = `${(0,_components__WEBPACK_IMPORTED_MODULE_1__.returnHead)()}${(0,_components__WEBPACK_IMPORTED_MODULE_1__.returnTodoForm)()}`;
  return element;
};

const getTodoInput = () => {
  return document.querySelector("form input");
};

const createNewTodo = (description) => {
  let html = document.querySelector(".todo-wrapper");
  const newTodo = {
    description,
    selected: false,
    completed: false,
    index: new Date().getTime(),
  };
  _todos__WEBPACK_IMPORTED_MODULE_0__["default"].push(newTodo);
  html.innerHTML += (0,_components__WEBPACK_IMPORTED_MODULE_1__.returnTodo)(newTodo);
};

const addTodo = () => {
  const input = getTodoInput();
  const submit = document.querySelector("form button");
  let hasText = "";
  ["click", "focus", "change"].forEach((event) => {
    input.addEventListener(event, () => {
      hasText = input.value.trim();
      submit.setAttribute("disabled", true);
      if (!hasText) return;
      submit.removeAttribute("disabled");
    });
  });
};

const removeTodo = (event) => {
  const article = event.parentElement.parentElement.parentElement;
  article.remove();
};

const submitTodo = (event) => {
  event.preventDefault();
  const input = getTodoInput();
  const description = input.value.trim();
  if (!description) return;
  createNewTodo(description);
  getTodoInput().value = "";
};

const initialize = () => {
  document.querySelector(".todos").prepend(appendHTML());
  document.querySelector(".todo-wrapper").innerHTML = (0,_components__WEBPACK_IMPORTED_MODULE_1__.generateTodos)();
  document.querySelector("form").addEventListener("submit", submitTodo);
  addTodo();
};

window.removeTodo = removeTodo;


/***/ }),

/***/ "./src/modules/todos.js":
/*!******************************!*\
  !*** ./src/modules/todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const todos = [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todos);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDakVBO0FBQ0EsaUVBQWUsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9zcmMvY3NzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9zcmMvY3NzL3N0eWxlcy5jc3M/OTlhMyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vc3JjL21vZHVsZXMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL3NyYy9tb2R1bGVzL3BhaW50LXVpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vc3JjL21vZHVsZXMvdG9kb3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcXG5cXG4gIC0tbGlnaHQtZ3JheTogI2Y2ZjZmNjtcXG4gIC0tbWVkaXVtLWdyYXk6ICNjMWMxYzM7XFxuICAtLWRhcms6ICNkMGNkY2Q7XFxuICAtLWJsYWNrOiAjMDAwO1xcbiAgLS13aGl0ZTogI2ZmZjtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmxpbmsge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kb3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYigwIDAgMCAvIDE1JSk7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHRvcDogMDtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zaXRpb246IG1hcmdpbiAzMDBtcyBlYXNlLWluLW91dDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi13aWR0aDogMDtcXG59XFxuXFxuLnRvZG9zIC50b2RvLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHggNSU7XFxufVxcblxcbi50b2RvcyAudG9kby1oZWFkIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDAgMCAwIC8gOCUpO1xcbn1cXG5cXG4udG9kb3MgLnRvZG8taGVhZCAuaWNvbiB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnRvZG9zIC50b2RvLWJ1dHRvbiBzcGFuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udG9kb3MgLnRvZG8td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udG9kb3MgLmFkZC10YXNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLnRvZG9zIC5hZGQtdGFzayxcXG4udG9kb3MgLmFkZC10YXNrIGxhYmVsLFxcbi50b2RvcyAuYWRkLXRhc2sgbGFiZWwgaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRvZG9zIC5hZGQtdGFzayBsYWJlbCB7XFxuICBwYWRkaW5nOiA2cHggMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMCAwIDAgLyA4JSk7XFxufVxcblxcbi50b2RvcyAuYWRkLXRhc2sgbGFiZWwgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLnRvZG9zIC5hZGQtdGFzayBsYWJlbCBpbnB1dCB7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi50b2RvcyAudG9kby13cmFwcGVyIC50b2RvLWl0ZW0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigwIDAgMCAvIDglKTtcXG59XFxuXFxuLnRvZG8taXRlbSAuaXRlbS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLnRvZG8taXRlbSAudG9kbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9kby1pdGVtIC50b2RvIC50b2RvLWNoZWNrIHtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50b2RvLWl0ZW0gLnRvZG8gLnRvZG8tY2hlY2sgaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8taXRlbSAudG9kbyAudG9kby1jaGVjayAuY2hlY2ttYXJrIHtcXG4gIHdpZHRoOiAyMnB4O1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLW1lZGl1bS1ncmF5KTtcXG59XFxuXFxuLnRvZG8taXRlbSAudG9kbyAudG9kby10aXRsZSB7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIHBhZGRpbmc6IDEycHggMDtcXG59XFxuXFxuLnRvZG8taXRlbS5jb21wbGV0ZWQgLnRvZG8gLnRvZG8tdGl0bGUge1xcbiAgcGFkZGluZzogMTJweCAwO1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvZG8taXRlbS5jb21wbGV0ZWQgLnRvZG8gLnRvZG8tY2hlY2sgLmNoZWNrbWFyayB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmspO1xcbn1cXG5cXG4udG9kby1pdGVtIC5tb3JlIC5tb3ZlLFxcbi50b2RvLWl0ZW0gLm1vcmUgLmRlbGV0ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4udG9kby1pdGVtIC5tb3JlIC5tb3ZlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLWl0ZW0gLm1vcmUge1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2ttYXJrOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLWNoZWNrIC5jaGVja21hcms6OmFmdGVyIHtcXG4gIGxlZnQ6IDdweDtcXG4gIHRvcDogM3B4O1xcbiAgd2lkdGg6IDRweDtcXG4gIGhlaWdodDogOXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4udG9kby1jaGVjayBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazo6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLCtCQUErQjs7RUFFL0IscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0NBQXNDO0VBQ3RDLGNBQWM7RUFDZCxNQUFNO0VBQ04sZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQyx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7OztFQUdFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsUUFBUTtFQUNSLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xcblxcbiAgLS1saWdodC1ncmF5OiAjZjZmNmY2O1xcbiAgLS1tZWRpdW0tZ3JheTogI2MxYzFjMztcXG4gIC0tZGFyazogI2QwY2RjZDtcXG4gIC0tYmxhY2s6ICMwMDA7XFxuICAtLXdoaXRlOiAjZmZmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubGluayB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiKDAgMCAwIC8gMTUlKTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgdG9wOiAwO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLXdpZHRoOiAwO1xcbn1cXG5cXG4udG9kb3MgLnRvZG8tYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweCA1JTtcXG59XFxuXFxuLnRvZG9zIC50b2RvLWhlYWQge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMCAwIDAgLyA4JSk7XFxufVxcblxcbi50b2RvcyAudG9kby1oZWFkIC5pY29uIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4udG9kb3MgLnRvZG8tYnV0dG9uIHNwYW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50b2RvcyAudG9kby13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50b2RvcyAuYWRkLXRhc2sge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4udG9kb3MgLmFkZC10YXNrLFxcbi50b2RvcyAuYWRkLXRhc2sgbGFiZWwsXFxuLnRvZG9zIC5hZGQtdGFzayBsYWJlbCBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9kb3MgLmFkZC10YXNrIGxhYmVsIHtcXG4gIHBhZGRpbmc6IDZweCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigwIDAgMCAvIDglKTtcXG59XFxuXFxuLnRvZG9zIC5hZGQtdGFzayBsYWJlbCBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4udG9kb3MgLmFkZC10YXNrIGxhYmVsIGlucHV0IHtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnRvZG9zIC50b2RvLXdyYXBwZXIgLnRvZG8taXRlbSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDAgMCAwIC8gOCUpO1xcbn1cXG5cXG4udG9kby1pdGVtIC5pdGVtLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4udG9kby1pdGVtIC50b2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50b2RvLWl0ZW0gLnRvZG8gLnRvZG8tY2hlY2sge1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDIycHg7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnRvZG8taXRlbSAudG9kbyAudG9kby1jaGVjayBpbnB1dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1pdGVtIC50b2RvIC50b2RvLWNoZWNrIC5jaGVja21hcmsge1xcbiAgd2lkdGg6IDIycHg7XFxuICBoZWlnaHQ6IDIycHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tbWVkaXVtLWdyYXkpO1xcbn1cXG5cXG4udG9kby1pdGVtIC50b2RvIC50b2RvLXRpdGxlIHtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgcGFkZGluZzogMTJweCAwO1xcbn1cXG5cXG4udG9kby1pdGVtLmNvbXBsZXRlZCAudG9kbyAudG9kby10aXRsZSB7XFxuICBwYWRkaW5nOiAxMnB4IDA7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udG9kby1pdGVtLmNvbXBsZXRlZCAudG9kbyAudG9kby1jaGVjayAuY2hlY2ttYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyayk7XFxufVxcblxcbi50b2RvLWl0ZW0gLm1vcmUgLm1vdmUsXFxuLnRvZG8taXRlbSAubW9yZSAuZGVsZXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi50b2RvLWl0ZW0gLm1vcmUgLm1vdmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8taXRlbSAubW9yZSB7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja21hcms6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8tY2hlY2sgLmNoZWNrbWFyazo6YWZ0ZXIge1xcbiAgbGVmdDogN3B4O1xcbiAgdG9wOiAzcHg7XFxuICB3aWR0aDogNHB4O1xcbiAgaGVpZ2h0OiA5cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi50b2RvLWNoZWNrIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOjphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi9tb2R1bGVzL3BhaW50LXVpLmpzJztcbmltcG9ydCAnLi9jc3Mvc3R5bGVzLmNzcyc7XG5cbmluaXRpYWxpemUoKTtcbiIsImltcG9ydCB0b2RvcyBmcm9tICcuL3RvZG9zLmpzJztcblxuZXhwb3J0IGNvbnN0IHJldHVyblRvZG8gPSAodGFzaykgPT4ge1xuICBjb25zdCBjb21wbGV0ZWQgPSB0YXNrLmNvbXBsZXRlZCA/ICcgY29tcGxldGVkJyA6ICcnO1xuICByZXR1cm4gYDxhcnRpY2xlIGNsYXNzPVwidG9kby1pdGVtJHtjb21wbGV0ZWR9XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidG9kby1jaGVja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9XCJjaGVja2VkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b2RvLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3Rhc2suZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9yZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92ZSBsaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjVweFwiIGhlaWdodD1cIjI1cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMyA1QzEzIDQuNDQ3NzIgMTIuNTUyMyA0IDEyIDRDMTEuNDQ3NyA0IDExIDQuNDQ3NzIgMTEgNUMxMSA1LjU1MjI4IDExLjQ0NzcgNiAxMiA2QzEyLjU1MjMgNiAxMyA1LjU1MjI4IDEzIDVaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiIzAwMDAwMFwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTMgMTJDMTMgMTEuNDQ3NyAxMi41NTIzIDExIDEyIDExQzExLjQ0NzcgMTEgMTEgMTEuNDQ3NyAxMSAxMkMxMSAxMi41NTIzIDExLjQ0NzcgMTMgMTIgMTNDMTIuNTUyMyAxMyAxMyAxMi41NTIzIDEzIDEyWlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiMwMDAwMDBcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEzIDE5QzEzIDE4LjQ0NzcgMTIuNTUyMyAxOCAxMiAxOEMxMS40NDc3IDE4IDExIDE4LjQ0NzcgMTEgMTlDMTEgMTkuNTUyMyAxMS40NDc3IDIwIDEyIDIwQzEyLjU1MjMgMjAgMTMgMTkuNTUyMyAxMyAxOVpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxldGUgbGlua1wiIG9uY2xpY2s9XCJyZW1vdmVUb2RvKHRoaXMpXCIgaWQ9XCIke3Rhc2suaW5kZXh9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGZpbGw9XCIjMDAwMDAwXCIgaGVpZ2h0PVwiMjVweFwiIHdpZHRoPVwiMjVweFwiIHZlcnNpb249XCIxLjFcIiBpZD1cIkNhcGFfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZpZXdCb3g9XCIwIDAgNjAuMTY3IDYwLjE2N1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01NC41LDExLjY2N0gzOS44OFYzLjkxYzAtMi4xNTYtMS43NTQtMy45MS0zLjkxLTMuOTFIMjQuMTk2Yy0yLjE1NiwwLTMuOTEsMS43NTQtMy45MSwzLjkxdjcuNzU2SDUuNjY3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy0wLjU1MiwwLTEsMC40NDgtMSwxczAuNDQ4LDEsMSwxaDIuMDQydjQwLjVjMCwzLjMwOSwyLjY5MSw2LDYsNmgzMi43NWMzLjMwOSwwLDYtMi42OTEsNi02di00MC41SDU0LjVjMC41NTIsMCwxLTAuNDQ4LDEtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFM1NS4wNTIsMTEuNjY3LDU0LjUsMTEuNjY3eiBNMjIuMjg2LDMuOTFjMC0xLjA1MywwLjg1Ny0xLjkxLDEuOTEtMS45MUgzNS45N2MxLjA1MywwLDEuOTEsMC44NTcsMS45MSwxLjkxdjcuNzU2SDIyLjI4NlYzLjkxelxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNNTAuNDU4LDU0LjE2N2MwLDIuMjA2LTEuNzk0LDQtNCw0aC0zMi43NWMtMi4yMDYsMC00LTEuNzk0LTQtNHYtNDAuNWg0MC43NVY1NC4xNjd6IE0zOC4yNTUsNDYuMTUzVjIyLjg0N2MwLTAuNTUyLDAuNDQ4LTEsMS0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgczEsMC40NDgsMSwxdjIzLjMwNmMwLDAuNTUyLTAuNDQ4LDEtMSwxUzM4LjI1NSw0Ni43MDYsMzguMjU1LDQ2LjE1M3ogTTI5LjA4Myw0Ni4xNTNWMjIuODQ3YzAtMC41NTIsMC40NDgtMSwxLTFzMSwwLjQ0OCwxLDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2MjMuMzA2YzAsMC41NTItMC40NDgsMS0xLDFTMjkuMDgzLDQ2LjcwNiwyOS4wODMsNDYuMTUzeiBNMTkuOTExLDQ2LjE1M1YyMi44NDdjMC0wLjU1MiwwLjQ0OC0xLDEtMXMxLDAuNDQ4LDEsMXYyMy4zMDZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjMCwwLjU1Mi0wLjQ0OCwxLTEsMVMxOS45MTEsNDYuNzA2LDE5LjkxMSw0Ni4xNTN6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+YDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVRvZG9zID0gKCkgPT4ge1xuICBsZXQgaW5uZXJIVE1MID0gJyc7XG4gIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICBpbm5lckhUTUwgKz0gYCR7cmV0dXJuVG9kbyh0b2RvKX1gO1xuICB9KTtcbiAgcmV0dXJuIGlubmVySFRNTDtcbn07XG5cbmV4cG9ydCBjb25zdCByZXR1cm5IZWFkPSgpPT57XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwidG9kby1oZWFkXCI+XG4gICAgICAgICAgICAgICAgPGgxPlRvZGF5J3MgVG8gRG88L2gxPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjVweFwiIGhlaWdodD1cIjI1cHhcIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDAwMDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTc3MS43NzYgNzk0Ljg4QTM4NCAzODQgMCAwIDEgMTI4IDUxMmg2NGEzMjAgMzIwIDAgMCAwIDU1NS43MTIgMjE2LjQ0OEg2NTQuNzJhMzIgMzIgMCAxIDEgMC02NGgxNDkuMDU2YTMyIDMyIDAgMCAxIDMyIDMydjE0OC45MjhhMzIgMzIgMCAxIDEtNjQgMHYtNTAuNTZ6TTI3Ni4yODggMjk1LjYxNmg5Mi45OTJhMzIgMzIgMCAwIDEgMCA2NEgyMjAuMTZhMzIgMzIgMCAwIDEtMzItMzJWMTc4LjU2YTMyIDMyIDAgMCAxIDY0IDB2NTAuNTZBMzg0IDM4NCAwIDAgMSA4OTYuMTI4IDUxMmgtNjRhMzIwIDMyMCAwIDAgMC01NTUuNzc2LTIxNi4zODR6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+YDtcbn1cblxuZXhwb3J0IGNvbnN0IHJldHVyblRvZG9Gb3JtPSgpPT57XG4gICAgcmV0dXJuIGA8Zm9ybSBjbGFzcz1cImFkZC10YXNrXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZCB0byB5b3VyIGxpc3QuLi5cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZCBjbGFzcz1cImxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgZmlsbD1cIiMwMDAwMDBcIiB3aWR0aD1cIjI1cHhcIiBoZWlnaHQ9XCIyNXB4XCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTg2NCAxNzBoLTYwYy00LjQgMC04IDMuNi04IDh2NTE4SDMxMHYtNzNjMC02LjctNy44LTEwLjUtMTMtNi4zbC0xNDEuOSAxMTJhOCA4IDAgMCAwIDAgMTIuNmwxNDEuOSAxMTJjNS4zIDQuMiAxMyAuNCAxMy02LjN2LTc1aDQ5OGMzNS4zIDAgNjQtMjguNyA2NC02NFYxNzhjMC00LjQtMy42LTgtOC04elwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZm9ybT5gO1xufVxuIiwiaW1wb3J0IHRvZG9zIGZyb20gXCIuL3RvZG9zXCI7XG5pbXBvcnQge1xuICByZXR1cm5IZWFkLFxuICByZXR1cm5Ub2RvRm9ybSxcbiAgZ2VuZXJhdGVUb2RvcyxcbiAgcmV0dXJuVG9kbyxcbn0gZnJvbSBcIi4vY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgYXBwZW5kSFRNTCA9ICgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gYCR7cmV0dXJuSGVhZCgpfSR7cmV0dXJuVG9kb0Zvcm0oKX1gO1xuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmNvbnN0IGdldFRvZG9JbnB1dCA9ICgpID0+IHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtIGlucHV0XCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5ld1RvZG8gPSAoZGVzY3JpcHRpb24pID0+IHtcbiAgbGV0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8td3JhcHBlclwiKTtcbiAgY29uc3QgbmV3VG9kbyA9IHtcbiAgICBkZXNjcmlwdGlvbixcbiAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICBpbmRleDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gIH07XG4gIHRvZG9zLnB1c2gobmV3VG9kbyk7XG4gIGh0bWwuaW5uZXJIVE1MICs9IHJldHVyblRvZG8obmV3VG9kbyk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkVG9kbyA9ICgpID0+IHtcbiAgY29uc3QgaW5wdXQgPSBnZXRUb2RvSW5wdXQoKTtcbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gYnV0dG9uXCIpO1xuICBsZXQgaGFzVGV4dCA9IFwiXCI7XG4gIFtcImNsaWNrXCIsIFwiZm9jdXNcIiwgXCJjaGFuZ2VcIl0uZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoKSA9PiB7XG4gICAgICBoYXNUZXh0ID0gaW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgaWYgKCFoYXNUZXh0KSByZXR1cm47XG4gICAgICBzdWJtaXQucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVRvZG8gPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgYXJ0aWNsZSA9IGV2ZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICBhcnRpY2xlLnJlbW92ZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IHN1Ym1pdFRvZG8gPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaW5wdXQgPSBnZXRUb2RvSW5wdXQoKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBpbnB1dC52YWx1ZS50cmltKCk7XG4gIGlmICghZGVzY3JpcHRpb24pIHJldHVybjtcbiAgY3JlYXRlTmV3VG9kbyhkZXNjcmlwdGlvbik7XG4gIGdldFRvZG9JbnB1dCgpLnZhbHVlID0gXCJcIjtcbn07XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zXCIpLnByZXBlbmQoYXBwZW5kSFRNTCgpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXdyYXBwZXJcIikuaW5uZXJIVE1MID0gZ2VuZXJhdGVUb2RvcygpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdFRvZG8pO1xuICBhZGRUb2RvKCk7XG59O1xuXG53aW5kb3cucmVtb3ZlVG9kbyA9IHJlbW92ZVRvZG87XG4iLCJjb25zdCB0b2RvcyA9IFtdO1xuZXhwb3J0IGRlZmF1bHQgdG9kb3M7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=