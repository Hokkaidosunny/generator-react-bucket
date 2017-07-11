console.log(`
  isDev: ${process.env.isDev}
  isPro: ${process.env.isPro}
  ifMock: ${process.env.ifMock}
  ifOpenActionLogger: ${process.env.ifOpenActionLogger}
`);
//official
import 'react-hot-loader/patch';
import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import {Route} from 'react-router';
import {createLogger} from 'redux-logger'; //log
import { createEpicMiddleware } from 'redux-observable';
import { AppContainer } from 'react-hot-loader';
//custom
import reducers from './reducers/index.js';
import App from './containers/App.js';
import rootEpic from './epics/index.js';

//history
const history = createHistory();

//use chrome extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//redux-observable epics
const epicMiddleware = createEpicMiddleware(rootEpic);

//enhancers
const enhancers = [];

//middlewares
const middlewares = [
  epicMiddleware,
  routerMiddleware(history)
];

//action logger
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


function renderApp() {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route path='/' component={App} />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
}

renderApp();


//react hot loader
if (module.hot) {
  module.hot.accept('./containers/App.js', () => renderApp());
}
