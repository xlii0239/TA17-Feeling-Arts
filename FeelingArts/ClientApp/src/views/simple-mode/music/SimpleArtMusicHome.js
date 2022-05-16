import React from "react";

// reactstrap components
import { Button, Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
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
            test: []
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
                                    <Swiper className="swiper"
                                        style={{ width: '1200px' }}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={(swiper) => console.log(swiper)}
                                        slidesPerView={3}
                                        spaceBetween={30}
                                        loop={true}
                                        grid={{ fill: 'rows', rows: 2 }}
                                    >
                                        {this.state.artwork.slice(0, 52).map((item, index) => {
                                            console.log(this.state.artwork.length);

                                            return (
                                                <SwiperSlide key={index}>
                                                    <Card className="card-lift--hover shadow border-0">
                                                        <CardBody className="py-5">
                                                            <Row>
                                                                <h5 className="text-primary text-capitalize font-weight-bold"
                                                                    style={{ height: '100px' }}>
                                                                    {item.artwork}
                                                                </h5>
                                                            </Row>
                                                            <Row className="description mt-3 font-weight-bold">
                                                                {item.artist + " created in " + item.createYear}
                                                            </Row>
                                                            <Row className="description mt-3 font-weight-bold">
                                                                {item.style + " style"}
                                                            </Row>
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
                                                </SwiperSlide>
                                            );
                                        })}
                                    </Swiper>
                                    <Swiper className="swiper"
                                        style={{ width: '1200px' }}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={(swiper) => console.log(swiper)}
                                        slidesPerView={3}
                                        spaceBetween={30}
                                        loop={true}
                                        grid={{ fill: 'rows', rows: 2 }}
                                    >
                                        {this.state.artwork.slice(52, this.state.artwork.length).map((item, index) => {
                                            console.log(this.state.artwork.length);

                                            return (
                                                <SwiperSlide key={index}>
                                                    <Card className="card-lift--hover shadow border-0">
                                                        <CardBody className="mx-auto">
                                                            <Row>
                                                                <h5 className="text-primary text-capitalize font-weight-bold"
                                                                    style={{ height: '100px' }}>
                                                                    {item.artwork}
                                                                </h5>
                                                            </Row>
                                                            <Row className="description mt-3 font-weight-bold">
                                                                {item.artist + " created in " + item.createYear}
                                                            </Row>
                                                            <Row className="description mt-3 font-weight-bold">
                                                                {item.style + " style"}
                                                            </Row>
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
                                                </SwiperSlide>
                                            );
                                        })}
                                    </Swiper>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}



export default SimpleArtMusicHome;