var RateMyPost =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
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
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".rate-my-post.js"
/******/ 	}
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonpRateMyPost"] = window["webpackJsonpRateMyPost"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./_dev/public/js/rate-my-post.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_dev/public/js/modules/AjaxFeedback.js":
/*!************************************************!*\
  !*** ./_dev/public/js/modules/AjaxFeedback.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rmp_frontend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rmp_frontend */ \"rmp_frontend\");\n/* harmony import */ var rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rmp_frontend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _FeedbackSubmitted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackSubmitted */ \"./_dev/public/js/modules/FeedbackSubmitted.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar AjaxFeedback = /*#__PURE__*/function () {\n  function AjaxFeedback(widgetContainer, postID, feedback, token, ratingID) {\n    _classCallCheck(this, AjaxFeedback);\n\n    this.widgetContainer = widgetContainer;\n    this.postID = postID;\n    this.feedback = feedback;\n    this.settings = rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default.a;\n    this.duration = false;\n    this.ratingID = ratingID;\n    this.token = token;\n    this.recaptcha = rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default.a.grecaptcha;\n    this.recaptchaKey = rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default.a.siteKey;\n    this.data = new FormData();\n    this.data.append(\"action\", \"process_feedback\");\n    this.data.append(\"feedback\", this.feedback);\n    this.data.append(\"postID\", this.postID);\n    this.data.append(\"duration\", this.duration);\n    this.data.append(\"rating_id\", this.ratingID);\n    this.data.append(\"rating_token\", this.token);\n    this.data.append(\"nonce\", this.settings.nonce);\n    this.events();\n  }\n\n  _createClass(AjaxFeedback, [{\n    key: \"events\",\n    value: function events() {\n      var _this = this;\n\n      if (this.recaptcha != 2) {\n        // recaptcha disabled\n        this.saveFeedback();\n        return;\n      }\n\n      Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! grecaptcha */ \"grecaptcha\", 7)).then(function (grecaptcha) {\n        grecaptcha.ready(function () {\n          grecaptcha.execute(_this.recaptchaKey, {\n            action: \"RMPfeedback\"\n          }).then(function (token) {\n            _this.data.token = token;\n\n            _this.saveFeedback();\n          });\n        });\n      });\n    }\n  }, {\n    key: \"saveFeedback\",\n    value: function saveFeedback() {\n      var _this2 = this;\n\n      fetch(this.settings.admin_ajax, {\n        method: \"POST\",\n        body: this.data\n      }).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        new _FeedbackSubmitted__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_this2.widgetContainer, data);\n      });\n    }\n  }]);\n\n  return AjaxFeedback;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AjaxFeedback);\n\n//# sourceURL=webpack://RateMyPost/./_dev/public/js/modules/AjaxFeedback.js?");

/***/ }),

/***/ "./_dev/public/js/modules/AjaxLoad.js":
/*!********************************************!*\
  !*** ./_dev/public/js/modules/AjaxLoad.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rmp_frontend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rmp_frontend */ \"rmp_frontend\");\n/* harmony import */ var rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rmp_frontend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _IconHighlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconHighlighter */ \"./_dev/public/js/modules/IconHighlighter.js\");\n/* harmony import */ var _BrowserSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BrowserSupport */ \"./_dev/public/js/modules/BrowserSupport.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar AjaxLoad = /*#__PURE__*/function () {\n  function AjaxLoad(postID) {\n    _classCallCheck(this, AjaxLoad);\n\n    this.postID = postID;\n    this.widgetContainer = \".js-rmp-widgets-container--\" + postID + \" \";\n    this.settings = rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default.a;\n    this.avgRatingContainer = document.querySelector(this.widgetContainer + \".js-rmp-avg-rating, .js-rmp-results-widget--\" + postID + \" .js-rmp-avg-rating\");\n    this.voteCountContainer = document.querySelector(this.widgetContainer + \".js-rmp-vote-count, .js-rmp-results-widget--\" + postID + \" .js-rmp-vote-count\");\n    this.noVotesContainer = document.querySelector(this.widgetContainer + \".js-rmp-not-rated\");\n    this.resultsTextContainer = document.querySelector(this.widgetContainer + \".js-rmp-results\");\n    this.noVotesContainer = document.querySelector(this.widgetContainer + \".js-rmp-not-rated\");\n    this.resultsTextContainer = document.querySelector(this.widgetContainer + \".js-rmp-results\");\n    this.msgContainer = document.querySelector(this.widgetContainer + \".js-rmp-msg\");\n    this.data = new FormData();\n    this.data.append(\"action\", \"load_results\");\n    this.data.append(\"postID\", this.postID);\n    this.data.append(\"nonce\", this.settings.nonce);\n    this.events();\n  }\n\n  _createClass(AjaxLoad, [{\n    key: \"events\",\n    value: function events() {\n      var _this = this;\n\n      fetch(this.settings.admin_ajax, {\n        method: \"POST\",\n        body: this.data\n      }).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        var voteCount = data.voteCount;\n        var avgRating = data.avgRating;\n        var error = data.errorMsg;\n\n        _this.loadResults(voteCount, avgRating, error);\n      });\n    }\n  }, {\n    key: \"loadResults\",\n    value: function loadResults(voteCount, avgRating, error) {\n      if (error.length) {\n        this.msgContainer.innerText = error;\n        this.msgContainer.classList.add(\"rmp-rating-widget__msg--alert\");\n        return;\n      } // inject data\n\n\n      this.avgRatingContainer.innerText = avgRating;\n      this.voteCountContainer.innerText = voteCount; // highlight icons\n\n      new _IconHighlighter__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.widgetContainer, this.postID, avgRating); // handle classes\n\n      if (avgRating === 0) {\n        this.noVotesContainer.classList.remove(\"rmp-rating-widget__not-rated--hidden\");\n        this.resultsTextContainer.classList.add(\"rmp-rating-widget__results--hidden\");\n      } else {\n        this.noVotesContainer.classList.add(\"rmp-rating-widget__not-rated--hidden\");\n        this.resultsTextContainer.classList.remove(\"rmp-rating-widget__results--hidden\");\n      }\n\n      new _BrowserSupport__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    }\n  }]);\n\n  return AjaxLoad;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AjaxLoad);\n\n//# sourceURL=webpack://RateMyPost/./_dev/public/js/modules/AjaxLoad.js?");

