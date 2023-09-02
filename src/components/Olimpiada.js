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
            tag: "mars",
            description: "",
            stars: 3
          },
          {
            name: "Sortarea topologica",            
            tag: "mars",
            description: "",
            stars: 2
          },
          {
            name: "Algoritmul lui Kruskal",            
            tag: "mars",
            description: "",
            stars: 4
          },
          {
            name: "Algoritmul lui Tarjan",            
            tag: "mars",
            description: "",
            stars: 3
          }
        ]} />

        <Category categoryName={"Programare Dinamica"} categoryDescription={"Clasa XI-XII"} topics={[
          {
            name: "Introducere in DP",            
            tag: "mars",
            description: "",
            stars: 4
          },
          {
            name: "Problema rucsacului",            
            tag: "mars",
            description: "",
            stars: 3
          },
          {
            name: "Secventa crescatoare de lungime maxima",            
            tag: "mars",
            description: "",
            stars: 3
          },
          {
            name: "Bitmask DP",            
            tag: "mars",
            description: "",
            stars: 3
          },
          {
            name: "Digit DP",            
            tag: "mars",
            description: "",
            stars: 2
          }
        ]} />

        <Category categoryName={"Combinatorica"} categoryDescription={"Clasa XI-XII"} topics={[
          {
            name: "Divizibilitate",            
            tag: "mars",
            description: "",
            stars: 4
          },
          {
            name: "Combinari. Triunghiul lui Pascal",            
            tag: "mars",
            description: "",
            stars: 4
          },
          {
            name: "Ridicarea la putere in timp logaritmic",            
            tag: "mars",
            description: "",
            stars: 4
          },
          {
            name: "Invers modular",            
            tag: "mars",
            description: "",
            stars: 4
          },
          {
            name: "Numere Catalan. Numere Narayana",            
            tag: "mars",
            description: "",
            stars: 2
          }
        ]} />
      </div>
    </div>
  )
}

export default Olimpiada