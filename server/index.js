import path from 'path';
import Koa from 'koa';
import cors from '@koa/cors';
import serve from 'koa-static';
import bodyparser from 'koa-bodyparser';
import Router from 'koa-router';
// import render from 'koa-ejs';
import views from 'koa-views';

import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import React from 'react';
import routes from '../src/routes';
import { StaticRouter } from 'react-router-dom';
import configStore from '../src/store/configStore';
// import webpack from 'webpack';
// import webpackMiddleware from "webpack-dev-middleware";
// import config from '../dev/webpack.config.dev.babel.js';


const app = new Koa();
const router = new Router();

app.use(views('server/template', { extension: 'ejs' }));
// render(app, {
//   root: 'server/template',
//   layout: false,
//   viewExt: 'ejs',
//   cache: false,
//   debug: true
// });

router.get('*', async (ctx) => {
  console.log(ctx.url);

  const store = configStore();
  const preloadedState = JSON.stringify({counter: 3});
  const context = {};

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter
        location={ctx.url}
        context={context}
        >
        {routes()}
      </StaticRouter>
    </Provider>
  );

  console.log(html);

  await ctx.render('index', {
    html,
    preloadedState
  });
});

// 跨域处理
app.use(cors());

app.use(serve('dist'));

// bodyparser
app.use(bodyparser());

// app.use(webpackMiddleware(webpack(config)));

// router
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8000);

console.log('server is ready on 8000');
