import React from "react";

import Category from "./Category";

function Admitere() {
  return (
    <div className="max-w-[1024px] mx-auto">
      <div className="max-w-[1024px] mx-auto">
        <Category
          category={"admitere"}
          categoryName={"Algoritmi elementari"}
          categoryDescription={"Clasa IX"}
          topics={[
            {
              name: "Algoritmi pe cifrele unui numar",
              slug: "mars",
              description:
                "Aflarea numarului de cifre, sumei cifrelor. Adaugarea si eliminarea de cifre. Oglinditul. Verificare palindrom. Concatenarea a doua numere",
              stars: 5,
            },
            {
              name: "Divizibilitate",
              slug: "mars",
              description:
                "Determinarea numarului de divizori. Descompunerea in factori primi. Algoritmul lui Euclid",
              stars: 5,
            },
            {
              name: "Numere prime & Ciurul lui Eratostene",
              slug: "mars",
              description:
                "Intelegerea ciurului lui Eratostene, verificarea primalitatii si probleme care deriva din acest algoritm",
              stars: 4,
            },
            {
              name: "Analiza complexitatii unui algoritm",
              slug: "mars",
              description:
                "Determinarea eficientei in timp si spatiu a algoritmilor",
              stars: 4,
            },
            {
              name: "Baze de numeratie",
              slug: "mars",
              description:
                "Transformarea unui numar din baza 10 in baza 2. Lucrul in baza 2",
              stars: 2,
            },
          ]}
        />
        <Category
          category={"admitere"}
          categoryName={"Subprograme"}
          categoryDescription={"Clasa X"}
          topics={[
            {
              name: "Subprograme care returneaza valori",
              slug: "mars",
              description: "",
              stars: 5,
            },
            {
              name: "Subprograme care nu returneaza valori",
              slug: "mars",
              description: "",
              stars: 5,
            },
            {
              name: "Subprograme care prelucreaza tablouri",
              slug: "mars",
              description: "",
              stars: 4,
            },
            {
              name: "Recursivitate",
              slug: "mars",
              description:
                "Transformarea algoritmilor iterativi in algoritmi recursive",
              stars: 4,
            },
            {
              name: "Probleme cu recursivitate",
              slug: "mars",
              description: "Probleme cu cifrele unui numar. Divide et Impera",
              stars: 4,
            },
          ]}
        />

        <Category
          category={"admitere"}
          categoryName={"Vectori"}
          categoryDescription={"Clasa IX - Clasa X"}
          topics={[
            {
              name: "Sortarea vectorilor",
              slug: "mars",
              description:
                "Bubble Sort. Selection Sort. Insertion Sort. Merge Sort. Quick Sort",
              stars: 1,
            },
            {
              name: "Cautare secventiala si binara",
              slug: "mars",
              description:
                "Cautarea unui element intr-un vector sortat. Prima si ultima aparatie a unei valori. Complexitatea celor doi algoritmi",
              stars: 3,
            },
            {
              name: "Probleme cu secvente",
              slug: "mars",
              description:
                "Cea mai lunga secventa de elemente egale; ordonate crescator. Determinarea indicilor subsecventei de suma maxima",
              stars: 3,
            },
            {
              name: "Interclasarea",
              slug: "mars",
              description:
                "Tehnica celor doi indici si studierea complexitatii",
              stars: 3,
            },
            {
              name: "Vectori caracteristici / de frecventa",
              slug: "mars",
              description:
                "Probleme diverse pentru a exemplifica utilitatea celor doua tipuri de tablouri unidimensionale",
              stars: 3,
            },
          ]}
        />
        <Category
          category={"admitere"}
          categoryName={"Matrice"}
          categoryDescription={"Clasa X"}
          topics={[
            {
              name: "Parcurgerea matricelor oarecare / patratice",
              slug: "mars",
              description: "Zone speciale din matrice.",
              stars: 1,
            },
            {
              name: "Generari de matrice",
              slug: "mars",
              description: "Probleme cu generari de matrice",
              stars: 3,
            },
            {
              name: "Algoritmi elementari pe matrice",
              slug: "mars",
              description: "Eliminare / adauga de linii si coloane",
              stars: 3,
            },
          ]}
        />
        <Category
          category={"admitere"}
          categoryName={"Siruri de caractere"}
          categoryDescription={"Clasa XI"}
          topics={[
            {
              name: "Functii predefinite",
              slug: "mars",
              description: "Utilizarea functiilor din libraria <cstring>",
              stars: 1,
            },
            {
              name: "Prelucrare cu siruri de caractere",
              slug: "mars",
              description: "Probleme folosind functiile predefinite",
              stars: 3,
            },
          ]}
        />
        <Category
          category={"admitere"}
          categoryName={"Backtracking"}
          categoryDescription={"Clasa XI"}
          topics={[
            {
              name: "Generarea elementelor de combinatorica",
              slug: "mars",
              description:
                "Problema reginelor. Problema pe tabla de sah. Cautarea unui cuvant intr-o matrice",
              stars: 1,
            },
            {
              name: "Backtracking in plan",
              slug: "mars",
              description:
                "Problema reginelor. Problema pe tabla de sah. Cautarea unui cuvant intr-o matrice",
              stars: 3,
            },
          ]}
        />
        <Category
          category={"admitere"}
          categoryName={"Grafuri"}
          categoryDescription={"Clasa XI"}
          topics={[
            {
              name: "Teoria grafurilor neorientate",
              slug: "mars",
              description: "Proprietati ale grafurilor neorienate",
              stars: 1,
            },
            {
              name: "Parcurgerea grafurilor neorientate",
              slug: "mars",
              description:
                "Parcurgerile in latime (BFS) si adancime (DFS). Componente conexe",
              stars: 3,
            },
            {
              name: "Teoria grafurilor orientate",
              slug: "mars",
              description: "Proprietati ale grafurilor orientate",
              stars: 3,
            },
            {
              name: "Parcurgerea grafurilor neorientate",
              slug: "mars",
              description: "Sortare Topologica. Componenta Tare Conexe",
              stars: 3,
            },
            {
              name: "Arbori cu radacina",
              slug: "mars",
              description:
                "Proprietati ale arborilor cu radacina. Vectorii de tati",
              stars: 3,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Admitere;
