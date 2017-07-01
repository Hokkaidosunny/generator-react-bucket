import { Observable } from 'rxjs/Observable';
import ActionTypes from '../const/ActionTypes.js';
import fetchApi from '../util/fetchApi.js';

function fetchNumbers(action$) {
  return action$.ofType(ActionTypes.FETCH_NUMBERS)
    .mergeMap(() =>
      Observable.of('FETCH_START')
        .concat(Observable.fromPromise(
            // Promise.reject(3)
            fetchApi({ url: 'http://127.0.0.1:4000/numbers' })
        ))
        .map(val => {
          if (val === 'FETCH_START') {
            return {
              type: val
            };
          } else {
            return {
              type: 'FETCH_SUCCESS',
              payload: val
            };
          }
        })
        .catch(err => Observable.of({
          type: 'FETCH_FAIL',
          error: err
        }))

    );
}

export default fetchNumbers;
