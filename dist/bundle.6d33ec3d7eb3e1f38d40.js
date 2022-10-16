/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list

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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/Insurance.js":
/*!**************************!*\
  !*** ./src/Insurance.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Insurance": () => (/* binding */ Insurance)
/* harmony export */ });
/* harmony import */ var _UIController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIController */ "./src/UIController.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Insurance = /*#__PURE__*/function () {
  function Insurance(model, year, level) {
    _classCallCheck(this, Insurance);
    this.model = model;
    this.year = year;
    this.level = level;
  }
  _createClass(Insurance, [{
    key: "calculatePrice",
    value: function calculatePrice() {
      var price;
      var basePrice = 2000;
      switch (this.model) {
        case "1":
          price = basePrice * 1.15;
          break;
        case "2":
          price = basePrice * 1.05;
          break;
        case "3":
          price = basePrice * 1.3;
          break;
        default:
          _UIController__WEBPACK_IMPORTED_MODULE_0__.UIController.displayError("Model based price error!");
      }
      var diffYear = getYearDifference(this.year);
      price -= (diffYear * 3 - price) / 100;
      price = calculateLevel(this.level, price);
      function getYearDifference(year) {
        var difference = new Date().getFullYear() - year;
        return difference;
      }
      ;
      function calculateLevel(level, price) {
        if (level === "basic") {
          price *= 1.3;
        } else {
          price *= 1.5;
        }
        return +price.toFixed(2);
      }
      ;
      return price;
    }
  }]);
  return Insurance;
}();

/***/ }),

/***/ "./src/UIController.js":
/*!*****************************!*\
  !*** ./src/UIController.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIController": () => (/* binding */ UIController)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _assets_images_spinner_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/spinner.gif */ "./src/assets/images/spinner.gif");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var UIController = /*#__PURE__*/function () {
  function UIController() {
    _classCallCheck(this, UIController);
  }
  _createClass(UIController, null, [{
    key: "displayYears",
    value: function displayYears() {
      var presentYear = new Date().getFullYear();
      var maxYear = presentYear - 20;
      var yearSelect = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.qs)("[data-select-year]");
      createOptions();
      function createOptions() {
        for (var i = presentYear; i >= maxYear; i--) {
          var option = document.createElement("option");
          option.value = i;
          option.textContent = i;
          yearSelect.append(option);
        }
      }
    }
  }, {
    key: "displayError",
    value: function displayError(message) {
      createErrDiv();
      function createErrDiv() {
        var div = document.createElement("div");
        div.classList.add("error");
        div.innerHTML = "<p>".concat(message, "</p>");
        var formGroup = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.qs)(".form-group");
        _index__WEBPACK_IMPORTED_MODULE_2__.form.insertBefore(div, formGroup);
      }
      ;
      function removeErrDiv() {
        var timer = setTimeout(function () {
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.qs)(".error").remove();
        }, 2000);
        return function () {
          clearTimeout(timer);
        };
      }
      ;
      return removeErrDiv();
    }
  }, {
    key: "displayResult",
    value: function displayResult(insurance, price) {
      var model = defineModel();
      function defineModel() {
        var model = insurance.model;
        switch (model) {
          case "1":
            model = "American";
            break;
          case "2":
            model = "Asian";
            break;
          case "3":
            model = "European";
            break;
          default:
            UIController.displayError("Cannot get model name");
        }
        return model;
      }
      function displaySummaryDiv() {
        var div = document.createElement("div");
        if (div) {
          div.innerHTML = "\n                    <p class=\"header\">Summary</p>\n                    <p>Model: ".concat(model, "</p>\n                    <p>Year: ").concat(insurance.year, "<p/>\n                    <p>Level: ").concat(insurance.level, "</p>\n                    <p>Total: ").concat(price, "</p>\n                ");
        }
        return div;
      }
      ;
      function displaySpinner() {
        var spinner = getSpinner();
        var div = displaySummaryDiv();
        var result = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.qs)(".result");
        var timer = setTimeout(function () {
          spinner.style.display = "none";
          result.append(div);
        }, 2000);
        return function () {
          clearTimeout(timer);
        };
      }
      return displaySpinner();
      function getSpinner() {
        var spinnerCont = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.qs)(".spinner");
        var spinnerImg = document.createElement("img");
        spinnerImg.src = _assets_images_spinner_gif__WEBPACK_IMPORTED_MODULE_1__;
        spinnerImg.style.display = "block";
        return spinnerCont.appendChild(spinnerImg);
      }
    }
  }]);
  return UIController;
}();
;

