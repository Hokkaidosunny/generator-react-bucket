import { applyMiddleware, createStore, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import rootReducer from '../reducer'
import {dealByEnv} from 'util/index'

const ifDev = dealByEnv(ifDev => ifDev)

// enhancers
const enhancers = []

// middlewares
const middlewares = [
  thunkMiddleware,
  apiMiddleware,
]

if (ifDev) {
  middlewares.push(
    createLogger({ duration: true, diff: true})
  )
}

enhancers.push(applyMiddleware(...middlewares))

let store = null

export default (initialState: Object = {}) => {
  if (store) {
    return store
  }

  //createStore
  store = createStore(
    rootReducer,
    initialState,
    ifDev
      ? composeWithDevTools({})(...enhancers)
      : compose(...enhancers)
  )

  return store
}
