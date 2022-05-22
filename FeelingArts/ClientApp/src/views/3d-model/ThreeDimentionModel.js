import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";

import STLViewer from 'stl-viewer'

import {
    useLocation
} from "react-router-dom";



function ThreeDimentionModel() {
    React.useEffect(() => {
        document.title = "Feeing Arts-Art through touch"
        document.body.classList.add("3d-model");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("3d-model");
        };
    });

    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery();
    const modelNo = query.get('model_no');
    const imgNo = query.get('img_no')
    console.log("modelNO from model page", modelNo)

    const url = 'https://storage.googleapis.com/feeling-arts-data/3d_model/' + modelNo + '.stl'
    const url_img = 'https://storage.googleapis.com/feeling-arts-data/artwork-img/' + imgNo + '.jpg'

    const downloadModel = (e) => {
        window.location = url;
    };

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
            <Container fluid className='gx-0'>
                <Row className="row-grid mt-5">
                    <Col lg="10" style={{ textAlign: 'center' }} >
                         <h4 className="title font-weight-bold">Artwork Name</h4>
                         <h5 className="font-italic">Created by Artist Name</h5>
                         <h5 className="font-italic">Introduction</h5>
                    </Col>
                    <Col lg="6">
                        <img
                            alt="..."
                            className="img-fluid rounded shadow-lg"
                            src={url_img}
                            style={{ height: "500px", weight:"600px"}}
                        >
                        </img>
                    </Col>
                    <Col lg="6">                     
                        <STLViewer
                            url={url}
                            model={url}
                            width={600}
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
                                        href={url}
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
    );
}

export default ThreeDimentionModel;
