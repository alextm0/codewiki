import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageDivider from '../components/PageDivider'
import Bacalaureat from '../components/Bacalaureat'

import PostImage from '../assets/PostImage2.png'

function Post() {
  return (
    <div className='bg-white font-poppins'>
      <div className='bg-gradient-to-br from-[#102a4a] to-[#342a84] mb-16'>
        <Navbar />
        <PageDivider />
      </div>

      {/* Content */}
      <div className="max-w-[1024px] px-6 py-16 mx-auto space-y-12 text-gray-800">

        {/* Topics */}
        <p className='text-orange-500 text-sm font-bold font-quicksand -mb-5'> COMPETITIVE PROGRAMMING, DEVELOPER TIPS, DEVELOPERS </p>

        <div>
          {/* Title */}
          <h1 className='text-gray-800 font-bold text-4xl w-full -mb-3'>
            Fully Dynamic Trees Supporting Path/Subtree <br /> Aggregates and Lazy Path/Subtree Updates
          </h1>

          {/* Authors */}
          <h2 className='text-gray-700 font-medium text-lg mt-10'>
            Authors: Alexandru Toma
          </h2>
        </div>

        {/* Image */}
        <img className='w-full rounded-3xl h-[500px]' src={PostImage} alt="PostImage" />

        {/* Content */}
        <main>

          {/* Motivation */}
          <div className='pb-5'>
            <h1 className='text-3xl font-semibold mb-6 mt-10'> Motivation </h1>
            <p className='font-montserrat font-medium text-lg'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum suscipit impedit voluptates ipsum deleniti, nesciunt enim voluptatum! Perspiciatis pariatur mollitia illum cumque reiciendis, quaerat error asperiores itaque consequuntur. Facere? </p>
          </div>

          {/* Prerequisites */}
          <div>
            <h1 className='text-3xl font-semibold mb-6 mt-10'> Prerequisites </h1>
            <p className='font-montserrat font-medium text-lg'>
              <ul className='pl-5'>
                <li className='font-bold'> • Link/Cut Tree </li>
                <li className='pl-10'> • Blahblahblah </li>
                <li className='pl-10'> • Blahblahblah </li>
                <li className='pl-10 mb-3'> • Blahblahblah </li>

                <li className='font-bold'> • Link/Cut Tree </li>
                <li className='pl-10'> • Blahblahblah </li>
                <li className='pl-10'> • Blahblahblah </li>
                <li className='pl-10 mb-3'> • Blahblahblah </li>

                <li className='font-bold'> • Link/Cut Tree </li>
                <li className='pl-10'> • Blahblahblah </li>
                <li className='pl-10'> • Blahblahblah </li>
                <li className='pl-10 mb-3'> • Blahblahblah </li>
              </ul>
            </p>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  )
}

export default Post