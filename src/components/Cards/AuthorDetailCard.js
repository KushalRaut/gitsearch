import React from 'react'
import './cards.css'

const AuthorDetailCard = ({ userDetail }) => {
  return (
    <>
      <div className="Card_Container">
        <img src={userDetail?.avatar_url} alt="no-img" />
        <table>
          <tr>
            <td className="label">Author:</td>
            <td className="name">{userDetail?.name}</td>
          </tr>
          <tr>
            <td className="label">Followers:</td>
            <td className="name">{userDetail?.followers}</td>
          </tr>
          <tr>
            <td className="label">Blog:</td>
            <td className="name">{userDetail?.blog}</td>
          </tr>
          <tr>
            <td className="label">Joined:</td>
            <td className="name">{userDetail?.created_at?.substring(0, 10)}</td>
          </tr>
          <tr>
            <td className="label">Repositories:</td>
            <td className="name">{userDetail?.public_repos}</td>
          </tr>
          <tr>
            <td className="label">Bio:</td>
            <td className="name">{userDetail?.bio}</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default AuthorDetailCard
