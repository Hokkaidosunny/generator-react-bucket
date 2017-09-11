import ActionTypes from '../const/ActionTypes.js';

export default {
  [ActionTypes.INCREASEMENT]: (state, action) => (state + 1),
  [ActionTypes.DECREASEMENT]: (state, action) => (state - 1)
}
