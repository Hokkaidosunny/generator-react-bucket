import ActionTypes from '../const/ActionTypes.js';
import _ from 'lodash';

export const studentsDefaultValue = [
  {
    id: 1,
    sex: 'male',
    name: 'tom'
  },
  {
    id: 2,
    sex: 'female',
    name: 'jesi'
  }
];

export default {
  [ActionTypes.ADD_STUDENT]: (state, action) => {
    return [...state, action.payload];
  },

  [ActionTypes.DELETE_STUDENT]: (state, action) => {
    const id = action.payload.id;
    _.remove(state, (item) => (item.id === id));
    return [...state];
  }
};
