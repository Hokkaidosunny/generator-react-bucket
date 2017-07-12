import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getMaleStudents} from '../selectors/getMaleStudents.js';
import {addStudent} from '../actions/students.js';


class Students extends Component {

  addStudent = () => {
    this.props.addStudent({
      id: 2,
      sex: 'male',
      name: 'xxx'
    });
  }

  render() {
    return (
      <div>
        <div>male students</div>
        <div>
          {
            this.props.maleStudents.map((item, index) => {
              return (
                <div key={index}>{item.id} {item.sex} {item.name}</div>
              );
            })
          }
        </div>
        <div onClick={this.addStudent}>添加学生</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    maleStudents: getMaleStudents(state)
  };
}

export default connect(mapStateToProps, {
  addStudent
})(Students);
