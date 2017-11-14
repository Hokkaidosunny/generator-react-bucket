import Router from 'koa-router';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import React from 'react';
import routes from '../../src/routes';
import { StaticRouter } from 'react-router-dom';
import configStore from '../../src/store/configStore';

const router = new Router();

const ifDev = process.env.NODE_ENV === 'dev';
console.log(process.env.NODE_ENV);

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

  await ctx.render('index.dev', {
    html,
    preloadedState
  });
});

export default router;
