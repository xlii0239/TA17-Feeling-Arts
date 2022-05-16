import React from "react";
//footer3 style

// reactstrap components
import {
    Button,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip, } from "reactstrap";

// Core Components

function FooterForWeb() {
    return (
        <>
            <footer className="footer">
                <Row className="footer-simple align-items-center md-3">
                    <Col lg="8">
                        <div className="title text-dark display-4 font-weight-bold col-md-6 offset-md-3">
                            FEELING ARTS
                            </div>
                        </Col>
                    <Col lg="4" className="align-items-center justify-content-md-between col-md-6 ">
                        <div className="copyright text-dark">
                            All rights reserved.  &copy; 2022
                          </div>
                    </Col>
                    </Row>
            </footer>
        </>
    );
}

export default FooterForWeb;
