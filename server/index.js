import path from 'path';
import Koa from 'koa';
import cors from '@koa/cors';
import serve from 'koa-static';
import bodyparser from 'koa-bodyparser';
import views from 'koa-views';
import router from './router';
import webpackDevServer from './webpack-dev-server';

const app = new Koa();
const appRoot = path.join(__dirname, '..');
const isDev = process.env.NODE_ENV === 'development';

console.log(process.env.NODE_ENV);
// 模板引擎
app.use(views(path.join(appRoot, 'server/template'), { extension: 'ejs' }));

// 跨域处理
app.use(cors());

// bodyparser
app.use(bodyparser());

// 静态文件
app.use(serve(path.join(appRoot, 'dist/public')));

// dev server
isDev && app.use(webpackDevServer());

// router
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8000);

console.log('server is ready on 8000');
