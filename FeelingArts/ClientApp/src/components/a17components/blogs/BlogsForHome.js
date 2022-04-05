/// <reference path="../../views/homepage/homepage-simple.js" />
import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

function BlogsForHome() {
    return (
        <>
            <section className="blogs-home">
                <Container fluid>
                    <Row className="mb-md-5">
                        <Col className="mx-auto" md="8">
                            <h3 className="display-3 text-center">Support</h3>
                            <p className="lead text-center">
                                Uncommon sight of artwork for the blind makes it harder for them to appreciate art.<br></br>
                                Here Feeling Arts brings art experiences to the blind in an unconventional way.
              </p>
                        </Col>
                    </Row>
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
                                            "url(" + require("assets/NewImg/blindpeople.jpg") + ")",
                                    }}
                                ></div>
                                <a href="simplemode" onClick={(e) => e.button()}>
                                    <CardBody>
                                        <div className="content-bottom">
                                            <CardTitle tag="h3">Simple mode</CardTitle>
                                            <h6 className="card-category text-white opacity-8">
                                                Simple mode provide friendly experience for blind people
                                             </h6>
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
                                            "url(" + require("assets/NewImg/normalpeople.jpg") + ")",
                                    }}
                                ></div>
                                <a href="normalmode" onClick={(e) => e.button()}>
                                    <CardBody>
                                        <div className="content-bottom">
                                            <CardTitle tag="h3">Normal mode</CardTitle>
                                            <h6 className="card-category text-white opacity-8">
                                                Normal mode provide friendly experience for normal people
                      </h6>
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

export default BlogsForHome;
