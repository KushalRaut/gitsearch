import React from 'react'

const Footer = () => {
  return (
    <>
      <footer class="p-4 bg-gray-200 mt-5 shadow">
        <div className="container flex justify-between items-center font-Montserrat">
          <span class=" text-gray-700 sm:text-center">
            © 2022{' '}
            <a href="https://flowbite.com" class="hover:underline">
              KR Tech™
            </a>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center text-sm text-gray-700">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
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
