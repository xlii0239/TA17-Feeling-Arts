import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import HeaderForHome from "components/a17components/headers/HeaderForHome.js";

import STLViewer from 'stl-viewer'

import {
    useLocation
} from "react-router-dom";



class ThreeDimentionModelSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            artwork: [],
            modelNo: "",
            imageNo: "",
            modelUrl: "",
            imageURL: ""
        }
    }

    componentDidMount() {
        this.populateData();
    }

    async populateData() {
        const search = this.props.location.search;
        const modelNo = new URLSearchParams(search).get("model_no");
        const imageNo = new URLSearchParams(search).get("img_no");

        this.setState({ modelNo: modelNo });
        this.setState({ imageNo: imageNo });

        let artworkQueryURL = 'artwork/' + imageNo;
        const artworkResponse = await fetch(artworkQueryURL);
        const data1 = await artworkResponse.json();

        this.setState({ artwork: data1 });

        const modelUrl = 'https://storage.googleapis.com/feeling-arts-data/3d_model/' + modelNo + '.stl'
        const imageURL = 'https://storage.googleapis.com/feeling-arts-data/artwork-img/' + imageNo + '.jpg'

        this.setState({ modelUrl: modelUrl });
        this.setState({ imageURL: imageURL });
    }

    render() {
        if (this.state.artwork.length == 0) {
            return (<h1>Loading</h1>)
        }

        else {
            const artwork = this.state.artwork[0]
            return (
                <>
                    <NavbarForHome type="transparent" />
                    <div style={{ background: 'url(https://www.publicdomainpictures.net/pictures/240000/velka/light-blue-wallpaper.jpg)', height: '900px', }} >
                        <ul class="breadcrumb bg-transparent font-weight-bold">
                            <li className="breadcrumb-item"><a href="homepage" className="text-dark font-weight-bold">Home</a></li>
                            <li className="breadcrumb-item"><a href="simplemode" className="text-dark font-weight-bold">Simple Mode</a></li>
                            <li className="breadcrumb-item"><a href="3d-model-home-simple" className="text-dark font-weight-bold">Art through Touch</a></li>
                            <li className="breadcrumb-item active">3D Model</li>
                        </ul>
                        <Container fluid className='gx-0'>
                            <Col className="text-center mx-auto" md="8" lg="12">
                                <h4 className="display-4">Enjoy the 3D model to feel more about the artwork.</h4>
                            </Col>
                            <Row className="row-grid mt-5">
                                <Col lg="10" style={{ textAlign: 'center' }} >
                                    <h4 className="title font-weight-bold">{artwork.artwork}</h4>
                                    <h5 className="font-italic">{"Created by " + artwork.artist}</h5>
                                    <h5 className="font-italic">{artwork.describe}</h5>
                                </Col>
                                <Col lg="6">
                                    <div className="info info-horizontal transparent">
                                        <div className="icon icon-shape icon-shape-info rounded-circle text-white">
                                            <i className="fa fa-download text-info"></i>
                                        </div>
                                        <div className="description pl-4">
                                            <h5 className="title font-weight-bold">Download 3D Model</h5>
                                            <p>

                                                Touch the artwork by depicting the replica with 3D shadows of the artwork, highlighting the light and shadow contrast of the artwork.
                                                Click the download button to get the 3D model file.
                                            </p>
                                            <a
                                                className="font-weight-bold"
                                                href={this.state.modelUrl}
                                                onClick={(e) => e.button()}
                                            >
                                                Download
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="6">
                                    <div className="info info-horizontal bg-transparent">
                                        <div className="icon icon-shape icon-shape-info rounded-circle text-white">
                                            <i className="far fa-edit text-info"></i>
                                        </div>
                                        <div className="description pl-4">
                                            <h5 className="title font-weight-bold">3D Model print advice</h5>
                                            <p>
                                                After downloading the 3D Model of the artwork, it can be printed layer by layer on the 3D printer.
                                                Click the learn more button to get some information about 3D printing.
                                            </p>
                                            <a
                                                className="font-weight-bold"
                                                href="about-3d-printing"
                                                onClick={(e) => e.button()}
                                            >
                                                Learn more
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </>
            );
        }
    }
}

export default ThreeDimentionModelSimple;
