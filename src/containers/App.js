import React, { Component, PropTypes } from 'react';
import '../style/app.scss';

class App extends Component {
  static propTypes = {
    page: PropTypes.element
  };

  render() {
    return (
      <div id='app'>
        {this.props.page}
      </div>
    );
  }
}

export default App;
