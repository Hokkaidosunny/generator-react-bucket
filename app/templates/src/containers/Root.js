import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

class Root extends Component {
  static displayName = 'Root';

  static propTypes = {
    store: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <ReduxRouter />
        </div>
      </Provider>
    );
  }
}

export default Root;
