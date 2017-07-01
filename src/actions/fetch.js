import { createAction } from 'redux-actions';
import ActionTypes from '../const/ActionTypes.js';

export const fetchNumbers = createAction(ActionTypes.FETCH_NUMBERS);
