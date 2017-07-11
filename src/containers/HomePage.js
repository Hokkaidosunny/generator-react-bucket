import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchNumbers} from '../actions/fetch.js';

class HomePage extends Component {

  render() {
    return (
      <div className='home-page' onClick={this.props.fetchNumbers}>
        this is home page6
      </div>
    );
  }
}

function hoc(C) {
  function Hoc() {
    return <C />;
  }
  return Hoc;
}

export default hoc(connect(null, {
  fetchNumbers
})(HomePage));
