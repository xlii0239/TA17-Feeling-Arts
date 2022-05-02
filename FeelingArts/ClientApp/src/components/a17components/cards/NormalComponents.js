import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function NormalComponents() {
  return (
    <>
          <div className="section-basic-components col-md-10 offset-md-2 ">
          <Row>
                      <Col className="col-sm-4">
                          <h4 className="title text-center font-weight-bold font-italic">
                              Discovering
                </h4>
                          <div className="info info-horizontal">
                              <div className="description">
                                  <h5 className="info-title font-weight-bold pl-0">
                                      Art through music
                    </h5>
                                  <p className=" opacity-8">
                                      Feel and understand the mood and emotion of the artwork with the matching music.
                    </p>
                              </div>
                          </div>
                          <div className="info info-horizontal ml-0 ">
                              <div className="description">
                                  <h5 className="info-title font-weight-bold pl-0">
                                      Art through touch
                    </h5>
                                  <p className="opacity-8">
                                      Experience and feel the form and expression of artwork by touching the 3D model
                    </p>
                              </div>
                          </div>
            </Col>
                      <Col className="col-sm-8">
              <div className="image-container">
                <img
                  alt="MonaLisa photo"
                  className="table-img"
                   src={require("assets/NewImg/Mona Lisa.jpg")}
                ></img>
                <img
                  alt="Michelangelo photo"
                  className="coloured-card-btn-img"
                  src={require("assets/NewImg/Michelangelo.jpg")}
                   ></img>
                              <img
                                  alt="David photo"
                                  className="linkedin-btn-img"
                                  src={require("assets/NewImg/David3D.png")}
                              ></img>
                <img
                  alt="The starry night photo"
                  className="table-img align-item-center"
                  src={require("assets/NewImg/The-Starry-Night.jpg")}
                              ></img>
                              <img
                                  alt="Vincent van Gogh photo"
                                  className="w-5"
                                  src={require("assets/NewImg/Vincent van Gogh.jpg")}
                              ></img>
              </div>
            </Col>
          </Row>
      </div>
    </>
  );
}

export default NormalComponents;
