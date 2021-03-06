import React from "react";


// Core Components
import NavbarForHome from "components/a17component/navbars/NavbarForHome.js";
import FooterForWeb from "a17component/footers/FooterForWeb.js";
import NormalPage from "views/normal-mode/NormalPage.js";
import NavbarPrimary from "components/a17components/navbars/NavbarPrimary.js";


function HomepageNormal() {
    React.useEffect(() => {
        document.title = "Feeing Arts-Normal Mode"
        document.body.classList.add("homepage-normal");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("homepage-normal");
        };
    });
    return (
        <>
            <div className="wrapper">
                <NavbarPrimary />
                <NormalPage />
                <FooterForWeb />
            </div>
        </>
    );
}

export default HomepageNormal;
