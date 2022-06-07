import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import axiosInstance from '../apis/axiosInstance'
import SearchHeader from '../components/SearchHeader/SeachHeader'
import MarkdownPreview from '@uiw/react-markdown-preview'
import RepoDetailCard from '../components/Cards/RepoDetailCard'
import AuthorDetailCard from '../components/Cards/AuthorDetailCard'
import RepoDescription from '../components/Cards/RepoDescription'
import Footer from '../components/Footer/Footer'

const Repository = (props) => {
  const { searchText } = props
  const [repoDetail, setRepoDetail] = useState({})
  const [rdmeContent, setRdmeContent] = useState()
  const [userDetail, setUserDetail] = useState()

  const { author, repo } = useParams()

  useEffect(() => {
    axiosInstance
      .get(`/repos/${author}/${repo}`)
      .then((response) => {
        setRepoDetail(response.data)
      })
      .catch((err) => {
        console.log(err)
      })

    axiosInstance
      .get(`/users/${author}`)
      .then((response) => {
        setUserDetail(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    axios
      .get(
        `https://raw.githubusercontent.com/${author}/${repo}/${repoDetail.default_branch}/README.md`
      )
      .then((response) => {
        setRdmeContent(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [repoDetail])

  console.log(repoDetail)
  console.log(rdmeContent)
  console.log(userDetail)

  return (
    <>
      <SearchHeader text={searchText} />
      <div className="container">
        <div className="flex flex-row justify-center gap-5 flex-wrap px-2">
          <RepoDetailCard repoDetail={repoDetail} />
          <AuthorDetailCard userDetail={userDetail} />
          <RepoDescription descp={repoDetail?.description} />
        </div>
        <div className="Rdme_Container">
          <p className="text-2xl font-semibold font-Poppins">Readme.md</p>
          <div className="px-4 py-3 border-2 border-gray-400 rounded-lg">
            <div data-color-mode="light">
              <MarkdownPreview source={rdmeContent} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.fetchedRepo.loading,
    repoData: state.fetchedRepo.repoData,
    error: state.fetchedRepo.loading,
    searchText: state.searchData.text,
  }
}

export default connect(mapStateToProps)(Repository)
