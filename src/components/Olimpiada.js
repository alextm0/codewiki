import React from 'react'

import Rating from './Rating'
import Category from './Category'

function Olimpiada() {
  return (
    <div className='max-w-[1024px] mx-auto'>
      <div className='max-w-[1024px] mx-auto'>
        <Category categoryName={"Grafuri"} categoryDescription={"Clasa XI-XII"} topics={[
          {
            name: "Disjoint Set Union",
            description: "",
            stars: 3
          },
          {
            name: "Sortarea topologica",
            description: "",
            stars: 2
          },
          {
            name: "Algoritmul lui Kruskal",
            description: "",
            stars: 4
          },
          {
            name: "Algoritmul lui Tarjan",
            description: "",
            stars: 3
          }
        ]} />

        <Category categoryName={"Programare Dinamica"} categoryDescription={"Clasa XI-XII"} topics={[
          {
            name: "Introducere in DP",
            description: "",
            stars: 4
          },
          {
            name: "Problema rucsacului",
            description: "",
            stars: 3
          },
          {
            name: "Secventa crescatoare de lungime maxima",
            description: "",
            stars: 3
          },
          {
            name: "Bitmask DP",
            description: "",
            stars: 3
          },
          {
            name: "Digit DP",
            description: "",
            stars: 2
          }
        ]} />

        <Category categoryName={"Combinatorica"} categoryDescription={"Clasa XI-XII"} topics={[
          {
            name: "Divizibilitate",
            description: "",
            stars: 4
          },
          {
            name: "Combinari. Triunghiul lui Pascal",
            description: "",
            stars: 4
          },
          {
            name: "Ridicarea la putere in timp logaritmic",
            description: "",
            stars: 4
          },
          {
            name: "Invers modular",
            description: "",
            stars: 4
          },
          {
            name: "Numere Catalan. Numere Narayana",
            description: "",
            stars: 2
          }
        ]} />
      </div>
    </div>
  )
}

export default Olimpiada