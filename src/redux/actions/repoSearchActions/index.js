import * as actionTypes from '../../types'
import axiosInstance from '../../../apis/axiosInstance'
import { formatTableData } from '../../../utility/dataFormatter'

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

export const repoSearch = (searchText) => {
  return (dispatch) => {
    dispatch(fetchStart())

    axiosInstance
      .get(`/repositories?q=${searchText}`)
      .then((response) => {
        const restructedResponse = formatTableData(response.data.items)
        dispatch(fetchSuccess(restructedResponse))
      })
      .catch((err) => {
        dispatch(fetchFailed(err.message))
      })
  }
}
