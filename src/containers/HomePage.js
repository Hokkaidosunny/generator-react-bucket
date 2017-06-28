import React, { Component } from 'react';
import Dragme from '../components/Dragme.js';
import '../style/home-page.scss';

// import { Link } from 'react-router';

class HomePage extends Component {

  render() {
    return (
      <div className='home-page'>
        
        <div>
          {/* <Link to='/counter'>go to counter page</Link> */}
        </div>
        <Dragme text={'me'}/>
      </div>
    );
  }
}

export default HomePage;
