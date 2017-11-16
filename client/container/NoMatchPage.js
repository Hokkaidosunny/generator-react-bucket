import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class NoMatchPage extends Component {

  render() {
    return (
      <div className='nomatch-page'>
        no match
      </div>
    );
  }
}

export default NoMatchPage;
