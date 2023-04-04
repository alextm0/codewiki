import React from 'react'
import '../index.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageDivider from '../components/PageDivider'
import Rating from '../components/Rating'
import ProblemSetTable from '../components/ProblemSetTable'
import ResourcesTable from '../components/ResourcesTable'

import { MathJax, MathJaxContext } from "better-react-mathjax";

function Post() {
  const Headings = ({ headings, activeId }) => (
    <ul className='text-gray-600 font-quicksand font-semibold list-disc'>
      {headings.map((heading) => (
        <li id='headingLI' key={heading.id} className={heading.id === activeId ? "active" : ""}>
          <a
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(`#${heading.id}`).scrollIntoView({
                behavior: "smooth"
              });
            }}
          >
            {heading.title}
          </a>
          {heading.items.length > 0 && (
            <ul>
              {heading.items.map((child) => (
                <li
                  id='headingLI'
                  key={child.id}
                  className={child.id === activeId ? "active" : ""}
                >
                  <a
                    href={`#${child.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${child.id}`).scrollIntoView({
                        behavior: "smooth"
                      });
                    }}
                  >
                    {child.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  const useHeadingsData = () => {
    const [nestedHeadings, setNestedHeadings] = React.useState([]);

    React.useEffect(() => {
      const headingElements = Array.from(
        document.querySelectorAll("main h2, main h3")
      );

      const newNestedHeadings = getNestedHeadings(headingElements);
      setNestedHeadings(newNestedHeadings);
    }, []);

    return { nestedHeadings };
  };

  const getNestedHeadings = (headingElements) => {
    const nestedHeadings = [];

    headingElements.forEach((heading, index) => {
      const { innerText: title, id } = heading;

      if (heading.nodeName === "H2") {
        nestedHeadings.push({ id, title, items: [] });
      } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
        nestedHeadings[nestedHeadings.length - 1].items.push({
          id,
          title
        });
      }
    });

    return nestedHeadings;
  };

  const useIntersectionObserver = (setActiveId) => {
    const headingElementsRef = React.useRef({});
    React.useEffect(() => {
      const callback = (headings) => {
        headingElementsRef.current = headings.reduce((map, headingElement) => {
          map[headingElement.target.id] = headingElement;
          return map;
        }, headingElementsRef.current);

        const visibleHeadings = [];
        Object.keys(headingElementsRef.current).forEach((key) => {
          const headingElement = headingElementsRef.current[key];
          if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
        });

        const getIndexFromId = (id) =>
          headingElements.findIndex((heading) => heading.id === id);

        if (visibleHeadings.length === 1) {
          setActiveId(visibleHeadings[0].target.id);
        } else if (visibleHeadings.length > 1) {
          const sortedVisibleHeadings = visibleHeadings.sort(
            (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
          );

          setActiveId(sortedVisibleHeadings[0].target.id);
        }
      };

      const observer = new IntersectionObserver(callback, { root: document.querySelector("iframe"), rootMargin: "500px" });

      const headingElements = Array.from(document.querySelectorAll("h2, h3"));

      headingElements.forEach((element) => observer.observe(element));

      return () => observer.disconnect();
    }, [setActiveId]);
  };

  const TableOfContents = () => {
    const [activeId, setActiveId] = React.useState();
    const { nestedHeadings } = useHeadingsData();
    useIntersectionObserver(setActiveId);

    return (
      <nav className='flex flex-col gap-3 w-[220px] min-w-[220px] pl-2 font-medium self-start sticky top-[64px] md:top-[64px] max-h-[800px] overflow-auto' aria-label="Table of contents">
        <span className='font-bold text-orange-500'> TABLE OF CONTENTS </span>
        <Headings headings={nestedHeadings} activeId={activeId} />
      </nav>
    );
  };

  const DummyText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  const config = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"]
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"]
      ]
    }
  };

  return (
    <div className='bg-white font-poppins'>
      <div className='bg-gradient-to-br from-[#102a4a] to-[#342a84] mb-16'>
        <Navbar />
        <PageDivider />
      </div>

      <div className='md:flex pb-16 md:pb-0 gap-10 justify-center'>
        <div className="max-w-full md:max-w-[1024px] px-6 md:py-16 space-y-12 text-gray-800">
          <Rating stars={4} onBlogPost={true} />

          <div>
            {/* Title */}
            <h1 className='text-gray-800 font-bold text-4xl w-full -mt-5 -mb-3'>
              Arbori de intervale
            </h1>

            {/* Authors */}
            <h2 className='text-gray-600 font-medium text-lg mt-5 -mb-3'>
              Authors: Alexandru Toma
            </h2>
          </div>

          <div className="divider w-[95%]"></div>

          <div className='flex flex-col gap-5 md:hidden'>
            <TableOfContents />
          </div>

          <div className='max-w-[900px] font-quicksand font-semibold text-lg text-gray-700'>
            <main>
              <h2 className='text-orange-500 mb-3 pt-[16px] mt-[-16px] text-3xl font-poppins font-medium' id="motivation-header">
                Introducere
              </h2>
              <p>
                Acesta este un material introductiv in arborii de intervale care prezinta cum se construiesc, dar si un mod intuitiv
                de a rezolva aplicatiile lor in probleme de olimpiada. Exista foarte multe tehnici legate de acest topic, insa
                ma voi rezuma la lucrurile esentiale pe care cineva care este interesat sau care participa la olimpiada ar trebui sa le stie.
              </p>
              <br />

              <p className='mb-10'>
                <p>
                  De mult ori ne intalnim cu probleme care necesita calcule pe subsecvente ale unui sir, precum
                  maximul / minimul pe un interval (RMQ), suma pe un interval (sume partiale) si care dupa stiti exista mai multe metode, insa capitolul
                  la care arborii de intervale sunt necesari este atunci cand sirul se modifica in timp real, neputand sa tratam modificarile separat.
                </p>
              </p>

              <h2 className='text-orange-500 mb-3 pt-[16px] mt-[-16px] text-3xl font-poppins font-medium' id="motivation-header">
                Problema clasica
              </h2>
              <p className='mb-10'>
                <MathJaxContext version={3} config={config}>
                  <MathJax>
                    Vrem sa rezolvam urmatoarea 
                    <a className='text-[#2563eb]' href="https://infoarena.ro/problema/arbint"> problema</a>
                    . Se da un vector cu $n$ numere naturale, indexat de la $1$.
                    Ne propunem sa cream o structura de date eficienta care sa permita urmatoarele doua operatii: <br />
                  </MathJax>

                  <div className='pl-10 pt-2'>
                    <MathJax hideUntilTypeset={"first"}>
                      {`
                      • $ 1\\; st\\; dr\\; $ - Sa se determine suma pe intervalul $ [st, dr] (v_{st} + v_{st+1} + ... + v_{dr}) $
                    `}
                    </MathJax>

                    <MathJax hideUntilTypeset={"first"}>
                      {`
                  • $ 2\\; pos\\; val\\;  $ - Sa se schimbe valoarea elementului de pe pozitia $pos$ in $val$
                  `}
                    </MathJax>
                  </div>
                </MathJaxContext>
              </p>


              <ResourcesTable header={"Materiale de studiu"} resource={[
                {
                  link: "https://codeforces.com/edu/course/2/lesson/4/1",
                  source: "Codeforces EDU",
                  title: "Curs arbori de intervale",
                  description: "Un punct bun de start. Tipuri variate de probleme."
                },

                {
                  link: "https://csacademy.com/lesson/segment_trees/",
                  source: "CSAcademy",
                  title: "Arbori de intervale",
                  description: "Articol foarte bine explicat si structurat"
                },
                {
                  link: "https://usaco.guide/CPH.pdf#page=99",
                  source: "CPH",
                  title: "Arbori de intervale",
                  description: "Sunt prezentate concepte mai complexe"
                },
                {
                  link: "http://campion.edu.ro/arhiva/www/arhiva_2009/seds/25/ideea.html",
                  source: "Campion",
                  title: "Arbori de intervale",
                  description: "Implementari si animatii pentru operatii"
                },
                {
                  link: "https://cp-algorithms.com/data_structures/segment_tree.html#find-the-smallest-number-greater-or-equal-to-a-specified-number-no-modification-queries",
                  source: "CP Algo",
                  title: "Arbori de intervale",
                  description: "Material care cuprinde mai multe tipuri tipuri de probleme"
                }
              ]} />

              <br /> <br /> <br />

              <ProblemSetTable problemSet={[
                {
                  link: "https://infoarena.ro/problema/arbint",
                  name: "Arbori de intervale",
                  source: "Infoarena",
                  sourceLink: "https://infoarena.ro",
                  tags: "Arbori de intervale",
                  badge: "easy"
                },
                {
                  link: "https://infoarena.ro/problema/datorii",
                  name: "Datorii",
                  source: "Infoarena",
                  sourceLink: "https://infoarena.ro",
                  tags: "Arbori de intervale",
                  badge: "easy"
                },
                {
                  link: "https://www.pbinfo.ro/probleme/2090/actualizare-element-minim-interval",
                  name: "Minim interval",
                  source: "Pbinfo",
                  sourceLink: "https://pbinfo.ro",
                  tags: "Arbori de intervale",
                  badge: "easy"
                },
                {
                  link: "https://www.pbinfo.ro/probleme/2094/actualizare-element-cmmdc-interval",
                  name: "CMMDC interval",
                  source: "Pbinfo",
                  sourceLink: "https://pbinfo.ro",
                  tags: "Arbori de intervale",
                  badge: "easy"
                },
                {
                  link: "https://www.pbinfo.ro/probleme/2093/actualizare-element-stergere-minim",
                  name: "Stergere minim",
                  source: "Pbinfo",
                  sourceLink: "https://pbinfo.ro",
                  tags: "Arbori de intervale",
                  badge: "easy"
                },
                {
                  link: "https://www.pbinfo.ro/probleme/2095/descompunere-in-intervale",
                  name: "Descompunere intervale",
                  source: "Pbinfo",
                  sourceLink: "https://pbinfo.ro",
                  tags: "Arbori de intervale",
                  badge: "easy"
                }, 
                {
                  link: "https://www.infoarena.ro/problema/rest",
                  name: "Rest",
                  source: "Infoarena",
                  sourceLink: "https://infoarena.ro",
                  tags: "Arbori de intervale",
                  badge: "easy"
                }
              ]} />

              <h2 className='text-orange-500 mb-3 pt-[16px] mt-10 text-3xl font-poppins font-medium' id="prerequisites-header">
                Brute force
              </h2>
              <p className='mb-10'>

              </p>

              <MathJaxContext version={3} config={config}>
                <MathJax hideUntilTypeset={"first"}>
                  {
                    `Inside a MathJax block element, one might use both Latex inline math, such
                    as \\(x\\) or \\(\\frac{25x}{10} = 2^{10}\\), but then also switch
                    to Latex display math, like
                    $$ \\sum_{n = 100}^{1000}\\left(\\frac{10\\sqrt{n}}{n}\\right) $$
                    ... and then continue with inline math.
                    $O(\\log{}n)$
                    `
                  }
                </MathJax>
              </MathJaxContext>

              <h2 className='text-orange-500 mb-3 pt-[16px] mt-10 text-3xl font-poppins font-medium' id="tutorial-header">Tutorial</h2>
              <p className='mb-10'>{DummyText}</p>

              <h2 className='text-orange-500 mb-3 pt-[16px] mt-10 text-3xl font-poppins font-medium' id="solved-problems-header">Solved Problems</h2>
              <p>{DummyText}</p>
              <p className='mb-10'>{DummyText}</p>

              <h2 className='text-orange-500 mb-3 pt-[16px] mt-[-16px] text-3xl' id="fourth-header">Practice Problems</h2>
              <p>{DummyText}</p>
              <p>{DummyText}</p>
              <p>{DummyText}</p>
              <p className='mb-10'>{DummyText}</p>

              <div className='mt-10'>

              </div>
            </main>
          </div>
        </div>
        <div className='hidden md:flex md:flex-col gap-5 md:mt-20'>
          <TableOfContents />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Post