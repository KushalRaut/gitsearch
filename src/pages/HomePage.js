import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { repoSearch } from '../redux/actions/reposFetchActions/repoFetchActions'
import { useNavigate } from 'react-router-dom'

const HomePage = (props) => {
  const [searchText, setSearchText] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(props)

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(repoSearch({ searchText: searchText }))
    if (!props.error) {
      navigate('/results')
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form
        className=""
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <input
          type="text"
          className="border-2 border-indigo-500 h-8"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        />
        <button type="submit" className="border-2 border-indigo-500 h-8">
          Search
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.fetchedRepo.loading,
    error: state.fetchedRepo.error,
  }
}

export default connect(mapStateToProps)(HomePage)
