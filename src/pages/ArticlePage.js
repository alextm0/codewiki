import React from 'react'

import Navbar from '../components/Navbar'
import Articles from '../components/Articles'
import Footer from '../components/Footer'
import PageDivider from '../components/PageDivider'

function ArticlePage() {
  return (
    <div className='bg-white font-poppins'>
      <div className='bg-gradient-to-br from-[#102a4a] to-[#342a84] mb-16'>
        <Navbar />
        <PageDivider />
      </div>
      <Articles />
      <Footer />
    </div>
  )
}

export default ArticlePage