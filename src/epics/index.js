import { combineEpics } from 'redux-observable';
import asyncIncreasement from './asyncIncreasement.js';

export default combineEpics(
  asyncIncreasement
);
