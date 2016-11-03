import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App.js';
import HomePage from './containers/HomePage.js';
import CounterPage from './containers/CounterPage.js';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute components={{page: HomePage}} />
    <Route path="counter" components={{page: CounterPage}} />
  </Route>
);

export default routes;
