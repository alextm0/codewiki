import React from "react";

import Rating from "./Rating";
import Category from "./Category";

function Olimpiada() {
  return (
    <div className="max-w-[1024px] mx-auto">
      <div className="max-w-[1024px] mx-auto">
        <Category
          category={"olimpiada"}
          categoryName={"Grafuri"}
          categoryDescription={"Clasa XI-XII"}
          topics={[
            {
              name: "Disjoint Set Union",
              slug: "disjoint",
              description: "",
              stars: 3,
            },
            {
              name: "Sortarea topologica",
              slug: "mars",
              description: "",
              stars: 2,
            },
            {
              name: "Algoritmul lui Kruskal",
              slug: "mars",
              description: "",
              stars: 4,
            },
            {
              name: "Algoritmul lui Tarjan",
              slug: "mars",
              description: "",
              stars: 3,
            },
          ]}
        />

        <Category
          category={"olimpiada"}
          categoryName={"Programare Dinamica"}
          categoryDescription={"Clasa XI-XII"}
          topics={[
            {
              name: "Introducere in DP",
              slug: "mars",
              description: "",
              stars: 4,
            },
            {
              name: "Problema rucsacului",
              slug: "mars",
              description: "",
              stars: 3,
            },
            {
              name: "Secventa crescatoare de lungime maxima",
              slug: "mars",
              description: "",
              stars: 3,
            },
            {
              name: "Bitmask DP",
              slug: "mars",
              description: "",
              stars: 3,
            },
            {
              name: "Digit DP",
              slug: "mars",
              description: "",
              stars: 2,
            },
          ]}
        />

        <Category
          category={"olimpiada"}
          categoryName={"Combinatorica"}
          categoryDescription={"Clasa XI-XII"}
          topics={[
            {
              name: "Divizibilitate",
              slug: "mars",
              description: "",
              stars: 4,
            },
            {
              name: "Combinari. Triunghiul lui Pascal",
              slug: "mars",
              description: "",
              stars: 4,
            },
            {
              name: "Ridicarea la putere in timp logaritmic",
              slug: "mars",
              description: "",
              stars: 4,
            },
            {
              name: "Invers modular",
              slug: "mars",
              description: "",
              stars: 4,
            },
            {
              name: "Numere Catalan. Numere Narayana",
              slug: "mars",
              description: "",
              stars: 2,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Olimpiada;
