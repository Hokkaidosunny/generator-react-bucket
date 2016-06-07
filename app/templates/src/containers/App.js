import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/count.js';
import Counter from '../components/Counter.js';

class App extends Component {
  render() {
    return (
      <div>
        <Counter {...this.props} />
      </div>
    );
  }
}

// bind state's property to App component's props
function mapStateToProps(state) {
  return {
  	counter: state.counter
  };
}

// bind actions to App component's props
function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);