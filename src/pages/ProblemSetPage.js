import React from "react";

import { Navbar, PageDivider } from "../components";
import { useParams } from "react-router-dom";

import { ProblemSetTable } from "../components";

function ProblemSetPage() {
  const { slug } = useParams();

  return (
    <div className="bg-white font-poppins">
      <div className="bg-gradient-to-br from-[#102a4a] to-[#342a84] mb-16">
        <Navbar />
        <PageDivider />
      </div>

      <div className="flex justify-center">
        <div className="pb-16 pt-12 gap-10 w-[1024px]">
          <ProblemSetTable
            problemSet={[
              {
                link: "https://infoarena.ro/problema/arbint",
                name: "Arbori de intervale",
                source: "Infoarena",
                sourceLink: "https://infoarena.ro",
                tags: "Arbori de intervale",
                badge: "easy",
              },
              {
                link: "https://infoarena.ro/problema/datorii",
                name: "Datorii",
                source: "Infoarena",
                sourceLink: "https://infoarena.ro",
                tags: "Arbori de intervale",
                badge: "easy",
              },
              {
                link: "https://www.pbinfo.ro/probleme/2090/actualizare-element-minim-interval",
                name: "Minim interval",
                source: "Pbinfo",
                sourceLink: "https://pbinfo.ro",
                tags: "Arbori de intervale",
                badge: "easy",
              },
              {
                link: "https://www.pbinfo.ro/probleme/2094/actualizare-element-cmmdc-interval",
                name: "CMMDC interval",
                source: "Pbinfo",
                sourceLink: "https://pbinfo.ro",
                tags: "Arbori de intervale",
                badge: "normal",
              },
              {
                link: "https://www.pbinfo.ro/probleme/2093/actualizare-element-stergere-minim",
                name: "Stergere minim",
                source: "Pbinfo",
                sourceLink: "https://pbinfo.ro",
                tags: "Arbori de intervale",
                badge: "normal",
              },
              {
                link: "https://www.pbinfo.ro/probleme/2095/descompunere-in-intervale",
                name: "Descompunere intervale",
                source: "Pbinfo",
                sourceLink: "https://pbinfo.ro",
                tags: "Arbori de intervale",
                badge: "normal",
              },
              {
                link: "https://www.infoarena.ro/problema/rest",
                name: "Rest",
                source: "Infoarena",
                sourceLink: "https://infoarena.ro",
                tags: "Arbori de intervale",
                badge: "hard",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default ProblemSetPage;
