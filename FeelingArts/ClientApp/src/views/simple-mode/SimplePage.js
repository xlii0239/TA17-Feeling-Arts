/// <reference path="../search.js" />
/// <reference path="../search.js" />
/// <reference path="../../views/homepage/homepage.js" />
import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col} from "reactstrap";
import { Link } from "react-router-dom";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import FooterForWeb from "components/a17components/footers/FooterForWeb.js";



function SimplePage() {
    React.useEffect(() => {
        document.title = "Feeing Arts-Simple Mode"
    });
    return (
        <>
            <NavbarForHome />
            <br></br>
            <ul class="breadcrumb bg-transparent font-weight-bold">
                <li class="breadcrumb-item text-light"><a href="homepage">Home</a></li>
                <li class="breadcrumb-item active">Simple Mode</li>
            </ul>
            <section className="blogs-home">
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
                                ></div>
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
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
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
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
                                            "url(" + require("assets/NewImg/describeArt.jpg") + ")",
                                    }}
                                ></div>
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <CardBody>
                                        <div className="content-center">
                                            <CardTitle tag="h4">Art Through Describe</CardTitle>
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
                                <a href="SimpleSearch" onClick={(e) => e.button()}>
                                    <CardBody>
                                        <div className="content-center">
                                            <CardTitle tag="h4">Search More</CardTitle>
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
