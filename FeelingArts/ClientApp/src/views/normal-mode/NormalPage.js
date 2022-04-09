/// <reference path="../../components/headers/header3.js" />
import React from "react";
// JavaScript library for creating fancy carousels like components
import Glide from "@glidejs/glide";
// reactstrap components
import { Input, Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import FooterForWeb from "components/a17components/footers/FooterForWeb.js";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import NormalHeader from "components/a17components/headers/NormalHeader.js";

// Core Components

function NormalPage() {
    React.useEffect(() => {
        new Glide(".presentation-cards", {
            type: "carousel",
            startAt: 0,
            focusAt: 2,
            perTouch: 1,
            perView: 4,
        }).mount();
    }, []);
    return (
        <>
            <NavbarForHome />
            <NormalHeader />
            <Container className="pt-5">
                <Row>
                    <Col className="text-center my-5" md="12">
                        <h1 className="display-1 mt-3">Still find more?</h1>
                        <h2 className="lead">
                            We provide more options for you
                         </h2>
                    <Col lg="12">
                        <section className="display-6">
                            <br></br>
                            <br></br>
                            <br></br>
                            <Row className="row-input" style={{ display: "flex", justifyContent: "center" }}>
                                <Col className="pl-lg-0" sm="4" xs="12">
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
                        </section>
                        </Col>
                    </Col>
                </Row>
                </ Container>
            <br></br>

            <div className="presentation-cards">
                  <div className="glide__track" data-glide-el="track">
                      <ul className="glide__slides">
                       <li className="glide__slide">
                            <img
                                alt="..."
                                height="400"
                                src={require("assets/NewImg/MonaLisa.jpg")}
                                width="350"
                            ></img>
                        </li>
                    </ul>
                </div>
            </div>
            <FooterForWeb />
        </>
    );
}

export default NormalPage;

