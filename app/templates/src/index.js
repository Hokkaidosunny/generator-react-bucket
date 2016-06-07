import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore.js';//get store creator
import Root from './containers/Root.js';//get root 

let store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'));