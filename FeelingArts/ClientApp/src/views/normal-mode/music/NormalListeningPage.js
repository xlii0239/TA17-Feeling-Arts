import React from "react";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import { Container, Row, Col, Button } from "reactstrap";
import MusicInfo from "components/a17components/Music/MusicInfo.js";
import { useLocation } from "react-router-dom";



class NromalListeningPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            artworkNo: "",
            artworkName: "",
            artworkImageURL: "",
            music: [],
            artwork: []
        }
    }

    componentDidMount() {
        this.populateData();
    }

    async populateData() {
        const search = this.props.location.search;
        const artworkNo = new URLSearchParams(search).get("artwork_no");
        const artworkName = new URLSearchParams(search).get("artwork_name");

        this.setState({ artworkNo: artworkNo });
        this.setState({ artworkName: artworkName });

        let queryURL = 'music/' + artworkNo;

        let artworkQueryURL = 'artwork/' + artworkNo;
        const artworkResponse = await fetch(artworkQueryURL);
        const data1 = await artworkResponse.json();

        const response = await fetch(queryURL);
        const data = await response.json();
        this.setState({ music: data });
        this.setState({ artwork: data1 });

        const url_img = 'https://storage.googleapis.com/feeling-arts-data/artwork-img/' + artworkNo + '.jpg'
        this.setState({ artworkImageURL: url_img });

        console.log("artworkNo", this.state.artworkNo)
        console.log("music data", this.state.music)
    }

    render() {
        if (this.state.artwork.length == 0) {
            return (<h1>Loading</h1>)
        }

        else {
            return (
                <>
                    <NavbarForHome />
                    <div style={{ background: 'url(https://www.publicdomainpictures.net/pictures/240000/velka/light-blue-wallpaper.jpg)', height: '1000px', }} >
                        <ul className="breadcrumb bg-transparent font-weight-bold ">
                            <li className="breadcrumb-item"><a href="homepage" className="text-dark font-weight-bold">Home</a></li>
                            <li className="breadcrumb-item text-light"><a href="normalmode" className="text-dark font-weight-bold">Picture Mode</a></li>
                            <li className="breadcrumb-item"><a href="normalmusic" className="text-dark font-weight-bold">Art through Music</a></li>
                            <li className="breadcrumb-item active">Listen</li>
                        </ul>
                        <div className="section">
                            <Container>
                                <Row>
                                    <Col>
                                        <Col className="mr-auto">
                                            <h4 className="title font-weight-bold">{this.state.artworkName}</h4>
                                            <h5 className="font-italic">{"Created by " + this.state.artwork[0].artist}</h5>
                                            <h5 className="font-italic">{this.state.artwork[0].describe}</h5>
                                        </Col>
                                        <img
                                            alt="..."
                                            className="img-fluid rounded shadow-lg"
                                            src={this.state.artworkImageURL}
                                            style={{ height: "500px", weight: "600px" }}
                                        >
                                        </img>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="pl-md-2" >
                                        <h5 className="font-italic" style={{ height: '60px', 'marginTop': '40px' }}>
                                            Listening to the identical music of the artwork with the matching description.
                                        </h5>
                                        {this.state.music.map((item, index) => {
                                            let video_url = item.mLink.slice(16)
                                            return (
                                                <Col lg="8">
                                                    <MusicInfo videoId={video_url} />
                                                    {/*<MusicInfo videoId='k58gA9ZUhFU' />*/}
                                                </Col>
                                            )
                                        })}
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </>
            )
        }
    }
}

export default NromalListeningPage;

