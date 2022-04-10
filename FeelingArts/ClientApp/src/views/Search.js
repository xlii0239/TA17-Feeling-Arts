import React from 'react';
import { Button, Container, Row, Col, Input } from "reactstrap";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import ProfileCard1 from "components/a17components/cards/ProfileCard1.js";
import FooterForWeb from "components/a17components/footers/FooterForWeb.js";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: [],
            artistShow: []
        }
    }

    componentDidMount() {
        this.populateData();
        console.log("detail", this.state.artist)
    }

    //Change the table data
    search() {
        //var keyword = event.target.value
        var keyword = this.input.value
        if (keyword) {
            var listData = this.state.artist
            var listShow = []
            for (var i = 0; i < listData.length; i++) {
                if (!listData[i].name.search(keyword)) {
                    listShow = [...listShow, listData[i]]
                }
            }

            this.setState({
                artistShow: listShow
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

        //const Item = this.state.artistshow.map((item, id) =>
        //    <p key={id}>{ item.name}</p> 
        //)
        //this.populateData();
        //const data = this.state.artistshow;
        return (
          <>
                <NavbarForHome />
                <br></br>
                <ul class="breadcrumb bg-transparent font-weight-bold">
                    <li class="breadcrumb-item text-light"><a href="homepage">Home</a></li>
                    <li class="breadcrumb-item text-light"><a href="simplemode">Simple Mode</a></li>
                    <li class="breadcrumb-item active">Search Artist</li>
                </ul>
                <div className="section">
                        <Container className="shape-container flex align-items-center py-lg-2" >
                            <Input type="text" innerRef={Input => this.input = Input} placeHolder="Please enter artist's name" />
                            <Button color="primary"
                            type="button"
                                onClick={this.search.bind(this)}
                            >
                            Click to Search
                            </Button>
                    </Container>
                        </div>
                    <Row>
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Row justify="space-around" align="middle">
                    <ProfileCard1 toData={this.state.artistShow}></ProfileCard1>
                            {/*<TableAuthor showData={this.state.artistShow}></TableAuthor>*/}
                            </ Row>
                    </Col>
                </Row>
                <FooterForWeb />
          </>
        )
    }

    async populateData() {
        const response = await fetch('artist');
        const data = await response.json();
        this.setState({ artist: data, artistShow: data });
        console.log("detail", this.state.artist);
    }
}

export default Search;