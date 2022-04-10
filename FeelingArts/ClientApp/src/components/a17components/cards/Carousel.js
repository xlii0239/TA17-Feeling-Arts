import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

// Core Components
const items = [
  {
    src: require("assets/NewImg/MonaLisa.jpg"),
    altText: "Slide 1",
    caption: "",
    key: "key-1",
  },
  {
      src: require("assets/NewImg/MonaLisa.jpg"),
    altText: "Slide 2",
    caption: "",
    key: "key-2",
  },
  {
      src: require("assets/NewImg/MonaLisa.jpg"),
    altText: "Slide 3",
    caption: "",
    key: "key-3",
  },
];

let pic = {
    src: undefined,
    altText: undefined,
    caption: undefined,
    key: undefined,
}

let pics = []

function CarouselSection(props) {
    let currentArtwork;
    if (typeof props.toData[0] !== 'undefined') {
        currentArtwork = props.toData;
        console.log("From search artwork", currentArtwork)
        for (let i = 0; i < currentArtwork.length; i++) {
            console.log("From search artwork", currentArtwork[i].name)
            pic.src = require("assets/NewImg/" + currentArtwork[i].name + ".jpg")
            pic.altText = "Slide " + i
            pic.caption = ""
            pic.key = "key-" + i
            pics.push(pic)
        }
        console.log("From search artwork_pics", pics)
    }
    else {
        return (<><p>Loading</p></>)
    }
  return (
    <>
      <div
        className="section"
        style={{
          backgroundImage: "url(" + require("assets/img/ill/1.svg") + ")",
        }}
      >
        <Container className="py-md">
          <Row className="justify-content-between align-items-center">
            <Col className="mb-lg-auto" lg="6">
              <div className="rounded overflow-hidden transform-perspective-left">
                <UncontrolledCarousel items={pics} />
              </div>
            </Col>
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="font-weight-light">{props.toData[0].name}</h1>
              <p className="lead mt-4">
                              { props.toData[0].description }
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;
