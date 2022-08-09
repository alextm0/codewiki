import React, { useEffect } from 'react'

import AOS from 'aos'
import "aos/dist/aos.css";

import MainPage from './pages/MainPage'
import ArticlePage from './pages/ArticlePage'

import { Route, Routes } from 'react-router-dom'

export default function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <Routes>
      <Route path="/" element={ <MainPage /> }/>
      <Route path="/articles" element={ <ArticlePage /> } />
    </Routes>
  )
}