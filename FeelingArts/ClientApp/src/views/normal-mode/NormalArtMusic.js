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
            <ul class="breadcrumb bg-transparent font-weight-bold">
                <li class="breadcrumb-item"><a href="homepage" class="text-dark font-weight-bold">Home</a></li>
                <li class="breadcrumb-item"><a href="normalmode" class="text-dark font-weight-bold">Picture Mode</a></li>
                <li class="breadcrumb-item active">Art through Music</li>
            </ul>
            <div className="normal art music">
                <Container>
                    <Row>
                        <Col className="text-center mx-auto" md="8">
                            <h3 className="display-3">Some of Arts Matches Music</h3>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-5">
                        <Col lg="4">
                            <Card
                                className="card-background"
                                style={{
                                    backgroundImage:
                                        "url(" +
                                        require("assets/img/theme/masha-rostovskaya.jpg") +
                                        ")",
                                }}
                            >
                                <CardBody className="text-center">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <CardTitle tag="h2">Artworks</CardTitle>
                                    </a>
                                    <h6 className="desc text-white opacity-8">By Artworks</h6>
                                    <Button
                                        color="warning"
                                        href="normallisteningpage"
                                        onClick={(e) => e.button()}
                                        className="mt-4"
                                    >
                                        Listening
                  </Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="4">
                            <Card
                                className="card-background"
                                style={{
                                    backgroundImage:
                                        "url(" + require("assets/img/theme/ali-pazani.jpg") + ")",
                                }}
                            >
                                <CardBody className="text-center">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <CardTitle tag="h2">Artworks</CardTitle>
                                    </a>
                                    <h6 className="desc text-white opacity-8">By Artworks</h6>
                                    <Button
                                        color="danger"
                                        href="normallisteningpage"
                                        onClick={(e) => e.button()}
                                        className="mt-4"
                                    >
                                        Listening
                  </Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="4">
                            <Card
                                className="card-background"
                                style={{
                                    backgroundImage:
                                        "url(" + require("assets/img/theme/willy-dade.jpg") + ")",
                                }}
                            >
                                <CardBody className="text-center">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <CardTitle tag="h2">Artist</CardTitle>
                                    </a>
                                    <h6 className="desc text-white opacity-8">By Artworks</h6>
                                    <Button
                                        color="success"
                                        href="normallisteningpage"
                                        onClick={(e) => e.button()}
                                        className="mt-4"
                                    >
                                        Listening
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
