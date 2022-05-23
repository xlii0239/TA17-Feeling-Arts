import React from 'react';
import { Button, Container, Card, CardBody, Row, Col, Input } from "reactstrap";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import ArtworkResultShow from 'views/simple-search/ArtworkResultShow.js';
import ArtworkBlog from 'components/a17components/blogs/ArtworkBlog.js';


const handleClickMusic = (e, imageNo, artworkName) => {

    window.location = "/normalmusiclisten" + "?artwork_no=" + imageNo + "&artwork_name=" + artworkName;
    //console.log("modelName from three model page", modelName)
};

const handleClick3dModel = (e, modelNo, imgNo) => {

    window.location = "/3d-model" + "?model_no=" + modelNo + "&img_no=" + imgNo;
    //console.log("modelName from three model page", modelName)
};


class ArtworkInfo extends React.Component {
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
                <div style={{ background: 'url(https://www.publicdomainpictures.net/pictures/240000/velka/light-blue-wallpaper.jpg)', height: '1000px', }} >
                <ul class="breadcrumb bg-transparent font-weight-bold">
                    <li class="breadcrumb-item"><a href="homepage" class="text-dark font-weight-bold">Home</a></li>
                    <li class="breadcrumb-item"><a href="normalmode" class="text-dark font-weight-bold">Picture Mode</a></li>
                    <li class="breadcrumb-item"><a href="normalsearchartwork" class="text-dark font-weight-bold">Search Artwork</a></li>
                    <li class="breadcrumb-item active">Artwork Information</li>
                </ul>
                <ArtworkBlog />
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

export default ArtworkInfo;