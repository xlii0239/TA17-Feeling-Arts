import React from 'react';
import { Button, Container, Card, CardBody, Row, Col, Input } from "reactstrap";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import ArtworkResultShow from 'views/simple-search/ArtworkResultShow.js';



const handleClickMusic = (e, imageNo, artworkName) => {

    window.location = "/normalmusiclisten" + "?artwork_no=" + imageNo + "&artwork_name=" + artworkName;
    //console.log("modelName from three model page", modelName)
};

const handleClick3dModel = (e, modelNo, imgNo) => {

    window.location = "/3d-model" + "?model_no=" + modelNo + "&img_no=" + imgNo;
    //console.log("modelName from three model page", modelName)
};


class NormalSearchArtwork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: [],
            artwork: [],
            artistShow: [],
            artworkShow: []
        }
    }

    componentDidMount() {
        this.populateData();
        console.log("detail", this.state.artist)
    }

    //Change the table data
    search() {
        //var keyword = event.target.value
        var keyword = this.input.value.toLowerCase()
        if (keyword.length > 0) {
            var artistData = this.state.artist
            var artworkData = this.state.artwork

            var artistSearchResults = []
            var artworkSearchResults = []

            for (var i = 0; i < artistData.length; i++) {
                if (artistData[i].artist.toLowerCase().indexOf(keyword) != -1) {
                    artistSearchResults = [...artistSearchResults, artistData[i]]
                }
            }

            for (var i = 0; i < artworkData.length; i++) {
                if (artworkData[i].artwork.toLowerCase().indexOf(keyword) != -1) {
                    artworkSearchResults = [...artworkSearchResults, artworkData[i]]
                }
            }

            this.setState({
                artistShow: artistSearchResults,
                artworkShow: artworkSearchResults
            })
        }
        else {
            this.setState({
                artistShow: this.state.artist
            })
        }
        console.log("from changeFunction", this.state.artistShow);
    }

    render() {

        return (
            <>
                <NavbarForHome />
                <ul class="breadcrumb bg-transparent font-weight-bold">
                    <li class="breadcrumb-item"><a href="homepage" class="text-dark font-weight-bold">Home</a></li>
                    <li class="breadcrumb-item"><a href="normalmode" class="text-dark font-weight-bold">Picture Mode</a></li>
                    <li class="breadcrumb-item active">Search Artwork</li>
                </ul>
                <div className="section">
                    <Container className="shape-container flex align-items-center py-lg-2">
                        <h6 class="text-muted">
                            Search Feelingarts.tk by entering the keywords of the artwork name in the search box below.
                            </h6>
                        <div style={{ display: "flex" }}>
                            <Input style={{ width: "60%" }} type="text" innerRef={Input => this.input = Input} placeHolder="Search all results" />
                            <Button color="primary"
                                type="button"
                                onClick={this.search.bind(this)}
                            >
                                Click to Search
                        </Button>
                        </div>
                    </Container>
                    {/*<Col>*/}
                    {/*    <ArtworkResultShow toData={this.state.artworkShow}>*/}
                    {/*    </ArtworkResultShow>*/}
                    {/*</Col>*/}
                    <Row className="justify-content-center mt-5">
                        <Col lg="9">
                            <Row className="row-grid">
                                {this.state.artworkShow.map((item, index) => {
                                    let imageURL = 'https://storage.googleapis.com/feeling-arts-data/artwork-img/' + item.imageNo + '.jpg'
                                    return (
                                        <Col lg="4">
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
                                                        onClick={(e) => handleClickMusic(e, item.imageNo, item.artwork)}
                                                    >
                                                        Listen
                                                    </Button>
                                                    <Button
                                                        className="mt-4"
                                                        color="warning"
                                                        onClick={(e) => handleClick3dModel(e, item.modelNo, item.imageNo)}
                                                    >
                                                        Touch
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Col>
                    </Row>
                </div>
            </>
        )
    }

    async populateData() {
        const response = await fetch('artist');
        const response1 = await fetch('artwork');
        const data = await response.json();
        const data1 = await response1.json();
        this.setState({ artist: data, artwork: data1 });
        console.log("detail", this.state.artist);
        console.log("detail", this.state.artwork);
    }
}

export default NormalSearchArtwork;