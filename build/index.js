/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./src/helpers/metaFields.js":
/*!***********************************!*\
  !*** ./src/helpers/metaFields.js ***!
  \***********************************/
/*! exports provided: applyWithDispatchMeta, applyWithSelectMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyWithDispatchMeta", function() { return applyWithDispatchMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyWithSelectMeta", function() { return applyWithSelectMeta; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);

var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var applyWithDispatchMeta = withDispatch(function (dispatch, ownProps) {
  return {
    setMetaFieldValue: function setMetaFieldValue(value) {
      dispatch('core/editor').editPost({
        meta: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, ownProps.metaFieldName, value)
      });
    }
  };
});
var applyWithSelectMeta = withSelect(function (select, ownProps) {
  return {
    metaFieldValue: select('core/editor').getEditedPostAttribute('meta')[ownProps.metaFieldName]
  };
});


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_mosaicSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings/mosaicSettings */ "./src/settings/mosaicSettings.js");
// src/index.js
var registerPlugin = wp.plugins.registerPlugin;

/**
 * Every block starts by registering a new plugin type definition.
 * @see https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/#registering-a-block
 */

registerPlugin('mosaic-settings', {
  render: _settings_mosaicSettings__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/settings/mosaicSettings.js":
/*!****************************************!*\
  !*** ./src/settings/mosaicSettings.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _primaryColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./primaryColor */ "./src/settings/primaryColor.js");
/* harmony import */ var _toggleTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggleTitle */ "./src/settings/toggleTitle.js");

// settings/pluginSidebar.js
var PluginSidebar = wp.editPost.PluginSidebar;



var mosaicSettings = function mosaicSettings() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginSidebar, {
    name: 'mosaic-settings',
    icon: 'screenoptions',
    title: 'Mosaic Settings'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'mosaic-settings'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_toggleTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    metaFieldName: '_mosaic_show_title_block'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_primaryColor__WEBPACK_IMPORTED_MODULE_1__["default"], {
    metaFieldName: '_mosaic_primary_colour'
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (mosaicSettings);

/***/ }),

/***/ "./src/settings/primaryColor.js":
/*!**************************************!*\
  !*** ./src/settings/primaryColor.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_metaFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/metaFields */ "./src/helpers/metaFields.js");

var PanelColorSettings = wp.editor.PanelColorSettings;

var compose = wp.compose.compose;
var __ = wp.i18n.__;

var ColorOptions = function ColorOptions(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelColorSettings, {
    title: __('Global Color Settings'),
    colorSettings: [{
      value: props.metaFieldValue,
      onChange: function onChange(value) {
        return props.setMetaFieldValue(value);
      },
      label: __('Primary Color')
    }]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (compose(_helpers_metaFields__WEBPACK_IMPORTED_MODULE_1__["applyWithSelectMeta"], _helpers_metaFields__WEBPACK_IMPORTED_MODULE_1__["applyWithDispatchMeta"])(ColorOptions));

/***/ }),

/***/ "./src/settings/toggleTitle.js":
/*!*************************************!*\
  !*** ./src/settings/toggleTitle.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


var ToggleControl = wp.components.ToggleControl;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var compose = wp.compose.compose;
var __ = wp.i18n.__;

var MetaBlockField = function MetaBlockField(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: __('Show Post Title?'),
    help: props.metaFieldValue ? 'The title will be shown.' : 'The title will be hidden.',
    checked: props.metaFieldValue,
    onChange: function onChange(value) {
      props.setMetaFieldValue(value);
    }
  });
};

var applyWithDispatch = withDispatch(function (dispatch, ownProps) {
  return {
    setMetaFieldValue: function setMetaFieldValue(value) {
      dispatch('core/editor').editPost({
        meta: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, ownProps.metaFieldName, value)
      });
    }
  };
});
var applyWithSelect = withSelect(function (select, ownProps) {
  return {
    metaFieldValue: select('core/editor').getEditedPostAttribute('meta')[ownProps.metaFieldName]
  };
});
/* harmony default export */ __webpack_exports__["default"] = (compose(applyWithSelect, applyWithDispatch)(MetaBlockField));

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map