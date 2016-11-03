var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin= require('html-webpack-plugin');

//dev
var config = {
  debug: true,
  watch: true,
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: 'src/index.html',
      inject: true
    })
  ]
};

if (process.env.NODE_ENV === 'pro') { //pro
  config.debug = false;
  config.watch = false;
  config.devtool = 'cheap-module-source-map';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,  //no warnings
      drop_console: true  //no console
    }
  }));
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/build/'),
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }, {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)$/,
        loader: 'url-loader?limit=50000'
      }
    ]
  },
  debug: config.debug,
  watch: config.watch,
  plugins: config.plugins,
  devtool: config.devtool
};