/***/ }),

/***/ "./_dev/public/js/modules/AjaxRating.js":
/*!**********************************************!*\
  !*** ./_dev/public/js/modules/AjaxRating.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rmp_frontend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rmp_frontend */ \"rmp_frontend\");\n/* harmony import */ var rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rmp_frontend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LoadResults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadResults */ \"./_dev/public/js/modules/LoadResults.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar AjaxRating = /*#__PURE__*/function () {\n  function AjaxRating(postID, widgetContainer, rating, startTime) {\n    _classCallCheck(this, AjaxRating);\n\n    this.postID = postID;\n    this.widgetContainer = widgetContainer;\n    this.rating = rating;\n    this.duration = Math.floor(Date.now() / 1000) - startTime;\n    this.settings = rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default.a;\n    this.recaptcha = rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default.a.grecaptcha;\n    this.recaptchaKey = rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default.a.siteKey;\n    this.data = new FormData();\n    this.data.append(\"action\", \"process_rating\");\n    this.data.append(\"star_rating\", this.rating);\n    this.data.append(\"postID\", this.postID);\n    this.data.append(\"duration\", this.duration);\n    this.data.append(\"nonce\", this.settings.nonce);\n    this.events();\n  }\n\n  _createClass(AjaxRating, [{\n    key: \"events\",\n    value: function events() {\n      var _this = this;\n\n      if (this.recaptcha != 2) {\n        // recaptcha disabled\n        this.saveRating();\n        return;\n      }\n\n      Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! grecaptcha */ \"grecaptcha\", 7)).then(function (grecaptcha) {\n        grecaptcha.ready(function () {\n          grecaptcha.execute(_this.recaptchaKey, {\n            action: \"RMPrating\"\n          }).then(function (token) {\n            _this.data.token = token;\n\n            _this.saveRating();\n          });\n        });\n      });\n    }\n  }, {\n    key: \"saveRating\",\n    value: function saveRating() {\n      var _this2 = this;\n\n      fetch(this.settings.admin_ajax, {\n        method: \"POST\",\n        body: this.data\n      }).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        new _LoadResults__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_this2.postID, _this2.widgetContainer, data, _this2.rating);\n      });\n    }\n  }]);\n\n  return AjaxRating;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AjaxRating);\n\n//# sourceURL=webpack://RateMyPost/./_dev/public/js/modules/AjaxRating.js?");

/***/ }),

/***/ "./_dev/public/js/modules/AnalyticsPush.js":
/*!*************************************************!*\
  !*** ./_dev/public/js/modules/AnalyticsPush.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar AnalyticsPush = /*#__PURE__*/function () {\n  function AnalyticsPush(rating) {\n    _classCallCheck(this, AnalyticsPush);\n\n    this.commonAnalyticsTracker = _typeof(window.ga);\n    this.MiAnalyticsTracker = _typeof(window.__gaTracker);\n    this.rating = rating;\n    this.events();\n  }\n\n  _createClass(AnalyticsPush, [{\n    key: \"events\",\n    value: function events() {\n      // common analytics tracker\n      if (this.commonAnalyticsTracker !== \"undefined\") {\n        ga(\"send\", \"event\", \"Rate my Post\", \"Post Rated \" + this.rating + \"/5\"); // console.log(\"ga analytics tracker\");\n\n        return;\n      } // monster insights tacker\n\n\n      if (this.MiAnalyticsTracker !== \"undefined\") {\n        __gaTracker(\"send\", \"event\", \"Rate my Post\", \"Post Rated \" + this.rating + \"/5\"); // console.log(\"__gaTracker analytics tracker\");\n\n\n        return;\n      } // // unsupported tracker\n      // console.log(\"Analytics tracker not found\");\n\n    }\n  }]);\n\n  return AnalyticsPush;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnalyticsPush);\n\n//# sourceURL=webpack://RateMyPost/./_dev/public/js/modules/AnalyticsPush.js?");

/***/ }),

/***/ "./_dev/public/js/modules/BrowserSupport.js":
/*!**************************************************!*\
  !*** ./_dev/public/js/modules/BrowserSupport.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar BrowserSupport = /*#__PURE__*/function () {\n  function BrowserSupport() {\n    _classCallCheck(this, BrowserSupport);\n\n    this.starsToBeReplaced = document.querySelector(\".js-rmp-replace-half-star\");\n    this.starsToBeRemoved = document.querySelector(\".js-rmp-remove-half-star\");\n    this.testElement = document.createElement(\"x-test\");\n    this.supportTest = _typeof(this.testElement.style.webkitBackgroundClip);\n    this.events();\n  }\n\n  _createClass(BrowserSupport, [{\n    key: \"events\",\n    value: function events() {\n      var supportsClip = true;\n\n      if (this.supportTest === \"undefined\") {\n        supportsClip = false;\n      }\n\n      if (supportsClip) {\n        // modern browser, no need for adjustments\n        return;\n      }\n\n      this.starsToBeReplaced.classList.remove(\"rmp-icon--half-highlight\");\n      this.starsToBeReplaced.classList.add(\"rmp-icon--full-highlight\");\n      this.starsToBeRemoved.classList.remove(\"rmp-icon--half-highlight\");\n    }\n  }]);\n\n  return BrowserSupport;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BrowserSupport);\n\n//# sourceURL=webpack://RateMyPost/./_dev/public/js/modules/BrowserSupport.js?");

/***/ }),

/***/ "./_dev/public/js/modules/CookieCheck.js":
/*!***********************************************!*\
  !*** ./_dev/public/js/modules/CookieCheck.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rmp_frontend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rmp_frontend */ \"rmp_frontend\");\n/* harmony import */ var rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rmp_frontend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FreezeWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FreezeWidget */ \"./_dev/public/js/modules/FreezeWidget.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar CookieCheck = /*#__PURE__*/function () {\n  function CookieCheck(widgetContainer, postID) {\n    _classCallCheck(this, CookieCheck);\n\n    this.postID = postID;\n    this.widgetContainer = widgetContainer;\n    this.existingCookie = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"rmp-rate\");\n    this.cookiesDisabled = rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default.a.cookieDisable;\n    this.tnxMsg = rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default.a.afterVote;\n    this.msgContainer = document.querySelector(this.widgetContainer + \".js-rmp-msg\");\n    this.ratingWidget = document.querySelector(this.widgetContainer + \".js-rmp-rating-widget\");\n    this.events();\n  }\n\n  _createClass(CookieCheck, [{\n    key: \"events\",\n    value: function events() {\n      if (this.cookiesDisabled == 2) {\n        return;\n      }\n\n      if (typeof this.existingCookie === \"undefined\") {\n        return;\n      }\n\n      var postsArray = this.existingCookie.split(\",\");\n\n      if (!postsArray.includes(this.postID)) {\n        return;\n      }\n\n      this.msgContainer.innerText = this.tnxMsg;\n      this.ratingWidget.classList.add(\"rmp-rating-widget--has-rated\");\n      new _FreezeWidget__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.widgetContainer);\n    }\n  }]);\n\n  return CookieCheck;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CookieCheck);\n\n//# sourceURL=webpack://RateMyPost/./_dev/public/js/modules/CookieCheck.js?");

