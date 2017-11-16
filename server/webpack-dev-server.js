import koaWebpack from 'koa-webpack';
import webpack from 'webpack';
import config from '../dev/webpack.config.dev.babel.js';

export default () => {
  const compiler = webpack(config);
  const webpackDevServer = koaWebpack({
    compiler,
    config,
    dev: {
      noInfo: false,
      quiet: false,
      lazy: false,
      watchOptions: {
        aggregateTimeout: 300,
        poll: true
      },
      publicPath: "/",
      index: "index.html",
      stats: {
        colors: true
      },
      reporter: null,
      serverSideRender: true,
    }
  });

  return webpackDevServer;
};
