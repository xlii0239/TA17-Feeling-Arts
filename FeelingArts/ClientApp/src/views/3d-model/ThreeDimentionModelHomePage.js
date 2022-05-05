import React from "react";
import { Container, Row, Col, Button, Card, CardBody, CardTitle} from "reactstrap";
import { Link } from 'react-router';
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import FooterForWeb from "components/a17components/footers/FooterForWeb.js";
import HeaderForHome from "components/a17components/headers/HeaderForHome.js";

import STLViewer from 'stl-viewer'

const url = "https://storage.googleapis.com/feeling-arts-data/ccab50f18fb14c91ccca300a.stl"

const handleClick = (e, modelNo, imgNo) => {

    window.location = "/3d-model" + "?model_no=" + modelNo + "&img_no=" + imgNo;
    //console.log("modelName from three model page", modelName)
};

class ThreeDimentionModelHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            model: []
        }
    }

    componentDidMount() {
        this.populateData();
    }

    async populateData() {
        const response = await fetch('threedimentionmodel');
        const data = await response.json();
        this.setState({ model: data });
        console.log("Model Name", this.state.model.modelName)
    }



    render() {
        return (
            <>
                <NavbarForHome />
                <ul class="breadcrumb bg-transparent font-weight-bold">
                    <li class="breadcrumb-item"><a href="homepage" class="text-dark font-weight-bold">Home</a></li>
                    <li class="breadcrumb-item"><a href="normalmode" class="text-dark font-weight-bold">Picture Mode</a></li>
                    <li class="breadcrumb-item active">Art through Touch</li>
                </ul>
                <Container fluid>
                    <Row>
                        <Col>
                            {this.state.model.map((item, index) => {
                                return (
                                        <Card key={item.Id}
                                            className="card-blog card-background"
                                            data-animation="zooming"  >
                                            <div
                                                className="full-background"
                                                style={{
                                                    backgroundImage: "url(https://storage.googleapis.com/feeling-arts-data/artwork-img/" + item.imageNo + ".jpg)",
                                                        /*"url(" + require("assets/NewImg/Artwork.jpg") + ")",*/
                                                }}
                                            ></div>
                                            <a onClick={(e) => handleClick(e, item.modelNo, item.imageNo)}>
                                                <CardBody>
                                                    <div className="content-center">
                                                        <CardTitle tag="h4">{item.modelName}</CardTitle>
                                                        {console.log("card title", item.modelName)}
                                                    </div>
                                                </CardBody>
                                            </a>
                                        </Card>
                                )
                            })}
                        </Col>
                        {/*<Col rg="6">*/}
                        {/*    {this.state.model.map((item, index) => {*/}
                        {/*        return (*/}
                        {/*            <h1>{item.modelName}</h1>*/}
                        {/*        )*/}
                        {/*    })}*/}
                        {/*</Col>*/}
                    </Row>
                </Container>

                <FooterForWeb />
            </>
        )
    }
}

//function ThreeDimentionModel() {
//    React.useEffect(() => {
//        document.title = "Feeing Arts-Art through touch"
//        document.body.classList.add("3d-model");
//        window.scrollTo(0, 0);
//        document.body.scrollTop = 0;
//        return function cleanup() {
//            document.body.classList.remove("3d-model");
//        };
//    });

//    return (
//        <>
//            <NavbarForHome type="transparent" />
//            <section className="blogs-home">
//                <Container fluid>
//                    <Row>
//                        <Col lg="6">
//                            <Card
//                                className="card-blog card-background"
//                                data-animation="zooming"  >
//                                <div
//                                    className="full-background"
//                                    style={{
//                                        backgroundImage:
//                                            "url(" + require("assets/NewImg/Artwork.jpg") + ")",
//                                    }}
//                                ></div>
//                                <a href="simplesearchartwork" onClick={(e) => e.button()}>
//                                    <CardBody>
//                                        <div className="content-center">
//                                            <CardTitle tag="h4">Search Artwork</CardTitle>
//                                        </div>
//                                    </CardBody>
//                                </a>
//                            </Card>
//                        </Col>
//                    </Row>
//                </Container>
//            </section>
//        </>
//    );
//}

export default ThreeDimentionModelHomePage;
