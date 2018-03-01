/**
 * counter page
 */
import * as React from 'react'
import withRedux from 'next-redux-wrapper'
import store from "../store"

export interface CounterProps {

}

@withRedux(store)
class Counter extends React.Component<CounterProps, {}> {
  state = {

  }

  constructor(props: CounterProps) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        counter:
      </div>
    )
  }
}

export default Counter
