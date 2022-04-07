/// <reference path="../search.js" />
/// <reference path="../search.js" />
/// <reference path="../../views/homepage/homepage.js" />
import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col, Button} from "reactstrap";
import { Link } from "react-router-dom";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import FooterForWeb from "components/a17components/footers/FooterForWeb.js";



function SimplePage() {
    return (
        <>
            <NavbarForHome />
            <section className="blogs-home">
                <Container fluid>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Row>
                        <Col lg="6">
                            <Card
                                className="card-blog card-background"
                                data-animation="zooming"  >
                                <div
                                    className="full-background"
                                    style={{
                                        backgroundImage:
                                            "url(" + require("assets/NewImg/Artist.jpg") + ")",
                                    }}
                                ></div>
                                <a href="search" onClick={(e) => e.button()}>
                                    <CardBody>
                                        <div className="content-center">
                                            <CardTitle tag="h4">Search Artist</CardTitle>
                                        </div>
                                    </CardBody>
                                </a>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card
                                className="card-blog card-background"
                                data-animation="zooming"  >
                                <div
                                    className="full-background"
                                    style={{
                                        backgroundImage:
                                            "url(" + require("assets/NewImg/Artwork.jpg") + ")",
                                    }}
                                ></div>
                                <a href="" onClick={(e) => e.preventDefault()}>
                                    <CardBody>
                                        <div className="content-center">
                                            <CardTitle tag="h4">Search Artwork</CardTitle>
                                        </div>
                                    </CardBody>
                                </a>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card
                                className="card-blog card-background"
                                data-animation="zooming"  >
                                <div
                                    className="full-background"
                                    style={{
                                        backgroundImage:
                                            "url(" + require("assets/NewImg/describeArt.jpg") + ")",
                                    }}
                                ></div>
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <CardBody>
                                        <div className="content-center">
                                            <CardTitle tag="h4">Art through describe</CardTitle>
                                        </div>
                                    </CardBody>
                                </a>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card
                                className="card-blog card-background"
                                data-animation="zooming"
                            >
                                <div
                                    className="full-background"
                                    style={{
                                        backgroundImage:
                                            "url(" + require("assets/NewImg/musicArt.jpg") + ")",
                                    }}
                                ></div>
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <CardBody>
                                        <div className="content-center">
                                            <CardTitle tag="h4">Art through Music</CardTitle>
                                        </div>
                                    </CardBody>
                                </a>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card
                                className="card-blog card-background"
                                data-animation="zooming"
                            >
                                <div
                                    className="full-background"
                                    style={{
                                        backgroundImage:
                                            "url(" + require("assets/NewImg/touchArt.jpg") + ")",
                                    }}
                                ></div>
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <CardBody>
                                        <div className="content-center">
                                            <CardTitle tag="h4">Art through touch</CardTitle>
                                        </div>
                                    </CardBody>
                                </a>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card
                                className="card-blog card-background"
                                data-animation="zooming"
                            >
                                <div
                                    className="full-background"
                                    style={{
                                        backgroundImage:
                                            "url(" + require("assets/img/sections/athena.jpg") + ")",
                                    }}
                                ></div>
                                <a href="homepage" onClick={(e) => e.preventDefault()}>
                                    <CardBody>
                                        <div className="content-center">
                                            <CardTitle tag="h4">Take me to the art</CardTitle>
                                        </div>
                                    </CardBody>
                                </a>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <FooterForWeb />
        </>
    );
}

export default SimplePage;
