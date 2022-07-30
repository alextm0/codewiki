import React, { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Content from './components/Content'
import Features from './components/Features'


export default function App() {
  const [sideMenu, setSideMenu] = useState(false);

  function toggleSideMenu() {
    setSideMenu(prevSideMenu => !prevSideMenu);
  }

  return (
    <div className='bg-white'>
      <div className='bg-gradient-to-br from-[#102a4a] to-[#342a84]'>
        <Navbar sideMenu={sideMenu} toggleSideMenu={toggleSideMenu} />
        <Hero sideMenu={sideMenu} />
      </div>
      <Content />
      <Features />
    </div>
  )
}