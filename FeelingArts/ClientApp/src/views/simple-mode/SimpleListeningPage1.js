import React from "react";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import { Container, Row, Col, Button } from "reactstrap";
import MusicInfo from "components/a17components/Music/MusicInfo.js";



function SimpleListeningPage1() {
    React.useEffect(() => {
        document.title = "Listening page"
    });
    return (
        <>
            <NavbarForHome />
            <ul className="breadcrumb bg-transparent font-weight-bold ">
                <li className="breadcrumb-item"><a href="homepage" className="text-dark font-weight-bold">Home</a></li>
                <li className="breadcrumb-item text-light"><a href="simplemode" className="text-dark font-weight-bold">Simple Mode</a></li>
                <li className="breadcrumb-item"><a href="SimpleArtMusic" className="text-dark font-weight-bold">Art through Music</a></li>
                <li className="breadcrumb-item active">Listen</li>
            </ul>
            <div className="page-header">

                <Container>
                    <Row>
                    <Col className="mr-auto" lg="4">
                     <h3 className="title font-weight-bold">
                          Artwork information:
                     </h3>
                            <h5 className="title font-weight-bold">Agony In The Garden</h5>
                            <h6 className="font-italic">By Albrecht Durer</h6>
                        </Col>
                        <Col className="pl-md-0" lg="7" md="12">
                        <Row className="mx-auto">
                                <Col lg="8">
                                <MusicInfo videoId='am18duPzcgo' />
                                <MusicInfo videoId='k58gA9ZUhFU' />
                            </Col>
                            </Row>
                        </Col>
                    </Row>
                    </Container>
            </div>
            
        </>
    );
}

export default SimpleListeningPage1;

