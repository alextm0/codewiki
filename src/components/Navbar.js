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
    <header class="shadow-sm">
      <div class="max-w-screen-xl p-4 mx-auto">
        <div class="flex items-center justify-between space-x-4 lg:space-x-10">
          <div class="flex items-center lg:w-0 lg:flex-1 text-gray-900 font-righteous text-3xl">
            <img src={Logo} alt="logo" className='mr-2' />
            <span class="w-32 h-10 rounded-lg flex justify-center items-center text-white "> CodeWiki </span>
          </div>

          <nav class="hidden space-x-8 text-sm font-medium md:flex">
            <a class="text-gray-500 mt-2 border-b-2 border-transparent hover:text-purple-100 hover:border-purple-100" href="">Articole</a>
            <a class="text-gray-500 mt-2 border-b-2 border-transparent hover:text-purple-100 hover:border-purple-100" href="">Categorii</a>
            <a class="text-gray-500 mt-2 border-b-2 border-transparent hover:text-purple-100 hover:border-purple-100" href="">Probleme</a>
          </nav>

          <div class="items-center justify-end flex-1 hidden space-x-4 sm:flex">
            <a
              class="px-5 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg"
              href=""
            >
              Log in
            </a>

            <a
              class="px-5 py-2 text-sm font-medium text-white bg-purple-900 rounded-lg"
              href=""
            >
              Sign up
            </a>
          </div>

          <div class="lg:hidden">
            <button class="p-2 text-gray-600 rounded-lg" type="button" onClick={toggleSideMenu}>
              <span class="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                class="w-5 h-5"
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

    </header>
  )
}

export default Navbar