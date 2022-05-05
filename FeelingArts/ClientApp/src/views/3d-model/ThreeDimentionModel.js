import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import FooterForWeb from "components/a17components/footers/FooterForWeb.js";
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
    const url_img = 'https://storage.googleapis.com/feeling-arts-data/artwork-img/' + imgNo + '.jpg'

    const downloadModel = (e) => {
        window.location = url;
    };

    return (
        <>
            <NavbarForHome type="transparent" />
            <ul class="breadcrumb bg-transparent font-weight-bold">
                <li class="breadcrumb-item"><a href="homepage" class="text-dark font-weight-bold">Home</a></li>
                <li class="breadcrumb-item"><a href="normalmode" class="text-dark font-weight-bold">Picture Mode</a></li>
                <li class="breadcrumb-item"><a href="3d-model-home" class="text-dark font-weight-bold">Art through Touch</a></li>
                <li class="breadcrumb-item active">3D Model</li>
            </ul>
            <Container fluid className='gx-0'>
                <Row>
                    <Col sm>
                        <img
                            alt="..."
                            className="img-fluid rounded shadow-lg"
                            src={url_img}
                        >
                        </img>
                    </Col>
                    <Col sm>
                        <STLViewer
                            url={url}
                            model={url}
                            width={800}
	                        height={800}
                            modelColor='#2CA4B9'
                            backgroundColor='#EAEAEA'
                            rotate={true}
                            orbitControls={true}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col sm className="py-2 border rounded">
                        <Button color="success" size="lg" type="button" href={url}>
                            Download 3D Model (STL file)
                        </Button>
                    </Col>
                    <Col sm className="py-2 border rounded" display="flex">
                        <Button color="success" size="lg" type="button" href="about-3d-printing">
                            3D Model Print Advice
                        </Button>
                    </Col>
                </Row>
            </Container>
            <FooterForWeb />
        </>
    );
}

export default ThreeDimentionModel;
