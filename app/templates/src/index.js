import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';  //use it for async action
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Router, hashHistory } from 'react-router';
import reducers from './reducers/index.js';
import routes from './routes.js';

/** how it works
  React
    ↓
  react-redux
    ↓
  redux → applyMiddleware(thunk)
    ↓
  react-router-redux
    ↓
  history
    ↓
  react-router
*/

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const store = compose(
  applyMiddleware(thunk)
)(createStore)(reducer);

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        {routes}
      </Router>
    </div>
  </Provider>,
  document.getElementById('root'));
