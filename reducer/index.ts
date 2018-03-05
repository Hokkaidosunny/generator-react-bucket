/**
 * rootReducer
 */

import {combineReducers} from 'redux'
import counter from './counter'

export interface State {
  counter: number
}

export default combineReducers({
  counter
})
