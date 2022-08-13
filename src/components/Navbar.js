import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/logo.png'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { IoMdArrowDropdown } from 'react-icons/io'

function Navbar() {
  const [sidebar, setSidebar] = useState('');

  function toggleSidebar() {
    setSidebar((prev) => {
      if (prev == 'show')
        return '';
      else
        return 'show';
    })
  }

  return (
    <header className="">
      <div className="max-w-screen-xl items py-4 px-8 mx-auto">
        <div className="relative flex items-center justify-between space-x-4 lg:space-x-10 ">

          <div className="flex items-center lg:w-0 lg:flex-1 text-gray-900 font-righteous text-3xl">
            <Link to="/" className='flex items-center'>
              <img src={Logo} alt="logo" className='mr-2' />
              <span className="w-32 h-10 rounded-lg flex justify-center items-center text-white "> CodeWiki </span>
            </Link>
          </div>

          <nav className="hidden space-x-8 text-sm mt-2 font-medium md:flex">
            <Link to="/articles" className="text-gray-500 mt-2 border-b-2 border-transparent hover:text-white hover:border-white"> Articole </Link>

            <div className="dropdown dropdown-hover border-b-2 border-transparent hover:text-white hover:border-white">
              <button className='p-2 flex items-center gap-1'> Categorii <IoMdArrowDropdown /> </button>
              <ul tabindex="0" className="dropdown-content mt-2  menu p-2 shadow bg-gray-200 rounded-box w-52">
                <li><a className='text-gray-700 active:text-gray-200'>Admitere</a></li>
                <li><a className='text-gray-700 active:text-gray-200'>Bacalaureat</a></li>
                <li><a className='text-gray-700 active:text-gray-200'>Olimpiada</a></li>
              </ul>
            </div>

            <a className="text-gray-500 mt-2 border-b-2 border-transparent hover:text-white hover:border-white" href="">Probleme</a>
          </nav>

          <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
            <a
              className="px-5 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg"
              href=""
            >
              Log in
            </a>

            <a
              className="px-5 py-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-lg"
              href=""
            >
              Sign up
            </a>
          </div>

          <div className='md:hidden relative'>
            <button type="button" onClick={toggleSidebar} className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold  text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" data-hs-offcanvas="#hs-offcanvas-example">
              <AiOutlineCaretDown />
            </button>

            <div id="hs-offcanvas-example" className={`${sidebar} hs-offcanvas hs-offcanvas-open:translate-x-0 -translate-x-full fixed top-0 left-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-white border-r dark:bg-gray-800 dark:border-gray-700" tabindex="-1`}>
              <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                <h3 className="font-bold text-gray-800 dark:text-white">
                  Offcanvas title
                </h3>
                <button type="button" onClick={toggleSidebar} className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-offcanvas="#hs-offcanvas-example">
                  <span className="sr-only">Close modal</span>
                  <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <p className="text-gray-800 dark:text-gray-400">
                  Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>



    </header>
  )
}

export default Navbar