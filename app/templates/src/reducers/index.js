import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';
import counter from './counter.js';

const rootReducer = combineReducers({
  counter,
  router//combine with router
});

export default rootReducer;
