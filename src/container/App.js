import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router';
import CounterPage from './CounterPage';
import HomePage from './HomePage';
import '../style/app.scss';

class App extends Component {
  render() {
    return (
      <div id='app'>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/count" component={CounterPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
