import {combineReducers} from 'redux';
import { handleActions } from 'redux-actions';
import counterReducers from './counterReducers.js';

export default combineReducers({
  counter: handleActions(counterReducers, 0),
});