/***/ }),

/***/ "./_dev/public/js/modules/CookiePush.js":
/*!**********************************************!*\
  !*** ./_dev/public/js/modules/CookiePush.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar CookiePush = /*#__PURE__*/function () {\n  function CookiePush(postID) {\n    _classCallCheck(this, CookiePush);\n\n    this.postID = postID;\n    this.existingCookie = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"rmp-rate\");\n    this.events();\n  }\n\n  _createClass(CookiePush, [{\n    key: \"events\",\n    value: function events() {\n      if (typeof this.existingCookie === \"undefined\") {\n        js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(\"rmp-rate\", this.postID, {\n          expires: 20\n        });\n        return;\n      }\n\n      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove(\"rmp-rate\");\n      var postsArray = this.existingCookie.split(\",\");\n\n      if (postsArray.length >= 20) {\n        postsArray.shift();\n      }\n\n      postsArray.push(this.postID);\n      var cookie = postsArray.toString();\n      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(\"rmp-rate\", cookie, {\n        expires: 20\n      });\n    }\n  }]);\n\n  return CookiePush;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CookiePush);\n\n//# sourceURL=webpack://RateMyPost/./_dev/public/js/modules/CookiePush.js?");

/***/ }),

/***/ "./_dev/public/js/modules/DestroyWidgets.js":
/*!**************************************************!*\
  !*** ./_dev/public/js/modules/DestroyWidgets.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar DestroyWidgets = /*#__PURE__*/function () {\n  function DestroyWidgets() {\n    _classCallCheck(this, DestroyWidgets);\n\n    this.ratingItems = document.querySelector(\".js-rmp-rating-item\");\n    this.ratingItemsLists = document.querySelector(\".js-rmp-rating-icons-list\");\n    this.events();\n  }\n\n  _createClass(DestroyWidgets, [{\n    key: \"events\",\n    value: function events() {\n      this.ratingItems.style.cursor = auto; // this.ratingItems.off();\n      // this.ratingItemsLists.off();\n    }\n  }]);\n\n  return DestroyWidgets;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DestroyWidgets);\n\n//# sourceURL=webpack://RateMyPost/./_dev/public/js/modules/DestroyWidgets.js?");

/***/ }),

/***/ "./_dev/public/js/modules/FeedbackSubmitted.js":
/*!*****************************************************!*\
  !*** ./_dev/public/js/modules/FeedbackSubmitted.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar FeedbackSubmitted = /*#__PURE__*/function () {\n  function FeedbackSubmitted(widgetContainer, response) {\n    _classCallCheck(this, FeedbackSubmitted);\n\n    this.widgetContainer = widgetContainer;\n    this.successMsg = response.successMsg;\n    this.errorMsg = response.errorMsg;\n    this.msgContainer = document.querySelector(this.widgetContainer + \".js-rmp-feedback-msg\");\n    this.input = document.querySelector(this.widgetContainer + \".js-rmp-feedback-input\");\n    this.button = document.querySelector(this.widgetContainer + \".js-rmp-feedback-button\");\n    this.loader = document.querySelector(this.widgetContainer + \".js-rmp-feedback-loader\");\n    this.events();\n  }\n\n  _createClass(FeedbackSubmitted, [{\n    key: \"events\",\n    value: function events() {\n      this.loader.classList.remove(\"rmp-feedback-widget__loader--visible\");\n\n      if (this.errorMsg.length) {\n        this.msgContainer.addClass(\"rmp-feedback-widget__msg--alert\");\n        this.msgContainer.html(this.errorMsg.join(\"<br />\"));\n        return;\n      }\n\n      this.msgContainer.classList.remove(\"rmp-feedback-widget__msg--alert\");\n      this.msgContainer.innerText = this.successMsg;\n      this.input.remove();\n      this.button.remove();\n    }\n  }]);\n\n  return FeedbackSubmitted;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeedbackSubmitted);\n\n//# sourceURL=webpack://RateMyPost/./_dev/public/js/modules/FeedbackSubmitted.js?");

/***/ }),

