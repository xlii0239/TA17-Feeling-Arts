import React from "react";

// reactstrap components
import { Button, Row, Col } from "reactstrap";

// Core Components

function HeaderForHome() {
    return (
        <>
            <div className="page-header page-header-small header-filter">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage:
                            "url(" + require("assets/img/pages/nicolas-prieto.jpg") + ")",
                    }}
                ></div>
                <div className="content-center">
                    <Row>
                        <Col className="mx-auto text-center" md="6">
                            <h1 className="title text-white">
                                A Place for Blind People to feeling arts
              </h1>
                            
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default HeaderForHome;
