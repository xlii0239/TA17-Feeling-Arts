/// <reference path="../../components/headers/header3.js" />
import React from "react";
// JavaScript library for creating fancy carousels like components
// reactstrap components
import Glide from "@glidejs/glide";
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import FooterForWeb from "components/a17components/footers/FooterForWeb.js";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";


// Core Components
function NormalPage() {
    React.useEffect(() => {
        new Glide(".glide", {
            type: "carousel",
            startAt: 0,
            focusAt: 2,
            perTouch: 1,
            perView: 5,
        }).mount();
        document.body.classList.add("normalpage");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("normalpage");
        };
    });
    return (
        <>
            <NavbarForHome />
            <br></br>
            <div className="wrapper">
            <ul class="breadcrumb bg-transparent font-weight-bold">
                <li class="breadcrumb-item text-light"><a href="homepage">Home</a></li>
                <li class="breadcrumb-item active">Normal Mode</li>
                </ul>
            <Container className="p-2 my-2">
                <br></br>
                <Button type="button" class="capitalize">
                    <Link to="#">
                        <h8>Art through music</h8>
                    </Link>
                        </Button>
                    <Button type="button">
                    <Link to="#">
                        <h8>Art Through Touch</h8>
                    </Link>
                </Button>

                        <Button class="btn btn-info btn-lg" type="button">
                    <Link to="#">
                        <h8>Art Through Describe</h8>
                    </Link>
                </Button>
                <Button class="btn btn-info btn-lg" type="button">
                    <Link to="normalsearch">
                        <h8>Search Artist</h8>
                    </Link>
                </Button>
                <Button class="btn btn-info btn-lg" type="button">
                    <Link to="normalsearchartwork">
                        <h8>Search Artwork</h8>
                    </Link>
                </Button>
            </Container>
            <section>
                <div className="glide">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides">
                            <li className="glide__slide">
                                <img
                                    alt="..."
                                    height="450"
                                    src={require("assets/NewImg/MonaLisa.jpg")}
                                    width="400"
                                ></img>
                            </li>
                            <li className="glide__slide">
                                <img
                                    alt="..."
                                    height="450"
                                    src={require("assets/NewImg/Michelangelo.jpg")}
                                    width="400"
                                ></img>
                            </li>
                            <li className="glide__slide">
                                <img
                                    alt="..."
                                    height="450"
                                    src={require("assets/NewImg/Leonardo da Vinci.jpg")}
                                    width="400"
                                ></img>
                            </li>
                            <li className="glide__slide">
                                <img
                                    alt="..."
                                    height="450"
                                    src={require("assets/NewImg/Vincent van Gogh.jpg")}
                                    width="400"
                                ></img>
                            </li>
                            <li className="glide__slide">
                                <img
                                    alt="..."
                                    height="450"
                                    src={require("assets/NewImg/David2.jpg")}
                                    width="400"
                                ></img>
                            </li>
                        </ul>
                    </div>
                        <div className="glide__arrows" data-glide-el="controls">
                            <button
                                className="glide__arrow glide__arrow--left bg-light btn-lg"
                                data-glide-dir="<"
                            >
                                <i className="ni ni-bold-left "></i>
                            </button>
                            <button
                                className="glide__arrow glide__arrow--right bg-light btn-lg"
                                data-glide-dir=">"
                            >
                                <i className="ni ni-bold-right"></i>
                            </button>
                        </div>
                </div>
                </section>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
                <FooterForWeb />

        </>
    );
}

export default NormalPage;

