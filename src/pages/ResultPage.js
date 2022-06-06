import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { MDBDataTable } from 'mdbreact'
import Spinner from '../components/LoadingSpinner/Spinner'
import { tableColumn } from '../data'
import SeachHeader from '../components/SearchHeader/SeachHeader'
import { GoStar, GoRepoForked, GoEye, GoMarkGithub } from 'react-icons/go'
import { Link, useNavigate } from 'react-router-dom'

const ResultPage = (props) => {
  const { repoData, loading, searchText, error } = props
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && !searchText) {
      navigate('/')
    }
  }, [searchText])
  console.log(searchText)

  const getData = () => {
    const data = {
      columns: tableColumn,
      rows: [],
    }

    repoData?.forEach((repo, index) => {
      data.rows.push({
        sn: index + 1,
        name: repo.name,
        author: repo.author,
        description: repo.description,
        lastUpdate: repo.lastUpdate,
        stats: (
          <>
            <div className="flex gap-2">
              <button className="icons-style bg-success">
                {repo.stars} <GoStar />
              </button>
              <button className="icons-style bg-info">
                {repo.forks} <GoRepoForked />
              </button>
              <button className="icons-style bg-secondary">
                {repo.watchers} <GoEye />
              </button>
            </div>
          </>
        ),
        action: (
          <>
            <Link to={`/repo/${repo.author}/${repo.name}`}>
              <button className="flex gap-1 text-white p-1 items-center justify-center rounded-md font-semibold bg-teal">
                View Repo
                <GoMarkGithub />
              </button>
            </Link>
          </>
        ),
      })
    })

    return data
  }
  console.log(getData())

  return (
    <>
      <SeachHeader text={searchText} />
      {loading ? (
        <Spinner />
      ) : (
        <div className="px-5 py-8">
          <MDBDataTable
            striped
            bordered
            small
            entriesOptions={[5, 25, 50]}
            data={getData()}
            responsive
          />
        </div>
      )}
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

export default connect(mapStateToProps)(ResultPage)
