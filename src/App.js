import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AOS from 'aos'
import "aos/dist/aos.css";

import MainPage from './pages/MainPage'
import ArticlePage from './pages/ArticlePage'
import AdmiterePage from './pages/AdmiterePage'
import BacalaureatPage from './pages/BacalaureatPage'
import OlimpiadaPage from './pages/OlimpiadaPage'
import Post from './pages/Post';
import StartLearningPage from './pages/StartLearningPage.js'
import ErrorPage from './pages/ErrorPage.js'

// ARTICLES
import TestBlog from './Markdown/Articles/SegTrees/segtrees'
import SegtreeBlogPost from './Markdown/Articles/SegTrees/SegTrees_BlogPost'
import EuclidBlogPost from './Markdown/Articles/Euclid/Euclid_BlogPost'
import MarsBlogPost from './Markdown/Articles/Mars/Mars_BlogPost'
import ParantezareBlogPost from './Markdown/Articles/Parantezare/Parantezare_BlogPost'

export default function App() {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, [])

  return (
    <Routes>
      <Route path="/codewiki" element={<MainPage />} />
      <Route path="/codewiki/articles" element={<ArticlePage />} />
      <Route path='/codewiki/admitere' element={<AdmiterePage />} />
      <Route path='/codewiki/bacalaureat' element={<BacalaureatPage />} />
      <Route path='/codewiki/olimpiada' element={<OlimpiadaPage />} />
      <Route path='/codewiki/learn' element={<StartLearningPage />} />
      <Route path='/codewiki/problems' element={<ErrorPage />} />
      <Route path='/codewiki/signup' element={<ErrorPage />} />
      <Route path='/codewiki/login' element={<ErrorPage />} />

      {/* ARTICLES */}
      <Route path='/codewiki/blog/' element={<Post />} />
      <Route path='/codewiki/blog/test/' element={<TestBlog />} />
      <Route path='/codewiki/blog/aint/' element={<SegtreeBlogPost />} />
      <Route path='/codewiki/blog/euclid/' element={<EuclidBlogPost />} />
      <Route path='/codewiki/blog/mars/' element={<MarsBlogPost />} />
      <Route path='/codewiki/blog/parantezare/' element={<ParantezareBlogPost />} />
    </Routes>

  )
}