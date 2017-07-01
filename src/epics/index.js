import { combineEpics } from 'redux-observable';
import asyncIncreasement from './asyncIncreasement.js';
import fetchNumbers from './fetchNumbers.js';

export default combineEpics(
  asyncIncreasement,
  fetchNumbers
);
