import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router';
import { RouteTransition } from 'react-router-transition';

import CounterPage from './CounterPage.js';
import HomePage from './HomePage.js';
import DragPage from './DragPage.js';
import Demo from './Demo.js';
import Students from './Students.js';
import Translate from './Translate.js';
import '../style/app.scss';


const pushStateStyles = {
  atEnter: {translateX: 100 },
  atLeave: {translateX: -100 },
  atActive: {translateX: 0 },
  mapStyles: styles => ({ transform: `translateX(${styles.translateX}%)` })
};

const popStateStyles = {
  atEnter: {translateX: -100 },
  atLeave: {translateX: 100 },
  atActive: {translateX: 0 },
  mapStyles: styles => ({ transform: `translateX(${styles.translateX}%)` })
};


class App extends Component {
  render() {
    console.log(this.props.history.action);
    const styles = this.props.history.action === 'POP'
      ? popStateStyles
      : pushStateStyles;

    return (
      <div id='app'>
        <RouteTransition
          className='transition-wrapper'
          pathname={this.props.location.pathname}
          {...styles}
          >
          <Switch key={this.props.location.key} location={this.props.location}>
            <Route exact path="/" component={HomePage} />
            <Route path="/drag" component={DragPage} />
            <Route path="/count" component={CounterPage} />
            <Route path="/demo" component={Demo} />
            <Route path="/students" component={Students} />
            <Route path="/ts" component={Translate} />
          </Switch>
        </RouteTransition>
      </div>
    );
  }
}

export default App;
