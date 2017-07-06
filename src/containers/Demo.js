import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sub2 extends React.Component {
  static contextTypes = {
    rootParentName: PropTypes.string
  };

  render() {
    return (
      <div>
        {this.context.rootParentName}
      </div>
    );
  }
}

class Sub1 extends React.Component {
  render() {
    return (
      <div>
        <Sub2></Sub2>
      </div>
    );
  }
}

function Inputs() {
  return (
    <div>
      <input defaultValue="Bob" type="text"/>
      <input defaultChecked type="checkbox"/>
      <input defaultChecked type="radio"/>
    </div>
  );
}

class Demo extends Component {
  static childContextTypes = {
    rootParentName: PropTypes.string
  };

  constructor() {
    super();
    this.state = {counter: 0};
  }

  getChildContext() {
    return {
      rootParentName: 'Demo'
    };
  }

  handleClick1 = () => {
    this.setState({counter: this.state.counter + 1});
    this.setState({counter: this.state.counter + 1});
  }

  handleClick2 = () => {
    this.setState((preState) => ({
      counter: preState.counter + 1
    }));
    this.setState((preState) => ({
      counter: preState.counter + 1
    }));
  }

  handleClick3 = () => {
    this.setState({counter: this.state.counter + 1}, () => {
      this.setState({counter: this.state.counter + 1});
    });
  }

  render() {
    return (
      <div className='demo'>
        <div style={styles.sectionStyle}>
          <div>counter: {this.state.counter}</div>
          <button onClick={this.handleClick1}> +2 </button>
          <button onClick={this.handleClick2}> +2 </button>
          <button onClick={this.handleClick3}> +2 </button>
        </div>
        <div style={styles.sectionStyle}>
          <Inputs />
        </div>
        <div style={styles.sectionStyle}>
          <Sub1></Sub1>
        </div>
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

const styles = {
  sectionStyle: {
    height: '300px'
  }
};
