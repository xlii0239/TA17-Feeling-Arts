import React from 'react';
import { Button, Container, Row, Col, Input } from "reactstrap";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";

import ArtworkResultShow from './ArtworkResultShow';
import Autosuggest from 'react-autosuggest';



class SimpleSearchArtwork extends React.Component {
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
        console.log("detail", this.state.artist)
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
            placeholder: 'Enter an artist name',
            value,
            onChange: this.onChange
        };


        return (
            <>
                <NavbarForHome />
                <ul className="breadcrumb bg-transparent font-weight-bold">
                    <li className="breadcrumb-item"><a href="homepage" className="text-dark font-weight-bold">Home</a></li>
                    <li className="breadcrumb-item"><a href="simplemode" className="text-dark font-weight-bold">Simple Mode</a></li>
                    <li className="breadcrumb-item active">Search Artwork</li>
                </ul>
                <div className="section">
                    <Container className="shape-container flex align-items-center py-lg-2">
                        <h6 class="text-muted">
                            Search Feelingarts.tk by entering the keywords of the artwork name in the search box below.
                            </h6>
                        <div style={{ display: "flex" }}>
                            {/*<Input style={{ width: "60%" }} type="text" innerRef={Input => this.input = Input} placeholder="Search all results" />*/}
                            {/*<Button color="primary"*/}
                            {/*    type="button"*/}
                            {/*    onClick={this.search.bind(this)}*/}
                            {/*>*/}
                            {/*    Click to Search*/}
                            {/*</Button>*/}
                            <Autosuggest
                                suggestions={suggestions}
                                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                getSuggestionValue={this.getSuggestionValue}
                                renderSuggestion={this.renderSuggestion}
                                inputProps={inputProps}
                            />
                            <Button color="primary"
                                type="button"
                                onClick={this.search.bind(this)}
                            >
                                Auto suggest Click to Search
                            </Button>
                        </div>
                    </Container>
                    <Col>
                        <ArtworkResultShow toData={this.state.artworkShow}>
                        </ArtworkResultShow>
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

export default SimpleSearchArtwork;