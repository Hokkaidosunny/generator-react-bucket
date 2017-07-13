import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchNumbers} from '../actions/fetch.js';


@connect(null, {
  fetchNumbers
})
class HomePage extends Component {

  render() {
    return (
      <div className='home-page' onClick={this.props.fetchNumbers}>
        <div>
          this is home
        </div>
      </div>
    );
  }
}

export default HomePage;
