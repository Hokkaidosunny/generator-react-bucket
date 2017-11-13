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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _path = __webpack_require__(6);

var _path2 = _interopRequireDefault(_path);

var _koa = __webpack_require__(7);

var _koa2 = _interopRequireDefault(_koa);

var _cors = __webpack_require__(8);

var _cors2 = _interopRequireDefault(_cors);

var _koaStatic = __webpack_require__(9);

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaBodyparser = __webpack_require__(10);

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaRouter = __webpack_require__(11);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaViews = __webpack_require__(12);

var _koaViews2 = _interopRequireDefault(_koaViews);

var _server = __webpack_require__(13);

var _reactRedux = __webpack_require__(1);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _routes = __webpack_require__(14);

var _routes2 = _interopRequireDefault(_routes);

var _reactRouterDom = __webpack_require__(2);

var _configStore = __webpack_require__(23);

var _configStore2 = _interopRequireDefault(_configStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
// import render from 'koa-ejs';


// import webpack from 'webpack';
// import webpackMiddleware from "webpack-dev-middleware";
// import config from '../dev/webpack.config.dev.babel.js';


const app = new _koa2.default();
const router = new _koaRouter2.default();

app.use((0, _koaViews2.default)('server/template', { extension: 'ejs' }));
// render(app, {
//   root: 'server/template',
//   layout: false,
//   viewExt: 'ejs',
//   cache: false,
//   debug: true
// });

router.get('*', (() => {
  var _ref = _asyncToGenerator(function* (ctx) {
    console.log(ctx.url);

    const store = (0, _configStore2.default)();
    const preloadedState = JSON.stringify({ counter: 3 });
    const context = {};

    const html = (0, _server.renderToString)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(
        _reactRouterDom.StaticRouter,
        {
          location: ctx.url,
          context: context
        },
        (0, _routes2.default)()
      )
    ));

    console.log(html);

    yield ctx.render('index', {
      html,
      preloadedState
    });
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

// 跨域处理
app.use((0, _cors2.default)());

app.use((0, _koaStatic2.default)('dist'));

// bodyparser
app.use((0, _koaBodyparser2.default)());

// app.use(webpackMiddleware(webpack(config)));

// router
app.use(router.routes()).use(router.allowedMethods());

app.listen(8000);

console.log('server is ready on 8000');

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@koa/cors");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("koa-views");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _reactRouter = __webpack_require__(15);

var _CounterPage = __webpack_require__(16);

var _CounterPage2 = _interopRequireDefault(_CounterPage);

var _HomePage = __webpack_require__(20);

var _HomePage2 = _interopRequireDefault(_HomePage);

__webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = () => _react2.default.createElement(
  _reactRouter.Switch,
  null,
  _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _HomePage2.default }),
  _react2.default.createElement(_reactRouterDom.Route, { path: '/count', component: _CounterPage2.default })
);

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Counter = __webpack_require__(17);

var _Counter2 = _interopRequireDefault(_Counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CounterPage = class CounterPage extends _react.Component {

  render() {
    return _react2.default.createElement(
      'div',
      { className: 'counter-page' },
      _react2.default.createElement(_Counter2.default, null)
    );
  }
};
exports.default = CounterPage;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(1);

var _counter = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

let Counter = (_dec = (0, _reactRedux.connect)(mapStateToProps, {
  asyncIncreasement: _counter.asyncIncreasement,
  decreasement: _counter.decreasement,
  increasement: _counter.increasement
}), _dec(_class = (_temp = _class2 = class Counter extends _react.Component {

  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        null,
        this.props.counter
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { className: 'btn', onClick: this.props.increasement },
          ' +1 '
        ),
        _react2.default.createElement(
          'button',
          { className: 'btn', onClick: this.props.decreasement },
          ' -1 '
        )
      )
    );
  }
}, _class2.propTypes = {
  counter: _propTypes2.default.number,
  asyncIncreasement: _propTypes2.default.func,
  decreasement: _propTypes2.default.func
}, _temp)) || _class);
exports.default = Counter;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decreasement = exports.asyncIncreasement = exports.increasement = undefined;

var _reduxActions = __webpack_require__(3);

const increasement = exports.increasement = (0, _reduxActions.createAction)('INCREASEMENT');

const asyncIncreasement = exports.asyncIncreasement = (0, _reduxActions.createAction)('ASYNC_INCREASEMENT');

const decreasement = exports.decreasement = (0, _reduxActions.createAction)('DECREASEMENT');

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(2);

__webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let HomePage = (_dec = (0, _reactRedux.connect)(null, {}), _dec(_class = class HomePage extends _react.Component {

  render() {
    return _react2.default.createElement(
      'div',
      { className: 'home-page' },
      _react2.default.createElement(
        'div',
        null,
        'this is home',
        _react2.default.createElement(
          'a',
          { onClick: this.props.fetchNumbers },
          'click me'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: 'count' },
          'count page'
        )
      )
    );
  }
}) || _class);
exports.default = HomePage;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(4);

var _reduxLogger = __webpack_require__(24);

var _reducer = __webpack_require__(25);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//use chrome extension
const composeEnhancers = _redux.compose;

//enhancers
//log
const enhancers = [];

//middlewares
const middlewares = [
  // routerMiddleware(history)
];

//action logger
if (process.env.ifOpenActionLogger) {
  middlewares.push((0, _reduxLogger.createLogger)({ duration: true, diff: true }));
}

enhancers.push((0, _redux.applyMiddleware)(...middlewares));

exports.default = (initialState = {}) => {
  //createStore
  const store = (0, _redux.createStore)(_reducer2.default, initialState, composeEnhancers(...enhancers));

  return store;
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(4);

var _reduxActions = __webpack_require__(3);

var _counterReducers = __webpack_require__(26);

var _counterReducers2 = _interopRequireDefault(_counterReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  counter: (0, _reduxActions.handleActions)(_counterReducers2.default, 0)
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'INCREASEMENT': (state, action) => state + 1,
  'DECREASEMENT': (state, action) => state - 1
};

/***/ })
/******/ ]);