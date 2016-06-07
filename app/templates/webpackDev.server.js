var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');
var config = require('./webpack.config');
var port = 8000;
var ip = '127.0.0.1';

var server = new WebpackDevServer(webpack(config), {
  contentBase: "src/",
  publicPath: config.output.publicPath,
  historyApiFallback:true
}).listen(port, ip, function (err) {
  if(err) {
    return console.log(err);
  }
  console.log('Listening at ' + ip + ':' + port);
});