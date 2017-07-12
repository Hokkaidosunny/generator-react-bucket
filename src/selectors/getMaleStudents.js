import { createSelector } from 'reselect';

const getStudents = (state) => state.students;

export const getMaleStudents = createSelector(
  [getStudents],
  (students) => {
    return students.filter(student => student.sex === 'male');
  }
);
