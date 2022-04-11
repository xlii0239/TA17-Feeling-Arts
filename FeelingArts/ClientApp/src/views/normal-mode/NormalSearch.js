import React from 'react';
import { Button, Container, Row, Col, Input } from "reactstrap";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import ProfileCard1 from "components/a17components/cards/ProfileCard1.js";
import FooterForWeb from "components/a17components/footers/FooterForWeb.js";
import Team1 from "components/a17components/cards/Team1.js";
import Carousel from "components/a17components/cards/Carousel.js";

class NormalSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: [],
            artistShow: [],
            artwork: [],
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

            var artistSearchResults = []0-,
            var artworkSearchResults = []

            for (var i = 0; i < artistData.length; i++) {
                if (!artistData[i].artist.toLowerCase().search(keyword)) {
                    artistSearchResults = [...artistSearchResults, artistData[i]]
                }
            }

            for (var i = 0; i < artworkData.length; i++) {
                if (!artworkData[i].artwork.toLowerCase().search(keyword)) {
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
                artistShow: []
            })
        }
        console.log("from changeFunction", this.state.artistShow);
    }

    render() {

        //const Item = this.state.artistshow.map((item, id) =>
        //    <p key={id}>{ item.name}</p> 
        //)
        //this.populateData();
        //const data = this.state.artistshow;
        return (
            <>
                <NavbarForHome />
                <br></br>
                <ul class="breadcrumb bg-transparent font-weight-bold">
                    <li class="breadcrumb-item text-light"><a href="homepage">Home</a></li>
                    <li class="breadcrumb-item text-light"><a href="normalmode">Normal Mode</a></li>
                    <li class="breadcrumb-item active">Search More</li>
                </ul>
                <div className="section">
                    <Container className="shape-container flex align-items-center py-lg-2" >
                        <Input type="text" innerRef={Input => this.input = Input} placeHolder="Please enter contents you want to search" />
                        <Button color="primary"
                            type="button"
                            onClick={this.search.bind(this)}
                        >
                            Click to Search
                        </Button>
                    </Container>
                </div>
                <Row>
                    <Col xs={{ span: 5, offset: 2 }} lg={{ span: 5, offset: 2 }}>
                        <Row justify="space-around" align="middle">
                            <ul>
                                {this.state.artistShow.map((item, index) => {
                                    return (
                                        <li key={item.id}>
                                            <ProfileCard1 toData={item}></ProfileCard1>                                           
                                        </li>
                                    )
                                })}
                            </ul>
                        </ Row>
                    </Col>
                    <Col lg="4" md={{ span: 6, offset: 2 }}>
                        <Team1 />
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <FooterForWeb />
            </>
        )
    }

    async populateData() {
        const response = await fetch('artist');
        const response1 = await fetch('artwork');
        const data = await response.json();
        const data1 = await response1.json();
        this.setState({ artist: data, artwork: data1});
        console.log("detail", this.state.artist);
        console.log("detail", this.state.artwork);
    }
}

export default NormalSearch;