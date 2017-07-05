import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Demo extends Component {
  constructor() {
    super();
    this.state = {counter: 0};
  }

  handleClick = () => {
    this.setState({counter: this.state.counter + 1}, () => {
      this.setState({counter: this.state.counter + 1});
    });
    //console.log(this.state.counter);
    // this.setState((preState) => ({
    //   counter: preState.counter + 1
    // }), () => {
    //   console.log(this.state.counter);
    // });

    // this.setState({counter: this.state.counter + 1}, () => {
    //   console.log(this.state.counter);
    // });
    //console.log(this.state.counter);
  }

  // handleClick = () => {
  //   this.setState((preState) => ({
  //     counter: preState.counter + 1
  //   }));
  //   this.setState((preState) => ({
  //     counter: preState.counter + 1
  //   }));
  // }

  render() {
    return (
      <div className='demo'>
        <div>counter: {this.state.counter}</div>
        <button onClick={this.handleClick}> +1 </button>
      </div>
    );
  }
}

function hoc(C) {
  return () => {
    return <C />;
  };
}

export default hoc(Demo);
