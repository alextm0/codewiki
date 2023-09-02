
const segTreesContent = `
[Math]
  La operatia update (imaginea 2) incepem sa cautam din radacina pozitia elementului pe
  care trebuie sa-l actualizam. In functie de intervalul care contine pozitia cautata ne deplasam
  fie pe fiul din stanga, fie pe cel din dreapta. Odata ce am ajuns intr-un nod de tip frunza,
  actualizam valoarea pozitiei si utilizam o abordare de tipul $bottom − up$ pana la radacina
  pentru a schimba si valoarea intervalelor care contin valorea modificata.\\n\\n

  La operatia de interogare (imaginea 3) incepem o recursie din radacina arborelui, iar
  cand ne aflam intr-un nod verificam daca acesta se afla complet in interval (atunci adaugam
  valorea nodului la rezultat si ne oprim), daca se afla complet in afara intervalului (ne oprim
  pentru ca nodul nu afecteaza intervalul nostru) sau daca se afla partial, caz in care vom
  merge aduna rezultatele fiilor. Pentru a afla suma segmentelui [3, 8], putem observa ca se
  descompune in intervalele [3, 4] + [5, 8], a caror suma o stim in urma recursiei.
[/Math]

`;

export default segTreesContent;

