import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import FooterForWeb from "components/footers/FooterForWeb.js";
import SimplePage from "simple-mode/SimplePage.js";


function HomepageSimple() {
    React.useEffect(() => {
        document.body.classList.add("homepage-simple");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("homepage-simple");
        };
    });
    return (
        <>
            <div className="wrapper">
                <NavbarForHome />
                <SimplePage />
                <br></br>
                <br></br>
                <br></br>
                <FooterForWeb />
            </div>
        </>
    );
}

export default HomepageSimple;
