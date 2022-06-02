import * as actionTypes from '../../types'
import axiosInstance from '../../../apis/axiosInstance'
import { formatTableData } from '../../../utility/dataFormatter'
import { searchTextAction } from '../searchData/searchDataActions'

const fetchStart = () => {
  return {
    type: actionTypes.FETCH_DATA_START,
  }
}

const fetchSuccess = (data) => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    repoData: data,
  }
}

const fetchFailed = (message) => {
  return {
    type: actionTypes.FETCH_DATA_FAIL,
    message: message,
  }
}

export const repoSearch = (searchData) => {
  return (dispatch) => {
    dispatch(fetchStart())
    console.log('From Action', searchData.sortBy)

    axiosInstance
      .get('/repositories', {
        params: {
          q: searchData.searchText,
          sort: searchData.sortBy,
          order: searchData.orderBy,
          per_page: searchData.per_page,
        },
      })
      .then((response) => {
        const restructedResponse = formatTableData(response.data.items)
        dispatch(fetchSuccess(restructedResponse))
        dispatch(searchTextAction(searchData.searchText))
      })
      .catch((err) => {
        dispatch(fetchFailed(err.message))
      })
  }
}
