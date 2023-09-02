
const segTreesContent = `

[Paragraph]
  Acesta este un material introductiv in arborii de intervale si aplicatiile lor in problemele
  de informatica pentru olimpiada si concursuri. Exista foarte multe tehnici legate de acest
  subiect, insa ma voi rezuma la lucrurile esentiale pe care cineva care participa la olimpiada
  ar trebui sa le cunoasca si stapani.
[/Paragraph]

[Subtitle] Introducere [/Subtitle]

[Paragraph] 
  De multe ori intalnim probleme de informatica care necesita calcule pe subsecventele unui
  vector (precum sa aflam maximul, minimul sau chiar suma pe o anumita subsecventa).
  De obicei aceste probleme sunt usor de rezolvat cand sirul este constant (nu se modifica).
  Pentru a calcula suma pe o subsecventa vom construi un vector de sume partiale. Pentru a
  afla minimul / maximul vom folosi RMQ. Insa daca sirul nu este constant, iar acesta sufera
  modificari in "timp real", atunci avem nevoie de o structura de date mai complexa. Aici ne
  vin in ajutor arborii de intervale.
[/Paragraph]

[Subtitle] Ce sunt mai exact arborii de intervale? [/Subtitle]

[Math]
Ne propunem sa rezolvam urmatoarea problema clasica de arbori de intervale [InlineLink] problema | https://infoarena.ro/problema/arbint [/InlineLink]. Se da un vector cu $n$ numere naturale, indexat de la $1$. Ne
  propunem sa cream o structura de date eficienta care sa permita urmatoarele doua operatii:
[/Math]

[IndexedMath]
  • $  1\\; st\\; dr\\; $ - Sa se determine suma pe intervalul $ [st, dr] (v_{st} + v_{st+1} + ... + v_{dr}) $
[/IndexedMath]

[IndexedMath]
• $ 2\\; pos\\; val\\;  $ - Sa se schimbe valoarea elementului de pe pozitia $pos$ in $val$
[/IndexedMath]

[Math]
  \\nUn arbore de intervale este un arbore binar in care fiecare nod contine informatii asociate
  unui anumit interval (subsecveta) din sirul original. Asociem asadar fiecarui nod o informatie
  suplimentara care ne va ajuta sa obtinem rezultatul dorit (in cazul de fata suma) pe acest
  interval.
[/Math]

[IndexedMath]
  • radacina arborelui va fi nodul 1 si va avea asociat raspunsul pentru intervalul $[1,n]$\\n\\n
  • un nod $ k $ are asociat un interval $[st,dr]$, iar acesta are doi fii care se vor afla pe pozitiile $2k$ (fiul din stanga) si $2k+1$ (fiul din dreapta). Fiul din stanga va avea
raspunsul pentru intervalul $[st, mid]$, iar fiul din dreapta pentru $[mid+1, dr]$, unde mid este mijlocul intervalului parintelui, adica $mid=(st+dr)/2$\\n\\n
  • pentru a retine intregul arbore, vom avea nevoie de un vector de dimensiune $4 * nmax$,
    unde $nmax$ este dimensiunea maxima a vectorului. Acest lucru se intampla atunci
    cand ultimul nivel este necompletat.\\n\\n
  • o observatie esentiala este ca orice interval $[st,dr]$ se poate descompune in cel mult $ 2 * logn $ intervale\\n\\n
  • Un aspect de retinut este faptul ca putem folosi arborii de intervale doar pentru
operatii asociative (suma, maxim, minim, cmmdc, etc)\\n\\n\\n

[/IndexedMath]

[Math]
  Sa consideram sirul $5, 8, 6, 3, 2, 7, 2, 6$ arborele de intervale va fi:

[/Math]

`;

export default segTreesContent;

