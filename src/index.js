
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';  //use it for async action
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import {Route} from 'react-router';
import {createLogger} from 'redux-logger'; //log

import reducers from './reducers/index.js';
import App from './containers/App.js';

console.log(`
  isDev: ${process.env.isDev}
  isPro: ${process.env.isPro}
  ifOpenActionLogger: ${process.env.ifOpenActionLogger}
`);

//history
const history = createHistory();

//use chrome extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//enhancers
const enhancers = [];
enhancers.push(
  process.env.ifOpenActionLogger === 'true'
    ? applyMiddleware(thunk, routerMiddleware(history), createLogger({ duration: true, diff: true}))
    : applyMiddleware(thunk, routerMiddleware(history))
);

//createStore
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  composeEnhancers(...enhancers)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path='/' component={App} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