/***/ "./_dev/public/js/modules/FeedbackWidget.js":
/*!**************************************************!*\
  !*** ./_dev/public/js/modules/FeedbackWidget.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rmp_frontend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rmp_frontend */ \"rmp_frontend\");\n/* harmony import */ var rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rmp_frontend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AjaxFeedback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AjaxFeedback */ \"./_dev/public/js/modules/AjaxFeedback.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar FeedbackWidget = /*#__PURE__*/function () {\n  function FeedbackWidget(widgetContainer, postID, rating, token, ratingID) {\n    _classCallCheck(this, FeedbackWidget);\n\n    this.widgetContainer = widgetContainer;\n    this.postID = postID;\n    this.feedbackEnabled = rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default.a.feedback;\n    this.maxRating = rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default.a.positiveThreshold;\n    this.emptyFeedbackMsg = rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default.a.emptyFeedback;\n    this.msgContainer = document.querySelector(this.widgetContainer + \".js-rmp-feedback-msg\");\n    this.rating = rating;\n    this.ratingWidget = document.querySelector(this.widgetContainer + \".js-rmp-rating-widget\");\n    this.feedbackWidget = document.querySelector(this.widgetContainer + \".js-rmp-feedback-widget\");\n    this.inputContainer = document.querySelector(this.widgetContainer + \".js-rmp-feedback-input\");\n    this.submitButton = document.querySelector(this.widgetContainer + \".js-rmp-feedback-button\");\n    this.loader = document.querySelector(this.widgetContainer + \".js-rmp-feedback-loader\");\n    this.input = false;\n    this.token = token;\n    this.ratingID = ratingID;\n    this.events();\n  }\n\n  _createClass(FeedbackWidget, [{\n    key: \"events\",\n    value: function events() {\n      var _this = this;\n\n      if (this.feedbackEnabled != 2 || this.rating > this.maxRating) {\n        return;\n      }\n\n      this.feedbackWidget.classList.add(\"rmp-feedback-widget--visible\");\n      this.ratingWidget.classList.add(\"rmp-rating-widget--hidden\");\n      this.submitButton.addEventListener(\"click\", function () {\n        return _this.submitButtonClicked();\n      });\n    }\n  }, {\n    key: \"submitButtonClicked\",\n    value: function submitButtonClicked() {\n      this.input = this.inputContainer.value;\n\n      if (this.input.trim().length < 1) {\n        // feedback was not inserted\n        this.msgContainer.classList.add(\"rmp-feedback-widget__msg--alert\");\n        this.msgContainer.innerText = this.emptyFeedbackMsg;\n        return;\n      } // this.submitButton.off();\n\n\n      this.loader.classList.add(\"rmp-feedback-widget__loader--visible\");\n      new _AjaxFeedback__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.widgetContainer, this.postID, this.input, this.token, this.ratingID);\n    }\n  }]);\n\n  return FeedbackWidget;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeedbackWidget);\n\n//# sourceURL=webpack://RateMyPost/./_dev/public/js/modules/FeedbackWidget.js?");

/***/ }),

/***/ "./_dev/public/js/modules/FreezeWidget.js":
/*!************************************************!*\
  !*** ./_dev/public/js/modules/FreezeWidget.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar FreezeWidget = /*#__PURE__*/function () {\n  function FreezeWidget(widgetContainer) {\n    _classCallCheck(this, FreezeWidget);\n\n    this.widgetContainer = widgetContainer;\n    this.ratingItems = document.querySelectorAll(this.widgetContainer + \".js-rmp-rating-item\");\n    this.ratingTextContainer = document.querySelector(this.widgetContainer + \".js-rmp-hover-text\");\n    this.submitBtn = document.querySelector(this.widgetContainer + \".js-submit-rating-btn\");\n    this.events();\n  }\n\n  _createClass(FreezeWidget, [{\n    key: \"events\",\n    value: function events() {\n      document.querySelector('.js-rmp-rating-icons-list').style.pointerEvents = \"none\";\n      this.submitBtn.classList.remove(\"rmp-rating-widget__submit-btn--visible\");\n      this.ratingTextContainer.innerText = \"\";\n    }\n  }]);\n\n  return FreezeWidget;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FreezeWidget);\n\n//# sourceURL=webpack://RateMyPost/./_dev/public/js/modules/FreezeWidget.js?");

/***/ }),

/***/ "./_dev/public/js/modules/IconHighlighter.js":
/*!***************************************************!*\
  !*** ./_dev/public/js/modules/IconHighlighter.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BrowserSupport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrowserSupport */ \"./_dev/public/js/modules/BrowserSupport.js\");\n/* harmony import */ var rmp_frontend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rmp_frontend */ \"rmp_frontend\");\n/* harmony import */ var rmp_frontend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rmp_frontend__WEBPACK_IMPORTED_MODULE_1__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar IconHighlighter = /*#__PURE__*/function () {\n  function IconHighlighter(widgetContainer, postID, avgRating) {\n    _classCallCheck(this, IconHighlighter);\n\n    this.postID = postID;\n    this.widgetContainer = widgetContainer;\n    this.avgRating = avgRating;\n    this.resultIcons = document.querySelectorAll(\".js-rmp-results-widget--\" + postID + \" .js-rmp-results-icon\");\n    this.ratingIcons = document.querySelectorAll(this.widgetContainer + \".js-rmp-rating-icon\");\n    this.hideRatings = rmp_frontend__WEBPACK_IMPORTED_MODULE_1___default.a.notShowRating;\n    this.events();\n  }\n\n  _createClass(IconHighlighter, [{\n    key: \"events\",\n    value: function events() {\n      var fullStars = Math.floor(this.avgRating);\n      var extraHalfStar = false;\n      var extraFullStar = false;\n      var browserCompatbilityClass = \"\";\n      var decimalValue = Math.round(this.avgRating % 1 * 10);\n\n      if (decimalValue > 2 && decimalValue < 8) {\n        extraHalfStar = true;\n      }\n\n      if (decimalValue >= 8) {\n        extraFullStar = true;\n      }\n\n      if (decimalValue > 2 && decimalValue < 5) {\n        browserCompatbilityClass = \"js-rmp-remove-half-star\";\n      }\n\n      if (decimalValue >= 5 && decimalValue < 8) {\n        browserCompatbilityClass = \"js-rmp-replace-half-star\";\n      } // highlight icons in results widget\n\n\n      Array.from(this.resultIcons).forEach(function (item, index) {\n        if (index + 1 <= fullStars) {\n          item.classList.add(\"rmp-icon--full-highlight\");\n        }\n\n        if (extraHalfStar && index + 1 == fullStars + 1) {\n          item.classList.add(\"rmp-icon--half-highlight\");\n          item.classList.add(browserCompatbilityClass);\n        }\n\n        if (extraFullStar && index + 1 == fullStars + 1) {\n          item.classList.add(\"rmp-icon--full-highlight\");\n        }\n      }); // if rating widget should not be colored\n\n      if (this.hideRatings == 2) {\n        return;\n      } // highlight rating icons\n\n\n      Array.from(this.ratingIcons).forEach(function (item, index) {\n        if (index + 1 <= fullStars) {\n          item.classList.add(\"rmp-icon--full-highlight\");\n        }\n\n        if (extraHalfStar && index + 1 == fullStars + 1) {\n          item.classList.add(\"rmp-icon--half-highlight\");\n          item.classList.add(browserCompatbilityClass);\n        }\n\n        if (extraFullStar && index + 1 == fullStars + 1) {\n          item.classList.add(\"rmp-icon--full-highlight\");\n        }\n      });\n      new _BrowserSupport__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    }\n  }]);\n\n  return IconHighlighter;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IconHighlighter);\n\n//# sourceURL=webpack://RateMyPost/./_dev/public/js/modules/IconHighlighter.js?");