/***/ }),

/***/ "./src/globals.js":
/*!************************!*\
  !*** ./src/globals.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "globals": () => (/* binding */ globals)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");



function globals() {
  var form = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.qs)("[data-quote-form]");
  return form;
}
;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "form": () => (/* binding */ form)
/* harmony export */ });
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.scss */ "./src/style/main.scss");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.js */ "./src/globals.js");
/* harmony import */ var _UIController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UIController */ "./src/UIController.js");
/* harmony import */ var _Insurance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Insurance */ "./src/Insurance.js");





var form = (0,_globals_js__WEBPACK_IMPORTED_MODULE_2__.globals)();


(function () {
  _UIController__WEBPACK_IMPORTED_MODULE_3__.UIController.displayYears();
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var _getSelectInputs = getSelectInputs(),
      model = _getSelectInputs.model,
      year = _getSelectInputs.year,
      level = _getSelectInputs.level;
    if (!model) {
      _UIController__WEBPACK_IMPORTED_MODULE_3__.UIController.displayError("Please select the model");
    } else {
      removePrevResult();
      getInsurance(model, year, level);
    }
  });
  function getSelectInputs() {
    var model = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.qs)("[data-select-model]").value;
    var year = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.qs)("[data-select-year]").value;
    var level = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.qs)('input[name="level"]:checked').value;
    return {
      model: model,
      year: year,
      level: level
    };
  }
  function getInsurance(model, year, level) {
    var insurance = new _Insurance__WEBPACK_IMPORTED_MODULE_4__.Insurance(model, year, level);
    var insurancePrice = insurance.calculatePrice();
    _UIController__WEBPACK_IMPORTED_MODULE_3__.UIController.displayResult(insurance, insurancePrice);
  }
  function removePrevResult() {
    var prevResult = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.qs)(".result div");
    if (prevResult) prevResult.remove();
  }
})();

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qs": () => (/* binding */ qs)
/* harmony export */ });


