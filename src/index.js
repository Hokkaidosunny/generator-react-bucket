//official
import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
// import createHistory from 'history/createBrowserHistory';
import { AppContainer } from 'react-hot-loader';
import routes from './routes';
import configStore from './store/configStore';
import {BrowserRouter} from 'react-router-dom';

// 通过服务端注入的全局变量得到初始 state
const preloadedState = JSON.parse(window.__INITIAL_STATE__) || {};

function renderApp() {
  ReactDOM.render(
    <Provider store={configStore(preloadedState)}>
      <BrowserRouter>
        {routes()}
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
}

renderApp();


//react hot loader
if (module.hot) {
  //module.hot.accept('./container/App.js', () => renderApp());
}