/***/ }),

/***/ "./_dev/public/js/modules/InitWidget.js":
/*!**********************************************!*\
  !*** ./_dev/public/js/modules/InitWidget.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AjaxRating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AjaxRating */ \"./_dev/public/js/modules/AjaxRating.js\");\n/* harmony import */ var _FreezeWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FreezeWidget */ \"./_dev/public/js/modules/FreezeWidget.js\");\n/* harmony import */ var _CookieCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CookieCheck */ \"./_dev/public/js/modules/CookieCheck.js\");\n/* harmony import */ var _PrivilegeCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PrivilegeCheck */ \"./_dev/public/js/modules/PrivilegeCheck.js\");\n/* harmony import */ var rmp_frontend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rmp_frontend */ \"rmp_frontend\");\n/* harmony import */ var rmp_frontend__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rmp_frontend__WEBPACK_IMPORTED_MODULE_4__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\nvar InitWidget = /*#__PURE__*/function () {\n  function InitWidget(postID) {\n    _classCallCheck(this, InitWidget);\n\n    this.postID = postID;\n    this.widgetContainer = \".js-rmp-widgets-container--\" + postID + \" \";\n    this.resultsWidget = \".js-rmp-results-widget--\" + postID;\n    this.ratingItems = document.querySelectorAll(this.widgetContainer + \".js-rmp-rating-item\");\n    this.ratingItemsList = document.querySelectorAll(this.widgetContainer + \".js-rmp-rating-icons-list\");\n    this.ratingIcons = document.querySelectorAll(this.widgetContainer + \".js-rmp-rating-icon\");\n    this.ratingTextContainer = document.querySelector(this.widgetContainer + \".js-rmp-hover-text\");\n    this.ratingText = false;\n    this.hoveredItemOrder = 0;\n    this.rating = 0;\n    this.supportsHover = window.matchMedia(\"(hover: hover)\");\n    this.startTime = Math.floor(Date.now() / 1000);\n    this.preventAccidental = rmp_frontend__WEBPACK_IMPORTED_MODULE_4___default.a.preventAccidental;\n    this.hoverTexts = rmp_frontend__WEBPACK_IMPORTED_MODULE_4___default.a.hoverTexts;\n    this.submitBtn = document.querySelector(this.widgetContainer + \".js-submit-rating-btn\");\n    this.saveRating = false;\n    this.events();\n  }\n\n  _createClass(InitWidget, [{\n    key: \"events\",\n    value: function events() {\n      var _this = this;\n\n      this.doubleWidgetCheck();\n\n      _toConsumableArray(this.ratingItems).forEach(function (e) {\n        e.style.cursor = \"pointer\";\n        e.addEventListener(\"mouseover\", function (event) {\n          return _this.hoverIcons(event);\n        });\n      });\n\n      _toConsumableArray(this.ratingItems).forEach(function (e) {\n        e.addEventListener(\"mouseout\", function () {\n          return _this.stopHoverIcons();\n        });\n      });\n\n      _toConsumableArray(this.ratingItemsList).forEach(function (e) {\n        e.addEventListener(\"mouseleave\", function () {\n          return _this.removeHoverTexts();\n        });\n      });\n\n      _toConsumableArray(this.ratingItems).forEach(function (e) {\n        e.addEventListener(\"click\", function (event) {\n          return _this.ratingIconClicked(event);\n        });\n      });\n\n      new _CookieCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.widgetContainer, this.postID);\n      new _PrivilegeCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    }\n  }, {\n    key: \"doubleWidgetCheck\",\n    value: function doubleWidgetCheck() {\n      var ratingWidgets = document.querySelectorAll(this.widgetContainer);\n      var resultWidgets = document.querySelectorAll(this.resultsWidget);\n\n      if (ratingWidgets.length > 1 || resultWidgets.length > 1) {\n        // duplicates cause issues\n        Array.from(ratingWidgets).forEach(function (item, index) {\n          if (index > 0) {\n            item.remove();\n          }\n        });\n        Array.from(resultWidgets).forEach(function (item, index) {\n          if (index > 0) {\n            item.remove();\n          }\n        });\n      }\n    }\n  }, {\n    key: \"hoverIcons\",\n    value: function hoverIcons(event) {\n      var _this2 = this;\n\n      this.hoveredItemOrder = parseInt(event.target.parentElement.dataset.value, 10);\n      this.ratingText = event.target.parentElement.dataset.descriptiveRating; // highlight icons\n\n      _toConsumableArray(this.ratingIcons).forEach(function (item, index) {\n        if (index < _this2.hoveredItemOrder) {\n          item.classList.add(\"rmp-icon--hovered\");\n        } else {\n          item.classList.remove(\"rmp-icon--hovered\");\n        } // inject texts\n\n\n        if (_this2.supportsHover && _this2.hoverTexts == 2) {\n          _this2.ratingTextContainer.innerText = _this2.ratingText;\n        }\n      });\n    }\n  }, {\n    key: \"stopHoverIcons\",\n    value: function stopHoverIcons() {\n      _toConsumableArray(this.ratingIcons).forEach(function (icon) {\n        return icon.classList.remove(\"rmp-icon--hovered\");\n      });\n    }\n  }, {\n    key: \"removeHoverTexts\",\n    value: function removeHoverTexts() {\n      this.ratingTextContainer.innerText = \"\";\n    }\n  }, {\n    key: \"ratingIconClicked\",\n    value: function ratingIconClicked(event) {\n      var _this3 = this;\n\n      this.rating = parseInt(event.target.parentElement.dataset.value, 10);\n\n      _toConsumableArray(this.ratingIcons).forEach(function (item, index) {\n        item.classList.remove(\"rmp-icon--processing-rating\");\n\n        if (index < _this3.rating) {\n          item.classList.add(\"rmp-icon--processing-rating\");\n        }\n      });\n\n      if (this.preventAccidental == 2) {\n        // enabled\n        this.submitButtonHandler();\n        return;\n      }\n\n      new _FreezeWidget__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.widgetContainer); // save rating\n\n      this.saveRating = new _AjaxRating__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.postID, this.widgetContainer, this.rating, this.startTime);\n    }\n  }, {\n    key: \"submitButtonHandler\",\n    value: function submitButtonHandler() {\n      var _this4 = this;\n\n      this.submitBtn.classList.add(\"rmp-rating-widget__submit-btn--visible\");\n      this.submitBtn.addEventListener(\"click\", function () {\n        if (!_this4.saveRating) {\n          _this4.saveRating = new _AjaxRating__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_this4.postID, _this4.widgetContainer, _this4.rating, _this4.startTime);\n        }\n\n        new _FreezeWidget__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_this4.widgetContainer);\n      });\n    }\n  }]);\n\n  return InitWidget;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (InitWidget);\n\n//# sourceURL=webpack://RateMyPost/./_dev/public/js/modules/InitWidget.js?");

