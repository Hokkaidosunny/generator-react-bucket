/**
 * counter page
 */
import * as React from 'react'
import * as Redux from 'redux'
import { connect } from 'react-redux'
import { increase, decrease } from '@root/action/count'

import '../style/counter.scss'

interface Props {
  count: number
  increase: () => Redux.Action
  decrease: () => Redux.Action
}

const mapStateToProps = state => ({
  count: state.count
})

class Counter extends React.Component<Props, {}> {
  render() {
    const { count, increase, decrease } = this.props

    return (
      <div className="counter-page">
        <div className="title">counter: {count}</div>
        <button className="btn" onClick={increase}>
          +
        </button>
        <button className="btn" onClick={decrease}>
          -
        </button>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  {
    increase,
    decrease
  }
)(Counter)
