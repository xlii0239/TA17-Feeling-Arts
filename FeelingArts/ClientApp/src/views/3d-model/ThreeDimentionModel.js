import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";

import STLViewer from 'stl-viewer'

import {
    useLocation
} from "react-router-dom";


class ThreeDimentionModel extends React.Component {
    //React.useEffect(() => {
    //    document.title = "Feeing Arts-Art through touch"
    //    document.body.classList.add("3d-model");
    //    window.scrollTo(0, 0);
    //    document.body.scrollTop = 0;
    //    return function cleanup() {
    //        document.body.classList.remove("3d-model");
    //    };
    //});

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
                        <ul className="breadcrumb bg-transparent font-weight-bold">
                            <li className="breadcrumb-item"><a href="homepage" className="text-dark font-weight-bold">Home</a></li>
                            <li className="breadcrumb-item"><a href="normalmode" className="text-dark font-weight-bold">Picture Mode</a></li>
                            <li className="breadcrumb-item"><a href="3d-model-home" className="text-dark font-weight-bold">Art through Touch</a></li>
                            <li className="breadcrumb-item active">3D Model</li>
                        </ul>
                        <Container >
                            <Row>
                                <Col className="mr-auto" lg="10" style={{ 'marginLeft': '52px' }} >
                                    <h4 className="title font-weight-bold">{artwork.artwork}</h4>
                                    <h4 className="name">{artwork.artist}</h4>
                                    <h5 className="font-italic" style={{ width: '100%', 'textAlign': 'justify' }}>{ artwork.describe}</h5>
                                </Col>
                                <Col lg="6">
                                    <img
                                        alt="..."
                                        className="img-fluid rounded shadow-lg"
                                        src={this.state.imageURL}
                                        style={{ height: "500px" }}
                                    >
                                    </img>
                                </Col>
                                <Col lg="6">
                                    <STLViewer
                                        url={this.state.modelUrl}
                                        model={this.state.modelUrl}
                                        width={450}
                                        height={500}
                                        modelColor='#2CA4B9'
                                        backgroundColor='#EAEAEA'
                                        rotate={false}
                                        orbitControls={true}
                                    />
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
                                                onClick={(e) => e.button()}>
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
                                                href="normal-about-3d-printing"
                                                onClick={(e) => e.button()}>
                                                Learn more
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </>
            )
        }

        
    }
}

export default ThreeDimentionModel;
