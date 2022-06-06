import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import axiosInstance from '../apis/axiosInstance'
import SearchHeader from '../components/SearchHeader/SeachHeader'
import MarkdownPreview from '@uiw/react-markdown-preview'

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
        <div className="flex flex-row sm:flex-wrap">
          <div className="w-full md:w-1/2 p-4">
            <div className="border-2">
              <p>Repository Name:{repoDetail?.name}</p>
              <p>No. of Stars:{repoDetail?.stargazers_count}</p>
              <p>No. of Forks:{repoDetail?.forks}</p>
              <p>Main Branch:{repoDetail?.default_branch}</p>
              <p>Repository Size:{repoDetail?.size / 1024}Mb</p>
              <p>No. of Open Issues:{repoDetail?.open_issues_count}</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="border-2">
              <div className="flex">
                <img
                  src={userDetail?.avatar_url}
                  alt="no-img"
                  width={80}
                  height={80}
                />
                <p>{userDetail?.name}</p>
              </div>
              <p>Followers:{userDetail?.followers}</p>
              <p>Blog:{userDetail?.blog}</p>
              <p>Created At:{userDetail?.created_at?.substring(0, 10)}</p>
              <p>Public Repos:{userDetail?.public_repos}</p>
              <p>Bio:{userDetail?.bio}</p>
            </div>
          </div>
        </div>
        <div>
          <p>Repository Description</p>
          <p>{repoDetail?.description}</p>
        </div>
        <div>
          <p>Readme File</p>
          <div className='p-5'>
            <div data-color-mode="light">
              <MarkdownPreview source={rdmeContent} />
            </div>
          </div>
        </div>
      </div>
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
