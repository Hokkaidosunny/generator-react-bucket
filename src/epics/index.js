import { combineEpics } from 'redux-observable';

function asyncIncrement(action$) {
  return action$.ofType('ASYNC_INCREMENT')
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: 'INCREMENT' });
}

export default combineEpics(
  asyncIncrement
);
