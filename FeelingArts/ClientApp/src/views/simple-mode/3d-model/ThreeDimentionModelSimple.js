import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import HeaderForHome from "components/a17components/headers/HeaderForHome.js";

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

    return (
        <>
            <NavbarForHome type="transparent" />
            <ul class="breadcrumb bg-transparent font-weight-bold">
                <li className="breadcrumb-item"><a href="homepage" className="text-dark font-weight-bold">Home</a></li>
                <li className="breadcrumb-item"><a href="simplemode" className="text-dark font-weight-bold">Simple Mode</a></li>
                <li className="breadcrumb-item"><a href="3d-model-home-simple" className="text-dark font-weight-bold">Art through Touch</a></li>
                <li className="breadcrumb-item active">3D Model</li>
            </ul>
            <Container fluid className='gx-0'>
                <Row>
                    <Col>
                        <h4 className="lead text-dark lg-6 ">
                            Click on the button below to download the 3D Shadows Depict of the Artwork.
                        <Button color="success" size="lg" type="button" href={url}>
                                Download 3D Model (STL file)
                        </Button>
                            </h4>
                    </Col>
                    <Col>
                        <h4 className="lead text-dark lg-6">
                            Click on the button below to get the 3D printing instructions.
                                                    </h4>
                        <Button color="success" size="lg" type="button" href={"about-3d-printing"}>
                                3D Model Print Advice
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ThreeDimentionModel;
