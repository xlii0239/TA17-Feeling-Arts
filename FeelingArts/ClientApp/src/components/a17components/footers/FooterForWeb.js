import React from "react";
//footer3 style

// reactstrap components
import { Button, NavLink, Container, Row, Col } from "reactstrap";

// Core Components

function FooterForWeb() {
    return (
        <>
            <footer className="footer footer-simple bg-dark" >
                <Container>
                    <Row>
                        <Col md="12">
                            <h4 className="title text-white text-center">
                                FEELING ARTS
                            </h4>
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
