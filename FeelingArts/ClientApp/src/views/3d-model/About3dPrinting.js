import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import FooterForWeb from "components/a17components/footers/FooterForWeb.js";
import Header4 from "components/a17components/3d-printing/Header4.js";
import Feature6 from "components/a17components/3d-printing/Feature6.js";
import Feature1 from "components/a17components/3d-printing/Feature1.js";
import Pricing5 from "components/a17components/3d-printing/Pricing5.js";

function About3dPrinting() {
  React.useEffect(() => {
    document.body.classList.add("about-3d-printing-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("about-3d-printing-page");
    };
  });
  return (
    <>
          <NavbarForHome type="transparent" />
      <div className="wrapper">
        <Feature6 />
        <Feature1 />
        <br></br>
        <br></br>
        {/*<Pricing5 />*/}
        <FooterForWeb/>
      </div>
    </>
  );
}

export default About3dPrinting;
