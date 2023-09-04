import React from "react";

import { Navbar, PageDivider, Bacalaureat } from "../components";

function AdmiterePage() {
  return (
    <div className="bg-white font-poppins">
      <div className="bg-gradient-to-br from-[#102a4a] to-[#342a84] mb-16">
        <Navbar />
        <PageDivider />
      </div>
      <Bacalaureat />
    </div>
  );
}

export default AdmiterePage;
