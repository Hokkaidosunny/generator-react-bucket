/**
 * counter page
 */
import * as React from 'react'
import withRedux from 'next-redux-wrapper'
import store from "../store";

@withRedux(store)
class example extends React.Component {
  state = {

  }

  constructor(props) {
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

export default example
