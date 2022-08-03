import React, { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Features from './components/Features'
import Articles from './components/Articles'
import Footer from './components/Footer'
import Contact from './components/Contact'


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
      <Courses />
      <Features />
      <Articles />
      {/* <CallToAction /> */}
      <Contact />
      <Footer />
    </div>
  )
}