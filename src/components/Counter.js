import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {asyncIncreasement, decreasement} from '../actions/counter.js';

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number,
    asyncIncreasement: PropTypes.func,
    decreasement: PropTypes.func
  };

  render() {
    return (
      <div>
        <div>{this.props.counter}</div>
        <div>
          <button className='btn' onClick={this.props.asyncIncreasement}> +1 </button>
          <button className='btn' onClick={this.props.decreasement}> -1 </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(mapStateToProps, {
  asyncIncreasement,
  decreasement
})(Counter);
