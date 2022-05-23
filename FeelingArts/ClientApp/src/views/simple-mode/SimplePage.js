import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";




function SimplePage() {
    React.useEffect(() => {
        document.title = "Feeing Arts-Simple Mode"
    });
    return (
        <>
            <NavbarForHome />
            <ul className="breadcrumb bg-transparent font-weight-bold">
                <li className="breadcrumb-item"><a href="homepage" className="text-dark font-weight-bold">Home</a></li>
                <li className="breadcrumb-item active">Simple Mode</li>
            </ul>
            <section className="blogs-6">
                <Row>
                    <Col className="text-center mx-auto" md="8" lg="12">
                        <h4 className="display-4">Start the artwork exploration!</h4>
                    </Col>
                    <Col className="text-center mx-auto" lg="12">
                        <h5>Select your preference and create your new experience.</h5>
                    </Col>
                </Row>
                <Container fluid>
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
                                            "url(" + require("assets/NewImg/musicArt.jpg") + ")",
                                    }}
                                >
                                </div>
                                <a href="simplemusic" onClick={(e) => e.button()}>
                                    <CardBody>
                                        <div className="content-center">
                                            <CardTitle tag="h4">Art Through Music</CardTitle>
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
                                <a href="3d-model-home-simple" onClick={(e) => e.button()}>
                                    <CardBody>
                                        <div className="content-center">
                                            <CardTitle tag="h4">Art Through Touch</CardTitle>
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
                                            "url(" + require("assets/NewImg/Artist.jpg") + ")",
                                    }}
                                ></div>
                                <a href="simplesearch" onClick={(e) => e.button()}>
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
                                <a href="simplesearchartwork" onClick={(e) => e.button()}>
                                    <CardBody>
                                        <div className="content-center">
                                            <CardTitle tag="h4">Search Artwork</CardTitle>
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
