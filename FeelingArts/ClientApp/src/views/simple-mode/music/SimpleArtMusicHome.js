import React from "react";

// reactstrap components
import { Button, Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { Pagination, Navigation } from "swiper";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";


const handleClick = (e, imageNo, artworkName) => {

    window.location = "/simplemusiclisten" + "?artwork_no=" + imageNo + "&artwork_name=" + artworkName;
    //console.log("modelName from three model page", modelName)
};

class SimpleArtMusicHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            artwork: [],
            music: [],
            test: [],
            num: 9
        }
    }

    componentDidMount() {
        this.populateData();
    }

    async populateData() {
        const response = await fetch('music');
        const response1 = await fetch('artwork');

        const response2 = await fetch('music/w1');

        const data = await response.json();
        const data1 = await response1.json();

        const data2 = await response2.json();

        this.setState({ music: data });
        this.setState({ artwork: data1 });
        this.setState({ test: data2 });

        console.log("Music No", this.state.music)

        console.log("Test Data", this.state.test)
    }

    render() {
        return (
            <>
                <NavbarForHome />
                <ul className="breadcrumb bg-transparent font-weight-bold">
                    <li className="breadcrumb-item"><a href="homepage" className="text-dark font-weight-bold">Home</a></li>
                    <li className="breadcrumb-item"><a href="simplemode" className="text-dark font-weight-bold">Simple Mode</a></li>
                    <li className="breadcrumb-item active">Art through Music</li>
                </ul>
                <div className="blogs-6">
                    <Container>
                        <Row>
                            <Col className="text-center mx-auto" md="8" lg="12">
                                <h4 className="display-4">Enjoy the matched music.</h4>
                            </Col>
                            <Col className="text-center mx-auto" lg="12">
                                <h5>  Through our sense of hearing to feel and understand the mood,</h5>
                                <h5>emotion, power and temperament conveyed by the artwork.</h5>
                            </Col>
                        </Row>
                        <Row className="justify-content-center mt-5">
                            <Col lg="12">
                                <Row className="row-grid">
                                    {this.state.artwork.slice(0, this.state.num).map((item, index) => {
                                        console.log(this.state.artwork.length);

                                        return (
                                            <Col lg="4">
                                                <Card className="card-lift--hover shadow border-0">
                                                    <CardBody className="py-5">
                                                        <h4 className="text-primary text-capitalize font-weight-bold"
                                                            style={{ height: '72px' }}>
                                                            {item.artwork}
                                                        </h4>
                                                        <p className="description mt-3 font-weight-bold">
                                                            {item.artist +
                                                                " created in " +
                                                                item.createYear}
                                                            </p>
                                                        <p className="description mt-3 font-weight-bold">
                                                                
                                                                {item.style +
                                                                " style."}
                                                        </p>
                                                        <Button
                                                            className="mt-4"
                                                            color="primary"
                                                            onClick={(e) =>
                                                                handleClick(e, item.imageNo, item.artwork)
                                                            }
                                                        >
                                                            Listen
                                </Button>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        );
                                    })}

                                </Row>
                            </Col>
                            <div r-if="this.state.num < 9" onClick={(e) => { this.setState({ num: this.state.artwork.length }); }} style={{ border: '2px solid #5e72e4', 'marginBottom': '20px', padding: '10px 20px', 'borderRadius': '10px', 'cursor': 'pointer' }}>
                                Loading more</div>

                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}



export default SimpleArtMusicHome;