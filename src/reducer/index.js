import { handleActions } from 'redux-actions';
import counterReducers from './counterReducers.js';

export default {
  counter: handleActions(counterReducers, 0),
};
