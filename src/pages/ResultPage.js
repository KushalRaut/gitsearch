import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { MDBDataTable } from 'mdbreact'
import Spinner from '../components/LoadingSpinner/Spinner'
import { useNavigate } from 'react-router-dom'
import { tableData } from '../data'
import SeachHeader from '../components/SearchHeader/SeachHeader'

const ResultPage = (props) => {
  const { repoData, loading, searchText, error } = props
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && !searchText) {
      navigate('/')
    }
  }, [searchText])

  const data = { ...tableData, rows: repoData }

  console.log(searchText)

  return (
    <>
      <SeachHeader text={searchText} />
      {loading ? (
        <Spinner />
      ) : (
        <div className="px-5 py-8">
          <MDBDataTable striped bordered small data={data} />
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
