import ActionTypes from '../const/ActionTypes.js';

function asyncIncreasement(action$) {
  return action$.ofType(ActionTypes.ASYNC_INCREASEMENT)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: ActionTypes.INCREASEMENT });
}

export default asyncIncreasement;
