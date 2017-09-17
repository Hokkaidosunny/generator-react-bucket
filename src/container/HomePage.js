import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../style/home-page.scss';

@connect(null, {})
class HomePage extends Component {

  render() {
    return (
      <div className='home-page'>
        <div>
          this is home
          <a onClick={this.props.fetchNumbers}>click me</a>
          <Link to='count'>count page</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
