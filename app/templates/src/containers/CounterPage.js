import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counter.js';
import Counter from '../components/Counter.js';
import '../style/counterpage.css';

class CounterPage extends Component {
  static propTypes = {
    counter: PropTypes.number,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func
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
)(CounterPage);
