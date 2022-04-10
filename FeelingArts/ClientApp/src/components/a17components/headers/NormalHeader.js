import React from "react";

// reactstrap components
import { Badge, Button, Container, Row, Col } from "reactstrap";

// Core Components

function NormalHeader() {
    return (
        <>
            <div className="section section-hero section-shaped">
                <div className="page-header">
                    <img
                        alt="..."
                        className="bg-image"
                        src={require("assets/NewImg/Artist.jpg")}
                    ></img>
                    <Container className="shape-container d-flex align-items-center py-lg">
                        <div className="col px-0">
                            <Row className="align-items-center justify-content-center">
                                <Col className="text-center" lg="6">
                                    <img
                                        alt="..."
                                        className="img-fluid"
                                        src={require("assets/img/brand/blue.png")}
                                        style={{ width: "200px" }}
                                    ></img>
                                    <Badge color="info">PRO</Badge>
                                    <p className="lead">
                                        <b className="display-3">All components</b>
                                        <br></br>A beautiful Premium Design System for Bootstrap 4.
                  </p>                              
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default NormalHeader;
