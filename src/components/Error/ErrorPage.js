import React from 'react'

const ErrorPage = () => {
  return (
    <>
      <div className="container h-[70vh] flex flex-col items-center justify-center gap-10">
        <p className="uppercase md:text-2xl font-Montserrat font-semibold text-center">
          The Repositories you requested Could not Be found
        </p>
        <img className="w-72" src="/img/404.svg" alt="error" />
      </div>
    </>
  )
}

export default ErrorPage
