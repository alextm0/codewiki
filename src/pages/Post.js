import React from "react";
import "../index.css";

import {
  Navbar,
  PageDivider,
  Rating,
  ProblemSetTable,
  ResourcesTable,
} from "../components";

import { useParams } from "react-router-dom";

// MARKDOWN IMPORTS
import Toc from "react-toc";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // Import the remark-gfm plugin
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { useEffect } from "react";

const flatten = (text, child) => {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
};

export const HeadingRenderer = (props) => {
  var children = React.Children.toArray(props.children);
  var text = children.reduce(flatten, "");
  var slug = text.toLowerCase().replace(/[!?\s]/g, "-");
  return React.createElement(
    "h" + props.level,
    { id: slug, className: "anchor" },
    props.children
  );
};

function Post({ blogs }) {
  const [readPercentage, setReadPercentage] = useState(0);
  const [showRadialProgress, setShowRadialProgress] = useState(false);

  // Calculate and update read percentage as the user scrolls
  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const scrolled = window.scrollY;

      const calculatedPercentage =
        (scrolled / (fullHeight - windowHeight)) * 100;
      setReadPercentage(calculatedPercentage);

      // Show the radial-progress div when scrolled to a certain percentage
      if (calculatedPercentage >= 10) {
        setShowRadialProgress(true);
      } else {
        setShowRadialProgress(false);
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { slug } = useParams();

  let blog = blogs && blogs.data.find((blog) => blog.attributes.slug === slug);

  return (
    <div className="bg-white font-nunito">
      {/* NAVBAR */}
      <div className="bg-gradient-to-br from-[#102a4a] to-[#342a84] mb-16 font-poppins">
        <Navbar />
        <PageDivider />
      </div>

      <div className="md:flex pb-16 md:pb-0 gap-10 justify-center">
        {/* CONTENT COMPONENT */}
        <div className="max-w-full md:max-w-[1024px] px-6 md:px-20  md:py-16 space-y-12 text-gray-800 flex-grow">
          {/* RATING */}
          <Rating stars={blog.attributes.rating} onBlogPost={true} />

          {/* TITLE AND AUTHORS */}
          <div>
            <h1 className="text-gray-800 font-bold text-4xl w-full -mt-5 -mb-3 font-quicksand">
              {blog.attributes.title}
            </h1>

            <h2 className="text-gray-600 font-medium text-lg mt-5 -mb-3 font-quicksand">
              Authors: {blog.attributes.authors}
            </h2>
          </div>

          {/* PAGE DIVIDER */}
          <div className="divider w-[100%]"></div>

          <div className="text-[18px] md:hidden">
            <div className="text-blue-800 font-bold mb-5">
              {" "}
              Recent articles{" "}
            </div>
            <div className="flex flex-col">
              {blogs.data.map((blog) => {
                if (blog.attributes.slug != slug)
                  return (
                    <a
                      className="text-[#565656] hover:text-blue-600 "
                      href={`http://localhost:3000/codewiki/blog/${blog.attributes.slug}`}
                    >
                      {blog.attributes.title}
                    </a>
                  );
              })}
            </div>
          </div>

          {/* TABLE OF CONTENTS - MOBILE */}
          <div className="md:hidden text-[18px]">
            <div className="toc-container flex flex-col gap-5">
              <div className="text-blue-800 font-bold">Table of contents</div>
              <Toc
                markdownText={blog.attributes.blogContent}
                highestHeadingLevel={1}
                lowestHeadingLevel={2}
                className="toc"
              />
            </div>
          </div>

          {/* BLOG CONTENT */}
          <div className="content-container max-w-[1024px] text-gray-700">
            {/* eslint-disable-next-line  */}

            <ReactMarkdown
              children={blog.attributes.blogContent}
              remarkPlugins={[remarkMath, remarkGfm]}
              rehypePlugins={[rehypeKatex, rehypeRaw]}
              className="markdown"
              // escapeHtml={true}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      codeTagProps={{
                        style: { fontSize: "16px", lineHeight: "1.4" },
                      }}
                      children={String(children).replace(/\n$/, "")}
                      style={vscDarkPlus} // theme
                      language={match[1]}
                      PreTag="section" // parent tag
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
                h1: HeadingRenderer,
                h2: HeadingRenderer,
              }}
            />
          </div>

          {blog.attributes.resource && (
            <ResourcesTable
              header={"Materiale de studiu"}
              resource={blog.attributes.resource}
            />
          )}
          {blog.attributes.problemSet && (
            <ProblemSetTable problemSet={blog.attributes.problemSet} />
          )}
        </div>
        {/* TABLE OF CONTENTS - DESKTOP */}
        <div>
          <div className="md:mt-32">
            <div className="text-blue-800 font-bold mb-5">
              {" "}
              Recent articles{" "}
            </div>
            <div className="flex flex-col">
              {blogs.data.map((blog) => {
                if (blog.attributes.slug != slug)
                  return (
                    <a
                      className="text-[#565656] hover:text-blue-600 "
                      href={`http://localhost:3000/codewiki/blog/${blog.attributes.slug}`}
                    >
                      {blog.attributes.title}
                    </a>
                  );
              })}
            </div>
          </div>
          <div className="toc-navigation">
            <div className="toc-container hidden md:flex md:flex-col gap-5 md:mt-20">
              <div className="text-blue-800 font-bold">Table of contents</div>
              {/* Progress bar */}
              <div
                className={`fixed bottom-0 right-0 p-4 ${
                  showRadialProgress ? "block" : "hidden"
                }`}
                style={{ zIndex: 9999 }}
              >
                <div className="relative h-16 w-16">
                  <svg
                    className="absolute top-0 left-0 h-full w-full transform -rotate-90"
                    viewBox="0 0 16 16"
                  >
                    <circle
                      className="text-orange-500 stroke-current transition-transform duration-500 ease-in-out"
                      cx="8"
                      cy="8"
                      r="7"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="43"
                      strokeDashoffset={43 - (readPercentage / 100) * 43}
                    ></circle>
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-gray-700 font-bold text-xs">
                    {Math.round(readPercentage)}%
                  </span>
                </div>
              </div>
              <Toc
                markdownText={blog.attributes.blogContent}
                highestHeadingLevel={1}
                lowestHeadingLevel={2}
                className="toc"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
