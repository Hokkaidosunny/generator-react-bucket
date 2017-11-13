import { applyMiddleware, compose, createStore } from 'redux';
import {createLogger} from 'redux-logger'; //log
import rootReducer from '../reducer';

//use chrome extension
const composeEnhancers = compose;

//enhancers
const enhancers = [];

//middlewares
const middlewares = [
  // routerMiddleware(history)
];

//action logger
if (process.env.ifOpenActionLogger) {
  middlewares.push(createLogger({ duration: true, diff: true}));
}

enhancers.push(applyMiddleware(...middlewares));

export default (initialState = {}) => {
  //createStore
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers),
  );

  return store;
};
