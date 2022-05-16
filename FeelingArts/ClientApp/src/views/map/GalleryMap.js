import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { Button, Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import Geocode from "react-geocode";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import { Link } from "react-router-dom";

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
                lat: 0,
                lng: 0
            }

        };
    }

    


    componentDidMount() {

        const getUserCurrentLocation = position => {
            const location = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }

            this.setState({ userLocation: location })
        }

        navigator.geolocation.getCurrentPosition(getUserCurrentLocation)
        

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

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onInfoWindowClose = () =>
        this.setState({
            activeMarker: null,
            showingInfoWindow: false
        });

    onMapClicked = () => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {
        if (!this.props.loaded) return <div>Loading...</div>;
        if (this.state.userLocation.lat == 0) return <div>Loading...</div>

        console.log("User Location", this.state.userLocation)

        return (
            <>
                <NavbarForHome />
                <ul className="breadcrumb bg-transparent font-weight-bold">
                    <li className="breadcrumb-item"><a href="homepage" className="text-dark font-weight-bold">Home</a></li>
                    <li className="breadcrumb-item active">Galleries Info</li>
                </ul>

                <div>
                    <Container>
                        <Map
                            google={this.props.google}
                            zoom={14}
                            style={mapStyles}
                            initialCenter={{
                                lat: this.state.userLocation.lat,
                                lng: this.state.userLocation.lng
                            }}
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
                                                    <Card className="card-background"
                                                        style={{
                                                            backgroundImage: "url(" + imageURL + ")",
                                                        }}
                                                    >
                                                        <CardBody className="py-5">
                                                            <div className="icon icon-shape icon-shape-dark rounded-circle mb-4">
                                                                <i className="ni ni-palette"></i>
                                                            </div>
                                                            
                                                            <h4 className="text-dark text-capitalize font-weight-bold">
                                                                {this.state.selectedPlace.name.split("|")[0]}
                                                            </h4>
                                                            <h4 className="text-dark text-capitalize font-weight-bold">
                                                                {this.state.selectedPlace.name.split("|")[2]}
                                                            </h4>
                                                            <p className="text-dark description mt-3 font-weight-bold">
                                                                {"Address: " + this.state.selectedPlace.name.split("|")[3] } 
                                                            </p>
                                                            <p className="text-dark description mt-3 font-weight-bold">
                                                                {"Phone: "+ this.state.selectedPlace.name.split("|")[4]}
                                                            </p>
                                                            <p className="text-dark description mt-3 font-weight-bold">
                                                                {"Wheel Support: " + this.state.selectedPlace.name.split("|")[5]}
                                                            </p>
                                                            <p className="text-dark description mt-3 font-weight-bold">
                                                                {"Blind Support: " + this.state.selectedPlace.name.split("|")[6]}
                                                            </p>
                                                            <p className="text-dark description mt-3 font-weight-bold">
                                                                {"Audio Support: " + this.state.selectedPlace.name.split("|")[7]}
                                                            </p>
                                                            <p className="text-dark description mt-3 font-weight-bold">
                                                                {"Guide Dog Support: " + this.state.selectedPlace.name.split("|")[8]}
                                                            </p>
                                                            <p className="text-dark description mt-3 font-weight-bold">
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
            </>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBkRVZ1kstmg-vm8lz5uGlLA48ibeCbkO0'
})(GalleryMap);