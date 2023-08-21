const segTreesContent = `


[Subtitle] EUCLID BLOG POST [/Subtitle]

[Paragraph] 
  Acesta este un material introductiv in arborii de intervale care prezinta cum se construiesc, dar si un mod intuitiv
  de a rezolva aplicatiile or in probleme de olimpiada. Exista foarte multe tehnici legate de acest topic, insa
  ma voi rezuma la lucrurile esentiale pe care cineva care este interesat sau care participa la olimpiada ar trebui sa le stie
[/Paragraph]
  
[Paragraph] 
  Acesta este un material introductiv in arborii de intervale care prezinta cum se construiesc, dar si un mod intuitiv
  de a rezolva aplicatiile lor in probleme de olimpiada. Exista foarte multe tehnici legate de acest topic, insa
  ma voi rezuma la lucrurile esentiale pe care cineva care este interesat sau care participa la olimpiada ar trebui sa le stie.
[/Paragraph]

[Paragraph]
  De mult ori ne intalnim cu probleme care necesita calcule pe subsecvente ale unui sir, precum
  maximul / minimul pe un interval (RMQ), suma pe un interval (sume partiale) si care dupa stiti exista mai multe metode, insa capitolul
  la care arborii de intervale sunt necesari este atunci cand sirul se modifica in timp real, neputand sa tratam modificarile separat.
[/Paragraph]

[Subtitle] 
  Problema clasica 
[/Subtitle] 


[Math]
  Vrem sa rezolvam urmatoarea [InlineLink] problema | https://infoarena.ro/problema/arbint [/InlineLink]. Se da un vector cu $n$ numere naturale, indexat de la $1$. Ne
  propunem sa cream o structura de date eficienta care sa permita urmatoarele doua operatii:
[/Math]

[IndexedMath]
  • $  1\\; st\\; dr\\; $ - Sa se determine suma pe intervalul $ [st, dr] (v_{st} + v_{st+1} + ... + v_{dr}) $
[/IndexedMath]

[IndexedMath]
• $ 2\\; pos\\; val\\;  $ - Sa se schimbe valoarea elementului de pe pozitia $pos$ in $val$
[/IndexedMath]




`;

export default segTreesContent;

