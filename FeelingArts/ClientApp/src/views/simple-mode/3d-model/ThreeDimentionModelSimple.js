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

    return (
        <>
            <NavbarForHome type="transparent"/>
            <Container fluid className='gx-0'>
                <Row>
                    <Col>
                        <Button color="success" size="lg" type="button" href={url}>
                            Download 3D Model (STL file)
                        </Button>
                    </Col>
                    <Col>
                        <Button color="success" size="lg" type="button" href={url}>
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
