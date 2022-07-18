import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  return (
    <div className='h-screen w-screen bg-hero-background bg-cover'>
      <Navbar />
      <Hero />
    </div>
  )
}