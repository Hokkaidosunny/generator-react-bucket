import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchNumbers} from '../actions/fetch.js';


@connect(null, {
  fetchNumbers
})
class HomePage extends Component {

  render() {
    return (
      <div className='home-page'>
        <div>
          this is home
          <a onClick={this.props.fetchNumbers}>click me</a>
        </div>
      </div>
    );
  }
}

export default HomePage;
