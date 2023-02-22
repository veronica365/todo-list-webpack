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
                    <div class="delete link">
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
    index: _todos__WEBPACK_IMPORTED_MODULE_0__["default"].length + 1,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLGlFQUFlLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vc3JjL2Nzcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vc3JjL2Nzcy9zdHlsZXMuY3NzPzk5YTMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9zcmMvbW9kdWxlcy9wYWludC11aS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL3NyYy9tb2R1bGVzL3RvZG9zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxuXFxuICAtLWxpZ2h0LWdyYXk6ICNmNmY2ZjY7XFxuICAtLW1lZGl1bS1ncmF5OiAjYzFjMWMzO1xcbiAgLS1kYXJrOiAjZDBjZGNkO1xcbiAgLS1ibGFjazogIzAwMDtcXG4gIC0td2hpdGU6ICNmZmY7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5saW5rIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG9zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2IoMCAwIDAgLyAxNSUpO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0b3A6IDA7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiBtYXJnaW4gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4td2lkdGg6IDA7XFxufVxcblxcbi50b2RvcyAudG9kby1idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4IDUlO1xcbn1cXG5cXG4udG9kb3MgLnRvZG8taGVhZCB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigwIDAgMCAvIDglKTtcXG59XFxuXFxuLnRvZG9zIC50b2RvLWhlYWQgLmljb24ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi50b2RvcyAudG9kby1idXR0b24gc3BhbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRvZG9zIC50b2RvLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvZG9zIC5hZGQtdGFzayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi50b2RvcyAuYWRkLXRhc2ssXFxuLnRvZG9zIC5hZGQtdGFzayBsYWJlbCxcXG4udG9kb3MgLmFkZC10YXNrIGxhYmVsIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50b2RvcyAuYWRkLXRhc2sgbGFiZWwge1xcbiAgcGFkZGluZzogNnB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDAgMCAwIC8gOCUpO1xcbn1cXG5cXG4udG9kb3MgLmFkZC10YXNrIGxhYmVsIGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi50b2RvcyAuYWRkLXRhc2sgbGFiZWwgaW5wdXQge1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4udG9kb3MgLnRvZG8td3JhcHBlciAudG9kby1pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMCAwIDAgLyA4JSk7XFxufVxcblxcbi50b2RvLWl0ZW0gLml0ZW0td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi50b2RvLWl0ZW0gLnRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRvZG8taXRlbSAudG9kbyAudG9kby1jaGVjayB7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udG9kby1pdGVtIC50b2RvIC50b2RvLWNoZWNrIGlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLWl0ZW0gLnRvZG8gLnRvZG8tY2hlY2sgLmNoZWNrbWFyayB7XFxuICB3aWR0aDogMjJweDtcXG4gIGhlaWdodDogMjJweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1tZWRpdW0tZ3JheSk7XFxufVxcblxcbi50b2RvLWl0ZW0gLnRvZG8gLnRvZG8tdGl0bGUge1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICBwYWRkaW5nOiAxMnB4IDA7XFxufVxcblxcbi50b2RvLWl0ZW0uY29tcGxldGVkIC50b2RvIC50b2RvLXRpdGxlIHtcXG4gIHBhZGRpbmc6IDEycHggMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvLWl0ZW0uY29tcGxldGVkIC50b2RvIC50b2RvLWNoZWNrIC5jaGVja21hcmsge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG59XFxuXFxuLnRvZG8taXRlbSAubW9yZSAubW92ZSxcXG4udG9kby1pdGVtIC5tb3JlIC5kZWxldGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnRvZG8taXRlbSAubW9yZSAubW92ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1pdGVtIC5tb3JlIHtcXG4gIHJpZ2h0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrbWFyazo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1jaGVjayAuY2hlY2ttYXJrOjphZnRlciB7XFxuICBsZWZ0OiA3cHg7XFxuICB0b3A6IDNweDtcXG4gIHdpZHRoOiA0cHg7XFxuICBoZWlnaHQ6IDlweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogc29saWQgdmFyKC0tYmxhY2spO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLnRvZG8tY2hlY2sgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6OmFmdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QiwrQkFBK0I7O0VBRS9CLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0QyxjQUFjO0VBQ2QsTUFBTTtFQUNOLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBOzs7RUFHRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFlBQVk7RUFDWiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFFBQVE7RUFDUixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcXG5cXG4gIC0tbGlnaHQtZ3JheTogI2Y2ZjZmNjtcXG4gIC0tbWVkaXVtLWdyYXk6ICNjMWMxYzM7XFxuICAtLWRhcms6ICNkMGNkY2Q7XFxuICAtLWJsYWNrOiAjMDAwO1xcbiAgLS13aGl0ZTogI2ZmZjtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmxpbmsge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kb3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYigwIDAgMCAvIDE1JSk7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHRvcDogMDtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zaXRpb246IG1hcmdpbiAzMDBtcyBlYXNlLWluLW91dDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi13aWR0aDogMDtcXG59XFxuXFxuLnRvZG9zIC50b2RvLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHggNSU7XFxufVxcblxcbi50b2RvcyAudG9kby1oZWFkIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDAgMCAwIC8gOCUpO1xcbn1cXG5cXG4udG9kb3MgLnRvZG8taGVhZCAuaWNvbiB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnRvZG9zIC50b2RvLWJ1dHRvbiBzcGFuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udG9kb3MgLnRvZG8td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udG9kb3MgLmFkZC10YXNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLnRvZG9zIC5hZGQtdGFzayxcXG4udG9kb3MgLmFkZC10YXNrIGxhYmVsLFxcbi50b2RvcyAuYWRkLXRhc2sgbGFiZWwgaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRvZG9zIC5hZGQtdGFzayBsYWJlbCB7XFxuICBwYWRkaW5nOiA2cHggMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMCAwIDAgLyA4JSk7XFxufVxcblxcbi50b2RvcyAuYWRkLXRhc2sgbGFiZWwgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLnRvZG9zIC5hZGQtdGFzayBsYWJlbCBpbnB1dCB7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi50b2RvcyAudG9kby13cmFwcGVyIC50b2RvLWl0ZW0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigwIDAgMCAvIDglKTtcXG59XFxuXFxuLnRvZG8taXRlbSAuaXRlbS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLnRvZG8taXRlbSAudG9kbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9kby1pdGVtIC50b2RvIC50b2RvLWNoZWNrIHtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50b2RvLWl0ZW0gLnRvZG8gLnRvZG8tY2hlY2sgaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8taXRlbSAudG9kbyAudG9kby1jaGVjayAuY2hlY2ttYXJrIHtcXG4gIHdpZHRoOiAyMnB4O1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLW1lZGl1bS1ncmF5KTtcXG59XFxuXFxuLnRvZG8taXRlbSAudG9kbyAudG9kby10aXRsZSB7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIHBhZGRpbmc6IDEycHggMDtcXG59XFxuXFxuLnRvZG8taXRlbS5jb21wbGV0ZWQgLnRvZG8gLnRvZG8tdGl0bGUge1xcbiAgcGFkZGluZzogMTJweCAwO1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvZG8taXRlbS5jb21wbGV0ZWQgLnRvZG8gLnRvZG8tY2hlY2sgLmNoZWNrbWFyayB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmspO1xcbn1cXG5cXG4udG9kby1pdGVtIC5tb3JlIC5tb3ZlLFxcbi50b2RvLWl0ZW0gLm1vcmUgLmRlbGV0ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4udG9kby1pdGVtIC5tb3JlIC5tb3ZlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLWl0ZW0gLm1vcmUge1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2ttYXJrOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLWNoZWNrIC5jaGVja21hcms6OmFmdGVyIHtcXG4gIGxlZnQ6IDdweDtcXG4gIHRvcDogM3B4O1xcbiAgd2lkdGg6IDRweDtcXG4gIGhlaWdodDogOXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4udG9kby1jaGVjayBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazo6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4vbW9kdWxlcy9wYWludC11aS5qcyc7XG5pbXBvcnQgJy4vY3NzL3N0eWxlcy5jc3MnO1xuXG5pbml0aWFsaXplKCk7XG4iLCJpbXBvcnQgdG9kb3MgZnJvbSAnLi90b2Rvcy5qcyc7XG5cbmV4cG9ydCBjb25zdCByZXR1cm5Ub2RvID0gKHRhc2spID0+IHtcbiAgY29uc3QgY29tcGxldGVkID0gdGFzay5jb21wbGV0ZWQgPyAnIGNvbXBsZXRlZCcgOiAnJztcbiAgcmV0dXJuIGA8YXJ0aWNsZSBjbGFzcz1cInRvZG8taXRlbSR7Y29tcGxldGVkfVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInRvZG8tY2hlY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPVwiY2hlY2tlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9kby10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0YXNrLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmUgbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjI1cHhcIiBoZWlnaHQ9XCIyNXB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTMgNUMxMyA0LjQ0NzcyIDEyLjU1MjMgNCAxMiA0QzExLjQ0NzcgNCAxMSA0LjQ0NzcyIDExIDVDMTEgNS41NTIyOCAxMS40NDc3IDYgMTIgNkMxMi41NTIzIDYgMTMgNS41NTIyOCAxMyA1WlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiMwMDAwMDBcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEzIDEyQzEzIDExLjQ0NzcgMTIuNTUyMyAxMSAxMiAxMUMxMS40NDc3IDExIDExIDExLjQ0NzcgMTEgMTJDMTEgMTIuNTUyMyAxMS40NDc3IDEzIDEyIDEzQzEyLjU1MjMgMTMgMTMgMTIuNTUyMyAxMyAxMlpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMyAxOUMxMyAxOC40NDc3IDEyLjU1MjMgMTggMTIgMThDMTEuNDQ3NyAxOCAxMSAxOC40NDc3IDExIDE5QzExIDE5LjU1MjMgMTEuNDQ3NyAyMCAxMiAyMEMxMi41NTIzIDIwIDEzIDE5LjU1MjMgMTMgMTlaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiIzAwMDAwMFwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlIGxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgZmlsbD1cIiMwMDAwMDBcIiBoZWlnaHQ9XCIyNXB4XCIgd2lkdGg9XCIyNXB4XCIgdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmlld0JveD1cIjAgMCA2MC4xNjcgNjAuMTY3XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTU0LjUsMTEuNjY3SDM5Ljg4VjMuOTFjMC0yLjE1Ni0xLjc1NC0zLjkxLTMuOTEtMy45MUgyNC4xOTZjLTIuMTU2LDAtMy45MSwxLjc1NC0zLjkxLDMuOTF2Ny43NTZINS42NjdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLTAuNTUyLDAtMSwwLjQ0OC0xLDFzMC40NDgsMSwxLDFoMi4wNDJ2NDAuNWMwLDMuMzA5LDIuNjkxLDYsNiw2aDMyLjc1YzMuMzA5LDAsNi0yLjY5MSw2LTZ2LTQwLjVINTQuNWMwLjU1MiwwLDEtMC40NDgsMS0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUzU1LjA1MiwxMS42NjcsNTQuNSwxMS42Njd6IE0yMi4yODYsMy45MWMwLTEuMDUzLDAuODU3LTEuOTEsMS45MS0xLjkxSDM1Ljk3YzEuMDUzLDAsMS45MSwwLjg1NywxLjkxLDEuOTF2Ny43NTZIMjIuMjg2VjMuOTF6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE01MC40NTgsNTQuMTY3YzAsMi4yMDYtMS43OTQsNC00LDRoLTMyLjc1Yy0yLjIwNiwwLTQtMS43OTQtNC00di00MC41aDQwLjc1VjU0LjE2N3ogTTM4LjI1NSw0Ni4xNTNWMjIuODQ3YzAtMC41NTIsMC40NDgtMSwxLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzMSwwLjQ0OCwxLDF2MjMuMzA2YzAsMC41NTItMC40NDgsMS0xLDFTMzguMjU1LDQ2LjcwNiwzOC4yNTUsNDYuMTUzeiBNMjkuMDgzLDQ2LjE1M1YyMi44NDdjMC0wLjU1MiwwLjQ0OC0xLDEtMXMxLDAuNDQ4LDEsMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYyMy4zMDZjMCwwLjU1Mi0wLjQ0OCwxLTEsMVMyOS4wODMsNDYuNzA2LDI5LjA4Myw0Ni4xNTN6IE0xOS45MTEsNDYuMTUzVjIyLjg0N2MwLTAuNTUyLDAuNDQ4LTEsMS0xczEsMC40NDgsMSwxdjIzLjMwNlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMwLDAuNTUyLTAuNDQ4LDEtMSwxUzE5LjkxMSw0Ni43MDYsMTkuOTExLDQ2LjE1M3pcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5gO1xufTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlVG9kb3MgPSAoKSA9PiB7XG4gIGxldCBpbm5lckhUTUwgPSAnJztcbiAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGlubmVySFRNTCArPSBgJHtyZXR1cm5Ub2RvKHRvZG8pfWA7XG4gIH0pO1xuICByZXR1cm4gaW5uZXJIVE1MO1xufTtcblxuZXhwb3J0IGNvbnN0IHJldHVybkhlYWQ9KCk9PntcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJ0b2RvLWhlYWRcIj5cbiAgICAgICAgICAgICAgICA8aDE+VG9kYXkncyBUbyBEbzwvaDE+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyNXB4XCIgaGVpZ2h0PVwiMjVweFwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIiMwMDAwMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNzcxLjc3NiA3OTQuODhBMzg0IDM4NCAwIDAgMSAxMjggNTEyaDY0YTMyMCAzMjAgMCAwIDAgNTU1LjcxMiAyMTYuNDQ4SDY1NC43MmEzMiAzMiAwIDEgMSAwLTY0aDE0OS4wNTZhMzIgMzIgMCAwIDEgMzIgMzJ2MTQ4LjkyOGEzMiAzMiAwIDEgMS02NCAwdi01MC41NnpNMjc2LjI4OCAyOTUuNjE2aDkyLjk5MmEzMiAzMiAwIDAgMSAwIDY0SDIyMC4xNmEzMiAzMiAwIDAgMS0zMi0zMlYxNzguNTZhMzIgMzIgMCAwIDEgNjQgMHY1MC41NkEzODQgMzg0IDAgMCAxIDg5Ni4xMjggNTEyaC02NGEzMjAgMzIwIDAgMCAwLTU1NS43NzYtMjE2LjM4NHpcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5leHBvcnQgY29uc3QgcmV0dXJuVG9kb0Zvcm09KCk9PntcbiAgICByZXR1cm4gYDxmb3JtIGNsYXNzPVwiYWRkLXRhc2tcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQWRkIHRvIHlvdXIgbGlzdC4uLlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkIGNsYXNzPVwibGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBmaWxsPVwiIzAwMDAwMFwiIHdpZHRoPVwiMjVweFwiIGhlaWdodD1cIjI1cHhcIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNODY0IDE3MGgtNjBjLTQuNCAwLTggMy42LTggOHY1MThIMzEwdi03M2MwLTYuNy03LjgtMTAuNS0xMy02LjNsLTE0MS45IDExMmE4IDggMCAwIDAgMCAxMi42bDE0MS45IDExMmM1LjMgNC4yIDEzIC40IDEzLTYuM3YtNzVoNDk4YzM1LjMgMCA2NC0yOC43IDY0LTY0VjE3OGMwLTQuNC0zLjYtOC04LTh6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9mb3JtPmA7XG59XG4iLCJpbXBvcnQgdG9kb3MgZnJvbSBcIi4vdG9kb3NcIjtcbmltcG9ydCB7XG4gIHJldHVybkhlYWQsXG4gIHJldHVyblRvZG9Gb3JtLFxuICBnZW5lcmF0ZVRvZG9zLFxuICByZXR1cm5Ub2RvLFxufSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBhcHBlbmRIVE1MID0gKCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBgJHtyZXR1cm5IZWFkKCl9JHtyZXR1cm5Ub2RvRm9ybSgpfWA7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgZ2V0VG9kb0lucHV0ID0gKCkgPT4ge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gaW5wdXRcIik7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTmV3VG9kbyA9IChkZXNjcmlwdGlvbikgPT4ge1xuICBsZXQgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby13cmFwcGVyXCIpO1xuICBjb25zdCBuZXdUb2RvID0ge1xuICAgIGRlc2NyaXB0aW9uLFxuICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIGluZGV4OiB0b2Rvcy5sZW5ndGggKyAxLFxuICB9O1xuICB0b2Rvcy5wdXNoKG5ld1RvZG8pO1xuICBodG1sLmlubmVySFRNTCArPSByZXR1cm5Ub2RvKG5ld1RvZG8pO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFRvZG8gPSAoKSA9PiB7XG4gIGNvbnN0IGlucHV0ID0gZ2V0VG9kb0lucHV0KCk7XG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtIGJ1dHRvblwiKTtcbiAgbGV0IGhhc1RleHQgPSBcIlwiO1xuICBbXCJjbGlja1wiLCBcImZvY3VzXCIsIFwiY2hhbmdlXCJdLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKCkgPT4ge1xuICAgICAgaGFzVGV4dCA9IGlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgIGlmICghaGFzVGV4dCkgcmV0dXJuO1xuICAgICAgc3VibWl0LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdWJtaXRUb2RvID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGlucHV0ID0gZ2V0VG9kb0lucHV0KCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gaW5wdXQudmFsdWUudHJpbSgpO1xuICBpZiAoIWRlc2NyaXB0aW9uKSByZXR1cm47XG4gIGNyZWF0ZU5ld1RvZG8oZGVzY3JpcHRpb24pO1xuICBnZXRUb2RvSW5wdXQoKS52YWx1ZSA9IFwiXCI7XG59O1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvc1wiKS5wcmVwZW5kKGFwcGVuZEhUTUwoKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby13cmFwcGVyXCIpLmlubmVySFRNTCA9IGdlbmVyYXRlVG9kb3MoKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzdWJtaXRUb2RvKTtcbiAgYWRkVG9kbygpO1xufTtcbiIsImNvbnN0IHRvZG9zID0gW107XG5leHBvcnQgZGVmYXVsdCB0b2RvcztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==