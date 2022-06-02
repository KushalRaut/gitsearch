import { Input, InputGroup, InputRightElement, Select } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { connect, useDispatch } from 'react-redux'
import { repoSearch } from '../../redux/actions/reposFetchActions/repoFetchActions'
import { searchTextAction } from '../../redux/actions/searchData/searchDataActions'

const SearchHeader = (props) => {
  const text = props.text ? props.text : ''
  const [sortBy, setSortBy] = useState('')
  const [ascDsc, setAscDsc] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(repoSearch(text))
  }

  const handleOrder = (arg) => {
    dispatch(
      repoSearch({
        searchText: text,
        sortBy: arg,
        orderBy: ascDsc,
        per_page: 50,
      })
    )
  }

  const handleSort = (arg) => {
    dispatch(
      repoSearch({
        searchText: text,
        sortBy: sortBy,
        orderBy: arg,
        per_page: 50,
      })
    )
  }
  console.log('sort BY', sortBy)
  console.log('order', ascDsc)
  return (
    <>
      <div className="w-screen h-20 px-5 py-2">
        <div className="w-64">
          <form
            className="flex"
            onSubmit={(e) => {
              handleSubmit(e)
            }}
          >
            <InputGroup>
              <Input
                placeholder="Enter search text"
                value={text}
                onChange={(e) => {
                  dispatch(searchTextAction(e.target.value))
                }}
              />
              <InputRightElement
                children={
                  <button type="submit">
                    <BiSearchAlt />
                  </button>
                }
              />
            </InputGroup>
          </form>
        </div>
        <div className="flex">
          <p>{`Showing Results for ${text}`}</p>
          <div className="flex">
            <Select
              onChange={(e) => {
                setSortBy(e.target.value)
                handleOrder(e.target.value)
              }}
            >
              <option value="">Best Match</option>
              <option value="stars">Stars</option>
              <option value="forks">Forks</option>
              <option value="help-wanted-issues">Help Wanted Issues</option>
              <option value="updated">Updated</option>
            </Select>
            <Select
              onChange={(e) => {
                setAscDsc(e.target.value)
                handleSort(e.target.value)
              }}
            >
              <option value="desc">Decending</option>
              <option value="asc">Ascending</option>
            </Select>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchHeader