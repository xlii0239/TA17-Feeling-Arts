import React from "react";
import { Container, Row, Col } from "reactstrap";
import MusicInfo from "components/a17components/Music/MusicInfo.js";

class SimpleListeningPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            artworkNo: "",
            artworkName: "",
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
        this.setState({ artwork: data1 });

        const response = await fetch(queryURL);
        const data = await response.json();
        this.setState({ music: data });
        console.log("artworkNo", this.state.artworkNo)
        console.log("music data", this.state.music)
    }

    render() {
        if (this.state.artwork.length == 0) {
            return (<h1>Loading</h1>)
        }
        else {
            const artwork = this.state.artwork[0]
            return (
                <>
                    <div style={{ background: 'url(https://www.publicdomainpictures.net/pictures/240000/velka/light-blue-wallpaper.jpg)' }} >
                        <ul className="breadcrumb bg-transparent font-weight-bold" >
                            <li className="breadcrumb-item"><a href="homepage" className="text-dark font-weight-bold">Home</a></li>
                            <li className="breadcrumb-item text-light"><a href="simplemode" className="text-dark font-weight-bold">Simple Mode</a></li>
                            <li className="breadcrumb-item"><a href="simplemusic" className="text-dark font-weight-bold">Art through Music</a></li>
                            <li className="breadcrumb-item active">Listen</li>
                        </ul>
                        <div style={{ height: "1vh" }}></div>
                        <div className="page-header">
                            <Container>
                                <Row>
                                    <Col className="mr-auto">
                                        <h4 className="title font-weight-bold">{this.state.artworkName}</h4>
                                        <h5 className="name">{artwork.artist}</h5>
                                        <h5 className="font-italic" style={{ width: '100%', 'textAlign': 'justify' }}>
                                            {artwork.describe}
                                         </h5>
                                        <h5 className="title font-weight-bold" style={{ "font-family": "inherit",marginTop:"30px" }} >
                                            Listening to the identical music of the artwork with the matching description.
                                        </h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="pl-md-0" >
                                        <Row className="mx-auto">
                                            {this.state.music.map((item, index) => {
                                                let video_url = item.mLink.slice(16)
                                                return (
                                                    <Col lg="8">
                                                        <MusicInfo videoId={video_url} />
                                                        {/*<MusicInfo videoId='k58gA9ZUhFU' />*/}
                                                    </Col>
                                                )
                                            })}
                                        </Row>
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

export default SimpleListeningPage;

