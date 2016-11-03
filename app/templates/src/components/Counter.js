import React, { Component, PropTypes } from 'react';

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func
  };

  handleIncrement = () => {
    this.props.onIncrement();
  }

  handledecrement = () => {
    this.props.onDecrement();
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
