import React, { Component } from 'react';
import Counter from '../components/Counter.js';
import '../style/counter-page.scss';

class CounterPage extends Component {

  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

export default CounterPage;
