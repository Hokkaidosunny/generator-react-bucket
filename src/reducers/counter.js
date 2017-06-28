import ActionTypes from '../const/ActionTypes.js';

export default function counter(state = 0, action) {
  switch (action.type) {
    case ActionTypes.INCREASEMENT:
      return state + 1;
    case ActionTypes.DECREASEMENT:
      return state - 1;
    default:
      return state;
  }
}
