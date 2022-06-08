import { Input, InputGroup, InputRightElement, Select } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { repoSearch } from '../../redux/actions/reposFetchActions/repoFetchActions'
import { searchTextAction } from '../../redux/actions/searchData/searchDataActions'
import { useNavigate, useLocation } from 'react-router-dom'
import './searchHeader.css'
import { FaGithubSquare, FaSearch } from 'react-icons/fa'
import { BiSearchAlt } from 'react-icons/bi'
import useWindowSize from '../../hooks/useWindowSize'

const SearchHeader = (props) => {
  const text = props.text ? props.text : ''
  const [sortBy, setSortBy] = useState('')
  const [ascDsc, setAscDsc] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { width } = useWindowSize()

  const { pathname } = useLocation()

  const result = pathname.includes('/repo/')

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(repoSearch(text))
    navigate('/results')
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
  return (
    <>
      <div className="w-screen">
        <div className="Main_Header">
          <div className="container">
            <button
              className="Logo_Container font-Vollkorn tracking-wide"
              onClick={() => {
                navigate('/')
              }}
            >
              <FaGithubSquare />
              gitSearch
            </button>

            <form
              className="Search_Bar"
              onSubmit={(e) => {
                handleSubmit(e)
              }}
            >
              <input
                className="px-3 font-Montserrat w-[90%]"
                placeholder="Enter search text"
                value={text}
                onChange={(e) => {
                  dispatch(searchTextAction(e.target.value))
                }}
                required
              />

              <button type="submit" className="text-2xl px-3 border-l-2">
                <BiSearchAlt />
              </button>
            </form>
          </div>
        </div>
        <div className="container flex justify-between items-center flex-wrap py-3">
          {!result && (
            <>
              <p className="font-Montserrat text-lg font-medium">{`Showing Results for ${text}`}</p>
              <div className="flex justify-center items-center gap-3">
                <p className="font-Poppins text-lg whitespace-nowrap px-2 font-semibold">
                  Sort By:
                </p>
                <Select
                  className="border-2"
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
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default SearchHeader
