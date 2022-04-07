import React from "react";
// JavaScript library for creating fancy carousels like components
import Glide from "@glidejs/glide";
// reactstrap components
import {
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
} from "reactstrap";

// Core Components

function SimpleHeader() {
    React.useEffect(() => {
        new Glide(".glide", {
            type: "carousel",
            startAt: 0,
            focusAt: 2,
            perTouch: 1,
            perView: 4,
        }).mount();
    }, []);
    return (
        <>
            <header className="header-3 bg-dark">
                <div className="page-header header-filter">
                    <div className="content-center">
                        <Row>
                            <Col className="mx-auto positioned" lg="5" md="8" xs="12">
                                <h4 className="title text-white text-uppercase ml-0">
                                    Build stunning websites and apps
                </h4>
                                <div className="info info-horizontal ml-0">
                                    <div className="icon icon-shape bg-white shadow rounded-circle text-default">
                                        <i className="ni ni-active-40"></i>
                                    </div>
                                    <div className="description">
                                        <h6 className="info-title text-uppercase text-white pl-0">
                                            Connect with founders
                    </h6>
                                        <p className="text-white opacity-8">
                                            As we live, our hearts turn colder. Cause pain is what we
                                            go through as we become older and we get insulted
                    </p>
                                    </div>
                                </div>
                                <div className="info info-horizontal ml-0">
                                    <div className="icon icon-shape bg-white shadow rounded-circle text-default">
                                        <i className="ni ni-trophy"></i>
                                    </div>
                                    <div className="description">
                                        <h6 className="info-title text-uppercase text-white pl-0">
                                            Learn from experts
                    </h6>
                                        <p className="text-white opacity-8">
                                            We get back stabbed by friends. It becomes harder for us
                                            to give others a hand. We get our heart broken by people
                                            we love.
                    </p>
                                    </div>
                                </div>
                                <div className="info info-horizontal ml-0">
                                    <div className="icon icon-shape bg-white shadow rounded-circle text-default">
                                        <i className="ni ni-paper-diploma"></i>
                                    </div>
                                    <div className="description">
                                        <h6 className="info-title text-uppercase text-white pl-0">
                                            Get practical advice
                    </h6>
                                        <p className="text-white opacity-8">
                                            When we lose family over time. What else could rust the
                                            heart more over time? Blackgold. It becomes harder...
                    </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="12">
                                <div className="glide">
                                    <div className="glide__track" data-glide-el="track">
                                        <ul className="glide__slides">
                                            <li className="glide__slide">
                                                <img
                                                    alt="..."
                                                    height="500"
                                                    src={require("assets/NewImg/describeArt.jpg")}
                                                    width="450"
                                                ></img>
                                            </li>
                                            <li className="glide__slide">
                                                <img
                                                    alt="..."
                                                    height="500"
                                                    src={require("assets/NewImg/musicArt.jpg")}
                                                    width="450"
                                                ></img>
                                            </li>
                                            <li className="glide__slide">
                                                <img
                                                    alt="..."
                                                    height="500"
                                                    src={require("assets/NewImg/touchArt.jpg")}
                                                    width="450"
                                                ></img>
                                            </li>
                                           
                                        </ul>
                                    </div>
                                    <div className="glide__arrows" data-glide-el="controls">
                                        <button
                                            className="glide__arrow glide__arrow--left"
                                            data-glide-dir="<"
                                        >
                                            <i className="ni ni-bold-left"></i>
                                        </button>
                                        <button
                                            className="glide__arrow glide__arrow--right"
                                            data-glide-dir=">"
                                        >
                                            <i className="ni ni-bold-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </header>
        </>
    );
}

export default SimpleHeader;