/***/ }),

/***/ "./_dev/public/js/modules/LoadResults.js":
/*!***********************************************!*\
  !*** ./_dev/public/js/modules/LoadResults.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rmp_frontend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rmp_frontend */ \"rmp_frontend\");\n/* harmony import */ var rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rmp_frontend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SocialWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialWidget */ \"./_dev/public/js/modules/SocialWidget.js\");\n/* harmony import */ var _FeedbackWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FeedbackWidget */ \"./_dev/public/js/modules/FeedbackWidget.js\");\n/* harmony import */ var _IconHighlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IconHighlighter */ \"./_dev/public/js/modules/IconHighlighter.js\");\n/* harmony import */ var _CookiePush__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CookiePush */ \"./_dev/public/js/modules/CookiePush.js\");\n/* harmony import */ var _AnalyticsPush__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnalyticsPush */ \"./_dev/public/js/modules/AnalyticsPush.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\nvar LoadResults = /*#__PURE__*/function () {\n  function LoadResults(postID, widgetContainer, response, rating) {\n    _classCallCheck(this, LoadResults);\n\n    this.postID = postID;\n    this.widgetContainer = widgetContainer;\n    this.voteCount = response.voteCount;\n    this.avgRating = response.avgRating;\n    this.errorMsg = response.errorMsg;\n    this.token = response.token;\n    this.id = response.id;\n    this.avgRatingContainer = document.querySelector(this.widgetContainer + \".js-rmp-avg-rating, .js-rmp-results-widget--\" + postID + \" .js-rmp-avg-rating\");\n    this.voteCountContainer = document.querySelectorAll(this.widgetContainer + \".js-rmp-vote-count, .js-rmp-results-widget--\" + postID + \" .js-rmp-vote-count\");\n    this.noVotesContainer = document.querySelector(this.widgetContainer + \".js-rmp-not-rated\");\n    this.resultsTextContainer = document.querySelector(this.widgetContainer + \".js-rmp-results\");\n    this.ratingIcons = document.querySelectorAll(this.widgetContainer + \".js-rmp-rating-icon\");\n    this.resultIcons = document.querySelectorAll(\".js-rmp-results-widget--\" + postID + \" .js-rmp-results-icon\");\n    this.msgContainer = document.querySelector(this.widgetContainer + \".js-rmp-msg\");\n    this.tnxMsg = rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default.a.afterVote;\n    this.rating = rating;\n    this.hideRatings = rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default.a.notShowRating;\n    this.events();\n  }\n\n  _createClass(LoadResults, [{\n    key: \"events\",\n    value: function events() {\n      var _this = this;\n\n      if (this.errorMsg.length) {\n        this.msgContainer.html(this.errorMsg.join(\"<br />\"));\n        this.msgContainer.addClass(\"rmp-rating-widget__msg--alert\");\n\n        _toConsumableArray(this.ratingIcons).forEach(function (e) {\n          e.classList.remove(\"rmp-icon--processing-rating rmp-icon--hovered\");\n        });\n\n        return;\n      }\n\n      this.avgRatingContainer.innerText = this.avgRating;\n\n      _toConsumableArray(this.voteCountContainer).forEach(function (e) {\n        e.innerHTML = _this.voteCount;\n      });\n\n      this.toneDownIcons();\n      this.highlightIcons();\n      this.noVotesContainer.classList.add(\"rmp-rating-widget__not-rated--hidden\");\n      this.resultsTextContainer.classList.remove(\"rmp-rating-widget__results--hidden\");\n      this.msgContainer.innerText = this.tnxMsg;\n      new _SocialWidget__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.widgetContainer, this.rating);\n      new _FeedbackWidget__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.widgetContainer, this.postID, this.rating, this.token, this.id);\n      new _CookiePush__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.postID);\n      new _AnalyticsPush__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.rating);\n    }\n  }, {\n    key: \"toneDownIcons\",\n    value: function toneDownIcons() {\n      _toConsumableArray(this.ratingIcons).forEach(function (e) {\n        e.classList.remove(\"rmp-icon--full-highlight\", \"rmp-icon--half-highlight\", \"rmp-icon--processing-rating\", \"rmp-icon--hovered\", \"js-rmp-remove-half-star\", \"js-rmp-replace-half-star\");\n      });\n\n      _toConsumableArray(this.resultIcons).forEach(function (e) {\n        e.classList.remove(\"rmp-icon--full-highlight\", \"rmp-icon--half-highlight\", \"rmp-icon--processing-rating\", \"js-rmp-remove-half-star\", \"js-rmp-replace-half-star\");\n      });\n    }\n  }, {\n    key: \"highlightIcons\",\n    value: function highlightIcons() {\n      new _IconHighlighter__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.widgetContainer, this.postID, this.avgRating);\n    }\n  }]);\n\n  return LoadResults;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadResults);\n\n//# sourceURL=webpack://RateMyPost/./_dev/public/js/modules/LoadResults.js?");

