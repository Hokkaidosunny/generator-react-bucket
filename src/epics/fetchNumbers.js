import { Observable } from 'rxjs/Observable';
import ActionTypes from '../const/ActionTypes.js';
import fetchApi from '../util/fetchApi.js';

function fetchNumbersStart() {
  return {
    type: 'FETCH_NUMBERS_START'
  };
}

function fetchNumbersSuccess(res) {
  return {
    type: 'FETCH_NUMBERS_SUCCESS',
    payload: res
  };
}

function fetchNumbersFail(error) {
  return {
    type: 'FETCH_NUMBERS_FAIL',
    error
  };
}

function fetchNumbers(action$) {
  return action$.ofType(ActionTypes.FETCH_NUMBERS)
    .mergeMap(() =>
      Observable.concat(
        Observable.of(fetchNumbersStart()),
        Observable.fromPromise(fetchApi({ url: 'http://127.0.0.1:4000/numbers' }))
          .mergeMap(res => {
            return Observable.concat(
              Observable.of({type: '1'}),
              Observable.of({type: '2'}),
              Observable.of({type: '3'}),
            );
          })
      )
      .catch(err => Observable.of(fetchNumbersFail(err)))
    );
}

export default fetchNumbers;
