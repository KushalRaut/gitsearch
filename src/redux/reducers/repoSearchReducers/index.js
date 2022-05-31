import * as actionTypes from '../../types'
import { updateObject } from '../../../utility/updateObject'

const initialSate = {
  loading: false,
  repoData: null,
  error: null,
}

const reducer = (state = initialSate, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_START:
      return fetchStart(state, action)
    case actionTypes.FETCH_DATA_SUCCESS:
      return fetchSuccess(state, action)
    case actionTypes.FETCH_DATA_FAIL:
      return fetchFailed(state, action)
    default:
      return state
  }
}

const fetchStart = (state, action) => {
  return updateObject(state, { loading: true })
}

const fetchSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    repoData: action.repoData,
  })
}

const fetchFailed = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.message,
  })
}

export default reducer
