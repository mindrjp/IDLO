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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sbgnStylesheet = __webpack_require__(1);
var cytoscape = window.cytoscape;

var cy = window.cy = cytoscape({
  container: document.getElementById('cy'),
  elements: fetch('./demo.json').then(function (res) {
    return res.json();
  }),
  layout: { name: 'preset' },
  style: sbgnStylesheet(cytoscape)
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["cytoscapeSbgnStylesheet2020"] = factory();else root["cytoscapeSbgnStylesheet2020"] = factory();
})(typeof self !== 'undefined' ? self : undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 6);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var sbgnDataHandler = {
        isMultimer: function isMultimer(node) {
          return node.data('class').includes('multimer');
        },
        hasClonemarker: function hasClonemarker(node) {
          return node.data('clonemarker');
        },
        getStateVars: function getStateVars(node) {
          return node.data('stateVariables');
        },
        getUnitInfos: function getUnitInfos(node) {
          return node.data('unitsOfInformation');
        },
        hasAuxItems: function hasAuxItems(node) {
          return node.data('stateVariables').length + node.data('unitsOfInformation').length > 0;
        },
        sbgnClass: function sbgnClass(element) {
          return element.data('class');
        },
        sbgnLabel: function sbgnLabel(element) {
          return element.data('label');
        },
        stateVarLabel: function stateVarLabel(stateVar) {
          var variable = stateVar.state.variable;
          var value = stateVar.state.value;
          if (value && variable) {
            return value + '@' + variable;
          }
          if (value) {
            return value;
          }

          if (variable) {
            return variable;
          }
          return '';
        }
      };

      module.exports = sbgnDataHandler;

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var _slicedToArray = function () {
        function sliceIterator(arr, i) {
          var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;_e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }return _arr;
        }return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();

      var styleMap2Str = function styleMap2Str(styleMap) {
        if (!styleMap) {
          return '';
        }

        var s = '';

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = styleMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref = _step.value;

            var _ref2 = _slicedToArray(_ref, 2);

            var k = _ref2[0];
            var v = _ref2[1];

            s += k + '=' + '"' + v + '"' + ' ';
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return s;
      };

      var svg = function svg(svgStr) {
        var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

        var parser = new DOMParser();
        var svgText = '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg><svg xmlns=\'http://www.w3.org/2000/svg\' version=\'1.1\' width=\'' + width + '\' height=\'' + height + '\'>' + svgStr + '</svg>';
        return parser.parseFromString(svgText, 'text/xml').documentElement;
      };

      var svgStr = function svgStr(svgText, viewPortWidth, viewPortHeight, viewBoxX, viewBoxY, viewBoxWidth, viewBoxHeight) {
        var s = svg(svgText, viewPortWidth, viewPortHeight, viewBoxX, viewBoxY, viewBoxWidth, viewBoxHeight);

        // base64
        // let data = 'data:image/svg+xml;base64,' + btoa(s.outerHTML);

        // uri component string
        var data = 'data:image/svg+xml;utf8,' + encodeURIComponent(s.outerHTML);

        return data;
      };

      module.exports = {
        svgStr: svgStr,
        styleMap2Str: styleMap2Str
      };

      /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }return arr2;
        } else {
          return Array.from(arr);
        }
      }

      var styleMap2Str = __webpack_require__(1).styleMap2Str;

      var baseRectangle = function baseRectangle(x, y, w, h, r1, r2, r3, r4, styleMap) {
        return '\n  <path ' + styleMap2Str(styleMap) + ' d=\'\n    M ' + (x + r1) + ' ' + y + '\n    L ' + (x + w - r2) + ' ' + y + ' Q ' + (x + w) + ' ' + y + ' ' + (x + w) + ' ' + (y + r2) + '\n    L ' + (x + w) + ' ' + (y + h - r3) + ' Q ' + (x + w) + ' ' + (y + h) + ' ' + (x + w - r3) + ' ' + (y + h) + '\n    L ' + (x + r4) + ' ' + (y + h) + ' Q ' + x + ' ' + (y + h) + ' ' + x + ' ' + (y + h - r4) + '\n    L ' + x + ' ' + (y + r1) + ' Q ' + x + ' ' + y + ' ' + (x + r1) + ' ' + y + '\n    Z\'\n  />\n  ';
      };

      var baseShapes = {
        barrel: function barrel(x, y, width, height, styleMap) {
          return '\n\n    <g ' + styleMap2Str(styleMap) + '>\n      <path d="M ' + (0 * width + x) + ' ' + (.03 * height + y) + ' L ' + (0 * width + x) + ' ' + (.97 * height + y) + ' Q ' + (0.06 * width + x) + ' ' + (height + y) + ' ' + (0.25 * width + x) + ' ' + (height + y) + '"/>\n\n      <path d="M ' + (0.25 * width + x) + ' ' + (height + y) + ' L ' + (0.75 * width + x) + ' ' + (height + y) + ' Q ' + (0.95 * width + x) + ' ' + (height + y) + ' ' + (width + x) + ' ' + (0.95 * height + y) + '"/>\n\n      <path d="M ' + (width + x) + ' ' + (.95 * height + y) + ' L ' + (width + x) + ' ' + (0.05 * height + y) + ' Q ' + (width + x) + ' ' + (0 * height + y) + ' ' + (0.75 * width + x) + ' ' + (0 * height + y) + '"/>\n\n      <path d="M ' + (0.75 * width + x) + ' ' + (0 * height + y) + ' L ' + (0.25 * width + x) + ' ' + (0 * height + y) + ' Q ' + (0.06 * width + x) + ' ' + (0 * height + y) + ' ' + (0 * width + x) + ' ' + (0.03 * height + y) + '"/>\n    </g>\n\n    ';
        },
        circle: function circle(cx, cy, r, styleMap) {
          return '<circle cx=\'' + cx + '\' cy=\'' + cy + '\' r=\'' + r + '\' ' + styleMap2Str(styleMap) + ' />';
        },
        clipPath: function clipPath(id, baseShapeFn, baseShapeFnArgs, styleMap) {
          return '\n      <defs>\n        <clipPath id=\'' + id + '\' ' + styleMap2Str(styleMap) + '>\n        ' + baseShapeFn.apply(undefined, _toConsumableArray(baseShapeFnArgs)) + '\n        </clipPath>\n      </defs>\n    ';
        },
        concaveHexagon: function concaveHexagon(x, y, width, height, styleMap) {
          return '\n    <polygon ' + styleMap2Str(styleMap) + '\n      points=\'' + (x + 0) + ', ' + (y + 0) + ', ' + (x + width) + ', ' + (y + 0) + ', ' + (x + 0.85 * width) + ', ' + (y + 0.5 * height) + ', ' + (x + width) + ', ' + (y + height) + ', ' + (x + 0) + ', ' + (y + height) + ', ' + (x + 0.15 * width) + ', ' + (y + 0.5 * height) + '\'\n    />';
        },
        cutRectangle: function cutRectangle(x, y, width, height, cornerLength, styleMap) {
          return '\n    <polygon ' + styleMap2Str(styleMap) + '\n      points=\'\n      ' + (x + 0 * width) + ' ' + (y + cornerLength) + ' ' + (x + cornerLength) + ' ' + (y + 0 * height) + ' ' + (x + width - cornerLength) + ' ' + (y + 0 * height) + ' ' + (x + width) + ' ' + (y + cornerLength) + '\n      ' + (x + width) + ' ' + (y + height - cornerLength) + ' ' + (x + width - cornerLength) + ' ' + (y + height) + ' ' + (x + cornerLength) + ' ' + (y + height) + ' ' + (x + 0 * width) + ' ' + (y + height - cornerLength) + '\n      \'\n    />\n    ';
        },
        ellipse: function ellipse(cx, cy, rx, ry, styleMap) {
          return '\n      <ellipse cx=\'' + cx + '\' cy=\'' + cy + '\' rx=\'' + rx + '\' ry=\'' + ry + '\' ' + styleMap2Str(styleMap) + ' />\n    ';
        },
        hexagon: function hexagon(x, y, width, height, styleMap) {
          return '\n    <polygon ' + styleMap2Str(styleMap) + '\n      points=\'' + (x + 0) + ', ' + (y + 0.5 * height) + ', ' + (x + 0.25 * width) + ', ' + (y + 0 * height) + ', ' + (x + 0.75 * width) + ', ' + (y + 0 * height) + ', ' + (x + width) + ', ' + (y + 0.5 * height) + ', ' + (x + 0.75 * width) + ', ' + (y + height) + ', ' + (x + 0.25 * width) + ', ' + (y + height) + '\'\n    />';
        },
        line: function line(x1, y1, x2, y2, styleMap) {
          return '<line x1=\'' + x1 + '\' y1=\'' + y1 + '\' x2=\'' + x2 + '\' y2=\'' + y2 + '\' ' + styleMap2Str(styleMap) + ' />';
        },
        rectangle: function rectangle(x, y, width, height, styleMap) {
          return baseRectangle(x, y, width, height, 0, 0, 0, 0, styleMap);
        },
        roundBottomRectangle: function roundBottomRectangle(x, y, width, height, styleMap) {
          return baseRectangle(x, y, width, height, 0, 0, .3 * height, .3 * height, styleMap);
        },
        roundRectangle: function roundRectangle(x, y, width, height, styleMap) {
          return baseRectangle(x, y, width, height, .04 * width, .04 * width, .04 * width, .04 * width, styleMap);
        },
        stadium: function stadium(x, y, width, height, styleMap) {
          var radiusRatio = .24 * Math.max(width, height);
          return baseRectangle(x, y, width, height, radiusRatio, radiusRatio, radiusRatio, radiusRatio, styleMap);
        },
        square: function square(x, y, length, styleMap) {
          return baseRectangle(x, y, length, length, 0, 0, 0, 0, styleMap);
        },
        text: function text(t, x, y, styleMap) {
          return '<text x=\'' + x + '\' y=\'' + y + '\' ' + styleMap2Str(styleMap) + '>' + t + '</text>';
        }
      };

      module.exports = baseShapes;

      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var sbgnData = __webpack_require__(0);

      var sbgnStyle = new Map().set('unspecified entity', { w: 32, h: 32, shape: 'ellipse' }).set('simple chemical', { w: 48, h: 48, shape: 'ellipse' }).set('simple chemical multimer', { w: 48, h: 48, shape: 'ellipse' }).set('macromolecule', { w: 96, h: 48, shape: 'roundrectangle' }).set('macromolecule multimer', { w: 96, h: 48, shape: 'roundrectangle' }).set('nucleic acid feature', { w: 88, h: 56, shape: 'bottomroundrectangle' }).set('nucleic acid feature multimer', { w: 88, h: 52, shape: 'bottomroundrectangle' }).set('complex', { w: 10, h: 10, shape: 'cutrectangle' }).set('complex multimer', { w: 10, h: 10, shape: 'cutrectangle' }).set('source and sink', { w: 60, h: 60, shape: 'polygon' }).set('perturbing agent', { w: 140, h: 60, shape: 'concavehexagon' }).set('phenotype', { w: 140, h: 60, shape: 'hexagon' }).set('process', { w: 25, h: 25, shape: 'square' }).set('uncertain process', { w: 25, h: 25, shape: 'square' }).set('omitted process', { w: 25, h: 25, shape: 'square' }).set('association', { w: 25, h: 25, shape: 'ellipse' }).set('dissociation', { w: 25, h: 25, shape: 'ellipse' }).set('compartment', { w: 50, h: 50, shape: 'barrel' }).set('tag', { w: 100, h: 65, shape: 'tag' }).set('and', { w: 40, h: 40, shape: 'ellipse' }).set('or', { w: 40, h: 40, shape: 'ellipse' }).set('not', { w: 40, h: 40, shape: 'ellipse' });

      var sbgnArrowMap = new Map().set('necessary stimulation', 'triangle-cross').set('inhibition', 'tee').set('catalysis', 'circle').set('stimulation', 'triangle').set('production', 'triangle').set('modulation', 'diamond');

      var elementStyle = {
        sbgnShape: function sbgnShape(node) {
          var sbgnClass = sbgnData.sbgnClass(node).replace(' multimer', '');
          var style = sbgnStyle.get(sbgnClass);
          return style ? style.shape : 'ellipse';
        },
        sbgnArrowShape: function sbgnArrowShape(edge) {
          var sbgnClass = sbgnData.sbgnClass(edge);
          var shape = sbgnArrowMap.get(sbgnClass);
          return shape ? shape : 'none';
        },
        sbgnContent: function sbgnContent(node) {
          var sbgnClass = sbgnData.sbgnClass(node).replace(' multimer', '');
          var content = sbgnData.sbgnLabel(node);

          if (sbgnClass == 'and') {
            content = 'AND';
          }
          if (sbgnClass == 'or') {
            content = 'OR';
          }
          if (sbgnClass == 'not') {
            content = 'NOT';
          }
          if (sbgnClass == 'omitted process') {
            content = '\\\\';
          }
          if (sbgnClass == 'uncertain process') {
            content = '?';
          }

          return content;
        },
        dimensions: function dimensions(node) {
          var sbgnClass = sbgnData.sbgnClass(node);
          var dim = sbgnStyle.get(sbgnClass);
          if (dim == null) {
            throw new TypeError(sbgnClass + ' does not have a default width / height');
          }
          return dim;
        },
        width: function width(node) {
          return this.dimensions(node).w;
        },
        height: function height(node) {
          return this.dimensions(node).h;
        }
      };

      module.exports = elementStyle;

      /***/
    },
    /* 4 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }return arr2;
        } else {
          return Array.from(arr);
        }
      }

      var textWidth = __webpack_require__(11);

      var baseShapes = __webpack_require__(2);
      var sbgnData = __webpack_require__(0);

      var auxiliaryItems = {
        multiImgCloneMarker: function multiImgCloneMarker(x, y, width, height) {

          var cloneStyle = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1').set('fill', '#D2D2D2');

          return baseShapes.rectangle(x, y, width, height, cloneStyle);
        },
        multiImgUnitOfInformation: function multiImgUnitOfInformation(x, y, width, height, uInfo) {
          var borderWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 3;
          var fontSize = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 14;

          var text = uInfo.label.text;
          var uinfoRectStyle = new Map().set('stroke', '#555555').set('stroke-width', '' + borderWidth).set('fill', 'white').set('fill-opacity', 1);

          var textStyle = new Map().set('alignment-baseline', 'middle').set('font-size', fontSize + 'px').set('font-family', 'Helvetica Neue, Helvetica, sans-serif').set('text-anchor', 'middle');

          var uInfoWidth = textWidth(text, { family: textStyle.get('font-family'), size: fontSize }) + 5;

          var unitOfInformationSvg = '\n      ' + baseShapes.roundRectangle(x, y, uInfoWidth, height, uinfoRectStyle) + '\n      ' + baseShapes.text(text, x + uInfoWidth / 2, y + height / 2, textStyle) + '\n    ';

          return unitOfInformationSvg;
        },
        multiImgStateVar: function multiImgStateVar(x, y, width, height, stateVar) {
          var borderWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 3;
          var fontSize = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 14;

          var stateVarStyle = new Map().set('stroke', '#555555').set('stroke-width', '' + borderWidth).set('fill', 'white').set('fill-opacity', 1);

          var textStyle = new Map().set('alignment-baseline', 'middle').set('font-size', fontSize + 'px').set('font-family', 'Helvetica Neue, Helvetica, sans-serif').set('text-anchor', 'middle');

          var tw = textWidth(sbgnData.stateVarLabel(stateVar), { family: textStyle.get('font-family'), size: fontSize }) + 10;
          var w = Math.max(tw, 30);
          var statevariableSvg = '\n      ' + baseShapes.stadium(x, y, w, height, stateVarStyle) + '\n      ' + baseShapes.text(sbgnData.stateVarLabel(stateVar), x + w / 2, y + height / 2, textStyle) + '\n    ';

          return statevariableSvg;
        },
        cloneMarker: function cloneMarker(nodeWidth, nodeHeight, shapeFn, shapeFnArgs) {
          var clipId = 'clonemarker';

          var cloneMarkerStyle = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1.5').set('clip-path', 'url(#' + clipId + ')').set('fill', '#D2D2D2');

          var cloneMarkerSvg = '\n      ' + baseShapes.clipPath(clipId, baseShapes.rectangle, [0, 3 * nodeHeight / 4, nodeWidth, nodeHeight, new Map()]) + '\n      ' + shapeFn.apply(undefined, _toConsumableArray(shapeFnArgs).concat([cloneMarkerStyle])) + '\n    ';

          return cloneMarkerSvg;
        }
      };

      module.exports = auxiliaryItems;

      /***/
    },
    /* 5 */
    /***/function (module, exports, __webpack_require__) {

      /* WEBPACK VAR INJECTION */(function (global) {
        /**
        * lodash (Custom Build) <https://lodash.com/>
        * Build: `lodash modularize exports="npm" -o ./`
        * Copyright jQuery Foundation and other contributors <https://jquery.org/>
        * Released under MIT license <https://lodash.com/license>
        * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
        * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
        */

        /** Used as the `TypeError` message for "Functions" methods. */
        var FUNC_ERROR_TEXT = 'Expected a function';

        /** Used to stand-in for `undefined` hash values. */
        var HASH_UNDEFINED = '__lodash_hash_undefined__';

        /** `Object#toString` result references. */
        var funcTag = '[object Function]',
            genTag = '[object GeneratorFunction]';

        /**
         * Used to match `RegExp`
         * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
         */
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

        /** Used to detect host constructors (Safari). */
        var reIsHostCtor = /^\[object .+?Constructor\]$/;

        /** Detect free variable `global` from Node.js. */
        var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

        /** Detect free variable `self`. */
        var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

        /** Used as a reference to the global object. */
        var root = freeGlobal || freeSelf || Function('return this')();

        /**
         * Gets the value at `key` of `object`.
         *
         * @private
         * @param {Object} [object] The object to query.
         * @param {string} key The key of the property to get.
         * @returns {*} Returns the property value.
         */
        function getValue(object, key) {
          return object == null ? undefined : object[key];
        }

        /**
         * Checks if `value` is a host object in IE < 9.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
         */
        function isHostObject(value) {
          // Many host objects are `Object` objects that can coerce to strings
          // despite having improperly defined `toString` methods.
          var result = false;
          if (value != null && typeof value.toString != 'function') {
            try {
              result = !!(value + '');
            } catch (e) {}
          }
          return result;
        }

        /** Used for built-in method references. */
        var arrayProto = Array.prototype,
            funcProto = Function.prototype,
            objectProto = Object.prototype;

        /** Used to detect overreaching core-js shims. */
        var coreJsData = root['__core-js_shared__'];

        /** Used to detect methods masquerading as native. */
        var maskSrcKey = function () {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
          return uid ? 'Symbol(src)_1.' + uid : '';
        }();

        /** Used to resolve the decompiled source of functions. */
        var funcToString = funcProto.toString;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * Used to resolve the
         * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
         * of values.
         */
        var objectToString = objectProto.toString;

        /** Used to detect if a method is native. */
        var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

        /** Built-in value references. */
        var splice = arrayProto.splice;

        /* Built-in method references that are verified to be native. */
        var Map = getNative(root, 'Map'),
            nativeCreate = getNative(Object, 'create');

        /**
         * Creates a hash object.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function Hash(entries) {
          var index = -1,
              length = entries ? entries.length : 0;

          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }

        /**
         * Removes all key-value entries from the hash.
         *
         * @private
         * @name clear
         * @memberOf Hash
         */
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
        }

        /**
         * Removes `key` and its value from the hash.
         *
         * @private
         * @name delete
         * @memberOf Hash
         * @param {Object} hash The hash to modify.
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function hashDelete(key) {
          return this.has(key) && delete this.__data__[key];
        }

        /**
         * Gets the hash value for `key`.
         *
         * @private
         * @name get
         * @memberOf Hash
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result = data[key];
            return result === HASH_UNDEFINED ? undefined : result;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined;
        }

        /**
         * Checks if a hash value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf Hash
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
        }

        /**
         * Sets the hash `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf Hash
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the hash instance.
         */
        function hashSet(key, value) {
          var data = this.__data__;
          data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
          return this;
        }

        // Add methods to `Hash`.
        Hash.prototype.clear = hashClear;
        Hash.prototype['delete'] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;

        /**
         * Creates an list cache object.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function ListCache(entries) {
          var index = -1,
              length = entries ? entries.length : 0;

          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }

        /**
         * Removes all key-value entries from the list cache.
         *
         * @private
         * @name clear
         * @memberOf ListCache
         */
        function listCacheClear() {
          this.__data__ = [];
        }

        /**
         * Removes `key` and its value from the list cache.
         *
         * @private
         * @name delete
         * @memberOf ListCache
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function listCacheDelete(key) {
          var data = this.__data__,
              index = assocIndexOf(data, key);

          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          return true;
        }

        /**
         * Gets the list cache value for `key`.
         *
         * @private
         * @name get
         * @memberOf ListCache
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function listCacheGet(key) {
          var data = this.__data__,
              index = assocIndexOf(data, key);

          return index < 0 ? undefined : data[index][1];
        }

        /**
         * Checks if a list cache value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf ListCache
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }

        /**
         * Sets the list cache `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf ListCache
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the list cache instance.
         */
        function listCacheSet(key, value) {
          var data = this.__data__,
              index = assocIndexOf(data, key);

          if (index < 0) {
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }

        // Add methods to `ListCache`.
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype['delete'] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;

        /**
         * Creates a map cache object to store key-value pairs.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function MapCache(entries) {
          var index = -1,
              length = entries ? entries.length : 0;

          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }

        /**
         * Removes all key-value entries from the map.
         *
         * @private
         * @name clear
         * @memberOf MapCache
         */
        function mapCacheClear() {
          this.__data__ = {
            'hash': new Hash(),
            'map': new (Map || ListCache)(),
            'string': new Hash()
          };
        }

        /**
         * Removes `key` and its value from the map.
         *
         * @private
         * @name delete
         * @memberOf MapCache
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function mapCacheDelete(key) {
          return getMapData(this, key)['delete'](key);
        }

        /**
         * Gets the map value for `key`.
         *
         * @private
         * @name get
         * @memberOf MapCache
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }

        /**
         * Checks if a map value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf MapCache
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }

        /**
         * Sets the map `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf MapCache
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the map cache instance.
         */
        function mapCacheSet(key, value) {
          getMapData(this, key).set(key, value);
          return this;
        }

        // Add methods to `MapCache`.
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype['delete'] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;

        /**
         * Gets the index at which the `key` is found in `array` of key-value pairs.
         *
         * @private
         * @param {Array} array The array to inspect.
         * @param {*} key The key to search for.
         * @returns {number} Returns the index of the matched value, else `-1`.
         */
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }

        /**
         * The base implementation of `_.isNative` without bad shim checks.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a native function,
         *  else `false`.
         */
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }

        /**
         * Gets the data for `map`.
         *
         * @private
         * @param {Object} map The map to query.
         * @param {string} key The reference key.
         * @returns {*} Returns the map data.
         */
        function getMapData(map, key) {
          var data = map.__data__;
          return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
        }

        /**
         * Gets the native function at `key` of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {string} key The key of the method to get.
         * @returns {*} Returns the function if it's native, else `undefined`.
         */
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined;
        }

        /**
         * Checks if `value` is suitable for use as unique object key.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
         */
        function isKeyable(value) {
          var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
          return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
        }

        /**
         * Checks if `func` has its source masked.
         *
         * @private
         * @param {Function} func The function to check.
         * @returns {boolean} Returns `true` if `func` is masked, else `false`.
         */
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }

        /**
         * Converts `func` to its source code.
         *
         * @private
         * @param {Function} func The function to process.
         * @returns {string} Returns the source code.
         */
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {}
            try {
              return func + '';
            } catch (e) {}
          }
          return '';
        }

        /**
         * Creates a function that memoizes the result of `func`. If `resolver` is
         * provided, it determines the cache key for storing the result based on the
         * arguments provided to the memoized function. By default, the first argument
         * provided to the memoized function is used as the map cache key. The `func`
         * is invoked with the `this` binding of the memoized function.
         *
         * **Note:** The cache is exposed as the `cache` property on the memoized
         * function. Its creation may be customized by replacing the `_.memoize.Cache`
         * constructor with one whose instances implement the
         * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
         * method interface of `delete`, `get`, `has`, and `set`.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Function
         * @param {Function} func The function to have its output memoized.
         * @param {Function} [resolver] The function to resolve the cache key.
         * @returns {Function} Returns the new memoized function.
         * @example
         *
         * var object = { 'a': 1, 'b': 2 };
         * var other = { 'c': 3, 'd': 4 };
         *
         * var values = _.memoize(_.values);
         * values(object);
         * // => [1, 2]
         *
         * values(other);
         * // => [3, 4]
         *
         * object.a = 2;
         * values(object);
         * // => [1, 2]
         *
         * // Modify the result cache.
         * values.cache.set(object, ['a', 'b']);
         * values(object);
         * // => ['a', 'b']
         *
         * // Replace `_.memoize.Cache`.
         * _.memoize.Cache = WeakMap;
         */
        function memoize(func, resolver) {
          if (typeof func != 'function' || resolver && typeof resolver != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var memoized = function memoized() {
            var args = arguments,
                key = resolver ? resolver.apply(this, args) : args[0],
                cache = memoized.cache;

            if (cache.has(key)) {
              return cache.get(key);
            }
            var result = func.apply(this, args);
            memoized.cache = cache.set(key, result);
            return result;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }

        // Assign cache to `_.memoize`.
        memoize.Cache = MapCache;

        /**
         * Performs a
         * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
         * comparison between two values to determine if they are equivalent.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * var object = { 'a': 1 };
         * var other = { 'a': 1 };
         *
         * _.eq(object, object);
         * // => true
         *
         * _.eq(object, other);
         * // => false
         *
         * _.eq('a', 'a');
         * // => true
         *
         * _.eq('a', Object('a'));
         * // => false
         *
         * _.eq(NaN, NaN);
         * // => true
         */
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }

        /**
         * Checks if `value` is classified as a `Function` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a function, else `false`.
         * @example
         *
         * _.isFunction(_);
         * // => true
         *
         * _.isFunction(/abc/);
         * // => false
         */
        function isFunction(value) {
          // The use of `Object#toString` avoids issues with the `typeof` operator
          // in Safari 8-9 which returns 'object' for typed array and other constructors.
          var tag = isObject(value) ? objectToString.call(value) : '';
          return tag == funcTag || tag == genTag;
        }

        /**
         * Checks if `value` is the
         * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
         * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an object, else `false`.
         * @example
         *
         * _.isObject({});
         * // => true
         *
         * _.isObject([1, 2, 3]);
         * // => true
         *
         * _.isObject(_.noop);
         * // => true
         *
         * _.isObject(null);
         * // => false
         */
        function isObject(value) {
          var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
          return !!value && (type == 'object' || type == 'function');
        }

        module.exports = memoize;

        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(9));

      /***/
    },
    /* 6 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var sbgnStyleSheet = __webpack_require__(7);

      var defaultOptions = {};

      module.exports = function (cytoscape) {
        return sbgnStyleSheet(cytoscape);
      };

      /***/
    },
    /* 7 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var elementStyle = __webpack_require__(3);
      var sbgnsvg = __webpack_require__(8);

      var sbgnStyleSheet = function sbgnStyleSheet(cytoscape) {

        return cytoscape.stylesheet()
        // general node style
        .selector('node').css({
          'shape': function shape(node) {
            return elementStyle.sbgnShape(node);
          },
          'content': function content(node) {
            return elementStyle.sbgnContent(node);
          },
          'font-size': 20,
          'width': function width(node) {
            return elementStyle.width(node);
          },
          'height': function height(node) {
            return elementStyle.height(node);
          },
          'text-valign': 'center',
          'text-halign': 'center',
          'border-width': 1.5,
          'border-color': '#555',
          'background-color': '#f6f6f6',
          'text-opacity': 1,
          'opacity': 1,
          'text-outline-color': 'white',
          'text-outline-opacity': 1,
          'text-outline-width': 0.75
        }).selector('node:selected').css({
          'background-color': '#d67614',
          'target-arrow-color': '#000',
          'text-outline-color': '#000'
        }).selector('node:active').css({
          'overlay-color': '#d67614',
          'overlay-padding': '14'
        })

        // draw sbgn specific styling (auxiliary items, clonemarker, etc.)
        .selector('\n          node[class="unspecified entity"],\n          node[class="simple chemical"], node[class="simple chemical multimer"],\n          node[class="macromolecule"], node[class="macromolecule multimer"],\n          node[class="nucleic acid feature"], node[class="nucleic acid feature multimer"],\n          node[class="perturbing agent"],\n          node[class="phenotype"],\n          node[class="complex"], node[class="complex multimer"], node[class="compartment"]\n        ').css({
          'background-image': function backgroundImage(node) {
            return sbgnsvg.draw(node).bgImage;
          },
          'background-width': function backgroundWidth(node) {
            return sbgnsvg.draw(node).bgWidth;
          },
          'background-position-x': function backgroundPositionX(node) {
            return sbgnsvg.draw(node).bgPosX;
          },
          'background-position-y': function backgroundPositionY(node) {
            return sbgnsvg.draw(node).bgPosY;
          },
          'background-fit': function backgroundFit(node) {
            return sbgnsvg.draw(node).bgFit;
          },
          'background-clip': function backgroundClip(node) {
            return sbgnsvg.draw(node).bgClip;
          },
          'padding': function padding(node) {
            return sbgnsvg.draw(node).padding;
          },
          'border-width': function borderWidth(node) {
            return sbgnsvg.draw(node).borderWidth;
          }
        }).selector('\n          node[class="simple chemical multimer"],\n          node[class="macromolecule multimer"],\n          node[class="nucleic acid feature multimer"],\n          node[class="complex multimer"]\n        ').css({
          'ghost': 'yes',
          'ghost-opacity': 1
        }).selector('\n          node[class="macromolecule multimer"],\n          node[class="nucleic acid feature multimer"]\n        ').css({
          'ghost-offset-x': 12,
          'ghost-offset-y': 12
        }).selector('\n          node[class="simple chemical multimer"]\n        ').css({
          'ghost-offset-x': 5,
          'ghost-offset-y': 5
        }).selector('\n          node[class="complex multimer"]\n        ').css({
          'ghost-offset-x': 16,
          'ghost-offset-y': 16
        })

        // compound node specific style
        .selector('node[class="complex"], node[class="complex multimer"], node[class="compartment"]').css({
          'compound-sizing-wrt-labels': 'exclude',
          'text-valign': 'bottom',
          'text-halign': 'center'
        })

        // process node specific style
        .selector('node[class="association"], node[class="dissociation"]').css({
          'background-opacity': 1
        }).selector('node[class="association"]').css({
          'background-color': '#6B6B6B'
        })

        // source and sink and dissociation are drawn differently because
        // of their unique shape
        .selector('node[class="source and sink"]').css({
          'background-image': function backgroundImage(node) {
            return sbgnsvg.draw(node);
          },
          'background-fit': 'none',
          'background-width': '100%',
          'background-height': '100%',
          'background-clip': 'none',
          'background-repeat': 'no-repeat',
          'border-width': 0,
          'shape-polygon-points': '-0.86, 0.5, -0.75, 0.65, -1, 0.95, -0.95, 1, -0.65, 0.75, -0.5, 0.86, 0, 1, 0.5, 0.86, 0.71, 0.71, 0.86, 0.5, 1, 0, 0.86, -0.5, 0.75, -0.65, 1, -0.95, 0.95, -1, 0.65, -0.75, 0.5, -0.86, 0, -1, -0.5, -0.86, -0.71, -0.71, -0.86, -0.5, -1, 0'
        })

        // source and sink and dissociation are drawn differently because
        // of their unique shape
        .selector('node[class="dissociation"]').css({
          'background-image': function backgroundImage(node) {
            return sbgnsvg.draw(node);
          },
          'background-fit': 'none',
          'background-width': '100%',
          'background-height': '100%',
          'background-clip': 'none',
          'background-repeat': 'no-repeat',
          'border-width': 0
        })

        // edge styling
        .selector('edge').css({
          'arrow-scale': 1.75,
          'curve-style': 'bezier',
          'line-color': '#555',
          'target-arrow-fill': 'hollow',
          'source-arrow-fill': 'hollow',
          'width': 1.5,
          'target-arrow-color': '#555',
          'source-arrow-color': '#555',
          'text-border-color': '#555',
          'color': '#555'
        }).selector('edge:selected').css({
          'color': '#d67614',
          'line-color': '#d67614',
          'text-border-color': '#d67614',
          'source-arrow-color': '#d67614',
          'target-arrow-color': '#d67614'
        }).selector('edge:active').css({
          'background-opacity': 0.7, 'overlay-color': '#d67614',
          'overlay-padding': '8'
        }).selector('edge[cardinality > 0]').css({
          'text-background-shape': 'rectangle',
          'text-border-opacity': '1',
          'text-border-width': '1',
          'text-background-color': 'white',
          'text-background-opacity': '1'
        }).selector('edge[class="consumption"][cardinality > 0], edge[class="production"][cardinality > 0]').css({
          'source-label': function sourceLabel(edge) {
            return '' + edge.data('cardinality');
          },
          'source-text-offset': 10
        }).selector('edge[class]').css({
          'target-arrow-shape': function targetArrowShape(edge) {
            return elementStyle.sbgnArrowShape(edge);
          },
          'source-arrow-shape': 'none'
        }).selector('edge[class="inhibition"]').css({
          'target-arrow-fill': 'filled'
        }).selector('edge[class="production"]').css({
          'target-arrow-fill': 'filled'
        })

        // core
        .selector('core').css({
          'selection-box-color': '#d67614',
          'selection-box-opacity': '0.2', 'selection-box-border-color': '#d67614'
        });
      };

      module.exports = sbgnStyleSheet;

      /***/
    },
    /* 8 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var memoize = __webpack_require__(5);

      var containerNodes = __webpack_require__(10);
      var entityPoolNodes = __webpack_require__(17);
      var processNodes = __webpack_require__(18);

      var sbgnData = __webpack_require__(0);

      var cacheKeyFn = function cacheKeyFn(node) {
        return '' + JSON.stringify(node.id());
      };

      var sbgnNodeShapeMap = new Map()
      // process nodes
      .set('dissociation', memoize(processNodes.dissociation, cacheKeyFn)).set('phenotype', memoize(processNodes.phenotype, cacheKeyFn))

      // entity pool nodes
      .set('source and sink', memoize(entityPoolNodes.sourceAndSink, cacheKeyFn)).set('unspecified entity', memoize(entityPoolNodes.unspecifiedEntity, cacheKeyFn)).set('simple chemical', memoize(entityPoolNodes.simpleChemical, cacheKeyFn)).set('macromolecule', memoize(entityPoolNodes.macromolecule, cacheKeyFn)).set('nucleic acid feature', memoize(entityPoolNodes.nucleicAcidFeature, cacheKeyFn)).set('complex', memoize(entityPoolNodes.complex, cacheKeyFn)).set('perturbing agent', memoize(entityPoolNodes.perturbingAgent, cacheKeyFn))

      // container nodes
      .set('compartment', memoize(containerNodes.compartment, cacheKeyFn));

      var draw = function draw(node) {
        var sbgnClass = sbgnData.sbgnClass(node).replace(' multimer', '');
        var shapeFn = sbgnNodeShapeMap.get(sbgnClass);
        if (shapeFn == null) {
          throw new TypeError(sbgnClass + ' does not have a shape implementation');
        }
        return shapeFn(node);
      };

      module.exports = {
        draw: draw
      };

      /***/
    },
    /* 9 */
    /***/function (module, exports) {

      var g;

      // This works in non-strict mode
      g = function () {
        return this;
      }();

      try {
        // This works if eval is allowed (see CSP)
        g = g || Function("return this")() || (1, eval)("this");
      } catch (e) {
        // This works if the window reference is available
        if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === "object") g = window;
      }

      // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}

      module.exports = g;

      /***/
    },
    /* 10 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var svgStr = __webpack_require__(1).svgStr;
      var sbgnData = __webpack_require__(0);
      var memoize = __webpack_require__(5);

      var auxiliaryItems = __webpack_require__(4);
      var baseShapes = __webpack_require__(2);

      var containerNodes = {
        compartment: function compartment(node) {
          var auxItemWidth = 60;
          var auxItemHeight = 40;
          var uInfos = sbgnData.getUnitInfos(node);

          var style = new Map().set('stroke', '#555555').set('stroke-width', '6');

          var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0]) : '', auxItemWidth, auxItemHeight);

          var lineSvg = svgStr(uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

          return {
            bgImage: [lineSvg, uInfoSvg],
            bgWidth: ['100%'],
            bgPosX: ['0%', '25%'],
            bgPosY: ['19px', '0%'],
            bgFit: ['contain', 'none'],
            bgClip: 'node',
            padding: '38px',
            borderWidth: '4'
          };
        }
      };

      module.exports = containerNodes;

      /***/
    },
    /* 11 */
    /***/function (module, exports, __webpack_require__) {

      var util = __webpack_require__(12);
      var extend = __webpack_require__(16);

      var supported = function supported() {
        if (typeof document === 'undefined' || typeof document.createElement !== 'function') return false;

        var canvas = document.createElement('canvas');
        if (typeof canvas.getContext !== 'function') return false;

        var context = canvas.getContext('2d');
        return !!context && typeof context.measureText === 'function';
      };

      var initialize = function initialize() {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');

        var width = function width(str, options) {
          options = extend({
            style: 'normal',
            variant: 'normal',
            weight: 'normal',
            size: 'medium',
            family: 'sans-serif',
            align: 'start',
            baseline: 'alphabetic'
          }, options);

          var size = options.size;
          if (typeof size === 'number') size = size + 'px';

          context.font = util.format('%s %s %s %s %s', options.style, options.variant, options.weight, size, options.family);
          context.textAlign = options.align;
          context.textBaseline = options.baseline;

          return context.measureText(str).width;
        };

        width.supported = true;
        return width;
      };

      module.exports = supported() ? initialize() : function () {
        var width = function width() {
          return 0;
        };

        width.supported = false;
        return width;
      }();

      /***/
    },
    /* 12 */
    /***/function (module, exports, __webpack_require__) {

      /* WEBPACK VAR INJECTION */(function (process) {
        // Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.

        var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
          var keys = Object.keys(obj);
          var descriptors = {};
          for (var i = 0; i < keys.length; i++) {
            descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
          }
          return descriptors;
        };

        var formatRegExp = /%[sdj%]/g;
        exports.format = function (f) {
          if (!isString(f)) {
            var objects = [];
            for (var i = 0; i < arguments.length; i++) {
              objects.push(inspect(arguments[i]));
            }
            return objects.join(' ');
          }

          var i = 1;
          var args = arguments;
          var len = args.length;
          var str = String(f).replace(formatRegExp, function (x) {
            if (x === '%%') return '%';
            if (i >= len) return x;
            switch (x) {
              case '%s':
                return String(args[i++]);
              case '%d':
                return Number(args[i++]);
              case '%j':
                try {
                  return JSON.stringify(args[i++]);
                } catch (_) {
                  return '[Circular]';
                }
              default:
                return x;
            }
          });
          for (var x = args[i]; i < len; x = args[++i]) {
            if (isNull(x) || !isObject(x)) {
              str += ' ' + x;
            } else {
              str += ' ' + inspect(x);
            }
          }
          return str;
        };

        // Mark that a method should not be used.
        // Returns a modified function which warns once by default.
        // If --no-deprecation is set, then it is a no-op.
        exports.deprecate = function (fn, msg) {
          if (typeof process !== 'undefined' && process.noDeprecation === true) {
            return fn;
          }

          // Allow for deprecating things in the process of starting up.
          if (typeof process === 'undefined') {
            return function () {
              return exports.deprecate(fn, msg).apply(this, arguments);
            };
          }

          var warned = false;
          function deprecated() {
            if (!warned) {
              if (process.throwDeprecation) {
                throw new Error(msg);
              } else if (process.traceDeprecation) {
                console.trace(msg);
              } else {
                console.error(msg);
              }
              warned = true;
            }
            return fn.apply(this, arguments);
          }

          return deprecated;
        };

        var debugs = {};
        var debugEnviron;
        exports.debuglog = function (set) {
          if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
          set = set.toUpperCase();
          if (!debugs[set]) {
            if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
              var pid = process.pid;
              debugs[set] = function () {
                var msg = exports.format.apply(exports, arguments);
                console.error('%s %d: %s', set, pid, msg);
              };
            } else {
              debugs[set] = function () {};
            }
          }
          return debugs[set];
        };

        /**
         * Echos the value of a value. Trys to print the value out
         * in the best way possible given the different types.
         *
         * @param {Object} obj The object to print out.
         * @param {Object} opts Optional options object that alters the output.
         */
        /* legacy: obj, showHidden, depth, colors*/
        function inspect(obj, opts) {
          // default options
          var ctx = {
            seen: [],
            stylize: stylizeNoColor
          };
          // legacy...
          if (arguments.length >= 3) ctx.depth = arguments[2];
          if (arguments.length >= 4) ctx.colors = arguments[3];
          if (isBoolean(opts)) {
            // legacy...
            ctx.showHidden = opts;
          } else if (opts) {
            // got an "options" object
            exports._extend(ctx, opts);
          }
          // set default options
          if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
          if (isUndefined(ctx.depth)) ctx.depth = 2;
          if (isUndefined(ctx.colors)) ctx.colors = false;
          if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
          if (ctx.colors) ctx.stylize = stylizeWithColor;
          return formatValue(ctx, obj, ctx.depth);
        }
        exports.inspect = inspect;

        // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
        inspect.colors = {
          'bold': [1, 22],
          'italic': [3, 23],
          'underline': [4, 24],
          'inverse': [7, 27],
          'white': [37, 39],
          'grey': [90, 39],
          'black': [30, 39],
          'blue': [34, 39],
          'cyan': [36, 39],
          'green': [32, 39],
          'magenta': [35, 39],
          'red': [31, 39],
          'yellow': [33, 39]
        };

        // Don't use 'blue' not visible on cmd.exe
        inspect.styles = {
          'special': 'cyan',
          'number': 'yellow',
          'boolean': 'yellow',
          'undefined': 'grey',
          'null': 'bold',
          'string': 'green',
          'date': 'magenta',
          // "name": intentionally not styling
          'regexp': 'red'
        };

        function stylizeWithColor(str, styleType) {
          var style = inspect.styles[styleType];

          if (style) {
            return '\x1B[' + inspect.colors[style][0] + 'm' + str + '\x1B[' + inspect.colors[style][1] + 'm';
          } else {
            return str;
          }
        }

        function stylizeNoColor(str, styleType) {
          return str;
        }

        function arrayToHash(array) {
          var hash = {};

          array.forEach(function (val, idx) {
            hash[val] = true;
          });

          return hash;
        }

        function formatValue(ctx, value, recurseTimes) {
          // Provide a hook for user-specified inspect functions.
          // Check that value is an object with an inspect function on it
          if (ctx.customInspect && value && isFunction(value.inspect) &&
          // Filter out the util module, it's inspect function is special
          value.inspect !== exports.inspect &&
          // Also filter out any prototype objects using the circular check.
          !(value.constructor && value.constructor.prototype === value)) {
            var ret = value.inspect(recurseTimes, ctx);
            if (!isString(ret)) {
              ret = formatValue(ctx, ret, recurseTimes);
            }
            return ret;
          }

          // Primitive types cannot have properties
          var primitive = formatPrimitive(ctx, value);
          if (primitive) {
            return primitive;
          }

          // Look up the keys of the object.
          var keys = Object.keys(value);
          var visibleKeys = arrayToHash(keys);

          if (ctx.showHidden) {
            keys = Object.getOwnPropertyNames(value);
          }

          // IE doesn't make error fields non-enumerable
          // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
          if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
            return formatError(value);
          }

          // Some type of object without properties can be shortcutted.
          if (keys.length === 0) {
            if (isFunction(value)) {
              var name = value.name ? ': ' + value.name : '';
              return ctx.stylize('[Function' + name + ']', 'special');
            }
            if (isRegExp(value)) {
              return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
            }
            if (isDate(value)) {
              return ctx.stylize(Date.prototype.toString.call(value), 'date');
            }
            if (isError(value)) {
              return formatError(value);
            }
          }

          var base = '',
              array = false,
              braces = ['{', '}'];

          // Make Array say that they are Array
          if (isArray(value)) {
            array = true;
            braces = ['[', ']'];
          }

          // Make functions say that they are functions
          if (isFunction(value)) {
            var n = value.name ? ': ' + value.name : '';
            base = ' [Function' + n + ']';
          }

          // Make RegExps say that they are RegExps
          if (isRegExp(value)) {
            base = ' ' + RegExp.prototype.toString.call(value);
          }

          // Make dates with properties first say the date
          if (isDate(value)) {
            base = ' ' + Date.prototype.toUTCString.call(value);
          }

          // Make error with message first say the error
          if (isError(value)) {
            base = ' ' + formatError(value);
          }

          if (keys.length === 0 && (!array || value.length == 0)) {
            return braces[0] + base + braces[1];
          }

          if (recurseTimes < 0) {
            if (isRegExp(value)) {
              return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
            } else {
              return ctx.stylize('[Object]', 'special');
            }
          }

          ctx.seen.push(value);

          var output;
          if (array) {
            output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
          } else {
            output = keys.map(function (key) {
              return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
            });
          }

          ctx.seen.pop();

          return reduceToSingleString(output, base, braces);
        }

        function formatPrimitive(ctx, value) {
          if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
          if (isString(value)) {
            var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
            return ctx.stylize(simple, 'string');
          }
          if (isNumber(value)) return ctx.stylize('' + value, 'number');
          if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');
          // For some reason typeof null is "object", so special case here.
          if (isNull(value)) return ctx.stylize('null', 'null');
        }

        function formatError(value) {
          return '[' + Error.prototype.toString.call(value) + ']';
        }

        function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
          var output = [];
          for (var i = 0, l = value.length; i < l; ++i) {
            if (hasOwnProperty(value, String(i))) {
              output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
            } else {
              output.push('');
            }
          }
          keys.forEach(function (key) {
            if (!key.match(/^\d+$/)) {
              output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
            }
          });
          return output;
        }

        function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
          var name, str, desc;
          desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
          if (desc.get) {
            if (desc.set) {
              str = ctx.stylize('[Getter/Setter]', 'special');
            } else {
              str = ctx.stylize('[Getter]', 'special');
            }
          } else {
            if (desc.set) {
              str = ctx.stylize('[Setter]', 'special');
            }
          }
          if (!hasOwnProperty(visibleKeys, key)) {
            name = '[' + key + ']';
          }
          if (!str) {
            if (ctx.seen.indexOf(desc.value) < 0) {
              if (isNull(recurseTimes)) {
                str = formatValue(ctx, desc.value, null);
              } else {
                str = formatValue(ctx, desc.value, recurseTimes - 1);
              }
              if (str.indexOf('\n') > -1) {
                if (array) {
                  str = str.split('\n').map(function (line) {
                    return '  ' + line;
                  }).join('\n').substr(2);
                } else {
                  str = '\n' + str.split('\n').map(function (line) {
                    return '   ' + line;
                  }).join('\n');
                }
              }
            } else {
              str = ctx.stylize('[Circular]', 'special');
            }
          }
          if (isUndefined(name)) {
            if (array && key.match(/^\d+$/)) {
              return str;
            }
            name = JSON.stringify('' + key);
            if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
              name = name.substr(1, name.length - 2);
              name = ctx.stylize(name, 'name');
            } else {
              name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
              name = ctx.stylize(name, 'string');
            }
          }

          return name + ': ' + str;
        }

        function reduceToSingleString(output, base, braces) {
          var numLinesEst = 0;
          var length = output.reduce(function (prev, cur) {
            numLinesEst++;
            if (cur.indexOf('\n') >= 0) numLinesEst++;
            return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
          }, 0);

          if (length > 60) {
            return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
          }

          return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
        }

        // NOTE: These type checking functions intentionally don't use `instanceof`
        // because it is fragile and can be easily faked with `Object.create()`.
        function isArray(ar) {
          return Array.isArray(ar);
        }
        exports.isArray = isArray;

        function isBoolean(arg) {
          return typeof arg === 'boolean';
        }
        exports.isBoolean = isBoolean;

        function isNull(arg) {
          return arg === null;
        }
        exports.isNull = isNull;

        function isNullOrUndefined(arg) {
          return arg == null;
        }
        exports.isNullOrUndefined = isNullOrUndefined;

        function isNumber(arg) {
          return typeof arg === 'number';
        }
        exports.isNumber = isNumber;

        function isString(arg) {
          return typeof arg === 'string';
        }
        exports.isString = isString;

        function isSymbol(arg) {
          return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol';
        }
        exports.isSymbol = isSymbol;

        function isUndefined(arg) {
          return arg === void 0;
        }
        exports.isUndefined = isUndefined;

        function isRegExp(re) {
          return isObject(re) && objectToString(re) === '[object RegExp]';
        }
        exports.isRegExp = isRegExp;

        function isObject(arg) {
          return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
        }
        exports.isObject = isObject;

        function isDate(d) {
          return isObject(d) && objectToString(d) === '[object Date]';
        }
        exports.isDate = isDate;

        function isError(e) {
          return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
        }
        exports.isError = isError;

        function isFunction(arg) {
          return typeof arg === 'function';
        }
        exports.isFunction = isFunction;

        function isPrimitive(arg) {
          return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol' || // ES6 symbol
          typeof arg === 'undefined';
        }
        exports.isPrimitive = isPrimitive;

        exports.isBuffer = __webpack_require__(14);

        function objectToString(o) {
          return Object.prototype.toString.call(o);
        }

        function pad(n) {
          return n < 10 ? '0' + n.toString(10) : n.toString(10);
        }

        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        // 26 Feb 16:19:34
        function timestamp() {
          var d = new Date();
          var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
          return [d.getDate(), months[d.getMonth()], time].join(' ');
        }

        // log is just a thin wrapper to console.log that prepends a timestamp
        exports.log = function () {
          console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
        };

        /**
         * Inherit the prototype methods from one constructor into another.
         *
         * The Function.prototype.inherits from lang.js rewritten as a standalone
         * function (not on Function.prototype). NOTE: If this file is to be loaded
         * during bootstrapping this function needs to be rewritten using some native
         * functions as prototype setup using normal JavaScript does not work as
         * expected during bootstrapping (see mirror.js in r114903).
         *
         * @param {function} ctor Constructor function which needs to inherit the
         *     prototype.
         * @param {function} superCtor Constructor function to inherit prototype from.
         */
        exports.inherits = __webpack_require__(15);

        exports._extend = function (origin, add) {
          // Don't do anything if add isn't an object
          if (!add || !isObject(add)) return origin;

          var keys = Object.keys(add);
          var i = keys.length;
          while (i--) {
            origin[keys[i]] = add[keys[i]];
          }
          return origin;
        };

        function hasOwnProperty(obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        }

        var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

        exports.promisify = function promisify(original) {
          if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');

          if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
            var fn = original[kCustomPromisifiedSymbol];
            if (typeof fn !== 'function') {
              throw new TypeError('The "util.promisify.custom" argument must be of type Function');
            }
            Object.defineProperty(fn, kCustomPromisifiedSymbol, {
              value: fn, enumerable: false, writable: false, configurable: true
            });
            return fn;
          }

          function fn() {
            var promiseResolve, promiseReject;
            var promise = new Promise(function (resolve, reject) {
              promiseResolve = resolve;
              promiseReject = reject;
            });

            var args = [];
            for (var i = 0; i < arguments.length; i++) {
              args.push(arguments[i]);
            }
            args.push(function (err, value) {
              if (err) {
                promiseReject(err);
              } else {
                promiseResolve(value);
              }
            });

            try {
              original.apply(this, args);
            } catch (err) {
              promiseReject(err);
            }

            return promise;
          }

          Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

          if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn, enumerable: false, writable: false, configurable: true
          });
          return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
        };

        exports.promisify.custom = kCustomPromisifiedSymbol;

        function callbackifyOnRejected(reason, cb) {
          // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
          // Because `null` is a special error value in callbacks which means "no error
          // occurred", we error-wrap so the callback consumer can distinguish between
          // "the promise rejected with null" or "the promise fulfilled with undefined".
          if (!reason) {
            var newReason = new Error('Promise was rejected with a falsy value');
            newReason.reason = reason;
            reason = newReason;
          }
          return cb(reason);
        }

        function callbackify(original) {
          if (typeof original !== 'function') {
            throw new TypeError('The "original" argument must be of type Function');
          }

          // We DO NOT return the promise as it gives the user a false sense that
          // the promise is actually somehow related to the callback's execution
          // and that the callback throwing will reject the promise.
          function callbackified() {
            var args = [];
            for (var i = 0; i < arguments.length; i++) {
              args.push(arguments[i]);
            }

            var maybeCb = args.pop();
            if (typeof maybeCb !== 'function') {
              throw new TypeError('The last argument must be of type Function');
            }
            var self = this;
            var cb = function cb() {
              return maybeCb.apply(self, arguments);
            };
            // In true node style we process the callback on `nextTick` with all the
            // implications (stack, `uncaughtException`, `async_hooks`)
            original.apply(this, args).then(function (ret) {
              process.nextTick(cb, null, ret);
            }, function (rej) {
              process.nextTick(callbackifyOnRejected, rej, cb);
            });
          }

          Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
          Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
          return callbackified;
        }
        exports.callbackify = callbackify;

        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(13));

      /***/
    },
    /* 13 */
    /***/function (module, exports) {

      // shim for using process in browser
      var process = module.exports = {};

      // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }
      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }
      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };

      // v8 likes predictible objects
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = ''; // empty string to avoid regexp issues
      process.versions = {};

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };
      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };
      process.umask = function () {
        return 0;
      };

      /***/
    },
    /* 14 */
    /***/function (module, exports) {

      module.exports = function isBuffer(arg) {
        return arg && (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
      };

      /***/
    },
    /* 15 */
    /***/function (module, exports) {

      if (typeof Object.create === 'function') {
        // implementation from standard node.js 'util' module
        module.exports = function inherits(ctor, superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        };
      } else {
        // old school shim for old browsers
        module.exports = function inherits(ctor, superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function TempCtor() {};
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        };
      }

      /***/
    },
    /* 16 */
    /***/function (module, exports) {

      module.exports = extend;

      var hasOwnProperty = Object.prototype.hasOwnProperty;

      function extend() {
        var target = {};

        for (var i = 0; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      }

      /***/
    },
    /* 17 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var baseShapes = __webpack_require__(2);
      var auxiliaryItems = __webpack_require__(4);

      var svgStr = __webpack_require__(1).svgStr;
      var getUnitInfos = __webpack_require__(0).getUnitInfos;
      var getStateVars = __webpack_require__(0).getStateVars;
      var hasClonemarker = __webpack_require__(0).hasClonemarker;

      var element = __webpack_require__(3);

      var entityPoolNodes = {
        unspecifiedEntity: function unspecifiedEntity(node) {
          var auxItemWidth = 100;
          var auxItemHeight = 20;
          var borderWidth = 2;
          var fontSize = 10;
          var uInfos = getUnitInfos(node);
          var sVars = getStateVars(node);

          var style = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1');

          var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight);

          var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

          var sVarSvg = svgStr(sVars.length > 0 ? auxiliaryItems.multiImgStateVar(2, 0, auxItemWidth - 5, auxItemHeight - 3, sVars[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

          var topLine = svgStr(uInfos.length + sVars.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

          var bottomLine = svgStr(hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);
          return {
            bgImage: [bottomLine, topLine, cloneMarkerSvg, uInfoSvg, sVarSvg],
            bgWidth: ['100%', '100%', '100%'],
            bgPosX: ['0%', '0%', '0%', '20px', '40px'],
            bgPosY: ['52px', '8px', '32px', '44px', '0%'],
            bgFit: ['cover', 'cover', 'none', 'none'],
            bgClip: 'node',
            padding: '8px',
            borderWidth: 2
          };
        },
        simpleChemical: function simpleChemical(node) {
          var auxItemWidth = 100;
          var auxItemHeight = 20;
          var borderWidth = 2;
          var fontSize = 10;
          var uInfos = getUnitInfos(node);

          var style = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1');

          var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight);

          var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

          var topLine = svgStr(uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

          var bottomLine = svgStr(hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

          return {
            bgImage: [bottomLine, topLine, cloneMarkerSvg, uInfoSvg],
            bgWidth: ['100%', '100%', '100%'],
            bgPosX: ['0%', '0%', '0%', '12px'],
            bgPosY: ['52px', '8px', '48px', '0px'],
            bgFit: ['cover', 'cover', 'none', 'none'],
            bgClip: 'node',
            padding: '8px',
            borderWidth: 2
          };
        },
        macromolecule: function macromolecule(node) {
          var auxItemWidth = 100;
          var auxItemHeight = 20;
          var borderWidth = 2;
          var fontSize = 10;
          var uInfos = getUnitInfos(node);
          var sVars = getStateVars(node);

          var style = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1');

          var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight);

          var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

          var sVarSvg = svgStr(sVars.length > 0 ? auxiliaryItems.multiImgStateVar(2, 0, auxItemWidth - 5, auxItemHeight - 3, sVars[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

          var topLine = svgStr(uInfos.length + sVars.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

          var bottomLine = svgStr(hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

          return {
            bgImage: [bottomLine, topLine, cloneMarkerSvg, uInfoSvg, sVarSvg],
            bgWidth: ['100%', '100%', '100%'],
            bgPosX: ['0%', '0%', '0%', '20px', '40px'],
            bgPosY: ['52px', '8px', '52px', '44px', '0%'],
            bgFit: ['cover', 'cover', 'none', 'none'],
            bgClip: 'node',
            padding: '8px',
            borderWidth: 2
          };
        },
        nucleicAcidFeature: function nucleicAcidFeature(node) {
          var auxItemWidth = 100;
          var auxItemHeight = 20;
          var borderWidth = 2;
          var fontSize = 10;
          var uInfos = getUnitInfos(node);
          var sVars = getStateVars(node);

          var style = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1');

          var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight);

          var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

          var sVarSvg = svgStr(sVars.length > 0 ? auxiliaryItems.multiImgStateVar(2, 0, auxItemWidth - 5, auxItemHeight - 3, sVars[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

          var topLine = svgStr(sVars.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

          var bottomLine = svgStr(hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

          return {
            bgImage: [bottomLine, topLine, cloneMarkerSvg, uInfoSvg, sVarSvg],
            bgWidth: ['100%', '100%', '100%'],
            bgPosX: ['0%', '0%', '0%', '20px', '40px'],
            bgPosY: ['52px', '8px', '52px', '44px', '0%'],
            bgFit: ['cover', 'cover', 'none', 'none'],
            bgClip: 'node',
            padding: '8px',
            borderWidth: 2
          };
        },
        complex: function complex(node) {
          var itemW = 60;
          var itemH = 24;
          var uInfos = getUnitInfos(node);
          var sVars = getStateVars(node);

          var images = [];
          var bgWidth = [];
          var bgHeight = [];
          var bgPosX = [];
          var bgPosY = [];
          var bgFit = [];

          var style = new Map().set('stroke', '#555555').set('stroke-width', '6');

          // order of svg image generation matters
          if (uInfos.length + sVars.length > 0) {
            var topLineSvg = svgStr(baseShapes.line(0, 0, itemW, 0, style), itemW, itemH);
            images.push(topLineSvg);
            bgWidth.push('100%');
            bgPosX.push('0%');
            bgPosY.push('11px');
            bgFit.push('none');
          }

          if (hasClonemarker(node)) {
            var bottomLineSvg = svgStr(baseShapes.line(0, 0, itemW, 0, style), itemW, itemH);
            images.push(bottomLineSvg);
            bgWidth.push('100%');
            bgPosX.push('0%');
            bgPosY.push('100%');
            bgFit.push('none');
          }

          if (hasClonemarker(node)) {
            var cloneSvg = svgStr(auxiliaryItems.multiImgCloneMarker(0, 2, itemW, itemH - 3), itemW, itemH);
            images.push(cloneSvg);
            bgWidth.push('100%');
            bgPosX.push('0%');
            bgPosY.push('100%');
            bgFit.push('none');
          }

          if (uInfos.length > 0) {
            var uInfoSvg = svgStr(auxiliaryItems.multiImgUnitOfInformation(2, 0, itemW - 5, itemH - 3, uInfos[0]), itemW, itemH);
            images.push(uInfoSvg);
            bgPosX.push('25%');
            bgPosY.push('0%');
            bgFit.push('none');
          }

          if (sVars.length > 0) {
            var sVarSvg = svgStr(auxiliaryItems.multiImgStateVar(2, 0, itemW - 5, itemH - 3, sVars[0]), itemW, itemH);
            images.push(sVarSvg);
            bgPosX.push('88%');
            bgPosY.push('0%');
            bgFit.push('none');
          }

          return {
            bgImage: images,
            bgWidth: bgWidth,
            bgPosX: bgPosX,
            bgPosY: bgPosY,
            bgFit: bgFit,
            bgClip: 'node',
            padding: '22px',
            borderWidth: 4
          };
        },
        sourceAndSink: function sourceAndSink(node) {
          var _element$dimensions = element.dimensions(node),
              nw = _element$dimensions.w,
              nh = _element$dimensions.h;

          var centerX = nw / 2;
          var centerY = nh / 2;
          var radius = (nw - 2) / 2;

          var styleMap = new Map().set('stroke', '#6A6A6A').set('stroke-linecap', 'square').set('stroke-width', '1.5').set('fill', 'none');

          var shapeArgs = [centerX, centerY, radius];

          var sourceAndSinkSvg = '\n      ' + baseShapes.circle.apply(baseShapes, shapeArgs.concat([styleMap])) + '\n      ' + (hasClonemarker(node) ? auxiliaryItems.cloneMarker(nw, nh, baseShapes.circle, shapeArgs) : '') + '\n      ' + baseShapes.line(0, nh, nw, 0, styleMap) + '\n    ';

          return svgStr(sourceAndSinkSvg, nw, nh, 0, 0, nw, nh);
        },
        perturbingAgent: function perturbingAgent(node) {
          var auxItemWidth = 100;
          var auxItemHeight = 20;
          var borderWidth = 2;
          var fontSize = 10;
          var uInfos = getUnitInfos(node);

          var style = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1');

          var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight);

          var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

          var topLine = svgStr(uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

          var bottomLine = svgStr(hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

          return {
            bgImage: [bottomLine, topLine, cloneMarkerSvg, uInfoSvg],
            bgWidth: ['100%', '100%', '100%'],
            bgPosX: ['0%', '0%', '0%', '20px'],
            bgPosY: ['56px', '8px', '56px', '0%'],
            bgFit: ['cover', 'cover', 'none', 'none'],
            bgClip: 'node',
            padding: '8px',
            borderWidth: 2
          };
        }
      };

      module.exports = entityPoolNodes;

      /***/
    },
    /* 18 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var baseShapes = __webpack_require__(2);
      var auxiliaryItems = __webpack_require__(4);

      var svgStr = __webpack_require__(1).svgStr;
      var hasClonemarker = __webpack_require__(0).hasClonemarker;

      var element = __webpack_require__(3);

      var processNodes = {
        dissociation: function dissociation(node) {
          var _element$dimensions = element.dimensions(node),
              nw = _element$dimensions.w,
              nh = _element$dimensions.h;

          var centerX = nw / 2;
          var centerY = nh / 2;
          var outerRadius = (Math.min(nw, nh) - 2) / 2;
          var innerRadius = (Math.min(nw, nh) - 2) / 3;

          var styleMap = new Map().set('stroke', '#6A6A6A').set('stroke-width', '2').set('fill', 'none');

          var dissociationSvg = '\n      ' + baseShapes.circle(centerX, centerY, outerRadius, styleMap) + '\n      ' + baseShapes.circle(centerX, centerY, innerRadius, styleMap) + '\n    ';
          return svgStr(dissociationSvg, nw, nh);
        },
        phenotype: function phenotype(node) {
          var auxItemWidth = 100;
          var auxItemHeight = 20;

          var style = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1');

          var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight);

          var bottomLine = svgStr(hasClonemarker(node) ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight);

          return {
            bgImage: [bottomLine, cloneMarkerSvg],
            bgWidth: ['100%', '100%'],
            bgPosX: ['0%', '0%'],
            bgPosY: ['56px', '56px'],
            bgFit: ['cover', 'none'],
            bgClip: 'node',
            padding: '8px',
            borderWidth: 2
          };
        }
      };

      module.exports = processNodes;

      /***/
    }]
    /******/)
  );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2Y3ZmY1YzY3OGZjNTFjY2QzNDIiLCJ3ZWJwYWNrOi8vLy4vZGVtby5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6L3dlYnBhY2svYm9vdHN0cmFwIGNmYWQyMDA4YzNmMTk0ZWRkMzFmIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvdXRpbC9zYmduLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvdXRpbC9zdmcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vc3JjL3NiZ25TdHlsZS9nbHlwaC9iYXNlU2hhcGVzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvc2JnblN0eWxlL2dseXBoL2F1eGlsaWFyeUl0ZW1zLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9sb2Rhc2gubWVtb2l6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vc3JjL3NiZ25TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvc2JnblN0eWxlL2dseXBoL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvc2JnblN0eWxlL2dseXBoL2NvbnRhaW5lck5vZGVzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy90ZXh0LXdpZHRoL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy91dGlsL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9ub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9ub2RlX21vZHVsZXMvdXRpbC9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvZ2x5cGgvZW50aXR5UG9vbE5vZGVzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvZ2x5cGgvcHJvY2Vzc05vZGVzLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiXSwibmFtZXMiOlsic2JnblN0eWxlc2hlZXQiLCJyZXF1aXJlIiwiY3l0b3NjYXBlIiwid2luZG93IiwiY3kiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZWxlbWVudHMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwibGF5b3V0IiwibmFtZSIsInN0eWxlIiwic2JnbkRhdGFIYW5kbGVyIiwibm9kZSIsImVsZW1lbnQiLCJ2YXJpYWJsZSIsInN0YXRlVmFyIiwidmFsdWUiLCJtb2R1bGUiLCJzdHlsZU1hcDJTdHIiLCJzIiwiayIsInYiLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsInBhcnNlciIsInN2Z1RleHQiLCJzdmdTdHIiLCJkYXRhIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYmFzZVJlY3RhbmdsZSIsIngiLCJ5IiwiYmFzZVNoYXBlcyIsImJhc2VTaGFwZUZuIiwicmFkaXVzUmF0aW8iLCJNYXRoIiwic2JnbkRhdGEiLCJzYmduU3R5bGUiLCJ3IiwiaCIsInNoYXBlIiwic2JnbkFycm93TWFwIiwiZWxlbWVudFN0eWxlIiwic2JnbkNsYXNzIiwiY29udGVudCIsImRpbSIsInRleHRXaWR0aCIsImF1eGlsaWFyeUl0ZW1zIiwiY2xvbmVTdHlsZSIsImJvcmRlcldpZHRoIiwiZm9udFNpemUiLCJ0ZXh0IiwidUluZm8iLCJ1aW5mb1JlY3RTdHlsZSIsInRleHRTdHlsZSIsInVJbmZvV2lkdGgiLCJmYW1pbHkiLCJzaXplIiwidW5pdE9mSW5mb3JtYXRpb25TdmciLCJzdGF0ZVZhclN0eWxlIiwidHciLCJzdGF0ZXZhcmlhYmxlU3ZnIiwiY2xpcElkIiwiY2xvbmVNYXJrZXJTdHlsZSIsImNsb25lTWFya2VyU3ZnIiwic2hhcGVGbiIsInNiZ25TdHlsZVNoZWV0IiwiZGVmYXVsdE9wdGlvbnMiLCJzYmduc3ZnIiwiZWRnZSIsIm1lbW9pemUiLCJjb250YWluZXJOb2RlcyIsImVudGl0eVBvb2xOb2RlcyIsInByb2Nlc3NOb2RlcyIsImNhY2hlS2V5Rm4iLCJKU09OIiwic2Jnbk5vZGVTaGFwZU1hcCIsImRyYXciLCJhdXhJdGVtV2lkdGgiLCJhdXhJdGVtSGVpZ2h0IiwidUluZm9zIiwidUluZm9TdmciLCJsaW5lU3ZnIiwiYmdJbWFnZSIsImJnV2lkdGgiLCJiZ1Bvc1giLCJiZ1Bvc1kiLCJiZ0ZpdCIsImJnQ2xpcCIsInBhZGRpbmciLCJnZXRVbml0SW5mb3MiLCJnZXRTdGF0ZVZhcnMiLCJoYXNDbG9uZW1hcmtlciIsInNWYXJzIiwic1ZhclN2ZyIsInRvcExpbmUiLCJib3R0b21MaW5lIiwiaXRlbVciLCJpdGVtSCIsImltYWdlcyIsImJnSGVpZ2h0IiwidG9wTGluZVN2ZyIsImJvdHRvbUxpbmVTdmciLCJjbG9uZVN2ZyIsImNlbnRlclgiLCJudyIsImNlbnRlclkiLCJuaCIsInJhZGl1cyIsInN0eWxlTWFwIiwic2hhcGVBcmdzIiwic291cmNlQW5kU2lua1N2ZyIsIm91dGVyUmFkaXVzIiwiaW5uZXJSYWRpdXMiLCJkaXNzb2NpYXRpb25TdmciXSwibWFwcGluZ3MiOiI7UUFB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Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQUEsY0FDQSwrQkFEQTs7QUFHQTtBQUNBO0FBQ0csV0FGSCxNQUVHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUFBLGNBQ0EscUNBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBLDhCQURBO0FBRUEsMkNBRkE7QUFHQTtBQUhBO0FBS0E7O0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQSxrQ0FDQSxnREFEQSxHQUVBLFFBRkE7QUFHQTs7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQSxpR0FDQSxxQkFEQSxHQUVBLGNBRkE7QUFHQTs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0ssYUFGTCxDQUVLO0FBQ0w7QUFDQTtBQUNLLGFBRkwsQ0FFSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUEsZ0JBQ0EscURBREE7QUFBQSxnQkFFQSxzQkFGQTs7QUFJ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aWxlIjoiLi9idWlsZC9kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgN2Y3ZmY1YzY3OGZjNTFjY2QzNDIiLCJ2YXIgc2JnblN0eWxlc2hlZXQgPSByZXF1aXJlKCcuL2J1aWxkL2J1bmRsZS5qcycpO1xudmFyIGN5dG9zY2FwZSA9IHdpbmRvdy5jeXRvc2NhcGU7XG5cbnZhciBjeSA9IHdpbmRvdy5jeSA9IGN5dG9zY2FwZSh7XG4gIGNvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N5JyksXG4gIGVsZW1lbnRzOiBmZXRjaCgnLi9kZW1vLmpzb24nKS50aGVuKCByZXMgPT4gcmVzLmpzb24oKSApLFxuICBsYXlvdXQ6IHsgbmFtZTogJ3ByZXNldCcgfSxcbiAgc3R5bGU6IHNiZ25TdHlsZXNoZWV0KGN5dG9zY2FwZSlcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8uanMiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjeXRvc2NhcGVTYmduU3R5bGVzaGVldDIwMjBcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY3l0b3NjYXBlU2JnblN0eWxlc2hlZXQyMDIwXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjZmFkMjAwOGMzZjE5NGVkZDMxZlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi93ZWJwYWNrL2Jvb3RzdHJhcCBjZmFkMjAwOGMzZjE5NGVkZDMxZiIsImNvbnN0IHNiZ25EYXRhSGFuZGxlciA9IHtcbiAgaXNNdWx0aW1lciAobm9kZSkge1xuICAgIHJldHVybiBub2RlLmRhdGEoJ2NsYXNzJykuaW5jbHVkZXMoJ211bHRpbWVyJyk7XG4gIH0sXG4gIGhhc0Nsb25lbWFya2VyIChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuZGF0YSgnY2xvbmVtYXJrZXInKTtcbiAgfSxcbiAgZ2V0U3RhdGVWYXJzIChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuZGF0YSgnc3RhdGVWYXJpYWJsZXMnKTtcbiAgfSxcbiAgZ2V0VW5pdEluZm9zIChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuZGF0YSgndW5pdHNPZkluZm9ybWF0aW9uJyk7XG4gIH0sXG4gIGhhc0F1eEl0ZW1zIChub2RlKSB7XG4gICAgcmV0dXJuIChub2RlLmRhdGEoJ3N0YXRlVmFyaWFibGVzJykubGVuZ3RoICsgbm9kZS5kYXRhKCd1bml0c09mSW5mb3JtYXRpb24nKS5sZW5ndGggPiAwKTtcbiAgfSxcbiAgc2JnbkNsYXNzIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZGF0YSgnY2xhc3MnKTtcbiAgfSxcbiAgc2JnbkxhYmVsIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZGF0YSgnbGFiZWwnKTtcbiAgfSxcbiAgc3RhdGVWYXJMYWJlbCAoc3RhdGVWYXIpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHN0YXRlVmFyLnN0YXRlLnZhcmlhYmxlO1xuICAgIGNvbnN0IHZhbHVlID0gc3RhdGVWYXIuc3RhdGUudmFsdWU7XG4gICAgaWYgKHZhbHVlICYmIHZhcmlhYmxlKSB7XG4gICAgICByZXR1cm4gYCR7dmFsdWV9QCR7dmFyaWFibGV9YDtcbiAgICB9XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHZhcmlhYmxlKSB7XG4gICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzYmduRGF0YUhhbmRsZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL3V0aWwvc2Jnbi5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvdXRpbC9zYmduLmpzIiwiY29uc3Qgc3R5bGVNYXAyU3RyID0gKHN0eWxlTWFwKSA9PiB7XG4gIGlmKCAhc3R5bGVNYXAgKXtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgcyA9ICcnO1xuXG4gIGZvciggbGV0IFtrLCB2XSBvZiBzdHlsZU1hcCApe1xuICAgIHMgKz0gayArICc9JyArICdcIicgKyB2ICsgJ1wiJyArICcgJztcbiAgfVxuXG4gIHJldHVybiBzO1xufTtcblxuY29uc3Qgc3ZnID0gKHN2Z1N0ciwgd2lkdGggPSAxMDAsIGhlaWdodCA9IDEwMCkgPT4ge1xuICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gIGxldCBzdmdUZXh0ID1cbiAgYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PjwhRE9DVFlQRSBzdmc+PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JyR7d2lkdGh9JyBoZWlnaHQ9JyR7aGVpZ2h0fSc+JHtzdmdTdHJ9PC9zdmc+YDtcbiAgcmV0dXJuIHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3ZnVGV4dCwgJ3RleHQveG1sJykuZG9jdW1lbnRFbGVtZW50O1xufTtcblxuY29uc3Qgc3ZnU3RyID0gKHN2Z1RleHQsIHZpZXdQb3J0V2lkdGgsIHZpZXdQb3J0SGVpZ2h0LCB2aWV3Qm94WCwgdmlld0JveFksIHZpZXdCb3hXaWR0aCwgdmlld0JveEhlaWdodCkgPT4ge1xuICBsZXQgcyA9IHN2ZyhzdmdUZXh0LCB2aWV3UG9ydFdpZHRoLCB2aWV3UG9ydEhlaWdodCwgdmlld0JveFgsIHZpZXdCb3hZLCB2aWV3Qm94V2lkdGgsIHZpZXdCb3hIZWlnaHQpO1xuXG4gIC8vIGJhc2U2NFxuICAvLyBsZXQgZGF0YSA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgKyBidG9hKHMub3V0ZXJIVE1MKTtcblxuICAvLyB1cmkgY29tcG9uZW50IHN0cmluZ1xuICBsZXQgZGF0YSA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KHMub3V0ZXJIVE1MKTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzdmdTdHI6IHN2Z1N0cixcbiAgc3R5bGVNYXAyU3RyOiBzdHlsZU1hcDJTdHJcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL3V0aWwvc3ZnLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL3NiZ25TdHlsZS91dGlsL3N2Zy5qcyIsImNvbnN0IHN0eWxlTWFwMlN0ciA9IHJlcXVpcmUoJy4uL3V0aWwvc3ZnLmpzJykuc3R5bGVNYXAyU3RyO1xuXG5sZXQgYmFzZVJlY3RhbmdsZSA9IGZ1bmN0aW9uICh4LCB5LCB3LCBoLCByMSwgcjIsIHIzLCByNCwgc3R5bGVNYXApIHtcbiAgcmV0dXJuIGBcbiAgPHBhdGggJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfSBkPSdcbiAgICBNICR7eCArIHIxfSAke3l9XG4gICAgTCAke3ggKyB3IC0gcjJ9ICR7eX0gUSAke3ggKyB3fSAke3l9ICR7eCArIHd9ICR7eSArIHIyfVxuICAgIEwgJHt4ICsgdyB9ICR7eSArIGggLSByM30gUSAke3ggKyB3fSAke3kgKyBofSAke3ggKyB3IC0gcjN9ICR7eSArIGh9XG4gICAgTCAke3ggKyByNH0gJHt5ICsgaH0gUSAke3h9ICR7eSArIGh9ICR7eH0gJHt5ICsgaCAtIHI0fVxuICAgIEwgJHt4fSAke3kgKyByMX0gUSAke3h9ICR7eX0gJHt4ICsgcjF9ICR7eX1cbiAgICBaJ1xuICAvPlxuICBgO1xufTtcblxuY29uc3QgYmFzZVNoYXBlcyA9IHtcbiAgYmFycmVsICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBgXG5cbiAgICA8ZyAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9PlxuICAgICAgPHBhdGggZD1cIk0gJHswKndpZHRoICsgeH0gJHsuMDMqaGVpZ2h0ICsgeX0gTCAkezAqd2lkdGggKyB4fSAkey45NypoZWlnaHQgKyB5fSBRICR7MC4wNip3aWR0aCArIHh9ICR7aGVpZ2h0ICsgeX0gJHswLjI1KndpZHRoICsgeH0gJHtoZWlnaHQgKyB5fVwiLz5cblxuICAgICAgPHBhdGggZD1cIk0gJHswLjI1KndpZHRoICsgeH0gJHtoZWlnaHQgKyB5fSBMICR7MC43NSp3aWR0aCArIHh9ICR7aGVpZ2h0ICsgeX0gUSAkezAuOTUqd2lkdGggKyB4fSAke2hlaWdodCArIHl9ICR7d2lkdGggKyB4fSAkezAuOTUqaGVpZ2h0ICsgeX1cIi8+XG5cbiAgICAgIDxwYXRoIGQ9XCJNICR7d2lkdGggKyB4fSAkey45NSpoZWlnaHQgKyB5fSBMICR7d2lkdGggKyB4fSAkezAuMDUqaGVpZ2h0ICsgeX0gUSAke3dpZHRoICsgeH0gJHswKmhlaWdodCArIHl9ICR7MC43NSp3aWR0aCArIHh9ICR7MCpoZWlnaHQgKyB5fVwiLz5cblxuICAgICAgPHBhdGggZD1cIk0gJHswLjc1KndpZHRoICsgeH0gJHswKmhlaWdodCArIHl9IEwgJHswLjI1KndpZHRoICsgeH0gJHswKmhlaWdodCArIHl9IFEgJHswLjA2KndpZHRoICsgeH0gJHswKmhlaWdodCArIHl9ICR7MCp3aWR0aCArIHh9ICR7MC4wMypoZWlnaHQgKyB5fVwiLz5cbiAgICA8L2c+XG5cbiAgICBgO1xuICB9LFxuXG4gIGNpcmNsZSAoY3gsIGN5LCByLCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBgPGNpcmNsZSBjeD0nJHtjeH0nIGN5PScke2N5fScgcj0nJHtyfScgJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfSAvPmA7XG4gIH0sXG5cbiAgY2xpcFBhdGggKGlkLCBiYXNlU2hhcGVGbiwgYmFzZVNoYXBlRm5BcmdzLCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBgXG4gICAgICA8ZGVmcz5cbiAgICAgICAgPGNsaXBQYXRoIGlkPScke2lkfScgJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfT5cbiAgICAgICAgJHtiYXNlU2hhcGVGbiguLi5iYXNlU2hhcGVGbkFyZ3MpfVxuICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgPC9kZWZzPlxuICAgIGA7XG4gIH0sXG5cbiAgY29uY2F2ZUhleGFnb24gKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGBcbiAgICA8cG9seWdvbiAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9XG4gICAgICBwb2ludHM9JyR7eCArIDB9LCAke3kgKyAwfSwgJHt4ICsgd2lkdGh9LCAke3kgKyAwfSwgJHt4ICsgMC44NSp3aWR0aH0sICR7eSArIDAuNSpoZWlnaHR9LCAke3ggKyB3aWR0aH0sICR7eSArIGhlaWdodH0sICR7eCArIDB9LCAke3kgKyBoZWlnaHR9LCAkeyB4ICsgMC4xNSp3aWR0aH0sICR7eSArIDAuNSpoZWlnaHR9J1xuICAgIC8+YDtcbiAgfSxcblxuICBjdXRSZWN0YW5nbGUgKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvcm5lckxlbmd0aCwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYFxuICAgIDxwb2x5Z29uICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX1cbiAgICAgIHBvaW50cz0nXG4gICAgICAke3ggKyAwKndpZHRofSAke3kgKyBjb3JuZXJMZW5ndGh9ICR7eCArIGNvcm5lckxlbmd0aH0gJHt5ICsgMCpoZWlnaHR9ICR7eCArIHdpZHRoIC0gY29ybmVyTGVuZ3RofSAke3kgKyAwKmhlaWdodH0gJHt4ICsgd2lkdGh9ICR7eSArIGNvcm5lckxlbmd0aH1cbiAgICAgICR7eCArIHdpZHRofSAke3kgKyBoZWlnaHQgLSBjb3JuZXJMZW5ndGh9ICR7eCArIHdpZHRoIC0gY29ybmVyTGVuZ3RofSAke3kgKyBoZWlnaHR9ICR7eCArIGNvcm5lckxlbmd0aH0gJHt5ICsgaGVpZ2h0fSAke3ggKyAwKndpZHRofSAke3kgKyBoZWlnaHQgLSBjb3JuZXJMZW5ndGh9XG4gICAgICAnXG4gICAgLz5cbiAgICBgO1xuICB9LFxuXG4gIGVsbGlwc2UgKGN4LCBjeSwgcngsIHJ5LCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBgXG4gICAgICA8ZWxsaXBzZSBjeD0nJHtjeH0nIGN5PScke2N5fScgcng9JyR7cnh9JyByeT0nJHtyeX0nICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX0gLz5cbiAgICBgO1xuICB9LFxuXG4gIGhleGFnb24gKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGBcbiAgICA8cG9seWdvbiAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9XG4gICAgICBwb2ludHM9JyR7eCArIDB9LCAke3kgKyAwLjUqaGVpZ2h0fSwgJHt4ICsgMC4yNSp3aWR0aH0sICR7eSArIDAqaGVpZ2h0fSwgJHt4ICsgMC43NSp3aWR0aH0sICR7eSArIDAqaGVpZ2h0fSwgJHt4ICsgd2lkdGh9LCAke3kgKyAwLjUqaGVpZ2h0fSwgJHt4ICsgMC43NSp3aWR0aH0sICR7eSArIGhlaWdodH0sICR7eCArIDAuMjUqd2lkdGh9LCAke3kgKyBoZWlnaHR9J1xuICAgIC8+YDtcbiAgfSxcblxuICBsaW5lICh4MSwgeTEsIHgyLCB5Miwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYDxsaW5lIHgxPScke3gxfScgeTE9JyR7eTF9JyB4Mj0nJHt4Mn0nIHkyPScke3kyfScgJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfSAvPmA7XG4gIH0sXG5cbiAgcmVjdGFuZ2xlICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBiYXNlUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIDAsIDAsIDAsIDAsIHN0eWxlTWFwKTtcbiAgfSxcblxuICByb3VuZEJvdHRvbVJlY3RhbmdsZSAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYmFzZVJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCAwLCAwLCAuMypoZWlnaHQsIC4zKmhlaWdodCwgc3R5bGVNYXApO1xuICB9LFxuXG4gIHJvdW5kUmVjdGFuZ2xlICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBiYXNlUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIC4wNCp3aWR0aCwgLjA0KndpZHRoLCAuMDQqd2lkdGgsIC4wNCp3aWR0aCwgc3R5bGVNYXApO1xuICB9LFxuXG4gIHN0YWRpdW0gKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XG4gICAgY29uc3QgcmFkaXVzUmF0aW8gPSAuMjQgKiBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KTtcbiAgICByZXR1cm4gYmFzZVJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXNSYXRpbywgcmFkaXVzUmF0aW8sIHJhZGl1c1JhdGlvLCByYWRpdXNSYXRpbywgc3R5bGVNYXApO1xuICB9LFxuXG4gIHNxdWFyZSAoeCwgeSwgbGVuZ3RoLCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBiYXNlUmVjdGFuZ2xlKHgsIHksIGxlbmd0aCwgbGVuZ3RoLCAwLCAwLCAwLCAwLCBzdHlsZU1hcCk7XG4gIH0sXG5cbiAgdGV4dCAodCwgeCwgeSwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYDx0ZXh0IHg9JyR7eH0nIHk9JyR7eX0nICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX0+JHt0fTwvdGV4dD5gO1xuICB9XG5cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU2hhcGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NiZ25TdHlsZS9nbHlwaC9iYXNlU2hhcGVzLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL3NiZ25TdHlsZS9nbHlwaC9iYXNlU2hhcGVzLmpzIiwiY29uc3Qgc2JnbkRhdGEgPSByZXF1aXJlKCcuL3V0aWwvc2Jnbi5qcycpO1xuXG5jb25zdCBzYmduU3R5bGUgPSBuZXcgTWFwKClcbi5zZXQoJ3Vuc3BlY2lmaWVkIGVudGl0eScsIHt3OiAzMiwgaDogMzIsIHNoYXBlOiAnZWxsaXBzZSd9KVxuLnNldCgnc2ltcGxlIGNoZW1pY2FsJywge3c6IDQ4LCBoOiA0OCwgc2hhcGU6ICdlbGxpcHNlJ30pXG4uc2V0KCdzaW1wbGUgY2hlbWljYWwgbXVsdGltZXInLCB7dzogNDgsIGg6IDQ4LCBzaGFwZTogJ2VsbGlwc2UnfSlcbi5zZXQoJ21hY3JvbW9sZWN1bGUnLCB7dzogOTYsIGg6IDQ4LCBzaGFwZTogJ3JvdW5kcmVjdGFuZ2xlJ30pXG4uc2V0KCdtYWNyb21vbGVjdWxlIG11bHRpbWVyJywge3c6IDk2LCBoOiA0OCwgc2hhcGU6ICdyb3VuZHJlY3RhbmdsZSd9KVxuLnNldCgnbnVjbGVpYyBhY2lkIGZlYXR1cmUnLCB7dzogODgsIGg6IDU2LCBzaGFwZTogJ2JvdHRvbXJvdW5kcmVjdGFuZ2xlJ30pXG4uc2V0KCdudWNsZWljIGFjaWQgZmVhdHVyZSBtdWx0aW1lcicsIHt3OiA4OCwgaDogNTIsIHNoYXBlOiAnYm90dG9tcm91bmRyZWN0YW5nbGUnfSlcbi5zZXQoJ2NvbXBsZXgnLCB7dzogMTAsIGg6IDEwLCBzaGFwZTogJ2N1dHJlY3RhbmdsZSd9KVxuLnNldCgnY29tcGxleCBtdWx0aW1lcicsIHt3OiAxMCwgaDogMTAsIHNoYXBlOiAnY3V0cmVjdGFuZ2xlJ30pXG4uc2V0KCdzb3VyY2UgYW5kIHNpbmsnLCB7dzogNjAsIGg6IDYwLCBzaGFwZTogJ3BvbHlnb24nfSlcbi5zZXQoJ3BlcnR1cmJpbmcgYWdlbnQnLCB7dzogMTQwLCBoOiA2MCwgc2hhcGU6ICdjb25jYXZlaGV4YWdvbid9KVxuXG4uc2V0KCdwaGVub3R5cGUnLCB7dzogMTQwLCBoOiA2MCwgc2hhcGU6ICdoZXhhZ29uJ30pXG4uc2V0KCdwcm9jZXNzJywge3c6MjUsIGg6IDI1LCBzaGFwZTogJ3NxdWFyZSd9KVxuLnNldCgndW5jZXJ0YWluIHByb2Nlc3MnLCB7dzoyNSwgaDogMjUsIHNoYXBlOiAnc3F1YXJlJ30pXG4uc2V0KCdvbWl0dGVkIHByb2Nlc3MnLCB7dzoyNSwgaDogMjUsIHNoYXBlOiAnc3F1YXJlJ30pXG4uc2V0KCdhc3NvY2lhdGlvbicsIHt3OjI1LCBoOiAyNSwgc2hhcGU6ICdlbGxpcHNlJ30pXG4uc2V0KCdkaXNzb2NpYXRpb24nLCB7dzoyNSwgaDogMjUsIHNoYXBlOiAnZWxsaXBzZSd9KVxuXG4uc2V0KCdjb21wYXJ0bWVudCcsIHt3OiA1MCwgaDogNTAsIHNoYXBlOiAnYmFycmVsJ30pXG5cbi5zZXQoJ3RhZycsIHt3OiAxMDAsIGg6IDY1LCBzaGFwZTogJ3RhZyd9KVxuLnNldCgnYW5kJywge3c6IDQwLCBoOiA0MCwgc2hhcGU6ICdlbGxpcHNlJ30pXG4uc2V0KCdvcicsIHt3OiA0MCwgaDogNDAsIHNoYXBlOiAnZWxsaXBzZSd9KVxuLnNldCgnbm90Jywge3c6IDQwLCBoOiA0MCwgc2hhcGU6ICdlbGxpcHNlJ30pO1xuXG5jb25zdCBzYmduQXJyb3dNYXAgPSBuZXcgTWFwKClcbi5zZXQoJ25lY2Vzc2FyeSBzdGltdWxhdGlvbicsICd0cmlhbmdsZS1jcm9zcycpXG4uc2V0KCdpbmhpYml0aW9uJywgJ3RlZScpXG4uc2V0KCdjYXRhbHlzaXMnLCAnY2lyY2xlJylcbi5zZXQoJ3N0aW11bGF0aW9uJywgJ3RyaWFuZ2xlJylcbi5zZXQoJ3Byb2R1Y3Rpb24nLCAndHJpYW5nbGUnKVxuLnNldCgnbW9kdWxhdGlvbicsICdkaWFtb25kJyk7XG5cbmNvbnN0IGVsZW1lbnRTdHlsZSA9IHtcbiAgc2JnblNoYXBlIChub2RlKSB7XG4gICAgY29uc3Qgc2JnbkNsYXNzID0gc2JnbkRhdGEuc2JnbkNsYXNzKG5vZGUpLnJlcGxhY2UoJyBtdWx0aW1lcicsICcnKTtcbiAgICBjb25zdCBzdHlsZSA9IHNiZ25TdHlsZS5nZXQoc2JnbkNsYXNzKTtcbiAgICByZXR1cm4gc3R5bGUgPyBzdHlsZS5zaGFwZSA6ICdlbGxpcHNlJztcbiAgfSxcblxuICBzYmduQXJyb3dTaGFwZSAoZWRnZSkge1xuICAgIGNvbnN0IHNiZ25DbGFzcyA9IHNiZ25EYXRhLnNiZ25DbGFzcyhlZGdlKTtcbiAgICBjb25zdCBzaGFwZSA9IHNiZ25BcnJvd01hcC5nZXQoc2JnbkNsYXNzKTtcbiAgICByZXR1cm4gc2hhcGUgPyBzaGFwZSA6ICdub25lJztcbiAgfSxcblxuICBzYmduQ29udGVudCAobm9kZSkge1xuICAgIGNvbnN0IHNiZ25DbGFzcyA9IHNiZ25EYXRhLnNiZ25DbGFzcyhub2RlKS5yZXBsYWNlKCcgbXVsdGltZXInLCAnJyk7XG4gICAgbGV0IGNvbnRlbnQgPSBzYmduRGF0YS5zYmduTGFiZWwobm9kZSk7XG5cbiAgICBpZiAoc2JnbkNsYXNzID09ICdhbmQnKSB7XG4gICAgICBjb250ZW50ID0gJ0FORCc7XG4gICAgfVxuICAgIGlmIChzYmduQ2xhc3MgPT0gJ29yJykge1xuICAgICAgY29udGVudCA9ICdPUic7XG4gICAgfVxuICAgIGlmIChzYmduQ2xhc3MgPT0gJ25vdCcpIHtcbiAgICAgIGNvbnRlbnQgPSAnTk9UJztcbiAgICB9XG4gICAgaWYgKHNiZ25DbGFzcyA9PSAnb21pdHRlZCBwcm9jZXNzJykge1xuICAgICAgY29udGVudCA9ICdcXFxcXFxcXCc7XG4gICAgfVxuICAgIGlmIChzYmduQ2xhc3MgPT0gJ3VuY2VydGFpbiBwcm9jZXNzJykge1xuICAgICAgY29udGVudCA9ICc/JztcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfSxcblxuICBkaW1lbnNpb25zIChub2RlKSB7XG4gICAgY29uc3Qgc2JnbkNsYXNzID0gc2JnbkRhdGEuc2JnbkNsYXNzKG5vZGUpO1xuICAgIGNvbnN0IGRpbSA9IHNiZ25TdHlsZS5nZXQoc2JnbkNsYXNzKTtcbiAgICBpZiAoZGltID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7c2JnbkNsYXNzfSBkb2VzIG5vdCBoYXZlIGEgZGVmYXVsdCB3aWR0aCAvIGhlaWdodGApO1xuICAgIH1cbiAgICByZXR1cm4gZGltO1xuICB9LFxuXG4gIHdpZHRoIChub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuZGltZW5zaW9ucyhub2RlKS53O1xuICB9LFxuXG4gIGhlaWdodCAobm9kZSkge1xuICAgIHJldHVybiB0aGlzLmRpbWVuc2lvbnMobm9kZSkuaDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50U3R5bGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL2VsZW1lbnQuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvc2JnblN0eWxlL2VsZW1lbnQuanMiLCJjb25zdCB0ZXh0V2lkdGggPSByZXF1aXJlKCd0ZXh0LXdpZHRoJyk7XG5cbmNvbnN0IGJhc2VTaGFwZXMgPSByZXF1aXJlKCcuL2Jhc2VTaGFwZXMuanMnKTtcbmNvbnN0IHNiZ25EYXRhID0gcmVxdWlyZSgnLi4vdXRpbC9zYmduJyk7XG5cbmNvbnN0IGF1eGlsaWFyeUl0ZW1zID0ge1xuXG4gIG11bHRpSW1nQ2xvbmVNYXJrZXIgKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcblxuICAgIGNvbnN0IGNsb25lU3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEnKVxuICAgIC5zZXQoJ2ZpbGwnLCAnI0QyRDJEMicpO1xuXG4gICAgcmV0dXJuIGJhc2VTaGFwZXMucmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNsb25lU3R5bGUpO1xuICB9LFxuXG4gIG11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQsIHVJbmZvLCBib3JkZXJXaWR0aD0zLCBmb250U2l6ZT0xNCkge1xuICAgIGNvbnN0IHRleHQgPSB1SW5mby5sYWJlbC50ZXh0O1xuICAgIGNvbnN0IHVpbmZvUmVjdFN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM1NTU1NTUnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsIGAke2JvcmRlcldpZHRofWApXG4gICAgLnNldCgnZmlsbCcsICd3aGl0ZScpXG4gICAgLnNldCgnZmlsbC1vcGFjaXR5JywgMSk7XG5cblxuICAgIGNvbnN0IHRleHRTdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKVxuICAgIC5zZXQoJ2ZvbnQtc2l6ZScsIGAke2ZvbnRTaXplfXB4YClcbiAgICAuc2V0KCdmb250LWZhbWlseScsICdIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmJylcbiAgICAuc2V0KCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKTtcblxuICAgIGNvbnN0IHVJbmZvV2lkdGggPSB0ZXh0V2lkdGgodGV4dCwgeyBmYW1pbHk6IHRleHRTdHlsZS5nZXQoJ2ZvbnQtZmFtaWx5JyksIHNpemU6IGZvbnRTaXplfSkgKyA1O1xuXG4gICAgY29uc3QgdW5pdE9mSW5mb3JtYXRpb25TdmcgPVxuICAgIGBcbiAgICAgICR7YmFzZVNoYXBlcy5yb3VuZFJlY3RhbmdsZSh4LCB5LCB1SW5mb1dpZHRoLCBoZWlnaHQsIHVpbmZvUmVjdFN0eWxlKX1cbiAgICAgICR7YmFzZVNoYXBlcy50ZXh0KHRleHQsIHggKyAodUluZm9XaWR0aCAvIDIpLCB5ICsgKCBoZWlnaHQgLyAyKSwgIHRleHRTdHlsZSl9XG4gICAgYDtcblxuICAgIHJldHVybiB1bml0T2ZJbmZvcm1hdGlvblN2ZztcbiAgfSxcblxuICBtdWx0aUltZ1N0YXRlVmFyICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdGF0ZVZhciwgYm9yZGVyV2lkdGg9MywgZm9udFNpemU9MTQpIHtcblxuICAgIGNvbnN0IHN0YXRlVmFyU3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzU1NTU1NScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgYCR7Ym9yZGVyV2lkdGh9YClcbiAgICAuc2V0KCdmaWxsJywgJ3doaXRlJylcbiAgICAuc2V0KCdmaWxsLW9wYWNpdHknLCAxKTtcblxuICAgIGNvbnN0IHRleHRTdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKVxuICAgIC5zZXQoJ2ZvbnQtc2l6ZScsIGAke2ZvbnRTaXplfXB4YClcbiAgICAuc2V0KCdmb250LWZhbWlseScsICdIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmJylcbiAgICAuc2V0KCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKTtcblxuICAgIGNvbnN0IHR3ID0gdGV4dFdpZHRoKHNiZ25EYXRhLnN0YXRlVmFyTGFiZWwoc3RhdGVWYXIpLCB7IGZhbWlseTogdGV4dFN0eWxlLmdldCgnZm9udC1mYW1pbHknKSwgc2l6ZTogZm9udFNpemV9KSArIDEwO1xuICAgIGNvbnN0IHcgPSBNYXRoLm1heCh0dywgMzApO1xuICAgIGNvbnN0IHN0YXRldmFyaWFibGVTdmcgPVxuICAgIGBcbiAgICAgICR7YmFzZVNoYXBlcy5zdGFkaXVtKHgsIHksIHcsIGhlaWdodCwgc3RhdGVWYXJTdHlsZSl9XG4gICAgICAke2Jhc2VTaGFwZXMudGV4dChzYmduRGF0YS5zdGF0ZVZhckxhYmVsKHN0YXRlVmFyKSwgeCArICggdyAvIDIgKSwgeSArIGhlaWdodCAvIDIsIHRleHRTdHlsZSl9XG4gICAgYDtcblxuICAgIHJldHVybiBzdGF0ZXZhcmlhYmxlU3ZnO1xuICB9LFxuXG4gIGNsb25lTWFya2VyIChub2RlV2lkdGgsIG5vZGVIZWlnaHQsIHNoYXBlRm4sIHNoYXBlRm5BcmdzKSB7XG4gICAgY29uc3QgY2xpcElkID0gJ2Nsb25lbWFya2VyJztcblxuICAgIGNvbnN0IGNsb25lTWFya2VyU3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEuNScpXG4gICAgLnNldCgnY2xpcC1wYXRoJywgYHVybCgjJHtjbGlwSWR9KWApXG4gICAgLnNldCgnZmlsbCcsICcjRDJEMkQyJyk7XG5cbiAgICBjb25zdCBjbG9uZU1hcmtlclN2ZyA9XG4gICAgYFxuICAgICAgJHtiYXNlU2hhcGVzLmNsaXBQYXRoKGNsaXBJZCwgYmFzZVNoYXBlcy5yZWN0YW5nbGUsICBbMCwgMyAqIG5vZGVIZWlnaHQgLyA0LCBub2RlV2lkdGgsIG5vZGVIZWlnaHQsIG5ldyBNYXAoKV0pfVxuICAgICAgJHtzaGFwZUZuKC4uLnNoYXBlRm5BcmdzLCBjbG9uZU1hcmtlclN0eWxlKX1cbiAgICBgO1xuXG4gICAgcmV0dXJuIGNsb25lTWFya2VyU3ZnO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF1eGlsaWFyeUl0ZW1zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NiZ25TdHlsZS9nbHlwaC9hdXhpbGlhcnlJdGVtcy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvZ2x5cGgvYXV4aWxpYXJ5SXRlbXMuanMiLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QgaW4gSUUgPCA5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNIb3N0T2JqZWN0KHZhbHVlKSB7XG4gIC8vIE1hbnkgaG9zdCBvYmplY3RzIGFyZSBgT2JqZWN0YCBvYmplY3RzIHRoYXQgY2FuIGNvZXJjZSB0byBzdHJpbmdzXG4gIC8vIGRlc3BpdGUgaGF2aW5nIGltcHJvcGVybHkgZGVmaW5lZCBgdG9TdHJpbmdgIG1ldGhvZHMuXG4gIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgaWYgKHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlLnRvU3RyaW5nICE9ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gISEodmFsdWUgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSxcbiAgICBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyksXG4gICAgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHJldHVybiB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gZGF0YVtrZXldICE9PSB1bmRlZmluZWQgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICBnZXRNYXBEYXRhKHRoaXMsIGtleSkuc2V0KGtleSwgdmFsdWUpO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IChpc0Z1bmN0aW9uKHZhbHVlKSB8fCBpc0hvc3RPYmplY3QodmFsdWUpKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcbiAqIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBhcmd1bWVudFxuICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xuICpcbiAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpO1xuICogLy8gPT4gWzMsIDRdXG4gKlxuICogb2JqZWN0LmEgPSAyO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICpcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAmJiB0eXBlb2YgcmVzb2x2ZXIgIT0gJ2Z1bmN0aW9uJykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgdmFyIG1lbW9pemVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGtleSA9IHJlc29sdmVyID8gcmVzb2x2ZXIuYXBwbHkodGhpcywgYXJncykgOiBhcmdzWzBdLFxuICAgICAgICBjYWNoZSA9IG1lbW9pemVkLmNhY2hlO1xuXG4gICAgaWYgKGNhY2hlLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIG1lbW9pemVkLmNhY2hlID0gY2FjaGUuc2V0KGtleSwgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBtZW1vaXplZC5jYWNoZSA9IG5ldyAobWVtb2l6ZS5DYWNoZSB8fCBNYXBDYWNoZSk7XG4gIHJldHVybiBtZW1vaXplZDtcbn1cblxuLy8gQXNzaWduIGNhY2hlIHRvIGBfLm1lbW9pemVgLlxubWVtb2l6ZS5DYWNoZSA9IE1hcENhY2hlO1xuXG4vKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA4LTkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGlzT2JqZWN0KHZhbHVlKSA/IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLm1lbW9pemUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL2xvZGFzaC5tZW1vaXplL2luZGV4LmpzIiwibGV0IHNiZ25TdHlsZVNoZWV0ID0gcmVxdWlyZSgnLi9zYmduU3R5bGUvJyk7XG5cbmxldCBkZWZhdWx0T3B0aW9ucyA9IHtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY3l0b3NjYXBlKXtcbiAgcmV0dXJuIHNiZ25TdHlsZVNoZWV0KGN5dG9zY2FwZSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2luZGV4LmpzIiwiY29uc3QgZWxlbWVudFN0eWxlID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5jb25zdCBzYmduc3ZnID0gcmVxdWlyZSgnLi9nbHlwaCcpO1xuXG5jb25zdCBzYmduU3R5bGVTaGVldCA9IGZ1bmN0aW9uIChjeXRvc2NhcGUpIHtcblxuICByZXR1cm4gY3l0b3NjYXBlLnN0eWxlc2hlZXQoKVxuICAgICAgICAvLyBnZW5lcmFsIG5vZGUgc3R5bGVcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ3NoYXBlJzogKG5vZGUpID0+IGVsZW1lbnRTdHlsZS5zYmduU2hhcGUobm9kZSksXG4gICAgICAgICAgJ2NvbnRlbnQnOiAobm9kZSkgPT4gZWxlbWVudFN0eWxlLnNiZ25Db250ZW50KG5vZGUpLFxuICAgICAgICAgICdmb250LXNpemUnOiAyMCxcbiAgICAgICAgICAnd2lkdGgnOiAobm9kZSkgPT4gZWxlbWVudFN0eWxlLndpZHRoKG5vZGUpLFxuICAgICAgICAgICdoZWlnaHQnOiAobm9kZSkgPT4gZWxlbWVudFN0eWxlLmhlaWdodChub2RlKSxcbiAgICAgICAgICAndGV4dC12YWxpZ24nOiAnY2VudGVyJyxcbiAgICAgICAgICAndGV4dC1oYWxpZ24nOiAnY2VudGVyJyxcbiAgICAgICAgICAnYm9yZGVyLXdpZHRoJzogMS41LFxuICAgICAgICAgICdib3JkZXItY29sb3InOiAnIzU1NScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnI2Y2ZjZmNicsXG4gICAgICAgICAgJ3RleHQtb3BhY2l0eSc6IDEsXG4gICAgICAgICAgJ29wYWNpdHknOiAxLFxuICAgICAgICAgICd0ZXh0LW91dGxpbmUtY29sb3InOiAnd2hpdGUnLFxuICAgICAgICAgICd0ZXh0LW91dGxpbmUtb3BhY2l0eSc6IDEsXG4gICAgICAgICAgJ3RleHQtb3V0bGluZS13aWR0aCc6IDAuNzVcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlOnNlbGVjdGVkJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgICAgICAgJ3RhcmdldC1hcnJvdy1jb2xvcic6ICcjMDAwJyxcbiAgICAgICAgICAndGV4dC1vdXRsaW5lLWNvbG9yJzogJyMwMDAnXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZTphY3RpdmUnKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnb3ZlcmxheS1jb2xvcic6ICcjZDY3NjE0JyxcbiAgICAgICAgICAnb3ZlcmxheS1wYWRkaW5nJzogJzE0J1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGRyYXcgc2JnbiBzcGVjaWZpYyBzdHlsaW5nIChhdXhpbGlhcnkgaXRlbXMsIGNsb25lbWFya2VyLCBldGMuKVxuICAgICAgICAuc2VsZWN0b3IoYFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJ1bnNwZWNpZmllZCBlbnRpdHlcIl0sXG4gICAgICAgICAgbm9kZVtjbGFzcz1cInNpbXBsZSBjaGVtaWNhbFwiXSwgbm9kZVtjbGFzcz1cInNpbXBsZSBjaGVtaWNhbCBtdWx0aW1lclwiXSxcbiAgICAgICAgICBub2RlW2NsYXNzPVwibWFjcm9tb2xlY3VsZVwiXSwgbm9kZVtjbGFzcz1cIm1hY3JvbW9sZWN1bGUgbXVsdGltZXJcIl0sXG4gICAgICAgICAgbm9kZVtjbGFzcz1cIm51Y2xlaWMgYWNpZCBmZWF0dXJlXCJdLCBub2RlW2NsYXNzPVwibnVjbGVpYyBhY2lkIGZlYXR1cmUgbXVsdGltZXJcIl0sXG4gICAgICAgICAgbm9kZVtjbGFzcz1cInBlcnR1cmJpbmcgYWdlbnRcIl0sXG4gICAgICAgICAgbm9kZVtjbGFzcz1cInBoZW5vdHlwZVwiXSxcbiAgICAgICAgICBub2RlW2NsYXNzPVwiY29tcGxleFwiXSwgbm9kZVtjbGFzcz1cImNvbXBsZXggbXVsdGltZXJcIl0sIG5vZGVbY2xhc3M9XCJjb21wYXJ0bWVudFwiXVxuICAgICAgICBgKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSkuYmdJbWFnZSxcbiAgICAgICAgICAnYmFja2dyb3VuZC13aWR0aCc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSkuYmdXaWR0aCxcbiAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbi14JzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKS5iZ1Bvc1gsXG4gICAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24teSc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSkuYmdQb3NZLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWZpdCc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSkuYmdGaXQsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY2xpcCc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSkuYmdDbGlwLFxuICAgICAgICAgICdwYWRkaW5nJzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKS5wYWRkaW5nLFxuICAgICAgICAgICdib3JkZXItd2lkdGgnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJvcmRlcldpZHRoXG4gICAgICAgIH0pXG5cbiAgICAgICAgLnNlbGVjdG9yKGBcbiAgICAgICAgICBub2RlW2NsYXNzPVwic2ltcGxlIGNoZW1pY2FsIG11bHRpbWVyXCJdLFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJtYWNyb21vbGVjdWxlIG11bHRpbWVyXCJdLFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJudWNsZWljIGFjaWQgZmVhdHVyZSBtdWx0aW1lclwiXSxcbiAgICAgICAgICBub2RlW2NsYXNzPVwiY29tcGxleCBtdWx0aW1lclwiXVxuICAgICAgICBgKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnZ2hvc3QnOiAneWVzJyxcbiAgICAgICAgICAnZ2hvc3Qtb3BhY2l0eSc6IDFcbiAgICAgICAgfSlcblxuICAgICAgICAuc2VsZWN0b3IoYFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJtYWNyb21vbGVjdWxlIG11bHRpbWVyXCJdLFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJudWNsZWljIGFjaWQgZmVhdHVyZSBtdWx0aW1lclwiXVxuICAgICAgICBgKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnZ2hvc3Qtb2Zmc2V0LXgnOiAxMixcbiAgICAgICAgICAnZ2hvc3Qtb2Zmc2V0LXknOiAxMlxuICAgICAgICB9KVxuXG4gICAgICAgIC5zZWxlY3RvcihgXG4gICAgICAgICAgbm9kZVtjbGFzcz1cInNpbXBsZSBjaGVtaWNhbCBtdWx0aW1lclwiXVxuICAgICAgICBgKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnZ2hvc3Qtb2Zmc2V0LXgnOiA1LFxuICAgICAgICAgICdnaG9zdC1vZmZzZXQteSc6IDVcbiAgICAgICAgfSlcblxuICAgICAgICAuc2VsZWN0b3IoYFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJjb21wbGV4IG11bHRpbWVyXCJdXG4gICAgICAgIGApXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdnaG9zdC1vZmZzZXQteCc6IDE2LFxuICAgICAgICAgICdnaG9zdC1vZmZzZXQteSc6IDE2XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gY29tcG91bmQgbm9kZSBzcGVjaWZpYyBzdHlsZVxuICAgICAgICAuc2VsZWN0b3IoJ25vZGVbY2xhc3M9XCJjb21wbGV4XCJdLCBub2RlW2NsYXNzPVwiY29tcGxleCBtdWx0aW1lclwiXSwgbm9kZVtjbGFzcz1cImNvbXBhcnRtZW50XCJdJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2NvbXBvdW5kLXNpemluZy13cnQtbGFiZWxzJzogJ2V4Y2x1ZGUnLFxuICAgICAgICAgICd0ZXh0LXZhbGlnbic6ICdib3R0b20nLFxuICAgICAgICAgICd0ZXh0LWhhbGlnbic6ICdjZW50ZXInLFxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHByb2Nlc3Mgbm9kZSBzcGVjaWZpYyBzdHlsZVxuICAgICAgICAuc2VsZWN0b3IoJ25vZGVbY2xhc3M9XCJhc3NvY2lhdGlvblwiXSwgbm9kZVtjbGFzcz1cImRpc3NvY2lhdGlvblwiXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdiYWNrZ3JvdW5kLW9wYWNpdHknOiAxXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZVtjbGFzcz1cImFzc29jaWF0aW9uXCJdJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnIzZCNkI2QidcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzb3VyY2UgYW5kIHNpbmsgYW5kIGRpc3NvY2lhdGlvbiBhcmUgZHJhd24gZGlmZmVyZW50bHkgYmVjYXVzZVxuICAgICAgICAvLyBvZiB0aGVpciB1bmlxdWUgc2hhcGVcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlW2NsYXNzPVwic291cmNlIGFuZCBzaW5rXCJdJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWZpdCc6ICdub25lJyxcbiAgICAgICAgICAnYmFja2dyb3VuZC13aWR0aCc6ICcxMDAlJyxcbiAgICAgICAgICAnYmFja2dyb3VuZC1oZWlnaHQnOiAnMTAwJScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY2xpcCc6ICdub25lJyxcbiAgICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0JyxcbiAgICAgICAgICAnYm9yZGVyLXdpZHRoJzogMCxcbiAgICAgICAgICAnc2hhcGUtcG9seWdvbi1wb2ludHMnOiAnLTAuODYsIDAuNSwgLTAuNzUsIDAuNjUsIC0xLCAwLjk1LCAtMC45NSwgMSwgLTAuNjUsIDAuNzUsIC0wLjUsIDAuODYsIDAsIDEsIDAuNSwgMC44NiwgMC43MSwgMC43MSwgMC44NiwgMC41LCAxLCAwLCAwLjg2LCAtMC41LCAwLjc1LCAtMC42NSwgMSwgLTAuOTUsIDAuOTUsIC0xLCAwLjY1LCAtMC43NSwgMC41LCAtMC44NiwgMCwgLTEsIC0wLjUsIC0wLjg2LCAtMC43MSwgLTAuNzEsIC0wLjg2LCAtMC41LCAtMSwgMCcsXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc291cmNlIGFuZCBzaW5rIGFuZCBkaXNzb2NpYXRpb24gYXJlIGRyYXduIGRpZmZlcmVudGx5IGJlY2F1c2VcbiAgICAgICAgLy8gb2YgdGhlaXIgdW5pcXVlIHNoYXBlXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZVtjbGFzcz1cImRpc3NvY2lhdGlvblwiXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKSxcbiAgICAgICAgICAnYmFja2dyb3VuZC1maXQnOiAnbm9uZScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtd2lkdGgnOiAnMTAwJScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtaGVpZ2h0JzogJzEwMCUnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNsaXAnOiAnbm9uZScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXG4gICAgICAgICAgJ2JvcmRlci13aWR0aCc6IDAsXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gZWRnZSBzdHlsaW5nXG4gICAgICAgIC5zZWxlY3RvcignZWRnZScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdhcnJvdy1zY2FsZSc6IDEuNzUsXG4gICAgICAgICAgJ2N1cnZlLXN0eWxlJzogJ2JlemllcicsXG4gICAgICAgICAgJ2xpbmUtY29sb3InOiAnIzU1NScsXG4gICAgICAgICAgJ3RhcmdldC1hcnJvdy1maWxsJzogJ2hvbGxvdycsXG4gICAgICAgICAgJ3NvdXJjZS1hcnJvdy1maWxsJzogJ2hvbGxvdycsXG4gICAgICAgICAgJ3dpZHRoJzogMS41LFxuICAgICAgICAgICd0YXJnZXQtYXJyb3ctY29sb3InOiAnIzU1NScsXG4gICAgICAgICAgJ3NvdXJjZS1hcnJvdy1jb2xvcic6ICcjNTU1JyxcbiAgICAgICAgICAndGV4dC1ib3JkZXItY29sb3InOiAnIzU1NScsXG4gICAgICAgICAgJ2NvbG9yJzogJyM1NTUnXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3RvcignZWRnZTpzZWxlY3RlZCcpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdjb2xvcic6ICcjZDY3NjE0JyxcbiAgICAgICAgICAnbGluZS1jb2xvcic6ICcjZDY3NjE0JyxcbiAgICAgICAgICAndGV4dC1ib3JkZXItY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgICAgICAgJ3NvdXJjZS1hcnJvdy1jb2xvcic6ICcjZDY3NjE0JyxcbiAgICAgICAgICAndGFyZ2V0LWFycm93LWNvbG9yJzogJyNkNjc2MTQnXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3RvcignZWRnZTphY3RpdmUnKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnYmFja2dyb3VuZC1vcGFjaXR5JzogMC43LCAnb3ZlcmxheS1jb2xvcic6ICcjZDY3NjE0JyxcbiAgICAgICAgICAnb3ZlcmxheS1wYWRkaW5nJzogJzgnXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3RvcignZWRnZVtjYXJkaW5hbGl0eSA+IDBdJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ3RleHQtYmFja2dyb3VuZC1zaGFwZSc6ICdyZWN0YW5nbGUnLFxuICAgICAgICAgICd0ZXh0LWJvcmRlci1vcGFjaXR5JzogJzEnLFxuICAgICAgICAgICd0ZXh0LWJvcmRlci13aWR0aCc6ICcxJyxcbiAgICAgICAgICAndGV4dC1iYWNrZ3JvdW5kLWNvbG9yJzogJ3doaXRlJyxcbiAgICAgICAgICAndGV4dC1iYWNrZ3JvdW5kLW9wYWNpdHknOiAnMSdcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdG9yKCdlZGdlW2NsYXNzPVwiY29uc3VtcHRpb25cIl1bY2FyZGluYWxpdHkgPiAwXSwgZWRnZVtjbGFzcz1cInByb2R1Y3Rpb25cIl1bY2FyZGluYWxpdHkgPiAwXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdzb3VyY2UtbGFiZWwnOiAoZWRnZSkgPT4gJycgKyBlZGdlLmRhdGEoJ2NhcmRpbmFsaXR5JyksXG4gICAgICAgICAgJ3NvdXJjZS10ZXh0LW9mZnNldCc6IDEwXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3RvcignZWRnZVtjbGFzc10nKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAndGFyZ2V0LWFycm93LXNoYXBlJzogKGVkZ2UpID0+IGVsZW1lbnRTdHlsZS5zYmduQXJyb3dTaGFwZShlZGdlKSxcbiAgICAgICAgICAnc291cmNlLWFycm93LXNoYXBlJzogJ25vbmUnXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3RvcignZWRnZVtjbGFzcz1cImluaGliaXRpb25cIl0nKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAndGFyZ2V0LWFycm93LWZpbGwnOiAnZmlsbGVkJ1xuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2VbY2xhc3M9XCJwcm9kdWN0aW9uXCJdJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ3RhcmdldC1hcnJvdy1maWxsJzogJ2ZpbGxlZCdcbiAgICAgICAgfSlcblxuXG4gICAgICAgIC8vIGNvcmVcbiAgICAgICAgLnNlbGVjdG9yKCdjb3JlJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ3NlbGVjdGlvbi1ib3gtY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgICAgICAgJ3NlbGVjdGlvbi1ib3gtb3BhY2l0eSc6ICcwLjInLCAnc2VsZWN0aW9uLWJveC1ib3JkZXItY29sb3InOiAnI2Q2NzYxNCdcbiAgICAgICAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNiZ25TdHlsZVNoZWV0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NiZ25TdHlsZS9pbmRleC5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvaW5kZXguanMiLCJjb25zdCBtZW1vaXplID0gcmVxdWlyZSgnbG9kYXNoLm1lbW9pemUnKTtcblxuY29uc3QgY29udGFpbmVyTm9kZXMgPSByZXF1aXJlKCcuL2NvbnRhaW5lck5vZGVzLmpzJyk7XG5jb25zdCBlbnRpdHlQb29sTm9kZXMgPSByZXF1aXJlKCcuL2VudGl0eVBvb2xOb2Rlcy5qcycpO1xuY29uc3QgcHJvY2Vzc05vZGVzID0gcmVxdWlyZSgnLi9wcm9jZXNzTm9kZXMuanMnKTtcblxuY29uc3Qgc2JnbkRhdGEgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24uanMnKTtcblxuY29uc3QgY2FjaGVLZXlGbiA9IChub2RlKSA9PiAnJyArIEpTT04uc3RyaW5naWZ5KG5vZGUuaWQoKSk7XG5cbmNvbnN0IHNiZ25Ob2RlU2hhcGVNYXAgPSBuZXcgTWFwKClcbi8vIHByb2Nlc3Mgbm9kZXNcbi5zZXQoJ2Rpc3NvY2lhdGlvbicsIG1lbW9pemUocHJvY2Vzc05vZGVzLmRpc3NvY2lhdGlvbiwgY2FjaGVLZXlGbikpXG4uc2V0KCdwaGVub3R5cGUnLCBtZW1vaXplKHByb2Nlc3NOb2Rlcy5waGVub3R5cGUsIGNhY2hlS2V5Rm4pKVxuXG4vLyBlbnRpdHkgcG9vbCBub2Rlc1xuLnNldCgnc291cmNlIGFuZCBzaW5rJywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMuc291cmNlQW5kU2luaywgY2FjaGVLZXlGbikpXG4uc2V0KCd1bnNwZWNpZmllZCBlbnRpdHknLCBtZW1vaXplKGVudGl0eVBvb2xOb2Rlcy51bnNwZWNpZmllZEVudGl0eSwgY2FjaGVLZXlGbikpXG4uc2V0KCdzaW1wbGUgY2hlbWljYWwnLCBtZW1vaXplKGVudGl0eVBvb2xOb2Rlcy5zaW1wbGVDaGVtaWNhbCwgY2FjaGVLZXlGbikpXG4uc2V0KCdtYWNyb21vbGVjdWxlJywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMubWFjcm9tb2xlY3VsZSwgY2FjaGVLZXlGbikpXG4uc2V0KCdudWNsZWljIGFjaWQgZmVhdHVyZScsIG1lbW9pemUoZW50aXR5UG9vbE5vZGVzLm51Y2xlaWNBY2lkRmVhdHVyZSwgY2FjaGVLZXlGbikpXG4uc2V0KCdjb21wbGV4JywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMuY29tcGxleCwgY2FjaGVLZXlGbikpXG4uc2V0KCdwZXJ0dXJiaW5nIGFnZW50JywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMucGVydHVyYmluZ0FnZW50LCBjYWNoZUtleUZuKSlcblxuLy8gY29udGFpbmVyIG5vZGVzXG4uc2V0KCdjb21wYXJ0bWVudCcsIG1lbW9pemUoY29udGFpbmVyTm9kZXMuY29tcGFydG1lbnQsIGNhY2hlS2V5Rm4pKTtcblxuXG5jb25zdCBkcmF3ID0gKG5vZGUpID0+IHtcbiAgY29uc3Qgc2JnbkNsYXNzID0gc2JnbkRhdGEuc2JnbkNsYXNzKG5vZGUpLnJlcGxhY2UoJyBtdWx0aW1lcicsICcnKTtcbiAgbGV0IHNoYXBlRm4gPSBzYmduTm9kZVNoYXBlTWFwLmdldChzYmduQ2xhc3MpO1xuICBpZiAoc2hhcGVGbiA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtzYmduQ2xhc3N9IGRvZXMgbm90IGhhdmUgYSBzaGFwZSBpbXBsZW1lbnRhdGlvbmApO1xuICB9XG4gIHJldHVybiBzaGFwZUZuKG5vZGUpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRyYXc6IGRyYXdcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL2dseXBoL2luZGV4LmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL3NiZ25TdHlsZS9nbHlwaC9pbmRleC5qcyIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJjb25zdCBzdmdTdHIgPSByZXF1aXJlKCcuLi91dGlsL3N2ZycpLnN2Z1N0cjtcbmNvbnN0IHNiZ25EYXRhID0gcmVxdWlyZSgnLi4vdXRpbC9zYmduJyk7XG5jb25zdCBtZW1vaXplID0gcmVxdWlyZSgnbG9kYXNoLm1lbW9pemUnKTtcblxuY29uc3QgYXV4aWxpYXJ5SXRlbXMgPSByZXF1aXJlKCcuL2F1eGlsaWFyeUl0ZW1zJyk7XG5jb25zdCBiYXNlU2hhcGVzID0gcmVxdWlyZSgnLi9iYXNlU2hhcGVzJyk7XG5cbmNvbnN0IGNvbnRhaW5lck5vZGVzID0ge1xuXG4gIGNvbXBhcnRtZW50IChub2RlKSB7XG4gICAgY29uc3QgYXV4SXRlbVdpZHRoID0gNjA7XG4gICAgY29uc3QgYXV4SXRlbUhlaWdodCA9IDQwO1xuICAgIGNvbnN0IHVJbmZvcyA9IHNiZ25EYXRhLmdldFVuaXRJbmZvcyhub2RlKTtcblxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM1NTU1NTUnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICc2Jyk7XG5cbiAgICBjb25zdCB1SW5mb1N2ZyA9IHN2Z1N0cihcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgdUluZm9zWzBdKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGxldCBsaW5lU3ZnID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmdJbWFnZTogW2xpbmVTdmcsIHVJbmZvU3ZnXSxcbiAgICAgIGJnV2lkdGg6IFsnMTAwJSddLFxuICAgICAgYmdQb3NYOiBbJzAlJywgJzI1JSddLFxuICAgICAgYmdQb3NZOiBbJzE5cHgnLCAnMCUnXSxcbiAgICAgIGJnRml0OiBbJ2NvbnRhaW4nLCAnbm9uZSddLFxuICAgICAgYmdDbGlwOiAnbm9kZScsXG4gICAgICBwYWRkaW5nOiAnMzhweCcsXG4gICAgICBib3JkZXJXaWR0aDogJzQnXG4gICAgfTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb250YWluZXJOb2RlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvZ2x5cGgvY29udGFpbmVyTm9kZXMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvc2JnblN0eWxlL2dseXBoL2NvbnRhaW5lck5vZGVzLmpzIiwidmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG52YXIgZXh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKTtcblxudmFyIHN1cHBvcnRlZCA9IGZ1bmN0aW9uKCkge1xuXHRpZih0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XG5cblx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHRpZih0eXBlb2YgY2FudmFzLmdldENvbnRleHQgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblxuXHR2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXHRyZXR1cm4gISFjb250ZXh0ICYmICh0eXBlb2YgY29udGV4dC5tZWFzdXJlVGV4dCA9PT0gJ2Z1bmN0aW9uJyk7XG59O1xuXG52YXIgaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cblx0dmFyIHdpZHRoID0gZnVuY3Rpb24oc3RyLCBvcHRpb25zKSB7XG5cdFx0b3B0aW9ucyA9IGV4dGVuZCh7XG5cdFx0XHRzdHlsZTogJ25vcm1hbCcsXG5cdFx0XHR2YXJpYW50OiAnbm9ybWFsJyxcblx0XHRcdHdlaWdodDogJ25vcm1hbCcsXG5cdFx0XHRzaXplOiAnbWVkaXVtJyxcblx0XHRcdGZhbWlseTogJ3NhbnMtc2VyaWYnLFxuXHRcdFx0YWxpZ246ICdzdGFydCcsXG5cdFx0XHRiYXNlbGluZTogJ2FscGhhYmV0aWMnXG5cdFx0fSwgb3B0aW9ucyk7XG5cblx0XHR2YXIgc2l6ZSA9IG9wdGlvbnMuc2l6ZTtcblx0XHRpZih0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicpIHNpemUgPSBzaXplICsgJ3B4JztcblxuXHRcdGNvbnRleHQuZm9udCA9IHV0aWwuZm9ybWF0KCclcyAlcyAlcyAlcyAlcycsXG5cdFx0XHRvcHRpb25zLnN0eWxlLFxuXHRcdFx0b3B0aW9ucy52YXJpYW50LFxuXHRcdFx0b3B0aW9ucy53ZWlnaHQsXG5cdFx0XHRzaXplLFxuXHRcdFx0b3B0aW9ucy5mYW1pbHkpO1xuXHRcdGNvbnRleHQudGV4dEFsaWduID0gb3B0aW9ucy5hbGlnbjtcblx0XHRjb250ZXh0LnRleHRCYXNlbGluZSA9IG9wdGlvbnMuYmFzZWxpbmU7XG5cblx0XHRyZXR1cm4gY29udGV4dC5tZWFzdXJlVGV4dChzdHIpLndpZHRoO1xuXHR9O1xuXG5cdHdpZHRoLnN1cHBvcnRlZCA9IHRydWU7XG5cdHJldHVybiB3aWR0aDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc3VwcG9ydGVkKCkgPyBpbml0aWFsaXplKCkgOiAoZnVuY3Rpb24oKSB7XG5cdHZhciB3aWR0aCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAwO1xuXHR9O1xuXG5cdHdpZHRoLnN1cHBvcnRlZCA9IGZhbHNlO1xuXHRyZXR1cm4gd2lkdGg7XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdGV4dC13aWR0aC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3RleHQtd2lkdGgvaW5kZXguanMiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyB8fFxuICBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iaikge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICB2YXIgZGVzY3JpcHRvcnMgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlc2NyaXB0b3JzW2tleXNbaV1dID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gZGVzY3JpcHRvcnM7XG4gIH07XG5cbnZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZGolXS9nO1xuZXhwb3J0cy5mb3JtYXQgPSBmdW5jdGlvbihmKSB7XG4gIGlmICghaXNTdHJpbmcoZikpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvYmplY3RzLnB1c2goaW5zcGVjdChhcmd1bWVudHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpO1xuICB9XG5cbiAgdmFyIGkgPSAxO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgc3RyID0gU3RyaW5nKGYpLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbih4KSB7XG4gICAgaWYgKHggPT09ICclJScpIHJldHVybiAnJSc7XG4gICAgaWYgKGkgPj0gbGVuKSByZXR1cm4geDtcbiAgICBzd2l0Y2ggKHgpIHtcbiAgICAgIGNhc2UgJyVzJzogcmV0dXJuIFN0cmluZyhhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWQnOiByZXR1cm4gTnVtYmVyKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclaic6XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3NbaSsrXSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gIH0pO1xuICBmb3IgKHZhciB4ID0gYXJnc1tpXTsgaSA8IGxlbjsgeCA9IGFyZ3NbKytpXSkge1xuICAgIGlmIChpc051bGwoeCkgfHwgIWlzT2JqZWN0KHgpKSB7XG4gICAgICBzdHIgKz0gJyAnICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyICs9ICcgJyArIGluc3BlY3QoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHI7XG59O1xuXG5cbi8vIE1hcmsgdGhhdCBhIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4vLyBSZXR1cm5zIGEgbW9kaWZpZWQgZnVuY3Rpb24gd2hpY2ggd2FybnMgb25jZSBieSBkZWZhdWx0LlxuLy8gSWYgLS1uby1kZXByZWNhdGlvbiBpcyBzZXQsIHRoZW4gaXQgaXMgYSBuby1vcC5cbmV4cG9ydHMuZGVwcmVjYXRlID0gZnVuY3Rpb24oZm4sIG1zZykge1xuICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3Mubm9EZXByZWNhdGlvbiA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIC8vIEFsbG93IGZvciBkZXByZWNhdGluZyB0aGluZ3MgaW4gdGhlIHByb2Nlc3Mgb2Ygc3RhcnRpbmcgdXAuXG4gIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5kZXByZWNhdGUoZm4sIG1zZykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBkZXByZWNhdGVkKCkge1xuICAgIGlmICghd2FybmVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy50aHJvd0RlcHJlY2F0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLnRyYWNlRGVwcmVjYXRpb24pIHtcbiAgICAgICAgY29uc29sZS50cmFjZShtc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgfVxuICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gZGVwcmVjYXRlZDtcbn07XG5cblxudmFyIGRlYnVncyA9IHt9O1xudmFyIGRlYnVnRW52aXJvbjtcbmV4cG9ydHMuZGVidWdsb2cgPSBmdW5jdGlvbihzZXQpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKGRlYnVnRW52aXJvbikpXG4gICAgZGVidWdFbnZpcm9uID0gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyB8fCAnJztcbiAgc2V0ID0gc2V0LnRvVXBwZXJDYXNlKCk7XG4gIGlmICghZGVidWdzW3NldF0pIHtcbiAgICBpZiAobmV3IFJlZ0V4cCgnXFxcXGInICsgc2V0ICsgJ1xcXFxiJywgJ2knKS50ZXN0KGRlYnVnRW52aXJvbikpIHtcbiAgICAgIHZhciBwaWQgPSBwcm9jZXNzLnBpZDtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtc2cgPSBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCclcyAlZDogJXMnLCBzZXQsIHBpZCwgbXNnKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7fTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlYnVnc1tzZXRdO1xufTtcblxuXG4vKipcbiAqIEVjaG9zIHRoZSB2YWx1ZSBvZiBhIHZhbHVlLiBUcnlzIHRvIHByaW50IHRoZSB2YWx1ZSBvdXRcbiAqIGluIHRoZSBiZXN0IHdheSBwb3NzaWJsZSBnaXZlbiB0aGUgZGlmZmVyZW50IHR5cGVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBwcmludCBvdXQuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBPcHRpb25hbCBvcHRpb25zIG9iamVjdCB0aGF0IGFsdGVycyB0aGUgb3V0cHV0LlxuICovXG4vKiBsZWdhY3k6IG9iaiwgc2hvd0hpZGRlbiwgZGVwdGgsIGNvbG9ycyovXG5mdW5jdGlvbiBpbnNwZWN0KG9iaiwgb3B0cykge1xuICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgdmFyIGN0eCA9IHtcbiAgICBzZWVuOiBbXSxcbiAgICBzdHlsaXplOiBzdHlsaXplTm9Db2xvclxuICB9O1xuICAvLyBsZWdhY3kuLi5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMykgY3R4LmRlcHRoID0gYXJndW1lbnRzWzJdO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSA0KSBjdHguY29sb3JzID0gYXJndW1lbnRzWzNdO1xuICBpZiAoaXNCb29sZWFuKG9wdHMpKSB7XG4gICAgLy8gbGVnYWN5Li4uXG4gICAgY3R4LnNob3dIaWRkZW4gPSBvcHRzO1xuICB9IGVsc2UgaWYgKG9wdHMpIHtcbiAgICAvLyBnb3QgYW4gXCJvcHRpb25zXCIgb2JqZWN0XG4gICAgZXhwb3J0cy5fZXh0ZW5kKGN0eCwgb3B0cyk7XG4gIH1cbiAgLy8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LnNob3dIaWRkZW4pKSBjdHguc2hvd0hpZGRlbiA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmRlcHRoKSkgY3R4LmRlcHRoID0gMjtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jb2xvcnMpKSBjdHguY29sb3JzID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY3VzdG9tSW5zcGVjdCkpIGN0eC5jdXN0b21JbnNwZWN0ID0gdHJ1ZTtcbiAgaWYgKGN0eC5jb2xvcnMpIGN0eC5zdHlsaXplID0gc3R5bGl6ZVdpdGhDb2xvcjtcbiAgcmV0dXJuIGZvcm1hdFZhbHVlKGN0eCwgb2JqLCBjdHguZGVwdGgpO1xufVxuZXhwb3J0cy5pbnNwZWN0ID0gaW5zcGVjdDtcblxuXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FOU0lfZXNjYXBlX2NvZGUjZ3JhcGhpY3Ncbmluc3BlY3QuY29sb3JzID0ge1xuICAnYm9sZCcgOiBbMSwgMjJdLFxuICAnaXRhbGljJyA6IFszLCAyM10sXG4gICd1bmRlcmxpbmUnIDogWzQsIDI0XSxcbiAgJ2ludmVyc2UnIDogWzcsIDI3XSxcbiAgJ3doaXRlJyA6IFszNywgMzldLFxuICAnZ3JleScgOiBbOTAsIDM5XSxcbiAgJ2JsYWNrJyA6IFszMCwgMzldLFxuICAnYmx1ZScgOiBbMzQsIDM5XSxcbiAgJ2N5YW4nIDogWzM2LCAzOV0sXG4gICdncmVlbicgOiBbMzIsIDM5XSxcbiAgJ21hZ2VudGEnIDogWzM1LCAzOV0sXG4gICdyZWQnIDogWzMxLCAzOV0sXG4gICd5ZWxsb3cnIDogWzMzLCAzOV1cbn07XG5cbi8vIERvbid0IHVzZSAnYmx1ZScgbm90IHZpc2libGUgb24gY21kLmV4ZVxuaW5zcGVjdC5zdHlsZXMgPSB7XG4gICdzcGVjaWFsJzogJ2N5YW4nLFxuICAnbnVtYmVyJzogJ3llbGxvdycsXG4gICdib29sZWFuJzogJ3llbGxvdycsXG4gICd1bmRlZmluZWQnOiAnZ3JleScsXG4gICdudWxsJzogJ2JvbGQnLFxuICAnc3RyaW5nJzogJ2dyZWVuJyxcbiAgJ2RhdGUnOiAnbWFnZW50YScsXG4gIC8vIFwibmFtZVwiOiBpbnRlbnRpb25hbGx5IG5vdCBzdHlsaW5nXG4gICdyZWdleHAnOiAncmVkJ1xufTtcblxuXG5mdW5jdGlvbiBzdHlsaXplV2l0aENvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHZhciBzdHlsZSA9IGluc3BlY3Quc3R5bGVzW3N0eWxlVHlwZV07XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgcmV0dXJuICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMF0gKyAnbScgKyBzdHIgK1xuICAgICAgICAgICAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzFdICsgJ20nO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBzdHlsaXplTm9Db2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICByZXR1cm4gc3RyO1xufVxuXG5cbmZ1bmN0aW9uIGFycmF5VG9IYXNoKGFycmF5KSB7XG4gIHZhciBoYXNoID0ge307XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbih2YWwsIGlkeCkge1xuICAgIGhhc2hbdmFsXSA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiBoYXNoO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcykge1xuICAvLyBQcm92aWRlIGEgaG9vayBmb3IgdXNlci1zcGVjaWZpZWQgaW5zcGVjdCBmdW5jdGlvbnMuXG4gIC8vIENoZWNrIHRoYXQgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggYW4gaW5zcGVjdCBmdW5jdGlvbiBvbiBpdFxuICBpZiAoY3R4LmN1c3RvbUluc3BlY3QgJiZcbiAgICAgIHZhbHVlICYmXG4gICAgICBpc0Z1bmN0aW9uKHZhbHVlLmluc3BlY3QpICYmXG4gICAgICAvLyBGaWx0ZXIgb3V0IHRoZSB1dGlsIG1vZHVsZSwgaXQncyBpbnNwZWN0IGZ1bmN0aW9uIGlzIHNwZWNpYWxcbiAgICAgIHZhbHVlLmluc3BlY3QgIT09IGV4cG9ydHMuaW5zcGVjdCAmJlxuICAgICAgLy8gQWxzbyBmaWx0ZXIgb3V0IGFueSBwcm90b3R5cGUgb2JqZWN0cyB1c2luZyB0aGUgY2lyY3VsYXIgY2hlY2suXG4gICAgICAhKHZhbHVlLmNvbnN0cnVjdG9yICYmIHZhbHVlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSA9PT0gdmFsdWUpKSB7XG4gICAgdmFyIHJldCA9IHZhbHVlLmluc3BlY3QocmVjdXJzZVRpbWVzLCBjdHgpO1xuICAgIGlmICghaXNTdHJpbmcocmV0KSkge1xuICAgICAgcmV0ID0gZm9ybWF0VmFsdWUoY3R4LCByZXQsIHJlY3Vyc2VUaW1lcyk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyBQcmltaXRpdmUgdHlwZXMgY2Fubm90IGhhdmUgcHJvcGVydGllc1xuICB2YXIgcHJpbWl0aXZlID0gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpO1xuICBpZiAocHJpbWl0aXZlKSB7XG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIC8vIExvb2sgdXAgdGhlIGtleXMgb2YgdGhlIG9iamVjdC5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gIHZhciB2aXNpYmxlS2V5cyA9IGFycmF5VG9IYXNoKGtleXMpO1xuXG4gIGlmIChjdHguc2hvd0hpZGRlbikge1xuICAgIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZSk7XG4gIH1cblxuICAvLyBJRSBkb2Vzbid0IG1ha2UgZXJyb3IgZmllbGRzIG5vbi1lbnVtZXJhYmxlXG4gIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9kd3c1MnNidCh2PXZzLjk0KS5hc3B4XG4gIGlmIChpc0Vycm9yKHZhbHVlKVxuICAgICAgJiYgKGtleXMuaW5kZXhPZignbWVzc2FnZScpID49IDAgfHwga2V5cy5pbmRleE9mKCdkZXNjcmlwdGlvbicpID49IDApKSB7XG4gICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIC8vIFNvbWUgdHlwZSBvZiBvYmplY3Qgd2l0aG91dCBwcm9wZXJ0aWVzIGNhbiBiZSBzaG9ydGN1dHRlZC5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICB2YXIgbmFtZSA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbRnVuY3Rpb24nICsgbmFtZSArICddJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9XG4gICAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ2RhdGUnKTtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBiYXNlID0gJycsIGFycmF5ID0gZmFsc2UsIGJyYWNlcyA9IFsneycsICd9J107XG5cbiAgLy8gTWFrZSBBcnJheSBzYXkgdGhhdCB0aGV5IGFyZSBBcnJheVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBhcnJheSA9IHRydWU7XG4gICAgYnJhY2VzID0gWydbJywgJ10nXTtcbiAgfVxuXG4gIC8vIE1ha2UgZnVuY3Rpb25zIHNheSB0aGF0IHRoZXkgYXJlIGZ1bmN0aW9uc1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICB2YXIgbiA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgIGJhc2UgPSAnIFtGdW5jdGlvbicgKyBuICsgJ10nO1xuICB9XG5cbiAgLy8gTWFrZSBSZWdFeHBzIHNheSB0aGF0IHRoZXkgYXJlIFJlZ0V4cHNcbiAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBkYXRlcyB3aXRoIHByb3BlcnRpZXMgZmlyc3Qgc2F5IHRoZSBkYXRlXG4gIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIERhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBlcnJvciB3aXRoIG1lc3NhZ2UgZmlyc3Qgc2F5IHRoZSBlcnJvclxuICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwICYmICghYXJyYXkgfHwgdmFsdWUubGVuZ3RoID09IDApKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyBicmFjZXNbMV07XG4gIH1cblxuICBpZiAocmVjdXJzZVRpbWVzIDwgMCkge1xuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW09iamVjdF0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuXG4gIGN0eC5zZWVuLnB1c2godmFsdWUpO1xuXG4gIHZhciBvdXRwdXQ7XG4gIGlmIChhcnJheSkge1xuICAgIG91dHB1dCA9IGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCA9IGtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgY3R4LnNlZW4ucG9wKCk7XG5cbiAgcmV0dXJuIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSkge1xuICBpZiAoaXNVbmRlZmluZWQodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgndW5kZWZpbmVkJywgJ3VuZGVmaW5lZCcpO1xuICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdmFyIHNpbXBsZSA9ICdcXCcnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoL15cInxcIiQvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpICsgJ1xcJyc7XG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKHNpbXBsZSwgJ3N0cmluZycpO1xuICB9XG4gIGlmIChpc051bWJlcih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdudW1iZXInKTtcbiAgaWYgKGlzQm9vbGVhbih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdib29sZWFuJyk7XG4gIC8vIEZvciBzb21lIHJlYXNvbiB0eXBlb2YgbnVsbCBpcyBcIm9iamVjdFwiLCBzbyBzcGVjaWFsIGNhc2UgaGVyZS5cbiAgaWYgKGlzTnVsbCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCdudWxsJywgJ251bGwnKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRFcnJvcih2YWx1ZSkge1xuICByZXR1cm4gJ1snICsgRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICsgJ10nO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eSh2YWx1ZSwgU3RyaW5nKGkpKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBTdHJpbmcoaSksIHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0LnB1c2goJycpO1xuICAgIH1cbiAgfVxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKCFrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIGtleSwgdHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSkge1xuICB2YXIgbmFtZSwgc3RyLCBkZXNjO1xuICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih2YWx1ZSwga2V5KSB8fCB7IHZhbHVlOiB2YWx1ZVtrZXldIH07XG4gIGlmIChkZXNjLmdldCkge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXIvU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tTZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFoYXNPd25Qcm9wZXJ0eSh2aXNpYmxlS2V5cywga2V5KSkge1xuICAgIG5hbWUgPSAnWycgKyBrZXkgKyAnXSc7XG4gIH1cbiAgaWYgKCFzdHIpIHtcbiAgICBpZiAoY3R4LnNlZW4uaW5kZXhPZihkZXNjLnZhbHVlKSA8IDApIHtcbiAgICAgIGlmIChpc051bGwocmVjdXJzZVRpbWVzKSkge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCByZWN1cnNlVGltZXMgLSAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdHIuaW5kZXhPZignXFxuJykgPiAtMSkge1xuICAgICAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgICBzdHIgPSBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJykuc3Vic3RyKDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9ICdcXG4nICsgc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0NpcmN1bGFyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmIChpc1VuZGVmaW5lZChuYW1lKSkge1xuICAgIGlmIChhcnJheSAmJiBrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBuYW1lID0gSlNPTi5zdHJpbmdpZnkoJycgKyBrZXkpO1xuICAgIGlmIChuYW1lLm1hdGNoKC9eXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcIiQvKSkge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDEsIG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ25hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJylcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBcIidcIik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ3N0cmluZycpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuYW1lICsgJzogJyArIHN0cjtcbn1cblxuXG5mdW5jdGlvbiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcykge1xuICB2YXIgbnVtTGluZXNFc3QgPSAwO1xuICB2YXIgbGVuZ3RoID0gb3V0cHV0LnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICBudW1MaW5lc0VzdCsrO1xuICAgIGlmIChjdXIuaW5kZXhPZignXFxuJykgPj0gMCkgbnVtTGluZXNFc3QrKztcbiAgICByZXR1cm4gcHJldiArIGN1ci5yZXBsYWNlKC9cXHUwMDFiXFxbXFxkXFxkP20vZywgJycpLmxlbmd0aCArIDE7XG4gIH0sIDApO1xuXG4gIGlmIChsZW5ndGggPiA2MCkge1xuICAgIHJldHVybiBicmFjZXNbMF0gK1xuICAgICAgICAgICAoYmFzZSA9PT0gJycgPyAnJyA6IGJhc2UgKyAnXFxuICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgb3V0cHV0LmpvaW4oJyxcXG4gICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgYnJhY2VzWzFdO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyAnICcgKyBvdXRwdXQuam9pbignLCAnKSArICcgJyArIGJyYWNlc1sxXTtcbn1cblxuXG4vLyBOT1RFOiBUaGVzZSB0eXBlIGNoZWNraW5nIGZ1bmN0aW9ucyBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBgaW5zdGFuY2VvZmBcbi8vIGJlY2F1c2UgaXQgaXMgZnJhZ2lsZSBhbmQgY2FuIGJlIGVhc2lseSBmYWtlZCB3aXRoIGBPYmplY3QuY3JlYXRlKClgLlxuZnVuY3Rpb24gaXNBcnJheShhcikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcik7XG59XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnYm9vbGVhbic7XG59XG5leHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcblxuZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCc7XG59XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiBpc09iamVjdChyZSkgJiYgb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBpc09iamVjdChkKSAmJiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gaXNPYmplY3QoZSkgJiZcbiAgICAgIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IHJlcXVpcmUoJy4vc3VwcG9ydC9pc0J1ZmZlcicpO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cblxuZnVuY3Rpb24gcGFkKG4pIHtcbiAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4udG9TdHJpbmcoMTApIDogbi50b1N0cmluZygxMCk7XG59XG5cblxudmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLFxuICAgICAgICAgICAgICAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuLy8gMjYgRmViIDE2OjE5OjM0XG5mdW5jdGlvbiB0aW1lc3RhbXAoKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHRpbWUgPSBbcGFkKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldFNlY29uZHMoKSldLmpvaW4oJzonKTtcbiAgcmV0dXJuIFtkLmdldERhdGUoKSwgbW9udGhzW2QuZ2V0TW9udGgoKV0sIHRpbWVdLmpvaW4oJyAnKTtcbn1cblxuXG4vLyBsb2cgaXMganVzdCBhIHRoaW4gd3JhcHBlciB0byBjb25zb2xlLmxvZyB0aGF0IHByZXBlbmRzIGEgdGltZXN0YW1wXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnJXMgLSAlcycsIHRpbWVzdGFtcCgpLCBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpKTtcbn07XG5cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXIuXG4gKlxuICogVGhlIEZ1bmN0aW9uLnByb3RvdHlwZS5pbmhlcml0cyBmcm9tIGxhbmcuanMgcmV3cml0dGVuIGFzIGEgc3RhbmRhbG9uZVxuICogZnVuY3Rpb24gKG5vdCBvbiBGdW5jdGlvbi5wcm90b3R5cGUpLiBOT1RFOiBJZiB0aGlzIGZpbGUgaXMgdG8gYmUgbG9hZGVkXG4gKiBkdXJpbmcgYm9vdHN0cmFwcGluZyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJld3JpdHRlbiB1c2luZyBzb21lIG5hdGl2ZVxuICogZnVuY3Rpb25zIGFzIHByb3RvdHlwZSBzZXR1cCB1c2luZyBub3JtYWwgSmF2YVNjcmlwdCBkb2VzIG5vdCB3b3JrIGFzXG4gKiBleHBlY3RlZCBkdXJpbmcgYm9vdHN0cmFwcGluZyAoc2VlIG1pcnJvci5qcyBpbiByMTE0OTAzKS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGluaGVyaXQgdGhlXG4gKiAgICAgcHJvdG90eXBlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGluaGVyaXQgcHJvdG90eXBlIGZyb20uXG4gKi9cbmV4cG9ydHMuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuXG5leHBvcnRzLl9leHRlbmQgPSBmdW5jdGlvbihvcmlnaW4sIGFkZCkge1xuICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiBhZGQgaXNuJ3QgYW4gb2JqZWN0XG4gIGlmICghYWRkIHx8ICFpc09iamVjdChhZGQpKSByZXR1cm4gb3JpZ2luO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWRkKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIG9yaWdpbltrZXlzW2ldXSA9IGFkZFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxudmFyIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnID8gU3ltYm9sKCd1dGlsLnByb21pc2lmeS5jdXN0b20nKSA6IHVuZGVmaW5lZDtcblxuZXhwb3J0cy5wcm9taXNpZnkgPSBmdW5jdGlvbiBwcm9taXNpZnkob3JpZ2luYWwpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbCAhPT0gJ2Z1bmN0aW9uJylcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJvcmlnaW5hbFwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuXG4gIGlmIChrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wgJiYgb3JpZ2luYWxba0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXSkge1xuICAgIHZhciBmbiA9IG9yaWdpbmFsW2tDdXN0b21Qcm9taXNpZmllZFN5bWJvbF07XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwidXRpbC5wcm9taXNpZnkuY3VzdG9tXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sLCB7XG4gICAgICB2YWx1ZTogZm4sIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZuKCkge1xuICAgIHZhciBwcm9taXNlUmVzb2x2ZSwgcHJvbWlzZVJlamVjdDtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHByb21pc2VSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIHByb21pc2VSZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG5cbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG4gICAgYXJncy5wdXNoKGZ1bmN0aW9uIChlcnIsIHZhbHVlKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHByb21pc2VSZWplY3QoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2VSZXNvbHZlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHByb21pc2VSZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihmbiwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsKSk7XG5cbiAgaWYgKGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wsIHtcbiAgICB2YWx1ZTogZm4sIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFxuICAgIGZuLFxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob3JpZ2luYWwpXG4gICk7XG59XG5cbmV4cG9ydHMucHJvbWlzaWZ5LmN1c3RvbSA9IGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbFxuXG5mdW5jdGlvbiBjYWxsYmFja2lmeU9uUmVqZWN0ZWQocmVhc29uLCBjYikge1xuICAvLyBgIXJlYXNvbmAgZ3VhcmQgaW5zcGlyZWQgYnkgYmx1ZWJpcmQgKFJlZjogaHR0cHM6Ly9nb28uZ2wvdDVJUzZNKS5cbiAgLy8gQmVjYXVzZSBgbnVsbGAgaXMgYSBzcGVjaWFsIGVycm9yIHZhbHVlIGluIGNhbGxiYWNrcyB3aGljaCBtZWFucyBcIm5vIGVycm9yXG4gIC8vIG9jY3VycmVkXCIsIHdlIGVycm9yLXdyYXAgc28gdGhlIGNhbGxiYWNrIGNvbnN1bWVyIGNhbiBkaXN0aW5ndWlzaCBiZXR3ZWVuXG4gIC8vIFwidGhlIHByb21pc2UgcmVqZWN0ZWQgd2l0aCBudWxsXCIgb3IgXCJ0aGUgcHJvbWlzZSBmdWxmaWxsZWQgd2l0aCB1bmRlZmluZWRcIi5cbiAgaWYgKCFyZWFzb24pIHtcbiAgICB2YXIgbmV3UmVhc29uID0gbmV3IEVycm9yKCdQcm9taXNlIHdhcyByZWplY3RlZCB3aXRoIGEgZmFsc3kgdmFsdWUnKTtcbiAgICBuZXdSZWFzb24ucmVhc29uID0gcmVhc29uO1xuICAgIHJlYXNvbiA9IG5ld1JlYXNvbjtcbiAgfVxuICByZXR1cm4gY2IocmVhc29uKTtcbn1cblxuZnVuY3Rpb24gY2FsbGJhY2tpZnkob3JpZ2luYWwpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcIm9yaWdpbmFsXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gIH1cblxuICAvLyBXZSBETyBOT1QgcmV0dXJuIHRoZSBwcm9taXNlIGFzIGl0IGdpdmVzIHRoZSB1c2VyIGEgZmFsc2Ugc2Vuc2UgdGhhdFxuICAvLyB0aGUgcHJvbWlzZSBpcyBhY3R1YWxseSBzb21laG93IHJlbGF0ZWQgdG8gdGhlIGNhbGxiYWNrJ3MgZXhlY3V0aW9uXG4gIC8vIGFuZCB0aGF0IHRoZSBjYWxsYmFjayB0aHJvd2luZyB3aWxsIHJlamVjdCB0aGUgcHJvbWlzZS5cbiAgZnVuY3Rpb24gY2FsbGJhY2tpZmllZCgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICB2YXIgbWF5YmVDYiA9IGFyZ3MucG9wKCk7XG4gICAgaWYgKHR5cGVvZiBtYXliZUNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgbGFzdCBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBjYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG1heWJlQ2IuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIC8vIEluIHRydWUgbm9kZSBzdHlsZSB3ZSBwcm9jZXNzIHRoZSBjYWxsYmFjayBvbiBgbmV4dFRpY2tgIHdpdGggYWxsIHRoZVxuICAgIC8vIGltcGxpY2F0aW9ucyAoc3RhY2ssIGB1bmNhdWdodEV4Y2VwdGlvbmAsIGBhc3luY19ob29rc2ApXG4gICAgb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncylcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJldCkgeyBwcm9jZXNzLm5leHRUaWNrKGNiLCBudWxsLCByZXQpIH0sXG4gICAgICAgICAgICBmdW5jdGlvbihyZWopIHsgcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFja2lmeU9uUmVqZWN0ZWQsIHJlaiwgY2IpIH0pO1xuICB9XG5cbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGNhbGxiYWNraWZpZWQsIE9iamVjdC5nZXRQcm90b3R5cGVPZihvcmlnaW5hbCkpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjYWxsYmFja2lmaWVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9yaWdpbmFsKSk7XG4gIHJldHVybiBjYWxsYmFja2lmaWVkO1xufVxuZXhwb3J0cy5jYWxsYmFja2lmeSA9IGNhbGxiYWNraWZ5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXRpbC91dGlsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9ub2RlX21vZHVsZXMvdXRpbC91dGlsLmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIoYXJnKSB7XG4gIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCdcbiAgICAmJiB0eXBlb2YgYXJnLmNvcHkgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLmZpbGwgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLnJlYWRVSW50OCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9ub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXRpbC9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3V0aWwvbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzIiwiY29uc3QgYmFzZVNoYXBlcyA9IHJlcXVpcmUoJy4vYmFzZVNoYXBlcycpO1xuY29uc3QgYXV4aWxpYXJ5SXRlbXMgPSByZXF1aXJlKCcuL2F1eGlsaWFyeUl0ZW1zJyk7XG5cbmNvbnN0IHN2Z1N0ciA9IHJlcXVpcmUoJy4uL3V0aWwvc3ZnJykuc3ZnU3RyO1xuY29uc3QgZ2V0VW5pdEluZm9zID0gcmVxdWlyZSgnLi4vdXRpbC9zYmduJykuZ2V0VW5pdEluZm9zO1xuY29uc3QgZ2V0U3RhdGVWYXJzID0gcmVxdWlyZSgnLi4vdXRpbC9zYmduJykuZ2V0U3RhdGVWYXJzO1xuY29uc3QgaGFzQ2xvbmVtYXJrZXIgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24nKS5oYXNDbG9uZW1hcmtlcjtcblxuY29uc3QgZWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuXG5jb25zdCBlbnRpdHlQb29sTm9kZXMgPSB7XG5cbiAgdW5zcGVjaWZpZWRFbnRpdHkgKG5vZGUpIHtcbiAgICBjb25zdCBhdXhJdGVtV2lkdGggPSAxMDA7XG4gICAgY29uc3QgYXV4SXRlbUhlaWdodCA9IDIwO1xuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMjtcbiAgICBjb25zdCBmb250U2l6ZSA9IDEwO1xuICAgIGNvbnN0IHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcbiAgICBjb25zdCBzVmFycyA9IGdldFN0YXRlVmFycyhub2RlKTtcblxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJyk7XG5cbiAgICBjb25zdCBjbG9uZU1hcmtlclN2ZyA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQgLSAzKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHVJbmZvU3ZnID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCB1SW5mb3NbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCBzVmFyU3ZnID0gc3ZnU3RyKFxuICAgICAgc1ZhcnMubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nU3RhdGVWYXIoMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHNWYXJzWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgdG9wTGluZSA9IHN2Z1N0cihcbiAgICAgIHVJbmZvcy5sZW5ndGggKyBzVmFycy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgYm90dG9tTGluZSA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpIHx8IHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuICAgIHJldHVybiB7XG4gICAgICBiZ0ltYWdlOiBbYm90dG9tTGluZSwgdG9wTGluZSwgY2xvbmVNYXJrZXJTdmcsIHVJbmZvU3ZnLCBzVmFyU3ZnXSxcbiAgICAgIGJnV2lkdGg6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcbiAgICAgIGJnUG9zWDogWycwJScsICcwJScsICcwJScsICcyMHB4JywgJzQwcHgnXSxcbiAgICAgIGJnUG9zWTogWyc1MnB4JywgJzhweCcsICczMnB4JywgJzQ0cHgnLCAnMCUnXSxcbiAgICAgIGJnRml0OiBbJ2NvdmVyJywgJ2NvdmVyJywgJ25vbmUnLCAnbm9uZSddLFxuICAgICAgYmdDbGlwOiAnbm9kZScsXG4gICAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgfTtcblxuICB9LFxuXG4gIHNpbXBsZUNoZW1pY2FsIChub2RlKSB7XG4gICAgY29uc3QgYXV4SXRlbVdpZHRoID0gMTAwO1xuICAgIGNvbnN0IGF1eEl0ZW1IZWlnaHQgPSAyMDtcbiAgICBjb25zdCBib3JkZXJXaWR0aCA9IDI7XG4gICAgY29uc3QgZm9udFNpemUgPSAxMDtcbiAgICBjb25zdCB1SW5mb3MgPSBnZXRVbml0SW5mb3Mobm9kZSk7XG5cbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpO1xuXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdmcgPSBzdmdTdHIoXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0IC0gMykgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCB1SW5mb1N2ZyA9IHN2Z1N0cihcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgdUluZm9zWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgdG9wTGluZSA9IHN2Z1N0cihcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgYm90dG9tTGluZSA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpIHx8IHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJnSW1hZ2U6IFtib3R0b21MaW5lLCB0b3BMaW5lLCBjbG9uZU1hcmtlclN2ZywgdUluZm9TdmddLFxuICAgICAgYmdXaWR0aDogWycxMDAlJywgJzEwMCUnLCAnMTAwJSddLFxuICAgICAgYmdQb3NYOiBbJzAlJywgJzAlJywgJzAlJywgJzEycHgnXSxcbiAgICAgIGJnUG9zWTogWyc1MnB4JywgJzhweCcsICc0OHB4JywgJzBweCddLFxuICAgICAgYmdGaXQ6IFsnY292ZXInLCAnY292ZXInLCAnbm9uZScsICdub25lJ10sXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcbiAgICAgIHBhZGRpbmc6ICc4cHgnLFxuICAgICAgYm9yZGVyV2lkdGg6IDJcbiAgICB9O1xuICB9LFxuXG4gIG1hY3JvbW9sZWN1bGUobm9kZSkge1xuICAgIGNvbnN0IGF1eEl0ZW1XaWR0aCA9IDEwMDtcbiAgICBjb25zdCBhdXhJdGVtSGVpZ2h0ID0gMjA7XG4gICAgY29uc3QgYm9yZGVyV2lkdGggPSAyO1xuICAgIGNvbnN0IGZvbnRTaXplID0gMTA7XG4gICAgY29uc3QgdUluZm9zID0gZ2V0VW5pdEluZm9zKG5vZGUpO1xuICAgIGNvbnN0IHNWYXJzID0gZ2V0U3RhdGVWYXJzKG5vZGUpO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEnKTtcblxuICAgIGNvbnN0IGNsb25lTWFya2VyU3ZnID0gc3ZnU3RyKFxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ0Nsb25lTWFya2VyKDAsIDIsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCAtIDMpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgdUluZm9TdmcgPSBzdmdTdHIoXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHVJbmZvc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHNWYXJTdmcgPSBzdmdTdHIoXG4gICAgICBzVmFycy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdTdGF0ZVZhcigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgc1ZhcnNbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCB0b3BMaW5lID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCArIHNWYXJzLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCBib3R0b21MaW5lID0gc3ZnU3RyKFxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgfHwgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIHRvcExpbmUsIGNsb25lTWFya2VyU3ZnLCB1SW5mb1N2Zywgc1ZhclN2Z10sXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMCUnLCAnMCUnLCAnMjBweCcsICc0MHB4J10sXG4gICAgICBiZ1Bvc1k6IFsnNTJweCcsICc4cHgnLCAnNTJweCcsICc0NHB4JywgJzAlJ10sXG4gICAgICBiZ0ZpdDogWydjb3ZlcicsICdjb3ZlcicsICdub25lJywgJ25vbmUnXSxcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxuICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICBib3JkZXJXaWR0aDogMlxuICAgIH07ICB9LFxuXG4gIG51Y2xlaWNBY2lkRmVhdHVyZSAobm9kZSkge1xuICAgIGNvbnN0IGF1eEl0ZW1XaWR0aCA9IDEwMDtcbiAgICBjb25zdCBhdXhJdGVtSGVpZ2h0ID0gMjA7XG4gICAgY29uc3QgYm9yZGVyV2lkdGggPSAyO1xuICAgIGNvbnN0IGZvbnRTaXplID0gMTA7XG4gICAgY29uc3QgdUluZm9zID0gZ2V0VW5pdEluZm9zKG5vZGUpO1xuICAgIGNvbnN0IHNWYXJzID0gZ2V0U3RhdGVWYXJzKG5vZGUpO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEnKTtcblxuICAgIGNvbnN0IGNsb25lTWFya2VyU3ZnID0gc3ZnU3RyKFxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ0Nsb25lTWFya2VyKDAsIDIsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCAtIDMpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgdUluZm9TdmcgPSBzdmdTdHIoXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHVJbmZvc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHNWYXJTdmcgPSBzdmdTdHIoXG4gICAgICBzVmFycy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdTdGF0ZVZhcigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgc1ZhcnNbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCB0b3BMaW5lID0gc3ZnU3RyKFxuICAgICAgc1ZhcnMubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IGJvdHRvbUxpbmUgPSBzdmdTdHIoXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSB8fCB1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBiZ0ltYWdlOiBbYm90dG9tTGluZSwgdG9wTGluZSwgY2xvbmVNYXJrZXJTdmcsIHVJbmZvU3ZnLCBzVmFyU3ZnXSxcbiAgICAgIGJnV2lkdGg6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcbiAgICAgIGJnUG9zWDogWycwJScsICcwJScsICcwJScsICcyMHB4JywgJzQwcHgnXSxcbiAgICAgIGJnUG9zWTogWyc1MnB4JywgJzhweCcsICc1MnB4JywgJzQ0cHgnLCAnMCUnXSxcbiAgICAgIGJnRml0OiBbJ2NvdmVyJywgJ2NvdmVyJywgJ25vbmUnLCAnbm9uZSddLFxuICAgICAgYmdDbGlwOiAnbm9kZScsXG4gICAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgfTtcbiAgfSxcblxuICBjb21wbGV4IChub2RlKSB7XG4gICAgY29uc3QgaXRlbVcgPSA2MDtcbiAgICBjb25zdCBpdGVtSCA9IDI0O1xuICAgIGNvbnN0IHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcbiAgICBjb25zdCBzVmFycyA9IGdldFN0YXRlVmFycyhub2RlKTtcblxuICAgIGNvbnN0IGltYWdlcyA9IFtdO1xuICAgIGNvbnN0IGJnV2lkdGggPSBbXTtcbiAgICBjb25zdCBiZ0hlaWdodCA9IFtdO1xuICAgIGNvbnN0IGJnUG9zWCA9IFtdO1xuICAgIGNvbnN0IGJnUG9zWSA9IFtdO1xuICAgIGNvbnN0IGJnRml0ID0gW107XG5cbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNTU1NTU1JylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnNicpO1xuXG4gICAgLy8gb3JkZXIgb2Ygc3ZnIGltYWdlIGdlbmVyYXRpb24gbWF0dGVyc1xuICAgIGlmICh1SW5mb3MubGVuZ3RoICsgc1ZhcnMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdG9wTGluZVN2ZyA9IHN2Z1N0cihiYXNlU2hhcGVzLmxpbmUoMCwgMCwgaXRlbVcsIDAsIHN0eWxlKSwgaXRlbVcsIGl0ZW1IKTtcbiAgICAgIGltYWdlcy5wdXNoKHRvcExpbmVTdmcpO1xuICAgICAgYmdXaWR0aC5wdXNoKCcxMDAlJyk7XG4gICAgICBiZ1Bvc1gucHVzaCgnMCUnKTtcbiAgICAgIGJnUG9zWS5wdXNoKCcxMXB4Jyk7XG4gICAgICBiZ0ZpdC5wdXNoKCdub25lJyk7XG4gICAgfVxuXG4gICAgaWYgKGhhc0Nsb25lbWFya2VyKG5vZGUpKSB7XG4gICAgICBjb25zdCBib3R0b21MaW5lU3ZnID0gc3ZnU3RyKGJhc2VTaGFwZXMubGluZSgwLCAwLCBpdGVtVywgMCwgc3R5bGUpLCBpdGVtVywgaXRlbUgpO1xuICAgICAgaW1hZ2VzLnB1c2goYm90dG9tTGluZVN2Zyk7XG4gICAgICBiZ1dpZHRoLnB1c2goJzEwMCUnKTtcbiAgICAgIGJnUG9zWC5wdXNoKCcwJScpO1xuICAgICAgYmdQb3NZLnB1c2goJzEwMCUnKTtcbiAgICAgIGJnRml0LnB1c2goJ25vbmUnKTtcbiAgICB9XG5cbiAgICBpZiAoaGFzQ2xvbmVtYXJrZXIobm9kZSkpIHtcbiAgICAgIGNvbnN0IGNsb25lU3ZnID0gc3ZnU3RyKGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgaXRlbVcsIGl0ZW1IIC0gMyksIGl0ZW1XLCBpdGVtSCk7XG4gICAgICBpbWFnZXMucHVzaChjbG9uZVN2Zyk7XG4gICAgICBiZ1dpZHRoLnB1c2goJzEwMCUnKTtcbiAgICAgIGJnUG9zWC5wdXNoKCcwJScpO1xuICAgICAgYmdQb3NZLnB1c2goJzEwMCUnKTtcbiAgICAgIGJnRml0LnB1c2goJ25vbmUnKTtcbiAgICB9XG5cbiAgICBpZiAodUluZm9zLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHVJbmZvU3ZnID0gc3ZnU3RyKGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgaXRlbVcgLSA1LCBpdGVtSCAtIDMsIHVJbmZvc1swXSksIGl0ZW1XLCBpdGVtSCk7XG4gICAgICBpbWFnZXMucHVzaCh1SW5mb1N2Zyk7XG4gICAgICBiZ1Bvc1gucHVzaCgnMjUlJyk7XG4gICAgICBiZ1Bvc1kucHVzaCgnMCUnKTtcbiAgICAgIGJnRml0LnB1c2goJ25vbmUnKTtcbiAgICB9XG5cbiAgICBpZiAoc1ZhcnMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc1ZhclN2ZyA9IHN2Z1N0cihhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1N0YXRlVmFyKDIsIDAsIGl0ZW1XIC0gNSwgaXRlbUggLSAzLCBzVmFyc1swXSksIGl0ZW1XLCBpdGVtSCk7XG4gICAgICBpbWFnZXMucHVzaChzVmFyU3ZnKTtcbiAgICAgIGJnUG9zWC5wdXNoKCc4OCUnKTtcbiAgICAgIGJnUG9zWS5wdXNoKCcwJScpO1xuICAgICAgYmdGaXQucHVzaCgnbm9uZScpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBiZ0ltYWdlOiBpbWFnZXMsXG4gICAgICBiZ1dpZHRoOiBiZ1dpZHRoLFxuICAgICAgYmdQb3NYOiBiZ1Bvc1gsXG4gICAgICBiZ1Bvc1k6IGJnUG9zWSxcbiAgICAgIGJnRml0OiBiZ0ZpdCxcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxuICAgICAgcGFkZGluZzogJzIycHgnLFxuICAgICAgYm9yZGVyV2lkdGg6IDRcbiAgICB9O1xuICB9LFxuXG4gIHNvdXJjZUFuZFNpbmsgKG5vZGUpIHtcbiAgICBjb25zdCB7dzogbncsIGg6IG5ofSA9IGVsZW1lbnQuZGltZW5zaW9ucyhub2RlKTtcblxuICAgIGNvbnN0IGNlbnRlclggPSBudyAvIDI7XG4gICAgY29uc3QgY2VudGVyWSA9IG5oIC8gMjtcbiAgICBjb25zdCByYWRpdXMgPSAobncgLSAyKSAvIDI7XG5cbiAgICBjb25zdCBzdHlsZU1hcCA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2UtbGluZWNhcCcsICdzcXVhcmUnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxLjUnKVxuICAgIC5zZXQoJ2ZpbGwnLCAnbm9uZScpO1xuXG4gICAgY29uc3Qgc2hhcGVBcmdzID0gW2NlbnRlclgsIGNlbnRlclksIHJhZGl1c107XG5cbiAgICBjb25zdCBzb3VyY2VBbmRTaW5rU3ZnID1cbiAgICBgXG4gICAgICAke2Jhc2VTaGFwZXMuY2lyY2xlKC4uLnNoYXBlQXJncywgc3R5bGVNYXApfVxuICAgICAgJHtoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLmNsb25lTWFya2VyKG53LCBuaCwgYmFzZVNoYXBlcy5jaXJjbGUsIHNoYXBlQXJncykgOiAnJ31cbiAgICAgICR7YmFzZVNoYXBlcy5saW5lKDAsIG5oLCBudywgMCwgc3R5bGVNYXApfVxuICAgIGA7XG5cbiAgICByZXR1cm4gc3ZnU3RyKHNvdXJjZUFuZFNpbmtTdmcsIG53LCBuaCwgMCwgMCwgbncsIG5oKTtcbiAgfSxcblxuICBwZXJ0dXJiaW5nQWdlbnQgKG5vZGUpIHtcbiAgICBjb25zdCBhdXhJdGVtV2lkdGggPSAxMDA7XG4gICAgY29uc3QgYXV4SXRlbUhlaWdodCA9IDIwO1xuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMjtcbiAgICBjb25zdCBmb250U2l6ZSA9IDEwO1xuICAgIGNvbnN0IHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcblxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJyk7XG5cbiAgICBjb25zdCBjbG9uZU1hcmtlclN2ZyA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQgLSAzKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHVJbmZvU3ZnID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCB1SW5mb3NbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCB0b3BMaW5lID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCBib3R0b21MaW5lID0gc3ZnU3RyKFxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgfHwgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIHRvcExpbmUsIGNsb25lTWFya2VyU3ZnLCB1SW5mb1N2Z10sXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMCUnLCAnMCUnLCAnMjBweCddLFxuICAgICAgYmdQb3NZOiBbJzU2cHgnLCAnOHB4JywgJzU2cHgnLCAnMCUnXSxcbiAgICAgIGJnRml0OiBbJ2NvdmVyJywgJ2NvdmVyJywgJ25vbmUnLCAnbm9uZSddLFxuICAgICAgYmdDbGlwOiAnbm9kZScsXG4gICAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgfTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbnRpdHlQb29sTm9kZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL2dseXBoL2VudGl0eVBvb2xOb2Rlcy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvZ2x5cGgvZW50aXR5UG9vbE5vZGVzLmpzIiwiY29uc3QgYmFzZVNoYXBlcyA9IHJlcXVpcmUoJy4vYmFzZVNoYXBlcycpO1xuY29uc3QgYXV4aWxpYXJ5SXRlbXMgPSByZXF1aXJlKCcuL2F1eGlsaWFyeUl0ZW1zJyk7XG5cbmNvbnN0IHN2Z1N0ciA9IHJlcXVpcmUoJy4uL3V0aWwvc3ZnJykuc3ZnU3RyO1xuY29uc3QgaGFzQ2xvbmVtYXJrZXIgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24nKS5oYXNDbG9uZW1hcmtlcjtcblxuY29uc3QgZWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY29uc3QgcHJvY2Vzc05vZGVzID0ge1xuXG4gIGRpc3NvY2lhdGlvbiAobm9kZSkge1xuICAgIGNvbnN0IHt3OiBudywgaDogbmh9ID0gZWxlbWVudC5kaW1lbnNpb25zKG5vZGUpO1xuXG4gICAgY29uc3QgY2VudGVyWCA9IG53IC8gMjtcbiAgICBjb25zdCBjZW50ZXJZID0gbmggLyAyO1xuICAgIGNvbnN0IG91dGVyUmFkaXVzID0gKE1hdGgubWluKG53LCBuaCkgLSAyKSAvIDI7XG4gICAgY29uc3QgaW5uZXJSYWRpdXMgPSAoTWF0aC5taW4obncsIG5oKSAtIDIpIC8gMztcblxuICAgIGNvbnN0IHN0eWxlTWFwID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcyJylcbiAgICAuc2V0KCdmaWxsJywgJ25vbmUnKTtcblxuICAgIGNvbnN0IGRpc3NvY2lhdGlvblN2ZyA9XG4gICAgYFxuICAgICAgJHtiYXNlU2hhcGVzLmNpcmNsZShjZW50ZXJYLCBjZW50ZXJZLCBvdXRlclJhZGl1cywgc3R5bGVNYXApfVxuICAgICAgJHtiYXNlU2hhcGVzLmNpcmNsZShjZW50ZXJYLCBjZW50ZXJZLCBpbm5lclJhZGl1cywgc3R5bGVNYXApfVxuICAgIGA7XG4gICAgcmV0dXJuIHN2Z1N0cihkaXNzb2NpYXRpb25TdmcsIG53LCBuaCk7XG4gIH0sXG5cbiAgcGhlbm90eXBlIChub2RlKSB7XG4gICAgY29uc3QgYXV4SXRlbVdpZHRoID0gMTAwO1xuICAgIGNvbnN0IGF1eEl0ZW1IZWlnaHQgPSAyMDtcblxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJyk7XG5cbiAgICBjb25zdCBjbG9uZU1hcmtlclN2ZyA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQgLSAzKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0LCAwLCAwLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgYm90dG9tTGluZSA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQsIDAsIDAsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIGNsb25lTWFya2VyU3ZnXSxcbiAgICAgIGJnV2lkdGg6IFsnMTAwJScsICcxMDAlJ10sXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMCUnXSxcbiAgICAgIGJnUG9zWTogWyc1NnB4JywgJzU2cHgnXSxcbiAgICAgIGJnRml0OiBbJ2NvdmVyJywgJ25vbmUnXSxcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxuICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICBib3JkZXJXaWR0aDogMlxuICAgIH07XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvY2Vzc05vZGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NiZ25TdHlsZS9nbHlwaC9wcm9jZXNzTm9kZXMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvc2JnblN0eWxlL2dseXBoL3Byb2Nlc3NOb2Rlcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9