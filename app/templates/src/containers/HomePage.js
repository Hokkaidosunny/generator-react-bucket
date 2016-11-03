import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {

  render() {
    return (
      <div>
        this is home
        <div>
          <Link to='/counter'>go to counter page</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
