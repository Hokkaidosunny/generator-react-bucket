/**
 * page容器
 */

import * as React from 'react';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import store from '@src/store';
import { compose } from 'redux';

const withPage = Page => {
  class App extends React.Component {
    render() {
      return (
        <React.Fragment>
          <Head>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <link rel="stylesheet" href="/_next/static/style.css" />
          </Head>
          <Page {...this.props} />
        </React.Fragment>
      );
    }
  }

  return App;
};

export default compose(withRedux(store), withPage);
