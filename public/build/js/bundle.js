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
  componentId: "sc-1j1do4a-0"
})({
  boxSizing: 'border-box'
}, index_esm["x" /* space */], index_esm["z" /* width */], index_esm["n" /* height */], index_esm["l" /* fontSize */], index_esm["e" /* color */], index_esm["c" /* background */], index_esm["v" /* position */], index_esm["A" /* zIndex */], index_esm["y" /* top */], index_esm["p" /* left */], index_esm["w" /* right */], index_esm["d" /* bottom */], index_esm["h" /* flex */], index_esm["g" /* display */], index_esm["i" /* flexBasis */], index_esm["s" /* minWidth */], index_esm["u" /* overflow */]);
Box.displayName = 'Box';
/* harmony default export */ var shared_Box = (Box);
// CONCATENATED MODULE: ./src/components/shared/Flex.jsx



var Flex = Object(styled_components_browser_esm["d" /* default */])(shared_Box).withConfig({
  displayName: "Flex",
  componentId: "sc-ho13c3-0"
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
  componentId: "sc-1is22hj-0"
})(["height:2px;margin-bottom:6px;left:0;transition:all linear 350ms;"]);
var HamburgerStyled = Object(styled_components_browser_esm["d" /* default */])(shared_Box).attrs({
  as: 'button'
}).withConfig({
  displayName: "Hamburger__HamburgerStyled",
  componentId: "sc-1is22hj-1"
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
  componentId: "sc-1ry5n1d-0"
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
  componentId: "sc-1y9rzrw-0"
})(["white-space:nowrap;"]);
Title.defaultProps = {
  color: 'blue.0',
  fontSize: '22px'
};
var Bold = styled_components_browser_esm["d" /* default */].b.withConfig({
  displayName: "Logo__Bold",
  componentId: "sc-1y9rzrw-1"
})(["font-weight:900;"]);
var Pointer = styled_components_browser_esm["d" /* default */].div.withConfig({
  displayName: "Logo__Pointer",
  componentId: "sc-1y9rzrw-2"
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
  componentId: "sc-l9mfr2-0"
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
  componentId: "sc-bk8skp-0"
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
  componentId: "sc-1rsckg-0"
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
  componentId: "sc-1wcxf6w-0"
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
  componentId: "sc-y45uo1-0"
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
  componentId: "sc-293dmw-0"
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
  componentId: "sc-g2goq-0"
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
  componentId: "sc-m0v0xk-0"
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
  componentId: "sc-a0zmf3-0"
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
            return _context8.abrupt("return", tx);

          case 8:
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
            console.debug(purchase);
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
            _context11.next = 6;
            return signTx(txGenAssetData);

          case 6:
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
            _context11.next = 11;
            return signTx(txAcceptData);

          case 11:
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
            _context11.next = 16;
            return Promise.all([publishTx(stx1), publishTx(stx2)]);

          case 16:
            res = _context11.sent;
            if (setStepDone) setStepDone(2);
            _context11.next = 20;
            return signTx(txTransferData);

          case 20:
            stx3 = _context11.sent;
            _context11.next = 23;
            return publishTx(stx3);

          case 23:
            res3 = _context11.sent;
            _context11.next = 26;
            return fetchData();

          case 26:
            return _context11.abrupt("return", [].concat(_toConsumableArray(res), [res3]));

          case 27:
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
            return _context14.abrupt("return", tx);

          case 9:
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
            return _context15.abrupt("return", tx);

          case 10:
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
  componentId: "sc-1pxsz28-0"
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
    componentId: "sc-8nhv9-0"
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
    componentId: "sc-16fyv58-0"
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
  componentId: "sc-1vqa8w9-0"
})(["display:block;", ""], enhanceStyledComponent);
/* harmony default export */ var shared_Text = (Text);
// CONCATENATED MODULE: ./src/components/shared/Badge.jsx


function Badge(_ref) {
  var text = _ref.text,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'secondary' : _ref$type,
      _ref$p = _ref.p,
      p = _ref$p === void 0 ? 2 : _ref$p;
  return /*#__PURE__*/react_default.a.createElement("span", {
    className: "badge badge-".concat(type, " ").concat(p > 0 ? "p-".concat(p) : '')
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
  componentId: "sc-u0dl00-0"
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
  componentId: "sc-uihkgm-0"
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
  }, /*#__PURE__*/react_default.a.createElement(shared_Text, null, isExpired ? /*#__PURE__*/react_default.a.createElement("span", {
    className: "badge badge-warning ml-1"
  }, "expired") : /*#__PURE__*/react_default.a.createElement("span", {
    className: "badge badge-light"
  }, "expire ".concat(expirationDate)))), !isEmpty(discount) && /*#__PURE__*/react_default.a.createElement(shared_Box, {
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
  componentId: "sc-1r3nzbz-0"
})([""]);
/* harmony default export */ var controls_Button = (Button);
// CONCATENATED MODULE: ./src/components/modal/controls/Footer.jsx


var Border = styled_components_browser_esm["d" /* default */].div.withConfig({
  displayName: "Footer__Border",
  componentId: "sc-slgw28-0"
})(["border-top:1px solid #000000;"]);
var Footer_Footer = Object(styled_components_browser_esm["d" /* default */])(shared_Flex).attrs({
  as: Border,
  bg: '#111',
  justifyContent: 'flex-end',
  px: '10px'
}).withConfig({
  displayName: "Footer",
  componentId: "sc-slgw28-1"
})([""]);
/* harmony default export */ var controls_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./src/components/modal/controls/SmallLogo.jsx


var SmallLogo = Object(styled_components_browser_esm["d" /* default */])(header_controls_Logo).withConfig({
  displayName: "SmallLogo",
  componentId: "sc-6htqkd-0"
})(["svg{width:32px;height:32px;}span{font-size:14px;}"]);
/* harmony default export */ var controls_SmallLogo = (SmallLogo);
// CONCATENATED MODULE: ./src/components/modal/controls/Input.jsx
var Input_excluded = ["title", "control", "forwardRef", "error", "maxlength"];

function Input_extends() { Input_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Input_extends.apply(this, arguments); }

function Input_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Input_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Input_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var InputStyled = Object(styled_components_browser_esm["d" /* default */])(shared_Box).withConfig({
  displayName: "Input__InputStyled",
  componentId: "sc-21sx19-0"
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
  }, 'nft: ', /*#__PURE__*/react_default.a.createElement("a", {
    href: "https://testnet.wavesexplorer.com/assets/".concat(coupon.assetId, "/"),
    target: "_blank",
    rel: "noreferrer"
  }, shortAddress(coupon.assetId))), /*#__PURE__*/react_default.a.createElement(shared_Text, {
    lineHeight: "18px",
    pt: "10px",
    fontSize: "12px"
  }, 'supplier: ', /*#__PURE__*/react_default.a.createElement("a", {
    href: "https://testnet.wavesexplorer.com/address/".concat(coupon.supplier, "/"),
    target: "_blank",
    rel: "noreferrer"
  }, ((_coupon$supplierData = coupon.supplierData) === null || _coupon$supplierData === void 0 ? void 0 : _coupon$supplierData.name) || shortAddress(coupon.supplier))), /*#__PURE__*/react_default.a.createElement(shared_Text, {
    lineHeight: "18px",
    pt: "10px",
    fontSize: "12px"
  }, 'status: ', /*#__PURE__*/react_default.a.createElement(shared_Badge, {
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
  componentId: "sc-1v5p2q8-0"
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
  componentId: "sc-rray6a-0"
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
    defaultValue: item.isFeatured ? 'delisted' : 'featured'
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
  componentId: "sc-sb58de-0"
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
  componentId: "sc-13skzqq-0"
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
// CONCATENATED MODULE: ./src/containers/Purchases.jsx
/* eslint-disable max-len */

/* eslint-disable no-nested-ternary */







var Purchases_Card = Object(styled_components_browser_esm["d" /* default */])(shared_Box).withConfig({
  displayName: "Purchases__Card",
  componentId: "sc-uw8h01-0"
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
    className: "alert alert-light alert-dismissible fade show text-center",
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
    className: "alert alert-light alert-dismissible fade show text-center",
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
    className: "alert alert-light alert-dismissible fade show text-center",
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
    className: "alert alert-light alert-dismissible fade show text-center",
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
  })) : '', activeUrl.match(new RegExp('.*/?#my/purchases.*$')) ? /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    className: "alert alert-light alert-dismissible fade show text-center",
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
    className: "alert alert-light alert-dismissible fade show text-center text-secondary",
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
    className: "alert alert-light alert-dismissible fade show text-center text-secondary",
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
    className: "alert alert-light alert-dismissible fade show text-center text-secondary",
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
    className: "alert alert-light alert-dismissible fade show text-center text-secondary",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlZC1jb21wb25lbnRzL2dsb2JhbC9HbG9iYWxTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3Vwb24vY291cG9uLWNvbnRyb2xzL1N0YXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9Cb3guanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9GbGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvSGFtYnVyZ2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLWNvbnRyb2xzL2ljb25Db2xvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLWNvbnRyb2xzL0xvZ29JY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLWNvbnRyb2xzL0xvZ28uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXItY29udHJvbHMvTWVudUl0ZW0uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXItY29udHJvbHMvSGVhZGVyTGF5b3V0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLWNvbnRyb2xzL1NlYXJjaEljb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXItY29udHJvbHMvU2hvcEljb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXItY29udHJvbHMvVXNlckljb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXItY29udHJvbHMvTG9ja0ljb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXItY29udHJvbHMvVW5sb2NrSWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci1jb250cm9scy9UcmlhbmdsZUljb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXItY29udHJvbHMvUm91bmRNYXJrSWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci1jb250cm9scy9sYW5ndWFnZS1pY29ucy9FbmdsaXNoLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLWNvbnRyb2xzL2xhbmd1YWdlLWljb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXItY29udHJvbHMvTGFuZ3VhZ2VTZWxlY3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXItY29udHJvbHMvQ2xvc2VJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLWNvbnRyb2xzL05GVEljb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXItY29udHJvbHMvQWRkQ291cG9uSWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci1jb250cm9scy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvZEFwcC9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvZEFwcC9kQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2RBcHAvd3QtdHJhbnNhY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2RBcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY3VzdG9tL2J0TG9naW4uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9IZWFkZXJMaW5lLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0xvZ29Db3B5cmlnaHQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9zb2NpYWwtaWNvbnMvRmFjZWJvb2suanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9zb2NpYWwtaWNvbnMvTGlua2VkaW4uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9zb2NpYWwtaWNvbnMvVGVsZWdyYW0uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9zb2NpYWwtaWNvbnMvVHdpdHRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L3NvY2lhbC1pY29ucy9XaGF0c2FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L3NvY2lhbC1pY29ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvU29jaWFsQnV0dG9ucy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L01vYmlsZU1lbnUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9PdmVybGF5LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL01vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvVGV4dC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL0JhZGdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvTG9hZGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvdXBvbi9jb3Vwb24tY29udHJvbHMvUmF0aW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3Vwb24vY291cG9uLWNvbnRyb2xzL1ByaWNlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3Vwb24vY291cG9uLWNvbnRyb2xzL0Rpc2NvdW50LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3Vwb24vY291cG9uLWNvbnRyb2xzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvdXBvbi9Db3Vwb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvdXBvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZXJ2aWNlL3VzZUFwcERpYWxvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VydmljZS91c2VEaXNwYXRjaGVkQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZXJ2aWNlL3VzZVN1cHBsaWVyUmVnaXN0ZXJEaWFsb2dzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFsL2NvbnRyb2xzL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvY29udHJvbHMvRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9jb250cm9scy9TbWFsbExvZ28uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFsL2NvbnRyb2xzL0lucHV0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9jb250cm9scy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jdXN0b20vYnRWb3RpbmcuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFsL0RpYWxvZy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvUmVzdWx0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9Gb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9Gb3JtU3VwcGxpZXJSZWdpc3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvRm9ybVZvdGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFsL0Vycm9yRGlhbG9nLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9Mb2FkaW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9Gb3JtUmV2ZWFsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZXJ2aWNlL3VzZUNvdXBvbkRpYWxvZ3MuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlcnZpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvQ291cG9ucy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvQ291cG9uc0xpc3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1B1cmNoYXNlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlZC1jb21wb25lbnRzL3RoZW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL3JlZHV4LWFjdGlvbnMvY3JlYXRlUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9yZWR1eC1hY3Rpb25zL21ha2VBY3Rpb25DcmVhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL3JlZHV4LWFjdGlvbnMvdG9GZXRjaENvbnN0LmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL3JlZHV4LWFjdGlvbnMvcGlwZVJlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL3JlZHV4LWFjdGlvbnMvY3JlYXRlSW1tdXRhYmxlUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9zZXJ2aWNlL3BpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvcmVkdXgtYWN0aW9ucy9mZXRjaFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvcmVkdXgtYWN0aW9ucy9mZXRjaFJlZHVjZXJLZXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvcmVkdXgtYWN0aW9ucy9mZXRjaEtleS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9yZWR1eC1hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9yb290LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9tYXJrZXQvUGFnZU1hcmtldC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvbWFya2V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2NvdXBvbnMvY29tcG9uZW50cy9NZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9jb3Vwb25zL2NvbXBvbmVudHMvQWN0aXZlQ291cG9ucy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvY291cG9ucy9jb21wb25lbnRzL1B1cmNoYXNlc0hpc3RvcnkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2NvdXBvbnMvY29tcG9uZW50cy9Vc2VkQ291cG9ucy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvY291cG9ucy9jb21wb25lbnRzL0V4cGlyZWRDb3Vwb25zLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9jb3Vwb25zL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvY291cG9ucy9QYWdlQ291cG9ucy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvY291cG9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9zdXBwbGllci9jb21wb25lbnRzL01lbnUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3N1cHBsaWVyL2NvbXBvbmVudHMvQmFsYW5jZVBhbmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9zdXBwbGllci9jb21wb25lbnRzL1JlZ2lzdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9zdXBwbGllci9jb21wb25lbnRzL01hbmFnZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3N1cHBsaWVyL2NvbXBvbmVudHMvUHVyY2hhc2VzQXBwcm92ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvc3VwcGxpZXIvY29tcG9uZW50cy9QdXJjaGFzZXNIaXN0b3J5LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9zdXBwbGllci9jb21wb25lbnRzL1dpdGhkcmF3RnVuZHMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3N1cHBsaWVyL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvc3VwcGxpZXIvUGFnZVN1cHBsaWVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9zdXBwbGllci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2NvdXBvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9zZXJ2aWNlL3dhdmVzSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvaW5pdFNhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanN4Iiwid2VicGFjazovLy9jcnlwdG8gKGlnbm9yZWQpPzBhMWIiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpPzA3YTYiLCJ3ZWJwYWNrOi8vL2J1ZmZlciAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL2J1ZmZlciAoaWdub3JlZCk/ODE0YyIsIndlYnBhY2s6Ly8vYnVmZmVyIChpZ25vcmVkKT8xYTE5Iiwid2VicGFjazovLy9idWZmZXIgKGlnbm9yZWQpP2Q5YWYiLCJ3ZWJwYWNrOi8vL2J1ZmZlciAoaWdub3JlZCk/MTE5OCIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCk/MDM4MyIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCk/MzEwMyIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpP2U2N2YiLCJ3ZWJwYWNrOi8vL2J1ZmZlciAoaWdub3JlZCk/ZTA2YSIsIndlYnBhY2s6Ly8vYnVmZmVyIChpZ25vcmVkKT83MjQ4Iiwid2VicGFjazovLy9jcnlwdG8gKGlnbm9yZWQpIiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKT81OTYzIl0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIiwiY29sb3JzIiwidGhlbWUiLCJncmF5IiwiU3RhciIsImFjdGl2ZSIsIkJveCIsInN0eWxlZCIsImRpdiIsImJveFNpemluZyIsInNwYWNlIiwid2lkdGgiLCJoZWlnaHQiLCJmb250U2l6ZSIsImNvbG9yIiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwiekluZGV4IiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiZmxleCIsImRpc3BsYXkiLCJmbGV4QmFzaXMiLCJtaW5XaWR0aCIsIm92ZXJmbG93IiwiZGlzcGxheU5hbWUiLCJGbGV4IiwiZmxleFdyYXAiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25TZWxmIiwib3JkZXIiLCJERUZBVUxUX0JBQ0tHUk9VTkQiLCJMaW5lTWVudSIsImF0dHJzIiwiYXMiLCJIYW1idXJnZXJTdHlsZWQiLCJpc0FjdGl2ZSIsImNzcyIsIkhhbWJ1cmdlciIsIm9uQ2xpY2siLCJiZyIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJnZXRDb2xvciIsImJsdWUiLCJmaWxsIiwibG9nb0NvbG9yIiwiaWNvbkNvbG9yIiwiTG9nb0ljb24iLCJUaXRsZSIsIkJvbGQiLCJiIiwiUG9pbnRlciIsIkxvZ28iLCJzaXplIiwiaWNvblNpemUiLCJNZW51SXRlbVN0eWxlZCIsImZvbnRXZWlnaHQiLCJNZW51SXRlbSIsImNoaWxkcmVuIiwiSGVhZGVyTGF5b3V0IiwiU2VhcmNoSWNvbiIsIlNob3BJY29uIiwiVXNlckljb24iLCJMb2NrSWNvbiIsIlVubG9ja0ljb24iLCJUcmlhbmdsZUljb24iLCJwcm9wcyIsIlJvdW5kTWFya0ljb24iLCJFbmciLCJlbmdsaXNoIiwiRW5nbGlzaCIsImxhbmd1Z2VTaG9ydE5hbWVzIiwiTGFuZ3VhZ2VTZWxlY3QiLCJsYW5ndWFnZSIsIkNvbXBvbmVudCIsIkljb25zIiwiQ2xvc2VJY29uIiwiTkZUSWNvbiIsIkFkZENvdXBvbkljb24iLCJkQXBwQWRkcmVzcyIsIm5mdFNjcmlwdCIsImRlZmF1bHROZXR3b3JrIiwiY29kZSIsIm1hdGNoZXIiLCJzZXJ2ZXIiLCJjaGFpbklkIiwibmV0d29ya0lkIiwiREFQUF9BRERSRVNTIiwiY29uZmlnIiwiZGF0YUxpc3RUb09iaiIsImxpc3QiLCJydiIsImkiLCJsZW5ndGgiLCJrZXkiLCJhc3luY0ZpbHRlciIsImFyciIsImZuIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsInJlc3VsdHMiLCJmaWx0ZXIiLCJfdiIsImluZGV4IiwiZ2V0RGF0YUJ5S2V5IiwidmFsIiwid2luZG93IiwiZEFwcERhdGEiLCJ0eXBlIiwicGFyc2VJbnQiLCJ2YWx1ZSIsIkJvb2xlYW4iLCJzaG9ydEFkZHJlc3MiLCJhZGRyIiwic3Vic3RyIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJvcHRpb24iLCJsb2NhbGVzIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiY29sb3JTdGF0dXMiLCJzdGF0dXMiLCJnZXRTdXBwbGllckRhdGEiLCJhZGRyZXNzIiwic3VwcGxpZXIiLCJKU09OIiwicGFyc2UiLCJlcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwibWVzc2FnZSIsImZvcm1hdE51bWJlciIsImFtdCIsImRlY2ltYWxzIiwiZGMiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibWF4aW11bVNpZ25pZmljYW50RGlnaXRzIiwiZm9ybWF0IiwiZ2V0Vm90aW5nIiwiaXRlbSIsInVzZXIiLCJ2b3RlUm91bmQiLCJpZCIsInZvdGVLZXkiLCJoYXNQdXJjaGFzZWQiLCJ2b3RpbmciLCJyb3VuZCIsImNvbW1pdCIsInJldmVhbCIsImNhbkNvbW1pdCIsImNhblJldmVhbCIsImdldFN1cHBsaWVySXRlbUlkcyIsImRhdGEiLCJpZHMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIm0iLCJtYXRjaCIsInB1c2giLCJnZXRTdXBwbGllclB1cmNoYXNlSWRzIiwiZ2V0VXNlclB1cmNoYXNlSWRzIiwiZ2V0SXRlbUlkcyIsInByZXBhcmVJdGVtcyIsImZuR2V0SWRzIiwiY291cG9uVGVybSIsInN0YXJ0c1dpdGgiLCJ0aXRsZSIsImNvdXBvblByaWNlIiwiaXNGZWF0dXJlZCIsImQiLCJEYXRlIiwieWUiLCJEYXRlVGltZUZvcm1hdCIsInllYXIiLCJtZSIsIm1vbnRoIiwiZGUiLCJkYXkiLCJleHBpcmF0aW9uRGF0ZSIsIml0ZW1EYXRhIiwiaW1hZ2UiLCJuZXdQcmljZSIsIm9sZFByaWNlIiwiZGlzY291bnQiLCJlIiwiaXNFeHBpcmVkIiwibm93IiwicHJlcGFyZVB1cmNoYXNlcyIsImVsIiwic3VwcGxpZXJEYXRhIiwiYXNzZXRJZCIsImlzRnVuZFBhaWQiLCJhbW91bnQiLCJ0aW1lc3RhbXAiLCJnZXRJdGVtQnlLZXkiLCJjb3Vwb25TdGF0dXMiLCJ1cmwiLCJmZXRjaCIsInIiLCJvayIsImpzb24iLCJib2R5IiwiaXNCdXJuZWQiLCJxdWFudGl0eSIsImlzT3duZWQiLCJmZXRjaEl0ZW1zIiwiYXBpRmV0Y2hJdGVtcyIsInJlcyIsImZldGNoVXNlclB1cmNoYXNlcyIsImJhbGFuY2UiLCJpc1VzZWQiLCJmZXRjaFVzZXJDb3Vwb25zIiwiZmV0Y2hVc2VyQWN0aXZlQ291cG9ucyIsImZldGNoVXNlclVzZWRDb3Vwb25zIiwiZmV0Y2hVc2VyRXhwaXJlZENvdXBvbnMiLCJmZXRjaFN1cHBsaWVySXRlbXMiLCJmZXRjaFN1cHBsaWVyUHVyY2hhc2VzIiwiaXNSZWNlaXZlZCIsImZldGNoU3VwcGxpZXJDb3Vwb25zIiwiZmV0Y2hTdXBwbGllckFjdGl2ZUNvdXBvbnMiLCJmZXRjaFN1cHBsaWVyUmVjZWl2ZWRDb3Vwb25zIiwiZmV0Y2hTdXBwbGllckF2YWlsYWJsZUNvdXBvbnMiLCJmZXRjaFN1cHBsaWVyQXZhaWxhYmxlRnVuZHMiLCJyZWR1Y2UiLCJhIiwiaXRlbXMiLCJnZXRQdXJjaGFzZUJ5S2V5IiwiZ2V0U3VwcGxpZXJCYWxhbmNlIiwiZ2V0U3VwcGxpZXJBdmFpbGFibGVCYWxhbmNlIiwiZ2V0U3VwcGxpZXJBcHByb3ZhbENvdW50ZXIiLCJoYXNoVm90ZSIsInZvdGUiLCJzYWx0IiwiYnl0ZXMiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsImJhc2U1OGVuY29kZSIsInNoYTI1NiIsIkRFRkFVTFRfQUNDT1VOVCIsImlzQ29ubmVjdGVkIiwiaXNTdXBwbGllciIsIkRFRkFVTFRfTkVUV09SSyIsIkRFRkFVTFRfU1RBVEUiLCJCQVNFX1VSSSIsIkNIQUlOX0lEIiwiTkVUV09SS19JRCIsImVlIiwiRXZlbnRFbWl0dGVyIiwiV2F2ZXNLZWVwZXIiLCJXS2VlIiwiUFVCTElDX1NUQVRFIiwiQUNDT1VOVCIsIk5FVFdPUksiLCJEQVRBIiwidmFsdWVzIiwic3RhdGUiLCJhY2NvdW50IiwibmV0d29yayIsImF1dGgiLCJ0eXBlcyIsImRBcHAiLCJiYXNlVXJpIiwibm9kZUludGVyYWN0aW9uIiwibm90aWZ5QWxlcnQiLCJhbGVydCIsImdldFNlc3Npb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0U2Vzc2lvbiIsInNlc3Npb24iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZGVsU2Vzc2lvbiIsInJlbW92ZUl0ZW0iLCJzdWJzY3JpYmUiLCJpbmNsdWRlcyIsIkVycm9yIiwib24iLCJvZmYiLCJzZXRWYWx1ZSIsImVtaXQiLCJjdXJyZW50TmV0d29yayIsImN1cnJlbnRBY2NvdW50IiwiZmV0Y2hEYXRhIiwiYWNjb3VudERhdGEiLCJkQXBwRGF0YUtleXMiLCJkZWJ1ZyIsImRpc2Nvbm5lY3QiLCJ1cGRhdGVTdGF0ZSIsIm9uU3RhdGVDaGFuZ2UiLCJ2ZXJzaW9uIiwiaW5pdGlhbGl6ZWQiLCJsb2NrZWQiLCJud2siLCJhY2N0IiwiYWNjb3VudERhdGFCeUtleSIsImFwcHJvdmFsQ291bnRlciIsIm9uQXBpTGlzdGVuZXIiLCJvZmZBcGlMaXN0ZW5lciIsInB1YmxpY1N0YXRlIiwiY29ubmVjdCIsImF1dGhEYXRhIiwiaW5mbyIsImluaXRpYWxQcm9taXNlIiwidGhlbiIsInRpbWVvdXQiLCJzaWduVHgiLCJ0eERhdGEiLCJzaWduVHJhbnNhY3Rpb24iLCJwdWJsaXNoVHgiLCJzaWduZWRUeCIsImJyb2FkY2FzdCIsInR4Iiwid2FpdEZvclR4IiwiYXBpQmFzZSIsInNpZ25BbmRQdWJsaXNoVHgiLCJjb3Vwb25EYXRhIiwibmFtZSIsImxvbmdUaXRsZSIsInJhdGluZyIsInJhdGluZ3MiLCJzaG9ydERlc2NyaXB0aW9uIiwibG9uZ0Rlc2NyaXB0aW9uIiwicHJpY2VUZXJtIiwiYWRkSXRlbSIsImNvdXBvbkV4cGlyZSIsImNhbGwiLCJhcmdzIiwicGF5bWVudCIsImZlZSIsInRva2VucyIsInVwZGF0ZUl0ZW0iLCJjb3Vwb24iLCJyZWdpc3RlclN1cHBsaWVyIiwicHVyY2hhc2VDb3Vwb24iLCJTdHJpbmciLCJOdW1iZXIiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInJlamVjdFB1cmNoYXNlIiwicHVyY2hhc2UiLCJzZW5kQ291cG9uVG9TdXBwbGllciIsInJlY2lwaWVudCIsImFjY2VwdFB1cmNoYXNlIiwic2V0U3RlcERvbmUiLCJ0eEdlbkFzc2V0RGF0YSIsImRlc2NyaXB0aW9uIiwicHJlY2lzaW9uIiwicmVpc3N1YWJsZSIsInNjcmlwdCIsInN0eDEiLCJ0eEFjY2VwdERhdGEiLCJzdHgyIiwidHhUcmFuc2ZlckRhdGEiLCJzdHgzIiwicmVzMyIsImJ1cm5Db3Vwb24iLCJ3aXRoZHJhd0Z1bmRzIiwiY29tbWl0Vm90ZSIsImhhc2giLCJ0b0xvd2VyQ2FzZSIsInJldmVhbFZvdGUiLCJCVExvZ2luIiwic2V0QWN0aXZlVXJsIiwibWVudUluZGVudCIsInhsIiwiRGVza3RvcEhlYWRlciIsImxpbmtzIiwiYWN0aXZlVXJsIiwidXNlckxpbmtzIiwidGFibGV0UmVzb2x1dGlvbiIsIm1vYmlsZVJlc29sdXRpb24iLCJjaGFuZ2VNb2JpbGVNZW51U3RhdGUiLCJtZW51T3BlbmVkIiwib25DcmVhdGVDb3Vwb24iLCJvbk1lbnVDbGljayIsInVzZUNhbGxiYWNrIiwic20iLCJsZyIsImlzRW5hYmxlZCIsImluZGV4T2YiLCJoZWFkZXJMaW5rcyIsImNvbXBhbnlMaW5rcyIsInN1cHBsaWVyTGlua3MiLCJteUxpbmtzIiwibWFpbkxpbmtzIiwiWUVBUiIsImdldEZ1bGxZZWFyIiwiTG9nb0NvcHlyaWdodCIsIkZhY2Vib29rIiwiTGlua2VkaW4iLCJUZWxlZ3JhbSIsIlR3aXR0ZXIiLCJXaGF0c0FwcCIsIlNvY2lhbEJ1dHRvbnMiLCJtZW51QW5pbWF0aW9uIiwiY2xhc3NOYW1lcyIsIkNvbnRhaW5lciIsInRleHRQcm9wcyIsImxpbmVIZWlnaHQiLCJHcm91cExpbmtzIiwibGlua1RpdGxlIiwiTW9iaWxlTWVudSIsIm9uQ2xvc2UiLCJ1c2VFZmZlY3QiLCJMSU5LUyIsIm92ZXJsYXlBbmltYXRpb24iLCJPdmVybGF5IiwibW9kYWxDb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGVDb250YWluZXIiLCJNb2RhbCIsIm9wZW4iLCJPdmwiLCJSZWFjdERPTSIsImNyZWF0ZVBvcnRhbCIsImVuaGFuY2VTdHlsZWRDb21wb25lbnQiLCJjb21wb3NlIiwibGV0dGVyU3BhY2luZyIsIlRleHQiLCJCYWRnZSIsInRleHQiLCJwIiwiTG9hZGluZyIsInN0YXJzIiwiUmF0aW5nIiwiY2VpbFZhbHVlIiwiTWF0aCIsImNlaWwiLCJpbmQiLCJQcmljZVN0eWxlZCIsIlByaWNlIiwiaXNPbGQiLCJ0ZXJtIiwidW5kZWZpbmVkIiwiRGlzY291bnRTdHlsZWQiLCJEaXNjb3VudCIsImlzRW1wdHkiLCJtZW1vaXplT25lIiwiQ291cG9uIiwiaXNNYW5hZ2VDb3Vwb25zIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJtZW1vIiwidXNlQXBwRGlhbG9ncyIsInVzZVN0YXRlIiwiZGlhbG9nT3BlbmVkIiwiY2hhbmdlRGlhbG9nU3RhdGUiLCJyZXN1bHRPcGVuZWQiLCJjaGFuZ2VSZXN1bHRTdGF0ZSIsInJlc3VsdEJ1eU9wZW5lZCIsImNoYW5nZVJlc3VsdEJ1eVN0YXRlIiwiZm9ybU9wZW5lZCIsImNoYW5nZUZvcm1TdGF0ZSIsInNlbGVjdGVkSXRlbSIsInNlbGVjdEl0ZW0iLCJlZGl0ZWRJdGVtIiwic2VsZWN0RWRpdGVkSXRlbSIsImVkaXRlZE9wdGlvbiIsInNlbGVjdEVkaXRlZE9wdGlvbiIsInJlc3VsdFRleHQiLCJzZXRSZXN1bHRUZXh0IiwidXNlTWVtbyIsIm9uRGlhbG9nT3BlbiIsIm9uRGlhbG9nQ2xvc2UiLCJvblJlc3VsdE9wZW4iLCJvblJlc3VsdENsb3NlIiwib25SZXN1bHRCdXlPcGVuIiwib25SZXN1bHRCdXlDbG9zZSIsIm9uRm9ybU9wZW4iLCJvbkZvcm1DbG9zZSIsImRpYWxvZyIsInJlc3VsdCIsInJlc3VsdEJ1eSIsImZvcm0iLCJ1c2VEaXNwYXRjaGVkQWN0aW9ucyIsImFjdGlvbnMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiZGlzcGF0Y2hlZEFjdGlvbnMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJ1c2VTdXBwbGllclJlZ2lzdGVyRGlhbG9ncyIsInJlc3VsdFNST3BlbmVkIiwiZm9ybVNST3BlbmVkIiwib25SZXN1bHRTUk9wZW4iLCJvblJlc3VsdFNSQ2xvc2UiLCJvbkZvcm1TUk9wZW5lZCIsIm9uRm9ybVNSQ2xvc2UiLCJyZXN1bHRTUiIsImZvcm1TUiIsIkJ1dHRvbiIsIkJvcmRlciIsIkZvb3RlciIsInB4IiwiU21hbGxMb2dvIiwiSW5wdXRTdHlsZWQiLCJJbnB1dCIsImNvbnRyb2wiLCJmb3J3YXJkUmVmIiwibWF4bGVuZ3RoIiwiQlRWb3RpbmciLCJvbkNvbW1pdFZvdGUiLCJvblJldmVhbFZvdGUiLCJidXR0b25DbGFzc05hbWUiLCJ0ZXh0Q2xhc3NOYW1lIiwibG9nIiwiRGlhbG9nIiwiYnV0dG9ucyIsIm9uRWRpdCIsIm9uQnV5Iiwib25SZW1vdmUiLCJvblVzZSIsIm9uQnVybiIsIm9uVm90ZSIsIm9uUmV2ZWFsIiwib25XaXRoZHJhdyIsIm9uQWNjZXB0Iiwib25SZWplY3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJSZXN1bHQiLCJjbGFzc05hbWUiLCJfX2h0bWwiLCJIRUlHSFRTIiwiRk9STV9QQVJBTUVURVIiLCJIZWlnaHRQcm9wcyIsImFjY3VtIiwiYnJlYWtwb2ludHMiLCJGb3JtIiwib25TdWJtaXQiLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJyZXF1aXJlZCIsIkZvcm1TdXBwbGllclJlZ2lzdGVyIiwiZW1haWwiLCJGb3JtVm90ZSIsIm1heEhlaWdodCIsIkVycm9yRGlhbG9nIiwiTW9kYWxMb2FkaW5nIiwiRm9ybVJldmVhbCIsInVzZUNvdXBvbkRpYWxvZ3MiLCJ2b3RlSXRlbSIsInZvdGVGb3JtT3BlbmVkIiwib25Wb3RlRm9ybU9wZW5lZCIsIm9uVm90ZUZvcm1DbG9zZSIsInJldmVhbEl0ZW0iLCJyZXZlYWxPcHRpb24iLCJyZXZlYWxGb3JtT3BlbmVkIiwib25SZXZlYWxGb3JtT3BlbmVkIiwib25SZXZlYWxGb3JtQ2xvc2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yUmVzdWx0Iiwic2V0RXJyb3JSZXN1bHQiLCJjYWxsQWN0aW9uIiwibG9hZFRleHQiLCJyZXNUZXh0Iiwib25TYXZlIiwib25Wb3RlQ29tbWl0Iiwib25Wb3RlUmV2ZWFsIiwiQ291cG9uRGlhbG9ncyIsIm1vZGUiLCJlbmFibGVWb3RpbmciLCJkaWFsb2dCdXR0b25zIiwic2hvd0l0ZW0iLCJDYXJkIiwiQ291cG9ucyIsImlzTWFuYWdlciIsImhpZGVFbXB0eUxpc3RNZXNzYWdlIiwibWQiLCJDb3Vwb25zTGlzdCIsInJlZkFkZHIiLCJyZWZOYW1lIiwic3RhdHVzQ29sb3IiLCJQdXJjaGFzZXMiLCJzdXBwbGllck5hbWUiLCJjb3Vwb25TdGF0dXNDb2xvciIsImJsYWNrIiwicmVkIiwiZ3JlZW4iLCJjcmVhdGVSZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwiaGFuZGxlcnMiLCJyZWR1Y2VyIiwiYWN0aW9uIiwiZmluZCIsIngiLCJtYWtlQWN0aW9uQ3JlYXRvciIsImFyZ05hbWVzIiwiXyIsImZldGNoQ29uc3QiLCJjb25zdGFudCIsIkNMRUFSIiwiRVJST1IiLCJSRVFVRVNUIiwiU1VDQ0VTUyIsInBpcGVSZWR1Y2VycyIsInJlZHVjZXJzIiwibmV4dCIsImNyZWF0ZUltbXV0YWJsZVJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnRTdGF0ZSIsInBpcGUiLCJmdW5jdGlvbnMiLCJuZXdWYWx1ZSIsImZ1bmMiLCJwaXBlRiIsImZldGNoUmVkdWNlciIsImZldGNoVHlwZSIsImluaXRpYWxWYWx1ZSIsImlzQXJyYXkiLCJpcyIsIkFycmF5IiwiYXNzb2NQYXRoIiwicmVzcG9uc2UiLCJjb25jYXQiLCJmZXRjaFJlZHVjZXJLZXkiLCJpc0ZldGNoaW5nIiwiZmV0Y2hLZXkiLCJmZXRjaFJlZHVjZXJGbiIsIm1vZGFsTWVudU9wZW4iLCJJTklUX0FQUCIsIkNIQU5HRV9NT0JJTEVfTUVOVV9TVEFURSIsImlzT3BlbiIsIm1lbnVIZWlnaHQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJyb290IiwiaW5pdEFjdGl2ZVVybCIsImhyZWYiLCJsb2NhdGlvbiIsInBvcyIsIkhlYWRlciIsIm9uU3VwcGxpZXJSZWdpc3RlciIsInN1cHBsaWVyQXBwcm92YWxDb3VudGVyIiwidXNlU2VsZWN0b3IiLCJyb290QWN0aW9ucyIsIm9uQ2xvc2VNZW51IiwiTGF5b3V0IiwiUGFnZU1hcmtldCIsImxvYWRpbmdEYXRhIiwic2V0TG9hZGluZ0RhdGEiLCJ1cGRhdGVJdGVtcyIsInJlZnJlc2hEYXRhIiwiTWVudSIsIlJlZ0V4cCIsIkFjIiwiUHVyY2hhc2VzSGlzdG9yeSIsImhpc3RvcnlMaXN0Iiwic29ydCIsIlVzZWRDb3Vwb25zIiwiRXhwaXJlZENvdXBvbnMiLCJQYWdlQ291cG9ucyIsIkJhbGFuY2VQYW5lbCIsInNldEFtb3VudCIsImF2YWlsYWJsZSIsInNldEF2YWlsYWJsZSIsInNldExvY2tlZCIsImF2bCIsImxjayIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbiIsInBhZGRpbmciLCJSZWdpc3RlciIsInNldFJlc3VsdE9wZW4iLCJzZXRGb3JtT3BlbiIsInNldFRpbWVvdXQiLCJNYW5hZ2VyIiwiUHVyY2hhc2VzQXBwcm92ZSIsImFwcHJvdmVMaXN0IiwicyIsIldpdGhkcmF3RnVuZHMiLCJhdmFpbGFibGVMaXN0IiwiUGFnZVN1cHBsaWVyIiwiQXBwIiwic2V0QWNjb3VudCIsIm9uQWNjb3VudENoYW5nZSIsImhvdCIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJub3ROaWwiLCJpc05pbCIsIm5vdCIsImNvbmZpZ3VyZVN0b3JlIiwicm91dGVyTWlkZGxld2FyZSIsInJvb3RSZWR1Y2VyIiwicm9vdFNhZ2EiLCJtaWRkbGV3YXJlcyIsIm1pZGRsZXdhcmVMaXN0IiwiYXBwZW5kIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJydW4iLCJjb21iaW5lUmVkdWNlcnMiLCJjb3Vwb25zIiwid2F2ZXNJbml0Iiwid2MiLCJzdHJpbmdUb1VpbnQ4QXJyYXkiLCJ3dCIsImludm9rZVNjcmlwdCIsImFwcCIsImluaXQiLCJpbml0U2FnYSIsImZvcmsiLCJ0YWtlTGF0ZXN0IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7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QUFRQTtBQUZ3QixHQUFELENBQXBCO0FBQUEsQ0FBZixFOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1JLFdBQUssR0FBR1AsU0FBYyxFQUE1QjtBQUVBcmtCLE1BQU0sQ0FBQ3dsQixHQUFQLEdBQWE1Yix5QkFBYjtBQUVBMkosbUJBQVEsQ0FBQ3NTLE1BQVQsZUFDSSw4QkFBQyxzQkFBRDtBQUFVLE9BQUssRUFBRWpCLFdBQUtBO0FBQXRCLGdCQUNJLDhCQUFDLHNEQUFEO0FBQWUsT0FBSyxFQUFFMXJCLHVCQUFLQTtBQUEzQixnQkFDSSwyRUFDSSw4QkFBQyxXQUFELE9BREosZUFFSSw4QkFBQyxPQUFELE9BRkosQ0FESixDQURKLENBREosRUFTSStaLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQVRKLEU7Ozs7Ozs7QUNmQSxlOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7OztBQ0FBLGU7Ozs7Ozs7QUNBQSxlOzs7Ozs7O0FDQUEsZTs7Ozs7OztBQ0FBLGU7Ozs7Ozs7QUNBQSxlOzs7Ozs7O0FDQUEsZTs7Ozs7OztBQ0FBLGU7Ozs7Ozs7QUNBQSxlOzs7Ozs7O0FDQUEsZTs7Ozs7OztBQ0FBLGU7Ozs7Ozs7QUNBQSxlOzs7Ozs7O0FDQUEsZTs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoiYnVpbGQvanMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMSwxXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHbG9iYWxTdHlsZWBcblxuICAgYm9keSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZTogeyBjb2xvcnMgfSB9KSA9PiBjb2xvcnMuZ3JheVsxXX07XG4gICB9XG5cbiAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIGJvcmRlcjogMHB4O1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgaW5wdXQsIGJ1dHRvbiB7XG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBmb250OiBpbmhlcml0O1xuICAgIH1cbiAgICB0ZXh0YXJlYSB7XG4gICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICB9XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU3RhciA9ICh7IGFjdGl2ZSB9KSA9PiAoXG4gICAgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTVcIiB2aWV3Qm94PVwiMCAwIDE2IDE1XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgICBpZD1cIlN0YXJcIlxuICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICBkPVwiTTggMTJMMy4yOTc3MiAxNC40NzIxTDQuMTk1NzcgOS4yMzYwN0wwLjM5MTU0OCA1LjUyNzg2TDUuNjQ4ODYgNC43NjM5M0w4IDBMMTAuMzUxMSA0Ljc2MzkzTDE1LjYwODUgNS41Mjc4NkwxMS44MDQyIDkuMjM2MDdMMTIuNzAyMyAxNC40NzIxTDggMTJaXCJcbiAgICAgICAgICAgIGZpbGw9e2FjdGl2ZSA/ICcjRkZDMzAwJyA6ICcjOUZBMEEyJ31cbiAgICAgICAgLz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXI7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHtcbiAgICBiYWNrZ3JvdW5kLFxuICAgIGNvbG9yLFxuICAgIGRpc3BsYXksXG4gICAgZm9udFNpemUsXG4gICAgaGVpZ2h0LFxuICAgIHNwYWNlLFxuICAgIHdpZHRoLFxuICAgIHBvc2l0aW9uLFxuICAgIHpJbmRleCxcbiAgICB0b3AsXG4gICAgbGVmdCxcbiAgICByaWdodCxcbiAgICBib3R0b20sXG4gICAgZmxleCxcbiAgICBmbGV4QmFzaXMsXG4gICAgbWluV2lkdGgsXG4gICAgb3ZlcmZsb3csXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nXG5cbmNvbnN0IEJveCA9IHN0eWxlZC5kaXYoXG4gICAge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICB9LFxuICAgIHNwYWNlLFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBmb250U2l6ZSxcbiAgICBjb2xvcixcbiAgICBiYWNrZ3JvdW5kLFxuICAgIHBvc2l0aW9uLFxuICAgIHpJbmRleCxcbiAgICB0b3AsXG4gICAgbGVmdCxcbiAgICByaWdodCxcbiAgICBib3R0b20sXG4gICAgZmxleCxcbiAgICBkaXNwbGF5LFxuICAgIGZsZXhCYXNpcyxcbiAgICBtaW5XaWR0aCxcbiAgICBvdmVyZmxvdyxcbilcblxuQm94LmRpc3BsYXlOYW1lID0gJ0JveCdcblxuZXhwb3J0IGRlZmF1bHQgQm94XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHtcbiAgICBmbGV4V3JhcCxcbiAgICBmbGV4RGlyZWN0aW9uLFxuICAgIGFsaWduSXRlbXMsXG4gICAganVzdGlmeUNvbnRlbnQsXG4gICAgYWxpZ25TZWxmLFxuICAgIGZsZXgsXG4gICAgb3JkZXIsXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nXG5cbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3gnXG5cbmNvbnN0IEZsZXggPSBzdHlsZWQoQm94KShcbiAgICB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB9LFxuICAgIGZsZXhXcmFwLFxuICAgIGZsZXhEaXJlY3Rpb24sXG4gICAgYWxpZ25JdGVtcyxcbiAgICBqdXN0aWZ5Q29udGVudCxcbiAgICBhbGlnblNlbGYsXG4gICAgZmxleCxcbiAgICBvcmRlcixcbilcblxuRmxleC5kaXNwbGF5TmFtZSA9ICdGbGV4J1xuXG5leHBvcnQgZGVmYXVsdCBGbGV4XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEJveCwgRmxleCB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmNvbnN0IERFRkFVTFRfQkFDS0dST1VORCA9ICcjMDAwJztcblxuY29uc3QgTGluZU1lbnUgPSBzdHlsZWQoQm94KS5hdHRycyh7XG4gICAgYXM6ICdzcGFuJyxcbn0pYFxuICAgIGhlaWdodDogMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMzUwbXM7XG5gO1xuXG5jb25zdCBIYW1idXJnZXJTdHlsZWQgPSBzdHlsZWQoQm94KS5hdHRycyh7XG4gICAgYXM6ICdidXR0b24nLFxufSlgXG4gICAgei1pbmRleDogMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICR7KHsgaXNBY3RpdmUgfSkgPT5cbiAgICAgICAgaXNBY3RpdmVcbiAgICAgICAgJiYgY3NzYFxuICAgICAgICAgICAgJHtMaW5lTWVudX0ge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCxcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9O1xuYDtcblxuY29uc3QgSGFtYnVyZ2VyID0gKHtcbiAgICBvbkNsaWNrLCBiZywgaXNBY3RpdmUsIC4uLnJlc3Rcbn0pID0+IChcbiAgICA8SGFtYnVyZ2VyU3R5bGVkIG9uQ2xpY2s9e29uQ2xpY2t9IGlzQWN0aXZlPXtpc0FjdGl2ZX0gey4uLnJlc3R9PlxuICAgICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8TGluZU1lbnUgdG9wPVwiMHB4XCIgd2lkdGg9XCIxNXB4XCIgYmc9e2JnfSAvPlxuICAgICAgICAgICAgPExpbmVNZW51IHRvcD1cIjhweFwiIHdpZHRoPVwiMjdweFwiIGJnPXtiZ30gLz5cbiAgICAgICAgICAgIDxMaW5lTWVudSB0b3A9XCIxNnB4XCIgd2lkdGg9XCIzOHB4XCIgYmc9e2JnfSAvPlxuICAgICAgICA8L0ZsZXg+XG4gICAgPC9IYW1idXJnZXJTdHlsZWQ+XG4pO1xuXG5IYW1idXJnZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIGJnOiBERUZBVUxUX0JBQ0tHUk9VTkQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIYW1idXJnZXI7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IGdldENvbG9yID0gKGlzQWN0aXZlLCBjb2xvcnMpID0+IChpc0FjdGl2ZSA/IGNvbG9ycy5ibHVlWzBdIDogY29sb3JzLmdyYXlbMl0pO1xuXG5jb25zdCBmaWxsID0gY3NzYFxuICAgICR7KHsgaXNBY3RpdmUsIHRoZW1lOiB7IGNvbG9ycyB9IH0pID0+IGNzc2BcbiAgICAgICAgZmlsbDogJHtnZXRDb2xvcihpc0FjdGl2ZSwgY29sb3JzKX07XG4gICAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2dvQ29sb3IgPSBjc3NgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHJlY3Qge1xuICAgICAgICAke2ZpbGx9O1xuICAgIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBpY29uQ29sb3IgPSBjc3NgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhdGgge1xuICAgICAgICAke2ZpbGx9O1xuICAgIH1cbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IGxvZ29Db2xvciB9IGZyb20gJy4vaWNvbkNvbG9yJztcblxuY29uc3QgTG9nb0ljb24gPSAoeyBpc0FjdGl2ZSwgLi4ucmVzdCB9KSA9PiAoXG4gICAgPHN2Z1xuICAgICAgICB3aWR0aD1cIjQ4XCJcbiAgICAgICAgaGVpZ2h0PVwiNDhcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAgICA8ZyBpZD1cIkxvZ29fY291cG9uXCI+XG4gICAgICAgICAgICA8cmVjdCBpZD1cIlJlY3RhbmdsZVwiIHdpZHRoPVwiNDhcIiBoZWlnaHQ9XCI0OFwiIHJ4PVwiMTJcIiBmaWxsPVwiIzJFQjRGRlwiIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGlkPVwiQ29tYmluZWQgU2hhcGVcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTM5LjQxNzcgMjIuOTY4OEMzOS4yMTMyIDIzLjM0NDUgMzguOTYyNCAyMy42ODkxIDM4LjY3MTcgMjMuOTkzNEMzOC45NjI0IDI0LjI5NzkgMzkuMjEzNyAyNC42NDI0IDM5LjQxNzcgMjUuMDE4QzQwLjAzMSAyNi4xNDg0IDQwLjE2NTMgMjcuNDU3IDM5Ljc5NDYgMjguNzAxNkMzOS40Njk0IDI5Ljc5MzkgMzkuMDI2MiAzMC44NTk4IDM4LjQ3NjggMzEuODcwOUMzNy42NTI4IDMzLjM4MjQgMzYuMDg3NyAzNC4zMzE2IDM0LjM3NTMgMzQuMzY1MkMzNC4zNjE2IDM0Ljk3ODUgMzQuMjI5IDM1LjU5MDYgMzMuOTgxOSAzNi4xNjEzQzMzLjU1ODEgMzcuMTQwNCAzMi44MTMgMzcuOTU4MiAzMS44ODMzIDM4LjQ2MzlDMzAuODcxNyAzOS4wMTQxIDI5LjgwNTggMzkuNDU3MiAyOC43MTQyIDM5Ljc4MjRDMjguMjU3MiAzOS45MTgyIDI3Ljc4ODIgMzkuOTg2NyAyNy4zMTk0IDM5Ljk4NjdDMjYuMDgwMiAzOS45ODY3IDI0Ljg5ODUgMzkuNTAxMiAyNC4wMTk5IDM4LjY2ODRDMjMuODgwMSAzOC44MDM5IDIzLjczMTMgMzguOTMxNiAyMy41NzM2IDM5LjA0OThDMjIuNzU0OSAzOS42NjIzIDIxLjc0MTkgNDAgMjAuNzIwOCA0MEMyMC4yNzI2IDQwIDE5LjgyNTUgMzkuOTM2MyAxOS4zOTI4IDM5LjgxMTNDMTguMjIgMzkuNDY5MSAxNy4wODM2IDM4Ljk5NDUgMTYuMDEyNSAzOC40MDA4QzE0LjcyNzEgMzcuNjg2MyAxMy44MzggMzYuMzkyMiAxMy42MzM3IDM0LjkzODVDMTMuNjA3MyAzNC43NTAyIDEzLjU5MjkgMzQuNTYyNyAxMy41ODkzIDM0LjM3NTJDMTMuNDA3OSAzNC4zNzA5IDEzLjIyNzIgMzQuMzU1OSAxMy4wNTA1IDM0LjMzMDNDMTEuNTc2OCAzNC4xMTg5IDEwLjI2ODkgMzMuMjEyOSA5LjU1MzQ5IDMxLjkwNjRDOC45ODAyMyAzMC44NTkyIDguNTIwODQgMjkuNzQ5NiA4LjE4NzQzIDI4LjYwNzJDNy43NzE3OSAyNy4xNzY4IDguMDU2OTYgMjUuNjE0MSA4Ljk0ODE5IDI0LjQyNTZDOS4wNjI4NSAyNC4yNzMgOS4xODUzMSAyNC4xMjkxIDkuMzE1OTggMjMuOTkzQzkuMTg2MDkgMjMuODU3NiA5LjA2NDAyIDIzLjcxMzkgOC45NTAxNSAyMy41NjI3QzguMDU3MzUgMjIuMzczIDcuNzcyMzggMjAuODEwMiA4LjE4ODIxIDE5LjM4MTNDOC41MjMxOCAxOC4yMzM2IDguOTgxNCAxNy4xMjQgOS41NTE3MyAxNi4wODIyQzEwLjI2ODkgMTQuNzc1MiAxMS41NzYgMTMuODY4IDEzLjA0OTcgMTMuNjU2MUMxMy4yNDY4IDEzLjYyODUgMTMuNDQyMyAxMy42MTI5IDEzLjYzNDkgMTMuNjEwNEMxMy42NTA1IDEzLjAwMDggMTMuNzgzMSAxMi4zOTI2IDE0LjAyODggMTEuODI1QzE0LjQ1MjcgMTAuODQ2NSAxNS4xOTcyIDEwLjAyODkgMTYuMTI2OSA5LjUyMzA1QzE3LjEzODUgOC45NzI4NSAxOC4yMDQzIDguNTI5NDkgMTkuMjk2IDguMjA0M0MxOS43NTMgOC4wNjg3NSAyMC4yMjIgOCAyMC42OTA3IDhDMjEuOTM3NiA4IDIzLjEyNDggOC40OTE0MSAyNC4wMDUxIDkuMzMyMjNDMjQuODg1NiA4LjQ5MTQxIDI2LjA3MjUgOCAyNy4zMTk0IDhDMjcuNzg4MiA4IDI4LjI1NzIgOC4wNjg3NSAyOC43MTM0IDguMjA0M0MyOS44MDU4IDguNTI5NDkgMzAuODcxNyA4Ljk3Mjg1IDMxLjg4MjUgOS41MjIyN0MzMi44MTMgMTAuMDI4OSAzMy41NTgxIDEwLjg0NjUgMzMuOTgxOSAxMS44MjU0QzM0LjIyOSAxMi4zOTYzIDM0LjM2MTYgMTMuMDA4MiAzNC4zNzUzIDEzLjYyMTVDMzYuMDg3NyAxMy42NTU1IDM3LjY1MjggMTQuNjA0NSAzOC40NzYgMTYuMTE1QzM5LjAyNjIgMTcuMTI3IDM5LjQ2OTQgMTguMTkzIDM5Ljc5NDYgMTkuMjg0OEM0MC4xNjUzIDIwLjUzMDEgNDAuMDMxIDIxLjgzODMgMzkuNDE3NyAyMi45Njg4Wk0zNCAyNEMzNCAyOS41MjI4IDI5LjUyMjggMzQgMjQgMzRDMTguNDc3MiAzNCAxNCAyOS41MjI4IDE0IDI0QzE0IDE4LjQ3NzIgMTguNDc3MiAxNCAyNCAxNEMyOS41MjI4IDE0IDM0IDE4LjQ3NzIgMzQgMjRaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxnIGlkPVwiX3gyM18wMDAwMDBmZiBjb3B5IDJcIj5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBpZD1cIlBhdGhcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTIzLjYwNTMgMTkuMTU1NkMyMy45MDg3IDE4Ljg4NSAyNC40NDE0IDE4Ljk3NTggMjQuNjEzMiAxOS4zNjE5QzI0Ljk2MiAyMC4yNjIgMjUuMzA0NiAyMS4xNjUyIDI1LjY1MTMgMjIuMDY2QzI1LjY1NzMgMjIuMDk2NCAyNS42ODQ3IDIyLjEwNyAyNS43MTE4IDIyLjEwN0MyNi41NzkyIDIyLjE2ODggMjcuNDQ2MSAyMi4yNDIzIDI4LjMxMzYgMjIuMzA3QzI4LjU2MjIgMjIuMzEyNSAyOC44MDkxIDIyLjQ1NTIgMjguOTIxNiAyMi42OTA2QzI5LjA2MDggMjIuOTU1IDI5LjAxNCAyMy4zMjE2IDI4Ljc4NjIgMjMuNTE3MkMyOC4wODY3IDI0LjExNjQgMjcuMzkzNSAyNC43MjM2IDI2LjY5NTcgMjUuMzI0N0MyNi42NzYyIDI1LjM0MiAyNi42NTY5IDI1LjM1OTkgMjYuNjQzNiAyNS4zODI4QzI2Ljg0MDkgMjYuMjc2NiAyNy4wNjE1IDI3LjE2NjMgMjcuMjY4IDI4LjA1ODRDMjcuNDI0MiAyOC41MDU4IDI3LjA1OCAyOS4wMzM1IDI2LjU5NzkgMjguOTk4M0MyNi40MzkxIDI4Ljk5NjMgMjYuMzAwNiAyOC45MDYyIDI2LjE3NDEgMjguODE1OEMyNS40OTAxIDI4LjM2NTYgMjQuODA1NiAyNy45MTUyIDI0LjEyMDkgMjcuNDY1NUMyNC4wNjI1IDI3LjQyODMgMjQuMDA3NSAyNy4zODE3IDIzLjk0MTkgMjcuMzU5N0MyMy4xNjU3IDI3Ljg0NjQgMjIuNDAxNSAyOC4zNTU0IDIxLjYyNzQgMjguODQ2M0MyMS40MTQ2IDI4Ljk3ODggMjEuMTMxOSAyOC45NzY1IDIwLjkyMjggMjguODM3QzIwLjcwMjMgMjguNzAwNCAyMC41NjY5IDI4LjQxODQgMjAuNjE4NiAyOC4xNTI2QzIwLjg0MTcgMjcuMTk5MiAyMS4wOTI2IDI2LjI0OTMgMjEuMzA1NiAyNS4yOTRDMjAuNjc2NyAyNC43MzAxIDIwLjAzODMgMjQuMTc3OCAxOS40MDYzIDIzLjYxNzdDMTkuMjYzNCAyMy40OTY4IDE5LjEwOCAyMy4zNzA1IDE5LjA0NiAyMy4xODI0QzE4Ljg5NDEgMjIuODA0MiAxOS4xMzQyIDIyLjMxMTYgMTkuNTMyIDIyLjI1MjZDMjAuNDc4MyAyMi4xNjkzIDIxLjQzMTIgMjIuMTM0MyAyMi4zNzUyIDIyLjA0MzhDMjIuNzAxNyAyMS4yMzEyIDIzLjAxNTggMjAuNDEyIDIzLjMzODcgMTkuNTk2OEMyMy4zOTg5IDE5LjQzMzcgMjMuNDY4MSAxOS4yNjQ1IDIzLjYwNTMgMTkuMTU1NlpcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChMb2dvSWNvbilgXG4gICAgJHtsb2dvQ29sb3J9XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgTG9nb0ljb24gZnJvbSAnLi9Mb2dvSWNvbic7XG5cbmltcG9ydCB7IEJveCwgRmxleCB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkKEJveCkuYXR0cnMoe1xuICAgIGFzOiAnc3BhbicsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbn0pYFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5gO1xuXG5UaXRsZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY29sb3I6ICdibHVlLjAnLFxuICAgIGZvbnRTaXplOiAnMjJweCcsXG59O1xuXG5jb25zdCBCb2xkID0gc3R5bGVkLmJgXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbmA7XG5cbmNvbnN0IFBvaW50ZXIgPSBzdHlsZWQuZGl2YFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IExvZ28gPSAoeyBpc0FjdGl2ZSwgc2l6ZSwgLi4ucmVzdCB9KSA9PiB7XG4gICAgY29uc3QgaWNvblNpemUgPSBzaXplID09PSAnc21hbGwnID8gJzMzJyA6ICc0OCc7XG4gICAgY29uc3QgZm9udFNpemUgPSBzaXplID09PSAnc21hbGwnID8gJzE2cHgnIDogJzIycHgnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZsZXggey4uLnJlc3R9IGFzPXtQb2ludGVyfT5cbiAgICAgICAgICAgIDxMb2dvSWNvbiBpc0FjdGl2ZT17aXNBY3RpdmV9IHdpZHRoPXtpY29uU2l6ZX0gaGVpZ2h0PXtpY29uU2l6ZX0gLz5cbiAgICAgICAgICAgIDxCb3ggcGw9XCI5cHhcIj5cbiAgICAgICAgICAgICAgICA8VGl0bGUgY29sb3I9e2lzQWN0aXZlID8gJ2JsdWUuMCcgOiAnZ3JheS4yJ30gZm9udFNpemU9e2ZvbnRTaXplfT5cbiAgICAgICAgICAgICAgICAgICAgPEJvbGQ+Q291cG9uPC9Cb2xkPlxuICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICBCYXphYXJcbiAgICAgICAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgICAgICAgIDxUaXRsZSBjb2xvcj17aXNBY3RpdmUgPyAnYmx1ZS4wJyA6ICdncmF5LjInfSBmb250U2l6ZT17Zm9udFNpemV9PlxuICAgICAgICAgICAgICAgICAgICBNYXJrZXRcbiAgICAgICAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvRmxleD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nbztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBmb250V2VpZ2h0IH0gZnJvbSAnc3R5bGVkLXN5c3RlbSdcblxuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vc2hhcmVkJ1xuXG5jb25zdCBNZW51SXRlbVN0eWxlZCA9IHN0eWxlZChCb3gpLmF0dHJzKCh7IGFjdGl2ZSwgY29sb3IgfSkgPT4gKHtcbiAgICBhczogJ3NwYW4nLFxuICAgIGNvbG9yOiBhY3RpdmUgPyAnYmx1ZS4wJyA6IGNvbG9yIHx8ICdncmF5LjInLFxufSkpYFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjY1NjI1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogJHsoeyB0aGVtZTogeyBjb2xvcnMgfSB9KSA9PiBjb2xvcnMuYmx1ZVswXX07XG4gICAgfVxuICAgICR7Zm9udFdlaWdodH1cbmBcblxuY29uc3QgTWVudUl0ZW0gPSAoe1xuICAgIGNoaWxkcmVuLCBhY3RpdmUsIG9uQ2xpY2ssIC4uLnJlc3Rcbn0pID0+IChcbiAgICA8TWVudUl0ZW1TdHlsZWQgYWN0aXZlPXthY3RpdmV9IG9uQ2xpY2s9e29uQ2xpY2t9IHsuLi5yZXN0fT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgIDwvTWVudUl0ZW1TdHlsZWQ+XG4pXG5cbk1lbnVJdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBmb250V2VpZ2h0OiAnNTAwJyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudUl0ZW1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL3NoYXJlZCdcblxuY29uc3QgSGVhZGVyTGF5b3V0ID0gc3R5bGVkKEJveCkuYXR0cnMoe1xuICAgIGJnOiAnZ3JheS4wJyxcbn0pYFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTBweCAjZWRlZWYwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG5gXG5cbkhlYWRlckxheW91dC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlckxheW91dFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0IHsgaWNvbkNvbG9yIH0gZnJvbSAnLi9pY29uQ29sb3InXG5cbmNvbnN0IFNlYXJjaEljb24gPSAoeyBpc0FjdGl2ZSwgLi4ucmVzdCB9KSA9PiAoXG4gICAgPHN2Z1xuICAgICAgICB3aWR0aD1cIjE4XCJcbiAgICAgICAgaGVpZ2h0PVwiMThcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDU0IDU0XCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAgICA8ZyBpZD1cInNlYXJjaF9pY29uXCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGlkPVwiU2hhcGVcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTQwLjQwNzIgMzguMTIzM0w1My41MzI5IDUxLjI0NjFDNTQuMTU1NyA1MS44Njg3IDU0LjE1NTcgNTIuODk4NCA1My41MzI5IDUzLjUyMTFDNTMuMjIxNiA1My44NDQzIDUyLjgwMjQgNTQgNTIuMzk1MiA1NEM1MS45ODggNTQgNTEuNTY4OSA1My44MzI0IDUxLjI1NzUgNTMuNTIxMUwzOC4xMzE3IDQwLjM5ODJDMzQuMDgzOCA0My45MTg0IDI4LjgwMjQgNDYuMDQ5NyAyMy4wMjk5IDQ2LjA0OTdDMTAuMzM1MyA0Ni4wNDk3IDAgMzUuNzE2NiAwIDIzLjAyNDhDMCAxMC4zMzMgMTAuMzIzNCAwIDIzLjAyOTkgMEMzNS43MjQ2IDAgNDYuMDU5OSAxMC4zMjExIDQ2LjA1OTkgMjMuMDI0OEM0Ni4wNTk5IDI4Ljc5NiA0My45MjgxIDM0LjA3NjMgNDAuNDA3MiAzOC4xMjMzWk0yMy4wMTggMy4yMzI4MkMxMi4xMDc4IDMuMjMyODIgMy4yMjE1NiAxMi4xMDUxIDMuMjIxNTYgMjMuMDI0OEMzLjIyMTU2IDMzLjk0NDYgMTIuMTA3OCA0Mi44Mjg4IDIzLjAxOCA0Mi44Mjg4QzMzLjk0MDEgNDIuODI4OCA0Mi44MTQ0IDMzLjkzMjYgNDIuODE0NCAyMy4wMjQ4QzQyLjgxNDQgMTIuMTE3MSAzMy45NDAxIDMuMjMyODIgMjMuMDE4IDMuMjMyODJaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzJFQjRGRlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgPC9zdmc+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChTZWFyY2hJY29uKWBcbiAgICAke2ljb25Db2xvcn1cbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCB7IGljb25Db2xvciB9IGZyb20gJy4vaWNvbkNvbG9yJ1xuXG5jb25zdCBTaG9wSWNvbiA9ICh7IGlzQWN0aXZlLCAuLi5yZXN0IH0pID0+IChcbiAgICA8c3ZnXG4gICAgICAgIHdpZHRoPVwiMjJcIlxuICAgICAgICBoZWlnaHQ9XCIxOFwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjIgMThcIlxuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICAgIDxnIGlkPVwic2hvcHBpbmctYmFza2V0LWJ1dHRvblwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBpZD1cIlNoYXBlXCJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0xNi4zNDg2IDYuOTEwOTlMMTEuOTA4MyAwLjM5NDkxNEMxMS43MDY0IDAuMTk3NDU3IDExLjQwMzcgMCAxMS4xMDA5IDBDMTAuNzk4MiAwIDEwLjQ5NTQgMC4wOTg3Mjg1IDEwLjI5MzYgMC4zOTQ5MTRMNS44NTMyMSA2LjkxMDk5SDEuMDA5MTdDMC40MDM2NyA2LjkxMDk5IDAgNy4zMDU5MSAwIDcuODk4MjhWOC4xOTQ0N0wyLjUyMjk0IDE3LjM3NjJDMi43MjQ3NyAxOC4xNjYgMy41MzIxMSAxOC44NTcxIDQuNDQwMzcgMTguODU3MUgxNy41NTk2QzE4LjQ2NzkgMTguODU3MSAxOS4yNzUyIDE4LjI2NDggMTkuNDc3MSAxNy4zNzYyTDIyIDguMTk0NDdWNy44OTgyOEMyMiA3LjMwNTkxIDIxLjU5NjMgNi45MTA5OSAyMC45OTA4IDYuOTEwOTlIMTYuMzQ4NlpNOC4wNzMzOSA2LjkxMDk5TDExLjEwMDkgMi41NjY5NEwxNC4xMjg0IDYuOTEwOTlIOC4wNzMzOVpNOS4wODI1NyAxMi44MzQ3QzkuMDgyNTcgMTMuOTIwNyA5Ljk5MDgzIDE0LjgwOTMgMTEuMTAwOSAxNC44MDkzQzEyLjIxMSAxNC44MDkzIDEzLjExOTMgMTMuOTIwNyAxMy4xMTkzIDEyLjgzNDdDMTMuMTE5MyAxMS43NDg3IDEyLjIxMSAxMC44NjAxIDExLjEwMDkgMTAuODYwMUM5Ljk5MDgzIDEwLjg2MDEgOS4wODI1NyAxMS43NDg3IDkuMDgyNTcgMTIuODM0N1pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMkVCNEZGXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbilcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKFNob3BJY29uKWBcbiAgICAke2ljb25Db2xvcn1cbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCB7IGljb25Db2xvciB9IGZyb20gJy4vaWNvbkNvbG9yJ1xuXG5jb25zdCBVc2VySWNvbiA9ICh7IGlzQWN0aXZlLCAuLi5yZXN0IH0pID0+IChcbiAgICA8c3ZnXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICB3aWR0aD1cIjI0XCJcbiAgICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1wZXJzb24tZmlsbFwiXG4gICAgICAgIHsuLi5yZXN0fVxuICAgID5cbiAgICAgICAgPHBhdGggZD1cIk0zIDE0cy0xIDAtMS0xIDEtNCA2LTQgNiAzIDYgNC0xIDEtMSAxSDN6bTUtNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6XCIgLz5cbiAgICA8L3N2Zz5cbilcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKFVzZXJJY29uKWBcbiAgICAke2ljb25Db2xvcn1cbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCB7IGljb25Db2xvciB9IGZyb20gJy4vaWNvbkNvbG9yJ1xuXG5jb25zdCBMb2NrSWNvbiA9ICh7IGlzQWN0aXZlLCAuLi5yZXN0IH0pID0+IChcbiAgICA8c3ZnXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICB3aWR0aD1cIjI0XCJcbiAgICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1sb2NrLWZpbGxcIlxuICAgICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICAgIDxwYXRoIGQ9XCJNOCAxYTIgMiAwIDAgMSAyIDJ2NEg2VjNhMiAyIDAgMCAxIDItMnptMyA2VjNhMyAzIDAgMCAwLTYgMHY0YTIgMiAwIDAgMC0yIDJ2NWEyIDIgMCAwIDAgMiAyaDZhMiAyIDAgMCAwIDItMlY5YTIgMiAwIDAgMC0yLTJ6XCIgLz5cbiAgICA8L3N2Zz5cbilcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKExvY2tJY29uKWBcbiAgICAke2ljb25Db2xvcn1cbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCB7IGljb25Db2xvciB9IGZyb20gJy4vaWNvbkNvbG9yJ1xuXG5jb25zdCBVbmxvY2tJY29uID0gKHsgaXNBY3RpdmUsIC4uLnJlc3QgfSkgPT4gKFxuICAgIDxzdmdcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLXVubG9jay1maWxsXCJcbiAgICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAgICA8cGF0aCBkPVwiTTExIDFhMiAyIDAgMCAwLTIgMnY0YTIgMiAwIDAgMSAyIDJ2NWEyIDIgMCAwIDEtMiAySDNhMiAyIDAgMCAxLTItMlY5YTIgMiAwIDAgMSAyLTJoNVYzYTMgMyAwIDAgMSA2IDB2NGEuNS41IDAgMCAxLTEgMFYzYTIgMiAwIDAgMC0yLTJ6XCIgLz5cbiAgICA8L3N2Zz5cbilcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKFVubG9ja0ljb24pYFxuICAgICR7aWNvbkNvbG9yfVxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVHJpYW5nbGVJY29uID0gcHJvcHMgPT4gKFxuICAgIDxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjhcIiB2aWV3Qm94PVwiMCAwIDEyIDhcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB7Li4ucHJvcHN9PlxuICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTYgOEwwIDBMMTIgMEw2IDhaXCIgZmlsbD1cIiMyRUI0RkZcIiAvPlxuICAgIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVHJpYW5nbGVJY29uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBSb3VuZE1hcmtJY29uID0gcHJvcHMgPT4gKFxuICAgIDxzdmdcbiAgICAgICAgd2lkdGg9XCIxOFwiXG4gICAgICAgIGhlaWdodD1cIjE4XCJcbiAgICAgICAgdmlld0JveD1cIjAgMCAxOCAxOFwiXG4gICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIGQ9XCJNOSAxOEMxMy45NzA2IDE4IDE4IDEzLjk3MDYgMTggOUMxOCA0LjAyOTQ0IDEzLjk3MDYgMCA5IDBDNC4wMjk0NCAwIDAgNC4wMjk0NCAwIDlDMCAxMy45NzA2IDQuMDI5NDQgMTggOSAxOFpcIlxuICAgICAgICAgICAgZmlsbD1cIiM1MEUzQzJcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aCBkPVwiTTUgOS41NzIyOEw3Ljk4Mjg4IDEyLjYwNjlMMTIuODIzNyA2XCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjJcIiAvPlxuICAgIDwvc3ZnPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBSb3VuZE1hcmtJY29uXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBFbmcgPSBwcm9wcyA9PiAoXG4gICAgPHN2Z1xuICAgICAgICB3aWR0aD1cIjIwXCJcbiAgICAgICAgaGVpZ2h0PVwiMjBcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgICAgPGcgaWQ9XCJHcm91cFwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBpZD1cIk1hc2tcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTEwIDIwQzE1LjUyMjggMjAgMjAgMTUuNTIyOCAyMCAxMEMyMCA0LjQ3NzE1IDE1LjUyMjggMCAxMCAwQzQuNDc3MTUgMCAwIDQuNDc3MTUgMCAxMEMwIDE1LjUyMjggNC40NzcxNSAyMCAxMCAyMFpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMDAyNDdEXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bWFza1xuICAgICAgICAgICAgICAgIGlkPVwibWFzazBcIlxuICAgICAgICAgICAgICAgIG1hc2stdHlwZT1cImFscGhhXCJcbiAgICAgICAgICAgICAgICBtYXNrVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgeD1cIjBcIlxuICAgICAgICAgICAgICAgIHk9XCIwXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJNYXNrXzJcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTEwIDIwQzE1LjUyMjggMjAgMjAgMTUuNTIyOCAyMCAxMEMyMCA0LjQ3NzE1IDE1LjUyMjggMCAxMCAwQzQuNDc3MTUgMCAwIDQuNDc3MTUgMCAxMEMwIDE1LjUyMjggNC40NzcxNSAyMCAxMCAyMFpcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L21hc2s+XG4gICAgICAgICAgICA8ZyBtYXNrPVwidXJsKCNtYXNrMClcIj5cbiAgICAgICAgICAgICAgICA8ZyBpZD1cIkdyb3VwXzJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJHcm91cF8zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjQuMjg2NyAyMC4xOTNWMTcuMDk0M0wxMy41Njg4IDkuNTAyNTJMNS42NzUzNSA5LjUwMjUyTDIwLjc2NjUgMjAuMTkzSDI0LjI4NjdaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0VFRUVFRVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIlBhdGhfMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjQuMjg2NyAxOC4wMjc0TDEyLjI1MzkgOS41MDI1N0g5LjYyMjhMMjQuMjg2NyAxOS44OTA2VjE4LjAyNzRaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0NGMUIyQlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIlBhdGhfM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNy44MzE5MSA5LjUwMjU0TC00LjM5NTYgMTguMzA4M1YyMC4xOTI5SDAuNjM0MjM4TDE1LjcyNjkgOS41MDI0TDcuODMxOTEgOS41MDI1NFpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRUVFRUVFXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aF80XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMS43Nzg0IDkuNTAyNTJMLTMuMjg3MDggMjAuMTkzSC0yLjg4NTU5SC0wLjY4MDA4MUwxNC40MTEgOS41MDI1MkgxMS43Nzg0WlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNDRjFCMkJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIwLjc2NzkgMC4zMzkzMTVMNS42NzY4MiAxMS4wMjk4TDEzLjU3MDMgMTEuMDI5OEwyNC4yODY3IDMuNDM3OTdWMC4zMzkzMTVIMjAuNzY3OVpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRUVFRUVFXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aF82XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0yMi4wODE0IDAuMzM5MzE1TDYuOTkxNzkgMTEuMDI5OEg5LjYyMjk0TDI0LjI4NjggMC42NDE3MzFWMC4zMzkzMTVIMjIuMDgxNFpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjQ0YxQjJCXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aF83XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMC41ODAxIDExLjEzOTFIMTUuNjA0NEwwLjYxMTAwMSAwLjQzOTUxNUMtMS4xMTE0NiAwLjcwNTIxNSAtMi41OTQ0MSAxLjcxMjcxIC0zLjUxNjQ4IDMuMTMyMDhMMTAuNTc5OSAxMy4xODY4VjExLjEzOTFIMTAuNTgwMVpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNFRUVFRUVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXzhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTS0yLjg1NzEzIDIuMzY4MTdMMTAuNzg5MyAxMi4wODc5VjEwLjk3OTRIMTEuODY4MUwtMS43MDkyNyAxLjMxODY2Qy0yLjEzNDc5IDEuNjE3ODUgLTIuNTIwMzMgMS45NzA4OCAtMi44NTcxMyAyLjM2ODE3WlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0NGMUIyQlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIlBhdGhfOVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjQuMzk1NSA2LjM3MzZMMTMuNzg4MiA2LjM3MzZMMTMuNzg4MiAwLjIxOTcyN0w2LjIxMTcyIDAuMjE5NzI3VjYuMzczNkwtNC4zOTU2IDYuMzczNkwtNC4zOTU2IDE0LjA2NThINi4yMTE3MlYyMC4yMTk3TDEzLjc4ODMgMjAuMjE5N1YxNC4wNjU4SDI0LjM5NTZWNi4zNzM2SDI0LjM5NTVaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRUVFRUVFXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJHcm91cF80XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aF8xMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIuMjEwMiAyMC4xOTNINy42ODE0Nkw3LjY4MTQ2IDAuMzM5NDM2SDEyLjIxMDJMMTIuMjEwMiAyMC4xOTNaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0NGMUIyQlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIlBhdGhfMTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTI0LjI4NjcgMTIuNTU2OUwtNC4zOTUwNyAxMi41NTY5TC00LjM5NTA3IDcuOTc1MjdMMjQuMjg2NyA3Ljk3NTI3VjEyLjU1NjlaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0NGMUIyQlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFbmc7XG4iLCJpbXBvcnQgRW5nbGlzaCBmcm9tICcuL0VuZ2xpc2gnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZW5nbGlzaDogRW5nbGlzaCxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgSWNvbnMgZnJvbSAnLi9sYW5ndWFnZS1pY29ucyc7XG5pbXBvcnQgVHJpYW5nbGVJY29uIGZyb20gJy4vVHJpYW5nbGVJY29uJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICcuL01lbnVJdGVtJztcblxuaW1wb3J0IHsgQm94LCBGbGV4IH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuY29uc3QgbGFuZ3VnZVNob3J0TmFtZXMgPSB7XG4gICAgZW5nbGlzaDogJ0VuZycsXG59O1xuXG5jb25zdCBMYW5ndWFnZVNlbGVjdCA9ICh7IGxhbmd1YWdlIH0pID0+IHtcbiAgICBjb25zdCBDb21wb25lbnQgPSBJY29uc1tsYW5ndWFnZV07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZsZXggYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgPENvbXBvbmVudCAvPlxuICAgICAgICAgICAgPEJveCBweD1cIjVweFwiPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBhY3RpdmU9e2ZhbHNlfT57bGFuZ3VnZVNob3J0TmFtZXNbbGFuZ3VhZ2VdfTwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxUcmlhbmdsZUljb24gLz5cbiAgICAgICAgPC9GbGV4PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZVNlbGVjdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENsb3NlSWNvbiA9IHByb3BzID0+IChcbiAgICA8c3ZnXG4gICAgICAgIHdpZHRoPVwiMThcIlxuICAgICAgICBoZWlnaHQ9XCIxOFwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMTggMThcIlxuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgICA8ZyBpZD1cIkdyb3VwIDEyIENvcHlcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgaWQ9XCJQYXRoIDVcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMTYgMUwxIDE2LjI5ODlcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cIiMyRUI0RkZcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGlkPVwiUGF0aCA1XzJcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMSAxTDE2LjgzNzEgMTYuMjk4OVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiIzJFQjRGRlwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xvc2VJY29uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0IHsgaWNvbkNvbG9yIH0gZnJvbSAnLi9pY29uQ29sb3InXG5cbmNvbnN0IE5GVEljb24gPSAoeyBpc0FjdGl2ZSwgLi4ucmVzdCB9KSA9PiAoXG4gICAgPHN2Z1xuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktdXBjXCJcbiAgICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAgICA8cGF0aCBkPVwiTTMgNC41YS41LjUgMCAwIDEgMSAwdjdhLjUuNSAwIDAgMS0xIDB2LTd6bTIgMGEuNS41IDAgMCAxIDEgMHY3YS41LjUgMCAwIDEtMSAwdi03em0yIDBhLjUuNSAwIDAgMSAxIDB2N2EuNS41IDAgMCAxLTEgMHYtN3ptMiAwYS41LjUgMCAwIDEgLjUtLjVoMWEuNS41IDAgMCAxIC41LjV2N2EuNS41IDAgMCAxLS41LjVoLTFhLjUuNSAwIDAgMS0uNS0uNXYtN3ptMyAwYS41LjUgMCAwIDEgMSAwdjdhLjUuNSAwIDAgMS0xIDB2LTd6XCIgLz5cbiAgICA8L3N2Zz5cbilcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKE5GVEljb24pYFxuICAgICR7aWNvbkNvbG9yfVxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0IHsgaWNvbkNvbG9yIH0gZnJvbSAnLi9pY29uQ29sb3InXG5cbmNvbnN0IEFkZENvdXBvbkljb24gPSAoeyBpc0FjdGl2ZSwgLi4ucmVzdCB9KSA9PiAoXG4gICAgPHN2Z1xuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgd2lkdGg9XCIyMlwiXG4gICAgICAgIGhlaWdodD1cIjIwXCJcbiAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1maWxlLWVhcm1hcmstcGx1c1wiXG4gICAgICAgIHsuLi5yZXN0fVxuICAgID5cbiAgICAgICAgPHBhdGggZD1cIk04IDYuNWEuNS41IDAgMCAxIC41LjV2MS41SDEwYS41LjUgMCAwIDEgMCAxSDguNVYxMWEuNS41IDAgMCAxLTEgMFY5LjVINmEuNS41IDAgMCAxIDAtMWgxLjVWN2EuNS41IDAgMCAxIC41LS41elwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTQgNC41VjE0YTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yVjJhMiAyIDAgMCAxIDItMmg1LjVMMTQgNC41em0tMyAwQTEuNSAxLjUgMCAwIDEgOS41IDNWMUg0YTEgMSAwIDAgMC0xIDF2MTJhMSAxIDAgMCAwIDEgMWg4YTEgMSAwIDAgMCAxLTFWNC41aC0yelwiIC8+XG4gICAgPC9zdmc+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChBZGRDb3Vwb25JY29uKWBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5gXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIExvZ28gfSBmcm9tICcuL0xvZ28nXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1lbnVJdGVtIH0gZnJvbSAnLi9NZW51SXRlbSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVhZGVyTGF5b3V0IH0gZnJvbSAnLi9IZWFkZXJMYXlvdXQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlYXJjaEljb24gfSBmcm9tICcuL1NlYXJjaEljb24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNob3BJY29uIH0gZnJvbSAnLi9TaG9wSWNvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlckljb24gfSBmcm9tICcuL1VzZXJJY29uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2NrSWNvbiB9IGZyb20gJy4vTG9ja0ljb24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFVubG9ja0ljb24gfSBmcm9tICcuL1VubG9ja0ljb24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRyaWFuZ2xlSWNvbiB9IGZyb20gJy4vVHJpYW5nbGVJY29uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSb3VuZE1hcmtJY29uIH0gZnJvbSAnLi9Sb3VuZE1hcmtJY29uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMYW5ndWFnZVNlbGVjdCB9IGZyb20gJy4vTGFuZ3VhZ2VTZWxlY3QnXG5leHBvcnQgeyBkZWZhdWx0IGFzIENsb3NlSWNvbiB9IGZyb20gJy4vQ2xvc2VJY29uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBORlRJY29uIH0gZnJvbSAnLi9ORlRJY29uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBZGRDb3Vwb25JY29uIH0gZnJvbSAnLi9BZGRDb3Vwb25JY29uJ1xuXG4iLCIvKipcbiAqIGRBcHAgY29uZmlnXG4gKlxuICogU2VlZCBpZiBuZWVkZWRcbiAqIGJhcmdhaW4gcmVwYWlyIGhlaWdodCBkZXBlbmQgc2luY2UgZmlyZVxuICogcHJpdmF0ZSBmbG9hdCBpbGxlZ2FsIGhhemFyZCBzYWx0IGFyb3VuZFxuICogZGVjb3JhdGUgYm9zcyBicmlkZ2VcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkQXBwQWRkcmVzczogJzNNdEE4ZGRDUVQ0NEd0TWZVajlYZ3pQZVp2elk1MmtvZktLJyxcbiAgICBuZnRTY3JpcHQ6ICdCQVFBQUFBRVRrOU9SUUlBQUFBRWJtOXVaUVFBQUFBS1pFRndjRkIxWWt0bGVRRUFBQUFnMUZKaGYwQzZPTUtEMjBqWEwxc3owejg1UFBDemVxcSt5STFJQ1M3dDdnc0VBQUFBQkdSQmNIQUpBUUFBQUJSaFpHUnlaWE56Um5KdmJWQjFZbXhwWTB0bGVRQUFBQUVGQUFBQUNtUkJjSEJRZFdKTFpYa0tBUUFBQUE1blpYUlRkSEpwYm1kQ2VVdGxlUUFBQUFJQUFBQUhZV1JrY21WemN3QUFBQU5yWlhrRUFBQUFCeVJ0WVhSamFEQUpBQVFkQUFBQUFnVUFBQUFIWVdSa2NtVnpjd1VBQUFBRGEyVjVBd2tBQUFFQUFBQUNCUUFBQUFja2JXRjBZMmd3QWdBQUFBWlRkSEpwYm1jRUFBQUFBV0VGQUFBQUJ5UnRZWFJqYURBRkFBQUFBV0VGQUFBQUJFNVBUa1VLQVFBQUFBOW5aWFJKYm5SbFoyVnlRbmxMWlhrQUFBQUNBQUFBQjJGa1pISmxjM01BQUFBRGEyVjVCQUFBQUFja2JXRjBZMmd3Q1FBRUdnQUFBQUlGQUFBQUIyRmtaSEpsYzNNRkFBQUFBMnRsZVFNSkFBQUJBQUFBQWdVQUFBQUhKRzFoZEdOb01BSUFBQUFEU1c1MEJBQUFBQUZoQlFBQUFBY2tiV0YwWTJnd0JRQUFBQUZoQUFBQUFBQUFBQUFBQ2dFQUFBQU1aMlYwUzJWNVEyOTFjRzl1QUFBQUFRQUFBQWRoYzNObGRFbGtDUUFCTEFBQUFBSUNBQUFBQjJOdmRYQnZibDhGQUFBQUIyRnpjMlYwU1dRS0FRQUFBQkJuWlhSTFpYbERiM1Z3YjI1SmRHVnRBQUFBQVFBQUFBWmpiM1Z3YjI0SkFBRXNBQUFBQWdVQUFBQUdZMjkxY0c5dUFnQUFBQVZmYVhSbGJRb0JBQUFBRW1kbGRFdGxlVWwwWlcxVGRYQndiR2xsY2dBQUFBRUFBQUFFYVhSbGJRa0FBU3dBQUFBQ0JRQUFBQVJwZEdWdEFnQUFBQVpmYjNkdVpYSUtBUUFBQUJSblpYUkxaWGxKZEdWdFJYaHdhWEpsUkdGMFpRQUFBQUVBQUFBRWFYUmxiUWtBQVN3QUFBQUNCUUFBQUFScGRHVnRBZ0FBQUF0ZlpYaHdhWEpsWkdGMFpRb0JBQUFBQjJkbGRFbDBaVzBBQUFBQkFBQUFCbU52ZFhCdmJna0JBQUFBRG1kbGRGTjBjbWx1WjBKNVMyVjVBQUFBQWdVQUFBQUVaRUZ3Y0FrQkFBQUFFR2RsZEV0bGVVTnZkWEJ2YmtsMFpXMEFBQUFCQlFBQUFBWmpiM1Z3YjI0S0FRQUFBQTluWlhSSmRHVnRVM1Z3Y0d4cFpYSUFBQUFCQUFBQUJHbDBaVzBKQVFBQUFBNW5aWFJUZEhKcGJtZENlVXRsZVFBQUFBSUZBQUFBQkdSQmNIQUpBUUFBQUJKblpYUkxaWGxKZEdWdFUzVndjR3hwWlhJQUFBQUJCUUFBQUFScGRHVnRDZ0VBQUFBUloyVjBTWFJsYlVWNGNHbHlaVVJoZEdVQUFBQUJBQUFBQkdsMFpXMEpBUUFBQUE5blpYUkpiblJsWjJWeVFubExaWGtBQUFBQ0JRQUFBQVJrUVhCd0NRRUFBQUFTWjJWMFMyVjVTWFJsYlZOMWNIQnNhV1Z5QUFBQUFRVUFBQUFFYVhSbGJRUUFBQUFHWTI5MWNHOXVDUUVBQUFBTVoyVjBTMlY1UTI5MWNHOXVBQUFBQVFrQUFsZ0FBQUFCQ0FVQUFBQUVkR2hwY3dBQUFBSnBaQVFBQUFBRWFYUmxiUWtCQUFBQUIyZGxkRWwwWlcwQUFBQUJCUUFBQUFaamIzVndiMjRFQUFBQUJtVjRjR2x5WlFrQkFBQUFFV2RsZEVsMFpXMUZlSEJwY21WRVlYUmxBQUFBQVFVQUFBQUVhWFJsYlFRQUFBQUljM1Z3Y0d4cFpYSUpBUUFBQUE5blpYUkpkR1Z0VTNWd2NHeHBaWElBQUFBQkJRQUFBQVJwZEdWdEJBQUFBQWxwYzBWNGNHbHlaV1FKQUFCbkFBQUFBZ1VBQUFBR1pYaHdhWEpsQ0FVQUFBQUNkSGdBQUFBSmRHbHRaWE4wWVcxd0NnRUFBQUFYWTJobFkydEJibVJCWTJObGNIUlRaWFJUWTNKcGNIUUFBQUFCQUFBQUFXVUpBQUFBQUFBQUFnZ0ZBQUFBQVdVQUFBQUdjMlZ1WkdWeUJRQUFBQVJrUVhCd0NnRUFBQUFTWTJobFkydEJibVJCWTJObGNIUkNkWEp1QUFBQUFRQUFBQUZsQXdNSkFBQUFBQUFBQWdnRkFBQUFBV1VBQUFBR2MyVnVaR1Z5QlFBQUFBUmtRWEJ3QmdrQUFBQUFBQUFDQ0FVQUFBQUJaUUFBQUFaelpXNWtaWElKQUFRbUFBQUFBUVVBQUFBSWMzVndjR3hwWlhJR0NRQUFBZ0FBQUFFQ0FBQUFLMDl1YkhrZ1kyOTFjRzl1SjNNZ2MzVndjR3hwWlhJZ1kyRnVJR0oxY200Z2RHaHBjeUJqYjNWd2IyNEtBUUFBQUJaamFHVmphMEZ1WkVGalkyVndkRlJ5WVc1elptVnlBQUFBQVFBQUFBRmxBd01KQUFBQUFBQUFBZ2dGQUFBQUFXVUFBQUFHYzJWdVpHVnlCUUFBQUFSa1FYQndCZ2tBQUFBQUFBQUNDQVVBQUFBQlpRQUFBQVp6Wlc1a1pYSUpBQVFtQUFBQUFRVUFBQUFJYzNWd2NHeHBaWElHQXdrQUFBQUFBQUFDQ0FVQUFBQUJaUUFBQUFseVpXTnBjR2xsYm5RSkFBUW1BQUFBQVFVQUFBQUljM1Z3Y0d4cFpYSUdDUUFBQWdBQUFBRUpBQUVzQUFBQUFnSUFBQUF1V1c5MUlHTmhiaUIwY21GdWMyWmxjaUIwYUdseklHTnZkWEJ2YmlCdmJteDVJSFJ2SUhOMWNIQnNhV1Z5SUFVQUFBQUljM1Z3Y0d4cFpYSUtBUUFBQUJwamFHVmphMEZ1WkVGalkyVndkRWx1ZG05clpWTmpjbWx3ZEFBQUFBRUFBQUFCWlFNRENRQUFBQUFBQUFJSUJRQUFBQUZsQUFBQUJuTmxibVJsY2dVQUFBQUVaRUZ3Y0FZSkFBQUFBQUFBQWdnRkFBQUFBV1VBQUFBR2MyVnVaR1Z5Q1FBRUpnQUFBQUVGQUFBQUNITjFjSEJzYVdWeUJnTUpBQUFBQUFBQUFnZ0ZBQUFBQVdVQUFBQUdjMlZ1WkdWeUNRQUVKZ0FBQUFFRkFBQUFDSE4xY0hCc2FXVnlCZ2tBQUFJQUFBQUJBZ0FBQURkWmIzVWdZMkZ1SUc5dWJIa2dhVzUyYjJ0bElITmpjbWx3ZENCdlppQkRiM1Z3YjI0Z1FtRjZZV0Z5SUUxaGNtdGxkQ0JrUVhCd0F3a0FBQUFBQUFBQ0JRQUFBQVJwZEdWdEJRQUFBQVJPVDA1RkNRQUFBZ0FBQUFFSkFBRXNBQUFBQWdJQUFBQWFTWFJsYlNCdWIzUWdabTkxYm1RZ1ptOXlJR052ZFhCdmJpQUZBQUFBQm1OdmRYQnZiZ01KQUFBQUFBQUFBZ1VBQUFBSWMzVndjR3hwWlhJRkFBQUFCRTVQVGtVSkFBQUNBQUFBQVFrQUFTd0FBQUFDQ1FBQkxBQUFBQUlDQUFBQUVsTjFjSEJzYVdWeUlHWnZjaUJwZEdWdElBVUFBQUFFYVhSbGJRSUFBQUFLSUc1dmRDQm1iM1Z1WkFNRkFBQUFDV2x6Ulhod2FYSmxaQVFBQUFBSEpHMWhkR05vTUFVQUFBQUNkSGdEQ1FBQUFRQUFBQUlGQUFBQUJ5UnRZWFJqYURBQ0FBQUFHVk5sZEVGemMyVjBVMk55YVhCMFZISmhibk5oWTNScGIyNEVBQUFBQVdVRkFBQUFCeVJ0WVhSamFEQUpBUUFBQUJkamFHVmphMEZ1WkVGalkyVndkRk5sZEZOamNtbHdkQUFBQUFFRkFBQUFBV1VEQ1FBQUFRQUFBQUlGQUFBQUJ5UnRZWFJqYURBQ0FBQUFEMEoxY201VWNtRnVjMkZqZEdsdmJnUUFBQUFCWlFVQUFBQUhKRzFoZEdOb01BWUpBQUFDQUFBQUFRSUFBQUJNVkdocGN5QmpiM1Z3YjI0Z2FHRnpJR1Y0Y0dseVpXUWdZVzVrSUdOaGJpQnZibXg1SUdKbElHSjFjbTVsWkNCMGJ5QnlaVzF2ZG1VZ2FYUWdabkp2YlNCNWIzVnlJSGRoYkd4bGRBUUFBQUFISkcxaGRHTm9NQVVBQUFBQ2RIZ0RDUUFBQVFBQUFBSUZBQUFBQnlSdFlYUmphREFDQUFBQUdWTmxkRUZ6YzJWMFUyTnlhWEIwVkhKaGJuTmhZM1JwYjI0RUFBQUFBV1VGQUFBQUJ5UnRZWFJqYURBSkFRQUFBQmRqYUdWamEwRnVaRUZqWTJWd2RGTmxkRk5qY21sd2RBQUFBQUVGQUFBQUFXVURDUUFBQVFBQUFBSUZBQUFBQnlSdFlYUmphREFDQUFBQUQwSjFjbTVVY21GdWMyRmpkR2x2YmdRQUFBQUJaUVVBQUFBSEpHMWhkR05vTUFrQkFBQUFFbU5vWldOclFXNWtRV05qWlhCMFFuVnliZ0FBQUFFRkFBQUFBV1VEQ1FBQUFRQUFBQUlGQUFBQUJ5UnRZWFJqYURBQ0FBQUFFMVJ5WVc1elptVnlWSEpoYm5OaFkzUnBiMjRFQUFBQUFXVUZBQUFBQnlSdFlYUmphREFKQVFBQUFCWmphR1ZqYTBGdVpFRmpZMlZ3ZEZSeVlXNXpabVZ5QUFBQUFRVUFBQUFCWlFNSkFBQUJBQUFBQWdVQUFBQUhKRzFoZEdOb01BSUFBQUFYU1c1MmIydGxVMk55YVhCMFZISmhibk5oWTNScGIyNEVBQUFBQVdVRkFBQUFCeVJ0WVhSamFEQUpBUUFBQUJwamFHVmphMEZ1WkVGalkyVndkRWx1ZG05clpWTmpjbWx3ZEFBQUFBRUZBQUFBQVdVRENRQUFBQUFBQUFJSUJRQUFBQUowZUFBQUFBWnpaVzVrWlhJSkFBUW1BQUFBQVFVQUFBQUljM1Z3Y0d4cFpYSUpBQUFDQUFBQUFRSUFBQUJYVkdocGN5QmpiM1Z3YjI0Z1kyRnVJRzl1YkhrZ1ltVWdkWE5sSUhSdklITjFjSEJzYVdWeUlHbHVJR0Z1SUdWNFkyaGhibWRsSUc5bUlHZHZiMlFnYjNJZ2MyVnlkbWxqWlNCM2FYUm9JR1JwYzJOdmRXNTBDUUFBQWdBQUFBRUNBQUFBTWxSb2FYTWdZMjkxY0c5dUlHTmhiaUJpWlNCaWRYSnVaV1FnZEc4Z1pXNWhZbXhsSUhkcGRHaGtjbUYzSUdaMWJtUnpoVW5JdUE9PScsXG4gICAgZGVmYXVsdE5ldHdvcms6IHtcbiAgICAgICAgY29kZTogJ1QnLFxuICAgICAgICBtYXRjaGVyOiAnaHR0cHM6Ly9tYXRjaGVyLXRlc3RuZXQud2F2ZXNub2Rlcy5jb20vJyxcbiAgICAgICAgc2VydmVyOiAnaHR0cHM6Ly9ub2Rlcy10ZXN0bmV0LndhdmVzbm9kZXMuY29tLycsXG4gICAgfSxcbiAgICBjaGFpbklkOiA4NCxcbiAgICBuZXR3b3JrSWQ6ICd0ZXN0bmV0Jyxcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IHsgc2hhMjU2LCBiYXNlNThlbmNvZGUgfSBmcm9tICdAd2F2ZXMvd2F2ZXMtY3J5cHRvJ1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uLy4uL2NvbmZpZydcblxuY29uc3QgREFQUF9BRERSRVNTID0gY29uZmlnLmRBcHBBZGRyZXNzXG5cbmNvbnN0IGRhdGFMaXN0VG9PYmogPSAobGlzdCkgPT4ge1xuICAgIGNvbnN0IHJ2ID0ge31cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHJ2W2xpc3RbaV0ua2V5XSA9IGxpc3RbaV1cbiAgICByZXR1cm4gcnZcbn1cblxuZXhwb3J0IGNvbnN0IGFzeW5jRmlsdGVyID0gYXN5bmMgKGFyciwgZm4pID0+IHtcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoYXJyLm1hcChmbikpXG4gICAgcmV0dXJuIGFyci5maWx0ZXIoKF92LCBpbmRleCkgPT4gcmVzdWx0c1tpbmRleF0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhQnlLZXkgPSAoa2V5KSA9PiB7XG4gICAgbGV0IHZhbCA9IG51bGxcbiAgICBpZiAod2luZG93LmRBcHBEYXRhICYmIHdpbmRvdy5kQXBwRGF0YVtrZXldKSB7XG4gICAgICAgIHN3aXRjaCAod2luZG93LmRBcHBEYXRhW2tleV0udHlwZSkge1xuICAgICAgICBjYXNlICdpbnRlZ2VyJzpcbiAgICAgICAgICAgIHZhbCA9IHBhcnNlSW50KHdpbmRvdy5kQXBwRGF0YVtrZXldLnZhbHVlLCAxMClcbiAgICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICB2YWwgPSBCb29sZWFuKHdpbmRvdy5kQXBwRGF0YVtrZXldLnZhbHVlKVxuICAgICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFsID0gd2luZG93LmRBcHBEYXRhW2tleV0udmFsdWVcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbFxufVxuXG5leHBvcnQgY29uc3Qgc2hvcnRBZGRyZXNzID0gYWRkciA9PiBgJHthZGRyPy5zdWJzdHIoMCwgNil9Li4uJHthZGRyPy5zdWJzdHIoYWRkcj8ubGVuZ3RoIC0gNSwgNCl9YFxuXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlLCBvcHRpb24gPSB7IGxvY2FsZXM6ICdlbi1JTicgfSkgPT4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcob3B0aW9uLmxvY2FsZXMpXG5cbmV4cG9ydCBjb25zdCBjb2xvclN0YXR1cyA9IHN0YXR1cyA9PiAoXG4gICAgc3RhdHVzID09PSAnYXBwcm92YWwnID8gJ2RhcmsnXG4gICAgICAgIDogc3RhdHVzID09PSAncmVqZWN0ZWQnID8gJ2RhbmdlcidcbiAgICAgICAgICAgIDogc3RhdHVzID09PSAnYWNjZXB0ZWQnID8gJ3N1Y2Nlc3MnXG4gICAgICAgICAgICAgICAgOiBzdGF0dXMgPT09ICdhY3RpdmUnID8gJ3N1Y2Nlc3MnXG4gICAgICAgICAgICAgICAgICAgIDogc3RhdHVzID09PSAndXNlZCcgPyAnc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBzdGF0dXMgPT09ICdidXJuZWQnID8gJ2RhcmsnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzdGF0dXMgPT09ICdleHBpcmVkJyA/ICd3YXJuaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdwcmltYXJ5JylcblxuZXhwb3J0IGNvbnN0IGdldFN1cHBsaWVyRGF0YSA9IChhZGRyZXNzKSA9PiB7XG4gICAgbGV0IHN1cHBsaWVyID0gbnVsbFxuICAgIHRyeSB7XG4gICAgICAgIHN1cHBsaWVyID0gSlNPTi5wYXJzZShnZXREYXRhQnlLZXkoYCR7YWRkcmVzc31fYWNjb3VudGApKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihlcnJvci5tZXNzYWdlKVxuICAgIH1cbiAgICByZXR1cm4gc3VwcGxpZXJcbn1cblxuZXhwb3J0IGNvbnN0IGZvcm1hdE51bWJlciA9IChhbXQsIG9wdGlvbiA9IHsgbG9jYWxlczogJ2VuLUlOJywgZGVjaW1hbHM6IDggfSkgPT4ge1xuICAgIGNvbnN0IHsgbG9jYWxlcywgZGVjaW1hbHMgfSA9IG9wdGlvblxuICAgIGNvbnN0IGRjID0gMTAgKiogZGVjaW1hbHNcbiAgICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxvY2FsZXMsIHtcbiAgICAgICAgbWF4aW11bVNpZ25pZmljYW50RGlnaXRzOiBkZWNpbWFscyArIDYsXG4gICAgfSkuZm9ybWF0KGFtdCAvIGRjKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0Vm90aW5nID0gKGl0ZW0sIHVzZXIpID0+IHtcbiAgICBjb25zdCB2b3RlUm91bmQgPSBnZXREYXRhQnlLZXkoYCR7aXRlbS5pZH1fdm90ZXJvdW5kYCkgfHwgMFxuICAgIGNvbnN0IHZvdGVLZXkgPSBgdm90ZSR7aXRlbS5pZH1bJHt2b3RlUm91bmR9XWBcbiAgICBjb25zdCBoYXNQdXJjaGFzZWQgPSB1c2VyICYmIGdldERhdGFCeUtleShgJHt1c2VyfV8ke2l0ZW0uaWR9X3B1cmNoYXNlZGApXG5cbiAgICBjb25zdCB2b3RpbmcgPSB7XG4gICAgICAgIHJvdW5kOiB2b3RlUm91bmQsXG4gICAgICAgIHN0YXR1czogZ2V0RGF0YUJ5S2V5KGAke3ZvdGVLZXl9X3N0YXR1c2ApIHx8ICd2b3RpbmcnLFxuICAgICAgICBjb21taXQ6IGhhc1B1cmNoYXNlZCA/IGdldERhdGFCeUtleShgJHt2b3RlS2V5fV8ke3VzZXJ9X2NvbW1pdGApIDogbnVsbCxcbiAgICAgICAgcmV2ZWFsOiBoYXNQdXJjaGFzZWQgPyBnZXREYXRhQnlLZXkoYCR7dm90ZUtleX1fJHt1c2VyfV9yZXZlYWxgKSA6IG51bGwsXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4udm90aW5nLFxuICAgICAgICBjYW5Db21taXQ6IGhhc1B1cmNoYXNlZCAmJiAhdm90aW5nPy5jb21taXQgJiYgdm90aW5nPy5zdGF0dXMgPT09ICd2b3RpbmcnLFxuICAgICAgICBjYW5SZXZlYWw6IHZvdGluZz8uY29tbWl0ICYmICF2b3Rpbmc/LnJldmVhbCAmJiB2b3Rpbmc/LnN0YXR1cyA9PT0gJ3JldmVhbCcsXG4gICAgfVxufVxuXG5jb25zdCBnZXRTdXBwbGllckl0ZW1JZHMgPSBhZGRyZXNzID0+IGFzeW5jIChkYXRhID0gW10pID0+IHtcbiAgICBjb25zdCBpZHMgPSBbXVxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtID0ga2V5Lm1hdGNoKC9eKGl0ZW1fW15fXSspX293bmVyJC8pXG4gICAgICAgICAgICBpZiAobSAmJiBtLmxlbmd0aCA9PT0gMiAmJiBkYXRhW2tleV0udmFsdWUgPT09IGFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICBpZHMucHVzaChtWzFdKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gaWRzXG59XG5cbmNvbnN0IGdldFN1cHBsaWVyUHVyY2hhc2VJZHMgPSBhZGRyZXNzID0+IGFzeW5jIChkYXRhID0gW10pID0+IHtcbiAgICBjb25zdCBpZHMgPSBbXVxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtID0ga2V5Lm1hdGNoKC9eKHB1cmNoYXNlX1teX10rKV9zdXBwbGllciQvKVxuICAgICAgICAgICAgaWYgKG0gJiYgbS5sZW5ndGggPT09IDIgJiYgZGF0YVtrZXldLnZhbHVlID09PSBhZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgaWRzLnB1c2gobVsxXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGlkc1xufVxuXG5jb25zdCBnZXRVc2VyUHVyY2hhc2VJZHMgPSBhZGRyZXNzID0+IGFzeW5jIChkYXRhID0gW10pID0+IHtcbiAgICBjb25zdCBpZHMgPSBbXVxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtID0ga2V5Lm1hdGNoKC9eKHB1cmNoYXNlX1teX10rKV91c2VyJC8pXG4gICAgICAgICAgICBpZiAobSAmJiBtLmxlbmd0aCA9PT0gMiAmJiBkYXRhW2tleV0udmFsdWUgPT09IGFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICBpZHMucHVzaChtWzFdKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gaWRzXG59XG5cbmNvbnN0IGdldEl0ZW1JZHMgPSBhc3luYyAoZGF0YSA9IFtdKSA9PiB7XG4gICAgY29uc3QgaWRzID0gW11cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbSA9IGtleS5tYXRjaCgvXihpdGVtX1teX10rKV9vd25lciQvKVxuICAgICAgICAgICAgaWYgKG0gJiYgbS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICBpZHMucHVzaChtWzFdKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gaWRzXG59XG5cbmNvbnN0IHByZXBhcmVJdGVtcyA9IGFzeW5jIChmbkdldElkcywgZGF0YSA9IG51bGwpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gW11cbiAgICBkYXRhID8/PSB3aW5kb3cuZEFwcERhdGFcbiAgICBpZiAoZGF0YSkge1xuICAgICAgICBjb25zdCBpZHMgPSBhd2FpdCBmbkdldElkcyhkYXRhKVxuICAgICAgICBpZHMuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtID0geyBpZCwgY291cG9uVGVybTogJ1dBVkVTJyB9XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IGAke2lkfV90aXRsZWApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGl0bGUgPSBkYXRhW2tleV0udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IGAke2lkfV9wcmljZWApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY291cG9uUHJpY2UgPSBwYXJzZUludChkYXRhW2tleV0udmFsdWUsIDEwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gYCR7aWR9X2ZlYXR1cmVkYCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pc0ZlYXR1cmVkID0gQm9vbGVhbihkYXRhW2tleV0udmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBgJHtpZH1fZXhwaXJlZGF0ZWApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShwYXJzZUludChkYXRhW2tleV0udmFsdWUsIDEwKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHllID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuJywgeyB5ZWFyOiAnbnVtZXJpYycgfSkuZm9ybWF0KGQpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbicsIHsgbW9udGg6ICcyLWRpZ2l0JyB9KS5mb3JtYXQoZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuJywgeyBkYXk6ICcyLWRpZ2l0JyB9KS5mb3JtYXQoZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZXhwaXJhdGlvbkRhdGUgPSBgJHt5ZX0tJHttZX0tJHtkZX1gXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBgJHtpZH1fZGF0YWApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1EYXRhID0gSlNPTi5wYXJzZShkYXRhW2tleV0udmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YS5pbWFnZSA9IGl0ZW1EYXRhLmltYWdlID8gaXRlbURhdGEuaW1hZ2UgOiAnaHR0cHM6Ly9jZG4xLnNhdmVwaWNlLnJ1L3VwbG9hZHMvMjAxOS82LzUvM2VhZjFmOTlhMzJmODA0NTg0N2FjOWYwMmViODEzNDQtZnVsbC5wbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YS5uZXdQcmljZSA9IHBhcnNlSW50KGl0ZW1EYXRhLm5ld1ByaWNlLCAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhLm9sZFByaWNlID0gcGFyc2VJbnQoaXRlbURhdGEub2xkUHJpY2UsIDEwKVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURhdGEuZGlzY291bnQgPSBpdGVtRGF0YS5vbGRQcmljZSA+IDAgPyBwYXJzZUludCgxMDAgLSAoaXRlbURhdGEubmV3UHJpY2UgKiAxMDAgLyBpdGVtRGF0YS5vbGRQcmljZSksIDEwKSA6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB7IC4uLml0ZW1EYXRhLCAuLi5pdGVtIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBsaXN0LnB1c2goaXRlbSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKGxpc3QubWFwKGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUuaXNFeHBpcmVkID0gZS5leHBpcmF0aW9uRGF0ZSA/IERhdGUucGFyc2UoZS5leHBpcmF0aW9uRGF0ZSkgPD0gRGF0ZS5ub3coKSA6IGZhbHNlXG4gICAgICAgIHJldHVybiBlXG4gICAgfSkpXG59XG5cbmNvbnN0IHByZXBhcmVQdXJjaGFzZXMgPSBhc3luYyAoZm5HZXRJZHMpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gW11cbiAgICBjb25zdCBkYXRhID0gd2luZG93LmRBcHBEYXRhXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgICAgY29uc3QgaWRzID0gYXdhaXQgZm5HZXRJZHMoZGF0YSlcbiAgICAgICAgaWRzLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbCA9IHsgaWQsIHZvdGluZzoge30gfVxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKGlkKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBgJHtpZH1fc3RhdHVzYCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuc3RhdHVzID0gZGF0YVtrZXldLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBgJHtpZH1faXRlbWApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLml0ZW0gPSBkYXRhW2tleV0udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IGAke2lkfV9zdXBwbGllcmApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnN1cHBsaWVyID0gZGF0YVtrZXldLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zdXBwbGllckRhdGEgPSBnZXRTdXBwbGllckRhdGEoZWwuc3VwcGxpZXIpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBgJHtpZH1fdXNlcmApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnVzZXIgPSBkYXRhW2tleV0udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IGAke2lkfV9hc3NldElkYCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuYXNzZXRJZCA9IGRhdGFba2V5XS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gYCR7aWR9X2Z1bmRwYWlkYCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuaXNGdW5kUGFpZCA9IEJvb2xlYW4oZGF0YVtrZXldLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gYCR7aWR9X2Ftb3VudGApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFtb3VudCA9IHBhcnNlSW50KGRhdGFba2V5XS52YWx1ZSwgMTApXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBgJHtpZH1fdGltZXN0YW1wYCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwudGltZXN0YW1wID0gcGFyc2VJbnQoZGF0YVtrZXldLnZhbHVlLCAxMClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBsaXN0LnB1c2goZWwpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLmFsbChsaXN0Lm1hcChhc3luYyAoZSkgPT4ge1xuICAgICAgICAvLyBzZXQgaXRlbVxuICAgICAgICBlLml0ZW0gPSBhd2FpdCBnZXRJdGVtQnlLZXkoZS5pdGVtKVxuXG4gICAgICAgIC8vIHNldCBkZWZhdWx0IGNvdXBvbiBzdGF0dXNcbiAgICAgICAgZS5jb3Vwb25TdGF0dXMgPSAnYWN0aXZlJ1xuXG4gICAgICAgIC8vIGlzIGV4cGlyZWRcbiAgICAgICAgZS5pc0V4cGlyZWQgPSBlLml0ZW0/LmlzRXhwaXJlZCA/PyBmYWxzZVxuICAgICAgICBlLmNvdXBvblN0YXR1cyA9IGUuaXNFeHBpcmVkID8gJ2V4cGlyZWQnIDogZS5jb3Vwb25TdGF0dXNcblxuICAgICAgICAvLyBpcyBCdXJuZWRcbiAgICAgICAgaWYgKGUuYXNzZXRJZCkge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLXRlc3RuZXQud2F2ZXNwbGF0Zm9ybS5jb20vdjAvYXNzZXRzLyR7ZS5hc3NldElkfWBcbiAgICAgICAgICAgIGNvbnN0IHIgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gci5vayAmJiBhd2FpdCByLmpzb24oKVxuICAgICAgICAgICAgZS5pc0J1cm5lZCA9IHIub2sgJiYgYm9keS5xdWFudGl0eSA9PT0gMFxuICAgICAgICAgICAgZS5jb3Vwb25TdGF0dXMgPSBlLmlzQnVybmVkID8gJ2J1cm5lZCcgOiBlLmNvdXBvblN0YXR1c1xuICAgICAgICB9XG5cbiAgICAgICAgZS5pc093bmVkID0gZmFsc2VcbiAgICAgICAgcmV0dXJuIGVcbiAgICB9KSlcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoSXRlbXMgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5kQXBwRGF0YSkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJlcGFyZUl0ZW1zKGdldEl0ZW1JZHMpXG4gICAgfVxuICAgIHJldHVybiBhd2FpdCBhcGlGZXRjaEl0ZW1zKClcbn1cblxuY29uc3QgYXBpRmV0Y2hJdGVtcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9ub2Rlcy10ZXN0bmV0LndhdmVzbm9kZXMuY29tL2FkZHJlc3Nlcy9kYXRhLyR7REFQUF9BRERSRVNTfT9tYXRjaGVzPWl0ZW1fLiUyQWApXG4gICAgY29uc3QgZGF0YSA9IHJlcy5vayA/IGF3YWl0IHJlcy5qc29uKCkgOiBbXVxuICAgIHJldHVybiBhd2FpdCBwcmVwYXJlSXRlbXMoZ2V0SXRlbUlkcywgZGF0YUxpc3RUb09iaihkYXRhKSlcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoVXNlclB1cmNoYXNlcyA9IGFzeW5jIChhZGRyZXNzKSA9PiB7XG4gICAgbGV0IGxpc3QgPSBhd2FpdCBwcmVwYXJlUHVyY2hhc2VzKGdldFVzZXJQdXJjaGFzZUlkcyhhZGRyZXNzKSlcbiAgICBsaXN0ID0gYXdhaXQgUHJvbWlzZS5hbGwobGlzdC5tYXAoYXN5bmMgKGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBhc3NldElkIH0gPSBlXG4gICAgICAgIGlmICh0eXBlb2YgYXNzZXRJZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSBudWxsOyBsZXQgciA9IG51bGw7IGxldCBib2R5ID0gbnVsbFxuXG4gICAgICAgICAgICAvLyBpcyBvd25lZCBieSB1c2VyXG4gICAgICAgICAgICBpZiAoIWUuaXNCdXJuZWQpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSBgaHR0cHM6Ly9ub2Rlcy10ZXN0bmV0LndhdmVzbm9kZXMuY29tL2Fzc2V0cy9iYWxhbmNlLyR7YWRkcmVzc30vJHthc3NldElkfWBcbiAgICAgICAgICAgICAgICByID0gYXdhaXQgZmV0Y2godXJsKVxuICAgICAgICAgICAgICAgIGJvZHkgPSByLm9rICYmIGF3YWl0IHIuanNvbigpXG4gICAgICAgICAgICAgICAgZS5pc093bmVkID0gci5vayAmJiBib2R5LmJhbGFuY2UgPiAwXG5cbiAgICAgICAgICAgICAgICAvLyBzdGF0dXMgaXMgYWN0aXZlIGlmIG93bmVkXG4gICAgICAgICAgICAgICAgZS5jb3Vwb25TdGF0dXMgPSBlLmlzT3duZWQgJiYgIWUuaXNFeHBpcmVkID8gJ2FjdGl2ZScgOiBlLmNvdXBvblN0YXR1c1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpcyBVc2VkXG4gICAgICAgICAgICB1cmwgPSBgaHR0cHM6Ly9hcGktdGVzdG5ldC53YXZlc3BsYXRmb3JtLmNvbS92MC90cmFuc2FjdGlvbnMvdHJhbnNmZXI/c2VuZGVyPSR7ZS51c2VyfSZhc3NldElkPSR7YXNzZXRJZH0mbGltaXQ9MWBcbiAgICAgICAgICAgIHIgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgICAgICAgICBib2R5ID0gci5vayAmJiBhd2FpdCByLmpzb24oKVxuICAgICAgICAgICAgZS5pc1VzZWQgPSByLm9rICYmIGJvZHkuZGF0YS5sZW5ndGggPiAwXG4gICAgICAgICAgICBlLmlzT3duZWQgPSBlLmlzT3duZWQgJiYgIWUuaXNVc2VkXG5cbiAgICAgICAgICAgIC8vIHN0YXR1cyBpcyB1c2UgaWYgdXNlZFxuICAgICAgICAgICAgZS5jb3Vwb25TdGF0dXMgPSBlLmlzVXNlZCA/ICd1c2VkJyA6IGUuY291cG9uU3RhdHVzXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVcbiAgICB9KSlcblxuICAgIHJldHVybiBsaXN0XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJDb3Vwb25zID0gYXN5bmMgKGFkZHJlc3MpID0+IHtcbiAgICBsZXQgbGlzdCA9IGF3YWl0IGZldGNoVXNlclB1cmNoYXNlcyhhZGRyZXNzKVxuICAgIGxpc3QgPSBhd2FpdCBQcm9taXNlLmFsbChsaXN0Lm1hcChhc3luYyAoZSkgPT4ge1xuICAgICAgICBpZiAoIWUuaXNFeHBpcmVkKSB7XG4gICAgICAgICAgICBjb25zdCB7IGl0ZW0sIHVzZXIgfSA9IGVcbiAgICAgICAgICAgIGUudm90aW5nID0gZ2V0Vm90aW5nKGl0ZW0sIHVzZXIpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVcbiAgICB9KSlcbiAgICByZXR1cm4gbGlzdC5maWx0ZXIoZSA9PiB0eXBlb2YgZS5hc3NldElkID09PSAnc3RyaW5nJylcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoVXNlckFjdGl2ZUNvdXBvbnMgPSBhc3luYyAoYWRkcmVzcykgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBmZXRjaFVzZXJDb3Vwb25zKGFkZHJlc3MpXG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKGUgPT4gZS5pc093bmVkICYmICFlLmlzRXhwaXJlZClcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoVXNlclVzZWRDb3Vwb25zID0gYXN5bmMgKGFkZHJlc3MpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gYXdhaXQgZmV0Y2hVc2VyQ291cG9ucyhhZGRyZXNzKVxuICAgIHJldHVybiBsaXN0LmZpbHRlcihlID0+IGUuaXNVc2VkKVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VyRXhwaXJlZENvdXBvbnMgPSBhc3luYyAoYWRkcmVzcykgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBmZXRjaFVzZXJDb3Vwb25zKGFkZHJlc3MpXG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKGUgPT4gZS5pc093bmVkICYmIGUuaXNFeHBpcmVkKVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hTdXBwbGllckl0ZW1zID0gYXN5bmMgYWRkcmVzcyA9PlxuICAgIGF3YWl0IHByZXBhcmVJdGVtcyhnZXRTdXBwbGllckl0ZW1JZHMoYWRkcmVzcykpXG5cbmV4cG9ydCBjb25zdCBmZXRjaFN1cHBsaWVyUHVyY2hhc2VzID0gYXN5bmMgKGFkZHJlc3MpID0+IHtcbiAgICBsZXQgbGlzdCA9IGF3YWl0IHByZXBhcmVQdXJjaGFzZXMoZ2V0U3VwcGxpZXJQdXJjaGFzZUlkcyhhZGRyZXNzKSlcbiAgICBsaXN0ID0gYXdhaXQgUHJvbWlzZS5hbGwobGlzdC5tYXAoYXN5bmMgKGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBhc3NldElkIH0gPSBlXG4gICAgICAgIGlmIChhc3NldElkKSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gbnVsbDsgbGV0IHIgPSBudWxsOyBsZXQgYm9keSA9IG51bGxcblxuICAgICAgICAgICAgLy8gaXMgUmVjZWl2ZWRcbiAgICAgICAgICAgIHVybCA9IGBodHRwczovL2FwaS10ZXN0bmV0LndhdmVzcGxhdGZvcm0uY29tL3YwL3RyYW5zYWN0aW9ucy90cmFuc2Zlcj9yZWNpcGllbnQ9JHtlLnN1cHBsaWVyfSZhc3NldElkPSR7YXNzZXRJZH0mbGltaXQ9MWBcbiAgICAgICAgICAgIHIgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgICAgICAgICBib2R5ID0gci5vayAmJiBhd2FpdCByLmpzb24oKVxuICAgICAgICAgICAgZS5pc1JlY2VpdmVkID0gci5vayAmJiBib2R5LmRhdGEubGVuZ3RoID4gMFxuICAgICAgICAgICAgZS5jb3Vwb25TdGF0dXMgPSBlLmlzUmVjZWl2ZWQgPyAndXNlZCcgOiBlLmNvdXBvblN0YXR1c1xuXG4gICAgICAgICAgICAvLyBpcyBPd25lZFxuICAgICAgICAgICAgaWYgKGUuaXNSZWNlaXZlZCAmJiAhZS5pc0J1cm5lZCkge1xuICAgICAgICAgICAgICAgIHVybCA9IGBodHRwczovL25vZGVzLXRlc3RuZXQud2F2ZXNub2Rlcy5jb20vYXNzZXRzL2JhbGFuY2UvJHthZGRyZXNzfS8ke2Fzc2V0SWR9YFxuICAgICAgICAgICAgICAgIHIgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgICAgICAgICAgICAgYm9keSA9IHIub2sgJiYgYXdhaXQgci5qc29uKClcbiAgICAgICAgICAgICAgICBlLmlzT3duZWQgPSByLm9rICYmIGJvZHkuYmFsYW5jZSA+IDBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZS5jb3Vwb25TdGF0dXMgPSBlLmlzRnVuZFBhaWQgPyAncGFpZCcgOiBlLmNvdXBvblN0YXR1c1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVcbiAgICB9KSlcblxuICAgIHJldHVybiBsaXN0XG59XG5leHBvcnQgY29uc3QgZmV0Y2hTdXBwbGllckNvdXBvbnMgPSBhc3luYyAoYWRkcmVzcykgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBmZXRjaFN1cHBsaWVyUHVyY2hhc2VzKGFkZHJlc3MpXG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKGUgPT4gdHlwZW9mIGUuYXNzZXRJZCA9PT0gJ3N0cmluZycpXG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFN1cHBsaWVyQWN0aXZlQ291cG9ucyA9IGFzeW5jIChhZGRyZXNzKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGF3YWl0IGZldGNoU3VwcGxpZXJDb3Vwb25zKGFkZHJlc3MpXG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKGUgPT4gIWUuaXNGdW5kUGFpZCAmJiAhZS5pc0J1cm5lZClcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoU3VwcGxpZXJSZWNlaXZlZENvdXBvbnMgPSBhc3luYyAoYWRkcmVzcykgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBmZXRjaFN1cHBsaWVyQWN0aXZlQ291cG9ucyhhZGRyZXNzKVxuICAgIHJldHVybiBsaXN0LmZpbHRlcihlID0+IGUuaXNPd25lZClcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoU3VwcGxpZXJBdmFpbGFibGVDb3Vwb25zID0gYXN5bmMgKGFkZHJlc3MpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gYXdhaXQgZmV0Y2hTdXBwbGllckNvdXBvbnMoYWRkcmVzcylcbiAgICByZXR1cm4gbGlzdC5maWx0ZXIoZSA9PiAhZS5pc0Z1bmRQYWlkKS5maWx0ZXIoZSA9PiAoXG4gICAgICAgIGUuaXNFeHBpcmVkIHx8IGUuaXNCdXJuZWQgfHwgZS5pc093bmVkXG4gICAgKSlcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoU3VwcGxpZXJBdmFpbGFibGVGdW5kcyA9IGFzeW5jIChhZGRyZXNzKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGF3YWl0IGZldGNoU3VwcGxpZXJBdmFpbGFibGVDb3Vwb25zKGFkZHJlc3MpXG4gICAgcmV0dXJuIGxpc3QucmVkdWNlKChhLCBiKSA9PiBhICsgYi5hbW91bnQsIDApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRJdGVtQnlLZXkgPSBhc3luYyAoa2V5KSA9PiB7XG4gICAgY29uc3QgaXRlbXMgPSBhd2FpdCBwcmVwYXJlSXRlbXMoYXN5bmMgKCkgPT4gW2tleV0pXG4gICAgcmV0dXJuIGl0ZW1zLmxlbmd0aCA+IDAgPyBpdGVtc1swXSA6IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGdldFB1cmNoYXNlQnlLZXkgPSBhc3luYyAoa2V5KSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGF3YWl0IHByZXBhcmVQdXJjaGFzZXMoYXN5bmMgKCkgPT4gW2tleV0pXG4gICAgcmV0dXJuIGxpc3QubGVuZ3RoID4gMCA/IGxpc3RbMF0gOiBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdXBwbGllckJhbGFuY2UgPSBhc3luYyAoYWRkcmVzcykgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB3aW5kb3cuZEFwcERhdGEgfHwgW11cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgIGlmIChrZXkgPT09IGAke2FkZHJlc3N9X2JhbGFuY2VgKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoZGF0YVtrZXldLnZhbHVlLCAxMClcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMFxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3VwcGxpZXJBdmFpbGFibGVCYWxhbmNlID0gYXN5bmMgKGFkZHJlc3MpID0+IHtcbiAgICBjb25zdCBkYXRhID0gd2luZG93LmRBcHBEYXRhIHx8IFtdXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgICBpZiAoa2V5ID09PSBgJHthZGRyZXNzfV9hdmFpbGFibGVgKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoZGF0YVtrZXldLnZhbHVlLCAxMClcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMFxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3VwcGxpZXJBcHByb3ZhbENvdW50ZXIgPSBhc3luYyAoYWRkcmVzcykgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBmZXRjaFN1cHBsaWVyUHVyY2hhc2VzKGFkZHJlc3MpXG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKGUgPT4gZS5zdGF0dXMgPT09ICdhcHByb3ZhbCcpLmxlbmd0aFxufVxuXG5leHBvcnQgY29uc3QgaGFzaFZvdGUgPSAoaXRlbSwgdm90ZSwgc2FsdCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gYCR7aXRlbX0ke3ZvdGV9JHtzYWx0fWBcbiAgICBjb25zdCBieXRlcyA9IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZSh2YWx1ZSlcbiAgICByZXR1cm4gYmFzZTU4ZW5jb2RlKHNoYTI1NihieXRlcykpXG59XG4iLCJpbXBvcnQgeyBub2RlSW50ZXJhY3Rpb24gfSBmcm9tICdAd2F2ZXMvd2F2ZXMtdHJhbnNhY3Rpb25zJ1xuXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50cydcblxuaW1wb3J0IHsgZ2V0U3VwcGxpZXJBcHByb3ZhbENvdW50ZXIgfSBmcm9tICcuL2hlbHBlcidcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5cbmNvbnN0IERFRkFVTFRfQUNDT1VOVCA9IHtcbiAgICBpc0Nvbm5lY3RlZDogZmFsc2UsXG4gICAgaXNTdXBwbGllcjogZmFsc2UsXG59XG5jb25zdCBERUZBVUxUX05FVFdPUksgPSBjb25maWcuZGVmYXVsdE5ldHdvcmsgfHwge1xuICAgIGNvZGU6ICdUJyxcbiAgICBtYXRjaGVyOiAnaHR0cHM6Ly9tYXRjaGVyLXRlc3RuZXQud2F2ZXNub2Rlcy5jb20vJyxcbiAgICBzZXJ2ZXI6ICdodHRwczovL25vZGVzLXRlc3RuZXQud2F2ZXNub2Rlcy5jb20vJyxcbn1cbmNvbnN0IERFRkFVTFRfU1RBVEUgPSB7fVxuXG4vLyBkYXBwIHNlZWQgaWYgbmVlZGVkXG4vLyBob29kIGdvcmlsbGEgbWFwbGUgdGFnIGZlZWQgbWFrZSBzaGluZSBwdWJsaWMgY2FrZSBkZXZvdGUgZ3JhY2Ugc3B5IG5lY2sgZWFnZXIgc29sdmVcbmNvbnN0IERBUFBfQUREUkVTUyA9IGNvbmZpZy5kQXBwQWRkcmVzc1xuY29uc3QgQkFTRV9VUkkgPSBjb25maWcuZGVmYXVsdE5ldHdvcmsuc2VydmVyXG5jb25zdCBDSEFJTl9JRCA9IGNvbmZpZy5jaGFpbklkXG5jb25zdCBORVRXT1JLX0lEID0gY29uZmlnLm5ldHdvcmtJZFxuXG5jb25zdCBlZSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuY29uc3QgeyBXYXZlc0tlZXBlciB9ID0gd2luZG93XG5sZXQgV0tlZSA9IG51bGxcblxuY29uc3QgUFVCTElDX1NUQVRFID0gJ3B1YmxpY1N0YXRlJ1xuY29uc3QgQUNDT1VOVCA9ICdhY2NvdW50J1xuY29uc3QgTkVUV09SSyA9ICduZXR3b3JrJ1xuY29uc3QgREFUQSA9ICdkYXRhJ1xuXG5jb25zdCB2YWx1ZXMgPSB7XG4gICAgc3RhdGU6IERFRkFVTFRfU1RBVEUsXG4gICAgYWNjb3VudDogREVGQVVMVF9BQ0NPVU5ULFxuICAgIG5ldHdvcms6IERFRkFVTFRfTkVUV09SSyxcbiAgICBhdXRoOiBudWxsLFxuICAgIGRhdGE6IHt9LFxufVxuY29uc3QgdHlwZXMgPSBbUFVCTElDX1NUQVRFLCBBQ0NPVU5ULCBORVRXT1JLLCBEQVRBXVxuXG53aW5kb3cuZEFwcCA9IHtcbiAgICBkQXBwQWRkcmVzczogREFQUF9BRERSRVNTLFxuICAgIGJhc2VVcmk6IEJBU0VfVVJJLFxuICAgIGNoYWluSWQ6IENIQUlOX0lELFxuICAgIG5ldHdvcms6IE5FVFdPUktfSUQsXG59XG5cbndpbmRvdy5ub2RlSW50ZXJhY3Rpb24gPSBub2RlSW50ZXJhY3Rpb25cblxuY29uc3Qgbm90aWZ5QWxlcnQgPSAobWVzc2FnZSkgPT4ge1xuICAgIGNvbnNvbGUud2FybihtZXNzYWdlKVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuICAgIGFsZXJ0KG1lc3NhZ2UpXG59XG5cbmNvbnN0IGdldFNlc3Npb24gPSAoYWRkcmVzcykgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgY29uc3QgZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBzZXNzaW9uXyR7YWRkcmVzc31gKVxuICAgICAgICByZXR1cm4gZCA/IEpTT04ucGFyc2UoZCkgOiBudWxsXG4gICAgfVxuICAgIHJldHVybiBudWxsXG59XG5cbmNvbnN0IHNldFNlc3Npb24gPSAoc2Vzc2lvbikgPT4ge1xuICAgIGNvbnN0IGFkZHJlc3MgPSBzZXNzaW9uPy5hZGRyZXNzXG4gICAgaWYgKGFkZHJlc3MgJiYgbG9jYWxTdG9yYWdlKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBzZXNzaW9uXyR7c2Vzc2lvbi5hZGRyZXNzfWAsIEpTT04uc3RyaW5naWZ5KHNlc3Npb24pKVxuICAgIH1cbn1cbmNvbnN0IGRlbFNlc3Npb24gPSAoYWRkcmVzcykgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UpIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBzZXNzaW9uXyR7YWRkcmVzc31gKVxufVxuXG5mdW5jdGlvbiBzdWJzY3JpYmUodHlwZSwgZm4pIHtcbiAgICBpZiAoIXR5cGVzLmluY2x1ZGVzKHR5cGUpKSB7XG4gICAgICAgIHRocm93IEVycm9yKGB0eXBlICR7dHlwZX0gbm90IGFsbG93ZWQuIGF2YWlsYWJsZSB0eXBlcyBhcmUgOiAke0pTT04uc3RyaW5naWZ5KHR5cGVzKX1gKVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmRlYnVnKGBzdWJzY3JpYmUgJHt0eXBlfWApXG4gICAgZWUub24odHlwZSwgZm4pXG4gICAgZm4odmFsdWVzW3R5cGVdKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoYHVuc3Vic2NyaWJlICR7dHlwZX1gKVxuICAgICAgICBlZS5vZmYodHlwZSwgZm4pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRWYWx1ZSh0eXBlLCBkYXRhKSB7XG4gICAgdmFsdWVzW3R5cGVdID0gZGF0YVxuICAgIHdpbmRvdy5kQXBwW3R5cGVdID0gZGF0YVxuICAgIGVlLmVtaXQodHlwZSwgZGF0YSlcbn1cblxuZnVuY3Rpb24gY3VycmVudE5ldHdvcmsoKSB7XG4gICAgcmV0dXJuIHZhbHVlc1tORVRXT1JLXVxufVxuXG5mdW5jdGlvbiBjdXJyZW50QWNjb3VudCgpIHtcbiAgICByZXR1cm4gdmFsdWVzW0FDQ09VTlRdXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgbm9kZUludGVyYWN0aW9uLmFjY291bnREYXRhKERBUFBfQUREUkVTUywgQkFTRV9VUkkpXG4gICAgd2luZG93LmRBcHBEYXRhID0gZGF0YVxuICAgIHdpbmRvdy5kQXBwRGF0YUtleXMgPSBPYmplY3Qua2V5cyhkYXRhKVxuICAgIGNvbnNvbGUuZGVidWcoJ1sg8J+UhCBkQXBwIGRhdGEgXSA6JywgYCR7d2luZG93LmRBcHBEYXRhS2V5cz8ubGVuZ3RofSBrZXlzIGxvYWRlZGApXG4gICAgc2V0VmFsdWUoREFUQSwgZGF0YSlcbiAgICByZXR1cm4gZGF0YVxufVxuXG5hc3luYyBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICAgIGRlbFNlc3Npb24odmFsdWVzW0FDQ09VTlRdPy5hZGRyZXNzKVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgIHVwZGF0ZVN0YXRlKClcbn1cblxuYXN5bmMgZnVuY3Rpb24gb25TdGF0ZUNoYW5nZShzdGF0ZSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1sg8J+UhCBXYXZlcyBLZWVwZXIgc3RhdGUgXSA6ICcsIGB2ZXJzaW9uOiAke3N0YXRlLnZlcnNpb259LCBpbml0aWFsaXplZDogJHtzdGF0ZS5pbml0aWFsaXplZCA/ICd0cnVlJyA6ICdmYWxzZSd9LCBsb2NrZWQ6ICR7c3RhdGUubG9ja2VkID8gJ3RydWUnIDogJ2ZhbHNlJ31gKVxuICAgIGlmICh0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnIHx8IHR5cGVvZiBzdGF0ZS5hY2NvdW50ICE9PSAnb2JqZWN0JyB8fCB0eXBlb2Ygc3RhdGUubmV0d29yayAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc2V0VmFsdWUoUFVCTElDX1NUQVRFLCBzdGF0ZSlcblxuICAgIGNvbnN0IGFjY291bnQgPSB2YWx1ZXNbQUNDT1VOVF1cbiAgICBjb25zdCBud2sgPSBzdGF0ZS5uZXR3b3JrXG4gICAgbGV0IGFjY3QgPSBzdGF0ZS5hY2NvdW50XG4gICAgaWYgKGFjY3QpIHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGdldFNlc3Npb24oYWNjdC5hZGRyZXNzKVxuICAgICAgICBhY2N0LmlzQ29ubmVjdGVkID0gc2Vzc2lvbj8uYWRkcmVzcyA9PT0gYWNjdC5hZGRyZXNzXG5cbiAgICAgICAgaWYgKGFjY3QubmV0d29yayAhPT0gTkVUV09SS19JRCB8fCBud2suY29kZSAhPT0gREVGQVVMVF9ORVRXT1JLLmNvZGUpIHtcbiAgICAgICAgICAgIG5vdGlmeUFsZXJ0KGBQbGVhc2Ugc3dpdGNoIFdhdmVzS2VlcGVyIHRvICR7TkVUV09SS19JRH1gKVxuICAgICAgICAgICAgaWYgKGFjY291bnQuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBkaXNjb25uZWN0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjY3QgPSBERUZBVUxUX0FDQ09VTlRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBub2RlSW50ZXJhY3Rpb24uYWNjb3VudERhdGFCeUtleShgJHthY2N0LmFkZHJlc3N9X2FjY291bnRgLCBEQVBQX0FERFJFU1MsIEJBU0VfVVJJKVxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBhY2N0LnN1cHBsaWVyID0gSlNPTi5wYXJzZShkYXRhLnZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIGFjY3Quc3VwcGxpZXJcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGFjY3Quc3VwcGxpZXIgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBhY2N0LnN1cHBsaWVyLmFwcHJvdmFsQ291bnRlciA9IGF3YWl0IGdldFN1cHBsaWVyQXBwcm92YWxDb3VudGVyKGFjY3QuYWRkcmVzcylcbiAgICAgICAgICAgIGFjY3QuaXNTdXBwbGllciA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFZhbHVlKEFDQ09VTlQsIGFjY3QpXG4gICAgICAgIGlmIChCb29sZWFuKGFjY291bnQuaXNDb25uZWN0ZWQpICE9PSBCb29sZWFuKGFjY3QuaXNDb25uZWN0ZWQpKSB7XG4gICAgICAgICAgICBhd2FpdCBmZXRjaERhdGEoKVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldFZhbHVlKE5FVFdPUkssIG53aylcbn1cblxuY29uc3Qgb25BcGlMaXN0ZW5lciA9ICgpID0+IHtcbiAgICBXS2VlID0gV2F2ZXNLZWVwZXIub24oJ3VwZGF0ZScsIG9uU3RhdGVDaGFuZ2UpXG59XG5cbmNvbnN0IG9mZkFwaUxpc3RlbmVyID0gKCkgPT4ge1xuICAgIFdLZWUub2ZmKCd1cGRhdGUnLCBvblN0YXRlQ2hhbmdlKVxufVxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVTdGF0ZSgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IFdhdmVzS2VlcGVyLnB1YmxpY1N0YXRlKClcbiAgICBhd2FpdCBvblN0YXRlQ2hhbmdlKHN0YXRlKVxufVxuXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgIGlmICghV2F2ZXNLZWVwZXIpIHtcbiAgICAgICAgbm90aWZ5QWxlcnQoJ+KciyBXYXZlc0tlZXBlciBzaG91bGQgYmUgaW5zdGFsbGVkIHRvIHNpZ24gaW4g4p2XJylcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgb2ZmQXBpTGlzdGVuZXIoKVxuXG4gICAgY29uc3QgYWNjb3VudCA9IHZhbHVlc1tBQ0NPVU5UXVxuICAgIGNvbnN0IHNlc3Npb24gPSBnZXRTZXNzaW9uKGFjY291bnQuYWRkcmVzcylcbiAgICBpZiAoYWNjb3VudC5pc0Nvbm5lY3RlZCAmJiBzZXNzaW9uKSB7XG4gICAgICAgIHJldHVybiBzZXNzaW9uXG4gICAgfVxuXG4gICAgbGV0IGF1dGhEYXRhID0gbnVsbFxuICAgIHRyeSB7XG4gICAgICAgIGF1dGhEYXRhID0gYXdhaXQgV2F2ZXNLZWVwZXIuYXV0aCh7IGRhdGE6ICdTaWduIGluIC0gQ291cG9uQmF6YWFyJyB9KVxuICAgICAgICBjb25zb2xlLmluZm8oYPCfkY0gU3VjY2Vzc2Z1bCBhdXRoZW50aWNhdGlvbiBmb3IgYWRkcmVzcyAke2F1dGhEYXRhLmFkZHJlc3N9YClcbiAgICAgICAgc2V0U2Vzc2lvbihhdXRoRGF0YSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBkZWxTZXNzaW9uKGFjY291bnQuYWRkcmVzcylcbiAgICAgICAgaWYgKGVycm9yLm1lc3NhZ2UpIGNvbnNvbGUud2Fybihg8J+RjiAke2Vycm9yLm1lc3NhZ2V9YClcbiAgICAgICAgZWxzZSBjb25zb2xlLndhcm4oJ/CfkY4gYXV0aGVudGljYXRpb24gd2FzIGludGVycnVwdGVkJylcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICBvbkFwaUxpc3RlbmVyKClcbiAgICB9XG4gICAgcmV0dXJuIGF1dGhEYXRhXG59XG5cbmlmIChXYXZlc0tlZXBlcikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIFdhdmVzS2VlcGVyLmluaXRpYWxQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICBvbkFwaUxpc3RlbmVyKClcbiAgICAgICAgcmV0dXJuIHVwZGF0ZVN0YXRlKClcbiAgICB9KVxufVxuXG5leHBvcnQge1xuICAgIGN1cnJlbnRBY2NvdW50LFxuICAgIGN1cnJlbnROZXR3b3JrLFxuICAgIGNvbm5lY3QsXG4gICAgZGlzY29ubmVjdCxcbiAgICBzdWJzY3JpYmUsXG4gICAgZmV0Y2hEYXRhLFxuICAgIERBUFBfQUREUkVTUyxcbiAgICBQVUJMSUNfU1RBVEUsXG4gICAgQUNDT1VOVCxcbiAgICBORVRXT1JLLFxuICAgIERBVEEsXG4gICAgREVGQVVMVF9BQ0NPVU5ULFxuICAgIERFRkFVTFRfTkVUV09SSyxcbn1cbiIsImltcG9ydCB7IGJyb2FkY2FzdCwgd2FpdEZvclR4IH0gZnJvbSAnQHdhdmVzL3dhdmVzLXRyYW5zYWN0aW9ucydcblxuaW1wb3J0IHsgREFQUF9BRERSRVNTLCBjdXJyZW50TmV0d29yaywgZmV0Y2hEYXRhIH0gZnJvbSAnLi9kQXBwJ1xuaW1wb3J0IHsgaGFzaFZvdGUgfSBmcm9tICcuL2hlbHBlcidcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5cbmNvbnN0IHsgbmZ0U2NyaXB0IH0gPSBjb25maWdcblxuY29uc3QgdGltZW91dCA9IDMwMDAwMCAvLyA1IG1pbnV0ZXNcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5jb25zdCBzaWduVHggPSBhc3luYyB0eERhdGEgPT4gSlNPTi5wYXJzZShhd2FpdCBXYXZlc0tlZXBlci5zaWduVHJhbnNhY3Rpb24odHhEYXRhKSlcblxuY29uc3QgcHVibGlzaFR4ID0gYXN5bmMgKHNpZ25lZFR4KSA9PiB7XG4gICAgY29uc3QgeyBzZXJ2ZXIgfSA9IGN1cnJlbnROZXR3b3JrKClcbiAgICBjb25zdCB0eCA9IGF3YWl0IGJyb2FkY2FzdChzaWduZWRUeCwgc2VydmVyKVxuICAgIHJldHVybiB3YWl0Rm9yVHgodHguaWQsIHsgYXBpQmFzZTogc2VydmVyLCB0aW1lb3V0IH0pXG59XG5cbmNvbnN0IHNpZ25BbmRQdWJsaXNoVHggPSBhc3luYyAodHhEYXRhKSA9PiB7XG4gICAgY29uc3Qgc2lnbmVkVHggPSBhd2FpdCBzaWduVHgodHhEYXRhKVxuICAgIHJldHVybiBhd2FpdCBwdWJsaXNoVHgoc2lnbmVkVHgpXG59XG5cbi8qXG5jb25zdCBjcmVhdGVDb3Vwb24gPSBhc3luYyAoY291cG9uKSA9PiB7XG4gICAgY29uc3QgeyB0aXRsZSwgc2hvcnREZXNjcmlwdGlvbiB9ID0gY291cG9uXG4gICAgY29uc3Qgc3R4ID0gaXNzdWUoe1xuICAgICAgICBuYW1lOiB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IHNob3J0RGVzY3JpcHRpb24sXG4gICAgICAgIHNjcmlwdDogbmZ0U2NyaXB0LFxuICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgZGVjaW1hbHM6IDAsXG4gICAgICAgIHJlaXNzdWFibGU6IGZhbHNlLFxuICAgICAgICBmZWU6IDUwMDAwMCxcbiAgICAgICAgY2hhaW5JZDogd2luZG93LmRBcHAuY2hhaW5JZCxcbiAgICB9LCAnc2VlZCcpXG4gICAgLy8gY29uc29sZS5sb2coJ2Jyb2FkY2FzdCBjcmVhdGUgY291cG9uIG5mdCcpXG4gICAgY29uc3QgdHggPSBhd2FpdCBicm9hZGNhc3Qoc3R4LCB3aW5kb3cuZEFwcC5iYXNlVXJpKVxuICAgIC8vIGNvbnNvbGUubG9nKGB3YWl0Rm9yVHggJHt0eC5pZH1gKVxuICAgIGF3YWl0IHdhaXRGb3JUeCh0eC5pZCwgeyBhcGlCYXNlOiB3aW5kb3cuZEFwcC5iYXNlVXJpIH0pXG4gICAgLy8gY29uc29sZS5sb2coYENvdXBvbiBuZnQgY3JlYXRlZCR7dHguaWR9YClcbiAgICByZXR1cm4gdHguaWRcbn1cbiovXG5cbmNvbnN0IGNvdXBvbkRhdGEgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IG5ld1ByaWNlID0gcGFyc2VJbnQoZGF0YS5uZXdQcmljZSwgMTApXG4gICAgY29uc3Qgb2xkUHJpY2UgPSBwYXJzZUludChkYXRhLm9sZFByaWNlLCAxMClcbiAgICBjb25zdCBkaXNjb3VudCA9IG9sZFByaWNlID4gMCA/IHBhcnNlSW50KDEwMCAtIChuZXdQcmljZSAqIDEwMCkgLyBvbGRQcmljZSwgMTApIDogMFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgICAgbG9uZ1RpdGxlOiBkYXRhLmxvbmdUaXRsZSxcbiAgICAgICAgaW1hZ2U6IGRhdGEuaW1hZ2UsXG4gICAgICAgIHJhdGluZzogMCxcbiAgICAgICAgcmF0aW5nczogMCxcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogZGF0YS5zaG9ydERlc2NyaXB0aW9uLFxuICAgICAgICBsb25nRGVzY3JpcHRpb246IGRhdGEubG9uZ0Rlc2NyaXB0aW9uLFxuICAgICAgICBwcmljZVRlcm06IGRhdGEucHJpY2VUZXJtLFxuICAgICAgICBuZXdQcmljZSxcbiAgICAgICAgb2xkUHJpY2UsXG4gICAgICAgIGRpc2NvdW50LFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFkZEl0ZW0gPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGNvdXBvblByaWNlID0gcGFyc2VJbnQoZGF0YS5jb3Vwb25QcmljZSwgMTApXG4gICAgY29uc3QgY291cG9uRXhwaXJlID0gRGF0ZS5wYXJzZShkYXRhLmV4cGlyYXRpb25EYXRlKVxuICAgIGNvbnN0IHR4RGF0YSA9IHtcbiAgICAgICAgdHlwZTogMTYsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGRBcHA6IERBUFBfQUREUkVTUyxcbiAgICAgICAgICAgIGNhbGw6IHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbjogJ2FkZEl0ZW0nLFxuICAgICAgICAgICAgICAgIGFyZ3M6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNvdXBvblByaWNlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBKU09OLnN0cmluZ2lmeShjb3Vwb25EYXRhKGRhdGEpKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNvdXBvbkV4cGlyZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBheW1lbnQ6IFtdLFxuICAgICAgICAgICAgZmVlOiB7XG4gICAgICAgICAgICAgICAgdG9rZW5zOiAnMC4wMDUnLFxuICAgICAgICAgICAgICAgIGFzc2V0SWQ6ICdXQVZFUycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH1cbiAgICBjb25zdCBzaWduZWRUeCA9IGF3YWl0IHNpZ25UeCh0eERhdGEpXG4gICAgY29uc3QgdHggPSBhd2FpdCBwdWJsaXNoVHgoc2lnbmVkVHgpXG4gICAgYXdhaXQgZmV0Y2hEYXRhKClcbiAgICByZXR1cm4gdHhcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUl0ZW0gPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGNvdXBvblByaWNlID0gcGFyc2VJbnQoZGF0YS5jb3Vwb25QcmljZSwgMTApXG4gICAgY29uc3QgY291cG9uRXhwaXJlID0gRGF0ZS5wYXJzZShkYXRhLmV4cGlyYXRpb25EYXRlKVxuICAgIGNvbnN0IHR4RGF0YSA9IHtcbiAgICAgICAgdHlwZTogMTYsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGRBcHA6IERBUFBfQUREUkVTUyxcbiAgICAgICAgICAgIGNhbGw6IHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbjogJ3VwZGF0ZUl0ZW0nLFxuICAgICAgICAgICAgICAgIGFyZ3M6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYCR7ZGF0YS5pZH1gLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaW50ZWdlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY291cG9uUHJpY2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IEpTT04uc3RyaW5naWZ5KGNvdXBvbkRhdGEoZGF0YSkpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaW50ZWdlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY291cG9uRXhwaXJlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF5bWVudDogW10sXG4gICAgICAgICAgICBmZWU6IHtcbiAgICAgICAgICAgICAgICB0b2tlbnM6ICcwLjAwNScsXG4gICAgICAgICAgICAgICAgYXNzZXRJZDogJ1dBVkVTJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuICAgIGNvbnN0IHR4ID0gYXdhaXQgc2lnbkFuZFB1Ymxpc2hUeCh0eERhdGEpXG4gICAgYXdhaXQgZmV0Y2hEYXRhKClcbiAgICByZXR1cm4gdHhcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZUl0ZW0gPSBhc3luYyAoY291cG9uKSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gY291cG9uXG4gICAgY29uc3QgdHhEYXRhID0ge1xuICAgICAgICB0eXBlOiAxNixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZEFwcDogREFQUF9BRERSRVNTLFxuICAgICAgICAgICAgY2FsbDoge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uOiAncmVtb3ZlSXRlbScsXG4gICAgICAgICAgICAgICAgYXJnczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBgJHtpZH1gLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF5bWVudDogW10sXG4gICAgICAgICAgICBmZWU6IHtcbiAgICAgICAgICAgICAgICB0b2tlbnM6ICcwLjAwNScsXG4gICAgICAgICAgICAgICAgYXNzZXRJZDogJ1dBVkVTJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuICAgIGNvbnN0IHR4ID0gYXdhaXQgc2lnbkFuZFB1Ymxpc2hUeCh0eERhdGEpXG4gICAgYXdhaXQgZmV0Y2hEYXRhKClcbiAgICByZXR1cm4gdHhcbn1cblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyU3VwcGxpZXIgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHR4RGF0YSA9IHtcbiAgICAgICAgdHlwZTogMTYsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGRBcHA6IERBUFBfQUREUkVTUyxcbiAgICAgICAgICAgIGNhbGw6IHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbjogJ3JlZ2lzdGVyU3VwcGxpZXInLFxuICAgICAgICAgICAgICAgIGFyZ3M6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXltZW50OiBbXSxcbiAgICAgICAgICAgIGZlZToge1xuICAgICAgICAgICAgICAgIHRva2VuczogJzAuMDA1JyxcbiAgICAgICAgICAgICAgICBhc3NldElkOiAnV0FWRVMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG4gICAgY29uc3QgdHggPSBhd2FpdCBzaWduQW5kUHVibGlzaFR4KHR4RGF0YSlcbiAgICBhd2FpdCBmZXRjaERhdGEoKVxuICAgIHJldHVybiB0eFxufVxuXG5leHBvcnQgY29uc3QgcHVyY2hhc2VDb3Vwb24gPSBhc3luYyAoY291cG9uKSA9PiB7XG4gICAgY29uc3QgeyBpZCwgY291cG9uUHJpY2UgfSA9IGNvdXBvblxuXG4gICAgY29uc3QgdHhEYXRhID0ge1xuICAgICAgICB0eXBlOiAxNixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZEFwcDogREFQUF9BRERSRVNTLFxuICAgICAgICAgICAgY2FsbDoge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uOiAncHVyY2hhc2UnLFxuICAgICAgICAgICAgICAgIGFyZ3M6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYCR7aWR9YCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBheW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuczogU3RyaW5nKFxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyLnBhcnNlRmxvYXQoY291cG9uUHJpY2UgLyAxZTgpLnRvRml4ZWQoOCksXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0SWQ6ICdXQVZFUycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmZWU6IHtcbiAgICAgICAgICAgICAgICB0b2tlbnM6ICcwLjAwNScsXG4gICAgICAgICAgICAgICAgYXNzZXRJZDogJ1dBVkVTJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuICAgIGNvbnN0IHR4ID0gYXdhaXQgc2lnbkFuZFB1Ymxpc2hUeCh0eERhdGEpXG4gICAgYXdhaXQgZmV0Y2hEYXRhKClcbiAgICByZXR1cm4gdHhcbn1cblxuZXhwb3J0IGNvbnN0IHJlamVjdFB1cmNoYXNlID0gYXN5bmMgKHB1cmNoYXNlKSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gcHVyY2hhc2VcbiAgICBjb25zdCB0eERhdGEgPSB7XG4gICAgICAgIHR5cGU6IDE2LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkQXBwOiBEQVBQX0FERFJFU1MsXG4gICAgICAgICAgICBjYWxsOiB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb246ICdyZWplY3RQdXJjaGFzZScsXG4gICAgICAgICAgICAgICAgYXJnczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBgJHtpZH1gLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF5bWVudDogW10sXG4gICAgICAgICAgICBmZWU6IHtcbiAgICAgICAgICAgICAgICB0b2tlbnM6ICcwLjAwNScsXG4gICAgICAgICAgICAgICAgYXNzZXRJZDogJ1dBVkVTJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuICAgIGNvbnN0IHR4ID0gYXdhaXQgc2lnbkFuZFB1Ymxpc2hUeCh0eERhdGEpXG4gICAgYXdhaXQgZmV0Y2hEYXRhKClcbiAgICByZXR1cm4gdHhcbn1cblxuZXhwb3J0IGNvbnN0IHNlbmRDb3Vwb25Ub1N1cHBsaWVyID0gYXN5bmMgKHB1cmNoYXNlKSA9PiB7XG4gICAgY29uc3QgeyBhc3NldElkLCBzdXBwbGllciB9ID0gcHVyY2hhc2VcbiAgICBjb25zdCB0eERhdGEgPSB7XG4gICAgICAgIHR5cGU6IDQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGFtb3VudDoge1xuICAgICAgICAgICAgICAgIHRva2VuczogJzEnLFxuICAgICAgICAgICAgICAgIGFzc2V0SWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmVlOiB7XG4gICAgICAgICAgICAgICAgdG9rZW5zOiAnMC4wMDUnLFxuICAgICAgICAgICAgICAgIGFzc2V0SWQ6ICdXQVZFUycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVjaXBpZW50OiBzdXBwbGllcixcbiAgICAgICAgfSxcbiAgICB9XG4gICAgY29uc3QgdHggPSBhd2FpdCBzaWduQW5kUHVibGlzaFR4KHR4RGF0YSlcbiAgICBhd2FpdCBmZXRjaERhdGEoKVxuICAgIHJldHVybiB0eFxufVxuZXhwb3J0IGNvbnN0IGFjY2VwdFB1cmNoYXNlID0gYXN5bmMgKHB1cmNoYXNlLCBzZXRTdGVwRG9uZSkgPT4ge1xuICAgIGNvbnNvbGUuZGVidWcocHVyY2hhc2UpXG4gICAgY29uc3QgeyBpZCwgdXNlciwgaXRlbSB9ID0gcHVyY2hhc2VcbiAgICBjb25zdCB7IHRpdGxlLCBzaG9ydERlc2NyaXB0aW9uIH0gPSBpdGVtXG5cbiAgICAvLyBjcmVhdGUgY291cG9uIChORlQpXG4gICAgY29uc3QgdHhHZW5Bc3NldERhdGEgPSB7XG4gICAgICAgIHR5cGU6IDMsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIG5hbWU6IHRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHNob3J0RGVzY3JpcHRpb24sXG4gICAgICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgICAgIHByZWNpc2lvbjogMCxcbiAgICAgICAgICAgIHJlaXNzdWFibGU6IGZhbHNlLFxuICAgICAgICAgICAgc2NyaXB0OiBgYmFzZTY0OiR7bmZ0U2NyaXB0fWAsXG4gICAgICAgICAgICBmZWU6IHtcbiAgICAgICAgICAgICAgICB0b2tlbnM6ICcwLjAwMScsXG4gICAgICAgICAgICAgICAgYXNzZXRJZDogJ1dBVkVTJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuICAgIGNvbnN0IHN0eDEgPSBhd2FpdCBzaWduVHgodHhHZW5Bc3NldERhdGEpXG4gICAgY29uc3QgYXNzZXRJZCA9IHN0eDEuaWRcblxuICAgIC8vIGFjY2VwdCBwdXJjaGFzZSBhbmQgdHJhbnNmZXIgY291cG9uXG4gICAgY29uc3QgdHhBY2NlcHREYXRhID0ge1xuICAgICAgICB0eXBlOiAxNixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZEFwcDogREFQUF9BRERSRVNTLFxuICAgICAgICAgICAgY2FsbDoge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uOiAnYWNjZXB0UHVyY2hhc2UnLFxuICAgICAgICAgICAgICAgIGFyZ3M6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYCR7aWR9YCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYXNzZXRJZCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBheW1lbnQ6IFtdLFxuICAgICAgICAgICAgZmVlOiB7XG4gICAgICAgICAgICAgICAgdG9rZW5zOiAnMC4wMDUnLFxuICAgICAgICAgICAgICAgIGFzc2V0SWQ6ICdXQVZFUycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH1cblxuICAgIGNvbnN0IHN0eDIgPSBhd2FpdCBzaWduVHgodHhBY2NlcHREYXRhKVxuXG4gICAgLy8gYWNjZXB0IHB1cmNoYXNlIGFuZCB0cmFuc2ZlciBjb3Vwb25cbiAgICBjb25zdCB0eFRyYW5zZmVyRGF0YSA9IHtcbiAgICAgICAgdHlwZTogNCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYW1vdW50OiB7XG4gICAgICAgICAgICAgICAgdG9rZW5zOiAnMScsXG4gICAgICAgICAgICAgICAgYXNzZXRJZDogYCR7YXNzZXRJZH1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZlZToge1xuICAgICAgICAgICAgICAgIHRva2VuczogJzAuMDA1JyxcbiAgICAgICAgICAgICAgICBhc3NldElkOiAnV0FWRVMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlY2lwaWVudDogdXNlcixcbiAgICAgICAgfSxcbiAgICB9XG5cbiAgICBpZiAoc2V0U3RlcERvbmUpIHNldFN0ZXBEb25lKDEpXG4gICAgY29uc3QgcmVzID0gYXdhaXQgUHJvbWlzZS5hbGwoW3B1Ymxpc2hUeChzdHgxKSwgcHVibGlzaFR4KHN0eDIpXSlcblxuICAgIGlmIChzZXRTdGVwRG9uZSkgc2V0U3RlcERvbmUoMilcbiAgICBjb25zdCBzdHgzID0gYXdhaXQgc2lnblR4KHR4VHJhbnNmZXJEYXRhKVxuICAgIGNvbnN0IHJlczMgPSBhd2FpdCBwdWJsaXNoVHgoc3R4MylcbiAgICBhd2FpdCBmZXRjaERhdGEoKVxuICAgIHJldHVybiBbLi4ucmVzLCByZXMzXVxufVxuXG5leHBvcnQgY29uc3QgYnVybkNvdXBvbiA9IGFzeW5jIChwdXJjaGFzZSkgPT4ge1xuICAgIGNvbnN0IHsgYXNzZXRJZCB9ID0gcHVyY2hhc2VcbiAgICBjb25zdCB0eERhdGEgPSB7XG4gICAgICAgIHR5cGU6IDE2LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkQXBwOiBEQVBQX0FERFJFU1MsXG4gICAgICAgICAgICBjYWxsOiB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb246ICdidXJuJyxcbiAgICAgICAgICAgICAgICBhcmdzOiBbXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXltZW50OiBbXG4gICAgICAgICAgICAgICAgeyB0b2tlbnM6ICcxJywgYXNzZXRJZCB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZlZToge1xuICAgICAgICAgICAgICAgIHRva2VuczogJzAuMDA1JyxcbiAgICAgICAgICAgICAgICBhc3NldElkOiAnV0FWRVMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG4gICAgY29uc3QgdHggPSBhd2FpdCBzaWduQW5kUHVibGlzaFR4KHR4RGF0YSlcbiAgICBhd2FpdCBmZXRjaERhdGEoKVxuICAgIHJldHVybiB0eFxufVxuXG5leHBvcnQgY29uc3Qgd2l0aGRyYXdGdW5kcyA9IGFzeW5jIChwdXJjaGFzZSkgPT4ge1xuICAgIGNvbnN0IHsgYXNzZXRJZCB9ID0gcHVyY2hhc2VcbiAgICBjb25zdCB0eERhdGEgPSB7XG4gICAgICAgIHR5cGU6IDE2LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkQXBwOiBEQVBQX0FERFJFU1MsXG4gICAgICAgICAgICBjYWxsOiB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb246ICd3aXRoZHJhdycsXG4gICAgICAgICAgICAgICAgYXJnczogW1xuICAgICAgICAgICAgICAgICAgICB7IHR5cGU6ICdzdHJpbmcnLCB2YWx1ZTogYXNzZXRJZCB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF5bWVudDogW10sXG4gICAgICAgICAgICBmZWU6IHtcbiAgICAgICAgICAgICAgICB0b2tlbnM6ICcwLjAwNScsXG4gICAgICAgICAgICAgICAgYXNzZXRJZDogJ1dBVkVTJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuICAgIGNvbnN0IHR4ID0gYXdhaXQgc2lnbkFuZFB1Ymxpc2hUeCh0eERhdGEpXG4gICAgYXdhaXQgZmV0Y2hEYXRhKClcbiAgICByZXR1cm4gdHhcbn1cblxuZXhwb3J0IGNvbnN0IGNvbW1pdFZvdGUgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgaXRlbSwgdm90ZSwgc2FsdCB9ID0gZGF0YVxuXG4gICAgY29uc3QgaGFzaCA9IGhhc2hWb3RlKGl0ZW0sIHZvdGUudG9Mb3dlckNhc2UoKSwgc2FsdClcbiAgICBjb25zdCB0eERhdGEgPSB7XG4gICAgICAgIHR5cGU6IDE2LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkQXBwOiBEQVBQX0FERFJFU1MsXG4gICAgICAgICAgICBjYWxsOiB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb246ICd2b3RlQ29tbWl0JyxcbiAgICAgICAgICAgICAgICBhcmdzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgdHlwZTogJ3N0cmluZycsIHZhbHVlOiBpdGVtIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgdHlwZTogJ3N0cmluZycsIHZhbHVlOiBoYXNoIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXltZW50OiBbXSxcbiAgICAgICAgICAgIGZlZToge1xuICAgICAgICAgICAgICAgIHRva2VuczogJzAuMDA1JyxcbiAgICAgICAgICAgICAgICBhc3NldElkOiAnV0FWRVMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG4gICAgY29uc3QgdHggPSBhd2FpdCBzaWduQW5kUHVibGlzaFR4KHR4RGF0YSlcbiAgICBhd2FpdCBmZXRjaERhdGEoKVxuICAgIHJldHVybiB0eFxufVxuXG5cbmV4cG9ydCBjb25zdCByZXZlYWxWb3RlID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICBjb25zdCB7IGl0ZW0sIHNhbHQsIGNvbW1pdCB9ID0gZGF0YVxuXG4gICAgY29uc3QgaGFzaCA9IGhhc2hWb3RlKGl0ZW0sICdkZWxpc3RlZCcsIHNhbHQpXG4gICAgLy8gYWxlcnQoaGFzaCArICcgPT09ICcgKyBjb21taXQpXG4gICAgY29uc3Qgdm90ZSA9IGhhc2ggPT09IGNvbW1pdCA/ICdkZWxpc3RlZCcgOiAnZmVhdHVyZWQnXG5cbiAgICBjb25zdCB0eERhdGEgPSB7XG4gICAgICAgIHR5cGU6IDE2LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkQXBwOiBEQVBQX0FERFJFU1MsXG4gICAgICAgICAgICBjYWxsOiB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb246ICd2b3RlUmV2ZWFsJyxcbiAgICAgICAgICAgICAgICBhcmdzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgdHlwZTogJ3N0cmluZycsIHZhbHVlOiBpdGVtIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgdHlwZTogJ3N0cmluZycsIHZhbHVlOiB2b3RlIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgdHlwZTogJ3N0cmluZycsIHZhbHVlOiBzYWx0IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXltZW50OiBbXSxcbiAgICAgICAgICAgIGZlZToge1xuICAgICAgICAgICAgICAgIHRva2VuczogJzAuMDA1JyxcbiAgICAgICAgICAgICAgICBhc3NldElkOiAnV0FWRVMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG4gICAgY29uc3QgdHggPSBhd2FpdCBzaWduQW5kUHVibGlzaFR4KHR4RGF0YSlcbiAgICBhd2FpdCBmZXRjaERhdGEoKVxuICAgIHJldHVybiB0eFxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9kQXBwJ1xuZXhwb3J0ICogZnJvbSAnLi93dC10cmFuc2FjdGlvbnMnXG5leHBvcnQgKiBmcm9tICcuL2hlbHBlcidcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgVXNlckljb24gfSBmcm9tICcuLi9sYXlvdXQvaGVhZGVyLWNvbnRyb2xzJ1xuaW1wb3J0IHsgY29ubmVjdCwgZGlzY29ubmVjdCwgc2hvcnRBZGRyZXNzIH0gZnJvbSAnLi4vLi4vbGlicy9kQXBwJ1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vc2hhcmVkJ1xuXG5jb25zdCBCVExvZ2luID0gKHsgYWNjb3VudCwgc2V0QWN0aXZlVXJsIH0pID0+IChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHthY2NvdW50Py5pc0Nvbm5lY3RlZFxuICAgICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkxvZ291dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmtcIiBvbkNsaWNrPXsoKSA9PiB7IHNldEFjdGl2ZVVybCgnI215JykgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNteVwiIGNsYXNzTmFtZT1cInRleHQtbGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogJy0zcHgnLCBsZWZ0OiAnLTRweCcgfX0+PFVzZXJJY29uIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudC5uYW1lIHx8IGAgJHtzaG9ydEFkZHJlc3MoYWNjb3VudC5hZGRyZXNzKX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17ZGlzY29ubmVjdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtjb25uZWN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEJUTG9naW5cbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNZWRpYVF1ZXJ5IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUnXG5cbmltcG9ydCAqIGFzIENvbnRyb2xzIGZyb20gJy4vaGVhZGVyLWNvbnRyb2xzJ1xuaW1wb3J0IEhhbWJ1cmdlciBmcm9tICcuL0hhbWJ1cmdlcidcblxuaW1wb3J0IHsgRmxleCwgQm94IH0gZnJvbSAnLi4vc2hhcmVkJ1xuaW1wb3J0IEJUTG9naW4gZnJvbSAnLi4vY3VzdG9tL2J0TG9naW4nXG5cbmNvbnN0IG1lbnVJbmRlbnQgPSB7XG4gICAgMDogJzE2cHgnLFxuICAgIHhsOiAnNDZweCcsXG59XG5cbmNvbnN0IERlc2t0b3BIZWFkZXIgPSAoe1xuICAgIGFjY291bnQsXG4gICAgbGlua3MsXG4gICAgYWN0aXZlVXJsLFxuICAgIHNldEFjdGl2ZVVybCxcbiAgICB1c2VyTGlua3MsXG4gICAgdGFibGV0UmVzb2x1dGlvbixcbiAgICBtb2JpbGVSZXNvbHV0aW9uLFxuICAgIGNoYW5nZU1vYmlsZU1lbnVTdGF0ZSxcbiAgICBtZW51T3BlbmVkLFxuICAgIG9uQ3JlYXRlQ291cG9uLFxufSkgPT4ge1xuICAgIGNvbnN0IG9uTWVudUNsaWNrID0gdXNlQ2FsbGJhY2soKCkgPT4gY2hhbmdlTW9iaWxlTWVudVN0YXRlKCFtZW51T3BlbmVkKSwgW21lbnVPcGVuZWRdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TWVkaWFRdWVyeSBtYXhXaWR0aD17dGFibGV0UmVzb2x1dGlvbn0+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBwcj1cIjIycHhcIlxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgdG9wPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbTogJzRweCcsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SGFtYnVyZ2VyIGJnPVwiYmx1ZS4wXCIgaGVpZ2h0PVwiMTAwJVwiIG9uQ2xpY2s9e29uTWVudUNsaWNrfSAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9NZWRpYVF1ZXJ5PlxuICAgICAgICAgICAgPE1lZGlhUXVlcnkgbWluV2lkdGg9e21vYmlsZVJlc29sdXRpb259PlxuICAgICAgICAgICAgICAgIDxDb250cm9scy5Mb2dvIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGlzQWN0aXZlIC8+XG4gICAgICAgICAgICA8L01lZGlhUXVlcnk+XG4gICAgICAgICAgICA8RmxleCBmbGV4PXsxfSBqdXN0aWZ5Q29udGVudD17eyAwOiAnZmxleC1lbmQnLCBsZzogJ2NlbnRlcicgfX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICAgICAgICA8TWVkaWFRdWVyeSBtaW5XaWR0aD17dGFibGV0UmVzb2x1dGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlua3MuZmlsdGVyKCh7IGlzRW5hYmxlZCB9KSA9PiB0eXBlb2YgaXNFbmFibGVkICE9PSAnZnVuY3Rpb24nIHx8IGlzRW5hYmxlZChhY2NvdW50KSkubWFwKCh7IHVybCwgdGl0bGUgfSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGtleT17dXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBhcz1cInNwYW5cIiBwbD17aW5kZXggIT09IDAgJiYgbWVudUluZGVudH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt1cmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5NZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZVVybD8uaW5kZXhPZih1cmwpID49IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVVybCh1cmwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udHJvbHMuTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvTWVkaWFRdWVyeT5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAge3VzZXJMaW5rcy5maWx0ZXIoKHsgaXNFbmFibGVkIH0pID0+IHR5cGVvZiBpc0VuYWJsZWQgIT09ICdmdW5jdGlvbicgfHwgaXNFbmFibGVkKGFjY291bnQpKS5tYXAoKHsgdXJsLCB0aXRsZSB9LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Qm94IGtleT17dXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e3VybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ICE9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjFweFwiIGFzPVwic3BhblwiIG14PVwiNnB4XCIgaGVpZ2h0PVwiMTNweFwiIGJnPVwiZ3JheS4yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5NZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVVcmw/LmluZGV4T2YodXJsKSA+PSAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVXJsKHVybCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250cm9scy5NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8TWVkaWFRdWVyeSBtaW5XaWR0aD17bW9iaWxlUmVzb2x1dGlvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50Py5pc1N1cHBsaWVyID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggYXM9XCJzcGFuXCIgY2xhc3NOYW1lPVwibXgtMiB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5BZGRDb3Vwb25JY29uIG9uQ2xpY2s9e29uQ3JlYXRlQ291cG9ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBhcz1cInNwYW5cIiBjbGFzc05hbWU9XCJteC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3N1cHBsaWVyL2FwcHJvdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuTWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVXJsKCcjc3VwcGxpZXIvYXBwcm92ZScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5TaG9wSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IChhY2NvdW50Py5zdXBwbGllcj8uYXBwcm92YWxDb3VudGVyID4gMCkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIiB0b3A9XCItMTBweFwiIGxlZnQ9XCItNnB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLlJvdW5kTWFya0ljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRyb2xzLk1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwibWwtMiBtci0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuU2VhcmNoSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L01lZGlhUXVlcnk+XG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QlRMb2dpbiBhY2NvdW50PXthY2NvdW50fSBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db250cm9scy5NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERlc2t0b3BIZWFkZXJcbiIsImltcG9ydCB7IEFkZENvdXBvbkljb24gfSBmcm9tICcuL2hlYWRlci1jb250cm9scydcblxuZXhwb3J0IGNvbnN0IGhlYWRlckxpbmtzID0gW1xuICAgIHtcbiAgICAgICAgdXJsOiAnI2ZlYXR1cmVkJyxcbiAgICAgICAgdGl0bGU6ICdGZWF0dXJlZCcsXG4gICAgICAgIGlzRW5hYmxlZDogKCkgPT4gdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdXJsOiAnI21hcmtldCcsXG4gICAgICAgIHRpdGxlOiAnTWFya2V0JyxcbiAgICAgICAgaXNFbmFibGVkOiAoKSA9PiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdXJsOiAnI215JyxcbiAgICAgICAgdGl0bGU6ICdNeSBDb3Vwb25zJyxcbiAgICAgICAgaXNFbmFibGVkOiAoKSA9PiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgICB1cmw6ICcjc3VwcGxpZXInLFxuICAgICAgICB0aXRsZTogJ1N1cHBsaWVyJyxcbiAgICAgICAgaXNFbmFibGVkOiAoKSA9PiB0cnVlLFxuICAgIH0sXG5dXG5cbmV4cG9ydCBjb25zdCB1c2VyTGlua3MgPSBbXVxuXG5leHBvcnQgY29uc3QgY29tcGFueUxpbmtzID0gW1xuICAgIHtcbiAgICAgICAgdXJsOiAnI2NvbXBhbnkxJyxcbiAgICAgICAgdGl0bGU6ICdBYm91dCcsXG4gICAgICAgIGlzRW5hYmxlZDogKCkgPT4gdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdXJsOiAnI2NvbXBhbnkyJyxcbiAgICAgICAgdGl0bGU6ICdCbG9nJyxcbiAgICAgICAgaXNFbmFibGVkOiAoKSA9PiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgICB1cmw6ICcjY29tcGFueTMnLFxuICAgICAgICB0aXRsZTogJ1ByZXNzJyxcbiAgICAgICAgaXNFbmFibGVkOiAoKSA9PiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgICB1cmw6ICcjY29tcGFueTQnLFxuICAgICAgICB0aXRsZTogJ0ludmVzdG9yIFJlbGF0aW9ucycsXG4gICAgICAgIGlzRW5hYmxlZDogKCkgPT4gdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdXJsOiAnI2NvbXBhbnk1JyxcbiAgICAgICAgdGl0bGU6ICdNYW5hZ2VtZW50IFRlYW0nLFxuICAgICAgICBpc0VuYWJsZWQ6ICgpID0+IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogJyNjb21wYW55NicsXG4gICAgICAgIHRpdGxlOiAnSW4gWW91ciBDb21tdW5pdHknLFxuICAgICAgICBpc0VuYWJsZWQ6ICgpID0+IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogJyNtYWluMycsXG4gICAgICAgIHRpdGxlOiAnQ29udGFjdHMnLFxuICAgICAgICBpc0VuYWJsZWQ6ICgpID0+IHRydWUsXG4gICAgfSxcbl1cblxuZXhwb3J0IGNvbnN0IHN1cHBsaWVyTGlua3MgPSBbXG4gICAge1xuICAgICAgICB1cmw6ICcjc3VwcGxpZXInLFxuICAgICAgICB0aXRsZTogJ1JlZ2lzdGVyIGFzIFN1cHBsaWVyJyxcbiAgICAgICAgaXNFbmFibGVkOiBlID0+ICFlLmlzU3VwcGxpZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogJyNzdXBwbGllci9tYW5hZ2UnLFxuICAgICAgICB0aXRsZTogJ01hbmFnZSBDb3Vwb25zJyxcbiAgICAgICAgaXNFbmFibGVkOiBlID0+IGUuaXNTdXBwbGllcixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdXJsOiAnI3N1cHBsaWVyL3dpdGhkcmF3JyxcbiAgICAgICAgdGl0bGU6ICdXaXRoZHJhdyBGdW5kcycsXG4gICAgICAgIGlzRW5hYmxlZDogZSA9PiBlLmlzU3VwcGxpZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogJyNzdXBwbGllci9oaXN0b3J5JyxcbiAgICAgICAgdGl0bGU6ICdTYWxlcyBIaXN0b3J5JyxcbiAgICAgICAgaXNFbmFibGVkOiBlID0+IGUuaXNTdXBwbGllcixcbiAgICB9LFxuXVxuXG5leHBvcnQgY29uc3QgbXlMaW5rcyA9IFtcbiAgICB7XG4gICAgICAgIHVybDogJyNteS9jb3Vwb25zJyxcbiAgICAgICAgdGl0bGU6ICdVc2UgeW91ciBjb3Vwb25zJyxcbiAgICAgICAgaXNFbmFibGVkOiAoKSA9PiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgICB1cmw6ICcjbXkvdXNlZCcsXG4gICAgICAgIHRpdGxlOiAnU2VlIHlvdXIgdXNlZCBjb3Vwb25zJyxcbiAgICAgICAgaXNFbmFibGVkOiAoKSA9PiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgICB1cmw6ICcjbXkvZXhwaXJlZCcsXG4gICAgICAgIHRpdGxlOiAnU2VlIHlvdXIgZXhwaXJlZCBDb3Vwb25zJyxcbiAgICAgICAgaXNFbmFibGVkOiAoKSA9PiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgICB1cmw6ICcjbXkvcHVyY2hhc2VzJyxcbiAgICAgICAgdGl0bGU6ICdQdXJjaGFzZXMgSGlzdG9yeScsXG4gICAgICAgIGlzRW5hYmxlZDogKCkgPT4gdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdXJsOiAnI3JlZnVuZCcsXG4gICAgICAgIHRpdGxlOiAnUmVmdW5kIFBvbGljaWVzJyxcbiAgICAgICAgaXNFbmFibGVkOiAoKSA9PiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgICB1cmw6ICcjZmFxJyxcbiAgICAgICAgdGl0bGU6ICdGQVEnLFxuICAgICAgICBpc0VuYWJsZWQ6ICgpID0+IHRydWUsXG4gICAgfSxcbl1cblxuZXhwb3J0IGNvbnN0IG1haW5MaW5rcyA9IFtcbiAgICB7XG4gICAgICAgIHVybDogJyNmZWF0dXJlZCcsXG4gICAgICAgIHRpdGxlOiAnRmVhdHVyZWQgIENvdXBvbnMnLFxuICAgICAgICBpc0VuYWJsZWQ6ICgpID0+IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogJyNkZWxpc3RlZCcsXG4gICAgICAgIHRpdGxlOiAnRGVsaXN0ZWQgIENvdXBvbnMnLFxuICAgICAgICBpc0VuYWJsZWQ6ICgpID0+IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogJyNleHBpcmVkJyxcbiAgICAgICAgdGl0bGU6ICdFeHBpcmVkIENvdXBvbnMnLFxuICAgICAgICBpc0VuYWJsZWQ6ICgpID0+IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogJyNtaWxlcycsXG4gICAgICAgIHRpdGxlOiAnTWlsZXMgJiBQb2ludHMnLFxuICAgICAgICBpc0VuYWJsZWQ6ICgpID0+IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogJyNzdXBwb3J0JyxcbiAgICAgICAgdGl0bGU6ICdDdXN0b21lciBTdXBwb3J0JyxcbiAgICAgICAgaXNFbmFibGVkOiAoKSA9PiB0cnVlLFxuICAgIH0sXG5dXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgKiBhcyBDb250cm9scyBmcm9tICcuL2hlYWRlci1jb250cm9scyc7XG5cbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmNvbnN0IFlFQVIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5cbmNvbnN0IExvZ29Db3B5cmlnaHQgPSAoeyBzaXplIH0pID0+IChcbiAgICA8Qm94PlxuICAgICAgICA8Q29udHJvbHMuTG9nbyBpc0FjdGl2ZSBzaXplPXtzaXplfSAvPlxuICAgICAgICA8VGV4dCBhcz1cInNwYW5cIiBjb2xvcj1cImdyYXkuMlwiIGZvbnRTaXplPVwiMTJweFwiIHB0PVwiMTBweFwiPlxuICAgICAgICAgICAgwqlcbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICB7WUVBUn1cbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICBHcm91cG9uLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbiAgICAgICAgPC9UZXh0PlxuICAgIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nb0NvcHlyaWdodDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEZhY2Vib29rID0gcHJvcHMgPT4gKFxuICAgIDxzdmcgd2lkdGg9XCIyOFwiIGhlaWdodD1cIjI4XCIgdmlld0JveD1cIjAgMCAyOCAyOFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHsuLi5wcm9wc30+XG4gICAgICAgIDxnIGlkPVwiZmFjZWJvb2sgY29weVwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBpZD1cIk92YWxcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjkwMDQgMjcuODAwOEMyMS41Nzc0IDI3LjgwMDggMjcuODAwOCAyMS41Nzc0IDI3LjgwMDggMTMuOTAwNEMyNy44MDA4IDYuMjIzNDIgMjEuNTc3NCAwIDEzLjkwMDQgMEM2LjIyMzQyIDAgMCA2LjIyMzQyIDAgMTMuOTAwNEMwIDIxLjU3NzQgNi4yMjM0MiAyNy44MDA4IDEzLjkwMDQgMjcuODAwOFpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjM0I1OTk4XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGlkPVwiUGF0aFwiXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMTcuNDM1MiAxMy4zNjJIMTUuMjUxNVYyMS4zNjIzSDExLjk0MjlWMTMuMzYySDEwLjM2OTRWMTAuNTUwNEgxMS45NDI5VjguNzMxMDJDMTEuOTQyOSA3LjQyOTk0IDEyLjU2MSA1LjM5MjU4IDE1LjI4MSA1LjM5MjU4TDE3LjczMTcgNS40MDI4M1Y4LjEzMTk3SDE1Ljk1MzVDMTUuNjYxOSA4LjEzMTk3IDE1LjI1MTcgOC4yNzc2OSAxNS4yNTE3IDguODk4MzVWMTAuNTUzMUgxNy43MjQzTDE3LjQzNTIgMTMuMzYyWlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2Vib29rO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTGlua2VkaW4gPSBwcm9wcyA9PiAoXG4gICAgPHN2ZyB3aWR0aD1cIjI4XCIgaGVpZ2h0PVwiMjhcIiB2aWV3Qm94PVwiMCAwIDI4IDI4XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgey4uLnByb3BzfT5cbiAgICAgICAgPGcgaWQ9XCJsaW5rZWRpbiBjb3B5XCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGlkPVwiUGF0aFwiXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuOTY3MyAwQzIxLjY4MTcgMCAyNy45MzQ3IDYuMjUzODggMjcuOTM0NyAxMy45Njc0QzI3LjkzNDcgMjEuNjgwOSAyMS42ODE3IDI3LjkzNDcgMTMuOTY3MyAyNy45MzQ3QzYuMjUyOTIgMjcuOTM0NyAwIDIxLjY4MDggMCAxMy45Njc0QzAgNi4yNTM5NyA2LjI1MzAxIDAgMTMuOTY3MyAwWlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMwRTc2QThcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgaWQ9XCJTaGFwZVwiXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMTAuNDc1NiA4LjI5MzAzQzEwLjQ3NTYgOS4wMTU4NSA5Ljg4ODk5IDkuNjAyNTEgOS4xNjYxNyA5LjYwMjUxQzguNDQzMzUgOS42MDI1MSA3Ljg1NjY5IDkuMDE1OTQgNy44NTY2OSA4LjI5MzEyQzcuODU2NjkgNy41NzAzIDguNDQzMzUgNi45ODM2NCA5LjE2NjE3IDYuOTgzNjRDOS44ODg5OSA2Ljk4MzY0IDEwLjQ3NTYgNy41NzAyIDEwLjQ3NTYgOC4yOTMwM1pNMTguMDU5OSAxMC4xNzE3QzE2Ljc5MDYgMTAuMTcxNyAxNS42NTQ5IDEwLjYzNTIgMTQuODQ5MiAxMS42NTg0VjEwLjQ0NUgxMi4yMjQyVjE5LjE5MTJIMTQuODQ5MlYxNC40NjE1QzE0Ljg0OTIgMTMuNDYxOSAxNS43NjUgMTIuNDg2OCAxNi45MTIgMTIuNDg2OEMxOC4wNTkgMTIuNDg2OCAxOC4zNDE5IDEzLjQ2MTkgMTguMzQxOSAxNC40MzdWMTkuMTkwM0gyMC45NTczVjE0LjI0MjRDMjAuOTU3MiAxMC44MDU1IDE5LjMzMDEgMTAuMTcxNyAxOC4wNTk5IDEwLjE3MTdaTTcuODcwNjkgMTkuMTkxMUgxMC40ODYxVjEwLjQ3MzdINy44NzA2OVYxOS4xOTExWlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtlZGluO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVGVsZWdyYW0gPSBwcm9wcyA9PiAoXG4gICAgPHN2Z1xuICAgICAgICB3aWR0aD1cIjI4XCJcbiAgICAgICAgaGVpZ2h0PVwiMjhcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI4IDI4XCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgICAgPGcgaWQ9XCJ0ZWxlZ3JhbSBjb3B5XCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGlkPVwiT3ZhbFwiXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMTMuOTk5OCAyNy45OTk3QzIxLjczMTcgMjcuOTk5NyAyNy45OTk3IDIxLjczMTcgMjcuOTk5NyAxMy45OTk4QzI3Ljk5OTcgNi4yNjc5NCAyMS43MzE3IDAgMTMuOTk5OCAwQzYuMjY3OTQgMCAwIDYuMjY3OTQgMCAxMy45OTk4QzAgMjEuNzMxNyA2LjI2Nzk0IDI3Ljk5OTcgMTMuOTk5OCAyNy45OTk3WlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM0MUI0RTZcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgaWQ9XCJQYXRoXCJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0xMi42NDA0IDE2LjAzOTdMMTguOTY3MyAyMC44MTY1TDIyLjE2MSA3LjE4MzU5TDUuODM5MTEgMTMuNjAzOUwxMC44MDU3IDE1LjI0ODlMMTkuODY5NyA5LjE2ODk3TDEyLjY0MDQgMTYuMDM5N1pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBpZD1cIlBhdGhfMlwiXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMTAuODA1NyAxNS4yNDg5TDEyLjE2NTkgMjAuMTQzNkwxMi42NDA0IDE2LjAzOTdMMTkuODY5NyA5LjE2ODk1TDEwLjgwNTcgMTUuMjQ4OVpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRDJEMkQ3XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGlkPVwiUGF0aF8zXCJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0xNC42OTY1IDE3LjU5MjFMMTIuMTY1OCAyMC4xNDM2TDEyLjY0MDMgMTYuMDM5N0wxNC42OTY1IDE3LjU5MjFaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0I5QjlCRVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUZWxlZ3JhbTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFR3aXR0ZXIgPSBwcm9wcyA9PiAoXG4gICAgPHN2ZyB3aWR0aD1cIjI4XCIgaGVpZ2h0PVwiMjhcIiB2aWV3Qm94PVwiMCAwIDI4IDI4XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgey4uLnByb3BzfT5cbiAgICAgICAgPGcgaWQ9XCJHcm91cCAxNiBDb3B5XCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGlkPVwiT3ZhbFwiXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMTQgMjhDMjEuNzMyIDI4IDI4IDIxLjczMiAyOCAxNEMyOCA2LjI2ODAxIDIxLjczMiAwIDE0IDBDNi4yNjgwMSAwIDAgNi4yNjgwMSAwIDE0QzAgMjEuNzMyIDYuMjY4MDEgMjggMTQgMjhaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzAzQTlGNFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGcgaWQ9XCJpY29uczgtdHdpdHRlclwiPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMjIgOS40MTkxOEMyMS40NDgzIDkuNjYxNjQgMjAuODU1OSA5LjgyMzI4IDIwLjIzMSA5Ljg5OTI1QzIwLjg2NTcgOS41MjQyNSAyMS4zNTU1IDguOTI2MTkgMjEuNTg1IDguMjE5ODNDMjAuOTg5NCA4LjU2NzM1IDIwLjMzMDMgOC44MjExMiAxOS42MzA1IDguOTU1MjhDMTkuMDcwNiA4LjM2NTMgMTguMjcxNiA4IDE3LjM4NjIgOEMxNS42ODcyIDggMTQuMzA4OCA5LjM1NjE0IDE0LjMwODggMTEuMDI5MUMxNC4zMDg4IDExLjI2NTEgMTQuMzM2NCAxMS40OTYyIDE0LjM4ODUgMTEuNzE5M0MxMS44MzE4IDExLjU5MzIgOS41NjMyIDEwLjM4NTggOC4wNDY0NCA4LjU1MjhDNy43Nzk1NCA5LjAwMDU0IDcuNjI5ODEgOS41MjQyNSA3LjYyOTgxIDEwLjA3ODdDNy42Mjk4MSAxMS4xMjkzIDguMTcxNzUgMTIuMDU1NSA4Ljk5ODQ4IDEyLjYwMDJDOC40OTM5OCAxMi41ODU3IDguMDE4NzcgMTIuNDQ1IDcuNjAzNzggMTIuMjIyQzcuNjAzNzggMTIuMjMxNyA3LjYwMzc4IDEyLjI0NDYgNy42MDM3OCAxMi4yNTc1QzcuNjAzNzggMTMuNzI2OCA4LjY2NDg2IDE0Ljk1MDQgMTAuMDcxIDE1LjIzMDFDOS44MTM4MiAxNS4yOTk2IDkuNTQyMDQgMTUuMzM4NCA5LjI2MjEyIDE1LjMzODRDOS4wNjM1OCAxNS4zMzg0IDguODY5OTEgMTUuMzE1NyA4LjY4Mjc2IDE1LjI4MThDOS4wNzMzNCAxNi40ODI4IDEwLjIwOTMgMTcuMzYwNSAxMS41NTY4IDE3LjM4NjNDMTAuNTAyMiAxOC4xOTc3IDkuMTc1ODcgMTguNjg0MyA3LjczMzk3IDE4LjY4NDNDNy40ODQ5NyAxOC42ODQzIDcuMjQwODYgMTguNjY5NyA3IDE4LjY0MDZDOC4zNjM3OCAxOS40OTczIDkuOTgxNDUgMjAgMTEuNzE3OSAyMEMxNy4zNzgxIDIwIDIwLjQ3NTEgMTUuMzgzNiAyMC40NzUxIDExLjM3ODJDMjAuNDc1MSAxMS4yNDczIDIwLjQ3MDIgMTEuMTE2NCAyMC40NjM3IDEwLjk4ODdDMjEuMDY3NSAxMC41NjM2IDIxLjU4ODMgMTAuMDMwMiAyMiA5LjQxOTE4WlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVHdpdHRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFdoYXRzQXBwID0gcHJvcHMgPT4gKFxuICAgIDxzdmcgd2lkdGg9XCIyOFwiIGhlaWdodD1cIjI4XCIgdmlld0JveD1cIjAgMCAyOCAyOFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHsuLi5wcm9wc30+XG4gICAgICAgIDxnIGlkPVwid2hhdHNhcHAgY29weVwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBpZD1cIlBhdGhcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTE0LjAwMzUgMEgxMy45OTY1QzYuMjc3MjUgMCAwIDYuMjc5IDAgMTRDMCAxNy4wNjI1IDAuOTg3IDE5LjkwMSAyLjY2NTI1IDIyLjIwNTdMMC45MjA1IDI3LjQwNjdMNi4zMDE3NSAyNS42ODY1QzguNTE1NSAyNy4xNTMgMTEuMTU2MiAyOCAxNC4wMDM1IDI4QzIxLjcyMjcgMjggMjggMjEuNzE5MiAyOCAxNEMyOCA2LjI4MDc1IDIxLjcyMjcgMCAxNC4wMDM1IDBaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzRDQUY1MFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBpZD1cIlBhdGhfMlwiXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMjIuMTQ5NyAxOS43Njk3QzIxLjgxMiAyMC43MjM0IDIwLjQ3MTUgMjEuNTE0NCAxOS40MDIyIDIxLjc0NTRDMTguNjcwNyAyMS45MDEyIDE3LjcxNTIgMjIuMDI1NCAxNC40OTg3IDIwLjY5MTlDMTAuMzg0NSAxOC45ODc0IDcuNzM0OTcgMTQuODA2NyA3LjUyODQ3IDE0LjUzNTRDNy4zMzA3MiAxNC4yNjQyIDUuODY1OTcgMTIuMzIxNyA1Ljg2NTk3IDEwLjMxMjdDNS44NjU5NyA4LjMwMzcgNi44ODYyMiA3LjMyNTQ1IDcuMjk3NDcgNi45MDU0NUM3LjYzNTIyIDYuNTYwNyA4LjE5MzQ3IDYuNDAzMiA4LjcyODk3IDYuNDAzMkM4LjkwMjIyIDYuNDAzMiA5LjA1Nzk3IDYuNDExOTUgOS4xOTc5NyA2LjQxODk1QzkuNjA5MjIgNi40MzY0NSA5LjgxNTcyIDYuNDYwOTUgMTAuMDg3IDcuMTEwMkMxMC40MjQ3IDcuOTIzOTUgMTEuMjQ3MiA5LjkzMjk1IDExLjM0NTIgMTAuMTM5NEMxMS40NDUgMTAuMzQ1OSAxMS41NDQ3IDEwLjYyNTkgMTEuNDA0NyAxMC44OTcyQzExLjI3MzUgMTEuMTc3MiAxMS4xNTggMTEuMzAxNCAxMC45NTE1IDExLjUzOTRDMTAuNzQ1IDExLjc3NzQgMTAuNTQ5IDExLjk1OTQgMTAuMzQyNSAxMi4yMTQ5QzEwLjE1MzUgMTIuNDM3MiA5LjkzOTk3IDEyLjY3NTIgMTAuMTc4IDEzLjA4NjRDMTAuNDE2IDEzLjQ4ODkgMTEuMjM4NSAxNC44MzEyIDEyLjQ0OTUgMTUuOTA5MkMxNC4wMTIyIDE3LjMwMDQgMTUuMjc5MiAxNy43NDQ5IDE1LjczMjUgMTcuOTMzOUMxNi4wNzAyIDE4LjA3MzkgMTYuNDcyNyAxOC4wNDA3IDE2LjcxOTUgMTcuNzc4MkMxNy4wMzI3IDE3LjQ0MDQgMTcuNDE5NSAxNi44ODA0IDE3LjgxMzIgMTYuMzI5MkMxOC4wOTMyIDE1LjkzMzcgMTguNDQ2NyAxNS44ODQ3IDE4LjgxNzcgMTYuMDI0N0MxOS4xOTU3IDE2LjE1NTkgMjEuMTk2IDE3LjE0NDcgMjEuNjA3MiAxNy4zNDk0QzIyLjAxODUgMTcuNTU1OSAyMi4yODk3IDE3LjY1MzkgMjIuMzg5NSAxNy44MjcyQzIyLjQ4NzUgMTguMDAwNCAyMi40ODc1IDE4LjgxNDIgMjIuMTQ5NyAxOS43Njk3WlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGQUZBRkFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgV2hhdHNBcHA7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEZhY2Vib29rIH0gZnJvbSAnLi9GYWNlYm9vayc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExpbmtlZGluIH0gZnJvbSAnLi9MaW5rZWRpbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRlbGVncmFtIH0gZnJvbSAnLi9UZWxlZ3JhbSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFR3aXR0ZXIgfSBmcm9tICcuL1R3aXR0ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBXaGF0c2FwcCB9IGZyb20gJy4vV2hhdHNhcHAnO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICogYXMgSWNvbnMgZnJvbSAnLi9zb2NpYWwtaWNvbnMnO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5jb25zdCBTb2NpYWxCdXR0b25zID0gKCkgPT4gKFxuICAgIDw+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8SWNvbnMuRmFjZWJvb2sgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggcGw9XCIyMHB4XCI+XG4gICAgICAgICAgICA8SWNvbnMuVHdpdHRlciAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBwbD1cIjIwcHhcIj5cbiAgICAgICAgICAgIDxJY29ucy5XaGF0c2FwcCAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBwbD1cIjIwcHhcIj5cbiAgICAgICAgICAgIDxJY29ucy5MaW5rZWRpbiAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBwbD1cIjIwcHhcIj5cbiAgICAgICAgICAgIDxJY29ucy5UZWxlZ3JhbSAvPlxuICAgICAgICA8L0JveD5cbiAgICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNvY2lhbEJ1dHRvbnM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0ICogYXMgQ29udHJvbHMgZnJvbSAnLi9oZWFkZXItY29udHJvbHMnXG5pbXBvcnQgKiBhcyBMSU5LUyBmcm9tICcuL2xpbmtzJ1xuaW1wb3J0IExvZ29Db3B5cmlnaHQgZnJvbSAnLi9Mb2dvQ29weXJpZ2h0J1xuaW1wb3J0IFNvY2lhbEJ1dHRvbnMgZnJvbSAnLi9Tb2NpYWxCdXR0b25zJ1xuXG5pbXBvcnQgeyBCb3gsIEZsZXgsIFRleHQgfSBmcm9tICcuLi9zaGFyZWQnXG5cbmV4cG9ydCBjb25zdCBtZW51QW5pbWF0aW9uID0ge1xuICAgIGNsYXNzTmFtZXM6ICdtb2JpbGUtbWVudScsXG4gICAgdGltZW91dDogMzUwLFxufVxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoQm94KWBcbiAgICBsZWZ0OiAwcHg7XG4gICAgei1pbmRleDogMTA7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHN2ZyB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgJi4ke21lbnVBbmltYXRpb24uY2xhc3NOYW1lc30tZW50ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTYwMHB4KTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgJi4ke21lbnVBbmltYXRpb24uY2xhc3NOYW1lc30tZW50ZXItYWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAke21lbnVBbmltYXRpb24udGltZW91dH1tcyBlYXNlLW91dDtcbiAgICB9XG5cbiAgICAmLiR7bWVudUFuaW1hdGlvbi5jbGFzc05hbWVzfS1leGl0IHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgICYuJHttZW51QW5pbWF0aW9uLmNsYXNzTmFtZXN9LWV4aXQtYWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02MDBweCk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAke21lbnVBbmltYXRpb24udGltZW91dH1tcyBlYXNlLW91dDtcbiAgICB9XG5gXG5cbkNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgYmc6ICdncmF5LjAnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG59XG5cbmNvbnN0IHRleHRQcm9wcyA9IHtcbiAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIGxpbmVIZWlnaHQ6ICcxN3B4JyxcbiAgICBmb250V2VpZ2h0OiAnNjAwJyxcbn1cblxuY29uc3QgR3JvdXBMaW5rcyA9ICh7XG4gICAgYWNjb3VudCwgc2V0QWN0aXZlVXJsLCB0aXRsZSwgbGlua3MsIC4uLnJlc3Rcbn0pID0+IChcbiAgICA8Qm94IHsuLi5yZXN0fT5cbiAgICAgICAge3RpdGxlICYmIChcbiAgICAgICAgICAgIDxUZXh0IGxldHRlclNwYWNpbmc9XCIwLjY1NjI1cHhcIiB7Li4udGV4dFByb3BzfSBwYj1cIjE3cHhcIj5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgICB7bGlua3MuZmlsdGVyKCh7IGlzRW5hYmxlZCB9KSA9PiB0eXBlb2YgaXNFbmFibGVkICE9PSAnZnVuY3Rpb24nIHx8IGlzRW5hYmxlZChhY2NvdW50KSkubWFwKCh7IHVybCwgdGl0bGU6IGxpbmtUaXRsZSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPGEga2V5PXt1cmx9IGhyZWY9e3VybH0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiYmx1ZS4wXCIgey4uLnRleHRQcm9wc30gcGI9XCIxN3B4XCIgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVXJsKHVybCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2xpbmtUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxcHhcIiBiZz1cImdyYXkuM1wiIC8+XG4gICAgPC9Cb3g+XG4pXG5cbmNvbnN0IE1vYmlsZU1lbnUgPSAoe1xuICAgIGFjY291bnQsIHNldEFjdGl2ZVVybCwgb25DbG9zZSwgb25DcmVhdGVDb3Vwb24sIG1vYmlsZVJlc29sdXRpb24sIC4uLnJlc3Rcbn0pID0+IHtcbiAgICB1c2VFZmZlY3QoKCkgPT4gKCkgPT4gb25DbG9zZSgpLCBbXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyIHsuLi5yZXN0fT5cbiAgICAgICAgICAgIDxGbGV4IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICA8RmxleCBmbGV4PXsxfSBqdXN0aWZ5Q29udGVudD1cImZsZXgtbGVmdFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnQ/LmlzU3VwcGxpZXIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBhcz1cInNwYW5cIiBjbGFzc05hbWU9XCJteC0yIHRleHQtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLkFkZENvdXBvbkljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IG9uQ2xvc2UoKTsgb25DcmVhdGVDb3Vwb24oKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggYXM9XCJzcGFuXCIgY2xhc3NOYW1lPVwibXgtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNzdXBwbGllci9hcHByb3ZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLk1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVVybCgnI3N1cHBsaWVyL2FwcHJvdmUnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuU2hvcEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAoYWNjb3VudD8uc3VwcGxpZXI/LmFwcHJvdmFsQ291bnRlciA+IDApID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBwb3NpdGlvbj1cInJlbGF0aXZlXCIgdG9wPVwiLTEwcHhcIiBsZWZ0PVwiLTZweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5Sb3VuZE1hcmtJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250cm9scy5NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogJycgfVxuICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5DbG9zZUljb24gb25DbGljaz17b25DbG9zZX0gLz5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8R3JvdXBMaW5rcyBhY2NvdW50PXthY2NvdW50fSBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH0gbGlua3M9e0xJTktTLmhlYWRlckxpbmtzfSAvPlxuICAgICAgICAgICAgPEdyb3VwTGlua3MgYWNjb3VudD17YWNjb3VudH0gc2V0QWN0aXZlVXJsPXtzZXRBY3RpdmVVcmx9IHRpdGxlPVwiQ29tcGFueVwiIGxpbmtzPXtMSU5LUy5jb21wYW55TGlua3N9IHB0PVwiMjBweFwiIC8+XG4gICAgICAgICAgICA8R3JvdXBMaW5rcyBhY2NvdW50PXthY2NvdW50fSBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH0gdGl0bGU9XCJXb3JrIHdpdGggQ291cG9uIEJhemFhclwiIGxpbmtzPXtMSU5LUy5teUxpbmtzfSBwdD1cIjIwcHhcIiAvPlxuICAgICAgICAgICAgPEdyb3VwTGlua3MgYWNjb3VudD17YWNjb3VudH0gc2V0QWN0aXZlVXJsPXtzZXRBY3RpdmVVcmx9IHRpdGxlPVwiU3VwcGxpZXJcIiBsaW5rcz17TElOS1Muc3VwcGxpZXJMaW5rc30gcHQ9XCIyMHB4XCIgLz5cbiAgICAgICAgICAgIDxHcm91cExpbmtzIGFjY291bnQ9e2FjY291bnR9IHNldEFjdGl2ZVVybD17c2V0QWN0aXZlVXJsfSB0aXRsZT1cIk1haW5cIiBsaW5rcz17TElOS1MubWFpbkxpbmtzfSBwdD1cIjIwcHhcIiAvPlxuICAgICAgICAgICAgPEZsZXggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIHB5PVwiMjBweFwiPlxuICAgICAgICAgICAgICAgIDxCb3ggcGI9XCIyMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxMb2dvQ29weXJpZ2h0IHNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDxTb2NpYWxCdXR0b25zIC8+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU1lbnVcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCB7IEJveCB9IGZyb20gJy4uL3NoYXJlZCdcblxuZXhwb3J0IGNvbnN0IG92ZXJsYXlBbmltYXRpb24gPSB7XG4gICAgY2xhc3NOYW1lczogJ292ZXJsYXknLFxuICAgIHRpbWVvdXQ6IDM1MCxcbn1cblxuY29uc3QgT3ZlcmxheSA9ICh6SW5kZXggPSA5KSA9PiBzdHlsZWQoQm94KS5hdHRycyh7XG4gICAgYmc6ICdyZ2JhKDAsMCwwLC43NSknLFxuICAgIGJvdHRvbTogJzBweCcsXG4gICAgbGVmdDogJzBweCcsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgcmlnaHQ6ICcwcHgnLFxuICAgIHpJbmRleCxcbn0pYFxuICAgICYuJHtvdmVybGF5QW5pbWF0aW9uLmNsYXNzTmFtZXN9LWVudGVyIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgJi4ke292ZXJsYXlBbmltYXRpb24uY2xhc3NOYW1lc30tZW50ZXItYWN0aXZlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAke292ZXJsYXlBbmltYXRpb24udGltZW91dH1tcyBlYXNlLW91dDtcbiAgICB9XG5cbiAgICAmLiR7b3ZlcmxheUFuaW1hdGlvbi5jbGFzc05hbWVzfS1leGl0IHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgJi4ke292ZXJsYXlBbmltYXRpb24uY2xhc3NOYW1lc30tZXhpdC1hY3RpdmUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR7b3ZlcmxheUFuaW1hdGlvbi50aW1lb3V0fW1zIGVhc2Utb3V0O1xuICAgIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgT3ZlcmxheVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBIYW1idXJnZXIgfSBmcm9tICcuL0hhbWJ1cmdlcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVhZGVyTGluZSB9IGZyb20gJy4vSGVhZGVyTGluZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9iaWxlTWVudSwgbWVudUFuaW1hdGlvbiB9IGZyb20gJy4vTW9iaWxlTWVudSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgT3ZlcmxheSwgb3ZlcmxheUFuaW1hdGlvbiB9IGZyb20gJy4vT3ZlcmxheSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9nb0NvcHlyaWdodCB9IGZyb20gJy4vTG9nb0NvcHlyaWdodCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU29jaWFsQnV0dG9ucyB9IGZyb20gJy4vU29jaWFsQnV0dG9ucydcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3gnXG5cbmltcG9ydCB7IG92ZXJsYXlBbmltYXRpb24sIE92ZXJsYXkgfSBmcm9tICcuLi9sYXlvdXQnXG5cbmNvbnN0IHsgdGltZW91dCB9ID0gb3ZlcmxheUFuaW1hdGlvblxuXG5jb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpXG5cbmNvbnN0IHN0eWxlQ29udGFpbmVyID0gKHpJbmRleCA9IDE1KSA9PiBzdHlsZWQoQm94KWBcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogJHt6SW5kZXh9O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgdG9wOiAxMCU7XG4gICAgJi5tb2RhbC1lbnRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAmLm1vZGFsLWVudGVyLWFjdGl2ZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgJHt0aW1lb3V0fW1zIGVhc2Utb3V0O1xuICAgIH1cblxuICAgICYubW9kYWwtZXhpdCB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAmLm1vZGFsLWV4aXQtYWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAke3RpbWVvdXR9bXMgZWFzZS1vdXQ7XG4gICAgfVxuYFxuXG5jb25zdCBNb2RhbCA9ICh7XG4gICAgY2hpbGRyZW4sIG9wZW4sIG9uQ2xvc2UsIHpJbmRleCwgLi4ucmVzdFxufSkgPT4ge1xuICAgIHpJbmRleCA/Pz0gMTVcbiAgICBjb25zdCBDb250YWluZXIgPSBzdHlsZUNvbnRhaW5lcih6SW5kZXgpXG4gICAgY29uc3QgT3ZsID0gT3ZlcmxheSh6SW5kZXggLSAxKVxuICAgIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Q1NTVHJhbnNpdGlvbiBpbj17b3Blbn0gdGltZW91dD17dGltZW91dH0gY2xhc3NOYW1lcz1cIm1vZGFsXCIgdW5tb3VudE9uRXhpdD5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIHsuLi5yZXN0fT57Y2hpbGRyZW59PC9Db250YWluZXI+XG4gICAgICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICAgICAgICA8Q1NTVHJhbnNpdGlvbiBpbj17b3Blbn0gey4uLm92ZXJsYXlBbmltYXRpb259IHVubW91bnRPbkV4aXQ+XG4gICAgICAgICAgICAgICAgPE92bCB0b3A9XCIwcHhcIiBvbkNsaWNrPXtvbkNsb3NlfSAvPlxuICAgICAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgICA8Lz4sXG4gICAgICAgIG1vZGFsQ29udGFpbmVyLFxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHtcbiAgICBsaW5lSGVpZ2h0LCBmb250V2VpZ2h0LCBsZXR0ZXJTcGFjaW5nLCBjb21wb3NlLFxufSBmcm9tICdzdHlsZWQtc3lzdGVtJ1xuXG5pbXBvcnQgQm94IGZyb20gJy4vQm94J1xuXG5jb25zdCBlbmhhbmNlU3R5bGVkQ29tcG9uZW50ID0gY29tcG9zZShcbiAgICBsaW5lSGVpZ2h0LFxuICAgIGZvbnRXZWlnaHQsXG4gICAgbGV0dGVyU3BhY2luZyxcbilcbmNvbnN0IFRleHQgPSBzdHlsZWQoQm94KS5hdHRycyh7IGFzOiAnc3BhbicgfSlgXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgJHtlbmhhbmNlU3R5bGVkQ29tcG9uZW50fVxuYFxuXG5leHBvcnQgZGVmYXVsdCBUZXh0XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIEJhZGdlKHsgdGV4dCwgdHlwZSA9ICdzZWNvbmRhcnknLCBwID0gMiB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgYmFkZ2UgYmFkZ2UtJHt0eXBlfSAke3AgPiAwID8gYHAtJHtwfWAgOiAnJ31gfT5cbiAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICA8L3NwYW4+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWRnZVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBMb2FkaW5nKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktMyBweS0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItYm9yZGVyIHRleHQtcHJpbWFyeVwiIHJvbGU9XCJzdGF0dXNcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+Li4uPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBCb3ggfSBmcm9tICcuL0JveCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmxleCB9IGZyb20gJy4vRmxleCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kYWwgfSBmcm9tICcuL01vZGFsJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0IH0gZnJvbSAnLi9UZXh0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCYWRnZSB9IGZyb20gJy4vQmFkZ2UnXG5leHBvcnQgeyBkZWZhdWx0IGFzIExvYWRpbmcgfSBmcm9tICcuL0xvYWRpbmcnXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgU3RhciBmcm9tICcuL1N0YXInO1xuXG5pbXBvcnQgeyBGbGV4LCBCb3ggfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuXG5jb25zdCBzdGFycyA9IFsxLCAyLCAzLCA0LCA1XTtcblxuY29uc3QgUmF0aW5nID0gKHsgdmFsdWUsIGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCBjZWlsVmFsdWUgPSBNYXRoLmNlaWwodmFsdWUpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgIHtzdGFycy5tYXAoKHZhbCwgaW5kKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxCb3gga2V5PXt2YWx9IHBsPXtpbmQgIT09IDAgJiYgJzZweCd9IGFzPVwic3BhblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXIgYWN0aXZlPXt2YWwgPD0gY2VpbFZhbHVlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveCBhcz1cInNwYW5cIiBmb250U2l6ZT1cIjEycHhcIiBwbD1cIjhweFwiPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0ZsZXg+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhdGluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuY29uc3QgUHJpY2VTdHlsZWQgPSBzdHlsZWQoQm94KWBcbiAgICBwYWRkaW5nOiAwIDZweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNDM3NXB4O1xuYDtcblxuY29uc3QgUHJpY2UgPSAoeyBjaGlsZHJlbiwgaXNPbGQsIHRlcm0gfSkgPT4gKFxuICAgIDxQcmljZVN0eWxlZCBjb2xvcj17IWlzT2xkID8gJ2dyZWVuLjEnIDogdW5kZWZpbmVkfT5cbiAgICAgICAgPEJveCBhcz1cInNwYW5cIiBwcj1cIjJweFwiPlxuICAgICAgICAgICAge3Rlcm19XG4gICAgICAgIDwvQm94PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtpc09sZCAmJiAoXG4gICAgICAgICAgICA8Qm94IGJnPVwicmVkLjBcIiBwb3NpdGlvbj1cImFic29sdXRlXCIgdG9wPVwiNTAlXCIgbGVmdD1cIjBweFwiIHJpZ2h0PVwiMHB4XCIgaGVpZ2h0PVwiMXB4XCIgLz5cbiAgICAgICAgKX1cbiAgICA8L1ByaWNlU3R5bGVkPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpY2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbmNvbnN0IERpc2NvdW50U3R5bGVkID0gc3R5bGVkKEJveCkuYXR0cnMoe1xuICAgIGJnOiAnZ3JlZW4uMCcsXG59KWBcbiAgICB3aWR0aDogNDJweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBzcGFuIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC42NTYyNXB4O1xuICAgIH1cbmA7XG5cbmNvbnN0IERpc2NvdW50ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICAgIDxEaXNjb3VudFN0eWxlZD5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L0Rpc2NvdW50U3R5bGVkPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRGlzY291bnQ7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFJhdGluZyB9IGZyb20gJy4vUmF0aW5nJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJpY2UgfSBmcm9tICcuL1ByaWNlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGlzY291bnQgfSBmcm9tICcuL0Rpc2NvdW50JztcblxuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5lc0VsbGlwc2lzIGZyb20gJ3JlYWN0LWxpbmVzLWVsbGlwc2lzJ1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSAnbWVtb2l6ZS1vbmUnXG5cbmltcG9ydCB7IFJhdGluZywgUHJpY2UsIERpc2NvdW50IH0gZnJvbSAnLi9jb3Vwb24tY29udHJvbHMnXG5cbmltcG9ydCB7IEJveCwgRmxleCwgVGV4dCB9IGZyb20gJy4uL3NoYXJlZCdcbmltcG9ydCB7IGZvcm1hdE51bWJlciB9IGZyb20gJy4uLy4uL2xpYnMvZEFwcCdcblxuY29uc3QgaXNFbXB0eSA9IG1lbW9pemVPbmUodmFsID0+IHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PT0gMClcblxuY29uc3QgQ291cG9uID0gKHtcbiAgICBpc01hbmFnZUNvdXBvbnMsXG4gICAgbmFtZSxcbiAgICB0aXRsZSxcbiAgICBpbWFnZSxcbiAgICByYXRpbmcsXG4gICAgcmF0aW5ncyxcbiAgICBzaG9ydERlc2NyaXB0aW9uLFxuICAgIGxvbmdEZXNjcmlwdGlvbixcbiAgICBjb3Vwb25UZXJtLFxuICAgIHByaWNlVGVybSxcbiAgICBvbGRQcmljZSxcbiAgICBuZXdQcmljZSxcbiAgICBkaXNjb3VudCxcbiAgICBpc0V4cGlyZWQsXG4gICAgb25DbGljayxcbiAgICBjb3Vwb25QcmljZSxcbiAgICBleHBpcmF0aW9uRGF0ZSxcbiAgICAuLi5yZXN0XG59KSA9PiAoXG4gICAgPEJveCB3aWR0aD1cIjMwMHB4XCIgaGVpZ2h0PVwiMzAwcHhcIiBwb3NpdGlvbj1cInJlbGF0aXZlXCIgb25DbGljaz17b25DbGlja30gey4uLnJlc3R9PlxuICAgICAgICA8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMTdweFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2U/Lmxlbmd0aCA+IDAgPyBpbWFnZSA6ICdodHRwczovL2NkbjEuc2F2ZXBpY2UucnUvdXBsb2Fkcy8yMDE5LzYvNS8zZWFmMWY5OWEzMmY4MDQ1ODQ3YWM5ZjAyZWI4MTM0NC1mdWxsLnBuZyd9KWAsIGJhY2tncm91bmRTaXplOiAnY292ZXInIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgeyFpc0VtcHR5KGV4cGlyYXRpb25EYXRlKSAmJiAoXG4gICAgICAgICAgICAgICAgPEJveCBwb3NpdGlvbj1cImFic29sdXRlXCIgYm90dG9tPVwiMHB4XCIgbGVmdD1cIjBweFwiPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc0V4cGlyZWQgPyAoPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2Utd2FybmluZyBtbC0xXCI+ZXhwaXJlZDwvc3Bhbj4pIDogKDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWxpZ2h0XCI+e2BleHBpcmUgJHtleHBpcmF0aW9uRGF0ZX1gfTwvc3Bhbj4pIH1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshaXNFbXB0eShkaXNjb3VudCkgJiYgKFxuICAgICAgICAgICAgICAgIDxCb3ggcG9zaXRpb249XCJhYnNvbHV0ZVwiIHRvcD1cIjIwcHhcIiByaWdodD1cIjEwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgPERpc2NvdW50PntgJHtkaXNjb3VudH0lYH08L0Rpc2NvdW50PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggcHg9XCIyMHB4XCIgcHQ9XCIxMHB4XCI+XG4gICAgICAgICAgICB7IWlzRW1wdHkocmF0aW5nKSAmJiA8UmF0aW5nIHZhbHVlPXtyYXRpbmd9PntgJHtyYXRpbmd9ICgke3JhdGluZ3N9IHJhdGluZ3MpYH08L1JhdGluZz59XG4gICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc9XCIwLjQzNzVweFwiXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodD1cIjIycHhcIlxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICBwdD1cIjEwcHhcIlxuICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMTRweFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBsaW5lSGVpZ2h0PVwiMThweFwiIGZvbnRXZWlnaHQ9XCIyMDBcIiBwdD1cIjhweFwiIGZvbnRTaXplPVwiMTJweFwiPlxuICAgICAgICAgICAgICAgIDxMaW5lc0VsbGlwc2lzXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9e3Nob3J0RGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIG1heExpbmU9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgZWxsaXBzaXM9XCIuLi5cIlxuICAgICAgICAgICAgICAgICAgICB0cmltUmlnaHRcbiAgICAgICAgICAgICAgICAgICAgYmFzZWRPbj1cImxldHRlcnNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBsaW5lSGVpZ2h0PVwiMThweFwiIGZvbnRXZWlnaHQ9XCJub3JtYWxcIiBwdD1cIjhweFwiIGZvbnRTaXplPVwiMTJweFwiPlxuICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxGbGV4IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBib3R0b209XCIyMHB4XCIgd2lkdGg9XCIxMDAlXCIgcHI9XCI0MHB4XCI+XG4gICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJibHVlLjBcIlxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nPVwiMC40Mzc1cHhcIlxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PVwiMjJweFwiXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCIxNHB4XCJcbiAgICAgICAgICAgICAgICAgICAgZmxleD17MX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtgJHtmb3JtYXROdW1iZXIoY291cG9uUHJpY2UpfSAke2NvdXBvblRlcm19YH1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAge29sZFByaWNlICE9PSBuZXdQcmljZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxQcmljZSB0ZXJtPXtwcmljZVRlcm19IGlzT2xkPlxuICAgICAgICAgICAgICAgICAgICAgICAge29sZFByaWNlfVxuICAgICAgICAgICAgICAgICAgICA8L1ByaWNlPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPFByaWNlIHRlcm09e3ByaWNlVGVybX0+e25ld1ByaWNlfTwvUHJpY2U+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuKVxuXG5Db3Vwb24uZGVmYXVsdFByb3BzID0geyBwcmljZVRlcm06ICckJyB9XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oQ291cG9uKVxuIiwiaW1wb3J0IENvdXBvbiBmcm9tICcuL0NvdXBvbic7XG5cbmV4cG9ydCBkZWZhdWx0IENvdXBvbjtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIHVzZUFwcERpYWxvZ3MoKSB7XG4gICAgY29uc3QgW2RpYWxvZ09wZW5lZCwgY2hhbmdlRGlhbG9nU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3Jlc3VsdE9wZW5lZCwgY2hhbmdlUmVzdWx0U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3Jlc3VsdEJ1eU9wZW5lZCwgY2hhbmdlUmVzdWx0QnV5U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2Zvcm1PcGVuZWQsIGNoYW5nZUZvcm1TdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbc2VsZWN0ZWRJdGVtLCBzZWxlY3RJdGVtXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbZWRpdGVkSXRlbSwgc2VsZWN0RWRpdGVkSXRlbV0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW2VkaXRlZE9wdGlvbiwgc2VsZWN0RWRpdGVkT3B0aW9uXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbcmVzdWx0VGV4dCwgc2V0UmVzdWx0VGV4dF0gPSB1c2VTdGF0ZSgnJylcblxuICAgIGNvbnN0IFtcbiAgICAgICAgb25EaWFsb2dPcGVuLFxuICAgICAgICBvbkRpYWxvZ0Nsb3NlLFxuICAgICAgICBvblJlc3VsdE9wZW4sXG4gICAgICAgIG9uUmVzdWx0Q2xvc2UsXG4gICAgICAgIG9uUmVzdWx0QnV5T3BlbixcbiAgICAgICAgb25SZXN1bHRCdXlDbG9zZSxcbiAgICAgICAgb25Gb3JtT3BlbixcbiAgICAgICAgb25Gb3JtQ2xvc2UsXG4gICAgXSA9IHVzZU1lbW8oXG4gICAgICAgICgpID0+IFtcbiAgICAgICAgICAgIChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0SXRlbShpdGVtKVxuICAgICAgICAgICAgICAgIGNoYW5nZURpYWxvZ1N0YXRlKHRydWUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4gY2hhbmdlRGlhbG9nU3RhdGUoZmFsc2UpLFxuICAgICAgICAgICAgKHRleHQpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHRUZXh0KHRleHQpXG4gICAgICAgICAgICAgICAgY2hhbmdlUmVzdWx0U3RhdGUodHJ1ZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoKSA9PiBjaGFuZ2VSZXN1bHRTdGF0ZShmYWxzZSksXG4gICAgICAgICAgICAoKSA9PiBjaGFuZ2VSZXN1bHRCdXlTdGF0ZSh0cnVlKSxcbiAgICAgICAgICAgICgpID0+IGNoYW5nZVJlc3VsdEJ1eVN0YXRlKGZhbHNlKSxcbiAgICAgICAgICAgIChpdGVtID0gbnVsbCwgb3B0aW9uID0gbnVsbCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGVjdEVkaXRlZEl0ZW0oaXRlbSlcbiAgICAgICAgICAgICAgICBzZWxlY3RFZGl0ZWRPcHRpb24ob3B0aW9uKVxuICAgICAgICAgICAgICAgIGNoYW5nZUZvcm1TdGF0ZSh0cnVlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RFZGl0ZWRJdGVtKG51bGwpXG4gICAgICAgICAgICAgICAgc2VsZWN0RWRpdGVkT3B0aW9uKG51bGwpXG4gICAgICAgICAgICAgICAgY2hhbmdlRm9ybVN0YXRlKGZhbHNlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgW10sXG4gICAgKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0ZWRJdGVtLFxuICAgICAgICBlZGl0ZWRJdGVtLFxuICAgICAgICBlZGl0ZWRPcHRpb24sXG4gICAgICAgIGRpYWxvZzogW2RpYWxvZ09wZW5lZCwgb25EaWFsb2dPcGVuLCBvbkRpYWxvZ0Nsb3NlXSxcbiAgICAgICAgcmVzdWx0OiBbcmVzdWx0VGV4dCwgcmVzdWx0T3BlbmVkLCBvblJlc3VsdE9wZW4sIG9uUmVzdWx0Q2xvc2VdLFxuICAgICAgICByZXN1bHRCdXk6IFtyZXN1bHRCdXlPcGVuZWQsIG9uUmVzdWx0QnV5T3Blbiwgb25SZXN1bHRCdXlDbG9zZV0sXG4gICAgICAgIGZvcm06IFtmb3JtT3BlbmVkLCBvbkZvcm1PcGVuLCBvbkZvcm1DbG9zZV0sXG4gICAgICAgIHNlbGVjdEl0ZW0sXG4gICAgICAgIHNlbGVjdEVkaXRlZEl0ZW0sXG4gICAgICAgIHNlbGVjdEVkaXRlZE9wdGlvbixcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUFwcERpYWxvZ3NcbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRGlzcGF0Y2hlZEFjdGlvbnMoYWN0aW9ucykge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAgIGNvbnN0IGRpc3BhdGNoZWRBY3Rpb25zID0gdXNlTWVtbygoKSA9PiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucywgZGlzcGF0Y2gpLCBbXSk7XG4gICAgcmV0dXJuIGRpc3BhdGNoZWRBY3Rpb25zO1xufVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gdXNlU3VwcGxpZXJSZWdpc3RlckRpYWxvZ3MoKSB7XG4gICAgY29uc3QgW3Jlc3VsdFNST3BlbmVkLCBjaGFuZ2VSZXN1bHRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbZm9ybVNST3BlbmVkLCBjaGFuZ2VGb3JtU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgLy8gICAgY29uc3QgW3NlbGVjdGVkSXRlbSwgc2VsZWN0Q291cG9uXSA9IHVzZVN0YXRlKClcblxuICAgIGNvbnN0IFtcbiAgICAgICAgb25SZXN1bHRTUk9wZW4sXG4gICAgICAgIG9uUmVzdWx0U1JDbG9zZSxcbiAgICAgICAgb25Gb3JtU1JPcGVuZWQsXG4gICAgICAgIG9uRm9ybVNSQ2xvc2UsXG4gICAgXSA9IHVzZU1lbW8oXG4gICAgICAgICgpID0+IFtcbiAgICAgICAgICAgICgpID0+IGNoYW5nZVJlc3VsdFN0YXRlKHRydWUpLFxuICAgICAgICAgICAgKCkgPT4gY2hhbmdlUmVzdWx0U3RhdGUoZmFsc2UpLFxuICAgICAgICAgICAgKCkgPT4gY2hhbmdlRm9ybVN0YXRlKHRydWUpLFxuICAgICAgICAgICAgKCkgPT4gY2hhbmdlRm9ybVN0YXRlKGZhbHNlKSxcbiAgICAgICAgXSxcbiAgICAgICAgW10sXG4gICAgKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gICAgICAgIHNlbGVjdGVkSXRlbSxcbiAgICAgICAgcmVzdWx0U1I6IFtyZXN1bHRTUk9wZW5lZCwgb25SZXN1bHRTUk9wZW4sIG9uUmVzdWx0U1JDbG9zZV0sXG4gICAgICAgIGZvcm1TUjogW2Zvcm1TUk9wZW5lZCwgb25Gb3JtU1JPcGVuZWQsIG9uRm9ybVNSQ2xvc2VdLFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlU3VwcGxpZXJSZWdpc3RlckRpYWxvZ3NcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9zaGFyZWQnXG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZChUZXh0KS5hdHRycyh7XG4gICAgYXM6ICdidXR0b24nLFxuICAgIGxldHRlclNwYWNpbmc6ICcwLjQzNzVweCcsXG4gICAgbGluZUhlaWdodDogJzIycHgnLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBwOiAnMTBweCcsXG4gICAgZm9udFNpemU6ICcxOHB4Jyxcbn0pYGBcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbXBvcnQgeyBGbGV4IH0gZnJvbSAnLi4vLi4vc2hhcmVkJ1xuXG5jb25zdCBCb3JkZXIgPSBzdHlsZWQuZGl2YFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwMDAwO1xuYFxuY29uc3QgRm9vdGVyID0gc3R5bGVkKEZsZXgpLmF0dHJzKHtcbiAgICBhczogQm9yZGVyLFxuICAgIGJnOiAnIzExMScsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgcHg6ICcxMHB4Jyxcbn0pYGBcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgTG9nbyB9IGZyb20gJy4uLy4uL2xheW91dC9oZWFkZXItY29udHJvbHMnO1xuXG5jb25zdCBTbWFsbExvZ28gPSBzdHlsZWQoTG9nbylgXG4gICAgc3ZnIHtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTbWFsbExvZ287XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbXBvcnQgeyBUZXh0LCBCb3ggfSBmcm9tICcuLi8uLi9zaGFyZWQnXG5cbmNvbnN0IElucHV0U3R5bGVkID0gc3R5bGVkKEJveClgXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAwLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAwLjE1cztcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgMC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgMC4xNXM7XG4gICAgJjpmb2N1cyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzY2YWZlOTtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgMCA4cHggcmdiYSgxMDIsIDE3NSwgMjMzLCAwLjYpO1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgMCA4cHggcmdiYSgxMDIsIDE3NSwgMjMzLCAwLjYpO1xuICAgIH1cbmBcblxuSW5wdXRTdHlsZWQuZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogJzM0cHgnLFxufVxuXG5jb25zdCBJbnB1dCA9ICh7XG4gICAgdGl0bGUsIGNvbnRyb2wsIGZvcndhcmRSZWYsIGVycm9yLCBtYXhsZW5ndGgsIC4uLnByb3BzXG59KSA9PiAoXG4gICAgPD5cbiAgICAgICAgPFRleHQgY29sb3I9e2Vycm9yID8gJ3JlZC4wJyA6ICdibGFjay4wJ30gZm9udFdlaWdodD1cIjUwMFwiPlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgPEJveCBtdD1cIjRweFwiPlxuICAgICAgICAgICAgPElucHV0U3R5bGVkIGFzPXtjb250cm9sfSB7Li4ucHJvcHN9IHJlZj17Zm9yd2FyZFJlZn0gLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgPC8+XG4pXG5cbklucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb250cm9sOiAnaW5wdXQnLFxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZvb3RlciB9IGZyb20gJy4vRm9vdGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU21hbGxMb2dvIH0gZnJvbSAnLi9TbWFsbExvZ28nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnB1dCB9IGZyb20gJy4vSW5wdXQnO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tbmVzdGVkLXRlcm5hcnkgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgY3VycmVudEFjY291bnQsIGdldFZvdGluZyB9IGZyb20gJy4uLy4uL2xpYnMvZEFwcCdcblxuY29uc3QgQlRWb3RpbmcgPSAoe1xuICAgIGl0ZW0sIHZvdGluZywgb25Db21taXRWb3RlLCBvblJldmVhbFZvdGUsIGJ1dHRvbkNsYXNzTmFtZSA9ICdidG4gYnRuLXdhcm5pbmcnLCB0ZXh0Q2xhc3NOYW1lID0gJ3RleHQtc2Vjb25kYXJ5JywgLi4ucHJvcHNcbn0pID0+IHtcbiAgICBjb25zdCB7IGFkZHJlc3M6IHVzZXIgfSA9IGN1cnJlbnRBY2NvdW50KClcblxuICAgIGlmICh1c2VyICYmICF2b3RpbmcpIHtcbiAgICAgICAgdm90aW5nID0gZ2V0Vm90aW5nKGl0ZW0sIHVzZXIpXG4gICAgfVxuXG4gICAgY29uc3QgeyBjYW5Db21taXQsIGNhblJldmVhbCB9ID0gdm90aW5nIHx8IHt9XG4gICAgY29uc29sZS5sb2coJ2NhbkNvbW1pdCcsIGNhbkNvbW1pdCA/ICd0cnVlJyA6ICdmYWxzZScpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2NhbkNvbW1pdCA/IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2J1dHRvbkNsYXNzTmFtZX0gb25DbGljaz17KCkgPT4gb25Db21taXRWb3RlKGl0ZW0sIHZvdGluZyl9IHsuLi5wcm9wc30+XG4gICAgICAgICAgICAgICAgICAgIFZvdGVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkgOiBjYW5SZXZlYWwgPyAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtidXR0b25DbGFzc05hbWV9IG9uQ2xpY2s9eygpID0+IG9uUmV2ZWFsVm90ZShpdGVtLCB2b3RpbmcpfSB7Li4ucHJvcHN9PlxuICAgICAgICAgICAgICAgICAgICBSZXZlYWwgeW91ciB2b3RlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApIDogdm90aW5nPy5jb21taXQgJiYgdm90aW5nPy5zdGF0dXMgPT09ICd2b3RpbmcnID8gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGV4dENsYXNzTmFtZX0+V2FpdGluZyBlbmQgb2YgY29tbWl0IHN0ZXA8L3NwYW4+XG4gICAgICAgICAgICApIDogdm90aW5nPy5yZXZlYWwgJiYgdm90aW5nPy5zdGF0dXMgPT09ICdyZXZlYWwnID8gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGV4dENsYXNzTmFtZX0+V2FpdGluZyBlbmQgb2YgcmV2ZWFsIHN0ZXA8L3NwYW4+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCVFZvdGluZ1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgKiBhcyBDb250cm9scyBmcm9tICcuL2NvbnRyb2xzJ1xuXG5pbXBvcnQgeyBCb3gsIEZsZXgsIFRleHQgfSBmcm9tICcuLi9zaGFyZWQnXG5pbXBvcnQgQ291cG9uIGZyb20gJy4uL2NvdXBvbidcbmltcG9ydCB7IGNvbG9yU3RhdHVzLCBjb25uZWN0LCBzaG9ydEFkZHJlc3MgfSBmcm9tICcuLi8uLi9saWJzL2RBcHAnXG5pbXBvcnQgQmFkZ2UgZnJvbSAnLi4vc2hhcmVkL0JhZGdlJ1xuaW1wb3J0IEJUVm90aW5nIGZyb20gJy4uL2N1c3RvbS9idFZvdGluZydcblxuY29uc3QgRGlhbG9nID0gKHtcbiAgICBidXR0b25zLCBjb3Vwb24sIG9uQ2xvc2UsIG9uRWRpdCwgb25CdXksIG9uUmVtb3ZlLCBvblVzZSwgb25CdXJuLCBvblZvdGUsIG9uUmV2ZWFsLCBvbldpdGhkcmF3LCBvbkFjY2VwdCwgb25SZWplY3QsXG59KSA9PiB7XG4gICAgYnV0dG9ucyA/Pz0gWydjYW5jZWwnLCAnYnV5J11cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8Qm94IHdpZHRoPVwiNjAwcHhcIj5cbiAgICAgICAgICAgIDxGbGV4IHA9XCIxNnB4XCIgYmc9XCJncmF5LjBcIiBjbGFzc05hbWU9XCJyb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvdXBvbi5pc0V4cGlyZWQgPyAnYWxlcnQgYWxlcnQtZGFuZ2VyIHAtMSBtLTAnIDogJyd9PlxuICAgICAgICAgICAgICAgICAgICA8Qm94IGZsZXg9ezF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvdXBvbiB7Li4uKGNvdXBvbi5pdGVtIHx8IGNvdXBvbil9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291cG9uLmlzRXhwaXJlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMSB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC41KScgfX0+VGhpcyBjb3Vwb24gaGFzIGV4cGlyZWQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxCb3ggcGw9XCIxNnB4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5TbWFsbExvZ28gLz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgbGluZUhlaWdodD1cIjIycHhcIiBmb250V2VpZ2h0PVwiYm9sZFwiIHB0PVwiMTBweFwiIGZvbnRTaXplPVwiMjJweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjb3Vwb24uaXRlbT8ubG9uZ1RpdGxlIHx8IGNvdXBvbi5pdGVtPy50aXRsZSB8fCBjb3Vwb24ubG9uZ1RpdGxlIHx8IGNvdXBvbi50aXRsZSB9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgbGluZUhlaWdodD1cIjE4cHhcIiBwdD1cIjEwcHhcIiBmb250U2l6ZT1cIjE0cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY291cG9uLml0ZW0/LmxvbmdEZXNjcmlwdGlvbiB8fCBjb3Vwb24uaXRlbT8uc2hvcnREZXNjcmlwdGlvbiB8fCBjb3Vwb24ubG9uZ0Rlc2NyaXB0aW9uIHx8IGNvdXBvbi5zaG9ydERlc2NyaXB0aW9uIH1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICB7Y291cG9uLmFzc2V0SWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgbGluZUhlaWdodD1cIjE4cHhcIiBwdD1cIjEwcHhcIiBmb250U2l6ZT1cIjEycHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J25mdDogJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly90ZXN0bmV0LndhdmVzZXhwbG9yZXIuY29tL2Fzc2V0cy8ke2NvdXBvbi5hc3NldElkfS9gfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+e3Nob3J0QWRkcmVzcyhjb3Vwb24uYXNzZXRJZCl9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgbGluZUhlaWdodD1cIjE4cHhcIiBwdD1cIjEwcHhcIiBmb250U2l6ZT1cIjEycHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J3N1cHBsaWVyOiAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL3Rlc3RuZXQud2F2ZXNleHBsb3Jlci5jb20vYWRkcmVzcy8ke2NvdXBvbi5zdXBwbGllcn0vYH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291cG9uLnN1cHBsaWVyRGF0YT8ubmFtZSB8fCBzaG9ydEFkZHJlc3MoY291cG9uLnN1cHBsaWVyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBsaW5lSGVpZ2h0PVwiMThweFwiIHB0PVwiMTBweFwiIGZvbnRTaXplPVwiMTJweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnc3RhdHVzOiAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSB0ZXh0PXtjb3Vwb24uY291cG9uU3RhdHVzfSB0eXBlPXtjb2xvclN0YXR1cyhjb3Vwb24uY291cG9uU3RhdHVzKX0gcD17MH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICAgIDxDb250cm9scy5Gb290ZXI+XG4gICAgICAgICAgICAgICAgPENvbnRyb2xzLkJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeVwiIG9uQ2xpY2s9e29uQ2xvc2V9PkNhbmNlbDwvQ29udHJvbHMuQnV0dG9uPlxuICAgICAgICAgICAgICAgIHsgYnV0dG9ucy5pbmNsdWRlcygnbG9naW4nKVxuICAgICAgICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5CdXR0b24gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCIgb25DbGljaz17Y29ubmVjdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250cm9scy5CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgeyBidXR0b25zLmluY2x1ZGVzKCd2b3RlJykgJiYgIWNvdXBvbi5pc0V4cGlyZWRcbiAgICAgICAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QlRWb3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtPXtjb3Vwb24uaXRlbSB8fCBjb3Vwb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm90aW5nPXtjb3Vwb24udm90aW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29tbWl0Vm90ZT17b25Wb3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmV2ZWFsVm90ZT17b25SZXZlYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ2xhc3NOYW1lPVwidGV4dC13YXJuaW5nIGZvbnQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLTUwIGZvbnQtd2VpZ2h0LWJvbGQgc21hbGwgcHQtMSBtdC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzE4cHgnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHsgYnV0dG9ucy5pbmNsdWRlcygnYnV5JykgJiYgIWNvdXBvbi5pc0V4cGlyZWRcbiAgICAgICAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuQnV0dG9uIGNsYXNzTmFtZT1cInRleHQtc3VjY2Vzc1wiIG9uQ2xpY2s9e29uQnV5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJ1eVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250cm9scy5CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgeyBidXR0b25zLmluY2x1ZGVzKCdlZGl0JykgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5CdXR0b24gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCIgb25DbGljaz17b25FZGl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRcbiAgICAgICAgICAgICAgICAgICAgPC9Db250cm9scy5CdXR0b24+XG4gICAgICAgICAgICAgICAgKSA6IG51bGwgfVxuXG4gICAgICAgICAgICAgICAgeyBidXR0b25zLmluY2x1ZGVzKCdyZW1vdmUnKSA/IChcbiAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLkJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiIG9uQ2xpY2s9e29uUmVtb3ZlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZVxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRyb2xzLkJ1dHRvbj5cbiAgICAgICAgICAgICAgICApIDogbnVsbCB9XG5cbiAgICAgICAgICAgICAgICB7IGJ1dHRvbnMuaW5jbHVkZXMoJ3VzZScpICYmIGNvdXBvbi5pc093bmVkXG4gICAgICAgICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLkJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXN1Y2Nlc3NcIiBvbkNsaWNrPXtvblVzZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBVc2UgY291cG9uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRyb2xzLkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7IGJ1dHRvbnMuaW5jbHVkZXMoJ2J1cm4nKVxuICAgICAgICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5CdXR0b24gY29sb3I9XCJ0ZXh0LXByaW1hcnlcIiBvbkNsaWNrPXtvbkJ1cm59PlxuICAgICAgICAgICAgICAgICAgICAgICAgQnVyblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250cm9scy5CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHsgYnV0dG9ucy5pbmNsdWRlcygnd2l0aGRyYXcnKVxuICAgICAgICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5CdXR0b24gY2xhc3NOYW1lPVwidGV4dC1zdWNjZXNzXCIgb25DbGljaz17b25XaXRoZHJhd30+XG4gICAgICAgICAgICAgICAgICAgICAgICBXaXRoZHJhdyBGdW5kXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRyb2xzLkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeyBidXR0b25zLmluY2x1ZGVzKCdyZWplY3QnKVxuICAgICAgICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5CdXR0b24gY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIiBvbkNsaWNrPXtvblJlamVjdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZWplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udHJvbHMuQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7IGJ1dHRvbnMuaW5jbHVkZXMoJ2FjY2VwdCcpXG4gICAgICAgICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLkJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXN1Y2Nlc3NcIiBvbkNsaWNrPXtvbkFjY2VwdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRyb2xzLkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0NvbnRyb2xzLkZvb3Rlcj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1kYW5nZXIgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0ICogYXMgQ29udHJvbHMgZnJvbSAnLi9jb250cm9scydcblxuaW1wb3J0IHsgQm94LCBGbGV4LCBUZXh0IH0gZnJvbSAnLi4vc2hhcmVkJ1xuXG5jb25zdCBSZXN1bHQgPSAoeyB0ZXh0LCBjbGFzc05hbWUsIG9uQ2xvc2UgfSkgPT4ge1xuICAgIGNsYXNzTmFtZSA/Pz0gJ2JnLWxpZ2h0J1xuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggd2lkdGg9XCI2MDBweFwiIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSByb3VuZGVkYH0+XG4gICAgICAgICAgICA8RmxleCBwPVwiMTZweFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPENvbnRyb2xzLlNtYWxsTG9nbyAvPlxuICAgICAgICAgICAgICAgIDxUZXh0IGxpbmVIZWlnaHQ9XCIyMnB4XCIgcHQ9XCIxMHB4XCIgZm9udFNpemU9XCIxOHB4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0ZXh0IH19IC8+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgICAgICA8Q29udHJvbHMuRm9vdGVyPlxuICAgICAgICAgICAgICAgIDxDb250cm9scy5CdXR0b24gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnlcIiBvbkNsaWNrPXtvbkNsb3NlfT5DbG9zZTwvQ29udHJvbHMuQnV0dG9uPlxuICAgICAgICAgICAgPC9Db250cm9scy5Gb290ZXI+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdXNlRm9ybSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbXBvcnQgKiBhcyBDb250cm9scyBmcm9tICcuL2NvbnRyb2xzJ1xuXG5pbXBvcnQgeyBCb3gsIEZsZXggfSBmcm9tICcuLi9zaGFyZWQnXG5cbmNvbnN0IEhFSUdIVFMgPSBbMzAwLCA0MDAsIDUwMCwgNjAwLCA3MDBdXG5jb25zdCBGT1JNX1BBUkFNRVRFUiA9IDE1MFxuXG5jb25zdCBIZWlnaHRQcm9wcyA9IHN0eWxlZC5kaXZgXG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAke0hFSUdIVFMucmVkdWNlKFxuICAgICAgICAoYWNjdW0sIHZhbCkgPT5cbiAgICAgICAgICAgIGAke2FjY3VtfVxuICAgICAgICBAbWVkaWEgKG1pbi1oZWlnaHQ6ICR7dmFsfXB4KSB7XG4gICAgICAgICAgICBoZWlnaHQ6ICR7dmFsIC0gRk9STV9QQVJBTUVURVJ9cHg7XG4gICAgICAgIH1cbiAgICBgLFxuICAgICAgICAnJyxcbiAgICApfVxuICAgIEBtZWRpYSAobWluLWhlaWdodDogODAwcHgpIHtcbiAgICAgICAgaGVpZ2h0OiBpbml0aWFsO1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbX0pIHtcbiAgICAgICAgICAgIGhlaWdodDogNzAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5gXG5cbmNvbnN0IEZvcm0gPSAoe1xuICAgIGVkaXRlZEl0ZW0sIG9uQ2xvc2UsIG9uU3VibWl0LFxufSkgPT4ge1xuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzIH0gPSB1c2VGb3JtKClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICAgIHdpZHRoPXt7XG4gICAgICAgICAgICAgICAgMDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGxnOiAnODAwcHgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFzPVwiZm9ybVwiXG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPEJveCBiZz1cImdyYXkuMFwiIGNsYXNzTmFtZT1cInJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICA8RmxleCBwPVwiMTBweFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5TbWFsbExvZ28gLz5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICBiZz1cImdyYXkuMFwiXG4gICAgICAgICAgICAgICAgICAgIHA9XCIxNnB4XCJcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgMDogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbTogJ3JvdycsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGFzPXtIZWlnaHRQcm9wc31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yd2FyZFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogZmFsc2UgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtlZGl0ZWRJdGVtPy5pZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBmbGV4PXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcGI9XCI4cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJJbWFnZSB1cmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiBmYWxzZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtlZGl0ZWRJdGVtPy5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHBiPVwiOHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcmljZVRlcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlByaWNlIHRlcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIxMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcndhcmRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMucHJpY2VUZXJtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2VkaXRlZEl0ZW0/LnByaWNlVGVybX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcGI9XCI4cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvbGRQcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiT2xkIHByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yd2FyZFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5vbGRQcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtlZGl0ZWRJdGVtPy5vbGRQcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcGI9XCI4cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuZXdQcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTmV3IHByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yd2FyZFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5uZXdQcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtlZGl0ZWRJdGVtPy5uZXdQcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHBiPVwiOHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yd2FyZFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2VkaXRlZEl0ZW0/Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjI1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHBiPVwiOHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaG9ydERlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlNob3J0IGRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yd2FyZFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5zaG9ydERlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2VkaXRlZEl0ZW0/LnNob3J0RGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHBiPVwiOHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2VkaXRlZEl0ZW0/LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBwYj1cIjhweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvdXBvblByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDb3Vwb24gcHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmNvdXBvblByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2VkaXRlZEl0ZW0/LmNvdXBvblByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgcGw9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbTogJzE2cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg9ezF9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcGI9XCI4cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvbmdUaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTG9uZyB0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjI1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yd2FyZFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogZmFsc2UgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMubG9uZ1RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2VkaXRlZEl0ZW0/LmxvbmdUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHBiPVwiOHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb25nRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTG9uZyBkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcndhcmRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IGZhbHNlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmxvbmdEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtlZGl0ZWRJdGVtPy5sb25nRGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBwYj1cIjhweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJleHBpcmF0aW9uRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRXhwaXJhdGlvbiBEYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yd2FyZFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5leHBpcmF0aW9uRGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtlZGl0ZWRJdGVtPy5leHBpcmF0aW9uRGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICA8Q29udHJvbHMuRm9vdGVyPlxuICAgICAgICAgICAgICAgIDxDb250cm9scy5CdXR0b24gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnlcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25DbG9zZX0+XG4gICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgPC9Db250cm9scy5CdXR0b24+XG4gICAgICAgICAgICAgICAgPENvbnRyb2xzLkJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgIFNhdmUgQ291cG9uXG4gICAgICAgICAgICAgICAgPC9Db250cm9scy5CdXR0b24+XG4gICAgICAgICAgICA8L0NvbnRyb2xzLkZvb3Rlcj5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdXNlRm9ybSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbXBvcnQgKiBhcyBDb250cm9scyBmcm9tICcuL2NvbnRyb2xzJ1xuXG5pbXBvcnQgeyBCb3gsIEZsZXggfSBmcm9tICcuLi9zaGFyZWQnXG5cbmNvbnN0IEhFSUdIVFMgPSBbMzAwLCA0MDAsIDUwMCwgNjAwLCA3MDBdXG5jb25zdCBGT1JNX1BBUkFNRVRFUiA9IDE1MFxuXG5jb25zdCBIZWlnaHRQcm9wcyA9IHN0eWxlZC5kaXZgXG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAke0hFSUdIVFMucmVkdWNlKFxuICAgICAgICAoYWNjdW0sIHZhbCkgPT5cbiAgICAgICAgICAgIGAke2FjY3VtfVxuICAgICAgICBAbWVkaWEgKG1pbi1oZWlnaHQ6ICR7dmFsfXB4KSB7XG4gICAgICAgICAgICBoZWlnaHQ6ICR7dmFsIC0gRk9STV9QQVJBTUVURVJ9cHg7XG4gICAgICAgIH1cbiAgICBgLFxuICAgICAgICAnJyxcbiAgICApfVxuICAgIEBtZWRpYSAobWluLWhlaWdodDogODAwcHgpIHtcbiAgICAgICAgaGVpZ2h0OiBpbml0aWFsO1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbX0pIHtcbiAgICAgICAgICAgIGhlaWdodDogNzAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5gXG5cbmNvbnN0IEZvcm1TdXBwbGllclJlZ2lzdGVyID0gKHtcbiAgICBhcywgYnV0dG9ucywgb25DbG9zZSwgb25TdWJtaXQsXG59KSA9PiB7XG4gICAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnMgfSA9IHVzZUZvcm0oKVxuICAgIGJ1dHRvbnMgPz89IFsnc3VibWl0JywgJ2NhbmNlbCddXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveFxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIGFzPVwiZm9ybVwiXG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPEJveCBiZz1cImdyYXkuMFwiIGNsYXNzTmFtZT1cInJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICA8RmxleCBwPVwiMTBweFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5SZWdpc3RlciBhcyBzdXBwbGllcjwvaDI+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgYmc9XCJncmF5LjBcIlxuICAgICAgICAgICAgICAgICAgICBwPVwiMTZweFwiXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIDA6ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgc206ICdyb3cnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBhcz17KGFzIHx8IEhlaWdodFByb3BzKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggZmxleD17MX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHBiPVwiOHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yd2FyZFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcGI9XCI4cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcndhcmRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHBiPVwiOHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQWJvdXQgeW91XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiBmYWxzZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgeyBidXR0b25zLmluY2x1ZGVzKCdjYW5jZWwnKSA/IChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApIDogJycgfVxuICAgICAgICAgICAgICAgIHsgYnV0dG9ucy5pbmNsdWRlcygnc3VibWl0JykgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVnaXN0ZXJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKSA6ICcnIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0JveD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1TdXBwbGllclJlZ2lzdGVyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdXNlRm9ybSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXG5cbmltcG9ydCAqIGFzIENvbnRyb2xzIGZyb20gJy4vY29udHJvbHMnXG5cbmltcG9ydCB7IEJveCB9IGZyb20gJy4uL3NoYXJlZCdcblxuY29uc3QgRm9ybVZvdGUgPSAoe1xuICAgIGJ1dHRvbnMsIG9uQ2xvc2UsIG9uU3VibWl0LCBpdGVtLFxufSkgPT4ge1xuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzIH0gPSB1c2VGb3JtKClcbiAgICBidXR0b25zID8/PSBbJ3N1Ym1pdCcsICdjYW5jZWwnXVxuICAgIGNvbnN0IHZvdGUgPSBpdGVtPy5pc0ZlYXR1cmVkID8gJ2RlbGlzdGVkJyA6ICdmZWF0dXJlZCdcbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94XG4gICAgICAgICAgICB3aWR0aD1cIjgwJVwiXG4gICAgICAgICAgICBtYXJnaW49XCJhdXRvXCJcbiAgICAgICAgICAgIGFzPVwiZm9ybVwiXG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPENvbnRyb2xzLklucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIml0ZW1cIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aXRlbT8uaWR9XG4gICAgICAgICAgICAgICAgZm9yd2FyZFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogZmFsc2UgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENvbnRyb2xzLklucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aXRlbT8ubmFtZX1cbiAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiBmYWxzZSB9KX1cblxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDb250cm9scy5JbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ2b3RlXCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3ZvdGV9XG4gICAgICAgICAgICAgICAgZm9yd2FyZFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogZmFsc2UgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJveCBiZz1cImdyYXkuMFwiIGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSB0ZXh0LWNlbnRlclwiPntgVm90aW5nIGZvciAke2l0ZW0/Lm5hbWV9YH08L2g0PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHN0eWxlPXt7IG1heEhlaWdodDogJzIwMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0/LmltYWdlfSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBhbHQ9XCIuLi5cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0/LmlzRmVhdHVyZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSBteS0yIHRleHQtbXV0ZWRcIj5EZWxpc3RpbmcgY291cG9uIGZyb20gZmVhdHVyZWQgbGlzdDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSBteS0yIHRleHQtbXV0ZWRcIj5MaXN0aW5nIGNvdXBvbiB0byBmZWF0dXJlZCBsaXN0PC9oND5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEluIG9yZGVyIHRvIHBhcnRpY2lwYXRlIGluIGFkZGluZyBvciByZW1vdmluZyBhIGNvdXBvbiBmcm9tIHRoZSBsaXN0IG9mIGhpZ2hsaWdodGVkIGNvdXBvbnMsIHlvdSBzaG91bGQgdm90ZS5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Vm90aW5nIGlzIGRvbmUgaW4gdHdvIHN0ZXBzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPkNvbW1pdDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnIHlvdXIgdm90ZSBieSB1c2luZyBhIHNlY3JldCBwaHJhc2UuJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydPbmNlIHRoZSByZXF1aXJlZCBudW1iZXIgb2YgcGFydGljaXBhbnRzIGlzIHJlYWNoZWQsIHlvdSBtdXN0ICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5yZXZlYWw8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyB5b3VyIHZvdGUgZm9yIGl0IHRvIGJlIGVmZmVjdGl2ZS4nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD1cInNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJXaGF0IGRvIHlvdSB3YW50ID8gRmVhdHVyZSBvciBEZWxpc3QgdGhpcyBjb3Vwb24gP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZvdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcndhcmRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy52b3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aXRlbS5pc0ZlYXR1cmVkID8gJ2RlbGlzdGVkJyA6ICdmZWF0dXJlZCd9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmVhdHVyZWRcIj5BZGQgdG8gZmVhdHVyZWQgbGlzdDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWxpc3RlZFwiPlJlbW92ZSBmcm9tIGZlYXR1cmVkIGxpc3Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udHJvbHMuSW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2FsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTZWNyZXQgcGhyYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuc2FsdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIj5EbyBub3QgbG9zZSB5b3VyIHNlY3JldCBwaHJhc2UsIG9yIHlvdSB3aWxsIG5vdCBiZSBhYmxlIHRvIHJldmVhbCB5b3Ugdm90ZSBhdCBzdGVwIDI8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICA8Q29udHJvbHMuRm9vdGVyPlxuICAgICAgICAgICAgICAgIHsgYnV0dG9ucy5pbmNsdWRlcygnY2FuY2VsJykgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5CdXR0b24gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnlcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25DbG9zZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgPC9Db250cm9scy5CdXR0b24+XG4gICAgICAgICAgICAgICAgKSA6ICcnIH1cbiAgICAgICAgICAgICAgICB7IGJ1dHRvbnMuaW5jbHVkZXMoJ3N1Ym1pdCcpID8gKFxuICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuQnV0dG9uIGNsYXNzTmFtZT1cInRleHQtd2FybmluZ1wiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbW1pdFxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRyb2xzLkJ1dHRvbj5cbiAgICAgICAgICAgICAgICApIDogJycgfVxuICAgICAgICAgICAgPC9Db250cm9scy5Gb290ZXI+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVZvdGVcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWRhbmdlciAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQge1xuICAgIEJveCwgRmxleCwgTW9kYWwsIFRleHQsXG59IGZyb20gJy4uL3NoYXJlZCdcblxuY29uc3QgRXJyb3JEaWFsb2cgPSAoeyB0ZXh0LCBvcGVuLCBvbkNsb3NlIH0pID0+IChcbiAgICA8TW9kYWwgb3Blbj17b3Blbn0gb25DbG9zZT17b25DbG9zZX0gekluZGV4PVwiOTlcIj5cbiAgICAgICAgPEJveCB3aWR0aD1cIjYwMHB4XCIgYmc9XCIjMjIwMDAwXCIgY29sb3I9XCJncmF5LjBcIiBjbGFzc05hbWU9XCJyb3VuZGVkLXBpbGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxGbGV4IHA9XCIxNnB4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG15LTMgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjY0XCIgaGVpZ2h0PVwiNjRcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3NOYW1lPVwiYmkgYmktZXhjbGFtYXRpb24tdHJpYW5nbGUtZmlsbFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOC45ODIgMS41NjZhMS4xMyAxLjEzIDAgMCAwLTEuOTYgMEwuMTY1IDEzLjIzM2MtLjQ1Ny43NzguMDkxIDEuNzY3Ljk4IDEuNzY3aDEzLjcxM2MuODg5IDAgMS40MzgtLjk5Ljk4LTEuNzY3TDguOTgyIDEuNTY2ek04IDVjLjUzNSAwIC45NTQuNDYyLjkuOTk1bC0uMzUgMy41MDdhLjU1Mi41NTIgMCAwIDEtMS4xIDBMNy4xIDUuOTk1QS45MDUuOTA1IDAgMCAxIDggNXptLjAwMiA2YTEgMSAwIDEgMSAwIDIgMSAxIDAgMCAxIDAtMnpcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxUZXh0IGxpbmVIZWlnaHQ9XCIyMnB4XCIgcHQ9XCIxMHB4XCIgZm9udFNpemU9XCIxOHB4XCIgY2xhc3NOYW1lPVwibXktMVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PnsgKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJykgJiYgdGV4dC5sZW5ndGggPiAwID8gdGV4dCA6ICcnIH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciB0ZXh0LWNlbnRlciBtdC0zIG1iLTRcIiBvbkNsaWNrPXtvbkNsb3NlfT5jbG9zZTwvYnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICA8L01vZGFsPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvckRpYWxvZ1xuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tZGFuZ2VyICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7XG4gICAgQm94LCBGbGV4LCBUZXh0LCBMb2FkaW5nLFxufSBmcm9tICcuLi9zaGFyZWQnXG5cbmNvbnN0IE1vZGFsTG9hZGluZyA9ICh7IHRleHQgfSkgPT4gKFxuICAgIDxCb3ggd2lkdGg9XCI2MDBweFwiPlxuICAgICAgICA8RmxleCBiZz1cIiMyMjJcIiBwPVwiMTZweFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgY2xhc3NOYW1lPVwicm91bmRlZC1waWxsXCI+XG4gICAgICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgICAgICAgPFRleHQgbGluZUhlaWdodD1cIjIycHhcIiBwdD1cIjEwcHhcIiBmb250U2l6ZT1cIjE4cHhcIiBjb2xvcj1cImdyYXkuMFwiIGNsYXNzTmFtZT1cIm1iLTUgcGItNVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0ZXh0IH19IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgLz5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9GbGV4PlxuICAgIDwvQm94PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbExvYWRpbmdcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgRGlhbG9nIH0gZnJvbSAnLi9EaWFsb2cnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlc3VsdCB9IGZyb20gJy4vUmVzdWx0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGb3JtIH0gZnJvbSAnLi9Gb3JtJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGb3JtU3VwcGxpZXJSZWdpc3RlciB9IGZyb20gJy4vRm9ybVN1cHBsaWVyUmVnaXN0ZXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZvcm1Wb3RlIH0gZnJvbSAnLi9Gb3JtVm90ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXJyb3JEaWFsb2cgfSBmcm9tICcuL0Vycm9yRGlhbG9nJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2FkaW5nIH0gZnJvbSAnLi9Mb2FkaW5nJ1xuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYWNjZXNzaWJsZS1lbW9qaSAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW5lc2NhcGVkLWVudGl0aWVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdXNlRm9ybSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXG5cbmltcG9ydCAqIGFzIENvbnRyb2xzIGZyb20gJy4vY29udHJvbHMnXG5cbmltcG9ydCB7IEJveCB9IGZyb20gJy4uL3NoYXJlZCdcblxuY29uc3QgRm9ybVJldmVhbCA9ICh7XG4gICAgYnV0dG9ucywgb25DbG9zZSwgb25TdWJtaXQsIGl0ZW0sIHZvdGluZyxcbn0pID0+IHtcbiAgICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGVycm9ycyB9ID0gdXNlRm9ybSgpXG4gICAgYnV0dG9ucyA/Pz0gWydzdWJtaXQnLCAnY2FuY2VsJ11cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94XG4gICAgICAgICAgICB3aWR0aD1cIjgwJVwiXG4gICAgICAgICAgICBtYXJnaW49XCJhdXRvXCJcbiAgICAgICAgICAgIGFzPVwiZm9ybVwiXG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPENvbnRyb2xzLklucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIml0ZW1cIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aXRlbT8uaWR9XG4gICAgICAgICAgICAgICAgZm9yd2FyZFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogZmFsc2UgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENvbnRyb2xzLklucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aXRlbT8ubmFtZX1cbiAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiBmYWxzZSB9KX1cblxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPENvbnRyb2xzLklucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbW1pdFwiXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt2b3Rpbmc/LmNvbW1pdH1cbiAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiBmYWxzZSB9KX1cblxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPEJveCBiZz1cImdyYXkuMFwiIGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSB0ZXh0LWNlbnRlclwiPntgVm90aW5nIGZvciAke2l0ZW0/Lm5hbWV9YH08L2g0PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHN0eWxlPXt7IG1heEhlaWdodDogJzIwMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0/LmltYWdlfSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBhbHQ9XCIuLi5cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgbXktMiB0ZXh0LW11dGVkXCI+Vm90ZSBmb3IgbGlzdGluZyBvciBkZWxpc3RpbmcgY291cG9uIGZyb20gZmVhdHVyZWQgbGlzdDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSXQncyB0aW1lIHRvIHJldmVhbCB5b3VyIHZvdGUgdG8gdGhlIHdvcmxkIGFuZCBsaXN0IG9yIGRlbGlzdCB0aGlzIGNvdXBvblxuICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIj7wn5iOPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2FsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTZWNyZXQgcGhyYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuc2FsdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIj5EbyBub3QgbG9zZSB5b3VyIHNlY3JldCBwaHJhc2UsIG9yIHlvdSB3aWxsIG5vdCBiZSBhYmxlIHRvIHJldmVhbCB5b3Ugdm90ZSBhdCBzdGVwIDI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgPENvbnRyb2xzLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICB7IGJ1dHRvbnMuaW5jbHVkZXMoJ2NhbmNlbCcpID8gKFxuICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuQnV0dG9uIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udHJvbHMuQnV0dG9uPlxuICAgICAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICAgICAgICAgICAgeyBidXR0b25zLmluY2x1ZGVzKCdzdWJtaXQnKSA/IChcbiAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLkJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXdhcm5pbmdcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZXZlYWxcbiAgICAgICAgICAgICAgICAgICAgPC9Db250cm9scy5CdXR0b24+XG4gICAgICAgICAgICAgICAgKSA6ICcnIH1cbiAgICAgICAgICAgIDwvQ29udHJvbHMuRm9vdGVyPlxuICAgICAgICA8L0JveD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1SZXZlYWxcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB1c2VBcHBEaWFsb2dzIGZyb20gJy4vdXNlQXBwRGlhbG9ncydcblxuaW1wb3J0IHtcbiAgICBhY2NlcHRQdXJjaGFzZSwgYWRkSXRlbSwgYnVybkNvdXBvbiwgY29tbWl0Vm90ZSwgZm9ybWF0TnVtYmVyLCBwdXJjaGFzZUNvdXBvbixcbiAgICByZWplY3RQdXJjaGFzZSwgcmVtb3ZlSXRlbSwgcmV2ZWFsVm90ZSwgc2VuZENvdXBvblRvU3VwcGxpZXIsIHNob3J0QWRkcmVzcyxcbiAgICB1cGRhdGVJdGVtLCB3aXRoZHJhd0Z1bmRzLFxufSBmcm9tICcuLi8uLi9saWJzL2RBcHAnXG5pbXBvcnQge1xuICAgIERpYWxvZywgRXJyb3JEaWFsb2csIEZvcm0sIFJlc3VsdCwgTG9hZGluZywgRm9ybVZvdGUsXG59IGZyb20gJy4uL21vZGFsJ1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi9zaGFyZWQnXG5pbXBvcnQgRm9ybVJldmVhbCBmcm9tICcuLi9tb2RhbC9Gb3JtUmV2ZWFsJ1xuXG5mdW5jdGlvbiB1c2VDb3Vwb25EaWFsb2dzKCkge1xuICAgIGNvbnN0IHtcbiAgICAgICAgc2VsZWN0ZWRJdGVtLCBzZWxlY3RJdGVtLFxuICAgICAgICBlZGl0ZWRJdGVtLFxuICAgICAgICBkaWFsb2c6IFtkaWFsb2dPcGVuZWQsIG9uRGlhbG9nT3Blbiwgb25EaWFsb2dDbG9zZV0sXG4gICAgICAgIHJlc3VsdDogW3Jlc3VsdFRleHQsIHJlc3VsdE9wZW5lZCwgb25SZXN1bHRPcGVuLCBvblJlc3VsdENsb3NlXSxcbiAgICAgICAgcmVzdWx0QnV5OiBbcmVzdWx0QnV5T3BlbmVkLCBvblJlc3VsdEJ1eU9wZW4sIG9uUmVzdWx0QnV5Q2xvc2VdLFxuICAgICAgICBmb3JtOiBbZm9ybU9wZW5lZCwgb25Gb3JtT3Blbiwgb25Gb3JtQ2xvc2VdLFxuICAgIH0gPSB1c2VBcHBEaWFsb2dzKClcblxuICAgIGNvbnN0IHtcbiAgICAgICAgZWRpdGVkSXRlbTogdm90ZUl0ZW0sXG4gICAgICAgIGZvcm06IFt2b3RlRm9ybU9wZW5lZCwgb25Wb3RlRm9ybU9wZW5lZCwgb25Wb3RlRm9ybUNsb3NlXSxcbiAgICB9ID0gdXNlQXBwRGlhbG9ncygpXG5cbiAgICBjb25zdCB7XG4gICAgICAgIGVkaXRlZEl0ZW06IHJldmVhbEl0ZW0sIGVkaXRlZE9wdGlvbjogcmV2ZWFsT3B0aW9uLFxuICAgICAgICBmb3JtOiBbcmV2ZWFsRm9ybU9wZW5lZCwgb25SZXZlYWxGb3JtT3BlbmVkLCBvblJldmVhbEZvcm1DbG9zZV0sXG4gICAgfSA9IHVzZUFwcERpYWxvZ3MoKVxuXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2Vycm9yUmVzdWx0LCBzZXRFcnJvclJlc3VsdF0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gY2FsbEFjdGlvbihmbiwgbG9hZFRleHQgPSAnJywgcmVzVGV4dCA9ICcnKSB7XG4gICAgICAgIHNldExvYWRpbmcobG9hZFRleHQpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoZm9ybU9wZW5lZCkgb25Gb3JtQ2xvc2UoKVxuICAgICAgICAgICAgaWYgKHZvdGVGb3JtT3BlbmVkKSBvblZvdGVGb3JtQ2xvc2UoKVxuICAgICAgICAgICAgaWYgKHJldmVhbEZvcm1PcGVuZWQpIG9uUmV2ZWFsRm9ybUNsb3NlKClcbiAgICAgICAgICAgIGlmIChkaWFsb2dPcGVuZWQpIG9uRGlhbG9nQ2xvc2UoKVxuICAgICAgICAgICAgYXdhaXQgZm4oKVxuICAgICAgICAgICAgb25SZXN1bHRPcGVuKHJlc1RleHQpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRFcnJvclJlc3VsdChlcnJvcilcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25XaXRoZHJhdyhpdGVtKSB7XG4gICAgICAgIGNhbGxBY3Rpb24oYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pc0V4cGlyZWQgfHwgaXRlbS5pc0J1cm5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB3aXRoZHJhd0Z1bmRzKGl0ZW0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmlzT3duZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYnVybkNvdXBvbihpdGVtKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYDxwPldpdGhkcmF3aW5nIEZ1bmRzIGZvciBjb3Vwb24gPGEgaHJlZj1cIiR7YGh0dHBzOi8vdGVzdG5ldC53YXZlc2V4cGxvcmVyLmNvbS9hc3NldHMvJHtpdGVtPy5hc3NldElkfS9gfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7c2hvcnRBZGRyZXNzKGl0ZW0uYXNzZXRJZCl9PC9hPjxwPmAsXG4gICAgICAgICc8cD5GdW5kcyB3aXRoZHJhd24gc3VjY2Vzc2Z1bGx5PC9wPicpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25SZWplY3QoaXRlbSkge1xuICAgICAgICBjYWxsQWN0aW9uKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgcmVqZWN0UHVyY2hhc2UoaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJzxwPlJlamVjdGluZyBhbmQgcmVmdW5kIGJ1eWVyPC9wPicsXG4gICAgICAgICc8cD5QdXJjaGFzZSByZWplY3RlZCBhbmQgYnV5ZXIgcmVmdW5kZWQ8L3A+JylcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBvbkFjY2VwdChpdGVtKSB7XG4gICAgICAgIGNhbGxBY3Rpb24oYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBhY2NlcHRQdXJjaGFzZShpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnPHA+Q29uZmlybWluZyBwdXJjaGFzZTwvcD4nLFxuICAgICAgICAnPHA+UHVyY2hhc2UgY29uZmlybWVkPC9wPicpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25TYXZlKGRhdGEpIHtcbiAgICAgICAgY2FsbEFjdGlvbihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YT8uaWQ/Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGFkZEl0ZW0oZGF0YSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdXBkYXRlSXRlbShkYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBgPHA+U2F2aW5nIGNvdXBvbjwvcD48cD48Yj4ke2RhdGEubmFtZX08L3A+YCxcbiAgICAgICAgYDxwPkNvdXBvbiA8Yj4ke2RhdGEubmFtZX08L2I+PC9wPjxwPnNhdmVkIHN1Y2Nlc3NmdWxseTwvcD5gKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uUmVtb3ZlKGl0ZW0pIHtcbiAgICAgICAgY2FsbEFjdGlvbihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbT8uaWQ/Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBhd2FpdCByZW1vdmVJdGVtKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGA8cD5SZW1vdmluZyBjb3Vwb248L3A+PHA+PGI+JHtpdGVtLm5hbWV9PC9iPjxwPmAsXG4gICAgICAgIGA8cD5Db3Vwb24gPGI+JHtpdGVtLm5hbWV9PC9iPjwvcD48cD5yZW1vdmVkIHN1Y2Nlc3NmdWxseTwvcD5gKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQnVybihpdGVtKSB7XG4gICAgICAgIGFsZXJ0KDEpXG4gICAgICAgIGNhbGxBY3Rpb24oYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0/LmFzc2V0SWQ/Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBidXJuQ291cG9uKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGA8cD5CdXJuaW5nIGNvdXBvbjwvcD48cD48Yj4ke2l0ZW0ubmFtZX08L2I+PHA+PHA+YW5kIHdpdGhkcmF3IGZ1bmRzYCxcbiAgICAgICAgYDxwPkNvdXBvbiA8Yj4ke2l0ZW0ubmFtZX08L2I+PC9wPjxwPmJ1cm5lZCBzdWNjZXNzZnVsbHk8L3A+PHA+RnVuZHMgJHtmb3JtYXROdW1iZXIoaXRlbS5hbW91bnQpfSBXQVZFUyB3aXRoZHJhd24gc3VjY2Vzc2Z1bGx5PC9wPmApXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25Vc2UoaXRlbSkge1xuICAgICAgICBjYWxsQWN0aW9uKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgc2VuZENvdXBvblRvU3VwcGxpZXIoaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYDxwPlVzaW5nIGNvdXBvbjwvcD48cD48Yj4ke2l0ZW0ubmFtZSB8fCBpdGVtLml0ZW0/Lm5hbWV9PC9iPjxwPmAsXG4gICAgICAgICc8cD5UaGFuayB5b3UgZm9yIHVzaW5nIHRoaXMgY291cG9uLiBXZSBob3BlIHlvdSBhcmUgaGFwcHkgd2l0aCB5b3VyIGRpc2NvdW50PC9wPicpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25CdXkoaXRlbSkge1xuICAgICAgICBjYWxsQWN0aW9uKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgcHVyY2hhc2VDb3Vwb24oaXRlbS5pdGVtIHx8IGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGA8cD5TZW5kaW5nIHB1cmNoYXNlIHRyYW5zYWN0aW9uIGZvciBjb3Vwb248L3A+PHA+PGI+JHtpdGVtLml0ZW0/Lm5hbWUgfHwgaXRlbS5uYW1lfTwvYj48cD5gLFxuICAgICAgICAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5UaGFuayB5b3UgZm9yIHlvdXIgcHVyY2hhc2UuPC9kaXY+PHA+VGhlIHN1cHBsaWVyIHdpbGwgc29vbiB2YWxpZGF0ZSB0aGlzIHRyYW5zYWN0aW9uIGFuZCB5b3Ugd2lsbCByZWNlaXZlIHlvdXIgY291cG9uIGFzIE5GVDwvcD4nKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uVm90ZShpdGVtLCB2b3RpbmcpIHtcbiAgICAgICAgb25EaWFsb2dDbG9zZSgpXG4gICAgICAgIHNlbGVjdEl0ZW0oaXRlbSlcbiAgICAgICAgb25Wb3RlRm9ybU9wZW5lZChpdGVtLCB2b3RpbmcpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25SZXZlYWwoaXRlbSwgdm90aW5nKSB7XG4gICAgICAgIG9uRGlhbG9nQ2xvc2UoKVxuICAgICAgICBzZWxlY3RJdGVtKGl0ZW0pXG4gICAgICAgIG9uUmV2ZWFsRm9ybU9wZW5lZChpdGVtLCB2b3RpbmcpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25Wb3RlQ29tbWl0KGRhdGEpIHtcbiAgICAgICAgY2FsbEFjdGlvbihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKGRhdGEpXG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnZvdGUgJiYgZGF0YS5pdGVtICYmIGRhdGEuc2FsdCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGNvbW1pdFZvdGUoZGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYDxwPlNlbmRpbmcgY29tbWl0IHRyYW5zYWN0aW9uIGZvciBjb3Vwb248L3A+PHA+PGI+JHtkYXRhLm5hbWV9PC9iPjxwPmAsXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlRoYW5rIHlvdSBmb3Igdm90aW5nLjwvZGl2PicpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25Wb3RlUmV2ZWFsKGRhdGEpIHtcbiAgICAgICAgY2FsbEFjdGlvbihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmNvbW1pdCAmJiBkYXRhLml0ZW0gJiYgZGF0YS5zYWx0KSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgcmV2ZWFsVm90ZShkYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBgPHA+U2VuZGluZyByZXZlYWwgdHJhbnNhY3Rpb24gZm9yIGNvdXBvbjwvcD48cD48Yj4ke2RhdGEubmFtZX08L2I+PHA+YCxcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+VGhhbmsgeW91IGZvciB2b3RpbmcuPC9kaXY+JylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBDb3Vwb25EaWFsb2dzKHtcbiAgICAgICAgbW9kZSwgZW5hYmxlVm90aW5nLFxuICAgIH0pIHtcbiAgICAgICAgY29uc3QgZGlhbG9nQnV0dG9ucyA9IG1vZGUgPT09ICdtYW5hZ2UnID8gWydlZGl0JywgJ3JlbW92ZSddXG4gICAgICAgICAgICA6IG1vZGUgPT09ICd3aXRoZHJhdycgPyBbJ3dpdGhkcmF3J11cbiAgICAgICAgICAgICAgICA6IG1vZGUgPT09ICdhcHByb3ZhbCcgPyBbJ2FjY2VwdCcsICdyZWplY3QnXVxuICAgICAgICAgICAgICAgICAgICA6IG1vZGUgPT09ICdtYXJrZXQnID8gWydidXknXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBtb2RlID09PSAnYWN0aXZlJyA/IFsndXNlJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFsnYnV5J11cblxuICAgICAgICBpZiAoZW5hYmxlVm90aW5nKSBkaWFsb2dCdXR0b25zLnB1c2goJ3ZvdGUnKVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TW9kYWwgb3Blbj17ZGlhbG9nT3BlbmVkfSBvbkNsb3NlPXtvbkRpYWxvZ0Nsb3NlfT5cbiAgICAgICAgICAgICAgICA8RGlhbG9nXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnM9e2RpYWxvZ0J1dHRvbnN9XG4gICAgICAgICAgICAgICAgICAgIGNvdXBvbj17c2VsZWN0ZWRJdGVtfVxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtvbkRpYWxvZ0Nsb3NlfVxuICAgICAgICAgICAgICAgICAgICBvbkVkaXQ9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRGlhbG9nQ2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Gb3JtT3BlbihzZWxlY3RlZEl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uVm90ZT17b25Wb3RlfVxuICAgICAgICAgICAgICAgICAgICBvblJldmVhbD17b25SZXZlYWx9XG4gICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXsoKSA9PiBvblJlbW92ZShzZWxlY3RlZEl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICBvbldpdGhkcmF3PXsoKSA9PiBvbldpdGhkcmF3KHNlbGVjdGVkSXRlbSl9XG4gICAgICAgICAgICAgICAgICAgIG9uQWNjZXB0PXsoKSA9PiBvbkFjY2VwdChzZWxlY3RlZEl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICBvblJlamVjdD17KCkgPT4gb25SZWplY3Qoc2VsZWN0ZWRJdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgb25CdXJuPXsoKSA9PiBvbkJ1cm4oc2VsZWN0ZWRJdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgb25CdXk9eygpID0+IG9uQnV5KHNlbGVjdGVkSXRlbSl9XG4gICAgICAgICAgICAgICAgICAgIG9uVXNlPXsoKSA9PiBvblVzZShzZWxlY3RlZEl0ZW0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgb3Blbj17Zm9ybU9wZW5lZH1cbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtvbkZvcm1DbG9zZX1cbiAgICAgICAgICAgICAgICB3aWR0aD17e1xuICAgICAgICAgICAgICAgICAgICAwOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIGxnOiAnaW5pdGlhbCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBteD1cIjEwcHhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgICAgICAgIGVkaXRlZEl0ZW09e2VkaXRlZEl0ZW19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e29uRm9ybUNsb3NlfVxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgZGF0YSA9PiBvblNhdmUoZGF0YSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTW9kYWw+XG5cbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIG9wZW49e3ZvdGVGb3JtT3BlbmVkfVxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e29uVm90ZUZvcm1DbG9zZX1cbiAgICAgICAgICAgICAgICB3aWR0aD17e1xuICAgICAgICAgICAgICAgICAgICAwOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIGxnOiAnaW5pdGlhbCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBteD1cIjEwcHhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGb3JtVm90ZVxuICAgICAgICAgICAgICAgICAgICBpdGVtPXt2b3RlSXRlbT8uaXRlbSB8fCB2b3RlSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17b25Wb3RlRm9ybUNsb3NlfVxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17b25Wb3RlQ29tbWl0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L01vZGFsPlxuXG4gICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICBvcGVuPXtyZXZlYWxGb3JtT3BlbmVkfVxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e29uUmV2ZWFsRm9ybUNsb3NlfVxuICAgICAgICAgICAgICAgIHdpZHRoPXt7XG4gICAgICAgICAgICAgICAgICAgIDA6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgbGc6ICdpbml0aWFsJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG14PVwiMTBweFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZvcm1SZXZlYWxcbiAgICAgICAgICAgICAgICAgICAgaXRlbT17cmV2ZWFsSXRlbT8uaXRlbSB8fCByZXZlYWxJdGVtfVxuICAgICAgICAgICAgICAgICAgICB2b3Rpbmc9e3JldmVhbE9wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17b25SZXZlYWxGb3JtQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtvblZvdGVSZXZlYWx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTW9kYWw+XG5cbiAgICAgICAgICAgIDxNb2RhbCBvcGVuPXtyZXN1bHRPcGVuZWR9IG9uQ2xvc2U9e29uUmVzdWx0Q2xvc2V9PlxuICAgICAgICAgICAgICAgIDxSZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgdGV4dD17cmVzdWx0VGV4dH1cbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17b25SZXN1bHRDbG9zZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgIDxNb2RhbCBvcGVuPXt0eXBlb2YgbG9hZGluZyA9PT0gJ3N0cmluZyd9IG9uQ2xvc2U9eygpID0+IHNldExvYWRpbmcoZmFsc2UpfT5cbiAgICAgICAgICAgICAgICA8TG9hZGluZyBjbGFzc05hbWU9XCJiZy1kYXJrXCIgdGV4dD17bG9hZGluZ30gLz5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICA8RXJyb3JEaWFsb2cgY2xhc3NOYW1lPVwiYmctZGFya1wiIHRleHQ9e2Vycm9yUmVzdWx0Py5tZXNzYWdlfSBvcGVuPXt0eXBlb2YgZXJyb3JSZXN1bHQgPT09ICdvYmplY3QnfSBvbkNsb3NlPXsoKSA9PiBzZXRFcnJvclJlc3VsdChmYWxzZSl9IC8+XG4gICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgQ291cG9uRGlhbG9ncyxcbiAgICAgICAgc2VsZWN0ZWRJdGVtLFxuICAgICAgICBlZGl0ZWRJdGVtLFxuICAgICAgICBkaWFsb2c6IFtkaWFsb2dPcGVuZWQsIG9uRGlhbG9nT3Blbiwgb25EaWFsb2dDbG9zZV0sXG4gICAgICAgIHJlc3VsdDogW3Jlc3VsdE9wZW5lZCwgb25SZXN1bHRPcGVuLCBvblJlc3VsdENsb3NlXSxcbiAgICAgICAgcmVzdWx0QnV5OiBbcmVzdWx0QnV5T3BlbmVkLCBvblJlc3VsdEJ1eU9wZW4sIG9uUmVzdWx0QnV5Q2xvc2VdLFxuICAgICAgICBmb3JtOiBbZm9ybU9wZW5lZCwgb25Gb3JtT3Blbiwgb25Gb3JtQ2xvc2VdLFxuICAgICAgICBzaG93SXRlbTogb25EaWFsb2dPcGVuLFxuICAgICAgICBvbkJ1eSxcbiAgICAgICAgb25Wb3RlLFxuICAgICAgICBvblJldmVhbCxcbiAgICAgICAgb25Vc2UsXG4gICAgICAgIG9uUmVtb3ZlLFxuICAgICAgICBvblNhdmUsXG4gICAgICAgIG9uUmVqZWN0LFxuICAgICAgICBvbkFjY2VwdCxcbiAgICAgICAgb25CdXJuLFxuICAgICAgICBvbldpdGhkcmF3LFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlQ291cG9uRGlhbG9nc1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VBcHBEaWFsb2dzIH0gZnJvbSAnLi91c2VBcHBEaWFsb2dzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VEaXNwYXRjaGVkQWN0aW9ucyB9IGZyb20gJy4vdXNlRGlzcGF0Y2hlZEFjdGlvbnMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVN1cHBsaWVyUmVnaXN0ZXJEaWFsb2dzIH0gZnJvbSAnLi91c2VTdXBwbGllclJlZ2lzdGVyRGlhbG9ncydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlQ291cG9uRGlhbG9ncyB9IGZyb20gJy4vdXNlQ291cG9uRGlhbG9ncydcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCBDb3Vwb24gZnJvbSAnLi4vY29tcG9uZW50cy9jb3Vwb24nXG5pbXBvcnQgeyB1c2VDb3Vwb25EaWFsb2dzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zZXJ2aWNlJ1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQnXG5cbmNvbnN0IENhcmQgPSBzdHlsZWQoQm94KWBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyBsaW5lYXIgMjAwbXM7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICB9XG5gXG5cbmNvbnN0IENvdXBvbnMgPSAoe1xuICAgIHNldEFjdGl2ZVVybCwgbW9kZSwgaXNNYW5hZ2VyLCBpdGVtcywgaGlkZUVtcHR5TGlzdE1lc3NhZ2UsIGVuYWJsZVZvdGluZyxcbn0pID0+IHtcbiAgICBjb25zdCB7IENvdXBvbkRpYWxvZ3MsIHNob3dJdGVtIH0gPSB1c2VDb3Vwb25EaWFsb2dzKClcbiAgICBpdGVtcyA/Pz0gW11cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2lzTWFuYWdlciAmJiBpdGVtcy5sZW5ndGggPT09IDAgJiYgIWhpZGVFbXB0eUxpc3RNZXNzYWdlID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFyayB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICBObyBjb3Vwb25zIHlldCwgYWRkIGEgY291cG9uIHRvIHN0YXJ0XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbCB9XG4gICAgICAgICAgICB7IWlzTWFuYWdlciAmJiBpdGVtcy5sZW5ndGggPT09IDAgJiYgIWhpZGVFbXB0eUxpc3RNZXNzYWdlID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFyayB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICBObyBjb3Vwb25zIHlldCwgZ28gdG8gJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGhyZWY9XCIjZmVhdHVyZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVVcmwoJyNmZWF0dXJlZCcpfT5NYXJrZXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyB0byBidXkgY291cG9uc1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IG51bGwgfVxuXG4gICAgICAgICAgICB7aXRlbXMubGVuZ3RoID4gMCA/IGl0ZW1zLm1hcChlID0+IChcbiAgICAgICAgICAgICAgICA8Qm94IGtleT17ZS5pZH0gcD1cIjIwcHhcIiB3aWR0aD17eyAwOiAnMTAwJScsIG1kOiAnaW5pdGlhbCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggYXM9e0NhcmR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2UuaXNFeHBpcmVkID8gJ2FsZXJ0IGFsZXJ0LWRhbmdlciBwLTEgbS0wJyA6ICcnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291cG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXt7IDA6ICcxMDAlJywgbWQ6ICczMDBweCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uKGUuaXRlbSB8fCBlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2hvd0l0ZW0oZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZS5pc0V4cGlyZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xIHRleHQtY2VudGVyXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyB9fT5UaGlzIGNvdXBvbiBoYXMgZXhwaXJlZDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKSkgOiBudWxsIH1cblxuICAgICAgICAgICAgPENvdXBvbkRpYWxvZ3MgbW9kZT17bW9kZX0gZW5hYmxlVm90aW5nPXtlbmFibGVWb3Rpbmd9IGlzTWFuYWdlcj17aXNNYW5hZ2VyfSAvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdXBvbnNcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbXBvcnQgQlRWb3RpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9jdXN0b20vYnRWb3RpbmcnXG5pbXBvcnQgeyBORlRJY29uLCBVc2VySWNvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci1jb250cm9scydcbmltcG9ydCB7IHVzZUNvdXBvbkRpYWxvZ3MgfSBmcm9tICcuLi9jb21wb25lbnRzL3NlcnZpY2UnXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZCdcbmltcG9ydCBCYWRnZSBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9CYWRnZSdcbmltcG9ydCB7XG4gICAgY29sb3JTdGF0dXMsIGZvcm1hdERhdGUsIGZvcm1hdE51bWJlciwgc2hvcnRBZGRyZXNzLFxufSBmcm9tICcuLi9saWJzL2RBcHAnXG5cbmNvbnN0IENhcmQgPSBzdHlsZWQoQm94KWBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyBsaW5lYXIgMjAwbXM7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICB9XG5gXG5cbmNvbnN0IENvdXBvbnNMaXN0ID0gKHtcbiAgICBtb2RlLCBpc01hbmFnZXIsIGl0ZW1zLCBzZXRBY3RpdmVVcmwsIGhpZGVFbXB0eUxpc3RNZXNzYWdlLCBlbmFibGVWb3RpbmcsXG59KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBDb3Vwb25EaWFsb2dzLCBzaG93SXRlbSxcbiAgICAgICAgb25XaXRoZHJhdywgb25CdXJuLFxuICAgICAgICBvbkFjY2VwdCwgb25SZWplY3QsXG4gICAgICAgIG9uVm90ZSwgb25SZXZlYWwsXG4gICAgfSA9IHVzZUNvdXBvbkRpYWxvZ3MoKVxuXG4gICAgaXRlbXMgPz89IFtdXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICB7aXRlbXMubGVuZ3RoID09PSAwICYmIGlzTWFuYWdlciAmJiAhaGlkZUVtcHR5TGlzdE1lc3NhZ2UgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhcmsgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIE5vIGNvdXBvbnMgeWV0LCBnbyB0byAmbmJzcDtcbiAgICAgICAgICAgICAgICA8Qm94IGFzPVwic3BhblwiIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVVybCgnI3N1cHBsaWVyL21hbmFnZScpfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgaHJlZj1cIiNzdXBwbGllci9tYW5hZ2VcIj5NYW5hZ2UgQ291cG9uczwvYT5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICZuYnNwOyB0byBhZGQsIHVwZGF0ZSBvciByZW1vdmUgY291cG9uc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsIH1cblxuICAgICAgICB7aXRlbXMubGVuZ3RoID09PSAwICYmICFpc01hbmFnZXIgJiYgIWhpZGVFbXB0eUxpc3RNZXNzYWdlID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgTm8gY291cG9ucyB5ZXQsIGdvIHRvICZuYnNwO1xuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGhyZWY9XCIjZmVhdHVyZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVVcmwoJyNmZWF0dXJlZCcpfT5NYXJrZXQ8L2E+XG4gICAgICAgICAgICAmbmJzcDsgdG8gYnV5IGNvdXBvbnNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbCB9XG5cbiAgICAgICAge2l0ZW1zLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXJlc3BvbnNpdmUtc21cIj5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db3Vwb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5ORlQgQWRkcmVzczwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPntpc01hbmFnZXIgPyAnT3duZWQgYnknIDogJ1N1cHBsaWVyJ308L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzTWFuYWdlciA/IG1vZGUgPT09ICd3aXRoZHJhdycgPyAnQXZhaWxhYmxlIEZ1bmRzJyA6ICdMb2NrZWQgRnVuZHMnIDogJ1BhaWQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkV4cGlyZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPntpc01hbmFnZXIgPyAnQWN0aW9ucycgOiAnVm90aW5nJyB9PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVmQWRkciA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuaXNNYW5hZ2VyICYmIGUuaXNPd25lZCkgcmVmQWRkciA9IGUuc3VwcGxpZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlLmlzTWFuYWdlciAmJiAhZS5pc093bmVkKSByZWZBZGRyID0gZS51c2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZS5pc093bmVkKSByZWZBZGRyID0gZS51c2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZWZBZGRyID0gZS5zdXBwbGllclxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVmTmFtZSA9IHJlZkFkZHIgPT09IGUuc3VwcGxpZXIgPyBlLnN1cHBsaWVyRGF0YT8ubmFtZSB8fCBudWxsIDogcmVmQWRkclxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZS5jb3Vwb25TdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNDb2xvciA9IGNvbG9yU3RhdHVzKHN0YXR1cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtlLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7Zm9ybWF0RGF0ZShuZXcgRGF0ZShlLnRpbWVzdGFtcCkpfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17YGJhZGdlIGJhZGdlLSR7c3RhdHVzQ29sb3J9IHAtMmB9IG9uQ2xpY2s9eygpID0+IHNob3dJdGVtKGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBtYXhIZWlnaHQ6ICcyMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2UuaXRlbS5pbWFnZX0gd2lkdGg9XCIxNTBweFwiIGFsdD17ZS5pdGVtPy5uYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+PGI+e2AgJHtlLml0ZW0/Lm5hbWV9YH08L2I+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly90ZXN0bmV0LndhdmVzZXhwbG9yZXIuY29tL2Fzc2V0cy8ke2UuYXNzZXRJZH0vYH0gdGl0bGU9e2UuYXNzZXRJZH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TkZUSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvcnRBZGRyZXNzKGUuYXNzZXRJZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly90ZXN0bmV0LndhdmVzZXhwbG9yZXIuY29tL2FkZHJlc3MvJHtyZWZBZGRyfS9gfSB0aXRsZT17cmVmQWRkcn0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlckljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2UuaXNPd25lZCA/ICcgWW91ICcgOiByZWZOYW1lIHx8IHNob3J0QWRkcmVzcyhyZWZBZGRyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtmb3JtYXROdW1iZXIoZS5hbW91bnQpfSBgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNtYWxsXCI+V0FWRVM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXREYXRlKG5ldyBEYXRlKGUuaXRlbT8uZXhwaXJhdGlvbkRhdGUpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIHRleHQ9e3N0YXR1c30gdHlwZT17c3RhdHVzQ29sb3J9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc01hbmFnZXIgJiYgbW9kZSAhPT0gJ2hpc3RvcnknID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG1vZGUgPT09ICdhcHByb3ZhbCcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiTG9nb3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIkFjY2VwdCB0aGlzIGNvdXBvbiBhbmQgc2VuZCBORlQgdG8gYnV5ZXJcIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXsoKSA9PiBvbkFjY2VwdChlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiUmVqZWN0IHRoaXMgY291cG9uIGFuZCByZWZ1bmQgYnV5ZXJcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9eygpID0+IG9uUmVqZWN0KGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtb2RlID09PSAnd2l0aGRyYXcnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0aXRsZT17ZS5pc093bmVkID8gJ0J1cm4gKyBXaXRoZHJhdyBGdW5kcycgOiAnV2l0aGRyYXcgRnVuZHMnfSBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXsoKSA9PiBvbldpdGhkcmF3KGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdpdGhkcmF3IEZ1bmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtb2RlID09PSAnYnVybicgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IG9uQnVybihlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCdXJuIENvdXBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgIWlzTWFuYWdlciAmJiAobW9kZSA9PT0gJ2FjdGl2ZScgfHwgbW9kZSA9PT0gJ3VzZWQnIHx8IG1vZGUgPT09ICdoaXN0b3J5JykgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QlRWb3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtPXtlLml0ZW0gfHwgZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b3Rpbmc9e2Uudm90aW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29tbWl0Vm90ZT17b25Wb3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmV2ZWFsVm90ZT17b25SZXZlYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbCB9XG5cbiAgICAgICAgPENvdXBvbkRpYWxvZ3MgaXNNYW5hZ2VyPXtpc01hbmFnZXJ9IG1vZGU9e21vZGV9IGVuYWJsZVZvdGluZz17ZW5hYmxlVm90aW5nfSAvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdXBvbnNMaXN0XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1uZXN0ZWQtdGVybmFyeSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQnXG5pbXBvcnQge1xuICAgIGNvbG9yU3RhdHVzLCBmb3JtYXREYXRlLCBmb3JtYXROdW1iZXIsIHNob3J0QWRkcmVzcyxcbn0gZnJvbSAnLi4vbGlicy9kQXBwJ1xuaW1wb3J0IHsgdXNlQ291cG9uRGlhbG9ncyB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2VydmljZSdcbmltcG9ydCBCYWRnZSBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9CYWRnZSdcbmltcG9ydCB7IE5GVEljb24sIFVzZXJJY29uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLWNvbnRyb2xzJ1xuXG5jb25zdCBDYXJkID0gc3R5bGVkKEJveClgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgbGluZWFyIDIwMG1zO1xuICAgICY6aG92ZXIge1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgfVxuYFxuXG5jb25zdCBQdXJjaGFzZXMgPSAoe1xuICAgIGl0ZW1zLCBzZXRBY3RpdmVVcmwsIG1vZGUsIGlzTWFuYWdlciwgaGlkZUVtcHR5TGlzdE1lc3NhZ2UsIGVuYWJsZVZvdGluZyxcbn0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIENvdXBvbkRpYWxvZ3MsIHNob3dJdGVtLFxuICAgICAgICBvbkFjY2VwdCwgb25SZWplY3QsXG4gICAgfSA9IHVzZUNvdXBvbkRpYWxvZ3MoKVxuXG4gICAgaXRlbXMgPz89IFtdXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICB7aXRlbXMubGVuZ3RoID09PSAwICYmIGlzTWFuYWdlciAmJiAhaGlkZUVtcHR5TGlzdE1lc3NhZ2UgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhcmsgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBObyBwdXJjaGFzZXMgeWV0LCBnbyB0byAmbmJzcDtcbiAgICAgICAgICAgICAgICA8Qm94IGFzPVwic3BhblwiIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVVybCgnI3N1cHBsaWVyL21hbmFnZScpfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgaHJlZj1cIiNzdXBwbGllci9tYW5hZ2VcIj5NYW5hZ2UgQ291cG9uczwvYT5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAmbmJzcDsgdG8gYWRkLCB1cGRhdGUgb3IgcmVtb3ZlIGNvdXBvbnNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbCB9XG5cbiAgICAgICAge2l0ZW1zLmxlbmd0aCA9PT0gMCAmJiAhaXNNYW5hZ2VyICYmICFoaWRlRW1wdHlMaXN0TWVzc2FnZSA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIE5vIHB1cmNoYXNlcyB5ZXQsIGdvIHRvICZuYnNwO1xuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGhyZWY9XCIjZmVhdHVyZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVVcmwoJyNmZWF0dXJlZCcpfT5NYXJrZXQ8L2E+XG4gICAgICAgICAgICAmbmJzcDsgdG8gYnV5IGNvdXBvbnNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbCB9XG5cbiAgICAgICAge2l0ZW1zLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNvdXBvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+Jm5ic3A7PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57aXNNYW5hZ2VyID8gJ0J1eWVyJyA6ICdTdXBwbGllcid9PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+RXhwaXJlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAge2lzTWFuYWdlciAmJiBtb2RlICE9PSAnaGlzdG9yeScgPyAoPHRoPkFjdGlvbnM8L3RoPikgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZBZGRyID0gaXNNYW5hZ2VyID8gZS51c2VyIDogZS5zdXBwbGllclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VwcGxpZXJOYW1lID0gIWlzTWFuYWdlciA/IGUuc3VwcGxpZXJEYXRhPy5uYW1lIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gbW9kZSA9PT0gJ2hpc3RvcnknID8gZS5zdGF0dXMgOiBlLmNvdXBvblN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzQ29sb3IgPSBjb2xvclN0YXR1cyhzdGF0dXMpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3Vwb25TdGF0dXNDb2xvciA9IGNvbG9yU3RhdHVzKGUuY291cG9uU3RhdHVzKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2UuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7Zm9ybWF0RGF0ZShuZXcgRGF0ZShlLnRpbWVzdGFtcCkpfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17YGJhZGdlIGJhZGdlLSR7c3RhdHVzQ29sb3J9IHAtMmB9IG9uQ2xpY2s9eygpID0+IHNob3dJdGVtKGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG1heEhlaWdodDogJzIwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtlLml0ZW0uaW1hZ2V9IHdpZHRoPVwiMTUwcHhcIiBhbHQ9e2UuaXRlbT8ubmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj48Yj57YCAke2UuaXRlbT8ubmFtZX1gfTwvYj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtb2RlID09PSAnaGlzdG9yeScgJiYgdHlwZW9mIGUuYXNzZXRJZCA9PT0gJ3N0cmluZycgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnbmZ0OiAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5GVEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly90ZXN0bmV0LndhdmVzZXhwbG9yZXIuY29tL2Fzc2V0cy8ke2UuYXNzZXRJZH1gfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+e3Nob3J0QWRkcmVzcyhlLmFzc2V0SWQpfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J3N0YXR1czogJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSB0ZXh0PXtlLmNvdXBvblN0YXR1c30gdHlwZT17Y291cG9uU3RhdHVzQ29sb3J9IHA9ezB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vdGVzdG5ldC53YXZlc2V4cGxvcmVyLmNvbS9hZGRyZXNzLyR7cmVmQWRkcn0vYH0gdGl0bGU9e3JlZkFkZHJ9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlckljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGAgJHtzdXBwbGllck5hbWUgfHwgc2hvcnRBZGRyZXNzKHJlZkFkZHIpfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtmb3JtYXROdW1iZXIoZS5hbW91bnQpfSBgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic21hbGxcIj5XQVZFUzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdERhdGUobmV3IERhdGUoZS5pdGVtPy5leHBpcmF0aW9uRGF0ZSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgdGV4dD17c3RhdHVzfSB0eXBlPXtzdGF0dXNDb2xvcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzTWFuYWdlciAmJiBtb2RlICE9PSAnaGlzdG9yeScgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtb2RlID09PSAnYXBwcm92YWwnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkxvZ291dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJBY2NlcHQgdGhpcyBjb3Vwb24gYW5kIHNlbmQgTkZUIHRvIGJ1eWVyXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCIgb25DbGljaz17KCkgPT4gb25BY2NlcHQoZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIlJlamVjdCB0aGlzIGNvdXBvbiBhbmQgcmVmdW5kIGJ1eWVyXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiBvblJlamVjdChlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgKSA6IG51bGwgfVxuXG4gICAgICAgIDxDb3Vwb25EaWFsb2dzIGlzTWFuYWdlcj17aXNNYW5hZ2VyfSBtb2RlPXttb2RlfSBlbmFibGVWb3Rpbmc9e2VuYWJsZVZvdGluZ30gLz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQdXJjaGFzZXNcbiIsImNvbnN0IHRoZW1lID0ge1xuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIHNtOiAnNjIwcHgnLFxuICAgICAgICBtZDogJzc2OHB4JyxcbiAgICAgICAgbGc6ICcxMDI0cHgnLFxuICAgICAgICB4bDogJzEyMDBweCcsXG4gICAgfSxcbiAgICBjb2xvcnM6IHtcbiAgICAgICAgYmxhY2s6IFsnIzMzMyddLFxuICAgICAgICBibHVlOiBbJyMyRUI0RkYnXSxcbiAgICAgICAgZ3JheTogWycjZmZmJywgJyNGN0Y4RkEnLCAnI0EwQTZDMycsICcjRDhEOEQ4J10sXG4gICAgICAgIHJlZDogWycjRkYwMDAwJ10sXG4gICAgICAgIGdyZWVuOiBbJyNCM0ZGREUnLCAnIzJkOWMyOSddLFxuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWR1Y2VyKGluaXRpYWxTdGF0ZSwgaGFuZGxlcnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhoYW5kbGVycykuZmluZCh4ID0+IHggPT09IGFjdGlvbi50eXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXJzW2FjdGlvbi50eXBlXShzdGF0ZSwgYWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBtYWtlQWN0aW9uQ3JlYXRvcih0eXBlLCAuLi5hcmdOYW1lcykge1xuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSB7IHR5cGUgfTtcbiAgICAgICAgYXJnTmFtZXMuZm9yRWFjaCgoXywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGFjdGlvblthcmdOYW1lc1tpbmRleF1dID0gYXJnc1tpbmRleF07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWN0aW9uO1xuICAgIH07XG59XG4iLCJjb25zdCBmZXRjaENvbnN0ID0gY29uc3RhbnQgPT4gKHtcbiAgICBDTEVBUjogYCR7Y29uc3RhbnR9X0NMRUFSYCxcbiAgICBFUlJPUjogYCR7Y29uc3RhbnR9X0VSUk9SYCxcbiAgICBSRVFVRVNUOiBgJHtjb25zdGFudH1fUkVRVUVTVGAsXG4gICAgU1VDQ0VTUzogYCR7Y29uc3RhbnR9X1NVQ0NFU1NgLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoQ29uc3Q7XG4iLCJjb25zdCBwaXBlUmVkdWNlcnMgPSAoLi4ucmVkdWNlcnMpID0+IChzdGF0ZSwgYWN0aW9uKSA9PlxuICAgIHJlZHVjZXJzLnJlZHVjZSgobmV4dCwgcmVkdWNlcikgPT4gcmVkdWNlcihuZXh0LCBhY3Rpb24pLCBzdGF0ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IHBpcGVSZWR1Y2VycztcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltbXV0YWJsZVJlZHVjZXIoaW5pdGlhbFN0YXRlLCBoYW5kbGVycykge1xuICAgIHJldHVybiBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGhhbmRsZXJzKS5maW5kKHggPT4geCA9PT0gYWN0aW9uLnR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0U3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyc1thY3Rpb24udHlwZV0oZHJhZnRTdGF0ZSwgYWN0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9O1xufVxuIiwiY29uc3QgcGlwZSA9ICh2YWx1ZSwgLi4uZnVuY3Rpb25zKSA9PiBmdW5jdGlvbnMucmVkdWNlKChuZXdWYWx1ZSwgZnVuYykgPT4gZnVuYyhuZXdWYWx1ZSksIHZhbHVlKTtcblxuZXhwb3J0IGNvbnN0IHBpcGVGID0gKC4uLmZ1bmN0aW9ucykgPT4gdmFsdWUgPT5cbiAgICBwaXBlKFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgLi4uZnVuY3Rpb25zLFxuICAgICk7XG5cbmV4cG9ydCBkZWZhdWx0IHBpcGU7XG4iLCJpbXBvcnQgeyBhc3NvY1BhdGgsIGNvbmNhdCwgaXMgfSBmcm9tICdyYW1kYSc7XG5cbmltcG9ydCB7IGNyZWF0ZVJlZHVjZXIgfSBmcm9tICcuL2NyZWF0ZVJlZHVjZXInO1xuXG5pbXBvcnQgeyBwaXBlIH0gZnJvbSAnLi4vc2VydmljZSc7XG5cbmNvbnN0IGZldGNoUmVkdWNlciA9IGZldGNoVHlwZSA9PiAoa2V5LCBpbml0aWFsVmFsdWUpID0+IHtcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcbiAgICBjb25zdCBpc0FycmF5ID0gaXMoQXJyYXksIGluaXRpYWxWYWx1ZSk7XG5cbiAgICByZXR1cm4gY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIHtcbiAgICAgICAgW2ZldGNoVHlwZS5SRVFVRVNUXTogYXNzb2NQYXRoKFtrZXksICdpc0ZldGNoaW5nJ10sIHRydWUpLFxuICAgICAgICBbZmV0Y2hUeXBlLlNVQ0NFU1NdOiAoc3RhdGUsIHsgcmVzcG9uc2UgfSkgPT5cbiAgICAgICAgICAgIHBpcGUoXG4gICAgICAgICAgICAgICAgYXNzb2NQYXRoKFxuICAgICAgICAgICAgICAgICAgICBba2V5LCAnZGF0YSddLFxuICAgICAgICAgICAgICAgICAgICBpc0FycmF5ID8gY29uY2F0KHN0YXRlW2tleV0uZGF0YSwgcmVzcG9uc2UpIDogcmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgYXNzb2NQYXRoKFtrZXksICdpc0ZldGNoaW5nJ10sIGZhbHNlKSxcbiAgICAgICAgICAgICksXG4gICAgICAgIFtmZXRjaFR5cGUuRVJST1JdOiBhc3NvY1BhdGgoW2tleSwgJ2lzRmV0Y2hpbmcnXSwgZmFsc2UpLFxuICAgICAgICBbZmV0Y2hUeXBlLkNMRUFSXTogc3RhdGUgPT5cbiAgICAgICAgICAgIHBpcGUoXG4gICAgICAgICAgICAgICAgYXNzb2NQYXRoKFtrZXksICdkYXRhJ10sIGluaXRpYWxWYWx1ZSwgc3RhdGUpLFxuICAgICAgICAgICAgICAgIGFzc29jUGF0aChba2V5LCAnaXNGZXRjaGluZyddLCBmYWxzZSksXG4gICAgICAgICAgICApLFxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hSZWR1Y2VyO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGZldGNoUmVkdWNlcktleShrZXksIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIFtrZXldOiB7XG4gICAgICAgICAgICBkYXRhOiBpbml0aWFsVmFsdWUsXG4gICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICB9O1xufVxuIiwiY29uc3QgZmV0Y2hLZXkgPSAoa2V5LCBpbml0aWFsVmFsdWUpID0+IGZldGNoUmVkdWNlckZuID0+IGZldGNoUmVkdWNlckZuKGtleSwgaW5pdGlhbFZhbHVlKTtcblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hLZXk7XG4iLCJleHBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAnLi9jcmVhdGVSZWR1Y2VyJztcbmV4cG9ydCB7IG1ha2VBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi9tYWtlQWN0aW9uQ3JlYXRvcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvRmV0Y2hDb25zdCB9IGZyb20gJy4vdG9GZXRjaENvbnN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGlwZVJlZHVjZXJzIH0gZnJvbSAnLi9waXBlUmVkdWNlcnMnO1xuZXhwb3J0IHsgY3JlYXRlSW1tdXRhYmxlUmVkdWNlciB9IGZyb20gJy4vY3JlYXRlSW1tdXRhYmxlUmVkdWNlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZldGNoUmVkdWNlciB9IGZyb20gJy4vZmV0Y2hSZWR1Y2VyJztcbmV4cG9ydCB7IGZldGNoUmVkdWNlcktleSB9IGZyb20gJy4vZmV0Y2hSZWR1Y2VyS2V5JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmV0Y2hLZXkgfSBmcm9tICcuL2ZldGNoS2V5JztcbiIsImltcG9ydCB7IGNyZWF0ZUltbXV0YWJsZVJlZHVjZXIsIG1ha2VBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vbGlicy9yZWR1eC1hY3Rpb25zJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgbW9kYWxNZW51T3BlbjogZmFsc2UsXG59XG5cbmV4cG9ydCBjb25zdCBJTklUX0FQUCA9ICdJTklUX0FQUCdcbmNvbnN0IENIQU5HRV9NT0JJTEVfTUVOVV9TVEFURSA9ICdDSEFOR0VfTU9CSUxFX01FTlVfU1RBVEUnXG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VNb2JpbGVNZW51U3RhdGUgPSBtYWtlQWN0aW9uQ3JlYXRvcihDSEFOR0VfTU9CSUxFX01FTlVfU1RBVEUsICdpc09wZW4nKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbW11dGFibGVSZWR1Y2VyKGluaXRpYWxTdGF0ZSwge1xuICAgIFtDSEFOR0VfTU9CSUxFX01FTlVfU1RBVEVdOiAoc3RhdGUsIHsgaXNPcGVuIH0pID0+IHtcbiAgICAgICAgc3RhdGUubW9kYWxNZW51T3BlbiA9IGlzT3BlblxuICAgIH0sXG59KVxuIiwiaW1wb3J0IFJlYWN0LCB7XG4gICAgdXNlRWZmZWN0LCBtZW1vLCB1c2VDYWxsYmFjayxcbn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTWVkaWFRdWVyeSBmcm9tICdyZWFjdC1yZXNwb25zaXZlJ1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJ1xuXG5pbXBvcnQgeyBGbGV4LCBCb3ggfSBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZCdcbmltcG9ydCAqIGFzIENvbnRyb2xzIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci1jb250cm9scydcbmltcG9ydCAqIGFzIExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9zdHlsZWQtY29tcG9uZW50cy90aGVtZSdcbmltcG9ydCAqIGFzIExJTktTIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L2xpbmtzJ1xuaW1wb3J0IHsgdXNlQ291cG9uRGlhbG9ncywgdXNlRGlzcGF0Y2hlZEFjdGlvbnMgfSBmcm9tICcuLi9jb21wb25lbnRzL3NlcnZpY2UnXG5pbXBvcnQgKiBhcyByb290QWN0aW9ucyBmcm9tICcuLi9yZWR1Y2Vycy9yb290J1xuXG5jb25zdCB7IGJyZWFrcG9pbnRzIH0gPSB0aGVtZVxuXG5jb25zdCBtZW51SGVpZ2h0ID0ge1xuICAgIDA6ICcxMTRweCcsXG4gICAgc206ICcxMzFweCcsXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgaXNPcGVuOiBzdGF0ZS5yb290Lm1vZGFsTWVudU9wZW4sXG59KVxuXG5jb25zdCBpbml0QWN0aXZlVXJsID0gKHNldEFjdGl2ZVVybCkgPT4ge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgaWYgKGhyZWYuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgIGNvbnN0IHBvcyA9IGhyZWYuaW5kZXhPZignIycpXG4gICAgICAgIGlmIChwb3MgPiAwKSB7XG4gICAgICAgICAgICBzZXRBY3RpdmVVcmwoaHJlZi5zdWJzdHIocG9zKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZVVybCgnI2ZlYXR1cmVkJylcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEFjdGl2ZVVybCgnI2ZlYXR1cmVkJylcbiAgICB9XG59XG5cbmNvbnN0IEhlYWRlciA9ICh7XG4gICAgYWNjb3VudCwgYWN0aXZlVXJsLCBzZXRBY3RpdmVVcmwsIG9uU3VwcGxpZXJSZWdpc3Rlciwgc3VwcGxpZXJBcHByb3ZhbENvdW50ZXIsXG4gICAgLy8gb25DcmVhdGVDb3Vwb24sIGZpbHRlckFjdGl2ZSwgb25DaGFuZ2VGaWx0ZXJTdGF0ZSxcbn0pID0+IHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpbml0QWN0aXZlVXJsKHNldEFjdGl2ZVVybClcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IHsgaXNPcGVuIH0gPSB1c2VTZWxlY3RvcihtYXBTdGF0ZVRvUHJvcHMpXG4gICAgY29uc3QgeyBjaGFuZ2VNb2JpbGVNZW51U3RhdGUgfSA9IHVzZURpc3BhdGNoZWRBY3Rpb25zKHJvb3RBY3Rpb25zKVxuICAgIGNvbnN0IG9uQ2xvc2VNZW51ID0gdXNlQ2FsbGJhY2soKCkgPT4gY2hhbmdlTW9iaWxlTWVudVN0YXRlKGZhbHNlKSlcblxuICAgIGNvbnN0IE92ZXJsYXkgPSBMYXlvdXQuT3ZlcmxheSgpXG5cbiAgICBjb25zdCB7XG4gICAgICAgIENvdXBvbkRpYWxvZ3MsXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgICBmb3JtOiBbZm9ybU9wZW5lZCwgb25Gb3JtT3Blbl0sXG4gICAgfSA9IHVzZUNvdXBvbkRpYWxvZ3MoKVxuXG4gICAgY29uc3Qgb25DcmVhdGVDb3Vwb24gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIG9uRm9ybU9wZW4oKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Q291cG9uRGlhbG9ncyAvPlxuICAgICAgICAgICAgPENvbnRyb2xzLkhlYWRlckxheW91dCBoZWlnaHQ9e21lbnVIZWlnaHR9IHBvc2l0aW9uPVwiZml4ZWRcIj5cbiAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAwOiAnZmxleC1zdGFydCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbTogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICBweD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgMDogJzIwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGc6ICczOXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHhsOiAnMjBweCcsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHB0PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAwOiAnMTRweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbTogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIDA6ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgc206ICdyb3cnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXggd2lkdGg9XCIxMDAlXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuSGVhZGVyTGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBsaWVyQXBwcm92YWxDb3VudGVyPXtzdXBwbGllckFwcHJvdmFsQ291bnRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VwcGxpZXJSZWdpc3Rlcj17b25TdXBwbGllclJlZ2lzdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVVybD17YWN0aXZlVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtzPXtMSU5LUy5oZWFkZXJMaW5rc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyTGlua3M9e0xJTktTLnVzZXJMaW5rc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb2JpbGVNZW51U3RhdGU9e2NoYW5nZU1vYmlsZU1lbnVTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZXRSZXNvbHV0aW9uPXticmVha3BvaW50cy5sZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVSZXNvbHV0aW9uPXticmVha3BvaW50cy5zbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51T3BlbmVkPXtpc09wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DcmVhdGVDb3Vwb249e29uQ3JlYXRlQ291cG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICA8TWVkaWFRdWVyeSBtYXhXaWR0aD17YnJlYWtwb2ludHMuc219PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggd2lkdGg9XCIxMDAlXCIgcHQ9XCIxMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLkxvZ28gaXNBY3RpdmUgc2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBmbGV4PXsxfSBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuU2VhcmNoSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgPC9NZWRpYVF1ZXJ5PlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvQ29udHJvbHMuSGVhZGVyTGF5b3V0PlxuICAgICAgICAgICAgPEJveCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9e21lbnVIZWlnaHR9IC8+XG4gICAgICAgICAgICA8TWVkaWFRdWVyeSBtYXhXaWR0aD17YnJlYWtwb2ludHMubGd9PlxuICAgICAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uIHVubW91bnRPbkV4aXQgey4uLkxheW91dC5tZW51QW5pbWF0aW9ufSBpbj17aXNPcGVufT5cbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5Nb2JpbGVNZW51XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlVXJsPXsodXJsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlVXJsKHVybClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlTWVudSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wPVwiMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2VNZW51fVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uIHVubW91bnRPbkV4aXQgey4uLkxheW91dC5vdmVybGF5QW5pbWF0aW9ufSBpbj17aXNPcGVufT5cbiAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXkgb25DbGljaz17b25DbG9zZU1lbnV9IHRvcD1cIjBweFwiIC8+XG4gICAgICAgICAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgICAgICAgPC9NZWRpYVF1ZXJ5PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oSGVhZGVyKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1lZGlhUXVlcnkgZnJvbSAncmVhY3QtcmVzcG9uc2l2ZSdcblxuaW1wb3J0IHsgQm94LCBGbGV4LCBUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQnXG5pbXBvcnQgeyBTb2NpYWxCdXR0b25zLCBMb2dvQ29weXJpZ2h0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQge1xuICAgIGNvbXBhbnlMaW5rcywgc3VwcGxpZXJMaW5rcywgbXlMaW5rcywgbWFpbkxpbmtzLFxufSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9saW5rcydcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9zdHlsZWQtY29tcG9uZW50cy90aGVtZSdcblxuY29uc3QgeyBicmVha3BvaW50cyB9ID0gdGhlbWVcblxuY29uc3QgR3JvdXBMaW5rcyA9ICh7XG4gICAgYWNjb3VudCwgc2V0QWN0aXZlVXJsLCB0aXRsZSwgbGlua3MsXG59KSA9PiAoXG4gICAgPEZsZXggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICA8VGV4dCBhcz1cInNwYW5cIiBmb250V2VpZ2h0PVwiYm9sZFwiIGxldHRlclNwYWNpbmc9XCIwLjY2cHhcIiBmb250U2l6ZT1cIjE0cHhcIj5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8Qm94IHB0PVwiMTBweFwiPlxuICAgICAgICAgICAge2xpbmtzLmZpbHRlcigoeyBpc0VuYWJsZWQgfSkgPT4gdHlwZW9mIGlzRW5hYmxlZCAhPT0gJ2Z1bmN0aW9uJyB8fCBpc0VuYWJsZWQoYWNjb3VudCkpLm1hcCgoeyB1cmwsIHRpdGxlOiBsaW5rVGl0bGUgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxhIGtleT17dXJsfSBocmVmPXt1cmx9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cImdyYXkuMlwiIGxpbmVIZWlnaHQ9XCIyNHB4XCIgZm9udFNpemU9XCIxNHB4XCIgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVXJsKHVybCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2xpbmtUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICA8L0ZsZXg+XG4pXG5cbmNvbnN0IEZvb3RlciA9ICh7IGFjY291bnQsIHNldEFjdGl2ZVVybCB9KSA9PiAoXG4gICAgPEZsZXggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGJnPVwiZ3JheS4wXCIgcHg9XCI0MHB4XCI+XG4gICAgICAgIDxNZWRpYVF1ZXJ5IG1pbldpZHRoPXticmVha3BvaW50cy5zbX0+XG4gICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgIHB5PVwiNDhweFwiXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e3tcbiAgICAgICAgICAgICAgICAgICAgeGw6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1lZGlhUXVlcnkgbWluV2lkdGg9e2JyZWFrcG9pbnRzLnhsfT5cbiAgICAgICAgICAgICAgICAgICAgPExvZ29Db3B5cmlnaHQgLz5cbiAgICAgICAgICAgICAgICA8L01lZGlhUXVlcnk+XG5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIHBsPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB4bDogJzU0cHgnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEdyb3VwTGlua3MgYWNjb3VudD17YWNjb3VudH0gc2V0QWN0aXZlVXJsPXtzZXRBY3RpdmVVcmx9IHRpdGxlPVwiQ29tcGFueVwiIGxpbmtzPXtjb21wYW55TGlua3N9IC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveCBwbD1cIjU0cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgPEdyb3VwTGlua3MgYWNjb3VudD17YWNjb3VudH0gc2V0QWN0aXZlVXJsPXtzZXRBY3RpdmVVcmx9IHRpdGxlPVwiV29yayB3aXRoIENvdXBvbiBCYXphYXJcIiBsaW5rcz17bXlMaW5rc30gLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94IHBsPVwiNTRweFwiPlxuICAgICAgICAgICAgICAgICAgICA8R3JvdXBMaW5rcyBhY2NvdW50PXthY2NvdW50fSBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH0gdGl0bGU9XCJTdXBwbGllclwiIGxpbmtzPXtzdXBwbGllckxpbmtzfSAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3ggcGw9XCI1NHB4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxHcm91cExpbmtzIGFjY291bnQ9e2FjY291bnR9IHNldEFjdGl2ZVVybD17c2V0QWN0aXZlVXJsfSB0aXRsZT1cIk1haW5cIiBsaW5rcz17bWFpbkxpbmtzfSAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxNZWRpYVF1ZXJ5IG1pbldpZHRoPXticmVha3BvaW50cy54bH0+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IHBsPVwiNTRweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNvY2lhbEJ1dHRvbnMgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgIDwvTWVkaWFRdWVyeT5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9NZWRpYVF1ZXJ5PlxuICAgICAgICA8TWVkaWFRdWVyeSBtYXhXaWR0aD17YnJlYWtwb2ludHMueGx9PlxuICAgICAgICAgICAgPE1lZGlhUXVlcnkgbWluV2lkdGg9e2JyZWFrcG9pbnRzLnNtfT5cbiAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjFweFwiIGJnPVwiZ3JheS4zXCIgLz5cbiAgICAgICAgICAgIDwvTWVkaWFRdWVyeT5cbiAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgcHQ9XCIzNXB4XCJcbiAgICAgICAgICAgICAgICBwYj1cIjUwcHhcIlxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249e3tcbiAgICAgICAgICAgICAgICAgICAgMDogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgICAgIHNtOiAncm93JyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNZWRpYVF1ZXJ5IG1pbldpZHRoPXticmVha3BvaW50cy5zbX0+XG4gICAgICAgICAgICAgICAgICAgIDxMb2dvQ29weXJpZ2h0IC8+XG4gICAgICAgICAgICAgICAgPC9NZWRpYVF1ZXJ5PlxuICAgICAgICAgICAgICAgIDxNZWRpYVF1ZXJ5IG1heFdpZHRoPXticmVha3BvaW50cy5zbX0+XG4gICAgICAgICAgICAgICAgICAgIDxMb2dvQ29weXJpZ2h0IHNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgICAgICAgPC9NZWRpYVF1ZXJ5PlxuICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgIHBsPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAwOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbTogJzEwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcHQ9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIDA6ICcyMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8U29jaWFsQnV0dG9ucyAvPlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9NZWRpYVF1ZXJ5PlxuICAgIDwvRmxleD5cbilcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIENvdXBvbnMgfSBmcm9tICcuL0NvdXBvbnMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvdXBvbnNMaXN0IH0gZnJvbSAnLi9Db3Vwb25zTGlzdCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHVyY2hhc2VzIH0gZnJvbSAnLi9QdXJjaGFzZXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlYWRlciB9IGZyb20gJy4vSGVhZGVyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGb290ZXIgfSBmcm9tICcuL0Zvb3RlcidcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bmVzY2FwZWQtZW50aXRpZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IEZsZXgsIExvYWRpbmcgfSBmcm9tICcuLi8uLi9zaGFyZWQnXG5pbXBvcnQgeyBDb3Vwb25zIH0gZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycydcbmltcG9ydCB7XG4gICAgc3Vic2NyaWJlLCBEQVRBLCBmZXRjaEl0ZW1zLFxufSBmcm9tICcuLi8uLi8uLi9saWJzL2RBcHAnXG5cbmNvbnN0IFBhZ2VNYXJrZXQgPSAoeyBhY3RpdmVVcmwsIHNldEFjdGl2ZVVybCwgZmlsdGVyID0gZSA9PiAhZS5pc0V4cGlyZWQgfSkgPT4ge1xuICAgIGNvbnN0IFtsb2FkaW5nRGF0YSwgc2V0TG9hZGluZ0RhdGFdID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbaXRlbXMsIHVwZGF0ZUl0ZW1zXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaERhdGEoKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nRGF0YSh0cnVlKVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gKGF3YWl0IGZldGNoSXRlbXMoKSkuZmlsdGVyKGZpbHRlcilcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdbIPCflIQgTWFya2V0IF0gOicsIGAke2xpc3QubGVuZ3RofSBpdGVtcyBsb2FkZWRgKVxuICAgICAgICAgICAgICAgIHVwZGF0ZUl0ZW1zKGxpc3QpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmUoREFUQSwgcmVmcmVzaERhdGEpXG4gICAgfSwgW2FjdGl2ZVVybF0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1saWdodCBhbGVydC1kaXNtaXNzaWJsZSBmYWRlIHNob3cgdGV4dC1jZW50ZXJcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgRmluZCBjb3Vwb25zIGluIHRoZSBiYXphYXIgbWFya2V0LCBhbmQgc3RhcnQgc2F2aW5nIG1vbmV5LlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIFRoYW5rcyB0byB0aGUgbWFueSBkaXNjb3VudCBjb3Vwb25zIGZyb20gb3VyIHN1cHBsaWVycy5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICAgICAgICAgIDxiPmNsaWNrIG9uIHRoZSBjb3Vwb24gb2YgeW91ciBjaG9pY2UsIHRoZW4gb24gXCJCdXlcIiB0byBidXkgaXQ8L2I+XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2xvYWRpbmdEYXRhID8gKDxMb2FkaW5nIC8+KSA6IG51bGwgfVxuICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgcHg9e3tcbiAgICAgICAgICAgICAgICAgICAgMDogJzIwcHgnLFxuICAgICAgICAgICAgICAgICAgICBsZzogJzM5cHgnLFxuICAgICAgICAgICAgICAgICAgICB4bDogJzIwcHgnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgZmxleFdyYXA9XCJ3cmFwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q291cG9uc1xuICAgICAgICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVVybD17c2V0QWN0aXZlVXJsfVxuICAgICAgICAgICAgICAgICAgICBtb2RlPVwibWFya2V0XCJcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVtcHR5TGlzdE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlVm90aW5nXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC8+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VNYXJrZXRcbiIsImltcG9ydCBQYWdlTWFya2V0IGZyb20gJy4vUGFnZU1hcmtldCdcblxuZXhwb3J0IGRlZmF1bHQgUGFnZU1hcmtldFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQnXG5cbmNvbnN0IE1lbnUgPSAoe1xuICAgIGFjdGl2ZVVybCwgc2V0QWN0aXZlVXJsLFxufSkgPT4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEJveCB0eXBlPVwidWxcIiBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnNcIj5cbiAgICAgICAgICAgICAgICA8Qm94IHR5cGU9XCJsaVwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVXJsKCcjbXkvY291cG9ucycpfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXthY3RpdmVVcmw/Lm1hdGNoKG5ldyBSZWdFeHAoJy4qLz8oI215W14vXSp8I215L2NvdXBvbnMuKikkJykpID8gJ25hdi1saW5rIGFjdGl2ZScgOiAnbmF2LWxpbmsnfSBocmVmPVwiI215L2NvdXBvbnNcIj5BY3RpdmUgQ291cG9uczwvYT5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94IHR5cGU9XCJsaVwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVXJsKCcjbXkvdXNlZCcpfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXthY3RpdmVVcmw/Lm1hdGNoKG5ldyBSZWdFeHAoJy4qLz8oI215L3VzZWQuKikkJykpID8gJ25hdi1saW5rIGFjdGl2ZScgOiAnbmF2LWxpbmsnfSBocmVmPVwiI215L3VzZWRcIj5Vc2VkIENvdXBvbnM8L2E+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveCB0eXBlPVwibGlcIiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVVybCgnI215L2V4cGlyZWQnKX0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YWN0aXZlVXJsPy5tYXRjaChuZXcgUmVnRXhwKCcuKi8/KCNteS9leHBpcmVkLiopJCcpKSA/ICduYXYtbGluayBhY3RpdmUnIDogJ25hdi1saW5rJ30gaHJlZj1cIiNteS9leHBpcmVkXCI+RXhwaXJlZCBDb3Vwb25zPC9hPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3ggdHlwZT1cImxpXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVVcmwoJyNteS9wdXJjaGFzZXMnKX0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YWN0aXZlVXJsPy5tYXRjaChuZXcgUmVnRXhwKCcuKi8/KCNteS9wdXJjaGFzZXMuKikkJykpID8gJ25hdi1saW5rIGFjdGl2ZScgOiAnbmF2LWxpbmsnfSBocmVmPVwiI215L3B1cmNoYXNlc1wiPlB1cmNoYXNlcyBoaXN0b3J5PC9hPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvPlxuXG4pXG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1hc3NvY2lhdGVkLWNvbnRyb2wgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IEZsZXgsIExvYWRpbmcgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQnXG5pbXBvcnQgeyBDb3Vwb25zIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycydcbmltcG9ydCB7XG4gICAgREFUQSwgZmV0Y2hVc2VyQWN0aXZlQ291cG9ucywgc3Vic2NyaWJlLFxufSBmcm9tICcuLi8uLi8uLi8uLi9saWJzL2RBcHAnXG5cbmNvbnN0IEFjID0gKHsgYWNjb3VudCwgc2V0QWN0aXZlVXJsIH0pID0+IHtcbiAgICBjb25zdCBbbG9hZGluZ0RhdGEsIHNldExvYWRpbmdEYXRhXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW2l0ZW1zLCB1cGRhdGVJdGVtc10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCB7IGFkZHJlc3MgfSA9IGFjY291bnRcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hEYXRhKCkge1xuICAgICAgICAgICAgc2V0TG9hZGluZ0RhdGEodHJ1ZSlcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IGF3YWl0IGZldGNoVXNlckFjdGl2ZUNvdXBvbnMoYWRkcmVzcylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdbIPCflIQgQWN0aXZlIENvdXBvbnMgXSA6JywgYCR7bGlzdC5sZW5ndGh9IGNvdXBvbnMgbG9hZGVkYClcbiAgICAgICAgICAgICAgICB1cGRhdGVJdGVtcyhsaXN0KVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWJzY3JpYmUoREFUQSwgcmVmcmVzaERhdGEpXG4gICAgfSwgW2FkZHJlc3NdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7bG9hZGluZ0RhdGEgPyAoPExvYWRpbmcgLz4pIDogbnVsbCB9XG4gICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBwPXt7XG4gICAgICAgICAgICAgICAgICAgIDA6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgbWQ6ICcwcHgnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgZmxleFdyYXA9XCJ3cmFwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q291cG9uc1xuICAgICAgICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVVybD17c2V0QWN0aXZlVXJsfVxuICAgICAgICAgICAgICAgICAgICBtb2RlPVwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVtcHR5TGlzdE1lc3NhZ2U9e2xvYWRpbmdEYXRhfVxuICAgICAgICAgICAgICAgICAgICBlbmFibGVWb3RpbmdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8Lz5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVuZXNjYXBlZC1lbnRpdGllcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgUHVyY2hhc2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycydcbmltcG9ydCB7IERBVEEsIGZldGNoVXNlclB1cmNoYXNlcywgc3Vic2NyaWJlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGlicy9kQXBwJ1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZCdcblxuY29uc3QgUHVyY2hhc2VzSGlzdG9yeSA9ICh7IGFjY291bnQsIHNldEFjdGl2ZVVybCB9KSA9PiB7XG4gICAgY29uc3QgW2xvYWRpbmdEYXRhLCBzZXRMb2FkaW5nRGF0YV0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtpdGVtcywgdXBkYXRlSXRlbXNdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgeyBhZGRyZXNzIH0gPSBhY2NvdW50XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiByZWZyZXNoRGF0YSgpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmdEYXRhKHRydWUpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIHB1cmNoYXNlcyBoaXN0b3J5XG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IGF3YWl0IGZldGNoVXNlclB1cmNoYXNlcyhhZGRyZXNzKVxuICAgICAgICAgICAgICAgIGNvbnN0IGhpc3RvcnlMaXN0ID0gbGlzdC5zb3J0KChhLCBiKSA9PiBhLnRpbWVzdGFtcCA8IGIudGltZXN0YW1wKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1sg8J+UhCBQdXJjaGFzZXMgSGlzdG9yeSBdIDonLCBgJHtoaXN0b3J5TGlzdC5sZW5ndGh9IHB1cmNoYXNlcyBsb2FkZWRgKVxuICAgICAgICAgICAgICAgIHVwZGF0ZUl0ZW1zKGhpc3RvcnlMaXN0KVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaWJlKERBVEEsIHJlZnJlc2hEYXRhKVxuICAgIH0sIFthZGRyZXNzXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7bG9hZGluZ0RhdGEgPyAoPExvYWRpbmcgLz4pIDogbnVsbCB9XG4gICAgICAgICAgICA8UHVyY2hhc2VzXG4gICAgICAgICAgICAgICAgaGlkZUVtcHR5TGlzdE1lc3NhZ2U9e2xvYWRpbmdEYXRhfVxuICAgICAgICAgICAgICAgIHNldEFjdGl2ZVVybD17c2V0QWN0aXZlVXJsfVxuICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICAgICAgICBtb2RlPVwiaGlzdG9yeVwiXG4gICAgICAgICAgICAgICAgZW5hYmxlVm90aW5nXG4gICAgICAgICAgICAvPlxuICAgICAgICA8Lz5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHVyY2hhc2VzSGlzdG9yeVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgQ291cG9uc0xpc3QgfSBmcm9tICcuLi8uLi8uLi8uLi9jb250YWluZXJzJ1xuaW1wb3J0IHtcbiAgICBEQVRBLCBmZXRjaFVzZXJVc2VkQ291cG9ucywgc3Vic2NyaWJlLFxufSBmcm9tICcuLi8uLi8uLi8uLi9saWJzL2RBcHAnXG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkJ1xuXG5jb25zdCBVc2VkQ291cG9ucyA9ICh7IGFjY291bnQsIHNldEFjdGl2ZVVybCB9KSA9PiB7XG4gICAgY29uc3QgW2xvYWRpbmdEYXRhLCBzZXRMb2FkaW5nRGF0YV0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtpdGVtcywgdXBkYXRlSXRlbXNdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgeyBhZGRyZXNzIH0gPSBhY2NvdW50XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiByZWZyZXNoRGF0YSgpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmdEYXRhKHRydWUpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBmZXRjaFVzZXJVc2VkQ291cG9ucyhhZGRyZXNzKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1sg8J+UhCBVc2VkIENvdXBvbnMgXSA6JywgYCR7bGlzdC5sZW5ndGh9IGNvdXBvbnMgbG9hZGVkYClcbiAgICAgICAgICAgICAgICB1cGRhdGVJdGVtcyhsaXN0KVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWJzY3JpYmUoREFUQSwgcmVmcmVzaERhdGEpXG4gICAgfSwgW2FkZHJlc3NdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtsb2FkaW5nRGF0YSA/ICg8TG9hZGluZyAvPikgOiBudWxsIH1cbiAgICAgICAgICAgIDxDb3Vwb25zTGlzdFxuICAgICAgICAgICAgICAgIHNldEFjdGl2ZVVybD17c2V0QWN0aXZlVXJsfVxuICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICAgICAgICBtb2RlPVwidXNlZFwiXG4gICAgICAgICAgICAgICAgaGlkZUVtcHR5TGlzdE1lc3NhZ2U9e2xvYWRpbmdEYXRhfVxuICAgICAgICAgICAgICAgIGVuYWJsZVZvdGluZ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZWRDb3Vwb25zXG5cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IENvdXBvbnNMaXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycydcbmltcG9ydCB7XG4gICAgREFUQSwgZmV0Y2hVc2VyRXhwaXJlZENvdXBvbnMsIHN1YnNjcmliZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbGlicy9kQXBwJ1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZCdcblxuY29uc3QgRXhwaXJlZENvdXBvbnMgPSAoeyBhY2NvdW50LCBzZXRBY3RpdmVVcmwgfSkgPT4ge1xuICAgIGNvbnN0IFtsb2FkaW5nRGF0YSwgc2V0TG9hZGluZ0RhdGFdID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbaXRlbXMsIHVwZGF0ZUl0ZW1zXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gYWNjb3VudFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaERhdGEoKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nRGF0YSh0cnVlKVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gYXdhaXQgZmV0Y2hVc2VyRXhwaXJlZENvdXBvbnMoYWRkcmVzcylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdbIPCflIQgRXhwaXJlZCBDb3Vwb25zIF0gOicsIGAke2xpc3QubGVuZ3RofSBjb3Vwb25zIGxvYWRlZGApXG4gICAgICAgICAgICAgICAgdXBkYXRlSXRlbXMobGlzdClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3Vic2NyaWJlKERBVEEsIHJlZnJlc2hEYXRhKVxuICAgIH0sIFthZGRyZXNzXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7bG9hZGluZ0RhdGEgPyAoPExvYWRpbmcgLz4pIDogbnVsbCB9XG4gICAgICAgICAgICA8Q291cG9uc0xpc3RcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH1cbiAgICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICAgICAgbW9kZT1cImhpc3RvcnlcIlxuICAgICAgICAgICAgICAgIGhpZGVFbXB0eUxpc3RNZXNzYWdlPXtsb2FkaW5nRGF0YX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeHBpcmVkQ291cG9uc1xuXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIE1lbnUgfSBmcm9tICcuL01lbnUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFjdGl2ZUNvdXBvbnMgfSBmcm9tICcuL0FjdGl2ZUNvdXBvbnMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFB1cmNoYXNlc0hpc3RvcnkgfSBmcm9tICcuL1B1cmNoYXNlc0hpc3RvcnknXG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZWRDb3Vwb25zIH0gZnJvbSAnLi9Vc2VkQ291cG9ucydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXhwaXJlZENvdXBvbnMgfSBmcm9tICcuL0V4cGlyZWRDb3Vwb25zJ1xuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW5lc2NhcGVkLWVudGl0aWVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7XG4gICAgQWN0aXZlQ291cG9ucywgRXhwaXJlZENvdXBvbnMsIE1lbnUsIFB1cmNoYXNlc0hpc3RvcnksXG59IGZyb20gJy4vY29tcG9uZW50cydcbmltcG9ydCBVc2VkQ291cG9ucyBmcm9tICcuL2NvbXBvbmVudHMvVXNlZENvdXBvbnMnXG5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICcuLi8uLi8uLi9saWJzL2RBcHAnXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi9zaGFyZWQnXG5cbmNvbnN0IFBhZ2VDb3Vwb25zID0gKHtcbiAgICBhY2NvdW50LCBhY3RpdmVVcmwsIHNldEFjdGl2ZVVybCxcbn0pID0+IChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHthY2NvdW50LmlzQ29ubmVjdGVkID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51IGFjdGl2ZVVybD17YWN0aXZlVXJsfSBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH0gLz5cbiAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVVybC5tYXRjaChuZXcgUmVnRXhwKCcuKi8/KCNteVteL10qfCNteS9jb3Vwb25zLiopJCcpKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWxpZ2h0IGFsZXJ0LWRpc21pc3NpYmxlIGZhZGUgc2hvdyB0ZXh0LWNlbnRlclwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmluZCBoZXJlIGFsbCB5b3VyIGNvdXBvbnMgYW5kIHRoZWlyIHZhbGlkaXR5IHBlcmlvZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBjYW4gdXNlIHRoZW0gYXQgYW55IHRpbWUgYnkgdHJhbnNmZXJyaW5nIHRoZW0gdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHJlc3BlY3RpdmUgc3VwcGxpZXIgaW4gb3JkZXIgdG8gZ2V0IHlvdXIgcHVyY2hhc2UgYWR2YW50YWdlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljayBvbiB0aGUgY291cG9uIG9mIHlvdXIgY2hvaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbiBvbiBcInVzZVwiIHRvIGFjdGl2YXRlIHRoZSB0cmFuc2ZlciB0byBpdHMgc3VwcGxpZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWN0aXZlQ291cG9ucyBhY2NvdW50PXthY2NvdW50fSBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVVybC5tYXRjaChuZXcgUmVnRXhwKCcuKi8/I215L3VzZWQuKiQnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1saWdodCBhbGVydC1kaXNtaXNzaWJsZSBmYWRlIHNob3cgdGV4dC1jZW50ZXJcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaW5kIGhlcmUgYWxsIHVzZWQgY291cG9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlZENvdXBvbnMgYWNjb3VudD17YWNjb3VudH0gc2V0QWN0aXZlVXJsPXtzZXRBY3RpdmVVcmx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVVcmwubWF0Y2gobmV3IFJlZ0V4cCgnLiovPyNteS9leHBpcmVkLiokJykpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtbGlnaHQgYWxlcnQtZGlzbWlzc2libGUgZmFkZSBzaG93IHRleHQtY2VudGVyXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmluZCBoZXJlIGFsbCBleHBpcmVkIGNvdXBvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV4cGlyZWRDb3Vwb25zIGFjY291bnQ9e2FjY291bnR9IHNldEFjdGl2ZVVybD17c2V0QWN0aXZlVXJsfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7YWN0aXZlVXJsLm1hdGNoKG5ldyBSZWdFeHAoJy4qLz8jbXkvcHVyY2hhc2VzLiokJykpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtbGlnaHQgYWxlcnQtZGlzbWlzc2libGUgZmFkZSBzaG93IHRleHQtY2VudGVyXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmluZCBoZXJlIGFsbCB5b3VyIHB1cmNoYXNlcyBhbmQgdGhlIHN1cHBsaWVyIGFwcHJvdmFsIHN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPihXYWl0aW5nIGFwcHJvdmFsLCBSZWplY3RlZCBvciBBY2NlcHRlZCk8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQdXJjaGFzZXNIaXN0b3J5IGFjY291bnQ9e2FjY291bnR9IHNldEFjdGl2ZVVybD17c2V0QWN0aXZlVXJsfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXdhcm5pbmcgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRvIHNlZSB5b3VyIGNvdXBvbnMgYW5kIHVzZSB0aGVtLCBwbGVhc2UgbG9naW48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjb25uZWN0fT5Mb2dpbjwvYnV0dG9uPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlQ291cG9uc1xuIiwiaW1wb3J0IFBhZ2VDb3Vwb25zIGZyb20gJy4vUGFnZUNvdXBvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VDb3Vwb25zXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZCdcbmltcG9ydCB7IEFkZENvdXBvbkljb24sIFJvdW5kTWFya0ljb24gfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvaGVhZGVyLWNvbnRyb2xzJ1xuXG5jb25zdCBNZW51ID0gKHtcbiAgICBhY3RpdmVVcmwsIHNldEFjdGl2ZVVybCwgYXBwcm92YWxDb3VudGVyLCBvbkNyZWF0ZUNvdXBvbixcbn0pID0+IChcbiAgICA8PlxuICAgICAgICA8Qm94IGFzPVwidWxcIiBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnNcIj5cbiAgICAgICAgICAgIDxCb3ggYXM9XCJsaVwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVXJsKCcjc3VwcGxpZXIvbWFuYWdlJyl9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjc3VwcGxpZXIvbWFuYWdlXCIgY2xhc3NOYW1lPXthY3RpdmVVcmwubWF0Y2gobmV3IFJlZ0V4cCgnLiovPygjc3VwcGxpZXJbXi9dKnwjc3VwcGxpZXIvbWFuYWdlLiopJCcpKSA/ICduYXYtbGluayBhY3RpdmUnIDogJ25hdi1saW5rJ30+XG4gICAgICAgICAgICAgICAgICAgIE1hbmFnZSBDb3Vwb25zXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94IGFzPVwibGlcIiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVVybCgnI3N1cHBsaWVyL3dpdGhkcmF3Jyl9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjc3VwcGxpZXIvd2l0aGRyYXdcIiBjbGFzc05hbWU9e2FjdGl2ZVVybC5tYXRjaChuZXcgUmVnRXhwKCcuKi8/I3N1cHBsaWVyL3dpdGhkcmF3LiokJykpID8gJ25hdi1saW5rIGFjdGl2ZScgOiAnbmF2LWxpbmsnfT5cbiAgICAgICAgICAgICAgICBXaXRoZHJhdyBGdW5kc1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveCBhcz1cImxpXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVVcmwoJyNzdXBwbGllci9oaXN0b3J5Jyl9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjc3VwcGxpZXIvaGlzdG9yeVwiIGNsYXNzTmFtZT17YWN0aXZlVXJsLm1hdGNoKG5ldyBSZWdFeHAoJy4qLz8jc3VwcGxpZXIvaGlzdG9yeS4qJCcpKSA/ICduYXYtbGluayBhY3RpdmUnIDogJ25hdi1saW5rJ30+XG4gICAgICAgICAgICAgICAgICAgIFNhbGVzIEhpc3RvcnlcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3ggYXM9XCJsaVwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVXJsKCcjc3VwcGxpZXIvYXBwcm92ZScpfT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3N1cHBsaWVyL2FwcHJvdmVcIiBjbGFzc05hbWU9e2FjdGl2ZVVybC5tYXRjaChuZXcgUmVnRXhwKCcuKi8/I3N1cHBsaWVyL2FwcHJvdmUuKiQnKSkgPyAnbmF2LWxpbmsgYWN0aXZlJyA6ICduYXYtbGluayd9PlxuICAgICAgICAgICAgICAgICAgICB7IChhcHByb3ZhbENvdW50ZXIgPiAwKSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3VuZE1hcmtJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICAgICAgICAgICAgICAgIHsnIEFwcHJvdmUgQ291cG9ucyd9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94IGFzPVwic3BhblwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgb25DbGljaz17b25DcmVhdGVDb3Vwb259PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGhyZWY9XCIjc3VwcGxpZXIvYXBwcm92ZVwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIGJvcmRlci1sZWZ0IHRleHQtc3VjY2VzcyBmb250LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxBZGRDb3Vwb25JY29uIC8+XG4gICAgICAgICAgICAgICAgICAgIHsnIEFkZCBDb3Vwb24nfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgIDwvPlxuKVxuZXhwb3J0IGRlZmF1bHQgTWVudVxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LW9uZS1leHByZXNzaW9uLXBlci1saW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgTG9ja0ljb24sIFVubG9ja0ljb24gfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvaGVhZGVyLWNvbnRyb2xzJ1xuaW1wb3J0IHsgQm94LCBGbGV4IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkJ1xuaW1wb3J0IHtcbiAgICBEQVRBLCBmZXRjaFN1cHBsaWVyQXZhaWxhYmxlRnVuZHMsIGZvcm1hdE51bWJlciwgZ2V0U3VwcGxpZXJCYWxhbmNlLCBzdWJzY3JpYmUsXG59IGZyb20gJy4uLy4uLy4uLy4uL2xpYnMvZEFwcCdcblxuY29uc3QgQmFsYW5jZVBhbmVsID0gKHsgYWNjb3VudCB9KSA9PiB7XG4gICAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW2F2YWlsYWJsZSwgc2V0QXZhaWxhYmxlXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW2xvY2tlZCwgc2V0TG9ja2VkXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgeyBhZGRyZXNzIH0gPSBhY2NvdW50XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiByZWZyZXNoRGF0YSgpIHtcbiAgICAgICAgICAgIGNvbnN0IGFtdCA9IGF3YWl0IGdldFN1cHBsaWVyQmFsYW5jZShhZGRyZXNzKVxuICAgICAgICAgICAgY29uc3QgYXZsID0gYXdhaXQgZmV0Y2hTdXBwbGllckF2YWlsYWJsZUZ1bmRzKGFkZHJlc3MpXG4gICAgICAgICAgICBjb25zdCBsY2sgPSBhbXQgLSBhdmxcblxuICAgICAgICAgICAgc2V0QW1vdW50KGFtdClcbiAgICAgICAgICAgIHNldEF2YWlsYWJsZShhdmwpXG4gICAgICAgICAgICBzZXRMb2NrZWQobGNrKVxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnWyDwn5SEIFN1cHBsaWVyIF0gOicsIGBCYWxhbmNlIHVwZGF0ZWQgKCR7YXZsfSAvICR7YW10fSlgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmUoREFUQSwgcmVmcmVzaERhdGEpXG4gICAgfSwgW2FkZHJlc3NdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYW5hZ2VyLWJhbGFuY2UtcGFuZWxcIj5cbiAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIHA9e3tcbiAgICAgICAgICAgICAgICAgICAgMDogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgICBtZDogJzBweCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogJzE1cHgnLCBtYXJnaW5Cb3R0b206ICcxNXB4JyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgYXM9XCJiaWdcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ftb3VudCA+IDAgPyAnYmFkZ2UgYmFkZ2UtcHJpbWFyeScgOiAnYmFkZ2UgYmFkZ2UtZGFyayd9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogJzEwcHgnLCBwYWRkaW5nOiAnMjBweCcsIHdpZHRoOiAnMjUwcHgnIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PnRvdGFsIGZ1bmRzPC9kaXY+PGg1IGNsYXNzTmFtZT1cIm0tMVwiPiB7IGZvcm1hdE51bWJlcihhbW91bnQpIH0gPC9oNT48ZGl2PldBVkVTPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBhcz1cImJpZ1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhcmtcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46ICcxMHB4JywgcGFkZGluZzogJzIwcHgnLCB3aWR0aDogJzI1MHB4JyB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5sb2NrZWQgZnVuZHM8L2Rpdj48aDUgY2xhc3NOYW1lPVwibS0xXCI+IDxMb2NrSWNvbiAvPnsgZm9ybWF0TnVtYmVyKGxvY2tlZCkgfSA8L2g1PjxkaXY+V0FWRVM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgYXM9XCJiaWdcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2F2YWlsYWJsZSA+IDAgPyAnYmFkZ2UgYmFkZ2Utc3VjY2VzcycgOiAnYmFkZ2UgYmFkZ2Utc2Vjb25kYXJ5J31cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAnMTBweCcsIHBhZGRpbmc6ICcyMHB4Jywgd2lkdGg6ICcyNTBweCcgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+YXZhaWxhYmxlIGZ1bmRzPC9kaXY+PGg1IGNsYXNzTmFtZT1cIm0tMVwiPiA8VW5sb2NrSWNvbiAvPnsgZm9ybWF0TnVtYmVyKGF2YWlsYWJsZSkgfSA8L2g1PjxkaXY+V0FWRVM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQmFsYW5jZVBhbmVsXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHtcbiAgICBFcnJvckRpYWxvZywgRm9ybVN1cHBsaWVyUmVnaXN0ZXIsIFJlc3VsdCxcbn0gZnJvbSAnLi4vLi4vLi4vbW9kYWwnXG5pbXBvcnQgeyBMb2FkaW5nLCBNb2RhbCB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZCdcbmltcG9ydCB7IHJlZ2lzdGVyU3VwcGxpZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9saWJzL2RBcHAnXG5cbmZ1bmN0aW9uIFJlZ2lzdGVyKHsgYWNjb3VudCB9KSB7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2xvYWRpbmdEYXRhLCBzZXRMb2FkaW5nRGF0YV0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtyZXN1bHRPcGVuZWQsIHNldFJlc3VsdE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2Zvcm1PcGVuZWQsIHNldEZvcm1PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtlcnJvclJlc3VsdCwgc2V0RXJyb3JSZXN1bHRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKVxuICAgICAgICAgICAgaWYgKCFhY2NvdW50LmlzU3VwcGxpZXIgJiYgIWZvcm1PcGVuZWQpIHtcbiAgICAgICAgICAgICAgICBzZXRGb3JtT3Blbih0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCA1MDApXG4gICAgfSwgW2FjY291bnRdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtsb2FkaW5nRGF0YSA/ICg8TG9hZGluZyAvPikgOiBudWxsIH1cbiAgICAgICAgICAgIHtmb3JtT3BlbmVkICYmICFhY2NvdW50LmlzU3VwcGxpZXIgPyAoXG4gICAgICAgICAgICAgICAgPEZvcm1TdXBwbGllclJlZ2lzdGVyXG4gICAgICAgICAgICAgICAgICAgIGFzPVwiZGl2XCJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9ucz17WydzdWJtaXQnXX1cbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9ybU9wZW4oZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZygnUmVnaXN0ZXJpbmcgYXMgc3VwcGxpZXIgLi4uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcmVnaXN0ZXJTdXBwbGllcihkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdE9wZW4odHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3JSZXN1bHQoZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6ICcnIH1cblxuICAgICAgICAgICAgPE1vZGFsIG9wZW49e3Jlc3VsdE9wZW5lZH0gb25DbG9zZT17KCkgPT4gc2V0UmVzdWx0T3BlbihmYWxzZSl9PlxuICAgICAgICAgICAgICAgIDxSZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cIjxkaXYgY2xhc3M9J2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnPlJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsITwvZGl2PjxkaXY+WW91IGFyZSBub3cgYSBzdXBwbGllci48YnIvPjxici8+PC9kaXY+PGRpdj5DbGljayBvbiA8Yj5NYW5hZ2UgQ291cG9uczwvYj4gdG8gYWRkIC8gdXBkYXRlIC8gcmVtb3ZlIGNvdXBvbnMuPC9kaXY+XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0UmVzdWx0T3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICA8TW9kYWwgb3Blbj17dHlwZW9mIGxvYWRpbmcgPT09ICdzdHJpbmcnfSBvbkNsb3NlPXsoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgPExvYWRpbmcgY2xhc3NOYW1lPVwiYmctZGFya1wiIHRleHQ9e2xvYWRpbmd9IC8+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgPEVycm9yRGlhbG9nIGNsYXNzTmFtZT1cImJnLWRhcmtcIiB0ZXh0PXtlcnJvclJlc3VsdD8ubWVzc2FnZX0gb3Blbj17dHlwZW9mIGVycm9yUmVzdWx0ID09PSAnb2JqZWN0J30gb25DbG9zZT17KCkgPT4gc2V0RXJyb3JSZXN1bHQoZmFsc2UpfSAvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW5lc2NhcGVkLWVudGl0aWVzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBDb3Vwb25zIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycydcbmltcG9ydCB7XG4gICAgREFUQSwgZmV0Y2hTdXBwbGllckl0ZW1zLCBzdWJzY3JpYmUsXG59IGZyb20gJy4uLy4uLy4uLy4uL2xpYnMvZEFwcCdcbmltcG9ydCB7IEZsZXgsIExvYWRpbmcgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQnXG5cbmZ1bmN0aW9uIE1hbmFnZXIoeyBhY2NvdW50LCBzZXRBY3RpdmVVcmwgfSkge1xuICAgIGNvbnN0IFtsb2FkaW5nRGF0YSwgc2V0TG9hZGluZ0RhdGFdID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbaXRlbXMsIHVwZGF0ZUl0ZW1zXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gYWNjb3VudFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaERhdGEoKSB7XG4gICAgICAgICAgICBsZXQgbGlzdCA9IFtdXG4gICAgICAgICAgICBzZXRMb2FkaW5nRGF0YSh0cnVlKVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsaXN0ID0gYXdhaXQgZmV0Y2hTdXBwbGllckl0ZW1zKGFkZHJlc3MpXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnWyDwn5SEIE1hbmFnZXIgXSA6JywgYCR7bGlzdC5sZW5ndGh9IGl0ZW1zIGxvYWRlZGApXG4gICAgICAgICAgICAgICAgdXBkYXRlSXRlbXMobGlzdClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZShEQVRBLCByZWZyZXNoRGF0YSlcbiAgICB9LCBbYWRkcmVzc10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2xvYWRpbmdEYXRhID8gKDxMb2FkaW5nIC8+KSA6IG51bGwgfVxuICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgcHg9e3tcbiAgICAgICAgICAgICAgICAgICAgMDogJzIwcHgnLFxuICAgICAgICAgICAgICAgICAgICBsZzogJzM5cHgnLFxuICAgICAgICAgICAgICAgICAgICB4bDogJzIwcHgnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgZmxleFdyYXA9XCJ3cmFwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q291cG9uc1xuICAgICAgICAgICAgICAgICAgICBpc01hbmFnZXJcbiAgICAgICAgICAgICAgICAgICAgbW9kZT1cIm1hbmFnZVwiXG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVVybD17c2V0QWN0aXZlVXJsfVxuICAgICAgICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFbXB0eUxpc3RNZXNzYWdlPXtsb2FkaW5nRGF0YX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bmVzY2FwZWQtZW50aXRpZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IFB1cmNoYXNlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMnXG5pbXBvcnQge1xuICAgIERBVEEsIGZldGNoU3VwcGxpZXJQdXJjaGFzZXMsIHN1YnNjcmliZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbGlicy9kQXBwJ1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZCdcblxuZnVuY3Rpb24gUHVyY2hhc2VzQXBwcm92ZSh7IGFjY291bnQsIHNldEFjdGl2ZVVybCB9KSB7XG4gICAgY29uc3QgW2xvYWRpbmdEYXRhLCBzZXRMb2FkaW5nRGF0YV0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtpdGVtcywgdXBkYXRlSXRlbXNdID0gdXNlU3RhdGUoW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiByZWZyZXNoRGF0YSgpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmdEYXRhKHRydWUpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIHB1cmNoYXNlcyB0byBhcHByb3ZlXG4gICAgICAgICAgICAgICAgY29uc3QgeyBhZGRyZXNzIH0gPSBhY2NvdW50XG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IGF3YWl0IGZldGNoU3VwcGxpZXJQdXJjaGFzZXMoYWRkcmVzcylcbiAgICAgICAgICAgICAgICBjb25zdCBhcHByb3ZlTGlzdCA9IGxpc3QuZmlsdGVyKHMgPT4gcy5zdGF0dXMgPT09ICdhcHByb3ZhbCcpLnNvcnQoKGEsIGIpID0+IGEudGltZXN0YW1wIDwgYi50aW1lc3RhbXApXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnWyDwn5SEIFB1cmNoYXNlcyBdIDonLCBgJHthcHByb3ZlTGlzdC5sZW5ndGh9IHB1cmNoYXNlcyB0byBhcHByb3ZlIGxvYWRlZGApXG4gICAgICAgICAgICAgICAgdXBkYXRlSXRlbXMoYXBwcm92ZUxpc3QpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmUoREFUQSwgcmVmcmVzaERhdGEpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2xvYWRpbmdEYXRhID8gKDxMb2FkaW5nIC8+KSA6IG51bGwgfVxuICAgICAgICAgICAgPFB1cmNoYXNlc1xuICAgICAgICAgICAgICAgIGlzTWFuYWdlclxuICAgICAgICAgICAgICAgIG1vZGU9XCJhcHByb3ZhbFwiXG4gICAgICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgICAgICAgIHNldEFjdGl2ZVVybD17c2V0QWN0aXZlVXJsfVxuICAgICAgICAgICAgICAgIGhpZGVFbXB0eUxpc3RNZXNzYWdlPXtsb2FkaW5nRGF0YX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHVyY2hhc2VzQXBwcm92ZVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tYWxlcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVuZXNjYXBlZC1lbnRpdGllcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgUHVyY2hhc2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycydcbmltcG9ydCB7XG4gICAgREFUQSwgZmV0Y2hTdXBwbGllclB1cmNoYXNlcywgc3Vic2NyaWJlLFxufSBmcm9tICcuLi8uLi8uLi8uLi9saWJzL2RBcHAnXG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkJ1xuXG5mdW5jdGlvbiBQdXJjaGFzZXNIaXN0b3J5KHsgYWNjb3VudCwgc2V0QWN0aXZlVXJsIH0pIHtcbiAgICBjb25zdCBbbG9hZGluZ0RhdGEsIHNldExvYWRpbmdEYXRhXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW2l0ZW1zLCB1cGRhdGVJdGVtc10gPSB1c2VTdGF0ZShbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hEYXRhKCkge1xuICAgICAgICAgICAgc2V0TG9hZGluZ0RhdGEodHJ1ZSlcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gcHVyY2hhc2VzIGhpc3RvcnlcbiAgICAgICAgICAgICAgICBjb25zdCB7IGFkZHJlc3MgfSA9IGFjY291bnRcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gYXdhaXQgZmV0Y2hTdXBwbGllclB1cmNoYXNlcyhhZGRyZXNzKVxuICAgICAgICAgICAgICAgIGNvbnN0IGhpc3RvcnlMaXN0ID0gbGlzdC5maWx0ZXIocyA9PiBzLnN0YXR1cyAhPT0gJ2FwcHJvdmFsJykuc29ydCgoYSwgYikgPT4gYS50aW1lc3RhbXAgPCBiLnRpbWVzdGFtcClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdbIPCflIQgUHVyY2hhc2VzIEhpc3RvcnkgXSA6JywgYCR7aGlzdG9yeUxpc3QubGVuZ3RofSBwdXJjaGFzZXMgbG9hZGVkYClcbiAgICAgICAgICAgICAgICB1cGRhdGVJdGVtcyhoaXN0b3J5TGlzdClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZShEQVRBLCByZWZyZXNoRGF0YSlcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7bG9hZGluZ0RhdGEgPyAoPExvYWRpbmcgLz4pIDogbnVsbCB9XG4gICAgICAgICAgICA8UHVyY2hhc2VzXG4gICAgICAgICAgICAgICAgaXNNYW5hZ2VyXG4gICAgICAgICAgICAgICAgbW9kZT1cImhpc3RvcnlcIlxuICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH1cbiAgICAgICAgICAgICAgICBoaWRlRW1wdHlMaXN0TWVzc2FnZT17bG9hZGluZ0RhdGF9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFB1cmNoYXNlc0hpc3RvcnlcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bmVzY2FwZWQtZW50aXRpZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IENvdXBvbnNMaXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycydcbmltcG9ydCB7IERBVEEsIGZldGNoU3VwcGxpZXJBdmFpbGFibGVDb3Vwb25zLCBzdWJzY3JpYmUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWJzL2RBcHAnXG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkJ1xuXG5mdW5jdGlvbiBXaXRoZHJhd0Z1bmRzKHsgYWNjb3VudCwgc2V0QWN0aXZlVXJsIH0pIHtcbiAgICBjb25zdCBbbG9hZGluZ0RhdGEsIHNldExvYWRpbmdEYXRhXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW2l0ZW1zLCB1cGRhdGVJdGVtc10gPSB1c2VTdGF0ZShbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hEYXRhKCkge1xuICAgICAgICAgICAgc2V0TG9hZGluZ0RhdGEodHJ1ZSlcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gcHVyY2hhc2VzIHRvIGFwcHJvdmVcbiAgICAgICAgICAgICAgICBjb25zdCB7IGFkZHJlc3MgfSA9IGFjY291bnRcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gYXdhaXQgZmV0Y2hTdXBwbGllckF2YWlsYWJsZUNvdXBvbnMoYWRkcmVzcylcbiAgICAgICAgICAgICAgICBjb25zdCBhdmFpbGFibGVMaXN0ID0gbGlzdC5zb3J0KChhLCBiKSA9PiBhLnRpbWVzdGFtcCA8IGIudGltZXN0YW1wKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1sg8J+UhCBQdXJjaGFzZXMgXSA6JywgYCR7YXZhaWxhYmxlTGlzdC5sZW5ndGh9IGF2YWlsYWJsZSBjb3Vwb25zIGxvYWRlZGApXG5cbiAgICAgICAgICAgICAgICB1cGRhdGVJdGVtcyhhdmFpbGFibGVMaXN0KVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaWJlKERBVEEsIHJlZnJlc2hEYXRhKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtsb2FkaW5nRGF0YSA/ICg8TG9hZGluZyAvPikgOiBudWxsIH1cbiAgICAgICAgICAgIDxDb3Vwb25zTGlzdFxuICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICAgICAgICBpc01hbmFnZXJcbiAgICAgICAgICAgICAgICBtb2RlPVwid2l0aGRyYXdcIlxuICAgICAgICAgICAgICAgIHNldEFjdGl2ZVVybD17c2V0QWN0aXZlVXJsfVxuICAgICAgICAgICAgICAgIGhpZGVFbXB0eUxpc3RNZXNzYWdlPXtsb2FkaW5nRGF0YX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2l0aGRyYXdGdW5kc1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBNZW51IH0gZnJvbSAnLi9NZW51J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCYWxhbmNlUGFuZWwgfSBmcm9tICcuL0JhbGFuY2VQYW5lbCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVnaXN0ZXIgfSBmcm9tICcuL1JlZ2lzdGVyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYW5hZ2VyIH0gZnJvbSAnLi9NYW5hZ2VyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQdXJjaGFzZXNBcHByb3ZlIH0gZnJvbSAnLi9QdXJjaGFzZXNBcHByb3ZlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQdXJjaGFzZXNIaXN0b3J5IH0gZnJvbSAnLi9QdXJjaGFzZXNIaXN0b3J5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBXaXRoZHJhd0Z1bmRzIH0gZnJvbSAnLi9XaXRoZHJhd0Z1bmRzJ1xuXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bmVzY2FwZWQtZW50aXRpZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHtcbiAgICBNZW51LCBCYWxhbmNlUGFuZWwsIFJlZ2lzdGVyLCBQdXJjaGFzZXNBcHByb3ZlLCBQdXJjaGFzZXNIaXN0b3J5LCBXaXRoZHJhd0Z1bmRzLFxufSBmcm9tICcuL2NvbXBvbmVudHMnXG5pbXBvcnQgTWFuYWdlciBmcm9tICcuL2NvbXBvbmVudHMvTWFuYWdlcidcblxuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vc2hhcmVkJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJy4uLy4uLy4uL2xpYnMvZEFwcCdcbmltcG9ydCB7IHVzZUNvdXBvbkRpYWxvZ3MgfSBmcm9tICcuLi8uLi9zZXJ2aWNlJ1xuXG5jb25zdCBQYWdlU3VwcGxpZXIgPSAoe1xuICAgIGFjY291bnQsIGFjdGl2ZVVybCwgc2V0QWN0aXZlVXJsLFxufSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgQ291cG9uRGlhbG9ncyxcbiAgICAgICAgZm9ybTogW2Zvcm1PcGVuZWQsIG9uRm9ybU9wZW5dLFxuICAgIH0gPSB1c2VDb3Vwb25EaWFsb2dzKClcblxuICAgIGNvbnN0IG9uQ3JlYXRlQ291cG9uID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBvbkZvcm1PcGVuKClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxDb3Vwb25EaWFsb2dzIC8+XG5cbiAgICAgICAgICAgIHthY2NvdW50LmlzU3VwcGxpZXIgJiYgYWN0aXZlVXJsLmluZGV4T2YoJyNzdXBwbGllci9yZWdpc3RlcicpID09PSAtMSA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVVybD17YWN0aXZlVXJsfVxuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH1cbiAgICAgICAgICAgICAgICAgICAgYXBwcm92YWxDb3VudGVyPXthY2NvdW50Py5zdXBwbGllcj8uYXBwcm92YWxDb3VudGVyfVxuICAgICAgICAgICAgICAgICAgICBvbkNyZWF0ZUNvdXBvbj17b25DcmVhdGVDb3Vwb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7IGFjY291bnQuaXNDb25uZWN0ZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVVcmwubWF0Y2gobmV3IFJlZ0V4cCgnLiovPygjc3VwcGxpZXJbXi9dKnwjc3VwcGxpZXIvbWFuYWdlLiopJCcpKSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWxpZ2h0IGFsZXJ0LWRpc21pc3NpYmxlIGZhZGUgc2hvdyB0ZXh0LWNlbnRlciB0ZXh0LXNlY29uZGFyeVwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaW5kIGhlcmUgYWxsIGNvdXBvbnMgeW91IGhhdmUgY3JlYXRlZCBhcyBzdXBwbGllci4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGNhbiBhZGQsIHVwZGF0ZSBhbmQgcmVtb3ZlIHRoZW0gYXQgYW55IHRpbWUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2sgb24gXCJBZGQgTmV3IENvdXBvblwiIHRvIGNyZWF0ZSBhIG5ldyBjb3Vwb24gfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljayBvbiBhbnkgY291cG9uIGFuZCB0aGVuIG9uIFwiRWRpdFwiIHRvIHVwZGF0ZSBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvciBcIlJlbW92ZVwiIHRvIHJlbW92ZSBpdCBmcm9tIE1hcmtldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1hbmFnZXIgYWNjb3VudD17YWNjb3VudH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbCB9XG5cbiAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVVybC5tYXRjaChuZXcgUmVnRXhwKCcuKi8/I3N1cHBsaWVyL2hpc3RvcnkuKiQnKSkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQdXJjaGFzZXNIaXN0b3J5IGFjY291bnQ9e2FjY291bnR9IHNldEFjdGl2ZVVybD17c2V0QWN0aXZlVXJsfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsIH1cblxuICAgICAgICAgICAgICAgICAgICB7YWN0aXZlVXJsLm1hdGNoKG5ldyBSZWdFeHAoJy4qLz8jc3VwcGxpZXIvYXBwcm92ZS4qJCcpKSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWxpZ2h0IGFsZXJ0LWRpc21pc3NpYmxlIGZhZGUgc2hvdyB0ZXh0LWNlbnRlciB0ZXh0LXNlY29uZGFyeVwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbmQgaGVyZSBhbGwgdGhlIGNvdXBvbnMgeW91IGhhdmUgc29sZCwgYW5kIGNob29zZSBmb3IgZWFjaCBvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIHlvdSBhY2NlcHQgdGhlIHNhbGUgb3IgcmVmdXNlIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2sgb24gXCJSZWplY3RcIiB0byByZWZ1c2Ugb3IgXCJBY2NlcHRcIiB0byBhY2NlcHQgdGhlIHNhbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQdXJjaGFzZXNBcHByb3ZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17YWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGwgfVxuXG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVVcmwubWF0Y2gobmV3IFJlZ0V4cCgnLiovPyNzdXBwbGllci93aXRoZHJhdy4qJCcpKSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZVBhbmVsIGFjY291bnQ9e2FjY291bnR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWxpZ2h0IGFsZXJ0LWRpc21pc3NpYmxlIGZhZGUgc2hvdyB0ZXh0LWNlbnRlciB0ZXh0LXNlY29uZGFyeVwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaXRoZHJhdyBhdmFpbGFibGUgZnVuZHMgZm9yIGV4cGlyZWQvYnVybmVkIGNvdXBvbnMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2sgb24gXCJXaXRoZHJhdyBGdW5kc1wiIGZvciBhbnkgY291cG9uIHRvIHJlY2VpdmVkIGZ1bmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8V2l0aGRyYXdGdW5kc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlVXJsPXtzZXRBY3RpdmVVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsIH1cblxuICAgICAgICAgICAgICAgICAgICB7YWN0aXZlVXJsLm1hdGNoKG5ldyBSZWdFeHAoJy4qLz8jc3VwcGxpZXIvYnVybi4qJCcpKSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWxpZ2h0IGFsZXJ0LWRpc21pc3NpYmxlIGZhZGUgc2hvdyB0ZXh0LWNlbnRlciB0ZXh0LXNlY29uZGFyeVwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaW5kIGhlcmUgYWxsIHRoZSBjb3Vwb25zIHlvdSByZWNlaXZlZCBpbiByZXR1cm4gZnJvbSBidXllcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGJ1cm4gdGhlbSB0byByZWxlYXNlIGZ1bmRzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrIFwiQnVyblwiIGJ1dHRvbiBvbiBhbnkgY291cG9uIGJ1cm4gaXQgYW5kIHJlbGVhc2UgZnVuZHMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXdhcm5pbmcgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRvIHVzZSBTdXBwbGllciBNYW5hZ2VyLCBwbGVhc2UgbG9naW48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjb25uZWN0fT5Mb2dpbjwvYnV0dG9uPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiAnICd9XG5cbiAgICAgICAgICAgIDxSZWdpc3RlciBhY2NvdW50PXthY2NvdW50fSAvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBQYWdlU3VwcGxpZXJcblxuIiwiaW1wb3J0IFBhZ2VTdXBwbGllciBmcm9tICcuL1BhZ2VTdXBwbGllcidcblxuZXhwb3J0IGRlZmF1bHQgUGFnZVN1cHBsaWVyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFBhZ2VNYXJrZXQgfSBmcm9tICcuL21hcmtldCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFnZUNvdXBvbnMgfSBmcm9tICcuL2NvdXBvbnMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhZ2VTdXBwbGllciB9IGZyb20gJy4vc3VwcGxpZXInXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1ub25pbnRlcmFjdGl2ZS1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvY2xpY2stZXZlbnRzLWhhdmUta2V5LWV2ZW50cyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGhvdCB9IGZyb20gJ3JlYWN0LWhvdC1sb2FkZXIvcm9vdCdcbi8vIGltcG9ydCB7IHNldCB9IGZyb20gJ3JhbWRhJ1xuLypcbmltcG9ydCB7XG4gICAgRGlhbG9nLCBSZXN1bHQsIEZvcm0sIEZvcm1TdXBwbGllclJlZ2lzdGVyLFxufSBmcm9tICcuL2NvbXBvbmVudHMvbW9kYWwnXG5cbiBpbXBvcnQge1xuICAgIGZldGNoSXRlbXMsIHJlZ2lzdGVyU3VwcGxpZXIsIGFkZEl0ZW0sIHVwZGF0ZUl0ZW0sIHJlbW92ZUl0ZW0sXG4gICAgZ2V0RGF0YUJ5S2V5LCBmZXRjaFN1cHBsaWVySXRlbXMsIGZldGNoVXNlclB1cmNoYXNlcywgZmV0Y2hTdXBwbGllclB1cmNoYXNlcyxcbiAgICBwdXJjaGFzZUNvdXBvbiwgcmVqZWN0UHVyY2hhc2UsIGFjY2VwdFB1cmNoYXNlLCBzZW5kQ291cG9uVG9TdXBwbGllcixcbiAgICBnZXRTdXBwbGllckJhbGFuY2UsIGdldFN1cHBsaWVyQXZhaWxhYmxlQmFsYW5jZSwgYnVybkNvdXBvbiwgd2l0aGRyYXdBdmFpbGFibGUsXG4gICAgZmV0Y2hTdXBwbGllclJlY2VpdmVkQ291cG9ucywgZmV0Y2hVc2VyQWN0aXZlQ291cG9ucyxcbn0gZnJvbSAnLi9hcGknXG4qL1xuLy8gaW1wb3J0IHsgYXN5bmNGaWx0ZXIgfSBmcm9tICcuL2FwaS9oZWxwZXInXG4vLyBpbXBvcnQgUGFnZVN1cHBsaWVyIGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9tYW5hZ2VyJ1xuaW1wb3J0IHsgRm9vdGVyLCBIZWFkZXIgfSBmcm9tICcuL2NvbnRhaW5lcnMnXG5pbXBvcnQge1xuICAgIHN1YnNjcmliZSwgQUNDT1VOVCwgREVGQVVMVF9BQ0NPVU5ULFxufSBmcm9tICcuL2xpYnMvZEFwcCdcbmltcG9ydCB7IFBhZ2VNYXJrZXQsIFBhZ2VDb3Vwb25zLCBQYWdlU3VwcGxpZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMnXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICBjb25zdCBbYWN0aXZlVXJsLCBzZXRBY3RpdmVVcmxdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUoeyAuLi5ERUZBVUxUX0FDQ09VTlQsIGxvYWRpbmc6IHRydWUgfSlcblxuICAgIC8vIHN1YnNjcmliZSB0byBhY2NvdW50IGNoYW5nZVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9uQWNjb3VudENoYW5nZSA9IGFzeW5jIChhY2N0KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdbIPCflIQgQWNjb3VudCBdIDogYWNjb3VudCBjaGFuZ2UnKVxuICAgICAgICAgICAgc2V0QWNjb3VudChhY2N0KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmUoQUNDT1VOVCwgb25BY2NvdW50Q2hhbmdlKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAge2FjY291bnQubG9hZGluZ31cbiAgICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50fVxuICAgICAgICAgICAgICAgIGFjdGl2ZVVybD17YWN0aXZlVXJsfVxuICAgICAgICAgICAgICAgIHNldEFjdGl2ZVVybD17c2V0QWN0aXZlVXJsfVxuICAgICAgICAgICAgICAgIC8vIG9uQWNjb3VudENoYW5nZT17ZmV0Y2hEYXRhfVxuICAgICAgICAgICAgICAgIC8vIG9uU3VwcGxpZXJSZWdpc3Rlcj17b25TdXBwbGllclJlZ2lzdGVyfVxuICAgICAgICAgICAgICAgIC8vIG9uQ3JlYXRlQ291cG9uPXtvbkZvcm1PcGVufVxuICAgICAgICAgICAgICAgIC8vIGZpbHRlckFjdGl2ZT17ZmlsdGVyQWN0aXZlfVxuICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlRmlsdGVyU3RhdGU9e2NoYW5nZUZpbHRlclN0YXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LW1kLTNcIj5cbiAgICAgICAgICAgICAgICB7IGFjdGl2ZVVybD8uaW5kZXhPZignI2ZlYXR1cmVkJykgPj0gMFxuICAgICAgICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdlTWFya2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlVXJsPXthY3RpdmVVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlVXJsPXtzZXRBY3RpdmVVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyPXtlID0+IGUuaXNGZWF0dXJlZCAmJiAhZS5pc0V4cGlyZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogJycgfVxuXG4gICAgICAgICAgICAgICAgeyBhY3RpdmVVcmw/LmluZGV4T2YoJyNkZWxpc3RlZCcpID49IDBcbiAgICAgICAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFnZU1hcmtldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVVybD17YWN0aXZlVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVVybD17c2V0QWN0aXZlVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcj17ZSA9PiAhZS5pc0ZlYXR1cmVkICYmICFlLmlzRXhwaXJlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAnJyB9XG5cbiAgICAgICAgICAgICAgICB7IGFjdGl2ZVVybD8uaW5kZXhPZignI2V4cGlyZWQnKSA+PSAwXG4gICAgICAgICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2VNYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVVcmw9e2FjdGl2ZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI9e2UgPT4gZS5pc0V4cGlyZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogJycgfVxuXG4gICAgICAgICAgICAgICAgeyBhY3RpdmVVcmw/LmluZGV4T2YoJyNtYXJrZXQnKSA+PSAwXG4gICAgICAgICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2VNYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVVcmw9e2FjdGl2ZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAnJyB9XG5cbiAgICAgICAgICAgICAgICB7IGFjdGl2ZVVybD8uaW5kZXhPZignI215JykgPj0gMFxuICAgICAgICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdlQ291cG9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlVXJsPXthY3RpdmVVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlVXJsPXtzZXRBY3RpdmVVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogJycgfVxuXG4gICAgICAgICAgICAgICAgeyBhY3RpdmVVcmw/LmluZGV4T2YoJyNzdXBwbGllcicpID49IDBcbiAgICAgICAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFnZVN1cHBsaWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17YWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVVcmw9e2FjdGl2ZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxGb290ZXIgYWNjb3VudD17YWNjb3VudH0gc2V0QWN0aXZlVXJsPXtzZXRBY3RpdmVVcmx9IC8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgaG90KEFwcClcbiIsImltcG9ydCB7XG4gICAgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSxcbn0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uL2RldmVsb3BtZW50T25seSdcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJ1xuaW1wb3J0IHtcbiAgICBpc05pbCwgbm90LCBhcHBlbmQsIGZpbHRlcixcbn0gZnJvbSAncmFtZGEnXG5cbmltcG9ydCB7IHBpcGUsIHBpcGVGIH0gZnJvbSAnLi4vbGlicy9zZXJ2aWNlJ1xuaW1wb3J0IHsgSU5JVF9BUFAgfSBmcm9tICcuLi9yZWR1Y2Vycy9yb290J1xuXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKClcblxuY29uc3Qgbm90TmlsID0gcGlwZUYoaXNOaWwsIG5vdClcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoe1xuICAgIHJvdXRlck1pZGRsZXdhcmUsIHJvb3RSZWR1Y2VyLCByb290U2FnYSwgbWlkZGxld2FyZXMsXG59KSB7XG4gICAgY29uc3QgbWlkZGxld2FyZUxpc3QgPSBwaXBlKFxuICAgICAgICBbcm91dGVyTWlkZGxld2FyZV0sXG4gICAgICAgIHggPT4gWy4uLngsIC4uLihtaWRkbGV3YXJlcyB8fCBbXSldLFxuICAgICAgICBhcHBlbmQocm9vdFNhZ2EgJiYgc2FnYU1pZGRsZXdhcmUpLFxuICAgICAgICBmaWx0ZXIobm90TmlsKSxcbiAgICApXG5cbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlTGlzdCkpKVxuXG4gICAgaWYgKHJvb3RTYWdhKSB7XG4gICAgICAgIHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSlcbiAgICB9XG5cbiAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IElOSVRfQVBQIH0pXG5cbiAgICByZXR1cm4gc3RvcmVcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUltbXV0YWJsZVJlZHVjZXIgfSBmcm9tICcuLi9saWJzL3JlZHV4LWFjdGlvbnMnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgbGlzdDogWzEsIDIsIDMsIDRdIH1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSW1tdXRhYmxlUmVkdWNlcihpbml0aWFsU3RhdGUsIHt9KVxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5cbi8vIGltcG9ydCBkQXBwIGZyb20gJy4vZEFwcCdcbmltcG9ydCBjb3Vwb25zIGZyb20gJy4vY291cG9ucydcbmltcG9ydCByb290IGZyb20gJy4vcm9vdCdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT5cbiAgICBjb21iaW5lUmVkdWNlcnMoe1xuICAgICAgICAvLyBkQXBwLFxuICAgICAgICBjb3Vwb25zLFxuICAgICAgICByb290LFxuICAgIH0pXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuaW1wb3J0IHtcbiAgICBpbnZva2VTY3JpcHQsIGJyb2FkY2FzdCwgbm9kZUludGVyYWN0aW9uLCB3YWl0Rm9yVHgsXG59IGZyb20gJ0B3YXZlcy93YXZlcy10cmFuc2FjdGlvbnMnXG5pbXBvcnQgeyBzdHJpbmdUb1VpbnQ4QXJyYXksIHNoYTI1NiwgYmFzZTU4ZW5jb2RlIH0gZnJvbSAnQHdhdmVzL3dhdmVzLWNyeXB0bydcbmltcG9ydCB7IGNhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5cbmltcG9ydCAqIGFzIGRBcHAgZnJvbSAnLi4vLi4vbGlicy9kQXBwJ1xuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnLi4vLi4vbGlicy9kQXBwJ1xuXG4vLyBpbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSAnLi9hdXRoJ1xuXG53aW5kb3cud2MgPSB7XG4gICAgc3RyaW5nVG9VaW50OEFycmF5LFxuICAgIHNoYTI1NixcbiAgICBiYXNlNThlbmNvZGUsXG59XG53aW5kb3cud3QgPSB7XG4gICAgbm9kZUludGVyYWN0aW9uLFxuICAgIGludm9rZVNjcmlwdCxcbiAgICBicm9hZGNhc3QsXG4gICAgd2FpdEZvclR4LFxufVxuXG53aW5kb3cuYXBwID0gZEFwcFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogd2F2ZXNJbml0KCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ1sg8J+UhCBXYXZlc0luaXQgXSA6JywgJ2ZldGNoRGF0YScpXG4gICAgICAgIHlpZWxkIGNhbGwoZmV0Y2hEYXRhKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgfVxuXG4vKlxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHYgPSB5aWVsZCBjYWxsKG5vZGVJbnRlcmFjdGlvbi5hY2NvdW50RGF0YSwgZGFwcEFkZHJlc3MsIGJhc2VVcmkpXG4gICAgICAgIHdpbmRvdy5kQXBwRGF0YSA9IHZcblxuICAgICAgICB3aW5kb3cuZEFwcERhdGFLZXlzID0gT2JqZWN0LmtleXModilcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2RBcHAgQWNjb3VudCBkYXRhOicpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHYpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgV2F2ZXNLZWVwZXIgfSA9IHdpbmRvd1xuICAgIGlmICghV2F2ZXNLZWVwZXIpIHtcbiAgICAgICAgYWxlcnQoJ1RvIEF1dGggV2F2ZXNLZWVwZXIgc2hvdWxkIGJlIGluc3RhbGxlZC4nKVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyAgICBjb25zdCBhdXRoRGF0YSA9IHsgZGF0YTogJ0F1dGggb24gbXkgXFwnQ291cG9uIEJhemFhclxcJyBzaXRlJyB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBrZWVwZXJBcGkgPSB5aWVsZCBjYWxsKCgpID0+IFdhdmVzS2VlcGVyLmluaXRpYWxQcm9taXNlKVxuICAgICAgICBjb25zdCBzdGF0ZSA9IHlpZWxkIGNhbGwoa2VlcGVyQXBpLnB1YmxpY1N0YXRlKVxuICAgICAgICBjb25zb2xlLmxvZygnV2F2ZXMgS2VlcGVyIGRhdGE6JykgLy8gZGlzcGxheWluZyB0aGUgcmVzdWx0IGluIHRoZSBjb25zb2xlXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXRlKVxuICAgICAgICB3aW5kb3cuYWNjb3VudCA9IHN0YXRlLmFjY291bnRcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGUuYWNjb3VudC5uZXR3b3JrLCB3aW5kb3cuZEFwcC5uZXR3b3JrKVxuICAgICAgICBpZiAoc3RhdGUuYWNjb3VudC5uZXR3b3JrICE9PSB3aW5kb3cuZEFwcC5uZXR3b3JrKSB7XG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIHN3aXRjaCBXYXZlc0tlZXBlciB0byB0ZXN0bmV0JylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGF1dGggPSB5aWVsZCBjYWxsKFdhdmVzS2VlcGVyLmF1dGgsIGF1dGhEYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyhhdXRoKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgfVxuKi9cbn1cbiIsImltcG9ydCB7IHRha2VMYXRlc3QsIGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5cbmltcG9ydCB7IHdhdmVzSW5pdCB9IGZyb20gJy4vc2VydmljZSdcblxuaW1wb3J0ICogYXMgcm9vdEFjdGlvbnMgZnJvbSAnLi4vcmVkdWNlcnMvcm9vdCdcblxuZnVuY3Rpb24qIGluaXQoKSB7XG4gICAgeWllbGQgZm9yayh3YXZlc0luaXQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBpbml0U2FnYSgpIHtcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFtyb290QWN0aW9ucy5JTklUX0FQUF0sIGluaXQpXG59XG4iLCJpbXBvcnQgeyBhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5cbmltcG9ydCBpbml0U2FnYSBmcm9tICcuL2luaXRTYWdhJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gICAgeWllbGQgYWxsKFtpbml0U2FnYSgpXSlcbn1cbiIsImltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL2NvbmZpZ3VyZVN0b3JlJ1xuXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IGNvbmZpZ3VyZVN0b3JlKHtcbiAgICByb290UmVkdWNlcjogcm9vdFJlZHVjZXIoKSxcbiAgICByb290U2FnYSxcbn0pXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgR2xvYmFsU3R5bGUgfSBmcm9tICcuL3N0eWxlZC1jb21wb25lbnRzL2dsb2JhbCdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi9zdHlsZWQtY29tcG9uZW50cy90aGVtZSdcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL3N0b3JlJ1xuaW1wb3J0ICogYXMgZEFwcCBmcm9tICcuL2xpYnMvZEFwcCdcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpXG5cbndpbmRvdy5hcHAgPSBkQXBwXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICAgICAgICAgICAgPEFwcCAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L1Byb3ZpZGVyPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLFxuKVxuIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==