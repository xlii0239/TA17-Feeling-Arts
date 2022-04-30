import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import FooterForWeb from "components/a17components/footers/FooterForWeb.js";
import HeaderForHome from "components/a17components/headers/HeaderForHome.js";

import STLViewer from 'stl-viewer'

const url = "https://storage.googleapis.com/feeling-arts-data/ccab50f18fb14c91ccca300a.stl"

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

    return (
        <>
            <NavbarForHome type="transparent" />
            <div className="wrapper">
                <div className="main main-raised">
                    <Container>
                        <STLViewer
                            url='https://storage.googleapis.com/feeling-arts-data/ccab50f18fb14c91ccca300a.stl'
                            width={400}
                            height={400}    
                            model={url}
                            modelColor='#B92C2C'
                            backgroundColor='#EAEAEA'
                            rotate={true}
                            orbitControls={true}
                        />
                    </Container>
                    <Button color="success" size="lg" type="button">
                        Download 3D Model (STL file)
                    </Button>
                </div>
                <FooterForWeb />
            </div>
        </>
    );
}

export default ThreeDimentionModel;
