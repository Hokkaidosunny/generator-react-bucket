var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var port = 8000;
var ip = '127.0.0.1';

config.entry.app.unshift("webpack-dev-server/client?http://localhost:8000/", "webpack/hot/dev-server");

new WebpackDevServer(webpack(config), {
  contentBase: "src/",  //server base path
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  hot: true  //hot reload
}).listen(port, ip, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at ' + ip + ':' + port);
});
