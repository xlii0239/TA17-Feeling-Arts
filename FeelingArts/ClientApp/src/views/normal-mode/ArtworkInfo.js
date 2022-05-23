import React from 'react';
import { Button, Container, Card, CardBody, Row, Col, Input, CardTitle} from "reactstrap";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import ArtworkResultShow from 'views/simple-search/ArtworkResultShow.js';
import ArtworkBlog from 'components/a17components/blogs/ArtworkBlog.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faCube } from '@fortawesome/fontawesome-free-solid';


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
            artwork: [],
            model: [],
            music: [],
            artworkNo: "",
            modelNo: ""
        }
    }

    componentDidMount() {
        this.populateData();
        console.log("detail", this.state.artist)
    }


    render() {
        if (this.state.artwork.length == 0) {
            return (<h1>Loading</h1>)
        }

        else {
            const artwork = this.state.artwork[0]
            console.log("artwork", artwork)
            const imgURL = 'https://storage.googleapis.com/feeling-arts-data/artwork-img/' + artwork.imageNo + '.jpg'

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
                        <section className="blogs-3">
                            <Container>
                                <Row>
                                    <Col className="mx-auto" lg="10" md="8">5
                                        <h2 className="title mb-5 font-weight-bold">On view</h2>
                                        <Card className="card-blog card-plain blog-horizontal mb-5">
                                            <Row>
                                                <Col lg="5">
                                                    <div className="card-image shadow">
                                                        <a>
                                                            <img
                                                                alt="artwork photo"
                                                                className="img rounded"
                                                                src={imgURL}
                                                                style={{ weight: '500px', height: '400px' }}
                                                            ></img>
                                                        </a>
                                                    </div>
                                                </Col>
                                                <Col lg="7">
                                                    <CardBody>
                                                        <CardTitle tag="h3">
                                                            {artwork.artwork}
                                                        </CardTitle>
                                                        <p className="card-description">
                                                            {artwork.describe}{" "}
                                                        </p>
                                                        <div className="author">
                                                            <img
                                                                alt="..."
                                                                className="avatar img-raised"
                                                                src={require("assets/img/faces/team-1.jpg")}
                                                            ></img>
                                                            <div className="text">
                                                                <span className="name">{artwork.artist}</span>
                                                                <div className="meta">{artwork.createYear}</div>
                                                            </div>
                                                        </div>
                                                        <Row style={{ 'margin-top': "40px" }}>
                                                            <div>
                                                                <a href={"/normalmusiclisten" + "?artwork_no=" + artwork.imageNo + "&artwork_name=" + artwork.artwork}
                                                                    style={{ border: '1px solid', 'text-align': 'center', display: 'block', cursor: 'pointer', color: " #fff", "backgroundColor": "#5e72e4", "boxShadow": "0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)", "borderRadius": "5px", padding: "5px 10px" }}><FontAwesomeIcon icon={faMusic} alt="music icon" />&nbsp;<span style={{ width: "5px" }}></span>Listen Music</a>
                                                                <div style={{ height: '20px' }}></div>
                                                                <a href={"/3d-model" + "?model_no=" + artwork.modelNo + "&img_no=" + artwork.imageNo}
                                                                    style={{ border: '1px solid', 'text-align': 'center', display: 'block', color: " #fff", "backgroundColor": "#5e72e4", "boxShadow": "0 4px 6px rgb(50 50 93 / 11%), 0 4px 6px rgb(0 0 0 / 8%)", "borderRadius": "5px", padding: "5px 10px" }}><FontAwesomeIcon icon={faCube} alt="3d icon" />&nbsp;<span style={{ width: "5px" }}></span>3D &nbsp; Touch</a>
                                                            </div>
                                                        </Row>
                                                    </CardBody>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                    </div>
                </>
            )
        }
        
    }

    async populateData() {
        const search = this.props.location.search;
        const artworkNo = new URLSearchParams(search).get("artwork_no");
        const modelNo = new URLSearchParams(search).get("model_no");
        

        this.setState({ artworkNo: artworkNo });
        this.setState({ modelNo: modelNo });

        let musicQueryURL = 'music/' + artworkNo;
        let modelQueryURL = 'threedimentionmodel/' + artworkNo;
        let artworkQueryURL = 'artwork/' + artworkNo;

        const musicResponse = await fetch(musicQueryURL);
        const modelResponse = await fetch(modelQueryURL);
        const artworkResponse = await fetch(artworkQueryURL);

        const data1 = await artworkResponse.json();
        const data2 = await musicResponse.json();
        const data3 = await modelResponse.json();
        

        this.setState({ artwork: data1 });
        this.setState({ music: data2 });
        this.setState({ model: data3 });
        

        //const url_img = 'https://storage.googleapis.com/feeling-arts-data/artwork-img/' + artworkNo + '.jpg'
        //this.setState({ artworkImageURL: url_img });

        console.log("artwork", this.state.artwork)
        console.log("music data", this.state.music)
        console.log("model data", this.state.model)
    }
}

export default ArtworkInfo;