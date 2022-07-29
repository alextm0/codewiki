import React, { useState, useEffect } from 'react'

import Logo from '../assets/logo.png'
import Brain from '../assets/brain.png'

import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { MdOutlineArticle } from 'react-icons/md'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { BiCategoryAlt } from 'react-icons/bi'

function Navbar({ sideMenu, toggleSideMenu }) {
  useEffect(() => {

  }, [])

  return (
    <nav id="header" className="w-full z-30 top-0 text-white">
      <div className="px-8 md:px-20 xl:px-28 w-full container mx-auto flex flex-wrap items-center justify-between mt-0 pt-[50px]">
        <div className="flex items-center">
          <a className="font-righteous toggleColour text-white no-underline hover:no-underline text-2xl lg:text-4xl" href="#">
            <img src={Logo} alt="logo" className="h-8 fill-current inline pl-0 mr-2" />
            CodeWiki
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <button id="nav-toggle" onClick={toggleSideMenu} className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            {
              sideMenu ?
                <svg className="fill-current text-white h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
                :
                <IoMdClose className='h-6 w-6 text-white' />
            }

          </button>
        </div>
        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a className="inline-block text-xl py-2 px-4 text-white no-underline" href="#">Active</a>
            </li>
            <li className="mr-3">
              <a className="inline-block py-2 px-4 text-xl text-white no-underline" href="#">Active</a>
            </li>
            <li className="mr-3">
              <a className="inline-block py-2 px-4 text-xl text-white no-underline" href="#">Active</a>
            </li>
          </ul>
        </div>

      </div>
      <div className={sideMenu ? 'md:hidden fixed left-[-100%] top-0' : 'md:hidden w-[75%] fixed left-0 top-[90px] h-screen mt-[-90px] bg-[#f8f7f7] ease-in-out duration-500'}>
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
        </div>
      {/* <hr className="border-b border-gray-100 opacity-25 my-0 py-0" /> */}
    </nav>
  )
}

export default Navbar