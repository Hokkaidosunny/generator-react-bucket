import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import ChunkManifestPlugin from 'chunk-manifest-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import AutoDllPlugin from 'autodll-webpack-plugin';
import HappyPack from 'happypack';
import getBabelrc from './getBabelrc.js';

//entry
function getEntry({ifMock, isDev, port = 4000}) {
  const entry = ['babel-polyfill'];
  if (isDev) {
    entry.push(`webpack-dev-server/client?http://0.0.0.0:${port}`);
    entry.push('webpack/hot/only-dev-server');
  }
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
    publicPath: '/',
    filename: isDev ? '[name].[hash].js' : '[name].[chunkhash].js', //chunkhash 生产使用，缓存vendor文件
    chunkFilename: isDev ? '[name].[hash].js' : '[name].[chunkhash].js',
    sourceMapFilename: '[file].map'
  };
}

//rules
function getRules({isDev}) {
  return [
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
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: isDev ? 'happypack/loader' : 'babel-loader'
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
    }
  ];
}

//plugins
function getPlugins({isDev, isPro, ifMock, ifOpenActionLogger}) {
  let plugins = [
    new webpack.DefinePlugin({
      'process.env.isDev': JSON.stringify(isDev),
      'process.env.isPro': JSON.stringify(isPro),
      'process.env.ifMock': JSON.stringify(ifMock),
      'process.env.ifOpenActionLogger': JSON.stringify(ifOpenActionLogger),
    })
  ];

  if (isDev) {
    plugins = plugins.concat([
      new HtmlWebpackPlugin({
        title: 'index',
        filename: 'index.html',
        template: 'src/index.html',
        inject: true
      }),
      //文件变化时，输出文件名，会增加文件大小
      new webpack.NamedModulesPlugin(),
      //生成dll文件
      new AutoDllPlugin({
        inject: true, // will inject the DLL bundles to index.html
        filename: '[name].[hash].js',
        entry: {
          vendor: require('./vendorModules.js')
        }
      }),
      //HappyPack 打包
      new HappyPack({
        loaders: [{
          path: 'babel-loader',
          query: getBabelrc({isDev})
        }],
        threads: 4
      })
    ]);
  }

  if (isPro) {
    plugins = plugins.concat([
      new HtmlWebpackPlugin({
        title: 'index',
        filename: 'index.html',
        template: 'src/index.html',
        inject: true,
        chunks: ['js/manifest', 'js/vendor', 'js/main'],
        chunksSortMode: function (a, b) { //按顺序插入js文件
          const orders = ['js/manifest', 'js/vendor', 'js/main'];
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
      //提前webpack运行时代码
      new webpack.optimize.CommonsChunkPlugin({
        name: "js/manifest",
        minChunks: Infinity
      }),
      //提取manifest
      new ChunkManifestPlugin({
        filename: 'manifest.json',
        manifestVariable: 'webpackManifest',
        inlineManifest: true
      }),
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
    plugins: getPlugins(config),
    devServer: {
      publicPath: getOutput(config).publicPath,
      historyApiFallback: true, //任意的 404 响应都可能需要被替代为 index.html
      contentBase: path.join(__dirname, "../dist"),
      port: config.port || 4000
    }
  };
}

module.exports = makeWebpackConfig;
