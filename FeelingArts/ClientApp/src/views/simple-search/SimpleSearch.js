import React from 'react';
import { Button, Container, Row, Col, Input } from "reactstrap";
import ArtistResultShow from './ArtistResultShow';
import ArtworkResultShow from './ArtworkResultShow';
import Autosuggest from 'react-autosuggest';


class SimpleSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: [],
            artwork: [],
            artistShow: [],
            artworkShow: [],
            artistSuggestion: [],
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

        console.log("Get suggestion", this.state.artistSuggestion)

        return inputLength === 0 ? [] : this.state.artistSuggestion.filter(lang =>
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
                <div style={{ background: 'url(https://www.publicdomainpictures.net/pictures/240000/velka/light-blue-wallpaper.jpg)', height: '900px', }} >
                    <ul class="breadcrumb bg-transparent font-weight-bold">
                        <li class="breadcrumb-item"><a href="homepage" class="text-dark font-weight-bold">Home</a></li>
                        <li class="breadcrumb-item"><a href="simplemode" class="text-dark font-weight-bold">Simple Mode</a></li>
                        <li class="breadcrumb-item active">Search Artist</li>
                    </ul>
                    <div className="section">
                        <Container className="shape-container flex align-items-center py-lg-2">
                            <h6 className="text-muted" style={{ width: "72%", margin: " 0px auto", "minWidth": "360px" }}>
                                Search Feelingarts.tk by entering the keywords of the artist name in the search box.
                            </h6>

                            <div style={{ 'display': 'flex', "alignItems": "center", width: "72%", margin: " 0px auto" }}>
                                <div className="a_input" style={{ minWidth: "160px" }}>
                                    <Autosuggest
                                        suggestions={suggestions}
                                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                        getSuggestionValue={this.getSuggestionValue}
                                        renderSuggestion={this.renderSuggestion}
                                        inputProps={inputProps}
                                    />
                                </div>
                                <div className="search_btn" style={{ minWidth: "150px" }}
                                    onClick={this.search.bind(this)}
                                >
                                    Click to Search
                                </div>
                            </div>
                        </Container>
                        <Col>
                            <ArtistResultShow toData={this.state.artistShow}>
                            </ArtistResultShow>
                        </Col>
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
        console.log("detail", this.state.artist);
        console.log("detail", this.state.artwork);

        let artistName = []
        for (var i = 0; i < data.length; i++) {
            let oneArtist = {
                name: data[i].artist
            }

            artistName.push(oneArtist)
        }

        this.setState({ artistSuggestion: artistName })
    }
}

export default SimpleSearch;