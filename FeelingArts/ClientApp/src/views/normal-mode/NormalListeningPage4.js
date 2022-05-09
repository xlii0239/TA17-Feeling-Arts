import React from "react";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import { Container, Row, Col, Button } from "reactstrap";
import MusicInfo from "components/a17components/Music/MusicInfo.js";



function NormalListeningPage4() {
    React.useEffect(() => {
        document.title = "Listening page"
    });
    return (
        <>
            <NavbarForHome />
            <ul className="breadcrumb bg-transparent font-weight-bold ">
                <li className="breadcrumb-item"><a href="homepage" className="text-dark font-weight-bold">Home</a></li>
                <li className="breadcrumb-item text-light"><a href="normalmode" className="text-dark font-weight-bold">Picture Mode</a></li>
                <li className="breadcrumb-item"><a href="NormalArtMusic" className="text-dark font-weight-bold">Art through Music</a></li>
                <li className="breadcrumb-item active">Listen</li>
            </ul>
            <div className="page-header">
                <Container>
                    <Row>
                        <Col className="mr-auto" lg="4">
                            <h4 className="title font-weight-bold">Shot Marilyn</h4>
                            <h5 className="font-italic">By Andy Warhol</h5>
                            <img
                                alt="Agony In The Garden"
                                className="img-fluid"
                                src={require("assets/NewImg/artworks/w10.jpg")}
                            ></img>

                        </Col>
                        <Col className="pl-md-0" lg="7" md="12">
                            <Row className="mx-auto">
                                <Col lg="8" md="4">
                                    <MusicInfo videoId='aa911_8TP2s' />
                                    <MusicInfo videoId='Pdo95gvIv68' />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
              
            </div>
            
        </>
    );
}

export default NormalListeningPage4;

