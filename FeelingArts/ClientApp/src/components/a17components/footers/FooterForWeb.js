import React from "react";
//footer3 style

// reactstrap components
import { Button, NavLink, Container, Row, Col } from "reactstrap";

// Core Components

function FooterForWeb() {
    return (
        <>
            <footer className="footer footer-simple transparent">
                <Container>
                    <Row>
                        <Col md="3">
                            <h5 className="title text-darkblue font-weight-bold">
                                FEELING ARTS
                            </h5>
                        </Col>
                        <p className="copyright text-dark text-right">
                            All rights reserved.
                  </p>
                        
                    </Row>
                </Container>
            </footer>
        </>
    );
}

export default FooterForWeb;
