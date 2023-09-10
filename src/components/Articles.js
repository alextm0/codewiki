import React, { useState } from "react";
import { Link } from "react-router-dom";

import BlogPost from "./BlogPost";

function Articles({ blogs }) {
  const [visibleArticles, setVisibleArticles] = useState(6);

  const loadMoreArticles = () => {
    setVisibleArticles((prevCount) => prevCount + 3);
  };

  function getDelayTime(r) {
    if (r == 0) return 450;
    if (r == 2) return 300;
    return 150;
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

      <div className="max-w-[1024px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center justify-items-center px-10 md:px-0 gap-10 md:gap-5 pt-10">
          {blogs &&
            blogs.data.slice(0, visibleArticles).map((blog, index) => (
              <Link
                to={`/codewiki/blog/${blog.attributes.slug}`}
                className="pt-5"
                key={blog.id}
              >
                <div
                  data-aos="fade-up"
                  data-aos-delay={getDelayTime((index + 1) % 3)}
                >
                  <BlogPost
                    badge={blog.attributes.badge}
                    slug={blog.attributes.slug}
                    title={blog.attributes.title}
                    date={blog.attributes.publishDate}
                    description={blog.attributes.desc}
                  />
                </div>
              </Link>
            ))}
        </div>
      </div>

      {/* "Load More" button */}
      {visibleArticles < blogs.data.length && (
        <div className="flex justify-center items-center flex-col md:flex-row gap-10 md:gap-5 pt-10 px-10">
          <button
            onClick={loadMoreArticles}
            className="btn btn-wide text-gray-400 bg-gray-900 mt-5 mb-3"
          >
            Vezi mai multe articole
          </button>
        </div>
      )}
    </div>
  );
}

export default Articles;