/***/ }),

/***/ "./_dev/public/js/modules/PrivilegeCheck.js":
/*!**************************************************!*\
  !*** ./_dev/public/js/modules/PrivilegeCheck.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rmp_frontend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rmp_frontend */ \"rmp_frontend\");\n/* harmony import */ var rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rmp_frontend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _FreezeWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FreezeWidget */ \"./_dev/public/js/modules/FreezeWidget.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar PrivilegeCheck = /*#__PURE__*/function () {\n  function PrivilegeCheck() {\n    _classCallCheck(this, PrivilegeCheck);\n\n    this.requiresLogin = rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default.a.votingPriv;\n    this.isLoggedIn = rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default.a.loggedIn;\n    this.ratingWidget = document.querySelector(\".js-rmp-rating-widget\");\n    this.events();\n  }\n\n  _createClass(PrivilegeCheck, [{\n    key: \"events\",\n    value: function events() {\n      if (this.requiresLogin == 2 && !this.isLoggedIn) {\n        new _FreezeWidget__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"\");\n        this.ratingWidget.classList.add(\"rmp-rating-widget--no-privilege\");\n      }\n    }\n  }]);\n\n  return PrivilegeCheck;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PrivilegeCheck);\n\n//# sourceURL=webpack://RateMyPost/./_dev/public/js/modules/PrivilegeCheck.js?");

/***/ }),

/***/ "./_dev/public/js/modules/SocialWidget.js":
/*!************************************************!*\
  !*** ./_dev/public/js/modules/SocialWidget.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rmp_frontend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rmp_frontend */ \"rmp_frontend\");\n/* harmony import */ var rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rmp_frontend__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar SocialWidget = /*#__PURE__*/function () {\n  function SocialWidget(widgetContainer, rating) {\n    _classCallCheck(this, SocialWidget);\n\n    this.widgetContainer = widgetContainer;\n    this.socialEnabled = rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default.a.social;\n    this.ratingRequired = rmp_frontend__WEBPACK_IMPORTED_MODULE_0___default.a.positiveThreshold;\n    this.rating = rating;\n    this.ratingWidget = document.querySelector(this.widgetContainer + \".js-rmp-rating-widget\");\n    this.socialWidget = document.querySelector(this.widgetContainer + \".js-rmp-social-widget\");\n    this.events();\n  }\n\n  _createClass(SocialWidget, [{\n    key: \"events\",\n    value: function events() {\n      if (this.socialEnabled != 2 || this.rating <= this.ratingRequired) {\n        return;\n      }\n\n      this.socialWidget.classList.add(\"rmp-social-widget--visible\");\n      this.ratingWidget.classList.add(\"rmp-rating-widget--hidden\");\n    }\n  }]);\n\n  return SocialWidget;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocialWidget);\n\n//# sourceURL=webpack://RateMyPost/./_dev/public/js/modules/SocialWidget.js?");

/***/ }),

/***/ "./_dev/public/js/rate-my-post.js":
/*!****************************************!*\
  !*** ./_dev/public/js/rate-my-post.js ***!
  \****************************************/
/*! exports provided: re_init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"re_init\", function() { return re_init; });\n/* harmony import */ var _modules_InitWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/InitWidget */ \"./_dev/public/js/modules/InitWidget.js\");\n/* harmony import */ var _modules_AjaxLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/AjaxLoad */ \"./_dev/public/js/modules/AjaxLoad.js\");\n/* harmony import */ var _modules_BrowserSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/BrowserSupport */ \"./_dev/public/js/modules/BrowserSupport.js\");\n/* harmony import */ var _modules_DestroyWidgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/DestroyWidgets */ \"./_dev/public/js/modules/DestroyWidgets.js\");\n/* harmony import */ var rmp_frontend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rmp_frontend */ \"rmp_frontend\");\n/* harmony import */ var rmp_frontend__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rmp_frontend__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction init_rate_my_post() {\n  // deal with half-highlighted icons for older browsers\n  new _modules_BrowserSupport__WEBPACK_IMPORTED_MODULE_2__[\"default\"](); // check if rating or results widget is present\n\n  var ratingWidgets = document.getElementsByClassName(\"js-rmp-rating-widget\");\n  var resultsWidgets = document.getElementsByClassName(\"js-rmp-results-widget\");\n  var ratingWidgetContainers = document.getElementsByClassName(\"js-rmp-widgets-container\"); // exit if rating or results widget is not present\n\n  if (ratingWidgets.length < 1 && resultsWidgets.length < 1) {\n    return;\n  } // save post ids to array\n\n\n  var postsIDs = [];\n  Array.from(ratingWidgetContainers).forEach(function (item) {\n    postsIDs.push(item.dataset.postId);\n  }); // remove duplicates\n\n  var uniquePostIDs = postsIDs.filter(function (item, index) {\n    return postsIDs.indexOf(item) === index;\n  }); // postsIDs = [...new Set(postsIDs)]; //requires polyfill\n  // ajax load results\n\n  if (rmp_frontend__WEBPACK_IMPORTED_MODULE_4___default.a.ajaxLoad == 2) {\n    new _modules_AjaxLoad__WEBPACK_IMPORTED_MODULE_1__[\"default\"](uniquePostIDs[0]); // limit to one due to script executions\n\n    new _modules_InitWidget__WEBPACK_IMPORTED_MODULE_0__[\"default\"](uniquePostIDs[0]);\n    return;\n  } // init each widget\n\n\n  uniquePostIDs.forEach(function (postID) {\n    new _modules_InitWidget__WEBPACK_IMPORTED_MODULE_0__[\"default\"](postID);\n  });\n} // Init\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  init_rate_my_post();\n});\nfunction re_init() {\n  // console.log('re-init running');\n  new _modules_DestroyWidgets__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n  init_rate_my_post();\n}\n\n//# sourceURL=webpack://RateMyPost/./_dev/public/js/rate-my-post.js?");

