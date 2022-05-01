import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function NormalComponents() {
  return (
    <>
      <section className="section-basic-components" lg="12">
        <Container>
          <Row>
                      <Col className="col-sm-3">
                          <h4 className="title text-uppercase ml-0 font-weight-bold font-italic text-center">
                              Discover more
                </h4>
                          <div className="info info-horizontal ml-0">
                              <div className="description">
                                  <h7 className="info-title text-uppercase font-weight-bold pl-0">
                                      Art through music
                    </h7>
                                  <p className=" opacity-8">
                                      Feel and understand the mood and emotion of the artwork with the matching music.
                    </p>
                              </div>
                          </div>
                          <div className="info info-horizontal ml-0 ">
                              <div className="description">
                                  <h7 className="info-title text-uppercase font-weight-bold pl-0">
                                      Art through touch
                    </h7>
                                  <p className="opacity-8">
                                      Experience and feel the form and expression of artwork by touching the 3D model
                    </p>
                              </div>
                          </div>
            </Col>
                      <Col className="col-sm-9">
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
                  alt="Vincent van Gogh photo"
                                  className="coloured-card-img"
                   src={require("assets/NewImg/Vincent van Gogh.jpg")}
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
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default NormalComponents;
