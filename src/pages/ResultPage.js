import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { MDBDataTable } from 'mdbreact'

const ResultPage = () => {
  const [resultData, setResultData] = useState()
  const { repoData } = useSelector((state) => state.fetchedRepo)

  useEffect(() => {
    setResultData(repoData)
  }, [repoData])

  console.log(resultData)

  const data = {
    columns: [
      {
        label: 'Repository Name',
        field: 'name',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Author',
        field: 'author',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'No. of Stars',
        field: 'stars',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Watchers',
        field: 'watchers',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Forks',
        field: 'forks',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Description',
        field: 'description',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Last Update',
        field: 'lastUpdate',
        sort: 'asc',
        width: 150,
      },
    ],
    rows: resultData,
  }

  if (repoData) {
    return (
      <>
        <MDBDataTable striped bordered small data={data} />
      </>
    )
  } else {
    return (
      <>
        <h1>No Data</h1>
      </>
    )
  }
}

export default ResultPage
