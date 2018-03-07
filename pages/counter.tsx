/**
 * counter page
 */
import * as React from 'react'
import { connect } from 'react-redux'

import '../style/pages/counter.scss'

type Props = {
  counter: number;
}

class Counter extends React.Component<Props, {}> {

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

const mapStateToProps = (state) => ({
  counter: state.counter
})

export default connect(mapStateToProps, null)(Counter)
