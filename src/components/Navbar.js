import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/logo.png'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FiMenu } from 'react-icons/fi'

function Navbar() {
  const [sidebar, setSidebar] = useState('');
  const [dropdown, setDropdown] = useState(false);

  function toggleSidebar() {
    setSidebar((prev) => {
      if (prev == 'show')
        return '';
      else
        return 'show';
    })
  }

  function toggleDropdown() {
    setDropdown(prev => !prev);
  }

  return (
    <header className="">
      <div className="max-w-screen-xl items py-4 px-8 mx-auto">
        <div className="relative flex items-center justify-between space-x-4 lg:space-x-10 ">

          <div className="flex items-center lg:w-0 lg:flex-1 text-gray-900 font-righteous text-3xl">
            <Link to="/codewiki" className='flex items-center'>
              <img src={Logo} alt="logo" className='mr-2' />
              <span className="w-32 h-10 rounded-lg flex justify-center items-center text-white "> CodeWiki </span>
            </Link>
          </div>


          <nav className="hidden space-x-8 text-sm mt-2 font-medium md:flex">
            <div class="relative after:absolute after:bg-gray-200 mt-2 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
              <Link to="/articles" className="text-gray-500 hover:text-white"> Articole </Link>
            </div>
            {/* Dropdown */}
            <div class="flex items-center justify-center">
              <div class="relative inline-block">
                {/* <!-- Dropdown toggle button --> */}
                <div class="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                  <button onClick={toggleDropdown} class="inline-flex gap-1 items-center relative z-10 p-2 focus:outline-none hover:text-white">
                    Categorii <IoMdArrowDropdown />
                  </button>
                </div>

                {/* <!-- Dropdown menu --> */}
                {dropdown &&
                  <div class="absolute left-0 z-20 w-48 p-2 mt-2 bg-white rounded-xl shadow-xl">
                    <Link to={'/codewiki/admitere'}>
                      <div class="block px-4 py-3 text-sm rounded-xl text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-200 active:bg-purple-500 active:text-gray-200"> Admitere </div>
                    </Link>

                    <Link to={'/codewiki/bacalaureat'}>
                      <div class="block px-4 py-3 text-sm rounded-xl text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-200 active:bg-purple-500 active:text-gray-200"> Bacalaureat </div>
                    </Link>

                    <Link to={'/codewiki/olimpiada'}>
                      <div class="block px-4 py-3 text-sm rounded-xl text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-200 active:bg-purple-500 active:text-gray-200"> Olimpiada </div>
                    </Link>
                    {/* <a href="#" class="block px-4 py-3 text-sm rounded-xl text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-200 active:bg-purple-500 active:text-gray-200"> Bacalaureat </a>
                    <a href="#" class="block px-4 py-3 text-sm rounded-xl text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-200 active:bg-purple-500 active:text-gray-200"> Olimpiada </a> */}
                  </div>
                }
              </div>
            </div>

            <div class="relative after:absolute after:bg-gray-200 mt-2 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
              <Link to="/codewiki/problems" className="text-gray-500 hover:text-white"> Probleme </Link>
            </div>
          </nav>

          <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">

            <Link to={"/codewiki/login"}>
              <button className="px-5 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg">
                Log in
              </button>
            </Link>


            <Link to={'/codewiki/signup'}>
              <button className="px-5 py-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-lg">
                Sign up
              </button>
            </Link>
          </div>

          <div className='md:hidden relative'>
            <button type="button" onClick={toggleSidebar} className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold  text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" data-hs-offcanvas="#hs-offcanvas-example">
              <FiMenu className='w-6 h-6' />
            </button>

            <div id="hs-offcanvas-example" className={`${sidebar} hs-offcanvas hs-offcanvas-open:translate-x-0 -translate-x-full fixed top-0 left-0 transition-all duration-300 transform h-full max-w-xs  z-[60] bg-white border-r ${sidebar ? 'shadow-sm' : ''} shadow-white border-r-gray-500 dark:bg-gray-800 dark:border-gray-700" tabindex="-1`}>
              <div class="flex flex-col w-64 h-screen px-4 py-8 bg-gray-800 border-gray-600">
                {/* Logo */}
                <Link to={'/codewiki'}>
                  <h2 class="text-3xl text-white inline-flex items-center gap-2 mb-5 font-righteous "> <img src={Logo} alt="logo" /> CodeWiki</h2>
                </Link>

                <div class="relative mt-6">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                      <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </span>

                  <input type="text" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search" />
                </div>

                <div class="flex flex-col justify-between flex-1 mt-6">
                  <nav>
                    <a class="flex items-center px-4 py-2  rounded-md text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                      <Link to={'/codewiki/articles'}>
                        <span class="mx-4 font-medium">Articole</span>
                      </Link>
                    </a>

                    <a class="flex items-center px-4 py-2 mt-5 text-gray-400 transition-colors duration-200 transform rounded-md hover:bg-gray-200 hover:text-gray-700" href="#">
                      <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                      <span class="mx-4 font-medium">Bacalaureat</span>
                    </a>

                    <a class="dropdown dropdown-down flex items-center px-4 py-2 mt-3 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                      <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                      <div className="mx-2 border-transparent">
                        <button className='p-2 flex items-center gap-2 text-gray-400 hover:text-gray-700 font-medium'> Categorii <IoMdArrowDropdown /> </button>
                        <ul tabindex="0" className="dropdown-content mt-2 menu p-2 shadow bg-gray-200 rounded-box w-52">
                          {/* <Link to="/admitere"> <div className='text-gray-700 active:text-gray-200'>Admitere</div> </Link>
                          <Link to="/bacalaureat"> <div className='text-gray-700 active:text-gray-200'>Bacalaureat</div> </Link>
                          <Link to="/olimpiada"> <div className='text-gray-700 active:text-gray-200'>Olimpiada</div> </Link> */}

                          <Link to="/admitere">   <li><a className='text-gray-700 active:text-gray-200'>Admitere</a></li> </Link>
                          <Link to="/bacalaureat">   <li><a className='text-gray-700 active:text-gray-200'>Bacalaureat</a></li> </Link>
                          <Link to="/olimpiada">   <li><a className='text-gray-700 active:text-gray-200'>Olimpiada</a></li> </Link>
                        </ul>
                      </div>
                    </a>

                    <hr class="my-3 border-gray-200 dark:border-gray-600" />
                  </nav>

                  {/* User logged in */}
                  <div class="flex flex-col  px-4 -mx-2">
                    <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                      <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                      <span class="mx-4 text-gray-400 font-medium">Sign in</span>
                    </a>

                    <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                      <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                      <span class="mx-4 text-gray-400 font-medium">Log in</span>
                    </a>
                    {/* <img class="object-cover mx-2 rounded-full h-9 w-9" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                    <h4 class="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">John Doe</h4> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </header>
  )
}

export default Navbar