import { applyMiddleware, createStore, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducer'
import * as Redux from 'redux'

const isDev = process.env.NODE_ENV === 'development'

/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
 * @param {boolean} options.debug User-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */
export const makeStore = initialState => {
  // enhancers
  const enhancers = []

  // middlewares
  const middlewares: Redux.Middleware[] = [thunkMiddleware]

  isDev &&
    middlewares.push(
      createLogger({
        predicate: () => typeof window !== 'undefined',
        duration: true,
        diff: true
      })
    )

  enhancers.push(applyMiddleware(...middlewares))

  const store = createStore(
    rootReducer,
    initialState,
    isDev ? composeWithDevTools({})(...enhancers) : compose(...enhancers)
  )

  return store
}
