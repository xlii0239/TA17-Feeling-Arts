import React from "react";

// reactstrap components
import { Button, Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

const handleClick = (e, imageNo, artworkName) => {

    window.location = "/normalmusiclisten" + "?artwork_no=" + imageNo + "&artwork_name=" + artworkName;
    //console.log("modelName from three model page", modelName)
};

class NormalArtMusicHome extends React.Component {

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
                    <li className="breadcrumb-item"><a href="normalmode" className="text-dark font-weight-bold">Picture Mode</a></li>
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
                                        {this.state.artwork.slice(0, 79).map((item, index) => {
                                            let imageURL = 'https://storage.googleapis.com/feeling-arts-data/artwork-img/' + item.imageNo + '.jpg'
                                            console.log("URL", imageURL)
                                            return (
                                                <SwiperSlide key={index}>
                                                    <Card
                                                        className="card-background"
                                                        style={{
                                                            backgroundImage: "url(" + imageURL + ")",
                                                        }}
                                                    >
                                                        <CardBody className="py-5">
                                                            <Row>
                                                                <h5 className="text-primary text-capitalize font-weight-bold text-light"
                                                                    style={{ height: "100px" }}
                                                                >
                                                                    {item.artwork}
                                                                </h5>
                                                            </Row>
                                                            <Row className="description mt-3 font-weight-bold text-light">
                                                                {item.artist + " created in " + item.createYear}
                                                            </Row>
                                                            <Row className="description mt-3 font-weight-bold text-light">
                                                                {item.style + " style"}
                                                            </Row>
                                                            <Button
                                                                className="mt-4"
                                                                color="info"
                                                                onClick={(e) => handleClick(e, item.imageNo, item.artwork)}
                                                            >
                                                                Listen
                                                            </Button>
                                                        </CardBody>
                                                    </Card>
                                                </SwiperSlide>
                                            )
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
                                        {this.state.artwork.slice(79, this.state.artwork.length).map((item, index) => {
                                            let imageURL = 'https://storage.googleapis.com/feeling-arts-data/artwork-img/' + item.imageNo + '.jpg'
                                            console.log("URL", imageURL)
                                            return (
                                                <SwiperSlide key={index}>
                                                    <Card
                                                        className="card-background"
                                                        style={{
                                                            backgroundImage: "url(" + imageURL + ")",
                                                        }}
                                                    >
                                                        <CardBody className="py-5">
                                                            <Row>
                                                                <h4 className="text-primary text-capitalize font-weight-bold text-light"
                                                                    style={{ height: "100px" }}
                                                                >
                                                                    {item.artwork}
                                                                </h4>
                                                            </Row>
                                                            <Row className="description mt-3 font-weight-bold text-light">
                                                                {item.artist + " created in " + item.createYear}
                                                            </Row>
                                                            <Row className="description mt-3 font-weight-bold text-light">
                                                                {item.style + " style"}
                                                            </Row>
                                                            <Button
                                                                className="mt-4"
                                                                color="info"
                                                                onClick={(e) => handleClick(e, item.imageNo, item.artwork)}
                                                            >
                                                                Listen
                                                            </Button>
                                                        </CardBody>
                                                    </Card>
                                                </SwiperSlide>
                                            )
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



export default NormalArtMusicHome;