import React from "react";
import { Container, Row, Col } from "reactstrap";

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
                            <Col lg="12" md="2">
                                <BlogsForHome />
                            </Col>
                        </Row>
                    </Container>
                 </div>
                <br></br>
                <br></br>
                <FooterForWeb />
            </div>
        </>
    );
}

export default HomePage;
