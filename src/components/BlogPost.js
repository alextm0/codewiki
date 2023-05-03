import React from 'react'

import BlogPostImg from '../assets/post.png'
import { AiOutlineArrowRight } from 'react-icons/ai'

function BlogPost({ badge, title, date, description }) {
  return (
    <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:shadow-2xl rounded-lg md:w-80">
      <img alt="blog photo" src={BlogPostImg} className="max-h-40 w-full object-cover" />
      <div className='pl-4 pt-4 text-sm font-medium'>
        <div className='flex items-center '>
          <div className="text-sm text-gray-600 font-medium">
            <a href="#" className='m-1 rounded text-xs text-orange-500 '> {badge} </a>
            •
          </div>
          <span className='ml-2 font-rubik'> {date} </span>
        </div>

      </div>
      <div className="bg-white w-full px-4 pb-4 pt-1">
        <a href="#" className="text-gray-900 text-xl font-bold font-quicksand">
          {title}
        </a>

        <p className="text-gray-600 font-light text-sm mt-2 mb-2 font-montserrat">
          { description }
        </p>

        <div className='flex items-center'>
          <p className='text-purple-200 mt-5 ml-auto flex items-center gap-1 mr-3 font-medium'>
            Citeste acum
            <AiOutlineArrowRight className='mt-[2px]' /> </p>
        </div>
      </div>
    </div>
  )
}

export default BlogPost