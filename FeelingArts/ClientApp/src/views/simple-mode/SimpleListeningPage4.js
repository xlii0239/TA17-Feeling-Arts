import React from "react";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import { Container, Row, Col, Button } from "reactstrap";
import MusicInfo from "components/a17components/Music/MusicInfo.js";



function SimpleListeningPage4() {
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
                            <h5 className="title font-weight-bold">Shot Marilyn</h5>
                            <h6 className="font-italic">By Andy Warhol</h6>
                           
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

                {/*<row className="floating-box bg-secondary col-md-8 offset-md-2">*/}
                {/*        <div className="box text-left">*/}
                {/*        <div className="icon icon-shape bg-warning icon-xl rounded-circle text-white">*/}
                {/*                <i className="fa fa-music"></i>*/}
                {/*            </div>*/}
                {/*    </div>*/}
                {/*    <h2 className="lead text-dark p-5">*/}
                {/*        Enjoy the Shot Marilyn with this song which is created by Blondie.*/}
                {/*    <Button*/}
                {/*        className="btn-icon col-md-2 offset-md-6"*/}
                {/*        color="warning"*/}
                {/*            href="https://youtu.be/aa911_8TP2s"*/}
                {/*    >*/}
                {/*        <span className="btn-inner--icon">*/}
                {/*            <i className="ni ni-button-play"></i>*/}
                {/*        </span>*/}
                {/*        <span className="btn-inner--text">Play</span>*/}
                {/*        </Button>*/}
                {/*    </h2>*/}
                {/*    <h2 className="lead text-dark p-5">*/}
                {/*        Enjoy the Shot Marilyn with this song which is created by Debbie Harry.*/}
                {/*    <Button*/}
                {/*            className="btn-icon col-md-2 offset-md-6"*/}
                {/*            color="warning"*/}
                {/*            href="https://youtu.be/Pdo95gvIv68"*/}
                {/*        >*/}
                {/*            <span className="btn-inner--icon">*/}
                {/*                <i className="ni ni-button-play"></i>*/}
                {/*            </span>*/}
                {/*            <span className="btn-inner--text">Play</span>*/}
                {/*        </Button>*/}
                {/*    </h2>*/}
                {/*    </row>*/}
            </div>
            
        </>
    );
}

export default SimpleListeningPage4;

