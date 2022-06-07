import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Spinner from '../components/LoadingSpinner/Spinner'
import { tableColumn } from '../data'
import SeachHeader from '../components/SearchHeader/SeachHeader'
import { GoStar, GoRepoForked, GoEye, GoMarkGithub } from 'react-icons/go'
import { Link, useNavigate } from 'react-router-dom'
import { CDataTable } from '@coreui/react'
import Footer from '../components/Footer/Footer'

const ResultPage = (props) => {
  const { repoData, loading, searchText, error } = props
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && !searchText) {
      navigate('/')
    }
  }, [searchText])

  return (
    <>
      <SeachHeader text={searchText} />
      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <CDataTable
            fields={tableColumn}
            items={repoData}
            tableFilter
            itemsPerPageSelect={{ values: [10, 25, 50] }}
            itemsPerPage={10}
            hover
            sorter
            border
            outlined
            striped
            responsive
            pagination={{ align: 'center' }}
            size="md"
            scopedSlots={{
              stats: (item) => (
                <td>
                  <div className="flex gap-2">
                    <button className="icons-style bg-success">
                      {item.stars} <GoStar />
                    </button>
                    <button className="icons-style bg-info">
                      {item.forks} <GoRepoForked />
                    </button>
                    <button className="icons-style bg-secondary">
                      {item.watchers} <GoEye />
                    </button>
                  </div>
                </td>
              ),
              actions: (item, index) => {
                return (
                  <td className="py-2">
                    <Link to={`/repo/${item.author}/${item.name}`}>
                      <button className="flex gap-1 text-white p-1 items-center justify-center rounded-md font-semibold bg-teal">
                        View Repo
                        <GoMarkGithub />
                      </button>
                    </Link>
                  </td>
                )
              },
            }}
          />
        </div>
      )}
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

export default connect(mapStateToProps)(ResultPage)
