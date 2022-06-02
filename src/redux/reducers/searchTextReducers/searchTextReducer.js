import * as actionTypes from '../../types'
import { updateObject } from '../../../utility/updateObject'

const initialSate = {
  text: null,
}

const reducer = (state = initialSate, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_DATA_SET:
      return updateObject(state, { text: action.textInput })
    default:
      return state
  }
}

export default reducer
