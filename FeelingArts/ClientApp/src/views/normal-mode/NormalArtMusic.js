/// <reference path="../search.js" />
/// <reference path="../search.js" />
/// <reference path="../../views/homepage/homepage.js" />
import React from "react";

// reactstrap components
import { Button, Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";




function NormalArtMusic() {
    React.useEffect(() => {
        document.title = "Art through Music"
    });
    return (
        <>
            <NavbarForHome />
            <ul className="breadcrumb bg-transparent font-weight-bold">
                <li className="breadcrumb-item"><a href="homepage" className="text-dark font-weight-bold">Home</a></li>
                <li className="breadcrumb-item"><a href="normalmode" className="text-dark font-weight-bold">Picture Mode</a></li>
                <li className="breadcrumb-item active">Art through Music</li>
            </ul>
            <div className="normal art music">
                <Container>
                    <Row>
                        <Col className="text-center mx-auto" md="8" lg="12">
                            <h4 className="display-4">Enjoy the matched music.</h4>
                        </Col>
                        <Col className="text-center mx-auto" lg="12">
                            <h5>  Through our sense of hearing to feel and understand the mood,</h5>
                            <h5>emotion, power and temperament conveyed by the artwork.</h5>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-5">
                        <Col lg="4">
                            <Card
                                className="card-background"
                                style={{
                                    backgroundImage:
                                        "url(" +
                                        require("assets/NewImg/artworks/w1.jpg") +
                                        ")",
                                }}
                            >
                                <CardBody className="text-center">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <CardTitle tag="h4">Agony In The Garden</CardTitle>
                                    </a>
                                    <h6 className="desc text-white opacity-8">By Albrecht Durer.</h6>
                                    <Button
                                        color="warning"
                                        href="normallisteningpage1"
                                        onClick={(e) => e.button()}
                                        className="mt-4"
                                    >
                                        Listen
                  </Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="4">
                            <Card
                                className="card-background"
                                style={{
                                    backgroundImage:
                                        "url(" + require("assets/NewImg/artworks/w7.jpg") + ")",
                                }}
                            >
                                <CardBody className="text-center">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <CardTitle tag="h4">Archangel Michael</CardTitle>
                                    </a>
                                    <h6 className="desc text-white opacity-8">By Andrei Rublev.</h6>
                                    <Button
                                        color="danger"
                                        href="normallisteningpage2"
                                        onClick={(e) => e.button()}
                                        className="mt-4"
                                    >
                                        Listen
                  </Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="4">
                            <Card
                                className="card-background"
                                style={{
                                    backgroundImage:
                                        "url(" + require("assets/NewImg/artworks/w18.jpg") + ")",
                                }}
                            >
                                <CardBody className="text-center">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <CardTitle tag="h4">Frozen Assets</CardTitle>
                                    </a>
                                    <h6 className="desc text-white opacity-8">By Diego Rivera.</h6>
                                    <Button
                                        color="success"
                                        href="normallisteningpage3"
                                        onClick={(e) => e.button()}
                                        className="mt-4"
                                    >
                                        Listen
                  </Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="4">
                            <Card
                                className="card-background"
                                style={{
                                    backgroundImage:
                                        "url(" + require("assets/NewImg/artworks/w10.jpg") + ")",
                                }}
                            >
                                <CardBody className="text-center">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <CardTitle tag="h4">Shot Marilyn</CardTitle>
                                    </a>
                                    <h6 className="desc text-white opacity-8">By Andy Warhol.</h6>
                                    <Button
                                        color="secondary"
                                        href="normallisteningpage4"
                                        onClick={(e) => e.button()}
                                        className="mt-4"
                                    >
                                        Listen
                  </Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="4">
                            <Card
                                className="card-background"
                                style={{
                                    backgroundImage:
                                        "url(" + require("assets/NewImg/artworks/w5.jpg") + ")",
                                }}
                            >
                                <CardBody className="text-center">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <CardTitle tag="h4">Snow at Louveciennes</CardTitle>
                                    </a>
                                    <h6 className="desc text-white opacity-8">By Alfred Sisley.</h6>
                                    <Button
                                        color="info"
                                        href="normallisteningpage5"
                                        onClick={(e) => e.button()}
                                        className="mt-4"
                                    >
                                        Listen
                  </Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="4">
                            <Card
                                className="card-background"
                                style={{
                                    backgroundImage:
                                        "url(" + require("assets/NewImg/artworks/w100.jpg") + ")",
                                }}
                            >
                                <CardBody className="text-center">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <CardTitle tag="h4">The Yellow House</CardTitle>
                                    </a>
                                    <h6 className="desc text-white opacity-8">By Vincent van Gogh.</h6>
                                    <Button
                                        color="primary"
                                        href="normallisteningpage6"
                                        onClick={(e) => e.button()}
                                        className="mt-4"
                                    >
                                        Listen
                  </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}


export default NormalArtMusic;
