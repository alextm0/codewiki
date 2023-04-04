import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import file from "../articles/segment.md";

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Courses from '../components/Courses'
import Features from '../components/Features'
import Articles from '../components/Articles'
import Contact from '../components/Contact'

export default function Markdown() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className='bg-white font-poppins'>
      <div className='bg-gradient-to-br from-[#102a4a] to-[#342a84]'>
        <Navbar />
        <Hero />
      </div>
      <Courses />
      <Features />
      <Articles />
      <Contact />
    </div>
  );
}