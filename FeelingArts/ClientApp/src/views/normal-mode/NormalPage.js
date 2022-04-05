import React from "react";
// JavaScript library for creating fancy carousels like components
import Glide from "@glidejs/glide";
// reactstrap components
import { Input, Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import NavbarPrimary from "components/a17components/navbars/NavbarPrimary.js";

// Core Components

function NormalPage() {
    React.useEffect(() => {
        new Glide(".presentation-cards", {
            type: "carousel",
            startAt: 0,
            focusAt: 2,
            perTouch: 1,
            perView: 5,
        }).mount();
    }, []);
    return (
        <>
            <div style={{ backgroundImage: 'url("assets/img/ill/index_bg.svg")'}}>
                <NavbarPrimary />
                <Col lg="12">
                    <h1 className="display-3">
                        <br></br>
                        <br></br>
                        <br></br>
                    </h1>
                    <Row className="row-input" style={{ display: "flex", justifyContent: "center" }}>

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
                </Col>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <section className="section-cards mb-5">
                    <div className="content-center">
                        <Container fluid>
                            <Row>
                                <Col md="12">
                                    <div className="presentation-cards">
                                        <div className="glide__track" data-glide-el="track">
                                            <ul className="glide__slides">
                                                <li className="glide__slide">
                                                    <img
                                                        alt="..."
                                                        height="400"
                                                        src={require("assets/NewImg/describeArt.jpg")}
                                                        width="350"
                                                    ></img>
                                                </li>
                                                <li className="glide__slide">
                                                    <img
                                                        alt="..."
                                                        height="400"
                                                        src={require("assets/NewImg/musicArt.jpg")}
                                                        width="350"
                                                    ></img>
                                                </li>
                                                <li className="glide__slide">
                                                    <img
                                                        alt="..."
                                                        height="400"
                                                        src={require("assets/NewImg/touchArt.jpg")}
                                                        width="350"
                                                    ></img>
                                                </li>                                      
                                            </ul>
                                        </div>
                                        <div className="glide__arrows" data-glide-el="controls">
                                            <button
                                                className="glide__arrow glide__arrow--left text-default"
                                                data-glide-dir="<"
                                            >
                                                <i className="ni ni-bold-left"></i>
                                            </button>
                                            <button
                                                className="glide__arrow glide__arrow--right text-default"
                                                data-glide-dir=">"
                                            >
                                                <i className="ni ni-bold-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </div>
        </>
    );
}

export default NormalPage;
