import { createAction } from 'redux-actions';

export const increasement = createAction('INCREASEMENT');

export const asyncIncreasement = createAction('ASYNC_INCREASEMENT');

export const decreasement = createAction('DECREASEMENT');
