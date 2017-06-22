
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';  //use it for async action
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import {Route} from 'react-router';
import {createLogger} from 'redux-logger'; //log

import reducers from './reducers/index.js';
import App from './containers/App.js';

//history
const history = createHistory();

//use chrome extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//enhancers
const enhancers = [];
enhancers.push(applyMiddleware(
  thunk,
  routerMiddleware(history),
  createLogger({ duration: true, diff: true}),
));

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
