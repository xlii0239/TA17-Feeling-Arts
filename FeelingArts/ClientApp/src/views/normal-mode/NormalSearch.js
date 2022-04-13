import React from 'react';
import { Button, Container, Row, Col, Input } from "reactstrap";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import ProfileCard1 from "components/a17components/cards/ProfileCard1.js";
import FooterForWeb from "components/a17components/footers/FooterForWeb.js";
import Team1 from "components/a17components/cards/Team1.js";
import Carousel from "components/a17components/cards/Carousel.js";
import Autosuggest from 'react-autosuggest';

import theme from "./theme.css";



const artists = [
    {
        name: 'Andrei Rublev',
    },
    {
        name: 'Andy Warhol',
    },
    {
        name: 'Camille Pissarro',
    },
    {
        name: 'Caravaggio',
    },
    {
        name: 'Claude Monet',
    },
    {
        name: 'Diego Velazquez',
    },
    {
        name: 'Diego Rivera',
    },
    {
        name: 'Edgar Degas',
    },
    {
        name: 'El Greco',
    },
    {
        name: 'Eugene Delacroix',
    },
    {
        name: 'Francisco Goya',
    },
    {
        name: 'Frida Kahlo',
    },
    {
        name: 'Georges Seurat',
    },
    {
        name: 'Gustav Klimt',
    },
    {
        name: 'Gustave Courbet',
    },
    {
        name: 'Henri de Toulouse - Lautrec',
    },
    {
        name: 'Henri Rousseau',
    },
    {
        name: 'Hieronymus Bosch',
    },
    {
        name: 'Jackson Pollock',
    },
    {
        name: 'Jan van Eyck',
    },
    {
        name: 'Joan Miro',
    },
    {
        name: 'Kazimir Malevich',
    },
    {
        name: 'Leonardo da Vinci',
    },
    {
        name: 'Marc Chagall',
    },
    {
        name: 'Michelangelo',
    },
    {
        name: 'Pablo Picasso',
    },
    {
        name: 'Paul Cezanne',
    }
];

const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : artists.filter(lang =>
        lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
    <div>
        {suggestion.name}
    </div>
);



class NormalSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: [],
            artistShow: [],
            artwork: [],
            artworkShow: [],
            value: '',
            suggestions: []
        }
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
        console.log("from onChange", this.state.value);
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    componentDidMount() {
        this.populateData();
        console.log("detail", this.state.artist)
    }

    //Change the table data
    search() {
        //var keyword = event.target.value
        //var keyword = this.input.value.toLowerCase()
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

    searchArtwork(artistName) {
        var keyword = artistName.toLowerCase();
        var artworkData = this.state.artwork
        var artworkSearchResults = []
        for (var i = 0; i < artworkData.length; i++) {
            if (!artworkData[i].artist.toLowerCase().search(keyword)) {
                artworkSearchResults = [...artworkSearchResults, artworkData[i]]
            }
        }
        return artworkSearchResults;
    }

    requireErrorHandled(artworkName) {
        try {
            return require("assets/NewImg/artworks/" + artworkName + ".jpg");
        }
        catch (e) {
            return require("assets/NewImg/artworks/" + "image-not-found" + ".jpg")
        }
    }

    

    render() {

        //const Item = this.state.artistshow.map((item, id) =>
        //    <p key={id}>{ item.name}</p> 
        //)
        //this.populateData();
        //const data = this.state.artistshow;

        const { value, suggestions } = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder: 'Type an artist name',
            value,
            onChange: this.onChange
        };

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
                        <Autosuggest
                            theme={theme}
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                            getSuggestionValue={getSuggestionValue}
                            renderSuggestion={renderSuggestion}
                            inputProps={inputProps}
                        />
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
                                            <Container>
                                                <Row>
                                                    <Col sm className="py-2 border rounded">
                                                        <ProfileCard1 toData={item}></ProfileCard1>
                                                    </Col>
                                                    <Col sm className="py-2 border rounded">
                                                        
                                                        {this.searchArtwork(item.artist).map((item, index) => {
                                                            return (
                                                                        <img
                                                                            alt="..."
                                                                            className="img-fluid rounded shadow-lg"
                                                                            src={this.requireErrorHandled(item.imageNo)}
                                                                        >
                                                                        </img>
                                                                )
                                                        })}
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </li>
                                    )
                                })}
                            </ul>
                        </ Row>
                    </Col>
                    {/*<Col lg="4" md={{ span: 6, offset: 2 }}>*/}
                    {/*    <Team1 />*/}
                    {/*</Col>*/}
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