﻿import React from 'react';

import { Button, Container, Row, Col, Input } from "reactstrap";

import {
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Progress,
    Table,
} from "reactstrap";

import TableAuthor from "views/TableAuthor.js";
import DemoNavbar from "components/navbars/DemoNavbar.js";
import NavbarPrimary from "components/a17components/navbars/NavbarPrimary.js";
import Carousel from "components/a17components/cards/Carousel.js";

class SearchArtwork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artwork: [],
            artworkShow: []
        }
    }

    componentDidMount() {
        this.populateData();
        console.log("detail", this.state.artwork)
    }

    //Change the table data
    search() {
        //var keyword = event.target.value
        var keyword = this.input.value

        if (keyword) {
            var listData = this.state.artwork
            var listShow = []
            for (var i = 0; i < listData.length; i++) {
                if (!listData[i].name.search(keyword)) {
                    listShow = [...listShow, listData[i]]
                }
            }

            this.setState({
                artworkShow: listShow
            })
        }
        else {
            this.setState({
                artworkShow: this.state.artwork
            })
        }
        console.log("from changeFunction", this.state.artworkShow);
    }

    render() {

        //const Item = this.state.artistshow.map((item, id) =>
        //    <p key={id}>{ item.name}</p> 
        //)
        //this.populateData();
        //const data = this.state.artistshow;
        return (
          <>
            <NavbarPrimary/>
                
                <div className="section section-hero section-shaped">
                    <div className="page-header" >
                        <img
                            alt="..."
                            className="bg-image"
                            src={require("assets/img/ill/index_bg.svg")}
                        ></img>
                        <Container className="shape-container flex align-items-center py-lg-2">
                            <Input type="text" innerRef={Input => this.input = Input} placeHolder="Please enter artist's name" />
                            <Button color="primary"
                                type="button"
                                align="center"
                                onClick={this.search.bind(this)}
                            >
                                Click to Search
                            </Button>
                            <Carousel toData={this.state.artworkShow}></Carousel>
                            {/*<TableAuthor showData={this.state.artistShow}></TableAuthor>*/}
                        </Container>
                        
                    </div>
                </div>
          </>
        )
    }

    async populateData() {
        const response = await fetch('artwork');
        const data = await response.json();
        this.setState({ artwork: data, artworkShow: data });
        console.log("detail", this.state.artwork);
    }
}

export default SearchArtwork;