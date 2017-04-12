const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV === 'dev';
const isPro = !isDev;

function getPlugins() {
  const plugins = [];
  plugins.push(
    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: 'src/index.html',
      inject: true
    })
  );

  plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  );

  if (isPro) {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: false,  //no warnings
          drop_console: true  //no console
        }
      })
    );
  }
  return plugins;
}


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    sourceMapFilename: '[file].map'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.(scss|sass)$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }, {
        test: /\.(gif|jpg|jpeg|png|woff|svg|eot|ttf)$/,
        loader: 'url-loader?limit=50000'
      }
    ]
  },
  devtool: isDev ? 'cheap-module-source-map' : 'source-map',
  plugins: getPlugins()
};
