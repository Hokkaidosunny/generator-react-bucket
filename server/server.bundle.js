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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

module.exports = require("koa-router");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
module.exports = __webpack_require__(8);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _path = __webpack_require__(9);

var _path2 = _interopRequireDefault(_path);

var _koa = __webpack_require__(10);

var _koa2 = _interopRequireDefault(_koa);

var _cors = __webpack_require__(11);

var _cors2 = _interopRequireDefault(_cors);

var _koaStatic = __webpack_require__(12);

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaBodyparser = __webpack_require__(13);

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaViews = __webpack_require__(14);

var _koaViews2 = _interopRequireDefault(_koaViews);

var _router = __webpack_require__(15);

var _router2 = _interopRequireDefault(_router);

var _webpackDevMiddleware = __webpack_require__(32);

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpack = __webpack_require__(31);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackConfigDevBabel = __webpack_require__(33);

var _webpackConfigDevBabel2 = _interopRequireDefault(_webpackConfigDevBabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa2.default();

// 模板引擎
app.use((0, _koaViews2.default)(_path2.default.join(__dirname, './template'), { extension: 'ejs' }));

// 跨域处理
app.use((0, _cors2.default)());

// 静态文件
app.use((0, _koaStatic2.default)(_path2.default.join(__dirname, '../dist')));

// bodyparser
app.use((0, _koaBodyparser2.default)());

// dev server
app.use((0, _webpackDevMiddleware2.default)((0, _webpack2.default)(_webpackConfigDevBabel2.default)));

// router
// app
//   .use(router.routes())
//   .use(router.allowedMethods());

app.listen(8000);

console.log('server is ready on 8000');

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@koa/cors");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("koa-views");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = __webpack_require__(3);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _prerender = __webpack_require__(16);

var _prerender2 = _interopRequireDefault(_prerender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _koaRouter2.default();

router.use('', _prerender2.default.routes(), _prerender2.default.allowedMethods());

exports.default = router;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = __webpack_require__(3);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _server = __webpack_require__(17);

var _reactRedux = __webpack_require__(1);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _routes = __webpack_require__(18);

var _routes2 = _interopRequireDefault(_routes);

var _reactRouterDom = __webpack_require__(2);

var _configStore = __webpack_require__(27);

var _configStore2 = _interopRequireDefault(_configStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const router = new _koaRouter2.default();

const ifDev = process.env.NODE_ENV === 'dev';
console.log(process.env.NODE_ENV);

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

    yield ctx.render('index.dev', {
      html,
      preloadedState
    });
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

exports.default = router;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _reactRouter = __webpack_require__(19);

var _CounterPage = __webpack_require__(20);

var _CounterPage2 = _interopRequireDefault(_CounterPage);

var _HomePage = __webpack_require__(24);

var _HomePage2 = _interopRequireDefault(_HomePage);

__webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = () => _react2.default.createElement(
  _reactRouter.Switch,
  null,
  _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _HomePage2.default }),
  _react2.default.createElement(_reactRouterDom.Route, { path: '/count', component: _CounterPage2.default })
);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Counter = __webpack_require__(21);

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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(22);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(1);

var _counter = __webpack_require__(23);

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
/* 22 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decreasement = exports.asyncIncreasement = exports.increasement = undefined;

var _reduxActions = __webpack_require__(4);

const increasement = exports.increasement = (0, _reduxActions.createAction)('INCREASEMENT');

const asyncIncreasement = exports.asyncIncreasement = (0, _reduxActions.createAction)('ASYNC_INCREASEMENT');

const decreasement = exports.decreasement = (0, _reduxActions.createAction)('DECREASEMENT');

/***/ }),
/* 24 */
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

__webpack_require__(25);

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
/* 25 */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(5);

var _reduxLogger = __webpack_require__(28);

var _reducer = __webpack_require__(29);

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
/* 28 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(5);

var _reduxActions = __webpack_require__(4);

var _counterReducers = __webpack_require__(30);

var _counterReducers2 = _interopRequireDefault(_counterReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  counter: (0, _reduxActions.handleActions)(_counterReducers2.default, 0)
});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'INCREASEMENT': (state, action) => state + 1,
  'DECREASEMENT': (state, action) => state - 1
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _makeWebpackConfig = __webpack_require__(34);

var _makeWebpackConfig2 = _interopRequireDefault(_makeWebpackConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _makeWebpackConfig2.default)({
  port: 4000,
  isDev: true,
  isPro: false,
  ifMock: true,
  ifOpenActionLogger: true //是否开启action logger
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _path = __webpack_require__(9);

var _path2 = _interopRequireDefault(_path);

var _webpack = __webpack_require__(31);

var _webpack2 = _interopRequireDefault(_webpack);

var _htmlWebpackPlugin = __webpack_require__(35);

var _htmlWebpackPlugin2 = _interopRequireDefault(_htmlWebpackPlugin);

var _uglifyjsWebpackPlugin = __webpack_require__(36);

var _uglifyjsWebpackPlugin2 = _interopRequireDefault(_uglifyjsWebpackPlugin);

var _inlineChunkManifestHtmlWebpackPlugin = __webpack_require__(37);

var _inlineChunkManifestHtmlWebpackPlugin2 = _interopRequireDefault(_inlineChunkManifestHtmlWebpackPlugin);

var _extractTextWebpackPlugin = __webpack_require__(38);

var _extractTextWebpackPlugin2 = _interopRequireDefault(_extractTextWebpackPlugin);

var _autodllWebpackPlugin = __webpack_require__(39);

var _autodllWebpackPlugin2 = _interopRequireDefault(_autodllWebpackPlugin);

var _happypack = __webpack_require__(40);

var _happypack2 = _interopRequireDefault(_happypack);

var _getBabelrc = __webpack_require__(41);

var _getBabelrc2 = _interopRequireDefault(_getBabelrc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//entry
function getEntry({ ifMock, isDev, port = 4000 }) {
  const entry = ['babel-polyfill', 'isomorphic-fetch'];
  if (isDev) {
    entry.push(`webpack-dev-server/client?http://0.0.0.0:${port}`);
    entry.push('webpack/hot/only-dev-server');
  }
  if (ifMock) {
    entry.push(_path2.default.join(__dirname, '../src/mock/index.js'));
  }
  entry.push(_path2.default.join(__dirname, '../src/index.js'));

  return {
    'js/main': entry
  };
}

//output
function getOutput({ isDev }) {
  return {
    path: _path2.default.join(__dirname, '../dist'),
    publicPath: '/',
    filename: isDev ? '[name].[hash].js' : '[name].[chunkhash].js', //chunkhash 生产使用，缓存vendor文件
    chunkFilename: isDev ? '[name].[hash].js' : '[name].[chunkhash].js',
    sourceMapFilename: '[file].map'
  };
}

//rules
function getRules({ isDev }) {
  const rules = [{
    test: /\.css$/,
    loader: 'style-loader!css-loader'
  }, {
    test: /\.(scss|sass)$/,
    use: isDev ? ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] : _extractTextWebpackPlugin2.default.extract({
      fallback: 'style-loader',
      use: ['css-loader', 'postcss-loader', 'sass-loader']
    })
  }, {
    test: /\.(gif|jpg|jpeg|png|svg)$/,
    use: {
      loader: 'url-loader',
      options: {
        name: 'imgs/[name].[hash].[ext]',
        limit: 50000
      }
    }
  }, {
    test: /\.(woff|eot|ttf)$/,
    use: {
      loader: 'url-loader',
      options: {
        name: 'fonts/[name].[hash].[ext]'
      }
    }
  }];

  if (isDev) {
    rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'happypack/loader'
    });
  } else {
    rules.push({
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      options: (0, _getBabelrc2.default)({ ifDevServer: false })
    });
  }

  return rules;
}

//plugins
function getPlugins(config) {
  const { isDev, isPro } = config;

  const envs = {};
  for (const key in config) {
    envs[`process.env.${key}`] = JSON.stringify(config[key]);
  }

  let plugins = [new _webpack2.default.DefinePlugin(envs)];

  if (isDev) {
    plugins = plugins.concat([new _htmlWebpackPlugin2.default({
      title: 'index',
      filename: 'index.html',
      template: 'src/index.html',
      inject: true
    }),
    //文件变化时，输出文件名，会增加文件大小
    new _webpack2.default.NamedModulesPlugin(),
    //生成dll文件
    new _autodllWebpackPlugin2.default({
      inject: true, // will inject the DLL bundles to index.html
      filename: '[name].[hash].js',
      entry: {
        vendor: __webpack_require__(42)
      }
    }),
    //HappyPack 打包
    new _happypack2.default({
      loaders: [{
        path: 'babel-loader',
        query: (0, _getBabelrc2.default)({ isDev })
      }],
      threads: 4
    })]);
  }

  if (isPro) {
    plugins = plugins.concat([new _htmlWebpackPlugin2.default({
      title: 'index',
      filename: 'index.html',
      template: 'src/index.html',
      inject: true,
      chunks: ['js/runtime', 'js/vendor', 'js/main'],
      chunksSortMode: function (a, b) {
        //按顺序插入js文件
        const orders = ['js/runtime', 'js/vendor', 'js/main'];
        return orders.indexOf(a.names[0]) - orders.indexOf(b.names[0]);
      }
    }), new _inlineChunkManifestHtmlWebpackPlugin2.default(), new _webpack2.default.HashedModuleIdsPlugin(),
    //提取库代码
    new _webpack2.default.optimize.CommonsChunkPlugin({
      name: "js/vendor",
      minChunks: function (module) {
        //去掉sass
        if (module.resource && /^.*\.(css|scss|sass)$/.test(module.resource)) {
          return false;
        }
        //来自node_modules的文件统一打进vendor
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }),
    //提前webpack运行时代码
    new _webpack2.default.optimize.CommonsChunkPlugin({
      name: "js/runtime",
      minChunks: Infinity
    }),
    //提出css
    new _extractTextWebpackPlugin2.default({
      filename: getPath => getPath('css/[name].[contenthash].css').replace('css/js', 'css'),
      allChunks: true
    }),
    //压缩
    new _uglifyjsWebpackPlugin2.default({
      sourceMap: true,
      compress: {
        warnings: false, //buid 的时候不要报warnings
        drop_console: true //no console
      }
    })]);
  }
  return plugins;
}

//source-map
function getSourceMap({ isDev }) {
  return isDev ? 'inline-source-map' : 'source-map';
}

/**
 * [makeWebpackConfig description]
 * @param  {[type]} config [description]
 * @return {[type]}        [description]
 */
