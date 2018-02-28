import {handleActions} from 'redux-actions'

export default handleActions({
  'INCREASE': state => state + 1,
  'DECREASE': state => state - 1,
})
