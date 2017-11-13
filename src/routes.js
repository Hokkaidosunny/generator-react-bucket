import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import CounterPage from './container/CounterPage';
import HomePage from './container/HomePage';
import './style/app.scss';

export default () => (
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route path="/count" component={CounterPage}/>
  </Switch>
);
