console.log(`
  isDev: ${process.env.isDev}
  isPro: ${process.env.isPro}
  ifOpenActionLogger: ${process.env.ifOpenActionLogger}
`);
//official
import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
// import thunk from 'redux-thunk';  //use it for async action
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import {Route} from 'react-router';
import {createLogger} from 'redux-logger'; //log
import { createEpicMiddleware } from 'redux-observable';
//custom
import reducers from './reducers/index.js';
import App from './containers/App.js';
import rootEpic from './epics/index.js';

//history
const history = createHistory();

//use chrome extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware(rootEpic);

//enhancers
const enhancers = [];

//middlewares
const middlewares = [
  epicMiddleware,
  routerMiddleware(history)
];
if (process.env.ifOpenActionLogger) {
  middlewares.push(createLogger({ duration: true, diff: true}));
}

enhancers.push(applyMiddleware(...middlewares));

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
