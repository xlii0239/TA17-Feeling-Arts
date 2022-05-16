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

function NormalAbout3dPrinting() {
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
          <ul class="breadcrumb bg-transparent font-weight-bold">
              <li className="breadcrumb-item"><a href="homepage" className="text-dark font-weight-bold">Home</a></li>
              <li className="breadcrumb-item"><a href="normalmode" className="text-dark font-weight-bold">Picture Mode</a></li>
              <li className="breadcrumb-item"><a href="3d-model-home" className="text-dark font-weight-bold">Art through Touch</a></li>
              <li className="breadcrumb-item">3D Model Print Advice</li>
          </ul>
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

export default NormalAbout3dPrinting;
