import React from "react";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import { Container, Row, Col, Button, Card } from "reactstrap";
import MusicInfo from "components/a17components/Music/MusicInfo.js";




function NormalListeningPage1() {
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
                            <Col lg="4" md="12">                                                         
                                <h4 className="title font-weight-bold">Agony In The Garden</h4>
                            <h5 className="font-italic">By Albrecht Durer</h5>
                            <Col>
                                <img
                                    alt="Agony In The Garden"
                                    className="img-fluid"
                                    src={require("assets/NewImg/artworks/w1.jpg")}
                                ></img>
                                </Col>
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

                {/*<row className="floating-box bg-secondary col-md-8 offset-md-2">*/}
                {/*    <div className="box text-left">*/}
                {/*        <div className="icon icon-shape bg-warning icon-xl rounded-circle text-white">*/}
                {/*            <i className="fa fa-music"></i>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <h2 className="lead text-dark p-5">*/}
                {/*        Enjoy the Agony In The Garden with this song which is created by Danielle Rose.*/}
                {/*    <Button*/}
                {/*            className="btn-icon col-md-2 offset-md-6"*/}
                {/*            color="warning"*/}
                {/*            href="https://youtu.be/am18duPzcgo"*/}
                {/*        >*/}
                {/*            <span className="btn-inner--icon">*/}
                {/*                <i className="ni ni-button-play"></i>*/}
                {/*            </span>*/}
                {/*            <span className="btn-inner--text">Play</span>*/}
                {/*        </Button>*/}
                {/*    </h2>*/}
                {/*    <h2 className="lead text-dark p-5">*/}
                {/*        Enjoy the Agony In The Garden with this song which is created by SORROW.*/}
                {/*    <Button*/}
                {/*            className="btn-icon col-md-2 offset-md-6"*/}
                {/*            color="warning"*/}
                {/*            href="https://youtu.be/k58gA9ZUhFU"*/}
                {/*        >*/}
                {/*            <span className="btn-inner--icon">*/}
                {/*                <i className="ni ni-button-play"></i>*/}
                {/*            </span>*/}
                {/*            <span className="btn-inner--text">Play</span>*/}
                {/*        </Button>*/}
                {/*    </h2>*/}
                {/*</row>*/}
            </div>
            
        </>
    );
}

export default NormalListeningPage1;

