import { createAction } from 'redux-actions';
import ActionTypes from '../const/ActionTypes.js';

export const increasement = createAction(ActionTypes.INCREASEMENT);

export const asyncIncreasement = createAction(ActionTypes.ASYNC_INCREASEMENT);

export const decreasement = createAction(ActionTypes.DECREASEMENT);
