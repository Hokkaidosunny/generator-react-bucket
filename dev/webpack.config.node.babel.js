import path from 'path';
import nodeExternals from 'webpack-node-externals';
import getBabelrc from './getBabelrc';
import webpack from 'webpack';

module.exports = {
  entry: [
    'babel-polyfill',
    'isomorphic-fetch',
    path.join(__dirname, '../server/index.js')
  ],

  target: 'node',

  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'server.bundle.js'
  },

  // keep node_module paths out of the bundle
  externals: [nodeExternals()],

  context: __dirname,

  node: {
    __filename: false,
    __dirname: false
  },

  // watch: true,
  //
  // watchOptions: {
  //   aggregateTimeout: 300,
  //   poll: 1000,
  //   ignored: /node_modules/
  // },

  module: {
    rules: [
      {
        test: /\.(scss)$/,          //node端不能 require('xx.css')，会报错
        use: ['null-loader']
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: getBabelrc('node')
      }
    ]
  },

  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  //   })
  // ]
};
