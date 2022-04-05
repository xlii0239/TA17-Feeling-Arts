import React from "react";
//footer3 style

// reactstrap components
import { Button, NavLink, Container, Row, Col } from "reactstrap";

// Core Components

function FooterForWeb() {
    return (
        <>
            <footer className="footer footer-simple bg-dark">
                <Container>
                    <Row>
                        <Col md="6">
                            <a
                                className="footer-brand"
                                Text style={{ color: 'white', fontSize: 20 }}
                                onClick={(e) => e.preventDefault()}
                            >
                                Feeling arts
              </a>
                        </Col>
                        <Col md="6">
                            <div className="column">
                                <ul className="inline-menu">
                                    <li>
                                        <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                            About Us
                    </NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                            Contact Us
                    </NavLink>
                                    </li>
                         
                                </ul>
                            </div>
                        </Col>
                        
                    </Row>

                    <div className="column">
                        <ul className="d-flex justify-content-center">
                            <li>
                                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                    Terms &amp; conditions
                </NavLink>
                            </li>
                            <li>
                                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                    Privacy policy
                </NavLink>
                            </li>
                            <li>
                                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                    Legal notice
                </NavLink>
                            </li>
                        </ul>
                    </div>
                </Container>
            </footer>
        </>
    );
}

export default FooterForWeb;
