import { combineReducers } from 'redux'
import repoDataReducer from './reposFetchReducers/reposFetchReducers'
import searchTextReducer from './searchTextReducers/searchTextReducer'

export default combineReducers({
  fetchedRepo: repoDataReducer,
  searchData: searchTextReducer,
})
