/// <reference path="../../views/homepage/homepage-simple.js" />
import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

function BlogsForHome() {
    return (
        <>
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
                                            "url(" + require("assets/NewImg/blindpeople.jpg") + ")",
                                    }}
                                ></div>
                                <a href="simplemode" onClick={(e) => e.button()}>
                                    <CardBody>
                                        <div className="content-bottom">
                                            <CardTitle tag="h3">Simple Mode</CardTitle>
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
                                            <CardTitle tag="h3">Normal Mode</CardTitle>
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
        </>
    );
}

export default BlogsForHome;
