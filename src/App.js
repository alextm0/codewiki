import React, { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  const [sideMenu, setSideMenu] = useState(false);

  function toggleSideMenu() {
    setSideMenu(prevSideMenu => !prevSideMenu);
  }

  return (
    <div className='h-screen w-screen bg-hero-background bg-cover'>
      <Navbar sideMenu={sideMenu} toggleSideMenu={toggleSideMenu} />
      <Hero sideMenu={sideMenu} />
    </div>
  )
}