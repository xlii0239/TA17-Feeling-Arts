import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faCube } from '@fortawesome/fontawesome-free-solid';
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

function Blogs3() {
  return (
    <>
      <section className="blogs-3">
        <Container>
           <Row>
            <Col className="mx-auto" lg="10" md="8">
             <h2 className="title mb-5 font-weight-bold">On view</h2>
              <Card className="card-blog card-plain blog-horizontal mb-5">
                <Row>
                  <Col lg="5">
                    <div className="card-image shadow">
                      <a>
                        <img
                        alt="artwork photo"
                        className="img rounded"
                        src={require("assets/img/faces/team-2.jpg")}
                        style={{ weight:'500px',height: '400px' }}
                        ></img>
                      </a>
                    </div>
                  </Col>
                  <Col lg="7">
                    <CardBody>
                      <CardTitle tag="h3">
                          Artwork Name
                      </CardTitle>
                      <p className="card-description">
                        Artwork Indroduction: Finding temporary housing for your dog should be as easy
                        as renting an Airbnb. That’s the idea behind Rover,
                        which raised $65 million to expand its pet sitting and
                        dog-walking businesses...{" "}
                      </p>
                      <div className="author">
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={require("assets/img/faces/team-1.jpg")}
                        ></img>
                        <div className="text">
                          <span className="name">Artist</span>
                          <div className="meta">Creaing Year</div>
                        </div>
                      </div>
                     <Row style={{ 'margin-top': "40px"}}>
                      <div>
                        <a href={"/"}
                        style={{ border: '1px solid', 'text-align': 'center', display: 'block', cursor: 'pointer', color: " #fff", "backgroundColor": "#5e72e4", "boxShadow": "0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)", "borderRadius": "5px", padding: "5px 10px" }}><FontAwesomeIcon icon={faMusic} alt="music icon" />&nbsp;<span style={{ width: "5px" }}></span>Listen Music</a>
                        <div style={{ height: '20px' }}></div>
                        <a href={"/"}
                        style={{ border: '1px solid', 'text-align': 'center', display: 'block', color: " #fff", "backgroundColor": "#5e72e4", "boxShadow": "0 4px 6px rgb(50 50 93 / 11%), 0 4px 6px rgb(0 0 0 / 8%)", "borderRadius": "5px", padding: "5px 10px" }}><FontAwesomeIcon icon={faCube} alt="3d icon" />&nbsp;<span style={{ width: "5px" }}></span>3D &nbsp; Touch</a>
                        </div>
                    </Row>
                    </CardBody>
                  </Col>
                 </Row>
              </Card>          
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Blogs3;
