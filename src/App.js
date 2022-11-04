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
      <Route path="/" element={<MainPage />} />
      <Route path="/codewiki" element={<MainPage />} />
      <Route path="/articles" element={<ArticlePage />} />
      <Route path='/admitere' element={<AdmiterePage />} />
      <Route path='/bacalaureat' element={<BacalaureatPage />} />
      <Route path='/olimpiada' element={<OlimpiadaPage />} />
      <Route path='/blog' element={<Post />} />
      <Route path='/learn' element={<StartLearningPage />} />
      <Route path='/problems' element={<ErrorPage />} />
      <Route path='/signup' element={<ErrorPage />} />
      <Route path='/login' element={<ErrorPage />} />
    </Routes>
  )
}