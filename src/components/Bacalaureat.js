import React from 'react'

import Category from './Category'

function Bacalaureat() {
  return (
    <div className='max-w-[1024px] mx-auto'>
      <Category categoryName={"Algoritmi elementari"} categoryDescription={"Clasa IX - X"} topics={[
        {
          name: "Algoritmi pe cifrele unui numar",
          tag: "mars",
          description: "Aflarea numarului de cifre, sumei cifrelor. Adaugarea si eliminarea de cifre. Oglinditul. Verificare palindrom. Concatenarea a doua numere",
          stars: 5
        },
        {
          name: "Divizibilitate & Primalitate",
          tag: "mars",
          description: "Determinarea numarului de divizori. Descompunerea in factori primi. Verificarea primalitatii. Algoritmul lui Euclid. Ciurul lui Eratostene",
          stars: 5
        },
        {
          name: "Analiza complexitatii unui algoritm",
          tag: "mars",
          description: "Determinarea eficientei in timp si spatiu a algoritmilor",
          stars: 4
        }
      ]} />

      <Category categoryName={"Subprograme"} categoryDescription={"Clasa X"} topics={[
        {
          name: "Subprograme care returneaza valori",
          description: "",
          tag: "mars",
          stars: 5
        },
        {
          name: "Subprograme care nu returneaza valori",
          description: "",
          tag: "mars",
          stars: 5
        },
        {
          name: "Subprograme care prelucreaza tablouri",
          description: "",
          tag: "mars",
          stars: 4
        },
        {
          name: "Recursivitate",
          description: "Transformarea algoritmilor iterativi in algoritmi recursive",
          tag: "mars",
          stars: 4
        },
        {
          name: "Probleme cu recursivitate",
          tag: "mars",
          description: "Probleme cu cifrele unui numar. Divide et Impera",
          stars: 4
        },
      ]} />

      <Category categoryName={"Vectori"} categoryDescription={"Clasa IX"} topics={[
        {
          name: "Sortarea vectorilor",
          tag: "mars",
          description: "Bubble Sort. Selection Sort. Insertion Sort. Merge Sort. Quick Sort",
          stars: 1
        },
        {
          name: "Cautare secventiala si binara",
          tag: "mars",
          description: "Cautarea unui element intr-un vector sortat. Prima si ultima aparatie a unei valori. Complexitatea celor doi algoritmi",
          stars: 3
        },
        {
          name: "Probleme cu secvente",
          tag: "mars",
          description: "Cea mai lunga secventa de elemente egale; ordonate crescator. Determinarea indicilor subsecventei de suma maxima",
          stars: 3
        },
        {
          name: "Interclasarea",
          tag: "mars",
          description: "Tehnica celor doi indici si studierea complexitatii",
          stars: 3
        },
        {
          name: "Vectori caracteristici / de frecventa",
          tag: "mars",
          description: "Probleme diverse pentru a exemplifica utilitatea celor doua tipuri de tablouri unidimensionale",
          stars: 3
        },

      ]} />
      <Category categoryName={"Matrice"} categoryDescription={"Clasa X"} topics={[
        {
          name: "Parcurgerea matricelor oarecare / patratice",
          tag: "mars",
          description: "Zone speciale din matrice.",
          stars: 1
        },
        {
          name: "Generari de matrice",
          tag: "mars",
          description: "Probleme cu generari de matrice",
          stars: 3
        },
        {
          name: "Algoritmi elementari pe matrice",
          tag: "mars",
          description: "Eliminare / adauga de linii si coloane",
          stars: 3
        },
      ]} />
      <Category categoryName={"Siruri de caractere"} categoryDescription={"Clasa X - Clasa XI"} topics={[
        {
          name: "Functii predefinite",
          tag: "mars",
          description: "Utilizarea functiilor din libraria <cstring>",
          stars: 1
        },
        {
          name: "Prelucrare cu siruri de caractere",
          tag: "mars",
          description: "Probleme folosind functiile predefinite",
          stars: 3
        }
      ]} />
      <Category categoryName={"Backtracking"} categoryDescription={"Clasa XI"} topics={[
        {
          name: "Generarea elementelor de combinatorica",
          tag: "mars",
          description: "Generarea de permutari, combinari, aranjamente, produs cartezian",
          stars: 1
        },
        {
          name: "Backtracking in plan",
          tag: "mars",
          description: "Problema reginelor. Problema pe tabla de sah. Cautarea unui cuvant intr-o matrice",
          stars: 3
        }
      ]} />
      <Category categoryName={"Grafuri"} categoryDescription={"Clasa XI"} topics={[
        {
          name: "Teoria grafurilor neorientate",
          tag: "mars",
          description: "Proprietati ale grafurilor neorienate",
          stars: 1
        },
        {
          name: "Parcurgerea grafurilor neorientate",
          tag: "mars",
          description: "Parcurgerile in latime (BFS) si adancime (DFS). Componente conexe",
          stars: 3
        },
        {
          name: "Teoria grafurilor orientate",
          tag: "mars",
          description: "Proprietati ale grafurilor orientate",
          stars: 3
        },
        {
          name: "Parcurgerea grafurilor neorientate",
          tag: "mars",
          description: "Sortare Topologica. Componenta Tare Conexe",
          stars: 3
        },
        {
          name: "Arbori cu radacina",
          tag: "mars",
          description: "Proprietati ale arborilor cu radacina. Vectorii de tati",
          stars: 3
        },

      ]} />
    </div>
  )
}

export default Bacalaureat