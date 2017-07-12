import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import CounterPage from './CounterPage.js';
import HomePage from './HomePage.js';
import DragPage from './DragPage.js';
import Demo from './Demo.js';
import Students from './Students.js';
import '../style/app.scss';

class App extends Component {
  render() {
    return (
      <div id='app'>
        <Route exact path="/" component={HomePage} />
        <Route path="/drag" component={DragPage} />
        <Route path="/count" component={CounterPage} />
        <Route path="/demo" component={Demo} />
        <Route path="/students" component={Students} />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
