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
import ReactMarkdown from "react-markdown";
import { InlineMath, BlockMath } from "react-katex";
import remarkGfm from "remark-gfm"; // Import the remark-gfm plugin
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function Post({ blogs }) {
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
        <div className="max-w-full md:max-w-[1024px] px-6 md:py-16 space-y-12 text-gray-800">
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

          {/* TABLE OF CONTENTS - MOBILE */}
          <div className="flex flex-col gap-5 md:hidden">Table of contents</div>

          {/* BLOG CONTENT */}
          <div className="max-w-[900px] text-gray-700">
            {/* eslint-disable-next-line  */}
            <ReactMarkdown
              children={blog.attributes.blogContent}
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex, rehypeRaw]}
              className="markdown"
              escapeHtml={true}
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
              }}
            />
          </div>
        </div>
        {/* TABLE OF CONTENTS - DESKTOP */}
        <div className="hidden md:flex md:flex-col gap-5 md:mt-20">
          Table of contents
        </div>
      </div>
    </div>
  );
}

export default Post;
