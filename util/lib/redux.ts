/**
 * redux helper
 */

// 将payload对象和state对象merge成新对象
const mergeState = (
  state,
  action
) => ({
  ...state,
  ...action.payload
})

// 将payload push 到state数组中
const pushState = (
  state,
  action
) => [
  ...state,
  action.payload
]

// 直接返回payload
const replaceState = (
  state,
  action
) => action.payload

// 返回空对象
const toEmptyObject = () => ({})

// 返回空数组
const toEmptyArray = () => ([])

// 返回null
const toNull = () => null

// 发出请求时的reducer
const requestReducer = (
  state,
  action
) => {
  const { error, payload } = action

  // fetch出错
  if (error) {
    return {
      ...state,
      ...payload,
      isFetching: false
    }
  } else {
    return {
      ...state,
      ...payload,
      isFetching: true
    }
  }
}

// 请求成功时的reducer
const successReducer = (
  state,
  action
) => {
  const { payload } = action

  return {
    ...state,
    ...payload,
    isFetching: false
  }
}

// 请求失败时的reducer
const failureReducer = (
  state,
  action
) => {
  const { payload } = action

  return {
    ...state,
    ...payload,
    isFetching: false
  }
}

function createApiReducers(actionType: string) {
  return {
    [`${actionType}_REQUEST`]: requestReducer,
    [`${actionType}_SUCCESS`]: successReducer,
    [`${actionType}_FAILURE`]: failureReducer,
  }
}

function createApiActionTypes(actionType: string) {
  return [
    `${actionType}_REQUEST`,
    `${actionType}_SUCCESS`,
    `${actionType}_FAILURE`,
  ]
}

export {
  mergeState
}
