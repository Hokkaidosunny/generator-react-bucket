import Router from 'koa-router';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import React from 'react';
import App from '../../src/routes';
import { StaticRouter } from 'react-router-dom';
import configStore from '../../src/store/configStore';

const router = new Router();

router.get('*', async (ctx) => {
  console.log(ctx.url);
  const assetsByChunkName = ctx.state.webpackStats.toJson().assetsByChunkName;

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

  await ctx.render('index.dev', {
    html,
    preloadedState: JSON.stringify(store.getState()),
    vendor: assetsByChunkName['js/vendor'],
    main: assetsByChunkName['js/main']
  });
});

export default router;
