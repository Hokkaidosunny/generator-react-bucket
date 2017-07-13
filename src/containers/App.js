import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router';

import CounterPage from './CounterPage.js';
import HomePage from './HomePage.js';
import DragPage from './DragPage.js';
import Demo from './Demo.js';
import Students from './Students.js';
import Translate from './Translate.js';
import '../style/preset.scss';

class App extends Component {
  render() {
    return (
      <div id='app'>
        <Route exact path="/" component={HomePage} />
        <Route path="/drag" component={DragPage} />
        <Route path="/count" component={CounterPage} />
        <Route path="/demo" component={Demo} />
        <Route path="/students" component={Students} />
        <Route path="/ts" component={Translate} />
      </div>
    );
  }
}

export default App;
