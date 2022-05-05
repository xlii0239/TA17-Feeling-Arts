import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function Feature6() {
  return (
    <>
      <div className="section features-6">
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <div className="info info-horizontal info-hover-primary">
                <div className="icon icon-shape icon-shape-info rounded-circle text-white">
                                  <i className="fa fa-question text-info"></i>
                </div>
                <div className="description pl-4">
                  <h5 className="title">What is 3D printing?</h5>
                  <p>
                    Three-dimensional (3D) printing is an additive manufacturing 
                    process that creates a physical object from a digital design.
                    The process works by laying down thin layers of material in the form of liquid
                    or powdered plastic, metal or cement, and then fusing the layers together.
                  </p>
                </div>
              </div>
              <div className="info info-horizontal info-hover-primary">
                <div className="icon icon-shape icon-shape-info rounded-circle text-white">
                  <i className="ni ni-app text-info"></i>
                </div>
                <div className="description pl-4">
                  <h5 className="title">Benefits of 3D printing?</h5>
                  <p>
                    One of the biggest advantages of 3D printing
                    is the freedom of design. You can recreate all
                    your ideas to transform them into actual objects.
                    Even the most complex geometries can be printed.
                  </p>
                </div>
              </div>
              <div className="info info-horizontal info-hover-primary">
                <div className="icon icon-shape icon-shape-info rounded-circle text-white">
                  <i className="ni ni-bell-55 text-info"></i>
                </div>
                <div className="description pl-4">
                  <h5 className="title">Where can I find 3D printer?</h5>
                  <p>
                    You can buy a 3D printer.Most Entry Level and Hobbyist 3D printers are priced from $300 – $500
                    Or you can choose a 3D printing service provider and pay on demand
                  </p>
                </div>
              </div>
            </Col>
            <Col className="mx-md-auto" lg="6" xs="10">
              <img
                alt="..."
                className="ml-lg-5"
                src={require("assets/img/ill/ill.png")}
                width="100%"
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Feature6;
