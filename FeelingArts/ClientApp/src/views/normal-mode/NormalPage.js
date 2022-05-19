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
                <NormalComponents />           
            </div>


        </>
    );
}

export default NormalPage;

