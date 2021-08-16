/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([1,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./src/libs/dApp/index.js
var libs_dApp_namespaceObject = {};
__webpack_require__.r(libs_dApp_namespaceObject);
__webpack_require__.d(libs_dApp_namespaceObject, "currentAccount", function() { return currentAccount; });
__webpack_require__.d(libs_dApp_namespaceObject, "currentNetwork", function() { return currentNetwork; });
__webpack_require__.d(libs_dApp_namespaceObject, "connect", function() { return connect; });
__webpack_require__.d(libs_dApp_namespaceObject, "connectIfNot", function() { return connectIfNot; });
__webpack_require__.d(libs_dApp_namespaceObject, "disconnect", function() { return disconnect; });
__webpack_require__.d(libs_dApp_namespaceObject, "subscribe", function() { return subscribe; });
__webpack_require__.d(libs_dApp_namespaceObject, "fetchData", function() { return fetchData; });
__webpack_require__.d(libs_dApp_namespaceObject, "DAPP_ADDRESS", function() { return dApp_DAPP_ADDRESS; });
__webpack_require__.d(libs_dApp_namespaceObject, "PUBLIC_STATE", function() { return PUBLIC_STATE; });
__webpack_require__.d(libs_dApp_namespaceObject, "ACCOUNT", function() { return ACCOUNT; });
__webpack_require__.d(libs_dApp_namespaceObject, "NETWORK", function() { return NETWORK; });
__webpack_require__.d(libs_dApp_namespaceObject, "DATA", function() { return DATA; });
__webpack_require__.d(libs_dApp_namespaceObject, "DEFAULT_ACCOUNT", function() { return DEFAULT_ACCOUNT; });
__webpack_require__.d(libs_dApp_namespaceObject, "DEFAULT_NETWORK", function() { return DEFAULT_NETWORK; });
__webpack_require__.d(libs_dApp_namespaceObject, "addItem", function() { return addItem; });
__webpack_require__.d(libs_dApp_namespaceObject, "updateItem", function() { return updateItem; });
__webpack_require__.d(libs_dApp_namespaceObject, "removeItem", function() { return removeItem; });
__webpack_require__.d(libs_dApp_namespaceObject, "registerSupplier", function() { return registerSupplier; });
__webpack_require__.d(libs_dApp_namespaceObject, "purchaseCoupon", function() { return purchaseCoupon; });
__webpack_require__.d(libs_dApp_namespaceObject, "rejectPurchase", function() { return rejectPurchase; });
__webpack_require__.d(libs_dApp_namespaceObject, "sendCouponToSupplier", function() { return sendCouponToSupplier; });
__webpack_require__.d(libs_dApp_namespaceObject, "acceptPurchase", function() { return acceptPurchase; });
__webpack_require__.d(libs_dApp_namespaceObject, "burnCoupon", function() { return burnCoupon; });
__webpack_require__.d(libs_dApp_namespaceObject, "withdrawFunds", function() { return withdrawFunds; });
__webpack_require__.d(libs_dApp_namespaceObject, "commitVote", function() { return commitVote; });
__webpack_require__.d(libs_dApp_namespaceObject, "revealVote", function() { return revealVote; });
__webpack_require__.d(libs_dApp_namespaceObject, "asyncFilter", function() { return asyncFilter; });
__webpack_require__.d(libs_dApp_namespaceObject, "getDataByKey", function() { return getDataByKey; });
__webpack_require__.d(libs_dApp_namespaceObject, "shortAddress", function() { return shortAddress; });
__webpack_require__.d(libs_dApp_namespaceObject, "formatDate", function() { return formatDate; });
__webpack_require__.d(libs_dApp_namespaceObject, "colorStatus", function() { return colorStatus; });
__webpack_require__.d(libs_dApp_namespaceObject, "getSupplierData", function() { return getSupplierData; });
__webpack_require__.d(libs_dApp_namespaceObject, "formatNumber", function() { return formatNumber; });
__webpack_require__.d(libs_dApp_namespaceObject, "getVoting", function() { return getVoting; });
__webpack_require__.d(libs_dApp_namespaceObject, "fetchItems", function() { return fetchItems; });
__webpack_require__.d(libs_dApp_namespaceObject, "fetchUserPurchases", function() { return fetchUserPurchases; });
__webpack_require__.d(libs_dApp_namespaceObject, "fetchUserCoupons", function() { return fetchUserCoupons; });
__webpack_require__.d(libs_dApp_namespaceObject, "fetchUserActiveCoupons", function() { return fetchUserActiveCoupons; });
__webpack_require__.d(libs_dApp_namespaceObject, "fetchUserUsedCoupons", function() { return fetchUserUsedCoupons; });
__webpack_require__.d(libs_dApp_namespaceObject, "fetchUserExpiredCoupons", function() { return fetchUserExpiredCoupons; });
__webpack_require__.d(libs_dApp_namespaceObject, "fetchSupplierItems", function() { return fetchSupplierItems; });
__webpack_require__.d(libs_dApp_namespaceObject, "fetchSupplierPurchases", function() { return fetchSupplierPurchases; });
__webpack_require__.d(libs_dApp_namespaceObject, "fetchSupplierCoupons", function() { return fetchSupplierCoupons; });
__webpack_require__.d(libs_dApp_namespaceObject, "fetchSupplierActiveCoupons", function() { return fetchSupplierActiveCoupons; });
__webpack_require__.d(libs_dApp_namespaceObject, "fetchSupplierReceivedCoupons", function() { return fetchSupplierReceivedCoupons; });
__webpack_require__.d(libs_dApp_namespaceObject, "fetchSupplierAvailableCoupons", function() { return fetchSupplierAvailableCoupons; });
__webpack_require__.d(libs_dApp_namespaceObject, "fetchSupplierAvailableFunds", function() { return fetchSupplierAvailableFunds; });
__webpack_require__.d(libs_dApp_namespaceObject, "getItemByKey", function() { return getItemByKey; });
__webpack_require__.d(libs_dApp_namespaceObject, "getPurchaseByKey", function() { return getPurchaseByKey; });
__webpack_require__.d(libs_dApp_namespaceObject, "getSupplierBalance", function() { return getSupplierBalance; });
__webpack_require__.d(libs_dApp_namespaceObject, "getSupplierAvailableBalance", function() { return getSupplierAvailableBalance; });
__webpack_require__.d(libs_dApp_namespaceObject, "getSupplierApprovalCounter", function() { return getSupplierApprovalCounter; });
__webpack_require__.d(libs_dApp_namespaceObject, "hashVote", function() { return helper_hashVote; });

// NAMESPACE OBJECT: ./src/reducers/root.js
var reducers_root_namespaceObject = {};
__webpack_require__.r(reducers_root_namespaceObject);
__webpack_require__.d(reducers_root_namespaceObject, "INIT_APP", function() { return INIT_APP; });
__webpack_require__.d(reducers_root_namespaceObject, "changeMobileMenuState", function() { return root_changeMobileMenuState; });
__webpack_require__.d(reducers_root_namespaceObject, "default", function() { return reducers_root; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@hot-loader/react-dom/index.js
var react_dom = __webpack_require__("./node_modules/@hot-loader/react-dom/index.js");
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 23 modules
var es = __webpack_require__("./node_modules/react-redux/es/index.js");

// CONCATENATED MODULE: ./src/styled-components/global/GlobalStyle.js

/* harmony default export */ var GlobalStyle = (Object(styled_components_browser_esm["b" /* createGlobalStyle */])(["body{font-family:'Montserrat',sans-serif;padding:0;margin:0;background-color:", ";}a{text-decoration:none;&:hover{text-decoration:none;outline:0;}}*{box-sizing:border-box;}img{border:0px;}button{background:none;border:0;color:inherit;cursor:pointer;padding:0;}input,button{&:focus{outline:none;}font:inherit;}textarea{resize:none;}"], function (_ref) {
  var colors = _ref.theme.colors;
  return colors.gray[1];
}));
// CONCATENATED MODULE: ./src/styled-components/global/index.js

// EXTERNAL MODULE: ./node_modules/react-hot-loader/root.js
var root = __webpack_require__("./node_modules/react-hot-loader/root.js");

// EXTERNAL MODULE: ./node_modules/react-lines-ellipsis/lib/index.js
var lib = __webpack_require__("./node_modules/react-lines-ellipsis/lib/index.js");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/memoize-one/dist/memoize-one.esm.js
var memoize_one_esm = __webpack_require__("./node_modules/memoize-one/dist/memoize-one.esm.js");

// CONCATENATED MODULE: ./src/components/coupon/coupon-controls/Star.jsx


var Star_Star = function Star(_ref) {
  var active = _ref.active;
  return /*#__PURE__*/react_default.a.createElement("svg", {
    width: "16",
    height: "15",
    viewBox: "0 0 16 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Star",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12Z",
    fill: active ? '#FFC300' : '#9FA0A2'
  }));
};

/* harmony default export */ var coupon_controls_Star = (Star_Star);
// EXTERNAL MODULE: ./node_modules/styled-system/dist/index.esm.js
var index_esm = __webpack_require__("./node_modules/styled-system/dist/index.esm.js");

// CONCATENATED MODULE: ./src/components/shared/Box.jsx


var Box = styled_components_browser_esm["d" /* default */].div.withConfig({
  displayName: "Box",
  componentId: "sc-oeg6w-0"
})({
  boxSizing: 'border-box'
}, index_esm["x" /* space */], index_esm["z" /* width */], index_esm["n" /* height */], index_esm["l" /* fontSize */], index_esm["e" /* color */], index_esm["c" /* background */], index_esm["v" /* position */], index_esm["A" /* zIndex */], index_esm["y" /* top */], index_esm["p" /* left */], index_esm["w" /* right */], index_esm["d" /* bottom */], index_esm["h" /* flex */], index_esm["g" /* display */], index_esm["i" /* flexBasis */], index_esm["s" /* minWidth */], index_esm["u" /* overflow */]);
Box.displayName = 'Box';
/* harmony default export */ var shared_Box = (Box);
// CONCATENATED MODULE: ./src/components/shared/Flex.jsx



var Flex = Object(styled_components_browser_esm["d" /* default */])(shared_Box).withConfig({
  displayName: "Flex",
  componentId: "sc-2uviu5-0"
})({
  display: 'flex'
}, index_esm["k" /* flexWrap */], index_esm["j" /* flexDirection */], index_esm["a" /* alignItems */], index_esm["o" /* justifyContent */], index_esm["b" /* alignSelf */], index_esm["h" /* flex */], index_esm["t" /* order */]);
Flex.displayName = 'Flex';
/* harmony default export */ var shared_Flex = (Flex);
// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/CSSTransition.js + 8 modules
var CSSTransition = __webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js");

// CONCATENATED MODULE: ./src/components/layout/Hamburger.jsx
var _excluded = ["onClick", "bg", "isActive"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var DEFAULT_BACKGROUND = '#000';
var LineMenu = Object(styled_components_browser_esm["d" /* default */])(shared_Box).attrs({
  as: 'span'
}).withConfig({
  displayName: "Hamburger__LineMenu",
  componentId: "sc-1rjcj6z-0"
})(["height:2px;margin-bottom:6px;left:0;transition:all linear 350ms;"]);
var HamburgerStyled = Object(styled_components_browser_esm["d" /* default */])(shared_Box).attrs({
  as: 'button'
}).withConfig({
  displayName: "Hamburger__HamburgerStyled",
  componentId: "sc-1rjcj6z-1"
})(["z-index:1;cursor:pointer;position:relative;", ";"], function (_ref) {
  var isActive = _ref.isActive;
  return isActive && Object(styled_components_browser_esm["c" /* css */])(["", "{opacity:0;width:20px;&:first-child,&:last-child{opacity:1;top:5px;}&:first-child{transform:rotate(45deg);}&:last-child{transform:rotate(-45deg);}}"], LineMenu);
});

var Hamburger_Hamburger = function Hamburger(_ref2) {
  var onClick = _ref2.onClick,
      bg = _ref2.bg,
      isActive = _ref2.isActive,
      rest = _objectWithoutProperties(_ref2, _excluded);

  return /*#__PURE__*/react_default.a.createElement(HamburgerStyled, _extends({
    onClick: onClick,
    isActive: isActive
  }, rest), /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    flexDirection: "column"
  }, /*#__PURE__*/react_default.a.createElement(LineMenu, {
    top: "0px",
    width: "15px",
    bg: bg
  }), /*#__PURE__*/react_default.a.createElement(LineMenu, {
    top: "8px",
    width: "27px",
    bg: bg
  }), /*#__PURE__*/react_default.a.createElement(LineMenu, {
    top: "16px",
    width: "38px",
    bg: bg
  })));
};

Hamburger_Hamburger.defaultProps = {
  bg: DEFAULT_BACKGROUND
};
/* harmony default export */ var layout_Hamburger = (Hamburger_Hamburger);
// EXTERNAL MODULE: ./node_modules/react-responsive/dist/react-responsive.js
var react_responsive = __webpack_require__("./node_modules/react-responsive/dist/react-responsive.js");
var react_responsive_default = /*#__PURE__*/__webpack_require__.n(react_responsive);

// CONCATENATED MODULE: ./src/components/layout/header-controls/iconColor.js


var getColor = function getColor(isActive, colors) {
  return isActive ? colors.blue[0] : colors.gray[2];
};

var fill = Object(styled_components_browser_esm["c" /* css */])(["", ""], function (_ref) {
  var isActive = _ref.isActive,
      colors = _ref.theme.colors;
  return Object(styled_components_browser_esm["c" /* css */])(["fill:", ";"], getColor(isActive, colors));
});
var logoColor = Object(styled_components_browser_esm["c" /* css */])(["cursor:pointer;rect{", ";}"], fill);
var iconColor = Object(styled_components_browser_esm["c" /* css */])(["cursor:pointer;path{", ";}"], fill);
// CONCATENATED MODULE: ./src/components/layout/header-controls/LogoIcon.jsx
var LogoIcon_excluded = ["isActive"];

function LogoIcon_extends() { LogoIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return LogoIcon_extends.apply(this, arguments); }

function LogoIcon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = LogoIcon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function LogoIcon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var LogoIcon_LogoIcon = function LogoIcon(_ref) {
  var isActive = _ref.isActive,
      rest = LogoIcon_objectWithoutProperties(_ref, LogoIcon_excluded);

  return /*#__PURE__*/react_default.a.createElement("svg", LogoIcon_extends({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), /*#__PURE__*/react_default.a.createElement("g", {
    id: "Logo_coupon"
  }, /*#__PURE__*/react_default.a.createElement("rect", {
    id: "Rectangle",
    width: "48",
    height: "48",
    rx: "12",
    fill: "#2EB4FF"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Combined Shape",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M39.4177 22.9688C39.2132 23.3445 38.9624 23.6891 38.6717 23.9934C38.9624 24.2979 39.2137 24.6424 39.4177 25.018C40.031 26.1484 40.1653 27.457 39.7946 28.7016C39.4694 29.7939 39.0262 30.8598 38.4768 31.8709C37.6528 33.3824 36.0877 34.3316 34.3753 34.3652C34.3616 34.9785 34.229 35.5906 33.9819 36.1613C33.5581 37.1404 32.813 37.9582 31.8833 38.4639C30.8717 39.0141 29.8058 39.4572 28.7142 39.7824C28.2572 39.9182 27.7882 39.9867 27.3194 39.9867C26.0802 39.9867 24.8985 39.5012 24.0199 38.6684C23.8801 38.8039 23.7313 38.9316 23.5736 39.0498C22.7549 39.6623 21.7419 40 20.7208 40C20.2726 40 19.8255 39.9363 19.3928 39.8113C18.22 39.4691 17.0836 38.9945 16.0125 38.4008C14.7271 37.6863 13.838 36.3922 13.6337 34.9385C13.6073 34.7502 13.5929 34.5627 13.5893 34.3752C13.4079 34.3709 13.2272 34.3559 13.0505 34.3303C11.5768 34.1189 10.2689 33.2129 9.55349 31.9064C8.98023 30.8592 8.52084 29.7496 8.18743 28.6072C7.77179 27.1768 8.05696 25.6141 8.94819 24.4256C9.06285 24.273 9.18531 24.1291 9.31598 23.993C9.18609 23.8576 9.06402 23.7139 8.95015 23.5627C8.05735 22.373 7.77238 20.8102 8.18821 19.3813C8.52318 18.2336 8.9814 17.124 9.55173 16.0822C10.2689 14.7752 11.576 13.868 13.0497 13.6561C13.2468 13.6285 13.4423 13.6129 13.6349 13.6104C13.6505 13.0008 13.7831 12.3926 14.0288 11.825C14.4527 10.8465 15.1972 10.0289 16.1269 9.52305C17.1385 8.97285 18.2043 8.52949 19.296 8.2043C19.753 8.06875 20.222 8 20.6907 8C21.9376 8 23.1248 8.49141 24.0051 9.33223C24.8856 8.49141 26.0725 8 27.3194 8C27.7882 8 28.2572 8.06875 28.7134 8.2043C29.8058 8.52949 30.8717 8.97285 31.8825 9.52227C32.813 10.0289 33.5581 10.8465 33.9819 11.8254C34.229 12.3963 34.3616 13.0082 34.3753 13.6215C36.0877 13.6555 37.6528 14.6045 38.476 16.115C39.0262 17.127 39.4694 18.193 39.7946 19.2848C40.1653 20.5301 40.031 21.8383 39.4177 22.9688ZM34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24Z",
    fill: "white"
  }), /*#__PURE__*/react_default.a.createElement("g", {
    id: "_x23_000000ff copy 2"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M23.6053 19.1556C23.9087 18.885 24.4414 18.9758 24.6132 19.3619C24.962 20.262 25.3046 21.1652 25.6513 22.066C25.6573 22.0964 25.6847 22.107 25.7118 22.107C26.5792 22.1688 27.4461 22.2423 28.3136 22.307C28.5622 22.3125 28.8091 22.4552 28.9216 22.6906C29.0608 22.955 29.014 23.3216 28.7862 23.5172C28.0867 24.1164 27.3935 24.7236 26.6957 25.3247C26.6762 25.342 26.6569 25.3599 26.6436 25.3828C26.8409 26.2766 27.0615 27.1663 27.268 28.0584C27.4242 28.5058 27.058 29.0335 26.5979 28.9983C26.4391 28.9963 26.3006 28.9062 26.1741 28.8158C25.4901 28.3656 24.8056 27.9152 24.1209 27.4655C24.0625 27.4283 24.0075 27.3817 23.9419 27.3597C23.1657 27.8464 22.4015 28.3554 21.6274 28.8463C21.4146 28.9788 21.1319 28.9765 20.9228 28.837C20.7023 28.7004 20.5669 28.4184 20.6186 28.1526C20.8417 27.1992 21.0926 26.2493 21.3056 25.294C20.6767 24.7301 20.0383 24.1778 19.4063 23.6177C19.2634 23.4968 19.108 23.3705 19.046 23.1824C18.8941 22.8042 19.1342 22.3116 19.532 22.2526C20.4783 22.1693 21.4312 22.1343 22.3752 22.0438C22.7017 21.2312 23.0158 20.412 23.3387 19.5968C23.3989 19.4337 23.4681 19.2645 23.6053 19.1556Z",
    fill: "white"
  }))));
};

/* harmony default export */ var header_controls_LogoIcon = (Object(styled_components_browser_esm["d" /* default */])(LogoIcon_LogoIcon).withConfig({
  displayName: "LogoIcon",
  componentId: "sc-mcagsq-0"
})(["", ""], logoColor));
// CONCATENATED MODULE: ./src/components/layout/header-controls/Logo.jsx
var Logo_excluded = ["isActive", "size"];

function Logo_extends() { Logo_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Logo_extends.apply(this, arguments); }

function Logo_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Logo_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Logo_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Title = Object(styled_components_browser_esm["d" /* default */])(shared_Box).attrs({
  as: 'span',
  display: 'block'
}).withConfig({
  displayName: "Logo__Title",
  componentId: "sc-kdxk2k-0"
})(["white-space:nowrap;"]);
Title.defaultProps = {
  color: 'blue.0',
  fontSize: '22px'
};
var Bold = styled_components_browser_esm["d" /* default */].b.withConfig({
  displayName: "Logo__Bold",
  componentId: "sc-kdxk2k-1"
})(["font-weight:900;"]);
var Pointer = styled_components_browser_esm["d" /* default */].div.withConfig({
  displayName: "Logo__Pointer",
  componentId: "sc-kdxk2k-2"
})(["cursor:pointer;"]);

var Logo_Logo = function Logo(_ref) {
  var isActive = _ref.isActive,
      size = _ref.size,
      rest = Logo_objectWithoutProperties(_ref, Logo_excluded);

  var iconSize = size === 'small' ? '33' : '48';
  var fontSize = size === 'small' ? '16px' : '22px';
  return /*#__PURE__*/react_default.a.createElement(shared_Flex, Logo_extends({}, rest, {
    as: Pointer
  }), /*#__PURE__*/react_default.a.createElement(header_controls_LogoIcon, {
    isActive: isActive,
    width: iconSize,
    height: iconSize
  }), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pl: "9px"
  }, /*#__PURE__*/react_default.a.createElement(Title, {
    color: isActive ? 'blue.0' : 'gray.2',
    fontSize: fontSize
  }, /*#__PURE__*/react_default.a.createElement(Bold, null, "Coupon"), ' ', "Bazaar"), /*#__PURE__*/react_default.a.createElement(Title, {
    color: isActive ? 'blue.0' : 'gray.2',
    fontSize: fontSize
  }, "Market")));
};

/* harmony default export */ var header_controls_Logo = (Logo_Logo);
// CONCATENATED MODULE: ./src/components/layout/header-controls/MenuItem.jsx
var MenuItem_excluded = ["children", "active", "onClick"];

function MenuItem_extends() { MenuItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MenuItem_extends.apply(this, arguments); }

function MenuItem_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = MenuItem_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function MenuItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var MenuItemStyled = Object(styled_components_browser_esm["d" /* default */])(shared_Box).attrs(function (_ref) {
  var active = _ref.active,
      color = _ref.color;
  return {
    as: 'span',
    color: active ? 'blue.0' : color || 'gray.2'
  };
}).withConfig({
  displayName: "MenuItem__MenuItemStyled",
  componentId: "sc-1f1xosk-0"
})(["letter-spacing:0.65625px;font-size:14px;line-height:17px;white-space:nowrap;cursor:pointer;&:hover{color:", ";}", ""], function (_ref2) {
  var colors = _ref2.theme.colors;
  return colors.blue[0];
}, index_esm["m" /* fontWeight */]);

var MenuItem_MenuItem = function MenuItem(_ref3) {
  var children = _ref3.children,
      active = _ref3.active,
      onClick = _ref3.onClick,
      rest = MenuItem_objectWithoutProperties(_ref3, MenuItem_excluded);

  return /*#__PURE__*/react_default.a.createElement(MenuItemStyled, MenuItem_extends({
    active: active,
    onClick: onClick
  }, rest), children);
};

MenuItem_MenuItem.defaultProps = {
  fontWeight: '500'
};
/* harmony default export */ var header_controls_MenuItem = (MenuItem_MenuItem);
// CONCATENATED MODULE: ./src/components/layout/header-controls/HeaderLayout.jsx


var HeaderLayout = Object(styled_components_browser_esm["d" /* default */])(shared_Box).attrs({
  bg: 'gray.0'
}).withConfig({
  displayName: "HeaderLayout",
  componentId: "sc-1s5uo2w-0"
})(["box-shadow:0px 2px 10px #edeef0;width:100%;z-index:1;"]);
HeaderLayout.defaultProps = {
  position: 'relative'
};
/* harmony default export */ var header_controls_HeaderLayout = (HeaderLayout);
// CONCATENATED MODULE: ./src/components/layout/header-controls/SearchIcon.jsx
var SearchIcon_excluded = ["isActive"];

function SearchIcon_extends() { SearchIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SearchIcon_extends.apply(this, arguments); }

function SearchIcon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SearchIcon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SearchIcon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var SearchIcon_SearchIcon = function SearchIcon(_ref) {
  var isActive = _ref.isActive,
      rest = SearchIcon_objectWithoutProperties(_ref, SearchIcon_excluded);

  return /*#__PURE__*/react_default.a.createElement("svg", SearchIcon_extends({
    width: "18",
    height: "18",
    viewBox: "0 0 54 54",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), /*#__PURE__*/react_default.a.createElement("g", {
    id: "search_icon"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Shape",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M40.4072 38.1233L53.5329 51.2461C54.1557 51.8687 54.1557 52.8984 53.5329 53.5211C53.2216 53.8443 52.8024 54 52.3952 54C51.988 54 51.5689 53.8324 51.2575 53.5211L38.1317 40.3982C34.0838 43.9184 28.8024 46.0497 23.0299 46.0497C10.3353 46.0497 0 35.7166 0 23.0248C0 10.333 10.3234 0 23.0299 0C35.7246 0 46.0599 10.3211 46.0599 23.0248C46.0599 28.796 43.9281 34.0763 40.4072 38.1233ZM23.018 3.23282C12.1078 3.23282 3.22156 12.1051 3.22156 23.0248C3.22156 33.9446 12.1078 42.8288 23.018 42.8288C33.9401 42.8288 42.8144 33.9326 42.8144 23.0248C42.8144 12.1171 33.9401 3.23282 23.018 3.23282Z",
    fill: "#2EB4FF"
  })));
};

/* harmony default export */ var header_controls_SearchIcon = (Object(styled_components_browser_esm["d" /* default */])(SearchIcon_SearchIcon).withConfig({
  displayName: "SearchIcon",
  componentId: "sc-zb31xw-0"
})(["", ""], iconColor));
// CONCATENATED MODULE: ./src/components/layout/header-controls/ShopIcon.jsx
var ShopIcon_excluded = ["isActive"];

function ShopIcon_extends() { ShopIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ShopIcon_extends.apply(this, arguments); }

function ShopIcon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ShopIcon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ShopIcon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var ShopIcon_ShopIcon = function ShopIcon(_ref) {
  var isActive = _ref.isActive,
      rest = ShopIcon_objectWithoutProperties(_ref, ShopIcon_excluded);

  return /*#__PURE__*/react_default.a.createElement("svg", ShopIcon_extends({
    width: "22",
    height: "18",
    viewBox: "0 0 22 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), /*#__PURE__*/react_default.a.createElement("g", {
    id: "shopping-basket-button"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Shape",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.3486 6.91099L11.9083 0.394914C11.7064 0.197457 11.4037 0 11.1009 0C10.7982 0 10.4954 0.0987285 10.2936 0.394914L5.85321 6.91099H1.00917C0.40367 6.91099 0 7.30591 0 7.89828V8.19447L2.52294 17.3762C2.72477 18.166 3.53211 18.8571 4.44037 18.8571H17.5596C18.4679 18.8571 19.2752 18.2648 19.4771 17.3762L22 8.19447V7.89828C22 7.30591 21.5963 6.91099 20.9908 6.91099H16.3486ZM8.07339 6.91099L11.1009 2.56694L14.1284 6.91099H8.07339ZM9.08257 12.8347C9.08257 13.9207 9.99083 14.8093 11.1009 14.8093C12.211 14.8093 13.1193 13.9207 13.1193 12.8347C13.1193 11.7487 12.211 10.8601 11.1009 10.8601C9.99083 10.8601 9.08257 11.7487 9.08257 12.8347Z",
    fill: "#2EB4FF"
  })));
};

/* harmony default export */ var header_controls_ShopIcon = (Object(styled_components_browser_esm["d" /* default */])(ShopIcon_ShopIcon).withConfig({
  displayName: "ShopIcon",
  componentId: "sc-8xwghz-0"
})(["", ""], iconColor));
// CONCATENATED MODULE: ./src/components/layout/header-controls/UserIcon.jsx
var UserIcon_excluded = ["isActive"];

function UserIcon_extends() { UserIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return UserIcon_extends.apply(this, arguments); }

function UserIcon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = UserIcon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function UserIcon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var UserIcon_UserIcon = function UserIcon(_ref) {
  var isActive = _ref.isActive,
      rest = UserIcon_objectWithoutProperties(_ref, UserIcon_excluded);

  return /*#__PURE__*/react_default.a.createElement("svg", UserIcon_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 16 16",
    fill: "none",
    className: "bi bi-person-fill"
  }, rest), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
  }));
};

/* harmony default export */ var header_controls_UserIcon = (Object(styled_components_browser_esm["d" /* default */])(UserIcon_UserIcon).withConfig({
  displayName: "UserIcon",
  componentId: "sc-yxenh9-0"
})(["", ""], iconColor));
// CONCATENATED MODULE: ./src/components/layout/header-controls/LockIcon.jsx
var LockIcon_excluded = ["isActive"];

function LockIcon_extends() { LockIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return LockIcon_extends.apply(this, arguments); }

function LockIcon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = LockIcon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function LockIcon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var LockIcon_LockIcon = function LockIcon(_ref) {
  var isActive = _ref.isActive,
      rest = LockIcon_objectWithoutProperties(_ref, LockIcon_excluded);

  return /*#__PURE__*/react_default.a.createElement("svg", LockIcon_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    className: "bi bi-lock-fill"
  }, rest), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"
  }));
};

/* harmony default export */ var header_controls_LockIcon = (Object(styled_components_browser_esm["d" /* default */])(LockIcon_LockIcon).withConfig({
  displayName: "LockIcon",
  componentId: "sc-7kdh0t-0"
})(["", ""], iconColor));
// CONCATENATED MODULE: ./src/components/layout/header-controls/UnlockIcon.jsx
var UnlockIcon_excluded = ["isActive"];

function UnlockIcon_extends() { UnlockIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return UnlockIcon_extends.apply(this, arguments); }

function UnlockIcon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = UnlockIcon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function UnlockIcon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var UnlockIcon_UnlockIcon = function UnlockIcon(_ref) {
  var isActive = _ref.isActive,
      rest = UnlockIcon_objectWithoutProperties(_ref, UnlockIcon_excluded);

  return /*#__PURE__*/react_default.a.createElement("svg", UnlockIcon_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    className: "bi bi-unlock-fill"
  }, rest), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z"
  }));
};

/* harmony default export */ var header_controls_UnlockIcon = (Object(styled_components_browser_esm["d" /* default */])(UnlockIcon_UnlockIcon).withConfig({
  displayName: "UnlockIcon",
  componentId: "sc-lnjdkh-0"
})(["", ""], iconColor));
// CONCATENATED MODULE: ./src/components/layout/header-controls/TriangleIcon.jsx
function TriangleIcon_extends() { TriangleIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TriangleIcon_extends.apply(this, arguments); }



var TriangleIcon_TriangleIcon = function TriangleIcon(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", TriangleIcon_extends({
    width: "12",
    height: "8",
    viewBox: "0 0 12 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react_default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 8L0 0L12 0L6 8Z",
    fill: "#2EB4FF"
  }));
};

/* harmony default export */ var header_controls_TriangleIcon = (TriangleIcon_TriangleIcon);
// CONCATENATED MODULE: ./src/components/layout/header-controls/RoundMarkIcon.jsx
function RoundMarkIcon_extends() { RoundMarkIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return RoundMarkIcon_extends.apply(this, arguments); }



var RoundMarkIcon_RoundMarkIcon = function RoundMarkIcon(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", RoundMarkIcon_extends({
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react_default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z",
    fill: "#50E3C2"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M5 9.57228L7.98288 12.6069L12.8237 6",
    stroke: "white",
    strokeWidth: "2"
  }));
};

/* harmony default export */ var header_controls_RoundMarkIcon = (RoundMarkIcon_RoundMarkIcon);
// CONCATENATED MODULE: ./src/components/layout/header-controls/language-icons/English.jsx
function English_extends() { English_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return English_extends.apply(this, arguments); }



var English_Eng = function Eng(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", English_extends({
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react_default.a.createElement("g", {
    id: "Group"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Mask",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z",
    fill: "#00247D"
  }), /*#__PURE__*/react_default.a.createElement("mask", {
    id: "mask0",
    "mask-type": "alpha",
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "20",
    height: "20"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Mask_2",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z",
    fill: "white"
  })), /*#__PURE__*/react_default.a.createElement("g", {
    mask: "url(#mask0)"
  }, /*#__PURE__*/react_default.a.createElement("g", {
    id: "Group_2"
  }, /*#__PURE__*/react_default.a.createElement("g", {
    id: "Group_3"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24.2867 20.193V17.0943L13.5688 9.50252L5.67535 9.50252L20.7665 20.193H24.2867Z",
    fill: "#EEEEEE"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_2",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24.2867 18.0274L12.2539 9.50257H9.6228L24.2867 19.8906V18.0274Z",
    fill: "#CF1B2B"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_3",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.83191 9.50254L-4.3956 18.3083V20.1929H0.634238L15.7269 9.5024L7.83191 9.50254Z",
    fill: "#EEEEEE"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_4",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.7784 9.50252L-3.28708 20.193H-2.88559H-0.680081L14.411 9.50252H11.7784Z",
    fill: "#CF1B2B"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_5",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.7679 0.339315L5.67682 11.0298L13.5703 11.0298L24.2867 3.43797V0.339315H20.7679Z",
    fill: "#EEEEEE"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_6",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22.0814 0.339315L6.99179 11.0298H9.62294L24.2868 0.641731V0.339315H22.0814Z",
    fill: "#CF1B2B"
  })), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_7",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.5801 11.1391H15.6044L0.611001 0.439515C-1.11146 0.705215 -2.59441 1.71271 -3.51648 3.13208L10.5799 13.1868V11.1391H10.5801Z",
    fill: "#EEEEEE"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_8",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M-2.85713 2.36817L10.7893 12.0879V10.9794H11.8681L-1.70927 1.31866C-2.13479 1.61785 -2.52033 1.97088 -2.85713 2.36817Z",
    fill: "#CF1B2B"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_9",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24.3955 6.3736L13.7882 6.3736L13.7882 0.219727L6.21172 0.219727V6.3736L-4.3956 6.3736L-4.3956 14.0658H6.21172V20.2197L13.7883 20.2197V14.0658H24.3956V6.3736H24.3955Z",
    fill: "#EEEEEE"
  }), /*#__PURE__*/react_default.a.createElement("g", {
    id: "Group_4"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_10",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.2102 20.193H7.68146L7.68146 0.339436H12.2102L12.2102 20.193Z",
    fill: "#CF1B2B"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_11",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24.2867 12.5569L-4.39507 12.5569L-4.39507 7.97527L24.2867 7.97527V12.5569Z",
    fill: "#CF1B2B"
  }))))));
};

/* harmony default export */ var English = (English_Eng);
// CONCATENATED MODULE: ./src/components/layout/header-controls/language-icons/index.js

/* harmony default export */ var language_icons = ({
  english: English
});
// CONCATENATED MODULE: ./src/components/layout/header-controls/LanguageSelect.jsx





var langugeShortNames = {
  english: 'Eng'
};

var LanguageSelect_LanguageSelect = function LanguageSelect(_ref) {
  var language = _ref.language;
  var Component = language_icons[language];
  return /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    alignItems: "center"
  }, /*#__PURE__*/react_default.a.createElement(Component, null), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    px: "5px"
  }, /*#__PURE__*/react_default.a.createElement(header_controls_MenuItem, {
    active: false
  }, langugeShortNames[language])), /*#__PURE__*/react_default.a.createElement(header_controls_TriangleIcon, null));
};

/* harmony default export */ var header_controls_LanguageSelect = (LanguageSelect_LanguageSelect);
// CONCATENATED MODULE: ./src/components/layout/header-controls/CloseIcon.jsx
function CloseIcon_extends() { CloseIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CloseIcon_extends.apply(this, arguments); }



var CloseIcon_CloseIcon = function CloseIcon(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", CloseIcon_extends({
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react_default.a.createElement("g", {
    id: "Group 12 Copy"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path 5",
    d: "M16 1L1 16.2989",
    stroke: "#2EB4FF",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path 5_2",
    d: "M1 1L16.8371 16.2989",
    stroke: "#2EB4FF",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

/* harmony default export */ var header_controls_CloseIcon = (CloseIcon_CloseIcon);
// CONCATENATED MODULE: ./src/components/layout/header-controls/NFTIcon.jsx
var NFTIcon_excluded = ["isActive"];

function NFTIcon_extends() { NFTIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return NFTIcon_extends.apply(this, arguments); }

function NFTIcon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = NFTIcon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function NFTIcon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var NFTIcon_NFTIcon = function NFTIcon(_ref) {
  var isActive = _ref.isActive,
      rest = NFTIcon_objectWithoutProperties(_ref, NFTIcon_excluded);

  return /*#__PURE__*/react_default.a.createElement("svg", NFTIcon_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 16 16",
    fill: "none",
    className: "bi bi-upc"
  }, rest), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"
  }));
};

/* harmony default export */ var header_controls_NFTIcon = (Object(styled_components_browser_esm["d" /* default */])(NFTIcon_NFTIcon).withConfig({
  displayName: "NFTIcon",
  componentId: "sc-1jn6mwj-0"
})(["", ""], iconColor));
// CONCATENATED MODULE: ./src/components/layout/header-controls/AddCouponIcon.jsx
var AddCouponIcon_excluded = ["isActive"];

function AddCouponIcon_extends() { AddCouponIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AddCouponIcon_extends.apply(this, arguments); }

function AddCouponIcon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = AddCouponIcon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function AddCouponIcon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var AddCouponIcon_AddCouponIcon = function AddCouponIcon(_ref) {
  var isActive = _ref.isActive,
      rest = AddCouponIcon_objectWithoutProperties(_ref, AddCouponIcon_excluded);

  return /*#__PURE__*/react_default.a.createElement("svg", AddCouponIcon_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "20",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    className: "bi bi-file-earmark-plus"
  }, rest), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"
  }));
};

/* harmony default export */ var header_controls_AddCouponIcon = (Object(styled_components_browser_esm["d" /* default */])(AddCouponIcon_AddCouponIcon).withConfig({
  displayName: "AddCouponIcon",
  componentId: "sc-azw0jq-0"
})(["cursor:pointer;"]));
// CONCATENATED MODULE: ./src/components/layout/header-controls/index.js














// EXTERNAL MODULE: ./node_modules/@waves/waves-transactions/dist/index.js
var dist = __webpack_require__("./node_modules/@waves/waves-transactions/dist/index.js");

// EXTERNAL MODULE: ./node_modules/events/events.js
var events = __webpack_require__("./node_modules/events/events.js");
var events_default = /*#__PURE__*/__webpack_require__.n(events);

// EXTERNAL MODULE: ./node_modules/@waves/waves-crypto/dist/index.js
var waves_crypto_dist = __webpack_require__("./node_modules/@waves/waves-crypto/dist/index.js");

// CONCATENATED MODULE: ./config/index.js
/**
 * dApp config
 *
 * Seed if needed
 * bargain repair height depend since fire
 * private float illegal hazard salt around
 * decorate boss bridge
 *
 */
/* harmony default export */ var config = ({
  dAppAddress: '3MtA8ddCQT44GtMfUj9XgzPeZvzY52kofKK',
  nftScript: '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ZEFwcAYJAAAAAAAAAggFAAAAAWUAAAAGc2VuZGVyCQAEJgAAAAEFAAAACHN1cHBsaWVyBgMJAAAAAAAAAggFAAAAAWUAAAAGc2VuZGVyCQAEJgAAAAEFAAAACHN1cHBsaWVyBgkAAAIAAAABAgAAADdZb3UgY2FuIG9ubHkgaW52b2tlIHNjcmlwdCBvZiBDb3Vwb24gQmF6YWFyIE1hcmtldCBkQXBwAwkAAAAAAAACBQAAAARpdGVtBQAAAAROT05FCQAAAgAAAAEJAAEsAAAAAgIAAAAaSXRlbSBub3QgZm91bmQgZm9yIGNvdXBvbiAFAAAABmNvdXBvbgMJAAAAAAAAAgUAAAAIc3VwcGxpZXIFAAAABE5PTkUJAAACAAAAAQkAASwAAAACCQABLAAAAAICAAAAElN1cHBsaWVyIGZvciBpdGVtIAUAAAAEaXRlbQIAAAAKIG5vdCBmb3VuZAMFAAAACWlzRXhwaXJlZAQAAAAHJG1hdGNoMAUAAAACdHgDCQAAAQAAAAIFAAAAByRtYXRjaDACAAAAGVNldEFzc2V0U2NyaXB0VHJhbnNhY3Rpb24EAAAAAWUFAAAAByRtYXRjaDAJAQAAABdjaGVja0FuZEFjY2VwdFNldFNjcmlwdAAAAAEFAAAAAWUDCQAAAQAAAAIFAAAAByRtYXRjaDACAAAAD0J1cm5UcmFuc2FjdGlvbgQAAAABZQUAAAAHJG1hdGNoMAYJAAACAAAAAQIAAABMVGhpcyBjb3Vwb24gaGFzIGV4cGlyZWQgYW5kIGNhbiBvbmx5IGJlIGJ1cm5lZCB0byByZW1vdmUgaXQgZnJvbSB5b3VyIHdhbGxldAQAAAAHJG1hdGNoMAUAAAACdHgDCQAAAQAAAAIFAAAAByRtYXRjaDACAAAAGVNldEFzc2V0U2NyaXB0VHJhbnNhY3Rpb24EAAAAAWUFAAAAByRtYXRjaDAJAQAAABdjaGVja0FuZEFjY2VwdFNldFNjcmlwdAAAAAEFAAAAAWUDCQAAAQAAAAIFAAAAByRtYXRjaDACAAAAD0J1cm5UcmFuc2FjdGlvbgQAAAABZQUAAAAHJG1hdGNoMAkBAAAAEmNoZWNrQW5kQWNjZXB0QnVybgAAAAEFAAAAAWUDCQAAAQAAAAIFAAAAByRtYXRjaDACAAAAE1RyYW5zZmVyVHJhbnNhY3Rpb24EAAAAAWUFAAAAByRtYXRjaDAJAQAAABZjaGVja0FuZEFjY2VwdFRyYW5zZmVyAAAAAQUAAAABZQMJAAABAAAAAgUAAAAHJG1hdGNoMAIAAAAXSW52b2tlU2NyaXB0VHJhbnNhY3Rpb24EAAAAAWUFAAAAByRtYXRjaDAJAQAAABpjaGVja0FuZEFjY2VwdEludm9rZVNjcmlwdAAAAAEFAAAAAWUDCQAAAAAAAAIIBQAAAAJ0eAAAAAZzZW5kZXIJAAQmAAAAAQUAAAAIc3VwcGxpZXIJAAACAAAAAQIAAABXVGhpcyBjb3Vwb24gY2FuIG9ubHkgYmUgdXNlIHRvIHN1cHBsaWVyIGluIGFuIGV4Y2hhbmdlIG9mIGdvb2Qgb3Igc2VydmljZSB3aXRoIGRpc2NvdW50CQAAAgAAAAECAAAAMlRoaXMgY291cG9uIGNhbiBiZSBidXJuZWQgdG8gZW5hYmxlIHdpdGhkcmF3IGZ1bmRzhUnIuA==',
  defaultNetwork: {
    code: 'T',
    matcher: 'https://matcher-testnet.wavesnodes.com/',
    server: 'https://nodes-testnet.wavesnodes.com/'
  },
  chainId: 84,
  networkId: 'testnet'
});
// CONCATENATED MODULE: ./src/libs/dApp/helper.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable no-nested-ternary */

/* eslint-disable no-use-before-define */

/* eslint-disable max-len */


var DAPP_ADDRESS = config.dAppAddress;

var dataListToObj = function dataListToObj(list) {
  var rv = {};

  for (var i = 0; i < list.length; i += 1) {
    rv[list[i].key] = list[i];
  }

  return rv;
};

var asyncFilter = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(arr, fn) {
    var results;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.all(arr.map(fn));

          case 2:
            results = _context.sent;
            return _context.abrupt("return", arr.filter(function (_v, index) {
              return results[index];
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function asyncFilter(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getDataByKey = function getDataByKey(key) {
  var val = null;

  if (window.dAppData && window.dAppData[key]) {
    switch (window.dAppData[key].type) {
      case 'integer':
        val = parseInt(window.dAppData[key].value, 10);
        break;

      case 'boolean':
        val = Boolean(window.dAppData[key].value);
        break;

      default:
        val = window.dAppData[key].value;
        break;
    }
  }

  return val;
};
var shortAddress = function shortAddress(addr) {
  return "".concat(addr === null || addr === void 0 ? void 0 : addr.substr(0, 6), "...").concat(addr === null || addr === void 0 ? void 0 : addr.substr((addr === null || addr === void 0 ? void 0 : addr.length) - 5, 4));
};
var formatDate = function formatDate(date) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    locales: 'en-IN'
  };
  return date.toLocaleDateString(option.locales);
};
var colorStatus = function colorStatus(status) {
  return status === 'approval' ? 'dark' : status === 'rejected' ? 'danger' : status === 'accepted' ? 'success' : status === 'active' ? 'success' : status === 'used' ? 'secondary' : status === 'burned' ? 'dark' : status === 'expired' ? 'warning' : 'primary';
};
var getSupplierData = function getSupplierData(address) {
  var supplier = null;

  try {
    supplier = JSON.parse(getDataByKey("".concat(address, "_account")));
  } catch (error) {
    console.warn(error.message);
  }

  return supplier;
};
var formatNumber = function formatNumber(amt) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    locales: 'en-IN',
    decimals: 8
  };
  var locales = option.locales,
      decimals = option.decimals;
  var dc = Math.pow(10, decimals);
  return new Intl.NumberFormat(locales, {
    maximumSignificantDigits: decimals + 6
  }).format(amt / dc);
};
var getVoting = function getVoting(item, user) {
  var voteRound = getDataByKey("".concat(item.id, "_voteround")) || 0;
  var voteKey = "vote".concat(item.id, "[").concat(voteRound, "]");
  var hasPurchased = user && getDataByKey("".concat(user, "_").concat(item.id, "_purchased"));
  var voting = {
    round: voteRound,
    status: getDataByKey("".concat(voteKey, "_status")) || 'voting',
    commit: hasPurchased ? getDataByKey("".concat(voteKey, "_").concat(user, "_commit")) : null,
    reveal: hasPurchased ? getDataByKey("".concat(voteKey, "_").concat(user, "_reveal")) : null
  };
  return _objectSpread(_objectSpread({}, voting), {}, {
    canCommit: hasPurchased && !(voting !== null && voting !== void 0 && voting.commit) && (voting === null || voting === void 0 ? void 0 : voting.status) === 'voting',
    canReveal: (voting === null || voting === void 0 ? void 0 : voting.commit) && !(voting !== null && voting !== void 0 && voting.reveal) && (voting === null || voting === void 0 ? void 0 : voting.status) === 'reveal'
  });
};

var getSupplierItemIds = function getSupplierItemIds(address) {
  return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var data,
        ids,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : [];
            ids = [];

            if (_typeof(data) === 'object') {
              Object.keys(data).forEach(function (key) {
                var m = key.match(/^(item_[^_]+)_owner$/);

                if (m && m.length === 2 && data[key].value === address) {
                  ids.push(m[1]);
                }
              });
            }

            return _context2.abrupt("return", ids);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
};

var getSupplierPurchaseIds = function getSupplierPurchaseIds(address) {
  return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var data,
        ids,
        _args3 = arguments;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            data = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : [];
            ids = [];

            if (_typeof(data) === 'object') {
              Object.keys(data).forEach(function (key) {
                var m = key.match(/^(purchase_[^_]+)_supplier$/);

                if (m && m.length === 2 && data[key].value === address) {
                  ids.push(m[1]);
                }
              });
            }

            return _context3.abrupt("return", ids);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
};

var getUserPurchaseIds = function getUserPurchaseIds(address) {
  return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var data,
        ids,
        _args4 = arguments;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            data = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : [];
            ids = [];

            if (_typeof(data) === 'object') {
              Object.keys(data).forEach(function (key) {
                var m = key.match(/^(purchase_[^_]+)_user$/);

                if (m && m.length === 2 && data[key].value === address) {
                  ids.push(m[1]);
                }
              });
            }

            return _context4.abrupt("return", ids);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
};

var getItemIds = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var data,
        ids,
        _args5 = arguments;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            data = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : [];
            ids = [];

            if (_typeof(data) === 'object') {
              Object.keys(data).forEach(function (key) {
                var m = key.match(/^(item_[^_]+)_owner$/);

                if (m && m.length === 2) {
                  ids.push(m[1]);
                }
              });
            }

            return _context5.abrupt("return", ids);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getItemIds() {
    return _ref5.apply(this, arguments);
  };
}();

var prepareItems = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(fnGetIds) {
    var _data;

    var data,
        list,
        ids,
        _args7 = arguments;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            data = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : null;
            list = [];
            (_data = data) !== null && _data !== void 0 ? _data : data = window.dAppData;

            if (!data) {
              _context7.next = 8;
              break;
            }

            _context7.next = 6;
            return fnGetIds(data);

          case 6:
            ids = _context7.sent;
            ids.forEach(function (id) {
              var item = {
                id: id,
                couponTerm: 'WAVES'
              };
              Object.keys(data).forEach(function (key) {
                if (key.startsWith(id)) {
                  if (key === "".concat(id, "_title")) {
                    item.title = data[key].value;
                  } else if (key === "".concat(id, "_price")) {
                    item.couponPrice = parseInt(data[key].value, 10);
                  } else if (key === "".concat(id, "_featured")) {
                    item.isFeatured = Boolean(data[key].value);
                  } else if (key === "".concat(id, "_expiredate")) {
                    var d = new Date(parseInt(data[key].value, 10));
                    var ye = new Intl.DateTimeFormat('en', {
                      year: 'numeric'
                    }).format(d);
                    var me = new Intl.DateTimeFormat('en', {
                      month: '2-digit'
                    }).format(d);
                    var de = new Intl.DateTimeFormat('en', {
                      day: '2-digit'
                    }).format(d);
                    item.expirationDate = "".concat(ye, "-").concat(me, "-").concat(de);
                  } else if (key === "".concat(id, "_data")) {
                    var itemData = JSON.parse(data[key].value);
                    itemData.image = itemData.image ? itemData.image : 'https://cdn1.savepice.ru/uploads/2019/6/5/3eaf1f99a32f8045847ac9f02eb81344-full.png';
                    itemData.newPrice = parseInt(itemData.newPrice, 10);
                    itemData.oldPrice = parseInt(itemData.oldPrice, 10);
                    itemData.discount = itemData.oldPrice > 0 ? parseInt(100 - itemData.newPrice * 100 / itemData.oldPrice, 10) : 0;
                    item = _objectSpread(_objectSpread({}, itemData), item);
                  }
                }
              });
              list.push(item);
            });

          case 8:
            return _context7.abrupt("return", Promise.all(list.map( /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        e.isExpired = e.expirationDate ? Date.parse(e.expirationDate) <= Date.now() : false;
                        return _context6.abrupt("return", e);

                      case 2:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));

              return function (_x4) {
                return _ref7.apply(this, arguments);
              };
            }())));

          case 9:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function prepareItems(_x3) {
    return _ref6.apply(this, arguments);
  };
}();

var preparePurchases = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(fnGetIds) {
    var list, data, ids;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            list = [];
            data = window.dAppData;

            if (!data) {
              _context9.next = 7;
              break;
            }

            _context9.next = 5;
            return fnGetIds(data);

          case 5:
            ids = _context9.sent;
            ids.forEach(function (id) {
              var el = {
                id: id,
                voting: {}
              };
              Object.keys(data).forEach(function (key) {
                if (key.startsWith(id)) {
                  if (key === "".concat(id, "_status")) {
                    el.status = data[key].value;
                  } else if (key === "".concat(id, "_item")) {
                    el.item = data[key].value;
                  } else if (key === "".concat(id, "_supplier")) {
                    el.supplier = data[key].value;
                    el.supplierData = getSupplierData(el.supplier);
                  } else if (key === "".concat(id, "_user")) {
                    el.user = data[key].value;
                  } else if (key === "".concat(id, "_assetId")) {
                    el.assetId = data[key].value;
                  } else if (key === "".concat(id, "_fundpaid")) {
                    el.isFundPaid = Boolean(data[key].value);
                  } else if (key === "".concat(id, "_amount")) {
                    el.amount = parseInt(data[key].value, 10);
                  } else if (key === "".concat(id, "_timestamp")) {
                    el.timestamp = parseInt(data[key].value, 10);
                  }
                }
              });
              list.push(el);
            });

          case 7:
            return _context9.abrupt("return", Promise.all(list.map( /*#__PURE__*/function () {
              var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
                var _e$item$isExpired, _e$item;

                var url, r, body;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        _context8.next = 2;
                        return getItemByKey(e.item);

                      case 2:
                        e.item = _context8.sent;
                        // set default coupon status
                        e.couponStatus = 'active'; // is expired

                        // is expired
                        e.isExpired = (_e$item$isExpired = (_e$item = e.item) === null || _e$item === void 0 ? void 0 : _e$item.isExpired) !== null && _e$item$isExpired !== void 0 ? _e$item$isExpired : false;
                        e.couponStatus = e.isExpired ? 'expired' : e.couponStatus; // is Burned

                        if (!e.assetId) {
                          _context8.next = 19;
                          break;
                        }

                        url = "https://api-testnet.wavesplatform.com/v0/assets/".concat(e.assetId);
                        _context8.next = 10;
                        return fetch(url);

                      case 10:
                        r = _context8.sent;
                        _context8.t0 = r.ok;

                        if (!_context8.t0) {
                          _context8.next = 16;
                          break;
                        }

                        _context8.next = 15;
                        return r.json();

                      case 15:
                        _context8.t0 = _context8.sent;

                      case 16:
                        body = _context8.t0;
                        e.isBurned = r.ok && body.quantity === 0;
                        e.couponStatus = e.isBurned ? 'burned' : e.couponStatus;

                      case 19:
                        e.isOwned = false;
                        return _context8.abrupt("return", e);

                      case 21:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8);
              }));

              return function (_x6) {
                return _ref9.apply(this, arguments);
              };
            }())));

          case 8:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function preparePurchases(_x5) {
    return _ref8.apply(this, arguments);
  };
}();

var fetchItems = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            if (!window.dAppData) {
              _context10.next = 4;
              break;
            }

            _context10.next = 3;
            return prepareItems(getItemIds);

          case 3:
            return _context10.abrupt("return", _context10.sent);

          case 4:
            _context10.next = 6;
            return apiFetchItems();

          case 6:
            return _context10.abrupt("return", _context10.sent);

          case 7:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function fetchItems() {
    return _ref10.apply(this, arguments);
  };
}();

var apiFetchItems = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
    var res, data;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return fetch("https://nodes-testnet.wavesnodes.com/addresses/data/".concat(DAPP_ADDRESS, "?matches=item_.%2A"));

          case 2:
            res = _context11.sent;

            if (!res.ok) {
              _context11.next = 9;
              break;
            }

            _context11.next = 6;
            return res.json();

          case 6:
            _context11.t0 = _context11.sent;
            _context11.next = 10;
            break;

          case 9:
            _context11.t0 = [];

          case 10:
            data = _context11.t0;
            _context11.next = 13;
            return prepareItems(getItemIds, dataListToObj(data));

          case 13:
            return _context11.abrupt("return", _context11.sent);

          case 14:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function apiFetchItems() {
    return _ref11.apply(this, arguments);
  };
}();

var fetchUserPurchases = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(address) {
    var list;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return preparePurchases(getUserPurchaseIds(address));

          case 2:
            list = _context13.sent;
            _context13.next = 5;
            return Promise.all(list.map( /*#__PURE__*/function () {
              var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e) {
                var assetId, url, r, body;
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        assetId = e.assetId;

                        if (!(typeof assetId === 'string')) {
                          _context12.next = 31;
                          break;
                        }

                        url = null;
                        r = null;
                        body = null; // is owned by user

                        if (e.isBurned) {
                          _context12.next = 18;
                          break;
                        }

                        url = "https://nodes-testnet.wavesnodes.com/assets/balance/".concat(address, "/").concat(assetId);
                        _context12.next = 9;
                        return fetch(url);

                      case 9:
                        r = _context12.sent;
                        _context12.t0 = r.ok;

                        if (!_context12.t0) {
                          _context12.next = 15;
                          break;
                        }

                        _context12.next = 14;
                        return r.json();

                      case 14:
                        _context12.t0 = _context12.sent;

                      case 15:
                        body = _context12.t0;
                        e.isOwned = r.ok && body.balance > 0; // status is active if owned

                        // status is active if owned
                        e.couponStatus = e.isOwned && !e.isExpired ? 'active' : e.couponStatus;

                      case 18:
                        // is Used
                        url = "https://api-testnet.wavesplatform.com/v0/transactions/transfer?sender=".concat(e.user, "&assetId=").concat(assetId, "&limit=1");
                        _context12.next = 21;
                        return fetch(url);

                      case 21:
                        r = _context12.sent;
                        _context12.t1 = r.ok;

                        if (!_context12.t1) {
                          _context12.next = 27;
                          break;
                        }

                        _context12.next = 26;
                        return r.json();

                      case 26:
                        _context12.t1 = _context12.sent;

                      case 27:
                        body = _context12.t1;
                        e.isUsed = r.ok && body.data.length > 0;
                        e.isOwned = e.isOwned && !e.isUsed; // status is use if used

                        // status is use if used
                        e.couponStatus = e.isUsed ? 'used' : e.couponStatus;

                      case 31:
                        return _context12.abrupt("return", e);

                      case 32:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12);
              }));

              return function (_x8) {
                return _ref13.apply(this, arguments);
              };
            }()));

          case 5:
            list = _context13.sent;
            return _context13.abrupt("return", list);

          case 7:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function fetchUserPurchases(_x7) {
    return _ref12.apply(this, arguments);
  };
}();
var fetchUserCoupons = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(address) {
    var list;
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return fetchUserPurchases(address);

          case 2:
            list = _context15.sent;
            _context15.next = 5;
            return Promise.all(list.map( /*#__PURE__*/function () {
              var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e) {
                var item, user;
                return regeneratorRuntime.wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        if (!e.isExpired) {
                          item = e.item, user = e.user;
                          e.voting = getVoting(item, user);
                        }

                        return _context14.abrupt("return", e);

                      case 2:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee14);
              }));

              return function (_x10) {
                return _ref15.apply(this, arguments);
              };
            }()));

          case 5:
            list = _context15.sent;
            return _context15.abrupt("return", list.filter(function (e) {
              return typeof e.assetId === 'string';
            }));

          case 7:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));

  return function fetchUserCoupons(_x9) {
    return _ref14.apply(this, arguments);
  };
}();
var fetchUserActiveCoupons = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(address) {
    var list;
    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.next = 2;
            return fetchUserCoupons(address);

          case 2:
            list = _context16.sent;
            return _context16.abrupt("return", list.filter(function (e) {
              return e.isOwned && !e.isExpired;
            }));

          case 4:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));

  return function fetchUserActiveCoupons(_x11) {
    return _ref16.apply(this, arguments);
  };
}();
var fetchUserUsedCoupons = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(address) {
    var list;
    return regeneratorRuntime.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.next = 2;
            return fetchUserCoupons(address);

          case 2:
            list = _context17.sent;
            return _context17.abrupt("return", list.filter(function (e) {
              return e.isUsed;
            }));

          case 4:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));

  return function fetchUserUsedCoupons(_x12) {
    return _ref17.apply(this, arguments);
  };
}();
var fetchUserExpiredCoupons = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(address) {
    var list;
    return regeneratorRuntime.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.next = 2;
            return fetchUserCoupons(address);

          case 2:
            list = _context18.sent;
            return _context18.abrupt("return", list.filter(function (e) {
              return e.isOwned && e.isExpired;
            }));

          case 4:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));

  return function fetchUserExpiredCoupons(_x13) {
    return _ref18.apply(this, arguments);
  };
}();
var fetchSupplierItems = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(address) {
    return regeneratorRuntime.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.next = 2;
            return prepareItems(getSupplierItemIds(address));

          case 2:
            return _context19.abrupt("return", _context19.sent);

          case 3:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19);
  }));

  return function fetchSupplierItems(_x14) {
    return _ref19.apply(this, arguments);
  };
}();
var fetchSupplierPurchases = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(address) {
    var list;
    return regeneratorRuntime.wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            _context21.next = 2;
            return preparePurchases(getSupplierPurchaseIds(address));

          case 2:
            list = _context21.sent;
            _context21.next = 5;
            return Promise.all(list.map( /*#__PURE__*/function () {
              var _ref21 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(e) {
                var assetId, url, r, body;
                return regeneratorRuntime.wrap(function _callee20$(_context20) {
                  while (1) {
                    switch (_context20.prev = _context20.next) {
                      case 0:
                        assetId = e.assetId;

                        if (!assetId) {
                          _context20.next = 30;
                          break;
                        }

                        url = null;
                        r = null;
                        body = null; // is Received

                        // is Received
                        url = "https://api-testnet.wavesplatform.com/v0/transactions/transfer?recipient=".concat(e.supplier, "&assetId=").concat(assetId, "&limit=1");
                        _context20.next = 8;
                        return fetch(url);

                      case 8:
                        r = _context20.sent;
                        _context20.t0 = r.ok;

                        if (!_context20.t0) {
                          _context20.next = 14;
                          break;
                        }

                        _context20.next = 13;
                        return r.json();

                      case 13:
                        _context20.t0 = _context20.sent;

                      case 14:
                        body = _context20.t0;
                        e.isReceived = r.ok && body.data.length > 0;
                        e.couponStatus = e.isReceived ? 'used' : e.couponStatus; // is Owned

                        if (!(e.isReceived && !e.isBurned)) {
                          _context20.next = 29;
                          break;
                        }

                        url = "https://nodes-testnet.wavesnodes.com/assets/balance/".concat(address, "/").concat(assetId);
                        _context20.next = 21;
                        return fetch(url);

                      case 21:
                        r = _context20.sent;
                        _context20.t1 = r.ok;

                        if (!_context20.t1) {
                          _context20.next = 27;
                          break;
                        }

                        _context20.next = 26;
                        return r.json();

                      case 26:
                        _context20.t1 = _context20.sent;

                      case 27:
                        body = _context20.t1;
                        e.isOwned = r.ok && body.balance > 0;

                      case 29:
                        e.couponStatus = e.isFundPaid ? 'paid' : e.couponStatus;

                      case 30:
                        return _context20.abrupt("return", e);

                      case 31:
                      case "end":
                        return _context20.stop();
                    }
                  }
                }, _callee20);
              }));

              return function (_x16) {
                return _ref21.apply(this, arguments);
              };
            }()));

          case 5:
            list = _context21.sent;
            return _context21.abrupt("return", list);

          case 7:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21);
  }));

  return function fetchSupplierPurchases(_x15) {
    return _ref20.apply(this, arguments);
  };
}();
var fetchSupplierCoupons = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(address) {
    var list;
    return regeneratorRuntime.wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            _context22.next = 2;
            return fetchSupplierPurchases(address);

          case 2:
            list = _context22.sent;
            return _context22.abrupt("return", list.filter(function (e) {
              return typeof e.assetId === 'string';
            }));

          case 4:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22);
  }));

  return function fetchSupplierCoupons(_x17) {
    return _ref22.apply(this, arguments);
  };
}();
var fetchSupplierActiveCoupons = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(address) {
    var list;
    return regeneratorRuntime.wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            _context23.next = 2;
            return fetchSupplierCoupons(address);

          case 2:
            list = _context23.sent;
            return _context23.abrupt("return", list.filter(function (e) {
              return !e.isFundPaid && !e.isBurned;
            }));

          case 4:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23);
  }));

  return function fetchSupplierActiveCoupons(_x18) {
    return _ref23.apply(this, arguments);
  };
}();
var fetchSupplierReceivedCoupons = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(address) {
    var list;
    return regeneratorRuntime.wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            _context24.next = 2;
            return fetchSupplierActiveCoupons(address);

          case 2:
            list = _context24.sent;
            return _context24.abrupt("return", list.filter(function (e) {
              return e.isOwned;
            }));

          case 4:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24);
  }));

  return function fetchSupplierReceivedCoupons(_x19) {
    return _ref24.apply(this, arguments);
  };
}();
var fetchSupplierAvailableCoupons = /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(address) {
    var list;
    return regeneratorRuntime.wrap(function _callee25$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            _context25.next = 2;
            return fetchSupplierCoupons(address);

          case 2:
            list = _context25.sent;
            return _context25.abrupt("return", list.filter(function (e) {
              return !e.isFundPaid;
            }).filter(function (e) {
              return e.isExpired || e.isBurned || e.isOwned;
            }));

          case 4:
          case "end":
            return _context25.stop();
        }
      }
    }, _callee25);
  }));

  return function fetchSupplierAvailableCoupons(_x20) {
    return _ref25.apply(this, arguments);
  };
}();
var fetchSupplierAvailableFunds = /*#__PURE__*/function () {
  var _ref26 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(address) {
    var list;
    return regeneratorRuntime.wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            _context26.next = 2;
            return fetchSupplierAvailableCoupons(address);

          case 2:
            list = _context26.sent;
            return _context26.abrupt("return", list.reduce(function (a, b) {
              return a + b.amount;
            }, 0));

          case 4:
          case "end":
            return _context26.stop();
        }
      }
    }, _callee26);
  }));

  return function fetchSupplierAvailableFunds(_x21) {
    return _ref26.apply(this, arguments);
  };
}();
var getItemByKey = /*#__PURE__*/function () {
  var _ref27 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(key) {
    var items;
    return regeneratorRuntime.wrap(function _callee28$(_context28) {
      while (1) {
        switch (_context28.prev = _context28.next) {
          case 0:
            _context28.next = 2;
            return prepareItems( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      return _context27.abrupt("return", [key]);

                    case 1:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27);
            })));

          case 2:
            items = _context28.sent;
            return _context28.abrupt("return", items.length > 0 ? items[0] : null);

          case 4:
          case "end":
            return _context28.stop();
        }
      }
    }, _callee28);
  }));

  return function getItemByKey(_x22) {
    return _ref27.apply(this, arguments);
  };
}();
var getPurchaseByKey = /*#__PURE__*/function () {
  var _ref29 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30(key) {
    var list;
    return regeneratorRuntime.wrap(function _callee30$(_context30) {
      while (1) {
        switch (_context30.prev = _context30.next) {
          case 0:
            _context30.next = 2;
            return preparePurchases( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      return _context29.abrupt("return", [key]);

                    case 1:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29);
            })));

          case 2:
            list = _context30.sent;
            return _context30.abrupt("return", list.length > 0 ? list[0] : null);

          case 4:
          case "end":
            return _context30.stop();
        }
      }
    }, _callee30);
  }));

  return function getPurchaseByKey(_x23) {
    return _ref29.apply(this, arguments);
  };
}();
var getSupplierBalance = /*#__PURE__*/function () {
  var _ref31 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31(address) {
    var data, key;
    return regeneratorRuntime.wrap(function _callee31$(_context31) {
      while (1) {
        switch (_context31.prev = _context31.next) {
          case 0:
            data = window.dAppData || []; // eslint-disable-next-line no-restricted-syntax

            _context31.t0 = regeneratorRuntime.keys(data);

          case 2:
            if ((_context31.t1 = _context31.t0()).done) {
              _context31.next = 8;
              break;
            }

            key = _context31.t1.value;

            if (!(key === "".concat(address, "_balance"))) {
              _context31.next = 6;
              break;
            }

            return _context31.abrupt("return", parseInt(data[key].value, 10));

          case 6:
            _context31.next = 2;
            break;

          case 8:
            return _context31.abrupt("return", 0);

          case 9:
          case "end":
            return _context31.stop();
        }
      }
    }, _callee31);
  }));

  return function getSupplierBalance(_x24) {
    return _ref31.apply(this, arguments);
  };
}();
var getSupplierAvailableBalance = /*#__PURE__*/function () {
  var _ref32 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32(address) {
    var data, key;
    return regeneratorRuntime.wrap(function _callee32$(_context32) {
      while (1) {
        switch (_context32.prev = _context32.next) {
          case 0:
            data = window.dAppData || []; // eslint-disable-next-line no-restricted-syntax

            _context32.t0 = regeneratorRuntime.keys(data);

          case 2:
            if ((_context32.t1 = _context32.t0()).done) {
              _context32.next = 8;
              break;
            }

            key = _context32.t1.value;

            if (!(key === "".concat(address, "_available"))) {
              _context32.next = 6;
              break;
            }

            return _context32.abrupt("return", parseInt(data[key].value, 10));

          case 6:
            _context32.next = 2;
            break;

          case 8:
            return _context32.abrupt("return", 0);

          case 9:
          case "end":
            return _context32.stop();
        }
      }
    }, _callee32);
  }));

  return function getSupplierAvailableBalance(_x25) {
    return _ref32.apply(this, arguments);
  };
}();
var getSupplierApprovalCounter = /*#__PURE__*/function () {
  var _ref33 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee33(address) {
    var list;
    return regeneratorRuntime.wrap(function _callee33$(_context33) {
      while (1) {
        switch (_context33.prev = _context33.next) {
          case 0:
            _context33.next = 2;
            return fetchSupplierPurchases(address);

          case 2:
            list = _context33.sent;
            return _context33.abrupt("return", list.filter(function (e) {
              return e.status === 'approval';
            }).length);

          case 4:
          case "end":
            return _context33.stop();
        }
      }
    }, _callee33);
  }));

  return function getSupplierApprovalCounter(_x26) {
    return _ref33.apply(this, arguments);
  };
}();
var helper_hashVote = function hashVote(item, vote, salt) {
  var value = "".concat(item).concat(vote).concat(salt);
  var bytes = new TextEncoder().encode(value);
  return Object(waves_crypto_dist["base58encode"])(Object(waves_crypto_dist["sha256"])(bytes));
};
// CONCATENATED MODULE: ./src/libs/dApp/dApp.js
function dApp_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dApp_typeof = function _typeof(obj) { return typeof obj; }; } else { dApp_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dApp_typeof(obj); }

function dApp_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function dApp_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { dApp_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { dApp_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var DEFAULT_ACCOUNT = {
  isConnected: false,
  isSupplier: false
};
var DEFAULT_NETWORK = config.defaultNetwork || {
  code: 'T',
  matcher: 'https://matcher-testnet.wavesnodes.com/',
  server: 'https://nodes-testnet.wavesnodes.com/'
};
var DEFAULT_STATE = {}; // dapp seed if needed
// hood gorilla maple tag feed make shine public cake devote grace spy neck eager solve

var dApp_DAPP_ADDRESS = config.dAppAddress;
var BASE_URI = config.defaultNetwork.server;
var CHAIN_ID = config.chainId;
var NETWORK_ID = config.networkId;
var ee = new events_default.a();
var _window = window,
    dApp_WavesKeeper = _window.WavesKeeper;
var WKee = null;
var PUBLIC_STATE = 'publicState';
var ACCOUNT = 'account';
var NETWORK = 'network';
var DATA = 'data';
var values = {
  state: DEFAULT_STATE,
  account: DEFAULT_ACCOUNT,
  network: DEFAULT_NETWORK,
  auth: null,
  data: {}
};
var types = [PUBLIC_STATE, ACCOUNT, NETWORK, DATA];
window.dApp = {
  dAppAddress: dApp_DAPP_ADDRESS,
  baseUri: BASE_URI,
  chainId: CHAIN_ID,
  network: NETWORK_ID
};
window.nodeInteraction = dist["nodeInteraction"];

var notifyAlert = function notifyAlert(message) {
  console.warn(message); // eslint-disable-next-line no-alert

  alert(message);
};

var getSession = function getSession(address) {
  if (localStorage) {
    var d = localStorage.getItem("session_".concat(address));
    return d ? JSON.parse(d) : null;
  }

  return null;
};

var setSession = function setSession(session) {
  var address = session === null || session === void 0 ? void 0 : session.address;

  if (address && localStorage) {
    localStorage.setItem("session_".concat(session.address), JSON.stringify(session));
  }
};

var delSession = function delSession(address) {
  if (localStorage) localStorage.removeItem("session_".concat(address));
};

function subscribe(type, fn) {
  if (!types.includes(type)) {
    throw Error("type ".concat(type, " not allowed. available types are : ").concat(JSON.stringify(types)));
  } // console.debug(`subscribe ${type}`)


  ee.on(type, fn);
  fn(values[type]);
  return function () {
    // console.debug(`unsubscribe ${type}`)
    ee.off(type, fn);
  };
}

function setValue(type, data) {
  values[type] = data;
  window.dApp[type] = data;
  ee.emit(type, data);
}

function currentNetwork() {
  return values[NETWORK];
}

function currentAccount() {
  return values[ACCOUNT];
}

function fetchData() {
  return _fetchData.apply(this, arguments);
}

function _fetchData() {
  _fetchData = dApp_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _window$dAppDataKeys;

    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return dist["nodeInteraction"].accountData(dApp_DAPP_ADDRESS, BASE_URI);

          case 2:
            data = _context.sent;
            window.dAppData = data;
            window.dAppDataKeys = Object.keys(data);
            console.debug('[ 🔄 dApp data ] :', "".concat((_window$dAppDataKeys = window.dAppDataKeys) === null || _window$dAppDataKeys === void 0 ? void 0 : _window$dAppDataKeys.length, " keys loaded"));
            setValue(DATA, data);
            return _context.abrupt("return", data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchData.apply(this, arguments);
}

function disconnect() {
  return _disconnect.apply(this, arguments);
}

function _disconnect() {
  _disconnect = dApp_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _values$ACCOUNT;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            delSession((_values$ACCOUNT = values[ACCOUNT]) === null || _values$ACCOUNT === void 0 ? void 0 : _values$ACCOUNT.address); // eslint-disable-next-line no-use-before-define

            updateState();

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _disconnect.apply(this, arguments);
}

function onStateChange(_x) {
  return _onStateChange.apply(this, arguments);
}

function _onStateChange() {
  _onStateChange = dApp_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(state) {
    var account, nwk, acct, session, data;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.debug('[ 🔄 Waves Keeper state ] : ', "version: ".concat(state.version, ", initialized: ").concat(state.initialized ? 'true' : 'false', ", locked: ").concat(state.locked ? 'true' : 'false'));

            if (!(dApp_typeof(state) !== 'object' || dApp_typeof(state.account) !== 'object' || dApp_typeof(state.network) !== 'object')) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt("return");

          case 3:
            setValue(PUBLIC_STATE, state);
            account = values[ACCOUNT];
            nwk = state.network;
            acct = state.account;

            if (!acct) {
              _context3.next = 29;
              break;
            }

            session = getSession(acct.address);
            acct.isConnected = (session === null || session === void 0 ? void 0 : session.address) === acct.address;

            if (!(acct.network !== NETWORK_ID || nwk.code !== DEFAULT_NETWORK.code)) {
              _context3.next = 16;
              break;
            }

            notifyAlert("Please switch WavesKeeper to ".concat(NETWORK_ID));

            if (!account.isConnected) {
              _context3.next = 15;
              break;
            }

            _context3.next = 15;
            return disconnect();

          case 15:
            acct = DEFAULT_ACCOUNT;

          case 16:
            _context3.next = 18;
            return dist["nodeInteraction"].accountDataByKey("".concat(acct.address, "_account"), dApp_DAPP_ADDRESS, BASE_URI);

          case 18:
            data = _context3.sent;

            if (data && data.type === 'string') {
              acct.supplier = JSON.parse(data.value);
            } else {
              delete acct.supplier;
            }

            if (!(dApp_typeof(acct.supplier) === 'object')) {
              _context3.next = 25;
              break;
            }

            _context3.next = 23;
            return getSupplierApprovalCounter(acct.address);

          case 23:
            acct.supplier.approvalCounter = _context3.sent;
            acct.isSupplier = true;

          case 25:
            setValue(ACCOUNT, acct);

            if (!(Boolean(account.isConnected) !== Boolean(acct.isConnected))) {
              _context3.next = 29;
              break;
            }

            _context3.next = 29;
            return fetchData();

          case 29:
            setValue(NETWORK, nwk);

          case 30:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _onStateChange.apply(this, arguments);
}

var onApiListener = function onApiListener() {
  WKee = dApp_WavesKeeper.on('update', onStateChange);
};

var offApiListener = function offApiListener() {
  WKee.off('update', onStateChange);
};

function updateState() {
  return _updateState.apply(this, arguments);
}

function _updateState() {
  _updateState = dApp_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var state;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return dApp_WavesKeeper.publicState();

          case 2:
            state = _context4.sent;
            _context4.next = 5;
            return onStateChange(state);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updateState.apply(this, arguments);
}

function connect() {
  return _connect.apply(this, arguments);
}

function _connect() {
  _connect = dApp_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var account, session, authData;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (dApp_WavesKeeper) {
              _context5.next = 3;
              break;
            }

            notifyAlert('✋ WavesKeeper should be installed to sign in ❗');
            return _context5.abrupt("return", null);

          case 3:
            offApiListener();
            account = values[ACCOUNT];
            session = getSession(account.address);

            if (!(account.isConnected && session)) {
              _context5.next = 8;
              break;
            }

            return _context5.abrupt("return", session);

          case 8:
            authData = null;
            _context5.prev = 9;
            _context5.next = 12;
            return dApp_WavesKeeper.auth({
              data: 'Sign in - CouponBazaar'
            });

          case 12:
            authData = _context5.sent;
            console.info("\uD83D\uDC4D Successful authentication for address ".concat(authData.address));
            setSession(authData);
            _context5.next = 21;
            break;

          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5["catch"](9);
            delSession(account.address);
            if (_context5.t0.message) console.warn("\uD83D\uDC4E ".concat(_context5.t0.message));else console.warn('👎 authentication was interrupted');

          case 21:
            _context5.prev = 21;
            onApiListener();
            return _context5.finish(21);

          case 24:
            return _context5.abrupt("return", authData);

          case 25:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[9, 17, 21, 24]]);
  }));
  return _connect.apply(this, arguments);
}

if (dApp_WavesKeeper) {
  // eslint-disable-next-line no-undef
  dApp_WavesKeeper.initialPromise.then(function () {
    onApiListener();
    return updateState();
  });
}

var connectIfNot = function connectIfNot(address) {
  setSession({
    address: address
  });
  updateState();
};


// CONCATENATED MODULE: ./src/libs/dApp/wt-transactions.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function wt_transactions_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function wt_transactions_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { wt_transactions_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { wt_transactions_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var nftScript = config.nftScript;
var timeout = 300000; // 5 minutes
// eslint-disable-next-line no-undef

var signTx = /*#__PURE__*/function () {
  var _ref = wt_transactions_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(txData) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = JSON;
            _context.next = 3;
            return WavesKeeper.signTransaction(txData);

          case 3:
            _context.t1 = _context.sent;
            return _context.abrupt("return", _context.t0.parse.call(_context.t0, _context.t1));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signTx(_x) {
    return _ref.apply(this, arguments);
  };
}();

var publishTx = /*#__PURE__*/function () {
  var _ref2 = wt_transactions_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(signedTx) {
    var _currentNetwork, server, tx;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _currentNetwork = currentNetwork(), server = _currentNetwork.server;
            _context2.next = 3;
            return Object(dist["broadcast"])(signedTx, server);

          case 3:
            tx = _context2.sent;
            return _context2.abrupt("return", Object(dist["waitForTx"])(tx.id, {
              apiBase: server,
              timeout: timeout
            }));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function publishTx(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var signAndPublishTx = /*#__PURE__*/function () {
  var _ref3 = wt_transactions_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(txData) {
    var signedTx;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return signTx(txData);

          case 2:
            signedTx = _context3.sent;
            _context3.next = 5;
            return publishTx(signedTx);

          case 5:
            return _context3.abrupt("return", _context3.sent);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function signAndPublishTx(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
/*
const createCoupon = async (coupon) => {
    const { title, shortDescription } = coupon
    const stx = issue({
        name: title,
        description: shortDescription,
        script: nftScript,
        quantity: 1,
        decimals: 0,
        reissuable: false,
        fee: 500000,
        chainId: window.dApp.chainId,
    }, 'seed')
    // console.log('broadcast create coupon nft')
    const tx = await broadcast(stx, window.dApp.baseUri)
    // console.log(`waitForTx ${tx.id}`)
    await waitForTx(tx.id, { apiBase: window.dApp.baseUri })
    // console.log(`Coupon nft created${tx.id}`)
    return tx.id
}
*/


var couponData = function couponData(data) {
  var newPrice = parseInt(data.newPrice, 10);
  var oldPrice = parseInt(data.oldPrice, 10);
  var discount = oldPrice > 0 ? parseInt(100 - newPrice * 100 / oldPrice, 10) : 0;
  return {
    name: data.name,
    title: data.title,
    longTitle: data.longTitle,
    image: data.image,
    rating: 0,
    ratings: 0,
    shortDescription: data.shortDescription,
    longDescription: data.longDescription,
    priceTerm: data.priceTerm,
    newPrice: newPrice,
    oldPrice: oldPrice,
    discount: discount
  };
};

var addItem = /*#__PURE__*/function () {
  var _ref4 = wt_transactions_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
    var couponPrice, couponExpire, txData, signedTx, tx;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            couponPrice = parseInt(data.couponPrice, 10);
            couponExpire = Date.parse(data.expirationDate);
            txData = {
              type: 16,
              data: {
                dApp: dApp_DAPP_ADDRESS,
                call: {
                  "function": 'addItem',
                  args: [{
                    type: 'string',
                    value: data.title
                  }, {
                    type: 'integer',
                    value: couponPrice
                  }, {
                    type: 'string',
                    value: JSON.stringify(couponData(data))
                  }, {
                    type: 'integer',
                    value: couponExpire
                  }]
                },
                payment: [],
                fee: {
                  tokens: '0.005',
                  assetId: 'WAVES'
                }
              }
            };
            _context4.next = 5;
            return signTx(txData);

          case 5:
            signedTx = _context4.sent;
            _context4.next = 8;
            return publishTx(signedTx);

          case 8:
            tx = _context4.sent;
            _context4.next = 11;
            return fetchData();

          case 11:
            return _context4.abrupt("return", tx);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function addItem(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
var updateItem = /*#__PURE__*/function () {
  var _ref5 = wt_transactions_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
    var couponPrice, couponExpire, txData, tx;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            couponPrice = parseInt(data.couponPrice, 10);
            couponExpire = Date.parse(data.expirationDate);
            txData = {
              type: 16,
              data: {
                dApp: dApp_DAPP_ADDRESS,
                call: {
                  "function": 'updateItem',
                  args: [{
                    type: 'string',
                    value: "".concat(data.id)
                  }, {
                    type: 'string',
                    value: data.title
                  }, {
                    type: 'integer',
                    value: couponPrice
                  }, {
                    type: 'string',
                    value: JSON.stringify(couponData(data))
                  }, {
                    type: 'integer',
                    value: couponExpire
                  }]
                },
                payment: [],
                fee: {
                  tokens: '0.005',
                  assetId: 'WAVES'
                }
              }
            };
            _context5.next = 5;
            return signAndPublishTx(txData);

          case 5:
            tx = _context5.sent;
            _context5.next = 8;
            return fetchData();

          case 8:
            return _context5.abrupt("return", tx);

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateItem(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
var removeItem = /*#__PURE__*/function () {
  var _ref6 = wt_transactions_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(coupon) {
    var id, txData, tx;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = coupon.id;
            txData = {
              type: 16,
              data: {
                dApp: dApp_DAPP_ADDRESS,
                call: {
                  "function": 'removeItem',
                  args: [{
                    type: 'string',
                    value: "".concat(id)
                  }]
                },
                payment: [],
                fee: {
                  tokens: '0.005',
                  assetId: 'WAVES'
                }
              }
            };
            _context6.next = 4;
            return signAndPublishTx(txData);

          case 4:
            tx = _context6.sent;
            _context6.next = 7;
            return fetchData();

          case 7:
            return _context6.abrupt("return", tx);

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function removeItem(_x6) {
    return _ref6.apply(this, arguments);
  };
}();
var registerSupplier = /*#__PURE__*/function () {
  var _ref7 = wt_transactions_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(data) {
    var txData, tx;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            txData = {
              type: 16,
              data: {
                dApp: dApp_DAPP_ADDRESS,
                call: {
                  "function": 'registerSupplier',
                  args: [{
                    type: 'string',
                    value: JSON.stringify(data)
                  }]
                },
                payment: [],
                fee: {
                  tokens: '0.005',
                  assetId: 'WAVES'
                }
              }
            };
            _context7.next = 3;
            return signAndPublishTx(txData);

          case 3:
            tx = _context7.sent;
            _context7.next = 6;
            return fetchData();

          case 6:
            return _context7.abrupt("return", tx);

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function registerSupplier(_x7) {
    return _ref7.apply(this, arguments);
  };
}();
var purchaseCoupon = /*#__PURE__*/function () {
  var _ref8 = wt_transactions_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(coupon) {
    var id, couponPrice, txData, tx;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id = coupon.id, couponPrice = coupon.couponPrice;
            txData = {
              type: 16,
              data: {
                dApp: dApp_DAPP_ADDRESS,
                call: {
                  "function": 'purchase',
                  args: [{
                    type: 'string',
                    value: "".concat(id)
                  }]
                },
                payment: [{
                  tokens: String(Number.parseFloat(couponPrice / 1e8).toFixed(8)),
                  assetId: 'WAVES'
                }],
                fee: {
                  tokens: '0.005',
                  assetId: 'WAVES'
                }
              }
            };
            _context8.next = 4;
            return signAndPublishTx(txData);

          case 4:
            tx = _context8.sent;
            _context8.next = 7;
            return fetchData();

          case 7:
            connectIfNot(tx.sender);
            return _context8.abrupt("return", tx);

          case 9:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function purchaseCoupon(_x8) {
    return _ref8.apply(this, arguments);
  };
}();
var rejectPurchase = /*#__PURE__*/function () {
  var _ref9 = wt_transactions_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(purchase) {
    var id, txData, tx;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            id = purchase.id;
            txData = {
              type: 16,
              data: {
                dApp: dApp_DAPP_ADDRESS,
                call: {
                  "function": 'rejectPurchase',
                  args: [{
                    type: 'string',
                    value: "".concat(id)
                  }]
                },
                payment: [],
                fee: {
                  tokens: '0.005',
                  assetId: 'WAVES'
                }
              }
            };
            _context9.next = 4;
            return signAndPublishTx(txData);

          case 4:
            tx = _context9.sent;
            _context9.next = 7;
            return fetchData();

          case 7:
            return _context9.abrupt("return", tx);

          case 8:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function rejectPurchase(_x9) {
    return _ref9.apply(this, arguments);
  };
}();
var sendCouponToSupplier = /*#__PURE__*/function () {
  var _ref10 = wt_transactions_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(purchase) {
    var assetId, supplier, txData, tx;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            assetId = purchase.assetId, supplier = purchase.supplier;
            txData = {
              type: 4,
              data: {
                amount: {
                  tokens: '1',
                  assetId: assetId
                },
                fee: {
                  tokens: '0.005',
                  assetId: 'WAVES'
                },
                recipient: supplier
              }
            };
            _context10.next = 4;
            return signAndPublishTx(txData);

          case 4:
            tx = _context10.sent;
            _context10.next = 7;
            return fetchData();

          case 7:
            return _context10.abrupt("return", tx);

          case 8:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function sendCouponToSupplier(_x10) {
    return _ref10.apply(this, arguments);
  };
}();
var acceptPurchase = /*#__PURE__*/function () {
  var _ref11 = wt_transactions_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(purchase, setStepDone) {
    var id, user, item, title, shortDescription, txGenAssetData, stx1, assetId, txAcceptData, stx2, txTransferData, res, stx3, res3;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            id = purchase.id, user = purchase.user, item = purchase.item;
            title = item.title, shortDescription = item.shortDescription; // create coupon (NFT)

            txGenAssetData = {
              type: 3,
              data: {
                name: title,
                description: shortDescription,
                quantity: 1,
                precision: 0,
                reissuable: false,
                script: "base64:".concat(nftScript),
                fee: {
                  tokens: '0.001',
                  assetId: 'WAVES'
                }
              }
            };
            _context11.next = 5;
            return signTx(txGenAssetData);

          case 5:
            stx1 = _context11.sent;
            assetId = stx1.id; // accept purchase and transfer coupon

            txAcceptData = {
              type: 16,
              data: {
                dApp: dApp_DAPP_ADDRESS,
                call: {
                  "function": 'acceptPurchase',
                  args: [{
                    type: 'string',
                    value: "".concat(id)
                  }, {
                    type: 'string',
                    value: assetId
                  }]
                },
                payment: [],
                fee: {
                  tokens: '0.005',
                  assetId: 'WAVES'
                }
              }
            };
            _context11.next = 10;
            return signTx(txAcceptData);

          case 10:
            stx2 = _context11.sent;
            // accept purchase and transfer coupon
            txTransferData = {
              type: 4,
              data: {
                amount: {
                  tokens: '1',
                  assetId: "".concat(assetId)
                },
                fee: {
                  tokens: '0.005',
                  assetId: 'WAVES'
                },
                recipient: user
              }
            };
            if (setStepDone) setStepDone(1);
            _context11.next = 15;
            return Promise.all([publishTx(stx1), publishTx(stx2)]);

          case 15:
            res = _context11.sent;
            if (setStepDone) setStepDone(2);
            _context11.next = 19;
            return signTx(txTransferData);

          case 19:
            stx3 = _context11.sent;
            _context11.next = 22;
            return publishTx(stx3);

          case 22:
            res3 = _context11.sent;
            _context11.next = 25;
            return fetchData();

          case 25:
            return _context11.abrupt("return", [].concat(_toConsumableArray(res), [res3]));

          case 26:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function acceptPurchase(_x11, _x12) {
    return _ref11.apply(this, arguments);
  };
}();
var burnCoupon = /*#__PURE__*/function () {
  var _ref12 = wt_transactions_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(purchase) {
    var assetId, txData, tx;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            assetId = purchase.assetId;
            txData = {
              type: 16,
              data: {
                dApp: dApp_DAPP_ADDRESS,
                call: {
                  "function": 'burn',
                  args: []
                },
                payment: [{
                  tokens: '1',
                  assetId: assetId
                }],
                fee: {
                  tokens: '0.005',
                  assetId: 'WAVES'
                }
              }
            };
            _context12.next = 4;
            return signAndPublishTx(txData);

          case 4:
            tx = _context12.sent;
            _context12.next = 7;
            return fetchData();

          case 7:
            return _context12.abrupt("return", tx);

          case 8:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function burnCoupon(_x13) {
    return _ref12.apply(this, arguments);
  };
}();
var withdrawFunds = /*#__PURE__*/function () {
  var _ref13 = wt_transactions_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(purchase) {
    var assetId, txData, tx;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            assetId = purchase.assetId;
            txData = {
              type: 16,
              data: {
                dApp: dApp_DAPP_ADDRESS,
                call: {
                  "function": 'withdraw',
                  args: [{
                    type: 'string',
                    value: assetId
                  }]
                },
                payment: [],
                fee: {
                  tokens: '0.005',
                  assetId: 'WAVES'
                }
              }
            };
            _context13.next = 4;
            return signAndPublishTx(txData);

          case 4:
            tx = _context13.sent;
            _context13.next = 7;
            return fetchData();

          case 7:
            return _context13.abrupt("return", tx);

          case 8:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function withdrawFunds(_x14) {
    return _ref13.apply(this, arguments);
  };
}();
var commitVote = /*#__PURE__*/function () {
  var _ref14 = wt_transactions_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(data) {
    var item, vote, salt, hash, txData, tx;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            item = data.item, vote = data.vote, salt = data.salt;
            hash = helper_hashVote(item, vote.toLowerCase(), salt);
            txData = {
              type: 16,
              data: {
                dApp: dApp_DAPP_ADDRESS,
                call: {
                  "function": 'voteCommit',
                  args: [{
                    type: 'string',
                    value: item
                  }, {
                    type: 'string',
                    value: hash
                  }]
                },
                payment: [],
                fee: {
                  tokens: '0.005',
                  assetId: 'WAVES'
                }
              }
            };
            _context14.next = 5;
            return signAndPublishTx(txData);

          case 5:
            tx = _context14.sent;
            _context14.next = 8;
            return fetchData();

          case 8:
            connectIfNot(tx.sender);
            return _context14.abrupt("return", tx);

          case 10:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));

  return function commitVote(_x15) {
    return _ref14.apply(this, arguments);
  };
}();
var revealVote = /*#__PURE__*/function () {
  var _ref15 = wt_transactions_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(data) {
    var item, salt, commit, hash, vote, txData, tx;
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            item = data.item, salt = data.salt, commit = data.commit;
            hash = helper_hashVote(item, 'delisted', salt); // alert(hash + ' === ' + commit)

            vote = hash === commit ? 'delisted' : 'featured';
            txData = {
              type: 16,
              data: {
                dApp: dApp_DAPP_ADDRESS,
                call: {
                  "function": 'voteReveal',
                  args: [{
                    type: 'string',
                    value: item
                  }, {
                    type: 'string',
                    value: vote
                  }, {
                    type: 'string',
                    value: salt
                  }]
                },
                payment: [],
                fee: {
                  tokens: '0.005',
                  assetId: 'WAVES'
                }
              }
            };
            _context15.next = 6;
            return signAndPublishTx(txData);

          case 6:
            tx = _context15.sent;
            _context15.next = 9;
            return fetchData();

          case 9:
            connectIfNot(tx.sender);
            return _context15.abrupt("return", tx);

          case 11:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));

  return function revealVote(_x16) {
    return _ref15.apply(this, arguments);
  };
}();
// CONCATENATED MODULE: ./src/libs/dApp/index.js



// CONCATENATED MODULE: ./src/components/custom/btLogin.jsx





var btLogin_BTLogin = function BTLogin(_ref) {
  var account = _ref.account,
      setActiveUrl = _ref.setActiveUrl;
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, account !== null && account !== void 0 && account.isConnected ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "btn-group mr-2",
    role: "group",
    "aria-label": "Logout"
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    className: "btn btn-dark",
    onClick: function onClick() {
      setActiveUrl('#my');
    }
  }, /*#__PURE__*/react_default.a.createElement("a", {
    href: "#my",
    className: "text-light"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    style: {
      position: 'relative',
      top: '-3px',
      left: '-4px'
    }
  }, /*#__PURE__*/react_default.a.createElement(header_controls_UserIcon, null)), account.name || " ".concat(shortAddress(account.address)))), /*#__PURE__*/react_default.a.createElement("button", {
    className: "btn btn-primary",
    type: "submit",
    onClick: disconnect
  }, "Logout")) : /*#__PURE__*/react_default.a.createElement("button", {
    className: "btn btn-primary",
    type: "submit",
    onClick: connect
  }, "Login"));
};

/* harmony default export */ var btLogin = (btLogin_BTLogin);
// CONCATENATED MODULE: ./src/components/layout/HeaderLine.jsx






var menuIndent = {
  0: '16px',
  xl: '46px'
};

var HeaderLine_DesktopHeader = function DesktopHeader(_ref) {
  var _account$supplier;

  var account = _ref.account,
      links = _ref.links,
      activeUrl = _ref.activeUrl,
      setActiveUrl = _ref.setActiveUrl,
      userLinks = _ref.userLinks,
      tabletResolution = _ref.tabletResolution,
      mobileResolution = _ref.mobileResolution,
      changeMobileMenuState = _ref.changeMobileMenuState,
      menuOpened = _ref.menuOpened,
      onCreateCoupon = _ref.onCreateCoupon;
  var onMenuClick = Object(react["useCallback"])(function () {
    return changeMobileMenuState(!menuOpened);
  }, [menuOpened]);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    maxWidth: tabletResolution
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pr: "22px",
    position: "relative",
    top: {
      sm: '4px'
    }
  }, /*#__PURE__*/react_default.a.createElement(layout_Hamburger, {
    bg: "blue.0",
    height: "100%",
    onClick: onMenuClick
  }))), /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    minWidth: mobileResolution
  }, /*#__PURE__*/react_default.a.createElement(header_controls_Logo, {
    justifyContent: "center",
    alignItems: "center",
    isActive: true
  })), /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    flex: 1,
    justifyContent: {
      0: 'flex-end',
      lg: 'center'
    },
    alignItems: "center"
  }, /*#__PURE__*/react_default.a.createElement(shared_Flex, null, /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    minWidth: tabletResolution
  }, links.filter(function (_ref2) {
    var isEnabled = _ref2.isEnabled;
    return typeof isEnabled !== 'function' || isEnabled(account);
  }).map(function (_ref3, index) {
    var url = _ref3.url,
        title = _ref3.title;
    return /*#__PURE__*/react_default.a.createElement(shared_Box, {
      key: url
    }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
      as: "span",
      pl: index !== 0 && menuIndent
    }, /*#__PURE__*/react_default.a.createElement("a", {
      href: url
    }, /*#__PURE__*/react_default.a.createElement(header_controls_MenuItem, {
      active: (activeUrl === null || activeUrl === void 0 ? void 0 : activeUrl.indexOf(url)) >= 0,
      onClick: function onClick() {
        return setActiveUrl(url);
      }
    }, title))));
  })))), /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    alignItems: "center"
  }, userLinks.filter(function (_ref4) {
    var isEnabled = _ref4.isEnabled;
    return typeof isEnabled !== 'function' || isEnabled(account);
  }).map(function (_ref5, index) {
    var url = _ref5.url,
        title = _ref5.title;
    return /*#__PURE__*/react_default.a.createElement(shared_Box, {
      key: url
    }, /*#__PURE__*/react_default.a.createElement(react["Fragment"], {
      key: url
    }, index !== 0 && /*#__PURE__*/react_default.a.createElement(shared_Box, {
      width: "1px",
      as: "span",
      mx: "6px",
      height: "13px",
      bg: "gray.2"
    }), /*#__PURE__*/react_default.a.createElement("a", {
      href: url
    }, /*#__PURE__*/react_default.a.createElement(header_controls_MenuItem, {
      active: (activeUrl === null || activeUrl === void 0 ? void 0 : activeUrl.indexOf(url)) >= 0,
      onClick: function onClick() {
        return setActiveUrl(url);
      }
    }, title))));
  }), /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    minWidth: mobileResolution
  }, /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, account !== null && account !== void 0 && account.isSupplier ? /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    as: "span",
    className: "mx-2 text-success"
  }, /*#__PURE__*/react_default.a.createElement(header_controls_AddCouponIcon, {
    onClick: onCreateCoupon
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    as: "span",
    className: "mx-2"
  }, /*#__PURE__*/react_default.a.createElement("a", {
    href: "#supplier/approve"
  }, /*#__PURE__*/react_default.a.createElement(header_controls_MenuItem, {
    onClick: function onClick() {
      return setActiveUrl('#supplier/approve');
    },
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/react_default.a.createElement(header_controls_ShopIcon, null), (account === null || account === void 0 ? void 0 : (_account$supplier = account.supplier) === null || _account$supplier === void 0 ? void 0 : _account$supplier.approvalCounter) > 0 ? /*#__PURE__*/react_default.a.createElement(shared_Box, {
    position: "relative",
    top: "-10px",
    left: "-6px"
  }, /*#__PURE__*/react_default.a.createElement(header_controls_RoundMarkIcon, null)) : '')))) : ''), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    className: "ml-2 mr-3"
  }, /*#__PURE__*/react_default.a.createElement(header_controls_SearchIcon, null))), /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, /*#__PURE__*/react_default.a.createElement(header_controls_MenuItem, null, /*#__PURE__*/react_default.a.createElement(btLogin, {
    account: account,
    setActiveUrl: setActiveUrl
  })))));
};

/* harmony default export */ var HeaderLine = (HeaderLine_DesktopHeader);
// CONCATENATED MODULE: ./src/components/layout/links.js
var headerLinks = [{
  url: '#featured',
  title: 'Featured',
  isEnabled: function isEnabled() {
    return true;
  }
}, {
  url: '#market',
  title: 'Market',
  isEnabled: function isEnabled() {
    return false;
  }
}, {
  url: '#my',
  title: 'My Coupons',
  isEnabled: function isEnabled() {
    return true;
  }
}, {
  url: '#supplier',
  title: 'Supplier',
  isEnabled: function isEnabled() {
    return true;
  }
}];
var links_userLinks = [];
var companyLinks = [{
  url: '#company1',
  title: 'About',
  isEnabled: function isEnabled() {
    return true;
  }
}, {
  url: '#company2',
  title: 'Blog',
  isEnabled: function isEnabled() {
    return true;
  }
}, {
  url: '#company3',
  title: 'Press',
  isEnabled: function isEnabled() {
    return true;
  }
}, {
  url: '#company4',
  title: 'Investor Relations',
  isEnabled: function isEnabled() {
    return true;
  }
}, {
  url: '#company5',
  title: 'Management Team',
  isEnabled: function isEnabled() {
    return true;
  }
}, {
  url: '#company6',
  title: 'In Your Community',
  isEnabled: function isEnabled() {
    return true;
  }
}, {
  url: '#main3',
  title: 'Contacts',
  isEnabled: function isEnabled() {
    return true;
  }
}];
var supplierLinks = [{
  url: '#supplier',
  title: 'Register as Supplier',
  isEnabled: function isEnabled(e) {
    return !e.isSupplier;
  }
}, {
  url: '#supplier/manage',
  title: 'Manage Coupons',
  isEnabled: function isEnabled(e) {
    return e.isSupplier;
  }
}, {
  url: '#supplier/withdraw',
  title: 'Withdraw Funds',
  isEnabled: function isEnabled(e) {
    return e.isSupplier;
  }
}, {
  url: '#supplier/history',
  title: 'Sales History',
  isEnabled: function isEnabled(e) {
    return e.isSupplier;
  }
}];
var myLinks = [{
  url: '#my/coupons',
  title: 'Use your coupons',
  isEnabled: function isEnabled() {
    return true;
  }
}, {
  url: '#my/voting',
  title: 'Vote for your preferred coupon',
  isEnabled: function isEnabled() {
    return true;
  }
}, {
  url: '#my/used',
  title: 'See your used coupons',
  isEnabled: function isEnabled() {
    return true;
  }
}, {
  url: '#my/expired',
  title: 'See your expired Coupons',
  isEnabled: function isEnabled() {
    return true;
  }
}, {
  url: '#my/purchases',
  title: 'Purchases History',
  isEnabled: function isEnabled() {
    return true;
  }
}, {
  url: '#refund',
  title: 'Refund Policies',
  isEnabled: function isEnabled() {
    return true;
  }
}, {
  url: '#faq',
  title: 'FAQ',
  isEnabled: function isEnabled() {
    return true;
  }
}];
var mainLinks = [{
  url: '#featured',
  title: 'Featured  Coupons',
  isEnabled: function isEnabled() {
    return true;
  }
}, {
  url: '#delisted',
  title: 'Delisted  Coupons',
  isEnabled: function isEnabled() {
    return true;
  }
}, {
  url: '#expired',
  title: 'Expired Coupons',
  isEnabled: function isEnabled() {
    return true;
  }
}, {
  url: '#miles',
  title: 'Miles & Points',
  isEnabled: function isEnabled() {
    return true;
  }
}, {
  url: '#support',
  title: 'Customer Support',
  isEnabled: function isEnabled() {
    return true;
  }
}];
// CONCATENATED MODULE: ./src/components/layout/LogoCopyright.jsx



var YEAR = new Date().getFullYear();

var LogoCopyright_LogoCopyright = function LogoCopyright(_ref) {
  var size = _ref.size;
  return /*#__PURE__*/react_default.a.createElement(shared_Box, null, /*#__PURE__*/react_default.a.createElement(header_controls_Logo, {
    isActive: true,
    size: size
  }), /*#__PURE__*/react_default.a.createElement(shared_Text, {
    as: "span",
    color: "gray.2",
    fontSize: "12px",
    pt: "10px"
  }, "\xA9", ' ', YEAR, ' ', "Groupon, Inc. All Rights Reserved"));
};

/* harmony default export */ var layout_LogoCopyright = (LogoCopyright_LogoCopyright);
// CONCATENATED MODULE: ./src/components/layout/social-icons/Facebook.jsx
function Facebook_extends() { Facebook_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Facebook_extends.apply(this, arguments); }



var Facebook_Facebook = function Facebook(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", Facebook_extends({
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react_default.a.createElement("g", {
    id: "facebook copy"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Oval",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.9004 27.8008C21.5774 27.8008 27.8008 21.5774 27.8008 13.9004C27.8008 6.22342 21.5774 0 13.9004 0C6.22342 0 0 6.22342 0 13.9004C0 21.5774 6.22342 27.8008 13.9004 27.8008Z",
    fill: "#3B5998"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.4352 13.362H15.2515V21.3623H11.9429V13.362H10.3694V10.5504H11.9429V8.73102C11.9429 7.42994 12.561 5.39258 15.281 5.39258L17.7317 5.40283V8.13197H15.9535C15.6619 8.13197 15.2517 8.27769 15.2517 8.89835V10.5531H17.7243L17.4352 13.362Z",
    fill: "white"
  })));
};

/* harmony default export */ var social_icons_Facebook = (Facebook_Facebook);
// CONCATENATED MODULE: ./src/components/layout/social-icons/Linkedin.jsx
function Linkedin_extends() { Linkedin_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Linkedin_extends.apply(this, arguments); }



var Linkedin_Linkedin = function Linkedin(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", Linkedin_extends({
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react_default.a.createElement("g", {
    id: "linkedin copy"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.9673 0C21.6817 0 27.9347 6.25388 27.9347 13.9674C27.9347 21.6809 21.6817 27.9347 13.9673 27.9347C6.25292 27.9347 0 21.6808 0 13.9674C0 6.25397 6.25301 0 13.9673 0Z",
    fill: "#0E76A8"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Shape",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.4756 8.29303C10.4756 9.01585 9.88899 9.60251 9.16617 9.60251C8.44335 9.60251 7.85669 9.01594 7.85669 8.29312C7.85669 7.5703 8.44335 6.98364 9.16617 6.98364C9.88899 6.98364 10.4756 7.5702 10.4756 8.29303ZM18.0599 10.1717C16.7906 10.1717 15.6549 10.6352 14.8492 11.6584V10.445H12.2242V19.1912H14.8492V14.4615C14.8492 13.4619 15.765 12.4868 16.912 12.4868C18.059 12.4868 18.3419 13.4619 18.3419 14.437V19.1903H20.9573V14.2424C20.9572 10.8055 19.3301 10.1717 18.0599 10.1717ZM7.87069 19.1911H10.4861V10.4737H7.87069V19.1911Z",
    fill: "white"
  })));
};

/* harmony default export */ var social_icons_Linkedin = (Linkedin_Linkedin);
// CONCATENATED MODULE: ./src/components/layout/social-icons/Telegram.jsx
function Telegram_extends() { Telegram_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Telegram_extends.apply(this, arguments); }



var Telegram_Telegram = function Telegram(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", Telegram_extends({
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react_default.a.createElement("g", {
    id: "telegram copy"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Oval",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.9998 27.9997C21.7317 27.9997 27.9997 21.7317 27.9997 13.9998C27.9997 6.26794 21.7317 0 13.9998 0C6.26794 0 0 6.26794 0 13.9998C0 21.7317 6.26794 27.9997 13.9998 27.9997Z",
    fill: "#41B4E6"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.6404 16.0397L18.9673 20.8165L22.161 7.18359L5.83911 13.6039L10.8057 15.2489L19.8697 9.16897L12.6404 16.0397Z",
    fill: "white"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_2",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.8057 15.2489L12.1659 20.1436L12.6404 16.0397L19.8697 9.16895L10.8057 15.2489Z",
    fill: "#D2D2D7"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_3",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.6965 17.5921L12.1658 20.1436L12.6403 16.0397L14.6965 17.5921Z",
    fill: "#B9B9BE"
  })));
};

/* harmony default export */ var social_icons_Telegram = (Telegram_Telegram);
// CONCATENATED MODULE: ./src/components/layout/social-icons/Twitter.jsx
function Twitter_extends() { Twitter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Twitter_extends.apply(this, arguments); }



var Twitter_Twitter = function Twitter(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", Twitter_extends({
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react_default.a.createElement("g", {
    id: "Group 16 Copy"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Oval",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z",
    fill: "#03A9F4"
  }), /*#__PURE__*/react_default.a.createElement("g", {
    id: "icons8-twitter"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 9.41918C21.4483 9.66164 20.8559 9.82328 20.231 9.89925C20.8657 9.52425 21.3555 8.92619 21.585 8.21983C20.9894 8.56735 20.3303 8.82112 19.6305 8.95528C19.0706 8.3653 18.2716 8 17.3862 8C15.6872 8 14.3088 9.35614 14.3088 11.0291C14.3088 11.2651 14.3364 11.4962 14.3885 11.7193C11.8318 11.5932 9.5632 10.3858 8.04644 8.5528C7.77954 9.00054 7.62981 9.52425 7.62981 10.0787C7.62981 11.1293 8.17175 12.0555 8.99848 12.6002C8.49398 12.5857 8.01877 12.445 7.60378 12.222C7.60378 12.2317 7.60378 12.2446 7.60378 12.2575C7.60378 13.7268 8.66486 14.9504 10.071 15.2301C9.81382 15.2996 9.54204 15.3384 9.26212 15.3384C9.06358 15.3384 8.86991 15.3157 8.68276 15.2818C9.07334 16.4828 10.2093 17.3605 11.5568 17.3863C10.5022 18.1977 9.17587 18.6843 7.73397 18.6843C7.48497 18.6843 7.24086 18.6697 7 18.6406C8.36378 19.4973 9.98145 20 11.7179 20C17.3781 20 20.4751 15.3836 20.4751 11.3782C20.4751 11.2473 20.4702 11.1164 20.4637 10.9887C21.0675 10.5636 21.5883 10.0302 22 9.41918Z",
    fill: "white"
  }))));
};

/* harmony default export */ var social_icons_Twitter = (Twitter_Twitter);
// CONCATENATED MODULE: ./src/components/layout/social-icons/Whatsapp.jsx
function Whatsapp_extends() { Whatsapp_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Whatsapp_extends.apply(this, arguments); }



var Whatsapp_WhatsApp = function WhatsApp(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", Whatsapp_extends({
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react_default.a.createElement("g", {
    id: "whatsapp copy"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.0035 0H13.9965C6.27725 0 0 6.279 0 14C0 17.0625 0.987 19.901 2.66525 22.2057L0.9205 27.4067L6.30175 25.6865C8.5155 27.153 11.1562 28 14.0035 28C21.7227 28 28 21.7192 28 14C28 6.28075 21.7227 0 14.0035 0Z",
    fill: "#4CAF50"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_2",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22.1497 19.7697C21.812 20.7234 20.4715 21.5144 19.4022 21.7454C18.6707 21.9012 17.7152 22.0254 14.4987 20.6919C10.3845 18.9874 7.73497 14.8067 7.52847 14.5354C7.33072 14.2642 5.86597 12.3217 5.86597 10.3127C5.86597 8.3037 6.88622 7.32545 7.29747 6.90545C7.63522 6.5607 8.19347 6.4032 8.72897 6.4032C8.90222 6.4032 9.05797 6.41195 9.19797 6.41895C9.60922 6.43645 9.81572 6.46095 10.087 7.1102C10.4247 7.92395 11.2472 9.93295 11.3452 10.1394C11.445 10.3459 11.5447 10.6259 11.4047 10.8972C11.2735 11.1772 11.158 11.3014 10.9515 11.5394C10.745 11.7774 10.549 11.9594 10.3425 12.2149C10.1535 12.4372 9.93997 12.6752 10.178 13.0864C10.416 13.4889 11.2385 14.8312 12.4495 15.9092C14.0122 17.3004 15.2792 17.7449 15.7325 17.9339C16.0702 18.0739 16.4727 18.0407 16.7195 17.7782C17.0327 17.4404 17.4195 16.8804 17.8132 16.3292C18.0932 15.9337 18.4467 15.8847 18.8177 16.0247C19.1957 16.1559 21.196 17.1447 21.6072 17.3494C22.0185 17.5559 22.2897 17.6539 22.3895 17.8272C22.4875 18.0004 22.4875 18.8142 22.1497 19.7697Z",
    fill: "#FAFAFA"
  })));
};

/* harmony default export */ var Whatsapp = (Whatsapp_WhatsApp);
// CONCATENATED MODULE: ./src/components/layout/social-icons/index.js





// CONCATENATED MODULE: ./src/components/layout/SocialButtons.jsx




var SocialButtons_SocialButtons = function SocialButtons() {
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(shared_Box, null, /*#__PURE__*/react_default.a.createElement(social_icons_Facebook, null)), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pl: "20px"
  }, /*#__PURE__*/react_default.a.createElement(social_icons_Twitter, null)), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pl: "20px"
  }, /*#__PURE__*/react_default.a.createElement(Whatsapp, null)), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pl: "20px"
  }, /*#__PURE__*/react_default.a.createElement(social_icons_Linkedin, null)), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pl: "20px"
  }, /*#__PURE__*/react_default.a.createElement(social_icons_Telegram, null)));
};

/* harmony default export */ var layout_SocialButtons = (SocialButtons_SocialButtons);
// CONCATENATED MODULE: ./src/components/layout/MobileMenu.jsx
var MobileMenu_excluded = ["account", "setActiveUrl", "title", "links"],
    _excluded2 = ["account", "setActiveUrl", "onClose", "onCreateCoupon", "mobileResolution"];

function MobileMenu_extends() { MobileMenu_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MobileMenu_extends.apply(this, arguments); }

function MobileMenu_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = MobileMenu_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function MobileMenu_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var menuAnimation = {
  classNames: 'mobile-menu',
  timeout: 350
};
var MobileMenu_Container = Object(styled_components_browser_esm["d" /* default */])(shared_Box).withConfig({
  displayName: "MobileMenu__Container",
  componentId: "sc-1p6rjt-0"
})(["left:0px;z-index:10;padding:20px;overflow-y:auto;svg{cursor:pointer;}&.", "-enter{transform:translateX(-600px);opacity:0;}&.", "-enter-active{transform:translateX(0px);opacity:1;transition:all ", "ms ease-out;}&.", "-exit{transform:translateX(0px);opacity:1;}&.", "-exit-active{transform:translateX(-600px);opacity:0;transition:all ", "ms ease-out;}"], menuAnimation.classNames, menuAnimation.classNames, menuAnimation.timeout, menuAnimation.classNames, menuAnimation.classNames, menuAnimation.timeout);
MobileMenu_Container.defaultProps = {
  bg: 'gray.0',
  position: 'relative',
  width: '100%',
  height: '100%'
};
var textProps = {
  fontSize: '14px',
  lineHeight: '17px',
  fontWeight: '600'
};

var MobileMenu_GroupLinks = function GroupLinks(_ref) {
  var account = _ref.account,
      setActiveUrl = _ref.setActiveUrl,
      title = _ref.title,
      links = _ref.links,
      rest = MobileMenu_objectWithoutProperties(_ref, MobileMenu_excluded);

  return /*#__PURE__*/react_default.a.createElement(shared_Box, rest, title && /*#__PURE__*/react_default.a.createElement(shared_Text, MobileMenu_extends({
    letterSpacing: "0.65625px"
  }, textProps, {
    pb: "17px"
  }), title), /*#__PURE__*/react_default.a.createElement(shared_Box, null, links.filter(function (_ref2) {
    var isEnabled = _ref2.isEnabled;
    return typeof isEnabled !== 'function' || isEnabled(account);
  }).map(function (_ref3) {
    var url = _ref3.url,
        linkTitle = _ref3.title;
    return /*#__PURE__*/react_default.a.createElement("a", {
      key: url,
      href: url
    }, /*#__PURE__*/react_default.a.createElement(shared_Text, MobileMenu_extends({
      color: "blue.0"
    }, textProps, {
      pb: "17px",
      onClick: function onClick() {
        return setActiveUrl(url);
      }
    }), linkTitle));
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    width: "100%",
    height: "1px",
    bg: "gray.3"
  }));
};

var MobileMenu_MobileMenu = function MobileMenu(_ref4) {
  var _account$supplier;

  var account = _ref4.account,
      setActiveUrl = _ref4.setActiveUrl,
      onClose = _ref4.onClose,
      onCreateCoupon = _ref4.onCreateCoupon,
      mobileResolution = _ref4.mobileResolution,
      rest = MobileMenu_objectWithoutProperties(_ref4, _excluded2);

  Object(react["useEffect"])(function () {
    return function () {
      return onClose();
    };
  }, []);
  return /*#__PURE__*/react_default.a.createElement(MobileMenu_Container, rest, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    className: "mb-3"
  }, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    flex: 1,
    justifyContent: "flex-left",
    alignItems: "center"
  }, /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, account !== null && account !== void 0 && account.isSupplier ? /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    as: "span",
    className: "mx-2 text-success"
  }, /*#__PURE__*/react_default.a.createElement(header_controls_AddCouponIcon, {
    onClick: function onClick() {
      onClose();
      onCreateCoupon();
    }
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    as: "span",
    className: "mx-2"
  }, /*#__PURE__*/react_default.a.createElement("a", {
    href: "#supplier/approve"
  }, /*#__PURE__*/react_default.a.createElement(header_controls_MenuItem, {
    onClick: function onClick() {
      return setActiveUrl('#supplier/approve');
    },
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/react_default.a.createElement(header_controls_ShopIcon, null), (account === null || account === void 0 ? void 0 : (_account$supplier = account.supplier) === null || _account$supplier === void 0 ? void 0 : _account$supplier.approvalCounter) > 0 ? /*#__PURE__*/react_default.a.createElement(shared_Box, {
    position: "relative",
    top: "-10px",
    left: "-6px"
  }, /*#__PURE__*/react_default.a.createElement(header_controls_RoundMarkIcon, null)) : '')))) : '')), /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    justifyContent: "flex-end"
  }, /*#__PURE__*/react_default.a.createElement(header_controls_CloseIcon, {
    onClick: onClose
  }))), /*#__PURE__*/react_default.a.createElement(MobileMenu_GroupLinks, {
    account: account,
    setActiveUrl: setActiveUrl,
    links: headerLinks
  }), /*#__PURE__*/react_default.a.createElement(MobileMenu_GroupLinks, {
    account: account,
    setActiveUrl: setActiveUrl,
    title: "Company",
    links: companyLinks,
    pt: "20px"
  }), /*#__PURE__*/react_default.a.createElement(MobileMenu_GroupLinks, {
    account: account,
    setActiveUrl: setActiveUrl,
    title: "Work with Coupon Bazaar",
    links: myLinks,
    pt: "20px"
  }), /*#__PURE__*/react_default.a.createElement(MobileMenu_GroupLinks, {
    account: account,
    setActiveUrl: setActiveUrl,
    title: "Supplier",
    links: supplierLinks,
    pt: "20px"
  }), /*#__PURE__*/react_default.a.createElement(MobileMenu_GroupLinks, {
    account: account,
    setActiveUrl: setActiveUrl,
    title: "Main",
    links: mainLinks,
    pt: "20px"
  }), /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    flexDirection: "column",
    py: "20px"
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pb: "20px"
  }, /*#__PURE__*/react_default.a.createElement(layout_LogoCopyright, {
    size: "small"
  })), /*#__PURE__*/react_default.a.createElement(shared_Flex, null, /*#__PURE__*/react_default.a.createElement(layout_SocialButtons, null))));
};

/* harmony default export */ var layout_MobileMenu = (MobileMenu_MobileMenu);
// CONCATENATED MODULE: ./src/components/layout/Overlay.jsx


var overlayAnimation = {
  classNames: 'overlay',
  timeout: 350
};

var Overlay_Overlay = function Overlay() {
  var zIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 9;
  return Object(styled_components_browser_esm["d" /* default */])(shared_Box).attrs({
    bg: 'rgba(0,0,0,.75)',
    bottom: '0px',
    left: '0px',
    position: 'fixed',
    right: '0px',
    zIndex: zIndex
  }).withConfig({
    displayName: "Overlay",
    componentId: "sc-r2f0ru-0"
  })(["&.", "-enter{opacity:0;}&.", "-enter-active{opacity:1;transition:opacity ", "ms ease-out;}&.", "-exit{opacity:1;}&.", "-exit-active{opacity:0;transition:opacity ", "ms ease-out;}"], overlayAnimation.classNames, overlayAnimation.classNames, overlayAnimation.timeout, overlayAnimation.classNames, overlayAnimation.classNames, overlayAnimation.timeout);
};

/* harmony default export */ var layout_Overlay = (Overlay_Overlay);
// CONCATENATED MODULE: ./src/components/layout/index.js






// CONCATENATED MODULE: ./src/components/shared/Modal.jsx
var Modal_excluded = ["children", "open", "onClose", "zIndex"];

function Modal_extends() { Modal_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Modal_extends.apply(this, arguments); }

function Modal_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Modal_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Modal_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var Modal_timeout = overlayAnimation.timeout;
var modalContainer = document.getElementById('modal');

var Modal_styleContainer = function styleContainer() {
  var zIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15;
  return Object(styled_components_browser_esm["d" /* default */])(shared_Box).withConfig({
    displayName: "Modal",
    componentId: "sc-1o63gac-0"
  })(["margin:0 auto;top:0;z-index:", ";position:fixed;left:50%;transform:translate(-50%,0);top:10%;&.modal-enter{transform:translate(-50%,-50%);opacity:0;}&.modal-enter-active{transform:translate(-50%,0);opacity:1;transition:all ", "ms ease-out;}&.modal-exit{transform:translate(-50%,0);opacity:1;}&.modal-exit-active{transform:translate(-50%,-50%);opacity:0;transition:all ", "ms ease-out;}"], zIndex, Modal_timeout, Modal_timeout);
};

var Modal_Modal = function Modal(_ref) {
  var _zIndex;

  var children = _ref.children,
      open = _ref.open,
      onClose = _ref.onClose,
      zIndex = _ref.zIndex,
      rest = Modal_objectWithoutProperties(_ref, Modal_excluded);

  (_zIndex = zIndex) !== null && _zIndex !== void 0 ? _zIndex : zIndex = 15;
  var Container = Modal_styleContainer(zIndex);
  var Ovl = layout_Overlay(zIndex - 1);
  return react_dom_default.a.createPortal( /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(CSSTransition["a" /* default */], {
    "in": open,
    timeout: Modal_timeout,
    classNames: "modal",
    unmountOnExit: true
  }, /*#__PURE__*/react_default.a.createElement(Container, rest, children)), /*#__PURE__*/react_default.a.createElement(CSSTransition["a" /* default */], Modal_extends({
    "in": open
  }, overlayAnimation, {
    unmountOnExit: true
  }), /*#__PURE__*/react_default.a.createElement(Ovl, {
    top: "0px",
    onClick: onClose
  }))), modalContainer);
};

/* harmony default export */ var shared_Modal = (Modal_Modal);
// CONCATENATED MODULE: ./src/components/shared/Text.jsx



var enhanceStyledComponent = Object(index_esm["f" /* compose */])(index_esm["r" /* lineHeight */], index_esm["m" /* fontWeight */], index_esm["q" /* letterSpacing */]);
var Text = Object(styled_components_browser_esm["d" /* default */])(shared_Box).attrs({
  as: 'span'
}).withConfig({
  displayName: "Text",
  componentId: "sc-evvssc-0"
})(["display:block;", ""], enhanceStyledComponent);
/* harmony default export */ var shared_Text = (Text);
// CONCATENATED MODULE: ./src/components/shared/Badge.jsx


function Badge(_ref) {
  var text = _ref.text,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'secondary' : _ref$type,
      _ref$p = _ref.p,
      p = _ref$p === void 0 ? 2 : _ref$p,
      _ref$m = _ref.m,
      m = _ref$m === void 0 ? 0 : _ref$m;
  return /*#__PURE__*/react_default.a.createElement("span", {
    className: "badge badge-".concat(type, " ").concat(p > 0 ? "p-".concat(p) : '', " ").concat(m > 0 ? "m-".concat(m) : '')
  }, text);
}

/* harmony default export */ var shared_Badge = (Badge);
// CONCATENATED MODULE: ./src/components/shared/Loading.jsx


function Loading() {
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "text-center my-3 py-3"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "spinner-border text-primary",
    role: "status"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "sr-only"
  }, "...")));
}

/* harmony default export */ var shared_Loading = (Loading);
// CONCATENATED MODULE: ./src/components/shared/index.js






// CONCATENATED MODULE: ./src/components/coupon/coupon-controls/Rating.jsx



var stars = [1, 2, 3, 4, 5];

var Rating_Rating = function Rating(_ref) {
  var value = _ref.value,
      children = _ref.children;
  var ceilValue = Math.ceil(value);
  return /*#__PURE__*/react_default.a.createElement(shared_Flex, null, /*#__PURE__*/react_default.a.createElement(shared_Box, null, stars.map(function (val, ind) {
    return /*#__PURE__*/react_default.a.createElement(shared_Box, {
      key: val,
      pl: ind !== 0 && '6px',
      as: "span"
    }, /*#__PURE__*/react_default.a.createElement(coupon_controls_Star, {
      active: val <= ceilValue
    }));
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    as: "span",
    fontSize: "12px",
    pl: "8px"
  }, children));
};

/* harmony default export */ var coupon_controls_Rating = (Rating_Rating);
// CONCATENATED MODULE: ./src/components/coupon/coupon-controls/Price.jsx



var PriceStyled = Object(styled_components_browser_esm["d" /* default */])(shared_Box).withConfig({
  displayName: "Price__PriceStyled",
  componentId: "sc-5duimj-0"
})(["padding:0 6px;position:relative;font-weight:600;font-size:14px;line-height:22px;letter-spacing:0.4375px;"]);

var Price_Price = function Price(_ref) {
  var children = _ref.children,
      isOld = _ref.isOld,
      term = _ref.term;
  return /*#__PURE__*/react_default.a.createElement(PriceStyled, {
    color: !isOld ? 'green.1' : undefined
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    as: "span",
    pr: "2px"
  }, term), children, isOld && /*#__PURE__*/react_default.a.createElement(shared_Box, {
    bg: "red.0",
    position: "absolute",
    top: "50%",
    left: "0px",
    right: "0px",
    height: "1px"
  }));
};

/* harmony default export */ var coupon_controls_Price = (Price_Price);
// CONCATENATED MODULE: ./src/components/coupon/coupon-controls/Discount.jsx



var DiscountStyled = Object(styled_components_browser_esm["d" /* default */])(shared_Box).attrs({
  bg: 'green.0'
}).withConfig({
  displayName: "Discount__DiscountStyled",
  componentId: "sc-1ql9m0j-0"
})(["width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;span{font-weight:600;font-size:14px;line-height:17px;text-align:center;letter-spacing:0.65625px;}"]);

var Discount_Discount = function Discount(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react_default.a.createElement(DiscountStyled, null, /*#__PURE__*/react_default.a.createElement("span", null, children));
};

/* harmony default export */ var coupon_controls_Discount = (Discount_Discount);
// CONCATENATED MODULE: ./src/components/coupon/coupon-controls/index.js



// CONCATENATED MODULE: ./src/components/coupon/Coupon.jsx
var Coupon_excluded = ["isManageCoupons", "name", "title", "image", "rating", "ratings", "shortDescription", "longDescription", "couponTerm", "priceTerm", "oldPrice", "newPrice", "discount", "isExpired", "onClick", "couponPrice", "expirationDate"];

function Coupon_extends() { Coupon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Coupon_extends.apply(this, arguments); }

function Coupon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Coupon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Coupon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var isEmpty = Object(memoize_one_esm["a" /* default */])(function (val) {
  return val === undefined || val === 0;
});

var Coupon_Coupon = function Coupon(_ref) {
  var isManageCoupons = _ref.isManageCoupons,
      name = _ref.name,
      title = _ref.title,
      image = _ref.image,
      rating = _ref.rating,
      ratings = _ref.ratings,
      shortDescription = _ref.shortDescription,
      longDescription = _ref.longDescription,
      couponTerm = _ref.couponTerm,
      priceTerm = _ref.priceTerm,
      oldPrice = _ref.oldPrice,
      newPrice = _ref.newPrice,
      discount = _ref.discount,
      isExpired = _ref.isExpired,
      onClick = _ref.onClick,
      couponPrice = _ref.couponPrice,
      expirationDate = _ref.expirationDate,
      rest = Coupon_objectWithoutProperties(_ref, Coupon_excluded);

  return /*#__PURE__*/react_default.a.createElement(shared_Box, Coupon_extends({
    width: "300px",
    height: "300px",
    position: "relative",
    onClick: onClick
  }, rest), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    position: "relative"
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    height: "117px",
    style: {
      backgroundImage: "url(".concat((image === null || image === void 0 ? void 0 : image.length) > 0 ? image : 'https://cdn1.savepice.ru/uploads/2019/6/5/3eaf1f99a32f8045847ac9f02eb81344-full.png', ")"),
      backgroundSize: 'cover'
    }
  }), !isEmpty(expirationDate) && /*#__PURE__*/react_default.a.createElement(shared_Box, {
    position: "absolute",
    bottom: "0px",
    left: "0px"
  }, /*#__PURE__*/react_default.a.createElement(shared_Text, null, isExpired ? /*#__PURE__*/react_default.a.createElement(shared_Badge, {
    type: "danger",
    p: 1,
    m: 1,
    text: "expired"
  }) : /*#__PURE__*/react_default.a.createElement(shared_Badge, {
    type: "light",
    p: 1,
    m: 1,
    text: "expire ".concat(formatDate(new Date(expirationDate)))
  }))), !isEmpty(discount) && /*#__PURE__*/react_default.a.createElement(shared_Box, {
    position: "absolute",
    top: "20px",
    right: "10px"
  }, /*#__PURE__*/react_default.a.createElement(coupon_controls_Discount, null, "".concat(discount, "%")))), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    px: "20px",
    pt: "10px"
  }, !isEmpty(rating) && /*#__PURE__*/react_default.a.createElement(coupon_controls_Rating, {
    value: rating
  }, "".concat(rating, " (").concat(ratings, " ratings)")), /*#__PURE__*/react_default.a.createElement(shared_Text, {
    letterSpacing: "0.4375px",
    lineHeight: "22px",
    fontWeight: "bold",
    pt: "10px",
    fontSize: "14px"
  }, name), /*#__PURE__*/react_default.a.createElement(shared_Text, {
    lineHeight: "18px",
    fontWeight: "200",
    pt: "8px",
    fontSize: "12px"
  }, /*#__PURE__*/react_default.a.createElement(lib_default.a, {
    text: shortDescription,
    maxLine: "2",
    ellipsis: "...",
    trimRight: true,
    basedOn: "letters"
  })), /*#__PURE__*/react_default.a.createElement(shared_Text, {
    lineHeight: "18px",
    fontWeight: "normal",
    pt: "8px",
    fontSize: "12px"
  }, title), /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    position: "absolute",
    bottom: "20px",
    width: "100%",
    pr: "40px"
  }, /*#__PURE__*/react_default.a.createElement(shared_Text, {
    color: "blue.0",
    letterSpacing: "0.4375px",
    lineHeight: "22px",
    fontWeight: "bold",
    fontSize: "14px",
    flex: 1
  }, "".concat(formatNumber(couponPrice), " ").concat(couponTerm)), oldPrice !== newPrice && /*#__PURE__*/react_default.a.createElement(coupon_controls_Price, {
    term: priceTerm,
    isOld: true
  }, oldPrice), /*#__PURE__*/react_default.a.createElement(coupon_controls_Price, {
    term: priceTerm
  }, newPrice))));
};

Coupon_Coupon.defaultProps = {
  priceTerm: '$'
};
/* harmony default export */ var coupon_Coupon = (Object(react["memo"])(Coupon_Coupon));
// CONCATENATED MODULE: ./src/components/coupon/index.js

/* harmony default export */ var components_coupon = (coupon_Coupon);
// CONCATENATED MODULE: ./src/components/service/useAppDialogs.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || useAppDialogs_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useAppDialogs_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useAppDialogs_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useAppDialogs_arrayLikeToArray(o, minLen); }

function useAppDialogs_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function useAppDialogs() {
  var _useState = Object(react["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      dialogOpened = _useState2[0],
      changeDialogState = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      resultOpened = _useState4[0],
      changeResultState = _useState4[1];

  var _useState5 = Object(react["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      resultBuyOpened = _useState6[0],
      changeResultBuyState = _useState6[1];

  var _useState7 = Object(react["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      formOpened = _useState8[0],
      changeFormState = _useState8[1];

  var _useState9 = Object(react["useState"])(),
      _useState10 = _slicedToArray(_useState9, 2),
      selectedItem = _useState10[0],
      selectItem = _useState10[1];

  var _useState11 = Object(react["useState"])(),
      _useState12 = _slicedToArray(_useState11, 2),
      editedItem = _useState12[0],
      selectEditedItem = _useState12[1];

  var _useState13 = Object(react["useState"])(),
      _useState14 = _slicedToArray(_useState13, 2),
      editedOption = _useState14[0],
      selectEditedOption = _useState14[1];

  var _useState15 = Object(react["useState"])(''),
      _useState16 = _slicedToArray(_useState15, 2),
      resultText = _useState16[0],
      setResultText = _useState16[1];

  var _useMemo = Object(react["useMemo"])(function () {
    return [function (item) {
      selectItem(item);
      changeDialogState(true);
    }, function () {
      return changeDialogState(false);
    }, function (text) {
      setResultText(text);
      changeResultState(true);
    }, function () {
      return changeResultState(false);
    }, function () {
      return changeResultBuyState(true);
    }, function () {
      return changeResultBuyState(false);
    }, function () {
      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      selectEditedItem(item);
      selectEditedOption(option);
      changeFormState(true);
    }, function () {
      selectEditedItem(null);
      selectEditedOption(null);
      changeFormState(false);
    }];
  }, []),
      _useMemo2 = _slicedToArray(_useMemo, 8),
      onDialogOpen = _useMemo2[0],
      onDialogClose = _useMemo2[1],
      onResultOpen = _useMemo2[2],
      onResultClose = _useMemo2[3],
      onResultBuyOpen = _useMemo2[4],
      onResultBuyClose = _useMemo2[5],
      onFormOpen = _useMemo2[6],
      onFormClose = _useMemo2[7];

  return {
    selectedItem: selectedItem,
    editedItem: editedItem,
    editedOption: editedOption,
    dialog: [dialogOpened, onDialogOpen, onDialogClose],
    result: [resultText, resultOpened, onResultOpen, onResultClose],
    resultBuy: [resultBuyOpened, onResultBuyOpen, onResultBuyClose],
    form: [formOpened, onFormOpen, onFormClose],
    selectItem: selectItem,
    selectEditedItem: selectEditedItem,
    selectEditedOption: selectEditedOption
  };
}

/* harmony default export */ var service_useAppDialogs = (useAppDialogs);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js + 2 modules
var redux = __webpack_require__("./node_modules/redux/es/redux.js");

// CONCATENATED MODULE: ./src/components/service/useDispatchedActions.js



function useDispatchedActions(actions) {
  var dispatch = Object(es["b" /* useDispatch */])();
  var dispatchedActions = Object(react["useMemo"])(function () {
    return Object(redux["bindActionCreators"])(actions, dispatch);
  }, []);
  return dispatchedActions;
}
// CONCATENATED MODULE: ./src/components/service/useSupplierRegisterDialogs.js
function useSupplierRegisterDialogs_slicedToArray(arr, i) { return useSupplierRegisterDialogs_arrayWithHoles(arr) || useSupplierRegisterDialogs_iterableToArrayLimit(arr, i) || useSupplierRegisterDialogs_unsupportedIterableToArray(arr, i) || useSupplierRegisterDialogs_nonIterableRest(); }

function useSupplierRegisterDialogs_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useSupplierRegisterDialogs_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useSupplierRegisterDialogs_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useSupplierRegisterDialogs_arrayLikeToArray(o, minLen); }

function useSupplierRegisterDialogs_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useSupplierRegisterDialogs_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useSupplierRegisterDialogs_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function useSupplierRegisterDialogs() {
  var _useState = Object(react["useState"])(false),
      _useState2 = useSupplierRegisterDialogs_slicedToArray(_useState, 2),
      resultSROpened = _useState2[0],
      changeResultState = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = useSupplierRegisterDialogs_slicedToArray(_useState3, 2),
      formSROpened = _useState4[0],
      changeFormState = _useState4[1]; //    const [selectedItem, selectCoupon] = useState()


  var _useMemo = Object(react["useMemo"])(function () {
    return [function () {
      return changeResultState(true);
    }, function () {
      return changeResultState(false);
    }, function () {
      return changeFormState(true);
    }, function () {
      return changeFormState(false);
    }];
  }, []),
      _useMemo2 = useSupplierRegisterDialogs_slicedToArray(_useMemo, 4),
      onResultSROpen = _useMemo2[0],
      onResultSRClose = _useMemo2[1],
      onFormSROpened = _useMemo2[2],
      onFormSRClose = _useMemo2[3];

  return {
    //        selectedItem,
    resultSR: [resultSROpened, onResultSROpen, onResultSRClose],
    formSR: [formSROpened, onFormSROpened, onFormSRClose]
  };
}

/* harmony default export */ var service_useSupplierRegisterDialogs = (useSupplierRegisterDialogs);
// CONCATENATED MODULE: ./src/components/modal/controls/Button.jsx


var Button = Object(styled_components_browser_esm["d" /* default */])(shared_Text).attrs({
  as: 'button',
  letterSpacing: '0.4375px',
  lineHeight: '22px',
  fontWeight: 'bold',
  p: '10px',
  fontSize: '18px'
}).withConfig({
  displayName: "Button",
  componentId: "sc-q2q57o-0"
})([""]);
/* harmony default export */ var controls_Button = (Button);
// CONCATENATED MODULE: ./src/components/modal/controls/Footer.jsx


var Border = styled_components_browser_esm["d" /* default */].div.withConfig({
  displayName: "Footer__Border",
  componentId: "sc-560998-0"
})(["border-top:1px solid #000000;"]);
var Footer_Footer = Object(styled_components_browser_esm["d" /* default */])(shared_Flex).attrs({
  as: Border,
  bg: '#111',
  justifyContent: 'flex-end',
  px: '10px'
}).withConfig({
  displayName: "Footer",
  componentId: "sc-560998-1"
})([""]);
/* harmony default export */ var controls_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./src/components/modal/controls/SmallLogo.jsx


var SmallLogo = Object(styled_components_browser_esm["d" /* default */])(header_controls_Logo).withConfig({
  displayName: "SmallLogo",
  componentId: "sc-119nq8v-0"
})(["svg{width:32px;height:32px;}span{font-size:14px;}"]);
/* harmony default export */ var controls_SmallLogo = (SmallLogo);
// CONCATENATED MODULE: ./src/components/modal/controls/Input.jsx
var Input_excluded = ["title", "control", "forwardRef", "error", "maxlength"];

function Input_extends() { Input_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Input_extends.apply(this, arguments); }

function Input_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Input_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Input_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var InputStyled = Object(styled_components_browser_esm["d" /* default */])(shared_Box).withConfig({
  displayName: "Input__InputStyled",
  componentId: "sc-1ub3k3q-0"
})(["display:block;width:100%;padding:6px 12px;font-size:14px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);-webkit-transition:border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;transition:border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;&:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(102,175,233,0.6);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(102,175,233,0.6);}"]);
InputStyled.defaultProps = {
  height: '34px'
};

var Input_Input = function Input(_ref) {
  var title = _ref.title,
      control = _ref.control,
      forwardRef = _ref.forwardRef,
      error = _ref.error,
      maxlength = _ref.maxlength,
      props = Input_objectWithoutProperties(_ref, Input_excluded);

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(shared_Text, {
    color: error ? 'red.0' : 'black.0',
    fontWeight: "500"
  }, title), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    mt: "4px"
  }, /*#__PURE__*/react_default.a.createElement(InputStyled, Input_extends({
    as: control
  }, props, {
    ref: forwardRef
  }))));
};

Input_Input.defaultProps = {
  control: 'input'
};
/* harmony default export */ var controls_Input = (Input_Input);
// CONCATENATED MODULE: ./src/components/modal/controls/index.js




// CONCATENATED MODULE: ./src/components/custom/btVoting.jsx
var btVoting_excluded = ["item", "voting", "onCommitVote", "onRevealVote", "buttonClassName", "textClassName"];

function btVoting_extends() { btVoting_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return btVoting_extends.apply(this, arguments); }

function btVoting_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = btVoting_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function btVoting_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable no-nested-ternary */



var btVoting_BTVoting = function BTVoting(_ref) {
  var _voting, _voting2, _voting3, _voting4;

  var item = _ref.item,
      voting = _ref.voting,
      onCommitVote = _ref.onCommitVote,
      onRevealVote = _ref.onRevealVote,
      _ref$buttonClassName = _ref.buttonClassName,
      buttonClassName = _ref$buttonClassName === void 0 ? 'btn btn-warning' : _ref$buttonClassName,
      _ref$textClassName = _ref.textClassName,
      textClassName = _ref$textClassName === void 0 ? 'text-secondary' : _ref$textClassName,
      props = btVoting_objectWithoutProperties(_ref, btVoting_excluded);

  var _currentAccount = currentAccount(),
      user = _currentAccount.address;

  if (user && !voting) {
    voting = getVoting(item, user);
  }

  var _ref2 = voting || {},
      canCommit = _ref2.canCommit,
      canReveal = _ref2.canReveal;

  console.log('canCommit', canCommit ? 'true' : 'false');
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, canCommit ? /*#__PURE__*/react_default.a.createElement("button", btVoting_extends({
    type: "button",
    className: buttonClassName,
    onClick: function onClick() {
      return onCommitVote(item, voting);
    }
  }, props), "Vote") : canReveal ? /*#__PURE__*/react_default.a.createElement("button", btVoting_extends({
    type: "button",
    className: buttonClassName,
    onClick: function onClick() {
      return onRevealVote(item, voting);
    }
  }, props), "Reveal your vote") : (_voting = voting) !== null && _voting !== void 0 && _voting.commit && ((_voting2 = voting) === null || _voting2 === void 0 ? void 0 : _voting2.status) === 'voting' ? /*#__PURE__*/react_default.a.createElement("span", {
    className: textClassName
  }, "Waiting end of commit step") : (_voting3 = voting) !== null && _voting3 !== void 0 && _voting3.reveal && ((_voting4 = voting) === null || _voting4 === void 0 ? void 0 : _voting4.status) === 'reveal' ? /*#__PURE__*/react_default.a.createElement("span", {
    className: textClassName
  }, "Waiting end of reveal step") : null);
};

/* harmony default export */ var btVoting = (btVoting_BTVoting);
// CONCATENATED MODULE: ./src/components/modal/Dialog.jsx
/* eslint-disable max-len */








var Dialog_Dialog = function Dialog(_ref) {
  var _buttons, _coupon$item, _coupon$item2, _coupon$item3, _coupon$item4, _coupon$supplierData;

  var buttons = _ref.buttons,
      coupon = _ref.coupon,
      onClose = _ref.onClose,
      onEdit = _ref.onEdit,
      onBuy = _ref.onBuy,
      onRemove = _ref.onRemove,
      onUse = _ref.onUse,
      onBurn = _ref.onBurn,
      onVote = _ref.onVote,
      onReveal = _ref.onReveal,
      onWithdraw = _ref.onWithdraw,
      onAccept = _ref.onAccept,
      onReject = _ref.onReject;
  (_buttons = buttons) !== null && _buttons !== void 0 ? _buttons : buttons = ['cancel', 'buy'];
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    width: "600px"
  }, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    p: "16px",
    bg: "gray.0",
    className: "rounded"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: coupon.isExpired ? 'alert alert-danger p-1 m-0' : ''
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    flex: 1
  }, /*#__PURE__*/react_default.a.createElement(components_coupon, coupon.item || coupon), coupon.isExpired ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "p-1 text-center",
    style: {
      backgroundColor: 'rgba(255,255,255,0.5)'
    }
  }, "This coupon has expired") : null)), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pl: "16px"
  }, /*#__PURE__*/react_default.a.createElement(controls_SmallLogo, null), /*#__PURE__*/react_default.a.createElement(shared_Text, {
    lineHeight: "22px",
    fontWeight: "bold",
    pt: "10px",
    fontSize: "22px"
  }, ((_coupon$item = coupon.item) === null || _coupon$item === void 0 ? void 0 : _coupon$item.longTitle) || ((_coupon$item2 = coupon.item) === null || _coupon$item2 === void 0 ? void 0 : _coupon$item2.title) || coupon.longTitle || coupon.title), /*#__PURE__*/react_default.a.createElement(shared_Text, {
    lineHeight: "18px",
    pt: "10px",
    fontSize: "14px"
  }, ((_coupon$item3 = coupon.item) === null || _coupon$item3 === void 0 ? void 0 : _coupon$item3.longDescription) || ((_coupon$item4 = coupon.item) === null || _coupon$item4 === void 0 ? void 0 : _coupon$item4.shortDescription) || coupon.longDescription || coupon.shortDescription), coupon.assetId ? /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(shared_Text, {
    lineHeight: "18px",
    pt: "10px",
    fontSize: "12px"
  }, "purchased on ".concat(formatDate(new Date(coupon.timestamp)))), /*#__PURE__*/react_default.a.createElement(shared_Text, {
    lineHeight: "18px",
    pt: "10px",
    fontSize: "12px"
  }, 'nft address ', /*#__PURE__*/react_default.a.createElement("a", {
    href: "https://testnet.wavesexplorer.com/assets/".concat(coupon.assetId, "/"),
    target: "_blank",
    rel: "noreferrer"
  }, shortAddress(coupon.assetId))), /*#__PURE__*/react_default.a.createElement(shared_Text, {
    lineHeight: "18px",
    pt: "10px",
    fontSize: "12px"
  }, 'supplier ', /*#__PURE__*/react_default.a.createElement("a", {
    href: "https://testnet.wavesexplorer.com/address/".concat(coupon.supplier, "/"),
    target: "_blank",
    rel: "noreferrer"
  }, ((_coupon$supplierData = coupon.supplierData) === null || _coupon$supplierData === void 0 ? void 0 : _coupon$supplierData.name) || shortAddress(coupon.supplier))), /*#__PURE__*/react_default.a.createElement(shared_Text, {
    lineHeight: "18px",
    pt: "10px",
    fontSize: "12px"
  }, 'status ', /*#__PURE__*/react_default.a.createElement(shared_Badge, {
    text: coupon.couponStatus,
    type: colorStatus(coupon.couponStatus),
    p: 0
  }))) : null)), /*#__PURE__*/react_default.a.createElement(controls_Footer, null, /*#__PURE__*/react_default.a.createElement(controls_Button, {
    className: "text-secondary",
    onClick: onClose
  }, "Cancel"), buttons.includes('login') ? /*#__PURE__*/react_default.a.createElement(controls_Button, {
    className: "text-primary",
    onClick: connect
  }, "Login") : null, buttons.includes('vote') && !coupon.isExpired ? /*#__PURE__*/react_default.a.createElement(btVoting, {
    item: coupon.item || coupon,
    voting: coupon.voting,
    onCommitVote: onVote,
    onRevealVote: onReveal,
    buttonClassName: "text-warning font-weight-bold",
    textClassName: "text-white-50 font-weight-bold small pt-1 mt-2",
    style: {
      fontSize: '18px'
    }
  }) : null, buttons.includes('buy') && !coupon.isExpired ? /*#__PURE__*/react_default.a.createElement(controls_Button, {
    className: "text-success",
    onClick: onBuy
  }, "Buy") : null, buttons.includes('edit') ? /*#__PURE__*/react_default.a.createElement(controls_Button, {
    className: "text-primary",
    onClick: onEdit
  }, "Edit") : null, buttons.includes('remove') ? /*#__PURE__*/react_default.a.createElement(controls_Button, {
    className: "text-danger",
    onClick: onRemove
  }, "Remove") : null, buttons.includes('use') && coupon.isOwned ? /*#__PURE__*/react_default.a.createElement(controls_Button, {
    className: "text-success",
    onClick: onUse
  }, "Use coupon") : null, buttons.includes('burn') ? /*#__PURE__*/react_default.a.createElement(controls_Button, {
    color: "text-primary",
    onClick: onBurn
  }, "Burn") : null, buttons.includes('withdraw') ? /*#__PURE__*/react_default.a.createElement(controls_Button, {
    className: "text-success",
    onClick: onWithdraw
  }, "Withdraw Fund") : null, buttons.includes('reject') ? /*#__PURE__*/react_default.a.createElement(controls_Button, {
    className: "text-danger",
    onClick: onReject
  }, "Reject") : null, buttons.includes('accept') ? /*#__PURE__*/react_default.a.createElement(controls_Button, {
    className: "text-success",
    onClick: onAccept
  }, "Confirm") : null)));
};

/* harmony default export */ var modal_Dialog = (Dialog_Dialog);
// CONCATENATED MODULE: ./src/components/modal/Result.jsx
/* eslint-disable react/no-danger */




var Result_Result = function Result(_ref) {
  var _className;

  var text = _ref.text,
      className = _ref.className,
      onClose = _ref.onClose;
  (_className = className) !== null && _className !== void 0 ? _className : className = 'bg-light';
  return /*#__PURE__*/react_default.a.createElement(shared_Box, {
    width: "600px",
    className: "".concat(className, " rounded")
  }, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    p: "16px",
    flexDirection: "column",
    alignItems: "center"
  }, /*#__PURE__*/react_default.a.createElement(controls_SmallLogo, null), /*#__PURE__*/react_default.a.createElement(shared_Text, {
    lineHeight: "22px",
    pt: "10px",
    fontSize: "18px"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: text
    }
  }))), /*#__PURE__*/react_default.a.createElement(controls_Footer, null, /*#__PURE__*/react_default.a.createElement(controls_Button, {
    className: "text-secondary",
    onClick: onClose
  }, "Close")));
};

/* harmony default export */ var modal_Result = (Result_Result);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/react-hook-form.es.js
var react_hook_form_es = __webpack_require__("./node_modules/react-hook-form/dist/react-hook-form.es.js");

// CONCATENATED MODULE: ./src/components/modal/Form.jsx





var HEIGHTS = [300, 400, 500, 600, 700];
var FORM_PARAMETER = 150;
var HeightProps = styled_components_browser_esm["d" /* default */].div.withConfig({
  displayName: "Form__HeightProps",
  componentId: "sc-1q7ubve-0"
})(["overflow-y:auto;", " @media (min-height:800px){height:initial;@media (max-width:", "){height:700px;}}"], HEIGHTS.reduce(function (accum, val) {
  return "".concat(accum, "\n        @media (min-height: ").concat(val, "px) {\n            height: ").concat(val - FORM_PARAMETER, "px;\n        }\n    ");
}, ''), function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.sm;
});

var Form_Form = function Form(_ref2) {
  var editedItem = _ref2.editedItem,
      onClose = _ref2.onClose,
      onSubmit = _ref2.onSubmit;

  var _useForm = Object(react_hook_form_es["a" /* default */])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors;

  return /*#__PURE__*/react_default.a.createElement(shared_Box, {
    width: {
      0: '100%',
      lg: '800px'
    },
    as: "form",
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    bg: "gray.0",
    className: "rounded"
  }, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    p: "10px",
    justifyContent: "center"
  }, /*#__PURE__*/react_default.a.createElement(controls_SmallLogo, null)), /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    bg: "gray.0",
    p: "16px",
    flexDirection: {
      0: 'column',
      sm: 'row'
    },
    as: HeightProps
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    type: "hidden",
    name: "id",
    forwardRef: register({
      required: false
    }),
    error: errors.id,
    defaultValue: editedItem === null || editedItem === void 0 ? void 0 : editedItem.id
  }), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    flex: 1
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pb: "8px"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    name: "image",
    title: "Image url",
    forwardRef: register({
      required: false
    }),
    error: errors.image,
    defaultValue: editedItem === null || editedItem === void 0 ? void 0 : editedItem.image
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pb: "8px"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    name: "priceTerm",
    title: "Price term",
    maxLength: "10",
    forwardRef: register({
      required: true
    }),
    error: errors.priceTerm,
    defaultValue: editedItem === null || editedItem === void 0 ? void 0 : editedItem.priceTerm
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pb: "8px"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    type: "number",
    name: "oldPrice",
    title: "Old price",
    forwardRef: register({
      required: true
    }),
    error: errors.oldPrice,
    defaultValue: editedItem === null || editedItem === void 0 ? void 0 : editedItem.oldPrice
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pb: "8px"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    type: "number",
    name: "newPrice",
    title: "New price",
    forwardRef: register({
      required: true
    }),
    error: errors.newPrice,
    defaultValue: editedItem === null || editedItem === void 0 ? void 0 : editedItem.newPrice
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pb: "8px"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    name: "name",
    title: "Name",
    forwardRef: register({
      required: true
    }),
    error: errors.name,
    defaultValue: editedItem === null || editedItem === void 0 ? void 0 : editedItem.name,
    maxLength: "25"
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pb: "8px"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    name: "shortDescription",
    height: "150px",
    width: "100%",
    control: "textarea",
    title: "Short description",
    forwardRef: register({
      required: true
    }),
    error: errors.shortDescription,
    defaultValue: editedItem === null || editedItem === void 0 ? void 0 : editedItem.shortDescription,
    maxLength: "50"
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pb: "8px"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    name: "title",
    title: "Title",
    forwardRef: register({
      required: true
    }),
    error: errors.title,
    defaultValue: editedItem === null || editedItem === void 0 ? void 0 : editedItem.title,
    maxLength: "12"
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pb: "8px"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    type: "number",
    name: "couponPrice",
    title: "Coupon price",
    forwardRef: register({
      required: true
    }),
    error: errors.couponPrice,
    defaultValue: editedItem === null || editedItem === void 0 ? void 0 : editedItem.couponPrice
  }))), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pl: {
      sm: '16px'
    },
    flex: 1
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pb: "8px"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    name: "longTitle",
    title: "Long title",
    maxLength: "25",
    forwardRef: register({
      required: false
    }),
    error: errors.longTitle,
    defaultValue: editedItem === null || editedItem === void 0 ? void 0 : editedItem.longTitle
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pb: "8px"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    name: "longDescription",
    height: "150px",
    width: "100%",
    maxLength: "500",
    control: "textarea",
    title: "Long description",
    forwardRef: register({
      required: false
    }),
    error: errors.longDescription,
    defaultValue: editedItem === null || editedItem === void 0 ? void 0 : editedItem.longDescription
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pb: "8px"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    type: "date",
    name: "expirationDate",
    title: "Expiration Date",
    forwardRef: register({
      required: true
    }),
    error: errors.expirationDate,
    defaultValue: editedItem === null || editedItem === void 0 ? void 0 : editedItem.expirationDate
  }))))), /*#__PURE__*/react_default.a.createElement(controls_Footer, null, /*#__PURE__*/react_default.a.createElement(controls_Button, {
    className: "text-secondary",
    type: "button",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/react_default.a.createElement(controls_Button, {
    className: "text-success",
    type: "submit"
  }, "Save Coupon")));
};

/* harmony default export */ var modal_Form = (Form_Form);
// CONCATENATED MODULE: ./src/components/modal/FormSupplierRegister.jsx





var FormSupplierRegister_HEIGHTS = [300, 400, 500, 600, 700];
var FormSupplierRegister_FORM_PARAMETER = 150;
var FormSupplierRegister_HeightProps = styled_components_browser_esm["d" /* default */].div.withConfig({
  displayName: "FormSupplierRegister__HeightProps",
  componentId: "sc-1wvxso0-0"
})(["overflow-y:auto;", " @media (min-height:800px){height:initial;@media (max-width:", "){height:700px;}}"], FormSupplierRegister_HEIGHTS.reduce(function (accum, val) {
  return "".concat(accum, "\n        @media (min-height: ").concat(val, "px) {\n            height: ").concat(val - FormSupplierRegister_FORM_PARAMETER, "px;\n        }\n    ");
}, ''), function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.sm;
});

var FormSupplierRegister_FormSupplierRegister = function FormSupplierRegister(_ref2) {
  var _buttons;

  var as = _ref2.as,
      buttons = _ref2.buttons,
      onClose = _ref2.onClose,
      onSubmit = _ref2.onSubmit;

  var _useForm = Object(react_hook_form_es["a" /* default */])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors;

  (_buttons = buttons) !== null && _buttons !== void 0 ? _buttons : buttons = ['submit', 'cancel'];
  return /*#__PURE__*/react_default.a.createElement(shared_Box, {
    width: "100%",
    as: "form",
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    bg: "gray.0",
    className: "rounded"
  }, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    p: "10px",
    justifyContent: "center"
  }, /*#__PURE__*/react_default.a.createElement("h2", null, "Register as supplier")), /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    bg: "gray.0",
    p: "16px",
    flexDirection: {
      0: 'column',
      sm: 'row'
    },
    as: as || FormSupplierRegister_HeightProps
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    flex: 1
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pb: "8px"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    name: "name",
    title: "Name",
    forwardRef: register({
      required: true
    }),
    error: errors.name
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pb: "8px"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    type: "email",
    name: "email",
    title: "Email",
    forwardRef: register({
      required: true
    }),
    error: errors.email
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pb: "8px"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    name: "description",
    title: "About you",
    height: "150px",
    width: "100%",
    control: "textarea",
    forwardRef: register({
      required: false
    }),
    error: errors.description
  }))))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "text-center"
  }, buttons.includes('cancel') ? /*#__PURE__*/react_default.a.createElement("button", {
    className: "btn btn-secondary",
    type: "button",
    onClick: onClose
  }, "Cancel") : '', buttons.includes('submit') ? /*#__PURE__*/react_default.a.createElement("button", {
    className: "btn btn-primary",
    type: "submit"
  }, "Register") : ''));
};

/* harmony default export */ var modal_FormSupplierRegister = (FormSupplierRegister_FormSupplierRegister);
// CONCATENATED MODULE: ./src/components/modal/FormVote.jsx
/* eslint-disable max-len */





var FormVote_FormVote = function FormVote(_ref) {
  var _buttons;

  var buttons = _ref.buttons,
      onClose = _ref.onClose,
      onSubmit = _ref.onSubmit,
      item = _ref.item;

  var _useForm = Object(react_hook_form_es["a" /* default */])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors;

  (_buttons = buttons) !== null && _buttons !== void 0 ? _buttons : buttons = ['submit', 'cancel'];
  var vote = item !== null && item !== void 0 && item.isFeatured ? 'delisted' : 'featured';
  return /*#__PURE__*/react_default.a.createElement(shared_Box, {
    width: "80%",
    margin: "auto",
    as: "form",
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    type: "hidden",
    name: "item",
    defaultValue: item === null || item === void 0 ? void 0 : item.id,
    forwardRef: register({
      required: false
    })
  }), /*#__PURE__*/react_default.a.createElement(controls_Input, {
    type: "hidden",
    name: "name",
    defaultValue: item === null || item === void 0 ? void 0 : item.name,
    forwardRef: register({
      required: false
    })
  }), /*#__PURE__*/react_default.a.createElement(controls_Input, {
    type: "hidden",
    name: "vote",
    defaultValue: vote,
    forwardRef: register({
      required: false
    })
  }), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    bg: "gray.0",
    className: "card"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react_default.a.createElement("h4", {
    className: "card-title text-center"
  }, "Voting for ".concat(item === null || item === void 0 ? void 0 : item.name)), /*#__PURE__*/react_default.a.createElement("div", {
    className: "card-img-top",
    style: {
      maxHeight: '200px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: item === null || item === void 0 ? void 0 : item.image,
    className: "card-img-top",
    alt: "..."
  })), item !== null && item !== void 0 && item.isFeatured ? /*#__PURE__*/react_default.a.createElement("h4", {
    className: "card-subtitle my-2 text-muted"
  }, "Delisting coupon from featured list") : /*#__PURE__*/react_default.a.createElement("h4", {
    className: "card-subtitle my-2 text-muted"
  }, "Listing coupon to featured list"), /*#__PURE__*/react_default.a.createElement("p", {
    className: "card-text"
  }, "In order to participate in adding or removing a coupon from the list of highlighted coupons, you should vote."), /*#__PURE__*/react_default.a.createElement("div", {
    className: "card-text"
  }, /*#__PURE__*/react_default.a.createElement("ul", {
    className: "list-unstyled"
  }, /*#__PURE__*/react_default.a.createElement("li", null, "Voting is done in two steps"), /*#__PURE__*/react_default.a.createElement("ul", null, /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement("b", null, "Commit"), ' your vote by using a secret phrase.'), /*#__PURE__*/react_default.a.createElement("li", null, 'Once the required number of participants is reached, you must ', /*#__PURE__*/react_default.a.createElement("b", null, "reveal"), ' your vote for it to be effective.')))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "card-text"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    control: "select",
    title: "What do you want ? Feature or Delist this coupon ?",
    name: "vote",
    className: "custom-select",
    forwardRef: register({
      required: true
    }),
    error: errors.vote,
    defaultValue: item !== null && item !== void 0 && item.isFeatured ? 'delisted' : 'featured'
  }, /*#__PURE__*/react_default.a.createElement("option", {
    value: "featured"
  }, "Add to featured list"), /*#__PURE__*/react_default.a.createElement("option", {
    value: "delisted"
  }, "Remove from featured list"))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "card-text"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    name: "salt",
    title: "Secret phrase",
    forwardRef: register({
      required: true
    }),
    error: errors.salt
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "alert alert-warning"
  }, "Do not lose your secret phrase, or you will not be able to reveal you vote at step 2")))), /*#__PURE__*/react_default.a.createElement(controls_Footer, null, buttons.includes('cancel') ? /*#__PURE__*/react_default.a.createElement(controls_Button, {
    className: "text-secondary",
    type: "button",
    onClick: onClose
  }, "Cancel") : '', buttons.includes('submit') ? /*#__PURE__*/react_default.a.createElement(controls_Button, {
    className: "text-warning",
    type: "submit"
  }, "Commit") : ''));
};

/* harmony default export */ var modal_FormVote = (FormVote_FormVote);
// CONCATENATED MODULE: ./src/components/modal/ErrorDialog.jsx
/* eslint-disable react/no-danger */



var ErrorDialog_ErrorDialog = function ErrorDialog(_ref) {
  var text = _ref.text,
      open = _ref.open,
      onClose = _ref.onClose;
  return /*#__PURE__*/react_default.a.createElement(shared_Modal, {
    open: open,
    onClose: onClose,
    zIndex: "99"
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    width: "600px",
    bg: "#220000",
    color: "gray.0",
    className: "rounded-pill text-center"
  }, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    p: "16px",
    flexDirection: "column",
    alignItems: "center"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "text-center my-3 py-3"
  }, /*#__PURE__*/react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "64",
    height: "64",
    fill: "currentColor",
    className: "bi bi-exclamation-triangle-fill",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    d: "M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
  }))), /*#__PURE__*/react_default.a.createElement(shared_Text, {
    lineHeight: "22px",
    pt: "10px",
    fontSize: "18px",
    className: "my-1"
  }, /*#__PURE__*/react_default.a.createElement("div", null, typeof text === 'string' && text.length > 0 ? text : ''))), /*#__PURE__*/react_default.a.createElement("button", {
    type: "button",
    className: "btn btn-danger text-center mt-3 mb-4",
    onClick: onClose
  }, "close")));
};

/* harmony default export */ var modal_ErrorDialog = (ErrorDialog_ErrorDialog);
// CONCATENATED MODULE: ./src/components/modal/Loading.jsx
/* eslint-disable react/no-danger */



var Loading_ModalLoading = function ModalLoading(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/react_default.a.createElement(shared_Box, {
    width: "600px"
  }, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    bg: "#222",
    p: "16px",
    flexDirection: "column",
    alignItems: "center",
    className: "rounded-pill"
  }, /*#__PURE__*/react_default.a.createElement(shared_Loading, null), /*#__PURE__*/react_default.a.createElement(shared_Text, {
    lineHeight: "22px",
    pt: "10px",
    fontSize: "18px",
    color: "gray.0",
    className: "mb-5 pb-5"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: text
    },
    className: "text-center"
  }))));
};

/* harmony default export */ var modal_Loading = (Loading_ModalLoading);
// CONCATENATED MODULE: ./src/components/modal/index.js







// CONCATENATED MODULE: ./src/components/modal/FormReveal.jsx
/* eslint-disable jsx-a11y/accessible-emoji */

/* eslint-disable react/no-unescaped-entities */

/* eslint-disable max-len */





var FormReveal_FormReveal = function FormReveal(_ref) {
  var _buttons;

  var buttons = _ref.buttons,
      onClose = _ref.onClose,
      onSubmit = _ref.onSubmit,
      item = _ref.item,
      voting = _ref.voting;

  var _useForm = Object(react_hook_form_es["a" /* default */])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors;

  (_buttons = buttons) !== null && _buttons !== void 0 ? _buttons : buttons = ['submit', 'cancel'];
  return /*#__PURE__*/react_default.a.createElement(shared_Box, {
    width: "80%",
    margin: "auto",
    as: "form",
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    type: "hidden",
    name: "item",
    defaultValue: item === null || item === void 0 ? void 0 : item.id,
    forwardRef: register({
      required: false
    })
  }), /*#__PURE__*/react_default.a.createElement(controls_Input, {
    type: "hidden",
    name: "name",
    defaultValue: item === null || item === void 0 ? void 0 : item.name,
    forwardRef: register({
      required: false
    })
  }), /*#__PURE__*/react_default.a.createElement(controls_Input, {
    type: "hidden",
    name: "commit",
    defaultValue: voting === null || voting === void 0 ? void 0 : voting.commit,
    forwardRef: register({
      required: false
    })
  }), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    bg: "gray.0",
    className: "card"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react_default.a.createElement("h4", {
    className: "card-title text-center"
  }, "Voting for ".concat(item === null || item === void 0 ? void 0 : item.name)), /*#__PURE__*/react_default.a.createElement("div", {
    className: "card-img-top",
    style: {
      maxHeight: '200px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: item === null || item === void 0 ? void 0 : item.image,
    className: "card-img-top",
    alt: "..."
  })), /*#__PURE__*/react_default.a.createElement("h4", {
    className: "card-subtitle my-2 text-muted"
  }, "Vote for listing or delisting coupon from featured list"), /*#__PURE__*/react_default.a.createElement("p", {
    className: "card-text"
  }, "It's time to reveal your vote to the world and list or delist this coupon", ' ', /*#__PURE__*/react_default.a.createElement("span", {
    role: "img"
  }, "\uD83D\uDE0E")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "card-text"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    name: "salt",
    title: "Secret phrase",
    forwardRef: register({
      required: true
    }),
    error: errors.salt
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "alert alert-warning"
  }, "Do not lose your secret phrase, or you will not be able to reveal you vote at step 2")))), /*#__PURE__*/react_default.a.createElement(controls_Footer, null, buttons.includes('cancel') ? /*#__PURE__*/react_default.a.createElement(controls_Button, {
    className: "text-secondary",
    type: "button",
    onClick: onClose
  }, "Cancel") : '', buttons.includes('submit') ? /*#__PURE__*/react_default.a.createElement(controls_Button, {
    className: "text-warning",
    type: "submit"
  }, "Reveal") : ''));
};

/* harmony default export */ var modal_FormReveal = (FormReveal_FormReveal);
// CONCATENATED MODULE: ./src/components/service/useCouponDialogs.jsx
function useCouponDialogs_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { useCouponDialogs_typeof = function _typeof(obj) { return typeof obj; }; } else { useCouponDialogs_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return useCouponDialogs_typeof(obj); }

function useCouponDialogs_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function useCouponDialogs_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { useCouponDialogs_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { useCouponDialogs_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function useCouponDialogs_slicedToArray(arr, i) { return useCouponDialogs_arrayWithHoles(arr) || useCouponDialogs_iterableToArrayLimit(arr, i) || useCouponDialogs_unsupportedIterableToArray(arr, i) || useCouponDialogs_nonIterableRest(); }

function useCouponDialogs_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useCouponDialogs_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useCouponDialogs_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useCouponDialogs_arrayLikeToArray(o, minLen); }

function useCouponDialogs_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useCouponDialogs_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useCouponDialogs_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-nested-ternary */

/* eslint-disable no-alert */







function useCouponDialogs() {
  var _useAppDialogs = service_useAppDialogs(),
      selectedItem = _useAppDialogs.selectedItem,
      selectItem = _useAppDialogs.selectItem,
      editedItem = _useAppDialogs.editedItem,
      _useAppDialogs$dialog = useCouponDialogs_slicedToArray(_useAppDialogs.dialog, 3),
      dialogOpened = _useAppDialogs$dialog[0],
      onDialogOpen = _useAppDialogs$dialog[1],
      onDialogClose = _useAppDialogs$dialog[2],
      _useAppDialogs$result = useCouponDialogs_slicedToArray(_useAppDialogs.result, 4),
      resultText = _useAppDialogs$result[0],
      resultOpened = _useAppDialogs$result[1],
      onResultOpen = _useAppDialogs$result[2],
      onResultClose = _useAppDialogs$result[3],
      _useAppDialogs$result2 = useCouponDialogs_slicedToArray(_useAppDialogs.resultBuy, 3),
      resultBuyOpened = _useAppDialogs$result2[0],
      onResultBuyOpen = _useAppDialogs$result2[1],
      onResultBuyClose = _useAppDialogs$result2[2],
      _useAppDialogs$form = useCouponDialogs_slicedToArray(_useAppDialogs.form, 3),
      formOpened = _useAppDialogs$form[0],
      onFormOpen = _useAppDialogs$form[1],
      onFormClose = _useAppDialogs$form[2];

  var _useAppDialogs2 = service_useAppDialogs(),
      voteItem = _useAppDialogs2.editedItem,
      _useAppDialogs2$form = useCouponDialogs_slicedToArray(_useAppDialogs2.form, 3),
      voteFormOpened = _useAppDialogs2$form[0],
      onVoteFormOpened = _useAppDialogs2$form[1],
      onVoteFormClose = _useAppDialogs2$form[2];

  var _useAppDialogs3 = service_useAppDialogs(),
      revealItem = _useAppDialogs3.editedItem,
      revealOption = _useAppDialogs3.editedOption,
      _useAppDialogs3$form = useCouponDialogs_slicedToArray(_useAppDialogs3.form, 3),
      revealFormOpened = _useAppDialogs3$form[0],
      onRevealFormOpened = _useAppDialogs3$form[1],
      onRevealFormClose = _useAppDialogs3$form[2];

  var _useState = Object(react["useState"])(false),
      _useState2 = useCouponDialogs_slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react["useState"])(true),
      _useState4 = useCouponDialogs_slicedToArray(_useState3, 2),
      errorResult = _useState4[0],
      setErrorResult = _useState4[1];

  function callAction(_x) {
    return _callAction.apply(this, arguments);
  }

  function _callAction() {
    _callAction = useCouponDialogs_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(fn) {
      var loadText,
          resText,
          _args2 = arguments;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              loadText = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : '';
              resText = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : '';
              setLoading(loadText);
              _context2.prev = 3;
              if (formOpened) onFormClose();
              if (voteFormOpened) onVoteFormClose();
              if (revealFormOpened) onRevealFormClose();
              if (dialogOpened) onDialogClose();
              _context2.next = 10;
              return fn();

            case 10:
              onResultOpen(resText);
              _context2.next = 17;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](3);
              setErrorResult(_context2.t0);
              console.error(_context2.t0);

            case 17:
              _context2.prev = 17;
              setLoading(false);
              return _context2.finish(17);

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 13, 17, 20]]);
    }));
    return _callAction.apply(this, arguments);
  }

  function _onWithdraw2(_x2) {
    return _onWithdraw.apply(this, arguments);
  }

  function _onWithdraw() {
    _onWithdraw = useCouponDialogs_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(item) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              callAction( /*#__PURE__*/useCouponDialogs_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        if (!item) {
                          _context3.next = 9;
                          break;
                        }

                        if (!(item.isExpired || item.isBurned)) {
                          _context3.next = 6;
                          break;
                        }

                        _context3.next = 4;
                        return withdrawFunds(item);

                      case 4:
                        _context3.next = 9;
                        break;

                      case 6:
                        if (!item.isOwned) {
                          _context3.next = 9;
                          break;
                        }

                        _context3.next = 9;
                        return burnCoupon(item);

                      case 9:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              })), "<p>Withdrawing Funds for coupon <a href=\"".concat("https://testnet.wavesexplorer.com/assets/".concat(item === null || item === void 0 ? void 0 : item.assetId, "/"), "\" target=\"_blank\">", shortAddress(item.assetId), "</a><p>"), '<p>Funds withdrawn successfully</p>');

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _onWithdraw.apply(this, arguments);
  }

  function _onReject2(_x3) {
    return _onReject.apply(this, arguments);
  }

  function _onReject() {
    _onReject = useCouponDialogs_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(item) {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              callAction( /*#__PURE__*/useCouponDialogs_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        if (!item) {
                          _context5.next = 3;
                          break;
                        }

                        _context5.next = 3;
                        return rejectPurchase(item);

                      case 3:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              })), '<p>Rejecting and refund buyer</p>', '<p>Purchase rejected and buyer refunded</p>');

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
    return _onReject.apply(this, arguments);
  }

  function _onAccept2(_x4) {
    return _onAccept.apply(this, arguments);
  }

  function _onAccept() {
    _onAccept = useCouponDialogs_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(item) {
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              callAction( /*#__PURE__*/useCouponDialogs_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        if (!item) {
                          _context7.next = 3;
                          break;
                        }

                        _context7.next = 3;
                        return acceptPurchase(item);

                      case 3:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7);
              })), '<p>Confirming purchase</p>', '<p>Purchase confirmed</p>');

            case 1:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));
    return _onAccept.apply(this, arguments);
  }

  function onSave(_x5) {
    return _onSave.apply(this, arguments);
  }

  function _onSave() {
    _onSave = useCouponDialogs_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(data) {
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              callAction( /*#__PURE__*/useCouponDialogs_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                var _data$id;

                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        if (!((data === null || data === void 0 ? void 0 : (_data$id = data.id) === null || _data$id === void 0 ? void 0 : _data$id.length) === 0)) {
                          _context9.next = 5;
                          break;
                        }

                        _context9.next = 3;
                        return addItem(data);

                      case 3:
                        _context9.next = 7;
                        break;

                      case 5:
                        _context9.next = 7;
                        return updateItem(data);

                      case 7:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9);
              })), "<p>Saving coupon</p><p><b>".concat(data.name, "</p>"), "<p>Coupon <b>".concat(data.name, "</b></p><p>saved successfully</p>"));

            case 1:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));
    return _onSave.apply(this, arguments);
  }

  function _onRemove2(_x6) {
    return _onRemove.apply(this, arguments);
  }

  function _onRemove() {
    _onRemove = useCouponDialogs_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(item) {
      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              callAction( /*#__PURE__*/useCouponDialogs_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                var _item$id;

                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        if (!((item === null || item === void 0 ? void 0 : (_item$id = item.id) === null || _item$id === void 0 ? void 0 : _item$id.length) > 0)) {
                          _context11.next = 3;
                          break;
                        }

                        _context11.next = 3;
                        return removeItem(item);

                      case 3:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11);
              })), "<p>Removing coupon</p><p><b>".concat(item.name, "</b><p>"), "<p>Coupon <b>".concat(item.name, "</b></p><p>removed successfully</p>"));

            case 1:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));
    return _onRemove.apply(this, arguments);
  }

  function _onBurn2(_x7) {
    return _onBurn.apply(this, arguments);
  }

  function _onBurn() {
    _onBurn = useCouponDialogs_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(item) {
      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              alert(1);
              callAction( /*#__PURE__*/useCouponDialogs_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                var _item$assetId;

                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        if (!((item === null || item === void 0 ? void 0 : (_item$assetId = item.assetId) === null || _item$assetId === void 0 ? void 0 : _item$assetId.length) > 0)) {
                          _context13.next = 3;
                          break;
                        }

                        _context13.next = 3;
                        return burnCoupon(item);

                      case 3:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13);
              })), "<p>Burning coupon</p><p><b>".concat(item.name, "</b><p><p>and withdraw funds"), "<p>Coupon <b>".concat(item.name, "</b></p><p>burned successfully</p><p>Funds ").concat(formatNumber(item.amount), " WAVES withdrawn successfully</p>"));

            case 2:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    }));
    return _onBurn.apply(this, arguments);
  }

  function _onUse2(_x8) {
    return _onUse.apply(this, arguments);
  }

  function _onUse() {
    _onUse = useCouponDialogs_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(item) {
      var _item$item;

      return regeneratorRuntime.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              callAction( /*#__PURE__*/useCouponDialogs_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                return regeneratorRuntime.wrap(function _callee15$(_context15) {
                  while (1) {
                    switch (_context15.prev = _context15.next) {
                      case 0:
                        if (!item) {
                          _context15.next = 3;
                          break;
                        }

                        _context15.next = 3;
                        return sendCouponToSupplier(item);

                      case 3:
                      case "end":
                        return _context15.stop();
                    }
                  }
                }, _callee15);
              })), "<p>Using coupon</p><p><b>".concat(item.name || ((_item$item = item.item) === null || _item$item === void 0 ? void 0 : _item$item.name), "</b><p>"), '<p>Thank you for using this coupon. We hope you are happy with your discount</p>');

            case 1:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16);
    }));
    return _onUse.apply(this, arguments);
  }

  function _onBuy2(_x9) {
    return _onBuy.apply(this, arguments);
  }

  function _onBuy() {
    _onBuy = useCouponDialogs_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(item) {
      var _item$item2;

      return regeneratorRuntime.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              callAction( /*#__PURE__*/useCouponDialogs_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
                return regeneratorRuntime.wrap(function _callee17$(_context17) {
                  while (1) {
                    switch (_context17.prev = _context17.next) {
                      case 0:
                        if (!item) {
                          _context17.next = 3;
                          break;
                        }

                        _context17.next = 3;
                        return purchaseCoupon(item.item || item);

                      case 3:
                      case "end":
                        return _context17.stop();
                    }
                  }
                }, _callee17);
              })), "<p>Sending purchase transaction for coupon</p><p><b>".concat(((_item$item2 = item.item) === null || _item$item2 === void 0 ? void 0 : _item$item2.name) || item.name, "</b><p>"), '<div class="alert alert-success">Thank you for your purchase.</div><p>The supplier will soon validate this transaction and you will receive your coupon as NFT</p>');

            case 1:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18);
    }));
    return _onBuy.apply(this, arguments);
  }

  function onVote(_x10, _x11) {
    return _onVote.apply(this, arguments);
  }

  function _onVote() {
    _onVote = useCouponDialogs_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(item, voting) {
      return regeneratorRuntime.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              onDialogClose();
              selectItem(item);
              onVoteFormOpened(item, voting);

            case 3:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19);
    }));
    return _onVote.apply(this, arguments);
  }

  function onReveal(_x12, _x13) {
    return _onReveal.apply(this, arguments);
  }

  function _onReveal() {
    _onReveal = useCouponDialogs_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(item, voting) {
      return regeneratorRuntime.wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              onDialogClose();
              selectItem(item);
              onRevealFormOpened(item, voting);

            case 3:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20);
    }));
    return _onReveal.apply(this, arguments);
  }

  function onVoteCommit(_x14) {
    return _onVoteCommit.apply(this, arguments);
  }

  function _onVoteCommit() {
    _onVoteCommit = useCouponDialogs_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(data) {
      return regeneratorRuntime.wrap(function _callee22$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              callAction( /*#__PURE__*/useCouponDialogs_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
                return regeneratorRuntime.wrap(function _callee21$(_context21) {
                  while (1) {
                    switch (_context21.prev = _context21.next) {
                      case 0:
                        console.debug(data);

                        if (!(data && data.vote && data.item && data.salt)) {
                          _context21.next = 4;
                          break;
                        }

                        _context21.next = 4;
                        return commitVote(data);

                      case 4:
                      case "end":
                        return _context21.stop();
                    }
                  }
                }, _callee21);
              })), "<p>Sending commit transaction for coupon</p><p><b>".concat(data.name, "</b><p>"), '<div class="alert alert-success">Thank you for voting.</div>');

            case 1:
            case "end":
              return _context22.stop();
          }
        }
      }, _callee22);
    }));
    return _onVoteCommit.apply(this, arguments);
  }

  function onVoteReveal(_x15) {
    return _onVoteReveal.apply(this, arguments);
  }

  function _onVoteReveal() {
    _onVoteReveal = useCouponDialogs_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(data) {
      return regeneratorRuntime.wrap(function _callee24$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              callAction( /*#__PURE__*/useCouponDialogs_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
                return regeneratorRuntime.wrap(function _callee23$(_context23) {
                  while (1) {
                    switch (_context23.prev = _context23.next) {
                      case 0:
                        if (!(data && data.commit && data.item && data.salt)) {
                          _context23.next = 3;
                          break;
                        }

                        _context23.next = 3;
                        return revealVote(data);

                      case 3:
                      case "end":
                        return _context23.stop();
                    }
                  }
                }, _callee23);
              })), "<p>Sending reveal transaction for coupon</p><p><b>".concat(data.name, "</b><p>"), '<div class="alert alert-success">Thank you for voting.</div>');

            case 1:
            case "end":
              return _context24.stop();
          }
        }
      }, _callee24);
    }));
    return _onVoteReveal.apply(this, arguments);
  }

  function CouponDialogs(_ref) {
    var mode = _ref.mode,
        enableVoting = _ref.enableVoting;
    var dialogButtons = mode === 'manage' ? ['edit', 'remove'] : mode === 'withdraw' ? ['withdraw'] : mode === 'approval' ? ['accept', 'reject'] : mode === 'market' ? ['buy'] : mode === 'active' ? ['use'] : ['buy'];
    if (enableVoting) dialogButtons.push('vote');
    return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(shared_Modal, {
      open: dialogOpened,
      onClose: onDialogClose
    }, /*#__PURE__*/react_default.a.createElement(modal_Dialog, {
      buttons: dialogButtons,
      coupon: selectedItem,
      onClose: onDialogClose,
      onEdit: function onEdit() {
        onDialogClose();
        onFormOpen(selectedItem);
      },
      onVote: onVote,
      onReveal: onReveal,
      onRemove: function onRemove() {
        return _onRemove2(selectedItem);
      },
      onWithdraw: function onWithdraw() {
        return _onWithdraw2(selectedItem);
      },
      onAccept: function onAccept() {
        return _onAccept2(selectedItem);
      },
      onReject: function onReject() {
        return _onReject2(selectedItem);
      },
      onBurn: function onBurn() {
        return _onBurn2(selectedItem);
      },
      onBuy: function onBuy() {
        return _onBuy2(selectedItem);
      },
      onUse: function onUse() {
        return _onUse2(selectedItem);
      }
    })), /*#__PURE__*/react_default.a.createElement(shared_Modal, {
      open: formOpened,
      onClose: onFormClose,
      width: {
        0: '100%',
        lg: 'initial'
      },
      mx: "10px"
    }, /*#__PURE__*/react_default.a.createElement(modal_Form, {
      editedItem: editedItem,
      onClose: onFormClose,
      onSubmit: /*#__PURE__*/function () {
        var _ref2 = useCouponDialogs_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", onSave(data));

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x16) {
          return _ref2.apply(this, arguments);
        };
      }()
    })), /*#__PURE__*/react_default.a.createElement(shared_Modal, {
      open: voteFormOpened,
      onClose: onVoteFormClose,
      width: {
        0: '100%',
        lg: 'initial'
      },
      mx: "10px"
    }, /*#__PURE__*/react_default.a.createElement(modal_FormVote, {
      item: (voteItem === null || voteItem === void 0 ? void 0 : voteItem.item) || voteItem,
      onClose: onVoteFormClose,
      onSubmit: onVoteCommit
    })), /*#__PURE__*/react_default.a.createElement(shared_Modal, {
      open: revealFormOpened,
      onClose: onRevealFormClose,
      width: {
        0: '100%',
        lg: 'initial'
      },
      mx: "10px"
    }, /*#__PURE__*/react_default.a.createElement(modal_FormReveal, {
      item: (revealItem === null || revealItem === void 0 ? void 0 : revealItem.item) || revealItem,
      voting: revealOption,
      onClose: onRevealFormClose,
      onSubmit: onVoteReveal
    })), /*#__PURE__*/react_default.a.createElement(shared_Modal, {
      open: resultOpened,
      onClose: onResultClose
    }, /*#__PURE__*/react_default.a.createElement(modal_Result, {
      text: resultText,
      onClose: onResultClose
    })), /*#__PURE__*/react_default.a.createElement(shared_Modal, {
      open: typeof loading === 'string',
      onClose: function onClose() {
        return setLoading(false);
      }
    }, /*#__PURE__*/react_default.a.createElement(modal_Loading, {
      className: "bg-dark",
      text: loading
    })), /*#__PURE__*/react_default.a.createElement(modal_ErrorDialog, {
      className: "bg-dark",
      text: errorResult === null || errorResult === void 0 ? void 0 : errorResult.message,
      open: useCouponDialogs_typeof(errorResult) === 'object',
      onClose: function onClose() {
        return setErrorResult(false);
      }
    }));
  }

  return {
    CouponDialogs: CouponDialogs,
    selectedItem: selectedItem,
    editedItem: editedItem,
    dialog: [dialogOpened, onDialogOpen, onDialogClose],
    result: [resultOpened, onResultOpen, onResultClose],
    resultBuy: [resultBuyOpened, onResultBuyOpen, onResultBuyClose],
    form: [formOpened, onFormOpen, onFormClose],
    showItem: onDialogOpen,
    onBuy: _onBuy2,
    onVote: onVote,
    onReveal: onReveal,
    onUse: _onUse2,
    onRemove: _onRemove2,
    onSave: onSave,
    onReject: _onReject2,
    onAccept: _onAccept2,
    onBurn: _onBurn2,
    onWithdraw: _onWithdraw2
  };
}

/* harmony default export */ var service_useCouponDialogs = (useCouponDialogs);
// CONCATENATED MODULE: ./src/components/service/index.js




// CONCATENATED MODULE: ./src/containers/Coupons.jsx
function Coupons_extends() { Coupons_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Coupons_extends.apply(this, arguments); }






var Card = Object(styled_components_browser_esm["d" /* default */])(shared_Box).withConfig({
  displayName: "Coupons__Card",
  componentId: "sc-11zj5j5-0"
})(["cursor:pointer;transition:box-shadow linear 200ms;&:hover{box-shadow:1px 2px 5px rgba(0,0,0,0.5);}"]);

var Coupons_Coupons = function Coupons(_ref) {
  var _items;

  var setActiveUrl = _ref.setActiveUrl,
      mode = _ref.mode,
      isManager = _ref.isManager,
      items = _ref.items,
      hideEmptyListMessage = _ref.hideEmptyListMessage,
      enableVoting = _ref.enableVoting;

  var _useCouponDialogs = service_useCouponDialogs(),
      CouponDialogs = _useCouponDialogs.CouponDialogs,
      showItem = _useCouponDialogs.showItem;

  (_items = items) !== null && _items !== void 0 ? _items : items = [];
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, isManager && items.length === 0 && !hideEmptyListMessage ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "alert alert-dark text-center"
  }, "No coupons yet, add a coupon to start") : null, !isManager && items.length === 0 && !hideEmptyListMessage ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "alert alert-dark text-center"
  }, "No coupons yet, go to \xA0", /*#__PURE__*/react_default.a.createElement("a", {
    className: "btn btn-primary",
    href: "#featured",
    onClick: function onClick() {
      return setActiveUrl('#featured');
    }
  }, "Market"), "\xA0 to buy coupons") : null, items.length > 0 ? items.map(function (e) {
    return /*#__PURE__*/react_default.a.createElement(shared_Box, {
      key: e.id,
      p: "20px",
      width: {
        0: '100%',
        md: 'initial'
      }
    }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
      as: Card
    }, /*#__PURE__*/react_default.a.createElement("div", {
      className: e.isExpired ? 'alert alert-danger p-1 m-0' : ''
    }, /*#__PURE__*/react_default.a.createElement(components_coupon, Coupons_extends({
      width: {
        0: '100%',
        md: '300px'
      },
      height: "300px"
    }, e.item || e, {
      onClick: function onClick() {
        return showItem(e);
      }
    })), e.isExpired ? /*#__PURE__*/react_default.a.createElement("div", {
      className: "p-1 text-center",
      style: {
        backgroundColor: 'rgba(255,255,255,0.5)'
      }
    }, "This coupon has expired") : null)));
  }) : null, /*#__PURE__*/react_default.a.createElement(CouponDialogs, {
    mode: mode,
    enableVoting: enableVoting,
    isManager: isManager
  }));
};

/* harmony default export */ var containers_Coupons = (Coupons_Coupons);
// CONCATENATED MODULE: ./src/containers/CouponsList.jsx
/* eslint-disable max-len */

/* eslint-disable no-nested-ternary */








var CouponsList_Card = Object(styled_components_browser_esm["d" /* default */])(shared_Box).withConfig({
  displayName: "CouponsList__Card",
  componentId: "sc-159i8zi-0"
})(["cursor:pointer;transition:box-shadow linear 200ms;&:hover{box-shadow:1px 2px 5px rgba(0,0,0,0.5);}"]);

var CouponsList_CouponsList = function CouponsList(_ref) {
  var _items;

  var mode = _ref.mode,
      isManager = _ref.isManager,
      items = _ref.items,
      setActiveUrl = _ref.setActiveUrl,
      hideEmptyListMessage = _ref.hideEmptyListMessage,
      enableVoting = _ref.enableVoting;

  var _useCouponDialogs = service_useCouponDialogs(),
      CouponDialogs = _useCouponDialogs.CouponDialogs,
      showItem = _useCouponDialogs.showItem,
      onWithdraw = _useCouponDialogs.onWithdraw,
      onBurn = _useCouponDialogs.onBurn,
      onAccept = _useCouponDialogs.onAccept,
      onReject = _useCouponDialogs.onReject,
      onVote = _useCouponDialogs.onVote,
      onReveal = _useCouponDialogs.onReveal;

  (_items = items) !== null && _items !== void 0 ? _items : items = [];
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, items.length === 0 && isManager && !hideEmptyListMessage ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "alert alert-dark text-center"
  }, "No coupons yet, go to \xA0", /*#__PURE__*/react_default.a.createElement(shared_Box, {
    as: "span",
    onClick: function onClick() {
      return setActiveUrl('#supplier/manage');
    }
  }, /*#__PURE__*/react_default.a.createElement("a", {
    className: "btn btn-primary",
    href: "#supplier/manage"
  }, "Manage Coupons")), "\xA0 to add, update or remove coupons") : null, items.length === 0 && !isManager && !hideEmptyListMessage ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "alert text-center"
  }, "No coupons yet, go to \xA0", /*#__PURE__*/react_default.a.createElement("a", {
    className: "btn btn-primary",
    href: "#featured",
    onClick: function onClick() {
      return setActiveUrl('#featured');
    }
  }, "Market"), "\xA0 to buy coupons") : null, items.length > 0 ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "table-responsive-sm"
  }, /*#__PURE__*/react_default.a.createElement("table", {
    className: "table table-striped"
  }, /*#__PURE__*/react_default.a.createElement("thead", null, /*#__PURE__*/react_default.a.createElement("tr", null, /*#__PURE__*/react_default.a.createElement("th", null, "Date"), /*#__PURE__*/react_default.a.createElement("th", null, "Coupon"), /*#__PURE__*/react_default.a.createElement("th", null, "NFT Address"), /*#__PURE__*/react_default.a.createElement("th", null, isManager ? 'Owned by' : 'Supplier'), /*#__PURE__*/react_default.a.createElement("th", null, isManager ? mode === 'withdraw' ? 'Available Funds' : 'Locked Funds' : 'Paid'), /*#__PURE__*/react_default.a.createElement("th", null, "Expire"), /*#__PURE__*/react_default.a.createElement("th", null, "Status"), /*#__PURE__*/react_default.a.createElement("th", null, isManager ? 'Actions' : 'Voting'))), /*#__PURE__*/react_default.a.createElement("tbody", null, items.map(function (e) {
    var _e$supplierData, _e$item, _e$item2, _e$item3;

    var refAddr = '';
    if (e.isManager && e.isOwned) refAddr = e.supplier;else if (e.isManager && !e.isOwned) refAddr = e.user;else if (e.isOwned) refAddr = e.user;else refAddr = e.supplier;
    var refName = refAddr === e.supplier ? ((_e$supplierData = e.supplierData) === null || _e$supplierData === void 0 ? void 0 : _e$supplierData.name) || null : refAddr;
    var status = e.couponStatus;
    var statusColor = colorStatus(status);
    return /*#__PURE__*/react_default.a.createElement("tr", {
      key: e.id
    }, /*#__PURE__*/react_default.a.createElement("td", {
      className: "align-middle"
    }, "".concat(formatDate(new Date(e.timestamp)))), /*#__PURE__*/react_default.a.createElement("td", {
      className: "align-middle"
    }, /*#__PURE__*/react_default.a.createElement(CouponsList_Card, {
      className: "badge badge-".concat(statusColor, " p-2"),
      onClick: function onClick() {
        return showItem(e);
      }
    }, /*#__PURE__*/react_default.a.createElement("div", {
      style: {
        display: 'block',
        maxHeight: '20px',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/react_default.a.createElement("img", {
      src: e.item.image,
      width: "150px",
      alt: (_e$item = e.item) === null || _e$item === void 0 ? void 0 : _e$item.name
    })), /*#__PURE__*/react_default.a.createElement("div", {
      className: "mt-2"
    }, /*#__PURE__*/react_default.a.createElement("b", null, " ".concat((_e$item2 = e.item) === null || _e$item2 === void 0 ? void 0 : _e$item2.name))))), /*#__PURE__*/react_default.a.createElement("td", {
      className: "align-middle"
    }, /*#__PURE__*/react_default.a.createElement("a", {
      href: "https://testnet.wavesexplorer.com/assets/".concat(e.assetId, "/"),
      title: e.assetId,
      target: "_blank",
      rel: "noreferrer"
    }, /*#__PURE__*/react_default.a.createElement(header_controls_NFTIcon, null), ' ', shortAddress(e.assetId))), /*#__PURE__*/react_default.a.createElement("td", {
      className: "align-middle"
    }, /*#__PURE__*/react_default.a.createElement("a", {
      href: "https://testnet.wavesexplorer.com/address/".concat(refAddr, "/"),
      title: refAddr,
      target: "_blank",
      rel: "noreferrer"
    }, /*#__PURE__*/react_default.a.createElement(header_controls_UserIcon, null), ' ', e.isOwned ? ' You ' : refName || shortAddress(refAddr))), /*#__PURE__*/react_default.a.createElement("td", {
      className: "align-middle"
    }, "".concat(formatNumber(e.amount), " "), /*#__PURE__*/react_default.a.createElement("span", {
      className: "small"
    }, "WAVES")), /*#__PURE__*/react_default.a.createElement("td", {
      className: "align-middle"
    }, formatDate(new Date((_e$item3 = e.item) === null || _e$item3 === void 0 ? void 0 : _e$item3.expirationDate))), /*#__PURE__*/react_default.a.createElement("td", {
      className: "align-middle"
    }, /*#__PURE__*/react_default.a.createElement(shared_Badge, {
      text: status,
      type: statusColor
    })), /*#__PURE__*/react_default.a.createElement("td", {
      className: "align-middle"
    }, /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, isManager && mode !== 'history' ? /*#__PURE__*/react_default.a.createElement("div", null, mode === 'approval' ? /*#__PURE__*/react_default.a.createElement("div", {
      className: "btn-group mr-2",
      role: "group",
      "aria-label": "Logout"
    }, /*#__PURE__*/react_default.a.createElement("button", {
      type: "button",
      title: "Accept this coupon and send NFT to buyer",
      className: "btn btn-success",
      onClick: function onClick() {
        return onAccept(e);
      }
    }, "Confirm"), /*#__PURE__*/react_default.a.createElement("button", {
      type: "button",
      title: "Reject this coupon and refund buyer",
      className: "btn btn-danger",
      onClick: function onClick() {
        return onReject(e);
      }
    }, "Reject")) : null, mode === 'withdraw' ? /*#__PURE__*/react_default.a.createElement("button", {
      type: "button",
      title: e.isOwned ? 'Burn + Withdraw Funds' : 'Withdraw Funds',
      className: "btn btn-success",
      onClick: function onClick() {
        return onWithdraw(e);
      }
    }, "Withdraw Funds") : null, mode === 'burn' ? /*#__PURE__*/react_default.a.createElement("button", {
      type: "button",
      className: "btn btn-primary",
      onClick: function onClick() {
        return onBurn(e);
      }
    }, "Burn Coupon") : null) : null, !isManager && (mode === 'active' || mode === 'used' || mode === 'history') ? /*#__PURE__*/react_default.a.createElement(btVoting, {
      item: e.item || e,
      voting: e.voting,
      onCommitVote: onVote,
      onRevealVote: onReveal
    }) : null)));
  })))) : null, /*#__PURE__*/react_default.a.createElement(CouponDialogs, {
    isManager: isManager,
    mode: mode,
    enableVoting: enableVoting
  }));
};

/* harmony default export */ var containers_CouponsList = (CouponsList_CouponsList);
// CONCATENATED MODULE: ./src/containers/VotingList.jsx
/* eslint-disable max-len */

/* eslint-disable no-nested-ternary */






var VotingList_Card = Object(styled_components_browser_esm["d" /* default */])(shared_Box).withConfig({
  displayName: "VotingList__Card",
  componentId: "sc-18nm18y-0"
})(["cursor:pointer;transition:box-shadow linear 200ms;&:hover{box-shadow:1px 2px 5px rgba(0,0,0,0.5);}"]);

var VotingList_VotingList = function VotingList(_ref) {
  var _items;

  var mode = _ref.mode,
      items = _ref.items,
      setActiveUrl = _ref.setActiveUrl,
      hideEmptyListMessage = _ref.hideEmptyListMessage;

  var _useCouponDialogs = service_useCouponDialogs(),
      CouponDialogs = _useCouponDialogs.CouponDialogs,
      showItem = _useCouponDialogs.showItem,
      onVote = _useCouponDialogs.onVote,
      onReveal = _useCouponDialogs.onReveal;

  (_items = items) !== null && _items !== void 0 ? _items : items = [];
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, items.length === 0 && !hideEmptyListMessage ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "alert text-center"
  }, "No coupons yet, go to \xA0", /*#__PURE__*/react_default.a.createElement("a", {
    className: "btn btn-primary",
    href: "#featured",
    onClick: function onClick() {
      return setActiveUrl('#featured');
    }
  }, "Market"), "\xA0 to buy coupons") : null, items.length > 0 ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "table-responsive-sm"
  }, /*#__PURE__*/react_default.a.createElement("table", {
    className: "table table-striped"
  }, /*#__PURE__*/react_default.a.createElement("thead", null, /*#__PURE__*/react_default.a.createElement("tr", null, /*#__PURE__*/react_default.a.createElement("th", null, "Coupon"), /*#__PURE__*/react_default.a.createElement("th", null, "Expire"), /*#__PURE__*/react_default.a.createElement("th", null, "Round"), /*#__PURE__*/react_default.a.createElement("th", null, "Voting"))), /*#__PURE__*/react_default.a.createElement("tbody", null, items.map(function (e) {
    return /*#__PURE__*/react_default.a.createElement("tr", {
      key: e.id
    }, /*#__PURE__*/react_default.a.createElement("td", {
      className: "align-middle"
    }, /*#__PURE__*/react_default.a.createElement(VotingList_Card, {
      className: "badge badge-primary p-2",
      onClick: function onClick() {
        return showItem(e);
      }
    }, /*#__PURE__*/react_default.a.createElement("div", {
      style: {
        display: 'block',
        maxHeight: '20px',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/react_default.a.createElement("img", {
      src: e.image,
      width: "150px",
      alt: e.name
    })), /*#__PURE__*/react_default.a.createElement("div", {
      className: "mt-2"
    }, /*#__PURE__*/react_default.a.createElement("b", null, " ".concat(e.name))))), /*#__PURE__*/react_default.a.createElement("td", {
      className: "align-middle"
    }, formatDate(new Date(e.expirationDate))), /*#__PURE__*/react_default.a.createElement("td", {
      className: "align-middle"
    }, /*#__PURE__*/react_default.a.createElement("span", {
      className: "badge badge-primary rounded p-3",
      style: {
        fontSize: '18px',
        minWidth: '80px'
      }
    }, e.voting.round + 1)), /*#__PURE__*/react_default.a.createElement("td", {
      className: "align-middle"
    }, /*#__PURE__*/react_default.a.createElement(btVoting, {
      item: e,
      voting: e.voting,
      onCommitVote: onVote,
      onRevealVote: onReveal
    })));
  })))) : null, /*#__PURE__*/react_default.a.createElement(CouponDialogs, {
    mode: mode,
    enableVoting: true
  }));
};

/* harmony default export */ var containers_VotingList = (VotingList_VotingList);
// CONCATENATED MODULE: ./src/containers/Purchases.jsx
/* eslint-disable max-len */

/* eslint-disable no-nested-ternary */







var Purchases_Card = Object(styled_components_browser_esm["d" /* default */])(shared_Box).withConfig({
  displayName: "Purchases__Card",
  componentId: "sc-ra25o9-0"
})(["cursor:pointer;transition:box-shadow linear 200ms;&:hover{box-shadow:1px 2px 5px rgba(0,0,0,0.5);}"]);

var Purchases_Purchases = function Purchases(_ref) {
  var _items;

  var items = _ref.items,
      setActiveUrl = _ref.setActiveUrl,
      mode = _ref.mode,
      isManager = _ref.isManager,
      hideEmptyListMessage = _ref.hideEmptyListMessage,
      enableVoting = _ref.enableVoting;

  var _useCouponDialogs = service_useCouponDialogs(),
      CouponDialogs = _useCouponDialogs.CouponDialogs,
      showItem = _useCouponDialogs.showItem,
      onAccept = _useCouponDialogs.onAccept,
      onReject = _useCouponDialogs.onReject;

  (_items = items) !== null && _items !== void 0 ? _items : items = [];
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, items.length === 0 && isManager && !hideEmptyListMessage ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "alert alert-dark text-center"
  }, "No purchases yet, go to \xA0", /*#__PURE__*/react_default.a.createElement(shared_Box, {
    as: "span",
    onClick: function onClick() {
      return setActiveUrl('#supplier/manage');
    }
  }, /*#__PURE__*/react_default.a.createElement("a", {
    className: "btn btn-primary",
    href: "#supplier/manage"
  }, "Manage Coupons")), "\xA0 to add, update or remove coupons") : null, items.length === 0 && !isManager && !hideEmptyListMessage ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "alert text-center"
  }, "No purchases yet, go to \xA0", /*#__PURE__*/react_default.a.createElement("a", {
    className: "btn btn-primary",
    href: "#featured",
    onClick: function onClick() {
      return setActiveUrl('#featured');
    }
  }, "Market"), "\xA0 to buy coupons") : null, items.length > 0 ? /*#__PURE__*/react_default.a.createElement("table", {
    className: "table table-striped"
  }, /*#__PURE__*/react_default.a.createElement("thead", null, /*#__PURE__*/react_default.a.createElement("tr", null, /*#__PURE__*/react_default.a.createElement("th", null, "Date"), /*#__PURE__*/react_default.a.createElement("th", null, "Coupon"), /*#__PURE__*/react_default.a.createElement("th", null, "\xA0"), /*#__PURE__*/react_default.a.createElement("th", null, isManager ? 'Buyer' : 'Supplier'), /*#__PURE__*/react_default.a.createElement("th", null, "Price"), /*#__PURE__*/react_default.a.createElement("th", null, "Expire"), /*#__PURE__*/react_default.a.createElement("th", null, "Status"), isManager && mode !== 'history' ? /*#__PURE__*/react_default.a.createElement("th", null, "Actions") : null)), /*#__PURE__*/react_default.a.createElement("tbody", null, items.map(function (e) {
    var _e$supplierData, _e$item, _e$item2, _e$item3;

    var refAddr = isManager ? e.user : e.supplier;
    var supplierName = !isManager ? (_e$supplierData = e.supplierData) === null || _e$supplierData === void 0 ? void 0 : _e$supplierData.name : null;
    var status = mode === 'history' ? e.status : e.couponStatus;
    var statusColor = colorStatus(status);
    var couponStatusColor = colorStatus(e.couponStatus);
    return /*#__PURE__*/react_default.a.createElement("tr", {
      key: e.id
    }, /*#__PURE__*/react_default.a.createElement("td", {
      className: "align-middle"
    }, "".concat(formatDate(new Date(e.timestamp)))), /*#__PURE__*/react_default.a.createElement("td", {
      className: "align-middle"
    }, /*#__PURE__*/react_default.a.createElement(Purchases_Card, {
      className: "badge badge-".concat(statusColor, " p-2"),
      onClick: function onClick() {
        return showItem(e);
      }
    }, /*#__PURE__*/react_default.a.createElement("div", {
      style: {
        display: 'block',
        maxHeight: '20px',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/react_default.a.createElement("img", {
      src: e.item.image,
      width: "150px",
      alt: (_e$item = e.item) === null || _e$item === void 0 ? void 0 : _e$item.name
    })), /*#__PURE__*/react_default.a.createElement("div", {
      className: "mt-2"
    }, /*#__PURE__*/react_default.a.createElement("b", null, " ".concat((_e$item2 = e.item) === null || _e$item2 === void 0 ? void 0 : _e$item2.name))))), /*#__PURE__*/react_default.a.createElement("td", {
      className: "align-middle"
    }, mode === 'history' && typeof e.assetId === 'string' ? /*#__PURE__*/react_default.a.createElement("ul", null, /*#__PURE__*/react_default.a.createElement("li", {
      className: "small"
    }, 'nft: ', /*#__PURE__*/react_default.a.createElement(header_controls_NFTIcon, null), ' ', /*#__PURE__*/react_default.a.createElement("a", {
      href: "https://testnet.wavesexplorer.com/assets/".concat(e.assetId),
      target: "_blank",
      rel: "noreferrer"
    }, shortAddress(e.assetId))), /*#__PURE__*/react_default.a.createElement("li", {
      className: "small"
    }, 'status: ', /*#__PURE__*/react_default.a.createElement(shared_Badge, {
      text: e.couponStatus,
      type: couponStatusColor,
      p: 0
    }))) : null), /*#__PURE__*/react_default.a.createElement("td", {
      className: "align-middle"
    }, /*#__PURE__*/react_default.a.createElement("a", {
      href: "https://testnet.wavesexplorer.com/address/".concat(refAddr, "/"),
      title: refAddr,
      target: "_blank",
      rel: "noreferrer"
    }, /*#__PURE__*/react_default.a.createElement(header_controls_UserIcon, null), " ".concat(supplierName || shortAddress(refAddr)))), /*#__PURE__*/react_default.a.createElement("td", {
      className: "align-middle"
    }, "".concat(formatNumber(e.amount), " "), /*#__PURE__*/react_default.a.createElement("span", {
      className: "small"
    }, "WAVES")), /*#__PURE__*/react_default.a.createElement("td", {
      className: "align-middle"
    }, formatDate(new Date((_e$item3 = e.item) === null || _e$item3 === void 0 ? void 0 : _e$item3.expirationDate))), /*#__PURE__*/react_default.a.createElement("td", {
      className: "align-middle"
    }, /*#__PURE__*/react_default.a.createElement(shared_Badge, {
      text: status,
      type: statusColor
    })), isManager && mode !== 'history' ? /*#__PURE__*/react_default.a.createElement("td", {
      className: "align-middle"
    }, mode === 'approval' ? /*#__PURE__*/react_default.a.createElement("div", {
      className: "btn-group mr-2",
      role: "group",
      "aria-label": "Logout"
    }, /*#__PURE__*/react_default.a.createElement("button", {
      type: "button",
      title: "Accept this coupon and send NFT to buyer",
      className: "btn btn-success",
      onClick: function onClick() {
        return onAccept(e);
      }
    }, "Confirm"), /*#__PURE__*/react_default.a.createElement("button", {
      type: "button",
      title: "Reject this coupon and refund buyer",
      className: "btn btn-danger",
      onClick: function onClick() {
        return onReject(e);
      }
    }, "Reject")) : null) : null);
  }))) : null, /*#__PURE__*/react_default.a.createElement(CouponDialogs, {
    isManager: isManager,
    mode: mode,
    enableVoting: enableVoting
  }));
};

/* harmony default export */ var containers_Purchases = (Purchases_Purchases);
// CONCATENATED MODULE: ./src/styled-components/theme/index.js
var theme = {
  breakpoints: {
    sm: '620px',
    md: '768px',
    lg: '1024px',
    xl: '1200px'
  },
  colors: {
    black: ['#333'],
    blue: ['#2EB4FF'],
    gray: ['#fff', '#F7F8FA', '#A0A6C3', '#D8D8D8'],
    red: ['#FF0000'],
    green: ['#B3FFDE', '#2d9c29']
  }
};
/* harmony default export */ var styled_components_theme = (theme);
// CONCATENATED MODULE: ./src/libs/redux-actions/createReducer.js
function createReducer(initialState, handlers) {
  return function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    if (Object.keys(handlers).find(function (x) {
      return x === action.type;
    })) {
      return handlers[action.type](state, action);
    }

    return state;
  };
}
// CONCATENATED MODULE: ./src/libs/redux-actions/makeActionCreator.js
function makeActionCreator(type) {
  for (var _len = arguments.length, argNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    argNames[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var action = {
      type: type
    };
    argNames.forEach(function (_, index) {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}
// CONCATENATED MODULE: ./src/libs/redux-actions/toFetchConst.js
var fetchConst = function fetchConst(constant) {
  return {
    CLEAR: "".concat(constant, "_CLEAR"),
    ERROR: "".concat(constant, "_ERROR"),
    REQUEST: "".concat(constant, "_REQUEST"),
    SUCCESS: "".concat(constant, "_SUCCESS")
  };
};

/* harmony default export */ var toFetchConst = (fetchConst);
// CONCATENATED MODULE: ./src/libs/redux-actions/pipeReducers.js
var pipeReducers = function pipeReducers() {
  for (var _len = arguments.length, reducers = new Array(_len), _key = 0; _key < _len; _key++) {
    reducers[_key] = arguments[_key];
  }

  return function (state, action) {
    return reducers.reduce(function (next, reducer) {
      return reducer(next, action);
    }, state);
  };
};

/* harmony default export */ var redux_actions_pipeReducers = (pipeReducers);
// EXTERNAL MODULE: ./node_modules/immer/dist/immer.module.js
var immer_module = __webpack_require__("./node_modules/immer/dist/immer.module.js");

// CONCATENATED MODULE: ./src/libs/redux-actions/createImmutableReducer.js

function createImmutableReducer(initialState, handlers) {
  return function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    if (Object.keys(handlers).find(function (x) {
      return x === action.type;
    })) {
      return Object(immer_module["a" /* default */])(state, function (draftState) {
        handlers[action.type](draftState, action);
      });
    }

    return state;
  };
}
// EXTERNAL MODULE: ./node_modules/ramda/es/is.js
var is = __webpack_require__("./node_modules/ramda/es/is.js");

// EXTERNAL MODULE: ./node_modules/ramda/es/assocPath.js + 3 modules
var assocPath = __webpack_require__("./node_modules/ramda/es/assocPath.js");

// EXTERNAL MODULE: ./node_modules/ramda/es/concat.js + 17 modules
var concat = __webpack_require__("./node_modules/ramda/es/concat.js");

// CONCATENATED MODULE: ./src/libs/service/pipe.js
var pipe = function pipe(value) {
  for (var _len = arguments.length, functions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    functions[_key - 1] = arguments[_key];
  }

  return functions.reduce(function (newValue, func) {
    return func(newValue);
  }, value);
};

var pipeF = function pipeF() {
  for (var _len2 = arguments.length, functions = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    functions[_key2] = arguments[_key2];
  }

  return function (value) {
    return pipe.apply(void 0, [value].concat(functions));
  };
};
/* harmony default export */ var service_pipe = (pipe);
// CONCATENATED MODULE: ./src/libs/service/index.js

// CONCATENATED MODULE: ./src/libs/redux-actions/fetchReducer.js
function fetchReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var fetchReducer_fetchReducer = function fetchReducer(fetchType) {
  return function (key, initialValue) {
    var _createReducer;

    var initialState = {};
    var isArray = Object(is["a" /* default */])(Array, initialValue);
    return createReducer(initialState, (_createReducer = {}, fetchReducer_defineProperty(_createReducer, fetchType.REQUEST, Object(assocPath["a" /* default */])([key, 'isFetching'], true)), fetchReducer_defineProperty(_createReducer, fetchType.SUCCESS, function (state, _ref) {
      var response = _ref.response;
      return service_pipe(Object(assocPath["a" /* default */])([key, 'data'], isArray ? Object(concat["a" /* default */])(state[key].data, response) : response, state), Object(assocPath["a" /* default */])([key, 'isFetching'], false));
    }), fetchReducer_defineProperty(_createReducer, fetchType.ERROR, Object(assocPath["a" /* default */])([key, 'isFetching'], false)), fetchReducer_defineProperty(_createReducer, fetchType.CLEAR, function (state) {
      return service_pipe(Object(assocPath["a" /* default */])([key, 'data'], initialValue, state), Object(assocPath["a" /* default */])([key, 'isFetching'], false));
    }), _createReducer));
  };
};

/* harmony default export */ var redux_actions_fetchReducer = (fetchReducer_fetchReducer);
// CONCATENATED MODULE: ./src/libs/redux-actions/fetchReducerKey.js
function fetchReducerKey_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function fetchReducerKey(key, initialValue) {
  return fetchReducerKey_defineProperty({}, key, {
    data: initialValue,
    isFetching: false
  });
}
// CONCATENATED MODULE: ./src/libs/redux-actions/fetchKey.js
var fetchKey = function fetchKey(key, initialValue) {
  return function (fetchReducerFn) {
    return fetchReducerFn(key, initialValue);
  };
};

/* harmony default export */ var redux_actions_fetchKey = (fetchKey);
// CONCATENATED MODULE: ./src/libs/redux-actions/index.js








// CONCATENATED MODULE: ./src/reducers/root.js
function root_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var root_initialState = {
  modalMenuOpen: false
};
var INIT_APP = 'INIT_APP';
var CHANGE_MOBILE_MENU_STATE = 'CHANGE_MOBILE_MENU_STATE';
var root_changeMobileMenuState = makeActionCreator(CHANGE_MOBILE_MENU_STATE, 'isOpen');
/* harmony default export */ var reducers_root = (createImmutableReducer(root_initialState, root_defineProperty({}, CHANGE_MOBILE_MENU_STATE, function (state, _ref) {
  var isOpen = _ref.isOpen;
  state.modalMenuOpen = isOpen;
})));
// CONCATENATED MODULE: ./src/containers/Header.jsx
function Header_extends() { Header_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Header_extends.apply(this, arguments); }

function Header_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Header_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Header_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Header_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Header_slicedToArray(arr, i) { return Header_arrayWithHoles(arr) || Header_iterableToArrayLimit(arr, i) || Header_unsupportedIterableToArray(arr, i) || Header_nonIterableRest(); }

function Header_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Header_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Header_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Header_arrayLikeToArray(o, minLen); }

function Header_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Header_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Header_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var breakpoints = styled_components_theme.breakpoints;
var menuHeight = {
  0: '114px',
  sm: '131px'
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isOpen: state.root.modalMenuOpen
  };
};

var initActiveUrl = function initActiveUrl(setActiveUrl) {
  var href = window.location.href;

  if (href.startsWith('http')) {
    var pos = href.indexOf('#');

    if (pos > 0) {
      setActiveUrl(href.substr(pos));
    } else {
      setActiveUrl('#featured');
    }
  } else {
    setActiveUrl('#featured');
  }
};

var Header_Header = function Header(_ref) {
  var account = _ref.account,
      activeUrl = _ref.activeUrl,
      _setActiveUrl = _ref.setActiveUrl,
      onSupplierRegister = _ref.onSupplierRegister,
      supplierApprovalCounter = _ref.supplierApprovalCounter;
  Object(react["useEffect"])(function () {
    initActiveUrl(_setActiveUrl);
  }, []);

  var _useSelector = Object(es["c" /* useSelector */])(mapStateToProps),
      isOpen = _useSelector.isOpen;

  var _useDispatchedActions = useDispatchedActions(reducers_root_namespaceObject),
      changeMobileMenuState = _useDispatchedActions.changeMobileMenuState;

  var onCloseMenu = Object(react["useCallback"])(function () {
    return changeMobileMenuState(false);
  });
  var Overlay = layout_Overlay();

  var _useCouponDialogs = service_useCouponDialogs(),
      CouponDialogs = _useCouponDialogs.CouponDialogs,
      _useCouponDialogs$for = Header_slicedToArray(_useCouponDialogs.form, 2),
      formOpened = _useCouponDialogs$for[0],
      onFormOpen = _useCouponDialogs$for[1];

  var onCreateCoupon = /*#__PURE__*/function () {
    var _ref2 = Header_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              onFormOpen();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onCreateCoupon() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(CouponDialogs, null), /*#__PURE__*/react_default.a.createElement(header_controls_HeaderLayout, {
    height: menuHeight,
    position: "fixed"
  }, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    alignItems: {
      0: 'flex-start',
      sm: 'center'
    },
    height: "100%",
    px: {
      0: '20px',
      lg: '39px',
      xl: '20px'
    },
    pt: {
      0: '14px',
      sm: '0px'
    },
    flexDirection: {
      0: 'column',
      sm: 'row'
    }
  }, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    width: "100%",
    justifyContent: "center"
  }, /*#__PURE__*/react_default.a.createElement(HeaderLine, {
    supplierApprovalCounter: supplierApprovalCounter,
    account: account,
    onSupplierRegister: onSupplierRegister,
    activeUrl: activeUrl,
    links: headerLinks,
    userLinks: links_userLinks,
    setActiveUrl: _setActiveUrl,
    changeMobileMenuState: changeMobileMenuState,
    tabletResolution: breakpoints.lg,
    mobileResolution: breakpoints.sm,
    menuOpened: isOpen,
    onCreateCoupon: onCreateCoupon
  })), /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    maxWidth: breakpoints.sm
  }, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    width: "100%",
    pt: "10px"
  }, /*#__PURE__*/react_default.a.createElement(header_controls_Logo, {
    isActive: true,
    size: "small"
  }), /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  }, /*#__PURE__*/react_default.a.createElement(header_controls_SearchIcon, null)))))), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    width: "100%",
    height: menuHeight
  }), /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    maxWidth: breakpoints.lg
  }, /*#__PURE__*/react_default.a.createElement(CSSTransition["a" /* default */], Header_extends({
    unmountOnExit: true
  }, menuAnimation, {
    "in": isOpen
  }), /*#__PURE__*/react_default.a.createElement(layout_MobileMenu, {
    account: account,
    setActiveUrl: function setActiveUrl(url) {
      _setActiveUrl(url);

      onCloseMenu();
    },
    top: "0px",
    onClose: onCloseMenu,
    position: "fixed"
  })), /*#__PURE__*/react_default.a.createElement(CSSTransition["a" /* default */], Header_extends({
    unmountOnExit: true
  }, overlayAnimation, {
    "in": isOpen
  }), /*#__PURE__*/react_default.a.createElement(Overlay, {
    onClick: onCloseMenu,
    top: "0px"
  }))));
};

/* harmony default export */ var containers_Header = (Object(react["memo"])(Header_Header));
// CONCATENATED MODULE: ./src/containers/Footer.jsx






var Footer_breakpoints = styled_components_theme.breakpoints;

var Footer_GroupLinks = function GroupLinks(_ref) {
  var account = _ref.account,
      setActiveUrl = _ref.setActiveUrl,
      title = _ref.title,
      links = _ref.links;
  return /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    flexDirection: "column"
  }, /*#__PURE__*/react_default.a.createElement(shared_Text, {
    as: "span",
    fontWeight: "bold",
    letterSpacing: "0.66px",
    fontSize: "14px"
  }, title), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pt: "10px"
  }, links.filter(function (_ref2) {
    var isEnabled = _ref2.isEnabled;
    return typeof isEnabled !== 'function' || isEnabled(account);
  }).map(function (_ref3) {
    var url = _ref3.url,
        linkTitle = _ref3.title;
    return /*#__PURE__*/react_default.a.createElement("a", {
      key: url,
      href: url
    }, /*#__PURE__*/react_default.a.createElement(shared_Text, {
      color: "gray.2",
      lineHeight: "24px",
      fontSize: "14px",
      onClick: function onClick() {
        return setActiveUrl(url);
      }
    }, linkTitle));
  })));
};

var containers_Footer_Footer = function Footer(_ref4) {
  var account = _ref4.account,
      setActiveUrl = _ref4.setActiveUrl;
  return /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    flexDirection: "column",
    bg: "gray.0",
    px: "40px"
  }, /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    minWidth: Footer_breakpoints.sm
  }, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    py: "48px",
    justifyContent: {
      xl: 'center'
    }
  }, /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    minWidth: Footer_breakpoints.xl
  }, /*#__PURE__*/react_default.a.createElement(layout_LogoCopyright, null)), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pl: {
      xl: '54px'
    }
  }, /*#__PURE__*/react_default.a.createElement(Footer_GroupLinks, {
    account: account,
    setActiveUrl: setActiveUrl,
    title: "Company",
    links: companyLinks
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pl: "54px"
  }, /*#__PURE__*/react_default.a.createElement(Footer_GroupLinks, {
    account: account,
    setActiveUrl: setActiveUrl,
    title: "Work with Coupon Bazaar",
    links: myLinks
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pl: "54px"
  }, /*#__PURE__*/react_default.a.createElement(Footer_GroupLinks, {
    account: account,
    setActiveUrl: setActiveUrl,
    title: "Supplier",
    links: supplierLinks
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pl: "54px"
  }, /*#__PURE__*/react_default.a.createElement(Footer_GroupLinks, {
    account: account,
    setActiveUrl: setActiveUrl,
    title: "Main",
    links: mainLinks
  })), /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    minWidth: Footer_breakpoints.xl
  }, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    pl: "54px"
  }, /*#__PURE__*/react_default.a.createElement(layout_SocialButtons, null))))), /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    maxWidth: Footer_breakpoints.xl
  }, /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    minWidth: Footer_breakpoints.sm
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    width: "100%",
    height: "1px",
    bg: "gray.3"
  })), /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    pt: "35px",
    pb: "50px",
    flexDirection: {
      0: 'column',
      sm: 'row'
    }
  }, /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    minWidth: Footer_breakpoints.sm
  }, /*#__PURE__*/react_default.a.createElement(layout_LogoCopyright, null)), /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    maxWidth: Footer_breakpoints.sm
  }, /*#__PURE__*/react_default.a.createElement(layout_LogoCopyright, {
    size: "small"
  })), /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    pl: {
      0: '0',
      sm: '100px'
    },
    pt: {
      0: '20px',
      sm: '0'
    }
  }, /*#__PURE__*/react_default.a.createElement(layout_SocialButtons, null)))));
};

/* harmony default export */ var containers_Footer = (containers_Footer_Footer);
// CONCATENATED MODULE: ./src/containers/index.js






// CONCATENATED MODULE: ./src/components/pages/market/PageMarket.jsx
function PageMarket_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function PageMarket_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { PageMarket_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { PageMarket_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function PageMarket_slicedToArray(arr, i) { return PageMarket_arrayWithHoles(arr) || PageMarket_iterableToArrayLimit(arr, i) || PageMarket_unsupportedIterableToArray(arr, i) || PageMarket_nonIterableRest(); }

function PageMarket_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function PageMarket_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PageMarket_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PageMarket_arrayLikeToArray(o, minLen); }

function PageMarket_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function PageMarket_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function PageMarket_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-alert */

/* eslint-disable react/no-unescaped-entities */





var PageMarket_PageMarket = function PageMarket(_ref) {
  var activeUrl = _ref.activeUrl,
      setActiveUrl = _ref.setActiveUrl,
      _ref$filter = _ref.filter,
      filter = _ref$filter === void 0 ? function (e) {
    return !e.isExpired;
  } : _ref$filter;

  var _useState = Object(react["useState"])(true),
      _useState2 = PageMarket_slicedToArray(_useState, 2),
      loadingData = _useState2[0],
      setLoadingData = _useState2[1];

  var _useState3 = Object(react["useState"])([]),
      _useState4 = PageMarket_slicedToArray(_useState3, 2),
      items = _useState4[0],
      updateItems = _useState4[1];

  Object(react["useEffect"])(function () {
    function refreshData() {
      return _refreshData.apply(this, arguments);
    }

    function _refreshData() {
      _refreshData = PageMarket_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var list;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setLoadingData(true);
                _context.prev = 1;
                _context.next = 4;
                return fetchItems();

              case 4:
                list = _context.sent.filter(filter);
                console.debug('[ 🔄 Market ] :', "".concat(list.length, " items loaded"));
                updateItems(list);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);

              case 12:
                _context.prev = 12;
                setLoadingData(false);
                return _context.finish(12);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9, 12, 15]]);
      }));
      return _refreshData.apply(this, arguments);
    }

    return subscribe(DATA, refreshData);
  }, [activeUrl]);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", {
    className: "alert alert-light alert-dismissible fade show text-center small",
    role: "alert"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "alert",
    "aria-label": "Close"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")), "Find coupons in the bazaar market, and start saving money.", /*#__PURE__*/react_default.a.createElement("br", null), "Thanks to the many discount coupons from our suppliers.", /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("small", null, /*#__PURE__*/react_default.a.createElement("b", null, "click on the coupon of your choice, then on \"Buy\" to buy it"))), loadingData ? /*#__PURE__*/react_default.a.createElement(shared_Loading, null) : null, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    justifyContent: "center",
    px: {
      0: '20px',
      lg: '39px',
      xl: '20px'
    },
    flexWrap: "wrap"
  }, /*#__PURE__*/react_default.a.createElement(containers_Coupons, {
    items: items,
    setActiveUrl: setActiveUrl,
    mode: "market",
    hideEmptyListMessage: true,
    enableVoting: true
  })));
};

/* harmony default export */ var market_PageMarket = (PageMarket_PageMarket);
// CONCATENATED MODULE: ./src/components/pages/market/index.js

/* harmony default export */ var market = (market_PageMarket);
// CONCATENATED MODULE: ./src/components/pages/coupons/components/Menu.jsx



var Menu_Menu = function Menu(_ref) {
  var activeUrl = _ref.activeUrl,
      setActiveUrl = _ref.setActiveUrl;
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    type: "ul",
    className: "nav nav-tabs"
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    type: "li",
    className: "nav-item",
    onClick: function onClick() {
      return setActiveUrl('#my/coupons');
    }
  }, /*#__PURE__*/react_default.a.createElement("a", {
    className: activeUrl !== null && activeUrl !== void 0 && activeUrl.match(new RegExp('.*/?(#my[^/]*|#my/coupons.*)$')) ? 'nav-link active' : 'nav-link',
    href: "#my/coupons"
  }, "Active Coupons")), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    type: "li",
    className: "nav-item",
    onClick: function onClick() {
      return setActiveUrl('#my/used');
    }
  }, /*#__PURE__*/react_default.a.createElement("a", {
    className: activeUrl !== null && activeUrl !== void 0 && activeUrl.match(new RegExp('.*/?(#my/used.*)$')) ? 'nav-link active' : 'nav-link',
    href: "#my/used"
  }, "Used Coupons")), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    type: "li",
    className: "nav-item",
    onClick: function onClick() {
      return setActiveUrl('#my/expired');
    }
  }, /*#__PURE__*/react_default.a.createElement("a", {
    className: activeUrl !== null && activeUrl !== void 0 && activeUrl.match(new RegExp('.*/?(#my/expired.*)$')) ? 'nav-link active' : 'nav-link',
    href: "#my/expired"
  }, "Expired Coupons")), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    type: "li",
    className: "nav-item",
    onClick: function onClick() {
      return setActiveUrl('#my/voting');
    }
  }, /*#__PURE__*/react_default.a.createElement("a", {
    className: activeUrl !== null && activeUrl !== void 0 && activeUrl.match(new RegExp('.*/?(#my/voting.*)$')) ? 'nav-link active' : 'nav-link',
    href: "#my/voting"
  }, "Voting")), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    type: "li",
    className: "nav-item",
    onClick: function onClick() {
      return setActiveUrl('#my/purchases');
    }
  }, /*#__PURE__*/react_default.a.createElement("a", {
    className: activeUrl !== null && activeUrl !== void 0 && activeUrl.match(new RegExp('.*/?(#my/purchases.*)$')) ? 'nav-link active' : 'nav-link',
    href: "#my/purchases"
  }, "Purchases history"))));
};

/* harmony default export */ var components_Menu = (Menu_Menu);
// CONCATENATED MODULE: ./src/components/pages/coupons/components/ActiveCoupons.jsx
function ActiveCoupons_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function ActiveCoupons_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { ActiveCoupons_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { ActiveCoupons_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ActiveCoupons_slicedToArray(arr, i) { return ActiveCoupons_arrayWithHoles(arr) || ActiveCoupons_iterableToArrayLimit(arr, i) || ActiveCoupons_unsupportedIterableToArray(arr, i) || ActiveCoupons_nonIterableRest(); }

function ActiveCoupons_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ActiveCoupons_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ActiveCoupons_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ActiveCoupons_arrayLikeToArray(o, minLen); }

function ActiveCoupons_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ActiveCoupons_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ActiveCoupons_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable jsx-a11y/label-has-associated-control */





var ActiveCoupons_Ac = function Ac(_ref) {
  var account = _ref.account,
      setActiveUrl = _ref.setActiveUrl;

  var _useState = Object(react["useState"])(true),
      _useState2 = ActiveCoupons_slicedToArray(_useState, 2),
      loadingData = _useState2[0],
      setLoadingData = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = ActiveCoupons_slicedToArray(_useState3, 2),
      items = _useState4[0],
      updateItems = _useState4[1];

  var address = account.address;
  Object(react["useEffect"])(function () {
    function refreshData() {
      return _refreshData.apply(this, arguments);
    }

    function _refreshData() {
      _refreshData = ActiveCoupons_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var list;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setLoadingData(true);
                _context.prev = 1;
                _context.next = 4;
                return fetchUserActiveCoupons(address);

              case 4:
                list = _context.sent;
                console.debug('[ 🔄 Active Coupons ] :', "".concat(list.length, " coupons loaded"));
                updateItems(list);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);

              case 12:
                _context.prev = 12;
                setLoadingData(false);
                return _context.finish(12);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9, 12, 15]]);
      }));
      return _refreshData.apply(this, arguments);
    }

    return subscribe(DATA, refreshData);
  }, [address]);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, loadingData ? /*#__PURE__*/react_default.a.createElement(shared_Loading, null) : null, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    justifyContent: "center",
    p: {
      0: '10px',
      md: '0px'
    },
    flexWrap: "wrap"
  }, /*#__PURE__*/react_default.a.createElement(containers_Coupons, {
    items: items,
    setActiveUrl: setActiveUrl,
    mode: "active",
    hideEmptyListMessage: loadingData,
    enableVoting: true
  })));
};

/* harmony default export */ var ActiveCoupons = (ActiveCoupons_Ac);
// CONCATENATED MODULE: ./src/components/pages/coupons/components/PurchasesHistory.jsx
function PurchasesHistory_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function PurchasesHistory_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { PurchasesHistory_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { PurchasesHistory_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function PurchasesHistory_slicedToArray(arr, i) { return PurchasesHistory_arrayWithHoles(arr) || PurchasesHistory_iterableToArrayLimit(arr, i) || PurchasesHistory_unsupportedIterableToArray(arr, i) || PurchasesHistory_nonIterableRest(); }

function PurchasesHistory_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function PurchasesHistory_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PurchasesHistory_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PurchasesHistory_arrayLikeToArray(o, minLen); }

function PurchasesHistory_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function PurchasesHistory_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function PurchasesHistory_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable react/no-unescaped-entities */





var PurchasesHistory_PurchasesHistory = function PurchasesHistory(_ref) {
  var account = _ref.account,
      setActiveUrl = _ref.setActiveUrl;

  var _useState = Object(react["useState"])(true),
      _useState2 = PurchasesHistory_slicedToArray(_useState, 2),
      loadingData = _useState2[0],
      setLoadingData = _useState2[1];

  var _useState3 = Object(react["useState"])([]),
      _useState4 = PurchasesHistory_slicedToArray(_useState3, 2),
      items = _useState4[0],
      updateItems = _useState4[1];

  var address = account.address;
  Object(react["useEffect"])(function () {
    function refreshData() {
      return _refreshData.apply(this, arguments);
    }

    function _refreshData() {
      _refreshData = PurchasesHistory_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var list, historyList;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setLoadingData(true);
                _context.prev = 1;
                _context.next = 4;
                return fetchUserPurchases(address);

              case 4:
                list = _context.sent;
                historyList = list.sort(function (a, b) {
                  return a.timestamp < b.timestamp;
                });
                console.debug('[ 🔄 Purchases History ] :', "".concat(historyList.length, " purchases loaded"));
                updateItems(historyList);
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);

              case 13:
                _context.prev = 13;
                setLoadingData(false);
                return _context.finish(13);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 10, 13, 16]]);
      }));
      return _refreshData.apply(this, arguments);
    }

    return subscribe(DATA, refreshData);
  }, [address]);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, loadingData ? /*#__PURE__*/react_default.a.createElement(shared_Loading, null) : null, /*#__PURE__*/react_default.a.createElement(containers_Purchases, {
    hideEmptyListMessage: loadingData,
    setActiveUrl: setActiveUrl,
    items: items,
    mode: "history",
    enableVoting: true
  }));
};

/* harmony default export */ var components_PurchasesHistory = (PurchasesHistory_PurchasesHistory);
// CONCATENATED MODULE: ./src/components/pages/coupons/components/UsedCoupons.jsx
function UsedCoupons_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function UsedCoupons_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { UsedCoupons_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { UsedCoupons_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function UsedCoupons_slicedToArray(arr, i) { return UsedCoupons_arrayWithHoles(arr) || UsedCoupons_iterableToArrayLimit(arr, i) || UsedCoupons_unsupportedIterableToArray(arr, i) || UsedCoupons_nonIterableRest(); }

function UsedCoupons_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function UsedCoupons_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return UsedCoupons_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return UsedCoupons_arrayLikeToArray(o, minLen); }

function UsedCoupons_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function UsedCoupons_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function UsedCoupons_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var UsedCoupons_UsedCoupons = function UsedCoupons(_ref) {
  var account = _ref.account,
      setActiveUrl = _ref.setActiveUrl;

  var _useState = Object(react["useState"])(true),
      _useState2 = UsedCoupons_slicedToArray(_useState, 2),
      loadingData = _useState2[0],
      setLoadingData = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = UsedCoupons_slicedToArray(_useState3, 2),
      items = _useState4[0],
      updateItems = _useState4[1];

  var address = account.address;
  Object(react["useEffect"])(function () {
    function refreshData() {
      return _refreshData.apply(this, arguments);
    }

    function _refreshData() {
      _refreshData = UsedCoupons_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var list;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setLoadingData(true);
                _context.prev = 1;
                _context.next = 4;
                return fetchUserUsedCoupons(address);

              case 4:
                list = _context.sent;
                console.debug('[ 🔄 Used Coupons ] :', "".concat(list.length, " coupons loaded"));
                updateItems(list);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);

              case 12:
                _context.prev = 12;
                setLoadingData(false);
                return _context.finish(12);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9, 12, 15]]);
      }));
      return _refreshData.apply(this, arguments);
    }

    return subscribe(DATA, refreshData);
  }, [address]);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, loadingData ? /*#__PURE__*/react_default.a.createElement(shared_Loading, null) : null, /*#__PURE__*/react_default.a.createElement(containers_CouponsList, {
    setActiveUrl: setActiveUrl,
    items: items,
    mode: "used",
    hideEmptyListMessage: loadingData,
    enableVoting: true
  }));
};

/* harmony default export */ var components_UsedCoupons = (UsedCoupons_UsedCoupons);
// CONCATENATED MODULE: ./src/components/pages/coupons/components/ExpiredCoupons.jsx
function ExpiredCoupons_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function ExpiredCoupons_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { ExpiredCoupons_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { ExpiredCoupons_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ExpiredCoupons_slicedToArray(arr, i) { return ExpiredCoupons_arrayWithHoles(arr) || ExpiredCoupons_iterableToArrayLimit(arr, i) || ExpiredCoupons_unsupportedIterableToArray(arr, i) || ExpiredCoupons_nonIterableRest(); }

function ExpiredCoupons_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ExpiredCoupons_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ExpiredCoupons_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ExpiredCoupons_arrayLikeToArray(o, minLen); }

function ExpiredCoupons_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ExpiredCoupons_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ExpiredCoupons_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var ExpiredCoupons_ExpiredCoupons = function ExpiredCoupons(_ref) {
  var account = _ref.account,
      setActiveUrl = _ref.setActiveUrl;

  var _useState = Object(react["useState"])(true),
      _useState2 = ExpiredCoupons_slicedToArray(_useState, 2),
      loadingData = _useState2[0],
      setLoadingData = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = ExpiredCoupons_slicedToArray(_useState3, 2),
      items = _useState4[0],
      updateItems = _useState4[1];

  var address = account.address;
  Object(react["useEffect"])(function () {
    function refreshData() {
      return _refreshData.apply(this, arguments);
    }

    function _refreshData() {
      _refreshData = ExpiredCoupons_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var list;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setLoadingData(true);
                _context.prev = 1;
                _context.next = 4;
                return fetchUserExpiredCoupons(address);

              case 4:
                list = _context.sent;
                console.debug('[ 🔄 Expired Coupons ] :', "".concat(list.length, " coupons loaded"));
                updateItems(list);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);

              case 12:
                _context.prev = 12;
                setLoadingData(false);
                return _context.finish(12);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9, 12, 15]]);
      }));
      return _refreshData.apply(this, arguments);
    }

    return subscribe(DATA, refreshData);
  }, [address]);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, loadingData ? /*#__PURE__*/react_default.a.createElement(shared_Loading, null) : null, /*#__PURE__*/react_default.a.createElement(containers_CouponsList, {
    setActiveUrl: setActiveUrl,
    items: items,
    mode: "history",
    hideEmptyListMessage: loadingData
  }));
};

/* harmony default export */ var components_ExpiredCoupons = (ExpiredCoupons_ExpiredCoupons);
// CONCATENATED MODULE: ./src/components/pages/coupons/components/VotingCoupons.jsx
function VotingCoupons_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function VotingCoupons_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { VotingCoupons_ownKeys(Object(source), true).forEach(function (key) { VotingCoupons_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { VotingCoupons_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function VotingCoupons_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function VotingCoupons_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function VotingCoupons_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { VotingCoupons_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { VotingCoupons_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function VotingCoupons_slicedToArray(arr, i) { return VotingCoupons_arrayWithHoles(arr) || VotingCoupons_iterableToArrayLimit(arr, i) || VotingCoupons_unsupportedIterableToArray(arr, i) || VotingCoupons_nonIterableRest(); }

function VotingCoupons_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function VotingCoupons_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return VotingCoupons_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return VotingCoupons_arrayLikeToArray(o, minLen); }

function VotingCoupons_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function VotingCoupons_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function VotingCoupons_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var VotingCoupons_filter = function filter(e) {
  return e.voting;
};

var group = function group(gl, e) {
  if (!gl[e.item.id]) gl[e.item.id] = [];
  gl[e.item.id].push(e);
  return gl;
};

var VotingCoupons_UsedCoupons = function UsedCoupons(_ref) {
  var account = _ref.account,
      setActiveUrl = _ref.setActiveUrl;

  var _useState = Object(react["useState"])(true),
      _useState2 = VotingCoupons_slicedToArray(_useState, 2),
      loadingData = _useState2[0],
      setLoadingData = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = VotingCoupons_slicedToArray(_useState3, 2),
      items = _useState4[0],
      updateItems = _useState4[1];

  var address = account.address;
  Object(react["useEffect"])(function () {
    function refreshData() {
      return _refreshData.apply(this, arguments);
    }

    function _refreshData() {
      _refreshData = VotingCoupons_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var grouped, list;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setLoadingData(true);
                _context.prev = 1;
                _context.next = 4;
                return fetchUserCoupons(address);

              case 4:
                grouped = _context.sent.filter(VotingCoupons_filter).reduce(group, {});
                list = Object.keys(grouped).map(function (e) {
                  var p = grouped[e][0];
                  return VotingCoupons_objectSpread({
                    voting: p.voting
                  }, p.item);
                });
                console.debug('[ 🔄 Used Coupons ] :', "".concat(list.length, " coupons loaded"));
                updateItems(list);
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);

              case 13:
                _context.prev = 13;
                setLoadingData(false);
                return _context.finish(13);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 10, 13, 16]]);
      }));
      return _refreshData.apply(this, arguments);
    }

    return subscribe(DATA, refreshData);
  }, [address]);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, loadingData ? /*#__PURE__*/react_default.a.createElement(shared_Loading, null) : null, /*#__PURE__*/react_default.a.createElement(containers_VotingList, {
    setActiveUrl: setActiveUrl,
    items: items,
    mode: "used",
    hideEmptyListMessage: loadingData,
    enableVoting: true
  }));
};

/* harmony default export */ var VotingCoupons = (VotingCoupons_UsedCoupons);
// CONCATENATED MODULE: ./src/components/pages/coupons/components/index.js






// CONCATENATED MODULE: ./src/components/pages/coupons/PageCoupons.jsx
/* eslint-disable react/no-unescaped-entities */






var PageCoupons_PageCoupons = function PageCoupons(_ref) {
  var account = _ref.account,
      activeUrl = _ref.activeUrl,
      setActiveUrl = _ref.setActiveUrl;
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, account.isConnected ? /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(components_Menu, {
    activeUrl: activeUrl,
    setActiveUrl: setActiveUrl
  }), activeUrl.match(new RegExp('.*/?(#my[^/]*|#my/coupons.*)$')) ? /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    className: "alert alert-light alert-dismissible fade show text-center small",
    role: "alert"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "alert",
    "aria-label": "Close"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")), "Find here all your coupons and their validity period.", /*#__PURE__*/react_default.a.createElement("br", null), "You can use them at any time by transferring them to the respective supplier in order to get your purchase advantage.", /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("small", null, /*#__PURE__*/react_default.a.createElement("b", null, "click on the coupon of your choice, then on \"use\" to activate the transfer to its supplier"))), /*#__PURE__*/react_default.a.createElement(ActiveCoupons, {
    account: account,
    setActiveUrl: setActiveUrl
  })) : '', activeUrl.match(new RegExp('.*/?#my/used.*$')) ? /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    className: "alert alert-light alert-dismissible fade show text-center small",
    role: "alert"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "alert",
    "aria-label": "Close"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")), "Find here all used coupons", /*#__PURE__*/react_default.a.createElement("br", null)), /*#__PURE__*/react_default.a.createElement(components_UsedCoupons, {
    account: account,
    setActiveUrl: setActiveUrl
  })) : '', activeUrl.match(new RegExp('.*/?#my/expired.*$')) ? /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    className: "alert alert-light alert-dismissible fade show text-center small",
    role: "alert"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "alert",
    "aria-label": "Close"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")), "Find here all expired coupons", /*#__PURE__*/react_default.a.createElement("br", null)), /*#__PURE__*/react_default.a.createElement(components_ExpiredCoupons, {
    account: account,
    setActiveUrl: setActiveUrl
  })) : '', activeUrl.match(new RegExp('.*/?#my/voting.*$')) ? /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    className: "alert alert-light alert-dismissible fade show text-center small",
    role: "alert"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "alert",
    "aria-label": "Close"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")), "Votes to add or remove coupon from Featured list", /*#__PURE__*/react_default.a.createElement("br", null)), /*#__PURE__*/react_default.a.createElement(VotingCoupons, {
    account: account,
    setActiveUrl: setActiveUrl
  })) : '', activeUrl.match(new RegExp('.*/?#my/purchases.*$')) ? /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    className: "alert alert-light alert-dismissible fade show text-center small",
    role: "alert"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "alert",
    "aria-label": "Close"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")), "Find here all your purchases and the supplier approval status", /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("small", null, "(Waiting approval, Rejected or Accepted)")), /*#__PURE__*/react_default.a.createElement(components_PurchasesHistory, {
    account: account,
    setActiveUrl: setActiveUrl
  })) : '') : /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    className: "alert alert-warning text-center"
  }, /*#__PURE__*/react_default.a.createElement("p", null, "To see your coupons and use them, please login"), /*#__PURE__*/react_default.a.createElement("p", null, /*#__PURE__*/react_default.a.createElement("button", {
    className: "btn btn-primary",
    type: "button",
    onClick: connect
  }, "Login")))));
};

/* harmony default export */ var coupons_PageCoupons = (PageCoupons_PageCoupons);
// CONCATENATED MODULE: ./src/components/pages/coupons/index.js

/* harmony default export */ var coupons = (coupons_PageCoupons);
// CONCATENATED MODULE: ./src/components/pages/supplier/components/Menu.jsx




var components_Menu_Menu = function Menu(_ref) {
  var activeUrl = _ref.activeUrl,
      setActiveUrl = _ref.setActiveUrl,
      approvalCounter = _ref.approvalCounter,
      onCreateCoupon = _ref.onCreateCoupon;
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    as: "ul",
    className: "nav nav-tabs"
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    as: "li",
    className: "nav-item",
    onClick: function onClick() {
      return setActiveUrl('#supplier/manage');
    }
  }, /*#__PURE__*/react_default.a.createElement("a", {
    href: "#supplier/manage",
    className: activeUrl.match(new RegExp('.*/?(#supplier[^/]*|#supplier/manage.*)$')) ? 'nav-link active' : 'nav-link'
  }, "Manage Coupons")), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    as: "li",
    className: "nav-item",
    onClick: function onClick() {
      return setActiveUrl('#supplier/withdraw');
    }
  }, /*#__PURE__*/react_default.a.createElement("a", {
    href: "#supplier/withdraw",
    className: activeUrl.match(new RegExp('.*/?#supplier/withdraw.*$')) ? 'nav-link active' : 'nav-link'
  }, "Withdraw Funds")), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    as: "li",
    className: "nav-item",
    onClick: function onClick() {
      return setActiveUrl('#supplier/history');
    }
  }, /*#__PURE__*/react_default.a.createElement("a", {
    href: "#supplier/history",
    className: activeUrl.match(new RegExp('.*/?#supplier/history.*$')) ? 'nav-link active' : 'nav-link'
  }, "Sales History")), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    as: "li",
    className: "nav-item",
    onClick: function onClick() {
      return setActiveUrl('#supplier/approve');
    }
  }, /*#__PURE__*/react_default.a.createElement("a", {
    href: "#supplier/approve",
    className: activeUrl.match(new RegExp('.*/?#supplier/approve.*$')) ? 'nav-link active' : 'nav-link'
  }, approvalCounter > 0 ? /*#__PURE__*/react_default.a.createElement(header_controls_RoundMarkIcon, null) : '', ' Approve Coupons')), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    as: "span",
    className: "nav-item",
    onClick: onCreateCoupon
  }, /*#__PURE__*/react_default.a.createElement("button", {
    type: "button",
    href: "#supplier/approve",
    className: "nav-link border-left text-success font-weight-bold"
  }, /*#__PURE__*/react_default.a.createElement(header_controls_AddCouponIcon, null), ' Add Coupon'))));
};

/* harmony default export */ var supplier_components_Menu = (components_Menu_Menu);
// CONCATENATED MODULE: ./src/components/pages/supplier/components/BalancePanel.jsx
function BalancePanel_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function BalancePanel_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { BalancePanel_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { BalancePanel_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function BalancePanel_slicedToArray(arr, i) { return BalancePanel_arrayWithHoles(arr) || BalancePanel_iterableToArrayLimit(arr, i) || BalancePanel_unsupportedIterableToArray(arr, i) || BalancePanel_nonIterableRest(); }

function BalancePanel_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function BalancePanel_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return BalancePanel_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return BalancePanel_arrayLikeToArray(o, minLen); }

function BalancePanel_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function BalancePanel_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function BalancePanel_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable max-len */

/* eslint-disable react/jsx-one-expression-per-line */

/* eslint-disable no-alert */





var BalancePanel_BalancePanel = function BalancePanel(_ref) {
  var account = _ref.account;

  var _useState = Object(react["useState"])(0),
      _useState2 = BalancePanel_slicedToArray(_useState, 2),
      amount = _useState2[0],
      setAmount = _useState2[1];

  var _useState3 = Object(react["useState"])(0),
      _useState4 = BalancePanel_slicedToArray(_useState3, 2),
      available = _useState4[0],
      setAvailable = _useState4[1];

  var _useState5 = Object(react["useState"])(0),
      _useState6 = BalancePanel_slicedToArray(_useState5, 2),
      locked = _useState6[0],
      setLocked = _useState6[1];

  var address = account.address;
  Object(react["useEffect"])(function () {
    function refreshData() {
      return _refreshData.apply(this, arguments);
    }

    function _refreshData() {
      _refreshData = BalancePanel_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var amt, avl, lck;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return getSupplierBalance(address);

              case 2:
                amt = _context.sent;
                _context.next = 5;
                return fetchSupplierAvailableFunds(address);

              case 5:
                avl = _context.sent;
                lck = amt - avl;
                setAmount(amt);
                setAvailable(avl);
                setLocked(lck);
                console.debug('[ 🔄 Supplier ] :', "Balance updated (".concat(avl, " / ").concat(amt, ")"));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _refreshData.apply(this, arguments);
    }

    return subscribe(DATA, refreshData);
  }, [address]);
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "manager-balance-panel"
  }, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    justifyContent: "center",
    p: {
      0: '10px',
      md: '0px'
    },
    flexWrap: "wrap",
    style: {
      marginTop: '15px',
      marginBottom: '15px'
    }
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    as: "big",
    className: amount > 0 ? 'badge badge-primary' : 'badge badge-dark',
    style: {
      margin: '10px',
      padding: '20px',
      width: '250px'
    }
  }, /*#__PURE__*/react_default.a.createElement("div", null, "total funds"), /*#__PURE__*/react_default.a.createElement("h5", {
    className: "m-1"
  }, " ", formatNumber(amount), " "), /*#__PURE__*/react_default.a.createElement("div", null, "WAVES")), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    as: "big",
    className: "badge badge-dark",
    style: {
      margin: '10px',
      padding: '20px',
      width: '250px'
    }
  }, /*#__PURE__*/react_default.a.createElement("div", null, "locked funds"), /*#__PURE__*/react_default.a.createElement("h5", {
    className: "m-1"
  }, " ", /*#__PURE__*/react_default.a.createElement(header_controls_LockIcon, null), formatNumber(locked), " "), /*#__PURE__*/react_default.a.createElement("div", null, "WAVES")), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    as: "big",
    className: available > 0 ? 'badge badge-success' : 'badge badge-secondary',
    style: {
      margin: '10px',
      padding: '20px',
      width: '250px'
    }
  }, /*#__PURE__*/react_default.a.createElement("div", null, "available funds"), /*#__PURE__*/react_default.a.createElement("h5", {
    className: "m-1"
  }, " ", /*#__PURE__*/react_default.a.createElement(header_controls_UnlockIcon, null), formatNumber(available), " "), /*#__PURE__*/react_default.a.createElement("div", null, "WAVES"))));
};

/* harmony default export */ var components_BalancePanel = (BalancePanel_BalancePanel);
// CONCATENATED MODULE: ./src/components/pages/supplier/components/Register.jsx
function Register_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Register_typeof = function _typeof(obj) { return typeof obj; }; } else { Register_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Register_typeof(obj); }

function Register_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Register_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Register_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Register_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Register_slicedToArray(arr, i) { return Register_arrayWithHoles(arr) || Register_iterableToArrayLimit(arr, i) || Register_unsupportedIterableToArray(arr, i) || Register_nonIterableRest(); }

function Register_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Register_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Register_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Register_arrayLikeToArray(o, minLen); }

function Register_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Register_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Register_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-alert */





function Register(_ref) {
  var account = _ref.account;

  var _useState = Object(react["useState"])(false),
      _useState2 = Register_slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react["useState"])(true),
      _useState4 = Register_slicedToArray(_useState3, 2),
      loadingData = _useState4[0],
      setLoadingData = _useState4[1];

  var _useState5 = Object(react["useState"])(false),
      _useState6 = Register_slicedToArray(_useState5, 2),
      resultOpened = _useState6[0],
      setResultOpen = _useState6[1];

  var _useState7 = Object(react["useState"])(false),
      _useState8 = Register_slicedToArray(_useState7, 2),
      formOpened = _useState8[0],
      setFormOpen = _useState8[1];

  var _useState9 = Object(react["useState"])(false),
      _useState10 = Register_slicedToArray(_useState9, 2),
      errorResult = _useState10[0],
      setErrorResult = _useState10[1];

  Object(react["useEffect"])(function () {
    setTimeout(function () {
      setLoadingData(false);

      if (!account.isSupplier && !formOpened) {
        setFormOpen(true);
      }
    }, 500);
  }, [account]);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, loadingData ? /*#__PURE__*/react_default.a.createElement(shared_Loading, null) : null, formOpened && !account.isSupplier ? /*#__PURE__*/react_default.a.createElement(modal_FormSupplierRegister, {
    as: "div",
    buttons: ['submit'],
    onClose: /*#__PURE__*/Register_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setFormOpen(false);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })),
    onSubmit: /*#__PURE__*/function () {
      var _ref3 = Register_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                setLoading('Registering as supplier ...');
                _context2.prev = 1;
                _context2.next = 4;
                return registerSupplier(data);

              case 4:
                setResultOpen(true);
                _context2.next = 11;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](1);
                setErrorResult(_context2.t0);
                console.error(_context2.t0);

              case 11:
                _context2.prev = 11;
                setLoading(false);
                return _context2.finish(11);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 7, 11, 14]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }()
  }) : '', /*#__PURE__*/react_default.a.createElement(shared_Modal, {
    open: resultOpened,
    onClose: function onClose() {
      return setResultOpen(false);
    }
  }, /*#__PURE__*/react_default.a.createElement(modal_Result, {
    text: "<div class='alert alert-success'>Registration successful!</div><div>You are now a supplier.<br/><br/></div><div>Click on <b>Manage Coupons</b> to add / update / remove coupons.</div>",
    onClose: function onClose() {
      return setResultOpen(false);
    }
  })), /*#__PURE__*/react_default.a.createElement(shared_Modal, {
    open: typeof loading === 'string',
    onClose: function onClose() {
      return setLoading(false);
    }
  }, /*#__PURE__*/react_default.a.createElement(shared_Loading, {
    className: "bg-dark",
    text: loading
  })), /*#__PURE__*/react_default.a.createElement(modal_ErrorDialog, {
    className: "bg-dark",
    text: errorResult === null || errorResult === void 0 ? void 0 : errorResult.message,
    open: Register_typeof(errorResult) === 'object',
    onClose: function onClose() {
      return setErrorResult(false);
    }
  }));
}

/* harmony default export */ var components_Register = (Register);
// CONCATENATED MODULE: ./src/components/pages/supplier/components/Manager.jsx
function Manager_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Manager_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Manager_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Manager_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Manager_slicedToArray(arr, i) { return Manager_arrayWithHoles(arr) || Manager_iterableToArrayLimit(arr, i) || Manager_unsupportedIterableToArray(arr, i) || Manager_nonIterableRest(); }

function Manager_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Manager_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Manager_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Manager_arrayLikeToArray(o, minLen); }

function Manager_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Manager_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Manager_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-alert */

/* eslint-disable react/no-unescaped-entities */





function Manager(_ref) {
  var account = _ref.account,
      setActiveUrl = _ref.setActiveUrl;

  var _useState = Object(react["useState"])(true),
      _useState2 = Manager_slicedToArray(_useState, 2),
      loadingData = _useState2[0],
      setLoadingData = _useState2[1];

  var _useState3 = Object(react["useState"])([]),
      _useState4 = Manager_slicedToArray(_useState3, 2),
      items = _useState4[0],
      updateItems = _useState4[1];

  var address = account.address;
  Object(react["useEffect"])(function () {
    function refreshData() {
      return _refreshData.apply(this, arguments);
    }

    function _refreshData() {
      _refreshData = Manager_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var list;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                list = [];
                setLoadingData(true);
                _context.prev = 2;
                _context.next = 5;
                return fetchSupplierItems(address);

              case 5:
                list = _context.sent;
                console.debug('[ 🔄 Manager ] :', "".concat(list.length, " items loaded"));
                updateItems(list);
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                console.error(_context.t0);

              case 13:
                _context.prev = 13;
                setLoadingData(false);
                return _context.finish(13);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10, 13, 16]]);
      }));
      return _refreshData.apply(this, arguments);
    }

    return subscribe(DATA, refreshData);
  }, [address]);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, loadingData ? /*#__PURE__*/react_default.a.createElement(shared_Loading, null) : null, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    justifyContent: "center",
    px: {
      0: '20px',
      lg: '39px',
      xl: '20px'
    },
    flexWrap: "wrap"
  }, /*#__PURE__*/react_default.a.createElement(containers_Coupons, {
    isManager: true,
    mode: "manage",
    setActiveUrl: setActiveUrl,
    items: items,
    hideEmptyListMessage: loadingData
  })));
}

/* harmony default export */ var components_Manager = (Manager);
// CONCATENATED MODULE: ./src/components/pages/supplier/components/PurchasesApprove.jsx
function PurchasesApprove_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function PurchasesApprove_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { PurchasesApprove_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { PurchasesApprove_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function PurchasesApprove_slicedToArray(arr, i) { return PurchasesApprove_arrayWithHoles(arr) || PurchasesApprove_iterableToArrayLimit(arr, i) || PurchasesApprove_unsupportedIterableToArray(arr, i) || PurchasesApprove_nonIterableRest(); }

function PurchasesApprove_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function PurchasesApprove_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PurchasesApprove_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PurchasesApprove_arrayLikeToArray(o, minLen); }

function PurchasesApprove_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function PurchasesApprove_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function PurchasesApprove_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-alert */

/* eslint-disable react/no-unescaped-entities */





function PurchasesApprove(_ref) {
  var account = _ref.account,
      setActiveUrl = _ref.setActiveUrl;

  var _useState = Object(react["useState"])(true),
      _useState2 = PurchasesApprove_slicedToArray(_useState, 2),
      loadingData = _useState2[0],
      setLoadingData = _useState2[1];

  var _useState3 = Object(react["useState"])([]),
      _useState4 = PurchasesApprove_slicedToArray(_useState3, 2),
      items = _useState4[0],
      updateItems = _useState4[1];

  Object(react["useEffect"])(function () {
    function refreshData() {
      return _refreshData.apply(this, arguments);
    }

    function _refreshData() {
      _refreshData = PurchasesApprove_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var address, list, approveList;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setLoadingData(true);
                _context.prev = 1;
                // purchases to approve
                address = account.address;
                _context.next = 5;
                return fetchSupplierPurchases(address);

              case 5:
                list = _context.sent;
                approveList = list.filter(function (s) {
                  return s.status === 'approval';
                }).sort(function (a, b) {
                  return a.timestamp < b.timestamp;
                });
                console.debug('[ 🔄 Purchases ] :', "".concat(approveList.length, " purchases to approve loaded"));
                updateItems(approveList);
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);

              case 14:
                _context.prev = 14;
                setLoadingData(false);
                return _context.finish(14);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 11, 14, 17]]);
      }));
      return _refreshData.apply(this, arguments);
    }

    return subscribe(DATA, refreshData);
  }, []);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, loadingData ? /*#__PURE__*/react_default.a.createElement(shared_Loading, null) : null, /*#__PURE__*/react_default.a.createElement(containers_Purchases, {
    isManager: true,
    mode: "approval",
    items: items,
    setActiveUrl: setActiveUrl,
    hideEmptyListMessage: loadingData
  }));
}

/* harmony default export */ var components_PurchasesApprove = (PurchasesApprove);
// CONCATENATED MODULE: ./src/components/pages/supplier/components/PurchasesHistory.jsx
function components_PurchasesHistory_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function components_PurchasesHistory_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { components_PurchasesHistory_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { components_PurchasesHistory_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function components_PurchasesHistory_slicedToArray(arr, i) { return components_PurchasesHistory_arrayWithHoles(arr) || components_PurchasesHistory_iterableToArrayLimit(arr, i) || components_PurchasesHistory_unsupportedIterableToArray(arr, i) || components_PurchasesHistory_nonIterableRest(); }

function components_PurchasesHistory_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function components_PurchasesHistory_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return components_PurchasesHistory_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return components_PurchasesHistory_arrayLikeToArray(o, minLen); }

function components_PurchasesHistory_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function components_PurchasesHistory_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function components_PurchasesHistory_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-alert */

/* eslint-disable react/no-unescaped-entities */





function components_PurchasesHistory_PurchasesHistory(_ref) {
  var account = _ref.account,
      setActiveUrl = _ref.setActiveUrl;

  var _useState = Object(react["useState"])(true),
      _useState2 = components_PurchasesHistory_slicedToArray(_useState, 2),
      loadingData = _useState2[0],
      setLoadingData = _useState2[1];

  var _useState3 = Object(react["useState"])([]),
      _useState4 = components_PurchasesHistory_slicedToArray(_useState3, 2),
      items = _useState4[0],
      updateItems = _useState4[1];

  Object(react["useEffect"])(function () {
    function refreshData() {
      return _refreshData.apply(this, arguments);
    }

    function _refreshData() {
      _refreshData = components_PurchasesHistory_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var address, list, historyList;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setLoadingData(true);
                _context.prev = 1;
                // purchases history
                address = account.address;
                _context.next = 5;
                return fetchSupplierPurchases(address);

              case 5:
                list = _context.sent;
                historyList = list.filter(function (s) {
                  return s.status !== 'approval';
                }).sort(function (a, b) {
                  return a.timestamp < b.timestamp;
                });
                console.debug('[ 🔄 Purchases History ] :', "".concat(historyList.length, " purchases loaded"));
                updateItems(historyList);
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);

              case 14:
                _context.prev = 14;
                setLoadingData(false);
                return _context.finish(14);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 11, 14, 17]]);
      }));
      return _refreshData.apply(this, arguments);
    }

    return subscribe(DATA, refreshData);
  }, []);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, loadingData ? /*#__PURE__*/react_default.a.createElement(shared_Loading, null) : null, /*#__PURE__*/react_default.a.createElement(containers_Purchases, {
    isManager: true,
    mode: "history",
    items: items,
    setActiveUrl: setActiveUrl,
    hideEmptyListMessage: loadingData
  }));
}

/* harmony default export */ var supplier_components_PurchasesHistory = (components_PurchasesHistory_PurchasesHistory);
// CONCATENATED MODULE: ./src/components/pages/supplier/components/WithdrawFunds.jsx
function WithdrawFunds_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function WithdrawFunds_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { WithdrawFunds_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { WithdrawFunds_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function WithdrawFunds_slicedToArray(arr, i) { return WithdrawFunds_arrayWithHoles(arr) || WithdrawFunds_iterableToArrayLimit(arr, i) || WithdrawFunds_unsupportedIterableToArray(arr, i) || WithdrawFunds_nonIterableRest(); }

function WithdrawFunds_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function WithdrawFunds_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return WithdrawFunds_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return WithdrawFunds_arrayLikeToArray(o, minLen); }

function WithdrawFunds_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function WithdrawFunds_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function WithdrawFunds_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-alert */

/* eslint-disable react/no-unescaped-entities */





function WithdrawFunds(_ref) {
  var account = _ref.account,
      setActiveUrl = _ref.setActiveUrl;

  var _useState = Object(react["useState"])(true),
      _useState2 = WithdrawFunds_slicedToArray(_useState, 2),
      loadingData = _useState2[0],
      setLoadingData = _useState2[1];

  var _useState3 = Object(react["useState"])([]),
      _useState4 = WithdrawFunds_slicedToArray(_useState3, 2),
      items = _useState4[0],
      updateItems = _useState4[1];

  Object(react["useEffect"])(function () {
    function refreshData() {
      return _refreshData.apply(this, arguments);
    }

    function _refreshData() {
      _refreshData = WithdrawFunds_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var address, list, availableList;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setLoadingData(true);
                _context.prev = 1;
                // purchases to approve
                address = account.address;
                _context.next = 5;
                return fetchSupplierAvailableCoupons(address);

              case 5:
                list = _context.sent;
                availableList = list.sort(function (a, b) {
                  return a.timestamp < b.timestamp;
                });
                console.debug('[ 🔄 Purchases ] :', "".concat(availableList.length, " available coupons loaded"));
                updateItems(availableList);
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);

              case 14:
                _context.prev = 14;
                setLoadingData(false);
                return _context.finish(14);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 11, 14, 17]]);
      }));
      return _refreshData.apply(this, arguments);
    }

    return subscribe(DATA, refreshData);
  }, []);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, loadingData ? /*#__PURE__*/react_default.a.createElement(shared_Loading, null) : null, /*#__PURE__*/react_default.a.createElement(containers_CouponsList, {
    items: items,
    isManager: true,
    mode: "withdraw",
    setActiveUrl: setActiveUrl,
    hideEmptyListMessage: loadingData
  }));
}

/* harmony default export */ var components_WithdrawFunds = (WithdrawFunds);
// CONCATENATED MODULE: ./src/components/pages/supplier/components/index.js







// CONCATENATED MODULE: ./src/components/pages/supplier/PageSupplier.jsx
function PageSupplier_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function PageSupplier_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { PageSupplier_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { PageSupplier_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function PageSupplier_slicedToArray(arr, i) { return PageSupplier_arrayWithHoles(arr) || PageSupplier_iterableToArrayLimit(arr, i) || PageSupplier_unsupportedIterableToArray(arr, i) || PageSupplier_nonIterableRest(); }

function PageSupplier_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function PageSupplier_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PageSupplier_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PageSupplier_arrayLikeToArray(o, minLen); }

function PageSupplier_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function PageSupplier_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function PageSupplier_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable react/no-unescaped-entities */







var PageSupplier_PageSupplier = function PageSupplier(_ref) {
  var _account$supplier;

  var account = _ref.account,
      activeUrl = _ref.activeUrl,
      setActiveUrl = _ref.setActiveUrl;

  var _useCouponDialogs = service_useCouponDialogs(),
      CouponDialogs = _useCouponDialogs.CouponDialogs,
      _useCouponDialogs$for = PageSupplier_slicedToArray(_useCouponDialogs.form, 2),
      formOpened = _useCouponDialogs$for[0],
      onFormOpen = _useCouponDialogs$for[1];

  var onCreateCoupon = /*#__PURE__*/function () {
    var _ref2 = PageSupplier_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              onFormOpen();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onCreateCoupon() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(CouponDialogs, null), account.isSupplier && activeUrl.indexOf('#supplier/register') === -1 ? /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(supplier_components_Menu, {
    activeUrl: activeUrl,
    setActiveUrl: setActiveUrl,
    approvalCounter: account === null || account === void 0 ? void 0 : (_account$supplier = account.supplier) === null || _account$supplier === void 0 ? void 0 : _account$supplier.approvalCounter,
    onCreateCoupon: onCreateCoupon
  }), account.isConnected ? /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, activeUrl.match(new RegExp('.*/?(#supplier[^/]*|#supplier/manage.*)$')) ? /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    className: "alert alert-light alert-dismissible fade show text-center text-secondary small",
    role: "alert"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "alert",
    "aria-label": "Close"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")), "Find here all coupons you have created as supplier..", /*#__PURE__*/react_default.a.createElement("br", null), "You can add, update and remove them at any time.", /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("small", null, /*#__PURE__*/react_default.a.createElement("b", null, "click on \"Add New Coupon\" to create a new coupon | click on any coupon and then on \"Edit\" to update it or \"Remove\" to remove it from Market"))), /*#__PURE__*/react_default.a.createElement(components_Manager, {
    account: account
  })) : null, activeUrl.match(new RegExp('.*/?#supplier/history.*$')) ? /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(supplier_components_PurchasesHistory, {
    account: account,
    setActiveUrl: setActiveUrl
  })) : null, activeUrl.match(new RegExp('.*/?#supplier/approve.*$')) ? /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    className: "alert alert-light alert-dismissible fade show text-center text-secondary small",
    role: "alert"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "alert",
    "aria-label": "Close"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")), "Find here all the coupons you have sold, and choose for each one if you accept the sale or refuse it", /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("small", null, /*#__PURE__*/react_default.a.createElement("b", null, "click on \"Reject\" to refuse or \"Accept\" to accept the sale"))), /*#__PURE__*/react_default.a.createElement(components_PurchasesApprove, {
    account: account,
    setActiveUrl: setActiveUrl
  })) : null, activeUrl.match(new RegExp('.*/?#supplier/withdraw.*$')) ? /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(components_BalancePanel, {
    account: account
  }), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    className: "alert alert-light alert-dismissible fade show text-center text-secondary small",
    role: "alert"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "alert",
    "aria-label": "Close"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")), "Withdraw available funds for expired/burned coupons.", /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("small", null, /*#__PURE__*/react_default.a.createElement("b", null, "click on \"Withdraw Funds\" for any coupon to received funds"))), /*#__PURE__*/react_default.a.createElement(components_WithdrawFunds, {
    account: account,
    setActiveUrl: setActiveUrl
  })) : null, activeUrl.match(new RegExp('.*/?#supplier/burn.*$')) ? /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    className: "alert alert-light alert-dismissible fade show text-center text-secondary small",
    role: "alert"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "alert",
    "aria-label": "Close"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")), "Find here all the coupons you received in return from buyers, and burn them to release funds.", /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("small", null, /*#__PURE__*/react_default.a.createElement("b", null, "click \"Burn\" button on any coupon burn it and release funds.")))) : null) : /*#__PURE__*/react_default.a.createElement("div", {
    className: "alert alert-warning text-center"
  }, /*#__PURE__*/react_default.a.createElement("p", null, "To use Supplier Manager, please login"), /*#__PURE__*/react_default.a.createElement("p", null, /*#__PURE__*/react_default.a.createElement("button", {
    className: "btn btn-primary",
    type: "button",
    onClick: connect
  }, "Login")))) : ' ', /*#__PURE__*/react_default.a.createElement(components_Register, {
    account: account
  }));
};

/* harmony default export */ var supplier_PageSupplier = (PageSupplier_PageSupplier);
// CONCATENATED MODULE: ./src/components/pages/supplier/index.js

/* harmony default export */ var pages_supplier = (supplier_PageSupplier);
// CONCATENATED MODULE: ./src/components/pages/index.js



// CONCATENATED MODULE: ./src/App.jsx
function App_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function App_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { App_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { App_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function App_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function App_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { App_ownKeys(Object(source), true).forEach(function (key) { App_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { App_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function App_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function App_slicedToArray(arr, i) { return App_arrayWithHoles(arr) || App_iterableToArrayLimit(arr, i) || App_unsupportedIterableToArray(arr, i) || App_nonIterableRest(); }

function App_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function App_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return App_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return App_arrayLikeToArray(o, minLen); }

function App_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function App_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function App_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */

 // import { set } from 'ramda'

/*
import {
    Dialog, Result, Form, FormSupplierRegister,
} from './components/modal'

 import {
    fetchItems, registerSupplier, addItem, updateItem, removeItem,
    getDataByKey, fetchSupplierItems, fetchUserPurchases, fetchSupplierPurchases,
    purchaseCoupon, rejectPurchase, acceptPurchase, sendCouponToSupplier,
    getSupplierBalance, getSupplierAvailableBalance, burnCoupon, withdrawAvailable,
    fetchSupplierReceivedCoupons, fetchUserActiveCoupons,
} from './api'
*/
// import { asyncFilter } from './api/helper'
// import PageSupplier from './components/pages/manager'





var App_App = function App() {
  var _useState = Object(react["useState"])(''),
      _useState2 = App_slicedToArray(_useState, 2),
      activeUrl = _useState2[0],
      setActiveUrl = _useState2[1];

  var _useState3 = Object(react["useState"])(App_objectSpread(App_objectSpread({}, DEFAULT_ACCOUNT), {}, {
    loading: true
  })),
      _useState4 = App_slicedToArray(_useState3, 2),
      account = _useState4[0],
      setAccount = _useState4[1]; // subscribe to account change


  Object(react["useEffect"])(function () {
    var onAccountChange = /*#__PURE__*/function () {
      var _ref = App_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(acct) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.debug('[ 🔄 Account ] : account change');
                setAccount(acct);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function onAccountChange(_x) {
        return _ref.apply(this, arguments);
      };
    }();

    return subscribe(ACCOUNT, onAccountChange);
  }, []);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, account.loading, /*#__PURE__*/react_default.a.createElement(containers_Header, {
    account: account,
    activeUrl: activeUrl,
    setActiveUrl: setActiveUrl // onAccountChange={fetchData}
    // onSupplierRegister={onSupplierRegister}
    // onCreateCoupon={onFormOpen}
    // filterActive={filterActive}
    // onChangeFilterState={changeFilterState}

  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "container-fluid mt-md-3"
  }, (activeUrl === null || activeUrl === void 0 ? void 0 : activeUrl.indexOf('#featured')) >= 0 ? /*#__PURE__*/react_default.a.createElement(market, {
    activeUrl: activeUrl,
    setActiveUrl: setActiveUrl,
    filter: function filter(e) {
      return e.isFeatured && !e.isExpired;
    }
  }) : '', (activeUrl === null || activeUrl === void 0 ? void 0 : activeUrl.indexOf('#delisted')) >= 0 ? /*#__PURE__*/react_default.a.createElement(market, {
    activeUrl: activeUrl,
    setActiveUrl: setActiveUrl,
    filter: function filter(e) {
      return !e.isFeatured && !e.isExpired;
    }
  }) : '', (activeUrl === null || activeUrl === void 0 ? void 0 : activeUrl.indexOf('#expired')) >= 0 ? /*#__PURE__*/react_default.a.createElement(market, {
    activeUrl: activeUrl,
    setActiveUrl: setActiveUrl,
    filter: function filter(e) {
      return e.isExpired;
    }
  }) : '', (activeUrl === null || activeUrl === void 0 ? void 0 : activeUrl.indexOf('#market')) >= 0 ? /*#__PURE__*/react_default.a.createElement(market, {
    activeUrl: activeUrl,
    setActiveUrl: setActiveUrl
  }) : '', (activeUrl === null || activeUrl === void 0 ? void 0 : activeUrl.indexOf('#my')) >= 0 ? /*#__PURE__*/react_default.a.createElement(coupons, {
    account: account,
    activeUrl: activeUrl,
    setActiveUrl: setActiveUrl
  }) : '', (activeUrl === null || activeUrl === void 0 ? void 0 : activeUrl.indexOf('#supplier')) >= 0 ? /*#__PURE__*/react_default.a.createElement(pages_supplier, {
    account: account,
    activeUrl: activeUrl,
    setActiveUrl: setActiveUrl
  }) : ''), /*#__PURE__*/react_default.a.createElement(containers_Footer, {
    account: account,
    setActiveUrl: setActiveUrl
  }));
};

/* harmony default export */ var src_App = (Object(root["hot"])(App_App));
// EXTERNAL MODULE: ./node_modules/redux-devtools-extension/developmentOnly.js
var developmentOnly = __webpack_require__("./node_modules/redux-devtools-extension/developmentOnly.js");

// EXTERNAL MODULE: ./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js + 2 modules
var redux_saga_core_npm_proxy_esm = __webpack_require__("./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");

// EXTERNAL MODULE: ./node_modules/ramda/es/isNil.js
var isNil = __webpack_require__("./node_modules/ramda/es/isNil.js");

// EXTERNAL MODULE: ./node_modules/ramda/es/not.js
var not = __webpack_require__("./node_modules/ramda/es/not.js");

// EXTERNAL MODULE: ./node_modules/ramda/es/append.js + 1 modules
var append = __webpack_require__("./node_modules/ramda/es/append.js");

// EXTERNAL MODULE: ./node_modules/ramda/es/filter.js + 11 modules
var es_filter = __webpack_require__("./node_modules/ramda/es/filter.js");

// CONCATENATED MODULE: ./src/store/configureStore.js
function configureStore_toConsumableArray(arr) { return configureStore_arrayWithoutHoles(arr) || configureStore_iterableToArray(arr) || configureStore_unsupportedIterableToArray(arr) || configureStore_nonIterableSpread(); }

function configureStore_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function configureStore_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return configureStore_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return configureStore_arrayLikeToArray(o, minLen); }

function configureStore_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function configureStore_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return configureStore_arrayLikeToArray(arr); }

function configureStore_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







var sagaMiddleware = Object(redux_saga_core_npm_proxy_esm["a" /* default */])();
var notNil = pipeF(isNil["a" /* default */], not["a" /* default */]);
function configureStore(_ref) {
  var routerMiddleware = _ref.routerMiddleware,
      rootReducer = _ref.rootReducer,
      rootSaga = _ref.rootSaga,
      middlewares = _ref.middlewares;
  var middlewareList = service_pipe([routerMiddleware], function (x) {
    return [].concat(configureStore_toConsumableArray(x), configureStore_toConsumableArray(middlewares || []));
  }, Object(append["a" /* default */])(rootSaga && sagaMiddleware), Object(es_filter["a" /* default */])(notNil));
  var store = Object(redux["createStore"])(rootReducer, Object(developmentOnly["composeWithDevTools"])(redux["applyMiddleware"].apply(void 0, configureStore_toConsumableArray(middlewareList))));

  if (rootSaga) {
    sagaMiddleware.run(rootSaga);
  }

  store.dispatch({
    type: INIT_APP
  });
  return store;
}
// CONCATENATED MODULE: ./src/reducers/coupons.js

var coupons_initialState = {
  list: [1, 2, 3, 4]
};
/* harmony default export */ var reducers_coupons = (createImmutableReducer(coupons_initialState, {}));
// CONCATENATED MODULE: ./src/reducers/index.js
 // import dApp from './dApp'



/* harmony default export */ var reducers = (function () {
  return Object(redux["combineReducers"])({
    // dApp,
    coupons: reducers_coupons,
    root: reducers_root
  });
});
// EXTERNAL MODULE: ./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js + 1 modules
var redux_saga_effects_npm_proxy_esm = __webpack_require__("./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");

// CONCATENATED MODULE: ./src/sagas/service/wavesInit.js
var _marked = /*#__PURE__*/regeneratorRuntime.mark(wavesInit);

/* eslint-disable no-alert */




 // import AuthService from './auth'

window.wc = {
  stringToUint8Array: waves_crypto_dist["stringToUint8Array"],
  sha256: waves_crypto_dist["sha256"],
  base58encode: waves_crypto_dist["base58encode"]
};
window.wt = {
  nodeInteraction: dist["nodeInteraction"],
  invokeScript: dist["invokeScript"],
  broadcast: dist["broadcast"],
  waitForTx: dist["waitForTx"]
};
window.app = libs_dApp_namespaceObject;
function wavesInit() {
  return regeneratorRuntime.wrap(function wavesInit$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.debug('[ 🔄 WavesInit ] :', 'fetchData');
          _context.next = 4;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(fetchData);

        case 4:
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 6]]);
}
// CONCATENATED MODULE: ./src/sagas/service/index.js

// CONCATENATED MODULE: ./src/sagas/initSaga.js
var initSaga_marked = /*#__PURE__*/regeneratorRuntime.mark(init),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(initSaga);





function init() {
  return regeneratorRuntime.wrap(function init$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* fork */])(wavesInit);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, initSaga_marked);
}

function initSaga() {
  return regeneratorRuntime.wrap(function initSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects_npm_proxy_esm["d" /* takeLatest */])([INIT_APP], init);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
// CONCATENATED MODULE: ./src/sagas/index.js
var sagas_marked = /*#__PURE__*/regeneratorRuntime.mark(sagas_rootSaga);



function sagas_rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* all */])([initSaga()]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, sagas_marked);
}
// CONCATENATED MODULE: ./src/store/index.js



/* harmony default export */ var src_store = (function () {
  return configureStore({
    rootReducer: reducers(),
    rootSaga: sagas_rootSaga
  });
});
// CONCATENATED MODULE: ./src/index.jsx









var src_store_0 = src_store();
window.app = libs_dApp_namespaceObject;
react_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(es["a" /* Provider */], {
  store: src_store_0
}, /*#__PURE__*/react_default.a.createElement(styled_components_browser_esm["a" /* ThemeProvider */], {
  theme: styled_components_theme
}, /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(GlobalStyle, null), /*#__PURE__*/react_default.a.createElement(src_App, null)))), document.getElementById('root'));

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__("./src/index.jsx");


/***/ }),

/***/ 10:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlZC1jb21wb25lbnRzL2dsb2JhbC9HbG9iYWxTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3Vwb24vY291cG9uLWNvbnRyb2xzL1N0YXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9Cb3guanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9GbGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvSGFtYnVyZ2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLWNvbnRyb2xzL2ljb25Db2xvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLWNvbnRyb2xzL0xvZ29JY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLWNvbnRyb2xzL0xvZ28uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXItY29udHJvbHMvTWVudUl0ZW0uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXItY29udHJvbHMvSGVhZGVyTGF5b3V0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLWNvbnRyb2xzL1NlYXJjaEljb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXItY29udHJvbHMvU2hvcEljb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXItY29udHJvbHMvVXNlckljb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXItY29udHJvbHMvTG9ja0ljb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXItY29udHJvbHMvVW5sb2NrSWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci1jb250cm9scy9UcmlhbmdsZUljb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXItY29udHJvbHMvUm91bmRNYXJrSWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci1jb250cm9scy9sYW5ndWFnZS1pY29ucy9FbmdsaXNoLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLWNvbnRyb2xzL2xhbmd1YWdlLWljb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXItY29udHJvbHMvTGFuZ3VhZ2VTZWxlY3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXItY29udHJvbHMvQ2xvc2VJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLWNvbnRyb2xzL05GVEljb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXItY29udHJvbHMvQWRkQ291cG9uSWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci1jb250cm9scy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvZEFwcC9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvZEFwcC9kQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2RBcHAvd3QtdHJhbnNhY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2RBcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY3VzdG9tL2J0TG9naW4uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9IZWFkZXJMaW5lLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0xvZ29Db3B5cmlnaHQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9zb2NpYWwtaWNvbnMvRmFjZWJvb2suanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9zb2NpYWwtaWNvbnMvTGlua2VkaW4uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9zb2NpYWwtaWNvbnMvVGVsZWdyYW0uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9zb2NpYWwtaWNvbnMvVHdpdHRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L3NvY2lhbC1pY29ucy9XaGF0c2FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L3NvY2lhbC1pY29ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvU29jaWFsQnV0dG9ucy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L01vYmlsZU1lbnUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9PdmVybGF5LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL01vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvVGV4dC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL0JhZGdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvTG9hZGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvdXBvbi9jb3Vwb24tY29udHJvbHMvUmF0aW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3Vwb24vY291cG9uLWNvbnRyb2xzL1ByaWNlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3Vwb24vY291cG9uLWNvbnRyb2xzL0Rpc2NvdW50LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3Vwb24vY291cG9uLWNvbnRyb2xzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvdXBvbi9Db3Vwb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvdXBvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZXJ2aWNlL3VzZUFwcERpYWxvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VydmljZS91c2VEaXNwYXRjaGVkQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZXJ2aWNlL3VzZVN1cHBsaWVyUmVnaXN0ZXJEaWFsb2dzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFsL2NvbnRyb2xzL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvY29udHJvbHMvRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9jb250cm9scy9TbWFsbExvZ28uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFsL2NvbnRyb2xzL0lucHV0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9jb250cm9scy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jdXN0b20vYnRWb3RpbmcuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFsL0RpYWxvZy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvUmVzdWx0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9Gb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9Gb3JtU3VwcGxpZXJSZWdpc3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvRm9ybVZvdGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFsL0Vycm9yRGlhbG9nLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9Mb2FkaW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9Gb3JtUmV2ZWFsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZXJ2aWNlL3VzZUNvdXBvbkRpYWxvZ3MuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlcnZpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvQ291cG9ucy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvQ291cG9uc0xpc3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1ZvdGluZ0xpc3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1B1cmNoYXNlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlZC1jb21wb25lbnRzL3RoZW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL3JlZHV4LWFjdGlvbnMvY3JlYXRlUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9yZWR1eC1hY3Rpb25zL21ha2VBY3Rpb25DcmVhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL3JlZHV4LWFjdGlvbnMvdG9GZXRjaENvbnN0LmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL3JlZHV4LWFjdGlvbnMvcGlwZVJlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL3JlZHV4LWFjdGlvbnMvY3JlYXRlSW1tdXRhYmxlUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9zZXJ2aWNlL3BpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvcmVkdXgtYWN0aW9ucy9mZXRjaFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvcmVkdXgtYWN0aW9ucy9mZXRjaFJlZHVjZXJLZXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvcmVkdXgtYWN0aW9ucy9mZXRjaEtleS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9yZWR1eC1hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9yb290LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9tYXJrZXQvUGFnZU1hcmtldC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvbWFya2V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2NvdXBvbnMvY29tcG9uZW50cy9NZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9jb3Vwb25zL2NvbXBvbmVudHMvQWN0aXZlQ291cG9ucy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvY291cG9ucy9jb21wb25lbnRzL1B1cmNoYXNlc0hpc3RvcnkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2NvdXBvbnMvY29tcG9uZW50cy9Vc2VkQ291cG9ucy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvY291cG9ucy9jb21wb25lbnRzL0V4cGlyZWRDb3Vwb25zLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9jb3Vwb25zL2NvbXBvbmVudHMvVm90aW5nQ291cG9ucy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvY291cG9ucy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2NvdXBvbnMvUGFnZUNvdXBvbnMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2NvdXBvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvc3VwcGxpZXIvY29tcG9uZW50cy9NZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9zdXBwbGllci9jb21wb25lbnRzL0JhbGFuY2VQYW5lbC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvc3VwcGxpZXIvY29tcG9uZW50cy9SZWdpc3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvc3VwcGxpZXIvY29tcG9uZW50cy9NYW5hZ2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9zdXBwbGllci9jb21wb25lbnRzL1B1cmNoYXNlc0FwcHJvdmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3N1cHBsaWVyL2NvbXBvbmVudHMvUHVyY2hhc2VzSGlzdG9yeS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvc3VwcGxpZXIvY29tcG9uZW50cy9XaXRoZHJhd0Z1bmRzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9zdXBwbGllci9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3N1cHBsaWVyL1BhZ2VTdXBwbGllci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvc3VwcGxpZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9jb3Vwb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvc2VydmljZS93YXZlc0luaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL2luaXRTYWdhLmpzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKT8wYTFiIiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKT8wN2E2Iiwid2VicGFjazovLy9idWZmZXIgKGlnbm9yZWQpIiwid2VicGFjazovLy9idWZmZXIgKGlnbm9yZWQpPzgxNGMiLCJ3ZWJwYWNrOi8vL2J1ZmZlciAoaWdub3JlZCk/MWExOSIsIndlYnBhY2s6Ly8vYnVmZmVyIChpZ25vcmVkKT9kOWFmIiwid2VicGFjazovLy9idWZmZXIgKGlnbm9yZWQpPzExOTgiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpPzAzODMiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpPzMxMDMiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpIiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKT9lNjdmIiwid2VicGFjazovLy9idWZmZXIgKGlnbm9yZWQpP2UwNmEiLCJ3ZWJwYWNrOi8vL2J1ZmZlciAoaWdub3JlZCk/NzI0OCIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCk/NTk2MyJdLCJuYW1lcyI6WyJjcmVhdGVHbG9iYWxTdHlsZSIsImNvbG9ycyIsInRoZW1lIiwiZ3JheSIsIlN0YXIiLCJhY3RpdmUiLCJCb3giLCJzdHlsZWQiLCJkaXYiLCJib3hTaXppbmciLCJzcGFjZSIsIndpZHRoIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJjb2xvciIsImJhY2tncm91bmQiLCJwb3NpdGlvbiIsInpJbmRleCIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImZsZXgiLCJkaXNwbGF5IiwiZmxleEJhc2lzIiwibWluV2lkdGgiLCJvdmVyZmxvdyIsImRpc3BsYXlOYW1lIiwiRmxleCIsImZsZXhXcmFwIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduU2VsZiIsIm9yZGVyIiwiREVGQVVMVF9CQUNLR1JPVU5EIiwiTGluZU1lbnUiLCJhdHRycyIsImFzIiwiSGFtYnVyZ2VyU3R5bGVkIiwiaXNBY3RpdmUiLCJjc3MiLCJIYW1idXJnZXIiLCJvbkNsaWNrIiwiYmciLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZ2V0Q29sb3IiLCJibHVlIiwiZmlsbCIsImxvZ29Db2xvciIsImljb25Db2xvciIsIkxvZ29JY29uIiwiVGl0bGUiLCJCb2xkIiwiYiIsIlBvaW50ZXIiLCJMb2dvIiwic2l6ZSIsImljb25TaXplIiwiTWVudUl0ZW1TdHlsZWQiLCJmb250V2VpZ2h0IiwiTWVudUl0ZW0iLCJjaGlsZHJlbiIsIkhlYWRlckxheW91dCIsIlNlYXJjaEljb24iLCJTaG9wSWNvbiIsIlVzZXJJY29uIiwiTG9ja0ljb24iLCJVbmxvY2tJY29uIiwiVHJpYW5nbGVJY29uIiwicHJvcHMiLCJSb3VuZE1hcmtJY29uIiwiRW5nIiwiZW5nbGlzaCIsIkVuZ2xpc2giLCJsYW5ndWdlU2hvcnROYW1lcyIsIkxhbmd1YWdlU2VsZWN0IiwibGFuZ3VhZ2UiLCJDb21wb25lbnQiLCJJY29ucyIsIkNsb3NlSWNvbiIsIk5GVEljb24iLCJBZGRDb3Vwb25JY29uIiwiZEFwcEFkZHJlc3MiLCJuZnRTY3JpcHQiLCJkZWZhdWx0TmV0d29yayIsImNvZGUiLCJtYXRjaGVyIiwic2VydmVyIiwiY2hhaW5JZCIsIm5ldHdvcmtJZCIsIkRBUFBfQUREUkVTUyIsImNvbmZpZyIsImRhdGFMaXN0VG9PYmoiLCJsaXN0IiwicnYiLCJpIiwibGVuZ3RoIiwia2V5IiwiYXN5bmNGaWx0ZXIiLCJhcnIiLCJmbiIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJyZXN1bHRzIiwiZmlsdGVyIiwiX3YiLCJpbmRleCIsImdldERhdGFCeUtleSIsInZhbCIsIndpbmRvdyIsImRBcHBEYXRhIiwidHlwZSIsInBhcnNlSW50IiwidmFsdWUiLCJCb29sZWFuIiwic2hvcnRBZGRyZXNzIiwiYWRkciIsInN1YnN0ciIsImZvcm1hdERhdGUiLCJkYXRlIiwib3B0aW9uIiwibG9jYWxlcyIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImNvbG9yU3RhdHVzIiwic3RhdHVzIiwiZ2V0U3VwcGxpZXJEYXRhIiwiYWRkcmVzcyIsInN1cHBsaWVyIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJjb25zb2xlIiwid2FybiIsIm1lc3NhZ2UiLCJmb3JtYXROdW1iZXIiLCJhbXQiLCJkZWNpbWFscyIsImRjIiwiSW50bCIsIk51bWJlckZvcm1hdCIsIm1heGltdW1TaWduaWZpY2FudERpZ2l0cyIsImZvcm1hdCIsImdldFZvdGluZyIsIml0ZW0iLCJ1c2VyIiwidm90ZVJvdW5kIiwiaWQiLCJ2b3RlS2V5IiwiaGFzUHVyY2hhc2VkIiwidm90aW5nIiwicm91bmQiLCJjb21taXQiLCJyZXZlYWwiLCJjYW5Db21taXQiLCJjYW5SZXZlYWwiLCJnZXRTdXBwbGllckl0ZW1JZHMiLCJkYXRhIiwiaWRzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJtIiwibWF0Y2giLCJwdXNoIiwiZ2V0U3VwcGxpZXJQdXJjaGFzZUlkcyIsImdldFVzZXJQdXJjaGFzZUlkcyIsImdldEl0ZW1JZHMiLCJwcmVwYXJlSXRlbXMiLCJmbkdldElkcyIsImNvdXBvblRlcm0iLCJzdGFydHNXaXRoIiwidGl0bGUiLCJjb3Vwb25QcmljZSIsImlzRmVhdHVyZWQiLCJkIiwiRGF0ZSIsInllIiwiRGF0ZVRpbWVGb3JtYXQiLCJ5ZWFyIiwibWUiLCJtb250aCIsImRlIiwiZGF5IiwiZXhwaXJhdGlvbkRhdGUiLCJpdGVtRGF0YSIsImltYWdlIiwibmV3UHJpY2UiLCJvbGRQcmljZSIsImRpc2NvdW50IiwiZSIsImlzRXhwaXJlZCIsIm5vdyIsInByZXBhcmVQdXJjaGFzZXMiLCJlbCIsInN1cHBsaWVyRGF0YSIsImFzc2V0SWQiLCJpc0Z1bmRQYWlkIiwiYW1vdW50IiwidGltZXN0YW1wIiwiZ2V0SXRlbUJ5S2V5IiwiY291cG9uU3RhdHVzIiwidXJsIiwiZmV0Y2giLCJyIiwib2siLCJqc29uIiwiYm9keSIsImlzQnVybmVkIiwicXVhbnRpdHkiLCJpc093bmVkIiwiZmV0Y2hJdGVtcyIsImFwaUZldGNoSXRlbXMiLCJyZXMiLCJmZXRjaFVzZXJQdXJjaGFzZXMiLCJiYWxhbmNlIiwiaXNVc2VkIiwiZmV0Y2hVc2VyQ291cG9ucyIsImZldGNoVXNlckFjdGl2ZUNvdXBvbnMiLCJmZXRjaFVzZXJVc2VkQ291cG9ucyIsImZldGNoVXNlckV4cGlyZWRDb3Vwb25zIiwiZmV0Y2hTdXBwbGllckl0ZW1zIiwiZmV0Y2hTdXBwbGllclB1cmNoYXNlcyIsImlzUmVjZWl2ZWQiLCJmZXRjaFN1cHBsaWVyQ291cG9ucyIsImZldGNoU3VwcGxpZXJBY3RpdmVDb3Vwb25zIiwiZmV0Y2hTdXBwbGllclJlY2VpdmVkQ291cG9ucyIsImZldGNoU3VwcGxpZXJBdmFpbGFibGVDb3Vwb25zIiwiZmV0Y2hTdXBwbGllckF2YWlsYWJsZUZ1bmRzIiwicmVkdWNlIiwiYSIsIml0ZW1zIiwiZ2V0UHVyY2hhc2VCeUtleSIsImdldFN1cHBsaWVyQmFsYW5jZSIsImdldFN1cHBsaWVyQXZhaWxhYmxlQmFsYW5jZSIsImdldFN1cHBsaWVyQXBwcm92YWxDb3VudGVyIiwiaGFzaFZvdGUiLCJ2b3RlIiwic2FsdCIsImJ5dGVzIiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiLCJiYXNlNThlbmNvZGUiLCJzaGEyNTYiLCJERUZBVUxUX0FDQ09VTlQiLCJpc0Nvbm5lY3RlZCIsImlzU3VwcGxpZXIiLCJERUZBVUxUX05FVFdPUksiLCJERUZBVUxUX1NUQVRFIiwiQkFTRV9VUkkiLCJDSEFJTl9JRCIsIk5FVFdPUktfSUQiLCJlZSIsIkV2ZW50RW1pdHRlciIsIldhdmVzS2VlcGVyIiwiV0tlZSIsIlBVQkxJQ19TVEFURSIsIkFDQ09VTlQiLCJORVRXT1JLIiwiREFUQSIsInZhbHVlcyIsInN0YXRlIiwiYWNjb3VudCIsIm5ldHdvcmsiLCJhdXRoIiwidHlwZXMiLCJkQXBwIiwiYmFzZVVyaSIsIm5vZGVJbnRlcmFjdGlvbiIsIm5vdGlmeUFsZXJ0IiwiYWxlcnQiLCJnZXRTZXNzaW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldFNlc3Npb24iLCJzZXNzaW9uIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImRlbFNlc3Npb24iLCJyZW1vdmVJdGVtIiwic3Vic2NyaWJlIiwiaW5jbHVkZXMiLCJFcnJvciIsIm9uIiwib2ZmIiwic2V0VmFsdWUiLCJlbWl0IiwiY3VycmVudE5ldHdvcmsiLCJjdXJyZW50QWNjb3VudCIsImZldGNoRGF0YSIsImFjY291bnREYXRhIiwiZEFwcERhdGFLZXlzIiwiZGVidWciLCJkaXNjb25uZWN0IiwidXBkYXRlU3RhdGUiLCJvblN0YXRlQ2hhbmdlIiwidmVyc2lvbiIsImluaXRpYWxpemVkIiwibG9ja2VkIiwibndrIiwiYWNjdCIsImFjY291bnREYXRhQnlLZXkiLCJhcHByb3ZhbENvdW50ZXIiLCJvbkFwaUxpc3RlbmVyIiwib2ZmQXBpTGlzdGVuZXIiLCJwdWJsaWNTdGF0ZSIsImNvbm5lY3QiLCJhdXRoRGF0YSIsImluZm8iLCJpbml0aWFsUHJvbWlzZSIsInRoZW4iLCJjb25uZWN0SWZOb3QiLCJ0aW1lb3V0Iiwic2lnblR4IiwidHhEYXRhIiwic2lnblRyYW5zYWN0aW9uIiwicHVibGlzaFR4Iiwic2lnbmVkVHgiLCJicm9hZGNhc3QiLCJ0eCIsIndhaXRGb3JUeCIsImFwaUJhc2UiLCJzaWduQW5kUHVibGlzaFR4IiwiY291cG9uRGF0YSIsIm5hbWUiLCJsb25nVGl0bGUiLCJyYXRpbmciLCJyYXRpbmdzIiwic2hvcnREZXNjcmlwdGlvbiIsImxvbmdEZXNjcmlwdGlvbiIsInByaWNlVGVybSIsImFkZEl0ZW0iLCJjb3Vwb25FeHBpcmUiLCJjYWxsIiwiYXJncyIsInBheW1lbnQiLCJmZWUiLCJ0b2tlbnMiLCJ1cGRhdGVJdGVtIiwiY291cG9uIiwicmVnaXN0ZXJTdXBwbGllciIsInB1cmNoYXNlQ291cG9uIiwiU3RyaW5nIiwiTnVtYmVyIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJzZW5kZXIiLCJyZWplY3RQdXJjaGFzZSIsInB1cmNoYXNlIiwic2VuZENvdXBvblRvU3VwcGxpZXIiLCJyZWNpcGllbnQiLCJhY2NlcHRQdXJjaGFzZSIsInNldFN0ZXBEb25lIiwidHhHZW5Bc3NldERhdGEiLCJkZXNjcmlwdGlvbiIsInByZWNpc2lvbiIsInJlaXNzdWFibGUiLCJzY3JpcHQiLCJzdHgxIiwidHhBY2NlcHREYXRhIiwic3R4MiIsInR4VHJhbnNmZXJEYXRhIiwic3R4MyIsInJlczMiLCJidXJuQ291cG9uIiwid2l0aGRyYXdGdW5kcyIsImNvbW1pdFZvdGUiLCJoYXNoIiwidG9Mb3dlckNhc2UiLCJyZXZlYWxWb3RlIiwiQlRMb2dpbiIsInNldEFjdGl2ZVVybCIsIm1lbnVJbmRlbnQiLCJ4bCIsIkRlc2t0b3BIZWFkZXIiLCJsaW5rcyIsImFjdGl2ZVVybCIsInVzZXJMaW5rcyIsInRhYmxldFJlc29sdXRpb24iLCJtb2JpbGVSZXNvbHV0aW9uIiwiY2hhbmdlTW9iaWxlTWVudVN0YXRlIiwibWVudU9wZW5lZCIsIm9uQ3JlYXRlQ291cG9uIiwib25NZW51Q2xpY2siLCJ1c2VDYWxsYmFjayIsInNtIiwibGciLCJpc0VuYWJsZWQiLCJpbmRleE9mIiwiaGVhZGVyTGlua3MiLCJjb21wYW55TGlua3MiLCJzdXBwbGllckxpbmtzIiwibXlMaW5rcyIsIm1haW5MaW5rcyIsIllFQVIiLCJnZXRGdWxsWWVhciIsIkxvZ29Db3B5cmlnaHQiLCJGYWNlYm9vayIsIkxpbmtlZGluIiwiVGVsZWdyYW0iLCJUd2l0dGVyIiwiV2hhdHNBcHAiLCJTb2NpYWxCdXR0b25zIiwibWVudUFuaW1hdGlvbiIsImNsYXNzTmFtZXMiLCJDb250YWluZXIiLCJ0ZXh0UHJvcHMiLCJsaW5lSGVpZ2h0IiwiR3JvdXBMaW5rcyIsImxpbmtUaXRsZSIsIk1vYmlsZU1lbnUiLCJvbkNsb3NlIiwidXNlRWZmZWN0IiwiTElOS1MiLCJvdmVybGF5QW5pbWF0aW9uIiwiT3ZlcmxheSIsIm1vZGFsQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlQ29udGFpbmVyIiwiTW9kYWwiLCJvcGVuIiwiT3ZsIiwiUmVhY3RET00iLCJjcmVhdGVQb3J0YWwiLCJlbmhhbmNlU3R5bGVkQ29tcG9uZW50IiwiY29tcG9zZSIsImxldHRlclNwYWNpbmciLCJUZXh0IiwiQmFkZ2UiLCJ0ZXh0IiwicCIsIkxvYWRpbmciLCJzdGFycyIsIlJhdGluZyIsImNlaWxWYWx1ZSIsIk1hdGgiLCJjZWlsIiwiaW5kIiwiUHJpY2VTdHlsZWQiLCJQcmljZSIsImlzT2xkIiwidGVybSIsInVuZGVmaW5lZCIsIkRpc2NvdW50U3R5bGVkIiwiRGlzY291bnQiLCJpc0VtcHR5IiwibWVtb2l6ZU9uZSIsIkNvdXBvbiIsImlzTWFuYWdlQ291cG9ucyIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwibWVtbyIsInVzZUFwcERpYWxvZ3MiLCJ1c2VTdGF0ZSIsImRpYWxvZ09wZW5lZCIsImNoYW5nZURpYWxvZ1N0YXRlIiwicmVzdWx0T3BlbmVkIiwiY2hhbmdlUmVzdWx0U3RhdGUiLCJyZXN1bHRCdXlPcGVuZWQiLCJjaGFuZ2VSZXN1bHRCdXlTdGF0ZSIsImZvcm1PcGVuZWQiLCJjaGFuZ2VGb3JtU3RhdGUiLCJzZWxlY3RlZEl0ZW0iLCJzZWxlY3RJdGVtIiwiZWRpdGVkSXRlbSIsInNlbGVjdEVkaXRlZEl0ZW0iLCJlZGl0ZWRPcHRpb24iLCJzZWxlY3RFZGl0ZWRPcHRpb24iLCJyZXN1bHRUZXh0Iiwic2V0UmVzdWx0VGV4dCIsInVzZU1lbW8iLCJvbkRpYWxvZ09wZW4iLCJvbkRpYWxvZ0Nsb3NlIiwib25SZXN1bHRPcGVuIiwib25SZXN1bHRDbG9zZSIsIm9uUmVzdWx0QnV5T3BlbiIsIm9uUmVzdWx0QnV5Q2xvc2UiLCJvbkZvcm1PcGVuIiwib25Gb3JtQ2xvc2UiLCJkaWFsb2ciLCJyZXN1bHQiLCJyZXN1bHRCdXkiLCJmb3JtIiwidXNlRGlzcGF0Y2hlZEFjdGlvbnMiLCJhY3Rpb25zIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImRpc3BhdGNoZWRBY3Rpb25zIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwidXNlU3VwcGxpZXJSZWdpc3RlckRpYWxvZ3MiLCJyZXN1bHRTUk9wZW5lZCIsImZvcm1TUk9wZW5lZCIsIm9uUmVzdWx0U1JPcGVuIiwib25SZXN1bHRTUkNsb3NlIiwib25Gb3JtU1JPcGVuZWQiLCJvbkZvcm1TUkNsb3NlIiwicmVzdWx0U1IiLCJmb3JtU1IiLCJCdXR0b24iLCJCb3JkZXIiLCJGb290ZXIiLCJweCIsIlNtYWxsTG9nbyIsIklucHV0U3R5bGVkIiwiSW5wdXQiLCJjb250cm9sIiwiZm9yd2FyZFJlZiIsIm1heGxlbmd0aCIsIkJUVm90aW5nIiwib25Db21taXRWb3RlIiwib25SZXZlYWxWb3RlIiwiYnV0dG9uQ2xhc3NOYW1lIiwidGV4dENsYXNzTmFtZSIsImxvZyIsIkRpYWxvZyIsImJ1dHRvbnMiLCJvbkVkaXQiLCJvbkJ1eSIsIm9uUmVtb3ZlIiwib25Vc2UiLCJvbkJ1cm4iLCJvblZvdGUiLCJvblJldmVhbCIsIm9uV2l0aGRyYXciLCJvbkFjY2VwdCIsIm9uUmVqZWN0IiwiYmFja2dyb3VuZENvbG9yIiwiUmVzdWx0IiwiY2xhc3NOYW1lIiwiX19odG1sIiwiSEVJR0hUUyIsIkZPUk1fUEFSQU1FVEVSIiwiSGVpZ2h0UHJvcHMiLCJhY2N1bSIsImJyZWFrcG9pbnRzIiwiRm9ybSIsIm9uU3VibWl0IiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwicmVxdWlyZWQiLCJGb3JtU3VwcGxpZXJSZWdpc3RlciIsImVtYWlsIiwiRm9ybVZvdGUiLCJtYXhIZWlnaHQiLCJFcnJvckRpYWxvZyIsIk1vZGFsTG9hZGluZyIsIkZvcm1SZXZlYWwiLCJ1c2VDb3Vwb25EaWFsb2dzIiwidm90ZUl0ZW0iLCJ2b3RlRm9ybU9wZW5lZCIsIm9uVm90ZUZvcm1PcGVuZWQiLCJvblZvdGVGb3JtQ2xvc2UiLCJyZXZlYWxJdGVtIiwicmV2ZWFsT3B0aW9uIiwicmV2ZWFsRm9ybU9wZW5lZCIsIm9uUmV2ZWFsRm9ybU9wZW5lZCIsIm9uUmV2ZWFsRm9ybUNsb3NlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvclJlc3VsdCIsInNldEVycm9yUmVzdWx0IiwiY2FsbEFjdGlvbiIsImxvYWRUZXh0IiwicmVzVGV4dCIsIm9uU2F2ZSIsIm9uVm90ZUNvbW1pdCIsIm9uVm90ZVJldmVhbCIsIkNvdXBvbkRpYWxvZ3MiLCJtb2RlIiwiZW5hYmxlVm90aW5nIiwiZGlhbG9nQnV0dG9ucyIsInNob3dJdGVtIiwiQ2FyZCIsIkNvdXBvbnMiLCJpc01hbmFnZXIiLCJoaWRlRW1wdHlMaXN0TWVzc2FnZSIsIm1kIiwiQ291cG9uc0xpc3QiLCJyZWZBZGRyIiwicmVmTmFtZSIsInN0YXR1c0NvbG9yIiwiVm90aW5nTGlzdCIsIlB1cmNoYXNlcyIsInN1cHBsaWVyTmFtZSIsImNvdXBvblN0YXR1c0NvbG9yIiwiYmxhY2siLCJyZWQiLCJncmVlbiIsImNyZWF0ZVJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJoYW5kbGVycyIsInJlZHVjZXIiLCJhY3Rpb24iLCJmaW5kIiwieCIsIm1ha2VBY3Rpb25DcmVhdG9yIiwiYXJnTmFtZXMiLCJfIiwiZmV0Y2hDb25zdCIsImNvbnN0YW50IiwiQ0xFQVIiLCJFUlJPUiIsIlJFUVVFU1QiLCJTVUNDRVNTIiwicGlwZVJlZHVjZXJzIiwicmVkdWNlcnMiLCJuZXh0IiwiY3JlYXRlSW1tdXRhYmxlUmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdFN0YXRlIiwicGlwZSIsImZ1bmN0aW9ucyIsIm5ld1ZhbHVlIiwiZnVuYyIsInBpcGVGIiwiZmV0Y2hSZWR1Y2VyIiwiZmV0Y2hUeXBlIiwiaW5pdGlhbFZhbHVlIiwiaXNBcnJheSIsImlzIiwiQXJyYXkiLCJhc3NvY1BhdGgiLCJyZXNwb25zZSIsImNvbmNhdCIsImZldGNoUmVkdWNlcktleSIsImlzRmV0Y2hpbmciLCJmZXRjaEtleSIsImZldGNoUmVkdWNlckZuIiwibW9kYWxNZW51T3BlbiIsIklOSVRfQVBQIiwiQ0hBTkdFX01PQklMRV9NRU5VX1NUQVRFIiwiaXNPcGVuIiwibWVudUhlaWdodCIsIm1hcFN0YXRlVG9Qcm9wcyIsInJvb3QiLCJpbml0QWN0aXZlVXJsIiwiaHJlZiIsImxvY2F0aW9uIiwicG9zIiwiSGVhZGVyIiwib25TdXBwbGllclJlZ2lzdGVyIiwic3VwcGxpZXJBcHByb3ZhbENvdW50ZXIiLCJ1c2VTZWxlY3RvciIsInJvb3RBY3Rpb25zIiwib25DbG9zZU1lbnUiLCJMYXlvdXQiLCJQYWdlTWFya2V0IiwibG9hZGluZ0RhdGEiLCJzZXRMb2FkaW5nRGF0YSIsInVwZGF0ZUl0ZW1zIiwicmVmcmVzaERhdGEiLCJNZW51IiwiUmVnRXhwIiwiQWMiLCJQdXJjaGFzZXNIaXN0b3J5IiwiaGlzdG9yeUxpc3QiLCJzb3J0IiwiVXNlZENvdXBvbnMiLCJFeHBpcmVkQ291cG9ucyIsImdyb3VwIiwiZ2wiLCJncm91cGVkIiwiUGFnZUNvdXBvbnMiLCJCYWxhbmNlUGFuZWwiLCJzZXRBbW91bnQiLCJhdmFpbGFibGUiLCJzZXRBdmFpbGFibGUiLCJzZXRMb2NrZWQiLCJhdmwiLCJsY2siLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW4iLCJwYWRkaW5nIiwiUmVnaXN0ZXIiLCJzZXRSZXN1bHRPcGVuIiwic2V0Rm9ybU9wZW4iLCJzZXRUaW1lb3V0IiwiTWFuYWdlciIsIlB1cmNoYXNlc0FwcHJvdmUiLCJhcHByb3ZlTGlzdCIsInMiLCJXaXRoZHJhd0Z1bmRzIiwiYXZhaWxhYmxlTGlzdCIsIlBhZ2VTdXBwbGllciIsIkFwcCIsInNldEFjY291bnQiLCJvbkFjY291bnRDaGFuZ2UiLCJob3QiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibm90TmlsIiwiaXNOaWwiLCJub3QiLCJjb25maWd1cmVTdG9yZSIsInJvdXRlck1pZGRsZXdhcmUiLCJyb290UmVkdWNlciIsInJvb3RTYWdhIiwibWlkZGxld2FyZXMiLCJtaWRkbGV3YXJlTGlzdCIsImFwcGVuZCIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwicnVuIiwiY29tYmluZVJlZHVjZXJzIiwiY291cG9ucyIsIndhdmVzSW5pdCIsIndjIiwic3RyaW5nVG9VaW50OEFycmF5Iiwid3QiLCJpbnZva2VTY3JpcHQiLCJhcHAiLCJpbml0IiwiaW5pdFNhZ2EiLCJmb3JrIiwidGFrZUxhdGVzdCIsInJlbmRlciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7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M2tCLE1BQU0sQ0FBQzhsQixHQUFQLEdBQWFsYyx5QkFBYjtBQUVBNkosbUJBQVEsQ0FBQzBTLE1BQVQsZUFDSSw4QkFBQyxzQkFBRDtBQUFVLE9BQUssRUFBRWpCLFdBQUtBO0FBQXRCLGdCQUNJLDhCQUFDLHNEQUFEO0FBQWUsT0FBSyxFQUFFaHNCLHVCQUFLQTtBQUEzQixnQkFDSSwyRUFDSSw4QkFBQyxXQUFELE9BREosZUFFSSw4QkFBQyxPQUFELE9BRkosQ0FESixDQURKLENBREosRUFTSWlhLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQVRKLEU7Ozs7Ozs7QUNmQSxlOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7OztBQ0FBLGU7Ozs7Ozs7QUNBQSxlOzs7Ozs7O0FDQUEsZTs7Ozs7OztBQ0FBLGU7Ozs7Ozs7QUNBQSxlOzs7Ozs7O0FDQUEsZTs7Ozs7OztBQ0FBLGU7Ozs7Ozs7QUNBQSxlOzs7Ozs7O0FDQUEsZTs7Ozs7OztBQ0FBLGU7Ozs7Ozs7QUNBQSxlOzs7Ozs7O0FDQUEsZTs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoiYnVpbGQvanMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMSwxXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHbG9iYWxTdHlsZWBcblxuICAgYm9keSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZTogeyBjb2xvcnMgfSB9KSA9PiBjb2xvcnMuZ3JheVsxXX07XG4gICB9XG5cbiAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIGJvcmRlcjogMHB4O1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgaW5wdXQsIGJ1dHRvbiB7XG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBmb250OiBpbmhlcml0O1xuICAgIH1cbiAgICB0ZXh0YXJlYSB7XG4gICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICB9XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU3RhciA9ICh7IGFjdGl2ZSB9KSA9PiAoXG4gICAgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTVcIiB2aWV3Qm94PVwiMCAwIDE2IDE1XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgICBpZD1cIlN0YXJcIlxuICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICBkPVwiTTggMTJMMy4yOTc3MiAxNC40NzIxTDQuMTk1NzcgOS4yMzYwN0wwLjM5MTU0OCA1LjUyNzg2TDUuNjQ4ODYgNC43NjM5M0w4IDBMMTAuMzUxMSA0Ljc2MzkzTDE1LjYwODUgNS41Mjc4NkwxMS44MDQyIDkuMjM2MDdMMTIuNzAyMyAxNC40NzIxTDggMTJaXCJcbiAgICAgICAgICAgIGZpbGw9e2FjdGl2ZSA/ICcjRkZDMzAwJyA6ICcjOUZBMEEyJ31cbiAgICAgICAgLz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXI7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHtcbiAgICBiYWNrZ3JvdW5kLFxuICAgIGNvbG9yLFxuICAgIGRpc3BsYXksXG4gICAgZm9udFNpemUsXG4gICAgaGVpZ2h0LFxuICAgIHNwYWNlLFxuICAgIHdpZHRoLFxuICAgIHBvc2l0aW9uLFxuICAgIHpJbmRleCxcbiAgICB0b3AsXG4gICAgbGVmdCxcbiAgICByaWdodCxcbiAgICBib3R0b20sXG4gICAgZmxleCxcbiAgICBmbGV4QmFzaXMsXG4gICAgbWluV2lkdGgsXG4gICAgb3ZlcmZsb3csXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nXG5cbmNvbnN0IEJveCA9IHN0eWxlZC5kaXYoXG4gICAge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICB9LFxuICAgIHNwYWNlLFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBmb250U2l6ZSxcbiAgICBjb2xvcixcbiAgICBiYWNrZ3JvdW5kLFxuICAgIHBvc2l0aW9uLFxuICAgIHpJbmRleCxcbiAgICB0b3AsXG4gICAgbGVmdCxcbiAgICByaWdodCxcbiAgICBib3R0b20sXG4gICAgZmxleCxcbiAgICBkaXNwbGF5LFxuICAgIGZsZXhCYXNpcyxcbiAgICBtaW5XaWR0aCxcbiAgICBvdmVyZmxvdyxcbilcblxuQm94LmRpc3BsYXlOYW1lID0gJ0JveCdcblxuZXhwb3J0IGRlZmF1bHQgQm94XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHtcbiAgICBmbGV4V3JhcCxcbiAgICBmbGV4RGlyZWN0aW9uLFxuICAgIGFsaWduSXRlbXMsXG4gICAganVzdGlmeUNvbnRlbnQsXG4gICAgYWxpZ25TZWxmLFxuICAgIGZsZXgsXG4gICAgb3JkZXIsXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nXG5cbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3gnXG5cbmNvbnN0IEZsZXggPSBzdHlsZWQoQm94KShcbiAgICB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB9LFxuICAgIGZsZXhXcmFwLFxuICAgIGZsZXhEaXJlY3Rpb24sXG4gICAgYWxpZ25JdGVtcyxcbiAgICBqdXN0aWZ5Q29udGVudCxcbiAgICBhbGlnblNlbGYsXG4gICAgZmxleCxcbiAgICBvcmRlcixcbilcblxuRmxleC5kaXNwbGF5TmFtZSA9ICdGbGV4J1xuXG5leHBvcnQgZGVmYXVsdCBGbGV4XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEJveCwgRmxleCB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmNvbnN0IERFRkFVTFRfQkFDS0dST1VORCA9ICcjMDAwJztcblxuY29uc3QgTGluZU1lbnUgPSBzdHlsZWQoQm94KS5hdHRycyh7XG4gICAgYXM6ICdzcGFuJyxcbn0pYFxuICAgIGhlaWdodDogMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMzUwbXM7XG5gO1xuXG5jb25zdCBIYW1idXJnZXJTdHlsZWQgPSBzdHlsZWQoQm94KS5hdHRycyh7XG4gICAgYXM6ICdidXR0b24nLFxufSlgXG4gICAgei1pbmRleDogMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICR7KHsgaXNBY3RpdmUgfSkgPT5cbiAgICAgICAgaXNBY3RpdmVcbiAgICAgICAgJiYgY3NzYFxuICAgICAgICAgICAgJHtMaW5lTWVudX0ge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCxcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9O1xuYDtcblxuY29uc3QgSGFtYnVyZ2VyID0gKHtcbiAgICBvbkNsaWNrLCBiZywgaXNBY3RpdmUsIC4uLnJlc3Rcbn0pID0+IChcbiAgICA8SGFtYnVyZ2VyU3R5bGVkIG9uQ2xpY2s9e29uQ2xpY2t9IGlzQWN0aXZlPXtpc0FjdGl2ZX0gey4uLnJlc3R9PlxuICAgICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8TGluZU1lbnUgdG9wPVwiMHB4XCIgd2lkdGg9XCIxNXB4XCIgYmc9e2JnfSAvPlxuICAgICAgICAgICAgPExpbmVNZW51IHRvcD1cIjhweFwiIHdpZHRoPVwiMjdweFwiIGJnPXtiZ30gLz5cbiAgICAgICAgICAgIDxMaW5lTWVudSB0b3A9XCIxNnB4XCIgd2lkdGg9XCIzOHB4XCIgYmc9e2JnfSAvPlxuICAgICAgICA8L0ZsZXg+XG4gICAgPC9IYW1idXJnZXJTdHlsZWQ+XG4pO1xuXG5IYW1idXJnZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIGJnOiBERUZBVUxUX0JBQ0tHUk9VTkQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIYW1idXJnZXI7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IGdldENvbG9yID0gKGlzQWN0aXZlLCBjb2xvcnMpID0+IChpc0FjdGl2ZSA/IGNvbG9ycy5ibHVlWzBdIDogY29sb3JzLmdyYXlbMl0pO1xuXG5jb25zdCBmaWxsID0gY3NzYFxuICAgICR7KHsgaXNBY3RpdmUsIHRoZW1lOiB7IGNvbG9ycyB9IH0pID0+IGNzc2BcbiAgICAgICAgZmlsbDogJHtnZXRDb2xvcihpc0FjdGl2ZSwgY29sb3JzKX07XG4gICAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2dvQ29sb3IgPSBjc3NgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHJlY3Qge1xuICAgICAgICAke2ZpbGx9O1xuICAgIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBpY29uQ29sb3IgPSBjc3NgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhdGgge1xuICAgICAgICAke2ZpbGx9O1xuICAgIH1cbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IGxvZ29Db2xvciB9IGZyb20gJy4vaWNvbkNvbG9yJztcblxuY29uc3QgTG9nb0ljb24gPSAoeyBpc0FjdGl2ZSwgLi4ucmVzdCB9KSA9PiAoXG4gICAgPHN2Z1xuICAgICAgICB3aWR0aD1cIjQ4XCJcbiAgICAgICAgaGVpZ2h0PVwiNDhcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAgICA8ZyBpZD1cIkxvZ29fY291cG9uXCI+XG4gICAgICAgICAgICA8cmVjdCBpZD1cIlJlY3RhbmdsZVwiIHdpZHRoPVwiNDhcIiBoZWlnaHQ9XCI0OFwiIHJ4PVwiMTJcIiBmaWxsPVwiIzJFQjRGRlwiIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGlkPVwiQ29tYmluZWQgU2hhcGVcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTM5LjQxNzcgMjIuOTY4OEMzOS4yMTMyIDIzLjM0NDUgMzguOTYyNCAyMy42ODkxIDM4LjY3MTcgMjMuOTkzNEMzOC45NjI0IDI0LjI5NzkgMzkuMjEzNyAyNC42NDI0IDM5LjQxNzcgMjUuMDE4QzQwLjAzMSAyNi4xNDg0IDQwLjE2NTMgMjcuNDU3IDM5Ljc5NDYgMjguNzAxNkMzOS40Njk0IDI5Ljc5MzkgMzkuMDI2MiAzMC44NTk4IDM4LjQ3NjggMzEuODcwOUMzNy42NTI4IDMzLjM4MjQgMzYuMDg3NyAzNC4zMzE2IDM0LjM3NTMgMzQuMzY1MkMzNC4zNjE2IDM0Ljk3ODUgMzQuMjI5IDM1LjU5MDYgMzMuOTgxOSAzNi4xNjEzQzMzLjU1ODEgMzcuMTQwNCAzMi44MTMgMzcuOTU4MiAzMS44ODMzIDM4LjQ2MzlDMzAuODcxNyAzOS4wMTQxIDI5LjgwNTggMzkuNDU3MiAyOC43MTQyIDM5Ljc4MjRDMjguMjU3MiAzOS45MTgyIDI3Ljc4ODIgMzkuOTg2NyAyNy4zMTk0IDM5Ljk4NjdDMjYuMDgwMiAzOS45ODY3IDI0Ljg5ODUgMzkuNTAxMiAyNC4wMTk5IDM4LjY2ODRDMjMuODgwMSAzOC44MDM5IDIzLjczMTMgMzguOTMxNiAyMy41NzM2IDM5LjA0OThDMjIuNzU0OSAzOS42NjIzIDIxLjc0MTkgNDAgMjAuNzIwOCA0MEMyMC4yNzI2IDQwIDE5LjgyNTUgMzkuOTM2MyAxOS4zOTI4IDM5LjgxMTNDMTguMjIgMzkuNDY5MSAxNy4wODM2IDM4Ljk5NDUgMTYuMDEyNSAzOC40MDA4QzE0LjcyNzEgMzcuNjg2MyAxMy44MzggMzYuMzkyMiAxMy42MzM3IDM0LjkzODVDMTMuNjA3MyAzNC43NTAyIDEzLjU5MjkgMzQuNTYyNyAxMy41ODkzIDM0LjM3NTJDMTMuNDA3OSAzNC4zNzA5IDEzLjIyNzIgMzQuMzU1OSAxMy4wNTA1IDM0LjMzMDNDMTEuNTc2OCAzNC4xMTg5IDEwLjI2ODkgMzMuMjEyOSA5LjU1MzQ5IDMxLjkwNjRDOC45ODAyMyAzMC44NTkyIDguNTIwODQgMjkuNzQ5NiA4LjE4NzQzIDI4LjYwNzJDNy43NzE3OSAyNy4xNzY4IDguMDU2OTYgMjUuNjE0MSA4Ljk0ODE5IDI0LjQyNTZDOS4wNjI4NSAyNC4yNzMgOS4xODUzMSAyNC4xMjkxIDkuMzE1OTggMjMuOTkzQzkuMTg2MDkgMjMuODU3NiA5LjA2NDAyIDIzLjcxMzkgOC45NTAxNSAyMy41NjI3QzguMDU3MzUgMjIuMzczIDcuNzcyMzggMjAuODEwMiA4LjE4ODIxIDE5LjM4MTNDOC41MjMxOCAxOC4yMzM2IDguOTgxNCAxNy4xMjQgOS41NTE3MyAxNi4wODIyQzEwLjI2ODkgMTQuNzc1MiAxMS41NzYgMTMuODY4IDEzLjA0OTcgMTMuNjU2MUMxMy4yNDY4IDEzLjYyODUgMTMuNDQyMyAxMy42MTI5IDEzLjYzNDkgMTMuNjEwNEMxMy42NTA1IDEzLjAwMDggMTMuNzgzMSAxMi4zOTI2IDE0LjAyODggMTEuODI1QzE0LjQ1MjcgMTAuODQ2NSAxNS4xOTcyIDEwLjAyODkgMTYuMTI2OSA5LjUyMzA1QzE3LjEzODUgOC45NzI4NSAxOC4yMDQzIDguNTI5NDkgMTkuMjk2IDguMjA0M0MxOS43NTMgOC4wNjg3NSAyMC4yMjIgOCAyMC42OTA3IDhDMjEuOTM3NiA4IDIzLjEyNDggOC40OTE0MSAyNC4wMDUxIDkuMzMyMjNDMjQuODg1NiA4LjQ5MTQxIDI2LjA3MjUgOCAyNy4zMTk0IDhDMjcuNzg4MiA4IDI4LjI1NzIgOC4wNjg3NSAyOC43MTM0IDguMjA0M0MyOS44MDU4IDguNTI5NDkgMzAuODcxNyA4Ljk3Mjg1IDMxLjg4MjUgOS41MjIyN0MzMi44MTMgMTAuMDI4OSAzMy41NTgxIDEwLjg0NjUgMzMuOTgxOSAxMS44MjU0QzM0LjIyOSAxMi4zOTYzIDM0LjM2MTYgMTMuMDA4MiAzNC4zNzUzIDEzLjYyMTVDMzYuMDg3NyAxMy42NTU1IDM3LjY1MjggMTQuNjA0NSAzOC40NzYgMTYuMTE1QzM5LjAyNjIgMTcuMTI3IDM5LjQ2OTQgMTguMTkzIDM5Ljc5NDYgMTkuMjg0OEM0MC4xNjUzIDIwLjUzMDEgNDAuMDMxIDIxLjgzODMgMzkuNDE3NyAyMi45Njg4Wk0zNCAyNEMzNCAyOS41MjI4IDI5LjUyMjggMzQgMjQgMzRDMTguNDc3MiAzNCAxNCAyOS41MjI4IDE0IDI0QzE0IDE4LjQ3NzIgMTguNDc3MiAxNCAyNCAxNEMyOS41MjI4IDE0IDM0IDE4LjQ3NzIgMzQgMjRaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxnIGlkPVwiX3gyM18wMDAwMDBmZiBjb3B5IDJcIj5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBpZD1cIlBhdGhcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTIzLjYwNTMgMTkuMTU1NkMyMy45MDg3IDE4Ljg4NSAyNC40NDE0IDE4Ljk3NTggMjQuNjEzMiAxOS4zNjE5QzI0Ljk2MiAyMC4yNjIgMjUuMzA0NiAyMS4xNjUyIDI1LjY1MTMgMjIuMDY2QzI1LjY1NzMgMjIuMDk2NCAyNS42ODQ3IDIyLjEwNyAyNS43MTE4IDIyLjEwN0MyNi41NzkyIDIyLjE2ODggMjcuNDQ2MSAyMi4yNDIzIDI4LjMxMzYgMjIuMzA3QzI4LjU2MjIgMjIuMzEyNSAyOC44MDkxIDIyLjQ1NTIgMjguOTIxNiAyMi42OTA2QzI5LjA2MDggMjIuOTU1IDI5LjAxNCAyMy4zMjE2IDI4Ljc4NjIgMjMuNTE3MkMyOC4wODY3IDI0LjExNjQgMjcuMzkzNSAyNC43MjM2IDI2LjY5NTcgMjUuMzI0N0MyNi42NzYyIDI1LjM0MiAyNi42NTY5IDI1LjM1OTkgMjYuNjQzNiAyNS4zODI4QzI2Ljg0MDkgMjYuMjc2NiAyNy4wNjE1IDI3LjE2NjMgMjcuMjY4IDI4LjA1ODRDMjcuNDI0MiAyOC41MDU4IDI3LjA1OCAyOS4wMzM1IDI2LjU5NzkgMjguOTk4M0MyNi40MzkxIDI4Ljk5NjMgMjYuMzAwNiAyOC45MDYyIDI2LjE3NDEgMjguODE1OEMyNS40OTAxIDI4LjM2NTYgMjQuODA1NiAyNy45MTUyIDI0LjEyMDkgMjcuNDY1NUMyNC4wNjI1IDI3LjQyODMgMjQuMDA3NSAyNy4zODE3IDIzLjk0MTkgMjcuMzU5N0MyMy4xNjU3IDI3Ljg0NjQgMjIuNDAxNSAyOC4zNTU0IDIxLjYyNzQgMjguODQ2M0MyMS40MTQ2IDI4Ljk3ODggMjEuMTMxOSAyOC45NzY1IDIwLjkyMjggMjguODM3QzIwLjcwMjMgMjguNzAwNCAyMC41NjY5IDI4LjQxODQgMjAuNjE4NiAyOC4xNTI2QzIwLjg0MTcgMjcuMTk5MiAyMS4wOTI2IDI2LjI0OTMgMjEuMzA1NiAyNS4yOTRDMjAuNjc2NyAyNC43MzAxIDIwLjAzODMgMjQuMTc3OCAxOS40MDYzIDIzLjYxNzdDMTkuMjYzNCAyMy40OTY4IDE5LjEwOCAyMy4zNzA1IDE5LjA0NiAyMy4xODI0QzE4Ljg5NDEgMjIuODA0MiAxOS4xMzQyIDIyLjMxMTYgMTkuNTMyIDIyLjI1MjZDMjAuNDc4MyAyMi4xNjkzIDIxLjQzMTIgMjIuMTM0MyAyMi4zNzUyIDIyLjA0MzhDMjIuNzAxNyAyMS4yMzEyIDIzLjAxNTggMjAuNDEyIDIzLjMzODcgMTkuNTk2OEMyMy4zOTg5IDE5LjQzMzcgMjMuNDY4MSAxOS4yNjQ1IDIzLjYwNTMgMTkuMTU1NlpcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChMb2dvSWNvbilgXG4gICAgJHtsb2dvQ29sb3J9XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgTG9nb0ljb24gZnJvbSAnLi9Mb2dvSWNvbic7XG5cbmltcG9ydCB7IEJveCwgRmxleCB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkKEJveCkuYXR0cnMoe1xuICAgIGFzOiAnc3BhbicsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbn0pYFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5gO1xuXG5UaXRsZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY29sb3I6ICdibHVlLjAnLFxuICAgIGZvbnRTaXplOiAnMjJweCcsXG59O1xuXG5jb25zdCBCb2xkID0gc3R5bGVkLmJgXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbmA7XG5cbmNvbnN0IFBvaW50ZXIgPSBzdHlsZWQuZGl2YFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IExvZ28gPSAoeyBpc0FjdGl2ZSwgc2l6ZSwgLi4ucmVzdCB9KSA9PiB7XG4gICAgY29uc3QgaWNvblNpemUgPSBzaXplID09PSAnc21hbGwnID8gJzMzJyA6ICc0OCc7XG4gICAgY29uc3QgZm9udFNpemUgPSBzaXplID09PSAnc21hbGwnID8gJzE2cHgnIDogJzIycHgnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZsZXggey4uLnJlc3R9IGFzPXtQb2ludGVyfT5cbiAgICAgICAgICAgIDxMb2dvSWNvbiBpc0FjdGl2ZT17aXNBY3RpdmV9IHdpZHRoPXtpY29uU2l6ZX0gaGVpZ2h0PXtpY29uU2l6ZX0gLz5cbiAgICAgICAgICAgIDxCb3ggcGw9XCI5cHhcIj5cbiAgICAgICAgICAgICAgICA8VGl0bGUgY29sb3I9e2lzQWN0aXZlID8gJ2JsdWUuMCcgOiAnZ3JheS4yJ30gZm9udFNpemU9e2ZvbnRTaXplfT5cbiAgICAgICAgICAgICAgICAgICAgPEJvbGQ+Q291cG9uPC9Cb2xkPlxuICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICBCYXphYXJcbiAgICAgICAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgICAgICAgIDxUaXRsZSBjb2xvcj17aXNBY3RpdmUgPyAnYmx1ZS4wJyA6ICdncmF5LjInfSBmb250U2l6ZT17Zm9udFNpemV9PlxuICAgICAgICAgICAgICAgICAgICBNYXJrZXRcbiAgICAgICAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvRmxleD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nbztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBmb250V2VpZ2h0IH0gZnJvbSAnc3R5bGVkLXN5c3RlbSdcblxuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vc2hhcmVkJ1xuXG5jb25zdCBNZW51SXRlbVN0eWxlZCA9IHN0eWxlZChCb3gpLmF0dHJzKCh7IGFjdGl2ZSwgY29sb3IgfSkgPT4gKHtcbiAgICBhczogJ3NwYW4nLFxuICAgIGNvbG9yOiBhY3RpdmUgPyAnYmx1ZS4wJyA6IGNvbG9yIHx8ICdncmF5LjInLFxufSkpYFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjY1NjI1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogJHsoeyB0aGVtZTogeyBjb2xvcnMgfSB9KSA9PiBjb2xvcnMuYmx1ZVswXX07XG4gICAgfVxuICAgICR7Zm9udFdlaWdodH1cbmBcblxuY29uc3QgTWVudUl0ZW0gPSAoe1xuICAgIGNoaWxkcmVuLCBhY3RpdmUsIG9uQ2xpY2ssIC4uLnJlc3Rcbn0pID0+IChcbiAgICA8TWVudUl0ZW1TdHlsZWQgYWN0aXZlPXthY3RpdmV9IG9uQ2xpY2s9e29uQ2xpY2t9IHsuLi5yZXN0fT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgIDwvTWVudUl0ZW1TdHlsZWQ+XG4pXG5cbk1lbnVJdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBmb250V2VpZ2h0OiAnNTAwJyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudUl0ZW1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL3NoYXJlZCdcblxuY29uc3QgSGVhZGVyTGF5b3V0ID0gc3R5bGVkKEJveCkuYXR0cnMoe1xuICAgIGJnOiAnZ3JheS4wJyxcbn0pYFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTBweCAjZWRlZWYwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG5gXG5cbkhlYWRlckxheW91dC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlckxheW91dFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0IHsgaWNvbkNvbG9yIH0gZnJvbSAnLi9pY29uQ29sb3InXG5cbmNvbnN0IFNlYXJjaEljb24gPSAoeyBpc0FjdGl2ZSwgLi4ucmVzdCB9KSA9PiAoXG4gICAgPHN2Z1xuICAgICAgICB3aWR0aD1cIjE4XCJcbiAgICAgICAgaGVpZ2h0PVwiMThcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDU0IDU0XCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAgICA8ZyBpZD1cInNlYXJjaF9pY29uXCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGlkPVwiU2hhcGVcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTQwLjQwNzIgMzguMTIzM0w1My41MzI5IDUxLjI0NjFDNTQuMTU1NyA1MS44Njg3IDU0LjE1NTcgNTIuODk4NCA1My41MzI5IDUzLjUyMTFDNTMuMjIxNiA1My44NDQzIDUyLjgwMjQgNTQgNTIuMzk1MiA1NEM1MS45ODggNTQgNTEuNTY4OSA1My44MzI0IDUxLjI1NzUgNTMuNTIxMUwzOC4xMzE3IDQwLjM5ODJDMzQuMDgzOCA0My45MTg0IDI4LjgwMjQgNDYuMDQ5NyAyMy4wMjk5IDQ2LjA0OTdDMTAuMzM1MyA0Ni4wNDk3IDAgMzUuNzE2NiAwIDIzLjAyNDhDMCAxMC4zMzMgMTAuMzIzNCAwIDIzLjAyOTkgMEMzNS43MjQ2IDAgNDYuMDU5OSAxMC4zMjExIDQ2LjA1OTkgMjMuMDI0OEM0Ni4wNTk5IDI4Ljc5NiA0My45MjgxIDM0LjA3NjMgNDAuNDA3MiAzOC4xMjMzWk0yMy4wMTggMy4yMzI4MkMxMi4xMDc4IDMuMjMyODIgMy4yMjE1NiAxMi4xMDUxIDMuMjIxNTYgMjMuMDI0OEMzLjIyMTU2IDMzLjk0NDYgMTIuMTA3OCA0Mi44Mjg4IDIzLjAxOCA0Mi44Mjg4QzMzLjk0MDEgNDIuODI4OCA0Mi44MTQ0IDMzLjkzMjYgNDIuODE0NCAyMy4wMjQ4QzQyLjgxNDQgMTIuMTE3MSAzMy45NDAxIDMuMjMyODIgMjMuMDE4IDMuMjMyODJaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzJFQjRGRlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgPC9zdmc+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChTZWFyY2hJY29uKWBcbiAgICAke2ljb25Db2xvcn1cbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCB7IGljb25Db2xvciB9IGZyb20gJy4vaWNvbkNvbG9yJ1xuXG5jb25zdCBTaG9wSWNvbiA9ICh7IGlzQWN0aXZlLCAuLi5yZXN0IH0pID0+IChcbiAgICA8c3ZnXG4gICAgICAgIHdpZHRoPVwiMjJcIlxuICAgICAgICBoZWlnaHQ9XCIxOFwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjIgMThcIlxuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICAgIDxnIGlkPVwic2hvcHBpbmctYmFza2V0LWJ1dHRvblwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBpZD1cIlNoYXBlXCJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0xNi4zNDg2IDYuOTEwOTlMMTEuOTA4MyAwLjM5NDkxNEMxMS43MDY0IDAuMTk3NDU3IDExLjQwMzcgMCAxMS4xMDA5IDBDMTAuNzk4MiAwIDEwLjQ5NTQgMC4wOTg3Mjg1IDEwLjI5MzYgMC4zOTQ5MTRMNS44NTMyMSA2LjkxMDk5SDEuMDA5MTdDMC40MDM2NyA2LjkxMDk5IDAgNy4zMDU5MSAwIDcuODk4MjhWOC4xOTQ0N0wyLjUyMjk0IDE3LjM3NjJDMi43MjQ3NyAxOC4xNjYgMy41MzIxMSAxOC44NTcxIDQuNDQwMzcgMTguODU3MUgxNy41NTk2QzE4LjQ2NzkgMTguODU3MSAxOS4yNzUyIDE4LjI2NDggMTkuNDc3MSAxNy4zNzYyTDIyIDguMTk0NDdWNy44OTgyOEMyMiA3LjMwNTkxIDIxLjU5NjMgNi45MTA5OSAyMC45OTA4IDYuOTEwOTlIMTYuMzQ4NlpNOC4wNzMzOSA2LjkxMDk5TDExLjEwMDkgMi41NjY5NEwxNC4xMjg0IDYuOTEwOTlIOC4wNzMzOVpNOS4wODI1NyAxMi44MzQ3QzkuMDgyNTcgMTMuOTIwNyA5Ljk5MDgzIDE0LjgwOTMgMTEuMTAwOSAxNC44MDkzQzEyLjIxMSAxNC44MDkzIDEzLjExOTMgMTMuOTIwNyAxMy4xMTkzIDEyLjgzNDdDMTMuMTE5MyAxMS43NDg3IDEyLjIxMSAxMC44NjAxIDExLjEwMDkgMTAuODYwMUM5Ljk5MDgzIDEwLjg2MDEgOS4wODI1NyAxMS43NDg3IDkuMDgyNTcgMTIuODM0N1pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMkVCNEZGXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbilcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKFNob3BJY29uKWBcbiAgICAke2ljb25Db2xvcn1cbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCB7IGljb25Db2xvciB9IGZyb20gJy4vaWNvbkNvbG9yJ1xuXG5jb25zdCBVc2VySWNvbiA9ICh7IGlzQWN0aXZlLCAuLi5yZXN0IH0pID0+IChcbiAgICA8c3ZnXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICB3aWR0aD1cIjI0XCJcbiAgICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1wZXJzb24tZmlsbFwiXG4gICAgICAgIHsuLi5yZXN0fVxuICAgID5cbiAgICAgICAgPHBhdGggZD1cIk0zIDE0cy0xIDAtMS0xIDEtNCA2LTQgNiAzIDYgNC0xIDEtMSAxSDN6bTUtNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6XCIgLz5cbiAgICA8L3N2Zz5cbilcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKFVzZXJJY29uKWBcbiAgICAke2ljb25Db2xvcn1cbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCB7IGljb25Db2xvciB9IGZyb20gJy4vaWNvbkNvbG9yJ1xuXG5jb25zdCBMb2NrSWNvbiA9ICh7IGlzQWN0aXZlLCAuLi5yZXN0IH0pID0+IChcbiAgICA8c3ZnXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICB3aWR0aD1cIjI0XCJcbiAgICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1sb2NrLWZpbGxcIlxuICAgICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICAgIDxwYXRoIGQ9XCJNOCAxYTIgMiAwIDAgMSAyIDJ2NEg2VjNhMiAyIDAgMCAxIDItMnptMyA2VjNhMyAzIDAgMCAwLTYgMHY0YTIgMiAwIDAgMC0yIDJ2NWEyIDIgMCAwIDAgMiAyaDZhMiAyIDAgMCAwIDItMlY5YTIgMiAwIDAgMC0yLTJ6XCIgLz5cbiAgICA8L3N2Zz5cbilcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKExvY2tJY29uKWBcbiAgICAke2ljb25Db2xvcn1cbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCB7IGljb25Db2xvciB9IGZyb20gJy4vaWNvbkNvbG9yJ1xuXG5jb25zdCBVbmxvY2tJY29uID0gKHsgaXNBY3RpdmUsIC4uLnJlc3QgfSkgPT4gKFxuICAgIDxzdmdcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLXVubG9jay1maWxsXCJcbiAgICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAgICA8cGF0aCBkPVwiTTExIDFhMiAyIDAgMCAwLTIgMnY0YTIgMiAwIDAgMSAyIDJ2NWEyIDIgMCAwIDEtMiAySDNhMiAyIDAgMCAxLTItMlY5YTIgMiAwIDAgMSAyLTJoNVYzYTMgMyAwIDAgMSA2IDB2NGEuNS41IDAgMCAxLTEgMFYzYTIgMiAwIDAgMC0yLTJ6XCIgLz5cbiAgICA8L3N2Zz5cbilcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKFVubG9ja0ljb24pYFxuICAgICR7aWNvbkNvbG9yfVxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVHJpYW5nbGVJY29uID0gcHJvcHMgPT4gKFxuICAgIDxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjhcIiB2aWV3Qm94PVwiMCAwIDEyIDhcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB7Li4ucHJvcHN9PlxuICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTYgOEwwIDBMMTIgMEw2IDhaXCIgZmlsbD1cIiMyRUI0RkZcIiAvPlxuICAgIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVHJpYW5nbGVJY29uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBSb3VuZE1hcmtJY29uID0gcHJvcHMgPT4gKFxuICAgIDxzdmdcbiAgICAgICAgd2lkdGg9XCIxOFwiXG4gICAgICAgIGhlaWdodD1cIjE4XCJcbiAgICAgICAgdmlld0JveD1cIjAgMCAxOCAxOFwiXG4gICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIGQ9XCJNOSAxOEMxMy45NzA2IDE4IDE4IDEzLjk3MDYgMTggOUMxOCA0LjAyOTQ0IDEzLjk3MDYgMCA5IDBDNC4wMjk0NCAwIDAgNC4wMjk0NCAwIDlDMCAxMy45NzA2IDQuMDI5NDQgMTggOSAxOFpcIlxuICAgICAgICAgICAgZmlsbD1cIiM1MEUzQzJcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aCBkPVwiTTUgOS41NzIyOEw3Ljk4Mjg4IDEyLjYwNjlMMTIuODIzNyA2XCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjJcIiAvPlxuICAgIDwvc3ZnPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBSb3VuZE1hcmtJY29uXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBFbmcgPSBwcm9wcyA9PiAoXG4gICAgPHN2Z1xuICAgICAgICB3aWR0aD1cIjIwXCJcbiAgICAgICAgaGVpZ2h0PVwiMjBcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgICAgPGcgaWQ9XCJHcm91cFwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBpZD1cIk1hc2tcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTEwIDIwQzE1LjUyMjggMjAgMjAgMTUuNTIyOCAyMCAxMEMyMCA0LjQ3NzE1IDE1LjUyMjggMCAxMCAwQzQuNDc3MTUgMCAwIDQuNDc3MTUgMCAxMEMwIDE1LjUyMjggNC40NzcxNSAyMCAxMCAyMFpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMDAyNDdEXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bWFza1xuICAgICAgICAgICAgICAgIGlkPVwibWFzazBcIlxuICAgICAgICAgICAgICAgIG1hc2stdHlwZT1cImFscGhhXCJcbiAgICAgICAgICAgICAgICBtYXNrVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgeD1cIjBcIlxuICAgICAgICAgICAgICAgIHk9XCIwXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJNYXNrXzJcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTEwIDIwQzE1LjUyMjggMjAgMjAgMTUuNTIyOCAyMCAxMEMyMCA0LjQ3NzE1IDE1LjUyMjggMCAxMCAwQzQuNDc3MTUgMCAwIDQuNDc3MTUgMCAxMEMwIDE1LjUyMjggNC40NzcxNSAyMCAxMCAyMFpcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L21hc2s+XG4gICAgICAgICAgICA8ZyBtYXNrPVwidXJsKCNtYXNrMClcIj5cbiAgICAgICAgICAgICAgICA8ZyBpZD1cIkdyb3VwXzJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJHcm91cF8zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjQuMjg2NyAyMC4xOTNWMTcuMDk0M0wxMy41Njg4IDkuNTAyNTJMNS42NzUzNSA5LjUwMjUyTDIwLjc2NjUgMjAuMTkzSDI0LjI4NjdaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0VFRUVFRVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIlBhdGhfMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjQuMjg2NyAxOC4wMjc0TDEyLjI1MzkgOS41MDI1N0g5LjYyMjhMMjQuMjg2NyAxOS44OTA2VjE4LjAyNzRaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0NGMUIyQlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIlBhdGhfM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNy44MzE5MSA5LjUwMjU0TC00LjM5NTYgMTguMzA4M1YyMC4xOTI5SDAuNjM0MjM4TDE1LjcyNjkgOS41MDI0TDcuODMxOTEgOS41MDI1NFpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRUVFRUVFXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aF80XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMS43Nzg0IDkuNTAyNTJMLTMuMjg3MDggMjAuMTkzSC0yLjg4NTU5SC0wLjY4MDA4MUwxNC40MTEgOS41MDI1MkgxMS43Nzg0WlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNDRjFCMkJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIwLjc2NzkgMC4zMzkzMTVMNS42NzY4MiAxMS4wMjk4TDEzLjU3MDMgMTEuMDI5OEwyNC4yODY3IDMuNDM3OTdWMC4zMzkzMTVIMjAuNzY3OVpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRUVFRUVFXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aF82XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0yMi4wODE0IDAuMzM5MzE1TDYuOTkxNzkgMTEuMDI5OEg5LjYyMjk0TDI0LjI4NjggMC42NDE3MzFWMC4zMzkzMTVIMjIuMDgxNFpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjQ0YxQjJCXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aF83XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMC41ODAxIDExLjEzOTFIMTUuNjA0NEwwLjYxMTAwMSAwLjQzOTUxNUMtMS4xMTE0NiAwLjcwNTIxNSAtMi41OTQ0MSAxLjcxMjcxIC0zLjUxNjQ4IDMuMTMyMDhMMTAuNTc5OSAxMy4xODY4VjExLjEzOTFIMTAuNTgwMVpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNFRUVFRUVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXzhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTS0yLjg1NzEzIDIuMzY4MTdMMTAuNzg5MyAxMi4wODc5VjEwLjk3OTRIMTEuODY4MUwtMS43MDkyNyAxLjMxODY2Qy0yLjEzNDc5IDEuNjE3ODUgLTIuNTIwMzMgMS45NzA4OCAtMi44NTcxMyAyLjM2ODE3WlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0NGMUIyQlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIlBhdGhfOVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjQuMzk1NSA2LjM3MzZMMTMuNzg4MiA2LjM3MzZMMTMuNzg4MiAwLjIxOTcyN0w2LjIxMTcyIDAuMjE5NzI3VjYuMzczNkwtNC4zOTU2IDYuMzczNkwtNC4zOTU2IDE0LjA2NThINi4yMTE3MlYyMC4yMTk3TDEzLjc4ODMgMjAuMjE5N1YxNC4wNjU4SDI0LjM5NTZWNi4zNzM2SDI0LjM5NTVaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRUVFRUVFXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJHcm91cF80XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aF8xMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIuMjEwMiAyMC4xOTNINy42ODE0Nkw3LjY4MTQ2IDAuMzM5NDM2SDEyLjIxMDJMMTIuMjEwMiAyMC4xOTNaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0NGMUIyQlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIlBhdGhfMTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTI0LjI4NjcgMTIuNTU2OUwtNC4zOTUwNyAxMi41NTY5TC00LjM5NTA3IDcuOTc1MjdMMjQuMjg2NyA3Ljk3NTI3VjEyLjU1NjlaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0NGMUIyQlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFbmc7XG4iLCJpbXBvcnQgRW5nbGlzaCBmcm9tICcuL0VuZ2xpc2gnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZW5nbGlzaDogRW5nbGlzaCxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgSWNvbnMgZnJvbSAnLi9sYW5ndWFnZS1pY29ucyc7XG5pbXBvcnQgVHJpYW5nbGVJY29uIGZyb20gJy4vVHJpYW5nbGVJY29uJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICcuL01lbnVJdGVtJztcblxuaW1wb3J0IHsgQm94LCBGbGV4IH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuY29uc3QgbGFuZ3VnZVNob3J0TmFtZXMgPSB7XG4gICAgZW5nbGlzaDogJ0VuZycsXG59O1xuXG5jb25zdCBMYW5ndWFnZVNlbGVjdCA9ICh7IGxhbmd1YWdlIH0pID0+IHtcbiAgICBjb25zdCBDb21wb25lbnQgPSBJY29uc1tsYW5ndWFnZV07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZsZXggYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgPENvbXBvbmVudCAvPlxuICAgICAgICAgICAgPEJveCBweD1cIjVweFwiPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBhY3RpdmU9e2ZhbHNlfT57bGFuZ3VnZVNob3J0TmFtZXNbbGFuZ3VhZ2VdfTwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxUcmlhbmdsZUljb24gLz5cbiAgICAgICAgPC9GbGV4PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZVNlbGVjdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENsb3NlSWNvbiA9IHByb3BzID0+IChcbiAgICA8c3ZnXG4gICAgICAgIHdpZHRoPVwiMThcIlxuICAgICAgICBoZWlnaHQ9XCIxOFwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMTggMThcIlxuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgICA8ZyBpZD1cIkdyb3VwIDEyIENvcHlcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgaWQ9XCJQYXRoIDVcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMTYgMUwxIDE2LjI5ODlcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cIiMyRUI0RkZcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGlkPVwiUGF0aCA1XzJcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMSAxTDE2LjgzNzEgMTYuMjk4OVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiIzJFQjRGRlwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xvc2VJY29uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0IHsgaWNvbkNvbG9yIH0gZnJvbSAnLi9pY29uQ29sb3InXG5cbmNvbnN0IE5GVEljb24gPSAoeyBpc0FjdGl2ZSwgLi4ucmVzdCB9KSA9PiAoXG4gICAgPHN2Z1xuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktdXBjXCJcbiAgICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAgICA8cGF0aCBkPVwiTTMgNC41YS41LjUgMCAwIDEgMSAwdjdhLjUuNSAwIDAgMS0xIDB2LTd6bTIgMGEuNS41IDAgMCAxIDEgMHY3YS41LjUgMCAwIDEtMSAwdi03em0yIDBhLjUuNSAwIDAgMSAxIDB2N2EuNS41IDAgMCAxLTEgMHYtN3ptMiAwYS41LjUgMCAwIDEgLjUtLjVoMWEuNS41IDAgMCAxIC41LjV2N2EuNS41IDAgMCAxLS41LjVoLTFhLjUuNSAwIDAgMS0uNS0uNXYtN3ptMyAwYS41LjUgMCAwIDEgMSAwdjdhLjUuNSAwIDAgMS0xIDB2LTd6XCIgLz5cbiAgICA8L3N2Zz5cbilcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKE5GVEljb24pYFxuICAgICR7aWNvbkNvbG9yfVxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0IHsgaWNvbkNvbG9yIH0gZnJvbSAnLi9pY29uQ29sb3InXG5cbmNvbnN0IEFkZENvdXBvbkljb24gPSAoeyBpc0FjdGl2ZSwgLi4ucmVzdCB9KSA9PiAoXG4gICAgPHN2Z1xuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgd2lkdGg9XCIyMlwiXG4gICAgICAgIGhlaWdodD1cIjIwXCJcbiAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1maWxlLWVhcm1hcmstcGx1c1wiXG4gICAgICAgIHsuLi5yZXN0fVxuICAgID5cbiAgICAgICAgPHBhdGggZD1cIk04IDYuNWEuNS41IDAgMCAxIC41LjV2MS41SDEwYS41LjUgMCAwIDEgMCAxSDguNVYxMWEuNS41IDAgMCAxLTEgMFY5LjVINmEuNS41IDAgMCAxIDAtMWgxLjVWN2EuNS41IDAgMCAxIC41LS41elwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTQgNC41VjE0YTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yVjJhMiAyIDAgMCAxIDItMmg1LjVMMTQgNC41em0tMyAwQTEuNSAxLjUgMCAwIDEgOS41IDNWMUg0YTEgMSAwIDAgMC0xIDF2MTJhMSAxIDAgMCAwIDEgMWg4YTEgMSAwIDAgMCAxLTFWNC41aC0yelwiIC8+XG4gICAgPC9zdmc+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChBZGRDb3Vwb25JY29uKWBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5gXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIExvZ28gfSBmcm9tICcuL0xvZ28nXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1lbnVJdGVtIH0gZnJvbSAnLi9NZW51SXRlbSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVhZGVyTGF5b3V0IH0gZnJvbSAnLi9IZWFkZXJMYXlvdXQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlYXJjaEljb24gfSBmcm9tICcuL1NlYXJjaEljb24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNob3BJY29uIH0gZnJvbSAnLi9TaG9wSWNvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlckljb24gfSBmcm9tICcuL1VzZXJJY29uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2NrSWNvbiB9IGZyb20gJy4vTG9ja0ljb24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFVubG9ja0ljb24gfSBmcm9tICcuL1VubG9ja0ljb24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRyaWFuZ2xlSWNvbiB9IGZyb20gJy4vVHJpYW5nbGVJY29uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSb3VuZE1hcmtJY29uIH0gZnJvbSAnLi9Sb3VuZE1hcmtJY29uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMYW5ndWFnZVNlbGVjdCB9IGZyb20gJy4vTGFuZ3VhZ2VTZWxlY3QnXG5leHBvcnQgeyBkZWZhdWx0IGFzIENsb3NlSWNvbiB9IGZyb20gJy4vQ2xvc2VJY29uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBORlRJY29uIH0gZnJvbSAnLi9ORlRJY29uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBZGRDb3Vwb25JY29uIH0gZnJvbSAnLi9BZGRDb3Vwb25JY29uJ1xuXG4iLCIvKipcbiAqIGRBcHAgY29uZmlnXG4gKlxuICogU2VlZCBpZiBuZWVkZWRcbiAqIGJhcmdhaW4gcmVwYWlyIGhlaWdodCBkZXBlbmQgc2luY2UgZmlyZVxuICogcHJpdmF0ZSBmbG9hdCBpbGxlZ2FsIGhhemFyZCBzYWx0IGFyb3VuZFxuICogZGVjb3JhdGUgYm9zcyBicmlkZ2VcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkQXBwQWRkcmVzczogJzNNdEE4ZGRDUVQ0NEd0TWZVajlYZ3pQZVp2elk1MmtvZktLJyxcbiAgICBuZnRTY3JpcHQ6ICdCQVFBQUFBRVRrOU9SUUlBQUFBRWJtOXVaUVFBQUFBS1pFRndjRkIxWWt0bGVRRUFBQUFnMUZKaGYwQzZPTUtEMjBqWEwxc3owejg1UFBDemVxcSt5STFJQ1M3dDdnc0VBQUFBQkdSQmNIQUpBUUFBQUJSaFpHUnlaWE56Um5KdmJWQjFZbXhwWTB0bGVRQUFBQUVGQUFBQUNtUkJjSEJRZFdKTFpYa0tBUUFBQUE1blpYUlRkSEpwYm1kQ2VVdGxlUUFBQUFJQUFBQUhZV1JrY21WemN3QUFBQU5yWlhrRUFBQUFCeVJ0WVhSamFEQUpBQVFkQUFBQUFnVUFBQUFIWVdSa2NtVnpjd1VBQUFBRGEyVjVBd2tBQUFFQUFBQUNCUUFBQUFja2JXRjBZMmd3QWdBQUFBWlRkSEpwYm1jRUFBQUFBV0VGQUFBQUJ5UnRZWFJqYURBRkFBQUFBV0VGQUFBQUJFNVBUa1VLQVFBQUFBOW5aWFJKYm5SbFoyVnlRbmxMWlhrQUFBQUNBQUFBQjJGa1pISmxjM01BQUFBRGEyVjVCQUFBQUFja2JXRjBZMmd3Q1FBRUdnQUFBQUlGQUFBQUIyRmtaSEpsYzNNRkFBQUFBMnRsZVFNSkFBQUJBQUFBQWdVQUFBQUhKRzFoZEdOb01BSUFBQUFEU1c1MEJBQUFBQUZoQlFBQUFBY2tiV0YwWTJnd0JRQUFBQUZoQUFBQUFBQUFBQUFBQ2dFQUFBQU1aMlYwUzJWNVEyOTFjRzl1QUFBQUFRQUFBQWRoYzNObGRFbGtDUUFCTEFBQUFBSUNBQUFBQjJOdmRYQnZibDhGQUFBQUIyRnpjMlYwU1dRS0FRQUFBQkJuWlhSTFpYbERiM1Z3YjI1SmRHVnRBQUFBQVFBQUFBWmpiM1Z3YjI0SkFBRXNBQUFBQWdVQUFBQUdZMjkxY0c5dUFnQUFBQVZmYVhSbGJRb0JBQUFBRW1kbGRFdGxlVWwwWlcxVGRYQndiR2xsY2dBQUFBRUFBQUFFYVhSbGJRa0FBU3dBQUFBQ0JRQUFBQVJwZEdWdEFnQUFBQVpmYjNkdVpYSUtBUUFBQUJSblpYUkxaWGxKZEdWdFJYaHdhWEpsUkdGMFpRQUFBQUVBQUFBRWFYUmxiUWtBQVN3QUFBQUNCUUFBQUFScGRHVnRBZ0FBQUF0ZlpYaHdhWEpsWkdGMFpRb0JBQUFBQjJkbGRFbDBaVzBBQUFBQkFBQUFCbU52ZFhCdmJna0JBQUFBRG1kbGRGTjBjbWx1WjBKNVMyVjVBQUFBQWdVQUFBQUVaRUZ3Y0FrQkFBQUFFR2RsZEV0bGVVTnZkWEJ2YmtsMFpXMEFBQUFCQlFBQUFBWmpiM1Z3YjI0S0FRQUFBQTluWlhSSmRHVnRVM1Z3Y0d4cFpYSUFBQUFCQUFBQUJHbDBaVzBKQVFBQUFBNW5aWFJUZEhKcGJtZENlVXRsZVFBQUFBSUZBQUFBQkdSQmNIQUpBUUFBQUJKblpYUkxaWGxKZEdWdFUzVndjR3hwWlhJQUFBQUJCUUFBQUFScGRHVnRDZ0VBQUFBUloyVjBTWFJsYlVWNGNHbHlaVVJoZEdVQUFBQUJBQUFBQkdsMFpXMEpBUUFBQUE5blpYUkpiblJsWjJWeVFubExaWGtBQUFBQ0JRQUFBQVJrUVhCd0NRRUFBQUFTWjJWMFMyVjVTWFJsYlZOMWNIQnNhV1Z5QUFBQUFRVUFBQUFFYVhSbGJRUUFBQUFHWTI5MWNHOXVDUUVBQUFBTVoyVjBTMlY1UTI5MWNHOXVBQUFBQVFrQUFsZ0FBQUFCQ0FVQUFBQUVkR2hwY3dBQUFBSnBaQVFBQUFBRWFYUmxiUWtCQUFBQUIyZGxkRWwwWlcwQUFBQUJCUUFBQUFaamIzVndiMjRFQUFBQUJtVjRjR2x5WlFrQkFBQUFFV2RsZEVsMFpXMUZlSEJwY21WRVlYUmxBQUFBQVFVQUFBQUVhWFJsYlFRQUFBQUljM1Z3Y0d4cFpYSUpBUUFBQUE5blpYUkpkR1Z0VTNWd2NHeHBaWElBQUFBQkJRQUFBQVJwZEdWdEJBQUFBQWxwYzBWNGNHbHlaV1FKQUFCbkFBQUFBZ1VBQUFBR1pYaHdhWEpsQ0FVQUFBQUNkSGdBQUFBSmRHbHRaWE4wWVcxd0NnRUFBQUFYWTJobFkydEJibVJCWTJObGNIUlRaWFJUWTNKcGNIUUFBQUFCQUFBQUFXVUpBQUFBQUFBQUFnZ0ZBQUFBQVdVQUFBQUdjMlZ1WkdWeUJRQUFBQVJrUVhCd0NnRUFBQUFTWTJobFkydEJibVJCWTJObGNIUkNkWEp1QUFBQUFRQUFBQUZsQXdNSkFBQUFBQUFBQWdnRkFBQUFBV1VBQUFBR2MyVnVaR1Z5QlFBQUFBUmtRWEJ3QmdrQUFBQUFBQUFDQ0FVQUFBQUJaUUFBQUFaelpXNWtaWElKQUFRbUFBQUFBUVVBQUFBSWMzVndjR3hwWlhJR0NRQUFBZ0FBQUFFQ0FBQUFLMDl1YkhrZ1kyOTFjRzl1SjNNZ2MzVndjR3hwWlhJZ1kyRnVJR0oxY200Z2RHaHBjeUJqYjNWd2IyNEtBUUFBQUJaamFHVmphMEZ1WkVGalkyVndkRlJ5WVc1elptVnlBQUFBQVFBQUFBRmxBd01KQUFBQUFBQUFBZ2dGQUFBQUFXVUFBQUFHYzJWdVpHVnlCUUFBQUFSa1FYQndCZ2tBQUFBQUFBQUNDQVVBQUFBQlpRQUFBQVp6Wlc1a1pYSUpBQVFtQUFBQUFRVUFBQUFJYzNWd2NHeHBaWElHQXdrQUFBQUFBQUFDQ0FVQUFBQUJaUUFBQUFseVpXTnBjR2xsYm5RSkFBUW1BQUFBQVFVQUFBQUljM1Z3Y0d4cFpYSUdDUUFBQWdBQUFBRUpBQUVzQUFBQUFnSUFBQUF1V1c5MUlHTmhiaUIwY21GdWMyWmxjaUIwYUdseklHTnZkWEJ2YmlCdmJteDVJSFJ2SUhOMWNIQnNhV1Z5SUFVQUFBQUljM1Z3Y0d4cFpYSUtBUUFBQUJwamFHVmphMEZ1WkVGalkyVndkRWx1ZG05clpWTmpjbWx3ZEFBQUFBRUFBQUFCWlFNRENRQUFBQUFBQUFJSUJRQUFBQUZsQUFBQUJuTmxibVJsY2dVQUFBQUVaRUZ3Y0FZSkFBQUFBQUFBQWdnRkFBQUFBV1VBQUFBR2MyVnVaR1Z5Q1FBRUpnQUFBQUVGQUFBQUNITjFjSEJzYVdWeUJnTUpBQUFBQUFBQUFnZ0ZBQUFBQVdVQUFBQUdjMlZ1WkdWeUNRQUVKZ0FBQUFFRkFBQUFDSE4xY0hCc2FXVnlCZ2tBQUFJQUFBQUJBZ0FBQURkWmIzVWdZMkZ1SUc5dWJIa2dhVzUyYjJ0bElITmpjbWx3ZENCdlppQkRiM1Z3YjI0Z1FtRjZZV0Z5SUUxaGNtdGxkQ0JrUVhCd0F3a0FBQUFBQUFBQ0JRQUFBQVJwZEdWdEJRQUFBQVJPVDA1RkNRQUFBZ0FBQUFFSkFBRXNBQUFBQWdJQUFBQWFTWFJsYlNCdWIzUWdabTkxYm1RZ1ptOXlJR052ZFhCdmJpQUZBQUFBQm1OdmRYQnZiZ01KQUFBQUFBQUFBZ1VBQUFBSWMzVndjR3hwWlhJRkFBQUFCRTVQVGtVSkFBQUNBQUFBQVFrQUFTd0FBQUFDQ1FBQkxBQUFBQUlDQUFBQUVsTjFjSEJzYVdWeUlHWnZjaUJwZEdWdElBVUFBQUFFYVhSbGJRSUFBQUFLSUc1dmRDQm1iM1Z1WkFNRkFBQUFDV2x6Ulhod2FYSmxaQVFBQUFBSEpHMWhkR05vTUFVQUFBQUNkSGdEQ1FBQUFRQUFBQUlGQUFBQUJ5UnRZWFJqYURBQ0FBQUFHVk5sZEVGemMyVjBVMk55YVhCMFZISmhibk5oWTNScGIyNEVBQUFBQVdVRkFBQUFCeVJ0WVhSamFEQUpBUUFBQUJkamFHVmphMEZ1WkVGalkyVndkRk5sZEZOamNtbHdkQUFBQUFFRkFBQUFBV1VEQ1FBQUFRQUFBQUlGQUFBQUJ5UnRZWFJqYURBQ0FBQUFEMEoxY201VWNtRnVjMkZqZEdsdmJnUUFBQUFCWlFVQUFBQUhKRzFoZEdOb01BWUpBQUFDQUFBQUFRSUFBQUJNVkdocGN5QmpiM1Z3YjI0Z2FHRnpJR1Y0Y0dseVpXUWdZVzVrSUdOaGJpQnZibXg1SUdKbElHSjFjbTVsWkNCMGJ5QnlaVzF2ZG1VZ2FYUWdabkp2YlNCNWIzVnlJSGRoYkd4bGRBUUFBQUFISkcxaGRHTm9NQVVBQUFBQ2RIZ0RDUUFBQVFBQUFBSUZBQUFBQnlSdFlYUmphREFDQUFBQUdWTmxkRUZ6YzJWMFUyTnlhWEIwVkhKaGJuTmhZM1JwYjI0RUFBQUFBV1VGQUFBQUJ5UnRZWFJqYURBSkFRQUFBQmRqYUdWamEwRnVaRUZqWTJWd2RGTmxkRk5qY21sd2RBQUFBQUVGQUFBQUFXVURDUUFBQVFBQUFBSUZBQUFBQnlSdFlYUmphREFDQUFBQUQwSjFjbTVVY21GdWMyRmpkR2x2YmdRQUFBQUJaUVVBQUFBSEpHMWhkR05vTUFrQkFBQUFFbU5vWldOclFXNWtRV05qWlhCMFFuVnliZ0FBQUFFRkFBQUFBV1VEQ1FBQUFRQUFBQUlGQUFBQUJ5UnRZWFJqYURBQ0FBQUFFMVJ5WVc1elptVnlWSEpoYm5OaFkzUnBiMjRFQUFBQUFXVUZBQUFBQnlSdFlYUmphREFKQVFBQUFCWmphR1ZqYTBGdVpFRmpZMlZ3ZEZSeVlXNXpabVZ5QUFBQUFRVUFBQUFCWlFNSkFBQUJBQUFBQWdVQUFBQUhKRzFoZEdOb01BSUFBQUFYU1c1MmIydGxVMk55YVhCMFZISmhibk5oWTNScGIyNEVBQUFBQVdVRkFBQUFCeVJ0WVhSamFEQUpBUUFBQUJwamFHVmphMEZ1WkVGalkyVndkRWx1ZG05clpWTmpjbWx3ZEFBQUFBRUZBQUFBQVdVRENRQUFBQUFBQUFJSUJRQUFBQUowZUFBQUFBWnpaVzVrWlhJSkFBUW1BQUFBQVFVQUFBQUljM1Z3Y0d4cFpYSUpBQUFDQUFBQUFRSUFBQUJYVkdocGN5QmpiM1Z3YjI0Z1kyRnVJRzl1YkhrZ1ltVWdkWE5sSUhSdklITjFjSEJzYVdWeUlHbHVJR0Z1SUdWNFkyaGhibWRsSUc5bUlHZHZiMlFnYjNJZ2MyVnlkbWxqWlNCM2FYUm9JR1JwYzJOdmRXNTBDUUFBQWdBQUFBRUNBQUFBTWxSb2FYTWdZMjkxY0c5dUlHTmhiaUJpWlNCaWRYSnVaV1FnZEc4Z1pXNWhZbXhsSUhkcGRHaGtjbUYzSUdaMWJtUnpoVW5JdUE9PScsXG4gICAgZGVmYXVsdE5ldHdvcms6IHtcbiAgICAgICAgY29kZTogJ1QnLFxuICAgICAgICBtYXRjaGVyOiAnaHR0cHM6Ly9tYXRjaGVyLXRlc3RuZXQud2F2ZXNub2Rlcy5jb20vJyxcbiAgICAgICAgc2VydmVyOiAnaHR0cHM6Ly9ub2Rlcy10ZXN0bmV0LndhdmVzbm9kZXMuY29tLycsXG4gICAgfSxcbiAgICBjaGFpbklkOiA4NCxcbiAgICBuZXR3b3JrSWQ6ICd0ZXN0bmV0Jyxcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IHsgc2hhMjU2LCBiYXNlNThlbmNvZGUgfSBmcm9tICdAd2F2ZXMvd2F2ZXMtY3J5cHRvJ1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uLy4uL2NvbmZpZydcblxuY29uc3QgREFQUF9BRERSRVNTID0gY29uZmlnLmRBcHBBZGRyZXNzXG5cbmNvbnN0IGRhdGFMaXN0VG9PYmogPSAobGlzdCkgPT4ge1xuICAgIGNvbnN0IHJ2ID0ge31cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHJ2W2xpc3RbaV0ua2V5XSA9IGxpc3RbaV1cbiAgICByZXR1cm4gcnZcbn1cblxuZXhwb3J0IGNvbnN0IGFzeW5jRmlsdGVyID0gYXN5bmMgKGFyciwgZm4pID0+IHtcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoYXJyLm1hcChmbikpXG4gICAgcmV0dXJuIGFyci5maWx0ZXIoKF92LCBpbmRleCkgPT4gcmVzdWx0c1tpbmRleF0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhQnlLZXkgPSAoa2V5KSA9PiB7XG4gICAgbGV0IHZhbCA9IG51bGxcbiAgICBpZiAod2luZG93LmRBcHBEYXRhICYmIHdpbmRvdy5kQXBwRGF0YVtrZXldKSB7XG4gICAgICAgIHN3aXRjaCAod2luZG93LmRBcHBEYXRhW2tleV0udHlwZSkge1xuICAgICAgICBjYXNlICdpbnRlZ2VyJzpcbiAgICAgICAgICAgIHZhbCA9IHBhcnNlSW50KHdpbmRvdy5kQXBwRGF0YVtrZXldLnZhbHVlLCAxMClcbiAgICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICB2YWwgPSBCb29sZWFuKHdpbmRvdy5kQXBwRGF0YVtrZXldLnZhbHVlKVxuICAgICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFsID0gd2luZG93LmRBcHBEYXRhW2tleV0udmFsdWVcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbFxufVxuXG5leHBvcnQgY29uc3Qgc2hvcnRBZGRyZXNzID0gYWRkciA9PiBgJHthZGRyPy5zdWJzdHIoMCwgNil9Li4uJHthZGRyPy5zdWJzdHIoYWRkcj8ubGVuZ3RoIC0gNSwgNCl9YFxuXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlLCBvcHRpb24gPSB7IGxvY2FsZXM6ICdlbi1JTicgfSkgPT4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcob3B0aW9uLmxvY2FsZXMpXG5cbmV4cG9ydCBjb25zdCBjb2xvclN0YXR1cyA9IHN0YXR1cyA9PiAoXG4gICAgc3RhdHVzID09PSAnYXBwcm92YWwnID8gJ2RhcmsnXG4gICAgICAgIDogc3RhdHVzID09PSAncmVqZWN0ZWQnID8gJ2RhbmdlcidcbiAgICAgICAgICAgIDogc3RhdHVzID09PSAnYWNjZXB0ZWQnID8gJ3N1Y2Nlc3MnXG4gICAgICAgICAgICAgICAgOiBzdGF0dXMgPT09ICdhY3RpdmUnID8gJ3N1Y2Nlc3MnXG4gICAgICAgICAgICAgICAgICAgIDogc3RhdHVzID09PSAndXNlZCcgPyAnc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBzdGF0dXMgPT09ICdidXJuZWQnID8gJ2RhcmsnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzdGF0dXMgPT09ICdleHBpcmVkJyA/ICd3YXJuaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdwcmltYXJ5JylcblxuZXhwb3J0IGNvbnN0IGdldFN1cHBsaWVyRGF0YSA9IChhZGRyZXNzKSA9PiB7XG4gICAgbGV0IHN1cHBsaWVyID0gbnVsbFxuICAgIHRyeSB7XG4gICAgICAgIHN1cHBsaWVyID0gSlNPTi5wYXJzZShnZXREYXRhQnlLZXkoYCR7YWRkcmVzc31fYWNjb3VudGApKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihlcnJvci5tZXNzYWdlKVxuICAgIH1cbiAgICByZXR1cm4gc3VwcGxpZXJcbn1cblxuZXhwb3J0IGNvbnN0IGZvcm1hdE51bWJlciA9IChhbXQsIG9wdGlvbiA9IHsgbG9jYWxlczogJ2VuLUlOJywgZGVjaW1hbHM6IDggfSkgPT4ge1xuICAgIGNvbnN0IHsgbG9jYWxlcywgZGVjaW1hbHMgfSA9IG9wdGlvblxuICAgIGNvbnN0IGRjID0gMTAgKiogZGVjaW1hbHNcbiAgICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxvY2FsZXMsIHtcbiAgICAgICAgbWF4aW11bVNpZ25pZmljYW50RGlnaXRzOiBkZWNpbWFscyArIDYsXG4gICAgfSkuZm9ybWF0KGFtdCAvIGRjKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0Vm90aW5nID0gKGl0ZW0sIHVzZXIpID0+IHtcbiAgICBjb25zdCB2b3RlUm91bmQgPSBnZXREYXRhQnlLZXkoYCR7aXRlbS5pZH1fdm90ZXJvdW5kYCkgfHwgMFxuICAgIGNvbnN0IHZvdGVLZXkgPSBgdm90ZSR7aXRlbS5pZH1bJHt2b3RlUm91bmR9XWBcbiAgICBjb25zdCBoYXNQdXJjaGFzZWQgPSB1c2VyICYmIGdldERhdGFCeUtleShgJHt1c2VyfV8ke2l0ZW0uaWR9X3B1cmNoYXNlZGApXG5cbiAgICBjb25zdCB2b3RpbmcgPSB7XG4gICAgICAgIHJvdW5kOiB2b3RlUm91bmQsXG4gICAgICAgIHN0YXR1czogZ2V0RGF0YUJ5S2V5KGAke3ZvdGVLZXl9X3N0YXR1c2ApIHx8ICd2b3RpbmcnLFxuICAgICAgICBjb21taXQ6IGhhc1B1cmNoYXNlZCA/IGdldERhdGFCeUtleShgJHt2b3RlS2V5fV8ke3VzZXJ9X2NvbW1pdGApIDogbnVsbCxcbiAgICAgICAgcmV2ZWFsOiBoYXNQdXJjaGFzZWQgPyBnZXREYXRhQnlLZXkoYCR7dm90ZUtleX1fJHt1c2VyfV9yZXZlYWxgKSA6IG51bGwsXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4udm90aW5nLFxuICAgICAgICBjYW5Db21taXQ6IGhhc1B1cmNoYXNlZCAmJiAhdm90aW5nPy5jb21taXQgJiYgdm90aW5nPy5zdGF0dXMgPT09ICd2b3RpbmcnLFxuICAgICAgICBjYW5SZXZlYWw6IHZvdGluZz8uY29tbWl0ICYmICF2b3Rpbmc/LnJldmVhbCAmJiB2b3Rpbmc/LnN0YXR1cyA9PT0gJ3JldmVhbCcsXG4gICAgfVxufVxuXG5jb25zdCBnZXRTdXBwbGllckl0ZW1JZHMgPSBhZGRyZXNzID0+IGFzeW5jIChkYXRhID0gW10pID0+IHtcbiAgICBjb25zdCBpZHMgPSBbXVxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtID0ga2V5Lm1hdGNoKC9eKGl0ZW1fW15fXSspX293bmVyJC8pXG4gICAgICAgICAgICBpZiAobSAmJiBtLmxlbmd0aCA9PT0gMiAmJiBkYXRhW2tleV0udmFsdWUgPT09IGFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICBpZHMucHVzaChtWzFdKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gaWRzXG59XG5cbmNvbnN0IGdldFN1cHBsaWVyUHVyY2hhc2VJZHMgPSBhZGRyZXNzID0+IGFzeW5jIChkYXRhID0gW10pID0+IHtcbiAgICBjb25zdCBpZHMgPSBbXVxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtID0ga2V5Lm1hdGNoKC9eKHB1cmNoYXNlX1teX10rKV9zdXBwbGllciQvKVxuICAgICAgICAgICAgaWYgKG0gJiYgbS5sZW5ndGggPT09IDIgJiYgZGF0YVtrZXldLnZhbHVlID09PSBhZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgaWRzLnB1c2gobVsxXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGlkc1xufVxuXG5jb25zdCBnZXRVc2VyUHVyY2hhc2VJZHMgPSBhZGRyZXNzID0+IGFzeW5jIChkYXRhID0gW10pID0+IHtcbiAgICBjb25zdCBpZHMgPSBbXVxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtID0ga2V5Lm1hdGNoKC9eKHB1cmNoYXNlX1teX10rKV91c2VyJC8pXG4gICAgICAgICAgICBpZiAobSAmJiBtLmxlbmd0aCA9PT0gMiAmJiBkYXRhW2tleV0udmFsdWUgPT09IGFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICBpZHMucHVzaChtWzFdKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gaWRzXG59XG5cbmNvbnN0IGdldEl0ZW1JZHMgPSBhc3luYyAoZGF0YSA9IFtdKSA9PiB7XG4gICAgY29uc3QgaWRzID0gW11cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbSA9IGtleS5tYXRjaCgvXihpdGVtX1teX10rKV9vd25lciQvKVxuICAgICAgICAgICAgaWYgKG0gJiYgbS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICBpZHMucHVzaChtWzFdKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gaWRzXG59XG5cbmNvbnN0IHByZXBhcmVJdGVtcyA9IGFzeW5jIChmbkdldElkcywgZGF0YSA9IG51bGwpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gW11cbiAgICBkYXRhID8/PSB3aW5kb3cuZEFwcERhdGFcbiAgICBpZiAoZGF0YSkge1xuICAgICAgICBjb25zdCBpZHMgPSBhd2FpdCBmbkdldElkcyhkYXRhKVxuICAgICAgICBpZHMuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtID0geyBpZCwgY291cG9uVGVybTogJ1dBVkVTJyB9XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IGAke2lkfV90aXRsZWApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGl0bGUgPSBkYXRhW2tleV0udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IGAke2lkfV9wcmljZWApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY291cG9uUHJpY2UgPSBwYXJzZUludChkYXRhW2tleV0udmFsdWUsIDEwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gYCR7aWR9X2ZlYXR1cmVkYCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pc0ZlYXR1cmVkID0gQm9vbGVhbihkYXRhW2tleV0udmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBgJHtpZH1fZXhwaXJlZGF0ZWApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShwYXJzZUludChkYXRhW2tleV0udmFsdWUsIDEwKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHllID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuJywgeyB5ZWFyOiAnbnVtZXJpYycgfSkuZm9ybWF0KGQpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbicsIHsgbW9udGg6ICcyLWRpZ2l0JyB9KS5mb3JtYXQoZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuJywgeyBkYXk6ICcyLWRpZ2l0JyB9KS5mb3JtYXQoZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZXhwaXJhdGlvbkRhdGUgPSBgJHt5ZX0tJHttZX0tJHtkZX1gXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBgJHtpZH1fZGF0YWApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1EYXRhID0gSlNPTi5wYXJzZShkYXRhW2tleV0udmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YS5pbWFnZSA9IGl0ZW1EYXRhLmltYWdlID8gaXRlbURhdGEuaW1hZ2UgOiAnaHR0cHM6Ly9jZG4xLnNhdmVwaWNlLnJ1L3VwbG9hZHMvMjAxOS82LzUvM2VhZjFmOTlhMzJmODA0NTg0N2FjOWYwMmViODEzNDQtZnVsbC5wbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YS5uZXdQcmljZSA9IHBhcnNlSW50KGl0ZW1EYXRhLm5ld1ByaWNlLCAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhLm9sZFByaWNlID0gcGFyc2VJbnQoaXRlbURhdGEub2xkUHJpY2UsIDEwKVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURhdGEuZGlzY291bnQgPSBpdGVtRGF0YS5vbGRQcmljZSA+IDAgPyBwYXJzZUludCgxMDAgLSAoaXRlbURhdGEubmV3UHJpY2UgKiAxMDAgLyBpdGVtRGF0YS5vbGRQcmljZSksIDEwKSA6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB7IC4uLml0ZW1EYXRhLCAuLi5pdGVtIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBsaXN0LnB1c2goaXRlbSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKGxpc3QubWFwKGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUuaXNFeHBpcmVkID0gZS5leHBpcmF0aW9uRGF0ZSA/IERhdGUucGFyc2UoZS5leHBpcmF0aW9uRGF0ZSkgPD0gRGF0ZS5ub3coKSA6IGZhbHNlXG4gICAgICAgIHJldHVybiBlXG4gICAgfSkpXG59XG5cbmNvbnN0IHByZXBhcmVQdXJjaGFzZXMgPSBhc3luYyAoZm5HZXRJZHMpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gW11cbiAgICBjb25zdCBkYXRhID0gd2luZG93LmRBcHBEYXRhXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgICAgY29uc3QgaWRzID0gYXdhaXQgZm5HZXRJZHMoZGF0YSlcbiAgICAgICAgaWRzLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbCA9IHsgaWQsIHZvdGluZzoge30gfVxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKGlkKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBgJHtpZH1fc3RhdHVzYCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuc3RhdHVzID0gZGF0YVtrZXldLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBgJHtpZH1faXRlbWApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLml0ZW0gPSBkYXRhW2tleV0udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IGAke2lkfV9zdXBwbGllcmApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnN1cHBsaWVyID0gZGF0YVtrZXldLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zdXBwbGllckRhdGEgPSBnZXRTdXBwbGllckRhdGEoZWwuc3VwcGxpZXIpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBgJHtpZH1fdXNlcmApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnVzZXIgPSBkYXRhW2tleV0udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IGAke2lkfV9hc3NldElkYCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuYXNzZXRJZCA9IGRhdGFba2V5XS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gYCR7aWR9X2Z1bmRwYWlkYCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuaXNGdW5kUGFpZCA9IEJvb2xlYW4oZGF0YVtrZXldLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gYCR7aWR9X2Ftb3VudGApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFtb3VudCA9IHBhcnNlSW50KGRhdGFba2V5XS52YWx1ZSwgMTApXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBgJHtpZH1fdGltZXN0YW1wYCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwudGltZXN0YW1wID0gcGFyc2VJbnQoZGF0YVtrZXldLnZhbHVlLCAxMClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBsaXN0LnB1c2goZWwpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLmFsbChsaXN0Lm1hcChhc3luYyAoZSkgPT4ge1xuICAgICAgICAvLyBzZXQgaXRlbVxuICAgICAgICBlLml0ZW0gPSBhd2FpdCBnZXRJdGVtQnlLZXkoZS5pdGVtKVxuXG4gICAgICAgIC8vIHNldCBkZWZhdWx0IGNvdXBvbiBzdGF0dXNcbiAgICAgICAgZS5jb3Vwb25TdGF0dXMgPSAnYWN0aXZlJ1xuXG4gICAgICAgIC8vIGlzIGV4cGlyZWRcbiAgICAgICAgZS5pc0V4cGlyZWQgPSBlLml0ZW0/LmlzRXhwaXJlZCA/PyBmYWxzZVxuICAgICAgICBlLmNvdXBvblN0YXR1cyA9IGUuaXNFeHBpcmVkID8gJ2V4cGlyZWQnIDogZS5jb3Vwb25TdGF0dXNcblxuICAgICAgICAvLyBpcyBCdXJuZWRcbiAgICAgICAgaWYgKGUuYXNzZXRJZCkge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLXRlc3RuZXQud2F2ZXNwbGF0Zm9ybS5jb20vdjAvYXNzZXRzLyR7ZS5hc3NldElkfWBcbiAgICAgICAgICAgIGNvbnN0IHIgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gci5vayAmJiBhd2FpdCByLmpzb24oKVxuICAgICAgICAgICAgZS5pc0J1cm5lZCA9IHIub2sgJiYgYm9keS5xdWFudGl0eSA9PT0gMFxuICAgICAgICAgICAgZS5jb3Vwb25TdGF0dXMgPSBlLmlzQnVybmVkID8gJ2J1cm5lZCcgOiBlLmNvdXBvblN0YXR1c1xuICAgICAgICB9XG5cbiAgICAgICAgZS5pc093bmVkID0gZmFsc2VcbiAgICAgICAgcmV0dXJuIGVcbiAgICB9KSlcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoSXRlbXMgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5kQXBwRGF0YSkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJlcGFyZUl0ZW1zKGdldEl0ZW1JZHMpXG4gICAgfVxuICAgIHJldHVybiBhd2FpdCBhcGlGZXRjaEl0ZW1zKClcbn1cblxuY29uc3QgYXBpRmV0Y2hJdGVtcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9ub2Rlcy10ZXN0bmV0LndhdmVzbm9kZXMuY29tL2FkZHJlc3Nlcy9kYXRhLyR7REFQUF9BRERSRVNTfT9tYXRjaGVzPWl0ZW1fLiUyQWApXG4gICAgY29uc3QgZGF0YSA9IHJlcy5vayA/IGF3YWl0IHJlcy5qc29uKCkgOiBbXVxuICAgIHJldHVybiBhd2FpdCBwcmVwYXJlSXRlbXMoZ2V0SXRlbUlkcywgZGF0YUxpc3RUb09iaihkYXRhKSlcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoVXNlclB1cmNoYXNlcyA9IGFzeW5jIChhZGRyZXNzKSA9PiB7XG4gICAgbGV0IGxpc3QgPSBhd2FpdCBwcmVwYXJlUHVyY2hhc2VzKGdldFVzZXJQdXJjaGFzZUlkcyhhZGRyZXNzKSlcbiAgICBsaXN0ID0gYXdhaXQgUHJvbWlzZS5hbGwobGlzdC5tYXAoYXN5bmMgKGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBhc3NldElkIH0gPSBlXG4gICAgICAgIGlmICh0eXBlb2YgYXNzZXRJZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSBudWxsOyBsZXQgciA9IG51bGw7IGxldCBib2R5ID0gbnVsbFxuXG4gICAgICAgICAgICAvLyBpcyBvd25lZCBieSB1c2VyXG4gICAgICAgICAgICBpZiAoIWUuaXNCdXJuZWQpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSBgaHR0cHM6Ly9ub2Rlcy10ZXN0bmV0LndhdmVzbm9kZXMuY29tL2Fzc2V0cy9iYWxhbmNlLyR7YWRkcmVzc30vJHthc3NldElkfWBcbiAgICAgICAgICAgICAgICByID0gYXdhaXQgZmV0Y2godXJsKVxuICAgICAgICAgICAgICAgIGJvZHkgPSByLm9rICYmIGF3YWl0IHIuanNvbigpXG4gICAgICAgICAgICAgICAgZS5pc093bmVkID0gci5vayAmJiBib2R5LmJhbGFuY2UgPiAwXG5cbiAgICAgICAgICAgICAgICAvLyBzdGF0dXMgaXMgYWN0aXZlIGlmIG93bmVkXG4gICAgICAgICAgICAgICAgZS5jb3Vwb25TdGF0dXMgPSBlLmlzT3duZWQgJiYgIWUuaXNFeHBpcmVkID8gJ2FjdGl2ZScgOiBlLmNvdXBvblN0YXR1c1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpcyBVc2VkXG4gICAgICAgICAgICB1cmwgPSBgaHR0cHM6Ly9hcGktdGVzdG5ldC53YXZlc3BsYXRmb3JtLmNvbS92MC90cmFuc2FjdGlvbnMvdHJhbnNmZXI/c2VuZGVyPSR7ZS51c2VyfSZhc3NldElkPSR7YXNzZXRJZH0mbGltaXQ9MWBcbiAgICAgICAgICAgIHIgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgICAgICAgICBib2R5ID0gci5vayAmJiBhd2FpdCByLmpzb24oKVxuICAgICAgICAgICAgZS5pc1VzZWQgPSByLm9rICYmIGJvZHkuZGF0YS5sZW5ndGggPiAwXG4gICAgICAgICAgICBlLmlzT3duZWQgPSBlLmlzT3duZWQgJiYgIWUuaXNVc2VkXG5cbiAgICAgICAgICAgIC8vIHN0YXR1cyBpcyB1c2UgaWYgdXNlZFxuICAgICAgICAgICAgZS5jb3Vwb25TdGF0dXMgPSBlLmlzVXNlZCA/ICd1c2VkJyA6IGUuY291cG9uU3RhdHVzXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVcbiAgICB9KSlcblxuICAgIHJldHVybiBsaXN0XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJDb3Vwb25zID0gYXN5bmMgKGFkZHJlc3MpID0+IHtcbiAgICBsZXQgbGlzdCA9IGF3YWl0IGZldGNoVXNlclB1cmNoYXNlcyhhZGRyZXNzKVxuICAgIGxpc3QgPSBhd2FpdCBQcm9taXNlLmFsbChsaXN0Lm1hcChhc3luYyAoZSkgPT4ge1xuICAgICAgICBpZiAoIWUuaXNFeHBpcmVkKSB7XG4gICAgICAgICAgICBjb25zdCB7IGl0ZW0sIHVzZXIgfSA9IGVcbiAgICAgICAgICAgIGUudm90aW5nID0gZ2V0Vm90aW5nKGl0ZW0sIHVzZXIpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVcbiAgICB9KSlcbiAgICByZXR1cm4gbGlzdC5maWx0ZXIoZSA9PiB0eXBlb2YgZS5hc3NldElkID09PSAnc3RyaW5nJylcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoVXNlckFjdGl2ZUNvdXBvbnMgPSBhc3luYyAoYWRkcmVzcykgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBmZXRjaFVzZXJDb3Vwb25zKGFkZHJlc3MpXG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKGUgPT4gZS5pc093bmVkICYmICFlLmlzRXhwaXJlZClcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoVXNlclVzZWRDb3Vwb25zID0gYXN5bmMgKGFkZHJlc3MpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gYXdhaXQgZmV0Y2hVc2VyQ291cG9ucyhhZGRyZXNzKVxuICAgIHJldHVybiBsaXN0LmZpbHRlcihlID0+IGUuaXNVc2VkKVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VyRXhwaXJlZENvdXBvbnMgPSBhc3luYyAoYWRkcmVzcykgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBmZXRjaFVzZXJDb3Vwb25zKGFkZHJlc3MpXG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKGUgPT4gZS5pc093bmVkICYmIGUuaXNFeHBpcmVkKVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hTdXBwbGllckl0ZW1zID0gYXN5bmMgYWRkcmVzcyA9PlxuICAgIGF3YWl0IHByZXBhcmVJdGVtcyhnZXRTdXBwbGllckl0ZW1JZHMoYWRkcmVzcykpXG5cbmV4cG9ydCBjb25zdCBmZXRjaFN1cHBsaWVyUHVyY2hhc2VzID0gYXN5bmMgKGFkZHJlc3MpID0+IHtcbiAgICBsZXQgbGlzdCA9IGF3YWl0IHByZXBhcmVQdXJjaGFzZXMoZ2V0U3VwcGxpZXJQdXJjaGFzZUlkcyhhZGRyZXNzKSlcbiAgICBsaXN0ID0gYXdhaXQgUHJvbWlzZS5hbGwobGlzdC5tYXAoYXN5bmMgKGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBhc3NldElkIH0gPSBlXG4gICAgICAgIGlmIChhc3NldElkKSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gbnVsbDsgbGV0IHIgPSBudWxsOyBsZXQgYm9keSA9IG51bGxcblxuICAgICAgICAgICAgLy8gaXMgUmVjZWl2ZWRcbiAgICAgICAgICAgIHVybCA9IGBodHRwczovL2FwaS10ZXN0bmV0LndhdmVzcGxhdGZvcm0uY29tL3YwL3RyYW5zYWN0aW9ucy90cmFuc2Zlcj9yZWNpcGllbnQ9JHtlLnN1cHBsaWVyfSZhc3NldElkPSR7YXNzZXRJZH0mbGltaXQ9MWBcbiAgICAgICAgICAgIHIgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgICAgICAgICBib2R5ID0gci5vayAmJiBhd2FpdCByLmpzb24oKVxuICAgICAgICAgICAgZS5pc1JlY2VpdmVkID0gci5vayAmJiBib2R5LmRhdGEubGVuZ3RoID4gMFxuICAgICAgICAgICAgZS5jb3Vwb25TdGF0dXMgPSBlLmlzUmVjZWl2ZWQgPyAndXNlZCcgOiBlLmNvdXBvblN0YXR1c1xuXG4gICAgICAgICAgICAvLyBpcyBPd25lZFxuICAgICAgICAgICAgaWYgKGUuaXNSZWNlaXZlZCAmJiAhZS5pc0J1cm5lZCkge1xuICAgICAgICAgICAgICAgIHVybCA9IGBodHRwczovL25vZGVzLXRlc3RuZXQud2F2ZXNub2Rlcy5jb20vYXNzZXRzL2JhbGFuY2UvJHthZGRyZXNzfS8ke2Fzc2V0SWR9YFxuICAgICAgICAgICAgICAgIHIgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgICAgICAgICAgICAgYm9keSA9IHIub2sgJiYgYXdhaXQgci5qc29uKClcbiAgICAgICAgICAgICAgICBlLmlzT3duZWQgPSByLm9rICYmIGJvZHkuYmFsYW5jZSA+IDBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZS5jb3Vwb25TdGF0dXMgPSBlLmlzRnVuZFBhaWQgPyAncGFpZCcgOiBlLmNvdXBvblN0YXR1c1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVcbiAgICB9KSlcblxuICAgIHJldHVybiBsaXN0XG59XG5leHBvcnQgY29uc3QgZmV0Y2hTdXBwbGllckNvdXBvbnMgPSBhc3luYyAoYWRkcmVzcykgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBmZXRjaFN1cHBsaWVyUHVyY2hhc2VzKGFkZHJlc3MpXG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKGUgPT4gdHlwZW9mIGUuYXNzZXRJZCA9PT0gJ3N0cmluZycpXG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFN1cHBsaWVyQWN0aXZlQ291cG9ucyA9IGFzeW5jIChhZGRyZXNzKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGF3YWl0IGZldGNoU3VwcGxpZXJDb3Vwb25zKGFkZHJlc3MpXG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKGUgPT4gIWUuaXNGdW5kUGFpZCAmJiAhZS5pc0J1cm5lZClcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoU3VwcGxpZXJSZWNlaXZlZENvdXBvbnMgPSBhc3luYyAoYWRkcmVzcykgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBmZXRjaFN1cHBsaWVyQWN0aXZlQ291cG9ucyhhZGRyZXNzKVxuICAgIHJldHVybiBsaXN0LmZpbHRlcihlID0+IGUuaXNPd25lZClcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoU3VwcGxpZXJBdmFpbGFibGVDb3Vwb25zID0gYXN5bmMgKGFkZHJlc3MpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gYXdhaXQgZmV0Y2hTdXBwbGllckNvdXBvbnMoYWRkcmVzcylcbiAgICByZXR1cm4gbGlzdC5maWx0ZXIoZSA9PiAhZS5pc0Z1bmRQYWlkKS5maWx0ZXIoZSA9PiAoXG4gICAgICAgIGUuaXNFeHBpcmVkIHx8IGUuaXNCdXJuZWQgfHwgZS5pc093bmVkXG4gICAgKSlcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoU3VwcGxpZXJBdmFpbGFibGVGdW5kcyA9IGFzeW5jIChhZGRyZXNzKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGF3YWl0IGZldGNoU3VwcGxpZXJBdmFpbGFibGVDb3Vwb25zKGFkZHJlc3MpXG4gICAgcmV0dXJuIGxpc3QucmVkdWNlKChhLCBiKSA9PiBhICsgYi5hbW91bnQsIDApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRJdGVtQnlLZXkgPSBhc3luYyAoa2V5KSA9PiB7XG4gICAgY29uc3QgaXRlbXMgPSBhd2FpdCBwcmVwYXJlSXRlbXMoYXN5bmMgKCkgPT4gW2tleV0pXG4gICAgcmV0dXJuIGl0ZW1zLmxlbmd0aCA+IDAgPyBpdGVtc1swXSA6IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGdldFB1cmNoYXNlQnlLZXkgPSBhc3luYyAoa2V5KSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGF3YWl0IHByZXBhcmVQdXJjaGFzZXMoYXN5bmMgKCkgPT4gW2tleV0pXG4gICAgcmV0dXJuIGxpc3QubGVuZ3RoID4gMCA/IGxpc3RbMF0gOiBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdXBwbGllckJhbGFuY2UgPSBhc3luYyAoYWRkcmVzcykgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB3aW5kb3cuZEFwcERhdGEgfHwgW11cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgIGlmIChrZXkgPT09IGAke2FkZHJlc3N9X2JhbGFuY2VgKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoZGF0YVtrZXldLnZhbHVlLCAxMClcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMFxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3VwcGxpZXJBdmFpbGFibGVCYWxhbmNlID0gYXN5bmMgKGFkZHJlc3MpID0+IHtcbiAgICBjb25zdCBkYXRhID0gd2luZG93LmRBcHBEYXRhIHx8IFtdXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgICBpZiAoa2V5ID09PSBgJHthZGRyZXNzfV9hdmFpbGFibGVgKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoZGF0YVtrZXldLnZhbHVlLCAxMClcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMFxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3VwcGxpZXJBcHByb3ZhbENvdW50ZXIgPSBhc3luYyAoYWRkcmVzcykgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBmZXRjaFN1cHBsaWVyUHVyY2hhc2VzKGFkZHJlc3MpXG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKGUgPT4gZS5zdGF0dXMgPT09ICdhcHByb3ZhbCcpLmxlbmd0aFxufVxuXG5leHBvcnQgY29uc3QgaGFzaFZvdGUgPSAoaXRlbSwgdm90ZSwgc2FsdCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gYCR7aXRlbX0ke3ZvdGV9JHtzYWx0fWBcbiAgICBjb25zdCBieXRlcyA9IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZSh2YWx1ZSlcbiAgICByZXR1cm4gYmFzZTU4ZW5jb2RlKHNoYTI1NihieXRlcykpXG59XG4iLCJpbXBvcnQgeyBub2RlSW50ZXJhY3Rpb24gfSBmcm9tICdAd2F2ZXMvd2F2ZXMtdHJhbnNhY3Rpb25zJ1xuXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50cydcblxuaW1wb3J0IHsgZ2V0U3VwcGxpZXJBcHByb3ZhbENvdW50ZXIgfSBmcm9tICcuL2hlbHBlcidcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5cbmNvbnN0IERFRkFVTFRfQUNDT1VOVCA9IHtcbiAgICBpc0Nvbm5lY3RlZDogZmFsc2UsXG4gICAgaXNTdXBwbGllcjogZmFsc2UsXG59XG5jb25zdCBERUZBVUxUX05FVFdPUksgPSBjb25maWcuZGVmYXVsdE5ldHdvcmsgfHwge1xuICAgIGNvZGU6ICdUJyxcbiAgICBtYXRjaGVyOiAnaHR0cHM6Ly9tYXRjaGVyLXRlc3RuZXQud2F2ZXNub2Rlcy5jb20vJyxcbiAgICBzZXJ2ZXI6ICdodHRwczovL25vZGVzLXRlc3RuZXQud2F2ZXNub2Rlcy5jb20vJyxcbn1cbmNvbnN0IERFRkFVTFRfU1RBVEUgPSB7fVxuXG4vLyBkYXBwIHNlZWQgaWYgbmVlZGVkXG4vLyBob29kIGdvcmlsbGEgbWFwbGUgdGFnIGZlZWQgbWFrZSBzaGluZSBwdWJsaWMgY2FrZSBkZXZvdGUgZ3JhY2Ugc3B5IG5lY2sgZWFnZXIgc29sdmVcbmNvbnN0IERBUFBfQUREUkVTUyA9IGNvbmZpZy5kQXBwQWRkcmVzc1xuY29uc3QgQkFTRV9VUkkgPSBjb25maWcuZGVmYXVsdE5ldHdvcmsuc2VydmVyXG5jb25zdCBDSEFJTl9JRCA9IGNvbmZpZy5jaGFpbklkXG5jb25zdCBORVRXT1JLX0lEID0gY29uZmlnLm5ldHdvcmtJZFxuXG5jb25zdCBlZSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuY29uc3QgeyBXYXZlc0tlZXBlciB9ID0gd2luZG93XG5sZXQgV0tlZSA9IG51bGxcblxuY29uc3QgUFVCTElDX1NUQVRFID0gJ3B1YmxpY1N0YXRlJ1xuY29uc3QgQUNDT1VOVCA9ICdhY2NvdW50J1xuY29uc3QgTkVUV09SSyA9ICduZXR3b3JrJ1xuY29uc3QgREFUQSA9ICdkYXRhJ1xuXG5jb25zdCB2YWx1ZXMgPSB7XG4gICAgc3RhdGU6IERFRkFVTFRfU1RBVEUsXG4gICAgYWNjb3VudDogREVGQVVMVF9BQ0NPVU5ULFxuICAgIG5ldHdvcms6IERFRkFVTFRfTkVUV09SSyxcbiAgICBhdXRoOiBudWxsLFxuICAgIGRhdGE6IHt9LFxufVxuY29uc3QgdHlwZXMgPSBbUFVCTElDX1NUQVRFLCBBQ0NPVU5ULCBORVRXT1JLLCBEQVRBXVxuXG53aW5kb3cuZEFwcCA9IHtcbiAgICBkQXBwQWRkcmVzczogREFQUF9BRERSRVNTLFxuICAgIGJhc2VVcmk6IEJBU0VfVVJJLFxuICAgIGNoYWluSWQ6IENIQUlOX0lELFxuICAgIG5ldHdvcms6IE5FVFdPUktfSUQsXG59XG5cbndpbmRvdy5ub2RlSW50ZXJhY3Rpb24gPSBub2RlSW50ZXJhY3Rpb25cblxuY29uc3Qgbm90aWZ5QWxlcnQgPSAobWVzc2FnZSkgPT4ge1xuICAgIGNvbnNvbGUud2FybihtZXNzYWdlKVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuICAgIGFsZXJ0KG1lc3NhZ2UpXG59XG5cbmNvbnN0IGdldFNlc3Npb24gPSAoYWRkcmVzcykgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgY29uc3QgZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBzZXNzaW9uXyR7YWRkcmVzc31gKVxuICAgICAgICByZXR1cm4gZCA/IEpTT04ucGFyc2UoZCkgOiBudWxsXG4gICAgfVxuICAgIHJldHVybiBudWxsXG59XG5cbmNvbnN0IHNldFNlc3Npb24gPSAoc2Vzc2lvbikgPT4ge1xuICAgIGNvbnN0IGFkZHJlc3MgPSBzZXNzaW9uPy5hZGRyZXNzXG4gICAgaWYgKGFkZHJlc3MgJiYgbG9jYWxTdG9yYWdlKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBzZXNzaW9uXyR7c2Vzc2lvbi5hZGRyZXNzfWAsIEpTT04uc3RyaW5naWZ5KHNlc3Npb24pKVxuICAgIH1cbn1cblxuY29uc3QgZGVsU2Vzc2lvbiA9IChhZGRyZXNzKSA9PiB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZSkgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYHNlc3Npb25fJHthZGRyZXNzfWApXG59XG5cbmZ1bmN0aW9uIHN1YnNjcmliZSh0eXBlLCBmbikge1xuICAgIGlmICghdHlwZXMuaW5jbHVkZXModHlwZSkpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYHR5cGUgJHt0eXBlfSBub3QgYWxsb3dlZC4gYXZhaWxhYmxlIHR5cGVzIGFyZSA6ICR7SlNPTi5zdHJpbmdpZnkodHlwZXMpfWApXG4gICAgfVxuICAgIC8vIGNvbnNvbGUuZGVidWcoYHN1YnNjcmliZSAke3R5cGV9YClcbiAgICBlZS5vbih0eXBlLCBmbilcbiAgICBmbih2YWx1ZXNbdHlwZV0pXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZyhgdW5zdWJzY3JpYmUgJHt0eXBlfWApXG4gICAgICAgIGVlLm9mZih0eXBlLCBmbilcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldFZhbHVlKHR5cGUsIGRhdGEpIHtcbiAgICB2YWx1ZXNbdHlwZV0gPSBkYXRhXG4gICAgd2luZG93LmRBcHBbdHlwZV0gPSBkYXRhXG4gICAgZWUuZW1pdCh0eXBlLCBkYXRhKVxufVxuXG5mdW5jdGlvbiBjdXJyZW50TmV0d29yaygpIHtcbiAgICByZXR1cm4gdmFsdWVzW05FVFdPUktdXG59XG5cbmZ1bmN0aW9uIGN1cnJlbnRBY2NvdW50KCkge1xuICAgIHJldHVybiB2YWx1ZXNbQUNDT1VOVF1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBub2RlSW50ZXJhY3Rpb24uYWNjb3VudERhdGEoREFQUF9BRERSRVNTLCBCQVNFX1VSSSlcbiAgICB3aW5kb3cuZEFwcERhdGEgPSBkYXRhXG4gICAgd2luZG93LmRBcHBEYXRhS2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpXG4gICAgY29uc29sZS5kZWJ1ZygnWyDwn5SEIGRBcHAgZGF0YSBdIDonLCBgJHt3aW5kb3cuZEFwcERhdGFLZXlzPy5sZW5ndGh9IGtleXMgbG9hZGVkYClcbiAgICBzZXRWYWx1ZShEQVRBLCBkYXRhKVxuICAgIHJldHVybiBkYXRhXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gICAgZGVsU2Vzc2lvbih2YWx1ZXNbQUNDT1VOVF0/LmFkZHJlc3MpXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgdXBkYXRlU3RhdGUoKVxufVxuXG5hc3luYyBmdW5jdGlvbiBvblN0YXRlQ2hhbmdlKHN0YXRlKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnWyDwn5SEIFdhdmVzIEtlZXBlciBzdGF0ZSBdIDogJywgYHZlcnNpb246ICR7c3RhdGUudmVyc2lvbn0sIGluaXRpYWxpemVkOiAke3N0YXRlLmluaXRpYWxpemVkID8gJ3RydWUnIDogJ2ZhbHNlJ30sIGxvY2tlZDogJHtzdGF0ZS5sb2NrZWQgPyAndHJ1ZScgOiAnZmFsc2UnfWApXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHN0YXRlLmFjY291bnQgIT09ICdvYmplY3QnIHx8IHR5cGVvZiBzdGF0ZS5uZXR3b3JrICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzZXRWYWx1ZShQVUJMSUNfU1RBVEUsIHN0YXRlKVxuXG4gICAgY29uc3QgYWNjb3VudCA9IHZhbHVlc1tBQ0NPVU5UXVxuICAgIGNvbnN0IG53ayA9IHN0YXRlLm5ldHdvcmtcbiAgICBsZXQgYWNjdCA9IHN0YXRlLmFjY291bnRcbiAgICBpZiAoYWNjdCkge1xuICAgICAgICBjb25zdCBzZXNzaW9uID0gZ2V0U2Vzc2lvbihhY2N0LmFkZHJlc3MpXG4gICAgICAgIGFjY3QuaXNDb25uZWN0ZWQgPSBzZXNzaW9uPy5hZGRyZXNzID09PSBhY2N0LmFkZHJlc3NcblxuICAgICAgICBpZiAoYWNjdC5uZXR3b3JrICE9PSBORVRXT1JLX0lEIHx8IG53ay5jb2RlICE9PSBERUZBVUxUX05FVFdPUksuY29kZSkge1xuICAgICAgICAgICAgbm90aWZ5QWxlcnQoYFBsZWFzZSBzd2l0Y2ggV2F2ZXNLZWVwZXIgdG8gJHtORVRXT1JLX0lEfWApXG4gICAgICAgICAgICBpZiAoYWNjb3VudC5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGRpc2Nvbm5lY3QoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWNjdCA9IERFRkFVTFRfQUNDT1VOVFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IG5vZGVJbnRlcmFjdGlvbi5hY2NvdW50RGF0YUJ5S2V5KGAke2FjY3QuYWRkcmVzc31fYWNjb3VudGAsIERBUFBfQUREUkVTUywgQkFTRV9VUkkpXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGFjY3Quc3VwcGxpZXIgPSBKU09OLnBhcnNlKGRhdGEudmFsdWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgYWNjdC5zdXBwbGllclxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgYWNjdC5zdXBwbGllciA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGFjY3Quc3VwcGxpZXIuYXBwcm92YWxDb3VudGVyID0gYXdhaXQgZ2V0U3VwcGxpZXJBcHByb3ZhbENvdW50ZXIoYWNjdC5hZGRyZXNzKVxuICAgICAgICAgICAgYWNjdC5pc1N1cHBsaWVyID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0VmFsdWUoQUNDT1VOVCwgYWNjdClcbiAgICAgICAgaWYgKEJvb2xlYW4oYWNjb3VudC5pc0Nvbm5lY3RlZCkgIT09IEJvb2xlYW4oYWNjdC5pc0Nvbm5lY3RlZCkpIHtcbiAgICAgICAgICAgIGF3YWl0IGZldGNoRGF0YSgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0VmFsdWUoTkVUV09SSywgbndrKVxufVxuXG5jb25zdCBvbkFwaUxpc3RlbmVyID0gKCkgPT4ge1xuICAgIFdLZWUgPSBXYXZlc0tlZXBlci5vbigndXBkYXRlJywgb25TdGF0ZUNoYW5nZSlcbn1cblxuY29uc3Qgb2ZmQXBpTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgV0tlZS5vZmYoJ3VwZGF0ZScsIG9uU3RhdGVDaGFuZ2UpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKCkge1xuICAgIGNvbnN0IHN0YXRlID0gYXdhaXQgV2F2ZXNLZWVwZXIucHVibGljU3RhdGUoKVxuICAgIGF3YWl0IG9uU3RhdGVDaGFuZ2Uoc3RhdGUpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgaWYgKCFXYXZlc0tlZXBlcikge1xuICAgICAgICBub3RpZnlBbGVydCgn4pyLIFdhdmVzS2VlcGVyIHNob3VsZCBiZSBpbnN0YWxsZWQgdG8gc2lnbiBpbiDinZcnKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBvZmZBcGlMaXN0ZW5lcigpXG5cbiAgICBjb25zdCBhY2NvdW50ID0gdmFsdWVzW0FDQ09VTlRdXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGdldFNlc3Npb24oYWNjb3VudC5hZGRyZXNzKVxuICAgIGlmIChhY2NvdW50LmlzQ29ubmVjdGVkICYmIHNlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuIHNlc3Npb25cbiAgICB9XG5cbiAgICBsZXQgYXV0aERhdGEgPSBudWxsXG4gICAgdHJ5IHtcbiAgICAgICAgYXV0aERhdGEgPSBhd2FpdCBXYXZlc0tlZXBlci5hdXRoKHsgZGF0YTogJ1NpZ24gaW4gLSBDb3Vwb25CYXphYXInIH0pXG4gICAgICAgIGNvbnNvbGUuaW5mbyhg8J+RjSBTdWNjZXNzZnVsIGF1dGhlbnRpY2F0aW9uIGZvciBhZGRyZXNzICR7YXV0aERhdGEuYWRkcmVzc31gKVxuICAgICAgICBzZXRTZXNzaW9uKGF1dGhEYXRhKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGRlbFNlc3Npb24oYWNjb3VudC5hZGRyZXNzKVxuICAgICAgICBpZiAoZXJyb3IubWVzc2FnZSkgY29uc29sZS53YXJuKGDwn5GOICR7ZXJyb3IubWVzc2FnZX1gKVxuICAgICAgICBlbHNlIGNvbnNvbGUud2Fybign8J+RjiBhdXRoZW50aWNhdGlvbiB3YXMgaW50ZXJydXB0ZWQnKVxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIG9uQXBpTGlzdGVuZXIoKVxuICAgIH1cbiAgICByZXR1cm4gYXV0aERhdGFcbn1cblxuaWYgKFdhdmVzS2VlcGVyKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgV2F2ZXNLZWVwZXIuaW5pdGlhbFByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgIG9uQXBpTGlzdGVuZXIoKVxuICAgICAgICByZXR1cm4gdXBkYXRlU3RhdGUoKVxuICAgIH0pXG59XG5cbmNvbnN0IGNvbm5lY3RJZk5vdCA9IChhZGRyZXNzKSA9PiB7XG4gICAgc2V0U2Vzc2lvbih7IGFkZHJlc3MgfSlcbiAgICB1cGRhdGVTdGF0ZSgpXG59XG5cbmV4cG9ydCB7XG4gICAgY3VycmVudEFjY291bnQsXG4gICAgY3VycmVudE5ldHdvcmssXG4gICAgY29ubmVjdCxcbiAgICBjb25uZWN0SWZOb3QsXG4gICAgZGlzY29ubmVjdCxcbiAgICBzdWJzY3JpYmUsXG4gICAgZmV0Y2hEYXRhLFxuICAgIERBUFBfQUREUkVTUyxcbiAgICBQVUJMSUNfU1RBVEUsXG4gICAgQUNDT1VOVCxcbiAgICBORVRXT1JLLFxuICAgIERBVEEsXG4gICAgREVGQVVMVF9BQ0NPVU5ULFxuICAgIERFRkFVTFRfTkVUV09SSyxcbn1cbiIsImltcG9ydCB7IGJyb2FkY2FzdCwgd2FpdEZvclR4IH0gZnJvbSAnQHdhdmVzL3dhdmVzLXRyYW5zYWN0aW9ucydcblxuaW1wb3J0IHtcbiAgICBEQVBQX0FERFJFU1MsIGN1cnJlbnROZXR3b3JrLCBmZXRjaERhdGEsIGNvbm5lY3RJZk5vdCxcbn0gZnJvbSAnLi9kQXBwJ1xuaW1wb3J0IHsgaGFzaFZvdGUgfSBmcm9tICcuL2hlbHBlcidcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5cbmNvbnN0IHsgbmZ0U2NyaXB0IH0gPSBjb25maWdcblxuY29uc3QgdGltZW91dCA9IDMwMDAwMCAvLyA1IG1pbnV0ZXNcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5jb25zdCBzaWduVHggPSBhc3luYyB0eERhdGEgPT4gSlNPTi5wYXJzZShhd2FpdCBXYXZlc0tlZXBlci5zaWduVHJhbnNhY3Rpb24odHhEYXRhKSlcblxuY29uc3QgcHVibGlzaFR4ID0gYXN5bmMgKHNpZ25lZFR4KSA9PiB7XG4gICAgY29uc3QgeyBzZXJ2ZXIgfSA9IGN1cnJlbnROZXR3b3JrKClcbiAgICBjb25zdCB0eCA9IGF3YWl0IGJyb2FkY2FzdChzaWduZWRUeCwgc2VydmVyKVxuICAgIHJldHVybiB3YWl0Rm9yVHgodHguaWQsIHsgYXBpQmFzZTogc2VydmVyLCB0aW1lb3V0IH0pXG59XG5cbmNvbnN0IHNpZ25BbmRQdWJsaXNoVHggPSBhc3luYyAodHhEYXRhKSA9PiB7XG4gICAgY29uc3Qgc2lnbmVkVHggPSBhd2FpdCBzaWduVHgodHhEYXRhKVxuICAgIHJldHVybiBhd2FpdCBwdWJsaXNoVHgoc2lnbmVkVHgpXG59XG5cbi8qXG5jb25zdCBjcmVhdGVDb3Vwb24gPSBhc3luYyAoY291cG9uKSA9PiB7XG4gICAgY29uc3QgeyB0aXRsZSwgc2hvcnREZXNjcmlwdGlvbiB9ID0gY291cG9uXG4gICAgY29uc3Qgc3R4ID0gaXNzdWUoe1xuICAgICAgICBuYW1lOiB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IHNob3J0RGVzY3JpcHRpb24sXG4gICAgICAgIHNjcmlwdDogbmZ0U2NyaXB0LFxuICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgZGVjaW1hbHM6IDAsXG4gICAgICAgIHJlaXNzdWFibGU6IGZhbHNlLFxuICAgICAgICBmZWU6IDUwMDAwMCxcbiAgICAgICAgY2hhaW5JZDogd2luZG93LmRBcHAuY2hhaW5JZCxcbiAgICB9LCAnc2VlZCcpXG4gICAgLy8gY29uc29sZS5sb2coJ2Jyb2FkY2FzdCBjcmVhdGUgY291cG9uIG5mdCcpXG4gICAgY29uc3QgdHggPSBhd2FpdCBicm9hZGNhc3Qoc3R4LCB3aW5kb3cuZEFwcC5iYXNlVXJpKVxuICAgIC8vIGNvbnNvbGUubG9nKGB3YWl0Rm9yVHggJHt0eC5pZH1gKVxuICAgIGF3YWl0IHdhaXRGb3JUeCh0eC5pZCwgeyBhcGlCYXNlOiB3aW5kb3cuZEFwcC5iYXNlVXJpIH0pXG4gICAgLy8gY29uc29sZS5sb2coYENvdXBvbiBuZnQgY3JlYXRlZCR7dHguaWR9YClcbiAgICByZXR1cm4gdHguaWRcbn1cbiovXG5cbmNvbnN0IGNvdXBvbkRhdGEgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IG5ld1ByaWNlID0gcGFyc2VJbnQoZGF0YS5uZXdQcmljZSwgMTApXG4gICAgY29uc3Qgb2xkUHJpY2UgPSBwYXJzZUludChkYXRhLm9sZFByaWNlLCAxMClcbiAgICBjb25zdCBkaXNjb3VudCA9IG9sZFByaWNlID4gMCA/IHBhcnNlSW50KDEwMCAtIChuZXdQcmljZSAqIDEwMCkgLyBvbGRQcmljZSwgMTApIDogMFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgICAgbG9uZ1RpdGxlOiBkYXRhLmxvbmdUaXRsZSxcbiAgICAgICAgaW1hZ2U6IGRhdGEuaW1hZ2UsXG4gICAgICAgIHJhdGluZzogMCxcbiAgICAgICAgcmF0aW5nczogMCxcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogZGF0YS5zaG9ydERlc2NyaXB0aW9uLFxuICAgICAgICBsb25nRGVzY3JpcHRpb246IGRhdGEubG9uZ0Rlc2NyaXB0aW9uLFxuICAgICAgICBwcmljZVRlcm06IGRhdGEucHJpY2VUZXJtLFxuICAgICAgICBuZXdQcmljZSxcbiAgICAgICAgb2xkUHJpY2UsXG4gICAgICAgIGRpc2NvdW50LFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFkZEl0ZW0gPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGNvdXBvblByaWNlID0gcGFyc2VJbnQoZGF0YS5jb3Vwb25QcmljZSwgMTApXG4gICAgY29uc3QgY291cG9uRXhwaXJlID0gRGF0ZS5wYXJzZShkYXRhLmV4cGlyYXRpb25EYXRlKVxuICAgIGNvbnN0IHR4RGF0YSA9IHtcbiAgICAgICAgdHlwZTogMTYsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGRBcHA6IERBUFBfQUREUkVTUyxcbiAgICAgICAgICAgIGNhbGw6IHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbjogJ2FkZEl0ZW0nLFxuICAgICAgICAgICAgICAgIGFyZ3M6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNvdXBvblByaWNlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBKU09OLnN0cmluZ2lmeShjb3Vwb25EYXRhKGRhdGEpKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNvdXBvbkV4cGlyZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBheW1lbnQ6IFtdLFxuICAgICAgICAgICAgZmVlOiB7XG4gICAgICAgICAgICAgICAgdG9rZW5zOiAnMC4wMDUnLFxuICAgICAgICAgICAgICAgIGFzc2V0SWQ6ICdXQVZFUycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH1cbiAgICBjb25zdCBzaWduZWRUeCA9IGF3YWl0IHNpZ25UeCh0eERhdGEpXG4gICAgY29uc3QgdHggPSBhd2FpdCBwdWJsaXNoVHgoc2lnbmVkVHgpXG4gICAgYXdhaXQgZmV0Y2hEYXRhKClcbiAgICByZXR1cm4gdHhcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUl0ZW0gPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGNvdXBvblByaWNlID0gcGFyc2VJbnQoZGF0YS5jb3Vwb25QcmljZSwgMTApXG4gICAgY29uc3QgY291cG9uRXhwaXJlID0gRGF0ZS5wYXJzZShkYXRhLmV4cGlyYXRpb25EYXRlKVxuICAgIGNvbnN0IHR4RGF0YSA9IHtcbiAgICAgICAgdHlwZTogMTYsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGRBcHA6IERBUFBfQUREUkVTUyxcbiAgICAgICAgICAgIGNhbGw6IHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbjogJ3VwZGF0ZUl0ZW0nLFxuICAgICAgICAgICAgICAgIGFyZ3M6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYCR7ZGF0YS5pZH1gLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaW50ZWdlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY291cG9uUHJpY2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IEpTT04uc3RyaW5naWZ5KGNvdXBvbkRhdGEoZGF0YSkpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaW50ZWdlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY291cG9uRXhwaXJlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF5bWVudDogW10sXG4gICAgICAgICAgICBmZWU6IHtcbiAgICAgICAgICAgICAgICB0b2tlbnM6ICcwLjAwNScsXG4gICAgICAgICAgICAgICAgYXNzZXRJZDogJ1dBVkVTJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuICAgIGNvbnN0IHR4ID0gYXdhaXQgc2lnbkFuZFB1Ymxpc2hUeCh0eERhdGEpXG4gICAgYXdhaXQgZmV0Y2hEYXRhKClcbiAgICByZXR1cm4gdHhcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZUl0ZW0gPSBhc3luYyAoY291cG9uKSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gY291cG9uXG4gICAgY29uc3QgdHhEYXRhID0ge1xuICAgICAgICB0eXBlOiAxNixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZEFwcDogREFQUF9BRERSRVNTLFxuICAgICAgICAgICAgY2FsbDoge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uOiAncmVtb3ZlSXRlbScsXG4gICAgICAgICAgICAgICAgYXJnczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBgJHtpZH1gLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF5bWVudDogW10sXG4gICAgICAgICAgICBmZWU6IHtcbiAgICAgICAgICAgICAgICB0b2tlbnM6ICcwLjAwNScsXG4gICAgICAgICAgICAgICAgYXNzZXRJZDogJ1dBVkVTJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuICAgIGNvbnN0IHR4ID0gYXdhaXQgc2lnbkFuZFB1Ymxpc2hUeCh0eERhdGEpXG4gICAgYXdhaXQgZmV0Y2hEYXRhKClcbiAgICByZXR1cm4gdHhcbn1cblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyU3VwcGxpZXIgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHR4RGF0YSA9IHtcbiAgICAgICAgdHlwZTogMTYsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGRBcHA6IERBUFBfQUREUkVTUyxcbiAgICAgICAgICAgIGNhbGw6IHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbjogJ3JlZ2lzdGVyU3VwcGxpZXInLFxuICAgICAgICAgICAgICAgIGFyZ3M6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXltZW50OiBbXSxcbiAgICAgICAgICAgIGZlZToge1xuICAgICAgICAgICAgICAgIHRva2VuczogJzAuMDA1JyxcbiAgICAgICAgICAgICAgICBhc3NldElkOiAnV0FWRVMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG4gICAgY29uc3QgdHggPSBhd2FpdCBzaWduQW5kUHVibGlzaFR4KHR4RGF0YSlcbiAgICBhd2FpdCBmZXRjaERhdGEoKVxuICAgIHJldHVybiB0eFxufVxuXG5leHBvcnQgY29uc3QgcHVyY2hhc2VDb3Vwb24gPSBhc3luYyAoY291cG9uKSA9PiB7XG4gICAgY29uc3QgeyBpZCwgY291cG9uUHJpY2UgfSA9IGNvdXBvblxuXG4gICAgY29uc3QgdHhEYXRhID0ge1xuICAgICAgICB0eXBlOiAxNixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZEFwcDogREFQUF9BRERSRVNTLFxuICAgICAgICAgICAgY2FsbDoge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uOiAncHVyY2hhc2UnLFxuICAgICAgICAgICAgICAgIGFyZ3M6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYCR7aWR9YCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBheW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuczogU3RyaW5nKFxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyLnBhcnNlRmxvYXQoY291cG9uUHJpY2UgLyAxZTgpLnRvRml4ZWQoOCksXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0SWQ6ICdXQVZFUycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmZWU6IHtcbiAgICAgICAgICAgICAgICB0b2tlbnM6ICcwLjAwNScsXG4gICAgICAgICAgICAgICAgYXNzZXRJZDogJ1dBVkVTJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuICAgIGNvbnN0IHR4ID0gYXdhaXQgc2lnbkFuZFB1Ymxpc2hUeCh0eERhdGEpXG4gICAgYXdhaXQgZmV0Y2hEYXRhKClcbiAgICBjb25uZWN0SWZOb3QodHguc2VuZGVyKVxuICAgIHJldHVybiB0eFxufVxuXG5leHBvcnQgY29uc3QgcmVqZWN0UHVyY2hhc2UgPSBhc3luYyAocHVyY2hhc2UpID0+IHtcbiAgICBjb25zdCB7IGlkIH0gPSBwdXJjaGFzZVxuICAgIGNvbnN0IHR4RGF0YSA9IHtcbiAgICAgICAgdHlwZTogMTYsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGRBcHA6IERBUFBfQUREUkVTUyxcbiAgICAgICAgICAgIGNhbGw6IHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbjogJ3JlamVjdFB1cmNoYXNlJyxcbiAgICAgICAgICAgICAgICBhcmdzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGAke2lkfWAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXltZW50OiBbXSxcbiAgICAgICAgICAgIGZlZToge1xuICAgICAgICAgICAgICAgIHRva2VuczogJzAuMDA1JyxcbiAgICAgICAgICAgICAgICBhc3NldElkOiAnV0FWRVMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG4gICAgY29uc3QgdHggPSBhd2FpdCBzaWduQW5kUHVibGlzaFR4KHR4RGF0YSlcbiAgICBhd2FpdCBmZXRjaERhdGEoKVxuICAgIHJldHVybiB0eFxufVxuXG5leHBvcnQgY29uc3Qgc2VuZENvdXBvblRvU3VwcGxpZXIgPSBhc3luYyAocHVyY2hhc2UpID0+IHtcbiAgICBjb25zdCB7IGFzc2V0SWQsIHN1cHBsaWVyIH0gPSBwdXJjaGFzZVxuICAgIGNvbnN0IHR4RGF0YSA9IHtcbiAgICAgICAgdHlwZTogNCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYW1vdW50OiB7XG4gICAgICAgICAgICAgICAgdG9rZW5zOiAnMScsXG4gICAgICAgICAgICAgICAgYXNzZXRJZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmZWU6IHtcbiAgICAgICAgICAgICAgICB0b2tlbnM6ICcwLjAwNScsXG4gICAgICAgICAgICAgICAgYXNzZXRJZDogJ1dBVkVTJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWNpcGllbnQ6IHN1cHBsaWVyLFxuICAgICAgICB9LFxuICAgIH1cbiAgICBjb25zdCB0eCA9IGF3YWl0IHNpZ25BbmRQdWJsaXNoVHgodHhEYXRhKVxuICAgIGF3YWl0IGZldGNoRGF0YSgpXG4gICAgcmV0dXJuIHR4XG59XG5leHBvcnQgY29uc3QgYWNjZXB0UHVyY2hhc2UgPSBhc3luYyAocHVyY2hhc2UsIHNldFN0ZXBEb25lKSA9PiB7XG4gICAgY29uc3QgeyBpZCwgdXNlciwgaXRlbSB9ID0gcHVyY2hhc2VcbiAgICBjb25zdCB7IHRpdGxlLCBzaG9ydERlc2NyaXB0aW9uIH0gPSBpdGVtXG5cbiAgICAvLyBjcmVhdGUgY291cG9uIChORlQpXG4gICAgY29uc3QgdHhHZW5Bc3NldERhdGEgPSB7XG4gICAgICAgIHR5cGU6IDMsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIG5hbWU6IHRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHNob3J0RGVzY3JpcHRpb24sXG4gICAgICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgICAgIHByZWNpc2lvbjogMCxcbiAgICAgICAgICAgIHJlaXNzdWFibGU6IGZhbHNlLFxuICAgICAgICAgICAgc2NyaXB0OiBgYmFzZTY0OiR7bmZ0U2NyaXB0fWAsXG4gICAgICAgICAgICBmZWU6IHtcbiAgICAgICAgICAgICAgICB0b2tlbnM6ICcwLjAwMScsXG4gICAgICAgICAgICAgICAgYXNzZXRJZDogJ1dBVkVTJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuICAgIGNvbnN0IHN0eDEgPSBhd2FpdCBzaWduVHgodHhHZW5Bc3NldERhdGEpXG4gICAgY29uc3QgYXNzZXRJZCA9IHN0eDEuaWRcblxuICAgIC8vIGFjY2VwdCBwdXJjaGFzZSBhbmQgdHJhbnNmZXIgY291cG9uXG4gICAgY29uc3QgdHhBY2NlcHREYXRhID0ge1xuICAgICAgICB0eXBlOiAxNixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZEFwcDogREFQUF9BRERSRVNTLFxuICAgICAgICAgICAgY2FsbDoge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uOiAnYWNjZXB0UHVyY2hhc2UnLFxuICAgICAgICAgICAgICAgIGFyZ3M6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYCR7aWR9YCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYXNzZXRJZCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBheW1lbnQ6IFtdLFxuICAgICAgICAgICAgZmVlOiB7XG4gICAgICAgICAgICAgICAgdG9rZW5zOiAnMC4wMDUnLFxuICAgICAgICAgICAgICAgIGFzc2V0SWQ6ICdXQVZFUycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH1cblxuICAgIGNvbnN0IHN0eDIgPSBhd2FpdCBzaWduVHgodHhBY2NlcHREYXRhKVxuXG4gICAgLy8gYWNjZXB0IHB1cmNoYXNlIGFuZCB0cmFuc2ZlciBjb3Vwb25cbiAgICBjb25zdCB0eFRyYW5zZmVyRGF0YSA9IHtcbiAgICAgICAgdHlwZTogNCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYW1vdW50OiB7XG4gICAgICAgICAgICAgICAgdG9rZW5zOiAnMScsXG4gICAgICAgICAgICAgICAgYXNzZXRJZDogYCR7YXNzZXRJZH1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZlZToge1xuICAgICAgICAgICAgICAgIHRva2VuczogJzAuMDA1JyxcbiAgICAgICAgICAgICAgICBhc3NldElkOiAnV0FWRVMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlY2lwaWVudDogdXNlcixcbiAgICAgICAgfSxcbiAgICB9XG5cbiAgICBpZiAoc2V0U3RlcERvbmUpIHNldFN0ZXBEb25lKDEpXG4gICAgY29uc3QgcmVzID0gYXdhaXQgUHJvbWlzZS5hbGwoW3B1Ymxpc2hUeChzdHgxKSwgcHVibGlzaFR4KHN0eDIpXSlcblxuICAgIGlmIChzZXRTdGVwRG9uZSkgc2V0U3RlcERvbmUoMilcbiAgICBjb25zdCBzdHgzID0gYXdhaXQgc2lnblR4KHR4VHJhbnNmZXJEYXRhKVxuICAgIGNvbnN0IHJlczMgPSBhd2FpdCBwdWJsaXNoVHgoc3R4MylcbiAgICBhd2FpdCBmZXRjaERhdGEoKVxuICAgIHJldHVybiBbLi4ucmVzLCByZXMzXVxufVxuXG5leHBvcnQgY29uc3QgYnVybkNvdXBvbiA9IGFzeW5jIChwdXJjaGFzZSkgPT4ge1xuICAgIGNvbnN0IHsgYXNzZXRJZCB9ID0gcHVyY2hhc2VcbiAgICBjb25zdCB0eERhdGEgPSB7XG4gICAgICAgIHR5cGU6IDE2LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkQXBwOiBEQVBQX0FERFJFU1MsXG4gICAgICAgICAgICBjYWxsOiB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb246ICdidXJuJyxcbiAgICAgICAgICAgICAgICBhcmdzOiBbXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXltZW50OiBbXG4gICAgICAgICAgICAgICAgeyB0b2tlbnM6ICcxJywgYXNzZXRJZCB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZlZToge1xuICAgICAgICAgICAgICAgIHRva2VuczogJzAuMDA1JyxcbiAgICAgICAgICAgICAgICBhc3NldElkOiAnV0FWRVMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG4gICAgY29uc3QgdHggPSBhd2FpdCBzaWduQW5kUHVibGlzaFR4KHR4RGF0YSlcbiAgICBhd2FpdCBmZXRjaERhdGEoKVxuICAgIHJldHVybiB0eFxufVxuXG5leHBvcnQgY29uc3Qgd2l0aGRyYXdGdW5kcyA9IGFzeW5jIChwdXJjaGFzZSkgPT4ge1xuICAgIGNvbnN0IHsgYXNzZXRJZCB9ID0gcHVyY2hhc2VcbiAgICBjb25zdCB0eERhdGEgPSB7XG4gICAgICAgIHR5cGU6IDE2LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkQXBwOiBEQVBQX0FERFJFU1MsXG4gICAgICAgICAgICBjYWxsOiB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb246ICd3aXRoZHJhdycsXG4gICAgICAgICAgICAgICAgYXJnczogW1xuICAgICAgICAgICAgICAgICAgICB7IHR5cGU6ICdzdHJpbmcnLCB2YWx1ZTogYXNzZXRJZCB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF5bWVudDogW10sXG4gICAgICAgICAgICBmZWU6IHtcbiAgICAgICAgICAgICAgICB0b2tlbnM6ICcwLjAwNScsXG4gICAgICAgICAgICAgICAgYXNzZXRJZDogJ1dBVkVTJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuICAgIGNvbnN0IHR4ID0gYXdhaXQgc2lnbkFuZFB1Ymxpc2hUeCh0eERhdGEpXG4gICAgYXdhaXQgZmV0Y2hEYXRhKClcbiAgICByZXR1cm4gdHhcbn1cblxuZXhwb3J0IGNvbnN0IGNvbW1pdFZvdGUgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgaXRlbSwgdm90ZSwgc2FsdCB9ID0gZGF0YVxuXG4gICAgY29uc3QgaGFzaCA9IGhhc2hWb3RlKGl0ZW0sIHZvdGUudG9Mb3dlckNhc2UoKSwgc2FsdClcbiAgICBjb25zdCB0eERhdGEgPSB7XG4gICAgICAgIHR5cGU6IDE2LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkQXBwOiBEQVBQX0FERFJFU1MsXG4gICAgICAgICAgICBjYWxsOiB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb246ICd2b3RlQ29tbWl0JyxcbiAgICAgICAgICAgICAgICBhcmdzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgdHlwZTogJ3N0cmluZycsIHZhbHVlOiBpdGVtIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgdHlwZTogJ3N0cmluZycsIHZhbHVlOiBoYXNoIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXltZW50OiBbXSxcbiAgICAgICAgICAgIGZlZToge1xuICAgICAgICAgICAgICAgIHRva2VuczogJzAuMDA1JyxcbiAgICAgICAgICAgICAgICBhc3NldElkOiAnV0FWRVMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG4gICAgY29uc3QgdHggPSBhd2FpdCBzaWduQW5kUHVibGlzaFR4KHR4RGF0YSlcbiAgICBhd2FpdCBmZXRjaERhdGEoKVxuICAgIGNvbm5lY3RJZk5vdCh0eC5zZW5kZXIpXG4gICAgcmV0dXJuIHR4XG59XG5cbmV4cG9ydCBjb25zdCByZXZlYWxWb3RlID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICBjb25zdCB7IGl0ZW0sIHNhbHQsIGNvbW1pdCB9ID0gZGF0YVxuXG4gICAgY29uc3QgaGFzaCA9IGhhc2hWb3RlKGl0ZW0sICdkZWxpc3RlZCcsIHNhbHQpXG4gICAgLy8gYWxlcnQoaGFzaCArICcgPT09ICcgKyBjb21taXQpXG4gICAgY29uc3Qgdm90ZSA9IGhhc2ggPT09IGNvbW1pdCA/ICdkZWxpc3RlZCcgOiAnZmVhdHVyZWQnXG5cbiAgICBjb25zdCB0eERhdGEgPSB7XG4gICAgICAgIHR5cGU6IDE2LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkQXBwOiBEQVBQX0FERFJFU1MsXG4gICAgICAgICAgICBjYWxsOiB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb246ICd2b3RlUmV2ZWFsJyxcbiAgICAgICAgICAgICAgICBhcmdzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgdHlwZTogJ3N0cmluZycsIHZhbHVlOiBpdGVtIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgdHlwZTogJ3N0cmluZycsIHZhbHVlOiB2b3RlIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgdHlwZTogJ3N0cmluZycsIHZhbHVlOiBzYWx0IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXltZW50OiBbXSxcbiAgICAgICAgICAgIGZlZToge1xuICAgICAgICAgICAgICAgIHRva2VuczogJzAuMDA1JyxcbiAgICAgICAgICAgICAgICBhc3NldElkOiAnV0FWRVMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG4gICAgY29uc3QgdHggPSBhd2FpdCBzaWduQW5kUHVibGlzaFR4KHR4RGF0YSlcbiAgICBhd2FpdCBmZXRjaERhdGEoKVxuICAgIGNvbm5lY3RJZk5vdCh0eC5zZW5kZXIpXG4gICAgcmV0dXJuIHR4XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2RBcHAnXG5leHBvcnQgKiBmcm9tICcuL3d0LXRyYW5zYWN0aW9ucydcbmV4cG9ydCAqIGZyb20gJy4vaGVscGVyJ1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBVc2VySWNvbiB9IGZyb20gJy4uL2xheW91dC9oZWFkZXItY29udHJvbHMnXG5pbXBvcnQgeyBjb25uZWN0LCBkaXNjb25uZWN0LCBzaG9ydEFkZHJlc3MgfSBmcm9tICcuLi8uLi9saWJzL2RBcHAnXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi9zaGFyZWQnXG5cbmNvbnN0IEJUTG9naW4gPSAoeyBhY2NvdW50LCBzZXRBY3RpdmVVcmwgfSkgPT4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2FjY291bnQ/LmlzQ29ubmVjdGVkXG4gICAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiTG9nb3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImJ0biBidG4tZGFya1wiIG9uQ2xpY2s9eygpID0+IHsgc2V0QWN0aXZlVXJsKCcjbXknKSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI215XCIgY2xhc3NOYW1lPVwidGV4dC1saWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiAnLTNweCcsIGxlZnQ6ICctNHB4JyB9fT48VXNlckljb24gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50Lm5hbWUgfHwgYCAke3Nob3J0QWRkcmVzcyhhY2NvdW50LmFkZHJlc3MpfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtkaXNjb25uZWN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e2Nvbm5lY3R9PlxuICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICA8Lz5cbilcblxuZXhwb3J0IGRlZmF1bHQgQlRMb2dpblxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1lZGlhUXVlcnkgZnJvbSAncmVhY3QtcmVzcG9uc2l2ZSdcblxuaW1wb3J0ICogYXMgQ29udHJvbHMgZnJvbSAnLi9oZWFkZXItY29udHJvbHMnXG5pbXBvcnQgSGFtYnVyZ2VyIGZyb20gJy4vSGFtYnVyZ2VyJ1xuXG5pbXBvcnQgeyBGbGV4LCBCb3ggfSBmcm9tICcuLi9zaGFyZWQnXG5pbXBvcnQgQlRMb2dpbiBmcm9tICcuLi9jdXN0b20vYnRMb2dpbidcblxuY29uc3QgbWVudUluZGVudCA9IHtcbiAgICAwOiAnMTZweCcsXG4gICAgeGw6ICc0NnB4Jyxcbn1cblxuY29uc3QgRGVza3RvcEhlYWRlciA9ICh7XG4gICAgYWNjb3VudCxcbiAgICBsaW5rcyxcbiAgICBhY3RpdmVVcmwsXG4gICAgc2V0QWN0aXZlVXJsLFxuICAgIHVzZXJMaW5rcyxcbiAgICB0YWJsZXRSZXNvbHV0aW9uLFxuICAgIG1vYmlsZVJlc29sdXRpb24sXG4gICAgY2hhbmdlTW9iaWxlTWVudVN0YXRlLFxuICAgIG1lbnVPcGVuZWQsXG4gICAgb25DcmVhdGVDb3Vwb24sXG59KSA9PiB7XG4gICAgY29uc3Qgb25NZW51Q2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiBjaGFuZ2VNb2JpbGVNZW51U3RhdGUoIW1lbnVPcGVuZWQpLCBbbWVudU9wZW5lZF0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxNZWRpYVF1ZXJ5IG1heFdpZHRoPXt0YWJsZXRSZXNvbHV0aW9ufT5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIHByPVwiMjJweFwiXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICB0b3A9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtOiAnNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxIYW1idXJnZXIgYmc9XCJibHVlLjBcIiBoZWlnaHQ9XCIxMDAlXCIgb25DbGljaz17b25NZW51Q2xpY2t9IC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L01lZGlhUXVlcnk+XG4gICAgICAgICAgICA8TWVkaWFRdWVyeSBtaW5XaWR0aD17bW9iaWxlUmVzb2x1dGlvbn0+XG4gICAgICAgICAgICAgICAgPENvbnRyb2xzLkxvZ28ganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgaXNBY3RpdmUgLz5cbiAgICAgICAgICAgIDwvTWVkaWFRdWVyeT5cbiAgICAgICAgICAgIDxGbGV4IGZsZXg9ezF9IGp1c3RpZnlDb250ZW50PXt7IDA6ICdmbGV4LWVuZCcsIGxnOiAnY2VudGVyJyB9fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDxNZWRpYVF1ZXJ5IG1pbldpZHRoPXt0YWJsZXRSZXNvbHV0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5rcy5maWx0ZXIoKHsgaXNFbmFibGVkIH0pID0+IHR5cGVvZiBpc0VuYWJsZWQgIT09ICdmdW5jdGlvbicgfHwgaXNFbmFibGVkKGFjY291bnQpKS5tYXAoKHsgdXJsLCB0aXRsZSB9LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3gga2V5PXt1cmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGFzPVwic3BhblwiIHBsPXtpbmRleCAhPT0gMCAmJiBtZW51SW5kZW50fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLk1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlVXJsPy5pbmRleE9mKHVybCkgPj0gMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVXJsKHVybCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250cm9scy5NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9NZWRpYVF1ZXJ5PlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDxGbGV4IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7dXNlckxpbmtzLmZpbHRlcigoeyBpc0VuYWJsZWQgfSkgPT4gdHlwZW9mIGlzRW5hYmxlZCAhPT0gJ2Z1bmN0aW9uJyB8fCBpc0VuYWJsZWQoYWNjb3VudCkpLm1hcCgoeyB1cmwsIHRpdGxlIH0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxCb3gga2V5PXt1cmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17dXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggIT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiMXB4XCIgYXM9XCJzcGFuXCIgbXg9XCI2cHhcIiBoZWlnaHQ9XCIxM3B4XCIgYmc9XCJncmF5LjJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLk1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZVVybD8uaW5kZXhPZih1cmwpID49IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVVcmwodXJsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRyb2xzLk1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDxNZWRpYVF1ZXJ5IG1pbldpZHRoPXttb2JpbGVSZXNvbHV0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnQ/LmlzU3VwcGxpZXIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBhcz1cInNwYW5cIiBjbGFzc05hbWU9XCJteC0yIHRleHQtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLkFkZENvdXBvbkljb24gb25DbGljaz17b25DcmVhdGVDb3Vwb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGFzPVwic3BhblwiIGNsYXNzTmFtZT1cIm14LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjc3VwcGxpZXIvYXBwcm92ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5NZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVVcmwoJyNzdXBwbGllci9hcHByb3ZlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLlNob3BJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgKGFjY291bnQ/LnN1cHBsaWVyPy5hcHByb3ZhbENvdW50ZXIgPiAwKSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcG9zaXRpb249XCJyZWxhdGl2ZVwiIHRvcD1cIi0xMHB4XCIgbGVmdD1cIi02cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuUm91bmRNYXJrSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udHJvbHMuTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICcnIH1cbiAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJtbC0yIG1yLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5TZWFyY2hJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvTWVkaWFRdWVyeT5cbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCVExvZ2luIGFjY291bnQ9e2FjY291bnR9IHNldEFjdGl2ZVVybD17c2V0QWN0aXZlVXJsfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRyb2xzLk1lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVza3RvcEhlYWRlclxuIiwiZXhwb3J0IGNvbnN0IGhlYWRlckxpbmtzID0gW1xuICAgIHtcbiAgICAgICAgdXJsOiAnI2ZlYXR1cmVkJyxcbiAgICAgICAgdGl0bGU6ICdGZWF0dXJlZCcsXG4gICAgICAgIGlzRW5hYmxlZDogKCkgPT4gdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdXJsOiAnI21hcmtldCcsXG4gICAgICAgIHRpdGxlOiAnTWFya2V0JyxcbiAgICAgICAgaXNFbmFibGVkOiAoKSA9PiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdXJsOiAnI215JyxcbiAgICAgICAgdGl0bGU6ICdNeSBDb3Vwb25zJyxcbiAgICAgICAgaXNFbmFibGVkOiAoKSA9PiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgICB1cmw6ICcjc3VwcGxpZXInLFxuICAgICAgICB0aXRsZTogJ1N1cHBsaWVyJyxcbiAgICAgICAgaXNFbmFibGVkOiAoKSA9PiB0cnVlLFxuICAgIH0sXG5dXG5cbmV4cG9ydCBjb25zdCB1c2VyTGlua3MgPSBbXVxuXG5leHBvcnQgY29uc3QgY29tcGFueUxpbmtzID0gW1xuICAgIHtcbiAgICAgICAgdXJsOiAnI2NvbXBhbnkxJyxcbiAgICAgICAgdGl0bGU6ICdBYm91dCcsXG4gICAgICAgIGlzRW5hYmxlZDogKCkgPT4gdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdXJsOiAnI2NvbXBhbnkyJyxcbiAgICAgICAgdGl0bGU6ICdCbG9nJyxcbiAgICAgICAgaXNFbmFibGVkOiAoKSA9PiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgICB1cmw6ICcjY29tcGFueTMnLFxuICAgICAgICB0aXRsZTogJ1ByZXNzJyxcbiAgICAgICAgaXNFbmFibGVkOiAoKSA9PiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgICB1cmw6ICcjY29tcGFueTQnLFxuICAgICAgICB0aXRsZTogJ0ludmVzdG9yIFJlbGF0aW9ucycsXG4gICAgICAgIGlzRW5hYmxlZDogKCkgPT4gdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdXJsOiAnI2NvbXBhbnk1JyxcbiAgICAgICAgdGl0bGU6ICdNYW5hZ2VtZW50IFRlYW0nLFxuICAgICAgICBpc0VuYWJsZWQ6ICgpID0+IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogJyNjb21wYW55NicsXG4gICAgICAgIHRpdGxlOiAnSW4gWW91ciBDb21tdW5pdHknLFxuICAgICAgICBpc0VuYWJsZWQ6ICgpID0+IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogJyNtYWluMycsXG4gICAgICAgIHRpdGxlOiAnQ29udGFjdHMnLFxuICAgICAgICBpc0VuYWJsZWQ6ICgpID0+IHRydWUsXG4gICAgfSxcbl1cblxuZXhwb3J0IGNvbnN0IHN1cHBsaWVyTGlua3MgPSBbXG4gICAge1xuICAgICAgICB1cmw6ICcjc3VwcGxpZXInLFxuICAgICAgICB0aXRsZTogJ1JlZ2lzdGVyIGFzIFN1cHBsaWVyJyxcbiAgICAgICAgaXNFbmFibGVkOiBlID0+ICFlLmlzU3VwcGxpZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogJyNzdXBwbGllci9tYW5hZ2UnLFxuICAgICAgICB0aXRsZTogJ01hbmFnZSBDb3Vwb25zJyxcbiAgICAgICAgaXNFbmFibGVkOiBlID0+IGUuaXNTdXBwbGllcixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdXJsOiAnI3N1cHBsaWVyL3dpdGhkcmF3JyxcbiAgICAgICAgdGl0bGU6ICdXaXRoZHJhdyBGdW5kcycsXG4gICAgICAgIGlzRW5hYmxlZDogZSA9PiBlLmlzU3VwcGxpZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogJyNzdXBwbGllci9oaXN0b3J5JyxcbiAgICAgICAgdGl0bGU6ICdTYWxlcyBIaXN0b3J5JyxcbiAgICAgICAgaXNFbmFibGVkOiBlID0+IGUuaXNTdXBwbGllcixcbiAgICB9LFxuXVxuXG5leHBvcnQgY29uc3QgbXlMaW5rcyA9IFtcbiAgICB7XG4gICAgICAgIHVybDogJyNteS9jb3Vwb25zJyxcbiAgICAgICAgdGl0bGU6ICdVc2UgeW91ciBjb3Vwb25zJyxcbiAgICAgICAgaXNFbmFibGVkOiAoKSA9PiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgICB1cmw6ICcjbXkvdm90aW5nJyxcbiAgICAgICAgdGl0bGU6ICdWb3RlIGZvciB5b3VyIHByZWZlcnJlZCBjb3Vwb24nLFxuICAgICAgICBpc0VuYWJsZWQ6ICgpID0+IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogJyNteS91c2VkJyxcbiAgICAgICAgdGl0bGU6ICdTZWUgeW91ciB1c2VkIGNvdXBvbnMnLFxuICAgICAgICBpc0VuYWJsZWQ6ICgpID0+IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogJyNteS9leHBpcmVkJyxcbiAgICAgICAgdGl0bGU6ICdTZWUgeW91ciBleHBpcmVkIENvdXBvbnMnLFxuICAgICAgICBpc0VuYWJsZWQ6ICgpID0+IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogJyNteS9wdXJjaGFzZXMnLFxuICAgICAgICB0aXRsZTogJ1B1cmNoYXNlcyBIaXN0b3J5JyxcbiAgICAgICAgaXNFbmFibGVkOiAoKSA9PiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgICB1cmw6ICcjcmVmdW5kJyxcbiAgICAgICAgdGl0bGU6ICdSZWZ1bmQgUG9saWNpZXMnLFxuICAgICAgICBpc0VuYWJsZWQ6ICgpID0+IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogJyNmYXEnLFxuICAgICAgICB0aXRsZTogJ0ZBUScsXG4gICAgICAgIGlzRW5hYmxlZDogKCkgPT4gdHJ1ZSxcbiAgICB9LFxuXVxuXG5leHBvcnQgY29uc3QgbWFpbkxpbmtzID0gW1xuICAgIHtcbiAgICAgICAgdXJsOiAnI2ZlYXR1cmVkJyxcbiAgICAgICAgdGl0bGU6ICdGZWF0dXJlZCAgQ291cG9ucycsXG4gICAgICAgIGlzRW5hYmxlZDogKCkgPT4gdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdXJsOiAnI2RlbGlzdGVkJyxcbiAgICAgICAgdGl0bGU6ICdEZWxpc3RlZCAgQ291cG9ucycsXG4gICAgICAgIGlzRW5hYmxlZDogKCkgPT4gdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdXJsOiAnI2V4cGlyZWQnLFxuICAgICAgICB0aXRsZTogJ0V4cGlyZWQgQ291cG9ucycsXG4gICAgICAgIGlzRW5hYmxlZDogKCkgPT4gdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdXJsOiAnI21pbGVzJyxcbiAgICAgICAgdGl0bGU6ICdNaWxlcyAmIFBvaW50cycsXG4gICAgICAgIGlzRW5hYmxlZDogKCkgPT4gdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdXJsOiAnI3N1cHBvcnQnLFxuICAgICAgICB0aXRsZTogJ0N1c3RvbWVyIFN1cHBvcnQnLFxuICAgICAgICBpc0VuYWJsZWQ6ICgpID0+IHRydWUsXG4gICAgfSxcbl1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAqIGFzIENvbnRyb2xzIGZyb20gJy4vaGVhZGVyLWNvbnRyb2xzJztcblxuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vc2hhcmVkJztcblxuY29uc3QgWUVBUiA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblxuY29uc3QgTG9nb0NvcHlyaWdodCA9ICh7IHNpemUgfSkgPT4gKFxuICAgIDxCb3g+XG4gICAgICAgIDxDb250cm9scy5Mb2dvIGlzQWN0aXZlIHNpemU9e3NpemV9IC8+XG4gICAgICAgIDxUZXh0IGFzPVwic3BhblwiIGNvbG9yPVwiZ3JheS4yXCIgZm9udFNpemU9XCIxMnB4XCIgcHQ9XCIxMHB4XCI+XG4gICAgICAgICAgICDCqVxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIHtZRUFSfVxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIEdyb3Vwb24sIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuICAgICAgICA8L1RleHQ+XG4gICAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMb2dvQ29weXJpZ2h0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRmFjZWJvb2sgPSBwcm9wcyA9PiAoXG4gICAgPHN2ZyB3aWR0aD1cIjI4XCIgaGVpZ2h0PVwiMjhcIiB2aWV3Qm94PVwiMCAwIDI4IDI4XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgey4uLnByb3BzfT5cbiAgICAgICAgPGcgaWQ9XCJmYWNlYm9vayBjb3B5XCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGlkPVwiT3ZhbFwiXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuOTAwNCAyNy44MDA4QzIxLjU3NzQgMjcuODAwOCAyNy44MDA4IDIxLjU3NzQgMjcuODAwOCAxMy45MDA0QzI3LjgwMDggNi4yMjM0MiAyMS41Nzc0IDAgMTMuOTAwNCAwQzYuMjIzNDIgMCAwIDYuMjIzNDIgMCAxMy45MDA0QzAgMjEuNTc3NCA2LjIyMzQyIDI3LjgwMDggMTMuOTAwNCAyNy44MDA4WlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMzQjU5OThcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgaWQ9XCJQYXRoXCJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0xNy40MzUyIDEzLjM2MkgxNS4yNTE1VjIxLjM2MjNIMTEuOTQyOVYxMy4zNjJIMTAuMzY5NFYxMC41NTA0SDExLjk0MjlWOC43MzEwMkMxMS45NDI5IDcuNDI5OTQgMTIuNTYxIDUuMzkyNTggMTUuMjgxIDUuMzkyNThMMTcuNzMxNyA1LjQwMjgzVjguMTMxOTdIMTUuOTUzNUMxNS42NjE5IDguMTMxOTcgMTUuMjUxNyA4LjI3NzY5IDE1LjI1MTcgOC44OTgzNVYxMC41NTMxSDE3LjcyNDNMMTcuNDM1MiAxMy4zNjJaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRmFjZWJvb2s7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBMaW5rZWRpbiA9IHByb3BzID0+IChcbiAgICA8c3ZnIHdpZHRoPVwiMjhcIiBoZWlnaHQ9XCIyOFwiIHZpZXdCb3g9XCIwIDAgMjggMjhcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB7Li4ucHJvcHN9PlxuICAgICAgICA8ZyBpZD1cImxpbmtlZGluIGNvcHlcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgaWQ9XCJQYXRoXCJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0xMy45NjczIDBDMjEuNjgxNyAwIDI3LjkzNDcgNi4yNTM4OCAyNy45MzQ3IDEzLjk2NzRDMjcuOTM0NyAyMS42ODA5IDIxLjY4MTcgMjcuOTM0NyAxMy45NjczIDI3LjkzNDdDNi4yNTI5MiAyNy45MzQ3IDAgMjEuNjgwOCAwIDEzLjk2NzRDMCA2LjI1Mzk3IDYuMjUzMDEgMCAxMy45NjczIDBaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzBFNzZBOFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBpZD1cIlNoYXBlXCJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0xMC40NzU2IDguMjkzMDNDMTAuNDc1NiA5LjAxNTg1IDkuODg4OTkgOS42MDI1MSA5LjE2NjE3IDkuNjAyNTFDOC40NDMzNSA5LjYwMjUxIDcuODU2NjkgOS4wMTU5NCA3Ljg1NjY5IDguMjkzMTJDNy44NTY2OSA3LjU3MDMgOC40NDMzNSA2Ljk4MzY0IDkuMTY2MTcgNi45ODM2NEM5Ljg4ODk5IDYuOTgzNjQgMTAuNDc1NiA3LjU3MDIgMTAuNDc1NiA4LjI5MzAzWk0xOC4wNTk5IDEwLjE3MTdDMTYuNzkwNiAxMC4xNzE3IDE1LjY1NDkgMTAuNjM1MiAxNC44NDkyIDExLjY1ODRWMTAuNDQ1SDEyLjIyNDJWMTkuMTkxMkgxNC44NDkyVjE0LjQ2MTVDMTQuODQ5MiAxMy40NjE5IDE1Ljc2NSAxMi40ODY4IDE2LjkxMiAxMi40ODY4QzE4LjA1OSAxMi40ODY4IDE4LjM0MTkgMTMuNDYxOSAxOC4zNDE5IDE0LjQzN1YxOS4xOTAzSDIwLjk1NzNWMTQuMjQyNEMyMC45NTcyIDEwLjgwNTUgMTkuMzMwMSAxMC4xNzE3IDE4LjA1OTkgMTAuMTcxN1pNNy44NzA2OSAxOS4xOTExSDEwLjQ4NjFWMTAuNDczN0g3Ljg3MDY5VjE5LjE5MTFaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGlua2VkaW47XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBUZWxlZ3JhbSA9IHByb3BzID0+IChcbiAgICA8c3ZnXG4gICAgICAgIHdpZHRoPVwiMjhcIlxuICAgICAgICBoZWlnaHQ9XCIyOFwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjggMjhcIlxuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgICA8ZyBpZD1cInRlbGVncmFtIGNvcHlcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgaWQ9XCJPdmFsXCJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0xMy45OTk4IDI3Ljk5OTdDMjEuNzMxNyAyNy45OTk3IDI3Ljk5OTcgMjEuNzMxNyAyNy45OTk3IDEzLjk5OThDMjcuOTk5NyA2LjI2Nzk0IDIxLjczMTcgMCAxMy45OTk4IDBDNi4yNjc5NCAwIDAgNi4yNjc5NCAwIDEzLjk5OThDMCAyMS43MzE3IDYuMjY3OTQgMjcuOTk5NyAxMy45OTk4IDI3Ljk5OTdaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzQxQjRFNlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBpZD1cIlBhdGhcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTEyLjY0MDQgMTYuMDM5N0wxOC45NjczIDIwLjgxNjVMMjIuMTYxIDcuMTgzNTlMNS44MzkxMSAxMy42MDM5TDEwLjgwNTcgMTUuMjQ4OUwxOS44Njk3IDkuMTY4OTdMMTIuNjQwNCAxNi4wMzk3WlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGlkPVwiUGF0aF8yXCJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0xMC44MDU3IDE1LjI0ODlMMTIuMTY1OSAyMC4xNDM2TDEyLjY0MDQgMTYuMDM5N0wxOS44Njk3IDkuMTY4OTVMMTAuODA1NyAxNS4yNDg5WlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEMkQyRDdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgaWQ9XCJQYXRoXzNcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTE0LjY5NjUgMTcuNTkyMUwxMi4xNjU4IDIwLjE0MzZMMTIuNjQwMyAxNi4wMzk3TDE0LjY5NjUgMTcuNTkyMVpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjQjlCOUJFXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFRlbGVncmFtO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVHdpdHRlciA9IHByb3BzID0+IChcbiAgICA8c3ZnIHdpZHRoPVwiMjhcIiBoZWlnaHQ9XCIyOFwiIHZpZXdCb3g9XCIwIDAgMjggMjhcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB7Li4ucHJvcHN9PlxuICAgICAgICA8ZyBpZD1cIkdyb3VwIDE2IENvcHlcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgaWQ9XCJPdmFsXCJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0xNCAyOEMyMS43MzIgMjggMjggMjEuNzMyIDI4IDE0QzI4IDYuMjY4MDEgMjEuNzMyIDAgMTQgMEM2LjI2ODAxIDAgMCA2LjI2ODAxIDAgMTRDMCAyMS43MzIgNi4yNjgwMSAyOCAxNCAyOFpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMDNBOUY0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZyBpZD1cImljb25zOC10d2l0dGVyXCI+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0yMiA5LjQxOTE4QzIxLjQ0ODMgOS42NjE2NCAyMC44NTU5IDkuODIzMjggMjAuMjMxIDkuODk5MjVDMjAuODY1NyA5LjUyNDI1IDIxLjM1NTUgOC45MjYxOSAyMS41ODUgOC4yMTk4M0MyMC45ODk0IDguNTY3MzUgMjAuMzMwMyA4LjgyMTEyIDE5LjYzMDUgOC45NTUyOEMxOS4wNzA2IDguMzY1MyAxOC4yNzE2IDggMTcuMzg2MiA4QzE1LjY4NzIgOCAxNC4zMDg4IDkuMzU2MTQgMTQuMzA4OCAxMS4wMjkxQzE0LjMwODggMTEuMjY1MSAxNC4zMzY0IDExLjQ5NjIgMTQuMzg4NSAxMS43MTkzQzExLjgzMTggMTEuNTkzMiA5LjU2MzIgMTAuMzg1OCA4LjA0NjQ0IDguNTUyOEM3Ljc3OTU0IDkuMDAwNTQgNy42Mjk4MSA5LjUyNDI1IDcuNjI5ODEgMTAuMDc4N0M3LjYyOTgxIDExLjEyOTMgOC4xNzE3NSAxMi4wNTU1IDguOTk4NDggMTIuNjAwMkM4LjQ5Mzk4IDEyLjU4NTcgOC4wMTg3NyAxMi40NDUgNy42MDM3OCAxMi4yMjJDNy42MDM3OCAxMi4yMzE3IDcuNjAzNzggMTIuMjQ0NiA3LjYwMzc4IDEyLjI1NzVDNy42MDM3OCAxMy43MjY4IDguNjY0ODYgMTQuOTUwNCAxMC4wNzEgMTUuMjMwMUM5LjgxMzgyIDE1LjI5OTYgOS41NDIwNCAxNS4zMzg0IDkuMjYyMTIgMTUuMzM4NEM5LjA2MzU4IDE1LjMzODQgOC44Njk5MSAxNS4zMTU3IDguNjgyNzYgMTUuMjgxOEM5LjA3MzM0IDE2LjQ4MjggMTAuMjA5MyAxNy4zNjA1IDExLjU1NjggMTcuMzg2M0MxMC41MDIyIDE4LjE5NzcgOS4xNzU4NyAxOC42ODQzIDcuNzMzOTcgMTguNjg0M0M3LjQ4NDk3IDE4LjY4NDMgNy4yNDA4NiAxOC42Njk3IDcgMTguNjQwNkM4LjM2Mzc4IDE5LjQ5NzMgOS45ODE0NSAyMCAxMS43MTc5IDIwQzE3LjM3ODEgMjAgMjAuNDc1MSAxNS4zODM2IDIwLjQ3NTEgMTEuMzc4MkMyMC40NzUxIDExLjI0NzMgMjAuNDcwMiAxMS4xMTY0IDIwLjQ2MzcgMTAuOTg4N0MyMS4wNjc1IDEwLjU2MzYgMjEuNTg4MyAxMC4wMzAyIDIyIDkuNDE5MThaXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUd2l0dGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgV2hhdHNBcHAgPSBwcm9wcyA9PiAoXG4gICAgPHN2ZyB3aWR0aD1cIjI4XCIgaGVpZ2h0PVwiMjhcIiB2aWV3Qm94PVwiMCAwIDI4IDI4XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgey4uLnByb3BzfT5cbiAgICAgICAgPGcgaWQ9XCJ3aGF0c2FwcCBjb3B5XCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGlkPVwiUGF0aFwiXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMTQuMDAzNSAwSDEzLjk5NjVDNi4yNzcyNSAwIDAgNi4yNzkgMCAxNEMwIDE3LjA2MjUgMC45ODcgMTkuOTAxIDIuNjY1MjUgMjIuMjA1N0wwLjkyMDUgMjcuNDA2N0w2LjMwMTc1IDI1LjY4NjVDOC41MTU1IDI3LjE1MyAxMS4xNTYyIDI4IDE0LjAwMzUgMjhDMjEuNzIyNyAyOCAyOCAyMS43MTkyIDI4IDE0QzI4IDYuMjgwNzUgMjEuNzIyNyAwIDE0LjAwMzUgMFpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNENBRjUwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGlkPVwiUGF0aF8yXCJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0yMi4xNDk3IDE5Ljc2OTdDMjEuODEyIDIwLjcyMzQgMjAuNDcxNSAyMS41MTQ0IDE5LjQwMjIgMjEuNzQ1NEMxOC42NzA3IDIxLjkwMTIgMTcuNzE1MiAyMi4wMjU0IDE0LjQ5ODcgMjAuNjkxOUMxMC4zODQ1IDE4Ljk4NzQgNy43MzQ5NyAxNC44MDY3IDcuNTI4NDcgMTQuNTM1NEM3LjMzMDcyIDE0LjI2NDIgNS44NjU5NyAxMi4zMjE3IDUuODY1OTcgMTAuMzEyN0M1Ljg2NTk3IDguMzAzNyA2Ljg4NjIyIDcuMzI1NDUgNy4yOTc0NyA2LjkwNTQ1QzcuNjM1MjIgNi41NjA3IDguMTkzNDcgNi40MDMyIDguNzI4OTcgNi40MDMyQzguOTAyMjIgNi40MDMyIDkuMDU3OTcgNi40MTE5NSA5LjE5Nzk3IDYuNDE4OTVDOS42MDkyMiA2LjQzNjQ1IDkuODE1NzIgNi40NjA5NSAxMC4wODcgNy4xMTAyQzEwLjQyNDcgNy45MjM5NSAxMS4yNDcyIDkuOTMyOTUgMTEuMzQ1MiAxMC4xMzk0QzExLjQ0NSAxMC4zNDU5IDExLjU0NDcgMTAuNjI1OSAxMS40MDQ3IDEwLjg5NzJDMTEuMjczNSAxMS4xNzcyIDExLjE1OCAxMS4zMDE0IDEwLjk1MTUgMTEuNTM5NEMxMC43NDUgMTEuNzc3NCAxMC41NDkgMTEuOTU5NCAxMC4zNDI1IDEyLjIxNDlDMTAuMTUzNSAxMi40MzcyIDkuOTM5OTcgMTIuNjc1MiAxMC4xNzggMTMuMDg2NEMxMC40MTYgMTMuNDg4OSAxMS4yMzg1IDE0LjgzMTIgMTIuNDQ5NSAxNS45MDkyQzE0LjAxMjIgMTcuMzAwNCAxNS4yNzkyIDE3Ljc0NDkgMTUuNzMyNSAxNy45MzM5QzE2LjA3MDIgMTguMDczOSAxNi40NzI3IDE4LjA0MDcgMTYuNzE5NSAxNy43NzgyQzE3LjAzMjcgMTcuNDQwNCAxNy40MTk1IDE2Ljg4MDQgMTcuODEzMiAxNi4zMjkyQzE4LjA5MzIgMTUuOTMzNyAxOC40NDY3IDE1Ljg4NDcgMTguODE3NyAxNi4wMjQ3QzE5LjE5NTcgMTYuMTU1OSAyMS4xOTYgMTcuMTQ0NyAyMS42MDcyIDE3LjM0OTRDMjIuMDE4NSAxNy41NTU5IDIyLjI4OTcgMTcuNjUzOSAyMi4zODk1IDE3LjgyNzJDMjIuNDg3NSAxOC4wMDA0IDIyLjQ4NzUgMTguODE0MiAyMi4xNDk3IDE5Ljc2OTdaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0ZBRkFGQVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBXaGF0c0FwcDtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgRmFjZWJvb2sgfSBmcm9tICcuL0ZhY2Vib29rJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGlua2VkaW4gfSBmcm9tICcuL0xpbmtlZGluJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGVsZWdyYW0gfSBmcm9tICcuL1RlbGVncmFtJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHdpdHRlciB9IGZyb20gJy4vVHdpdHRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFdoYXRzYXBwIH0gZnJvbSAnLi9XaGF0c2FwcCc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgKiBhcyBJY29ucyBmcm9tICcuL3NvY2lhbC1pY29ucyc7XG5cbmltcG9ydCB7IEJveCB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmNvbnN0IFNvY2lhbEJ1dHRvbnMgPSAoKSA9PiAoXG4gICAgPD5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxJY29ucy5GYWNlYm9vayAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBwbD1cIjIwcHhcIj5cbiAgICAgICAgICAgIDxJY29ucy5Ud2l0dGVyIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHBsPVwiMjBweFwiPlxuICAgICAgICAgICAgPEljb25zLldoYXRzYXBwIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHBsPVwiMjBweFwiPlxuICAgICAgICAgICAgPEljb25zLkxpbmtlZGluIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHBsPVwiMjBweFwiPlxuICAgICAgICAgICAgPEljb25zLlRlbGVncmFtIC8+XG4gICAgICAgIDwvQm94PlxuICAgIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU29jaWFsQnV0dG9ucztcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbXBvcnQgKiBhcyBDb250cm9scyBmcm9tICcuL2hlYWRlci1jb250cm9scydcbmltcG9ydCAqIGFzIExJTktTIGZyb20gJy4vbGlua3MnXG5pbXBvcnQgTG9nb0NvcHlyaWdodCBmcm9tICcuL0xvZ29Db3B5cmlnaHQnXG5pbXBvcnQgU29jaWFsQnV0dG9ucyBmcm9tICcuL1NvY2lhbEJ1dHRvbnMnXG5cbmltcG9ydCB7IEJveCwgRmxleCwgVGV4dCB9IGZyb20gJy4uL3NoYXJlZCdcblxuZXhwb3J0IGNvbnN0IG1lbnVBbmltYXRpb24gPSB7XG4gICAgY2xhc3NOYW1lczogJ21vYmlsZS1tZW51JyxcbiAgICB0aW1lb3V0OiAzNTAsXG59XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChCb3gpYFxuICAgIGxlZnQ6IDBweDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgc3ZnIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAmLiR7bWVudUFuaW1hdGlvbi5jbGFzc05hbWVzfS1lbnRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNjAwcHgpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAmLiR7bWVudUFuaW1hdGlvbi5jbGFzc05hbWVzfS1lbnRlci1hY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsICR7bWVudUFuaW1hdGlvbi50aW1lb3V0fW1zIGVhc2Utb3V0O1xuICAgIH1cblxuICAgICYuJHttZW51QW5pbWF0aW9uLmNsYXNzTmFtZXN9LWV4aXQge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgJi4ke21lbnVBbmltYXRpb24uY2xhc3NOYW1lc30tZXhpdC1hY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTYwMHB4KTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsICR7bWVudUFuaW1hdGlvbi50aW1lb3V0fW1zIGVhc2Utb3V0O1xuICAgIH1cbmBcblxuQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBiZzogJ2dyYXkuMCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbn1cblxuY29uc3QgdGV4dFByb3BzID0ge1xuICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgbGluZUhlaWdodDogJzE3cHgnLFxuICAgIGZvbnRXZWlnaHQ6ICc2MDAnLFxufVxuXG5jb25zdCBHcm91cExpbmtzID0gKHtcbiAgICBhY2NvdW50LCBzZXRBY3RpdmVVcmwsIHRpdGxlLCBsaW5rcywgLi4ucmVzdFxufSkgPT4gKFxuICAgIDxCb3ggey4uLnJlc3R9PlxuICAgICAgICB7dGl0bGUgJiYgKFxuICAgICAgICAgICAgPFRleHQgbGV0dGVyU3BhY2luZz1cIjAuNjU2MjVweFwiIHsuLi50ZXh0UHJvcHN9IHBiPVwiMTdweFwiPlxuICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKX1cbiAgICAgICAgPEJveD5cbiAgICAgICAgICAgIHtsaW5rcy5maWx0ZXIoKHsgaXNFbmFibGVkIH0pID0+IHR5cGVvZiBpc0VuYWJsZWQgIT09ICdmdW5jdGlvbicgfHwgaXNFbmFibGVkKGFjY291bnQpKS5tYXAoKHsgdXJsLCB0aXRsZTogbGlua1RpdGxlIH0pID0+IChcbiAgICAgICAgICAgICAgICA8YSBrZXk9e3VybH0gaHJlZj17dXJsfT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJibHVlLjBcIiB7Li4udGV4dFByb3BzfSBwYj1cIjE3cHhcIiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVVcmwodXJsKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlua1RpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjFweFwiIGJnPVwiZ3JheS4zXCIgLz5cbiAgICA8L0JveD5cbilcblxuY29uc3QgTW9iaWxlTWVudSA9ICh7XG4gICAgYWNjb3VudCwgc2V0QWN0aXZlVXJsLCBvbkNsb3NlLCBvbkNyZWF0ZUNvdXBvbiwgbW9iaWxlUmVzb2x1dGlvbiwgLi4ucmVzdFxufSkgPT4ge1xuICAgIHVzZUVmZmVjdCgoKSA9PiAoKSA9PiBvbkNsb3NlKCksIFtdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXIgey4uLnJlc3R9PlxuICAgICAgICAgICAgPEZsZXggY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICAgIDxGbGV4IGZsZXg9ezF9IGp1c3RpZnlDb250ZW50PVwiZmxleC1sZWZ0XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudD8uaXNTdXBwbGllciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGFzPVwic3BhblwiIGNsYXNzTmFtZT1cIm14LTIgdGV4dC1zdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuQWRkQ291cG9uSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgb25DbG9zZSgpOyBvbkNyZWF0ZUNvdXBvbigpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBhcz1cInNwYW5cIiBjbGFzc05hbWU9XCJteC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3N1cHBsaWVyL2FwcHJvdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuTWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVXJsKCcjc3VwcGxpZXIvYXBwcm92ZScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5TaG9wSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IChhY2NvdW50Py5zdXBwbGllcj8uYXBwcm92YWxDb3VudGVyID4gMCkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIiB0b3A9XCItMTBweFwiIGxlZnQ9XCItNnB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLlJvdW5kTWFya0ljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRyb2xzLk1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLkNsb3NlSWNvbiBvbkNsaWNrPXtvbkNsb3NlfSAvPlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDxHcm91cExpbmtzIGFjY291bnQ9e2FjY291bnR9IHNldEFjdGl2ZVVybD17c2V0QWN0aXZlVXJsfSBsaW5rcz17TElOS1MuaGVhZGVyTGlua3N9IC8+XG4gICAgICAgICAgICA8R3JvdXBMaW5rcyBhY2NvdW50PXthY2NvdW50fSBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH0gdGl0bGU9XCJDb21wYW55XCIgbGlua3M9e0xJTktTLmNvbXBhbnlMaW5rc30gcHQ9XCIyMHB4XCIgLz5cbiAgICAgICAgICAgIDxHcm91cExpbmtzIGFjY291bnQ9e2FjY291bnR9IHNldEFjdGl2ZVVybD17c2V0QWN0aXZlVXJsfSB0aXRsZT1cIldvcmsgd2l0aCBDb3Vwb24gQmF6YWFyXCIgbGlua3M9e0xJTktTLm15TGlua3N9IHB0PVwiMjBweFwiIC8+XG4gICAgICAgICAgICA8R3JvdXBMaW5rcyBhY2NvdW50PXthY2NvdW50fSBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH0gdGl0bGU9XCJTdXBwbGllclwiIGxpbmtzPXtMSU5LUy5zdXBwbGllckxpbmtzfSBwdD1cIjIwcHhcIiAvPlxuICAgICAgICAgICAgPEdyb3VwTGlua3MgYWNjb3VudD17YWNjb3VudH0gc2V0QWN0aXZlVXJsPXtzZXRBY3RpdmVVcmx9IHRpdGxlPVwiTWFpblwiIGxpbmtzPXtMSU5LUy5tYWluTGlua3N9IHB0PVwiMjBweFwiIC8+XG4gICAgICAgICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgcHk9XCIyMHB4XCI+XG4gICAgICAgICAgICAgICAgPEJveCBwYj1cIjIwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgPExvZ29Db3B5cmlnaHQgc2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8RmxleD5cbiAgICAgICAgICAgICAgICAgICAgPFNvY2lhbEJ1dHRvbnMgLz5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTWVudVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vc2hhcmVkJ1xuXG5leHBvcnQgY29uc3Qgb3ZlcmxheUFuaW1hdGlvbiA9IHtcbiAgICBjbGFzc05hbWVzOiAnb3ZlcmxheScsXG4gICAgdGltZW91dDogMzUwLFxufVxuXG5jb25zdCBPdmVybGF5ID0gKHpJbmRleCA9IDkpID0+IHN0eWxlZChCb3gpLmF0dHJzKHtcbiAgICBiZzogJ3JnYmEoMCwwLDAsLjc1KScsXG4gICAgYm90dG9tOiAnMHB4JyxcbiAgICBsZWZ0OiAnMHB4JyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICByaWdodDogJzBweCcsXG4gICAgekluZGV4LFxufSlgXG4gICAgJi4ke292ZXJsYXlBbmltYXRpb24uY2xhc3NOYW1lc30tZW50ZXIge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAmLiR7b3ZlcmxheUFuaW1hdGlvbi5jbGFzc05hbWVzfS1lbnRlci1hY3RpdmUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR7b3ZlcmxheUFuaW1hdGlvbi50aW1lb3V0fW1zIGVhc2Utb3V0O1xuICAgIH1cblxuICAgICYuJHtvdmVybGF5QW5pbWF0aW9uLmNsYXNzTmFtZXN9LWV4aXQge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAmLiR7b3ZlcmxheUFuaW1hdGlvbi5jbGFzc05hbWVzfS1leGl0LWFjdGl2ZSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHtvdmVybGF5QW5pbWF0aW9uLnRpbWVvdXR9bXMgZWFzZS1vdXQ7XG4gICAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBPdmVybGF5XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEhhbWJ1cmdlciB9IGZyb20gJy4vSGFtYnVyZ2VyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZWFkZXJMaW5lIH0gZnJvbSAnLi9IZWFkZXJMaW5lJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2JpbGVNZW51LCBtZW51QW5pbWF0aW9uIH0gZnJvbSAnLi9Nb2JpbGVNZW51J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBPdmVybGF5LCBvdmVybGF5QW5pbWF0aW9uIH0gZnJvbSAnLi9PdmVybGF5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dvQ29weXJpZ2h0IH0gZnJvbSAnLi9Mb2dvQ29weXJpZ2h0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTb2NpYWxCdXR0b25zIH0gZnJvbSAnLi9Tb2NpYWxCdXR0b25zJ1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJ1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcblxuaW1wb3J0IEJveCBmcm9tICcuL0JveCdcblxuaW1wb3J0IHsgb3ZlcmxheUFuaW1hdGlvbiwgT3ZlcmxheSB9IGZyb20gJy4uL2xheW91dCdcblxuY29uc3QgeyB0aW1lb3V0IH0gPSBvdmVybGF5QW5pbWF0aW9uXG5cbmNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJylcblxuY29uc3Qgc3R5bGVDb250YWluZXIgPSAoekluZGV4ID0gMTUpID0+IHN0eWxlZChCb3gpYFxuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAke3pJbmRleH07XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgICB0b3A6IDEwJTtcbiAgICAmLm1vZGFsLWVudGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgICYubW9kYWwtZW50ZXItYWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAke3RpbWVvdXR9bXMgZWFzZS1vdXQ7XG4gICAgfVxuXG4gICAgJi5tb2RhbC1leGl0IHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgICYubW9kYWwtZXhpdC1hY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsICR7dGltZW91dH1tcyBlYXNlLW91dDtcbiAgICB9XG5gXG5cbmNvbnN0IE1vZGFsID0gKHtcbiAgICBjaGlsZHJlbiwgb3Blbiwgb25DbG9zZSwgekluZGV4LCAuLi5yZXN0XG59KSA9PiB7XG4gICAgekluZGV4ID8/PSAxNVxuICAgIGNvbnN0IENvbnRhaW5lciA9IHN0eWxlQ29udGFpbmVyKHpJbmRleClcbiAgICBjb25zdCBPdmwgPSBPdmVybGF5KHpJbmRleCAtIDEpXG4gICAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uIGluPXtvcGVufSB0aW1lb3V0PXt0aW1lb3V0fSBjbGFzc05hbWVzPVwibW9kYWxcIiB1bm1vdW50T25FeGl0PlxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgey4uLnJlc3R9PntjaGlsZHJlbn08L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uIGluPXtvcGVufSB7Li4ub3ZlcmxheUFuaW1hdGlvbn0gdW5tb3VudE9uRXhpdD5cbiAgICAgICAgICAgICAgICA8T3ZsIHRvcD1cIjBweFwiIG9uQ2xpY2s9e29uQ2xvc2V9IC8+XG4gICAgICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICAgIDwvPixcbiAgICAgICAgbW9kYWxDb250YWluZXIsXG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQge1xuICAgIGxpbmVIZWlnaHQsIGZvbnRXZWlnaHQsIGxldHRlclNwYWNpbmcsIGNvbXBvc2UsXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nXG5cbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3gnXG5cbmNvbnN0IGVuaGFuY2VTdHlsZWRDb21wb25lbnQgPSBjb21wb3NlKFxuICAgIGxpbmVIZWlnaHQsXG4gICAgZm9udFdlaWdodCxcbiAgICBsZXR0ZXJTcGFjaW5nLFxuKVxuY29uc3QgVGV4dCA9IHN0eWxlZChCb3gpLmF0dHJzKHsgYXM6ICdzcGFuJyB9KWBcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAke2VuaGFuY2VTdHlsZWRDb21wb25lbnR9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IFRleHRcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gQmFkZ2Uoe1xuICAgIHRleHQsIHR5cGUgPSAnc2Vjb25kYXJ5JywgcCA9IDIsIG0gPSAwLFxufSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGJhZGdlIGJhZGdlLSR7dHlwZX0gJHtwID4gMCA/IGBwLSR7cH1gIDogJyd9ICR7bSA+IDAgPyBgbS0ke219YCA6ICcnfWB9PlxuICAgICAgICAgICAge3RleHR9XG4gICAgICAgIDwvc3Bhbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhZGdlXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIExvYWRpbmcoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBteS0zIHB5LTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci1ib3JkZXIgdGV4dC1wcmltYXJ5XCIgcm9sZT1cInN0YXR1c1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj4uLi48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEJveCB9IGZyb20gJy4vQm94J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGbGV4IH0gZnJvbSAnLi9GbGV4J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RhbCB9IGZyb20gJy4vTW9kYWwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRleHQgfSBmcm9tICcuL1RleHQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJhZGdlIH0gZnJvbSAnLi9CYWRnZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9hZGluZyB9IGZyb20gJy4vTG9hZGluZydcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTdGFyIGZyb20gJy4vU3Rhcic7XG5cbmltcG9ydCB7IEZsZXgsIEJveCB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbmNvbnN0IHN0YXJzID0gWzEsIDIsIDMsIDQsIDVdO1xuXG5jb25zdCBSYXRpbmcgPSAoeyB2YWx1ZSwgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IGNlaWxWYWx1ZSA9IE1hdGguY2VpbCh2YWx1ZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RmxleD5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAge3N0YXJzLm1hcCgodmFsLCBpbmQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEJveCBrZXk9e3ZhbH0gcGw9e2luZCAhPT0gMCAmJiAnNnB4J30gYXM9XCJzcGFuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhciBhY3RpdmU9e3ZhbCA8PSBjZWlsVmFsdWV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94IGFzPVwic3BhblwiIGZvbnRTaXplPVwiMTJweFwiIHBsPVwiOHB4XCI+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvRmxleD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmF0aW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuXG5jb25zdCBQcmljZVN0eWxlZCA9IHN0eWxlZChCb3gpYFxuICAgIHBhZGRpbmc6IDAgNnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC40Mzc1cHg7XG5gO1xuXG5jb25zdCBQcmljZSA9ICh7IGNoaWxkcmVuLCBpc09sZCwgdGVybSB9KSA9PiAoXG4gICAgPFByaWNlU3R5bGVkIGNvbG9yPXshaXNPbGQgPyAnZ3JlZW4uMScgOiB1bmRlZmluZWR9PlxuICAgICAgICA8Qm94IGFzPVwic3BhblwiIHByPVwiMnB4XCI+XG4gICAgICAgICAgICB7dGVybX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge2lzT2xkICYmIChcbiAgICAgICAgICAgIDxCb3ggYmc9XCJyZWQuMFwiIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiB0b3A9XCI1MCVcIiBsZWZ0PVwiMHB4XCIgcmlnaHQ9XCIwcHhcIiBoZWlnaHQ9XCIxcHhcIiAvPlxuICAgICAgICApfVxuICAgIDwvUHJpY2VTdHlsZWQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQcmljZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuY29uc3QgRGlzY291bnRTdHlsZWQgPSBzdHlsZWQoQm94KS5hdHRycyh7XG4gICAgYmc6ICdncmVlbi4wJyxcbn0pYFxuICAgIHdpZHRoOiA0MnB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHNwYW4ge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjY1NjI1cHg7XG4gICAgfVxuYDtcblxuY29uc3QgRGlzY291bnQgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPERpc2NvdW50U3R5bGVkPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvRGlzY291bnRTdHlsZWQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBEaXNjb3VudDtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUmF0aW5nIH0gZnJvbSAnLi9SYXRpbmcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcmljZSB9IGZyb20gJy4vUHJpY2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEaXNjb3VudCB9IGZyb20gJy4vRGlzY291bnQnO1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgbWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmVzRWxsaXBzaXMgZnJvbSAncmVhY3QtbGluZXMtZWxsaXBzaXMnXG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tICdtZW1vaXplLW9uZSdcblxuaW1wb3J0IHsgUmF0aW5nLCBQcmljZSwgRGlzY291bnQgfSBmcm9tICcuL2NvdXBvbi1jb250cm9scydcblxuaW1wb3J0IHtcbiAgICBCYWRnZSwgQm94LCBGbGV4LCBUZXh0LFxufSBmcm9tICcuLi9zaGFyZWQnXG5pbXBvcnQgeyBmb3JtYXREYXRlLCBmb3JtYXROdW1iZXIgfSBmcm9tICcuLi8uLi9saWJzL2RBcHAnXG5cbmNvbnN0IGlzRW1wdHkgPSBtZW1vaXplT25lKHZhbCA9PiB2YWwgPT09IHVuZGVmaW5lZCB8fCB2YWwgPT09IDApXG5cbmNvbnN0IENvdXBvbiA9ICh7XG4gICAgaXNNYW5hZ2VDb3Vwb25zLFxuICAgIG5hbWUsXG4gICAgdGl0bGUsXG4gICAgaW1hZ2UsXG4gICAgcmF0aW5nLFxuICAgIHJhdGluZ3MsXG4gICAgc2hvcnREZXNjcmlwdGlvbixcbiAgICBsb25nRGVzY3JpcHRpb24sXG4gICAgY291cG9uVGVybSxcbiAgICBwcmljZVRlcm0sXG4gICAgb2xkUHJpY2UsXG4gICAgbmV3UHJpY2UsXG4gICAgZGlzY291bnQsXG4gICAgaXNFeHBpcmVkLFxuICAgIG9uQ2xpY2ssXG4gICAgY291cG9uUHJpY2UsXG4gICAgZXhwaXJhdGlvbkRhdGUsXG4gICAgLi4ucmVzdFxufSkgPT4gKFxuICAgIDxCb3ggd2lkdGg9XCIzMDBweFwiIGhlaWdodD1cIjMwMHB4XCIgcG9zaXRpb249XCJyZWxhdGl2ZVwiIG9uQ2xpY2s9e29uQ2xpY2t9IHsuLi5yZXN0fT5cbiAgICAgICAgPEJveCBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTE3cHhcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlPy5sZW5ndGggPiAwID8gaW1hZ2UgOiAnaHR0cHM6Ly9jZG4xLnNhdmVwaWNlLnJ1L3VwbG9hZHMvMjAxOS82LzUvM2VhZjFmOTlhMzJmODA0NTg0N2FjOWYwMmViODEzNDQtZnVsbC5wbmcnfSlgLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHshaXNFbXB0eShleHBpcmF0aW9uRGF0ZSkgJiYgKFxuICAgICAgICAgICAgICAgIDxCb3ggcG9zaXRpb249XCJhYnNvbHV0ZVwiIGJvdHRvbT1cIjBweFwiIGxlZnQ9XCIwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNFeHBpcmVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSB0eXBlPVwiZGFuZ2VyXCIgcD17MX0gbT17MX0gdGV4dD1cImV4cGlyZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgdHlwZT1cImxpZ2h0XCIgcD17MX0gbT17MX0gdGV4dD17YGV4cGlyZSAke2Zvcm1hdERhdGUobmV3IERhdGUoZXhwaXJhdGlvbkRhdGUpKX1gfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshaXNFbXB0eShkaXNjb3VudCkgJiYgKFxuICAgICAgICAgICAgICAgIDxCb3ggcG9zaXRpb249XCJhYnNvbHV0ZVwiIHRvcD1cIjIwcHhcIiByaWdodD1cIjEwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgPERpc2NvdW50PntgJHtkaXNjb3VudH0lYH08L0Rpc2NvdW50PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggcHg9XCIyMHB4XCIgcHQ9XCIxMHB4XCI+XG4gICAgICAgICAgICB7IWlzRW1wdHkocmF0aW5nKSAmJiA8UmF0aW5nIHZhbHVlPXtyYXRpbmd9PntgJHtyYXRpbmd9ICgke3JhdGluZ3N9IHJhdGluZ3MpYH08L1JhdGluZz59XG4gICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc9XCIwLjQzNzVweFwiXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodD1cIjIycHhcIlxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICBwdD1cIjEwcHhcIlxuICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMTRweFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBsaW5lSGVpZ2h0PVwiMThweFwiIGZvbnRXZWlnaHQ9XCIyMDBcIiBwdD1cIjhweFwiIGZvbnRTaXplPVwiMTJweFwiPlxuICAgICAgICAgICAgICAgIDxMaW5lc0VsbGlwc2lzXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9e3Nob3J0RGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIG1heExpbmU9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgZWxsaXBzaXM9XCIuLi5cIlxuICAgICAgICAgICAgICAgICAgICB0cmltUmlnaHRcbiAgICAgICAgICAgICAgICAgICAgYmFzZWRPbj1cImxldHRlcnNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBsaW5lSGVpZ2h0PVwiMThweFwiIGZvbnRXZWlnaHQ9XCJub3JtYWxcIiBwdD1cIjhweFwiIGZvbnRTaXplPVwiMTJweFwiPlxuICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxGbGV4IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBib3R0b209XCIyMHB4XCIgd2lkdGg9XCIxMDAlXCIgcHI9XCI0MHB4XCI+XG4gICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJibHVlLjBcIlxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nPVwiMC40Mzc1cHhcIlxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PVwiMjJweFwiXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCIxNHB4XCJcbiAgICAgICAgICAgICAgICAgICAgZmxleD17MX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtgJHtmb3JtYXROdW1iZXIoY291cG9uUHJpY2UpfSAke2NvdXBvblRlcm19YH1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAge29sZFByaWNlICE9PSBuZXdQcmljZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxQcmljZSB0ZXJtPXtwcmljZVRlcm19IGlzT2xkPlxuICAgICAgICAgICAgICAgICAgICAgICAge29sZFByaWNlfVxuICAgICAgICAgICAgICAgICAgICA8L1ByaWNlPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPFByaWNlIHRlcm09e3ByaWNlVGVybX0+e25ld1ByaWNlfTwvUHJpY2U+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuKVxuXG5Db3Vwb24uZGVmYXVsdFByb3BzID0geyBwcmljZVRlcm06ICckJyB9XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oQ291cG9uKVxuIiwiaW1wb3J0IENvdXBvbiBmcm9tICcuL0NvdXBvbic7XG5cbmV4cG9ydCBkZWZhdWx0IENvdXBvbjtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIHVzZUFwcERpYWxvZ3MoKSB7XG4gICAgY29uc3QgW2RpYWxvZ09wZW5lZCwgY2hhbmdlRGlhbG9nU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3Jlc3VsdE9wZW5lZCwgY2hhbmdlUmVzdWx0U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3Jlc3VsdEJ1eU9wZW5lZCwgY2hhbmdlUmVzdWx0QnV5U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2Zvcm1PcGVuZWQsIGNoYW5nZUZvcm1TdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbc2VsZWN0ZWRJdGVtLCBzZWxlY3RJdGVtXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbZWRpdGVkSXRlbSwgc2VsZWN0RWRpdGVkSXRlbV0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW2VkaXRlZE9wdGlvbiwgc2VsZWN0RWRpdGVkT3B0aW9uXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbcmVzdWx0VGV4dCwgc2V0UmVzdWx0VGV4dF0gPSB1c2VTdGF0ZSgnJylcblxuICAgIGNvbnN0IFtcbiAgICAgICAgb25EaWFsb2dPcGVuLFxuICAgICAgICBvbkRpYWxvZ0Nsb3NlLFxuICAgICAgICBvblJlc3VsdE9wZW4sXG4gICAgICAgIG9uUmVzdWx0Q2xvc2UsXG4gICAgICAgIG9uUmVzdWx0QnV5T3BlbixcbiAgICAgICAgb25SZXN1bHRCdXlDbG9zZSxcbiAgICAgICAgb25Gb3JtT3BlbixcbiAgICAgICAgb25Gb3JtQ2xvc2UsXG4gICAgXSA9IHVzZU1lbW8oXG4gICAgICAgICgpID0+IFtcbiAgICAgICAgICAgIChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0SXRlbShpdGVtKVxuICAgICAgICAgICAgICAgIGNoYW5nZURpYWxvZ1N0YXRlKHRydWUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4gY2hhbmdlRGlhbG9nU3RhdGUoZmFsc2UpLFxuICAgICAgICAgICAgKHRleHQpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHRUZXh0KHRleHQpXG4gICAgICAgICAgICAgICAgY2hhbmdlUmVzdWx0U3RhdGUodHJ1ZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoKSA9PiBjaGFuZ2VSZXN1bHRTdGF0ZShmYWxzZSksXG4gICAgICAgICAgICAoKSA9PiBjaGFuZ2VSZXN1bHRCdXlTdGF0ZSh0cnVlKSxcbiAgICAgICAgICAgICgpID0+IGNoYW5nZVJlc3VsdEJ1eVN0YXRlKGZhbHNlKSxcbiAgICAgICAgICAgIChpdGVtID0gbnVsbCwgb3B0aW9uID0gbnVsbCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGVjdEVkaXRlZEl0ZW0oaXRlbSlcbiAgICAgICAgICAgICAgICBzZWxlY3RFZGl0ZWRPcHRpb24ob3B0aW9uKVxuICAgICAgICAgICAgICAgIGNoYW5nZUZvcm1TdGF0ZSh0cnVlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RFZGl0ZWRJdGVtKG51bGwpXG4gICAgICAgICAgICAgICAgc2VsZWN0RWRpdGVkT3B0aW9uKG51bGwpXG4gICAgICAgICAgICAgICAgY2hhbmdlRm9ybVN0YXRlKGZhbHNlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgW10sXG4gICAgKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0ZWRJdGVtLFxuICAgICAgICBlZGl0ZWRJdGVtLFxuICAgICAgICBlZGl0ZWRPcHRpb24sXG4gICAgICAgIGRpYWxvZzogW2RpYWxvZ09wZW5lZCwgb25EaWFsb2dPcGVuLCBvbkRpYWxvZ0Nsb3NlXSxcbiAgICAgICAgcmVzdWx0OiBbcmVzdWx0VGV4dCwgcmVzdWx0T3BlbmVkLCBvblJlc3VsdE9wZW4sIG9uUmVzdWx0Q2xvc2VdLFxuICAgICAgICByZXN1bHRCdXk6IFtyZXN1bHRCdXlPcGVuZWQsIG9uUmVzdWx0QnV5T3Blbiwgb25SZXN1bHRCdXlDbG9zZV0sXG4gICAgICAgIGZvcm06IFtmb3JtT3BlbmVkLCBvbkZvcm1PcGVuLCBvbkZvcm1DbG9zZV0sXG4gICAgICAgIHNlbGVjdEl0ZW0sXG4gICAgICAgIHNlbGVjdEVkaXRlZEl0ZW0sXG4gICAgICAgIHNlbGVjdEVkaXRlZE9wdGlvbixcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUFwcERpYWxvZ3NcbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRGlzcGF0Y2hlZEFjdGlvbnMoYWN0aW9ucykge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAgIGNvbnN0IGRpc3BhdGNoZWRBY3Rpb25zID0gdXNlTWVtbygoKSA9PiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucywgZGlzcGF0Y2gpLCBbXSk7XG4gICAgcmV0dXJuIGRpc3BhdGNoZWRBY3Rpb25zO1xufVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gdXNlU3VwcGxpZXJSZWdpc3RlckRpYWxvZ3MoKSB7XG4gICAgY29uc3QgW3Jlc3VsdFNST3BlbmVkLCBjaGFuZ2VSZXN1bHRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbZm9ybVNST3BlbmVkLCBjaGFuZ2VGb3JtU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgLy8gICAgY29uc3QgW3NlbGVjdGVkSXRlbSwgc2VsZWN0Q291cG9uXSA9IHVzZVN0YXRlKClcblxuICAgIGNvbnN0IFtcbiAgICAgICAgb25SZXN1bHRTUk9wZW4sXG4gICAgICAgIG9uUmVzdWx0U1JDbG9zZSxcbiAgICAgICAgb25Gb3JtU1JPcGVuZWQsXG4gICAgICAgIG9uRm9ybVNSQ2xvc2UsXG4gICAgXSA9IHVzZU1lbW8oXG4gICAgICAgICgpID0+IFtcbiAgICAgICAgICAgICgpID0+IGNoYW5nZVJlc3VsdFN0YXRlKHRydWUpLFxuICAgICAgICAgICAgKCkgPT4gY2hhbmdlUmVzdWx0U3RhdGUoZmFsc2UpLFxuICAgICAgICAgICAgKCkgPT4gY2hhbmdlRm9ybVN0YXRlKHRydWUpLFxuICAgICAgICAgICAgKCkgPT4gY2hhbmdlRm9ybVN0YXRlKGZhbHNlKSxcbiAgICAgICAgXSxcbiAgICAgICAgW10sXG4gICAgKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gICAgICAgIHNlbGVjdGVkSXRlbSxcbiAgICAgICAgcmVzdWx0U1I6IFtyZXN1bHRTUk9wZW5lZCwgb25SZXN1bHRTUk9wZW4sIG9uUmVzdWx0U1JDbG9zZV0sXG4gICAgICAgIGZvcm1TUjogW2Zvcm1TUk9wZW5lZCwgb25Gb3JtU1JPcGVuZWQsIG9uRm9ybVNSQ2xvc2VdLFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlU3VwcGxpZXJSZWdpc3RlckRpYWxvZ3NcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9zaGFyZWQnXG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZChUZXh0KS5hdHRycyh7XG4gICAgYXM6ICdidXR0b24nLFxuICAgIGxldHRlclNwYWNpbmc6ICcwLjQzNzVweCcsXG4gICAgbGluZUhlaWdodDogJzIycHgnLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBwOiAnMTBweCcsXG4gICAgZm9udFNpemU6ICcxOHB4Jyxcbn0pYGBcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbXBvcnQgeyBGbGV4IH0gZnJvbSAnLi4vLi4vc2hhcmVkJ1xuXG5jb25zdCBCb3JkZXIgPSBzdHlsZWQuZGl2YFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwMDAwO1xuYFxuY29uc3QgRm9vdGVyID0gc3R5bGVkKEZsZXgpLmF0dHJzKHtcbiAgICBhczogQm9yZGVyLFxuICAgIGJnOiAnIzExMScsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgcHg6ICcxMHB4Jyxcbn0pYGBcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgTG9nbyB9IGZyb20gJy4uLy4uL2xheW91dC9oZWFkZXItY29udHJvbHMnO1xuXG5jb25zdCBTbWFsbExvZ28gPSBzdHlsZWQoTG9nbylgXG4gICAgc3ZnIHtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTbWFsbExvZ287XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbXBvcnQgeyBUZXh0LCBCb3ggfSBmcm9tICcuLi8uLi9zaGFyZWQnXG5cbmNvbnN0IElucHV0U3R5bGVkID0gc3R5bGVkKEJveClgXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAwLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAwLjE1cztcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgMC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgMC4xNXM7XG4gICAgJjpmb2N1cyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzY2YWZlOTtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgMCA4cHggcmdiYSgxMDIsIDE3NSwgMjMzLCAwLjYpO1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgMCA4cHggcmdiYSgxMDIsIDE3NSwgMjMzLCAwLjYpO1xuICAgIH1cbmBcblxuSW5wdXRTdHlsZWQuZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogJzM0cHgnLFxufVxuXG5jb25zdCBJbnB1dCA9ICh7XG4gICAgdGl0bGUsIGNvbnRyb2wsIGZvcndhcmRSZWYsIGVycm9yLCBtYXhsZW5ndGgsIC4uLnByb3BzXG59KSA9PiAoXG4gICAgPD5cbiAgICAgICAgPFRleHQgY29sb3I9e2Vycm9yID8gJ3JlZC4wJyA6ICdibGFjay4wJ30gZm9udFdlaWdodD1cIjUwMFwiPlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgPEJveCBtdD1cIjRweFwiPlxuICAgICAgICAgICAgPElucHV0U3R5bGVkIGFzPXtjb250cm9sfSB7Li4ucHJvcHN9IHJlZj17Zm9yd2FyZFJlZn0gLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgPC8+XG4pXG5cbklucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb250cm9sOiAnaW5wdXQnLFxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZvb3RlciB9IGZyb20gJy4vRm9vdGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU21hbGxMb2dvIH0gZnJvbSAnLi9TbWFsbExvZ28nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnB1dCB9IGZyb20gJy4vSW5wdXQnO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tbmVzdGVkLXRlcm5hcnkgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgY3VycmVudEFjY291bnQsIGdldFZvdGluZyB9IGZyb20gJy4uLy4uL2xpYnMvZEFwcCdcblxuY29uc3QgQlRWb3RpbmcgPSAoe1xuICAgIGl0ZW0sIHZvdGluZywgb25Db21taXRWb3RlLCBvblJldmVhbFZvdGUsIGJ1dHRvbkNsYXNzTmFtZSA9ICdidG4gYnRuLXdhcm5pbmcnLCB0ZXh0Q2xhc3NOYW1lID0gJ3RleHQtc2Vjb25kYXJ5JywgLi4ucHJvcHNcbn0pID0+IHtcbiAgICBjb25zdCB7IGFkZHJlc3M6IHVzZXIgfSA9IGN1cnJlbnRBY2NvdW50KClcblxuICAgIGlmICh1c2VyICYmICF2b3RpbmcpIHtcbiAgICAgICAgdm90aW5nID0gZ2V0Vm90aW5nKGl0ZW0sIHVzZXIpXG4gICAgfVxuXG4gICAgY29uc3QgeyBjYW5Db21taXQsIGNhblJldmVhbCB9ID0gdm90aW5nIHx8IHt9XG4gICAgY29uc29sZS5sb2coJ2NhbkNvbW1pdCcsIGNhbkNvbW1pdCA/ICd0cnVlJyA6ICdmYWxzZScpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2NhbkNvbW1pdCA/IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2J1dHRvbkNsYXNzTmFtZX0gb25DbGljaz17KCkgPT4gb25Db21taXRWb3RlKGl0ZW0sIHZvdGluZyl9IHsuLi5wcm9wc30+XG4gICAgICAgICAgICAgICAgICAgIFZvdGVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkgOiBjYW5SZXZlYWwgPyAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtidXR0b25DbGFzc05hbWV9IG9uQ2xpY2s9eygpID0+IG9uUmV2ZWFsVm90ZShpdGVtLCB2b3RpbmcpfSB7Li4ucHJvcHN9PlxuICAgICAgICAgICAgICAgICAgICBSZXZlYWwgeW91ciB2b3RlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApIDogdm90aW5nPy5jb21taXQgJiYgdm90aW5nPy5zdGF0dXMgPT09ICd2b3RpbmcnID8gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGV4dENsYXNzTmFtZX0+V2FpdGluZyBlbmQgb2YgY29tbWl0IHN0ZXA8L3NwYW4+XG4gICAgICAgICAgICApIDogdm90aW5nPy5yZXZlYWwgJiYgdm90aW5nPy5zdGF0dXMgPT09ICdyZXZlYWwnID8gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGV4dENsYXNzTmFtZX0+V2FpdGluZyBlbmQgb2YgcmV2ZWFsIHN0ZXA8L3NwYW4+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCVFZvdGluZ1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgKiBhcyBDb250cm9scyBmcm9tICcuL2NvbnRyb2xzJ1xuXG5pbXBvcnQgeyBCb3gsIEZsZXgsIFRleHQgfSBmcm9tICcuLi9zaGFyZWQnXG5pbXBvcnQgQ291cG9uIGZyb20gJy4uL2NvdXBvbidcbmltcG9ydCB7XG4gICAgY29sb3JTdGF0dXMsIGNvbm5lY3QsIGZvcm1hdERhdGUsIHNob3J0QWRkcmVzcyxcbn0gZnJvbSAnLi4vLi4vbGlicy9kQXBwJ1xuaW1wb3J0IEJhZGdlIGZyb20gJy4uL3NoYXJlZC9CYWRnZSdcbmltcG9ydCBCVFZvdGluZyBmcm9tICcuLi9jdXN0b20vYnRWb3RpbmcnXG5cbmNvbnN0IERpYWxvZyA9ICh7XG4gICAgYnV0dG9ucywgY291cG9uLCBvbkNsb3NlLCBvbkVkaXQsIG9uQnV5LCBvblJlbW92ZSwgb25Vc2UsIG9uQnVybiwgb25Wb3RlLCBvblJldmVhbCwgb25XaXRoZHJhdywgb25BY2NlcHQsIG9uUmVqZWN0LFxufSkgPT4ge1xuICAgIGJ1dHRvbnMgPz89IFsnY2FuY2VsJywgJ2J1eSddXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPEJveCB3aWR0aD1cIjYwMHB4XCI+XG4gICAgICAgICAgICA8RmxleCBwPVwiMTZweFwiIGJnPVwiZ3JheS4wXCIgY2xhc3NOYW1lPVwicm91bmRlZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb3Vwb24uaXNFeHBpcmVkID8gJ2FsZXJ0IGFsZXJ0LWRhbmdlciBwLTEgbS0wJyA6ICcnfT5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBmbGV4PXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb3Vwb24gey4uLihjb3Vwb24uaXRlbSB8fCBjb3Vwb24pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdXBvbi5pc0V4cGlyZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEgdGV4dC1jZW50ZXJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknIH19PlRoaXMgY291cG9uIGhhcyBleHBpcmVkPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Qm94IHBsPVwiMTZweFwiPlxuICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuU21hbGxMb2dvIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGxpbmVIZWlnaHQ9XCIyMnB4XCIgZm9udFdlaWdodD1cImJvbGRcIiBwdD1cIjEwcHhcIiBmb250U2l6ZT1cIjIycHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY291cG9uLml0ZW0/LmxvbmdUaXRsZSB8fCBjb3Vwb24uaXRlbT8udGl0bGUgfHwgY291cG9uLmxvbmdUaXRsZSB8fCBjb3Vwb24udGl0bGUgfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGxpbmVIZWlnaHQ9XCIxOHB4XCIgcHQ9XCIxMHB4XCIgZm9udFNpemU9XCIxNHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNvdXBvbi5pdGVtPy5sb25nRGVzY3JpcHRpb24gfHwgY291cG9uLml0ZW0/LnNob3J0RGVzY3JpcHRpb24gfHwgY291cG9uLmxvbmdEZXNjcmlwdGlvbiB8fCBjb3Vwb24uc2hvcnREZXNjcmlwdGlvbiB9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAge2NvdXBvbi5hc3NldElkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGxpbmVIZWlnaHQ9XCIxOHB4XCIgcHQ9XCIxMHB4XCIgZm9udFNpemU9XCIxMnB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2BwdXJjaGFzZWQgb24gJHtmb3JtYXREYXRlKG5ldyBEYXRlKGNvdXBvbi50aW1lc3RhbXApKX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgbGluZUhlaWdodD1cIjE4cHhcIiBwdD1cIjEwcHhcIiBmb250U2l6ZT1cIjEycHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J25mdCBhZGRyZXNzICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vdGVzdG5ldC53YXZlc2V4cGxvcmVyLmNvbS9hc3NldHMvJHtjb3Vwb24uYXNzZXRJZH0vYH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPntzaG9ydEFkZHJlc3MoY291cG9uLmFzc2V0SWQpfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGxpbmVIZWlnaHQ9XCIxOHB4XCIgcHQ9XCIxMHB4XCIgZm9udFNpemU9XCIxMnB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeydzdXBwbGllciAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL3Rlc3RuZXQud2F2ZXNleHBsb3Jlci5jb20vYWRkcmVzcy8ke2NvdXBvbi5zdXBwbGllcn0vYH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291cG9uLnN1cHBsaWVyRGF0YT8ubmFtZSB8fCBzaG9ydEFkZHJlc3MoY291cG9uLnN1cHBsaWVyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBsaW5lSGVpZ2h0PVwiMThweFwiIHB0PVwiMTBweFwiIGZvbnRTaXplPVwiMTJweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnc3RhdHVzICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIHRleHQ9e2NvdXBvbi5jb3Vwb25TdGF0dXN9IHR5cGU9e2NvbG9yU3RhdHVzKGNvdXBvbi5jb3Vwb25TdGF0dXMpfSBwPXswfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvRmxleD5cblxuICAgICAgICAgICAgPENvbnRyb2xzLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8Q29udHJvbHMuQnV0dG9uIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5XCIgb25DbGljaz17b25DbG9zZX0+Q2FuY2VsPC9Db250cm9scy5CdXR0b24+XG4gICAgICAgICAgICAgICAgeyBidXR0b25zLmluY2x1ZGVzKCdsb2dpbicpXG4gICAgICAgICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLkJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIiBvbkNsaWNrPXtjb25uZWN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRyb2xzLkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7IGJ1dHRvbnMuaW5jbHVkZXMoJ3ZvdGUnKSAmJiAhY291cG9uLmlzRXhwaXJlZFxuICAgICAgICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCVFZvdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW09e2NvdXBvbi5pdGVtIHx8IGNvdXBvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b3Rpbmc9e2NvdXBvbi52b3Rpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db21taXRWb3RlPXtvblZvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZXZlYWxWb3RlPXtvblJldmVhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25DbGFzc05hbWU9XCJ0ZXh0LXdhcm5pbmcgZm9udC13ZWlnaHQtYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENsYXNzTmFtZT1cInRleHQtd2hpdGUtNTAgZm9udC13ZWlnaHQtYm9sZCBzbWFsbCBwdC0xIG10LTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMThweCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgeyBidXR0b25zLmluY2x1ZGVzKCdidXknKSAmJiAhY291cG9uLmlzRXhwaXJlZFxuICAgICAgICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5CdXR0b24gY2xhc3NOYW1lPVwidGV4dC1zdWNjZXNzXCIgb25DbGljaz17b25CdXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgQnV5XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRyb2xzLkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7IGJ1dHRvbnMuaW5jbHVkZXMoJ2VkaXQnKSA/IChcbiAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLkJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIiBvbkNsaWNrPXtvbkVkaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRyb2xzLkJ1dHRvbj5cbiAgICAgICAgICAgICAgICApIDogbnVsbCB9XG5cbiAgICAgICAgICAgICAgICB7IGJ1dHRvbnMuaW5jbHVkZXMoJ3JlbW92ZScpID8gKFxuICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuQnV0dG9uIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCIgb25DbGljaz17b25SZW1vdmV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udHJvbHMuQnV0dG9uPlxuICAgICAgICAgICAgICAgICkgOiBudWxsIH1cblxuICAgICAgICAgICAgICAgIHsgYnV0dG9ucy5pbmNsdWRlcygndXNlJykgJiYgY291cG9uLmlzT3duZWRcbiAgICAgICAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuQnV0dG9uIGNsYXNzTmFtZT1cInRleHQtc3VjY2Vzc1wiIG9uQ2xpY2s9e29uVXNlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZSBjb3Vwb25cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udHJvbHMuQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHsgYnV0dG9ucy5pbmNsdWRlcygnYnVybicpXG4gICAgICAgICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLkJ1dHRvbiBjb2xvcj1cInRleHQtcHJpbWFyeVwiIG9uQ2xpY2s9e29uQnVybn0+XG4gICAgICAgICAgICAgICAgICAgICAgICBCdXJuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRyb2xzLkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeyBidXR0b25zLmluY2x1ZGVzKCd3aXRoZHJhdycpXG4gICAgICAgICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLkJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXN1Y2Nlc3NcIiBvbkNsaWNrPXtvbldpdGhkcmF3fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFdpdGhkcmF3IEZ1bmRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udHJvbHMuQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7IGJ1dHRvbnMuaW5jbHVkZXMoJ3JlamVjdCcpXG4gICAgICAgICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLkJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiIG9uQ2xpY2s9e29uUmVqZWN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJlamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250cm9scy5CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHsgYnV0dG9ucy5pbmNsdWRlcygnYWNjZXB0JylcbiAgICAgICAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuQnV0dG9uIGNsYXNzTmFtZT1cInRleHQtc3VjY2Vzc1wiIG9uQ2xpY2s9e29uQWNjZXB0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udHJvbHMuQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvQ29udHJvbHMuRm9vdGVyPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaWFsb2dcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWRhbmdlciAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgKiBhcyBDb250cm9scyBmcm9tICcuL2NvbnRyb2xzJ1xuXG5pbXBvcnQgeyBCb3gsIEZsZXgsIFRleHQgfSBmcm9tICcuLi9zaGFyZWQnXG5cbmNvbnN0IFJlc3VsdCA9ICh7IHRleHQsIGNsYXNzTmFtZSwgb25DbG9zZSB9KSA9PiB7XG4gICAgY2xhc3NOYW1lID8/PSAnYmctbGlnaHQnXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveCB3aWR0aD1cIjYwMHB4XCIgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHJvdW5kZWRgfT5cbiAgICAgICAgICAgIDxGbGV4IHA9XCIxNnB4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8Q29udHJvbHMuU21hbGxMb2dvIC8+XG4gICAgICAgICAgICAgICAgPFRleHQgbGluZUhlaWdodD1cIjIycHhcIiBwdD1cIjEwcHhcIiBmb250U2l6ZT1cIjE4cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRleHQgfX0gLz5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICAgIDxDb250cm9scy5Gb290ZXI+XG4gICAgICAgICAgICAgICAgPENvbnRyb2xzLkJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeVwiIG9uQ2xpY2s9e29uQ2xvc2V9PkNsb3NlPC9Db250cm9scy5CdXR0b24+XG4gICAgICAgICAgICA8L0NvbnRyb2xzLkZvb3Rlcj5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB1c2VGb3JtIGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCAqIGFzIENvbnRyb2xzIGZyb20gJy4vY29udHJvbHMnXG5cbmltcG9ydCB7IEJveCwgRmxleCB9IGZyb20gJy4uL3NoYXJlZCdcblxuY29uc3QgSEVJR0hUUyA9IFszMDAsIDQwMCwgNTAwLCA2MDAsIDcwMF1cbmNvbnN0IEZPUk1fUEFSQU1FVEVSID0gMTUwXG5cbmNvbnN0IEhlaWdodFByb3BzID0gc3R5bGVkLmRpdmBcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICR7SEVJR0hUUy5yZWR1Y2UoXG4gICAgICAgIChhY2N1bSwgdmFsKSA9PlxuICAgICAgICAgICAgYCR7YWNjdW19XG4gICAgICAgIEBtZWRpYSAobWluLWhlaWdodDogJHt2YWx9cHgpIHtcbiAgICAgICAgICAgIGhlaWdodDogJHt2YWwgLSBGT1JNX1BBUkFNRVRFUn1weDtcbiAgICAgICAgfVxuICAgIGAsXG4gICAgICAgICcnLFxuICAgICl9XG4gICAgQG1lZGlhIChtaW4taGVpZ2h0OiA4MDBweCkge1xuICAgICAgICBoZWlnaHQ6IGluaXRpYWw7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtfSkge1xuICAgICAgICAgICAgaGVpZ2h0OiA3MDBweDtcbiAgICAgICAgfVxuICAgIH1cbmBcblxuY29uc3QgRm9ybSA9ICh7XG4gICAgZWRpdGVkSXRlbSwgb25DbG9zZSwgb25TdWJtaXQsXG59KSA9PiB7XG4gICAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnMgfSA9IHVzZUZvcm0oKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveFxuICAgICAgICAgICAgd2lkdGg9e3tcbiAgICAgICAgICAgICAgICAwOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgbGc6ICc4MDBweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYXM9XCJmb3JtXCJcbiAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxuICAgICAgICA+XG4gICAgICAgICAgICA8Qm94IGJnPVwiZ3JheS4wXCIgY2xhc3NOYW1lPVwicm91bmRlZFwiPlxuICAgICAgICAgICAgICAgIDxGbGV4IHA9XCIxMHB4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLlNtYWxsTG9nbyAvPlxuICAgICAgICAgICAgICAgIDwvRmxleD5cblxuICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgIGJnPVwiZ3JheS4wXCJcbiAgICAgICAgICAgICAgICAgICAgcD1cIjE2cHhcIlxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAwOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtOiAncm93JyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgYXM9e0hlaWdodFByb3BzfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiBmYWxzZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2VkaXRlZEl0ZW0/LmlkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Qm94IGZsZXg9ezF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBwYj1cIjhweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkltYWdlIHVybFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcndhcmRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IGZhbHNlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2VkaXRlZEl0ZW0/LmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcGI9XCI4cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByaWNlVGVybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUHJpY2UgdGVybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yd2FyZFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5wcmljZVRlcm19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZWRpdGVkSXRlbT8ucHJpY2VUZXJtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBwYj1cIjhweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm9sZFByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJPbGQgcHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLm9sZFByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2VkaXRlZEl0ZW0/Lm9sZFByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBwYj1cIjhweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5ld1ByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOZXcgcHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLm5ld1ByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2VkaXRlZEl0ZW0/Lm5ld1ByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcGI9XCI4cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZWRpdGVkSXRlbT8ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcGI9XCI4cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNob3J0RGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU2hvcnQgZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLnNob3J0RGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZWRpdGVkSXRlbT8uc2hvcnREZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiNTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcGI9XCI4cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcndhcmRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZWRpdGVkSXRlbT8udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHBiPVwiOHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY291cG9uUHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNvdXBvbiBwcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcndhcmRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuY291cG9uUHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZWRpdGVkSXRlbT8uY291cG9uUHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICBwbD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtOiAnMTZweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleD17MX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBwYj1cIjhweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9uZ1RpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJMb25nIHRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiBmYWxzZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5sb25nVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZWRpdGVkSXRlbT8ubG9uZ1RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcGI9XCI4cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvbmdEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE1MHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJMb25nIGRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yd2FyZFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogZmFsc2UgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMubG9uZ0Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2VkaXRlZEl0ZW0/LmxvbmdEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHBiPVwiOHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImV4cGlyYXRpb25EYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFeHBpcmF0aW9uIERhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmV4cGlyYXRpb25EYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2VkaXRlZEl0ZW0/LmV4cGlyYXRpb25EYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgIDxDb250cm9scy5Gb290ZXI+XG4gICAgICAgICAgICAgICAgPENvbnRyb2xzLkJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICA8L0NvbnRyb2xzLkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8Q29udHJvbHMuQnV0dG9uIGNsYXNzTmFtZT1cInRleHQtc3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgU2F2ZSBDb3Vwb25cbiAgICAgICAgICAgICAgICA8L0NvbnRyb2xzLkJ1dHRvbj5cbiAgICAgICAgICAgIDwvQ29udHJvbHMuRm9vdGVyPlxuICAgICAgICA8L0JveD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB1c2VGb3JtIGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCAqIGFzIENvbnRyb2xzIGZyb20gJy4vY29udHJvbHMnXG5cbmltcG9ydCB7IEJveCwgRmxleCB9IGZyb20gJy4uL3NoYXJlZCdcblxuY29uc3QgSEVJR0hUUyA9IFszMDAsIDQwMCwgNTAwLCA2MDAsIDcwMF1cbmNvbnN0IEZPUk1fUEFSQU1FVEVSID0gMTUwXG5cbmNvbnN0IEhlaWdodFByb3BzID0gc3R5bGVkLmRpdmBcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICR7SEVJR0hUUy5yZWR1Y2UoXG4gICAgICAgIChhY2N1bSwgdmFsKSA9PlxuICAgICAgICAgICAgYCR7YWNjdW19XG4gICAgICAgIEBtZWRpYSAobWluLWhlaWdodDogJHt2YWx9cHgpIHtcbiAgICAgICAgICAgIGhlaWdodDogJHt2YWwgLSBGT1JNX1BBUkFNRVRFUn1weDtcbiAgICAgICAgfVxuICAgIGAsXG4gICAgICAgICcnLFxuICAgICl9XG4gICAgQG1lZGlhIChtaW4taGVpZ2h0OiA4MDBweCkge1xuICAgICAgICBoZWlnaHQ6IGluaXRpYWw7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtfSkge1xuICAgICAgICAgICAgaGVpZ2h0OiA3MDBweDtcbiAgICAgICAgfVxuICAgIH1cbmBcblxuY29uc3QgRm9ybVN1cHBsaWVyUmVnaXN0ZXIgPSAoe1xuICAgIGFzLCBidXR0b25zLCBvbkNsb3NlLCBvblN1Ym1pdCxcbn0pID0+IHtcbiAgICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGVycm9ycyB9ID0gdXNlRm9ybSgpXG4gICAgYnV0dG9ucyA/Pz0gWydzdWJtaXQnLCAnY2FuY2VsJ11cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94XG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgYXM9XCJmb3JtXCJcbiAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxuICAgICAgICA+XG4gICAgICAgICAgICA8Qm94IGJnPVwiZ3JheS4wXCIgY2xhc3NOYW1lPVwicm91bmRlZFwiPlxuICAgICAgICAgICAgICAgIDxGbGV4IHA9XCIxMHB4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlJlZ2lzdGVyIGFzIHN1cHBsaWVyPC9oMj5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICBiZz1cImdyYXkuMFwiXG4gICAgICAgICAgICAgICAgICAgIHA9XCIxNnB4XCJcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgMDogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbTogJ3JvdycsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGFzPXsoYXMgfHwgSGVpZ2h0UHJvcHMpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBmbGV4PXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcGI9XCI4cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBwYj1cIjhweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yd2FyZFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcGI9XCI4cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBYm91dCB5b3VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcndhcmRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IGZhbHNlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7IGJ1dHRvbnMuaW5jbHVkZXMoJ2NhbmNlbCcpID8gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICAgICAgICAgICAgeyBidXR0b25zLmluY2x1ZGVzKCdzdWJtaXQnKSA/IChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApIDogJycgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVN1cHBsaWVyUmVnaXN0ZXJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB1c2VGb3JtIGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcblxuaW1wb3J0ICogYXMgQ29udHJvbHMgZnJvbSAnLi9jb250cm9scydcblxuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vc2hhcmVkJ1xuXG5jb25zdCBGb3JtVm90ZSA9ICh7XG4gICAgYnV0dG9ucywgb25DbG9zZSwgb25TdWJtaXQsIGl0ZW0sXG59KSA9PiB7XG4gICAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnMgfSA9IHVzZUZvcm0oKVxuICAgIGJ1dHRvbnMgPz89IFsnc3VibWl0JywgJ2NhbmNlbCddXG4gICAgY29uc3Qgdm90ZSA9IGl0ZW0/LmlzRmVhdHVyZWQgPyAnZGVsaXN0ZWQnIDogJ2ZlYXR1cmVkJ1xuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICAgIHdpZHRoPVwiODAlXCJcbiAgICAgICAgICAgIG1hcmdpbj1cImF1dG9cIlxuICAgICAgICAgICAgYXM9XCJmb3JtXCJcbiAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxuICAgICAgICA+XG4gICAgICAgICAgICA8Q29udHJvbHMuSW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiaXRlbVwiXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpdGVtPy5pZH1cbiAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiBmYWxzZSB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q29udHJvbHMuSW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpdGVtPy5uYW1lfVxuICAgICAgICAgICAgICAgIGZvcndhcmRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IGZhbHNlIH0pfVxuXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENvbnRyb2xzLklucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInZvdGVcIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dm90ZX1cbiAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiBmYWxzZSB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Qm94IGJnPVwiZ3JheS4wXCIgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIHRleHQtY2VudGVyXCI+e2BWb3RpbmcgZm9yICR7aXRlbT8ubmFtZX1gfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3R5bGU9e3sgbWF4SGVpZ2h0OiAnMjAwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbT8uaW1hZ2V9IGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIGFsdD1cIi4uLlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbT8uaXNGZWF0dXJlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIG15LTIgdGV4dC1tdXRlZFwiPkRlbGlzdGluZyBjb3Vwb24gZnJvbSBmZWF0dXJlZCBsaXN0PC9oND5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIG15LTIgdGV4dC1tdXRlZFwiPkxpc3RpbmcgY291cG9uIHRvIGZlYXR1cmVkIGxpc3Q8L2g0PlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSW4gb3JkZXIgdG8gcGFydGljaXBhdGUgaW4gYWRkaW5nIG9yIHJlbW92aW5nIGEgY291cG9uIGZyb20gdGhlIGxpc3Qgb2YgaGlnaGxpZ2h0ZWQgY291cG9ucywgeW91IHNob3VsZCB2b3RlLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Wb3RpbmcgaXMgZG9uZSBpbiB0d28gc3RlcHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+Q29tbWl0PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgeW91ciB2b3RlIGJ5IHVzaW5nIGEgc2VjcmV0IHBocmFzZS4nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J09uY2UgdGhlIHJlcXVpcmVkIG51bWJlciBvZiBwYXJ0aWNpcGFudHMgaXMgcmVhY2hlZCwgeW91IG11c3QgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPnJldmVhbDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnIHlvdXIgdm90ZSBmb3IgaXQgdG8gYmUgZWZmZWN0aXZlLid9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPVwic2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIldoYXQgZG8geW91IHdhbnQgPyBGZWF0dXJlIG9yIERlbGlzdCB0aGlzIGNvdXBvbiA/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidm90ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yd2FyZFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLnZvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpdGVtPy5pc0ZlYXR1cmVkID8gJ2RlbGlzdGVkJyA6ICdmZWF0dXJlZCd9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmVhdHVyZWRcIj5BZGQgdG8gZmVhdHVyZWQgbGlzdDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWxpc3RlZFwiPlJlbW92ZSBmcm9tIGZlYXR1cmVkIGxpc3Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udHJvbHMuSW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2FsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTZWNyZXQgcGhyYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuc2FsdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIj5EbyBub3QgbG9zZSB5b3VyIHNlY3JldCBwaHJhc2UsIG9yIHlvdSB3aWxsIG5vdCBiZSBhYmxlIHRvIHJldmVhbCB5b3Ugdm90ZSBhdCBzdGVwIDI8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICA8Q29udHJvbHMuRm9vdGVyPlxuICAgICAgICAgICAgICAgIHsgYnV0dG9ucy5pbmNsdWRlcygnY2FuY2VsJykgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5CdXR0b24gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnlcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25DbG9zZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgPC9Db250cm9scy5CdXR0b24+XG4gICAgICAgICAgICAgICAgKSA6ICcnIH1cbiAgICAgICAgICAgICAgICB7IGJ1dHRvbnMuaW5jbHVkZXMoJ3N1Ym1pdCcpID8gKFxuICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuQnV0dG9uIGNsYXNzTmFtZT1cInRleHQtd2FybmluZ1wiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbW1pdFxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRyb2xzLkJ1dHRvbj5cbiAgICAgICAgICAgICAgICApIDogJycgfVxuICAgICAgICAgICAgPC9Db250cm9scy5Gb290ZXI+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVZvdGVcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWRhbmdlciAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQge1xuICAgIEJveCwgRmxleCwgTW9kYWwsIFRleHQsXG59IGZyb20gJy4uL3NoYXJlZCdcblxuY29uc3QgRXJyb3JEaWFsb2cgPSAoeyB0ZXh0LCBvcGVuLCBvbkNsb3NlIH0pID0+IChcbiAgICA8TW9kYWwgb3Blbj17b3Blbn0gb25DbG9zZT17b25DbG9zZX0gekluZGV4PVwiOTlcIj5cbiAgICAgICAgPEJveCB3aWR0aD1cIjYwMHB4XCIgYmc9XCIjMjIwMDAwXCIgY29sb3I9XCJncmF5LjBcIiBjbGFzc05hbWU9XCJyb3VuZGVkLXBpbGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxGbGV4IHA9XCIxNnB4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG15LTMgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjY0XCIgaGVpZ2h0PVwiNjRcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3NOYW1lPVwiYmkgYmktZXhjbGFtYXRpb24tdHJpYW5nbGUtZmlsbFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOC45ODIgMS41NjZhMS4xMyAxLjEzIDAgMCAwLTEuOTYgMEwuMTY1IDEzLjIzM2MtLjQ1Ny43NzguMDkxIDEuNzY3Ljk4IDEuNzY3aDEzLjcxM2MuODg5IDAgMS40MzgtLjk5Ljk4LTEuNzY3TDguOTgyIDEuNTY2ek04IDVjLjUzNSAwIC45NTQuNDYyLjkuOTk1bC0uMzUgMy41MDdhLjU1Mi41NTIgMCAwIDEtMS4xIDBMNy4xIDUuOTk1QS45MDUuOTA1IDAgMCAxIDggNXptLjAwMiA2YTEgMSAwIDEgMSAwIDIgMSAxIDAgMCAxIDAtMnpcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxUZXh0IGxpbmVIZWlnaHQ9XCIyMnB4XCIgcHQ9XCIxMHB4XCIgZm9udFNpemU9XCIxOHB4XCIgY2xhc3NOYW1lPVwibXktMVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PnsgKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJykgJiYgdGV4dC5sZW5ndGggPiAwID8gdGV4dCA6ICcnIH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciB0ZXh0LWNlbnRlciBtdC0zIG1iLTRcIiBvbkNsaWNrPXtvbkNsb3NlfT5jbG9zZTwvYnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICA8L01vZGFsPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvckRpYWxvZ1xuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tZGFuZ2VyICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7XG4gICAgQm94LCBGbGV4LCBUZXh0LCBMb2FkaW5nLFxufSBmcm9tICcuLi9zaGFyZWQnXG5cbmNvbnN0IE1vZGFsTG9hZGluZyA9ICh7IHRleHQgfSkgPT4gKFxuICAgIDxCb3ggd2lkdGg9XCI2MDBweFwiPlxuICAgICAgICA8RmxleCBiZz1cIiMyMjJcIiBwPVwiMTZweFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgY2xhc3NOYW1lPVwicm91bmRlZC1waWxsXCI+XG4gICAgICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgICAgICAgPFRleHQgbGluZUhlaWdodD1cIjIycHhcIiBwdD1cIjEwcHhcIiBmb250U2l6ZT1cIjE4cHhcIiBjb2xvcj1cImdyYXkuMFwiIGNsYXNzTmFtZT1cIm1iLTUgcGItNVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0ZXh0IH19IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgLz5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9GbGV4PlxuICAgIDwvQm94PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbExvYWRpbmdcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgRGlhbG9nIH0gZnJvbSAnLi9EaWFsb2cnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlc3VsdCB9IGZyb20gJy4vUmVzdWx0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGb3JtIH0gZnJvbSAnLi9Gb3JtJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGb3JtU3VwcGxpZXJSZWdpc3RlciB9IGZyb20gJy4vRm9ybVN1cHBsaWVyUmVnaXN0ZXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZvcm1Wb3RlIH0gZnJvbSAnLi9Gb3JtVm90ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXJyb3JEaWFsb2cgfSBmcm9tICcuL0Vycm9yRGlhbG9nJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2FkaW5nIH0gZnJvbSAnLi9Mb2FkaW5nJ1xuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYWNjZXNzaWJsZS1lbW9qaSAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW5lc2NhcGVkLWVudGl0aWVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdXNlRm9ybSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXG5cbmltcG9ydCAqIGFzIENvbnRyb2xzIGZyb20gJy4vY29udHJvbHMnXG5cbmltcG9ydCB7IEJveCB9IGZyb20gJy4uL3NoYXJlZCdcblxuY29uc3QgRm9ybVJldmVhbCA9ICh7XG4gICAgYnV0dG9ucywgb25DbG9zZSwgb25TdWJtaXQsIGl0ZW0sIHZvdGluZyxcbn0pID0+IHtcbiAgICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGVycm9ycyB9ID0gdXNlRm9ybSgpXG4gICAgYnV0dG9ucyA/Pz0gWydzdWJtaXQnLCAnY2FuY2VsJ11cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94XG4gICAgICAgICAgICB3aWR0aD1cIjgwJVwiXG4gICAgICAgICAgICBtYXJnaW49XCJhdXRvXCJcbiAgICAgICAgICAgIGFzPVwiZm9ybVwiXG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPENvbnRyb2xzLklucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIml0ZW1cIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aXRlbT8uaWR9XG4gICAgICAgICAgICAgICAgZm9yd2FyZFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogZmFsc2UgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENvbnRyb2xzLklucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aXRlbT8ubmFtZX1cbiAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiBmYWxzZSB9KX1cblxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPENvbnRyb2xzLklucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbW1pdFwiXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt2b3Rpbmc/LmNvbW1pdH1cbiAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiBmYWxzZSB9KX1cblxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPEJveCBiZz1cImdyYXkuMFwiIGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSB0ZXh0LWNlbnRlclwiPntgVm90aW5nIGZvciAke2l0ZW0/Lm5hbWV9YH08L2g0PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHN0eWxlPXt7IG1heEhlaWdodDogJzIwMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0/LmltYWdlfSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBhbHQ9XCIuLi5cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgbXktMiB0ZXh0LW11dGVkXCI+Vm90ZSBmb3IgbGlzdGluZyBvciBkZWxpc3RpbmcgY291cG9uIGZyb20gZmVhdHVyZWQgbGlzdDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSXQncyB0aW1lIHRvIHJldmVhbCB5b3VyIHZvdGUgdG8gdGhlIHdvcmxkIGFuZCBsaXN0IG9yIGRlbGlzdCB0aGlzIGNvdXBvblxuICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIj7wn5iOPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2FsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTZWNyZXQgcGhyYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuc2FsdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIj5EbyBub3QgbG9zZSB5b3VyIHNlY3JldCBwaHJhc2UsIG9yIHlvdSB3aWxsIG5vdCBiZSBhYmxlIHRvIHJldmVhbCB5b3Ugdm90ZSBhdCBzdGVwIDI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgPENvbnRyb2xzLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICB7IGJ1dHRvbnMuaW5jbHVkZXMoJ2NhbmNlbCcpID8gKFxuICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuQnV0dG9uIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udHJvbHMuQnV0dG9uPlxuICAgICAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICAgICAgICAgICAgeyBidXR0b25zLmluY2x1ZGVzKCdzdWJtaXQnKSA/IChcbiAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLkJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXdhcm5pbmdcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZXZlYWxcbiAgICAgICAgICAgICAgICAgICAgPC9Db250cm9scy5CdXR0b24+XG4gICAgICAgICAgICAgICAgKSA6ICcnIH1cbiAgICAgICAgICAgIDwvQ29udHJvbHMuRm9vdGVyPlxuICAgICAgICA8L0JveD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1SZXZlYWxcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB1c2VBcHBEaWFsb2dzIGZyb20gJy4vdXNlQXBwRGlhbG9ncydcblxuaW1wb3J0IHtcbiAgICBhY2NlcHRQdXJjaGFzZSwgYWRkSXRlbSwgYnVybkNvdXBvbiwgY29tbWl0Vm90ZSwgZm9ybWF0TnVtYmVyLCBwdXJjaGFzZUNvdXBvbixcbiAgICByZWplY3RQdXJjaGFzZSwgcmVtb3ZlSXRlbSwgcmV2ZWFsVm90ZSwgc2VuZENvdXBvblRvU3VwcGxpZXIsIHNob3J0QWRkcmVzcyxcbiAgICB1cGRhdGVJdGVtLCB3aXRoZHJhd0Z1bmRzLFxufSBmcm9tICcuLi8uLi9saWJzL2RBcHAnXG5pbXBvcnQge1xuICAgIERpYWxvZywgRXJyb3JEaWFsb2csIEZvcm0sIFJlc3VsdCwgTG9hZGluZywgRm9ybVZvdGUsXG59IGZyb20gJy4uL21vZGFsJ1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi9zaGFyZWQnXG5pbXBvcnQgRm9ybVJldmVhbCBmcm9tICcuLi9tb2RhbC9Gb3JtUmV2ZWFsJ1xuXG5mdW5jdGlvbiB1c2VDb3Vwb25EaWFsb2dzKCkge1xuICAgIGNvbnN0IHtcbiAgICAgICAgc2VsZWN0ZWRJdGVtLCBzZWxlY3RJdGVtLFxuICAgICAgICBlZGl0ZWRJdGVtLFxuICAgICAgICBkaWFsb2c6IFtkaWFsb2dPcGVuZWQsIG9uRGlhbG9nT3Blbiwgb25EaWFsb2dDbG9zZV0sXG4gICAgICAgIHJlc3VsdDogW3Jlc3VsdFRleHQsIHJlc3VsdE9wZW5lZCwgb25SZXN1bHRPcGVuLCBvblJlc3VsdENsb3NlXSxcbiAgICAgICAgcmVzdWx0QnV5OiBbcmVzdWx0QnV5T3BlbmVkLCBvblJlc3VsdEJ1eU9wZW4sIG9uUmVzdWx0QnV5Q2xvc2VdLFxuICAgICAgICBmb3JtOiBbZm9ybU9wZW5lZCwgb25Gb3JtT3Blbiwgb25Gb3JtQ2xvc2VdLFxuICAgIH0gPSB1c2VBcHBEaWFsb2dzKClcblxuICAgIGNvbnN0IHtcbiAgICAgICAgZWRpdGVkSXRlbTogdm90ZUl0ZW0sXG4gICAgICAgIGZvcm06IFt2b3RlRm9ybU9wZW5lZCwgb25Wb3RlRm9ybU9wZW5lZCwgb25Wb3RlRm9ybUNsb3NlXSxcbiAgICB9ID0gdXNlQXBwRGlhbG9ncygpXG5cbiAgICBjb25zdCB7XG4gICAgICAgIGVkaXRlZEl0ZW06IHJldmVhbEl0ZW0sIGVkaXRlZE9wdGlvbjogcmV2ZWFsT3B0aW9uLFxuICAgICAgICBmb3JtOiBbcmV2ZWFsRm9ybU9wZW5lZCwgb25SZXZlYWxGb3JtT3BlbmVkLCBvblJldmVhbEZvcm1DbG9zZV0sXG4gICAgfSA9IHVzZUFwcERpYWxvZ3MoKVxuXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2Vycm9yUmVzdWx0LCBzZXRFcnJvclJlc3VsdF0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gY2FsbEFjdGlvbihmbiwgbG9hZFRleHQgPSAnJywgcmVzVGV4dCA9ICcnKSB7XG4gICAgICAgIHNldExvYWRpbmcobG9hZFRleHQpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoZm9ybU9wZW5lZCkgb25Gb3JtQ2xvc2UoKVxuICAgICAgICAgICAgaWYgKHZvdGVGb3JtT3BlbmVkKSBvblZvdGVGb3JtQ2xvc2UoKVxuICAgICAgICAgICAgaWYgKHJldmVhbEZvcm1PcGVuZWQpIG9uUmV2ZWFsRm9ybUNsb3NlKClcbiAgICAgICAgICAgIGlmIChkaWFsb2dPcGVuZWQpIG9uRGlhbG9nQ2xvc2UoKVxuICAgICAgICAgICAgYXdhaXQgZm4oKVxuICAgICAgICAgICAgb25SZXN1bHRPcGVuKHJlc1RleHQpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRFcnJvclJlc3VsdChlcnJvcilcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25XaXRoZHJhdyhpdGVtKSB7XG4gICAgICAgIGNhbGxBY3Rpb24oYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pc0V4cGlyZWQgfHwgaXRlbS5pc0J1cm5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB3aXRoZHJhd0Z1bmRzKGl0ZW0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmlzT3duZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYnVybkNvdXBvbihpdGVtKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYDxwPldpdGhkcmF3aW5nIEZ1bmRzIGZvciBjb3Vwb24gPGEgaHJlZj1cIiR7YGh0dHBzOi8vdGVzdG5ldC53YXZlc2V4cGxvcmVyLmNvbS9hc3NldHMvJHtpdGVtPy5hc3NldElkfS9gfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7c2hvcnRBZGRyZXNzKGl0ZW0uYXNzZXRJZCl9PC9hPjxwPmAsXG4gICAgICAgICc8cD5GdW5kcyB3aXRoZHJhd24gc3VjY2Vzc2Z1bGx5PC9wPicpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25SZWplY3QoaXRlbSkge1xuICAgICAgICBjYWxsQWN0aW9uKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgcmVqZWN0UHVyY2hhc2UoaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJzxwPlJlamVjdGluZyBhbmQgcmVmdW5kIGJ1eWVyPC9wPicsXG4gICAgICAgICc8cD5QdXJjaGFzZSByZWplY3RlZCBhbmQgYnV5ZXIgcmVmdW5kZWQ8L3A+JylcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBvbkFjY2VwdChpdGVtKSB7XG4gICAgICAgIGNhbGxBY3Rpb24oYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBhY2NlcHRQdXJjaGFzZShpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnPHA+Q29uZmlybWluZyBwdXJjaGFzZTwvcD4nLFxuICAgICAgICAnPHA+UHVyY2hhc2UgY29uZmlybWVkPC9wPicpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25TYXZlKGRhdGEpIHtcbiAgICAgICAgY2FsbEFjdGlvbihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YT8uaWQ/Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGFkZEl0ZW0oZGF0YSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdXBkYXRlSXRlbShkYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBgPHA+U2F2aW5nIGNvdXBvbjwvcD48cD48Yj4ke2RhdGEubmFtZX08L3A+YCxcbiAgICAgICAgYDxwPkNvdXBvbiA8Yj4ke2RhdGEubmFtZX08L2I+PC9wPjxwPnNhdmVkIHN1Y2Nlc3NmdWxseTwvcD5gKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uUmVtb3ZlKGl0ZW0pIHtcbiAgICAgICAgY2FsbEFjdGlvbihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbT8uaWQ/Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBhd2FpdCByZW1vdmVJdGVtKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGA8cD5SZW1vdmluZyBjb3Vwb248L3A+PHA+PGI+JHtpdGVtLm5hbWV9PC9iPjxwPmAsXG4gICAgICAgIGA8cD5Db3Vwb24gPGI+JHtpdGVtLm5hbWV9PC9iPjwvcD48cD5yZW1vdmVkIHN1Y2Nlc3NmdWxseTwvcD5gKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQnVybihpdGVtKSB7XG4gICAgICAgIGFsZXJ0KDEpXG4gICAgICAgIGNhbGxBY3Rpb24oYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0/LmFzc2V0SWQ/Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBidXJuQ291cG9uKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGA8cD5CdXJuaW5nIGNvdXBvbjwvcD48cD48Yj4ke2l0ZW0ubmFtZX08L2I+PHA+PHA+YW5kIHdpdGhkcmF3IGZ1bmRzYCxcbiAgICAgICAgYDxwPkNvdXBvbiA8Yj4ke2l0ZW0ubmFtZX08L2I+PC9wPjxwPmJ1cm5lZCBzdWNjZXNzZnVsbHk8L3A+PHA+RnVuZHMgJHtmb3JtYXROdW1iZXIoaXRlbS5hbW91bnQpfSBXQVZFUyB3aXRoZHJhd24gc3VjY2Vzc2Z1bGx5PC9wPmApXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25Vc2UoaXRlbSkge1xuICAgICAgICBjYWxsQWN0aW9uKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgc2VuZENvdXBvblRvU3VwcGxpZXIoaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYDxwPlVzaW5nIGNvdXBvbjwvcD48cD48Yj4ke2l0ZW0ubmFtZSB8fCBpdGVtLml0ZW0/Lm5hbWV9PC9iPjxwPmAsXG4gICAgICAgICc8cD5UaGFuayB5b3UgZm9yIHVzaW5nIHRoaXMgY291cG9uLiBXZSBob3BlIHlvdSBhcmUgaGFwcHkgd2l0aCB5b3VyIGRpc2NvdW50PC9wPicpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25CdXkoaXRlbSkge1xuICAgICAgICBjYWxsQWN0aW9uKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgcHVyY2hhc2VDb3Vwb24oaXRlbS5pdGVtIHx8IGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGA8cD5TZW5kaW5nIHB1cmNoYXNlIHRyYW5zYWN0aW9uIGZvciBjb3Vwb248L3A+PHA+PGI+JHtpdGVtLml0ZW0/Lm5hbWUgfHwgaXRlbS5uYW1lfTwvYj48cD5gLFxuICAgICAgICAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5UaGFuayB5b3UgZm9yIHlvdXIgcHVyY2hhc2UuPC9kaXY+PHA+VGhlIHN1cHBsaWVyIHdpbGwgc29vbiB2YWxpZGF0ZSB0aGlzIHRyYW5zYWN0aW9uIGFuZCB5b3Ugd2lsbCByZWNlaXZlIHlvdXIgY291cG9uIGFzIE5GVDwvcD4nKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uVm90ZShpdGVtLCB2b3RpbmcpIHtcbiAgICAgICAgb25EaWFsb2dDbG9zZSgpXG4gICAgICAgIHNlbGVjdEl0ZW0oaXRlbSlcbiAgICAgICAgb25Wb3RlRm9ybU9wZW5lZChpdGVtLCB2b3RpbmcpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25SZXZlYWwoaXRlbSwgdm90aW5nKSB7XG4gICAgICAgIG9uRGlhbG9nQ2xvc2UoKVxuICAgICAgICBzZWxlY3RJdGVtKGl0ZW0pXG4gICAgICAgIG9uUmV2ZWFsRm9ybU9wZW5lZChpdGVtLCB2b3RpbmcpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25Wb3RlQ29tbWl0KGRhdGEpIHtcbiAgICAgICAgY2FsbEFjdGlvbihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKGRhdGEpXG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnZvdGUgJiYgZGF0YS5pdGVtICYmIGRhdGEuc2FsdCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGNvbW1pdFZvdGUoZGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYDxwPlNlbmRpbmcgY29tbWl0IHRyYW5zYWN0aW9uIGZvciBjb3Vwb248L3A+PHA+PGI+JHtkYXRhLm5hbWV9PC9iPjxwPmAsXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlRoYW5rIHlvdSBmb3Igdm90aW5nLjwvZGl2PicpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25Wb3RlUmV2ZWFsKGRhdGEpIHtcbiAgICAgICAgY2FsbEFjdGlvbihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmNvbW1pdCAmJiBkYXRhLml0ZW0gJiYgZGF0YS5zYWx0KSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgcmV2ZWFsVm90ZShkYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBgPHA+U2VuZGluZyByZXZlYWwgdHJhbnNhY3Rpb24gZm9yIGNvdXBvbjwvcD48cD48Yj4ke2RhdGEubmFtZX08L2I+PHA+YCxcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+VGhhbmsgeW91IGZvciB2b3RpbmcuPC9kaXY+JylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBDb3Vwb25EaWFsb2dzKHtcbiAgICAgICAgbW9kZSwgZW5hYmxlVm90aW5nLFxuICAgIH0pIHtcbiAgICAgICAgY29uc3QgZGlhbG9nQnV0dG9ucyA9IG1vZGUgPT09ICdtYW5hZ2UnID8gWydlZGl0JywgJ3JlbW92ZSddXG4gICAgICAgICAgICA6IG1vZGUgPT09ICd3aXRoZHJhdycgPyBbJ3dpdGhkcmF3J11cbiAgICAgICAgICAgICAgICA6IG1vZGUgPT09ICdhcHByb3ZhbCcgPyBbJ2FjY2VwdCcsICdyZWplY3QnXVxuICAgICAgICAgICAgICAgICAgICA6IG1vZGUgPT09ICdtYXJrZXQnID8gWydidXknXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBtb2RlID09PSAnYWN0aXZlJyA/IFsndXNlJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFsnYnV5J11cblxuICAgICAgICBpZiAoZW5hYmxlVm90aW5nKSBkaWFsb2dCdXR0b25zLnB1c2goJ3ZvdGUnKVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TW9kYWwgb3Blbj17ZGlhbG9nT3BlbmVkfSBvbkNsb3NlPXtvbkRpYWxvZ0Nsb3NlfT5cbiAgICAgICAgICAgICAgICA8RGlhbG9nXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnM9e2RpYWxvZ0J1dHRvbnN9XG4gICAgICAgICAgICAgICAgICAgIGNvdXBvbj17c2VsZWN0ZWRJdGVtfVxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtvbkRpYWxvZ0Nsb3NlfVxuICAgICAgICAgICAgICAgICAgICBvbkVkaXQ9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRGlhbG9nQ2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Gb3JtT3BlbihzZWxlY3RlZEl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uVm90ZT17b25Wb3RlfVxuICAgICAgICAgICAgICAgICAgICBvblJldmVhbD17b25SZXZlYWx9XG4gICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXsoKSA9PiBvblJlbW92ZShzZWxlY3RlZEl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICBvbldpdGhkcmF3PXsoKSA9PiBvbldpdGhkcmF3KHNlbGVjdGVkSXRlbSl9XG4gICAgICAgICAgICAgICAgICAgIG9uQWNjZXB0PXsoKSA9PiBvbkFjY2VwdChzZWxlY3RlZEl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICBvblJlamVjdD17KCkgPT4gb25SZWplY3Qoc2VsZWN0ZWRJdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgb25CdXJuPXsoKSA9PiBvbkJ1cm4oc2VsZWN0ZWRJdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgb25CdXk9eygpID0+IG9uQnV5KHNlbGVjdGVkSXRlbSl9XG4gICAgICAgICAgICAgICAgICAgIG9uVXNlPXsoKSA9PiBvblVzZShzZWxlY3RlZEl0ZW0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgb3Blbj17Zm9ybU9wZW5lZH1cbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtvbkZvcm1DbG9zZX1cbiAgICAgICAgICAgICAgICB3aWR0aD17e1xuICAgICAgICAgICAgICAgICAgICAwOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIGxnOiAnaW5pdGlhbCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBteD1cIjEwcHhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgICAgICAgIGVkaXRlZEl0ZW09e2VkaXRlZEl0ZW19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e29uRm9ybUNsb3NlfVxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgZGF0YSA9PiBvblNhdmUoZGF0YSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTW9kYWw+XG5cbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIG9wZW49e3ZvdGVGb3JtT3BlbmVkfVxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e29uVm90ZUZvcm1DbG9zZX1cbiAgICAgICAgICAgICAgICB3aWR0aD17e1xuICAgICAgICAgICAgICAgICAgICAwOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIGxnOiAnaW5pdGlhbCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBteD1cIjEwcHhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGb3JtVm90ZVxuICAgICAgICAgICAgICAgICAgICBpdGVtPXt2b3RlSXRlbT8uaXRlbSB8fCB2b3RlSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17b25Wb3RlRm9ybUNsb3NlfVxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17b25Wb3RlQ29tbWl0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L01vZGFsPlxuXG4gICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICBvcGVuPXtyZXZlYWxGb3JtT3BlbmVkfVxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e29uUmV2ZWFsRm9ybUNsb3NlfVxuICAgICAgICAgICAgICAgIHdpZHRoPXt7XG4gICAgICAgICAgICAgICAgICAgIDA6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgbGc6ICdpbml0aWFsJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG14PVwiMTBweFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZvcm1SZXZlYWxcbiAgICAgICAgICAgICAgICAgICAgaXRlbT17cmV2ZWFsSXRlbT8uaXRlbSB8fCByZXZlYWxJdGVtfVxuICAgICAgICAgICAgICAgICAgICB2b3Rpbmc9e3JldmVhbE9wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17b25SZXZlYWxGb3JtQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtvblZvdGVSZXZlYWx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTW9kYWw+XG5cbiAgICAgICAgICAgIDxNb2RhbCBvcGVuPXtyZXN1bHRPcGVuZWR9IG9uQ2xvc2U9e29uUmVzdWx0Q2xvc2V9PlxuICAgICAgICAgICAgICAgIDxSZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgdGV4dD17cmVzdWx0VGV4dH1cbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17b25SZXN1bHRDbG9zZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgIDxNb2RhbCBvcGVuPXt0eXBlb2YgbG9hZGluZyA9PT0gJ3N0cmluZyd9IG9uQ2xvc2U9eygpID0+IHNldExvYWRpbmcoZmFsc2UpfT5cbiAgICAgICAgICAgICAgICA8TG9hZGluZyBjbGFzc05hbWU9XCJiZy1kYXJrXCIgdGV4dD17bG9hZGluZ30gLz5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICA8RXJyb3JEaWFsb2cgY2xhc3NOYW1lPVwiYmctZGFya1wiIHRleHQ9e2Vycm9yUmVzdWx0Py5tZXNzYWdlfSBvcGVuPXt0eXBlb2YgZXJyb3JSZXN1bHQgPT09ICdvYmplY3QnfSBvbkNsb3NlPXsoKSA9PiBzZXRFcnJvclJlc3VsdChmYWxzZSl9IC8+XG4gICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgQ291cG9uRGlhbG9ncyxcbiAgICAgICAgc2VsZWN0ZWRJdGVtLFxuICAgICAgICBlZGl0ZWRJdGVtLFxuICAgICAgICBkaWFsb2c6IFtkaWFsb2dPcGVuZWQsIG9uRGlhbG9nT3Blbiwgb25EaWFsb2dDbG9zZV0sXG4gICAgICAgIHJlc3VsdDogW3Jlc3VsdE9wZW5lZCwgb25SZXN1bHRPcGVuLCBvblJlc3VsdENsb3NlXSxcbiAgICAgICAgcmVzdWx0QnV5OiBbcmVzdWx0QnV5T3BlbmVkLCBvblJlc3VsdEJ1eU9wZW4sIG9uUmVzdWx0QnV5Q2xvc2VdLFxuICAgICAgICBmb3JtOiBbZm9ybU9wZW5lZCwgb25Gb3JtT3Blbiwgb25Gb3JtQ2xvc2VdLFxuICAgICAgICBzaG93SXRlbTogb25EaWFsb2dPcGVuLFxuICAgICAgICBvbkJ1eSxcbiAgICAgICAgb25Wb3RlLFxuICAgICAgICBvblJldmVhbCxcbiAgICAgICAgb25Vc2UsXG4gICAgICAgIG9uUmVtb3ZlLFxuICAgICAgICBvblNhdmUsXG4gICAgICAgIG9uUmVqZWN0LFxuICAgICAgICBvbkFjY2VwdCxcbiAgICAgICAgb25CdXJuLFxuICAgICAgICBvbldpdGhkcmF3LFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlQ291cG9uRGlhbG9nc1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VBcHBEaWFsb2dzIH0gZnJvbSAnLi91c2VBcHBEaWFsb2dzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VEaXNwYXRjaGVkQWN0aW9ucyB9IGZyb20gJy4vdXNlRGlzcGF0Y2hlZEFjdGlvbnMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVN1cHBsaWVyUmVnaXN0ZXJEaWFsb2dzIH0gZnJvbSAnLi91c2VTdXBwbGllclJlZ2lzdGVyRGlhbG9ncydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlQ291cG9uRGlhbG9ncyB9IGZyb20gJy4vdXNlQ291cG9uRGlhbG9ncydcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCBDb3Vwb24gZnJvbSAnLi4vY29tcG9uZW50cy9jb3Vwb24nXG5pbXBvcnQgeyB1c2VDb3Vwb25EaWFsb2dzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zZXJ2aWNlJ1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQnXG5cbmNvbnN0IENhcmQgPSBzdHlsZWQoQm94KWBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyBsaW5lYXIgMjAwbXM7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICB9XG5gXG5cbmNvbnN0IENvdXBvbnMgPSAoe1xuICAgIHNldEFjdGl2ZVVybCwgbW9kZSwgaXNNYW5hZ2VyLCBpdGVtcywgaGlkZUVtcHR5TGlzdE1lc3NhZ2UsIGVuYWJsZVZvdGluZyxcbn0pID0+IHtcbiAgICBjb25zdCB7IENvdXBvbkRpYWxvZ3MsIHNob3dJdGVtIH0gPSB1c2VDb3Vwb25EaWFsb2dzKClcbiAgICBpdGVtcyA/Pz0gW11cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2lzTWFuYWdlciAmJiBpdGVtcy5sZW5ndGggPT09IDAgJiYgIWhpZGVFbXB0eUxpc3RNZXNzYWdlID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFyayB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICBObyBjb3Vwb25zIHlldCwgYWRkIGEgY291cG9uIHRvIHN0YXJ0XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbCB9XG4gICAgICAgICAgICB7IWlzTWFuYWdlciAmJiBpdGVtcy5sZW5ndGggPT09IDAgJiYgIWhpZGVFbXB0eUxpc3RNZXNzYWdlID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFyayB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICBObyBjb3Vwb25zIHlldCwgZ28gdG8gJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGhyZWY9XCIjZmVhdHVyZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVVcmwoJyNmZWF0dXJlZCcpfT5NYXJrZXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyB0byBidXkgY291cG9uc1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IG51bGwgfVxuXG4gICAgICAgICAgICB7aXRlbXMubGVuZ3RoID4gMCA/IGl0ZW1zLm1hcChlID0+IChcbiAgICAgICAgICAgICAgICA8Qm94IGtleT17ZS5pZH0gcD1cIjIwcHhcIiB3aWR0aD17eyAwOiAnMTAwJScsIG1kOiAnaW5pdGlhbCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggYXM9e0NhcmR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2UuaXNFeHBpcmVkID8gJ2FsZXJ0IGFsZXJ0LWRhbmdlciBwLTEgbS0wJyA6ICcnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291cG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXt7IDA6ICcxMDAlJywgbWQ6ICczMDBweCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uKGUuaXRlbSB8fCBlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2hvd0l0ZW0oZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZS5pc0V4cGlyZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xIHRleHQtY2VudGVyXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyB9fT5UaGlzIGNvdXBvbiBoYXMgZXhwaXJlZDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKSkgOiBudWxsIH1cblxuICAgICAgICAgICAgPENvdXBvbkRpYWxvZ3MgbW9kZT17bW9kZX0gZW5hYmxlVm90aW5nPXtlbmFibGVWb3Rpbmd9IGlzTWFuYWdlcj17aXNNYW5hZ2VyfSAvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdXBvbnNcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbXBvcnQgQlRWb3RpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9jdXN0b20vYnRWb3RpbmcnXG5pbXBvcnQgeyBORlRJY29uLCBVc2VySWNvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci1jb250cm9scydcbmltcG9ydCB7IHVzZUNvdXBvbkRpYWxvZ3MgfSBmcm9tICcuLi9jb21wb25lbnRzL3NlcnZpY2UnXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZCdcbmltcG9ydCBCYWRnZSBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9CYWRnZSdcbmltcG9ydCB7XG4gICAgY29sb3JTdGF0dXMsIGZvcm1hdERhdGUsIGZvcm1hdE51bWJlciwgc2hvcnRBZGRyZXNzLFxufSBmcm9tICcuLi9saWJzL2RBcHAnXG5cbmNvbnN0IENhcmQgPSBzdHlsZWQoQm94KWBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyBsaW5lYXIgMjAwbXM7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICB9XG5gXG5cbmNvbnN0IENvdXBvbnNMaXN0ID0gKHtcbiAgICBtb2RlLCBpc01hbmFnZXIsIGl0ZW1zLCBzZXRBY3RpdmVVcmwsIGhpZGVFbXB0eUxpc3RNZXNzYWdlLCBlbmFibGVWb3RpbmcsXG59KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBDb3Vwb25EaWFsb2dzLCBzaG93SXRlbSxcbiAgICAgICAgb25XaXRoZHJhdywgb25CdXJuLFxuICAgICAgICBvbkFjY2VwdCwgb25SZWplY3QsXG4gICAgICAgIG9uVm90ZSwgb25SZXZlYWwsXG4gICAgfSA9IHVzZUNvdXBvbkRpYWxvZ3MoKVxuXG4gICAgaXRlbXMgPz89IFtdXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICB7aXRlbXMubGVuZ3RoID09PSAwICYmIGlzTWFuYWdlciAmJiAhaGlkZUVtcHR5TGlzdE1lc3NhZ2UgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhcmsgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIE5vIGNvdXBvbnMgeWV0LCBnbyB0byAmbmJzcDtcbiAgICAgICAgICAgICAgICA8Qm94IGFzPVwic3BhblwiIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVVybCgnI3N1cHBsaWVyL21hbmFnZScpfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgaHJlZj1cIiNzdXBwbGllci9tYW5hZ2VcIj5NYW5hZ2UgQ291cG9uczwvYT5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICZuYnNwOyB0byBhZGQsIHVwZGF0ZSBvciByZW1vdmUgY291cG9uc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsIH1cblxuICAgICAgICB7aXRlbXMubGVuZ3RoID09PSAwICYmICFpc01hbmFnZXIgJiYgIWhpZGVFbXB0eUxpc3RNZXNzYWdlID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgTm8gY291cG9ucyB5ZXQsIGdvIHRvICZuYnNwO1xuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGhyZWY9XCIjZmVhdHVyZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVVcmwoJyNmZWF0dXJlZCcpfT5NYXJrZXQ8L2E+XG4gICAgICAgICAgICAmbmJzcDsgdG8gYnV5IGNvdXBvbnNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbCB9XG5cbiAgICAgICAge2l0ZW1zLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXJlc3BvbnNpdmUtc21cIj5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db3Vwb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5ORlQgQWRkcmVzczwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPntpc01hbmFnZXIgPyAnT3duZWQgYnknIDogJ1N1cHBsaWVyJ308L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzTWFuYWdlciA/IG1vZGUgPT09ICd3aXRoZHJhdycgPyAnQXZhaWxhYmxlIEZ1bmRzJyA6ICdMb2NrZWQgRnVuZHMnIDogJ1BhaWQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkV4cGlyZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPntpc01hbmFnZXIgPyAnQWN0aW9ucycgOiAnVm90aW5nJyB9PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVmQWRkciA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuaXNNYW5hZ2VyICYmIGUuaXNPd25lZCkgcmVmQWRkciA9IGUuc3VwcGxpZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlLmlzTWFuYWdlciAmJiAhZS5pc093bmVkKSByZWZBZGRyID0gZS51c2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZS5pc093bmVkKSByZWZBZGRyID0gZS51c2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZWZBZGRyID0gZS5zdXBwbGllclxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVmTmFtZSA9IHJlZkFkZHIgPT09IGUuc3VwcGxpZXIgPyBlLnN1cHBsaWVyRGF0YT8ubmFtZSB8fCBudWxsIDogcmVmQWRkclxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZS5jb3Vwb25TdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNDb2xvciA9IGNvbG9yU3RhdHVzKHN0YXR1cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtlLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7Zm9ybWF0RGF0ZShuZXcgRGF0ZShlLnRpbWVzdGFtcCkpfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17YGJhZGdlIGJhZGdlLSR7c3RhdHVzQ29sb3J9IHAtMmB9IG9uQ2xpY2s9eygpID0+IHNob3dJdGVtKGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBtYXhIZWlnaHQ6ICcyMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2UuaXRlbS5pbWFnZX0gd2lkdGg9XCIxNTBweFwiIGFsdD17ZS5pdGVtPy5uYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+PGI+e2AgJHtlLml0ZW0/Lm5hbWV9YH08L2I+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly90ZXN0bmV0LndhdmVzZXhwbG9yZXIuY29tL2Fzc2V0cy8ke2UuYXNzZXRJZH0vYH0gdGl0bGU9e2UuYXNzZXRJZH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TkZUSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvcnRBZGRyZXNzKGUuYXNzZXRJZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly90ZXN0bmV0LndhdmVzZXhwbG9yZXIuY29tL2FkZHJlc3MvJHtyZWZBZGRyfS9gfSB0aXRsZT17cmVmQWRkcn0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlckljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2UuaXNPd25lZCA/ICcgWW91ICcgOiByZWZOYW1lIHx8IHNob3J0QWRkcmVzcyhyZWZBZGRyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtmb3JtYXROdW1iZXIoZS5hbW91bnQpfSBgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNtYWxsXCI+V0FWRVM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXREYXRlKG5ldyBEYXRlKGUuaXRlbT8uZXhwaXJhdGlvbkRhdGUpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIHRleHQ9e3N0YXR1c30gdHlwZT17c3RhdHVzQ29sb3J9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc01hbmFnZXIgJiYgbW9kZSAhPT0gJ2hpc3RvcnknID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG1vZGUgPT09ICdhcHByb3ZhbCcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiTG9nb3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIkFjY2VwdCB0aGlzIGNvdXBvbiBhbmQgc2VuZCBORlQgdG8gYnV5ZXJcIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXsoKSA9PiBvbkFjY2VwdChlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiUmVqZWN0IHRoaXMgY291cG9uIGFuZCByZWZ1bmQgYnV5ZXJcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9eygpID0+IG9uUmVqZWN0KGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtb2RlID09PSAnd2l0aGRyYXcnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0aXRsZT17ZS5pc093bmVkID8gJ0J1cm4gKyBXaXRoZHJhdyBGdW5kcycgOiAnV2l0aGRyYXcgRnVuZHMnfSBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXsoKSA9PiBvbldpdGhkcmF3KGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdpdGhkcmF3IEZ1bmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtb2RlID09PSAnYnVybicgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IG9uQnVybihlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCdXJuIENvdXBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgIWlzTWFuYWdlciAmJiAobW9kZSA9PT0gJ2FjdGl2ZScgfHwgbW9kZSA9PT0gJ3VzZWQnIHx8IG1vZGUgPT09ICdoaXN0b3J5JykgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QlRWb3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtPXtlLml0ZW0gfHwgZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b3Rpbmc9e2Uudm90aW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29tbWl0Vm90ZT17b25Wb3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmV2ZWFsVm90ZT17b25SZXZlYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbCB9XG5cbiAgICAgICAgPENvdXBvbkRpYWxvZ3MgaXNNYW5hZ2VyPXtpc01hbmFnZXJ9IG1vZGU9e21vZGV9IGVuYWJsZVZvdGluZz17ZW5hYmxlVm90aW5nfSAvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdXBvbnNMaXN0XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1uZXN0ZWQtdGVybmFyeSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0IEJUVm90aW5nIGZyb20gJy4uL2NvbXBvbmVudHMvY3VzdG9tL2J0Vm90aW5nJ1xuaW1wb3J0IHsgdXNlQ291cG9uRGlhbG9ncyB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2VydmljZSdcbmltcG9ydCB7IEJveCB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkJ1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4uL2xpYnMvZEFwcCdcblxuY29uc3QgQ2FyZCA9IHN0eWxlZChCb3gpYFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IGxpbmVhciAyMDBtcztcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIH1cbmBcblxuY29uc3QgVm90aW5nTGlzdCA9ICh7XG4gICAgbW9kZSwgaXRlbXMsIHNldEFjdGl2ZVVybCwgaGlkZUVtcHR5TGlzdE1lc3NhZ2UsXG59KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBDb3Vwb25EaWFsb2dzLCBzaG93SXRlbSxcbiAgICAgICAgb25Wb3RlLCBvblJldmVhbCxcbiAgICB9ID0gdXNlQ291cG9uRGlhbG9ncygpXG5cbiAgICBpdGVtcyA/Pz0gW11cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIHtpdGVtcy5sZW5ndGggPT09IDAgJiYgIWhpZGVFbXB0eUxpc3RNZXNzYWdlID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgTm8gY291cG9ucyB5ZXQsIGdvIHRvICZuYnNwO1xuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGhyZWY9XCIjZmVhdHVyZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVVcmwoJyNmZWF0dXJlZCcpfT5NYXJrZXQ8L2E+XG4gICAgICAgICAgICAmbmJzcDsgdG8gYnV5IGNvdXBvbnNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbCB9XG5cbiAgICAgICAge2l0ZW1zLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXJlc3BvbnNpdmUtc21cIj5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNvdXBvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkV4cGlyZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJvdW5kPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Vm90aW5nPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17ZS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnkgcC0yXCIgb25DbGljaz17KCkgPT4gc2hvd0l0ZW0oZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgbWF4SGVpZ2h0OiAnMjBweCcsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2UuaW1hZ2V9IHdpZHRoPVwiMTUwcHhcIiBhbHQ9e2UubmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj48Yj57YCAke2UubmFtZX1gfTwvYj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdERhdGUobmV3IERhdGUoZS5leHBpcmF0aW9uRGF0ZSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5IHJvdW5kZWQgcC0zXCIgc3R5bGU9e3sgZm9udFNpemU6ICcxOHB4JywgbWluV2lkdGg6ICc4MHB4JyB9fT57ZS52b3Rpbmcucm91bmQgKyAxfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJUVm90aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT17ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b3Rpbmc9e2Uudm90aW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29tbWl0Vm90ZT17b25Wb3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmV2ZWFsVm90ZT17b25SZXZlYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsIH1cblxuICAgICAgICA8Q291cG9uRGlhbG9ncyBtb2RlPXttb2RlfSBlbmFibGVWb3RpbmcgLz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBWb3RpbmdMaXN0XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1uZXN0ZWQtdGVybmFyeSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQnXG5pbXBvcnQge1xuICAgIGNvbG9yU3RhdHVzLCBmb3JtYXREYXRlLCBmb3JtYXROdW1iZXIsIHNob3J0QWRkcmVzcyxcbn0gZnJvbSAnLi4vbGlicy9kQXBwJ1xuaW1wb3J0IHsgdXNlQ291cG9uRGlhbG9ncyB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2VydmljZSdcbmltcG9ydCBCYWRnZSBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9CYWRnZSdcbmltcG9ydCB7IE5GVEljb24sIFVzZXJJY29uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLWNvbnRyb2xzJ1xuXG5jb25zdCBDYXJkID0gc3R5bGVkKEJveClgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgbGluZWFyIDIwMG1zO1xuICAgICY6aG92ZXIge1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgfVxuYFxuXG5jb25zdCBQdXJjaGFzZXMgPSAoe1xuICAgIGl0ZW1zLCBzZXRBY3RpdmVVcmwsIG1vZGUsIGlzTWFuYWdlciwgaGlkZUVtcHR5TGlzdE1lc3NhZ2UsIGVuYWJsZVZvdGluZyxcbn0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIENvdXBvbkRpYWxvZ3MsIHNob3dJdGVtLFxuICAgICAgICBvbkFjY2VwdCwgb25SZWplY3QsXG4gICAgfSA9IHVzZUNvdXBvbkRpYWxvZ3MoKVxuXG4gICAgaXRlbXMgPz89IFtdXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICB7aXRlbXMubGVuZ3RoID09PSAwICYmIGlzTWFuYWdlciAmJiAhaGlkZUVtcHR5TGlzdE1lc3NhZ2UgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhcmsgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBObyBwdXJjaGFzZXMgeWV0LCBnbyB0byAmbmJzcDtcbiAgICAgICAgICAgICAgICA8Qm94IGFzPVwic3BhblwiIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVVybCgnI3N1cHBsaWVyL21hbmFnZScpfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgaHJlZj1cIiNzdXBwbGllci9tYW5hZ2VcIj5NYW5hZ2UgQ291cG9uczwvYT5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAmbmJzcDsgdG8gYWRkLCB1cGRhdGUgb3IgcmVtb3ZlIGNvdXBvbnNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbCB9XG5cbiAgICAgICAge2l0ZW1zLmxlbmd0aCA9PT0gMCAmJiAhaXNNYW5hZ2VyICYmICFoaWRlRW1wdHlMaXN0TWVzc2FnZSA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIE5vIHB1cmNoYXNlcyB5ZXQsIGdvIHRvICZuYnNwO1xuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGhyZWY9XCIjZmVhdHVyZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVVcmwoJyNmZWF0dXJlZCcpfT5NYXJrZXQ8L2E+XG4gICAgICAgICAgICAmbmJzcDsgdG8gYnV5IGNvdXBvbnNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbCB9XG5cbiAgICAgICAge2l0ZW1zLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNvdXBvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+Jm5ic3A7PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57aXNNYW5hZ2VyID8gJ0J1eWVyJyA6ICdTdXBwbGllcid9PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+RXhwaXJlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAge2lzTWFuYWdlciAmJiBtb2RlICE9PSAnaGlzdG9yeScgPyAoPHRoPkFjdGlvbnM8L3RoPikgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZBZGRyID0gaXNNYW5hZ2VyID8gZS51c2VyIDogZS5zdXBwbGllclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VwcGxpZXJOYW1lID0gIWlzTWFuYWdlciA/IGUuc3VwcGxpZXJEYXRhPy5uYW1lIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gbW9kZSA9PT0gJ2hpc3RvcnknID8gZS5zdGF0dXMgOiBlLmNvdXBvblN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzQ29sb3IgPSBjb2xvclN0YXR1cyhzdGF0dXMpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3Vwb25TdGF0dXNDb2xvciA9IGNvbG9yU3RhdHVzKGUuY291cG9uU3RhdHVzKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2UuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7Zm9ybWF0RGF0ZShuZXcgRGF0ZShlLnRpbWVzdGFtcCkpfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17YGJhZGdlIGJhZGdlLSR7c3RhdHVzQ29sb3J9IHAtMmB9IG9uQ2xpY2s9eygpID0+IHNob3dJdGVtKGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG1heEhlaWdodDogJzIwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtlLml0ZW0uaW1hZ2V9IHdpZHRoPVwiMTUwcHhcIiBhbHQ9e2UuaXRlbT8ubmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj48Yj57YCAke2UuaXRlbT8ubmFtZX1gfTwvYj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtb2RlID09PSAnaGlzdG9yeScgJiYgdHlwZW9mIGUuYXNzZXRJZCA9PT0gJ3N0cmluZycgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnbmZ0OiAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5GVEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly90ZXN0bmV0LndhdmVzZXhwbG9yZXIuY29tL2Fzc2V0cy8ke2UuYXNzZXRJZH1gfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+e3Nob3J0QWRkcmVzcyhlLmFzc2V0SWQpfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J3N0YXR1czogJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSB0ZXh0PXtlLmNvdXBvblN0YXR1c30gdHlwZT17Y291cG9uU3RhdHVzQ29sb3J9IHA9ezB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vdGVzdG5ldC53YXZlc2V4cGxvcmVyLmNvbS9hZGRyZXNzLyR7cmVmQWRkcn0vYH0gdGl0bGU9e3JlZkFkZHJ9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlckljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGAgJHtzdXBwbGllck5hbWUgfHwgc2hvcnRBZGRyZXNzKHJlZkFkZHIpfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtmb3JtYXROdW1iZXIoZS5hbW91bnQpfSBgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic21hbGxcIj5XQVZFUzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdERhdGUobmV3IERhdGUoZS5pdGVtPy5leHBpcmF0aW9uRGF0ZSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgdGV4dD17c3RhdHVzfSB0eXBlPXtzdGF0dXNDb2xvcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzTWFuYWdlciAmJiBtb2RlICE9PSAnaGlzdG9yeScgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtb2RlID09PSAnYXBwcm92YWwnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkxvZ291dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJBY2NlcHQgdGhpcyBjb3Vwb24gYW5kIHNlbmQgTkZUIHRvIGJ1eWVyXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCIgb25DbGljaz17KCkgPT4gb25BY2NlcHQoZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIlJlamVjdCB0aGlzIGNvdXBvbiBhbmQgcmVmdW5kIGJ1eWVyXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiBvblJlamVjdChlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgKSA6IG51bGwgfVxuXG4gICAgICAgIDxDb3Vwb25EaWFsb2dzIGlzTWFuYWdlcj17aXNNYW5hZ2VyfSBtb2RlPXttb2RlfSBlbmFibGVWb3Rpbmc9e2VuYWJsZVZvdGluZ30gLz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQdXJjaGFzZXNcbiIsImNvbnN0IHRoZW1lID0ge1xuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIHNtOiAnNjIwcHgnLFxuICAgICAgICBtZDogJzc2OHB4JyxcbiAgICAgICAgbGc6ICcxMDI0cHgnLFxuICAgICAgICB4bDogJzEyMDBweCcsXG4gICAgfSxcbiAgICBjb2xvcnM6IHtcbiAgICAgICAgYmxhY2s6IFsnIzMzMyddLFxuICAgICAgICBibHVlOiBbJyMyRUI0RkYnXSxcbiAgICAgICAgZ3JheTogWycjZmZmJywgJyNGN0Y4RkEnLCAnI0EwQTZDMycsICcjRDhEOEQ4J10sXG4gICAgICAgIHJlZDogWycjRkYwMDAwJ10sXG4gICAgICAgIGdyZWVuOiBbJyNCM0ZGREUnLCAnIzJkOWMyOSddLFxuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWR1Y2VyKGluaXRpYWxTdGF0ZSwgaGFuZGxlcnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhoYW5kbGVycykuZmluZCh4ID0+IHggPT09IGFjdGlvbi50eXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXJzW2FjdGlvbi50eXBlXShzdGF0ZSwgYWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBtYWtlQWN0aW9uQ3JlYXRvcih0eXBlLCAuLi5hcmdOYW1lcykge1xuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSB7IHR5cGUgfTtcbiAgICAgICAgYXJnTmFtZXMuZm9yRWFjaCgoXywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGFjdGlvblthcmdOYW1lc1tpbmRleF1dID0gYXJnc1tpbmRleF07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWN0aW9uO1xuICAgIH07XG59XG4iLCJjb25zdCBmZXRjaENvbnN0ID0gY29uc3RhbnQgPT4gKHtcbiAgICBDTEVBUjogYCR7Y29uc3RhbnR9X0NMRUFSYCxcbiAgICBFUlJPUjogYCR7Y29uc3RhbnR9X0VSUk9SYCxcbiAgICBSRVFVRVNUOiBgJHtjb25zdGFudH1fUkVRVUVTVGAsXG4gICAgU1VDQ0VTUzogYCR7Y29uc3RhbnR9X1NVQ0NFU1NgLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoQ29uc3Q7XG4iLCJjb25zdCBwaXBlUmVkdWNlcnMgPSAoLi4ucmVkdWNlcnMpID0+IChzdGF0ZSwgYWN0aW9uKSA9PlxuICAgIHJlZHVjZXJzLnJlZHVjZSgobmV4dCwgcmVkdWNlcikgPT4gcmVkdWNlcihuZXh0LCBhY3Rpb24pLCBzdGF0ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IHBpcGVSZWR1Y2VycztcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltbXV0YWJsZVJlZHVjZXIoaW5pdGlhbFN0YXRlLCBoYW5kbGVycykge1xuICAgIHJldHVybiBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGhhbmRsZXJzKS5maW5kKHggPT4geCA9PT0gYWN0aW9uLnR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0U3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyc1thY3Rpb24udHlwZV0oZHJhZnRTdGF0ZSwgYWN0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9O1xufVxuIiwiY29uc3QgcGlwZSA9ICh2YWx1ZSwgLi4uZnVuY3Rpb25zKSA9PiBmdW5jdGlvbnMucmVkdWNlKChuZXdWYWx1ZSwgZnVuYykgPT4gZnVuYyhuZXdWYWx1ZSksIHZhbHVlKTtcblxuZXhwb3J0IGNvbnN0IHBpcGVGID0gKC4uLmZ1bmN0aW9ucykgPT4gdmFsdWUgPT5cbiAgICBwaXBlKFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgLi4uZnVuY3Rpb25zLFxuICAgICk7XG5cbmV4cG9ydCBkZWZhdWx0IHBpcGU7XG4iLCJpbXBvcnQgeyBhc3NvY1BhdGgsIGNvbmNhdCwgaXMgfSBmcm9tICdyYW1kYSc7XG5cbmltcG9ydCB7IGNyZWF0ZVJlZHVjZXIgfSBmcm9tICcuL2NyZWF0ZVJlZHVjZXInO1xuXG5pbXBvcnQgeyBwaXBlIH0gZnJvbSAnLi4vc2VydmljZSc7XG5cbmNvbnN0IGZldGNoUmVkdWNlciA9IGZldGNoVHlwZSA9PiAoa2V5LCBpbml0aWFsVmFsdWUpID0+IHtcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcbiAgICBjb25zdCBpc0FycmF5ID0gaXMoQXJyYXksIGluaXRpYWxWYWx1ZSk7XG5cbiAgICByZXR1cm4gY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIHtcbiAgICAgICAgW2ZldGNoVHlwZS5SRVFVRVNUXTogYXNzb2NQYXRoKFtrZXksICdpc0ZldGNoaW5nJ10sIHRydWUpLFxuICAgICAgICBbZmV0Y2hUeXBlLlNVQ0NFU1NdOiAoc3RhdGUsIHsgcmVzcG9uc2UgfSkgPT5cbiAgICAgICAgICAgIHBpcGUoXG4gICAgICAgICAgICAgICAgYXNzb2NQYXRoKFxuICAgICAgICAgICAgICAgICAgICBba2V5LCAnZGF0YSddLFxuICAgICAgICAgICAgICAgICAgICBpc0FycmF5ID8gY29uY2F0KHN0YXRlW2tleV0uZGF0YSwgcmVzcG9uc2UpIDogcmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgYXNzb2NQYXRoKFtrZXksICdpc0ZldGNoaW5nJ10sIGZhbHNlKSxcbiAgICAgICAgICAgICksXG4gICAgICAgIFtmZXRjaFR5cGUuRVJST1JdOiBhc3NvY1BhdGgoW2tleSwgJ2lzRmV0Y2hpbmcnXSwgZmFsc2UpLFxuICAgICAgICBbZmV0Y2hUeXBlLkNMRUFSXTogc3RhdGUgPT5cbiAgICAgICAgICAgIHBpcGUoXG4gICAgICAgICAgICAgICAgYXNzb2NQYXRoKFtrZXksICdkYXRhJ10sIGluaXRpYWxWYWx1ZSwgc3RhdGUpLFxuICAgICAgICAgICAgICAgIGFzc29jUGF0aChba2V5LCAnaXNGZXRjaGluZyddLCBmYWxzZSksXG4gICAgICAgICAgICApLFxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hSZWR1Y2VyO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGZldGNoUmVkdWNlcktleShrZXksIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIFtrZXldOiB7XG4gICAgICAgICAgICBkYXRhOiBpbml0aWFsVmFsdWUsXG4gICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICB9O1xufVxuIiwiY29uc3QgZmV0Y2hLZXkgPSAoa2V5LCBpbml0aWFsVmFsdWUpID0+IGZldGNoUmVkdWNlckZuID0+IGZldGNoUmVkdWNlckZuKGtleSwgaW5pdGlhbFZhbHVlKTtcblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hLZXk7XG4iLCJleHBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAnLi9jcmVhdGVSZWR1Y2VyJztcbmV4cG9ydCB7IG1ha2VBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi9tYWtlQWN0aW9uQ3JlYXRvcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvRmV0Y2hDb25zdCB9IGZyb20gJy4vdG9GZXRjaENvbnN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGlwZVJlZHVjZXJzIH0gZnJvbSAnLi9waXBlUmVkdWNlcnMnO1xuZXhwb3J0IHsgY3JlYXRlSW1tdXRhYmxlUmVkdWNlciB9IGZyb20gJy4vY3JlYXRlSW1tdXRhYmxlUmVkdWNlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZldGNoUmVkdWNlciB9IGZyb20gJy4vZmV0Y2hSZWR1Y2VyJztcbmV4cG9ydCB7IGZldGNoUmVkdWNlcktleSB9IGZyb20gJy4vZmV0Y2hSZWR1Y2VyS2V5JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmV0Y2hLZXkgfSBmcm9tICcuL2ZldGNoS2V5JztcbiIsImltcG9ydCB7IGNyZWF0ZUltbXV0YWJsZVJlZHVjZXIsIG1ha2VBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vbGlicy9yZWR1eC1hY3Rpb25zJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgbW9kYWxNZW51T3BlbjogZmFsc2UsXG59XG5cbmV4cG9ydCBjb25zdCBJTklUX0FQUCA9ICdJTklUX0FQUCdcbmNvbnN0IENIQU5HRV9NT0JJTEVfTUVOVV9TVEFURSA9ICdDSEFOR0VfTU9CSUxFX01FTlVfU1RBVEUnXG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VNb2JpbGVNZW51U3RhdGUgPSBtYWtlQWN0aW9uQ3JlYXRvcihDSEFOR0VfTU9CSUxFX01FTlVfU1RBVEUsICdpc09wZW4nKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbW11dGFibGVSZWR1Y2VyKGluaXRpYWxTdGF0ZSwge1xuICAgIFtDSEFOR0VfTU9CSUxFX01FTlVfU1RBVEVdOiAoc3RhdGUsIHsgaXNPcGVuIH0pID0+IHtcbiAgICAgICAgc3RhdGUubW9kYWxNZW51T3BlbiA9IGlzT3BlblxuICAgIH0sXG59KVxuIiwiaW1wb3J0IFJlYWN0LCB7XG4gICAgdXNlRWZmZWN0LCBtZW1vLCB1c2VDYWxsYmFjayxcbn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTWVkaWFRdWVyeSBmcm9tICdyZWFjdC1yZXNwb25zaXZlJ1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJ1xuXG5pbXBvcnQgeyBGbGV4LCBCb3ggfSBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZCdcbmltcG9ydCAqIGFzIENvbnRyb2xzIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci1jb250cm9scydcbmltcG9ydCAqIGFzIExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9zdHlsZWQtY29tcG9uZW50cy90aGVtZSdcbmltcG9ydCAqIGFzIExJTktTIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L2xpbmtzJ1xuaW1wb3J0IHsgdXNlQ291cG9uRGlhbG9ncywgdXNlRGlzcGF0Y2hlZEFjdGlvbnMgfSBmcm9tICcuLi9jb21wb25lbnRzL3NlcnZpY2UnXG5pbXBvcnQgKiBhcyByb290QWN0aW9ucyBmcm9tICcuLi9yZWR1Y2Vycy9yb290J1xuXG5jb25zdCB7IGJyZWFrcG9pbnRzIH0gPSB0aGVtZVxuXG5jb25zdCBtZW51SGVpZ2h0ID0ge1xuICAgIDA6ICcxMTRweCcsXG4gICAgc206ICcxMzFweCcsXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgaXNPcGVuOiBzdGF0ZS5yb290Lm1vZGFsTWVudU9wZW4sXG59KVxuXG5jb25zdCBpbml0QWN0aXZlVXJsID0gKHNldEFjdGl2ZVVybCkgPT4ge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgaWYgKGhyZWYuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgIGNvbnN0IHBvcyA9IGhyZWYuaW5kZXhPZignIycpXG4gICAgICAgIGlmIChwb3MgPiAwKSB7XG4gICAgICAgICAgICBzZXRBY3RpdmVVcmwoaHJlZi5zdWJzdHIocG9zKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZVVybCgnI2ZlYXR1cmVkJylcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEFjdGl2ZVVybCgnI2ZlYXR1cmVkJylcbiAgICB9XG59XG5cbmNvbnN0IEhlYWRlciA9ICh7XG4gICAgYWNjb3VudCwgYWN0aXZlVXJsLCBzZXRBY3RpdmVVcmwsIG9uU3VwcGxpZXJSZWdpc3Rlciwgc3VwcGxpZXJBcHByb3ZhbENvdW50ZXIsXG4gICAgLy8gb25DcmVhdGVDb3Vwb24sIGZpbHRlckFjdGl2ZSwgb25DaGFuZ2VGaWx0ZXJTdGF0ZSxcbn0pID0+IHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpbml0QWN0aXZlVXJsKHNldEFjdGl2ZVVybClcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IHsgaXNPcGVuIH0gPSB1c2VTZWxlY3RvcihtYXBTdGF0ZVRvUHJvcHMpXG4gICAgY29uc3QgeyBjaGFuZ2VNb2JpbGVNZW51U3RhdGUgfSA9IHVzZURpc3BhdGNoZWRBY3Rpb25zKHJvb3RBY3Rpb25zKVxuICAgIGNvbnN0IG9uQ2xvc2VNZW51ID0gdXNlQ2FsbGJhY2soKCkgPT4gY2hhbmdlTW9iaWxlTWVudVN0YXRlKGZhbHNlKSlcblxuICAgIGNvbnN0IE92ZXJsYXkgPSBMYXlvdXQuT3ZlcmxheSgpXG5cbiAgICBjb25zdCB7XG4gICAgICAgIENvdXBvbkRpYWxvZ3MsXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgICBmb3JtOiBbZm9ybU9wZW5lZCwgb25Gb3JtT3Blbl0sXG4gICAgfSA9IHVzZUNvdXBvbkRpYWxvZ3MoKVxuXG4gICAgY29uc3Qgb25DcmVhdGVDb3Vwb24gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIG9uRm9ybU9wZW4oKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Q291cG9uRGlhbG9ncyAvPlxuICAgICAgICAgICAgPENvbnRyb2xzLkhlYWRlckxheW91dCBoZWlnaHQ9e21lbnVIZWlnaHR9IHBvc2l0aW9uPVwiZml4ZWRcIj5cbiAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAwOiAnZmxleC1zdGFydCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbTogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICBweD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgMDogJzIwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGc6ICczOXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHhsOiAnMjBweCcsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHB0PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAwOiAnMTRweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbTogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIDA6ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgc206ICdyb3cnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXggd2lkdGg9XCIxMDAlXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuSGVhZGVyTGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBsaWVyQXBwcm92YWxDb3VudGVyPXtzdXBwbGllckFwcHJvdmFsQ291bnRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VwcGxpZXJSZWdpc3Rlcj17b25TdXBwbGllclJlZ2lzdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVVybD17YWN0aXZlVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtzPXtMSU5LUy5oZWFkZXJMaW5rc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyTGlua3M9e0xJTktTLnVzZXJMaW5rc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb2JpbGVNZW51U3RhdGU9e2NoYW5nZU1vYmlsZU1lbnVTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZXRSZXNvbHV0aW9uPXticmVha3BvaW50cy5sZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVSZXNvbHV0aW9uPXticmVha3BvaW50cy5zbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51T3BlbmVkPXtpc09wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DcmVhdGVDb3Vwb249e29uQ3JlYXRlQ291cG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICA8TWVkaWFRdWVyeSBtYXhXaWR0aD17YnJlYWtwb2ludHMuc219PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggd2lkdGg9XCIxMDAlXCIgcHQ9XCIxMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLkxvZ28gaXNBY3RpdmUgc2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBmbGV4PXsxfSBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuU2VhcmNoSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgPC9NZWRpYVF1ZXJ5PlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvQ29udHJvbHMuSGVhZGVyTGF5b3V0PlxuICAgICAgICAgICAgPEJveCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9e21lbnVIZWlnaHR9IC8+XG4gICAgICAgICAgICA8TWVkaWFRdWVyeSBtYXhXaWR0aD17YnJlYWtwb2ludHMubGd9PlxuICAgICAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uIHVubW91bnRPbkV4aXQgey4uLkxheW91dC5tZW51QW5pbWF0aW9ufSBpbj17aXNPcGVufT5cbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5Nb2JpbGVNZW51XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlVXJsPXsodXJsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlVXJsKHVybClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlTWVudSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wPVwiMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2VNZW51fVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uIHVubW91bnRPbkV4aXQgey4uLkxheW91dC5vdmVybGF5QW5pbWF0aW9ufSBpbj17aXNPcGVufT5cbiAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXkgb25DbGljaz17b25DbG9zZU1lbnV9IHRvcD1cIjBweFwiIC8+XG4gICAgICAgICAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgICAgICAgPC9NZWRpYVF1ZXJ5PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oSGVhZGVyKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1lZGlhUXVlcnkgZnJvbSAncmVhY3QtcmVzcG9uc2l2ZSdcblxuaW1wb3J0IHsgQm94LCBGbGV4LCBUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQnXG5pbXBvcnQgeyBTb2NpYWxCdXR0b25zLCBMb2dvQ29weXJpZ2h0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQge1xuICAgIGNvbXBhbnlMaW5rcywgc3VwcGxpZXJMaW5rcywgbXlMaW5rcywgbWFpbkxpbmtzLFxufSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9saW5rcydcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9zdHlsZWQtY29tcG9uZW50cy90aGVtZSdcblxuY29uc3QgeyBicmVha3BvaW50cyB9ID0gdGhlbWVcblxuY29uc3QgR3JvdXBMaW5rcyA9ICh7XG4gICAgYWNjb3VudCwgc2V0QWN0aXZlVXJsLCB0aXRsZSwgbGlua3MsXG59KSA9PiAoXG4gICAgPEZsZXggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICA8VGV4dCBhcz1cInNwYW5cIiBmb250V2VpZ2h0PVwiYm9sZFwiIGxldHRlclNwYWNpbmc9XCIwLjY2cHhcIiBmb250U2l6ZT1cIjE0cHhcIj5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8Qm94IHB0PVwiMTBweFwiPlxuICAgICAgICAgICAge2xpbmtzLmZpbHRlcigoeyBpc0VuYWJsZWQgfSkgPT4gdHlwZW9mIGlzRW5hYmxlZCAhPT0gJ2Z1bmN0aW9uJyB8fCBpc0VuYWJsZWQoYWNjb3VudCkpLm1hcCgoeyB1cmwsIHRpdGxlOiBsaW5rVGl0bGUgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxhIGtleT17dXJsfSBocmVmPXt1cmx9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cImdyYXkuMlwiIGxpbmVIZWlnaHQ9XCIyNHB4XCIgZm9udFNpemU9XCIxNHB4XCIgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVXJsKHVybCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2xpbmtUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICA8L0ZsZXg+XG4pXG5cbmNvbnN0IEZvb3RlciA9ICh7IGFjY291bnQsIHNldEFjdGl2ZVVybCB9KSA9PiAoXG4gICAgPEZsZXggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGJnPVwiZ3JheS4wXCIgcHg9XCI0MHB4XCI+XG4gICAgICAgIDxNZWRpYVF1ZXJ5IG1pbldpZHRoPXticmVha3BvaW50cy5zbX0+XG4gICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgIHB5PVwiNDhweFwiXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e3tcbiAgICAgICAgICAgICAgICAgICAgeGw6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1lZGlhUXVlcnkgbWluV2lkdGg9e2JyZWFrcG9pbnRzLnhsfT5cbiAgICAgICAgICAgICAgICAgICAgPExvZ29Db3B5cmlnaHQgLz5cbiAgICAgICAgICAgICAgICA8L01lZGlhUXVlcnk+XG5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIHBsPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB4bDogJzU0cHgnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEdyb3VwTGlua3MgYWNjb3VudD17YWNjb3VudH0gc2V0QWN0aXZlVXJsPXtzZXRBY3RpdmVVcmx9IHRpdGxlPVwiQ29tcGFueVwiIGxpbmtzPXtjb21wYW55TGlua3N9IC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveCBwbD1cIjU0cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgPEdyb3VwTGlua3MgYWNjb3VudD17YWNjb3VudH0gc2V0QWN0aXZlVXJsPXtzZXRBY3RpdmVVcmx9IHRpdGxlPVwiV29yayB3aXRoIENvdXBvbiBCYXphYXJcIiBsaW5rcz17bXlMaW5rc30gLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94IHBsPVwiNTRweFwiPlxuICAgICAgICAgICAgICAgICAgICA8R3JvdXBMaW5rcyBhY2NvdW50PXthY2NvdW50fSBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH0gdGl0bGU9XCJTdXBwbGllclwiIGxpbmtzPXtzdXBwbGllckxpbmtzfSAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3ggcGw9XCI1NHB4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxHcm91cExpbmtzIGFjY291bnQ9e2FjY291bnR9IHNldEFjdGl2ZVVybD17c2V0QWN0aXZlVXJsfSB0aXRsZT1cIk1haW5cIiBsaW5rcz17bWFpbkxpbmtzfSAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxNZWRpYVF1ZXJ5IG1pbldpZHRoPXticmVha3BvaW50cy54bH0+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IHBsPVwiNTRweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNvY2lhbEJ1dHRvbnMgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgIDwvTWVkaWFRdWVyeT5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9NZWRpYVF1ZXJ5PlxuICAgICAgICA8TWVkaWFRdWVyeSBtYXhXaWR0aD17YnJlYWtwb2ludHMueGx9PlxuICAgICAgICAgICAgPE1lZGlhUXVlcnkgbWluV2lkdGg9e2JyZWFrcG9pbnRzLnNtfT5cbiAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjFweFwiIGJnPVwiZ3JheS4zXCIgLz5cbiAgICAgICAgICAgIDwvTWVkaWFRdWVyeT5cbiAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgcHQ9XCIzNXB4XCJcbiAgICAgICAgICAgICAgICBwYj1cIjUwcHhcIlxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249e3tcbiAgICAgICAgICAgICAgICAgICAgMDogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgICAgIHNtOiAncm93JyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNZWRpYVF1ZXJ5IG1pbldpZHRoPXticmVha3BvaW50cy5zbX0+XG4gICAgICAgICAgICAgICAgICAgIDxMb2dvQ29weXJpZ2h0IC8+XG4gICAgICAgICAgICAgICAgPC9NZWRpYVF1ZXJ5PlxuICAgICAgICAgICAgICAgIDxNZWRpYVF1ZXJ5IG1heFdpZHRoPXticmVha3BvaW50cy5zbX0+XG4gICAgICAgICAgICAgICAgICAgIDxMb2dvQ29weXJpZ2h0IHNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgICAgICAgPC9NZWRpYVF1ZXJ5PlxuICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgIHBsPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAwOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbTogJzEwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcHQ9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIDA6ICcyMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8U29jaWFsQnV0dG9ucyAvPlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9NZWRpYVF1ZXJ5PlxuICAgIDwvRmxleD5cbilcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIENvdXBvbnMgfSBmcm9tICcuL0NvdXBvbnMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvdXBvbnNMaXN0IH0gZnJvbSAnLi9Db3Vwb25zTGlzdCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVm90aW5nTGlzdCB9IGZyb20gJy4vVm90aW5nTGlzdCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHVyY2hhc2VzIH0gZnJvbSAnLi9QdXJjaGFzZXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlYWRlciB9IGZyb20gJy4vSGVhZGVyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGb290ZXIgfSBmcm9tICcuL0Zvb3RlcidcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bmVzY2FwZWQtZW50aXRpZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IEZsZXgsIExvYWRpbmcgfSBmcm9tICcuLi8uLi9zaGFyZWQnXG5pbXBvcnQgeyBDb3Vwb25zIH0gZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycydcbmltcG9ydCB7XG4gICAgc3Vic2NyaWJlLCBEQVRBLCBmZXRjaEl0ZW1zLFxufSBmcm9tICcuLi8uLi8uLi9saWJzL2RBcHAnXG5cbmNvbnN0IFBhZ2VNYXJrZXQgPSAoeyBhY3RpdmVVcmwsIHNldEFjdGl2ZVVybCwgZmlsdGVyID0gZSA9PiAhZS5pc0V4cGlyZWQgfSkgPT4ge1xuICAgIGNvbnN0IFtsb2FkaW5nRGF0YSwgc2V0TG9hZGluZ0RhdGFdID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbaXRlbXMsIHVwZGF0ZUl0ZW1zXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaERhdGEoKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nRGF0YSh0cnVlKVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gKGF3YWl0IGZldGNoSXRlbXMoKSkuZmlsdGVyKGZpbHRlcilcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdbIPCflIQgTWFya2V0IF0gOicsIGAke2xpc3QubGVuZ3RofSBpdGVtcyBsb2FkZWRgKVxuICAgICAgICAgICAgICAgIHVwZGF0ZUl0ZW1zKGxpc3QpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmUoREFUQSwgcmVmcmVzaERhdGEpXG4gICAgfSwgW2FjdGl2ZVVybF0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1saWdodCBhbGVydC1kaXNtaXNzaWJsZSBmYWRlIHNob3cgdGV4dC1jZW50ZXIgc21hbGxcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgRmluZCBjb3Vwb25zIGluIHRoZSBiYXphYXIgbWFya2V0LCBhbmQgc3RhcnQgc2F2aW5nIG1vbmV5LlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIFRoYW5rcyB0byB0aGUgbWFueSBkaXNjb3VudCBjb3Vwb25zIGZyb20gb3VyIHN1cHBsaWVycy5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICAgICAgICAgIDxiPmNsaWNrIG9uIHRoZSBjb3Vwb24gb2YgeW91ciBjaG9pY2UsIHRoZW4gb24gXCJCdXlcIiB0byBidXkgaXQ8L2I+XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2xvYWRpbmdEYXRhID8gKDxMb2FkaW5nIC8+KSA6IG51bGwgfVxuICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgcHg9e3tcbiAgICAgICAgICAgICAgICAgICAgMDogJzIwcHgnLFxuICAgICAgICAgICAgICAgICAgICBsZzogJzM5cHgnLFxuICAgICAgICAgICAgICAgICAgICB4bDogJzIwcHgnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgZmxleFdyYXA9XCJ3cmFwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q291cG9uc1xuICAgICAgICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVVybD17c2V0QWN0aXZlVXJsfVxuICAgICAgICAgICAgICAgICAgICBtb2RlPVwibWFya2V0XCJcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVtcHR5TGlzdE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlVm90aW5nXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC8+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VNYXJrZXRcbiIsImltcG9ydCBQYWdlTWFya2V0IGZyb20gJy4vUGFnZU1hcmtldCdcblxuZXhwb3J0IGRlZmF1bHQgUGFnZU1hcmtldFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQnXG5cbmNvbnN0IE1lbnUgPSAoe1xuICAgIGFjdGl2ZVVybCwgc2V0QWN0aXZlVXJsLFxufSkgPT4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEJveCB0eXBlPVwidWxcIiBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnNcIj5cbiAgICAgICAgICAgICAgICA8Qm94IHR5cGU9XCJsaVwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVXJsKCcjbXkvY291cG9ucycpfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXthY3RpdmVVcmw/Lm1hdGNoKG5ldyBSZWdFeHAoJy4qLz8oI215W14vXSp8I215L2NvdXBvbnMuKikkJykpID8gJ25hdi1saW5rIGFjdGl2ZScgOiAnbmF2LWxpbmsnfSBocmVmPVwiI215L2NvdXBvbnNcIj5BY3RpdmUgQ291cG9uczwvYT5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94IHR5cGU9XCJsaVwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVXJsKCcjbXkvdXNlZCcpfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXthY3RpdmVVcmw/Lm1hdGNoKG5ldyBSZWdFeHAoJy4qLz8oI215L3VzZWQuKikkJykpID8gJ25hdi1saW5rIGFjdGl2ZScgOiAnbmF2LWxpbmsnfSBocmVmPVwiI215L3VzZWRcIj5Vc2VkIENvdXBvbnM8L2E+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveCB0eXBlPVwibGlcIiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVVybCgnI215L2V4cGlyZWQnKX0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YWN0aXZlVXJsPy5tYXRjaChuZXcgUmVnRXhwKCcuKi8/KCNteS9leHBpcmVkLiopJCcpKSA/ICduYXYtbGluayBhY3RpdmUnIDogJ25hdi1saW5rJ30gaHJlZj1cIiNteS9leHBpcmVkXCI+RXhwaXJlZCBDb3Vwb25zPC9hPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3ggdHlwZT1cImxpXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVVcmwoJyNteS92b3RpbmcnKX0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YWN0aXZlVXJsPy5tYXRjaChuZXcgUmVnRXhwKCcuKi8/KCNteS92b3RpbmcuKikkJykpID8gJ25hdi1saW5rIGFjdGl2ZScgOiAnbmF2LWxpbmsnfSBocmVmPVwiI215L3ZvdGluZ1wiPlZvdGluZzwvYT5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94IHR5cGU9XCJsaVwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVXJsKCcjbXkvcHVyY2hhc2VzJyl9PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2FjdGl2ZVVybD8ubWF0Y2gobmV3IFJlZ0V4cCgnLiovPygjbXkvcHVyY2hhc2VzLiopJCcpKSA/ICduYXYtbGluayBhY3RpdmUnIDogJ25hdi1saW5rJ30gaHJlZj1cIiNteS9wdXJjaGFzZXNcIj5QdXJjaGFzZXMgaGlzdG9yeTwvYT5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8Lz5cblxuKVxuXG5leHBvcnQgZGVmYXVsdCBNZW51XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtYXNzb2NpYXRlZC1jb250cm9sICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBGbGV4LCBMb2FkaW5nIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkJ1xuaW1wb3J0IHsgQ291cG9ucyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMnXG5pbXBvcnQge1xuICAgIERBVEEsIGZldGNoVXNlckFjdGl2ZUNvdXBvbnMsIHN1YnNjcmliZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbGlicy9kQXBwJ1xuXG5jb25zdCBBYyA9ICh7IGFjY291bnQsIHNldEFjdGl2ZVVybCB9KSA9PiB7XG4gICAgY29uc3QgW2xvYWRpbmdEYXRhLCBzZXRMb2FkaW5nRGF0YV0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtpdGVtcywgdXBkYXRlSXRlbXNdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgeyBhZGRyZXNzIH0gPSBhY2NvdW50XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiByZWZyZXNoRGF0YSgpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmdEYXRhKHRydWUpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBmZXRjaFVzZXJBY3RpdmVDb3Vwb25zKGFkZHJlc3MpXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnWyDwn5SEIEFjdGl2ZSBDb3Vwb25zIF0gOicsIGAke2xpc3QubGVuZ3RofSBjb3Vwb25zIGxvYWRlZGApXG4gICAgICAgICAgICAgICAgdXBkYXRlSXRlbXMobGlzdClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3Vic2NyaWJlKERBVEEsIHJlZnJlc2hEYXRhKVxuICAgIH0sIFthZGRyZXNzXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2xvYWRpbmdEYXRhID8gKDxMb2FkaW5nIC8+KSA6IG51bGwgfVxuICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgcD17e1xuICAgICAgICAgICAgICAgICAgICAwOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgIG1kOiAnMHB4JyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGZsZXhXcmFwPVwid3JhcFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENvdXBvbnNcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH1cbiAgICAgICAgICAgICAgICAgICAgbW9kZT1cImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgIGhpZGVFbXB0eUxpc3RNZXNzYWdlPXtsb2FkaW5nRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlVm90aW5nXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC8+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bmVzY2FwZWQtZW50aXRpZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IFB1cmNoYXNlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMnXG5pbXBvcnQgeyBEQVRBLCBmZXRjaFVzZXJQdXJjaGFzZXMsIHN1YnNjcmliZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYnMvZEFwcCdcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQnXG5cbmNvbnN0IFB1cmNoYXNlc0hpc3RvcnkgPSAoeyBhY2NvdW50LCBzZXRBY3RpdmVVcmwgfSkgPT4ge1xuICAgIGNvbnN0IFtsb2FkaW5nRGF0YSwgc2V0TG9hZGluZ0RhdGFdID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbaXRlbXMsIHVwZGF0ZUl0ZW1zXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gYWNjb3VudFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaERhdGEoKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nRGF0YSh0cnVlKVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBwdXJjaGFzZXMgaGlzdG9yeVxuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBmZXRjaFVzZXJQdXJjaGFzZXMoYWRkcmVzcylcbiAgICAgICAgICAgICAgICBjb25zdCBoaXN0b3J5TGlzdCA9IGxpc3Quc29ydCgoYSwgYikgPT4gYS50aW1lc3RhbXAgPCBiLnRpbWVzdGFtcClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdbIPCflIQgUHVyY2hhc2VzIEhpc3RvcnkgXSA6JywgYCR7aGlzdG9yeUxpc3QubGVuZ3RofSBwdXJjaGFzZXMgbG9hZGVkYClcbiAgICAgICAgICAgICAgICB1cGRhdGVJdGVtcyhoaXN0b3J5TGlzdClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZShEQVRBLCByZWZyZXNoRGF0YSlcbiAgICB9LCBbYWRkcmVzc10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2xvYWRpbmdEYXRhID8gKDxMb2FkaW5nIC8+KSA6IG51bGwgfVxuICAgICAgICAgICAgPFB1cmNoYXNlc1xuICAgICAgICAgICAgICAgIGhpZGVFbXB0eUxpc3RNZXNzYWdlPXtsb2FkaW5nRGF0YX1cbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH1cbiAgICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICAgICAgbW9kZT1cImhpc3RvcnlcIlxuICAgICAgICAgICAgICAgIGVuYWJsZVZvdGluZ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFB1cmNoYXNlc0hpc3RvcnlcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IENvdXBvbnNMaXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycydcbmltcG9ydCB7XG4gICAgREFUQSwgZmV0Y2hVc2VyVXNlZENvdXBvbnMsIHN1YnNjcmliZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbGlicy9kQXBwJ1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZCdcblxuY29uc3QgVXNlZENvdXBvbnMgPSAoeyBhY2NvdW50LCBzZXRBY3RpdmVVcmwgfSkgPT4ge1xuICAgIGNvbnN0IFtsb2FkaW5nRGF0YSwgc2V0TG9hZGluZ0RhdGFdID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbaXRlbXMsIHVwZGF0ZUl0ZW1zXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gYWNjb3VudFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaERhdGEoKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nRGF0YSh0cnVlKVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gYXdhaXQgZmV0Y2hVc2VyVXNlZENvdXBvbnMoYWRkcmVzcylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdbIPCflIQgVXNlZCBDb3Vwb25zIF0gOicsIGAke2xpc3QubGVuZ3RofSBjb3Vwb25zIGxvYWRlZGApXG4gICAgICAgICAgICAgICAgdXBkYXRlSXRlbXMobGlzdClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3Vic2NyaWJlKERBVEEsIHJlZnJlc2hEYXRhKVxuICAgIH0sIFthZGRyZXNzXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7bG9hZGluZ0RhdGEgPyAoPExvYWRpbmcgLz4pIDogbnVsbCB9XG4gICAgICAgICAgICA8Q291cG9uc0xpc3RcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH1cbiAgICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICAgICAgbW9kZT1cInVzZWRcIlxuICAgICAgICAgICAgICAgIGhpZGVFbXB0eUxpc3RNZXNzYWdlPXtsb2FkaW5nRGF0YX1cbiAgICAgICAgICAgICAgICBlbmFibGVWb3RpbmdcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VkQ291cG9uc1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBDb3Vwb25zTGlzdCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMnXG5pbXBvcnQge1xuICAgIERBVEEsIGZldGNoVXNlckV4cGlyZWRDb3Vwb25zLCBzdWJzY3JpYmUsXG59IGZyb20gJy4uLy4uLy4uLy4uL2xpYnMvZEFwcCdcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQnXG5cbmNvbnN0IEV4cGlyZWRDb3Vwb25zID0gKHsgYWNjb3VudCwgc2V0QWN0aXZlVXJsIH0pID0+IHtcbiAgICBjb25zdCBbbG9hZGluZ0RhdGEsIHNldExvYWRpbmdEYXRhXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW2l0ZW1zLCB1cGRhdGVJdGVtc10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCB7IGFkZHJlc3MgfSA9IGFjY291bnRcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hEYXRhKCkge1xuICAgICAgICAgICAgc2V0TG9hZGluZ0RhdGEodHJ1ZSlcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IGF3YWl0IGZldGNoVXNlckV4cGlyZWRDb3Vwb25zKGFkZHJlc3MpXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnWyDwn5SEIEV4cGlyZWQgQ291cG9ucyBdIDonLCBgJHtsaXN0Lmxlbmd0aH0gY291cG9ucyBsb2FkZWRgKVxuICAgICAgICAgICAgICAgIHVwZGF0ZUl0ZW1zKGxpc3QpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZShEQVRBLCByZWZyZXNoRGF0YSlcbiAgICB9LCBbYWRkcmVzc10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2xvYWRpbmdEYXRhID8gKDxMb2FkaW5nIC8+KSA6IG51bGwgfVxuICAgICAgICAgICAgPENvdXBvbnNMaXN0XG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlVXJsPXtzZXRBY3RpdmVVcmx9XG4gICAgICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgICAgICAgIG1vZGU9XCJoaXN0b3J5XCJcbiAgICAgICAgICAgICAgICBoaWRlRW1wdHlMaXN0TWVzc2FnZT17bG9hZGluZ0RhdGF9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8Lz5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhwaXJlZENvdXBvbnNcblxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgVm90aW5nTGlzdCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMnXG5pbXBvcnQge1xuICAgIERBVEEsIGZldGNoVXNlckNvdXBvbnMsIHN1YnNjcmliZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbGlicy9kQXBwJ1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZCdcblxuY29uc3QgZmlsdGVyID0gZSA9PiBlLnZvdGluZ1xuXG5jb25zdCBncm91cCA9IChnbCwgZSkgPT4ge1xuICAgIGlmICghZ2xbZS5pdGVtLmlkXSkgZ2xbZS5pdGVtLmlkXSA9IFtdXG4gICAgZ2xbZS5pdGVtLmlkXS5wdXNoKGUpXG4gICAgcmV0dXJuIGdsXG59XG5cbmNvbnN0IFVzZWRDb3Vwb25zID0gKHsgYWNjb3VudCwgc2V0QWN0aXZlVXJsIH0pID0+IHtcbiAgICBjb25zdCBbbG9hZGluZ0RhdGEsIHNldExvYWRpbmdEYXRhXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW2l0ZW1zLCB1cGRhdGVJdGVtc10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCB7IGFkZHJlc3MgfSA9IGFjY291bnRcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hEYXRhKCkge1xuICAgICAgICAgICAgc2V0TG9hZGluZ0RhdGEodHJ1ZSlcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBlZCA9IChhd2FpdCBmZXRjaFVzZXJDb3Vwb25zKGFkZHJlc3MpKS5maWx0ZXIoZmlsdGVyKS5yZWR1Y2UoZ3JvdXAsIHt9KVxuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBPYmplY3Qua2V5cyhncm91cGVkKS5tYXAoKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IGdyb3VwZWRbZV1bMF1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvdGluZzogcC52b3RpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5wLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1sg8J+UhCBVc2VkIENvdXBvbnMgXSA6JywgYCR7bGlzdC5sZW5ndGh9IGNvdXBvbnMgbG9hZGVkYClcbiAgICAgICAgICAgICAgICB1cGRhdGVJdGVtcyhsaXN0KVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWJzY3JpYmUoREFUQSwgcmVmcmVzaERhdGEpXG4gICAgfSwgW2FkZHJlc3NdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtsb2FkaW5nRGF0YSA/ICg8TG9hZGluZyAvPikgOiBudWxsIH1cbiAgICAgICAgICAgIDxWb3RpbmdMaXN0XG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlVXJsPXtzZXRBY3RpdmVVcmx9XG4gICAgICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgICAgICAgIG1vZGU9XCJ1c2VkXCJcbiAgICAgICAgICAgICAgICBoaWRlRW1wdHlMaXN0TWVzc2FnZT17bG9hZGluZ0RhdGF9XG4gICAgICAgICAgICAgICAgZW5hYmxlVm90aW5nXG4gICAgICAgICAgICAvPlxuICAgICAgICA8Lz5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlZENvdXBvbnNcblxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBNZW51IH0gZnJvbSAnLi9NZW51J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBY3RpdmVDb3Vwb25zIH0gZnJvbSAnLi9BY3RpdmVDb3Vwb25zJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQdXJjaGFzZXNIaXN0b3J5IH0gZnJvbSAnLi9QdXJjaGFzZXNIaXN0b3J5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VkQ291cG9ucyB9IGZyb20gJy4vVXNlZENvdXBvbnMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEV4cGlyZWRDb3Vwb25zIH0gZnJvbSAnLi9FeHBpcmVkQ291cG9ucydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVm90aW5nQ291cG9ucyB9IGZyb20gJy4vVm90aW5nQ291cG9ucydcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVuZXNjYXBlZC1lbnRpdGllcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQge1xuICAgIEFjdGl2ZUNvdXBvbnMsIEV4cGlyZWRDb3Vwb25zLCBNZW51LCBQdXJjaGFzZXNIaXN0b3J5LCBWb3RpbmdDb3Vwb25zLFxufSBmcm9tICcuL2NvbXBvbmVudHMnXG5pbXBvcnQgVXNlZENvdXBvbnMgZnJvbSAnLi9jb21wb25lbnRzL1VzZWRDb3Vwb25zJ1xuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnLi4vLi4vLi4vbGlicy9kQXBwJ1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vc2hhcmVkJ1xuXG5jb25zdCBQYWdlQ291cG9ucyA9ICh7XG4gICAgYWNjb3VudCwgYWN0aXZlVXJsLCBzZXRBY3RpdmVVcmwsXG59KSA9PiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7YWNjb3VudC5pc0Nvbm5lY3RlZCA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8TWVudSBhY3RpdmVVcmw9e2FjdGl2ZVVybH0gc2V0QWN0aXZlVXJsPXtzZXRBY3RpdmVVcmx9IC8+XG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVVcmwubWF0Y2gobmV3IFJlZ0V4cCgnLiovPygjbXlbXi9dKnwjbXkvY291cG9ucy4qKSQnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1saWdodCBhbGVydC1kaXNtaXNzaWJsZSBmYWRlIHNob3cgdGV4dC1jZW50ZXIgc21hbGxcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbmQgaGVyZSBhbGwgeW91ciBjb3Vwb25zIGFuZCB0aGVpciB2YWxpZGl0eSBwZXJpb2QuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgY2FuIHVzZSB0aGVtIGF0IGFueSB0aW1lIGJ5IHRyYW5zZmVycmluZyB0aGVtIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSByZXNwZWN0aXZlIHN1cHBsaWVyIGluIG9yZGVyIHRvIGdldCB5b3VyIHB1cmNoYXNlIGFkdmFudGFnZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2sgb24gdGhlIGNvdXBvbiBvZiB5b3VyIGNob2ljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW4gb24gXCJ1c2VcIiB0byBhY3RpdmF0ZSB0aGUgdHJhbnNmZXIgdG8gaXRzIHN1cHBsaWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjdGl2ZUNvdXBvbnMgYWNjb3VudD17YWNjb3VudH0gc2V0QWN0aXZlVXJsPXtzZXRBY3RpdmVVcmx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVVcmwubWF0Y2gobmV3IFJlZ0V4cCgnLiovPyNteS91c2VkLiokJykpID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWxpZ2h0IGFsZXJ0LWRpc21pc3NpYmxlIGZhZGUgc2hvdyB0ZXh0LWNlbnRlciBzbWFsbFwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbmQgaGVyZSBhbGwgdXNlZCBjb3Vwb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VkQ291cG9ucyBhY2NvdW50PXthY2NvdW50fSBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApIDogJyd9XG5cbiAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVVybC5tYXRjaChuZXcgUmVnRXhwKCcuKi8/I215L2V4cGlyZWQuKiQnKSkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtbGlnaHQgYWxlcnQtZGlzbWlzc2libGUgZmFkZSBzaG93IHRleHQtY2VudGVyIHNtYWxsXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmluZCBoZXJlIGFsbCBleHBpcmVkIGNvdXBvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV4cGlyZWRDb3Vwb25zIGFjY291bnQ9e2FjY291bnR9IHNldEFjdGl2ZVVybD17c2V0QWN0aXZlVXJsfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAnJ31cblxuICAgICAgICAgICAgICAgICAgICB7YWN0aXZlVXJsLm1hdGNoKG5ldyBSZWdFeHAoJy4qLz8jbXkvdm90aW5nLiokJykpID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWxpZ2h0IGFsZXJ0LWRpc21pc3NpYmxlIGZhZGUgc2hvdyB0ZXh0LWNlbnRlciBzbWFsbFwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZvdGVzIHRvIGFkZCBvciByZW1vdmUgY291cG9uIGZyb20gRmVhdHVyZWQgbGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Vm90aW5nQ291cG9ucyBhY2NvdW50PXthY2NvdW50fSBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApIDogJyd9XG5cbiAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVVybC5tYXRjaChuZXcgUmVnRXhwKCcuKi8/I215L3B1cmNoYXNlcy4qJCcpKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWxpZ2h0IGFsZXJ0LWRpc21pc3NpYmxlIGZhZGUgc2hvdyB0ZXh0LWNlbnRlciBzbWFsbFwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbmQgaGVyZSBhbGwgeW91ciBwdXJjaGFzZXMgYW5kIHRoZSBzdXBwbGllciBhcHByb3ZhbCBzdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD4oV2FpdGluZyBhcHByb3ZhbCwgUmVqZWN0ZWQgb3IgQWNjZXB0ZWQpPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHVyY2hhc2VzSGlzdG9yeSBhY2NvdW50PXthY2NvdW50fSBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJhbGVydCBhbGVydC13YXJuaW5nIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UbyBzZWUgeW91ciBjb3Vwb25zIGFuZCB1c2UgdGhlbSwgcGxlYXNlIGxvZ2luPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Y29ubmVjdH0+TG9naW48L2J1dHRvbj48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8Lz5cbilcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUNvdXBvbnNcbiIsImltcG9ydCBQYWdlQ291cG9ucyBmcm9tICcuL1BhZ2VDb3Vwb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlQ291cG9uc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQnXG5pbXBvcnQgeyBBZGRDb3Vwb25JY29uLCBSb3VuZE1hcmtJY29uIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2hlYWRlci1jb250cm9scydcblxuY29uc3QgTWVudSA9ICh7XG4gICAgYWN0aXZlVXJsLCBzZXRBY3RpdmVVcmwsIGFwcHJvdmFsQ291bnRlciwgb25DcmVhdGVDb3Vwb24sXG59KSA9PiAoXG4gICAgPD5cbiAgICAgICAgPEJveCBhcz1cInVsXCIgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCI+XG4gICAgICAgICAgICA8Qm94IGFzPVwibGlcIiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVVybCgnI3N1cHBsaWVyL21hbmFnZScpfT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3N1cHBsaWVyL21hbmFnZVwiIGNsYXNzTmFtZT17YWN0aXZlVXJsLm1hdGNoKG5ldyBSZWdFeHAoJy4qLz8oI3N1cHBsaWVyW14vXSp8I3N1cHBsaWVyL21hbmFnZS4qKSQnKSkgPyAnbmF2LWxpbmsgYWN0aXZlJyA6ICduYXYtbGluayd9PlxuICAgICAgICAgICAgICAgICAgICBNYW5hZ2UgQ291cG9uc1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveCBhcz1cImxpXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVVcmwoJyNzdXBwbGllci93aXRoZHJhdycpfT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3N1cHBsaWVyL3dpdGhkcmF3XCIgY2xhc3NOYW1lPXthY3RpdmVVcmwubWF0Y2gobmV3IFJlZ0V4cCgnLiovPyNzdXBwbGllci93aXRoZHJhdy4qJCcpKSA/ICduYXYtbGluayBhY3RpdmUnIDogJ25hdi1saW5rJ30+XG4gICAgICAgICAgICAgICAgV2l0aGRyYXcgRnVuZHNcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3ggYXM9XCJsaVwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVXJsKCcjc3VwcGxpZXIvaGlzdG9yeScpfT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3N1cHBsaWVyL2hpc3RvcnlcIiBjbGFzc05hbWU9e2FjdGl2ZVVybC5tYXRjaChuZXcgUmVnRXhwKCcuKi8/I3N1cHBsaWVyL2hpc3RvcnkuKiQnKSkgPyAnbmF2LWxpbmsgYWN0aXZlJyA6ICduYXYtbGluayd9PlxuICAgICAgICAgICAgICAgICAgICBTYWxlcyBIaXN0b3J5XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94IGFzPVwibGlcIiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVVybCgnI3N1cHBsaWVyL2FwcHJvdmUnKX0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNzdXBwbGllci9hcHByb3ZlXCIgY2xhc3NOYW1lPXthY3RpdmVVcmwubWF0Y2gobmV3IFJlZ0V4cCgnLiovPyNzdXBwbGllci9hcHByb3ZlLiokJykpID8gJ25hdi1saW5rIGFjdGl2ZScgOiAnbmF2LWxpbmsnfT5cbiAgICAgICAgICAgICAgICAgICAgeyAoYXBwcm92YWxDb3VudGVyID4gMCkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91bmRNYXJrSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICApIDogJycgfVxuICAgICAgICAgICAgICAgICAgICB7JyBBcHByb3ZlIENvdXBvbnMnfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveCBhcz1cInNwYW5cIiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIG9uQ2xpY2s9e29uQ3JlYXRlQ291cG9ufT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBocmVmPVwiI3N1cHBsaWVyL2FwcHJvdmVcIiBjbGFzc05hbWU9XCJuYXYtbGluayBib3JkZXItbGVmdCB0ZXh0LXN1Y2Nlc3MgZm9udC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICA8QWRkQ291cG9uSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICB7JyBBZGQgQ291cG9uJ31cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICA8Lz5cbilcbmV4cG9ydCBkZWZhdWx0IE1lbnVcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1vbmUtZXhwcmVzc2lvbi1wZXItbGluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tYWxlcnQgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IExvY2tJY29uLCBVbmxvY2tJY29uIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2hlYWRlci1jb250cm9scydcbmltcG9ydCB7IEJveCwgRmxleCB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZCdcbmltcG9ydCB7XG4gICAgREFUQSwgZmV0Y2hTdXBwbGllckF2YWlsYWJsZUZ1bmRzLCBmb3JtYXROdW1iZXIsIGdldFN1cHBsaWVyQmFsYW5jZSwgc3Vic2NyaWJlLFxufSBmcm9tICcuLi8uLi8uLi8uLi9saWJzL2RBcHAnXG5cbmNvbnN0IEJhbGFuY2VQYW5lbCA9ICh7IGFjY291bnQgfSkgPT4ge1xuICAgIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFthdmFpbGFibGUsIHNldEF2YWlsYWJsZV0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtsb2NrZWQsIHNldExvY2tlZF0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gYWNjb3VudFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaERhdGEoKSB7XG4gICAgICAgICAgICBjb25zdCBhbXQgPSBhd2FpdCBnZXRTdXBwbGllckJhbGFuY2UoYWRkcmVzcylcbiAgICAgICAgICAgIGNvbnN0IGF2bCA9IGF3YWl0IGZldGNoU3VwcGxpZXJBdmFpbGFibGVGdW5kcyhhZGRyZXNzKVxuICAgICAgICAgICAgY29uc3QgbGNrID0gYW10IC0gYXZsXG5cbiAgICAgICAgICAgIHNldEFtb3VudChhbXQpXG4gICAgICAgICAgICBzZXRBdmFpbGFibGUoYXZsKVxuICAgICAgICAgICAgc2V0TG9ja2VkKGxjaylcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1sg8J+UhCBTdXBwbGllciBdIDonLCBgQmFsYW5jZSB1cGRhdGVkICgke2F2bH0gLyAke2FtdH0pYClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaWJlKERBVEEsIHJlZnJlc2hEYXRhKVxuICAgIH0sIFthZGRyZXNzXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFuYWdlci1iYWxhbmNlLXBhbmVsXCI+XG4gICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBwPXt7XG4gICAgICAgICAgICAgICAgICAgIDA6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgbWQ6ICcwcHgnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgZmxleFdyYXA9XCJ3cmFwXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxNXB4JywgbWFyZ2luQm90dG9tOiAnMTVweCcgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIGFzPVwiYmlnXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthbW91bnQgPiAwID8gJ2JhZGdlIGJhZGdlLXByaW1hcnknIDogJ2JhZGdlIGJhZGdlLWRhcmsnfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46ICcxMHB4JywgcGFkZGluZzogJzIwcHgnLCB3aWR0aDogJzI1MHB4JyB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj50b3RhbCBmdW5kczwvZGl2PjxoNSBjbGFzc05hbWU9XCJtLTFcIj4geyBmb3JtYXROdW1iZXIoYW1vdW50KSB9IDwvaDU+PGRpdj5XQVZFUzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgYXM9XCJiaWdcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYXJrXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAnMTBweCcsIHBhZGRpbmc6ICcyMHB4Jywgd2lkdGg6ICcyNTBweCcgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+bG9ja2VkIGZ1bmRzPC9kaXY+PGg1IGNsYXNzTmFtZT1cIm0tMVwiPiA8TG9ja0ljb24gLz57IGZvcm1hdE51bWJlcihsb2NrZWQpIH0gPC9oNT48ZGl2PldBVkVTPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIGFzPVwiYmlnXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthdmFpbGFibGUgPiAwID8gJ2JhZGdlIGJhZGdlLXN1Y2Nlc3MnIDogJ2JhZGdlIGJhZGdlLXNlY29uZGFyeSd9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogJzEwcHgnLCBwYWRkaW5nOiAnMjBweCcsIHdpZHRoOiAnMjUwcHgnIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PmF2YWlsYWJsZSBmdW5kczwvZGl2PjxoNSBjbGFzc05hbWU9XCJtLTFcIj4gPFVubG9ja0ljb24gLz57IGZvcm1hdE51bWJlcihhdmFpbGFibGUpIH0gPC9oNT48ZGl2PldBVkVTPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IEJhbGFuY2VQYW5lbFxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tYWxlcnQgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7XG4gICAgRXJyb3JEaWFsb2csIEZvcm1TdXBwbGllclJlZ2lzdGVyLCBSZXN1bHQsXG59IGZyb20gJy4uLy4uLy4uL21vZGFsJ1xuaW1wb3J0IHsgTG9hZGluZywgTW9kYWwgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQnXG5pbXBvcnQgeyByZWdpc3RlclN1cHBsaWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGlicy9kQXBwJ1xuXG5mdW5jdGlvbiBSZWdpc3Rlcih7IGFjY291bnQgfSkge1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtsb2FkaW5nRGF0YSwgc2V0TG9hZGluZ0RhdGFdID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbcmVzdWx0T3BlbmVkLCBzZXRSZXN1bHRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtmb3JtT3BlbmVkLCBzZXRGb3JtT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbZXJyb3JSZXN1bHQsIHNldEVycm9yUmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSlcbiAgICAgICAgICAgIGlmICghYWNjb3VudC5pc1N1cHBsaWVyICYmICFmb3JtT3BlbmVkKSB7XG4gICAgICAgICAgICAgICAgc2V0Rm9ybU9wZW4odHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwKVxuICAgIH0sIFthY2NvdW50XSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7bG9hZGluZ0RhdGEgPyAoPExvYWRpbmcgLz4pIDogbnVsbCB9XG4gICAgICAgICAgICB7Zm9ybU9wZW5lZCAmJiAhYWNjb3VudC5pc1N1cHBsaWVyID8gKFxuICAgICAgICAgICAgICAgIDxGb3JtU3VwcGxpZXJSZWdpc3RlclxuICAgICAgICAgICAgICAgICAgICBhcz1cImRpdlwiXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnM9e1snc3VibWl0J119XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZvcm1PcGVuKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoJ1JlZ2lzdGVyaW5nIGFzIHN1cHBsaWVyIC4uLicpXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHJlZ2lzdGVyU3VwcGxpZXIoZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHRPcGVuKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yUmVzdWx0KGVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAnJyB9XG5cbiAgICAgICAgICAgIDxNb2RhbCBvcGVuPXtyZXN1bHRPcGVuZWR9IG9uQ2xvc2U9eygpID0+IHNldFJlc3VsdE9wZW4oZmFsc2UpfT5cbiAgICAgICAgICAgICAgICA8UmVzdWx0XG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCI8ZGl2IGNsYXNzPSdhbGVydCBhbGVydC1zdWNjZXNzJz5SZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCE8L2Rpdj48ZGl2PllvdSBhcmUgbm93IGEgc3VwcGxpZXIuPGJyLz48YnIvPjwvZGl2PjxkaXY+Q2xpY2sgb24gPGI+TWFuYWdlIENvdXBvbnM8L2I+IHRvIGFkZCAvIHVwZGF0ZSAvIHJlbW92ZSBjb3Vwb25zLjwvZGl2PlwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFJlc3VsdE9wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgPE1vZGFsIG9wZW49e3R5cGVvZiBsb2FkaW5nID09PSAnc3RyaW5nJ30gb25DbG9zZT17KCkgPT4gc2V0TG9hZGluZyhmYWxzZSl9PlxuICAgICAgICAgICAgICAgIDxMb2FkaW5nIGNsYXNzTmFtZT1cImJnLWRhcmtcIiB0ZXh0PXtsb2FkaW5nfSAvPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgIDxFcnJvckRpYWxvZyBjbGFzc05hbWU9XCJiZy1kYXJrXCIgdGV4dD17ZXJyb3JSZXN1bHQ/Lm1lc3NhZ2V9IG9wZW49e3R5cGVvZiBlcnJvclJlc3VsdCA9PT0gJ29iamVjdCd9IG9uQ2xvc2U9eygpID0+IHNldEVycm9yUmVzdWx0KGZhbHNlKX0gLz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tYWxlcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVuZXNjYXBlZC1lbnRpdGllcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgQ291cG9ucyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMnXG5pbXBvcnQge1xuICAgIERBVEEsIGZldGNoU3VwcGxpZXJJdGVtcywgc3Vic2NyaWJlLFxufSBmcm9tICcuLi8uLi8uLi8uLi9saWJzL2RBcHAnXG5pbXBvcnQgeyBGbGV4LCBMb2FkaW5nIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkJ1xuXG5mdW5jdGlvbiBNYW5hZ2VyKHsgYWNjb3VudCwgc2V0QWN0aXZlVXJsIH0pIHtcbiAgICBjb25zdCBbbG9hZGluZ0RhdGEsIHNldExvYWRpbmdEYXRhXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW2l0ZW1zLCB1cGRhdGVJdGVtc10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCB7IGFkZHJlc3MgfSA9IGFjY291bnRcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hEYXRhKCkge1xuICAgICAgICAgICAgbGV0IGxpc3QgPSBbXVxuICAgICAgICAgICAgc2V0TG9hZGluZ0RhdGEodHJ1ZSlcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGlzdCA9IGF3YWl0IGZldGNoU3VwcGxpZXJJdGVtcyhhZGRyZXNzKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1sg8J+UhCBNYW5hZ2VyIF0gOicsIGAke2xpc3QubGVuZ3RofSBpdGVtcyBsb2FkZWRgKVxuICAgICAgICAgICAgICAgIHVwZGF0ZUl0ZW1zKGxpc3QpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmUoREFUQSwgcmVmcmVzaERhdGEpXG4gICAgfSwgW2FkZHJlc3NdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtsb2FkaW5nRGF0YSA/ICg8TG9hZGluZyAvPikgOiBudWxsIH1cbiAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIHB4PXt7XG4gICAgICAgICAgICAgICAgICAgIDA6ICcyMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgbGc6ICczOXB4JyxcbiAgICAgICAgICAgICAgICAgICAgeGw6ICcyMHB4JyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGZsZXhXcmFwPVwid3JhcFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENvdXBvbnNcbiAgICAgICAgICAgICAgICAgICAgaXNNYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgIG1vZGU9XCJtYW5hZ2VcIlxuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH1cbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgICAgICAgICAgICBoaWRlRW1wdHlMaXN0TWVzc2FnZT17bG9hZGluZ0RhdGF9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW5lc2NhcGVkLWVudGl0aWVzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBQdXJjaGFzZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb250YWluZXJzJ1xuaW1wb3J0IHtcbiAgICBEQVRBLCBmZXRjaFN1cHBsaWVyUHVyY2hhc2VzLCBzdWJzY3JpYmUsXG59IGZyb20gJy4uLy4uLy4uLy4uL2xpYnMvZEFwcCdcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQnXG5cbmZ1bmN0aW9uIFB1cmNoYXNlc0FwcHJvdmUoeyBhY2NvdW50LCBzZXRBY3RpdmVVcmwgfSkge1xuICAgIGNvbnN0IFtsb2FkaW5nRGF0YSwgc2V0TG9hZGluZ0RhdGFdID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbaXRlbXMsIHVwZGF0ZUl0ZW1zXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaERhdGEoKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nRGF0YSh0cnVlKVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBwdXJjaGFzZXMgdG8gYXBwcm92ZVxuICAgICAgICAgICAgICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gYWNjb3VudFxuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBmZXRjaFN1cHBsaWVyUHVyY2hhc2VzKGFkZHJlc3MpXG4gICAgICAgICAgICAgICAgY29uc3QgYXBwcm92ZUxpc3QgPSBsaXN0LmZpbHRlcihzID0+IHMuc3RhdHVzID09PSAnYXBwcm92YWwnKS5zb3J0KChhLCBiKSA9PiBhLnRpbWVzdGFtcCA8IGIudGltZXN0YW1wKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1sg8J+UhCBQdXJjaGFzZXMgXSA6JywgYCR7YXBwcm92ZUxpc3QubGVuZ3RofSBwdXJjaGFzZXMgdG8gYXBwcm92ZSBsb2FkZWRgKVxuICAgICAgICAgICAgICAgIHVwZGF0ZUl0ZW1zKGFwcHJvdmVMaXN0KVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaWJlKERBVEEsIHJlZnJlc2hEYXRhKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtsb2FkaW5nRGF0YSA/ICg8TG9hZGluZyAvPikgOiBudWxsIH1cbiAgICAgICAgICAgIDxQdXJjaGFzZXNcbiAgICAgICAgICAgICAgICBpc01hbmFnZXJcbiAgICAgICAgICAgICAgICBtb2RlPVwiYXBwcm92YWxcIlxuICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH1cbiAgICAgICAgICAgICAgICBoaWRlRW1wdHlMaXN0TWVzc2FnZT17bG9hZGluZ0RhdGF9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFB1cmNoYXNlc0FwcHJvdmVcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bmVzY2FwZWQtZW50aXRpZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IFB1cmNoYXNlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMnXG5pbXBvcnQge1xuICAgIERBVEEsIGZldGNoU3VwcGxpZXJQdXJjaGFzZXMsIHN1YnNjcmliZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbGlicy9kQXBwJ1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZCdcblxuZnVuY3Rpb24gUHVyY2hhc2VzSGlzdG9yeSh7IGFjY291bnQsIHNldEFjdGl2ZVVybCB9KSB7XG4gICAgY29uc3QgW2xvYWRpbmdEYXRhLCBzZXRMb2FkaW5nRGF0YV0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtpdGVtcywgdXBkYXRlSXRlbXNdID0gdXNlU3RhdGUoW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiByZWZyZXNoRGF0YSgpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmdEYXRhKHRydWUpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIHB1cmNoYXNlcyBoaXN0b3J5XG4gICAgICAgICAgICAgICAgY29uc3QgeyBhZGRyZXNzIH0gPSBhY2NvdW50XG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IGF3YWl0IGZldGNoU3VwcGxpZXJQdXJjaGFzZXMoYWRkcmVzcylcbiAgICAgICAgICAgICAgICBjb25zdCBoaXN0b3J5TGlzdCA9IGxpc3QuZmlsdGVyKHMgPT4gcy5zdGF0dXMgIT09ICdhcHByb3ZhbCcpLnNvcnQoKGEsIGIpID0+IGEudGltZXN0YW1wIDwgYi50aW1lc3RhbXApXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnWyDwn5SEIFB1cmNoYXNlcyBIaXN0b3J5IF0gOicsIGAke2hpc3RvcnlMaXN0Lmxlbmd0aH0gcHVyY2hhc2VzIGxvYWRlZGApXG4gICAgICAgICAgICAgICAgdXBkYXRlSXRlbXMoaGlzdG9yeUxpc3QpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmUoREFUQSwgcmVmcmVzaERhdGEpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2xvYWRpbmdEYXRhID8gKDxMb2FkaW5nIC8+KSA6IG51bGwgfVxuICAgICAgICAgICAgPFB1cmNoYXNlc1xuICAgICAgICAgICAgICAgIGlzTWFuYWdlclxuICAgICAgICAgICAgICAgIG1vZGU9XCJoaXN0b3J5XCJcbiAgICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlVXJsPXtzZXRBY3RpdmVVcmx9XG4gICAgICAgICAgICAgICAgaGlkZUVtcHR5TGlzdE1lc3NhZ2U9e2xvYWRpbmdEYXRhfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQdXJjaGFzZXNIaXN0b3J5XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW5lc2NhcGVkLWVudGl0aWVzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBDb3Vwb25zTGlzdCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMnXG5pbXBvcnQgeyBEQVRBLCBmZXRjaFN1cHBsaWVyQXZhaWxhYmxlQ291cG9ucywgc3Vic2NyaWJlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGlicy9kQXBwJ1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZCdcblxuZnVuY3Rpb24gV2l0aGRyYXdGdW5kcyh7IGFjY291bnQsIHNldEFjdGl2ZVVybCB9KSB7XG4gICAgY29uc3QgW2xvYWRpbmdEYXRhLCBzZXRMb2FkaW5nRGF0YV0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtpdGVtcywgdXBkYXRlSXRlbXNdID0gdXNlU3RhdGUoW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiByZWZyZXNoRGF0YSgpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmdEYXRhKHRydWUpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIHB1cmNoYXNlcyB0byBhcHByb3ZlXG4gICAgICAgICAgICAgICAgY29uc3QgeyBhZGRyZXNzIH0gPSBhY2NvdW50XG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IGF3YWl0IGZldGNoU3VwcGxpZXJBdmFpbGFibGVDb3Vwb25zKGFkZHJlc3MpXG4gICAgICAgICAgICAgICAgY29uc3QgYXZhaWxhYmxlTGlzdCA9IGxpc3Quc29ydCgoYSwgYikgPT4gYS50aW1lc3RhbXAgPCBiLnRpbWVzdGFtcClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdbIPCflIQgUHVyY2hhc2VzIF0gOicsIGAke2F2YWlsYWJsZUxpc3QubGVuZ3RofSBhdmFpbGFibGUgY291cG9ucyBsb2FkZWRgKVxuXG4gICAgICAgICAgICAgICAgdXBkYXRlSXRlbXMoYXZhaWxhYmxlTGlzdClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZShEQVRBLCByZWZyZXNoRGF0YSlcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7bG9hZGluZ0RhdGEgPyAoPExvYWRpbmcgLz4pIDogbnVsbCB9XG4gICAgICAgICAgICA8Q291cG9uc0xpc3RcbiAgICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICAgICAgaXNNYW5hZ2VyXG4gICAgICAgICAgICAgICAgbW9kZT1cIndpdGhkcmF3XCJcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH1cbiAgICAgICAgICAgICAgICBoaWRlRW1wdHlMaXN0TWVzc2FnZT17bG9hZGluZ0RhdGF9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpdGhkcmF3RnVuZHNcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTWVudSB9IGZyb20gJy4vTWVudSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQmFsYW5jZVBhbmVsIH0gZnJvbSAnLi9CYWxhbmNlUGFuZWwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlZ2lzdGVyIH0gZnJvbSAnLi9SZWdpc3RlcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFuYWdlciB9IGZyb20gJy4vTWFuYWdlcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHVyY2hhc2VzQXBwcm92ZSB9IGZyb20gJy4vUHVyY2hhc2VzQXBwcm92ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHVyY2hhc2VzSGlzdG9yeSB9IGZyb20gJy4vUHVyY2hhc2VzSGlzdG9yeSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV2l0aGRyYXdGdW5kcyB9IGZyb20gJy4vV2l0aGRyYXdGdW5kcydcblxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW5lc2NhcGVkLWVudGl0aWVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7XG4gICAgTWVudSwgQmFsYW5jZVBhbmVsLCBSZWdpc3RlciwgUHVyY2hhc2VzQXBwcm92ZSwgUHVyY2hhc2VzSGlzdG9yeSwgV2l0aGRyYXdGdW5kcyxcbn0gZnJvbSAnLi9jb21wb25lbnRzJ1xuaW1wb3J0IE1hbmFnZXIgZnJvbSAnLi9jb21wb25lbnRzL01hbmFnZXInXG5cbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL3NoYXJlZCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICcuLi8uLi8uLi9saWJzL2RBcHAnXG5pbXBvcnQgeyB1c2VDb3Vwb25EaWFsb2dzIH0gZnJvbSAnLi4vLi4vc2VydmljZSdcblxuY29uc3QgUGFnZVN1cHBsaWVyID0gKHtcbiAgICBhY2NvdW50LCBhY3RpdmVVcmwsIHNldEFjdGl2ZVVybCxcbn0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIENvdXBvbkRpYWxvZ3MsXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgICBmb3JtOiBbZm9ybU9wZW5lZCwgb25Gb3JtT3Blbl0sXG4gICAgfSA9IHVzZUNvdXBvbkRpYWxvZ3MoKVxuXG4gICAgY29uc3Qgb25DcmVhdGVDb3Vwb24gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIG9uRm9ybU9wZW4oKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPENvdXBvbkRpYWxvZ3MgLz5cblxuICAgICAgICAgICAge2FjY291bnQuaXNTdXBwbGllciAmJiBhY3RpdmVVcmwuaW5kZXhPZignI3N1cHBsaWVyL3JlZ2lzdGVyJykgPT09IC0xID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlVXJsPXthY3RpdmVVcmx9XG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVVybD17c2V0QWN0aXZlVXJsfVxuICAgICAgICAgICAgICAgICAgICBhcHByb3ZhbENvdW50ZXI9e2FjY291bnQ/LnN1cHBsaWVyPy5hcHByb3ZhbENvdW50ZXJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ3JlYXRlQ291cG9uPXtvbkNyZWF0ZUNvdXBvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHsgYWNjb3VudC5pc0Nvbm5lY3RlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVVybC5tYXRjaChuZXcgUmVnRXhwKCcuKi8/KCNzdXBwbGllclteL10qfCNzdXBwbGllci9tYW5hZ2UuKikkJykpID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtbGlnaHQgYWxlcnQtZGlzbWlzc2libGUgZmFkZSBzaG93IHRleHQtY2VudGVyIHRleHQtc2Vjb25kYXJ5IHNtYWxsXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbmQgaGVyZSBhbGwgY291cG9ucyB5b3UgaGF2ZSBjcmVhdGVkIGFzIHN1cHBsaWVyLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgY2FuIGFkZCwgdXBkYXRlIGFuZCByZW1vdmUgdGhlbSBhdCBhbnkgdGltZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljayBvbiBcIkFkZCBOZXcgQ291cG9uXCIgdG8gY3JlYXRlIGEgbmV3IGNvdXBvbiB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrIG9uIGFueSBjb3Vwb24gYW5kIHRoZW4gb24gXCJFZGl0XCIgdG8gdXBkYXRlIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yIFwiUmVtb3ZlXCIgdG8gcmVtb3ZlIGl0IGZyb20gTWFya2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFuYWdlciBhY2NvdW50PXthY2NvdW50fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsIH1cblxuICAgICAgICAgICAgICAgICAgICB7YWN0aXZlVXJsLm1hdGNoKG5ldyBSZWdFeHAoJy4qLz8jc3VwcGxpZXIvaGlzdG9yeS4qJCcpKSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFB1cmNoYXNlc0hpc3RvcnkgYWNjb3VudD17YWNjb3VudH0gc2V0QWN0aXZlVXJsPXtzZXRBY3RpdmVVcmx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGwgfVxuXG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVVcmwubWF0Y2gobmV3IFJlZ0V4cCgnLiovPyNzdXBwbGllci9hcHByb3ZlLiokJykpID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtbGlnaHQgYWxlcnQtZGlzbWlzc2libGUgZmFkZSBzaG93IHRleHQtY2VudGVyIHRleHQtc2Vjb25kYXJ5IHNtYWxsXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgRmluZCBoZXJlIGFsbCB0aGUgY291cG9ucyB5b3UgaGF2ZSBzb2xkLCBhbmQgY2hvb3NlIGZvciBlYWNoIG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgeW91IGFjY2VwdCB0aGUgc2FsZSBvciByZWZ1c2UgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljayBvbiBcIlJlamVjdFwiIHRvIHJlZnVzZSBvciBcIkFjY2VwdFwiIHRvIGFjY2VwdCB0aGUgc2FsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFB1cmNoYXNlc0FwcHJvdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVVybD17c2V0QWN0aXZlVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbCB9XG5cbiAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVVybC5tYXRjaChuZXcgUmVnRXhwKCcuKi8/I3N1cHBsaWVyL3dpdGhkcmF3LiokJykpID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYWxhbmNlUGFuZWwgYWNjb3VudD17YWNjb3VudH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtbGlnaHQgYWxlcnQtZGlzbWlzc2libGUgZmFkZSBzaG93IHRleHQtY2VudGVyIHRleHQtc2Vjb25kYXJ5IHNtYWxsXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdpdGhkcmF3IGF2YWlsYWJsZSBmdW5kcyBmb3IgZXhwaXJlZC9idXJuZWQgY291cG9ucy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljayBvbiBcIldpdGhkcmF3IEZ1bmRzXCIgZm9yIGFueSBjb3Vwb24gdG8gcmVjZWl2ZWQgZnVuZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxXaXRoZHJhd0Z1bmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17YWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGwgfVxuXG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVVcmwubWF0Y2gobmV3IFJlZ0V4cCgnLiovPyNzdXBwbGllci9idXJuLiokJykpID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtbGlnaHQgYWxlcnQtZGlzbWlzc2libGUgZmFkZSBzaG93IHRleHQtY2VudGVyIHRleHQtc2Vjb25kYXJ5IHNtYWxsXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbmQgaGVyZSBhbGwgdGhlIGNvdXBvbnMgeW91IHJlY2VpdmVkIGluIHJldHVybiBmcm9tIGJ1eWVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgYnVybiB0aGVtIHRvIHJlbGVhc2UgZnVuZHMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2sgXCJCdXJuXCIgYnV0dG9uIG9uIGFueSBjb3Vwb24gYnVybiBpdCBhbmQgcmVsZWFzZSBmdW5kcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtd2FybmluZyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VG8gdXNlIFN1cHBsaWVyIE1hbmFnZXIsIHBsZWFzZSBsb2dpbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2Nvbm5lY3R9PkxvZ2luPC9idXR0b24+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6ICcgJ31cblxuICAgICAgICAgICAgPFJlZ2lzdGVyIGFjY291bnQ9e2FjY291bnR9IC8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IFBhZ2VTdXBwbGllclxuXG4iLCJpbXBvcnQgUGFnZVN1cHBsaWVyIGZyb20gJy4vUGFnZVN1cHBsaWVyJ1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlU3VwcGxpZXJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUGFnZU1hcmtldCB9IGZyb20gJy4vbWFya2V0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYWdlQ291cG9ucyB9IGZyb20gJy4vY291cG9ucydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFnZVN1cHBsaWVyIH0gZnJvbSAnLi9zdXBwbGllcidcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW5vbmludGVyYWN0aXZlLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9jbGljay1ldmVudHMtaGF2ZS1rZXktZXZlbnRzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaG90IH0gZnJvbSAncmVhY3QtaG90LWxvYWRlci9yb290J1xuLy8gaW1wb3J0IHsgc2V0IH0gZnJvbSAncmFtZGEnXG4vKlxuaW1wb3J0IHtcbiAgICBEaWFsb2csIFJlc3VsdCwgRm9ybSwgRm9ybVN1cHBsaWVyUmVnaXN0ZXIsXG59IGZyb20gJy4vY29tcG9uZW50cy9tb2RhbCdcblxuIGltcG9ydCB7XG4gICAgZmV0Y2hJdGVtcywgcmVnaXN0ZXJTdXBwbGllciwgYWRkSXRlbSwgdXBkYXRlSXRlbSwgcmVtb3ZlSXRlbSxcbiAgICBnZXREYXRhQnlLZXksIGZldGNoU3VwcGxpZXJJdGVtcywgZmV0Y2hVc2VyUHVyY2hhc2VzLCBmZXRjaFN1cHBsaWVyUHVyY2hhc2VzLFxuICAgIHB1cmNoYXNlQ291cG9uLCByZWplY3RQdXJjaGFzZSwgYWNjZXB0UHVyY2hhc2UsIHNlbmRDb3Vwb25Ub1N1cHBsaWVyLFxuICAgIGdldFN1cHBsaWVyQmFsYW5jZSwgZ2V0U3VwcGxpZXJBdmFpbGFibGVCYWxhbmNlLCBidXJuQ291cG9uLCB3aXRoZHJhd0F2YWlsYWJsZSxcbiAgICBmZXRjaFN1cHBsaWVyUmVjZWl2ZWRDb3Vwb25zLCBmZXRjaFVzZXJBY3RpdmVDb3Vwb25zLFxufSBmcm9tICcuL2FwaSdcbiovXG4vLyBpbXBvcnQgeyBhc3luY0ZpbHRlciB9IGZyb20gJy4vYXBpL2hlbHBlcidcbi8vIGltcG9ydCBQYWdlU3VwcGxpZXIgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL21hbmFnZXInXG5pbXBvcnQgeyBGb290ZXIsIEhlYWRlciB9IGZyb20gJy4vY29udGFpbmVycydcbmltcG9ydCB7XG4gICAgc3Vic2NyaWJlLCBBQ0NPVU5ULCBERUZBVUxUX0FDQ09VTlQsXG59IGZyb20gJy4vbGlicy9kQXBwJ1xuaW1wb3J0IHsgUGFnZU1hcmtldCwgUGFnZUNvdXBvbnMsIFBhZ2VTdXBwbGllciB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcydcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIGNvbnN0IFthY3RpdmVVcmwsIHNldEFjdGl2ZVVybF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZSh7IC4uLkRFRkFVTFRfQUNDT1VOVCwgbG9hZGluZzogdHJ1ZSB9KVxuXG4gICAgLy8gc3Vic2NyaWJlIHRvIGFjY291bnQgY2hhbmdlXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgb25BY2NvdW50Q2hhbmdlID0gYXN5bmMgKGFjY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1sg8J+UhCBBY2NvdW50IF0gOiBhY2NvdW50IGNoYW5nZScpXG4gICAgICAgICAgICBzZXRBY2NvdW50KGFjY3QpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZShBQ0NPVU5ULCBvbkFjY291bnRDaGFuZ2UpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICB7YWNjb3VudC5sb2FkaW5nfVxuICAgICAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgICAgIGFjY291bnQ9e2FjY291bnR9XG4gICAgICAgICAgICAgICAgYWN0aXZlVXJsPXthY3RpdmVVcmx9XG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlVXJsPXtzZXRBY3RpdmVVcmx9XG4gICAgICAgICAgICAgICAgLy8gb25BY2NvdW50Q2hhbmdlPXtmZXRjaERhdGF9XG4gICAgICAgICAgICAgICAgLy8gb25TdXBwbGllclJlZ2lzdGVyPXtvblN1cHBsaWVyUmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgLy8gb25DcmVhdGVDb3Vwb249e29uRm9ybU9wZW59XG4gICAgICAgICAgICAgICAgLy8gZmlsdGVyQWN0aXZlPXtmaWx0ZXJBY3RpdmV9XG4gICAgICAgICAgICAgICAgLy8gb25DaGFuZ2VGaWx0ZXJTdGF0ZT17Y2hhbmdlRmlsdGVyU3RhdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtbWQtM1wiPlxuICAgICAgICAgICAgICAgIHsgYWN0aXZlVXJsPy5pbmRleE9mKCcjZmVhdHVyZWQnKSA+PSAwXG4gICAgICAgICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2VNYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVVcmw9e2FjdGl2ZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI9e2UgPT4gZS5pc0ZlYXR1cmVkICYmICFlLmlzRXhwaXJlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAnJyB9XG5cbiAgICAgICAgICAgICAgICB7IGFjdGl2ZVVybD8uaW5kZXhPZignI2RlbGlzdGVkJykgPj0gMFxuICAgICAgICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdlTWFya2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlVXJsPXthY3RpdmVVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlVXJsPXtzZXRBY3RpdmVVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyPXtlID0+ICFlLmlzRmVhdHVyZWQgJiYgIWUuaXNFeHBpcmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6ICcnIH1cblxuICAgICAgICAgICAgICAgIHsgYWN0aXZlVXJsPy5pbmRleE9mKCcjZXhwaXJlZCcpID49IDBcbiAgICAgICAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFnZU1hcmtldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVVybD17YWN0aXZlVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVVybD17c2V0QWN0aXZlVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcj17ZSA9PiBlLmlzRXhwaXJlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAnJyB9XG5cbiAgICAgICAgICAgICAgICB7IGFjdGl2ZVVybD8uaW5kZXhPZignI21hcmtldCcpID49IDBcbiAgICAgICAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFnZU1hcmtldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVVybD17YWN0aXZlVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVVybD17c2V0QWN0aXZlVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6ICcnIH1cblxuICAgICAgICAgICAgICAgIHsgYWN0aXZlVXJsPy5pbmRleE9mKCcjbXknKSA+PSAwXG4gICAgICAgICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2VDb3Vwb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17YWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVVcmw9e2FjdGl2ZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAnJyB9XG5cbiAgICAgICAgICAgICAgICB7IGFjdGl2ZVVybD8uaW5kZXhPZignI3N1cHBsaWVyJykgPj0gMFxuICAgICAgICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdlU3VwcGxpZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVVybD17YWN0aXZlVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVVybD17c2V0QWN0aXZlVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6ICcnIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEZvb3RlciBhY2NvdW50PXthY2NvdW50fSBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH0gLz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBob3QoQXBwKVxuIiwiaW1wb3J0IHtcbiAgICBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLFxufSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24vZGV2ZWxvcG1lbnRPbmx5J1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnXG5pbXBvcnQge1xuICAgIGlzTmlsLCBub3QsIGFwcGVuZCwgZmlsdGVyLFxufSBmcm9tICdyYW1kYSdcblxuaW1wb3J0IHsgcGlwZSwgcGlwZUYgfSBmcm9tICcuLi9saWJzL3NlcnZpY2UnXG5pbXBvcnQgeyBJTklUX0FQUCB9IGZyb20gJy4uL3JlZHVjZXJzL3Jvb3QnXG5cbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKVxuXG5jb25zdCBub3ROaWwgPSBwaXBlRihpc05pbCwgbm90KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZSh7XG4gICAgcm91dGVyTWlkZGxld2FyZSwgcm9vdFJlZHVjZXIsIHJvb3RTYWdhLCBtaWRkbGV3YXJlcyxcbn0pIHtcbiAgICBjb25zdCBtaWRkbGV3YXJlTGlzdCA9IHBpcGUoXG4gICAgICAgIFtyb3V0ZXJNaWRkbGV3YXJlXSxcbiAgICAgICAgeCA9PiBbLi4ueCwgLi4uKG1pZGRsZXdhcmVzIHx8IFtdKV0sXG4gICAgICAgIGFwcGVuZChyb290U2FnYSAmJiBzYWdhTWlkZGxld2FyZSksXG4gICAgICAgIGZpbHRlcihub3ROaWwpLFxuICAgIClcblxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVMaXN0KSkpXG5cbiAgICBpZiAocm9vdFNhZ2EpIHtcbiAgICAgICAgc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKVxuICAgIH1cblxuICAgIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogSU5JVF9BUFAgfSlcblxuICAgIHJldHVybiBzdG9yZVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlSW1tdXRhYmxlUmVkdWNlciB9IGZyb20gJy4uL2xpYnMvcmVkdXgtYWN0aW9ucydcblxuY29uc3QgaW5pdGlhbFN0YXRlID0geyBsaXN0OiBbMSwgMiwgMywgNF0gfVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbW11dGFibGVSZWR1Y2VyKGluaXRpYWxTdGF0ZSwge30pXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcblxuLy8gaW1wb3J0IGRBcHAgZnJvbSAnLi9kQXBwJ1xuaW1wb3J0IGNvdXBvbnMgZnJvbSAnLi9jb3Vwb25zJ1xuaW1wb3J0IHJvb3QgZnJvbSAnLi9yb290J1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PlxuICAgIGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgICAgIC8vIGRBcHAsXG4gICAgICAgIGNvdXBvbnMsXG4gICAgICAgIHJvb3QsXG4gICAgfSlcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXG5pbXBvcnQge1xuICAgIGludm9rZVNjcmlwdCwgYnJvYWRjYXN0LCBub2RlSW50ZXJhY3Rpb24sIHdhaXRGb3JUeCxcbn0gZnJvbSAnQHdhdmVzL3dhdmVzLXRyYW5zYWN0aW9ucydcbmltcG9ydCB7IHN0cmluZ1RvVWludDhBcnJheSwgc2hhMjU2LCBiYXNlNThlbmNvZGUgfSBmcm9tICdAd2F2ZXMvd2F2ZXMtY3J5cHRvJ1xuaW1wb3J0IHsgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcblxuaW1wb3J0ICogYXMgZEFwcCBmcm9tICcuLi8uLi9saWJzL2RBcHAnXG5pbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tICcuLi8uLi9saWJzL2RBcHAnXG5cbi8vIGltcG9ydCBBdXRoU2VydmljZSBmcm9tICcuL2F1dGgnXG5cbndpbmRvdy53YyA9IHtcbiAgICBzdHJpbmdUb1VpbnQ4QXJyYXksXG4gICAgc2hhMjU2LFxuICAgIGJhc2U1OGVuY29kZSxcbn1cbndpbmRvdy53dCA9IHtcbiAgICBub2RlSW50ZXJhY3Rpb24sXG4gICAgaW52b2tlU2NyaXB0LFxuICAgIGJyb2FkY2FzdCxcbiAgICB3YWl0Rm9yVHgsXG59XG5cbndpbmRvdy5hcHAgPSBkQXBwXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB3YXZlc0luaXQoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnWyDwn5SEIFdhdmVzSW5pdCBdIDonLCAnZmV0Y2hEYXRhJylcbiAgICAgICAgeWllbGQgY2FsbChmZXRjaERhdGEpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICB9XG5cbi8qXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdiA9IHlpZWxkIGNhbGwobm9kZUludGVyYWN0aW9uLmFjY291bnREYXRhLCBkYXBwQWRkcmVzcywgYmFzZVVyaSlcbiAgICAgICAgd2luZG93LmRBcHBEYXRhID0gdlxuXG4gICAgICAgIHdpbmRvdy5kQXBwRGF0YUtleXMgPSBPYmplY3Qua2V5cyh2KVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZEFwcCBBY2NvdW50IGRhdGE6JylcbiAgICAgICAgLy8gY29uc29sZS5sb2codilcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBXYXZlc0tlZXBlciB9ID0gd2luZG93XG4gICAgaWYgKCFXYXZlc0tlZXBlcikge1xuICAgICAgICBhbGVydCgnVG8gQXV0aCBXYXZlc0tlZXBlciBzaG91bGQgYmUgaW5zdGFsbGVkLicpXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vICAgIGNvbnN0IGF1dGhEYXRhID0geyBkYXRhOiAnQXV0aCBvbiBteSBcXCdDb3Vwb24gQmF6YWFyXFwnIHNpdGUnIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGtlZXBlckFwaSA9IHlpZWxkIGNhbGwoKCkgPT4gV2F2ZXNLZWVwZXIuaW5pdGlhbFByb21pc2UpXG4gICAgICAgIGNvbnN0IHN0YXRlID0geWllbGQgY2FsbChrZWVwZXJBcGkucHVibGljU3RhdGUpXG4gICAgICAgIGNvbnNvbGUubG9nKCdXYXZlcyBLZWVwZXIgZGF0YTonKSAvLyBkaXNwbGF5aW5nIHRoZSByZXN1bHQgaW4gdGhlIGNvbnNvbGVcbiAgICAgICAgY29uc29sZS5sb2coc3RhdGUpXG4gICAgICAgIHdpbmRvdy5hY2NvdW50ID0gc3RhdGUuYWNjb3VudFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZS5hY2NvdW50Lm5ldHdvcmssIHdpbmRvdy5kQXBwLm5ldHdvcmspXG4gICAgICAgIGlmIChzdGF0ZS5hY2NvdW50Lm5ldHdvcmsgIT09IHdpbmRvdy5kQXBwLm5ldHdvcmspIHtcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2Ugc3dpdGNoIFdhdmVzS2VlcGVyIHRvIHRlc3RuZXQnKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYXV0aCA9IHlpZWxkIGNhbGwoV2F2ZXNLZWVwZXIuYXV0aCwgYXV0aERhdGEpXG4gICAgICAgIGNvbnNvbGUubG9nKGF1dGgpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICB9XG4qL1xufVxuIiwiaW1wb3J0IHsgdGFrZUxhdGVzdCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcblxuaW1wb3J0IHsgd2F2ZXNJbml0IH0gZnJvbSAnLi9zZXJ2aWNlJ1xuXG5pbXBvcnQgKiBhcyByb290QWN0aW9ucyBmcm9tICcuLi9yZWR1Y2Vycy9yb290J1xuXG5mdW5jdGlvbiogaW5pdCgpIHtcbiAgICB5aWVsZCBmb3JrKHdhdmVzSW5pdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGluaXRTYWdhKCkge1xuICAgIHlpZWxkIHRha2VMYXRlc3QoW3Jvb3RBY3Rpb25zLklOSVRfQVBQXSwgaW5pdClcbn1cbiIsImltcG9ydCB7IGFsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcblxuaW1wb3J0IGluaXRTYWdhIGZyb20gJy4vaW5pdFNhZ2EnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgICB5aWVsZCBhbGwoW2luaXRTYWdhKCldKVxufVxuIiwiaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vY29uZmlndXJlU3RvcmUnXG5cbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuLi9yZWR1Y2VycydcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcydcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gY29uZmlndXJlU3RvcmUoe1xuICAgIHJvb3RSZWR1Y2VyOiByb290UmVkdWNlcigpLFxuICAgIHJvb3RTYWdhLFxufSlcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyBHbG9iYWxTdHlsZSB9IGZyb20gJy4vc3R5bGVkLWNvbXBvbmVudHMvZ2xvYmFsJ1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcbmltcG9ydCB0aGVtZSBmcm9tICcuL3N0eWxlZC1jb21wb25lbnRzL3RoZW1lJ1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUnXG5pbXBvcnQgKiBhcyBkQXBwIGZyb20gJy4vbGlicy9kQXBwJ1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKClcblxud2luZG93LmFwcCA9IGRBcHBcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgICAgICAgICAgICA8QXBwIC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvUHJvdmlkZXI+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JyksXG4pXG4iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9