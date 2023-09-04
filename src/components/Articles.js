import React, { useState } from "react";
import { Link } from "react-router-dom";

import BlogPost from "./BlogPost";

function Articles({ blogs }) {
  const [moreArticles, setMoreArticles] = useState([]);

  function loadMoreArticles() {
    const articleRow = (
      <div className="flex justify-center flex-col md:flex-row gap-10 md:gap-5 pt-10 px-10">
        <Link to={"/codewiki/blog/euclid/"}>
          <div data-aos="fade-up" data-aos-delay="150">
            <BlogPost
              badge="OLIMPIADA"
              title="Algoritmul lui Euclid. "
              description="In acest articol voi prezenta conceptele de CMMDC si CMMMC, precum si algoritmul lui Euclid prin cele doua ..."
            />
          </div>
        </Link>
        <Link to={"/codewiki/blog/mars"}>
          <div data-aos="fade-up" data-aos-delay="300">
            <BlogPost
              badge="OLIMPIADA"
              title="Smenul lui Mars"
              description="Smenul lui Mars este o metoda eficienta de a efectua un anumit tip de operatii asupra unui vector ..."
            />
          </div>
        </Link>
        <Link to={"/codewiki/blog/parantezare"}>
          <div data-aos="fade-up" data-aos-delay="450">
            <BlogPost
              badge="BACALAUREAT"
              title="Programare dinamica"
              description="Parantezarea optima de matrice este o problema fundamentala in studiul programarii dinamice, deoacare poate ..."
            />
          </div>
        </Link>
      </div>
    );

    setMoreArticles((prevArticles) => {
      return [...prevArticles, articleRow];
    });
  }

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
            blogs.data.map((blog) => {
              return (
                <Link
                  to={`/codewiki/blog/${blog.attributes.slug}`}
                  className="pt-5"
                >
                  <div
                    data-aos="fade-up"
                    data-aos-delay={getDelayTime(blog.id % 3)}
                    key={blog.id}
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
              );
            })}
        </div>
      </div>

      {/* Additional content */}
      {moreArticles}

      {/* Show more button */}
      <div className="flex justify-center items-center flex-col md:flex-row gap-10 md:gap-5 pt-10 px-10">
        <button
          onClick={loadMoreArticles}
          class="btn btn-wide text-gray-400 bg-gray-900 mt-5 mb-3"
        >
          Vezi mai multe articole{" "}
        </button>
      </div>
    </div>
  );
}

export default Articles;
