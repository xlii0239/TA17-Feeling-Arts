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
            <ul className="breadcrumb bg-transparent font-weight-bold">
                <li className="breadcrumb-item"><a href="homepage" className="text-dark font-weight-bold">Home</a></li>
                <li className="breadcrumb-item"><a href="simplemode" className="text-dark font-weight-bold">Simple Mode</a></li>
                <li className="breadcrumb-item active">Art through Music</li>
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
                                                Agony In The Garden
                                           </h4>
                                            <p className="description mt-3 font-weight-bold">
                                                By Albrecht Durer.
                                           </p>
                                            <Button
                                                className="mt-4"
                                                color="primary"
                                                href="/simplelisteningpage1"
                                                onClick={(e) => e.button()}
                                            >
                                                Listen
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
                                                Archangel Michael
                      </h4>
                                            <p className="description mt-3 font-weight-bold">
                                                By Andrei Rublev.
                      </p>
                                            <Button
                                                className="mt-4"
                                                color="success"
                                                href="/simplelisteningpage2"
                                                onClick={(e) => e.button()}
                                            >
                                                Listen
                      </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="4">
                                    <Card className="card-lift--hover shadow border-0">
                                        <CardBody className="py-5">
                                            <div className="icon icon-shape icon-shape-danger rounded-circle mb-4">
                                                <i className="ni ni-palette"></i>
                                            </div>
                                            <h4 className="text-danger text-capitalize font-weight-bold">
                                                Frozen Assets
                      </h4>
                                            <p className="description mt-3 font-weight-bold">
                                                By Diego Rivera.
                      </p>
                                            <Button
                                                className="mt-4"
                                                color="danger"
                                                href="/simplelisteningpage3"
                                                onClick={(e) => e.button()}
                                            >
                                                Listen
                      </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="4">
                                    <Card className="card-lift--hover shadow border-0">
                                        <CardBody className="py-5">
                                            <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
                                                <i className="ni ni-palette"></i>
                                            </div>
                                            <h4 className="text-info text-capitalize font-weight-bold">
                                                Shot Marilyn
                      </h4>
                                            <p className="description mt-3 font-weight-bold">
                                                By Andy Warhol.
                      </p>
                                            <Button
                                                className="mt-4"
                                                color="info"
                                                href="/simplelisteningpage4"
                                                onClick={(e) => e.button()}
                                            >
                                                Listen
                      </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="4">
                                    <Card className="card-lift--hover shadow border-0">
                                        <CardBody className="py-5">
                                            <div className="icon icon-shape icon-shape-dark rounded-circle mb-4">
                                                <i className="ni ni-palette"></i>
                                            </div>
                                            <h4 className="text-dark text-capitalize font-weight-bold">
                                                Snow at Louveciennes
                      </h4>
                                            <p className="description mt-3 font-weight-bold">
                                                By Alfred Sisley.
                      </p>
                                            <Button
                                                className="mt-4"
                                                color="secondary"
                                                href="/simplelisteningpage5"
                                                onClick={(e) => e.button()}
                                            >
                                                Listen
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
                                                The Yellow House
                      </h4>
                                            <p className="description mt-3 font-weight-bold">
                                                By Vincent van Gogh.
                      </p>
                                            <Button
                                                className="mt-4"
                                                color="warning"
                                                href="/simplelisteningpage6"
                                                onClick={(e) => e.button()}
                                            >
                                                Listen
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