import { combineReducers } from 'redux'
import repoDataReducer from './repoSearchReducers'

export default combineReducers({
  fetchedRepo: repoDataReducer,
})
