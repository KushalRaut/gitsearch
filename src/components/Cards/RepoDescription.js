import React from 'react'
import './cards.css'

const RepoDescription = ({ descp }) => {
  return (
    <>
      <div className="Card_Container">
        <img src="/img/gitalt.png" alt="no-img" />

        <p className="label underline">About Repository:</p>
        <p className="name p-0">{descp}</p>
      </div>
    </>
  )
}

export default RepoDescription
