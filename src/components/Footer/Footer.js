import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-gray-200 mt-5 shadow">
        <div className="container flex justify-between items-center font-Montserrat">
          <span className=" text-gray-700 sm:text-center">
            © 2022 KR Tech™ . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center text-sm text-gray-700">
            <li>
              <a
                href="https://github.com/KushalRaut/gitsearch#readme"
                className="mr-4 hover:underline md:mr-6 "
                target={'_blank'}
                rel="noreferrer"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kushalraut/"
                className="mr-4 hover:underline md:mr-6"
                target={'_blank'}
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/KushalRaut"
                className="mr-4 hover:underline md:mr-6"
                target={'_blank'}
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer
