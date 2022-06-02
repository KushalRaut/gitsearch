import React from 'react'
import HashLoader from 'react-spinners/HashLoader'

const Spinner = () => {
  return (
    <>
      <div
        className="w-screen flex justify-center items-center"
        style={{ height: '80vh' }}
      >
        <HashLoader color={'#7ED321'} size={50} />
      </div>
    </>
  )
}

export default Spinner
