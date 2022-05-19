import React from 'react';
import { Button, Container, Row, Col, Input } from "reactstrap";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import ProfileCard1 from "components/a17components/cards/ProfileCard1.js";
import ArtistResultShow from './ArtistResultShow';
import ArtworkResultShow from './ArtworkResultShow';


class SimpleSearch extends React.Component {
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
                <ul className="breadcrumb bg-transparent font-weight-bold">
                    <li className="breadcrumb-item"><a href="homepage" className="text-dark font-weight-bold">Home</a></li>
                    <li className="breadcrumb-item"><a href="simplemode" className="text-dark font-weight-bold">Simple Mode</a></li>
                    <li className="breadcrumb-item active">Search Artist</li>
                </ul>
                <div className="section">
                    <Container className="shape-container flex align-items-center py-lg-2">
                        <h6 class="text-muted">
                            Search Feelingarts.tk by entering the keywords of the artist name in the search box below.
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
                    <Col>
                        <ArtistResultShow toData={this.state.artistShow}>
                        </ArtistResultShow>
                    </Col>
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

export default SimpleSearch;