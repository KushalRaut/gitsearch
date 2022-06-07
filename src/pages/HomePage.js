import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { repoSearch } from '../redux/actions/reposFetchActions/repoFetchActions'
import { useNavigate } from 'react-router-dom'
import { FcAbout } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import useWindowSize from '../hooks/useWindowSize'
import { getDate } from '../utility/getDate'

const HomePage = (props) => {
  const [searchText, setSearchText] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const size = useWindowSize()

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(repoSearch({ searchText: searchText }))
    if (!props.error) {
      navigate('/results')
    }
  }

  return (
    <div className="w-screen h-screen">
      <div className="bg-main">
        <div className="container h-[10%] p-3 flex flex-wrap justify-between items-center">
          <button className="home-btns">
            <FcAbout />
            About
          </button>
          <p className="home-text font-Montserrat lg:text-2xl md:text-xl text-lg font-bold tracking-wider p-1">
            {getDate()}
          </p>
          <button className="home-btns">
            <BsGithub />
            Dev Profile
          </button>
        </div>
      </div>
      <form
        className="w-full h-[90%] flex flex-col justify-center items-center"
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <h1 className="font-Vollkorn md:text-8xl text-6xl font-bold tracking-wider mt-[-7rem]">
          <span className="text-main">git</span>
          <span className="text-[#979797]">Search</span>
        </h1>
        <div className="flex">
          <input
            type="text"
            className="w-[16rem] xs:[20rem] sm:w-[23rem] md:w-[30rem] lg:w-[40rem] md:h-10 sm:h-8 h-6 md:px-7 px-3 sm:py-[28px] py-[24px] my-3 text-[#979797] font-Montserrat font-semibold md:text-xl rounded-[2.5rem] bg-[#F5F5F5] z-10"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
            placeholder="Search repositories on Github..."
          />
          <button
            type="submit"
            className="w-[7rem] sm:w-[12rem] md:w-[11rem] lg:w-[15rem] md:h-10 sm:h-8 h-6 lg:px-8 px-2 sm:py-[28px] py-[24px] bg-[#00a3ff33] my-3 ml-[-2rem] rounded-r-[2.5rem] font-Montserrat font-semibold md:text-xl flex justify-center items-center text-main tracking-wider hover:text-white hover:bg-main"
          >
            {size.width < 635 ? (
              <span className="text-xl">
                <FaSearch />
              </span>
            ) : (
              'SEARCH'
            )}
          </button>
        </div>
        <p className="w-full md:text-2xl text-xl text-center uppercase my-3 px-3 font-Montserrat font-semibold text-main tracking-wider">
          Browse from Over 128+ Million Public Repositories On Github
        </p>
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
