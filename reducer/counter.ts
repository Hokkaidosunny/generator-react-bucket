import {handleActions} from 'redux-actions'

export default handleActions({
  'INCREASE': (state: number) => state + 1,
  'DECREASE': (state: number) => state - 1,
}, 0)
