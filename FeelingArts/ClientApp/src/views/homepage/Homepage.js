import React, { useCallback } from "react";
import { Container, Row, Col } from "reactstrap";

import {
    useLocation
} from "react-router-dom";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import FooterForWeb from "components/a17components/footers/FooterForWeb.js";
import HeaderForHome from "components/a17components/headers/HeaderForHome.js";
import BlogsForHome from "components/a17components/blogs/BlogsForHome.js";




function HomePage() {
    React.useEffect(() => {
        document.title = "Feeing Arts-Home Page"
        document.body.classList.add("home-page");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("home-page");
        };
    });

    return (
        <>
            <NavbarForHome type="transparent" />
            <div className="wrapper">
                <HeaderForHome />
                <div className="main main-raised">
                    <Container>
                        <Row>
                            <Col lg="12" md="12">
                                <BlogsForHome />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <FooterForWeb />
            </div>
        </>
    );
}

export default HomePage;
