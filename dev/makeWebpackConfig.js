import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

//entry
function getEntry({ifMock}) {
  const entry = [];
  if (ifMock) {
    entry.push(path.join(__dirname, '../src/mock/index.js'));
  }
  entry.push(path.join(__dirname, '../src/index.js'));
  return entry;
}

//output
function getOutput() {
  return {
    path: path.join(__dirname, '../dist/'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    sourceMapFilename: '[file].map'
  };
}

//rules
function getRules() {
  return [
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(scss|sass)$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }]
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.(gif|jpg|jpeg|png|woff|svg|eot|ttf)$/,
      loader: 'url-loader?limit=50000'
    }
  ];
}

//plugins
function getPlugins({isDev, isPro, ifMock, ifOpenActionLogger}) {
  const plugins = [
    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: 'src/index.html',
      inject: true
    }),
    new webpack.DefinePlugin({
      'process.env.isDev': JSON.stringify(isDev),
      'process.env.isPro': JSON.stringify(isPro),
      'process.env.ifMock': JSON.stringify(ifMock),
      'process.env.ifOpenActionLogger': JSON.stringify(ifOpenActionLogger),
    })
  ];

  if (isPro) {
    plugins.push(
      new UglifyJSPlugin({
        sourceMap: true,
        compress: {
          warnings: false,  //buid 的时候不要报warnings
          drop_console: true  //no console
        }
      })
    );
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
    output: getOutput(),
    module: {
      rules: getRules()
    },
    devtool: getSourceMap(config),
    plugins: getPlugins(config),
    devServer: {
      historyApiFallback: true, //任意的 404 响应都可能需要被替代为 index.html
      contentBase: path.join(__dirname, "../dist"),
      port: 4000
    }
  };
}

module.exports = makeWebpackConfig;
