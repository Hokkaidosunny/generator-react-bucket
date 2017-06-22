import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counter.js';
import { incrementWaitOneSeconds } from '../actions/asyncActions.js';
import Counter from '../components/Counter.js';
import '../style/counterpage.scss';

class CounterPage extends Component {
  static propTypes = {
    counter: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    incrementWaitOneSeconds: PropTypes.func,
  };

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

export default connect(mapStateToProps, {
  increment,
  decrement,
  incrementWaitOneSeconds
})(CounterPage);
