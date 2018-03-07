/**
 * counter page
 */
import * as React from 'react';
import { compose, Action } from 'redux';
import { connect } from 'react-redux';
import withPage from '@src/component/withPage';
import { increase, decrease } from '@src/action/count';

import '../style/pages/counter.scss';

type Props = {
  count: number;
  increase: () => Action;
  decrease: () => Action;
};

const mapStateToProps = state => ({
  count: state.count
});

const enhance = compose(
  withPage,
  connect(mapStateToProps, {
    increase,
    decrease
  })
);

class Counter extends React.Component<Props, {}> {
  render() {
    const { count, increase, decrease } = this.props;

    return (
      <div className="counter-page">
        <div className="title">counter: {count}</div>
        <button
          className="btn"
          onClick={() => {
            console.log(increase());
          }}
        >
          +
        </button>
        <button className="btn" onClick={decrease}>
          -
        </button>
      </div>
    );
  }
}

export default enhance(Counter);
