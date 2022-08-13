import React, { useState } from 'react'

import BlogPost from './BlogPost'

function Articles() {
  const [moreArticles, setMoreArticles] = useState([])

  function loadMoreArticles() {
    const articleRow =
      <div className="flex justify-center flex-col md:flex-row gap-10 md:gap-5 pt-10 px-10">
        <div data-aos="fade-up" data-aos-delay="150">
          <BlogPost badge="BACALAUREAT" />
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <BlogPost badge="ADMITERE" />
        </div>
        <div data-aos="fade-up" data-aos-delay="450">
          <BlogPost badge="OLIMPIADA" />
        </div>
      </div>

    setMoreArticles((prevArticles) => {
      return [...prevArticles, articleRow];
    })
  }

  return (
    <div className="mx-auto pt-10 pb-10">
      <div className="text-center mb-5">
        <h1 className="text-gray-900 font-quicksand font-bold text-4xl">Articole recente</h1>
      </div>

      <div className="flex justify-center flex-col md:flex-row gap-10 md:gap-5 pt-10 px-10">
        <div data-aos="fade-up" data-aos-delay="150">
          <BlogPost badge="BACALAUREAT" />
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <BlogPost badge="ADMITERE" />
        </div>
        <div data-aos="fade-up" data-aos-delay="450">
          <BlogPost badge="OLIMPIADA" />
        </div>
      </div>

      <div className="flex justify-center flex-col md:flex-row gap-10 md:gap-5 pt-10 px-10">
        <div data-aos="fade-up" data-aos-delay="600">
          <BlogPost badge="BACALAUREAT" />
        </div>
        <div data-aos="fade-up" data-aos-delay="750">
          <BlogPost badge="BACALAUREAT" />
        </div>
        <div data-aos="fade-up" data-aos-delay="900">
          <BlogPost badge="ADMITERE" />
        </div>
      </div>

      <div className="flex justify-center flex-col md:flex-row gap-10 md:gap-5 pt-10 px-10">
        <div data-aos="fade-up" data-aos-delay="650">
          <BlogPost badge="ADMITERE" />
        </div>
        <div data-aos="fade-up" data-aos-delay="800">
          <BlogPost badge="OLIMPIADA" />
        </div>
        <div data-aos="fade-up" data-aos-delay="950">
          <BlogPost badge="BACALAUREAT" />
        </div>
      </div>

      {moreArticles}

      {/* Show more button */}
      <div className='flex justify-center items-center flex-col md:flex-row gap-10 md:gap-5 pt-10 px-10'>
        <button onClick={loadMoreArticles} class="btn btn-wide text-gray-400 bg-gray-900 mt-5 mb-3">Vezi mai multe articole  </button>
      </div>
    </div>
  )
}

export default Articles