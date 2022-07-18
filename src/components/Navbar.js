import React from 'react'

import Logo from '../assets/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar() {
  return (
    <div className='mx-auto h-[90px] flex flex-col justify-center text-white'>
      <div className='w-full flex items-center justify-between px-8 md:px-16 '>
        <div className='flex items-center gap-2'>
          <img className='w-[45px] h-[45px]' src={Logo} alt="logo" />
          <span className='text-2xl md:text-3xl font-righteous '> CodeWiki </span>
        </div>

        <ul className='hidden sm:flex gap-8 md:gap-16 text-xl md:text-2xl font-quicksand'>
          <li> Articole </li>
          <li> Categorii </li>
          <li> Probleme </li>
        </ul>
        <GiHamburgerMenu className='sm:hidden w-7 h-7' />
      </div>
    </div>
  )
}

export default Navbar