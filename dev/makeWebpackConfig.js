import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import getBabelrc from './getBabelrc';

const include = [
  path.join(__dirname, '../src'),
];

//entry
function getEntry({ifMock}) {
  const entry = ['babel-polyfill', 'isomorphic-fetch'];

  if (ifMock) {
    entry.push(path.join(__dirname, '../src/mock/index.js'));
  }

  entry.push(path.join(__dirname, '../src/index.js'));

  return {
    'js/main': entry
  };
}

//output
function getOutput({isDev}) {
  return {
    path: path.join(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: isDev ? '[name].[hash].js' : '[name].[chunkhash].js', //chunkhash 生产使用，缓存vendor文件
    chunkFilename: isDev ? '[name].[hash].js' : '[name].[chunkhash].js',
    sourceMapFilename: '[file].map'
  };
}

//rules
function getRules({isDev}) {
  const rules = [
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(scss|sass)$/,
      use: isDev
        ? ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        : ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
    }, {
      test: /\.(gif|jpg|jpeg|png|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: 'imgs/[name].[hash].[ext]',
          limit: 50000,
        },
      }
    }, {
      test: /\.(woff|eot|ttf)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: 'fonts/[name].[hash].[ext]'
        },
      }
    }, {
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      include,
      options: getBabelrc({ifDevServer: false})
    }
  ];

  return rules;
}

//plugins
function getPlugins(config) {
  const {isDev, isPro} = config;

  const envs = {};
  for(const key in config) {
    envs[`process.env.${key}`] = JSON.stringify(config[key]);
  }

  let plugins = [
    new webpack.DefinePlugin(envs),
    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: 'src/index.html',
      inject: true,
      chunks: ['js/vendor', 'js/main'],
      chunksSortMode: function (a, b) { //按顺序插入js文件
        const orders = ['js/vendor', 'js/main'];
        return orders.indexOf(a.names[0]) - orders.indexOf(b.names[0]);
      },
    }),
    //提取库代码
    new webpack.optimize.CommonsChunkPlugin({
      name: "js/vendor",
      minChunks: function(module) {
        //去掉sass
        if(module.resource && (/^.*\.(css|scss|sass)$/).test(module.resource)) {
          return false;
        }
        //来自node_modules的文件统一打进vendor
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }),
  ];

  if (isDev) {
    plugins = plugins.concat([
      //文件变化时，输出文件名，会增加文件大小
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]);
  }

  if (isPro) {
    plugins = plugins.concat([
      new webpack.HashedModuleIdsPlugin(),
      //提出css
      new ExtractTextPlugin({
        filename: getPath => getPath('css/[name].[contenthash].css').replace('css/js', 'css'),
        allChunks: true
      }),
      //压缩
      new UglifyJSPlugin({
        sourceMap: true,
        compress: {
          warnings: false,  //buid 的时候不要报warnings
          drop_console: true  //no console
        }
      })
    ]);
  }

  return plugins;
}

//source-map
function getSourceMap({isDev}) {
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
    plugins: getPlugins(config)
  };
}

module.exports = makeWebpackConfig;
