import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func
  };

  handleIncrement = () => {
    this.props.increment();
  }

  handledecrement = () => {
    this.props.decrement();
  }

  render() {
    return (
      <div>
        <div>{this.props.counter}</div>
        <div>
          <button className='btn' onClick={this.handleIncrement}> +1 </button>
          <button className='btn' onClick={this.handledecrement}> -1 </button>
        </div>
      </div>
    );
  }
}

export default Counter;
