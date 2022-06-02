import * as actionTypes from '../../types'

export const searchTextAction = (searchText) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SEARCH_DATA_SET,
      textInput: searchText,
    })
  }
}
