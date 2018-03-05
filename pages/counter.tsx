/**
 * counter page
 */
import * as React from 'react'
import { connect } from 'react-redux'
// import { State } from '@src/reducer'

import '../style/pages/counter.scss'

export interface CounterProps {
  counter: number;
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

@connect(mapStateToProps, null)
class Counter extends React.Component<CounterProps, void> {

  render() {
    const {counter} = this.props

    return (
      <div className='counter-page'>
        <div className='title'>counter: {counter}</div>
        <button className='btn'>+</button>
        <button className='btn'>-</button>
      </div>
    )
  }
}

export default Counter
