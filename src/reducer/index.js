import { handleActions } from 'redux-actions';
import counterReducers from './counterReducers.js';
import studentsReducers, {studentsDefaultValue} from './studentsReducers.js';

export default {
  counter: handleActions(counterReducers, 0),
  students: handleActions(studentsReducers, studentsDefaultValue)
};
