import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import BlogPost from './BlogPost'
import LoadingCard from './LoadingCard'

function Articles() {
  const [moreArticles, setMoreArticles] = useState([])

  function loadMoreArticles() {
    const articleRow =
      <div className="flex justify-center flex-col md:flex-row gap-10 md:gap-5 pt-10 px-10">
        <Link to={'/codewiki/blog'}>
          <div data-aos="fade-up" data-aos-delay="150">
            <BlogPost badge="BACALAUREAT" />
          </div>
        </Link>
        <Link to={'/blog'}>
          <div data-aos="fade-up" data-aos-delay="300">
            <BlogPost badge="BACALAUREAT" />
          </div>
        </Link>
        <Link to={'/codewiki/blog'}>
          <div data-aos="fade-up" data-aos-delay="450">
            <BlogPost badge="BACALAUREAT" />
          </div>
        </Link>
      </div>

    setMoreArticles((prevArticles) => {
      return [...prevArticles, articleRow];
    })
  }

  return (
    <div className="mx-auto pt-10 pb-10">
      <div className="text-center mb-5">
        <h1 className="text-gray-900 font-quicksand font-bold text-4xl">
          <div data-aos="fade-down" data-aos-delay="150">
            Articole recente
          </div>
        </h1>
      </div>

      {/* Row 1 */}
      <div className="flex justify-center flex-col md:flex-row gap-10 md:gap-5 pt-10 px-10">
        <Link to={'/codewiki/blog'}>
          <div data-aos="fade-up" data-aos-delay="150">
            <BlogPost badge="BACALAUREAT" />
          </div>
        </Link>

        <Link to={'/codewiki/blog'}>
          <div data-aos="fade-up" data-aos-delay="300">
            <BlogPost badge="ADMITERE" />
          </div>
        </Link>
        
        <Link to={'/codewiki/blog'}>
          <div data-aos="fade-up" data-aos-delay="450">
            <BlogPost badge="OLIMPIADA" />
          </div>
        </Link>
      </div>

      {/* Row 2 */}
      <div className="flex justify-center flex-col md:flex-row gap-10 md:gap-5 pt-10 px-10">
        <Link to={'/codewiki/blog'}>
          <div data-aos="fade-up" data-aos-delay="600">
            <BlogPost badge="OLIMPIADA" />
          </div>
        </Link>
        <Link to={'/codewiki/blog'}>
          <div data-aos="fade-up" data-aos-delay="750">
            <BlogPost badge="BACALAUREAT" />
          </div>
        </Link>
        <Link to={'/codewiki/blog'}>
          <div data-aos="fade-up" data-aos-delay="900">
            <BlogPost badge="ADMITERE" />
          </div>
        </Link>
      </div>

      {/* Row 3*/}
      <div className="flex justify-center flex-col md:flex-row gap-10 md:gap-5 pt-10 px-10">
        <Link to={'/codewiki/blog'}>
          <div data-aos="fade-up" data-aos-delay="650">
            <BlogPost badge="BACALAUREAT" />
          </div>
        </Link>
        <Link to={'/codewiki/blog'}>
          <div data-aos="fade-up" data-aos-delay="800">
            <BlogPost badge="OLIMPIADA" />
          </div>
        </Link>
        <Link to={'/codewiki/blog'}>
          <div data-aos="fade-up" data-aos-delay="950">
            <BlogPost badge="ADMITERE" />
          </div>
        </Link>
      </div>

      {/* Additional content */}
      {moreArticles}

      {/* Show more button */}
      <div className='flex justify-center items-center flex-col md:flex-row gap-10 md:gap-5 pt-10 px-10'>
        <button onClick={loadMoreArticles} class="btn btn-wide text-gray-400 bg-gray-900 mt-5 mb-3">Vezi mai multe articole  </button>
      </div>
    </div>
  )
}

export default Articles