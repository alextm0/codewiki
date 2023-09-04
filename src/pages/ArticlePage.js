import React from "react";

import { Navbar, Articles, PageDivider } from "../components";

function ArticlePage({ blogs }) {
  return (
    <div className="bg-white font-poppins">
      <div className="bg-gradient-to-br from-[#102a4a] to-[#342a84] mb-16">
        <Navbar />
        <PageDivider />
      </div>
      <Articles blogs={blogs ? blogs : ""} />
    </div>
  );
}

export default ArticlePage;