function qs(selector) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return parent.querySelector(selector);
}
;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss ***!
  \**********************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.container {\n  margin: 1rem auto;\n  padding: 1rem;\n  max-width: 30rem;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  position: relative;\n  background: #8e9eab; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to right, #c6d4d8, #a3b2bf); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #c6d4d8, #a3b2bf); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.container h1 {\n  color: #333;\n  padding: 0.5rem;\n}\n\n.content-form {\n  padding: 0.5rem 1rem;\n  background-color: #fff;\n  position: relative;\n}\n\n.form-group label {\n  font-size: 1rem;\n}\n\n.select-control {\n  width: 100%;\n  height: 2rem;\n  margin: 1rem 0;\n  background-color: #fff;\n  color: #333;\n}\n\n.form-group legend {\n  color: #333;\n  padding: 0 1rem 0 0.5rem;\n}\n\n.form-check {\n  margin: 0.5rem 0;\n  color: #333;\n  padding-left: 0.2rem;\n}\n\n.error {\n  position: absolute;\n  top: 5%;\n  right: 50%;\n  left: 50%;\n  width: 18rem;\n  background-color: #fc0404;\n  border: 1px solid #fdfbfb;\n  padding: 0.5rem;\n  margin-bottom: 20px;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: bold;\n  color: #fdfbfb;\n}\n\n.error p {\n  margin: 0;\n}\n\n.spinner img {\n  display: none;\n  margin: 0 auto;\n}\n\n.result > div {\n  background-color: #fdfde0;\n  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;\n  text-align: center;\n  padding: 0 0 20px 0;\n  margin: 0.1rem 0;\n}\n\n.result > div p {\n  margin: 0.5rem 0;\n}\n\n.result > div p.header {\n  margin-bottom: 10px;\n  color: black;\n  padding: 10px;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n\n.submit-btn {\n  padding: 0.3rem 2rem;\n  margin: 0.5rem 0 0.5rem 0;\n  background-color: #67686e;\n  font-weight: bold;\n  color: white;\n  text-shadow: 0.125rem 0.125rem 0.125rem black;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n.submit-btn:hover {\n  background-color: #4e7953;\n}", "",{"version":3,"sources":["webpack://./src/style/main.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;AACJ;;AAEA;EACI,iBAAA;EACA,aAAA;EACA,gBAAA;EACA,2CAAA;EACA,kBAAA;EACA,mBAAA,EAAA,8BAAA;EACA,+DAAA,EAAA,+BAAA;EACA,uDAAA,EAAA,qEAAA;AACJ;;AAEA;EACI,WAAA;EACA,eAAA;AACJ;;AACA;EACI,oBAAA;EACA,sBAAA;EACA,kBAAA;AAEJ;;AACA;EACI,eAAA;AAEJ;;AACA;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,sBAAA;EACA,WAAA;AAEJ;;AACA;EACI,WAAA;EACA,wBAAA;AAEJ;;AACA;EACI,gBAAA;EACA,WAAA;EACA,oBAAA;AAEJ;;AACA;EACI,kBAAA;EACA,OAAA;EACA,UAAA;EACA,SAAA;EACA,YAAA;EACA,yBAAA;EACA,yBAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACA,iBAAA;EACA,cAAA;AAEJ;;AACA;EACI,SAAA;AAEJ;;AACA;EACI,aAAA;EACA,cAAA;AAEJ;;AACA;EACI,yBAAA;EACA,sGAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;AAEJ;;AACA;EACI,gBAAA;AAEJ;;AACA;EACI,mBAAA;EACA,YAAA;EACA,aAAA;EACA,yBAAA;EACA,iBAAA;AAEJ;;AACA;EACI,oBAAA;EACA,yBAAA;EACA,yBAAA;EACA,iBAAA;EACA,YAAA;EACA,6CAAA;EACA,eAAA;EACA,gBAAA;AAEJ;;AACA;EACI,yBAAA;AAEJ","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;    \r\n    box-sizing: border-box;\r\n}\r\n    \r\n.container {\r\n    margin: 1rem auto;\r\n    padding: 1rem;\r\n    max-width: 30rem;\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    position: relative;\r\n    background: #8e9eab;  /* fallback for old browsers */\r\n    background: -webkit-linear-gradient(to right, #c6d4d8, #a3b2bf);  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #c6d4d8, #a3b2bf); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n\r\n.container h1 {\r\n    color: #333;\r\n    padding: .5rem;\r\n}\r\n.content-form {\r\n    padding: .5rem 1rem;\r\n    background-color: #fff;\r\n    position: relative;\r\n}\r\n\r\n.form-group label {\r\n    font-size: 1rem;\r\n}\r\n\r\n.select-control {\r\n    width: 100%;\r\n    height: 2rem;\r\n    margin: 1rem 0;\r\n    background-color: #fff;\r\n    color: #333;\r\n}\r\n\r\n.form-group legend {\r\n    color: #333;\r\n    padding: 0 1rem 0 .5rem;\r\n}\r\n\r\n.form-check {\r\n    margin: .5rem 0;\r\n    color: #333;\r\n    padding-left: .2rem;\r\n}\r\n\r\n.error {\r\n    position: absolute;\r\n    top: 5%;\r\n    right: 50%;\r\n    left: 50%;\r\n    width: 18rem;\r\n    background-color: #fc0404;\r\n    border: 1px solid #fdfbfb;\r\n    padding: .5rem;\r\n    margin-bottom: 20px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    color: #fdfbfb;\r\n}\r\n\r\n.error p {\r\n    margin:0;\r\n}\r\n\r\n.spinner img {\r\n    display: none;\r\n    margin: 0 auto;\r\n}\r\n\r\n.result > div {\r\n    background-color: #fdfde0;\r\n    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;\r\n    text-align: center;\r\n    padding: 0  0 20px 0;\r\n    margin: .1rem 0;\r\n}\r\n\r\n.result > div p {\r\n    margin: .5rem 0;\r\n}\r\n\r\n.result > div p.header {\r\n    margin-bottom: 10px;\r\n    color:black;\r\n    padding: 10px;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n}\r\n\r\n.submit-btn {\r\n    padding: .3rem 2rem;\r\n    margin: .5rem 0 .5rem 0;\r\n    background-color: #67686e;\r\n    font-weight: bold;\r\n    color: white;\r\n    text-shadow: .125rem .125rem .125rem black;\r\n    cursor: pointer;\r\n    transition: .3s;\r\n}\r\n\r\n.submit-btn:hover {\r\n    background-color: #4e7953;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/assets/images/spinner.gif":
/*!***************************************!*\
  !*** ./src/assets/images/spinner.gif ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/images/spinner..gif";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.6d33ec3d7eb3e1f38d40.js.map