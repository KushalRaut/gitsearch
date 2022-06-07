import React from 'react'
import './cards.css'

const RepoDetailCard = ({ repoDetail }) => {
  return (
    <>
      <div className="Card_Container">
        <img src="/img/gitrepo.png" alt="no-img" />
        <table>
          <tr>
            <td className="label">Repository Name:</td>
            <td className="name">{repoDetail?.name}</td>
          </tr>
          <tr>
            <td className="label">No. of Stars:</td>
            <td className="name">{repoDetail?.stargazers_count}</td>
          </tr>
          <tr>
            <td className="label">No. of Stars:</td>
            <td className="name">{repoDetail?.stargazers_count}</td>
          </tr>
          <tr>
            <td className="label">No. of Forks:</td>
            <td className="name">{repoDetail?.forks}</td>
          </tr>
          <tr>
            <td className="label">Main Branch:</td>
            <td className="name">{repoDetail?.default_branch}</td>
          </tr>
          <tr>
            <td className="label">Repository Size:</td>
            <td className="name">{(repoDetail?.size / 1024).toFixed(2)}Mb</td>
          </tr>
          <tr>
            <td className="label">No. of Open Issues:</td>
            <td className="name">{repoDetail?.open_issues_count}</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default RepoDetailCard
