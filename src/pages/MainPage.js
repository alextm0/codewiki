import React from 'react'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Courses from '../components/Courses'
import Features from '../components/Features'
import Articles from '../components/Articles'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

function MainPage() {
  return (
    <div className='bg-white font-poppins'>
      <div className='bg-gradient-to-br from-[#102a4a] to-[#342a84]'>
        <Navbar />
        <Hero />
      </div>
      <Courses />
      <Features />
      <Articles />
      <Contact />
      <Footer />
    </div>
  )
}

export default MainPage