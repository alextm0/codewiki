import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/logo.png'
import Brain from '../assets/brain.png'

import { MdOutlineArticle } from 'react-icons/md'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { BiCategoryAlt } from 'react-icons/bi'
import { IoMdArrowDropdown } from 'react-icons/io'

function Navbar({ sideMenu, toggleSideMenu }) {
  return (
    <header className="">
      <div className="max-w-screen-xl p-4 mx-auto">
        <div className=" flex items-center justify-between space-x-4 lg:space-x-10">
          
            <div className="flex items-center lg:w-0 lg:flex-1 text-gray-900 font-righteous text-3xl">
              <Link to="/" className='flex items-center'>
                <img src={Logo} alt="logo" className='mr-2' />
                <span className="w-32 h-10 rounded-lg flex justify-center items-center text-white "> CodeWiki </span>
              </Link>
            </div>
          

          <nav className="hidden space-x-8 text-sm mt-2 font-medium md:flex">
            <Link to="/articles" className="text-gray-500 mt-2 border-b-2 border-transparent hover:text-white hover:border-white"> Articole </Link>

            <div className="dropdown dropdown-hover border-b-2 border-transparent hover:text-white hover:border-white">
              {/* <label tabindex="0" className="m-1">Click</label> */}
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

          <div className="lg:hidden">
            <button className="p-2 text-gray-600 rounded-lg" type="button" onClick={toggleSideMenu}>
              <span className="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewbox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <div className={sideMenu ? 'md:hidden fixed left-[-100%] top-0' : 'md:hidden w-[75%] fixed left-0 top-[90px] h-screen mt-[-90px] bg-[#f8f7f7] ease-in-out duration-500'}>
        <div className='pt-[136px]'>
          <div className='flex items-center justify-center mr-[20px] gap-2 mb-[100px]'>
            <img className='w-[60px] h-[60px]' src={Logo} alt="logo" />
            <span className='text-[42px] font-righteous text-[#3D4246]'> CodeWiki </span>
          </div>

          <div className='flex flex-col text-[#3D4246]'>
            <div className='flex items-center px-5 mx-10  h-[60px]'>
              <MdOutlineArticle className='w-7 h-7 mr-5' />
              <span className='text-2xl text-[#3D4246]'> Articole </span>
              <AiOutlineCaretDown className='ml-auto w-6 h-6 text-[#3D4246]' />
            </div>
            <svg className='self-center mt-[10px] mb-[10px] flex justify-center items-center' width="316" height="1" viewBox="0 0 316 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="316" y2="0.5" stroke="#3D4246" stroke-opacity="0.15" />
            </svg>
          </div>
          <div className='flex flex-col'>
            <div className='flex items-center px-5 mx-10  h-[60px]'>
              <BiCategoryAlt className='w-7 h-7 mr-5 text-[#3D4246]' />
              <span className='text-2xl text-[#3D4246]'> Categorii </span>
              <AiOutlineCaretDown className='ml-auto w-6 h-6 text-[#3D4246]' />
            </div>
            <svg className='self-center mt-[10px] mb-[10px] flex justify-center items-center' width="316" height="1" viewBox="0 0 316 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="316" y2="0.5" stroke="#3D4246" stroke-opacity="0.15" />
            </svg>
          </div>
          <div className='flex flex-col'>
            <div className='flex items-center px-5 mx-10  h-[60px]'>
              <img src={Brain} alt="brain" className='w-7 h-7 mr-5 text-bold' />
              <span className='text-2xl text-[#3D4246]'> Probleme </span>
              <AiOutlineCaretDown className='ml-auto w-6 h-6 text-[#3D4246]' />
            </div>
          </div>

        </div>
      </div> */}

      <div className="container mx-auto items-center flex justify-between">
        <button id="toggle" className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

  
      </div>

    </header>
  )
}

export default Navbar