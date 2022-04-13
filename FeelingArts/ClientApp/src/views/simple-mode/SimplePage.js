/// <reference path="../search.js" />
/// <reference path="../search.js" />
/// <reference path="../../views/homepage/homepage.js" />
import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col} from "reactstrap";
import { Link } from "react-router-dom";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";




function SimplePage() {
    React.useEffect(() => {
        document.title = "Feeing Arts-Simple Mode"
    });
    return (
        <>
            <NavbarForHome />
            <ul class="breadcrumb bg-transparent font-weight-bold">
                <li class="breadcrumb-item"><a href="homepage" class="text-dark font-weight-bold">Home</a></li>
                <li class="breadcrumb-item active">Simple Mode</li>
            </ul>
            <section className="blogs-home">
                <Container fluid>
                    <Row>
                        {/*<Col lg="6">*/}
                        {/*    <Card*/}
                        {/*        className="card-blog card-background"*/}
                        {/*        data-animation="zooming"*/}
                        {/*    >*/}
                        {/*        <div*/}
                        {/*            className="full-background"*/}
                        {/*            style={{*/}
                        {/*                backgroundImage:*/}
                        {/*                    "url(" + require("assets/NewImg/musicArt.jpg") + ")",*/}
                        {/*            }}*/}
                        {/*        ></div>*/}
                        {/*        <a href="#pablo" onClick={(e) => e.preventDefault()}>*/}
                        {/*            <CardBody>*/}
                        {/*                <div className="content-center">*/}
                        {/*                    <CardTitle tag="h4">Art Through Music</CardTitle>*/}
                        {/*                </div>*/}
                        {/*            </CardBody>*/}
                        {/*        </a>*/}
                        {/*    </Card>*/}
                        {/*</Col>*/}
                        {/*<Col lg="6">*/}
                        {/*    <Card*/}
                        {/*        className="card-blog card-background"*/}
                        {/*        data-animation="zooming"*/}
                        {/*    >*/}
                        {/*        <div*/}
                        {/*            className="full-background"*/}
                        {/*            style={{*/}
                        {/*                backgroundImage:*/}
                        {/*                    "url(" + require("assets/NewImg/touchArt.jpg") + ")",*/}
                        {/*            }}*/}
                        {/*        ></div>*/}
                        {/*        <a href="#pablo" onClick={(e) => e.preventDefault()}>*/}
                        {/*            <CardBody>*/}
                        {/*                <div className="content-center">*/}
                        {/*                    <CardTitle tag="h4">Art Through Touch</CardTitle>*/}
                        {/*                </div>*/}
                        {/*            </CardBody>*/}
                        {/*        </a>*/}
                        {/*    </Card>*/}
                        {/*</Col>*/}
                        {/*<Col lg="6">*/}
                        {/*    <Card*/}
                        {/*        className="card-blog card-background"*/}
                        {/*        data-animation="zooming"  >*/}
                        {/*        <div*/}
                        {/*            className="full-background"*/}
                        {/*            style={{*/}
                        {/*                backgroundImage:*/}
                        {/*                    "url(" + require("assets/NewImg/describeArt.jpg") + ")",*/}
                        {/*            }}*/}
                        {/*        ></div>*/}
                        {/*        <a href="#pablo" onClick={(e) => e.preventDefault()}>*/}
                        {/*            <CardBody>*/}
                        {/*                <div className="content-center">*/}
                        {/*                    <CardTitle tag="h4">Art Through Describe</CardTitle>*/}
                        {/*                </div>*/}
                        {/*            </CardBody>*/}
                        {/*        </a>*/}
                        {/*    </Card>*/}
                        {/*</Col>*/}
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
                                <a href="SimpleSearch" onClick={(e) => e.button()}>
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
