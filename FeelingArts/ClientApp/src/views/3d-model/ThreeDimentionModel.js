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
                    <Col>
                        <img
                            alt="..."
                            className="img-fluid rounded shadow-lg"
                            src={url_img}
                            style={{ height: "600px", weight:"1000px"}}
                        >
                        </img>
                    </Col>
                    <Col>                     
                        <STLViewer
                            url={url}
                            model={url}
                            width={700}
	                        height={600}
                            modelColor='#2CA4B9'
                            backgroundColor='#EAEAEA'
                            rotate={false}
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
                    <Col sm className="py-2 border rounded">
                        <Button color="success" size="lg" type="button" href="normal-about-3d-printing">
                            3D Model Print Advice
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
}

export default ThreeDimentionModel;
