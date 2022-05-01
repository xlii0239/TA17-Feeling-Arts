/// <reference path="../search.js" />
/// <reference path="../search.js" />
/// <reference path="../../views/homepage/homepage.js" />
import React from "react";

// reactstrap components
import { Button, Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";

function SimpleArtMusic() {
    return (
        <>
            <NavbarForHome />
            <ul class="breadcrumb bg-transparent font-weight-bold">
                <li class="breadcrumb-item"><a href="homepage" class="text-dark font-weight-bold">Home</a></li>
                <li class="breadcrumb-item"><a href="simplemode" class="text-dark font-weight-bold">Simple Mode</a></li>
                <li class="breadcrumb-item active">Art through Music</li>
            </ul>
            <div className="blogs-6">
                <Container>
                    <Row>
                        <Col className="text-center mx-auto" md="8">
                            <h3 className="display-3">Some of Arts Matches Music</h3>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-5">
                        <Col lg="12">
                            <Row className="row-grid">
                                <Col lg="4">
                                    <Card className="card-lift--hover shadow border-0"
                                    >
                                        <CardBody className="py-5">
                                            <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                                <i className="ni ni-palette"></i>
                                            </div>
                                            <h4 className="text-primary text-capitalize font-weight-bold">
                                                Mona Lisa
                                           </h4>
                                            <p className="description mt-3 font-weight-bold">
                                                By Leonardo da Vinci.
                                           </p>
                                            <Button
                                                className="mt-4"
                                                color="primary"
                                                href="/listeningpage"
                                                onClick={(e) => e.button()}
                                            >
                                                Listening
                      </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="4">
                                    <Card className="card-lift--hover shadow border-0">
                                        <CardBody className="py-5">
                                            <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                                                <i className="ni ni-palette"></i>
                                            </div>
                                            <h4 className="text-success text-capitalize font-weight-bold">
                                                David
                      </h4>
                                            <p className="description mt-3 font-weight-bold">
                                                By Michelangelo
                      </p>
                                            <Button
                                                className="mt-4"
                                                color="success"
                                                href="/listeningpage"
                                                onClick={(e) => e.button()}
                                            >
                                                Listening
                      </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="4">
                                    <Card className="card-lift--hover shadow border-0">
                                        <CardBody className="py-5">
                                            <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                                <i className="ni ni-palette"></i>
                                            </div>
                                            <h4 className="text-warning text-capitalize font-weight-bold">
                                                The Starry Night
                      </h4>
                                            <p className="description mt-3 font-weight-bold">
                                                By Vincent van Gogh
                      </p>
                                            <Button
                                                className="mt-4"
                                                color="warning"
                                                href="/listeningpage"
                                                onClick={(e) => e.button()}
                                            >
                                                Listening
                      </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}


export default SimpleArtMusic;