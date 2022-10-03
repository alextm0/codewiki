import React from 'react'

import Navbar from '../components/Navbar'
import Articles from '../components/Articles'
import Footer from '../components/Footer'
import PageDivider from '../components/PageDivider'
import Admitere from '../components/Admitere'

import TableOfContents from "react-table-of-contents"

function AdmiterePage() {
  return (
    <div className='bg-white font-poppins'>
      <div className='bg-gradient-to-br from-[#102a4a] to-[#342a84] mb-16'>
        <Navbar />
        <PageDivider />
      </div>

      <Admitere />

      <Footer />
    </div>
  )
}

export default AdmiterePage