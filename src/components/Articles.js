import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import BlogPost from './BlogPost'
import LoadingCard from './LoadingCard'

function Articles() {
  const [moreArticles, setMoreArticles] = useState([])

  function loadMoreArticles() {
    const articleRow =
      <div className="flex justify-center flex-col md:flex-row gap-10 md:gap-5 pt-10 px-10">
        <Link to={'/codewiki/blog/euclid/'}>
          <div data-aos="fade-up" data-aos-delay="150">
            <BlogPost badge="OLIMPIADA" title="Algoritmul lui Euclid. " 
            description = "In acest articol voi prezenta conceptele de CMMDC si CMMMC, precum si algoritmul lui Euclid prin cele doua ..."/>
          </div>
        </Link>
        <Link to={'/codewiki/blog/mars'}>
          <div data-aos="fade-up" data-aos-delay="300">
            <BlogPost badge="OLIMPIADA" title="Smenul lui Mars" 
            description= "Smenul lui Mars este o metoda eficienta de a efectua un anumit tip de operatii asupra unui vector ..."/>
          </div>
        </Link>
        <Link to={'/codewiki/blog/parantezare'}>
          <div data-aos="fade-up" data-aos-delay="450">
            <BlogPost badge="BACALAUREAT" title = "Programare dinamica" 
            description = "Parantezarea optima de matrice este o problema fundamentala in studiul programarii dinamice, deoacare poate ..." />
          </div>
        </Link>
      </div>

    setMoreArticles((prevArticles) => {
      return [...prevArticles, articleRow];
    })
  }

  return (
    <div className="mx-auto pt-10 pb-10">
      <div className="text-center mb-5">
        <h1 className="text-gray-900 font-quicksand font-bold text-4xl">
          <div data-aos="fade-down" data-aos-delay="150">
            Articole recente
          </div>
        </h1>
      </div>

      {/* Row 1 */}
      <div className="flex justify-center flex-col md:flex-row gap-10 md:gap-5 pt-10 px-10">
        <Link to={'/codewiki/blog/euclid'}>
          <div data-aos="fade-up" data-aos-delay="650">
            <BlogPost badge="ADMITERE" title="Backtracking in plan. Elemente de combinatorica" date="16 septembrie 2022"
              description="Probleme care se rezolva prin metoda backtracking in plan au ca cerinta deplasarea in tablou, pe linii coloane sau diagonale sau prin saritura dintr-un punct in alt punct al tabloului ... " />
          </div>
        </Link>
        <Link to={'/codewiki/blog/mars'}>
          <div data-aos="fade-up" data-aos-delay="800">
            <BlogPost badge="BACALAUREAT" title="Analiza complexitatii unui algoritm in timp si spatiu"
            description = "Complexitatea unui algoritm reprezinta un mod de a masura eficienta unui algoritm in functie de cat de multe resurse consuma acesta din punct de vedere al memoriei si al timpului ... " />
          </div>
        </Link>
        <Link to={'/codewiki/blog/parantezare'}>
          <div data-aos="fade-up" data-aos-delay="950">
            <BlogPost badge="ADMITERE" title="Metode de sortare ale tablourilor unidimensionale"
            description = "Problema sortarii consta in rearanjarea unei colectii aflate in memoria interna astfel incat cheile articolelor sa fie ordonate respectand o anumita conditie. Sortarea prin selectie, bubble sort ..." />
          </div>
        </Link>
      </div>

      {/* Row 2 */}
      <div className="flex justify-center flex-col md:flex-row gap-10 md:gap-5 pt-10 px-10">
        <Link to={'/codewiki/blog/euclid'}>
          <div data-aos="fade-up" data-aos-delay="150">
            <BlogPost badge="OLIMPIADA" title="Arbori de intervale" date="1 martie 2023"
            description = "Foarte multe probleme de informatica de olimpiada se reduc la calcule pe subsecvente ale unui sir (suma, maximul, minim). Aici intervin arborii de intervale" />
          </div>
        </Link>

        <Link to={'/codewiki/blog/mars'}>
          <div data-aos="fade-up" data-aos-delay="300">
            <BlogPost badge="ADMITERE" title="Cautare Binara" date="16 ianuarie 2023"
            description = "Algoritmul de cautare binara este un algoritm folosit pentru a gasi un element intr-o lista ordonata. Complexiteatea algoritmului este logaritmica deoarece ..." />
          </div>
        </Link>

        <Link to={'/codewiki/blog/parantezare'}>
          <div data-aos="fade-up" data-aos-delay="450">
            <BlogPost badge="BACALAUREAT" title="Tablouri bidimensionale" date="19 decembrie 2022"
            description = "Matricele sunt o structura de date standard, folosita pentru a stoca o colectie de date de acelasi tip, organizate pe linii si coloane..." />
          </div>
        </Link>
      </div>

      {/* Row 3 */}
      <div className="flex justify-center flex-col md:flex-row gap-10 md:gap-5 pt-10 px-10">
        <Link to={'/codewiki/blog/euclid'}>
          <div data-aos="fade-up" data-aos-delay="600">
            <BlogPost badge="OLIMPIADA" title="Probleme cu secvente pe vectori. Tehnica Two Pointers" date="27 noiembrie 2022"
            description = "Two-Pointers este o tehnica flosita adesea in concursurile de informatica. Ea nu este algoritm concret, nici macar un sablon, ci mai degraba o filosofie ..." />
          </div>
        </Link>
        <Link to={'/codewiki/blog/mars'}>
          <div data-aos="fade-up" data-aos-delay="750">
            <BlogPost badge="OLIMPIADA" title="Coada. Algoritmul lui Lee. Algoritm de tip Flood Fill" date="17 octombrie 2022" 
            description = "Algoritmul lui Lee este o aplicatie cunoscuta a cozii si este folosit pentru determinarea drumului minim dintre doua celule ale unei matrice."/>
          </div>
        </Link>
        <Link to={'/codewiki/blog/parantezare'}>
          <div data-aos="fade-up" data-aos-delay="900">
            <BlogPost badge="ADMITERE" title="Ridicarea la putere in timp logaritmic. Invers modular" date="4 octombrie 2022" 
            description = "Exponentierea logaritmica este metoda optima pentru a ridica un numar x la o putere n, ce are complexitate logaritmica. In acest articol voi prezenta cum se ..."/>
          </div>
        </Link>
      </div>



      {/* Additional content */}
      {moreArticles}

      {/* Show more button */}
      <div className='flex justify-center items-center flex-col md:flex-row gap-10 md:gap-5 pt-10 px-10'>
        <button onClick={loadMoreArticles} class="btn btn-wide text-gray-400 bg-gray-900 mt-5 mb-3">Vezi mai multe articole  </button>
      </div>
    </div>
  )
}

export default Articles