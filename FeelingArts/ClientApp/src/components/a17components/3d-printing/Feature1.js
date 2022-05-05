import React from "react";

// reactstrap components
import { Badge, Container, Row, Col } from "reactstrap";

// Core Components

function Feature1() {
  return (
    <>
      <div className="section features-1">
        <Container>
          <Row>
            <Col className="mx-auto text-center" md="8">
              <h3 className="display-3">3D PRINTING SERVICE PROVIDER</h3>
              <p className="lead">
                Forget expensive equipment and pay as you need
              </p>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <div className="info">
                <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle">
                                  <i className="fa fa-cloud"></i>
                </div>
                              <h6 className="info-title text-capitalize text-primary">
                  Craftcloud
                </h6>
                <p className="description opacity-8">
                    Craftcloud is a 3D printing service marketplace created by All3DP.
                    A one-stop solution for placing 3D printing orders, you can save
                    money by comparing prices from a variety of providers in real-time.
                </p>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle">
                                  <i className="ni ni-world"></i>
                </div>
                              <h6 className="info-title text-capitalize text-success">
                  3D Experience Marketplace Make
                </h6>
                <p className="description opacity-8">
                  The 3DExperience Make Marketplace is operated by the French 
                  software company Dassault Systemes, providing on-demand manufacturing.
                </p>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle">
                                  <i className="fa fa-print"></i>
                </div>
                              <h6 className="info-title text-capitalize text-warning">
                  Shapeways
                </h6>
                <p className="description opacity-8">
                    The world most popular online 3D printing service Shapeways offers two services.
                    On the consumer side, you can choose from a broad array of professionally designed
                    items, customize them, and have them printed to your specifications.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Feature1;