function makeWebpackConfig(config) {
  return {
    entry: getEntry(config),
    output: getOutput(config),
    module: {
      rules: getRules(config)
    },
    devtool: getSourceMap(config),
    plugins: getPlugins(config),
    devServer: {
      publicPath: getOutput(config).publicPath,
      historyApiFallback: true, //任意的 404 响应都可能需要被替代为 index.html
      contentBase: _path2.default.join(__dirname, "../dist"),
      port: config.port || 4000
    }
  };
}

module.exports = makeWebpackConfig;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("html-webpack-plugin");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("uglifyjs-webpack-plugin");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("inline-chunk-manifest-html-webpack-plugin");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("extract-text-webpack-plugin");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("autodll-webpack-plugin");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("happypack");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function ({ ifDevServer = true }) {
  const rc = {
    babelrc: false,
    presets: [["env", {
      "targets": {
        "ios": 8,
        "android": "4.4"
      },
      "modules": false,
      "useBuiltIns": true
    }], 'react', 'stage-0'],
    plugins: ['transform-decorators-legacy', 'lodash']
  };

  if (ifDevServer) {
    rc.plugins.push('react-hot-loader/babel');
  }

  return rc;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ["babel-polyfill", "history", "immutable", "isomorphic-fetch", "lodash", "prop-types", "react", "react-dom", "react-redux", "react-router", "react-router-dom", "react-router-redux", "redux", "redux-actions", "redux-logger", "reselect"];

/***/ })
/******/ ]);