/// <reference path="../../components/headers/header3.js" />
import React from "react";
// JavaScript library for creating fancy carousels like components
// reactstrap components
/*import Glide from "@glidejs/glide";*/
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import NormalComponents from "components/a17components/cards/NormalComponents.js"


// Core Components
function NormalPage() {
    React.useEffect(() => {
        //new Glide(".glide", {
        //    type: "carousel",
        //    startAt: 0,
        //    focusAt: 2,
        //    perTouch: 1,
        //    perView: 5,
        //}).mount();
        document.title = "Feeing Arts-Normal Mode"
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
            <div className="wrapper">
                <ul className="breadcrumb bg-transparent font-weight-bold">
                    <li className="breadcrumb-item text-light"><a href="homepage" className="text-dark font-weight-bold">Home</a></li>
                    <li className="breadcrumb-item active">Picture Mode</li>
                </ul>
                <Row>
                    <Col className="text-center mx-auto" md="8" lg="12">
                        <h4 className="display-4">Start the artwork exploration!</h4>
                    </Col>
                    <Col className="text-center mx-auto" lg="12">
                        <h5> Select your preference and create your new experience.</h5>
                    </Col>
                </Row>
                {/*            <Container class="align-item-center">*/}
                {/*    <Button class="btn btn-info btn-lg" type="button">*/}
                {/*        <Link to="normalartmusic">*/}
                {/*            <h5 class="text-capitalize text-muted">Art through music</h5>*/}
                {/*    </Link>*/}
                {/*        </Button>*/}
                {/*    <Button class="btn btn-info btn-lg" type="button">*/}
                {/*    <Link to="3d-model-home">*/}
                {/*            <h5 class="text-capitalize text-muted">Art Through Touch</h5>*/}
                {/*    </Link>*/}
                {/*</Button>*/}
                {/* <Button class="btn btn-info btn-lg" type="button">*/}
                {/*    <Link to="#">*/}
                {/*            <h8 class="text-capitalize text-muted">Art Through Describe</h8>*/}
                {/*    </Link>*/}
                {/*</Button>*/}
                {/*<Button class="btn btn-info btn-lg" type="button">*/}
                {/*    <Link to="normalsearch">*/}
                {/*            <h5 class="text-capitalize text-muted">Search Artist</h5>*/}
                {/*    </Link>*/}
                {/*    </Button>*/}

                {/*</Container>*/}
                {/*<section className="py-6">*/}
                {/*    <div className="wrapper align-item-left">*/}
                <NormalComponents />
                {/*    </div>*/}
                {/*    </section>*/}
                {/*<section className="py-6">*/}
                {/*<div className="glide">*/}
                {/*    <div className="glide__track" data-glide-el="track">*/}
                {/*        <ul className="glide__slides">*/}
                {/*            <li className="glide__slide">*/}
                {/*                <img*/}
                {/*                    alt="..."*/}
                {/*                    height="450"*/}
                {/*                    src={require("assets/NewImg/MonaLisa.jpg")}*/}
                {/*                    width="400"*/}
                {/*                ></img>*/}
                {/*            </li>*/}
                {/*            <li className="glide__slide">*/}
                {/*                <img*/}
                {/*                    alt="..."*/}
                {/*                    height="450"*/}
                {/*                    src={require("assets/NewImg/Michelangelo.jpg")}*/}
                {/*                    width="400"*/}
                {/*                ></img>*/}
                {/*            </li>*/}
                {/*            <li className="glide__slide">*/}
                {/*                <img*/}
                {/*                    alt="..."*/}
                {/*                    height="450"*/}
                {/*                    src={require("assets/NewImg/Leonardo da Vinci.jpg")}*/}
                {/*                    width="400"*/}
                {/*                ></img>*/}
                {/*            </li>*/}
                {/*            <li className="glide__slide">*/}
                {/*                <img*/}
                {/*                    alt="..."*/}
                {/*                    height="450"*/}
                {/*                    src={require("assets/NewImg/Vincent van Gogh.jpg")}*/}
                {/*                    width="400"*/}
                {/*                ></img>*/}
                {/*            </li>*/}
                {/*            <li className="glide__slide">*/}
                {/*                <img*/}
                {/*                    alt="..."*/}
                {/*                    height="450"*/}
                {/*                    src={require("assets/NewImg/David2.jpg")}*/}
                {/*                    width="400"*/}
                {/*                ></img>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*        <div className="glide__arrows" data-glide-el="controls">*/}
                {/*            <button*/}
                {/*                className="glide__arrow glide__arrow--left bg-light btn-lg"*/}
                {/*                data-glide-dir="<"*/}
                {/*            >*/}
                {/*                <i className="ni ni-bold-left "></i>*/}
                {/*            </button>*/}
                {/*            <button*/}
                {/*                className="glide__arrow glide__arrow--right bg-light btn-lg"*/}
                {/*                data-glide-dir=">"*/}
                {/*            >*/}
                {/*                <i className="ni ni-bold-right"></i>*/}
                {/*            </button>*/}
                {/*        </div>*/}
                {/*</div>*/}
                {/*    </section>*/}
            </div>


        </>
    );
}

export default NormalPage;

