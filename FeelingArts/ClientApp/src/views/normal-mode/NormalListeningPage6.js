import React from "react";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import { Container, Row, Col,Button } from "reactstrap";
import MusicInfo from "components/a17components/Music/MusicInfo.js";


function NormalListeningPage6() {
    React.useEffect(() => {
        document.title = "Listening page"
    });
    return (
        <>
            <NavbarForHome />
            <ul class="breadcrumb bg-transparent font-weight-bold ">
                <li class="breadcrumb-item"><a href="homepage" class="text-dark font-weight-bold">Home</a></li>
                <li class="breadcrumb-item text-light"><a href="normalmode" class="text-dark font-weight-bold">Picture Mode</a></li>
                <li class="breadcrumb-item"><a href="NormalArtMusic" class="text-dark font-weight-bold">Art through Music</a></li>
                <li class="breadcrumb-item active">Listen</li>
            </ul>
            <div className="page-header">
                <Container>
                    <Row>
                        <Col className="mr-auto" lg="4">
                            <h4 className="title font-weight-bold">The Yellow House</h4>
                            <h5 className="font-italic">By Vincent van Gogh</h5>
                            <img
                                alt="Agony In The Garden"
                                className="img-fluid"
                                src={require("assets/NewImg/artworks/w100.jpg")}
                            ></img>
                        </Col>
                        <Col className="pl-md-0" lg="7" md="12">
                            <Row className="mx-auto">
                                <Col lg="8" md="4">
                                    <MusicInfo videoId='asdM2znz3OM' />
                                    <MusicInfo videoId='p9wy03frCwI' />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        </>
    );
}

export default NormalListeningPage6;

