import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import {BrowserRouter} from 'react-router-dom';

// 通过服务端注入的全局变量得到初始 state
const preloadedState =  window.__INITIAL_STATE__
  ? JSON.parse(window.__INITIAL_STATE__)
  : {};

const store = configStore(preloadedState);

function renderApp() {
  const App = require('./routes').default;

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
}

renderApp();

if (module.hot) {
  module.hot.accept('./routes', () => renderApp());
}
