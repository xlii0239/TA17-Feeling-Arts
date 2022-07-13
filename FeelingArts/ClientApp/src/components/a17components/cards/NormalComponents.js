import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

// Core Components

function NormalComponents() {
    return (
        <>
            <Row className="section-basic-components" style={{ width: "100%", "margin": "0px auto", flexFlow: "wrap", justifyContent:"center",display:"center"}}>

                <Col lg="5" md="6">
                    <CardBody className="">
                        <CardTitle className="font-weight-bold" tag="h4">
                            <a href="normalmusic" onClick={(e) => e.button()}>
                                Art through Music
                        </a>
                        </CardTitle>
                        <p className="opacity-8">
                            Feel and understand the mood and emotion of the artwork with the matching music.
                            </p>
                    </CardBody>
                    <CardBody className="">
                        <CardTitle className="font-weight-bold" tag="h4">
                            <a href="3d-model-home" onClick={(e) => e.button()}>
                                Art through Touch
                          </a>
                        </CardTitle>
                        <p className="opacity-8">
                            Experience and feel the form and expression of artwork by touching the 3D model.
                           </p>
                    </CardBody>
                    <CardBody className="">
                        <CardTitle className="font-weight-bold" tag="h4">
                            <a href="normalsearch" onClick={(e) => e.button()}>
                                Search Artist
                          </a>
                        </CardTitle>
                        <p className="opacity-8">
                            Experience more by providing more artists information.
                    </p>
                    </CardBody>
                    <CardBody className="">
                        <CardTitle className="font-weight-bold" tag="h4">
                            <a href="normalsearchartwork" onClick={(e) => e.button()}>
                                Search Artwork
                          </a>
                        </CardTitle>
                        <p className="opacity-8">
                            Experience more by providing more artworks information.
                    </p>
                    </CardBody>
                </Col>
                <Col  lg="6" >
                    <img
                        alt="MonaLisa photo"
                        className="table-img"
                        src={require("assets/NewImg/Mona Lisa.jpg")}
                    >
                    </img>
                    <img
                        alt="Michelangelo photo"
                        className="coloured-card-btn-img"
                        src={require("assets/NewImg/Michelangelo.jpg")}
                    >
                    </img>
                    <img
                        alt="David photo"
                        className="linkedin-btn-img"
                        src={require("assets/NewImg/David3D.png")}
                    >
                    </img>
                    <img
                        alt="The Leonardo da Vinci photo"
                        className="table-img"
                        src={require("assets/NewImg/Leonardo da Vinci.jpg")}
                    ></img>
                    <img
                        alt="The starry night photo"
                        className="table-img align-item-center"
                        src={require("assets/NewImg/The-Starry-Night.jpg")}
                    >
                    </img>
                    <img
                        alt="Vincent van Gogh photo"
                        className="linkedin-btn-img"
                        src={require("assets/NewImg/Vincent van Gogh.jpg")}
                    >
                    </img>
                </Col>
            </Row>
        </>
    );
}

export default NormalComponents;
