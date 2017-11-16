import React, { Component } from 'react';
import Counter from '../component/Counter';

class CounterPage extends Component {

  render() {
    return (
      <div className='counter-page'>
        <Counter />
      </div>
    );
  }
}

export default CounterPage;
