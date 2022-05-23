import React from 'react';
import { Button, Container, Card, CardBody, Row, Col, Input } from "reactstrap";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import Autosuggest from 'react-autosuggest';



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
            artworkShow: [],
            artworkSuggestion: [],
            value: "",
            suggestions: []
        }
    }

    componentDidMount() {
        this.populateData();
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
        console.log("from onChange", this.state.value);
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    getSuggestionValue = suggestion => suggestion.name;

    renderSuggestion = suggestion => (
        <div>
            {suggestion.name}
        </div>
    );

    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        console.log("Get suggestion", this.state.artworkSuggestion)

        return inputLength === 0 ? [] : this.state.artworkSuggestion.filter(lang =>
            lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    //Change the table data
    search() {
        //var keyword = event.target.value
        var keyword = this.state.value.toLowerCase()
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
        const { value, suggestions } = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder: 'Enter an artwork name',
            value,
            onChange: this.onChange
        };

        return (
            <>
                <NavbarForHome />
                <div style={{ background: 'url(https://www.publicdomainpictures.net/pictures/240000/velka/light-blue-wallpaper.jpg)', height: '900px', }} >
                <ul class="breadcrumb bg-transparent font-weight-bold">
                    <li class="breadcrumb-item"><a href="homepage" class="text-dark font-weight-bold">Home</a></li>
                    <li class="breadcrumb-item"><a href="normalmode" class="text-dark font-weight-bold">Picture Mode</a></li>
                    <li class="breadcrumb-item active">Search Artwork</li>
                </ul>
                <div className="section">
                    <Container className="shape-container flex align-items-center py-lg-2">
                        <h6 className="text-muted" style={{ width: "72%", margin: " 0px auto", "minWidth": "360px" }}>
                             Search Feelingarts.tk by entering the keywords of the artwork name in the search box.
                        </h6>
                        <div style={{ 'display': 'flex', "alignItems": "center", width: "72%", margin: " 0px auto" }}>
                            <div className="a_input">
                                <Autosuggest
                                    suggestions={suggestions}
                                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                    getSuggestionValue={this.getSuggestionValue}
                                    renderSuggestion={this.renderSuggestion}
                                    inputProps={inputProps}

                                />
                            </div>
                            <div className="search_btn"
                                onClick={this.search.bind(this)}
                            >
                                Click to Search
                            </div>
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
                                                <a href="artworkinfo" onClick={(e) => e.button()}>
                                                <CardBody className="py-5">
                                                    <Row>
                                                        <h4 className="text-capitalize font-weight-bold text-light"
                                                                style={{ textAlign: 'center', height: '72px', overflow: 'hidden', "textOverflow": '   ellipsis ', display: " -webkit-box ", "-webkit-line-clamp": 2, "-webkit-box-orient": "vertical" }}
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
                                                </CardBody>
                                                 </a>
                                            </Card>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Col>
                    </Row>
                </div>
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

        let artworkName = []
        for (var i = 0; i < data1.length; i++) {
            let oneArtwork = {
                name: data1[i].artwork
            }

            artworkName.push(oneArtwork)
        }

        this.setState({ artworkSuggestion: artworkName })

        console.log("detail", this.state.artist);
        console.log("detail", this.state.artwork);
    }
}

export default NormalSearchArtwork;