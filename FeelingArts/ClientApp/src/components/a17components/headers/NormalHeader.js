import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
    Button,
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
} from "reactstrap";

// Core Components

function NormalHeader() {
    return (
        <>
            <header className="header">              
                <div className="page-header">
                    <div
                        className="page-header-image"
                        style={{
                            backgroundImage: "url(" + require("assets/img/ill/p2.svg") + ")",
                        }}
                    ></div>
                    <Container>
                        <Row>
                            <Col
                                className="mr-auto text-left d-flex justify-content-center flex-column"
                                lg="5"
                                md="7"
                            >
                               
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>
        </>
    );
}

export default NormalHeader;
