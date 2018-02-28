import { applyMiddleware, createStore, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import rootReducer from '../reducer'

// enhancers
const enhancers = []

// middlewares
const middlewares = [
  thunkMiddleware,
  apiMiddleware,
  createLogger({
    duration: true,
    diff: true
  })
]

enhancers.push(applyMiddleware(...middlewares))

let store = null

export default (initialState = {}) => {
  if (store) {
    return store
  }

  //createStore
  store = createStore(
    rootReducer,
    initialState,
    compose(...enhancers)
  )

  return store
}
