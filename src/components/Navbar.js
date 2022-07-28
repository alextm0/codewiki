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
    <div>
      <div className='mx-auto h-[90px] flex flex-col justify-center text-white'>
        <div className='w-full flex items-center justify-between px-8 md:px-16 '>

          <div className={sideMenu ? 'hidden' : 'flex items-center gap-2'}>
            <img className='w-[45px] h-[45px]' src={Logo} alt="logo" />
            <span className='text-2xl md:text-3xl font-righteous '> CodeWiki </span>
          </div>


          <ul className='hidden sm:flex gap-8 md:gap-16 text-xl md:text-2xl font-quicksand'>
            <li> Articole </li>
            <li> Categorii </li>
            <li> Probleme </li>
          </ul>

          {
            !sideMenu ?
              <GiHamburgerMenu className='sm:hidden w-7 h-7' onClick={toggleSideMenu} />
              :
              <IoMdClose className='sm:hidden w-8 h-8 ml-auto' onClick={toggleSideMenu} />
          }
        </div>
      </div>
      <div className={!sideMenu ? 'md:hidden fixed left-[-100%] top-0' : 'md:hidden w-[75%] fixed left-0 top-[90px] h-screen mt-[-90px] bg-[#f8f7f7] ease-in-out duration-500'}>
        <div className='pt-[136px]'>
          <div className='flex items-center justify-center mr-[20px] gap-2 mb-[100px]'>
            <img className='w-[60px] h-[60px]' src={Logo} alt="logo" />
            <span className='text-[42px] font-righteous text-[#3D4246]'> CodeWiki </span>
          </div>

          <div className='flex flex-col'>
            <div className='flex items-center px-5 mx-10  h-[60px]'>
              <MdOutlineArticle className='w-7 h-7 mr-5' />
              <span className='text-2xl'> Articole </span>
              <AiOutlineCaretDown className='ml-auto w-6 h-6 text-[#3D4246]' />
            </div>
            <svg className='self-center mt-[10px] mb-[10px] flex justify-center items-center' width="316" height="1" viewBox="0 0 316 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="316" y2="0.5" stroke="#3D4246" stroke-opacity="0.15" />
            </svg>
          </div>
          <div className='flex flex-col'>
            <div className='flex items-center px-5 mx-10  h-[60px]'>
              <BiCategoryAlt className='w-7 h-7 mr-5' />
              <span className='text-2xl'> Categorii </span>
              <AiOutlineCaretDown className='ml-auto w-6 h-6 text-[#3D4246]' />
            </div>
            <svg className='self-center mt-[10px] mb-[10px] flex justify-center items-center' width="316" height="1" viewBox="0 0 316 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="316" y2="0.5" stroke="#3D4246" stroke-opacity="0.15" />
            </svg>
          </div>
          <div className='flex flex-col'>
            <div className='flex items-center px-5 mx-10  h-[60px]'>
              <img src={Brain} alt="brain" className='w-7 h-7 mr-5 text-bold' />
              <span className='text-2xl'> Probleme </span>
              <AiOutlineCaretDown className='ml-auto w-6 h-6 text-[#3D4246]' />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar