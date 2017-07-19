import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router';

import CounterPage from './CounterPage.js';
import HomePage from './HomePage.js';
import DragPage from './DragPage.js';
import Demo from './Demo.js';
import Students from './Students.js';
import Translate from './Translate.js';
import RouteTransitionAnimation from '../components/RouteTransitionAnimation.js';
import '../style/app.scss';

class App extends Component {
  render() {
    return (
      <div id='app'>
        <RouteTransitionAnimation
          pathname={this.props.location.pathname}
          action={this.props.history.action}
          >
          <Switch key={this.props.location.key} location={this.props.location}>
            <Route exact path="/" component={HomePage} />
            <Route path="/drag" component={DragPage} />
            <Route path="/count" component={CounterPage} />
            <Route path="/demo" component={Demo} />
            <Route path="/students" component={Students} />
            <Route path="/ts" component={Translate} />
          </Switch>
        </RouteTransitionAnimation>
      </div>
    );
  }
}

export default App;
