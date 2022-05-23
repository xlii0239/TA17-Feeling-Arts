import React from "react";
import { Container, Row, Col, Button, Card, CardBody, CardTitle} from "reactstrap";
import { Link } from 'react-router';
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import FooterForWeb from "components/a17components/footers/FooterForWeb.js";
import HeaderForHome from "components/a17components/headers/HeaderForHome.js";

import STLViewer from 'stl-viewer'

const url = "https://storage.googleapis.com/feeling-arts-data/ccab50f18fb14c91ccca300a.stl"

const handleClick = (e, modelNo, imgNo) => {

    window.location = "/3d-model-simple" + "?model_no=" + modelNo + "&img_no=" + imgNo;
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
                    <li class="breadcrumb-item"><a href="simplemode" class="text-dark font-weight-bold">Simple Mode</a></li>
                    <li class="breadcrumb-item active">Art through Touch</li>
                </ul>
                <Row>
                    <Col className="text-center mx-auto" md="8" lg="12">
                        <h4 className="display-4">Get the 3D shadows depict replica.</h4>
                    </Col>
                    <Col className="text-center mx-auto" lg="12">
                        <h5>Through our sense of touching to experience and feel the vividly form and expression of artwork.</h5>
                    </Col>
                </Row>
                <Container fluid>
                    <Row>
                        <Col lg="8" style={{ margin: "0px auto" }}>
                            {this.state.model.slice(0, this.state.num).map((item, index) => {
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
                    <div r-if="this.state.num < 9" onClick={(e) => { this.setState({ num: this.state.model.length }); }}
                        style={{ width: "141px", height: "46px", margin: "0px auto", border: '1px solid #5e72e4', 'marginBottom': '20px', padding: '10px 20px', 'borderRadius': '10px', 'cursor': 'pointer', "textAlign": "center" }}>
                        loading more</div>
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
