import React from 'react'

import Category from './Category'

function Bacalaureat() {
  return (
    <div className='max-w-[1024px] mx-auto'>
      <Category categoryName={"Algoritmi elementari"} categoryDescription={"Clasa IX - X"} topics={[
        {
          name: "Algoritmi pe cifrele unui numar",
          description: "Aflarea numarului de cifre, sumei cifrelor. Adaugarea si eliminarea de cifre. Oglinditul. Verificare palindrom. Concatenarea a doua numere",
          stars: 5
        },
        {
          name: "Divizibilitate & Primalitate",
          description: "Determinarea numarului de divizori. Descompunerea in factori primi. Verificarea primalitatii. Algoritmul lui Euclid. Ciurul lui Eratostene",
          stars: 5
        },
        {
          name: "Analiza complexitatii unui algoritm",
          description: "Determinarea eficientei in timp si spatiu a algoritmilor",
          stars: 4
        }
      ]} />

      <Category categoryName={"Subprograme"} categoryDescription={"Vestibulum diam nunc"} topics={[
        {
          name: "Subprograme care returneaza valori",
          description: "",
          stars: 5
        },
        {
          name: "Subprograme care nu returneaza valori",
          description: "",
          stars: 5
        },
        {
          name: "Subprograme care prelucreaza tablouri",
          description: "",
          stars: 4
        },
        {
          name: "Recursivitate",
          description: "Transformarea algoritmilor iterativi in algoritmi recursive",
          stars: 4
        },
        {
          name: "Probleme cu recursivitate",
          description: "Probleme cu cifrele unui numar. Divide et Impera",
          stars: 4
        },
      ]} />

      <Category categoryName={"Vectori"} categoryDescription={"Vestibulum diam nuac"} topics={[
        {
          name: "Sortarea vectorilor",
          description: "Bubble Sort. Selection Sort. Insertion Sort. Merge Sort. Quick Sort",
          stars: 1
        },
        {
          name: "Cautare secventiala si binara",
          description: "Cautarea unui element intr-un vector sortat. Prima si ultima aparatie a unei valori. Complexitatea celor doi algoritmi",
          stars: 3
        },
        {
          name: "Probleme cu secvente",
          description: "Cea mai lunga secventa de elemente egale; ordonate crescator. Determinarea indicilor subsecventei de suma maxima",
          stars: 3
        },
        {
          name: "Interclasarea",
          description: "Tehnica celor doi indici si studierea complexitatii",
          stars: 3
        },
        {
          name: "Vectori caracteristici / de frecventa",
          description: "Probleme diverse pentru a exemplifica utilitatea celor doua tipuri de tablouri unidimensionale",
          stars: 3
        },

      ]} />
      <Category categoryName={"Matrice"} categoryDescription={"Vestibulum diam nuac"} topics={[
        {
          name: "Parcurgerea matricelor oarecare / patratice",
          description: "Zone speciale din matrice.",
          stars: 1
        },
        {
          name: "Generari de matrice",
          description: "Probleme cu generari de matrice",
          stars: 3
        },
        {
          name: "Algoritmi elementari pe matrice",
          description: "Eliminare / adauga de linii si coloane",
          stars: 3
        },
      ]} />
      <Category categoryName={"Siruri de caractere"} categoryDescription={"Vestibulum diam nuac"} topics={[
        {
          name: "Functii predefinite",
          description: "Utilizarea functiilor din libraria <cstring>",
          stars: 1
        },
        {
          name: "Prelucrare cu siruri de caractere",
          description: "Probleme folosind functiile predefinite",
          stars: 3
        }
      ]} />
      <Category categoryName={"Backtracking"} categoryDescription={"Vestibulum diam nuac"} topics={[
        {
          name: "Generarea elementelor de combinatorica",
          description: "Generarea de permutari, combinari, aranjamente, produs cartezian",
          stars: 1
        },
        {
          name: "Backtracking in plan",
          description: "Problema reginelor. Problema pe tabla de sah. Cautarea unui cuvant intr-o matrice",
          stars: 3
        }
      ]} />
      <Category categoryName={"Grafuri"} categoryDescription={"Vestibulum diam nuac"} topics={[
        {
          name: "Teoria grafurilor neorientate",
          description: "Proprietati ale grafurilor neorienate",
          stars: 1
        },
        {
          name: "Parcurgerea grafurilor neorientate",
          description: "Parcurgerile in latime (BFS) si adancime (DFS). Componente conexe",
          stars: 3
        },
        {
          name: "Teoria grafurilor orientate",
          description: "Proprietati ale grafurilor orientate",
          stars: 3
        },
        {
          name: "Parcurgerea grafurilor neorientate",
          description: "Sortare Topologica. Componenta Tare Conexe",
          stars: 3
        },
        {
          name: "Arbori cu radacina",
          description: "Proprietati ale arborilor cu radacina. Vectorii de tati",
          stars: 3
        },

      ]} />
    </div>
  )
}

export default Bacalaureat