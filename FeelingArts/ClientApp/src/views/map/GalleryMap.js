import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { Button, Card, CardBody, CardTitle, Container, Row, Col, Input } from "reactstrap";
import Geocode from "react-geocode";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import 'assets/css/common.css'

const mapStyles = {
    position: 'relative',
    width: '70%',
    height: '70%'
};

class GalleryMap extends Component {
    constructor() {
        super();
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            galleries: [
                {
                    name: "Australias national museum of screen culture",
                    lat: -37.8179789,
                    lng: 144.9690576
                },
                {
                    name: "Textile Art Museum Australia",
                    lat: -37.287256,
                    lng: 142.9570123
                },
                {
                    name: "Bendigo Art Gallery",
                    lat: -36.75721,
                    lng: 144.2769939
                }
            ],
            galleriesData: [],
            userLocation: {
                lat: -37.81461034113269,
                lng: 144.96660422326192
            }

        };
    }

    componentDidMount() {


        this.populateData();
    }

    async populateData() {
        const response = await fetch('gallery');

        const data = await response.json();

        //Geocode.setApiKey("AIzaSyBkRVZ1kstmg-vm8lz5uGlLA48ibeCbkO0");
        //let geoResponse = Geocode.fromAddress("82A Wellington Street, Collingwood VIC 3066, Australia")

        //let gitems = []

        //for (let i = 0; i < data.length; i++) {
        //    let gallery = data[i]

        //    console.log("gallery.address", gallery.address)

        //    const geoResponse = await Geocode.fromAddress(gallery.address)

        //    console.log("geoResponse", geoResponse)

        //    const { lat, lng } = geoResponse.results[0].geometry.location;
        //    let item = {
        //        name: gallery.galleryName,
        //        lat: lat,
        //        lng: lng
        //    }
        //    gitems.push(item)

        //}


        this.setState({ galleriesData: data });

        console.log("Original Gallery Data", this.state.galleriesData)


    }

    async decodeAddress(address) {
        Geocode.setApiKey("AIzaSyBkRVZ1kstmg-vm8lz5uGlLA48ibeCbkO0");
        Geocode.setRegion("au");
        let geoResponse = await Geocode.fromAddress(address)
        const { lat, lng } = geoResponse.results[0].geometry.location;

        let newLocation = {
            lat: lat,
            lng: lng
        }

        this.setState({ userLocation: newLocation })
    }

    searchLocation() {
        const keyword = this.input.value
        this.decodeAddress(keyword)
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onInfoWindowClose = () => {
        this.setState({
            activeMarker: null,
            showingInfoWindow: false
        });

    }


    onMapClicked = () => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    currentLocationClicked = () => {
        const getUserCurrentLocation = position => {
            const location = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }

            this.setState({ userLocation: location })
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getUserCurrentLocation)
        }
    }

    render() {
        if (!this.props.loaded) return <div>Loading...</div>;

        return (
            <>
                <NavbarForHome />
                <div style={{ background: 'url(https://www.publicdomainpictures.net/pictures/240000/velka/light-blue-wallpaper.jpg)', height: '900px', }} >

                <ul className="breadcrumb bg-transparent font-weight-bold">
                    <li className="breadcrumb-item"><a href="homepage" className="text-dark font-weight-bold">Home</a></li>
                    <li className="breadcrumb-item active">Gallery Map</li>
                </ul>
                <div>
                    <Container>
                        <Row style={{ 'marginBottom': '15px' }}>
                            <Col className="text-center mx-auto" md="8" lg="12">
                                <h4 className="display-4">Find galleries near me.</h4>
                            </Col>
                            <Col className="text-center mx-auto" lg="12">
                                <h5> Discover various information about the gallery by clicking on the gallery's tab on the map.</h5>
                            </Col>
                            <Col style={{ 'display': 'flex', "alignItems": "center", width: "72%", margin: " 0px auto"}}>
                                    <Input style={{ width: "60%", minWidth: "185px" }} type="text" innerRef={Input => this.input = Input} placeHolder="Search galleries by city, zip code or address" />
                                    <div className="search_btn" style={{ minWidth:"111px" }}
                                        onClick={this.searchLocation.bind(this)}
                                    >
                                        Click to search
                                    </div>
                                </Col>
                                <Col className="fa-solid fa-child-reaching btn"
                                    onClick={this.currentLocationClicked}
                                >
                                    &nbsp;&nbsp;my location

                                </Col>
                            </Row>
                            <Map
                                google={this.props.google}
                                zoom={14}
                                style={mapStyles}
                                center={this.state.userLocation}
                            >

                                {this.state.galleriesData.map((item, index) => {
                                    return (
                                        <Marker
                                            name={item.galleryName + "|" + item.website
                                                + "|" + item.category + "|" + item.address
                                                + "|" + item.phoneNumber + "|" + item.wheelSupport
                                                + "|" + item.blindSupport + "|" + item.audioSupport
                                                + "|" + item.guideDogSupport + "|" + item.otherSupport
                                                + "|" + item.state}
                                            onClick={this.onMarkerClick}
                                            position={{ lat: item.lat, lng: item.lng }}
                                        />
                                    )
                                })}

                                <InfoWindow
                                    marker={this.state.activeMarker}
                                    onClose={this.onInfoWindowClose}
                                    visible={this.state.showingInfoWindow}>

                                    <div>
                                        {(() => {
                                            if (this.state.selectedPlace.name) {
                                                let imageURL = 'https://storage.googleapis.com/feeling-arts-data/app-img-source/map-infowindow-background.jpg'
                                                return (
                                                    <div>
                                                        <Card
                                                            style={{
                                                                backgroundImage: "url(" + imageURL + ")",
                                                            }}
                                                        >
                                                            <CardBody className="py-5">

                                                                <h4 className="text-dark text-capitalize font-weight-bold">
                                                                    {this.state.selectedPlace.name.split("|")[0]}
                                                                </h4>
                                                                <h4 className="text-dark text-capitalize font-weight-bold">
                                                                    {this.state.selectedPlace.name.split("|")[2]}
                                                                </h4>
                                                                <p className="text-dark description mt-3 font-weight-bold">
                                                                    <i className="fa fa-home" aria-hidden="true"></i>
                                                                    &nbsp;
                                                                    {"Address: " + this.state.selectedPlace.name.split("|")[3]}
                                                                </p>
                                                                <p className="text-dark description mt-3 font-weight-bold">
                                                                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                                                                    &nbsp;
                                                                    {"Phone: " + this.state.selectedPlace.name.split("|")[4]}
                                                                </p>
                                                                <p className="text-dark description mt-3 font-weight-bold">
                                                                    <i className="fa fa-wheelchair" aria-hidden="true"></i>
                                                                    &nbsp;
                                                                    {"Wheel Support: " + this.state.selectedPlace.name.split("|")[5]}
                                                                </p>
                                                                <p className="text-dark description mt-3 font-weight-bold">
                                                                    <i className="fa fa-blind" aria-hidden="true"></i>
                                                                    &nbsp;&nbsp;
                                                                    {"Blind Support: " + this.state.selectedPlace.name.split("|")[6]}
                                                                </p>
                                                                <p className="text-dark description mt-3 font-weight-bold">
                                                                    <i className="fa fa-volume-up" aria-hidden="true"></i>
                                                                    &nbsp;
                                                                    {"Audio Support: " + this.state.selectedPlace.name.split("|")[7]}
                                                                </p>
                                                                <p className="text-dark description mt-3 font-weight-bold">
                                                                    <i className="fas fa-dog"></i>
                                                                    &nbsp;
                                                                    {"Guide Dog Support: " + this.state.selectedPlace.name.split("|")[8]}
                                                                </p>
                                                                <p className="text-dark description mt-3 font-weight-bold">
                                                                    <i className='fas fa-hands-helping'></i>
                                                                    &nbsp;
                                                                    {"Other Support: " + this.state.selectedPlace.name.split("|")[9]}
                                                                </p>
                                                                <Button
                                                                    className="mt-4"
                                                                    color="secondary"
                                                                    href={this.state.selectedPlace.name.split("|")[1]}
                                                                    onClick={(e) => e.button()}
                                                                >
                                                                    Go to Website
                                                                </Button>
                                                            </CardBody>
                                                        </Card>
                                                    </div>

                                                )
                                            }
                                            else {
                                                return (
                                                    <h1>name has no length</h1>
                                                )
                                            }
                                        })()}

                                        {/*<h2>{this.state.selectedPlace.name}</h2>*/}
                                        {/*<h1>Website</h1>*/}
                                        {/*<h2>{this.state.selectedPlace.name}</h2>*/}
                                        {/*<h1>Category</h1>*/}
                                        {/*<h2>{this.state.selectedPlace.name}</h2>*/}
                                    </div>
                                </InfoWindow>
                            </Map>
                        </Container>
                    </div>

                    <div className="blogs-6">
                        <Row className="justify-content-center mt-5">
                            <Col lg="4">

                            </Col>
                        </Row>
                    </div>
                </div>
            </>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBkRVZ1kstmg-vm8lz5uGlLA48ibeCbkO0'
})(GalleryMap);