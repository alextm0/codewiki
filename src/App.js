import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

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
      <Route path='/codewiki/blog' element={<Post />} />
      <Route path='/codewiki/learn' element={<StartLearningPage />} />
      <Route path='/codewiki/problems' element={<ErrorPage />} />
      <Route path='/codewiki/signup' element={<ErrorPage />} />
      <Route path='/codewiki/login' element={<ErrorPage />} />
    </Routes>
  )
}