/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n * JavaScript Cookie v2.2.1\n * https://github.com/js-cookie/js-cookie\n *\n * Copyright 2006, 2015 Klaus Hartl & Fagner Brack\n * Released under the MIT license\n */\n;(function (factory) {\n\tvar registeredInModuleLoader;\n\tif (true) {\n\t\t!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t\tregisteredInModuleLoader = true;\n\t}\n\tif (true) {\n\t\tmodule.exports = factory();\n\t\tregisteredInModuleLoader = true;\n\t}\n\tif (!registeredInModuleLoader) {\n\t\tvar OldCookies = window.Cookies;\n\t\tvar api = window.Cookies = factory();\n\t\tapi.noConflict = function () {\n\t\t\twindow.Cookies = OldCookies;\n\t\t\treturn api;\n\t\t};\n\t}\n}(function () {\n\tfunction extend () {\n\t\tvar i = 0;\n\t\tvar result = {};\n\t\tfor (; i < arguments.length; i++) {\n\t\t\tvar attributes = arguments[ i ];\n\t\t\tfor (var key in attributes) {\n\t\t\t\tresult[key] = attributes[key];\n\t\t\t}\n\t\t}\n\t\treturn result;\n\t}\n\n\tfunction decode (s) {\n\t\treturn s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);\n\t}\n\n\tfunction init (converter) {\n\t\tfunction api() {}\n\n\t\tfunction set (key, value, attributes) {\n\t\t\tif (typeof document === 'undefined') {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tattributes = extend({\n\t\t\t\tpath: '/'\n\t\t\t}, api.defaults, attributes);\n\n\t\t\tif (typeof attributes.expires === 'number') {\n\t\t\t\tattributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);\n\t\t\t}\n\n\t\t\t// We're using \"expires\" because \"max-age\" is not supported by IE\n\t\t\tattributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';\n\n\t\t\ttry {\n\t\t\t\tvar result = JSON.stringify(value);\n\t\t\t\tif (/^[\\{\\[]/.test(result)) {\n\t\t\t\t\tvalue = result;\n\t\t\t\t}\n\t\t\t} catch (e) {}\n\n\t\t\tvalue = converter.write ?\n\t\t\t\tconverter.write(value, key) :\n\t\t\t\tencodeURIComponent(String(value))\n\t\t\t\t\t.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);\n\n\t\t\tkey = encodeURIComponent(String(key))\n\t\t\t\t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)\n\t\t\t\t.replace(/[\\(\\)]/g, escape);\n\n\t\t\tvar stringifiedAttributes = '';\n\t\t\tfor (var attributeName in attributes) {\n\t\t\t\tif (!attributes[attributeName]) {\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\t\t\t\tstringifiedAttributes += '; ' + attributeName;\n\t\t\t\tif (attributes[attributeName] === true) {\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\t// Considers RFC 6265 section 5.2:\n\t\t\t\t// ...\n\t\t\t\t// 3.  If the remaining unparsed-attributes contains a %x3B (\";\")\n\t\t\t\t//     character:\n\t\t\t\t// Consume the characters of the unparsed-attributes up to,\n\t\t\t\t// not including, the first %x3B (\";\") character.\n\t\t\t\t// ...\n\t\t\t\tstringifiedAttributes += '=' + attributes[attributeName].split(';')[0];\n\t\t\t}\n\n\t\t\treturn (document.cookie = key + '=' + value + stringifiedAttributes);\n\t\t}\n\n\t\tfunction get (key, json) {\n\t\t\tif (typeof document === 'undefined') {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tvar jar = {};\n\t\t\t// To prevent the for loop in the first place assign an empty array\n\t\t\t// in case there are no cookies at all.\n\t\t\tvar cookies = document.cookie ? document.cookie.split('; ') : [];\n\t\t\tvar i = 0;\n\n\t\t\tfor (; i < cookies.length; i++) {\n\t\t\t\tvar parts = cookies[i].split('=');\n\t\t\t\tvar cookie = parts.slice(1).join('=');\n\n\t\t\t\tif (!json && cookie.charAt(0) === '\"') {\n\t\t\t\t\tcookie = cookie.slice(1, -1);\n\t\t\t\t}\n\n\t\t\t\ttry {\n\t\t\t\t\tvar name = decode(parts[0]);\n\t\t\t\t\tcookie = (converter.read || converter)(cookie, name) ||\n\t\t\t\t\t\tdecode(cookie);\n\n\t\t\t\t\tif (json) {\n\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\tcookie = JSON.parse(cookie);\n\t\t\t\t\t\t} catch (e) {}\n\t\t\t\t\t}\n\n\t\t\t\t\tjar[name] = cookie;\n\n\t\t\t\t\tif (key === name) {\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t} catch (e) {}\n\t\t\t}\n\n\t\t\treturn key ? jar[key] : jar;\n\t\t}\n\n\t\tapi.set = set;\n\t\tapi.get = function (key) {\n\t\t\treturn get(key, false /* read as raw */);\n\t\t};\n\t\tapi.getJSON = function (key) {\n\t\t\treturn get(key, true /* read as json */);\n\t\t};\n\t\tapi.remove = function (key, attributes) {\n\t\t\tset(key, '', extend(attributes, {\n\t\t\t\texpires: -1\n\t\t\t}));\n\t\t};\n\n\t\tapi.defaults = {};\n\n\t\tapi.withConverter = init;\n\n\t\treturn api;\n\t}\n\n\treturn init(function () {});\n}));\n\n\n//# sourceURL=webpack://RateMyPost/./node_modules/js-cookie/src/js.cookie.js?");

/***/ }),

/***/ "grecaptcha":
/*!*****************************!*\
  !*** external "grecaptcha" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = grecaptcha;\n\n//# sourceURL=webpack://RateMyPost/external_%22grecaptcha%22?");

/***/ }),

/***/ "rmp_frontend":
/*!*******************************!*\
  !*** external "rmp_frontend" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = rmp_frontend;\n\n//# sourceURL=webpack://RateMyPost/external_%22rmp_frontend%22?");

/***/ })

/******/ });