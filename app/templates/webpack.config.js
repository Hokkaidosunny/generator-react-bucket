var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/assets/'),
    filename: 'bundle.js',
    publicPath: "/assets/",
  },
  module: {
    loaders: [
	  {
	  	test: /\.css$/,
	  	loader: 'style!css'
	  }, {
	  	test: /\.scss$/,
	  	loaders: ["style", "css", "sass"]
	  }, {
	  	test: /\.js$/,
	  	exclude: /node_modules/,
	  	loader: "babel-loader"
	  }, {
	  	test: /\.(gif|jpg|png|woff|svg|eot|ttf)$/,
	  	loader: 'url-loader?limit=50000'
	  }
    ]
  }
}
