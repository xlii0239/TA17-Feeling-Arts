import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col, Button} from "reactstrap";
import { Link } from "react-router-dom";


function SimplePage() {
    return (
        <>
            <section className="blogs-4">
                <Container fluid>
                    <br></br>
                    <br></br>
                    <Row className="row-input" style={{ display: "d-flex", justifyContent: "center" }}>

                        <Col className="pl-lg-0" sm="2" xs="6">
                            <Link to="search">
                                <Button block color="primary" type="search">
                                    Artist
                                </Button>
                            </Link>
                            <Link to="searchartwork">
                                <Button block color="success" type="search">
                                    Artwork
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row>
                        <Col lg="6">
                            <Card
                                className="card-blog card-background"
                                data-animation="zooming"
                            >
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
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
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
        </>
    );
}

export default SimplePage;
