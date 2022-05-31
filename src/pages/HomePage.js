import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { repoSearch } from '../redux/actions/repoSearchActions'

const HomePage = () => {
  const [searchText, setSearchText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(repoSearch(searchText))
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default HomePage
