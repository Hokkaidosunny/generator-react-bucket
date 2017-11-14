import path from 'path';
import Koa from 'koa';
import cors from '@koa/cors';
import serve from 'koa-static';
import bodyparser from 'koa-bodyparser';
import views from 'koa-views';
import router from './router';
import koaWebpack from 'koa-webpack';
import webpack from 'webpack';
import config from '../dev/webpack.config.dev.babel.js';

const app = new Koa();

const compiler = webpack(config);
const koaMiddlewareInstance = koaWebpack({
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
    publicPath: "/dist/",
    index: "index.html",
    stats: {
      colors: true
    },
    reporter: null,
    serverSideRender: true,
  }
});

// 模板引擎
app.use(views(path.join(__dirname, './template'), { extension: 'ejs' }));

// 跨域处理
app.use(cors());

// bodyparser
app.use(bodyparser());

// 静态文件
app.use(serve(path.join(__dirname, '../dist')));

// dev server
app.use(koaMiddlewareInstance);

// hot

// router
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8000);

console.log('server is ready on 8000');
