import React from 'react'

import BlogPost from './BlogPost'

import {AiOutlineArrowRight } from 'react-icons/ai'


function Articles() {
  return (
    <div className="mx-auto pt-10 pb-10">
      <div className="text-center mb-5">
        <h1 className="text-gray-900 font-quicksand font-bold text-4xl">Articole recente</h1>
      </div>

      <div className="flex justify-center flex-col md:flex-row gap-10 md:gap-5 pt-10 px-10">
        <BlogPost badge="BACALAUREAT" />
        <BlogPost badge="ADMITERE" />
        <BlogPost badge="OLIMPIADA" />
      </div>

      <div className="flex justify-center flex-col md:flex-row gap-10 md:gap-5 pt-10 px-10">
        <BlogPost badge="OLIMPIADA" />
        <BlogPost badge="BACALAUREAT" />
        <BlogPost badge="ADMITERE" />
      </div>

      <div className="flex justify-center flex-col md:flex-row gap-10 md:gap-5 pt-10 px-10">
        <BlogPost badge="ADMITERE" />
        <BlogPost badge="OLIMPIADA" />
        <BlogPost badge="BACALAUREAT" />
      </div>
      <div className='flex justify-center items-center flex-col md:flex-row gap-10 md:gap-5 pt-10 px-10'>
        {/* <AiOutlineArrowRight className='ml-3' /> */}
        <button class="btn btn-wide text-gray-400 bg-gray-900 mt-5 mb-3">Vezi mai multe articole  </button>
      </div>

    </div>
  )
}

export default Articles