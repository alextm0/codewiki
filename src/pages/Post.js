import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

import "../index.css";

import {
  Navbar,
  PageDivider,
  Rating,
  ProblemSetTable,
  ResourcesTable,
} from "../components";

function Post({ blogs }) {
  const Headings = ({ headings, activeId }) => (
    <ul className="text-gray-600 font-quicksand font-semibold list-disc">
      {headings.map((heading) => (
        <li
          id="headingLI"
          key={heading.id}
          className={heading.id === activeId ? "active" : ""}
        >
          <a
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(`#${heading.id}`).scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {heading.title}
          </a>
          {heading.items.length > 0 && (
            <ul>
              {heading.items.map((child) => (
                <li
                  id="headingLI"
                  key={child.id}
                  className={child.id === activeId ? "active" : ""}
                >
                  <a
                    href={`#${child.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${child.id}`).scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    {child.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  const useHeadingsData = () => {
    const [nestedHeadings, setNestedHeadings] = React.useState([]);

    React.useEffect(() => {
      const headingElements = Array.from(
        document.querySelectorAll("main h2, main h3")
      );

      const newNestedHeadings = getNestedHeadings(headingElements);
      setNestedHeadings(newNestedHeadings);
    }, []);

    return { nestedHeadings };
  };

  const getNestedHeadings = (headingElements) => {
    const nestedHeadings = [];

    headingElements.forEach((heading, index) => {
      const { innerText: title, id } = heading;

      if (heading.nodeName === "H2") {
        nestedHeadings.push({ id, title, items: [] });
      } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
        nestedHeadings[nestedHeadings.length - 1].items.push({
          id,
          title,
        });
      }
    });

    return nestedHeadings;
  };

  const useIntersectionObserver = (setActiveId) => {
    const headingElementsRef = React.useRef({});
    React.useEffect(() => {
      const callback = (headings) => {
        headingElementsRef.current = headings.reduce((map, headingElement) => {
          map[headingElement.target.id] = headingElement;
          return map;
        }, headingElementsRef.current);

        const visibleHeadings = [];
        Object.keys(headingElementsRef.current).forEach((key) => {
          const headingElement = headingElementsRef.current[key];
          if (headingElement.isIntersecting)
            visibleHeadings.push(headingElement);
        });

        const getIndexFromId = (id) =>
          headingElements.findIndex((heading) => heading.id === id);

        if (visibleHeadings.length === 1) {
          setActiveId(visibleHeadings[0].target.id);
        } else if (visibleHeadings.length > 1) {
          const sortedVisibleHeadings = visibleHeadings.sort(
            (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
          );

          setActiveId(sortedVisibleHeadings[0].target.id);
        }
      };

      const observer = new IntersectionObserver(callback, {
        root: document.querySelector("iframe"),
        rootMargin: "500px",
      });

      const headingElements = Array.from(document.querySelectorAll("h2, h3"));

      headingElements.forEach((element) => observer.observe(element));

      return () => observer.disconnect();
    }, [setActiveId]);
  };

  const TableOfContents = () => {
    const [activeId, setActiveId] = React.useState();
    const { nestedHeadings } = useHeadingsData();
    useIntersectionObserver(setActiveId);

    return (
      <nav
        className="flex flex-col gap-3 w-[220px] min-w-[220px] pl-2 font-medium self-start sticky top-[64px] md:top-[64px] max-h-[800px] overflow-auto"
        aria-label="Table of contents"
      >
        <span className="font-bold text-orange-500"> TABLE OF CONTENTS </span>
        <Headings headings={nestedHeadings} activeId={activeId} />
      </nav>
    );
  };

  // PAGE SLUG
  const { slug } = useParams();

  let blog = blogs && blogs.data.find((blog) => blog.attributes.slug === slug);

  return (
    <div className="bg-white font-poppins">
      {/* NAVBAR */}
      <div className="bg-gradient-to-br from-[#102a4a] to-[#342a84] mb-16">
        <Navbar />
        <PageDivider />
      </div>

      <div className="md:flex pb-16 md:pb-0 gap-10 justify-center">
        <div className="max-w-full md:max-w-[1024px] px-6 md:py-16 space-y-12 text-gray-800">
          {/* RATING */}
          <Rating stars={blog.attributes.rating} onBlogPost={true} />

          {/* TITLE AND AUTHORS */}
          <div>
            <h1 className="text-gray-800 font-bold text-4xl w-full -mt-5 -mb-3">
              {blog.attributes.title}
            </h1>

            <h2 className="text-gray-600 font-medium text-lg mt-5 -mb-3">
              Authors: {blog.attributes.authors}
            </h2>
          </div>

          {/* PAGE DIVIDER */}
          <div className="divider w-[95%]"></div>

          {/* TABLE OF CONTENTS - MOBILE */}
          <div className="flex flex-col gap-5 md:hidden">
            <TableOfContents />
          </div>

          {/* BLOG CONTENT */}
          <div className="max-w-[900px] font-quicksand font-semibold text-lg text-gray-700">
            {/* eslint-disable-next-line  */}
            <ReactMarkdown children={blog.attributes.blogContent} />
          </div>
        </div>
        {/* TABLE OF CONTENTS - DESKTOP */}
        <div className="hidden md:flex md:flex-col gap-5 md:mt-20">
          <TableOfContents />
        </div>
      </div>
    </div>
  );
}

export default Post;
