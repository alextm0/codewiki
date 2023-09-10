import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import MainPage from "./pages/MainPage";
import ArticlePage from "./pages/ArticlePage";
import AdmiterePage from "./pages/AdmiterePage";
import BacalaureatPage from "./pages/BacalaureatPage";
import OlimpiadaPage from "./pages/OlimpiadaPage";
import Post from "./pages/Post";
import StartLearningPage from "./pages/StartLearningPage.js";
import ProblemSetPage from "./pages/ProblemSetPage";
import ErrorPage from "./pages/ErrorPage.js";

import useFetch from "./hooks/useFetch";

export default function App() {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  const [storedData, setStoredData] = useState(
    JSON.parse(localStorage.getItem("strapiData")) || null
  );

  let { loading, data, error } = useFetch(
    "http://localhost:1337/api/blogs?populate=*"
  );

  useEffect(() => {
    if (data) {
      localStorage.setItem("strapiData", JSON.stringify(data));
      setStoredData(data);
    }
  }, [data]);

  if (loading && !storedData) return <p> Loading </p>;
  if (error) return <p> Error! </p>;
  if (!data && !storedData) return null;

  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage blogs={storedData ? storedData : ""} />}
      />
      <Route
        path="/codewiki"
        element={<MainPage blogs={storedData ? storedData : ""} />}
      />

      <Route
        path="/codewiki/articles"
        element={<ArticlePage blogs={storedData ? storedData : ""} />}
      />
      <Route path="/codewiki/admitere" element={<AdmiterePage />} />
      <Route path="/codewiki/bacalaureat" element={<BacalaureatPage />} />
      <Route path="/codewiki/olimpiada" element={<OlimpiadaPage />} />
      <Route path="/codewiki/learn" element={<StartLearningPage />} />
      <Route path="/codewiki/problems" element={<ErrorPage />} />
      <Route path="/codewiki/signup" element={<ErrorPage />} />
      <Route path="/codewiki/login" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />

      <Route path="/codewiki/bacalaureat/:slug" element={<ProblemSetPage />} />
      <Route path="/codewiki/admitere/:slug" element={<ProblemSetPage />} />
      <Route path="/codewiki/olimpiada/:slug" element={<ProblemSetPage />} />

      {/* ARTICLES */}
      <Route
        path="/codewiki/blog/:slug"
        element={<Post blogs={storedData ? storedData : ""} />}
        exact
      />
    </Routes>
  );
}
