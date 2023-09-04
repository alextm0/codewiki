import React from "react";

import {
  Navbar,
  Hero,
  Courses,
  Features,
  Articles,
  Contact,
} from "../components";

function MainPage({ blogs }) {
  return (
    <div className="bg-white font-poppins">
      <div className="bg-gradient-to-br from-[#102a4a] to-[#342a84]">
        <Navbar />
        <Hero />
      </div>
      <Courses />
      <Features />
      <Articles blogs={blogs ? blogs : ""} />
      <Contact />
    </div>
  );
}

export default MainPage;
