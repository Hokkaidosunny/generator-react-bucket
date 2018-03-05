/**
 * page容器
 */

import * as React from 'react'
import Head from 'next/head'
import withRedux from 'next-redux-wrapper'
import store from '@src/store'

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
      <React.Fragment>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        {this.props.children}
      </React.Fragment>
    )
  }
}

export default example
