import Router from 'koa-router';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import React from 'react';
import App from '../../client/routes';
import { StaticRouter } from 'react-router-dom';
import configStore from '../../client/store/configStore';

const router = new Router();
const isDev = process.env.NODE_ENV === 'development';

router.get('*', async (ctx) => {
  console.log(ctx.url);

  const store = configStore({counter: 3});
  const context = {};

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter
        location={ctx.url}
        context={context}
        >
        <App />
      </StaticRouter>
    </Provider>
  );

  if (isDev) {
    const assetsByChunkName = ctx.state.webpackStats.toJson().assetsByChunkName;
    console.log(assetsByChunkName);

    await ctx.render('index.dev', {
      html,
      preloadedState: JSON.stringify(store.getState()),
      vendor: assetsByChunkName['js/vendor'],
      main: assetsByChunkName['js/main']
    });
  } else {
    await ctx.render('index.pro', {
      html,
      preloadedState: JSON.stringify(store.getState())
    });
  }
});

export default router;
