import path from 'path';
import Koa from 'koa';
import cors from '@koa/cors';
import serve from 'koa-static';
import bodyparser from 'koa-bodyparser';
import views from 'koa-views';
import router from './router';
import webpackMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import config from '../dev/webpack.config.dev.babel.js';

const app = new Koa();

// 模板引擎
app.use(views(path.join(__dirname, './template'), { extension: 'ejs' }));

// 跨域处理
app.use(cors());

// 静态文件
app.use(serve(path.join(__dirname, '../dist')));

// bodyparser
app.use(bodyparser());

// dev server
app.use(webpackMiddleware(webpack(config)));

// router
// app
//   .use(router.routes())
//   .use(router.allowedMethods());

app.listen(8000);

console.log('server is ready on 8000');
