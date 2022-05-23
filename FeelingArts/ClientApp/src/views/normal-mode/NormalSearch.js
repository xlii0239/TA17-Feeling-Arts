import React from 'react';
import { Button, Container, Row, Col, Input } from "reactstrap";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import ProfileCard1 from "components/a17components/cards/ProfileCard1.js";
import Team1 from "components/a17components/cards/Team1.js";
import Carousel from "components/a17components/cards/Carousel.js";
import Autosuggest from 'react-autosuggest';
import 'assets/css/common.css'



let artists = [
    {
        name: 'Andrei Rublev'
    },
    {
        name: 'Andy Warhol'
    },
    {
        name: 'Camille Pissarro'
    },
    {
        name: 'Caravaggio'
    },
    {
        name: 'Claude Monet'
    },
    {
        name: 'Diego Velazquez'
    },
    {
        name: 'Diego Rivera'
    },
    {
        name: 'Edgar Degas'
    },
    {
        name: 'El Greco'
    },
    {
        name: 'Eugene Delacroix'
    },
    {
        name: 'Francisco Goya'
    },
    {
        name: 'Frida Kahlo'
    },
    {
        name: 'Georges Seurat'
    },
    {
        name: 'Gustav Klimt'
    },
    {
        name: 'Gustave Courbet'
    },
    {
        name: 'Henri de Toulouse - Lautrec'
    },
    {
        name: 'Henri Rousseau'
    },
    {
        name: 'Hieronymus Bosch'
    },
    {
        name: 'Jackson Pollock'
    },
    {
        name: 'Jan van Eyck'
    },
    {
        name: 'Joan Miro'
    },
    {
        name: 'Kazimir Malevich'
    },
    {
        name: 'Leonardo da Vinci'
    },
    {
        name: 'Marc Chagall'
    },
    {
        name: 'Michelangelo'
    },
    {
        name: 'Pablo Picasso'
    },
    {
        name: 'Paul Cezanne'
    },
    {
        name: 'Paul Gauguin'
    },
    {
        name: 'Paul Cezanne'
    },
    {
        name: 'Peter Paul Rubens'
    },
    {
        name: 'Pierre - Auguste Renoir'
    },
    {
        name: 'Piet Mondrian'
    },
    {
        name: 'Raphael'
    },
    {
        name: 'Rembrandt'
    },
    {
        name: 'Rene Magritte'
    },
    {
        name: 'Sandro Botticelli'
    },
    {
        name: 'Titian'
    },
    {
        name: 'Vincent van Gogh'
    },
    {
        name: 'William Turner'
    },
    {
        name: 'Paul Cezanne'
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
        for (var i = 0; i < this.state.artist.length; i++) {
            var artistSuggest = {
                name: this.state.artist.artist
            }
            artists.push(artistSuggest)
        }
        console.log("artist detail", this.state.artist)
        console.log("artwork detail", this.state.artwork)
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
            placeholder: 'Enter an artist name',
            value,
            onChange: this.onChange
        };

        return (
            <>
                <NavbarForHome />
                <div style={{ background: 'url(https://www.publicdomainpictures.net/pictures/240000/velka/light-blue-wallpaper.jpg)', height: '900px', }} >
                <ul class="breadcrumb bg-transparent font-weight-bold">
                    <li class="breadcrumb-item text-light"><a href="homepage" class="text-dark font-weight-bold">Home</a></li>
                    <li class="breadcrumb-item text-light"><a href="normalmode" class="text-dark font-weight-bold">Picture Mode</a></li>
                    <li class="breadcrumb-item active">Search Artist</li>
                </ul>
                <div className="section" >
                    <Container className="shape-container py-lg-2" >
                        <h6 class="text-muted" style={{ width: "72%", margin: " 0px auto", "minWidth": "360px" }}>
                                Search Feelingarts.tk by entering the keywords of the artist name in the search box.
                        </h6>
                        {/*<Input type="text" innerRef={Input => this.input = Input} placeHolder="Please enter contents you want to search" />*/}
                            <div style={{ 'display': 'flex', "alignItems": "center", width: "72%", margin: " 0px auto" }}>
                                <div className="a_input">
                                <Autosuggest
                                    suggestions={suggestions}
                                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                    getSuggestionValue={getSuggestionValue}
                                    renderSuggestion={renderSuggestion}
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
                </div>
                <Row className="lg-12 align-center" style={{ "marginLeft": "-30px" }}>
                    <Col lg={{ span: 5, offset: 2 }}>
                            <Row justify="space-around" align="middle">
                                <ul style={{ listStyle: "none"}}>
                                {this.state.artistShow.map((item, index) => {
                                    return (
                                        <li key={item.id}>
                                            <Container>
                                                <Row>
                                                    <Col sm className="px-2 border rounded">
                                                        <ProfileCard1 toData={item}></ProfileCard1>
                                                    </Col>
                                                    <Col sm className="px-2 border-right-0 rounded">

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
    }
}

export default NormalSearch;